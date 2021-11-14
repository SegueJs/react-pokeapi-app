(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{23:function(e,t,n){},24:function(e,t,n){},26:function(e,t,n){},27:function(e,t,n){},28:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),s=n(17),a=n.n(s),i=(n(23),n(5)),o=n(2),l=(n(24),n(0));function j(){return Object(l.jsxs)("div",{className:"about-container",children:[Object(l.jsx)("h1",{children:"About"}),Object(l.jsxs)("p",{children:["This App was created with Reactjs by Sebastian Sierra using ",Object(l.jsx)("a",{href:"https://www.pokeapi.co",target:"_blank",children:"Pokeapi"})]})]})}n(26);function u(){return Object(l.jsxs)("div",{className:"contact-container",children:[Object(l.jsx)("h1",{children:"Contact"}),Object(l.jsxs)("p",{children:["You would go to my portfolio!, ",Object(l.jsx)("a",{href:"",children:"Let's go!"})," "]})]})}var h=n(12),d=n.n(h),b=n(16);n(27);function p(e){var t=e.name,n=e.url,r=function(){return n.split("/")[6]};return Object(l.jsx)("div",{className:"list-item",children:Object(l.jsxs)("div",{className:"content",children:[Object(l.jsx)("div",{className:"img-card",children:Object(l.jsx)("img",{src:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/".concat(r(),".png"),alt:""})}),Object(l.jsx)("p",{children:t}),Object(l.jsx)(i.b,{className:"info-button",to:"/pokemon/".concat(r()),children:Object(l.jsx)("button",{children:"Ver detalles"})})]})})}n(28);var m=n(6),x=n.n(m),O=n(10),f=n(18);function g(e){return v.apply(this,arguments)}function v(){return(v=Object(O.a)(x.a.mark((function e(t){var n,r,c,s,a,i;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.url,r=t.method,c=void 0===r?"get":r,s=t.body,a=t.headers,e.prev=1,e.next=4,fetch(n,{method:c,body:s,headers:a});case 4:return i=e.sent,e.abrupt("return",i.json());case 8:e.prev=8,e.t0=e.catch(1),Promise.reject(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}var k=n.n(f)()((function(e,t){return{getPokemons:function(){var t=Object(O.a)(x.a.mark((function t(){var n;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e({isLoading:!0,errorMsg:"",hasError:!1}),t.next=4,g({url:"https://pokeapi.co/api/v2/pokemon?limit=100"});case 4:n=t.sent,e({pokemons:n.results}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),e({pokemons:[],hasError:!0,errorMsg:"Something happened, please verify your connection"});case 11:return t.prev=11,e({isLoading:!1}),t.finish(11);case 14:case"end":return t.stop()}}),t,null,[[0,8,11,14]])})));return function(){return t.apply(this,arguments)}}(),pokemons:[],getPokemonDetail:function(){var t=Object(O.a)(x.a.mark((function t(n){var r;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n){t.next=2;break}return t.abrupt("return");case 2:return t.prev=2,e({isLoading:!0,errorMsg:"",hasError:!1}),t.next=6,g({url:"https://pokeapi.co/api/v2/pokemon/".concat(n)});case 6:r=t.sent,e({pokemonDetail:r}),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(2),e({pokemonDetail:{},hasError:!0,errorMsg:"Something happened, please verify your connection"});case 13:return t.prev=13,e({isLoading:!1}),t.finish(13);case 16:case"end":return t.stop()}}),t,null,[[2,10,13,16]])})));return function(e){return t.apply(this,arguments)}}(),getPokemonImg:function(){var t=Object(O.a)(x.a.mark((function t(n){var r;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n){t.next=2;break}return t.abrupt("return");case 2:try{r="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/".concat(n,".png"),e({pokemonImg:r})}catch(c){e({pokemonImg:""})}case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),pokemonImg:"",pokemonDetail:{},isLoading:!1,errorMsg:"",hasError:!1,getSearchText:function(){},handleIsSearching:function(){var n=t().isSearching;e({isSearching:!n}),console.log(t().isSearching)},isSearching:!1,setSearchText:function(n){e({searchText:n.toLowerCase()}),console.log(t().searchText)},searchText:""}})),S=k;function y(e){var t=e.pokemons,n=S((function(e){return{isSearching:e.isSearching,searchText:e.searchText}})),r=n.isSearching,c=n.searchText;if(r){var s=t.filter((function(e){return e.name.includes(c)}));return console.log(s),Object(l.jsx)("div",{className:"pokemon-list_container",children:null===s||void 0===s?void 0:s.map((function(e,t){return Object(l.jsx)(p,Object(b.a)({},e),t)}))})}return Object(l.jsx)("div",{className:"pokemon-list_container",children:null===t||void 0===t?void 0:t.map((function(e,t){return Object(l.jsx)(p,Object(b.a)({},e),t)}))})}function w(e){var t=e.title;return Object(l.jsx)("div",{children:Object(l.jsx)("p",{style:{color:"#fff",fontSize:"2rem"},children:t})})}function N(e){var t=e.msg;return Object(l.jsx)("p",{children:t})}n(30);function E(){var e=S((function(e){return{getPokemons:e.getPokemons,pokemons:e.pokemons,isLoading:e.isLoading,hasError:e.hasError,errorMsg:e.errorMsg}}),d.a),t=e.getPokemons,n=e.pokemons,c=e.isLoading,s=e.hasError,a=e.errorMsg;return Object(r.useEffect)((function(){t().catch(null)}),[]),c?Object(l.jsx)(w,{title:"Loading Results"}):Object(l.jsx)("div",{className:"principal-container",children:s?Object(l.jsx)(N,{msg:a}):Object(l.jsx)(y,{pokemons:n})})}function P(){return Object(l.jsx)("div",{children:Object(l.jsx)("p",{children:"Sorry, I can search him"})})}function L(e){var t=e.stats;return Object(l.jsx)(l.Fragment,{children:null===t||void 0===t?void 0:t.map((function(e,t){var n=e.stat,r=e.base_stat;return Object(l.jsx)("div",{className:"stats-container",style:{display:"flex"},children:Object(l.jsxs)("p",{children:[n.name,": ".concat(r,"%")]})},t)}))})}n(31);var I=n(8),T=n(9);function C(){var e,t=Object(o.g)().id,n=S((function(e){return{getPokemonDetail:e.getPokemonDetail,pokemonDetail:e.pokemonDetail,isLoading:e.isLoading,hasError:e.hasError,errorMsg:e.errorMsg}}),d.a),c=n.getPokemonDetail,s=n.pokemonDetail,a=n.isLoading,j=n.hasError,u=n.errorMsg;return Object(r.useEffect)((function(){c(t).catch(null)}),[]),a?Object(l.jsx)(w,{title:"Cargando pokemon..."}):Object(l.jsx)("div",{className:"pokemon-detail_container",children:j?Object(l.jsx)(N,{msg:u}):Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(i.b,{to:"/",className:"back-button",children:Object(l.jsx)(I.a,{icon:T.b})}),Object(l.jsxs)("div",{className:"pokemon-detail_card",children:[Object(l.jsx)("div",{className:"title",children:Object(l.jsx)("h3",{children:"General Info"})}),Object(l.jsxs)("p",{children:[" ","Name: ".concat(null===s||void 0===s?void 0:s.name)," "]}),Object(l.jsxs)("p",{children:[" ","Weight: ".concat(null===s||void 0===s?void 0:s.weight)," Kg"]}),Object(l.jsxs)("p",{children:[" ","Height: ".concat(null===s||void 0===s?void 0:s.height)," Cm"]})]}),Object(l.jsxs)("div",{className:"pokemon-detail_card",children:[Object(l.jsx)("div",{className:"title",children:Object(l.jsx)("h3",{children:"Habilities"})}),Object(l.jsx)(L,{stats:null!==(e=null===s||void 0===s?void 0:s.stats)&&void 0!==e?e:[]})]})]})})}function M(){var e=Object(o.e)().pathname;return Object(r.useEffect)((function(){window.scrollTo(0,0)}),[e]),null}var D=n(7);n(37),n(38);function _(){var e=S((function(e){return{isSearching:e.isSearching,handleIsSearching:e.handleIsSearching,setSearchText:e.setSearchText}})),t=e.isSearching,n=e.handleIsSearching,r=e.setSearchText;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("input",{className:"search-bar",placeholder:"Search",type:"text",onChange:function(e){var t=e.target.value;r(t)}}),Object(l.jsx)("button",{className:"search-button",onClick:n,type:"submit",style:t?{background:"#f33"}:null,children:Object(l.jsx)(I.a,{icon:T.c})})]})}function A(){var e=Object(r.useState)("menu"),t=Object(D.a)(e,2),n=t[0],c=t[1];return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("nav",{children:[Object(l.jsx)("h1",{className:"logo",children:"SEGUE"}),Object(l.jsx)("div",{className:"search",children:Object(l.jsx)(_,{})}),Object(l.jsx)("button",{id:"hamburger",onClick:function(){c("menu"===n?"menu-active":"menu")},children:Object(l.jsx)(I.a,{icon:T.a})}),Object(l.jsxs)("ul",{className:n,children:[Object(l.jsx)("li",{children:Object(l.jsx)(i.b,{to:"/",onClick:c,children:"Home"})}),Object(l.jsx)("li",{children:Object(l.jsx)(i.b,{to:"/about",onClick:c,children:"About"})}),Object(l.jsx)("li",{children:Object(l.jsx)(i.b,{to:"/Contact",onClick:c,children:"Contact"})})]})]})})}var F=function(){return Object(l.jsxs)(i.a,{children:[Object(l.jsx)(M,{}),Object(l.jsxs)("div",{children:[Object(l.jsx)(A,{}),Object(l.jsxs)(o.c,{children:[Object(l.jsx)(o.a,{path:"/",exact:!0,element:Object(l.jsx)(E,{})}),Object(l.jsx)(o.a,{path:"/about",element:Object(l.jsx)(j,{})}),Object(l.jsx)(o.a,{path:"/contact",element:Object(l.jsx)(u,{})}),Object(l.jsx)(o.a,{path:"*",exact:!0,element:Object(l.jsx)(P,{})}),Object(l.jsx)(o.a,{path:"/pokemon/:id",element:Object(l.jsx)(C,{})})]})]})]})};var H=function(){return Object(l.jsx)(F,{})};a.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(H,{})}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.c3738061.chunk.js.map