(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{14:function(t,e,n){t.exports={Form:"ContactForm_Form__pmdyI",Btn:"ContactForm_Btn__3RNXk",Group:"ContactForm_Group__2kBuf"}},22:function(t,e,n){t.exports={Section:"Section_Section__CqcNT",Title:"Section_Title__3JdV3",ContentWrapper:"Section_ContentWrapper__H17GO"}},26:function(t,e,n){t.exports={FilterInput:"Filter_FilterInput__3kH4y",FilterLabel:"Filter_FilterLabel__31TZv"}},38:function(t,e,n){t.exports={AppHeader:"Header_AppHeader__1safz"}},9:function(t,e,n){t.exports={contactList:"ContactList_contactList__9FkvI",contactBtn:"ContactList_contactBtn__1j41G",btn:"ContactList_btn__LjK5L"}},95:function(t,e,n){},96:function(t,e,n){},97:function(t,e,n){"use strict";n.r(e);var c=n(0),a=n.n(c),r=n(18),i=n.n(r),o=n(6),s=n(20),u=n(7),l=n(10),j=n(4),b=n(3),d=n(8),p=n.n(d),f=n(21),O=n(13),m=n.n(O);m.a.defaults.baseURL="https://618a957134b4f400177c47b5.mockapi.io/api/v1";var h,v,x=Object(u.c)("contacts/fetchContacts",Object(f.a)(p.a.mark((function t(){var e,n;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return x.pending(),t.prev=1,t.next=4,m.a.get("/contacts");case 4:return e=t.sent,n=e.data,t.abrupt("return",n);case 9:t.prev=9,t.t0=t.catch(1),x.rejected(t.t0);case 12:case"end":return t.stop()}}),t,null,[[1,9]])})))),_=Object(u.c)("contacts/addContact",function(){var t=Object(f.a)(p.a.mark((function t(e){var n,c;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return _.pending(),t.prev=1,t.next=4,m.a.post("/contacts",e);case 4:return n=t.sent,c=n.data,t.abrupt("return",c);case 9:t.prev=9,t.t0=t.catch(1),_.rejected(t.t0);case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()),C=Object(u.c)("contacts/deleteContact",function(){var t=Object(f.a)(p.a.mark((function t(e){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return C.pending(),t.prev=1,t.next=4,m.a.delete("/contacts/".concat(e));case 4:return t.abrupt("return",e);case 7:t.prev=7,t.t0=t.catch(1),C.rejected(t.t0);case 10:case"end":return t.stop()}}),t,null,[[1,7]])})));return function(e){return t.apply(this,arguments)}}()),g=Object(u.b)("contacts/filter");var N=Object(u.d)([],(h={},Object(j.a)(h,x.fulfilled,(function(t,e){return e.payload})),Object(j.a)(h,_.fulfilled,(function(t,e){return function(t,e){var n=e.payload;return t.some((function(t){return t.name===n.name}))?alert("".concat(n.name," is already in the contact")):[].concat(Object(s.a)(t),[n])}(t,e)})),Object(j.a)(h,C.fulfilled,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),h)),y=Object(u.d)(!1,(v={},Object(j.a)(v,x.pending,(function(){return!0})),Object(j.a)(v,x.fulfilled,(function(){return!1})),Object(j.a)(v,x.rejected,(function(){return!1})),Object(j.a)(v,_.pending,(function(){return!0})),Object(j.a)(v,_.fulfilled,(function(){return!1})),Object(j.a)(v,_.rejected,(function(){return!1})),Object(j.a)(v,C.pending,(function(){return!0})),Object(j.a)(v,C.fulfilled,(function(){return!1})),Object(j.a)(v,C.rejected,(function(){return!1})),v)),F=Object(u.d)("",Object(j.a)({},g,(function(t,e){return e.payload}))),k=Object(b.b)({items:N,loading:y,filter:F}),w=Object(u.a)({reducer:{contacts:k},devTools:!1,middleware:function(t){return Object(s.a)(t({serializableCheck:{ignoredActions:[l.a,l.f,l.b,l.c,l.d,l.e]}}))}}),L=n(37),A=n.n(L),B=n(38),S=n.n(B),I=n(1);var T=function(t){var e=t.title,n=t.children;return Object(I.jsx)("header",{className:S.a.AppHeader,children:Object(I.jsxs)("div",{className:"container",children:[Object(I.jsx)("h1",{children:e}),n]})})},z=n(22),G=n.n(z);var H=function(t){var e=t.title,n=t.children;return Object(I.jsxs)("section",{className:"container ".concat(G.a.Section),children:[Object(I.jsx)("h2",{className:G.a.Title,children:e}),Object(I.jsx)("div",{className:G.a.ContentWrapper,children:n})]})},J=n(27),Z=n(25),q=n.n(Z),W=n(14),E=n.n(W);function M(){var t=Object(o.b)(),e=Object(c.useState)(""),n=Object(J.a)(e,2),a=n[0],r=n[1],i=Object(c.useState)(""),s=Object(J.a)(i,2),u=s[0],l=s[1],j=function(t){var e=t.currentTarget,n=e.name,c=e.value;switch(n){case"name":return r(c);case"number":return l(c);default:return}},b=function(){r(""),l("")},d=q.a.generate(),p=q.a.generate();return Object(I.jsxs)("form",{className:E.a.Form,onSubmit:function(e){e.preventDefault(),t(_({name:a,number:u})),b()},children:[Object(I.jsxs)("div",{className:E.a.Group,children:[Object(I.jsx)("input",{type:"text",name:"name",placeholder:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:a,id:d,onChange:j}),Object(I.jsx)("div",{className:"bar"})]}),Object(I.jsxs)("div",{className:E.a.Group,children:[Object(I.jsx)("input",{type:"tel",name:"number",placeholder:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:u,id:p,onChange:j}),Object(I.jsx)("div",{className:"bar"})]}),Object(I.jsx)("button",{className:E.a.Btn,type:"submit",children:"add contact"})]})}var R=n(39),D=n(11),K=function(t){return t.contacts.filter},P=function(t){return t.contacts.items},U=(Object(D.a)([P,K],(function(t,e){var n=e.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(n)}))})),n(9)),V=n.n(U);function X(){var t=Object(o.c)(P),e=Object(o.b)();return Object(c.useEffect)((function(){e(x())}),[e]),Object(I.jsx)("table",{className:V.a.contactList,children:Object(I.jsx)("tbody",{children:t.map((function(t){var n=t.name,c=t.number,a=t.id;return Object(I.jsxs)("tr",{className:V.a.contactListItem,id:a,children:[Object(I.jsx)("td",{className:V.a.name,children:n}),Object(I.jsx)("td",{className:V.a.number,children:c}),Object(I.jsx)("td",{className:V.a.contactBtn,children:Object(I.jsx)("button",{className:V.a.btn,type:"button",onClick:function(){return e(C(a))},children:Object(I.jsx)(R.a,{})})})]},a)}))})})}var $=n(26),Q=n.n($);function Y(){var t=Object(o.c)(K),e=Object(o.b)();return Object(I.jsx)("div",{children:Object(I.jsxs)("label",{className:Q.a.FilterLabel,htmlFor:"",children:["Filter contacts by name",Object(I.jsx)("input",{className:Q.a.FilterInput,type:"text",value:t,onChange:function(t){return e(g(t.target.value))}})]})})}n(95);var tt=function(){var t=Object(o.c)((function(t){return t.contacts.loading}));return Object(I.jsxs)("div",{className:"App",children:[Object(I.jsx)(T,{title:"PhoneBook",children:Object(I.jsx)(Y,{})}),t&&Object(I.jsx)(H,{children:Object(I.jsx)(A.a,{type:"Oval",color:"black",height:"50vh",width:80})}),Object(I.jsxs)(H,{title:"Contacts",children:[Object(I.jsx)(M,{}),Object(I.jsx)(X,{})]})]})};n(96);i.a.render(Object(I.jsx)(a.a.StrictMode,{children:Object(I.jsx)(o.a,{store:w,children:Object(I.jsx)(tt,{})})}),document.getElementById("root"))}},[[97,1,2]]]);
//# sourceMappingURL=main.abce15b7.chunk.js.map