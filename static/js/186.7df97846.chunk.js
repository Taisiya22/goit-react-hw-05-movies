"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[186],{186:function(t,e,n){n.r(e);var r=n(861),a=n(439),u=n(757),c=n.n(u),s=n(791),o=n(689),i=n(686),p=n.n(i),f=n(580),h=n(184);e.default=function(){var t=(0,s.useState)([]),e=(0,a.Z)(t,2),n=e[0],u=e[1],i=(0,s.useState)(null),l=(0,a.Z)(i,2)[1],v=(0,o.UO)().movieId;return(0,s.useEffect)((function(){var t=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,f.Uk)(e);case 3:n=t.sent,console.log(n.results),u(n.results),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(0),l(t.t0),p().Notify.failure("Whoops, something went wrong: ".concat(t.t0.message));case 12:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}();t(v)}),[v]),0!==n.length?(0,h.jsx)("ul",{children:n.map((function(t){var e=t.author,n=t.content,r=t.id;return(0,h.jsxs)("li",{children:[(0,h.jsxs)("h4",{children:[" Author: ",e]}),(0,h.jsx)("p",{children:n})]},r)}))}):(0,h.jsx)("p",{children:"we don't have any reviews for this movie"})}},580:function(t,e,n){n.d(e,{Df:function(){return o},Pg:function(){return h},Uk:function(){return g},gH:function(){return p},zv:function(){return v}});var r=n(861),a=n(757),u=n.n(a),c=n(243),s="bac05ff424f5bb3299d7f1868da01dae";function o(){return i.apply(this,arguments)}function i(){return(i=(0,r.Z)(u().mark((function t(){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("trending/movie/day?api_key=".concat(s));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function p(t){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(u().mark((function t(e){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("search/movie?api_key=".concat(s,"&language=en-US&query=").concat(e,"&page=1"));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function h(t){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(u().mark((function t(e){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("movie/".concat(e,"?api_key=").concat(s,"&language=en-US"));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function v(t){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(u().mark((function t(e){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("movie/".concat(e,"/credits?api_key=").concat(s,"&language=en-US"));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function g(t){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(u().mark((function t(e){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("movie/".concat(e,"/reviews?api_key=").concat(s,"&language=en-US&page=1"));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}c.Z.defaults.baseURL="https://api.themoviedb.org/3/"}}]);
//# sourceMappingURL=186.7df97846.chunk.js.map