"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[278],{97:function(e,t,n){var r=n(689),a=n(87),u=n(184);t.Z=function(e){var t=e.movies,n=(0,r.TH)();return(0,u.jsx)("ul",{children:t.map((function(e){var t=e.id,r=e.title,c=e.name;return(0,u.jsx)("li",{children:(0,u.jsx)(a.rU,{to:"/movies/".concat(t),state:{from:n},children:r||c})},t)}))})}},580:function(e,t,n){n.d(t,{Df:function(){return s},Pg:function(){return l},Uk:function(){return m},gH:function(){return p},zv:function(){return h}});var r=n(861),a=n(757),u=n.n(a),c=n(243),i="bac05ff424f5bb3299d7f1868da01dae";function s(){return o.apply(this,arguments)}function o(){return(o=(0,r.Z)(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("trending/all/day?api_key=".concat(i));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(e){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("search/movie?api_key=".concat(i,"&language=en-US&query=").concat(t,"&page=1"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function l(e){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(t,"?api_key=").concat(i,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(e){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(t,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(e){return y.apply(this,arguments)}function y(){return(y=(0,r.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(t,"/reviews?api_key=").concat(i,"&language=en-US&page=1"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}c.Z.defaults.baseURL="https://api.themoviedb.org/3/"},278:function(e,t,n){n.r(t);var r=n(861),a=n(439),u=n(757),c=n.n(u),i=n(791),s=n(97),o=n(580),p=n(87),f=n(184);t.default=function(){var e,t=(0,p.lr)(),n=(0,a.Z)(t,2),u=n[0],l=n[1],v=(0,i.useState)(null),h=(0,a.Z)(v,2),d=h[0],m=h[1],y=null!==(e=u.get("query"))&&void 0!==e?e:"";(0,i.useEffect)((function(){var e=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,o.gH)(t);case 3:n=e.sent,m(n.results),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}();e(y)}),[y]);return(0,f.jsxs)("main",{children:[(0,f.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=e.currentTarget;l({query:t.elements.query.value}),t.reset()},children:[(0,f.jsx)("input",{type:"text",name:"query"}),(0,f.jsx)("button",{type:"submit",children:"Search"})]}),d&&(0,f.jsx)(s.Z,{movies:d})]})}}}]);
//# sourceMappingURL=278.3a0a45a9.chunk.js.map