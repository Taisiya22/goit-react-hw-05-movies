"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[961],{580:function(e,n,t){t.d(n,{Df:function(){return u},Pg:function(){return d},Uk:function(){return x},gH:function(){return p},zv:function(){return h}});var r=t(861),a=t(757),c=t.n(a),i=t(243),s="bac05ff424f5bb3299d7f1868da01dae";function u(){return o.apply(this,arguments)}function o(){return(o=(0,r.Z)(c().mark((function e(){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("trending/all/day?api_key=".concat(s));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(e){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("search/movie?api_key=".concat(s,"&language=en-US&query=").concat(n,"&page=1"));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(e){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("movie/".concat(n,"?api_key=").concat(s,"&language=en-US"));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(e){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("movie/".concat(n,"/credits?api_key=").concat(s,"&language=en-US"));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function x(e){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("movie/".concat(n,"/reviews?api_key=").concat(s,"&language=en-US&page=1"));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}i.Z.defaults.baseURL="https://api.themoviedb.org/3/"},961:function(e,n,t){t.r(n);var r=t(861),a=t(439),c=t(757),i=t.n(c),s=t(791),u=t(686),o=t.n(u),p=t(689),l=t(87),d=t(580),f=t(184);n.default=function(){var e,n,t,c=(0,s.useState)({}),u=(0,a.Z)(c,2),h=u[0],v=u[1],x=(0,s.useState)(null),g=(0,a.Z)(x,2)[1],m=(0,p.UO)().movieId,w=null!==(e=null===(n=(0,p.TH)().state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/",j=(0,s.useRef)(null);return(0,s.useEffect)((function(){var e=function(){var e=(0,r.Z)(i().mark((function e(n){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,d.Pg)(n);case 3:t=e.sent,j.current=t,v(j.current),console.log(j.current),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),g(e.t0),o().Notify.failure("Whoops, something went wrong: ".concat(e.t0.message));case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(n){return e.apply(this,arguments)}}();e(m)}),[m]),console.log(h),(0,f.jsxs)("main",{children:[(0,f.jsx)(l.rU,{to:w,children:"Go to back"}),j.current?(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)("div",{children:[(0,f.jsxs)("h2",{children:[h.title," (",h.release_date,")"]}),(0,f.jsx)("img",{src:"https://image.tmdb.org/t/p/w300".concat(h.poster_path),alt:h.title}),(0,f.jsxs)("p",{children:["User Score: ",Math.round(10*h.vote_average),"%"]}),(0,f.jsx)("h3",{children:"Overview"}),(0,f.jsx)("p",{children:h.overview}),(0,f.jsx)("h3",{children:"Genres"}),(0,f.jsx)("p",{children:null===h||void 0===h||null===(t=h.genres)||void 0===t?void 0:t.map((function(e){return e.name})).join(" ")})]}),(0,f.jsx)("h4",{children:"Additional information"}),(0,f.jsxs)("ul",{children:[(0,f.jsx)("li",{children:(0,f.jsx)(l.OL,{to:"/movies/".concat(h.id,"/cast"),children:"Cast"})}),(0,f.jsx)("li",{children:(0,f.jsx)(l.OL,{to:"/movies/".concat(h.id,"/reviews"),children:"Reviews"})})]})]}):(0,f.jsx)("p",{children:"Not found page"}),(0,f.jsx)(s.Suspense,{fallback:(0,f.jsx)("div",{children:"Loading..."}),children:(0,f.jsx)(p.j3,{})})]})}}}]);
//# sourceMappingURL=961.75b0dcac.chunk.js.map