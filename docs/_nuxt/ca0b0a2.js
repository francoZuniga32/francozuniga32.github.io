(window.webpackJsonp=window.webpackJsonp||[]).push([[4,2,3],{265:function(e,o,t){var content=t(268);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,t(73).default)("a59fe140",content,!0,{sourceMap:!1})},266:function(e,o,t){var content=t(270);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,t(73).default)("13a90c28",content,!0,{sourceMap:!1})},267:function(e,o,t){"use strict";t(265)},268:function(e,o,t){var r=t(72)(!1);r.push([e.i,".card{background-color:#f7f4ea;border:1px solid #565656;box-sizing:border-box;box-shadow:0 0 8px rgba(0,0,0,.25);border-radius:10px}.card:hover{box-shadow:0 0 16px rgba(0,0,0,.25)}.modal-content{background-color:#f7f4ea;border-color:#4f3b78}",""]),e.exports=r},269:function(e,o,t){"use strict";t(266)},270:function(e,o,t){var r=t(72)(!1);r.push([e.i,".card{margin:1%}",""]),e.exports=r},271:function(e,o,t){"use strict";t.r(o);t(207);var r={props:{id:Number,title:String,img:String,presentation:String,text:String,link:String},data:function(){return{modalid:null}},mounted:function(){this.modalid="proyecto-".concat(this.id)},methods:{ver:function(){this.$bvModal.show(this.modalid)}}},n=(t(267),t(60)),component=Object(n.a)(r,(function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",[t("b-card",{staticClass:"mb-2",staticStyle:{"max-width":"40rem"},attrs:{title:e.title,"img-src":e.img,"img-alt":"Image","img-top":"",tag:"article"},on:{click:e.ver}},[t("b-card-text",{staticStyle:{height:"100px",overflow:"hidden","text-overflow":"ellipsis"}},[e._v("\n      "+e._s(e.presentation)+"\n    ")])],1),e._v(" "),t("b-modal",{attrs:{"ok-variant":"dark","cancel-variant":"danger",size:"xl",centered:"",id:e.modalid,title:e.title}},[t("div",{domProps:{innerHTML:e._s(e.text)}}),e._v(" "),t("hr"),e._v(" "),t("a",{staticClass:"btn btn-ligth",attrs:{href:e.link}},[e._v("Ver Proyecto")])])],1)}),[],!1,null,null,null);o.default=component.exports},272:function(e,o,t){var content=t(275);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,t(73).default)("1b7833da",content,!0,{sourceMap:!1})},273:function(e,o,t){"use strict";t.r(o);var r={props:{title:String,img:String,url:String},methods:{to:function(){window.location(this.url,"_blank")}}},n=(t(269),t(60)),component=Object(n.a)(r,(function(){var e=this,o=e.$createElement;return(e._self._c||o)("b-card",{attrs:{title:e.title,"img-src":e.img,"img-alt":"Image","img-top":"",overlay:""},on:{click:function(o){return e.to()}}})}),[],!1,null,null,null);o.default=component.exports},274:function(e,o,t){"use strict";t(272)},275:function(e,o,t){var r=t(72)(!1);r.push([e.i,'.nav-fill .nav-item .nav-link{color:#fff}.nav-tabs .nav-link.active{color:#fff;background-color:#4f3b78;border-color:#363b4e}.tab-content{background-color:#363b4e;border-radius:10px;padding:1%}ol{list-style-type:none;counter-reset:li}li:before{counter-increment:li;content:counter(li,decimal-leading-zero);color:#6a7ff5;margin-right:.25em}ul.timeline{list-style-type:none;position:relative}ul.timeline:before{content:" ";background:#000;display:inline-block;position:absolute;left:29px;width:2px;height:100%;z-index:400}ul.timeline>li{margin:20px 0;padding-left:20px}ul.timeline>li:before{content:" ";background:#fff;display:inline-block;position:absolute;border-radius:50%;border:3px solid #000;left:20px;width:20px;height:20px;z-index:400}',""]),e.exports=r},276:function(e,o,t){"use strict";t.r(o);var r=t(271),n=t(273),l={components:{proyecto:r.default,videoCard:n.default},data:function(){return{tecnologuias:["HTML","CSS-Basico","JS","PHP","MySQL","Node JS","Sequelise ORM","Linux / Bash"],experiencia:[{titulo:"Policia de la Provincia del Neuquen",puesto:"Pasante",area:"Dpto de informática, Area de programacion",descripcion:"Realizar tareas de capacitación en el funcionamiento del dpto de informática de dicho ente, centrándome en el area de programacion, aprendiendo los pasos y formas en la que se desarrolla un software."},{titulo:"Pasantías en la Facultad de Informática",puesto:"Pasante",area:"Universidad del Comahue, Facultad de Informática",descripcion:"Realice pasantías realizando labores educativas. Participe como tallerista del programa de Vocaciones TIC, participe como ayudante en Vocaciones TIC itinerante, realizando actividades en Loncopué y Chos Malal. Además de participar de varias actividades de la facultad."},{titulo:"Programador en Tree Soft",puesto:"Desarrollador web",area:"Programacion",descripcion:"migre el backend de una aplicación construida en PHP a nodejs con Express y Sequelize, lo que resultó en una api rest. Además de desarrollar una aplicación en Vuejs Cli para consumir dicha api."},{titulo:"Programador principal de Cooking Beats",puesto:"Programador Principal",area:"Programacion",descripcion:"Cooking beats es un marketplace comunidad para productores de audio y beatmakers. Soy cofundador además de programador principal. Finalistas de nave federal 2021."}],proyectos:[{title:"Cooking Beats",img:"miniaturas/cookingbeats.png",presentation:"Marketplace comunidad de beatmakers y productores de audio. Finalista de naves federal (banco macro)",text:"\n            <p>Creamos Cooking Beats con el objetivo de ayudar a la comunidad de beatmaker y productor a poder comercializar su música por medio de una plataforma que asegure que ambas partes sean beneficiadas. El sistema está construido en tecnologías modernas por lo que siempre estamos avanzando a nuevos entornos.</p>\n          ",link:"https://cookingbeats.github.io/"},{title:"Debian FAI",img:"miniaturas/debianfai.png",presentation:"página web de la distribución de Debian de la facultad de informática",text:"\n            <p>Está construida en html, js y css puro además de que uso bootstrap para el grid y lo demás. Contiene lo necesario para saber instalarlo además de los archivos de la distro.</p>\n          ",link:"http://debianfai.fi.uncoma.edu.ar/"},{title:"CEFAI app",img:"miniaturas/img.png",presentation:"Aplicación de horarios y consulta de correlatividades",text:"\n            <p>Esta aplicación de momento está fuera de línea ya que estamos en proceso de migrar a un ORM. El sitio ofrece un sistema de horarios para mostrar qué materias se están dictando además del aula en donde se cursa.</p>\n            <p>Otra de las funcionalidades es la de consultar las correlativas para poder saber el régimen de correlatividades sin tener que leer una tabla. Una de las cosas que queremos agregar es la capacidad de contar con cursos de programación para los estudiantes de la carrera. </p>\n          ",link:"https://github.com/francoZuniga32/CEFAIrest"}],demos:[{title:"Ecomerce",img:"miniaturas/ecommerce.png",presentation:"Demostración de cómo funciona un ecommerce de forma sencilla",text:"\n            <p>Podrá realizar las acciones básicas y necesarias para poder realizar una compra. Podrá seleccionar un producto, la cantidad y cargarlas a un carrito de compras. Tengo que trabajar en el sistema de paginación y además en los filtros de búsqueda.</p>\n          ",link:"https://github.com/francoZuniga32/ecomerce-demo"},{title:"Producto Flow",img:"miniaturas/img.png",presentation:"Aplicación de control de produccion.",text:"\n            <p>Son innumerables las empresas que requieren un sistema de seguimiento de su produccion, he aquí una demo de como funcionaria una en la vida real. Podrá ingresar un pedido, luego de esto tendrá que completar los formularios para los procesos de dicho producto y podrá ver por qué etapa están dichos productos. Luego de finalizar podrá realizar la entrega de dicho pedido. Además de esto podrá ver algunas métricas como por ejemplo en qué etapa está se encuentra un pedido.</p>\n          ",link:"https://github.com/francoZuniga32/product-flow"}]}}},c=(t(274),t(60)),component=Object(c.a)(l,(function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("b-container",[t("b-row",{staticClass:"d-flex justify-content-center align-items-center",staticStyle:{margin:"10% 0%"}},[t("b-col",{attrs:{sm:""}},[t("h1",{staticClass:"text-left"},[t("b",[e._v("Franco Zuñiga, Desarrollador Web")])])]),e._v(" "),t("b-col",{attrs:{sm:""}},[t("p",[e._v("\n        Soy franco zuñiga soy estudiante de Ciencias de la Computación y Administración de Sistemas.\n         Programo web desde hace 4 años, ademas cuento con experiencia programando software para  empresas.\n      ")]),e._v(" "),t("p",[e._v("\n        Creo que tengo lo suficiente como para poder ayudarte con tus proyectos espero que puedas contar conmigo.\n      ")])])],1),e._v(" "),t("hr"),e._v(" "),t("b-row",[t("b-col",[t("h2",[e._v("Tecnologuias:")]),e._v(" "),t("ol",e._l(e.tecnologuias,(function(o,i){return t("li",{key:i},[e._v(e._s(o))])})),0)]),e._v(" "),t("b-col",{staticStyle:{height:"300px","overflow-x":"scroll"}},[t("h2",[e._v("Experiencia:")]),e._v(" "),t("ul",{staticClass:"timeline"},e._l(e.experiencia,(function(o,i){return t("li",{key:i},[t("h5",[e._v(e._s(o.titulo))]),e._v(" "),t("h6",[e._v(e._s(o.area)+". "+e._s(o.puesto))]),e._v(" "),t("hr"),e._v(" "),t("p",[e._v("\n            "+e._s(o.descripcion)+"\n          ")])])})),0)]),e._v(" "),t("b-col",[t("h2",[e._v("Logros:")])])],1),e._v(" "),t("hr"),e._v(" "),t("b-row",[t("b-col",[t("h2",[e._v("Proyectos")]),e._v(" "),t("b-row",{staticClass:"row row-cols-1 row-cols-md-4"},e._l(e.proyectos,(function(data,i){return t("proyecto",{key:i,attrs:{id:i,title:data.title,img:data.img,link:data.link,presentation:data.presentation,text:data.text}})})),1)],1)],1),e._v(" "),t("hr"),e._v(" "),t("b-row",[t("b-col",[t("h2",[e._v("Demos")]),e._v(" "),t("b-row",{staticClass:"row row-cols-1 row-cols-md-4"},e._l(e.demos,(function(data,i){return t("proyecto",{key:i,attrs:{id:"demo-"+i,title:data.title,img:data.img,link:data.link,presentation:data.presentation,text:data.text}})})),1)],1)],1)],1)}),[],!1,null,null,null);o.default=component.exports;installComponents(component,{Proyecto:t(271).default})}}]);