(function(t){function e(e){for(var s,n,r=e[0],l=e[1],d=e[2],u=0,p=[];u<r.length;u++)n=r[u],Object.prototype.hasOwnProperty.call(o,n)&&o[n]&&p.push(o[n][0]),o[n]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);c&&c(e);while(p.length)p.shift()();return i.push.apply(i,d||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],s=!0,r=1;r<a.length;r++){var l=a[r];0!==o[l]&&(s=!1)}s&&(i.splice(e--,1),t=n(n.s=a[0]))}return t}var s={},o={app:0},i=[];function n(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=s,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)n.d(a,s,function(e){return t[e]}.bind(null,s));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var d=0;d<r.length;d++)e(r[d]);var c=l;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";a("27fb")},"27fb":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var s=a("2b0e"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container py-5",attrs:{id:"app"}},[a("div",{staticClass:"conatiner"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-8"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col sm-4"},[a("div",{staticClass:"card shadow rounded"},[a("h6",{staticClass:"card-header"},[t._v("Create New People")]),a("div",{staticClass:"card-body"},[a("form",{attrs:{action:"http://localhost:3000/api/people",method:"POST"}},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"name"}},[t._v("Your Name: ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],attrs:{id:"name",type:"text",name:"name",placeholder:"People"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"email"}},[t._v("Your Email: ")]),a("br"),a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],attrs:{id:"email",type:"email",name:"email","aria-describedby":"emailHelp",placeholder:"people@mail.com"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),a("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.createData}},[t._v("\n                      Submit\n                    ")])])])])]),a("div",{staticClass:"col sm-4"},[a("div",{staticClass:"card shadow rounded"},[a("h6",{staticClass:"card-header"},[t._v("Update Single People")]),a("div",{staticClass:"card-body"},[a("form",{attrs:{action:"/",method:"POST"}},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"ID"}},[t._v("Id: ")]),a("br"),a("input",{directives:[{name:"model",rawName:"v-model",value:t.u_id,expression:"u_id"}],attrs:{id:"ID",type:"text",name:"ID",placeholder:"ID"},domProps:{value:t.u_id},on:{input:function(e){e.target.composing||(t.u_id=e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"name"}},[t._v("New Name: ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.u_name,expression:"u_name"}],attrs:{id:"name",type:"text",name:"name",placeholder:"New Name"},domProps:{value:t.u_name},on:{input:function(e){e.target.composing||(t.u_name=e.target.value)}}})]),a("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.updateData}},[t._v("\n                      Submit\n                    ")])])])])])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col sm-4"},[a("div",{staticClass:"card shadow rounded"},[a("h6",{staticClass:"card-header"},[t._v("Read Single People")]),a("div",{staticClass:"card-body"},[a("form",{attrs:{action:"/",method:"POST"}},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"ID"}},[t._v("Id: ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.r_id,expression:"r_id"}],attrs:{id:"ID",type:"text",name:"ID",placeholder:"ID"},domProps:{value:t.r_id},on:{input:function(e){e.target.composing||(t.r_id=e.target.value)}}})]),a("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.fetchData}},[t._v("\n                      Submit\n                    ")])])])])]),a("div",{staticClass:"col sm-4"},[a("div",{staticClass:"card shadow rounded"},[a("h6",{staticClass:"card-header"},[t._v("Delete Single People")]),a("div",{staticClass:"card-body"},[a("form",{attrs:{action:"/",method:"POST"}},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"ID"}},[t._v("Id: ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.d_id,expression:"d_id"}],attrs:{id:"ID",type:"text",name:"ID",placeholder:"ID"},domProps:{value:t.d_id},on:{input:function(e){e.target.composing||(t.d_id=e.target.value)}}})]),a("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.deleteData}},[t._v("\n                      Submit\n                    ")])])])])])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col sm-4"},[a("div",{staticClass:"card shadow rounded"},[a("h6",{staticClass:"card-header"},[t._v("Read All People")]),a("div",{staticClass:"card-body"},[a("form",{attrs:{action:"/",method:"POST"}},[a("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.fetchAllData}},[t._v("\n                      Submit\n                    ")])])])])])])]),a("div",{staticClass:"col-sm-4"},[a("div",{staticClass:"card shadow rounded"},[a("h6",{staticClass:"card-header"},[t._v("Response")]),a("div",{staticClass:"card-body"},[a("h6",{staticClass:"card-title"},[t._v("Message: "),a("span",{style:{color:t.textColor}},[t._v(t._s(t.Message))])]),t.Request?a("p",{staticClass:"card-subtitle mb-2",staticStyle:{color:"blue"}},[t._v("\n                Request: "+t._s(t.Request)+"\n              ")]):t._e(),a("div",{staticClass:"overflow-auto"},[t.Results?a("p",{staticClass:"card-text"},[t._v("Result: "+t._s(t.Results))]):t._e()])])])])])])])},i=[],n=(a("7f7f"),{name:"App",data:function(){return{r_id:"",d_id:"",u_id:"",u_name:"",name:"",email:"",textColor:"",Message:"",Request:{},Results:[]}},methods:{fetchAllData:function(){var t=this;this.axios.get("http://localhost:3000/api/people").then((function(e){t.Results=e.data.Result,t.Message=e.data.Message,t.Request=e.data.Request,t.textColor="green",console.log(e.data)})).catch((function(e){t.Message=e,t.Results=[],t.textColor="red"}))},createData:function(){var t=this;this.axios.post("http://localhost:3000/api/people",{name:this.name,email:this.email}).then((function(e){t.Results=e.data.Result,t.Message=e.data.Message,t.Request=e.data.Request,t.textColor="green",console.log(e.data)})).catch((function(e){t.Message=e,t.Results=[],t.textColor="red"}))},fetchData:function(){var t=this;this.axios.get("http://localhost:3000/api/people/"+this.r_id).then((function(e){t.Results=e.data.Result,t.Message=e.data.Message,t.Request=e.data.Request,t.textColor="green",console.log(e.data)})).catch((function(e){t.Message=e,t.Results=[],t.textColor="red"}))},updateData:function(){var t=this;this.axios.put("http://localhost:3000/api/people/"+this.u_id,{newName:this.u_name}).then((function(e){t.Results=e.data.Result,t.Message=e.data.Message,t.Request=e.data.Request,t.textColor="green",console.log(e.data)})).catch((function(e){t.Message=e,t.Results=[],t.textColor="red"}))},deleteData:function(){var t=this;this.axios.delete("http://localhost:3000/api/remove/"+this.d_id).then((function(e){t.Results=e.data.Result,t.Message=e.data.Message,t.Request=e.data.Request,t.textColor="green",console.log(e.data)})).catch((function(e){t.Message=e,t.Results=[],t.textColor="red"}))}}}),r=n,l=(a("034f"),a("2877")),d=Object(l["a"])(r,o,i,!1,null,null,null),c=d.exports,u=a("bc3a"),p=a.n(u),m=a("2106"),v=a.n(m);s["a"].use(v.a,p.a),s["a"].config.productionTip=!1,new s["a"]({render:function(t){return t(c)}}).$mount("#app")}});
//# sourceMappingURL=app.ad462a20.js.map