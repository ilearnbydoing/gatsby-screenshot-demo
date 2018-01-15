webpackJsonp([35783957827783],{128:function(e,t,i){"use strict";function n(e){return e}function o(e,t,i){function o(e,t){var i=N.hasOwnProperty(t)?N[t]:null;v.hasOwnProperty(t)&&l("OVERRIDE_BASE"===i,"ReactClassInterface: You are attempting to override `%s` from your class specification. Ensure that your method names do not overlap with React methods.",t),e&&l("DEFINE_MANY"===i||"DEFINE_MANY_MERGED"===i,"ReactClassInterface: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.",t)}function a(e,i){if(i){l("function"!=typeof i,"ReactClass: You're attempting to use a component class or function as a mixin. Instead, just use a regular object."),l(!t(i),"ReactClass: You're attempting to use a component as a mixin. Instead, just use a regular object.");var n=e.prototype,a=n.__reactAutoBindPairs;i.hasOwnProperty(c)&&M.mixins(e,i.mixins);for(var s in i)if(i.hasOwnProperty(s)&&s!==c){var r=i[s],u=n.hasOwnProperty(s);if(o(u,s),M.hasOwnProperty(s))M[s](e,r);else{var d=N.hasOwnProperty(s),y="function"==typeof r,h=y&&!d&&!u&&i.autobind!==!1;if(h)a.push(s,r),n[s]=r;else if(u){var m=N[s];l(d&&("DEFINE_MANY_MERGED"===m||"DEFINE_MANY"===m),"ReactClass: Unexpected spec policy %s for key %s when mixing in component specs.",m,s),"DEFINE_MANY_MERGED"===m?n[s]=p(n[s],r):"DEFINE_MANY"===m&&(n[s]=f(n[s],r))}else n[s]=r}}}else;}function u(e,t){if(t)for(var i in t){var n=t[i];if(t.hasOwnProperty(i)){var o=i in M;l(!o,'ReactClass: You are attempting to define a reserved property, `%s`, that shouldn\'t be on the "statics" key. Define it as an instance property instead; it will still be accessible on the constructor.',i);var a=i in e;l(!a,"ReactClass: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.",i),e[i]=n}}}function d(e,t){l(e&&t&&"object"==typeof e&&"object"==typeof t,"mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects.");for(var i in t)t.hasOwnProperty(i)&&(l(void 0===e[i],"mergeIntoWithNoDuplicateKeys(): Tried to merge two objects with the same key: `%s`. This conflict may be due to a mixin; in particular, this may be caused by two getInitialState() or getDefaultProps() methods returning objects with clashing keys.",i),e[i]=t[i]);return e}function p(e,t){return function(){var i=e.apply(this,arguments),n=t.apply(this,arguments);if(null==i)return n;if(null==n)return i;var o={};return d(o,i),d(o,n),o}}function f(e,t){return function(){e.apply(this,arguments),t.apply(this,arguments)}}function y(e,t){var i=t.bind(e);return i}function h(e){for(var t=e.__reactAutoBindPairs,i=0;i<t.length;i+=2){var n=t[i],o=t[i+1];e[n]=y(e,o)}}function m(e){var t=n(function(e,n,o){this.__reactAutoBindPairs.length&&h(this),this.props=e,this.context=n,this.refs=r,this.updater=o||i,this.state=null;var a=this.getInitialState?this.getInitialState():null;l("object"==typeof a&&!Array.isArray(a),"%s.getInitialState(): must return an object or null",t.displayName||"ReactCompositeComponent"),this.state=a});t.prototype=new b,t.prototype.constructor=t,t.prototype.__reactAutoBindPairs=[],g.forEach(a.bind(null,t)),a(t,E),a(t,e),a(t,w),t.getDefaultProps&&(t.defaultProps=t.getDefaultProps()),l(t.prototype.render,"createClass(...): Class specification must implement a `render` method.");for(var o in N)t.prototype[o]||(t.prototype[o]=null);return t}var g=[],N={mixins:"DEFINE_MANY",statics:"DEFINE_MANY",propTypes:"DEFINE_MANY",contextTypes:"DEFINE_MANY",childContextTypes:"DEFINE_MANY",getDefaultProps:"DEFINE_MANY_MERGED",getInitialState:"DEFINE_MANY_MERGED",getChildContext:"DEFINE_MANY_MERGED",render:"DEFINE_ONCE",componentWillMount:"DEFINE_MANY",componentDidMount:"DEFINE_MANY",componentWillReceiveProps:"DEFINE_MANY",shouldComponentUpdate:"DEFINE_ONCE",componentWillUpdate:"DEFINE_MANY",componentDidUpdate:"DEFINE_MANY",componentWillUnmount:"DEFINE_MANY",updateComponent:"OVERRIDE_BASE"},M={displayName:function(e,t){e.displayName=t},mixins:function(e,t){if(t)for(var i=0;i<t.length;i++)a(e,t[i])},childContextTypes:function(e,t){e.childContextTypes=s({},e.childContextTypes,t)},contextTypes:function(e,t){e.contextTypes=s({},e.contextTypes,t)},getDefaultProps:function(e,t){e.getDefaultProps?e.getDefaultProps=p(e.getDefaultProps,t):e.getDefaultProps=t},propTypes:function(e,t){e.propTypes=s({},e.propTypes,t)},statics:function(e,t){u(e,t)},autobind:function(){}},E={componentDidMount:function(){this.__isMounted=!0}},w={componentWillUnmount:function(){this.__isMounted=!1}},v={replaceState:function(e,t){this.updater.enqueueReplaceState(this,e,t)},isMounted:function(){return!!this.__isMounted}},b=function(){};return s(b.prototype,e.prototype,v),m}var a,s=i(4),r=i(39),l=i(1),c="mixins";a={},e.exports=o},260:function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(){return"undefined"==typeof v&&"undefined"!=typeof window&&window.IntersectionObserver&&(v=new window.IntersectionObserver(function(e){e.forEach(function(e){b.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(v.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),v}t.__esModule=!0;var a=i(46),s=n(a),r=i(63),l=n(r),c=i(62),u=n(c),d=i(183),p=n(d),f=i(182),y=n(f),h=i(6),m=n(h),g=i(7),N=n(g),M=function(e){var t=(0,y.default)({},e);return t.responsiveResolution&&(t.resolutions=t.responsiveResolution,delete t.responsiveResolution),t.responsiveSizes&&(t.sizes=t.responsiveSizes,delete t.responsiveSizes),t},E={},w=function(e){var t=M(e),i=t.sizes?t.sizes.src:t.resolutions.src;return!!E[i]||(E[i]=!0,!1)},v=void 0,b=[],D=function(e,t){o().observe(e),b.push([e,t])},I=null,j=function(){if(null!==I)return I;var e="undefined"!=typeof window?window.document.createElement("canvas"):{};return I=!(!e.getContext||!e.getContext("2d"))&&0===e.toDataURL("image/webp").indexOf("data:image/webp")},L=function(e){var t=e.opacity,i=void 0===t?"":t,n=e.src,o=e.srcSet,a=e.sizes,s=void 0===a?"":a,r=e.title,l=void 0===r?"":r,c=e.alt,u=void 0===c?"":c,d=e.width,p=void 0===d?"":d,f=e.height,y=void 0===f?"":f,h=e.transitionDelay,m=void 0===h?"":h;return"<img width="+p+" height="+y+' src="'+n+'" srcset="'+o+'" alt="'+u+'" title="'+l+'" sizes="'+s+'" style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+m+";opacity:"+i+';width:100%;height:100%;object-fit:cover;objectPosition:center"/>'},x=function(e){var t=e.opacity,i=e.onLoad,n=e.transitionDelay,o=void 0===n?"":n,a=(0,p.default)(e,["opacity","onLoad","transitionDelay"]);return m.default.createElement("img",(0,y.default)({},a,{onLoad:i,style:{position:"absolute",top:0,left:0,transition:"opacity 0.5s",transitionDelay:o,opacity:t,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"}}))};x.propTypes={opacity:N.default.number,transitionDelay:N.default.string,onLoad:N.default.func};var S=function(e){function t(i){(0,s.default)(this,t);var n=(0,l.default)(this,e.call(this,i)),o=!0,a=!0,r=!1,c=w(i);return!c&&"undefined"!=typeof window&&window.IntersectionObserver&&(o=!1,a=!1,r=!0),"undefined"==typeof window&&(o=!1,a=!1),n.state={isVisible:o,imgLoaded:a,IOSupported:r},n.handleRef=n.handleRef.bind(n),n}return(0,u.default)(t,e),t.prototype.handleRef=function(e){var t=this;this.state.IOSupported&&e&&D(e,function(){t.setState({isVisible:!0,imgLoaded:!1})})},t.prototype.render=function(){var e=this,t=M(this.props),i=t.title,n=t.alt,o=t.className,a=t.outerWrapperClassName,s=t.style,r=void 0===s?{}:s,l=t.sizes,c=t.resolutions,u=t.backgroundColor,d=void 0;if(d="boolean"==typeof u?"lightgray":u,l){var p=l;return p.srcWebp&&p.srcSetWebp&&j()&&(p.src=p.srcWebp,p.srcSet=p.srcSetWebp),m.default.createElement("div",{className:(a?a:"")+" gatsby-image-outer-wrapper",style:{zIndex:0,position:"absolute"===r.position?"initial":"relative"}},m.default.createElement("div",{className:(o?o:"")+" gatsby-image-wrapper",style:(0,y.default)({position:"relative",overflow:"hidden",zIndex:1},r),ref:this.handleRef},m.default.createElement("div",{style:{width:"100%",paddingBottom:100/p.aspectRatio+"%"}}),p.base64&&m.default.createElement(x,{alt:n,title:i,src:p.base64,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s"}),p.tracedSVG&&m.default.createElement(x,{alt:n,title:i,src:p.tracedSVG,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s"}),d&&m.default.createElement("div",{title:i,style:{backgroundColor:d,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&m.default.createElement(x,{alt:n,title:i,srcSet:p.srcSet,src:p.src,sizes:p.sizes,opacity:this.state.imgLoaded||this.props.fadeIn===!1?1:0,onLoad:function(){e.state.IOSupported&&e.setState({imgLoaded:!0}),e.props.onLoad&&e.props.onLoad()}}),m.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:L((0,y.default)({alt:n,title:i},p))}})))}if(c){var f=c,h=(0,y.default)({position:"relative",overflow:"hidden",display:"inline-block",zIndex:1,width:f.width,height:f.height},r);return"inherit"===r.display&&delete h.display,f.srcWebp&&f.srcSetWebp&&j()&&(f.src=f.srcWebp,f.srcSet=f.srcSetWebp),m.default.createElement("div",{className:(a?a:"")+" gatsby-image-outer-wrapper",style:{zIndex:0,position:"absolute"===r.position?"initial":"relative"}},m.default.createElement("div",{className:(o?o:"")+" gatsby-image-wrapper",style:h,ref:this.handleRef},f.base64&&m.default.createElement(x,{alt:n,title:i,src:f.base64,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s"}),f.tracedSVG&&m.default.createElement(x,{alt:n,title:i,src:f.tracedSVG,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s"}),d&&m.default.createElement("div",{title:i,style:{backgroundColor:d,width:f.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:f.height}}),this.state.isVisible&&m.default.createElement(x,{alt:n,title:i,width:f.width,height:f.height,srcSet:f.srcSet,src:f.src,opacity:this.state.imgLoaded||this.props.fadeIn===!1?1:0,onLoad:function(){e.setState({imgLoaded:!0}),e.props.onLoad&&e.props.onLoad()}}),m.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:L((0,y.default)({alt:n,title:i,width:f.width,height:f.height},f))}})))}return null},t}(m.default.Component);S.defaultProps={fadeIn:!0,alt:""},S.propTypes={responsiveResolution:N.default.object,responsiveSizes:N.default.object,resolutions:N.default.object,sizes:N.default.object,fadeIn:N.default.bool,title:N.default.string,alt:N.default.string,className:N.default.oneOfType([N.default.string,N.default.object]),outerWrapperClassName:N.default.oneOfType([N.default.string,N.default.object]),style:N.default.object,position:N.default.string,backgroundColor:N.default.oneOfType([N.default.string,N.default.bool]),onLoad:N.default.func},t.default=S},4:function(e,t){"use strict";function i(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function n(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},i=0;i<10;i++)t["_"+String.fromCharCode(i)]=i;var n=Object.getOwnPropertyNames(t).map(function(e){return t[e]});if("0123456789"!==n.join(""))return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach(function(e){o[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},o)).join("")}catch(e){return!1}}var o=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable;e.exports=n()?Object.assign:function(e,t){for(var n,r,l=i(e),c=1;c<arguments.length;c++){n=Object(arguments[c]);for(var u in n)a.call(n,u)&&(l[u]=n[u]);if(o){r=o(n);for(var d=0;d<r.length;d++)s.call(n,r[d])&&(l[r[d]]=n[r[d]])}}return l}},371:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgZmlsbD0iIzlkN2NiZiIgd2lkdGg9IjEyMDBweCIgaGVpZ2h0PSIxMjAwcHgiIHZpZXdCb3g9IjAgMCAxMjAwIDEyMDAiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDEyMDAgMTIwMCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8cGF0aCBkPSJNMjQuMzEsNjA3LjY2Nmw1NjguMDIzLDU2OC4wMjNDMjgwLjQyNCwxMTcxLjYyNSwyOC4zNzQsOTE5LjU3NSwyNC4zMSw2MDcuNjY2eiBNNzI4Ljg0MiwxMTYxLjI5N0wzOC43MDMsNDcxLjE1OQ0KCWM1OC41MjEtMjU1Ljk0MiwyODcuNTkyLTQ0Ni45LDU2MS4yNzQtNDQ2LjljMTkxLjMxLDAsMzYwLjc5NCw5My4zMyw0NjUuNDk1LDIzNi45MTdsLTc5LjcxOSw3MC4zNA0KCWMtODQuOTMxLTEyMS43OTQtMjI2LjAzNS0yMDEuNTA0LTM4NS43NzYtMjAxLjUwNGMtMjAzLjM4MywwLTM3Ni41NzgsMTI5LjE4Ny00NDIuMDQ0LDMwOS45NzRsNjAyLjA4Myw2MDIuMDgyDQoJYzE0Ni4yMTgtNTIuOTQ3LDI1OC42NjktMTc2LjM3NSwyOTYuMzMxLTMyOS4yNDFIODA2Ljc4MlY2MDAuMDIzaDI2My4yMDd2LTAuMDAxaDEwNS43NTJ2MA0KCUMxMTc1Ljc0MSw4NzMuNzA1LDk4NC43ODUsMTEwMi43NzUsNzI4Ljg0MiwxMTYxLjI5N3oiLz4NCjwvc3ZnPg0K"},175:function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.query=void 0;var o=i(6),a=n(o),s=i(260),r=n(s),l=i(247),c=n(l),u=i(371),d=n(u);t.default=function(e){var t=e.data;return a.default.createElement("div",{className:c.default.gallery},a.default.createElement("div",{className:c.default.header},a.default.createElement("h1",null,"powered by",a.default.createElement("img",{src:d.default,className:c.default.logo,alt:""}))),a.default.createElement("div",{className:c.default.sites},t.allSitesYaml.edges.map(function(e,t){var i=e.node;return a.default.createElement("div",{className:c.default.site,key:t},a.default.createElement("a",{href:i.url},a.default.createElement(r.default,{resolutions:i.childScreenshot.imageFile.childImageSharp.resolutions,alt:i.name,className:c.default.shadow})))})))};t.query="** extracted graphql fragment **"},247:function(e,t){e.exports={gallery:"src-pages----index-module---gallery---ATPqF",header:"src-pages----index-module---header---2Vq0q",logo:"src-pages----index-module---logo---3tl-x",sites:"src-pages----index-module---sites---exL3l",site:"src-pages----index-module---site---14HI-",shadow:"src-pages----index-module---shadow---2_LYc"}}});
//# sourceMappingURL=component---src-pages-index-js-b0ddcb57ce01ae150dee.js.map