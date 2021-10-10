(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{36:function(e,t,c){},62:function(e,t,c){},63:function(e,t,c){},64:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),s=c(27),l=c.n(s),i=(c(36),c(65)),o=c(8),r=c(10),d=c(28),j=c.n(d),b=c(5),m=Object(b.a)(),u=j.a.create({baseURL:"/api/employee/",headers:{"Content-type":"application/json"}});u.interceptors.response.use((function(e){return e}),(function(e){if(!e.response||"object"!==typeof e.response.data)return setTimeout((function(){}),1e3),Promise.reject(e);var t=e.response,c=t.status,n=t.config;t.data;"get"===n.method&&(401===c?m.push("/exception/type=401"):403===c?m.push("/exception/type=403"):404===c?m.push("/exception/type=404"):500===c&&m.push("/exception/type=500"))}));var p=function(){return u.get("")},h=function(e){return console.log(e,"httpservice"),u.get("?id=".concat(e))},O=function(e){return u.delete("?".concat(e))},x=function(){return u.get("/getEmployeeTypes")},f=c(0),v=function(){var e=Object(i.e)(),t=Object(n.useState)(),c=Object(r.a)(t,2),a=c[0],s=c[1],l=Object(n.useState)([]),d=Object(r.a)(l,2),j=d[0],b=d[1];return Object(n.useEffect)((function(){var t=parseInt(e.id);x().then((function(e){return b(e.data)})),t&&h(t).then((function(e){s(e.data)})).catch((function(e){console.log(e)}))}),[e.id]),Object(f.jsxs)("div",{className:"employeeForm col-md-8",children:[Object(f.jsxs)("div",{className:"col-md-6",children:[Object(f.jsx)("label",{className:"form-label",children:"Ad"}),Object(f.jsx)("input",{type:"text",className:"form-control",id:"name",required:!0,value:null===a||void 0===a?void 0:a.firstName,onChange:function(e){return s(Object(o.a)(Object(o.a)({},a),{},{firstName:e.target.value}))}})]}),Object(f.jsxs)("div",{className:"col-md-6",children:[Object(f.jsx)("label",{className:"form-label",children:"Soyad"}),Object(f.jsx)("input",{type:"text",className:"form-control",id:"name",required:!0,value:null===a||void 0===a?void 0:a.lastName,onChange:function(e){return s(Object(o.a)(Object(o.a)({},a),{},{lastName:e.target.value}))}})]}),Object(f.jsxs)("div",{className:"col-md-6",children:[Object(f.jsx)("label",{className:"form-label",children:"E-posta"}),Object(f.jsx)("input",{type:"email",className:"form-control",id:"email",required:!0,value:null===a||void 0===a?void 0:a.email,onChange:function(e){return s(Object(o.a)(Object(o.a)({},a),{},{email:e.target.value}))}})]}),Object(f.jsxs)("div",{className:"col-6",children:[Object(f.jsx)("label",{className:"form-label",children:"Do\u011fum Tarihi"}),Object(f.jsx)("input",{type:"text",className:"form-control",id:"birthDate"})]}),Object(f.jsxs)("div",{className:"col-md-6",children:[Object(f.jsx)("label",{className:"form-label",children:"Pozisyon"}),Object(f.jsxs)("select",{id:"inputState",className:"form-select",value:null===a||void 0===a?void 0:a.employeeTypeId,onChange:function(e){return s(Object(o.a)(Object(o.a)({},a),{},{employeeTypeId:e.target.value}))},children:[Object(f.jsx)("option",{selected:!0,children:"Choose..."}),j.map((function(e){return Object(f.jsx)("option",{value:e.id,children:e.name})}))]})]}),Object(f.jsx)("div",{className:"col-12 pt-1",children:Object(f.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Sign in"})})]})},y=c(67),N=c(66);var g=function(){var e=Object(n.useState)([]),t=Object(r.a)(e,2),c=t[0],a=t[1],s=Object(i.d)();return Object(n.useEffect)((function(){p().then((function(e){a(e.data)})).catch((function(e){console.log(e)}))}),[]),Object(f.jsxs)("div",{className:"employee-index",children:[Object(f.jsx)("div",{className:"d-flex justify-content-end me-3 mt-3",children:Object(f.jsx)(y.a,{variant:"danger",onClick:function(){return s.push("/employee/create")},children:"Personel Ekle"})}),Object(f.jsxs)(N.a,{striped:!0,hover:!0,responsive:!0,children:[Object(f.jsx)("thead",{children:Object(f.jsxs)("tr",{children:[Object(f.jsx)("th",{children:"Ad Soyad"}),Object(f.jsx)("th",{className:"d-none d-sm-table-cell",children:"Pozisyon"}),Object(f.jsx)("th",{className:"d-none d-sm-table-cell",children:"Ya\u015f"}),Object(f.jsx)("th",{className:"d-none d-md-table-cell",children:"E-posta"}),Object(f.jsx)("th",{})]})}),Object(f.jsx)("tbody",{children:c.map((function(e,t){return Object(f.jsxs)("tr",{children:[Object(f.jsx)("td",{children:e.firstName+e.lastName}),Object(f.jsx)("td",{className:"d-none d-sm-table-cell",children:e.employeeTypeName}),Object(f.jsx)("td",{className:"d-none d-sm-table-cell",children:e.age}),Object(f.jsx)("td",{className:"d-none d-md-table-cell",children:e.email}),Object(f.jsxs)("td",{children:[Object(f.jsx)(y.a,{variant:"primary",className:"mx-1",onClick:function(){return s.push("/employee/edit/"+e.id)},children:"G\xfcncelle"}),Object(f.jsx)(y.a,{variant:"danger",onClick:function(){return function(e){var t=O(e);console.log(t)}(e.id)},children:"Sil"})]})]},t)}))})]})]})},C=function(){var e=Object(i.e)(),t=Object(i.d)();return Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)("div",{children:[Object(f.jsxs)("p",{children:["Hata : ",e.type]}),Object(f.jsx)(y.a,{variant:"primary",onClick:function(){return t.push("/employee/index")},children:"Back to Home"})]})})};c(62);var S=function(){return Object(f.jsx)("div",{className:"App",children:Object(f.jsxs)(i.c,{children:[Object(f.jsx)(i.a,{path:"/employee/edit/:id",component:v}),Object(f.jsx)(i.a,{path:"/employee/create",component:v}),Object(f.jsx)(i.a,{path:"/employee/index",component:g}),Object(f.jsx)(i.a,{path:"/exception/type=:type",component:C})]})})};c(63);l.a.render(Object(f.jsx)(a.a.StrictMode,{children:Object(f.jsx)(i.b,{history:m,children:Object(f.jsx)(S,{})})}),document.getElementById("root"))}},[[64,1,2]]]);
//# sourceMappingURL=main.0011d672.chunk.js.map