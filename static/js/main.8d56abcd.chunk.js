(this["webpackJsonpreact-router-custom-prompt"]=this["webpackJsonpreact-router-custom-prompt"]||[]).push([[0],{131:function(e,t,n){"use strict";n.r(t);var c=n(3),o=n(0),a=n(19),s=n.n(a),r=(n(52),n(20)),i=n(6),j=(n(53),function(){return Object(c.jsx)("div",{children:Object(c.jsx)("h1",{children:"The Page without Prompt"})})}),l=Object(o.memo)(j),u=n(12),b=n(143),h=function(e){var t=e.shouldPrompt,n=e.children,a=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=Object(o.useState)(null),n=Object(u.a)(t,2),c=n[0],a=n[1],s=Object(o.useState)(!1),r=Object(u.a)(s,2),j=r[0],l=r[1],b=Object(o.useState)(""),h=Object(u.a)(b,2),O=h[0],m=h[1],f=Object(i.h)(),d=Object(i.i)().pathname,p=Object(o.useCallback)((function(){a(!1)}),[]),x=Object(o.useCallback)((function(){l(!1),m(d)}),[d]),g=function(t){var n=t.pathname;if(n!==d)return"function"===typeof e&&!e()||(l(!0),m(n),!1)};return Object(o.useEffect)((function(){a("boolean"===typeof e?e:e())}),[e]),Object(o.useEffect)((function(){!c&d!==O&&f.push(O)}),[c,O,f,d]),{onCancel:x,onConfirm:p,showDialog:j,isPromptActive:c,message:g}}(t),s=a.onCancel,r=a.onConfirm,j=a.showDialog,l=a.isPromptActive,b=a.message;return Object(c.jsxs)(c.Fragment,{children:[n({onCancel:s,onConfirm:r,showDialog:j}),Object(c.jsx)(i.a,{message:b,when:l})]})},O=function(){var e=Object(o.useState)(!1),t=Object(u.a)(e,2),n=t[0],a=t[1];return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("h1",{children:"Click on Another Page link!"}),Object(c.jsxs)("p",{children:["Is Prompt Active - ","".concat(n)]}),Object(c.jsx)("button",{onClick:function(){return a((function(e){return!e}))},children:"Toggle Custom Prompt"}),Object(c.jsx)(h,{shouldPrompt:n,children:function(e){var t=e.onCancel,n=e.onConfirm,o=e.showDialog;return Object(c.jsx)(b.a,{shouldCloseOnOverlayClick:!1,shouldCloseOnEscapePress:!1,confirmLabel:"Yes",cancelLabel:"No",onConfirm:function(){return n()},onCancel:function(){return t()},hasHeader:!1,isShown:o,children:"Do you want to leave the page?"})}})]})};function m(){return Object(c.jsx)(o.Fragment,{children:Object(c.jsx)("div",{className:"main",children:Object(c.jsxs)("div",{className:"content",children:[Object(c.jsxs)("nav",{className:"nav",children:[Object(c.jsx)(r.b,{className:"nav-link",to:"/",exact:!0,children:"Home Page"}),Object(c.jsx)(r.b,{className:"nav-link",to:"/page",children:"Another Page"})]}),Object(c.jsxs)(i.e,{children:[Object(c.jsx)(i.c,{path:"/page",component:l}),Object(c.jsx)(i.c,{path:"/",exact:!0,children:Object(c.jsx)(O,{})}),Object(c.jsx)(i.b,{to:"/"})]})]})})})}var f=Object(o.memo)(m);s.a.render(Object(c.jsx)(r.a,{children:Object(c.jsx)(f,{})}),document.getElementById("root"))},52:function(e,t,n){},53:function(e,t,n){}},[[131,1,2]]]);