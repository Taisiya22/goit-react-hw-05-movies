"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[544],{81:function(t,n,e){e.d(n,{Z:function(){return o}});var r=e(87),a=e(689),c="MovieList_list__yjDCC",u="MovieList_link__+cn-g",i="MovieList_item__tDivI",s=e(184),o=function(t){var n=t.movies,e=(0,a.TH)();return(0,s.jsx)("ul",{className:c,children:n.map((function(t){var n=t.id,a=t.title,c=t.name;return(0,s.jsx)("li",{className:i,children:(0,s.jsx)(r.rU,{className:u,to:"/movies/".concat(n),state:{from:e},children:a||c})},n)}))})}},580:function(t,n,e){e.d(n,{Df:function(){return s},Pg:function(){return l},Uk:function(){return m},gH:function(){return p},zv:function(){return h}});var r=e(861),a=e(757),c=e.n(a),u=e(243),i="bac05ff424f5bb3299d7f1868da01dae";function s(){return o.apply(this,arguments)}function o(){return(o=(0,r.Z)(c().mark((function t(){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("trending/all/day?api_key=".concat(i));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function p(t){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("search/movie?api_key=".concat(i,"&language=en-US&query=").concat(n,"&page=1"));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function l(t){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("movie/".concat(n,"?api_key=").concat(i,"&language=en-US"));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function h(t){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("movie/".concat(n,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function m(t){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("movie/".concat(n,"/reviews?api_key=").concat(i,"&language=en-US&page=1"));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}u.Z.defaults.baseURL="https://api.themoviedb.org/3/"},544:function(t,n,e){e.r(n);var r=e(861),a=e(439),c=e(757),u=e.n(c),i=e(791),s=e(686),o=e.n(s),p=e(580),f=e(81),l=e(184);n.default=function(){var t=(0,i.useState)([]),n=(0,a.Z)(t,2),e=n[0],c=n[1],s=(0,i.useState)(null),v=(0,a.Z)(s,2)[1];return(0,i.useEffect)((function(){var t=function(){var t=(0,r.Z)(u().mark((function t(){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,p.Df)();case 3:n=t.sent,c(n.results),t.next=11;break;case 7:t.prev=7,t.t0=t.catch(0),v(t.t0),o().Notify.failure("Whoops, something went wrong: ".concat(t.t0.message));case 11:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();t()}),[]),(0,l.jsxs)("main",{children:[(0,l.jsx)("h2",{children:"Trending today"}),(0,l.jsx)(f.Z,{movies:e})]})}}}]);
//# sourceMappingURL=544.10b60b8e.chunk.js.map