(function(e){function t(t){for(var o,r,a=t[0],c=t[1],l=t[2],d=0,h=[];d<a.length;d++)r=a[d],i[r]&&h.push(i[r][0]),i[r]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);u&&u(t);while(h.length)h.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],o=!0,a=1;a<n.length;a++){var c=n[a];0!==i[c]&&(o=!1)}o&&(s.splice(t--,1),e=r(r.s=n[0]))}return e}var o={},i={app:0},s=[];function r(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=o,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],c=a.push.bind(a);a.push=t,a=a.slice();for(var l=0;l<a.length;l++)t(a[l]);var u=c;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},2856:function(e,t,n){},"50b0":function(e,t,n){"use strict";var o=n("a617"),i=n.n(o);i.a},"524d":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var o=n("2b0e"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("h1",[e._v(" simple flowchart")]),n("div",{staticClass:"tool-wrapper"},[n("select",{directives:[{name:"model",rawName:"v-model",value:e.newNodeType,expression:"newNodeType"}],on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.newNodeType=t.target.multiple?n:n[0]}}},e._l(e.nodeCategory,function(t,o){return n("option",{key:o,domProps:{value:o}},[e._v(e._s(t))])})),n("input",{directives:[{name:"model",rawName:"v-model",value:e.newNodeLabel,expression:"newNodeLabel"}],attrs:{type:"text",placeholder:"Input node label"},domProps:{value:e.newNodeLabel},on:{input:function(t){t.target.composing||(e.newNodeLabel=t.target.value)}}}),n("button",{on:{click:e.addNode}},[e._v("ADD")])]),n("simple-flowchart",{attrs:{scene:e.scene,height:800},on:{"update:scene":function(t){e.scene=t},nodeClick:e.nodeClick,nodeDelete:e.nodeDelete,linkBreak:e.linkBreak,linkAdded:e.linkAdded,canvasClick:e.canvasClick}})],1)},s=[],r=n("8afe"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flowchart-container",on:{mousemove:e.handleMove,mouseup:e.handleUp,mousedown:e.handleDown}},[n("svg",{attrs:{width:"100%",height:e.height+"px"}},e._l(e.lines,function(t,o){return n("flowchart-link",e._b({key:"link"+o,on:{deleteLink:function(n){e.linkDelete(t.id)}}},"flowchart-link",t,!1,!0))})),e._l(e.scene.nodes,function(t,o){return n("flowchart-node",e._b({key:"node"+o,attrs:{options:e.nodeOptions},on:{linkingStart:function(n){e.linkingStart(t.id)},linkingStop:function(n){e.linkingStop(t.id)},nodeSelected:function(n){e.nodeSelected(t.id,n)}}},"flowchart-node",t,!1,!0))})],2)},c=[],l=(n("f751"),n("20d6"),n("7514"),n("9393")),u=(n("c5f6"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("g",{on:{mouseover:e.handleMouseOver,mouseleave:e.handleMouseLeave}},[n("path",{style:e.pathStyle,attrs:{d:e.dAttr}}),e.show.delete?n("a",{on:{click:e.deleteLink}},[n("text",{attrs:{"text-anchor":"middle",transform:e.arrowTransform,"font-size":"22"}},[e._v("×")])]):n("path",{style:e.arrowStyle,attrs:{d:"M -1 -1 L 0 1 L 1 -1 z",transform:e.arrowTransform}})])}),d=[],h={name:"FlowchartLink",props:{start:{type:Array,default:function(){return[0,0]}},end:{type:Array,default:function(){return[0,0]}},id:Number},data:function(){return{show:{delete:!1}}},methods:{handleMouseOver:function(){this.id&&(this.show.delete=!0)},handleMouseLeave:function(){this.show.delete=!1},caculateCenterPoint:function(){var e=(this.end[0]-this.start[0])/2,t=(this.end[1]-this.start[1])/2;return[this.start[0]+e,this.start[1]+t]},caculateRotation:function(){var e=-Math.atan2(this.end[0]-this.start[0],this.end[1]-this.start[1]),t=180*e/Math.PI;return t<0?t+360:t},deleteLink:function(){this.$emit("deleteLink")}},computed:{pathStyle:function(){return{stroke:"rgb(255, 136, 85)",strokeWidth:2.73205,fill:"none"}},arrowStyle:function(){return{stroke:"rgb(255, 136, 85)",strokeWidth:5.73205,fill:"none"}},arrowTransform:function(){var e=this.caculateCenterPoint(),t=Object(l["a"])(e,2),n=t[0],o=t[1],i=this.caculateRotation();return"translate(".concat(n,", ").concat(o,") rotate(").concat(i,")")},dAttr:function(){var e=this.start[0],t=this.start[1],n=this.end[0],o=this.end[1],i=e,s=t+50,r=n,a=o-50;return"M ".concat(e,", ").concat(t," C ").concat(i,", ").concat(s,", ").concat(r,", ").concat(a,", ").concat(n,", ").concat(o)}}},f=h,p=(n("6dc7"),n("2877")),m=Object(p["a"])(f,u,d,!1,null,"295297bd",null);m.options.__file="FlowchartLink.vue";var g=m.exports,v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flowchart-node",class:{selected:e.options.selected===e.id},style:e.nodeStyle,on:{mousedown:e.handleMousedown,mouseover:e.handleMouseOver,mouseleave:e.handleMouseLeave}},[n("div",{staticClass:"node-port node-input",on:{mousedown:e.inputMouseDown,mouseup:e.inputMouseUp}}),n("div",{staticClass:"node-main"},[n("div",{staticClass:"node-type",domProps:{textContent:e._s(e.type)}}),n("div",{staticClass:"node-label",domProps:{textContent:e._s(e.label)}})]),n("div",{staticClass:"node-port node-output",on:{mousedown:e.outputMouseDown}}),n("div",{directives:[{name:"show",rawName:"v-show",value:e.show.delete,expression:"show.delete"}],staticClass:"node-delete"},[e._v("×")])])},k=[],y={name:"FlowchartNode",props:{id:{type:Number,default:1e3,validator:function(e){return"number"===typeof e}},x:{type:Number,default:0,validator:function(e){return"number"===typeof e}},y:{type:Number,default:0,validator:function(e){return"number"===typeof e}},type:{type:String,default:"Default"},label:{type:String,default:"input name"},options:{type:Object,default:function(){return{centerX:1024,scale:1,centerY:140}}}},data:function(){return{show:{delete:!1}}},mounted:function(){},computed:{nodeStyle:function(){return{top:this.options.centerY+this.y*this.options.scale+"px",left:this.options.centerX+this.x*this.options.scale+"px",transform:"scale(".concat(this.options.scale,")")}}},methods:{handleMousedown:function(e){var t=e.target||e.srcElement;t.className.indexOf("node-input")<0&&t.className.indexOf("node-output")<0&&this.$emit("nodeSelected",e),e.preventDefault()},handleMouseOver:function(){this.show.delete=!0},handleMouseLeave:function(){this.show.delete=!1},outputMouseDown:function(e){this.$emit("linkingStart"),e.preventDefault()},inputMouseDown:function(e){e.preventDefault()},inputMouseUp:function(e){this.$emit("linkingStop"),e.preventDefault()}}},w=y,b=(n("ba3f"),Object(p["a"])(w,v,k,!1,null,"67208d28",null));b.options.__file="FlowchartNode.vue";var x=b.exports;function O(e){var t=e.getBoundingClientRect(),n=window.pageYOffset,o=window.pageXOffset,i=t.top+n,s=t.left+o;return{top:Math.round(i),left:Math.round(s)}}function L(e,t){var n=t.pageX||t.clientX+document.documentElement.scrollLeft,o=t.pageY||t.clientY+document.documentElement.scrollTop,i=O(e),s=n-i.left,r=o-i.top;return[s,r]}var N={name:"VueFlowchart",props:{scene:{type:Object,default:function(){return{centerX:1024,scale:1,centerY:140,nodes:[],links:[]}}},height:{type:Number,default:400}},data:function(){return{action:{linking:!1,dragging:!1,scrolling:!1,selected:0},mouse:{x:0,y:0,lastX:0,lastY:0},draggingLink:null,rootDivOffset:{top:0,left:0}}},components:{FlowchartLink:g,FlowchartNode:x},computed:{nodeOptions:function(){return{centerY:this.scene.centerY,centerX:this.scene.centerX,scale:this.scene.scale,offsetTop:this.rootDivOffset.top,offsetLeft:this.rootDivOffset.left,selected:this.action.selected}},lines:function(){var e=this,t=this.scene.links.map(function(t){var n,o,i,s,r,a,c=e.findNodeWithID(t.from),u=e.findNodeWithID(t.to);n=e.scene.centerX+c.x,o=e.scene.centerY+c.y;var d=e.getPortPosition("bottom",n,o),h=Object(l["a"])(d,2);s=h[0],i=h[1],n=e.scene.centerX+u.x,o=e.scene.centerY+u.y;var f=e.getPortPosition("top",n,o),p=Object(l["a"])(f,2);return r=p[0],a=p[1],{start:[s,i],end:[r,a],id:t.id}});if(this.draggingLink){var n,o,i,s,r=this.findNodeWithID(this.draggingLink.from);n=this.scene.centerX+r.x,o=this.scene.centerY+r.y;var a=this.getPortPosition("bottom",n,o),c=Object(l["a"])(a,2);s=c[0],i=c[1],t.push({start:[s,i],end:[this.draggingLink.mx,this.draggingLink.my]})}return t}},mounted:function(){this.rootDivOffset.top=this.$el?this.$el.offsetTop:0,this.rootDivOffset.left=this.$el?this.$el.offsetLeft:0},methods:{findNodeWithID:function(e){return this.scene.nodes.find(function(t){return e===t.id})},getPortPosition:function(e,t,n){return"top"===e?[t+40,n]:"bottom"===e?[t+40,n+80]:void 0},linkingStart:function(e){this.action.linking=!0,this.draggingLink={from:e,mx:0,my:0}},linkingStop:function(e){var t=this;if(this.draggingLink&&this.draggingLink.from!==e){var n=this.scene.links.find(function(n){return n.from===t.draggingLink.from&&n.to===e});if(!n){var o=Math.max.apply(Math,[0].concat(Object(r["a"])(this.scene.links.map(function(e){return e.id})))),i={id:o+1,from:this.draggingLink.from,to:e};this.scene.links.push(i),this.$emit("linkAdded",i)}}this.draggingLink=null},linkDelete:function(e){var t=this.scene.links.find(function(t){return t.id===e});t&&(this.scene.links=this.scene.links.filter(function(t){return t.id!==e}),this.$emit("linkBreak",t))},nodeSelected:function(e,t){this.action.dragging=e,this.action.selected=e,this.$emit("nodeClick",e),this.mouse.lastX=t.pageX||t.clientX+document.documentElement.scrollLeft,this.mouse.lastY=t.pageY||t.clientY+document.documentElement.scrollTop},handleMove:function(e){if(this.action.linking){var t=L(this.$el,e),n=Object(l["a"])(t,2);this.mouse.x=n[0],this.mouse.y=n[1];var o=[this.mouse.x,this.mouse.y];this.draggingLink.mx=o[0],this.draggingLink.my=o[1]}if(this.action.dragging){this.mouse.x=e.pageX||e.clientX+document.documentElement.scrollLeft,this.mouse.y=e.pageY||e.clientY+document.documentElement.scrollTop;var i=this.mouse.x-this.mouse.lastX,s=this.mouse.y-this.mouse.lastY;this.mouse.lastX=this.mouse.x,this.mouse.lastY=this.mouse.y,this.moveSelectedNode(i,s)}if(this.action.scrolling){var r=L(this.$el,e),a=Object(l["a"])(r,2);this.mouse.x=a[0],this.mouse.y=a[1];var c=this.mouse.x-this.mouse.lastX,u=this.mouse.y-this.mouse.lastY;this.mouse.lastX=this.mouse.x,this.mouse.lastY=this.mouse.y,this.scene.centerX+=c,this.scene.centerY+=u}},handleUp:function(e){var t=e.target||e.srcElement;this.$el.contains(t)&&(("string"!==typeof t.className||t.className.indexOf("node-input")<0)&&(this.draggingLink=null),"string"===typeof t.className&&t.className.indexOf("node-delete")>-1&&this.nodeDelete(this.action.dragging)),this.action.linking=!1,this.action.dragging=null,this.action.scrolling=!1},handleDown:function(e){var t=e.target||e.srcElement;if((t===this.$el||t.matches("svg, svg *"))&&1===e.which){this.action.scrolling=!0;var n=L(this.$el,e),o=Object(l["a"])(n,2);this.mouse.lastX=o[0],this.mouse.lastY=o[1],this.action.selected=null}this.$emit("canvasClick",e)},moveSelectedNode:function(e,t){var n=this,o=this.scene.nodes.findIndex(function(e){return e.id===n.action.dragging}),i=this.scene.nodes[o].x+e/this.scene.scale,s=this.scene.nodes[o].y+t/this.scene.scale;this.$set(this.scene.nodes,o,Object.assign(this.scene.nodes[o],{x:i,y:s}))},nodeDelete:function(e){this.scene.nodes=this.scene.nodes.filter(function(t){return t.id!==e}),this.scene.links=this.scene.links.filter(function(t){return t.from!==e&&t.to!==e}),this.$emit("nodeDelete",e)}}},_=N,M=(n("50b0"),Object(p["a"])(_,a,c,!1,null,"8730bea4",null));M.options.__file="SimpleFlowchart.vue";var D=M.exports,S={name:"app",components:{SimpleFlowchart:D},data:function(){return{scene:{centerX:1024,centerY:140,scale:1,nodes:[{id:2,x:-700,y:-69,type:"Action",label:"test1"},{id:4,x:-357,y:80,type:"Script",label:"test2"},{id:6,x:-557,y:80,type:"Rule",label:"test3"}],links:[{id:3,from:2,to:4}]},newNodeType:0,newNodeLabel:"",nodeCategory:["rule","action","script","decision","fork","join"]}},methods:{canvasClick:function(e){console.log("canvas Click, event:",e)},addNode:function(){var e=Math.max.apply(Math,[0].concat(Object(r["a"])(this.scene.nodes.map(function(e){return e.id}))));this.scene.nodes.push({id:e+1,x:-400,y:50,type:this.nodeCategory[this.newNodeType],label:this.newNodeLabel?this.newNodeLabel:"test".concat(e+1)})},nodeClick:function(e){console.log("node click",e)},nodeDelete:function(e){console.log("node delete",e)},linkBreak:function(e){console.log("link break",e)},linkAdded:function(e){console.log("new link added:",e)}}},C=S,j=(n("5c0b"),Object(p["a"])(C,i,s,!1,null,null,null));j.options.__file="App.vue";var X=j.exports;o["a"].config.productionTip=!1,new o["a"]({render:function(e){return e(X)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var o=n("2856"),i=n.n(o);i.a},"6dc7":function(e,t,n){"use strict";var o=n("ec2e"),i=n.n(o);i.a},a617:function(e,t,n){},ba3f:function(e,t,n){"use strict";var o=n("524d"),i=n.n(o);i.a},ec2e:function(e,t,n){}});
//# sourceMappingURL=app.e3b96da0.js.map