(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{266:function(t,e,r){var content=r(271);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(73).default)("a59fe140",content,!0,{sourceMap:!1})},270:function(t,e,r){"use strict";r(266)},271:function(t,e,r){var o=r(72)(!1);o.push([t.i,".card{background-color:#f7f4ea;border:1px solid #565656;box-sizing:border-box;box-shadow:0 0 8px rgba(0,0,0,.25);border-radius:10px}.card:hover{box-shadow:0 0 16px rgba(0,0,0,.25)}.modal-content{background-color:#f7f4ea;border-color:#4f3b78}",""]),t.exports=o},274:function(t,e,r){"use strict";r.r(e);r(207);var o={props:{id:Number,title:String,img:String,presentation:String,text:String,link:String},data:function(){return{modalid:null}},mounted:function(){this.modalid="proyecto-".concat(this.id)},methods:{ver:function(){this.$bvModal.show(this.modalid)}}},n=(r(270),r(67)),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("b-card",{staticClass:"mb-2",staticStyle:{"max-width":"40rem"},attrs:{title:t.title,"img-src":t.img,"img-alt":"Image","img-top":"",tag:"article"},on:{click:t.ver}},[r("b-card-text",{staticStyle:{height:"100px",overflow:"hidden","text-overflow":"ellipsis"}},[t._v("\n      "+t._s(t.presentation)+"\n    ")])],1),t._v(" "),r("b-modal",{attrs:{"ok-variant":"dark","cancel-variant":"danger",size:"xl",centered:"",id:t.modalid,title:t.title}},[r("div",{domProps:{innerHTML:t._s(t.text)}}),t._v(" "),r("hr"),t._v(" "),r("a",{staticClass:"btn btn-ligth",attrs:{href:t.link}},[t._v("Ver Proyecto")])])],1)}),[],!1,null,null,null);e.default=component.exports}}]);