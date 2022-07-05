"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[411],{6530:function(n,t,e){e.d(t,{LZ:function(){return p},W2:function(){return s},jp:function(){return l}});var r,a,o,i=e(168),c=e(6031),u=e(3504),s=c.ZP.div(r||(r=(0,i.Z)(["\n  padding: 20px 0;\n"]))),p=c.ZP.div(a||(a=(0,i.Z)(["\n  display: flex;\n  margin-top: 20px;\n\n  & img {\n    width: 400px;\n    height: auto;\n  }\n"]))),l=(0,c.ZP)(u.rU)(o||(o=(0,i.Z)(["\n  display: block;\n  width: 200px;\n  padding: 15px;\n  border-radius: 5px;\n  font-family: sans-serif;\n  text-transform: uppercase;\n  text-align: center;\n  color: ",";\n  background-color: ",";\n  transition: background-color ","\n    ",";\n\n  &:hover,\n  &:focus {\n    background-color: ",";\n  }\n"])),(function(n){return n.theme.elementColor}),(function(n){return n.theme.bgElementColor}),(function(n){return n.theme.hoverTransition}),(function(n){return n.theme.hoverTimeFunction}),(function(n){return n.theme.bgElementHoverColor}))},6747:function(n,t,e){e.r(t),e.d(t,{default:function(){return m}});var r,a=e(2791),o=e(3504),i=e(6871),c=e(1933),u=e(4222),s=e(409),p=e(8329),l=e(4744),d=e(168),f=e(6031),g=e(6530),x=(0,f.ZP)(g.jp)(r||(r=(0,d.Z)(["\n  margin-top: 10px;\n"]))),h=e(7519),v=e(184),m=function(){var n,t,e,r,d,f,g=(0,i.UO)().actorId,m=(0,i.TH)(),y=(0,i.s0)(),j=(0,c.useQuery)(["filmsByActor",{actorId:g}],s._0,{staleTime:6e4,cacheTime:6e4}),b=j.data,Z=j.error,w=j.isLoading,k=j.isError,_=j.isSuccess;return(0,a.useEffect)((function(){if(404===b){var n=localStorage.getItem("actorId");y("/moviesbyactor/".concat(n))}}),[b,y]),w&&b?(0,v.jsx)(h.Z,{}):k?u.Am.error("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(Z.message)):(0,v.jsx)(v.Fragment,{children:_&&404!==b&&(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(x,{to:null!==(n=null===m||void 0===m||null===(t=m.state)||void 0===t||null===(e=t.from)||void 0===e?void 0:e.location)&&void 0!==n?n:"/",children:null!==(r=null===m||void 0===m||null===(d=m.state)||void 0===d||null===(f=d.from)||void 0===f?void 0:f.label)&&void 0!==r?r:"Go back"}),(0,v.jsx)(p.Z,{children:b.cast.map((function(n){return(0,v.jsx)("li",{children:(0,v.jsx)(o.rU,{to:"/movies/".concat(n.id),children:(0,v.jsx)(l.Z,{movie:n})})},n.id)}))})]})})}},8329:function(n,t,e){e.d(t,{Z:function(){return c}});var r,a=e(168),o=e(6031).ZP.ul(r||(r=(0,a.Z)(["\n  width: 100%;\n  padding: 15px 0;\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  gap: 20px;\n  justify-items: center;\n  align-items: stretch;\n"]))),i=e(184),c=function(n){var t=n.children;return(0,i.jsx)(o,{children:t})}},7519:function(n,t,e){e.d(t,{Z:function(){return p}});var r,a=e(1413),o=(e(2791),e(8175)),i=e(168),c=e(6031).ZP.div(r||(r=(0,i.Z)(["\n  width: 100%;\n  padding: 15px;\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  gap: 20px;\n  justify-items: center;\n  align-items: stretch;\n"]))),u=e(184),s=function(n){return(0,u.jsxs)(o.ZP,(0,a.Z)((0,a.Z)({speed:2,width:400,height:460,viewBox:"0 0 400 460",style:{width:"100%",height:"auto"},backgroundColor:"#f3f3f3",foregroundColor:"#ecebeb"},n),{},{children:[(0,u.jsx)("rect",{x:"110",y:"466",rx:"2",ry:"2",width:"140",height:"10"}),(0,u.jsx)("rect",{x:"32",y:"-24",rx:"0",ry:"0",width:"384",height:"400"}),(0,u.jsx)("rect",{x:"32",y:"400",rx:"0",ry:"0",width:"392",height:"31"})]}))},p=function(){return(0,u.jsxs)(c,{children:[(0,u.jsx)(s,{}),(0,u.jsx)(s,{}),(0,u.jsx)(s,{}),(0,u.jsx)(s,{}),(0,u.jsx)(s,{}),(0,u.jsx)(s,{}),(0,u.jsx)(s,{}),(0,u.jsx)(s,{}),(0,u.jsx)(s,{}),(0,u.jsx)(s,{}),(0,u.jsx)(s,{}),(0,u.jsx)(s,{}),(0,u.jsx)(s,{}),(0,u.jsx)(s,{}),(0,u.jsx)(s,{}),(0,u.jsx)(s,{}),(0,u.jsx)(s,{}),(0,u.jsx)(s,{}),(0,u.jsx)(s,{}),(0,u.jsx)(s,{})]})}},4744:function(n,t,e){e.d(t,{Z:function(){return s}});var r,a=e(168),o=e(6031).ZP.div(r||(r=(0,a.Z)(["\n  position: relative;\n  border-radius: 10px;\n  overflow: hidden;\n\n  & > img {\n    min-height: 485px;\n  }\n\n  & > div {\n    position: absolute;\n    top: 0;\n    right: 0;\n    width: 60px;\n    display: flex;\n    padding: 5px;\n    justify-content: space-around;\n    align-items: center;\n    background-color: #e2d5d5a6;\n    border-radius: 10px;\n    object-fit: cover;\n  }\n\n  & > div > p {\n    font-weight: 500;\n    color: ",";\n  }\n\n  & > p {\n    margin-top: 10px;\n    font-size: 1.2rem;\n    font-weight: 600;\n    color: ",";\n  }\n"])),(function(n){return n.theme.textColor}),(function(n){return n.theme.textColor})),i=e(9126),c=e(9436),u=e(184),s=function(n){var t=n.movie,e=t.poster_path,r=t.original_title,a=t.vote_average;return(0,u.jsxs)(o,{children:[(0,u.jsx)("img",{src:null!==e?"https://image.tmdb.org/t/p/w500".concat(e):c,alt:r}),(0,u.jsx)("p",{children:r}),(0,u.jsxs)("div",{children:[(0,u.jsx)(i.kum,{size:"20px",color:"gold"}),(0,u.jsx)("p",{children:a.toFixed(1)})]})]})}},409:function(n,t,e){e.d(t,{Cm:function(){return w},TW:function(){return b},_0:function(){return y},f8:function(){return v},gY:function(){return l},hG:function(){return x},np:function(){return _},qF:function(){return f}});var r=e(885),a=e(5861),o=e(7757),i=e.n(o),c=e(4569),u=e.n(c),s=e(4222);u().defaults.baseURL="https://api.themoviedb.org/3/";var p="105ba628fde77462ee84526f3393a31c";function l(){return d.apply(this,arguments)}function d(){return(d=(0,a.Z)(i().mark((function n(){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u().get("trending/movie/day?api_key=".concat(p));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function f(n){return g.apply(this,arguments)}function g(){return(g=(0,a.Z)(i().mark((function n(t){var e,a,o,c,l,d,f,g,x;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e=t.pageParam,a=void 0===e?1:e,o=t.queryKey,c=(0,r.Z)(o,2),l=c[0],d=c[1].query,console.log("".concat(l)),d){n.next=5;break}return n.abrupt("return");case 5:return n.next=7,u().get("search/movie?api_key=".concat(p,"&language=en-US&query=").concat(d,"&page=").concat(a,"&include_adult=false"));case 7:return f=n.sent,g=f.data.results,x=f.data.total_pages,g.length||s.Am.info("Movies were not found"),n.abrupt("return",{results:g,nextPage:a+1,totalPages:x});case 12:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function x(n){return h.apply(this,arguments)}function h(){return(h=(0,a.Z)(i().mark((function n(t){var e,a,o,c,s,l;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=t.queryKey,a=(0,r.Z)(e,2),o=a[0],c=a[1].movieId,console.log("".concat(o)),n.prev=3,n.next=6,u().get("movie/".concat(c,"?api_key=").concat(p,"&language=en-US"));case 6:return s=n.sent,n.next=9,s.data;case 9:return l=n.sent,n.abrupt("return",l);case 13:return n.prev=13,n.t0=n.catch(3),n.abrupt("return",n.t0.response.status);case 16:case"end":return n.stop()}}),n,null,[[3,13]])})))).apply(this,arguments)}function v(n){return m.apply(this,arguments)}function m(){return(m=(0,a.Z)(i().mark((function n(t){var e,a,o,c,s,l;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=t.queryKey,a=(0,r.Z)(e,2),o=a[0],c=a[1].actorId,console.log("".concat(o)),n.prev=3,n.next=6,u().get("person/".concat(c,"?api_key=").concat(p,"&language=en-US"));case 6:return s=n.sent,n.next=9,s.data;case 9:return l=n.sent,n.abrupt("return",l);case 13:return n.prev=13,n.t0=n.catch(3),n.abrupt("return",n.t0.response.status);case 16:case"end":return n.stop()}}),n,null,[[3,13]])})))).apply(this,arguments)}function y(n){return j.apply(this,arguments)}function j(){return(j=(0,a.Z)(i().mark((function n(t){var e,a,o,c,s,l;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=t.queryKey,a=(0,r.Z)(e,2),o=a[0],c=a[1].actorId,console.log("".concat(o)),n.prev=3,n.next=6,u().get("person/".concat(c,"/movie_credits?api_key=").concat(p,"&language=en-US"));case 6:return s=n.sent,n.next=9,s.data;case 9:return l=n.sent,n.abrupt("return",l);case 13:return n.prev=13,n.t0=n.catch(3),n.abrupt("return",n.t0.response.status);case 16:case"end":return n.stop()}}),n,null,[[3,13]])})))).apply(this,arguments)}function b(n){return Z.apply(this,arguments)}function Z(){return(Z=(0,a.Z)(i().mark((function n(t){var e,a,o,c,s;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=t.queryKey,a=(0,r.Z)(e,2),o=a[0],c=a[1].movieId,console.log("".concat(o)),n.next=5,u().get("movie/".concat(c,"/credits?api_key=").concat(p,"&language=en-US"));case 5:return s=n.sent,n.abrupt("return",s.data);case 7:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function w(n){return k.apply(this,arguments)}function k(){return(k=(0,a.Z)(i().mark((function n(t){var e,a,o,c,s,l,d,f,g;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=t.pageParam,a=void 0===e?1:e,o=t.queryKey,c=(0,r.Z)(o,2),s=c[0],l=c[1].movieId,console.log("".concat(s)),n.next=5,u().get("movie/".concat(l,"/reviews?api_key=").concat(p,"&language=en-US&page=1"));case 5:return d=n.sent,f=d.data.results,g=d.data.total_pages,n.abrupt("return",{results:f,nextPage:a+1,totalPages:g});case 9:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function _(n){return P.apply(this,arguments)}function P(){return(P=(0,a.Z)(i().mark((function n(t){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u().get("movie/".concat(t,"/videos?api_key=").concat(p,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}},9436:function(n,t,e){n.exports=e.p+"static/media/Error 404 Wallpaper.8abd10198d38772bf2c0.jpg"}}]);
//# sourceMappingURL=ActorsMovies.b1cb97c1.chunk.js.map