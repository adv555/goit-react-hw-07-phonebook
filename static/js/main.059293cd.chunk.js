(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{12:function(t,e,n){t.exports={Form:"ContactForm_Form__pmdyI",Btn:"ContactForm_Btn__3RNXk",Group:"ContactForm_Group__2kBuf"}},20:function(t,e,n){t.exports={Section:"Section_Section__CqcNT",Title:"Section_Title__3JdV3",ContentWrapper:"Section_ContentWrapper__H17GO"}},25:function(t,e,n){t.exports={FilterInput:"Filter_FilterInput__3kH4y",FilterLabel:"Filter_FilterLabel__31TZv"}},37:function(t,e,n){t.exports={AppHeader:"Header_AppHeader__1safz"}},78:function(t,e,n){},79:function(t,e,n){},8:function(t,e,n){t.exports={contactList:"ContactList_contactList__9FkvI",contactBtn:"ContactList_contactBtn__1j41G",btn:"ContactList_btn__LjK5L"}},80:function(t,e,n){"use strict";n.r(e);var c,a,r=n(0),o=n.n(r),s=n(17),i=n.n(s),u=n(6),b=n(19),l=n(2),j=n(9),d=n(36),O=n.n(d),f=n(4),p=n(3),m=Object(l.b)("contacts/fetchContactRequest"),h=Object(l.b)("contacts/fetchContactSuccess"),v=Object(l.b)("contacts/fetchContactError"),x=Object(l.b)("contacts/addContactRequest"),_=Object(l.b)("contacts/addContactSuccess"),C=Object(l.b)("contacts/addContactError"),N=Object(l.b)("contacts/deleteContactRequest"),g=Object(l.b)("contacts/deleteContactSuccess"),y=Object(l.b)("contacts/deleteContactError"),k=Object(l.b)("contacts/filter");var F=Object(l.c)([],(c={},Object(f.a)(c,h,(function(t,e){return e.payload})),Object(f.a)(c,_,(function(t,e){return function(t,e){var n=e.payload;return t.some((function(t){return t.name===n.name}))?alert("".concat(n.name," is already in the contact")):[].concat(Object(b.a)(t),[n])}(t,e)})),Object(f.a)(c,g,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),c)),L=Object(l.c)(!1,(a={},Object(f.a)(a,m,(function(){return!0})),Object(f.a)(a,h,(function(){return!1})),Object(f.a)(a,v,(function(){return!1})),Object(f.a)(a,x,(function(){return!0})),Object(f.a)(a,_,(function(){return!1})),Object(f.a)(a,C,(function(){return!1})),Object(f.a)(a,N,(function(){return!0})),Object(f.a)(a,g,(function(){return!1})),Object(f.a)(a,y,(function(){return!1})),a)),w=Object(l.c)("",Object(f.a)({},k,(function(t,e){return e.payload}))),S=Object(p.b)({items:F,loading:L,filter:w}),A=Object(l.a)({reducer:{contacts:S},devTools:!1,middleware:function(t){return[].concat(Object(b.a)(t({serializableCheck:{ignoredActions:[j.a,j.f,j.b,j.c,j.d,j.e]}})),[O.a])}}),B=n(37),I=n.n(B),T=n(1);var q=function(t){var e=t.title,n=t.children;return Object(T.jsx)("header",{className:I.a.AppHeader,children:Object(T.jsxs)("div",{className:"container",children:[Object(T.jsx)("h1",{children:e}),n]})})},z=n(20),G=n.n(z);var H=function(t){var e=t.title,n=t.children;return Object(T.jsxs)("section",{className:"container ".concat(G.a.Section),children:[Object(T.jsx)("h2",{className:G.a.Title,children:e}),Object(T.jsx)("div",{className:G.a.ContentWrapper,children:n})]})},E=n(26),R=n(24),J=n.n(R),Z=n(12),W=n.n(Z),D=n(7),M=n.n(D),$=n(21),K=n(13),P=n.n(K);P.a.defaults.baseURL="http://localhost:4040";function U(){var t=Object(u.b)(),e=Object(r.useState)(""),n=Object(E.a)(e,2),c=n[0],a=n[1],o=Object(r.useState)(""),s=Object(E.a)(o,2),i=s[0],b=s[1],l=function(t){var e=t.currentTarget,n=e.name,c=e.value;switch(n){case"name":return a(c);case"number":return b(c);default:return}},j=function(){a(""),b("")},d=function(t){var e=(""+t).replace(/\D/g,"").match(/^(\d{3})(\d{2})(\d{2})$/);return e?+e[1]+"-"+e[2]+"-"+e[3]:t},O=J.a.generate(),f=J.a.generate();return Object(T.jsxs)("form",{className:W.a.Form,onSubmit:function(e){e.preventDefault(),t(function(t,e){return function(){var n=Object($.a)(M.a.mark((function n(c){var a,r,o;return M.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a={name:t,number:e},c(x()),n.prev=2,n.next=5,P.a.post("/contacts",a);case 5:r=n.sent,o=r.data,console.log(o),c(_(o)),n.next=14;break;case 11:n.prev=11,n.t0=n.catch(2),c(C(n.t0));case 14:case"end":return n.stop()}}),n,null,[[2,11]])})));return function(t){return n.apply(this,arguments)}}()}(c,d(i))),j()},children:[Object(T.jsxs)("div",{className:W.a.Group,children:[Object(T.jsx)("input",{type:"text",name:"name",placeholder:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:c,id:O,onChange:l}),Object(T.jsx)("div",{className:"bar"})]}),Object(T.jsxs)("div",{className:W.a.Group,children:[Object(T.jsx)("input",{type:"tel",name:"number",placeholder:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:i,id:f,onChange:l}),Object(T.jsx)("div",{className:"bar"})]}),Object(T.jsx)("button",{className:W.a.Btn,type:"submit",children:"add contact"})]})}var V=n(38),X=n(10),Q=function(t){return t.contacts.filter},Y=function(t){return t.contacts.items},tt=(Object(X.a)([Y,Q],(function(t,e){var n=e.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(n)}))})),n(8)),et=n.n(tt);function nt(){var t=Object(u.c)(Y),e=Object(u.b)();return console.log(t),Object(T.jsx)("table",{className:et.a.contactList,children:Object(T.jsx)("tbody",{children:t.map((function(t){var n=t.name,c=t.number,a=t.id;return Object(T.jsxs)("tr",{className:et.a.contactListItem,id:a,children:[Object(T.jsx)("td",{className:et.a.name,children:n}),Object(T.jsx)("td",{className:et.a.number,children:c}),Object(T.jsx)("td",{className:et.a.contactBtn,children:Object(T.jsx)("button",{className:et.a.btn,type:"button",onClick:function(){return e(function(t){return function(){var e=Object($.a)(M.a.mark((function e(n){return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(N()),e.prev=1,e.next=4,P.a.delete("/contacts/".concat(t));case 4:n(g(t)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),n(y(e.t0));case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}()}(a))},children:Object(T.jsx)(V.a,{})})})]},a)}))})})}var ct=n(25),at=n.n(ct);function rt(){var t=Object(u.c)(Q),e=Object(u.b)();return Object(T.jsx)("div",{children:Object(T.jsxs)("label",{className:at.a.FilterLabel,htmlFor:"",children:["Filter contacts by name",Object(T.jsx)("input",{className:at.a.FilterInput,type:"text",value:t,onChange:function(t){return e(k(t.target.value))}})]})})}n(78);var ot=function(){var t=Object(u.b)();return Object(r.useEffect)((function(){t(function(){var t=Object($.a)(M.a.mark((function t(e){var n,c;return M.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(m()),t.prev=1,t.next=4,P.a.get("/contacts");case 4:n=t.sent,c=n.data,console.log(c),e(h(c)),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(1),e(v(t.t0));case 13:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(e){return t.apply(this,arguments)}}())}),[t]),Object(T.jsxs)("div",{className:"App",children:[Object(T.jsx)(q,{title:"PhoneBook",children:Object(T.jsx)(rt,{})}),Object(T.jsxs)(H,{title:"Contacts",children:[Object(T.jsx)(U,{}),Object(T.jsx)(nt,{})]})]})};n(79);i.a.render(Object(T.jsx)(o.a.StrictMode,{children:Object(T.jsx)(u.a,{store:A,children:Object(T.jsx)(ot,{})})}),document.getElementById("root"))}},[[80,1,2]]]);
//# sourceMappingURL=main.059293cd.chunk.js.map