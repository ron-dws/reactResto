(this.webpackJsonpmarket_front=this.webpackJsonpmarket_front||[]).push([[0],{19:function(e,t,a){e.exports=a(45)},24:function(e,t,a){},25:function(e,t,a){},26:function(e,t,a){},27:function(e,t,a){e.exports=a.p+"static/media/greenCheck.d8e0bb74.png"},45:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(18),c=a.n(r),o=(a(24),a(1)),s=a(2),i=a(4),m=a(3),u=(a(25),a(6),n.Component,a(26),function(e){Object(i.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).nav2Clicked=function(){var e=document.querySelector("ul.ulnav2");"-100%"===e.style.left?e.style.left="0%":"0%"===e.style.left&&(e.style.left="-100%")},a.componentDidMount=function(){a.nav2Mobile()},a.nav2Mobile=function(){for(var e=document.querySelectorAll(".linav2"),t=0;t<e.length;t++)e[t].addEventListener("click",a.optionNavClicked)},a.optionNavClicked=function(){document.getElementsByTagName("ul")[0].style.left="-100%"},a.state={},a}return Object(s.a)(n,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"nav-2"},l.a.createElement("input",{type:"checkbox",id:"check"}),l.a.createElement("label",{htmlFor:"check"},l.a.createElement("i",{onClick:this.nav2Clicked,className:"fa fa-bars"})),l.a.createElement("label",{className:"logo"},"Logo"),l.a.createElement("ul",{className:"ulnav2"},l.a.createElement("li",{className:"linav2"},l.a.createElement("a",{href:"#",className:"active"},"Home")),l.a.createElement("li",{className:"linav2"},l.a.createElement("a",{href:"#"},"Services")),l.a.createElement("li",{className:"linav2"},l.a.createElement("a",{href:"#"},"About Us")),l.a.createElement("li",{className:"linav2"},l.a.createElement("a",{href:"#reg-form"},"Register")),l.a.createElement("li",{className:"linav2"},l.a.createElement("a",{href:"#"},"Contact Us")))),l.a.createElement("div",{className:"contain"},l.a.createElement("div",{className:"frame"},l.a.createElement("img",{className:"im",src:a(27),alt:"check mark"}),l.a.createElement("p",{style:{color:"white"}}," I love everything she said, but I wasn't sure if that was the right thing to do"))))}}]),n}(n.Component)),d=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).componentDidMount=function(){n.addh1class()},n.addh1class=function(){var e=document.getElementById("st-main");setTimeout((function(){e.classList.add("h1-main-cl")}),1e3),setTimeout((function(){e.style.transform="translate(-50%,-65%)"}),2e3),setTimeout((function(){document.getElementById("btn1-main").style.opacity=1}),3e3),setTimeout((function(){document.getElementById("special-rect").classList.add("rect-special")}),4e3),setTimeout((function(){document.getElementById("special-rect-text").style.opacity=1}),5e3)},n.displayName=function(){alert("Welcome")},n.state={},n}return Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"main-body-section-1"},l.a.createElement(u,null),l.a.createElement("section",{id:"st-main",className:"section-1"},l.a.createElement("h1",{id:"h1-main"},"Here To Serve You"),l.a.createElement("button",{id:"btn1-main",className:"section-1-btn",onClick:this.displayName},"Menu"),l.a.createElement("br",null),l.a.createElement("svg",null,l.a.createElement("g",null,l.a.createElement("rect",{width:"150",height:"40",stroke:"#aaa",strokeWidth:"1",fill:"none",id:"special-rect"}),l.a.createElement("text",{x:"75",y:"20",alignmentBaseline:"middle",fontSize:"20",strokeWidth:"0",fill:"white",textAnchor:"middle",id:"special-rect-text"},"Special"))))),l.a.createElement("hr",{className:"hr-bar"}))}}]),a}(n.Component),h=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={},n}return Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",{className:"section-2-right-h1"},"Pork Burger"),l.a.createElement("p",{className:"section-2-right-p"},"Combine the ground pork, 1 teaspoon salt, 1/4 teaspoon pepper and the sage in a large bowl. Add the bacon mixture and gently mix with your hands."))}}]),a}(n.Component),p=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={},n}return Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"main-body-section-2"},l.a.createElement("div",{className:"h1-section-2-container"},l.a.createElement("h1",{className:"h1-section-2"},"All Your Food")),l.a.createElement("section",{className:"section-2"},l.a.createElement("div",{className:"section-2-left"}),l.a.createElement("div",{className:"section-2-right"},l.a.createElement(h,null))))}}]),a}(n.Component),f=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={},n}return Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"main-body-section-2"},l.a.createElement("section",{className:"section-2"},l.a.createElement("div",{className:"section-2-right"},l.a.createElement(h,null)),l.a.createElement("div",{className:"section-2-left"})))}}]),a}(n.Component),E=a(7),b=a(8),v=a.n(b),g=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).Value_has_changed=function(e){n.setState(Object(E.a)({},e.target.name,e.target.value))},n.Form_submited=function(e){e.preventDefault(),v.a.post("www.you.com/json",n.state).then((function(e){console.log(e)})).catch((function(e){console.log(e)}))},n.Form_clear=function(){n.setState({firstName:"",lastName:"",email:"",phoneNumber:""})},n.state={firstName:"",lastName:"",email:"",phoneNumber:""},n}return Object(s.a)(a,[{key:"render",value:function(){var e=this.state,t=e.firstName,a=e.lastName,n=e.email,r=e.phoneNumber;return l.a.createElement("div",{id:"reg-form",className:"register-form"},l.a.createElement("div",{className:"hr-register-form-container"},l.a.createElement("hr",{className:"hr-register-form"})),l.a.createElement("h1",null,"Please Fill The Form"),l.a.createElement("form",{onSubmit:this.Form_submited},l.a.createElement("input",{className:"input-form",type:"text",name:"firstName",onChange:this.Value_has_changed,value:t,placeholder:"Your name"}),l.a.createElement("br",null),l.a.createElement("input",{className:"input-form",type:"text",name:"lastName",onChange:this.Value_has_changed,value:a,placeholder:"Enter your last name"}),l.a.createElement("br",null),l.a.createElement("input",{className:"input-form",type:"text",name:"email",onChange:this.Value_has_changed,value:n,placeholder:"Enter your email"}),l.a.createElement("br",null),l.a.createElement("input",{className:"input-form",type:"text",name:"phoneNumber",onChange:this.Value_has_changed,value:r,placeholder:"Enter your phone number"}),l.a.createElement("br",null),l.a.createElement("button",{className:"form-btn",type:"submit"},"Register")," ",l.a.createElement("br",null)),l.a.createElement("button",{className:"form-btn",onClick:this.Form_clear},"Clear")," ",l.a.createElement("br",null))}}]),a}(n.Component),N=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={},n}return Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"my-footer"},l.a.createElement("div",{className:"footer-col-1"},l.a.createElement("ul",{className:"ul-my-footer-col-1"},l.a.createElement("li",{className:"li-my-footer"},l.a.createElement("a",{href:"http://google.com"},"Home")),l.a.createElement("li",{className:"li-my-footer"},l.a.createElement("a",{href:"http://google.com"},"Services")),l.a.createElement("li",{className:"li-my-footer"},l.a.createElement("a",{href:"http://google.com"},"About Us")),l.a.createElement("li",{className:"li-my-footer"},l.a.createElement("a",{href:"http://google.com"},"Contact Us")))),l.a.createElement("div",{className:"footer-col-2 "},l.a.createElement("h3",null,"How We Started"),l.a.createElement("p",null,"1903 State Route 256 ",l.a.createElement("br",null),"Reynoldsburg,  OH  43068 ",l.a.createElement("br",null),"614/759-7764 ",l.a.createElement("br",null),"https://www.myresto.com")))}}]),a}(n.Component),y=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).componentDidMount=function(){n.fetch_data()},n.fetch_data=function(){v.a.get("https://api.punkapi.com/v2/beers").then((function(e){console.log(e.data);var t=e.data;n.setState({prdcs_data_fr_api:t})})).catch((function(e){return console.log("error: "+e)}))},n.displaySomePrdcs=function(e){return e.length?e.sort((function(e,t){var a=e.first_brewed.split("/").reverse().join("-"),n=t.first_brewed.split("/").reverse().join("-");return new Date(a)-new Date(n)})).slice(0,8).map((function(e,t){return l.a.createElement("div",{key:t},l.a.createElement("li",{className:"li-each-product"},l.a.createElement("img",{className:"img-prdcs",src:e.image_url,alt:"product"}),l.a.createElement("p",{className:"short-description"}),l.a.createElement("a",{href:"https://i.picsum.photos/id/67/200/150.jpg",className:"a-prdc-detail"},e.first_brewed),l.a.createElement("p",{className:"prdc-price"},"$",e.ibu),l.a.createElement("button",{type:"button",className:"add-to-cart",onClick:function(){return n.addPrdc(e.ibu)}},"add to cart")))})):null},n.addPrdc=function(e){console.log(e);var t,a=n.state.total;t=a+e,console.log(t),n.setState({total:t}),n.props.parentCallback(t)},n.state={total:0,prdcs_data_fr_api:{}},n}return Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("ul",{className:"ul-all-products"},l.a.createElement("div",{className:"displayPrdcs"},this.displaySomePrdcs(this.state.prdcs_data_fr_api))))}}]),a}(n.Component),j=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).Prdc_to_seach=function(e){n.setState(Object(E.a)({},e.target.name,e.target.value))},n.state={prdc:"",prdcsTotalCart:0},n}return Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",null,"Our Products"),l.a.createElement("ul",{className:"ul-filter-prdc"},l.a.createElement("li",null,l.a.createElement("select",{id:"prdc-filter-display",name:"nm_prd_filter_display"},l.a.createElement("option",{value:"By_Price"},"By Price"),l.a.createElement("option",{value:"By_date"},"By Date"))),l.a.createElement("li",null,l.a.createElement("input",{type:"text",className:"input-prdc-search",placeholder:"Search product",onChange:this.Prdc_to_seach,name:"prdc",value:this.name})),l.a.createElement("li",null," Total in cart:",l.a.createElement("span",{className:"filter-total-in-cart"}," $",this.props.theTotal," "))))}}]),a}(n.Component),O=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).getTotal=function(e,t){n.setState({appTotal:e}),console.log("from app: "+n.state.appTotal)},n.state={appTotal:0},n}return Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(d,null),l.a.createElement(p,null),l.a.createElement(f,null),l.a.createElement(g,null),l.a.createElement(j,{theTotal:this.state.appTotal}),l.a.createElement(y,{parentCallback:this.getTotal}),l.a.createElement(N,null))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},6:function(e,t,a){}},[[19,1,2]]]);
//# sourceMappingURL=main.f36c762e.chunk.js.map