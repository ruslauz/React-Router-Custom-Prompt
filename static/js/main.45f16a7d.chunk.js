(this["webpackJsonpreact-router-custom-prompt"]=this["webpackJsonpreact-router-custom-prompt"]||[]).push([[0],{135:function(e,t,n){"use strict";n.r(t);var c=n(3),o=n(0),s=n(22),a=n.n(s),l=(n(56),n(24)),r=n(8),i=(n(57),n(11)),j=n(45),u=n(7),b=n(17),m=n.p+"static/media/cross.e9e9d91d.svg",d=function(e){var t=e.open,n=e.onConfirm,o=e.onCancel,s=e.message,a=e.yesButton,l=e.noButton;s=s||"Do you want to leave the page?",a=a||"Yes",l=l||"No";var r=function(){return o(!1)};return t?Object(c.jsx)("div",{className:b.layer,onClick:r,children:Object(c.jsxs)("div",{className:b.modal,onClick:function(e){e.stopPropagation()},children:[Object(c.jsxs)("header",{className:b.header,children:[Object(c.jsx)("span",{className:b.title}),Object(c.jsx)("button",{className:b.close,onClick:r,children:Object(c.jsx)("img",{src:m,alt:"close-button"})})]}),Object(c.jsx)("div",{className:b.body,children:Object(c.jsx)("div",{className:b.message,children:s})}),Object(c.jsx)("footer",{className:b.footer,children:Object(c.jsxs)("div",{className:b.buttons,children:[Object(c.jsx)("button",{className:b.confirm,onClick:n,children:a}),Object(c.jsx)("button",{className:b.cancel,onClick:r,children:l})]})})]})}):null},h=Object(o.memo)(d),O=function(){var e=Object(o.useState)(!1),t=Object(i.a)(e,2),n=t[0],s=t[1],a=Object(o.useState)(""),l=Object(i.a)(a,2),b=l[0],m=l[1],d=Object(o.useState)(!1),O=Object(i.a)(d,2),p=O[0],x=O[1],f=Object(r.h)(),v=Object(r.i)(),g=function(){x(!0),s(!n)},_=function(e){if(e.pathname!==v.pathname)return s(!0),m(e.pathname),""};return Object(o.useEffect)((function(){p&&f.push(b)}),[p,b,f]),{showPrompt:!p,CustomPrompt:function(e){var t=e.children,a=e.showPrompt,l=Object(u.a)(e,["children","showPrompt"]),i=a&&!p,b={showPrompt:n,onConfirm:g,onCancel:s};return Object(c.jsxs)(o.Fragment,{children:[Object(c.jsx)(r.a,{when:i,message:_}),t&&"function"===typeof t?t(b):Object(c.jsx)(h,Object(j.a)({open:n,onConfirm:g,onCancel:s},l))]})}}},p=n(147),x=function(){var e=O().CustomPrompt,t=Object(o.useState)(!0),n=Object(i.a)(t,2),s=n[0],a=n[1],l=Object(o.useState)(!1),r=Object(i.a)(l,2),j=r[0],u=r[1],b=Object(o.useState)(null),m=Object(i.a)(b,2),d=m[0],h=m[1],x=Object(o.useState)(null),f=Object(i.a)(x,2),v=f[0],g=f[1],_=Object(o.useState)(null),C=Object(i.a)(_,2),N=C[0],y=C[1],P={message:{message:"\u0412\u044b \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u043f\u043e\u043a\u0438\u043d\u0443\u0442\u044c \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443"},buttons:{yesButton:"\u0414\u0430",noButton:"\u041d\u0435\u0442"},dialog:{userDialog:!0}},k=function(e){!function(e){var t=e.message,n=void 0===t?null:t,c=e.yesButton,o=void 0===c?null:c,s=e.noButton,a=void 0===s?null:s,l=e.userDialog,r=void 0===l?null:l;h(n),g(o),y(a),u(r)}(P[e.target.value])};return Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{children:"Click on Another Page link!"}),Object(c.jsx)(e,{showPrompt:s,message:d,yesButton:v,noButton:N,children:j?function(e){var t=e.onConfirm,n=e.onCancel,o=e.showPrompt;return Object(c.jsx)(p.a,{shouldCloseOnOverlayClick:!1,shouldCloseOnEscapePress:!1,confirmLabel:"Yes",cancelLabel:"No",onConfirm:t,onCancel:n,hasHeader:!1,isShown:o,children:"Do you want to leave the page?"})}:null}),Object(c.jsxs)("div",{className:"inputs",children:[Object(c.jsxs)("label",{children:[Object(c.jsx)("input",{type:"checkbox",onChange:function(e){a(!s)},checked:s}),"Enable Prompt"]}),Object(c.jsxs)("label",{children:[Object(c.jsx)("input",{name:"custom",onChange:k,type:"radio",value:"message"}),"Custom message"]}),Object(c.jsxs)("label",{children:[Object(c.jsx)("input",{name:"custom",onChange:k,type:"radio",value:"buttons"}),"Custom buttons` text"]}),Object(c.jsxs)("label",{children:[Object(c.jsx)("input",{name:"custom",onChange:k,type:"radio",value:"dialog"}),"Custom Dialog"]})]})]})},f=Object(o.memo)(x),v=function(){return Object(c.jsx)("div",{children:Object(c.jsx)("h1",{children:"The Page without Prompt"})})},g=Object(o.memo)(v);function _(){return Object(c.jsx)(o.Fragment,{children:Object(c.jsx)("div",{className:"main",children:Object(c.jsxs)("div",{className:"content",children:[Object(c.jsxs)("nav",{className:"nav",children:[Object(c.jsx)(l.b,{className:"nav-link",to:"/",exact:!0,children:"Home Page"}),Object(c.jsx)(l.b,{className:"nav-link",to:"/page",children:"Another Page"})]}),Object(c.jsxs)(r.e,{children:[Object(c.jsx)(r.c,{path:"/page",component:g}),Object(c.jsx)(r.c,{path:"/",exact:!0,component:f}),Object(c.jsx)(r.b,{to:"/"})]})]})})})}var C=Object(o.memo)(_);a.a.render(Object(c.jsx)(l.a,{getUserConfirmation:function(){},children:Object(c.jsx)(C,{})}),document.getElementById("root"))},17:function(e,t,n){e.exports={layer:"Modal_layer__3PtVh",modal:"Modal_modal__1vwov",header:"Modal_header__3jdKb",close:"Modal_close__2EfR5",title:"Modal_title__1gczl",body:"Modal_body__2SQju",icon:"Modal_icon__2QVZ6",message:"Modal_message__32N1C",footer:"Modal_footer__RRf7L",buttons:"Modal_buttons__1vmlV",cancel:"Modal_cancel__2EYnn",confirm:"Modal_confirm__J5jC5"}},56:function(e,t,n){},57:function(e,t,n){}},[[135,1,2]]]);