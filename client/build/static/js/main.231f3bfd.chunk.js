(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(e,t,a){e.exports=a(51)},28:function(e,t,a){},47:function(e,t,a){},51:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(21),c=a.n(l),o=a(54),i=a(56),u=a(55),s=a(6),m=a(7),d=a(11),f=a(8),h=a(12);a(28);var E=function(e){var t=e.children;return r.a.createElement("div",{style:{height:300,clear:"both",paddingTop:120,textAlign:"center"},className:"jumbotron"},t)},p=a(5),v=a.n(p),b={getUsers:function(){return v.a.get("/api/users")},getUser:function(e){return v.a.get("/api/users/"+e)},deleteUser:function(e){return v.a.delete("/api/users/"+e)},saveUser:function(e){return v.a.post("/api/user",e)}};function g(e){var t=e.fluid,a=e.children;return r.a.createElement("div",{className:"container".concat(t?"-fluid":"")},a)}function k(e){var t=e.fluid,a=e.children;return r.a.createElement("div",{className:"row".concat(t?"-fluid":"")},a)}function y(e){var t=e.size,a=e.children;return r.a.createElement("div",{className:t.split(" ").map(function(e){return"col-"+e}).join(" ")},a)}a(47);var j=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(d.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).state={firstName:"",lastName:"",userName:"",email:"",age:0,liked:[],disliked:[]},a.loadUser=function(e){b.getUser(e).then(function(e){return a.setState({user:e.data})}).catch(function(e){return console.log(e)})},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.loadUser()}},{key:"render",value:function(){return r.a.createElement(g,{fluid:!0},r.a.createElement(k,null,r.a.createElement(y,{size:"md-6"},"Welcome to The site: ",this.state.params.userName)))}}]),t}(n.Component),N=a(53),O=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(d.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).state={book:{}},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;b.getBook(this.props.match.params.id).then(function(t){return e.setState({book:t.data})}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){return r.a.createElement(g,{fluid:!0},r.a.createElement(k,null,r.a.createElement(y,{size:"md-12"},r.a.createElement(E,null,r.a.createElement("h1",null,this.state.book.title," by ",this.state.book.author)))),r.a.createElement(k,null,r.a.createElement(y,{size:"md-10 md-offset-1"},r.a.createElement("article",null,r.a.createElement("h1",null,"Synopsis"),r.a.createElement("p",null,this.state.book.synopsis)))),r.a.createElement(k,null,r.a.createElement(y,{size:"md-2"},r.a.createElement(N.a,{to:"/"},"\u2190 Back to Authors"))))}}]),t}(n.Component);var w=function(){return r.a.createElement(g,{fluid:!0},r.a.createElement(k,null,r.a.createElement(y,{size:"md-12"},r.a.createElement(E,null,r.a.createElement("h1",null,"404 Page Not Found"),r.a.createElement("h1",null,r.a.createElement("span",{role:"img","aria-label":"Face With Rolling Eyes Emoji"},"\ud83d\ude44"))))))};var U=function(){return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary"},r.a.createElement("a",{className:"navbar-brand",href:"/"},"React Reading List"))};var x=function(){return r.a.createElement(o.a,null,r.a.createElement("div",null,r.a.createElement(U,null),r.a.createElement(i.a,null,r.a.createElement(u.a,{exact:!0,path:"/",component:j}),r.a.createElement(u.a,{exact:!0,path:"/Dashboard",component:j}),r.a.createElement(u.a,{exact:!0,path:"/Profile",component:O}),r.a.createElement(u.a,{component:w}))))};c.a.render(r.a.createElement(x,null),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.231f3bfd.chunk.js.map