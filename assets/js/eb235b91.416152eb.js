"use strict";(self.webpackChunktgrall_blog=self.webpackChunktgrall_blog||[]).push([[7061],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=c(n),d=a,h=p["".concat(s,".").concat(d)]||p[d]||u[d]||o;return n?r.createElement(h,i(i({ref:t},m),{},{components:n})):r.createElement(h,i({ref:t},m))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},68865:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},assets:function(){return m},toc:function(){return u},default:function(){return d}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],l={title:"iOS 101: How to convert a String to a NSDate",categories:"ios"},s=void 0,c={permalink:"/blog/2011/01/02/ios-101-how-to-convert-a-string-to-a-nsdate",editUrl:"https://github.dev/tgrall/tgrall.github.io/blob/main/blog/2011-01-02-ios-101-how-to-convert-a-string-to-a-nsdate.md",source:"@site/blog/2011-01-02-ios-101-how-to-convert-a-string-to-a-nsdate.md",title:"iOS 101: How to convert a String to a NSDate",description:"During my vacations, I took some time to play with iOS development. I have been struggling with many small issues... This is the price to pay when learning a new technology, and this is part of the fun of doing it. I will try to document some of these issues in articles...  Let's start with a very common story : working with date.",date:"2011-01-02T00:00:00.000Z",formattedDate:"January 2, 2011",tags:[],readingTime:1.36,truncated:!1,authors:[],prevItem:{title:"How to calculate the size of a folder in JCR (Java Content Repository)?",permalink:"/blog/2011/03/01/how-to-calculate-the-size-of-a-folder-in-jcr-java-content-repository"},nextItem:{title:"What Apple\u2019s Announcement Really Means to Java Developers",permalink:"/blog/2010/10/29/what-apples-announcement-really-means-to-java-developers"}},m={authorsImageUrls:[]},u=[],p={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"During my vacations, I took some time to play with iOS development. I have been struggling with many small issues... This is the price to pay when learning a new technology, and this is part of the fun of doing it. I will try to document some of these issues in articles...  Let's start with a very common story : working with date."),(0,o.kt)("p",null,"Objective-C and iOS SDK provide a class to help formatting date (marshaling and unmarshaling), this class is ",(0,o.kt)("a",{parentName:"p",href:"http://developer.apple.com/library/mac/#documentation/Cocoa/Reference/Foundation/Classes/NSDateFormatter_Class/Reference/Reference.html"},"NSDateFormatter"),". No surprise, the NSDateFormatter uses the ",(0,o.kt)("a",{parentName:"p",href:"http://unicode.org/reports/tr35/#Date_Format_Patterns"},"Unicode Date Format Patterns"),"."),(0,o.kt)("p",null,"A small example of date creating from a string:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-objectivec"},'\n    NSDateFormatter *dateFormatter = [[NSDateFormatter alloc]init];\n    [dateFormatter setDateFormat:@"yyyy-MM-dd"];\n    NSDate *date = [dateFormatter dateFromString:publicationDate ];\n    [dateFormatter release];\n     // use your date object\n')),(0,o.kt)("p",null,'The date that I have to create from a sting looks like "',(0,o.kt)("inlineCode",{parentName:"p"},"2010-11-12"),'". So I do not have any time information. When I do convert this string with the code above, the result is  "',(0,o.kt)("inlineCode",{parentName:"p"},"2010-11-11 23:00:00 +0000"),'". As you can see the date is calculated from my current time zone, small reminder I am in France. So the "date" object itself is perfectly fine, but in my example I want to have the date independently of the time.'),(0,o.kt)("p",null,"To be able to manage the date without any time/timezone information, I can force the timezone I want to use when using the  ",(0,o.kt)("inlineCode",{parentName:"p"},"NSDateFormatter")," class. I just need to use the ",(0,o.kt)("inlineCode",{parentName:"p"},"setTimeZone")," instance method."),(0,o.kt)("p",null,"The code looks like that now (see line#3):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-objectivec"},'    NSDateFormatter *dateFormatter = [[NSDateFormatter alloc]init];\n    [dateFormatter setDateFormat:@"yyyy-MM-dd"];\n    [dateFormatter setTimeZone:[NSTimeZone timeZoneForSecondsFromGMT:0]];\n    NSDate *date = [dateFormatter dateFromString:publicationDate ];\n    [dateFormatter release];\n     // use your date object\n')),(0,o.kt)("p",null,"Hope that helps!"))}d.isMDXComponent=!0}}]);