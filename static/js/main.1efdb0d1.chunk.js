(this["webpackJsonpreact-router-custom-prompt"]=this["webpackJsonpreact-router-custom-prompt"]||[]).push([[0],{130:function(e,t,c){},131:function(e,t,c){},133:function(e,t,c){"use strict";c.r(t);var n=c(3),a=c(0),o=c(21),s=c.n(o),l=c(22),i=c(8),r=function(){return Object(n.jsx)("div",{children:Object(n.jsx)("h1",{children:"The Not Allowed Page"})})},j=function(){return Object(n.jsx)("div",{children:Object(n.jsx)("h1",{children:"The Page is Allowed"})})},h=c(14),b=c(148),u=c(146),d=function(e){var t=e.shouldPrompt,c=e.allowNextLocationPath,o=e.children,s=Object(a.useState)(!1),l=Object(h.a)(s,2),r=l[0],j=l[1],b=Object(a.useState)(""),u=Object(h.a)(b,2),d=u[0],O=u[1],x=Object(a.useState)(t),p=Object(h.a)(x,2),m=p[0],g=p[1],f=Object(i.h)(),v=Object(a.useRef)(f.location.pathname).current;return Object(a.useEffect)((function(){g(t)}),[t]),Object(a.useEffect)((function(){!m&&d&&f.push(d)}),[m,d,f]),Object(n.jsxs)(n.Fragment,{children:[o({leavePage:function(){g(!1)},stayOnPage:function(){j(!1),O("")},isDialogActive:r,nextLocation:d}),Object(n.jsx)(i.a,{message:function(e){var t=e.pathname;return!!(c&&c(t)||t===v)||(O(t),j(!0),!1)},when:m})]})},O=Object(a.memo)(d),x=function(){var e=Object(a.useState)(!0),t=Object(h.a)(e,2),c=t[0],o=t[1];return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("h1",{children:"Click on Navigation links!"}),Object(n.jsxs)("p",{children:["The"," ",Object(n.jsx)("b",{children:Object(n.jsx)("i",{children:'"Not Allowed Page"'})})," ","should activate the Prompt, while"," ",Object(n.jsx)("b",{children:Object(n.jsx)("i",{children:'"Allowed Page"'})})," ","should let you leave"]}),Object(n.jsxs)("label",{style:{cursor:"pointer"},children:[Object(n.jsx)("input",{checked:c,type:"checkbox",onChange:function(e){return o(e.target.checked)}}),Object(n.jsx)("span",{children:"Toggle Custom Prompt"})]}),Object(n.jsx)("hr",{}),Object(n.jsxs)("p",{children:["Is Prompt Active - ","".concat(c)]}),Object(n.jsx)(O,{shouldPrompt:c,allowNextLocationPath:function(e){return"/allowed-page"===e},children:function(e){var t=e.leavePage,c=e.stayOnPage,a=e.isDialogActive,o=e.nextLocation;return Object(n.jsx)(b.a,{shouldCloseOnOverlayClick:!1,shouldCloseOnEscapePress:!1,confirmLabel:"Yes",cancelLabel:"No",title:"Do you want to leave the page?",onConfirm:function(){return t()},onCancel:function(){return c()},isShown:a,children:Object(n.jsxs)(u.a,{children:["Next location is ",Object(n.jsx)("b",{children:o})]})})}})]})};c(130);var p=function(){return Object(n.jsx)("div",{className:"main",children:Object(n.jsxs)("div",{className:"content",children:[Object(n.jsxs)("nav",{className:"nav",children:[Object(n.jsx)(l.b,{className:"nav-link",to:"/",exact:!0,children:"Home Page"}),Object(n.jsx)(l.b,{className:"nav-link",to:"/not-allowed-page",children:"Not Allowed Page"}),Object(n.jsx)(l.b,{className:"nav-link",to:"/allowed-page",children:"Allowed Page"})]}),Object(n.jsxs)(i.e,{children:[Object(n.jsx)(i.c,{path:"/allowed-page",component:j}),Object(n.jsx)(i.c,{path:"/not-allowed-page",component:r}),Object(n.jsx)(i.c,{path:"/",exact:!0,children:Object(n.jsx)(x,{})}),Object(n.jsx)(i.b,{to:"/"})]})]})})};c(131);s.a.render(Object(n.jsx)(l.a,{children:Object(n.jsx)(p,{})}),document.getElementById("root"))}},[[133,1,2]]]);