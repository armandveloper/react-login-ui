(this["webpackJsonplogin-ui"]=this["webpackJsonplogin-ui"]||[]).push([[0],{11:function(e,a,t){},12:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),l=t(5),s=t.n(l),c=(t(11),t(1));var m=function(e){var a=e.tabId,t=e.text,r=e.isSelected,l=e.setCurrentTab;return n.a.createElement("li",{className:r?"tab-item selected":"tab-item",onClick:function(){return l(a)}},n.a.createElement("button",{className:"form-tab"},t))};var o=function(e){var a=e.currentTab,t=e.setCurrentTab;return n.a.createElement("ul",{className:"form-tab-list"},n.a.createElement(m,{tabId:"login",setCurrentTab:t,text:"sign in",isSelected:"login"===a}),n.a.createElement(m,{tabId:"register",setCurrentTab:t,text:"sign up",isSelected:"register"===a}))};var i=function(e){var a=e.children,t=e.handleSubmit;return n.a.createElement("form",{className:"form",onSubmit:t},a)},u=t(2),d=t(3);var b=function(e){var a=e.label,t=e.type,r=e.isRequired,l=e.name,s=e.value,c=e.setState,m=r?"form-group required":"form-group";return m=e.error?m+" error":m,n.a.createElement("div",{className:m},n.a.createElement("label",{htmlFor:l},a,r?n.a.createElement("sup",null,"*"):null),n.a.createElement("input",{className:"form-control",type:t,id:l,value:s,onChange:function(e){var a=e.target.value.trim();c((function(e){return Object(d.a)(Object(d.a)({},e),{},Object(u.a)({},l,a))}))}}))};var E=function(e){var a=e.label,t=e.name;return n.a.createElement("div",{className:"checkbox-container"},n.a.createElement("label",{htmlFor:t},n.a.createElement("input",{className:"checkbox",type:"checkbox",id:t}),n.a.createElement("span",null,a)))};var p=function(e){var a=e.text;return e.isLink?n.a.createElement("a",{href:"!#",className:"button"},a):n.a.createElement("button",{className:"button"},a)};var f=function(e){return"login"===e.currentTab?n.a.createElement("div",{className:"form-card-footer"},n.a.createElement("a",{href:"!#",className:"link"},"Forgot Password?"),n.a.createElement("p",{className:"or"},"or"),n.a.createElement("p",{className:"form-card-text"},"Don't have an account?"," ",n.a.createElement("a",{href:"!#",className:"link"},"Sign up instead"))):n.a.createElement("div",{className:"form-card-footer"},n.a.createElement("p",{className:"form-card-text"},"Already have an account?"," ",n.a.createElement("a",{href:"!#",className:"link"},"Sign in instead")))};var v=function(e){var a=e.currentTab,t=Object(r.useState)({email:"",password:"",password2:""}),l=Object(c.a)(t,2),s=l[0],m=l[1],o=Object(r.useState)({}),u=Object(c.a)(o,2),d=u[0],v=u[1];return n.a.createElement("div",{className:"form-card-view"},n.a.createElement(i,{handleSubmit:function(e){e.preventDefault();var t={};""===s.email&&(t.email="Email is required"),""===s.password&&(t.password="Password is required"),""===s.password2&&"login"!==a&&(t.password2="Passwords does not match"),v(t)}},n.a.createElement(b,{isRequired:"register"===a,value:s.email,setState:m,label:"Email",type:"email",name:"email",error:d.email}),n.a.createElement(b,{isRequired:"register"===a,value:s.password,setState:m,label:"Password",type:"password",name:"password",error:d.password}),"login"===a?n.a.createElement(E,{label:"Remember me",name:"remember"}):n.a.createElement(b,{isRequired:"register"===a,value:s.password2,setState:m,label:"Confirm password",type:"password",name:"password2",error:d.password2}),n.a.createElement(p,{text:"Sign in"})),n.a.createElement(f,{currentTab:a}))};var g=function(){var e=Object(r.useState)("login"),a=Object(c.a)(e,2),t=a[0],l=a[1];return n.a.createElement("div",{className:"form-card"},n.a.createElement(o,{setCurrentTab:l,currentTab:t}),n.a.createElement(v,{currentTab:t}))};var w=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(g,null))};s.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(w,null)),document.getElementById("root"))},6:function(e,a,t){e.exports=t(12)}},[[6,1,2]]]);
//# sourceMappingURL=main.e14d6c5f.chunk.js.map