(this.webpackJsonpmarket_front=this.webpackJsonpmarket_front||[]).push([[0],{19:function(e,t,a){e.exports=a(48)},24:function(e,t,a){},25:function(e,t,a){},26:function(e,t,a){},27:function(e,t,a){e.exports=a.p+"static/media/greenCheck.d8e0bb74.png"},45:function(e,t,a){e.exports=a.p+"static/media/prdc1.9b4bee42.jpg"},46:function(e,t,a){e.exports=a.p+"static/media/prdc2.4d5401b2.jpg"},47:function(e,t,a){e.exports=a.p+"static/media/prdc3.d6bf94fc.jpg"},48:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(18),r=a.n(l),s=(a(24),a(25),a(1)),o=a(2),m=a(4),i=a(3),u=(a(6),n.Component,a(26),function(e){Object(m.a)(n,e);var t=Object(i.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).nav2Clicked=function(){document.getElementsByTagName("ul")[0].style.left="0%"},a.optionNavClicked=function(){document.getElementsByTagName("ul")[0].style.left="-100%"},a.state={},a}return Object(o.a)(n,[{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"nav-2"},c.a.createElement("input",{type:"checkbox",id:"check"}),c.a.createElement("label",{htmlFor:"check"},c.a.createElement("i",{onClick:this.nav2Clicked,className:"fa fa-bars"})),c.a.createElement("label",{className:"logo"},"Logo"),c.a.createElement("ul",{className:"ulnav2"},c.a.createElement("li",{className:"linav2",onClick:this.optionNavClicked},c.a.createElement("a",{href:"#",className:"active"},"Home")),c.a.createElement("li",{className:"linav2"},c.a.createElement("a",{href:"#"},"Services")),c.a.createElement("li",{className:"linav2"},c.a.createElement("a",{href:"#"},"About Us")),c.a.createElement("li",{className:"linav2",onClick:this.optionNavClicked},c.a.createElement("a",{href:"#reg-form"},"Register")),c.a.createElement("li",{className:"linav2"},c.a.createElement("a",{href:"#"},"Contact Us")))),c.a.createElement("div",{className:"contain"},c.a.createElement("div",{className:"frame"},c.a.createElement("img",{className:"im",src:a(27),alt:"check mark"}),c.a.createElement("p",{style:{color:"white"}}," I love everything she said, but I wasn't sure if that was the right thing to do"))))}}]),n}(n.Component));function h(){alert("Welcome")}window.addEventListener("load",(function(){var e=document.getElementById("st-main");setTimeout((function(){e.classList.add("h1-main-cl")}),1e3),setTimeout((function(){e.style.transform="translate(-50%,-90%)"}),2e3),setTimeout((function(){document.getElementById("btn1-main").style.opacity=1}),3e3)}));var p=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={},n}return Object(o.a)(a,[{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"main-body-section-1"},c.a.createElement(u,null),c.a.createElement("section",{id:"st-main",className:"section-1"},c.a.createElement("h1",{id:"h1-main"},"Here To Serve You"),c.a.createElement("button",{id:"btn1-main",className:"section-1-btn",onClick:h},"Menu"))),c.a.createElement("hr",{className:"hr-bar"}))}}]),a}(n.Component),d=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={},n}return Object(o.a)(a,[{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",{className:"section-2-right-h1"},"Pork Burger"),c.a.createElement("p",{className:"section-2-right-p"},"Combine the ground pork, 1 teaspoon salt, 1/4 teaspoon pepper and the sage in a large bowl. Add the bacon mixture and gently mix with your hands."))}}]),a}(n.Component),E=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={},n}return Object(o.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"main-body-section-2"},c.a.createElement("h1",{className:"h1-section-2"},"All Your Food"),c.a.createElement("section",{className:"section-2"},c.a.createElement("div",{className:"section-2-left"}),c.a.createElement("div",{className:"section-2-right"},c.a.createElement(d,null))))}}]),a}(n.Component),f=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={},n}return Object(o.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"main-body-section-2"},c.a.createElement("section",{className:"section-2"},c.a.createElement("div",{className:"section-2-right"},c.a.createElement(d,null)),c.a.createElement("div",{className:"section-2-left"})))}}]),a}(n.Component),b=a(7),v=a(8),N=a.n(v),g=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).Value_has_changed=function(e){n.setState(Object(b.a)({},e.target.name,e.target.value))},n.Form_submited=function(e){e.preventDefault(),N.a.post("www.you.com/json",n.state).then((function(e){console.log(e)})).catch((function(e){console.log(e)}))},n.Form_clear=function(){n.setState({firstName:"",lastName:"",email:"",phoneNumber:""})},n.state={firstName:"",lastName:"",email:"",phoneNumber:""},n}return Object(o.a)(a,[{key:"render",value:function(){var e=this.state,t=e.firstName,a=e.lastName,n=e.email,l=e.phoneNumber;return c.a.createElement("div",{id:"reg-form",className:"register-form"},c.a.createElement("h1",null,"Please Fill The Form"),c.a.createElement("form",{onSubmit:this.Form_submited},c.a.createElement("input",{className:"input-form",type:"text",name:"firstName",onChange:this.Value_has_changed,value:t,placeholder:"Your name"}),c.a.createElement("br",null),c.a.createElement("input",{className:"input-form",type:"text",name:"lastName",onChange:this.Value_has_changed,value:a,placeholder:"Enter your last name"}),c.a.createElement("br",null),c.a.createElement("input",{className:"input-form",type:"text",name:"email",onChange:this.Value_has_changed,value:n,placeholder:"Enter your email"}),c.a.createElement("br",null),c.a.createElement("input",{className:"input-form",type:"text",name:"phoneNumber",onChange:this.Value_has_changed,value:l,placeholder:"Enter your phone number"}),c.a.createElement("br",null),c.a.createElement("button",{className:"form-btn",type:"submit"},"Register")," ",c.a.createElement("br",null)),c.a.createElement("button",{className:"form-btn",onClick:this.Form_clear},"Clear")," ",c.a.createElement("br",null))}}]),a}(n.Component),y=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={},n}return Object(o.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"my-footer"},c.a.createElement("div",{className:"footer-col-1"},c.a.createElement("ul",{className:"ul-my-footer-col-1"},c.a.createElement("li",{className:"li-my-footer"},c.a.createElement("a",{href:"http://google.com"},"Home")),c.a.createElement("li",{className:"li-my-footer"},c.a.createElement("a",{href:"http://google.com"},"Services")),c.a.createElement("li",{className:"li-my-footer"},c.a.createElement("a",{href:"http://google.com"},"About Us")),c.a.createElement("li",{className:"li-my-footer"},c.a.createElement("a",{href:"http://google.com"},"Contact Us")))),c.a.createElement("div",{className:"footer-col-2 "},c.a.createElement("h3",null,"How We Started"),c.a.createElement("p",null,"1903 State Route 256 ",c.a.createElement("br",null),"Reynoldsburg,  OH  43068 ",c.a.createElement("br",null),"614/759-7764 ",c.a.createElement("br",null),"https://www.myresto.com")))}}]),a}(n.Component),j=function(e){Object(m.a)(n,e);var t=Object(i.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).componentDidMount=function(){a.fetch_data()},a.fetch_data=function(){N.a.get("https://api.punkapi.com/v2/beers").then((function(e){console.log(e.data);var t=e.data;a.setState({prdcs_data_fr_api:t})})).catch((function(e){return console.log("error: "+e)}))},a.state={prx:"60",prdcs_data_fr_api:{}},a}return Object(o.a)(n,[{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("ul",{className:"ul-all-products"},c.a.createElement("li",{className:"li-each-product"},c.a.createElement("img",{className:"img-prdcs",src:a(45),alt:""}),c.a.createElement("p",{className:"short-description"}),c.a.createElement("a",{href:"https://i.picsum.photos/id/67/200/150.jpg",className:"a-prdc-detail"},"Get Details"),c.a.createElement("p",{className:"prdc-price"},"$",this.state.prx)),c.a.createElement("li",{className:"li-each-product"},c.a.createElement("img",{className:"img-prdcs",src:a(46),alt:""}),c.a.createElement("p",{className:"short description"}),c.a.createElement("a",{href:"https://i.picsum.photos/id/67/200/150.jpg",className:"a-prdc-detail"},"Get Details"),c.a.createElement("p",{className:"prdc-price"},"$450")),c.a.createElement("li",{className:"li-each-product"},c.a.createElement("img",{className:"img-prdcs",src:a(47)}),c.a.createElement("p",{className:"short description"}),c.a.createElement("a",{href:"https://i.picsum.photos/id/67/200/150.jpg",className:"a-prdc-detail"},"Get Details"),c.a.createElement("p",{className:"prdc-price"},"$450"))))}}]),n}(n.Component),O=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).Prdc_to_seach=function(e){n.setState(Object(b.a)({},e.target.name,e.target.value))},n.state={prdc:""},n}return Object(o.a)(a,[{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",null,"Our Products"),c.a.createElement("ul",{className:"ul-filter-prdc"},c.a.createElement("li",null,c.a.createElement("select",{id:"prdc-filter-display",name:"nm_prd_filter_display"},c.a.createElement("option",{value:"By_Price"},"By Price"),c.a.createElement("option",{value:"By_date"},"By Date"))),c.a.createElement("li",null,c.a.createElement("input",{type:"text",className:"input-prdc-search",placeholder:"Search product",onChange:this.Prdc_to_seach,name:"prdc",value:this.name}))))}}]),a}(n.Component);var k=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(p,null),c.a.createElement(E,null),c.a.createElement(f,null),c.a.createElement(g,null),c.a.createElement(O,null),c.a.createElement(j,null),c.a.createElement(y,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},6:function(e,t,a){}},[[19,1,2]]]);
//# sourceMappingURL=main.3c1afdad.chunk.js.map