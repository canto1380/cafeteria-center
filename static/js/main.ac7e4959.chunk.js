(this.webpackJsonpcrudbasico=this.webpackJsonpcrudbasico||[]).push([[0],{50:function(e,t,a){},52:function(e,t,a){},66:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),r=a(25),o=a.n(r),s=(a(50),a(9)),i=a.n(s),u=a(15),l=a(11),d=(a(52),a(16)),j=a(7),b=(a(53),a(72)),h=a(73),p=a(2),x=function(){return Object(p.jsxs)(b.a,{bg:"danger",expand:"lg",variant:"dark",children:[Object(p.jsx)(b.a.Brand,{href:"/",children:"Cafeteria Center"}),Object(p.jsx)(b.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(p.jsx)(b.a.Collapse,{id:"basic-navbar-nav",children:Object(p.jsxs)(h.a,{className:"mr-auto",children:[Object(p.jsx)(d.c,{className:"nav-link",exact:!0,to:"/",children:"Inicio"}),Object(p.jsx)(d.c,{className:"nav-link",exact:!0,to:"/productos",children:"Productos"}),Object(p.jsx)(d.c,{className:"nav-link",exact:!0,to:"/productos/agregar",children:"Agregar productos"})]})})]})},f=function(){return Object(p.jsx)("div",{className:"bg-dark text-light text-center py-3",children:"\xa9 Todos los derechos reservados"})},O=function(){return Object(p.jsx)("div",{children:Object(p.jsx)("h1",{children:"Hola. Desde inicio"})})},m=a(70),g=a(75),v=a(68),C=a(69),k=a(20),y=a.n(k),N=a(41),P=a(42),S=function(e){return Object(p.jsxs)(g.a.Item,{className:"d-flex justify-content-between",children:[Object(p.jsxs)("p",{children:[e.producto.nombreProducto," ",Object(p.jsx)(v.a,{variant:"secondary",children:e.producto.precio})]}),Object(p.jsxs)("div",{children:[Object(p.jsxs)(d.b,{to:"/productos/editar/".concat(e.producto._id),className:" btn btn-warning mr-2 text-light",children:[Object(p.jsx)(N.a,{icon:P.a}),"Editar"]}),Object(p.jsxs)(C.a,{variant:"danger",onClick:function(){return t=e.producto._id,void y.a.fire({title:"\xbfEsta seguro de eliminar el producto?",text:"No puedes recuperar un producto eliminado",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Eliminar",CancelButtonText:"Cancelar"}).then(function(){var a=Object(u.a)(i.a.mark((function a(c){var n,r;return i.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(!c.isConfirmed){a.next=13;break}return n="".concat("https://cafeteria1234.herokuapp.com/cafeteria","/").concat(t),a.prev=2,a.next=5,fetch(n,{method:"DELETE",headers:{"Content-Type":"application/json"}});case 5:r=a.sent,console.log(r),200===r.status&&(y.a.fire("Producto eliminado","El producto seleccionado fue borrado correctamente","success"),e.setConsultaProd(!0)),a.next=13;break;case 10:a.prev=10,a.t0=a.catch(2),console.log(a.t0);case 13:case"end":return a.stop()}}),a,null,[[2,10]])})));return function(e){return a.apply(this,arguments)}}());var t},children:[Object(p.jsx)(N.a,{icon:P.b}),"Eliminar"]})]})]})},w=function(e){var t=e.productos;return Object(p.jsxs)(m.a,{children:[Object(p.jsx)("h1",{className:"text-center my-5",children:"Lista de Productos"}),Object(p.jsx)(g.a,{className:"my-5",children:t.map((function(t){return Object(p.jsx)(S,{producto:t,setConsultaProd:e.setConsultaProd},t._id)}))})]})},B=a(71),E=a(74),T=function(e){var t=e.setConsultaProd,a=Object(c.useState)(""),n=Object(l.a)(a,2),r=n[0],o=n[1],s=Object(c.useState)(0),d=Object(l.a)(s,2),j=d[0],b=d[1],h=Object(c.useState)(""),x=Object(l.a)(h,2),f=x[0],O=x[1],g=Object(c.useState)(!1),v=Object(l.a)(g,2),k=v[0],N=v[1],P=function(e){O(e.target.value)},S=function(){var e=Object(u.a)(i.a.mark((function e(a){var c,n,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),!(""===r.trim()||j<=0||""===f)){e.next=6;break}N(!0),setTimeout((function(){N(!1)}),2500),e.next=20;break;case 6:return N(!1),c={nombreProducto:r,precio:j,categoria:f},e.prev=8,n={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(c)},e.next=12,fetch("https://cafeteria1234.herokuapp.com/cafeteria",n);case 12:o=e.sent,console.log(o),201===o.status&&(y.a.fire("Producto creado!","El producto ingresado se agrego correctamente!","success"),t(!0)),e.next=20;break;case 17:e.prev=17,e.t0=e.catch(8),console.log(e.t0);case 20:case"end":return e.stop()}}),e,null,[[8,17]])})));return function(t){return e.apply(this,arguments)}}();return Object(p.jsx)(m.a,{children:Object(p.jsxs)(B.a,{className:"mb-4",onSubmit:S,children:[Object(p.jsx)("h1",{className:"text-center my-5",children:"Agregar producto nuevo"}),Object(p.jsxs)(B.a.Group,{children:[Object(p.jsx)(B.a.Label,{children:"Nombre del producto"}),Object(p.jsx)(B.a.Control,{type:"text",placeholder:"Te",onChange:function(e){return o(e.target.value)}})]}),Object(p.jsxs)(B.a.Group,{children:[Object(p.jsx)(B.a.Label,{children:"Precio"}),Object(p.jsx)(B.a.Control,{type:"number",placeholder:"50,00",onChange:function(e){return b(parseFloat(e.target.value))}})]}),Object(p.jsx)("h3",{className:"text-center my-3",children:"Categoria"}),Object(p.jsxs)("div",{className:"text-center justify-content-around",children:[Object(p.jsx)(B.a.Check,{name:"check-categoria",value:"Bebida Caliente",inline:!0,type:"radio",label:"Bebida caliente",onChange:P}),Object(p.jsx)(B.a.Check,{name:"check-categoria",value:"Bebida Fria",inline:!0,type:"radio",label:"Bebida fria",onChange:P}),Object(p.jsx)(B.a.Check,{name:"check-categoria",value:"Dulce",inline:!0,type:"radio",label:"Dulce",onChange:P}),Object(p.jsx)(B.a.Check,{name:"check-categoria",value:"Salado",inline:!0,type:"radio",label:"Salado",onChange:P})]}),Object(p.jsx)(C.a,{variant:"danger",type:"submit",className:"w-100 my-5",children:"Guardar"}),k?Object(p.jsx)(E.a,{variant:"warning",children:" Error en los datos ingresados"}):null]})})},D=function(e){return""!==e.trim()},F=Object(j.g)((function(e){var t=e.setConsultaProd,a=Object(c.useState)(""),n=Object(l.a)(a,2),r=n[0],o=n[1],s=Object(c.useState)({}),d=Object(l.a)(s,2),b=d[0],h=d[1],x=Object(c.useState)(!1),f=Object(l.a)(x,2),O=f[0],g=f[1],v="https://cafeteria1234.herokuapp.com/cafeteria/"+Object(j.f)().id,k=Object(c.useRef)(""),N=Object(c.useRef)(0);Object(c.useEffect)((function(){(function(){var e=Object(u.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(v);case 3:if(t=e.sent,console.log(t),200!==t.status){e.next=10;break}return e.next=8,t.json();case 8:a=e.sent,h(a);case 10:e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}})()()}),[]);var P=function(e){o(e.target.value)},S=function(){var a=Object(u.a)(i.a.mark((function a(c){var n,o;return i.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(c.preventDefault(),console.log(k.current.value),n=""===r?b.categoria:r,!(D(k.current.value)&&(s=parseFloat(N.current.value),s>0&&s<2e3)&&D(n))){a.next=18;break}return g(!1),a.prev=5,o={nombreProducto:k.current.value,precio:N.current.value,categoria:n},a.next=9,fetch(v,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)});case 9:200===a.sent.status&&(y.a.fire("Producto modificado!","El producto se modifico correctamente!","success"),t(!0),e.history.push("/productos")),a.next=16;break;case 13:a.prev=13,a.t0=a.catch(5),console.log(a.t0);case 16:a.next=19;break;case 18:g(!0);case 19:case"end":return a.stop()}var s}),a,null,[[5,13]])})));return function(e){return a.apply(this,arguments)}}();return Object(p.jsx)(m.a,{children:Object(p.jsxs)(B.a,{className:"mb-4",onSubmit:S,children:[Object(p.jsx)("h1",{className:"text-center my-5",children:"Editar producto"}),Object(p.jsxs)(B.a.Group,{children:[Object(p.jsx)(B.a.Label,{children:"Nombre del producto"}),Object(p.jsx)(B.a.Control,{type:"text",placeholder:"Te",ref:k,defaultValue:b.nombreProducto})]}),Object(p.jsxs)(B.a.Group,{children:[Object(p.jsx)(B.a.Label,{children:"Precio"}),Object(p.jsx)(B.a.Control,{type:"number",placeholder:"50,00",ref:N,defaultValue:b.precio})]}),Object(p.jsx)("h3",{className:"text-center my-3",children:"Categoria"}),Object(p.jsxs)("div",{className:"text-center justify-content-around",children:[Object(p.jsx)(B.a.Check,{name:"check-categoria",value:"Bebida Caliente",inline:!0,type:"radio",label:"Bebida caliente",onChange:P,defaultChecked:b.categoria&&"Bebida Caliente"===b.categoria}),Object(p.jsx)(B.a.Check,{name:"check-categoria",value:"Bebida Fria",inline:!0,type:"radio",label:"Bebida fria",onChange:P,defaultChecked:b.categoria&&"Bebida Fria"===b.categoria}),Object(p.jsx)(B.a.Check,{name:"check-categoria",value:"Dulce",inline:!0,type:"radio",label:"Dulce",onChange:P,defaultChecked:b.categoria&&"Dulce"===b.categoria}),Object(p.jsx)(B.a.Check,{name:"check-categoria",value:"Salado",inline:!0,type:"radio",label:"Salado",onChange:P,defaultChecked:b.categoria&&"Salado"===b.categoria})]}),Object(p.jsx)(C.a,{variant:"danger",type:"submit",className:"w-100 my-5",children:"Guardar"}),O?Object(p.jsx)(E.a,{variant:"warning",children:" Error en los datos ingresados"}):null]})})})),L=function(){return Object(p.jsx)(m.a,{children:Object(p.jsx)("h1",{className:"text-center my-5",children:"Pagina de error 404"})})};var G=function(){var e=Object(c.useState)([]),t=Object(l.a)(e,2),a=t[0],n=t[1],r=Object(c.useState)(!0),o=Object(l.a)(r,2),s=(o[0],o[1]);Object(c.useEffect)((function(){b()}),[]);var b=function(){var e=Object(u.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://cafeteria1234.herokuapp.com/cafeteria");case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,200===t.status&&(n(a),s(!1)),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();return Object(p.jsxs)(d.a,{children:[Object(p.jsx)(x,{}),Object(p.jsxs)(j.c,{children:[Object(p.jsx)(j.a,{exact:!0,path:"/",component:function(){return Object(p.jsx)(O,{})}}),Object(p.jsx)(j.a,{exact:!0,path:"/productos",component:function(){return Object(p.jsx)(w,{productos:a,setConsultaProd:s})}}),Object(p.jsx)(j.a,{exact:!0,path:"/productos/agregar",component:function(){return Object(p.jsx)(T,{setConsultaProd:s})}}),Object(p.jsx)(j.a,{exact:!0,path:"/productos/editar/:id",component:function(){return Object(p.jsx)(F,{setConsultaProd:s})}}),Object(p.jsx)(j.a,{exact:!0,path:"*",component:function(){return Object(p.jsx)(L,{})}})]}),Object(p.jsx)(f,{})]})},I=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,76)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,r=t.getLCP,o=t.getTTFB;a(e),c(e),n(e),r(e),o(e)}))};o.a.render(Object(p.jsx)(n.a.StrictMode,{children:Object(p.jsx)(G,{})}),document.getElementById("root")),I()}},[[66,1,2]]]);
//# sourceMappingURL=main.ac7e4959.chunk.js.map