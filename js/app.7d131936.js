(function(t){function e(e){for(var a,r,i=e[0],c=e[1],l=e[2],u=0,d=[];u<i.length;u++)r=i[u],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&d.push(o[r][0]),o[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);f&&f(e);while(d.length)d.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],a=!0,r=1;r<n.length;r++){var i=n[r];0!==o[i]&&(a=!1)}a&&(s.splice(e--,1),t=c(c.s=n[0]))}return t}var a={},r={app:0},o={app:0},s=[];function i(t){return c.p+"js/"+({}[t]||t)+"."+{"chunk-6306d652":"e4cb76a8","chunk-6419b480":"fbfe641e"}[t]+".js"}function c(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={"chunk-6306d652":1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=new Promise((function(e,n){for(var a="css/"+({}[t]||t)+"."+{"chunk-6306d652":"f32eaac2","chunk-6419b480":"31d6cfe0"}[t]+".css",o=c.p+a,s=document.getElementsByTagName("link"),i=0;i<s.length;i++){var l=s[i],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===a||u===o))return e()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){l=d[i],u=l.getAttribute("data-href");if(u===a||u===o)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var a=e&&e.target&&e.target.src||o,s=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=a,delete r[t],f.parentNode.removeChild(f),n(s)},f.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){r[t]=0})));var a=o[t];if(0!==a)if(a)e.push(a[2]);else{var s=new Promise((function(e,n){a=o[t]=[e,n]}));e.push(a[2]=s);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=i(t);var d=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(f);var n=o[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+a+": "+r+")",d.name="ChunkLoadError",d.type=a,d.request=r,n[1](d)}o[t]=void 0}};var f=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},c.m=t,c.c=a,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(n,a,function(e){return t[e]}.bind(null,a));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/BusTimeTable/",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var f=u;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("Loading",{attrs:{active:t.isLoading},on:{"update:active":function(e){t.isLoading=e}}},[a("template",{slot:"default"},[a("img",{attrs:{src:n("e8ff")}})])],2),a("Navbar"),a("div",{staticClass:"page-content"},[a("router-view")],1),a("div",{staticClass:"goTop__mb d-block d-md-none",on:{click:t.scrollTop}},[t._m(0)]),a("Footer"),a("div",{staticClass:"goTop",on:{click:t.scrollTop}},[a("i",{staticClass:"fas fa-arrow-to-top"})])],1)},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("Scroll to top"),n("i",{staticClass:"fas fa-arrow-to-top ms-2"})])}],s=n("5530"),i=n("2f62"),c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"container bg-transparent"},[n("nav",{staticClass:"navbar navbar-expand-lg pt-4 pb-4 fixed-top",staticStyle:{"background-color":"rgba(2,11,18,.8)"}},[n("div",{staticClass:"container-fluid"},[n("router-link",{staticClass:"navbar-brand text-white",attrs:{to:"/"}},[n("i",{staticClass:"fas fa-bus-alt me-2"}),t._v("Taiwan Bus")]),t._m(0),n("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[n("ul",{staticClass:"navbar-nav ms-auto mb-2 mb-lg-0"},[n("li",{staticClass:"nav-item my-2"},[n("router-link",{staticClass:"nav-link",attrs:{"aria-current":"page",to:"/"}},[t._v("首頁")])],1),n("li",{staticClass:"nav-item my-2"},[n("router-link",{staticClass:"nav-link",attrs:{"aria-current":"page",to:"/bus"}},[t._v("公車動態")])],1),t._m(1)])])],1)])])])},l=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[n("i",{staticClass:"fas fa-bars text-white"})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"nav-item my-2"},[n("a",{staticClass:"nav-link",attrs:{"aria-current":"page",href:""}},[t._v("常見問題")])])}],u=n("2877"),d={},f=Object(u["a"])(d,c,l,!1,null,null,null),p=f.exports,v=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},m=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"footer"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-12"},[n("div",{staticClass:"copyright-txt text-center"},[t._v(" © 2022 All rights reserved ")])])])])])}],b={},h=Object(u["a"])(b,v,m,!1,null,null,null),g=h.exports,y={name:"App",components:{Navbar:p,Footer:g},mounted:function(){window.addEventListener("scroll",this.handleScroll)},methods:{handleScroll:function(){var t=document.querySelector(".goTop");window.scrollY>300?t.classList.add("show"):t.classList.remove("show")},scrollTop:function(){window.scrollTo({top:0,behavior:"smooth"})}},computed:Object(s["a"])({},Object(i["b"])(["isLoading"]))},C=y,_=(n("5c0b"),Object(u["a"])(C,r,o,!1,null,null,null)),w=_.exports,k=n("bc3a"),x=n.n(k);a["a"].use(i["a"]);var L=new i["a"].Store({strict:!0,state:{isLoading:!1},actions:{updateLoading:function(t,e){t.commit("LOADING",e)}},mutations:{LOADING:function(t,e){t.isLoading=e}},getters:{isLoading:function(t){return t.isLoading}}}),O=n("130e"),T=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f"));a["a"].use(T["a"]);var S=[{path:"/bus",name:"Bus",component:function(){return n.e("chunk-6306d652").then(n.bind(null,"0c79"))}},{path:"/",name:"Home",component:function(){return n.e("chunk-6419b480").then(n.bind(null,"bb51"))}},{path:"*",redirect:"/"}],j=new T["a"]({routes:S,scrollBehavior:function(){return{x:0,y:0}}}),E=j,A=n("9062"),P=n.n(A);n("e40d"),n("7b17");a["a"].use(O["a"],x.a),a["a"].component("Loading",P.a),a["a"].config.productionTip=!1,new a["a"]({router:E,store:L,render:function(t){return t(w)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";n("9c0c")},"9c0c":function(t,e,n){},e8ff:function(t,e,n){t.exports=n.p+"img/ajax-loader.3659e0c0.gif"}});
//# sourceMappingURL=app.7d131936.js.map