(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{14:function(t,e,n){t.exports={Form:"ContactForm_Form__pmdyI",Btn:"ContactForm_Btn__3RNXk",Group:"ContactForm_Group__2kBuf"}},22:function(t,e,n){t.exports={Section:"Section_Section__CqcNT",Title:"Section_Title__3JdV3",ContentWrapper:"Section_ContentWrapper__H17GO"}},26:function(t,e,n){t.exports={FilterInput:"Filter_FilterInput__3kH4y",FilterLabel:"Filter_FilterLabel__31TZv"}},38:function(t,e,n){t.exports={AppHeader:"Header_AppHeader__1safz"}},9:function(t,e,n){t.exports={contactList:"ContactList_contactList__9FkvI",contactBtn:"ContactList_contactBtn__1j41G",btn:"ContactList_btn__LjK5L"}},95:function(t,e,n){},96:function(t,e,n){},97:function(t,e,n){"use strict";n.r(e);var c=n(0),a=n.n(c),r=n(18),i=n.n(r),o=n(3),s=n(20),u=n(7),l=n(10),j=n(5),b=n(4),d=n(8),p=n.n(d),f=n(21),O=n(13),m=n.n(O);m.a.defaults.baseURL="https://618a957134b4f400177c47b5.mockapi.io/api/v1";var h,v,x=Object(u.c)("contacts/fetchContacts",Object(f.a)(p.a.mark((function t(){var e,n;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return x.pending(),t.prev=1,t.next=4,m.a.get("/contacts");case 4:return e=t.sent,n=e.data,t.abrupt("return",n);case 9:t.prev=9,t.t0=t.catch(1),x.rejected(t.t0);case 12:case"end":return t.stop()}}),t,null,[[1,9]])})))),_=Object(u.c)("contacts/addContact",function(){var t=Object(f.a)(p.a.mark((function t(e){var n,c;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return _.pending(),t.prev=1,t.next=4,m.a.post("/contacts",e);case 4:return n=t.sent,c=n.data,t.abrupt("return",c);case 9:t.prev=9,t.t0=t.catch(1),_.rejected(t.t0);case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()),C=Object(u.c)("contacts/deleteContact",function(){var t=Object(f.a)(p.a.mark((function t(e){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return C.pending(),t.prev=1,t.next=4,m.a.delete("/contacts/".concat(e));case 4:return t.abrupt("return",e);case 7:t.prev=7,t.t0=t.catch(1),C.rejected(t.t0);case 10:case"end":return t.stop()}}),t,null,[[1,7]])})));return function(e){return t.apply(this,arguments)}}()),g=Object(u.b)("contacts/filter");var N=Object(u.d)([],(h={},Object(j.a)(h,x.fulfilled,(function(t,e){return e.payload})),Object(j.a)(h,_.fulfilled,(function(t,e){return function(t,e){var n=e.payload;return t.some((function(t){return t.name===n.name}))?alert("".concat(n.name," is already in the contact")):[].concat(Object(s.a)(t),[n])}(t,e)})),Object(j.a)(h,C.fulfilled,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),h)),y=Object(u.d)(!1,(v={},Object(j.a)(v,x.pending,(function(){return!0})),Object(j.a)(v,x.fulfilled,(function(){return!1})),Object(j.a)(v,x.rejected,(function(){return!1})),Object(j.a)(v,_.pending,(function(){return!0})),Object(j.a)(v,_.fulfilled,(function(){return!1})),Object(j.a)(v,_.rejected,(function(){return!1})),Object(j.a)(v,C.pending,(function(){return!0})),Object(j.a)(v,C.fulfilled,(function(){return!1})),Object(j.a)(v,C.rejected,(function(){return!1})),v)),F=Object(u.d)("",Object(j.a)({},g,(function(t,e){return e.payload}))),k=Object(b.b)({items:N,loading:y,filter:F}),w=Object(u.a)({reducer:{contacts:k},devTools:!1,middleware:function(t){return Object(s.a)(t({serializableCheck:{ignoredActions:[l.a,l.f,l.b,l.c,l.d,l.e]}}))}}),L=n(37),S=n.n(L),A=n(38),B=n.n(A),I=n(1);var T=function(t){var e=t.title,n=t.children;return Object(I.jsx)("header",{className:B.a.AppHeader,children:Object(I.jsxs)("div",{className:"container",children:[Object(I.jsx)("h1",{children:e}),n]})})},z=n(11),G=function(t){return t.contacts.filter},H=function(t){return t.contacts.items},J=function(t){return t.contacts.loading},Z=(Object(z.a)([H,G],(function(t,e){var n=e.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(n)}))})),n(22)),q=n.n(Z);var W=function(t){var e=t.title,n=t.children,c=Object(o.c)(J);return Object(I.jsxs)("section",{className:"container ".concat(q.a.Section),children:[!c&&Object(I.jsx)("h2",{className:q.a.Title,children:e}),Object(I.jsx)("div",{className:q.a.ContentWrapper,children:n})]})},E=n(27),M=n(25),R=n.n(M),D=n(14),K=n.n(D);function P(){var t=Object(o.b)(),e=Object(o.c)(J),n=Object(c.useState)(""),a=Object(E.a)(n,2),r=a[0],i=a[1],s=Object(c.useState)(""),u=Object(E.a)(s,2),l=u[0],j=u[1],b=function(t){var e=t.currentTarget,n=e.name,c=e.value;switch(n){case"name":return i(c);case"number":return j(c);default:return}},d=function(){i(""),j("")},p=R.a.generate(),f=R.a.generate();return!e&&Object(I.jsxs)("form",{className:K.a.Form,onSubmit:function(e){e.preventDefault(),t(_({name:r,number:l})),d()},children:[Object(I.jsxs)("div",{className:K.a.Group,children:[Object(I.jsx)("input",{type:"text",name:"name",placeholder:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:r,id:p,onChange:b}),Object(I.jsx)("div",{className:"bar"})]}),Object(I.jsxs)("div",{className:K.a.Group,children:[Object(I.jsx)("input",{type:"tel",name:"number",placeholder:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:l,id:f,onChange:b}),Object(I.jsx)("div",{className:"bar"})]}),Object(I.jsx)("button",{className:K.a.Btn,type:"submit",children:"add contact"})]})}var U=n(39),V=n(9),X=n.n(V);function $(){var t=Object(o.c)(H),e=Object(o.c)(J),n=Object(o.b)();return Object(c.useEffect)((function(){n(x())}),[n]),!e&&t&&Object(I.jsx)("table",{className:X.a.contactList,children:Object(I.jsx)("tbody",{children:t.map((function(t){var e=t.name,c=t.number,a=t.id;return Object(I.jsxs)("tr",{className:X.a.contactListItem,id:a,children:[Object(I.jsx)("td",{className:X.a.name,children:e}),Object(I.jsx)("td",{className:X.a.number,children:c}),Object(I.jsx)("td",{className:X.a.contactBtn,children:Object(I.jsx)("button",{className:X.a.btn,type:"button",onClick:function(){return n(C(a))},children:Object(I.jsx)(U.a,{})})})]},a)}))})})}var Q=n(26),Y=n.n(Q);function tt(){var t=Object(o.c)(G),e=Object(o.b)();return Object(I.jsx)("div",{children:Object(I.jsxs)("label",{className:Y.a.FilterLabel,htmlFor:"",children:["Filter contacts by name",Object(I.jsx)("input",{className:Y.a.FilterInput,type:"text",value:t,autoComplete:"off",autoFocus:!0,placeholder:"Search ...",onChange:function(t){return e(g(t.target.value))}})]})})}n(95);var et=function(){var t=Object(o.c)(J);return Object(I.jsxs)("div",{className:"App",children:[Object(I.jsx)(T,{title:"PhoneBook",children:Object(I.jsx)(tt,{})}),t&&Object(I.jsx)(W,{children:Object(I.jsx)(S.a,{type:"Oval",color:"black",height:"50vh",width:80})}),Object(I.jsxs)(W,{title:"Contacts",children:[Object(I.jsx)(P,{}),Object(I.jsx)($,{})]})]})};n(96);i.a.render(Object(I.jsx)(a.a.StrictMode,{children:Object(I.jsx)(o.a,{store:w,children:Object(I.jsx)(et,{})})}),document.getElementById("root"))}},[[97,1,2]]]);
//# sourceMappingURL=main.ac105815.chunk.js.map