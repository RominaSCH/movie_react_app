(this.webpackJsonpmovie_react_app=this.webpackJsonpmovie_react_app||[]).push([[0],{55:function(e,t,s){},65:function(e,t,s){},66:function(e,t,s){},67:function(e,t,s){},68:function(e,t,s){},69:function(e,t,s){"use strict";s.r(t);var a=s(0),n=s.n(a),c=s(28),i=s.n(c),r=s(8),o=s(2),l=s(17),j=s.n(l),m=s(29),u=s(11),d=s(12),b=s(14),v=s(13),h=s(30),p=s.n(h),O=(s(55),s(1));var x=function(e){var t=e.id,s=e.year,a=e.title,n=e.summary,c=e.poster,i=e.genres;return Object(O.jsx)(r.b,{to:{pathname:"/movie/".concat(t),state:{year:s,title:a,summary:n,poster:c,genres:i}},children:Object(O.jsxs)("div",{className:"movie",children:[Object(O.jsx)("img",{src:c,alt:a,title:a}),Object(O.jsxs)("div",{className:"movie__data",children:[Object(O.jsx)("h3",{style:{},className:"movie__title",children:a}),Object(O.jsx)("h5",{className:"movie__year",children:s}),Object(O.jsx)("ul",{className:"movie__genres",children:i.map((function(e,t){return Object(O.jsxs)("li",{className:"genres__genre",children:[" ",e]},t)}))}),Object(O.jsxs)("div",{className:"movie__summary",children:[n.slice(0,135),"..."]})]})]})})},_=(s(65),function(e){Object(b.a)(s,e);var t=Object(v.a)(s);function s(){var e;Object(u.a)(this,s);for(var a=arguments.length,n=new Array(a),c=0;c<a;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={isLoading:!0,movies:[]},e.getMovies=Object(m.a)(j.a.mark((function t(){var s,a;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.a.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating");case 2:s=t.sent,a=s.data.data.movies,e.setState({movies:a,isLoading:!1});case 5:case"end":return t.stop()}}),t)}))),e}return Object(d.a)(s,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,s=e.movies;return Object(O.jsx)("section",{className:"container",children:t?Object(O.jsx)("div",{className:"loader",children:Object(O.jsx)("span",{className:"loader__text",children:"Loading..."})}):Object(O.jsx)("div",{className:"movies",children:s.map((function(e){return Object(O.jsx)(x,{id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres},e.id)}))})})}}]),s}(n.a.Component));var y=function(e){return console.log(e),Object(O.jsx)("span",{children:"About this pages : I built it bcz I love movies."})},f=(s(66),function(e){Object(b.a)(s,e);var t=Object(v.a)(s);function s(){return Object(u.a)(this,s),t.apply(this,arguments)}return Object(d.a)(s,[{key:"componentDidMount",value:function(){var e=this.props,t=e.location,s=e.history;void 0===t.state&&s.push("/")}},{key:"render",value:function(){var e=this.props.location;return console.log(e.state),e.state?Object(O.jsxs)("div",{className:"detail-container",children:[Object(O.jsx)("img",{src:e.state.poster}),Object(O.jsxs)("div",{className:"text-box",children:[Object(O.jsx)("h1",{className:"detail__title",children:e.state.title}),Object(O.jsx)("div",{className:"detail__summary",children:e.state.summary})]})]}):null}}]),s}(n.a.Component));s(67);var g=function(){return Object(O.jsxs)("div",{className:"nav",children:[Object(O.jsx)(r.b,{to:"/",children:"Home"}),Object(O.jsx)(r.b,{to:"/about",children:"About"})]})};s(68);var N=function(){return Object(O.jsxs)(r.a,{children:[Object(O.jsx)(g,{}),Object(O.jsx)(o.a,{path:"/",exact:!0,component:_}),Object(O.jsx)(o.a,{path:"/about",component:y}),Object(O.jsx)(o.a,{path:"/movie/:id",component:f})]})};i.a.render(Object(O.jsx)(N,{}),document.getElementById("root"))}},[[69,1,2]]]);
//# sourceMappingURL=main.9b261e2d.chunk.js.map