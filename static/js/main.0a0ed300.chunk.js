(this.webpackJsonpmovie_app_tony=this.webpackJsonpmovie_app_tony||[]).push([[0],{44:function(e,t,s){},45:function(e,t,s){},46:function(e,t,s){"use strict";s.r(t);var a=s(0),n=s(2),r=s.n(n),i=s(13),c=s.n(i),o=s(4),m=s.n(o),l=s(14),j=s(15),d=s(16),u=s(19),v=s(18),h=s(17),p=s.n(h);s(44);var _=function(e){var t=e.year,s=e.rating,n=e.title,r=e.summary,i=e.poster,c=e.genres;return Object(a.jsxs)("div",{className:"movie",children:[Object(a.jsx)("img",{src:i,alt:n}),Object(a.jsxs)("div",{className:"movie__data",children:[Object(a.jsx)("h3",{className:"movie__title",children:n}),Object(a.jsx)("h5",{className:"movie__year",children:t}),Object(a.jsxs)("h5",{className:"movie__rating",children:[s,"/10"]}),Object(a.jsxs)("p",{className:"movie__summary",children:[r.slice(0,140),"..."]}),Object(a.jsx)("ul",{className:"movie__genres",children:c.map((function(e,t){return Object(a.jsx)("li",{className:"genres__genre",children:e},t)}))})]})]})},b=(s(45),function(e){Object(u.a)(s,e);var t=Object(v.a)(s);function s(){var e;Object(j.a)(this,s);for(var a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={isLoading:!0,movies:[]},e.getMovies=Object(l.a)(m.a.mark((function t(){var s,a;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.a.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");case 2:s=t.sent,a=s.data.data.movies,e.setState({movies:a,isLoading:!1});case 5:case"end":return t.stop()}}),t)}))),e}return Object(d.a)(s,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,s=e.movies;return Object(a.jsx)("section",{className:"container",children:t?Object(a.jsx)("div",{className:"loader",children:Object(a.jsx)("span",{className:"loader__text",children:"Loading..."})}):Object(a.jsx)("div",{className:"movies",children:s.map((function(e){return Object(a.jsx)(_,{year:e.year,rating:e.rating,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres},e.id)}))})})}}]),s}(r.a.Component));c.a.render(Object(a.jsx)(b,{}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.0a0ed300.chunk.js.map