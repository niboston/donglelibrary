(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{28:function(e,t,a){},35:function(e,t,a){e.exports=a(48)},40:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t);var l=a(0),c=a.n(l),n=a(14),o=a.n(n),r=(a(40),a(15)),m=a(16),s=a(18),i=a(17),u=a(21),d=a(19),E={Accept:"application/json","api-key":"B886F1DAC41FB38BA0126061A30AE32A"},p=function(e){return fetch("".concat("https://librarysearchservice.search.windows.net/indexes/mockdata/docs?api-version=2019-05-06&search=in"),{method:"GET",headers:E}).then(function(e){return e.json()}).then(function(e){return e.values}).catch(function(e){return console.log(e)})},h=(a(28),function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props.books;return c.a.createElement("table",{className:"table"},c.a.createElement("thead",{className:"primary-color white-text"},c.a.createElement("tr",null,c.a.createElement("th",{scope:"col"},"#"),c.a.createElement("th",{scope:"col"},"Book Name"),c.a.createElement("th",{scope:"col"},"Author"),c.a.createElement("th",{scope:"col"},"Category"))),c.a.createElement("tbody",null,e&&e.map(function(e,t){return c.a.createElement("tr",{key:t},c.a.createElement("th",{scope:"row"},t+1),c.a.createElement("td",null,e.name),c.a.createElement("td",null,e.author),c.a.createElement("td",null,e.categories))})))}}]),t}(c.a.Component)),b=function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){this.props.books;return c.a.createElement("div",null,c.a.createElement("h2",null,"Filter"),c.a.createElement("section",{className:"my-4"},c.a.createElement("h4",null,"Language"),c.a.createElement("div",{className:"custom-control custom-radio custom-control-inline"},c.a.createElement("input",{type:"radio",className:"custom-control-input",id:"language1",name:"inlineDefaultRadiosExample"}),c.a.createElement("label",{className:"custom-control-label",htmlFor:"language1"},"English")),c.a.createElement("div",{className:"custom-control custom-radio custom-control-inline"},c.a.createElement("input",{type:"radio",className:"custom-control-input",id:"language2",name:"inlineDefaultRadiosExample"}),c.a.createElement("label",{className:"custom-control-label",htmlFor:"language2"},"Hindi")),c.a.createElement("div",{className:"custom-control custom-radio custom-control-inline"},c.a.createElement("input",{type:"radio",className:"custom-control-input",id:"language3",name:"inlineDefaultRadiosExample"}),c.a.createElement("label",{className:"custom-control-label",htmlFor:"language3"},"Spanish"))),c.a.createElement("section",{className:"my-4"},c.a.createElement("h4",null,"Format"),c.a.createElement("div",{className:"custom-control custom-checkbox custom-control-inline"},c.a.createElement("input",{type:"checkbox",className:"custom-control-input",id:"format1"}),c.a.createElement("label",{className:"custom-control-label",htmlFor:"format1"},"pdf")),c.a.createElement("div",{className:"custom-control custom-checkbox custom-control-inline"},c.a.createElement("input",{type:"checkbox",className:"custom-control-input",id:"format2"}),c.a.createElement("label",{className:"custom-control-label",htmlFor:"format2"},"epub")),c.a.createElement("div",{className:"custom-control custom-checkbox custom-control-inline"},c.a.createElement("input",{type:"checkbox",className:"custom-control-input",id:"format3"}),c.a.createElement("label",{className:"custom-control-label",htmlFor:"format3"},"txt"))),c.a.createElement("section",{className:"my-4"},c.a.createElement("h4",null,"Categories"),c.a.createElement("select",{className:"custom-select",multiple:!0},c.a.createElement("option",{value:"1"},"Fairy Tales"),c.a.createElement("option",{value:"2"},"Math"),c.a.createElement("option",{value:"3"},"Science"),c.a.createElement("option",{value:"4"},"Arts & Music"),c.a.createElement("option",{value:"5"},"Biographies"),c.a.createElement("option",{value:"6"},"Business"),c.a.createElement("option",{value:"7"},"Finance"),c.a.createElement("option",{value:"8"},"Economics"),c.a.createElement("option",{value:"9"},"Computers & Tech"))),c.a.createElement("section",{className:"my-4"},c.a.createElement("h4",null,"Source"),c.a.createElement("div",{className:"custom-control custom-checkbox custom-control-inline"},c.a.createElement("input",{type:"checkbox",className:"custom-control-input",id:"source1"}),c.a.createElement("label",{className:"custom-control-label",htmlFor:"source1"},"Something")),c.a.createElement("div",{className:"custom-control custom-checkbox custom-control-inline"},c.a.createElement("input",{type:"checkbox",className:"custom-control-input",id:"source2"}),c.a.createElement("label",{className:"custom-control-label",htmlFor:"source2"},"Something-2")),c.a.createElement("div",{className:"custom-control custom-checkbox custom-control-inline"},c.a.createElement("input",{type:"checkbox",className:"custom-control-input",id:"source3"}),c.a.createElement("label",{className:"custom-control-label",htmlFor:"source3"},"Something-3"))))}}]),t}(c.a.Component),v=a(8);var g=function(){return c.a.createElement("div",{className:"Cart"},c.a.createElement(v.d,null,c.a.createElement("div",null,c.a.createElement("div",{className:"card-deck"},c.a.createElement("div",{className:"card xs-4"},c.a.createElement("div",{className:"view overlay"},c.a.createElement("img",{src:"assets/book.png",alt:"Default book image",style:{height:"24px",width:"24px"}}),c.a.createElement("a",{href:"#!"},c.a.createElement("div",{className:"mask rgba-white-slight"}))),c.a.createElement("div",{className:"card-body"},c.a.createElement("h4",{className:"card-title"},"Card title"),c.a.createElement("p",{className:"card-text"},"Some quick example text to build on the card title and make up the bulk of the card's content."))),c.a.createElement("div",{className:"card mb-4"},c.a.createElement("div",{className:"view overlay"},c.a.createElement("img",{className:"card-img-top",src:"https://mdbootstrap.com/img/Photos/Others/images/15.jpg",alt:"Card image cap"}),c.a.createElement("a",{href:"#!"},c.a.createElement("div",{className:"mask rgba-white-slight"}))),c.a.createElement("div",{className:"card-body"},c.a.createElement("h4",{className:"card-title"},"Card title"),c.a.createElement("p",{className:"card-text"},"Some quick example text to build on the card title and make up the bulk of the card's content."),c.a.createElement("button",{type:"button",className:"btn btn-light-blue btn-md"},"Read more")))))))},N=1e3,y=function(e){function t(){var e,a;Object(r.a)(this,t);for(var l=arguments.length,c=new Array(l),n=0;n<l;n++)c[n]=arguments[n];return(a=Object(s.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(c)))).state={query:"",books:[],modal:!1},a.updateQuery=function(e){a.setState({query:e});var t=Object(u.a)(a);a.timeout&&clearTimeout(a.timeout),a.timeout=setTimeout(function(){p(e).then(function(e){e&&t.setState({books:e})})},N)},a.toggle=function(){a.setState({modal:!a.state.modal})},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this;return c.a.createElement("div",null,c.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark primary-color"},c.a.createElement("a",{className:"navbar-brand",href:"#"},"Dongle Library"),c.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#basicExampleNav","aria-controls":"basicExampleNav","aria-expanded":"false","aria-label":"Toggle navigation"},c.a.createElement("span",{className:"navbar-toggler-icon"})),c.a.createElement("div",{className:"collapse navbar-collapse",id:"basicExampleNav"},c.a.createElement("ul",{className:"navbar-nav mr-auto"},c.a.createElement("li",{className:"nav-item active"},c.a.createElement("a",{className:"nav-link",href:"#"},"Home",c.a.createElement("span",{className:"sr-only"},"(current)")))),c.a.createElement("div",{className:"navbar-right"},c.a.createElement("form",{className:"form-inline my-2 my-lg-0 ml-auto"},c.a.createElement("input",{className:"form-control",style:{width:"600px"},type:"search","aria-label":"Search",placeholder:"Search by title or author",value:this.state.query,onChange:function(t){return e.updateQuery(t.target.value)}}),c.a.createElement("button",{className:"btn btn-outline-white btn-md my-2 my-sm-0 ml-3",type:"submit"},"Search")),c.a.createElement(v.b,null,c.a.createElement(v.a,{onClick:this.toggle},"Cart"),c.a.createElement(v.c,{isOpen:this.state.modal,toggle:this.toggle,centered:!0},c.a.createElement(v.f,{toggle:this.toggle},"Cart"),c.a.createElement(g,null),c.a.createElement(v.e,null,c.a.createElement(v.a,{color:"secondary",onClick:this.toggle},"Close"),c.a.createElement(v.a,{color:"primary"},"Download Now"))))))),c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row my-5"},c.a.createElement("div",{className:"col-md-4"},c.a.createElement(b,null)),c.a.createElement("div",{className:"col-md-8"},c.a.createElement(h,{books:this.state.books})))))}}]),t}(l.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var f=a(20),k=a(13);o.a.render(c.a.createElement(f.a,null,c.a.createElement("div",null,c.a.createElement("div",{className:"main"},c.a.createElement(k.a,{exact:!0,path:"/",component:y}),c.a.createElement(k.a,{exact:!0,path:"/cart",component:g})))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[35,1,2]]]);
//# sourceMappingURL=main.f2977be6.chunk.js.map