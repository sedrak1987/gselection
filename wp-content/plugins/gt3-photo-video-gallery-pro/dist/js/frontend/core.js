!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=349)}({25:function(e,t,n){"use strict";n.d(t,"a",(function(){return D}));var r=Object.defineProperty;function o(e,t,n){var o=n.configurable,i=n.enumerable,a=n.initializer,u=n.value;return{configurable:o,enumerable:i,get:function(){if(this!==e){var n=a?a.call(this):u;return r(this,t,{configurable:o,enumerable:i,writable:!0,value:n}),n}},set:E(t)}}function i(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return w(o,t)}var a,u,c,s,l,d,f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};function h(e,t,n,r){n&&Object.defineProperty(e,t,{enumerable:n.enumerable,configurable:n.configurable,writable:n.writable,value:n.initializer?n.initializer.call(r):void 0})}function p(e,t,n,r,o){var i={};return Object.keys(r).forEach((function(e){i[e]=r[e]})),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=n.slice().reverse().reduce((function(n,r){return r(e,t,n)||n}),i),o&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(o):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(e,t,i),i=null),i}function y(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}var v=Object.defineProperty,b=Object.getOwnPropertyDescriptor,g=Object.getOwnPropertyNames,m=Object.getOwnPropertySymbols;function w(e,t){return function(e){if(!e||!e.hasOwnProperty)return!1;for(var t=["value","initializer","get","set"],n=0,r=t.length;n<r;n++)if(e.hasOwnProperty(t[n]))return!0;return!1}(t[t.length-1])?e.apply(void 0,y(t).concat([[]])):function(){return e.apply(void 0,y(Array.prototype.slice.call(arguments)).concat([t]))}}var O=(u=p((a=function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),h(this,"debounceTimeoutIds",u,this),h(this,"throttleTimeoutIds",c,this),h(this,"throttlePreviousTimestamps",s,this),h(this,"throttleTrailingArgs",l,this),h(this,"profileLastRan",d,this)}).prototype,"debounceTimeoutIds",[i],{enumerable:!0,initializer:function(){return{}}}),c=p(a.prototype,"throttleTimeoutIds",[i],{enumerable:!0,initializer:function(){return{}}}),s=p(a.prototype,"throttlePreviousTimestamps",[i],{enumerable:!0,initializer:function(){return{}}}),l=p(a.prototype,"throttleTrailingArgs",[i],{enumerable:!0,initializer:function(){return null}}),d=p(a.prototype,"profileLastRan",[i],{enumerable:!0,initializer:function(){return null}}),a),_="function"==typeof Symbol?Symbol("__core_decorators__"):"__core_decorators__";function T(e){return!1===e.hasOwnProperty(_)&&v(e,_,{value:new O}),e[_]}var A=m?function(e){return g(e).concat(m(e))}:g;function j(e){var t={};return A(e).forEach((function(n){return t[n]=b(e,n)})),t}function E(e){return function(t){return Object.defineProperty(this,e,{configurable:!0,writable:!0,enumerable:!0,value:t}),t}}function S(e,t){return e.bind?e.bind(t):function(){return e.apply(t,arguments)}}var P="object"===("undefined"==typeof console?"undefined":f(console))&&console&&"function"==typeof console.warn?S(console.warn,console):function(){};var k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},z=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var x=/^function ([_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*)?(\([^\)]*\))[\s\S]+$/;!function(){function e(t,n,r,o){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.parentKlass=t,this.childKlass=n,this.parentDescriptor=r,this.childDescriptor=o}z(e,[{key:"_getTopic",value:function(e){return void 0===e?null:"value"in e?e.value:"get"in e?e.get:"set"in e?e.set:void 0}},{key:"_extractTopicSignature",value:function(e){switch(void 0===e?"undefined":k(e)){case"function":return this._extractFunctionSignature(e);default:return this.key}}},{key:"_extractFunctionSignature",value:function(e){var t=this;return e.toString().replace(x,(function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t.key,r=arguments[2];return n+r}))}},{key:"key",get:function(){return this.childDescriptor.key}},{key:"parentNotation",get:function(){return this.parentKlass.constructor.name+"#"+this.parentPropertySignature}},{key:"childNotation",get:function(){return this.childKlass.constructor.name+"#"+this.childPropertySignature}},{key:"parentTopic",get:function(){return this._getTopic(this.parentDescriptor)}},{key:"childTopic",get:function(){return this._getTopic(this.childDescriptor)}},{key:"parentPropertySignature",get:function(){return this._extractTopicSignature(this.parentTopic)}},{key:"childPropertySignature",get:function(){return this._extractTopicSignature(this.childTopic)}}]),z(e,[{key:"assert",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";!0!==e&&this.error("{child} does not properly override {parent}"+t)}},{key:"error",value:function(e){var t=this;throw e=e.replace("{parent}",(function(e){return t.parentNotation})).replace("{child}",(function(e){return t.childNotation})),new SyntaxError(e)}}])}();Object.assign;Object.assign,"function"==typeof Symbol&&Symbol.iterator;Object.assign;function M(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}var I=Object.defineProperty,G=Object.getPrototypeOf,F=void 0;function L(e){for(var t=j(e.prototype),n=A(t),r=0,o=n.length;r<o;r++){var i=n[r],a=t[i];"function"==typeof a.value&&"constructor"!==i&&I(e.prototype,i,H(e.prototype,i,a))}}function H(e,t,n){var r=n.value,o=n.configurable,i=n.enumerable;if("function"!=typeof r)throw new SyntaxError("@autobind can only be used on functions, not: "+r);var a=e.constructor;return{configurable:o,enumerable:i,get:function(){if(this===e)return r;if(this.constructor!==a&&G(this).constructor===a)return r;if(this.constructor!==a&&t in this.constructor.prototype)return function(e,t){if("undefined"==typeof WeakMap)throw new Error("Using @autobind on "+t.name+"() requires WeakMap support due to its use of super."+t.name+"()\n      See https://github.com/jayphelps/core-decorators.js/issues/20");F||(F=new WeakMap),!1===F.has(e)&&F.set(e,new WeakMap);var n=F.get(e);return!1===n.has(t)&&n.set(t,S(t,e)),n.get(t)}(this,r);var n=S(r,this);return I(this,t,{configurable:!0,writable:!0,enumerable:!1,value:n}),n},set:E(t)}}function C(e){return 1===e.length?L.apply(void 0,M(e)):H.apply(void 0,M(e))}function D(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return 0===t.length?function(){return C(arguments)}:C(t)}Object.assign;Object.assign;Object.defineProperty;"function"==typeof Symbol&&Symbol.iterator,Object.defineProperty,Object.getPrototypeOf;Object.assign;var N={};console.time&&console.time.bind(console),console.timeEnd&&console.timeEnd.bind(console);Object.assign,Object.getPrototypeOf,Object.getOwnPropertyDescriptor;var W=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},B=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var a,u=e[Symbol.iterator]();!(r=(a=u.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{!r&&u.return&&u.return()}finally{if(o)throw i}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},R=(console,{profile:console.profile?S(console.profile,console):function(){},profileEnd:console.profileEnd?S(console.profileEnd,console):function(){},warn:P});function Z(e,t,n,r){var o=B(r,3),i=o[0],a=void 0===i?null:i,u=o[1],c=void 0!==u&&u,s=o[2],l=void 0===s?R:s;if(!U.__enabled)return U.__warned||(l.warn("console.profile is not supported. All @profile decorators are disabled."),U.__warned=!0),n;var d=n.value;if(null===a&&(a=e.constructor.name+"."+t),"function"!=typeof d)throw new SyntaxError("@profile can only be used on functions, not: "+d);return W({},n,{value:function(){var e=Date.now(),t=T(this);(!0===c&&!t.profileLastRan||!1===c||"number"==typeof c&&e-t.profileLastRan>c||"function"==typeof c&&c.apply(this,arguments))&&(l.profile(a),t.profileLastRan=e);try{return d.apply(this,arguments)}finally{l.profileEnd(a)}}})}function U(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return w(Z,t)}U.__enabled=!!console.profile,U.__warned=!1;Object.defineProperty,Object.getOwnPropertyDescriptor},334:function(e,t){GT3.LazyLoad=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e.length||(e=[e]),e instanceof Array||(e=Array.from(e)),e=e.filter((function(e){return!e.lazyLoading}));var n,r={rootMargin:"200px 0px",threshold:.1},o=e.length,i=t.loadHandle,a=void 0===i?d:i,u=(t.errorHandler,t.intersectionHandler),c=void 0===u?d:u,s=t.force,l=void 0!==s&&s;function d(){}function f(){n=new IntersectionObserver(p,r),e.forEach((function(e){e.lazyLoading=!0,n.observe(e)})),l&&h(e)}function h(e){e.forEach(y)}function p(e){var t;for(t=0;t<e.length;t++){var r=e[t];r.intersectionRatio>0&&r.isIntersecting&&(o--,c(r.target),n.unobserve(r.target),!l&&r.target&&y(r.target))}0===o&&n.disconnect()}function y(e){("IMG"!==e.tagName?e.querySelectorAll("img.gt3-lazy-image:not(.gt3-lazy-image--loaded)"):[e]).forEach(v)}function v(e){var t,n,r,o,i=e;t=e.getAttribute("data-lazy-srcset"),n=e.getAttribute("data-lazy-sizes"),r=e.getAttribute("alt"),(o=document.createElement("img")).onload=function(e){o.onload=void 0,o.onerror=void 0,i.parentNode.insertBefore(o,i),i.remove(),setTimeout(a,0,e,o)},o.onerror=function(e){o.onload=void 0,o.onerror=void 0,o.remove(),setTimeout(a,0,e,i)},o.className=e.className,o.setAttribute("width",e.getAttribute("width")),o.setAttribute("height",e.getAttribute("height")),o.classList.add("gt3-lazy-image--loaded"),o.setAttribute("data-lazy-loaded",1),t?o.setAttribute("srcset",t):(o.removeAttribute("srcset"),o.setAttribute("src",e.getAttribute("src"))),n&&o.setAttribute("sizes",n),r&&o.setAttribute("alt",r)}f()}},349:function(e,t,n){"use strict";n.r(t);var r=n(25),o=function(e){var t,n={touch:void 0!==window.ontouchstart||window.DocumentTouch&&document instanceof DocumentTouch},r={webkitTransition:{end:"webkitTransitionEnd",prefix:"-webkit-"},MozTransition:{end:"transitionend",prefix:"-moz-"},OTransition:{end:"otransitionend",prefix:"-o-"},transition:{end:"transitionend",prefix:""}};for(t in r)if(r.hasOwnProperty(t)&&void 0!==e.style[t]){n.transition=r[t],n.transition.name=t;break}function o(){var t,r,o=n.transition;document.body.appendChild(e),o&&(t=o.name.slice(0,-9)+"ransform",void 0!==e.style[t]&&(e.style[t]="translateZ(0)",r=window.getComputedStyle(e).getPropertyValue(o.prefix+"transform"),n.transform={prefix:o.prefix,name:t,translate:!0,translateZ:!!r&&"none"!==r})),void 0!==e.style.backgroundSize&&(n.backgroundSize={},e.style.backgroundSize="contain",n.backgroundSize.contain="contain"===window.getComputedStyle(e).getPropertyValue("background-size"),e.style.backgroundSize="cover",n.backgroundSize.cover="cover"===window.getComputedStyle(e).getPropertyValue("background-size")),document.body.removeChild(e)}return document.body?o():document.addEventListener("DOMContentLoaded",o),n}(document.createElement("div"));window.GT3=window.GT3||{},window.GT3.autobind=window.GT3.autobind||r.a,window.GT3.support=window.GT3.support||o,window.GT3.Gallery=window.GT3.Gallery||{},window.GT3.Gallery.Modules=window.GT3.Gallery.Modules||{},window.GT3.Gallery.Traits=window.GT3.Gallery.Traits||{},Number.prototype.round=function(e){return+(Math.round(this+"e+"+e)+"e-"+e)};var i=function(e){return"string"!=typeof e||""===e?(console.error("The namespace must be a non-empty string."),!1):!!/^[a-zA-Z][a-zA-Z0-9_.\-\/]*$/.test(e)||(console.error("The namespace can only contain numbers, letters, dashes, periods, underscores and slashes."),!1)};var a=function(e){return"string"!=typeof e||""===e?(console.error("The hook name must be a non-empty string."),!1):/^__/.test(e)?(console.error("The hook name cannot begin with `__`."),!1):!!/^[a-zA-Z][a-zA-Z0-9_.-\/]*$/.test(e)||(console.error("The hook name can only contain numbers, letters, dashes, periods and underscores."),!1)};var u=function(e){return function(t,n,r){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:10;if(a(t)&&i(n))if("function"==typeof r)if("number"==typeof o){var u={callback:r,priority:o,namespace:n};if(e[t]){var c,s=e[t].handlers;for(c=s.length;c>0&&!(o>=s[c-1].priority);c--);c===s.length?s[c]=u:s.splice(c,0,u),(e.__current||[]).forEach((function(e){e.name===t&&e.currentIndex>=c&&e.currentIndex++}))}else e[t]={handlers:[u],runs:0}}else console.error("If specified, the hook priority must be a number.");else console.error("The hook callback must be a function.")}};var c=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return function(n,r){if(a(n)&&(t||i(r))){if(!e[n])return 0;var o=0;if(t)o=e[n].handlers.length,e[n]={runs:e[n].runs,handlers:[]};else for(var u=e[n].handlers,c=function(t){u[t].namespace===r&&(u.splice(t,1),o++,(e.__current||[]).forEach((function(e){e.name===n&&e.currentIndex>=t&&e.currentIndex--})))},s=u.length-1;s>=0;s--)c(s);return o}}};var s=function(e){return function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return void 0!==n?t in e&&e[t].handlers.some((function(e){return e.namespace===n})):t in e}};var l=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return function(n){e[n]||(e[n]={handlers:[],runs:0}),e[n].runs++;var r=e[n].handlers;for(var o=arguments.length,i=new Array(o>1?o-1:0),a=1;a<o;a++)i[a-1]=arguments[a];if(!r||!r.length)return t?i[0]:void 0;var u={name:n,currentIndex:0};for(e.__current.push(u);u.currentIndex<r.length;){var c=r[u.currentIndex],s=c.callback.apply(null,i);t&&(i[0]=s),u.currentIndex++}return e.__current.pop(),t?i[0]:void 0}};var d=function(e){return function(){return e.__current&&e.__current.length?e.__current[e.__current.length-1].name:null}};var f=function(e){return function(t){return void 0===t?void 0!==e.__current[0]:!!e.__current[0]&&t===e.__current[0].name}};var h=function(e){return function(t){if(a(t))return e[t]&&e[t].runs?e[t].runs:0}};var p,y,v,b,g,m,w,O,_,T,A,j=function e(){var t=Object.create(null),n=Object.create(null);return t.__current=[],n.__current=[],{addAction:u(t),addFilter:u(n),removeAction:c(t),removeFilter:c(n),hasAction:s(t),hasFilter:s(n),removeAllActions:c(t,!0),removeAllFilters:c(n,!0),doAction:l(t),applyFilters:l(n,!0),currentAction:d(t),currentFilter:d(n),doingAction:f(t),doingFilter:f(n),didAction:h(t),didFilter:h(n),actions:t,filters:n,createHooks:e}};function E(e,t){if(!Object.prototype.hasOwnProperty.call(e,t))throw new TypeError("attempted to use private field on non-instance");return e}window.GT3.Hooks=j();var S=0;function P(e){return"__private_"+S+++"_"+e}var k=GT3.Hooks,z=k.doAction,x=k.addAction,M=(k.addFilter,(0,GT3.autobind)((y=P("resizeThrottleTimer"),v=P("onResizeHandler"),b=P("isDebug"),g=P("startElementor"),m=P("onWidgetRegisterHandler"),w=function(){function e(){var e=this;Object.defineProperty(this,m,{value:A}),Object.defineProperty(this,g,{value:T}),Object.defineProperty(this,b,{value:_}),Object.defineProperty(this,v,{value:O}),Object.defineProperty(this,y,{writable:!0,value:null}),this.debug=!1,this.window=this.getWindowSize(),this.widgets={},this.initedElements={},this.elementorEditMode=!1,this.editMode=!1,this.adminBar=document.getElementById("wpadminbar"),window.addEventListener("resize",E(this,v)[v].bind(this)),window.addEventListener("load",E(this,v)[v].bind(this)),window.addEventListener("DOMContentLoaded",(function(){e.adminBar=document.getElementById("wpadminbar")})),this.debug=E(this,b)[b](),x("gallery/widget_register","Core",E(this,m)[m].bind(this)),x("gallery/render_block","Core",this.initElement);var t="jQuery";t in window&&(t=window[t])(window).on("elementor/frontend/init",E(this,g)[g].bind(this))}var t=e.prototype;return t.getWindowSize=function(){var e=document.documentElement,t=e.clientWidth,n=e.clientHeight;return{width:t,height:n,ratio:parseFloat(t/n).round(3)}},t.resize=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"resize";this.window=this.getWindowSize(),z("resize",e)},t.onViewport=function(e,t){var n=this;if(window.IntersectionObserver){var r=new IntersectionObserver((function(n){n[0].isIntersecting&&(r.unobserve(e),r.disconnect(),t&&t.call?t.call(n):console.error(e," in Viewport. But callback not a function"))}),{rootMargin:"100px 0px",threshold:0});r.observe(e)}else{var o=function r(){n.isInViewport(e)&&(jQuery(window).off("scroll",r),t&&t.call&&t())};o(),jQuery(window).on("scroll",o)}},t.isInViewport=function(e){"length"in e&&(e=e[0]);var t=e.getBoundingClientRect();return t.top>0&&(window.innerHeight||document.documentElement.clientHeight)>t.top+50||t.top<0&&Math.abs(t.top)+50<t.height},t.initElement=function(e){try{if(!e)return!1;if(this.editMode&&"length"in e&&e.attr("data-id")&&(e.attr("data-widget_type")||e.attr("data-element_type"))){if(!(e=e.find("[data-gt3pg-block]")).length)throw new Error("Module not found");if(!((e=e[0])instanceof HTMLElement)){var t=this.createElementFromHTML(e.outerHTML);e.parentNode.replaceChild(t,e),e=t}}if(!e.classList.contains("gt3pg-pro--wrapper")&&!(e=e.querySelector(".gt3pg-pro--wrapper")))throw new Error("Module not found");if(!e.getAttribute("data-gt3pg-block"))throw new Error("Module not found");var n=e.getAttribute("data-id")||e.getAttribute("id"),r=e.getAttribute("data-gt3pg-block");return!!this.widgets.hasOwnProperty(r)&&(this.initedElements[n]=new this.widgets[r](e),this.initedElements[n])}catch(e){return console.error(e.message,e),!1}},t.createElementFromHTML=function(e){var t=document.createElement("div");return t.innerHTML=e.trim(),t.firstChild},e}(),O=function(e){var t=this,n=e.type,r=void 0===n?"resize":n;clearTimeout(E(this,y)[y]),E(this,y)[y]=setTimeout((function(){clearTimeout(E(t,y)[y]),t.resize(r)}),200)},_=function(){var e={};try{location.search.substr(1).split("&").forEach((function(t){(t=t.split("=")).length>1&&(e[t[0]]=t[1])}))}catch(e){}try{window.parent!==window&&window.parent.location.search.substr(1).split("&").forEach((function(t){(t=t.split("=")).length>1&&(e[t[0]]=t[1])}))}catch(e){}return["1",1,"yes","en","true"].includes(e.jsDebug)},T=function(){var e=this;this.elementorEditMode=elementorFrontend.config.isEditMode||elementorFrontend.isEditMode&&elementorFrontend.isEditMode(),this.editMode=this.elementorEditMode;var t="jQuery";this.elementorEditMode&&t in window&&(t=window[t]).each(this.widgets,(function(t){window.elementorFrontend.hooks.addAction("frontend/element_ready/gt3pg-"+t+".default",e.initElement)}))},A=function(e,t){this.widgets[e]=t;var n=document.querySelectorAll('[data-gt3pg-block="'.concat(e,'"]'));if(n&&n.length)for(var r=0;r<n.length;r++)this.initElement(n.item(r))},p=w))||p);window.GT3.GalleryCore=new M;var I,G,F,L,H,C;GT3.GalleryCore;function D(e){return function(e){if(Array.isArray(e))return N(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return N(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return N(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function N(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function W(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function B(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?W(Object(n),!0).forEach((function(t){R(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):W(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function R(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Z(e,t){if(!Object.prototype.hasOwnProperty.call(e,t))throw new TypeError("attempted to use private field on non-instance");return e}var U=0;function V(e){return"__private_"+U+++"_"+e}var $=GT3,q=$.Hooks.addAction,K=$.Gallery.Traits,Q=void 0===K?{}:K,J=(0,$.autobind)((G=V("onMouseEnter"),F=V("onMouseLeave"),L=function(){function e(t){Object.defineProperty(this,F,{value:C}),Object.defineProperty(this,G,{value:H}),this.filter="",this.showPreloader=!0,this.ui={preloader:".gallery-preloader"},this.modules={},this.settings={},this.isHovered=!1,this.el=t,this.el.gt3Widget=this,this.hooks=j(),this.getUI();try{var n={},r=document.getElementById("settings--".concat(this.el.id));r&&(n=JSON.parse(r.innerHTML),r.remove()),this.settings=e.extend(this.settings,n)}catch(e){return void console.error(e)}setTimeout(this.connectComponents),q("resize","BasicGallery",this.resize)}var t=e.prototype;return t.connectComponents=function(){var e=this.settings.modules;if(e instanceof Array&&e.length)for(var t in e){var n="With".concat(e[t]);Q.hasOwnProperty(n)&&!this.modules.hasOwnProperty(n)&&(this.modules[n]=new Q[n](this))}},t.extendSettings=function(t){this.settings=e.extend(this.settings,t)},t.extendUI=function(e){e=this.getUI(e),this.ui=B(B({},this.ui),e)},t.init=function(){this.el.addEventListener("mouseenter",Z(this,G)[G].bind(this)),this.el.addEventListener("mouseleave",Z(this,F)[F].bind(this)),this.hooks.doAction("inited")},t.getUI=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0;if(void 0!==e){for(var t in e){var n=e[t];if("string"==typeof n){var r=this.el.querySelector(n);e[t]=null!=r?r:null}}return e}this.ui=this.getUI(this.ui)},t.afterInit=function(){this.hooks.doAction("after_init")},t.hidePreloader=function(){this.showPreloader&&(this.ui.preloader&&this.ui.preloader.remove(),this.showPreloader=!1)},e.extend=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];for(var r in t)t[r]instanceof Array&&!n?e[r]=[].concat(D(e[r]||[]),D(t[r])):t[r]instanceof Object&&!n?e[r]=this.extend(e[r]||{},t[r]):e[r]=t[r];return e},t.resize=function(){},e}(),H=function(){this.isHovered=!0},C=function(){this.isHovered=!1},I=L))||I;window.GT3.Gallery.Modules.Basic=J;n(334)}});