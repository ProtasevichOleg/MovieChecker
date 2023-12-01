"use strict";(self.webpackChunkMovieChecker=self.webpackChunkMovieChecker||[]).push([[896],{7233:function(n,e,t){t.d(e,{Z:function(){return u}});var r,a=t(168),c=t(6444).ZP.div(r||(r=(0,a.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  height: 30vh;\n  font-size: 72px;\n  font-weight: 600;\n  color: ",";\n  opacity: 15%;\n  user-select: none;\n  text-transform: uppercase;\n  font-family: 'Poppins', sans-serif;\n"])),(function(n){return n.theme.colors.secondary})),o=t(184),u=function(n){var e=n.message;return(0,o.jsx)(c,{children:e})}},7526:function(n,e,t){t.d(e,{Z:function(){return r.Z}});var r=t(7233)},8896:function(n,e,t){t.r(e),t.d(e,{default:function(){return S}});var r,a,c,o,u,i=t(5861),s=t(9439),l=t(7757),f=t.n(l),p=t(2791),d=t(7689),h=t(7526),v=t(168),g=t(6444),m=g.ZP.ul(r||(r=(0,v.Z)([""]))),Z=g.ZP.li(a||(a=(0,v.Z)(["\n  display: flex;\n  flex-direction: column;\n  padding: 10px;\n  color: ",";\n  background-color: ",";\n\n  &:nth-child(even) {\n    background-color: ",";\n  }\n"])),(function(n){return n.theme.colors.secondary}),(function(n){return n.theme.colors.darkReviewBackground}),(function(n){return n.theme.colors.lightReviewBackground})),x=g.ZP.strong(c||(c=(0,v.Z)(["\n  font-weight: bold;\n"]))),w=g.ZP.span(o||(o=(0,v.Z)(["\n  display: inline-block;\n  margin-right: 0.5em;\n"]))),y=g.ZP.a(u||(u=(0,v.Z)(["\n  color: ",";\n  text-decoration: none;\n  font-weight: bold;\n"])),(function(n){return n.theme.colors.primary})),k=t(3585),b=t(184),j=function(n){var e=n.reviews,t=function(n,e){return n.length>e?n.substring(0,e)+"...":n};return(0,b.jsx)(m,{children:e.map((function(n){var e=n.id,r=n.author,a=n.content,c=n.url;return(0,b.jsxs)(Z,{children:[(0,b.jsx)(x,{children:r}),(0,b.jsx)(w,{children:t(a,k.Jl)}),a.length>k.Jl&&(0,b.jsx)(y,{href:c,target:"_blank",rel:"noopener noreferrer",children:"Read full review"})]},e)}))})},_=t(8542),P=t(9086),R=t(8037),S=function(){var n=(0,d.UO)().movieId,e=(0,p.useState)([]),t=(0,s.Z)(e,2),r=t[0],a=t[1],c=(0,p.useState)("idle"),o=(0,s.Z)(c,2),u=o[0],l=o[1];return(0,p.useEffect)((function(){var e=!0,t=function(){var t=(0,i.Z)(f().mark((function t(){var r;return f().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return l("pending"),t.prev=1,t.next=4,(0,P.L_)(n);case 4:r=t.sent,e&&(a(r),l("responded")),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(1),(0,R.Z)("Reviews loading failed. Please refresh the page"),e&&l("rejected");case 12:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(){return t.apply(this,arguments)}}();return t(),function(){e=!1}}),[n]),(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(_.Z,{title:"Reviews"}),"pending"===u&&null,"rejected"===u&&(0,b.jsx)(h.Z,{message:"Reviews loading failed. Please refresh the page"}),"responded"===u&&r.length>0&&(0,b.jsx)(j,{reviews:r}),"responded"===u&&0===r.length&&(0,b.jsx)(h.Z,{message:"No reviews found"})]})}},8542:function(n,e,t){t.d(e,{Z:function(){return u}});var r,a=t(168),c=t(6444).ZP.h2(r||(r=(0,a.Z)(["\n  margin-bottom: 30px;\n  color: ",";\n"])),(function(n){return n.theme.colors.primary})),o=t(184),u=function(n){var e=n.title;return(0,o.jsx)(c,{children:e})}},9086:function(n,e,t){t.d(e,{L_:function(){return Z},Me:function(){return g},_k:function(){return l},jC:function(){return h},pg:function(){return p}});var r=t(5861),a=t(7757),c=t.n(a),o=t(1243),u=t(691),i=t.n(u),s=t(3585);function l(){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(c().mark((function n(){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,i().start(),n.next=4,o.Z.get("trending/all/day?api_key=".concat(s.$h));case 4:return e=n.sent,i().done(),n.abrupt("return",e.data.results);case 9:throw n.prev=9,n.t0=n.catch(0),i().done(),n.t0;case 13:case"end":return n.stop()}}),n,null,[[0,9]])})))).apply(this,arguments)}function p(n){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,i().start(),n.next=4,o.Z.get("search/movie?api_key=".concat(s.$h,"&language=en-US&page=1&include_adult=false&query=").concat(e));case 4:return t=n.sent,i().done(),n.abrupt("return",t.data.results);case 9:throw n.prev=9,n.t0=n.catch(0),i().done(),n.t0;case 13:case"end":return n.stop()}}),n,null,[[0,9]])})))).apply(this,arguments)}function h(n){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,i().start(),n.next=4,o.Z.get("movie/".concat(e,"?api_key=").concat(s.$h,"&language=en-US&external_source=imdb_id"));case 4:return t=n.sent,i().done(),n.abrupt("return",t.data);case 9:throw n.prev=9,n.t0=n.catch(0),i().done(),n.t0;case 13:case"end":return n.stop()}}),n,null,[[0,9]])})))).apply(this,arguments)}function g(n){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,i().start(),n.next=4,o.Z.get("movie/".concat(e,"/credits?api_key=").concat(s.$h,"&language=en-US"));case 4:return t=n.sent,i().done(),n.abrupt("return",t.data.cast);case 9:throw n.prev=9,n.t0=n.catch(0),i().done(),n.t0;case 13:case"end":return n.stop()}}),n,null,[[0,9]])})))).apply(this,arguments)}function Z(n){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,i().start(),n.next=4,o.Z.get("movie/".concat(e,"/reviews?api_key=").concat(s.$h,"&language=en-US"));case 4:return t=n.sent,i().done(),n.abrupt("return",t.data.results);case 9:throw n.prev=9,n.t0=n.catch(0),i().done(),n.t0;case 13:case"end":return n.stop()}}),n,null,[[0,9]])})))).apply(this,arguments)}o.Z.defaults.baseURL="https://api.themoviedb.org/3/"},3585:function(n,e,t){t.d(e,{$h:function(){return r},Jl:function(){return c},f_:function(){return a}});var r="5ba3a910e660e35337f3e89e0f4cf206",a="https://image.tmdb.org/t/p/w500",c=600},8037:function(n,e,t){var r=t(1830),a=t.n(r);e.Z=function(n){a().fire({icon:"warning",title:"Oops...",text:n,timer:3e3})}}}]);
//# sourceMappingURL=896.f2d0d091.chunk.js.map