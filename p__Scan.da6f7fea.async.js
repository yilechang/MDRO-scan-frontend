(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[534],{86802:function(q,b,r){"use strict";r.r(b);var ee=r(62350),S=r(24565),re=r(57663),R=r(71577),ae=r(49111),F=r(19650),se=r(22385),k=r(45777),ne=r(12968),U=r(20352),y=r(2824),l=r(39428),A=r(11849),te=r(34792),i=r(48086),M=r(3182),g=r(36571),$=r(8212),w=r(73171),V=r(49101),z=r(1147),G=r(29796),x=r(81907),H=r(37327),Z=r(67294),B=r(25377),n=r(85893),N=function(){var D=(0,M.Z)((0,l.Z)().mark(function c(d){var t,s;return(0,l.Z)().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=i.ZP.loading("\u6B63\u5728\u6DFB\u52A0"),e.prev=1,e.next=4,(0,g.l5)((0,A.Z)({},d));case 4:if(s=e.sent,t(),!(s&&s.code===0)){e.next=11;break}return i.ZP.success(s.msg),e.abrupt("return",!0);case 11:return i.ZP.warn(s.msg),e.abrupt("return",!1);case 13:e.next=20;break;case 15:return e.prev=15,e.t0=e.catch(1),t(),i.ZP.error("Adding failed, please try again!"),e.abrupt("return",!1);case 20:case"end":return e.stop()}},c,null,[[1,15]])}));return function(d){return D.apply(this,arguments)}}(),Y=function(){var D=(0,M.Z)((0,l.Z)().mark(function c(d){var t,s;return(0,l.Z)().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=i.ZP.loading("\u6B63\u5728\u66F4\u65B0"),e.prev=1,e.next=4,(0,g.l5)((0,A.Z)({},d));case 4:if(s=e.sent,t(),!(s&&s.code===0)){e.next=11;break}return i.ZP.success(s.msg),e.abrupt("return",!0);case 11:return i.ZP.warn(s.msg),e.abrupt("return",!1);case 13:e.next=20;break;case 15:return e.prev=15,e.t0=e.catch(1),t(),i.ZP.error("Update failed, please try again!"),e.abrupt("return",!1);case 20:case"end":return e.stop()}},c,null,[[1,15]])}));return function(d){return D.apply(this,arguments)}}(),J=function(){var D=(0,M.Z)((0,l.Z)().mark(function c(d){var t,s;return(0,l.Z)().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=i.ZP.loading("\u6B63\u5728\u5220\u9664"),d){e.next=3;break}return e.abrupt("return",!0);case 3:return e.prev=3,e.next=6,(0,g.l5)({id:d});case 6:if(s=e.sent,t(),!(s&&s.code===0)){e.next=13;break}return i.ZP.success(s.msg),e.abrupt("return",!0);case 13:return i.ZP.warn(s.msg),e.abrupt("return",!1);case 15:e.next=22;break;case 17:return e.prev=17,e.t0=e.catch(3),t(),i.ZP.error("Delete failed, please try again"),e.abrupt("return",!1);case 22:case"end":return e.stop()}},c,null,[[3,17]])}));return function(d){return D.apply(this,arguments)}}(),Q=function(){var c=(0,Z.useState)(!1),d=(0,y.Z)(c,2),t=d[0],s=d[1],T=(0,Z.useState)(!0),e=(0,y.Z)(T,2),L=e[0],K=e[1],P=(0,Z.useRef)(),O=function(u){var a;u||P==null||(a=P.current)===null||a===void 0||a.resetFields(),s(u)},h=(0,Z.useRef)(),X=(0,B.YB)(),W=[{hideInTable:!0,hideInSearch:!0,formItemProps:{hidden:!0},dataIndex:"id",key:"id"},{hideInTable:!0,hideInSearch:!0,dataIndex:"file",key:"file",renderFormItem:function(){return(0,n.jsx)(G.Z,{name:"files",label:"\u62D6\u62FD\u4E0A\u4F20"})},formItemProps:function(){return L?{hidden:!0}:{}}},{title:"files",dataIndex:"files",hideInSearch:!0,hideInForm:!0,formItemProps:{rules:[{required:!0,message:"\u6B64\u9879\u4E3A\u5FC5\u586B\u9879"}]},render:function(u,a){if(!!u)return(0,n.jsx)(U.Z.PreviewGroup,{children:(0,n.jsx)(F.Z,{children:Object.values(u).map(function(f){return(0,n.jsx)(k.Z,{title:f.desc,children:(0,n.jsx)(U.Z,{width:100,src:f.path})},"".concat(f.path))})})})}},{title:"name",dataIndex:"name"},{title:"desc",dataIndex:"desc",hideInForm:!0},{title:"status",dataIndex:"status",valueType:"select",hideInForm:!0,valueEnum:{0:{color:"blue",text:"Processing"},1:{color:"green",text:"Success"},2:{color:"red",text:"Error"},3:{color:"black",text:"Selected"}}},{title:"select",dataIndex:"status",hideInSearch:!0,valueType:"switch",valueEnum:{0:{value:!1},1:{value:!0},2:{value:!1},3:{value:!0}},formItemProps:function(){return L?{}:{hidden:!0}}},{title:"\u64CD\u4F5C",valueType:"option",key:"option",render:function(u,a,f,I){return[(0,n.jsx)(R.Z,{icon:(0,n.jsx)($.Z,{}),type:"link",onClick:function(){var v=a.files,_=a.name,p=a.desc,j=a.status,o=j===3;K(!0),O(!0),setTimeout(function(){var C;P==null||(C=P.current)===null||C===void 0||C.setFieldsValue({files:v,name:_,desc:p,status:o})},0)},disabled:a.status%2!=1},"editable"),(0,n.jsx)(S.Z,{title:"\u786E\u8BA4\u5220\u9664",onConfirm:(0,M.Z)((0,l.Z)().mark(function E(){var v;return(0,l.Z)().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return v=a.id,p.next=3,J(v);case 3:h.current&&h.current.reload();case 4:case"end":return p.stop()}},E)})),children:(0,n.jsx)(R.Z,{icon:(0,n.jsx)(w.Z,{}),danger:!0,type:"text"})},"delete")]}}];return(0,n.jsxs)(x.ZP,{children:[(0,n.jsx)(z.Z,{formRef:P,onVisibleChange:O,visible:t,layoutType:"ModalForm",onFinish:function(){var m=(0,M.Z)((0,l.Z)().mark(function u(a){var f,I,E,v,_,p;return(0,l.Z)().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:if(f=a.id,I=a.name,E=a.desc,v=a.status,f){o.next=8;break}return o.next=4,N({name:I,desc:E,status:v});case 4:_=o.sent,_&&(O(!1),h.current&&h.current.reload()),o.next=12;break;case 8:return o.next=10,Y({id:f,name:I,desc:E,status:v});case 10:p=o.sent,p&&(O(!1),h.current&&h.current.reload());case 12:case"end":return o.stop()}},u)}));return function(u){return m.apply(this,arguments)}}(),columns:W}),(0,n.jsx)(H.Z,{headerTitle:X.formatMessage({id:"pages.appkeyTable.title",defaultMessage:"Enquiry form"}),actionRef:h,rowKey:"id",search:{labelWidth:120},toolBarRender:function(){return[(0,n.jsxs)(R.Z,{type:"primary",onClick:function(){K(!1),O(!0)},children:[(0,n.jsx)(V.Z,{})," ",(0,n.jsx)(B._H,{id:"pages.searchTable.new",defaultMessage:"New"})]},"primary")]},request:function(){var m=(0,M.Z)((0,l.Z)().mark(function u(a,f,I){var E;return(0,l.Z)().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:return console.log({params:a}),_.next=3,(0,g.lb)({current:a.current,pageSize:a.pageSize,name:a.name,desc:a.desc,status:a.status});case 3:return E=_.sent,_.abrupt("return",{data:E.data,success:!0,total:E.total});case 5:case"end":return _.stop()}},u)}));return function(u,a,f){return m.apply(this,arguments)}}(),columns:W})]})};b.default=Q}}]);
