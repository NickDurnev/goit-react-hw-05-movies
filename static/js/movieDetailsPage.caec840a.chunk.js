"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[721],{1444:function(n,e,t){t.r(e),t.d(e,{default:function(){return _}});var r,a,i,s,c=t(3504),o=t(6871),u=t(1933),l=t(2791),p=t(4222),d=t(9838),h=t(409),g=t(168),x=t(6031),f=x.ZP.div(r||(r=(0,g.Z)(["\n  display: flex;\n  padding: 10px;\n\n  & > img {\n    width: 300px;\n    height: auto;\n  }\n"]))),m=x.ZP.div(a||(a=(0,g.Z)(["\n  max-width: 40%;\n  & > h1,\n  h2 {\n    margin-bottom: 10px;\n  }\n\n  & h2 {\n    font-size: 20px;\n    font-weight: 500;\n    font-style: italic;\n    color: #817d7d;\n  }\n\n  & > p {\n    line-height: 1.5;\n    margin-bottom: 10px;\n  }\n"]))),v=x.ZP.ul(i||(i=(0,g.Z)(["\n  width: 70%;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 10px;\n\n  & > li:first-child {\n    font-weight: 600;\n    text-align: left;\n    margin-right: 20px;\n  }\n\n  & > li:last-child {\n    text-align: right;\n  }\n\n  & > li > p + p {\n    margin-top: 10px;\n  }\n"]))),j=x.ZP.ul(s||(s=(0,g.Z)(["\n  width: 70%;\n  margin-right: auto;\n  margin-left: auto;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-around;\n  margin-top: 5px;\n\n  & > li {\n    padding: 5px;\n    background-color: var(--main-bcg-color);\n    color: var(--add-text-color);\n    border-radius: 5px;\n  }\n"]))),y=t(184),w=function(n){var e=n.movieData,t=e.poster_path,r=e.release_date,a=e.title,i=e.tagline,s=e.runtime,c=e.overview,o=e.budget,u=e.genres;return(0,y.jsxs)(f,{children:[(0,y.jsx)("div",{children:(0,y.jsx)("img",{src:"https://image.tmdb.org/t/p/w300".concat(t),alt:a})}),(0,y.jsxs)(m,{children:[(0,y.jsx)("h1",{children:a}),""!==i&&(0,y.jsxs)("h2",{children:['"',i,'"']}),(0,y.jsx)("p",{children:c}),(0,y.jsxs)(v,{children:[(0,y.jsxs)("li",{children:[(0,y.jsx)("p",{children:"Release date:"}),(0,y.jsx)("p",{children:"Runtime:"}),0!==o&&(0,y.jsx)("p",{children:"Budget:"})]}),(0,y.jsxs)("li",{children:[(0,y.jsxs)("p",{children:[" ",r]}),(0,y.jsxs)("p",{children:[s," minutes "]}),0!==o&&(0,y.jsxs)("p",{children:[o," $"]})]})]}),(0,y.jsx)(j,{children:u.map((function(n){var e=n.id,t=n.name;return(0,y.jsx)("li",{children:(0,y.jsx)("p",{children:t})},e)}))})]})]})},b=(0,l.lazy)((function(){return t.e(277).then(t.bind(t,1544))})),Z=(0,l.lazy)((function(){return t.e(912).then(t.bind(t,5812))})),_=function(){var n=(0,o.UO)().movieId,e=(0,u.useQuery)(["movieDetails",{movieId:n}],h.hG,{staleTime:6e4,cacheTime:6e4}),t=e.data,r=e.error,a=e.isLoading,i=e.isError,s=e.isSuccess;return a?(0,y.jsx)(d.Z,{}):i?p.Am.error("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(r.message)):s?(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(w,{movieData:t}),(0,y.jsxs)("div",{children:[(0,y.jsx)("p",{children:"Additional imformation"}),(0,y.jsx)(c.rU,{to:"/movies/".concat(n,"/cast"),children:"Cast"}),(0,y.jsx)(c.rU,{to:"/movies/".concat(n,"/reviews"),children:"Reviews"})]}),(0,y.jsx)(l.Suspense,{fallback:(0,y.jsx)(d.Z,{}),children:(0,y.jsxs)(o.Z5,{children:[(0,y.jsx)(o.AW,{path:"/cast",element:(0,y.jsx)(b,{})}),(0,y.jsx)(o.AW,{path:"/reviews",element:(0,y.jsx)(Z,{})})]})})]}):void 0}},409:function(n,e,t){t.d(e,{Cm:function(){return v},TW:function(){return f},gY:function(){return l},hG:function(){return g},qF:function(){return d}});var r=t(885),a=t(5861),i=t(7757),s=t.n(i),c=t(4569),o=t.n(c);o().defaults.baseURL="https://api.themoviedb.org/3/";var u="105ba628fde77462ee84526f3393a31c";function l(){return p.apply(this,arguments)}function p(){return(p=(0,a.Z)(s().mark((function n(){var e;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o().get("trending/movie/day?api_key=".concat(u));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function d(n){return h.apply(this,arguments)}function h(){return(h=(0,a.Z)(s().mark((function n(e){var t,a,i,c,l,p,d,h,g;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t=e.pageParam,a=void 0===t?1:t,i=e.queryKey,c=(0,r.Z)(i,2),l=c[0],p=c[1].query,console.log("".concat(l)),""===p){n.next=10;break}return n.next=6,o().get("search/movie?api_key=".concat(u,"&language=en-US&query=").concat(p,"&page=").concat(a,"&include_adult=false"));case 6:return d=n.sent,h=d.data.results,g=d.data.total_pages,n.abrupt("return",{results:h,nextPage:a+1,totalPages:g});case 10:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function g(n){return x.apply(this,arguments)}function x(){return(x=(0,a.Z)(s().mark((function n(e){var t,a,i,c,l;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.queryKey,a=(0,r.Z)(t,2),i=a[0],c=a[1].movieId,console.log("".concat(i)),n.next=5,o().get("movie/".concat(c,"?api_key=").concat(u,"&language=en-US"));case 5:return l=n.sent,n.abrupt("return",l.data);case 7:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function f(n){return m.apply(this,arguments)}function m(){return(m=(0,a.Z)(s().mark((function n(e){var t,a,i,c,l;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.queryKey,a=(0,r.Z)(t,2),i=a[0],c=a[1].movieId,console.log("".concat(i)),n.next=5,o().get("movie/".concat(c,"/credits?api_key=").concat(u,"&language=en-US"));case 5:return l=n.sent,n.abrupt("return",l.data);case 7:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function v(n){return j.apply(this,arguments)}function j(){return(j=(0,a.Z)(s().mark((function n(e){var t,a,i,c,l,p,d,h,g;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.pageParam,a=void 0===t?1:t,i=e.queryKey,c=(0,r.Z)(i,2),l=c[0],p=c[1].movieId,console.log("".concat(l)),n.next=5,o().get("movie/".concat(p,"/reviews?api_key=").concat(u,"&language=en-US&page=1"));case 5:return d=n.sent,h=d.data.results,g=d.data.total_pages,n.abrupt("return",{results:h,nextPage:a+1,totalPages:g});case 9:case"end":return n.stop()}}),n)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=movieDetailsPage.caec840a.chunk.js.map