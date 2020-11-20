<?php

namespace GT3\ThemesCore;

defined('ABSPATH') OR exit;

class Lazy_Images {
	private static $instance = null;

	/** @return Lazy_Images */
	public static function instance(){
		if(is_null(static::$instance)) {
			static::$instance = new static();
		}

		return static::$instance;
	}

	private function __construct(){
		if(is_admin()) {
			return;
		}

		add_filter('wp_kses_allowed_html', array( $this, 'allow_lazy_attributes' ));
		add_action('wp_footer', array($this, 'wp_footer'));
	}

	public function setup_filters(){
		add_filter('jetpack_lazy_images_skip_image_with_attributes', '__return_true');
		add_filter('wp_get_attachment_image_attributes', array( $this, 'process_image_attributes' ), 0, 3);
	}

	public function remove_filters(){
		remove_filter('jetpack_lazy_images_skip_image_with_attributes', '__return_true');
		remove_filter('wp_get_attachment_image_attributes', array( $this, 'process_image_attributes' ), 0);
	}

	public function allow_lazy_attributes($allowed_tags){
		if(!isset($allowed_tags['img'])) {
			return $allowed_tags;
		}

		// But, if images are allowed, ensure that our attributes are allowed!
		$img_attributes = array_merge(
			$allowed_tags['img'],
			array(
				'data-lazy-src'    => 1,
				'data-lazy-srcset' => 1,
				'data-lazy-sizes'  => 1,
			)
		);

		$allowed_tags['img'] = $img_attributes;

		return $allowed_tags;
	}

	public function should_skip_image_with_blacklisted_class($classes){
		$blacklisted_classes = array();

		$blacklisted_classes = apply_filters('gt3/core/lazy_images_blacklisted_classes', $blacklisted_classes);

		if(!is_array($blacklisted_classes) || empty($blacklisted_classes)) {
			return false;
		}

		foreach($blacklisted_classes as $class) {
			if(false !== strpos($classes, $class)) {
				return true;
			}
		}

		return false;
	}

	/**
	 * @param array   $attributes
	 * @param WP_Post $attachment
	 *
	 * @return array
	 */
	public function process_image_attributes($attributes, $attachment, $size){
		if(empty($attributes['src'])) {
			return $attributes;
		}

		if(!empty($attributes['class']) && $this->should_skip_image_with_blacklisted_class($attributes['class'])) {
			return $attributes;
		}

		$old_attributes = $attributes;

		foreach(array( 'srcset', 'sizes' ) as $attribute) {
			if(isset($old_attributes[$attribute])) {
				$attributes["data-lazy-$attribute"] = $old_attributes[$attribute];
				unset($attributes[$attribute]);
			}
		}

		$attributes['data-lazy-src'] = esc_url_raw(add_query_arg('is-pending-load', true, $attributes['src']));

		$attributes['srcset'] = $this->get_placeholder_image($attachment->ID, $size);
		$attributes['class']  = sprintf(
			'%s gt3-core-lazy-image',
			empty($old_attributes['class'])
				? ''
				: $old_attributes['class']
		);

		self::remove_filters();

		return apply_filters('gt3pg_pro_lazy_images_new_attributes', $attributes);
	}

	public static function get_placeholder_image($id, $size = 'full'){
		$placeholder = get_post_meta($id, '_gt3-core-lazy-placeholder', true);
		if('' === $placeholder) {
			$placeholder = static::transparentImage($id, $size);
			update_post_meta($id, '_gt3-core-lazy-placeholder', $placeholder);
		}

		return apply_filters(
			'lazyload_images_placeholder_image',
			$placeholder
		);
	}

	protected static function transparentImage($id, $size){
		list ($url, $width, $height) = image_downsize($id, $size);
		$w     = round($width/10);
		$image = imagecreatetruecolor($w, round($w/(round($width/$height, 2)), 2));
		imagesavealpha($image, true);
		imagealphablending($image, false);
		$color = imagecolorallocatealpha($image, 0, 0, 0, 127); //fill transparent back
		imagefill($image, 0, 0, $color);
		ob_start();
		imagepng($image, null, 9);
		$buffer      = base64_encode(ob_get_clean());
		$placeholder = 'data:image/png;base64,'.($buffer);

		return $placeholder;
	}

	public function wp_footer(){
		static $loaded = 0;
		if($loaded++) {
			return;
		}

		?>
		<style>
			img.gt3-core-lazy-image {
				opacity: 0;
				visibility: visible;
				transition: opacity .4s linear, visibility .4s linear;
			}
			img.gt3-core-lazy-image.gt3-core-lazy-image--loaded {
				opacity: 1;
				visibility: visible;
			}
		</style>
		<script>
			!function(){var t=document.body.querySelectorAll(".gt3-core-lazy-image");t&&function(t,e){switch(void 0===e&&(e={}),!0){case t instanceof HTMLElement:t=[t];break;case t instanceof HTMLCollection:case t instanceof NodeList:t=Array.from(t)}t=t.filter(function(t){return!t.lazyLoading}),e=Object.assign({loadHandle:s,errorHandler:s,intersectionHandler:s,force:!1},e);var o,r={rootMargin:"200px 0px",threshold:.1},i=t.length,a=e.loadHandle,n=(e.errorHandler,e.intersectionHandler),c=e.force;function s(){}function l(t){for(var e=0;e<t.length;e++){var r=t[e];0<r.intersectionRatio&&r.isIntersecting&&(i--,n(r.target),!c&&r.target&&d(r.target))}0===i&&o.disconnect()}function d(t){("IMG"!==t.tagName?t.querySelectorAll("img.gt3-core-lazy-image:not(.gt3-core-lazy-image--loaded)"):[t]).forEach(u)}function u(t){var e,r,o,i,n=t;e=t.getAttribute("data-lazy-srcset"),r=t.getAttribute("data-lazy-sizes"),o=t.getAttribute("alt"),(i=document.createElement("img")).onload=function(t){i.onload=void 0,i.onerror=void 0,n.parentNode.insertBefore(i,n),n.remove(),setTimeout(a,0,t,i),setTimeout(function(){i.classList.add("gt3-core-lazy-image--loaded"),i.setAttribute("data-lazy-loaded",1)},200)},i.onerror=function(t){i.onload=void 0,i.onerror=void 0,i.remove(),setTimeout(a,0,t,n)},i.className=t.className,i.setAttribute("width",t.getAttribute("width")),i.setAttribute("height",t.getAttribute("height")),e?i.setAttribute("srcset",e):(i.removeAttribute("srcset"),i.setAttribute("src",t.getAttribute("src"))),r&&i.setAttribute("sizes",r),o&&i.setAttribute("alt",o)}o=new IntersectionObserver(l,r),t.forEach(function(t){t.lazyLoading=!0,o.observe(t)}),c&&function(t){t.forEach(d)}(t)}(t)}();
		</script>

		<?php
	}

}
