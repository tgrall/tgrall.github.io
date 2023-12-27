"use strict";(self.webpackChunktgrall_blog=self.webpackChunktgrall_blog||[]).push([[4763],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var r=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),g=u(a),m=o,d=g["".concat(s,".").concat(m)]||g[m]||c[m]||n;return a?r.createElement(d,l(l({ref:t},p),{},{components:a})):r.createElement(d,l({ref:t},p))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,l=new Array(n);l[0]=g;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var u=2;u<n;u++)l[u]=a[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}g.displayName="MDXCreateElement"},72571:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>n,metadata:()=>i,toc:()=>u});var r=a(87462),o=(a(67294),a(3905));const n={title:"Quarkus: Simplifying Cloud File Uploads",description:"Learn how to create a REST service to upload image to the Cloud.",tags:["quarkus","panache","rest","google","aws","azure","cloud","s3","learning quarkus"],keywords:["quarkus","panache","rest","google","aws","azure","cloud","s3"],image:"/images/posts/2023-12-24-quarkus-uploading-image-to-the-cloud/header.png",date:new Date("2023-12-24T10:00:00.000Z")},l=void 0,i={permalink:"/blog/2023/12/24/quarkus-uploading-image-to-the-cloud",editUrl:"https://github.dev/tgrall/tgrall.github.io/blob/main/blog/2023-12-24-quarkus-uploading-image-to-the-cloud.md",source:"@site/blog/2023-12-24-quarkus-uploading-image-to-the-cloud.md",title:"Quarkus: Simplifying Cloud File Uploads",description:"Learn how to create a REST service to upload image to the Cloud.",date:"2023-12-24T10:00:00.000Z",formattedDate:"December 24, 2023",tags:[{label:"quarkus",permalink:"/blog/tags/quarkus"},{label:"panache",permalink:"/blog/tags/panache"},{label:"rest",permalink:"/blog/tags/rest"},{label:"google",permalink:"/blog/tags/google"},{label:"aws",permalink:"/blog/tags/aws"},{label:"azure",permalink:"/blog/tags/azure"},{label:"cloud",permalink:"/blog/tags/cloud"},{label:"s3",permalink:"/blog/tags/s-3"},{label:"learning quarkus",permalink:"/blog/tags/learning-quarkus"}],readingTime:6.26,hasTruncateMarker:!0,authors:[],frontMatter:{title:"Quarkus: Simplifying Cloud File Uploads",description:"Learn how to create a REST service to upload image to the Cloud.",tags:["quarkus","panache","rest","google","aws","azure","cloud","s3","learning quarkus"],keywords:["quarkus","panache","rest","google","aws","azure","cloud","s3"],image:"/images/posts/2023-12-24-quarkus-uploading-image-to-the-cloud/header.png",date:"2023-12-24T10:00:00.000Z"},prevItem:{title:"Seamless React State Updates: Mastering Lists with GitHub Copilot",permalink:"/blog/2023/12/27/github-copilot-update-react-state"},nextItem:{title:"Java: Using MessageFormat to Generate JSON",permalink:"/blog/2023/12/21/java-generating-json-with-messageformat"}},s={authorsImageUrls:[]},u=[],p={toc:u};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Quarkus: Simplifying Cloud File Uploads",src:a(80801).Z,width:"1200",height:"628"})),(0,o.kt)("p",null,"In many projects, facilitating user uploads to cloud services is a common requirement. In my current project, I find myself inviting users to seamlessly upload various files, such as profile pictures, GPS track files, or session photos, to the WindR.org site. To enhance my understanding, I've opted to employ multiple cloud providers \u2014",(0,o.kt)("a",{parentName:"p",href:"https://azure.microsoft.com/en-us/products/storage/blobs"},"Microsoft Azure Blob Storage"),", ",(0,o.kt)("a",{parentName:"p",href:"https://aws.amazon.com/pm/serv-s3/"},"Amazon S3"),", ",(0,o.kt)("a",{parentName:"p",href:"https://cloud.google.com/storage"},"Google Cloud Storage"),"\u2014 allowing me to test and compare their functionalities."),(0,o.kt)("p",null,"This article guides you through the process of:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Creating a REST service for file uploads using RESTEasy Reactive in Quarkus."),(0,o.kt)("li",{parentName:"ol"},"Uploading files to the cloud from a Quarkus application.")),(0,o.kt)("p",null,"To complement this discussion, a complete code example is available on GitHub. This resource serves as a practical reference for learning and experimentation."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/tgrall/learning-quarkus/tree/main/upload-image"},"GitHub Repository: Quarkus: Uploading Image to the Cloud")))}c.isMDXComponent=!0},80801:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/header-b247d79732d22aa2ec4e19435454956f.png"}}]);