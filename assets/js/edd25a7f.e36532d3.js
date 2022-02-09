"use strict";(self.webpackChunktgrall_blog=self.webpackChunktgrall_blog||[]).push([[43445],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return d}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),f=p(r),d=o,h=f["".concat(c,".").concat(d)]||f[d]||u[d]||i;return r?n.createElement(h,a(a({ref:t},s),{},{components:r})):n.createElement(h,a({ref:t},s))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},34617:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return p},assets:function(){return s},toc:function(){return u},default:function(){return d}});var n=r(87462),o=r(63366),i=(r(67294),r(3905)),a=(r(59943),["components"]),l={title:"Using Apache Drill REST API to build ASCII Dashboard with node",categories:"Drill SQL node.js dataviz"},c=void 0,p={permalink:"/blog/2015/12/10/using-apache-drill-rest-api-to-build-ascii-dashboard-with-node",editUrl:"https://github.dev/tgrall/tgrall.github.io/blob/main/blog/2015-12-10-using-apache-drill-rest-api-to-build-ascii-dashboard-with-node.md",source:"@site/blog/2015-12-10-using-apache-drill-rest-api-to-build-ascii-dashboard-with-node.md",title:"Using Apache Drill REST API to build ASCII Dashboard with node",description:"Apache Drill has a hidden gem: an easy to use REST interface. This API can be used to Query, Profile and Configure Drill engine.",date:"2015-12-10T00:00:00.000Z",formattedDate:"December 10, 2015",tags:[],readingTime:4.01,truncated:!0,authors:[],prevItem:{title:"Getting Started with Sample Programs for Apache Kafka 0.9",permalink:"/blog/2016/02/10/getting-started-with-sample-programs-for-apache-kafka-0-dot-9"},nextItem:{title:"Convert a CSV File to Apache Parquet with Drill",permalink:"/blog/2015/08/17/convert-csv-file-to-apache-parquet-dot-dot-dot-with-drill"}},s={authorsImageUrls:[]},u=[],f={toc:u};function d(e){var t=e.components,l=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},f,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"http://drill.apache.org"},"Apache Drill")," has a hidden gem: an easy to use REST interface. This API can be used to Query, Profile and Configure Drill engine."),(0,i.kt)("p",null,"In this blog post I will explain how to use Drill REST API to create ascii dashboards using ",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/blessed-contrib"},"Blessed Contrib"),"."),(0,i.kt)("p",null,"The ASCII Dashboard looks like"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Dashboard",src:r(98001).Z})))}d.isMDXComponent=!0},59943:function(e,t,r){var n=r(67294);r(45697);function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var a=function(e){function t(){return o(this,t),i(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.componentDidMount=function(){this._updateIframeContent()},t.prototype.componentDidUpdate=function(e,t){this._updateIframeContent()},t.prototype._defineUrl=function(){var e=this.props,t=e.id,r=e.file;return"https://gist.github.com/"+t+".js"+(r?"?file="+r:"")},t.prototype._updateIframeContent=function(){var e=this.props,t=e.id,r=e.file,n=this.iframeNode,o=n.document;n.contentDocument?o=n.contentDocument:n.contentWindow&&(o=n.contentWindow.document);var i='<html><head><base target="_parent"><style>*{font-size:12px;}</style></head><body '+("onload=\"parent.document.getElementById('"+(r?"gist-"+t+"-"+r:"gist-"+t)+"').style.height=document.body.scrollHeight + 'px'\"")+">"+('<script type="text/javascript" src="'+this._defineUrl()+'"><\/script>')+"</body></html>";o.open(),o.writeln(i),o.close()},t.prototype.render=function(){var e=this,t=this.props,r=t.id,o=t.file;return n.createElement("iframe",{ref:function(t){e.iframeNode=t},width:"100%",frameBorder:0,id:o?"gist-"+r+"-"+o:"gist-"+r})},t}(n.PureComponent);t.Z=a},98001:function(e,t,r){t.Z=r.p+"assets/images/dashboard_demo-b5ddedf89587391e12ef9f1c7b473a1b.gif"}}]);