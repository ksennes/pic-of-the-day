(this["webpackJsonpreact-practice"]=this["webpackJsonpreact-practice"]||[]).push([[0],{137:function(e,t,a){},138:function(e,t,a){"use strict";a.r(t);var n=a(2),c=a.n(n),r=a(27),l=a.n(r),o=(a(69),a(70),a(30)),i=a(6),u=a(24),s=a(61),m=a.n(s),f=(a(71),a(23)),d=a.n(f),E=(a(73),"https://api.nasa.gov/planetary/apod?api_key=".concat("BLg6EmuofZgk2KFEmkxDDBc4QZpLRpnhEk3Dr8b2")),p=d()().add(-10,"days").format("YYYY-MM-DD"),v=(a(74),function(e){var t=e.activeLink;return c.a.createElement("div",{className:"navigation-layout"},c.a.createElement("ul",{className:"navigation-list"},[{title:"Featured picture",link:"/featured_picture"},{title:"Gallery",link:"/gallery"}].map((function(e,a){return c.a.createElement("li",{key:a},c.a.createElement(o.b,{className:e.title===t?"active-link":"link",to:e.link},e.title))}))))}),g=function(){var e=Object(n.useState)({}),t=Object(u.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)(new Date),o=Object(u.a)(l,2),i=o[0],s=o[1],f=Object(n.useState)(d()().format("YYYY-MM-DD")),p=Object(u.a)(f,2),g=p[0],h=p[1];Object(n.useEffect)((function(){fetch("".concat(E,"&date=").concat(g)).then((function(e){return e.json()})).then((function(e){return r(e)}))}),[g]),Object(n.useEffect)((function(){var e=sessionStorage.getItem("date");e&&(h(e),s(d()(e).toDate()))}),[]);return c.a.createElement("div",{className:"single-picture-layout"},c.a.createElement(v,{activeLink:"Featured picture"}),c.a.createElement("h1",null,"Picture of the day"),c.a.createElement("div",{className:"img-container"},c.a.createElement("img",{src:a.url})),c.a.createElement("div",{className:"date-picker-container"},c.a.createElement("p",null,"Choose day: "),c.a.createElement(m.a,{todayButton:"Today",selected:i,onChange:function(e){var t;s(e),t=d()(e).format("YYYY-MM-DD"),sessionStorage.setItem("date",t),h(t)}})))},h=(a(137),function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)((function(){fetch("".concat(E,"&start_date=").concat(p,"&end_date=2020-06-21")).then((function(e){return e.json()})).then((function(e){return r(e)}))}),[a]),c.a.createElement(n.Fragment,null,c.a.createElement(v,{activeLink:"Gallery"}),c.a.createElement("div",{className:"gallery-layout"},a.reverse().map((function(e,t){return c.a.createElement("div",{className:"gallery-img-container",key:t},c.a.createElement("img",{src:e.url,alt:e.title}),c.a.createElement("p",null,e.date),c.a.createElement("p",null,e.title))}))))});var y=function(){return c.a.createElement(o.a,null,c.a.createElement(i.d,null,c.a.createElement(i.b,{exact:!0,path:"/featured_picture",component:g}),c.a.createElement(i.b,{exact:!0,path:"/gallery",component:h}),c.a.createElement(i.a,{to:"/featured_picture"})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},64:function(e,t,a){e.exports=a(138)},69:function(e,t,a){},70:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){}},[[64,1,2]]]);
//# sourceMappingURL=main.c997fbb3.chunk.js.map