(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[693],{8212:function(oe,R,l){"use strict";l.d(R,{Z:function(){return m}});var f=l(28991),t=l(67294),S={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"}}]},name:"edit",theme:"outlined"},z=S,d=l(27029),p=function(F,X){return t.createElement(d.Z,(0,f.Z)((0,f.Z)({},F),{},{ref:X,icon:z}))};p.displayName="EditOutlined";var m=t.forwardRef(p)},47828:function(){},97272:function(oe,R,l){"use strict";l.d(R,{Z:function(){return Gt}});var f=l(22122),t=l(67294),S=l(96156),z=l(90484),d=l(28481),p=l(79508),m=l(99165),Z=l(8212),F=l(94184),X=l.n(F),ce=l(20640),_=l.n(ce),C=l(48717),ue=l(50344),de=l(8410),U=l(21770),fe=l(98423),Le=l(42550),De=l(53124),dt=l(42051),Ne=l(34952),$e=l(79370),Pe=l(45777),Ae=l(28991),ft={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M864 170h-60c-4.4 0-8 3.6-8 8v518H310v-73c0-6.7-7.8-10.5-13-6.3l-141.9 112a8 8 0 000 12.6l141.9 112c5.3 4.2 13 .4 13-6.3v-75h498c35.3 0 64-28.7 64-64V178c0-4.4-3.6-8-8-8z"}}]},name:"enter",theme:"outlined"},vt=ft,pt=l(27029),ze=function(r,a){return t.createElement(pt.Z,(0,Ae.Z)((0,Ae.Z)({},r),{},{ref:a,icon:vt}))};ze.displayName="EnterOutlined";var yt=t.forwardRef(ze),Ke=l(15105),mt=l(94418),gt=l(96159),Et=function(r){var a=r.prefixCls,n=r["aria-label"],o=r.className,u=r.style,P=r.direction,T=r.maxLength,b=r.autoSize,L=b===void 0?!0:b,v=r.value,B=r.onSave,D=r.onCancel,I=r.onEnd,N=r.component,$=r.enterIcon,q=$===void 0?t.createElement(yt,null):$,G=t.useRef(null),x=t.useRef(!1),J=t.useRef(),W=t.useState(v),Y=(0,d.Z)(W,2),Q=Y[0],w=Y[1];t.useEffect(function(){w(v)},[v]),t.useEffect(function(){if(G.current&&G.current.resizableTextArea){var g=G.current.resizableTextArea.textArea;g.focus();var E=g.value.length;g.setSelectionRange(E,E)}},[]);var ve=function(E){var O=E.target;w(O.value.replace(/[\n\r]/g,""))},ee=function(){x.current=!0},K=function(){x.current=!1},j=function(E){var O=E.keyCode;x.current||(J.current=O)},y=function(){B(Q.trim())},pe=function(E){var O=E.keyCode,ye=E.ctrlKey,Ee=E.altKey,le=E.metaKey,ne=E.shiftKey;J.current===O&&!x.current&&!ye&&!Ee&&!le&&!ne&&(O===Ke.Z.ENTER?(y(),I==null||I()):O===Ke.Z.ESC&&D())},te=function(){y()},ie=N?"".concat(a,"-").concat(N):"",A=X()(a,"".concat(a,"-edit-content"),(0,S.Z)({},"".concat(a,"-rtl"),P==="rtl"),o,ie);return t.createElement("div",{className:A,style:u},t.createElement(mt.Z,{ref:G,maxLength:T,value:Q,onChange:ve,onKeyDown:j,onKeyUp:pe,onCompositionStart:ee,onCompositionEnd:K,onBlur:te,"aria-label":n,rows:1,autoSize:L}),q!==null?(0,gt.Tm)(q,{className:"".concat(a,"-edit-content-confirm")}):null)},Ct=Et;function Te(e,r){return t.useMemo(function(){var a=!!e;return[a,(0,f.Z)((0,f.Z)({},r),a&&(0,z.Z)(e)==="object"?e:null)]},[e])}var St=function(r,a){var n=t.useRef(!1);t.useEffect(function(){n.current?r():n.current=!0},a)},ht=St,bt=function(e,r){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)r.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(a[n[o]]=e[n[o]]);return a},xt=t.forwardRef(function(e,r){var a=e.prefixCls,n=e.component,o=n===void 0?"article":n,u=e.className,P=e.setContentRef,T=e.children,b=e.direction,L=bt(e,["prefixCls","component","className","setContentRef","children","direction"]),v=t.useContext(De.E_),B=v.getPrefixCls,D=v.direction,I=b!=null?b:D,N=r;P&&(N=(0,Le.sQ)(r,P));var $=B("typography",a),q=X()($,(0,S.Z)({},"".concat($,"-rtl"),I==="rtl"),u);return t.createElement(o,(0,f.Z)({className:q,ref:N},L),T)}),je=xt;function ke(e){var r=(0,z.Z)(e);return r==="string"||r==="number"}function Ot(e){var r=0;return e.forEach(function(a){ke(a)?r+=String(a).length:r+=1}),r}function Ue(e,r){for(var a=0,n=[],o=0;o<e.length;o+=1){if(a===r)return n;var u=e[o],P=ke(u),T=P?String(u).length:1,b=a+T;if(b>r){var L=r-a;return n.push(String(u).slice(0,L)),n}n.push(u),a=b}return e}var Rt=0,Se=1,Be=2,Me=3,We=4,Zt=function(r){var a=r.enabledMeasure,n=r.children,o=r.text,u=r.width,P=r.fontSize,T=r.rows,b=r.onEllipsis,L=t.useState([0,0,0]),v=(0,d.Z)(L,2),B=(0,d.Z)(v[0],3),D=B[0],I=B[1],N=B[2],$=v[1],q=t.useState(Rt),G=(0,d.Z)(q,2),x=G[0],J=G[1],W=t.useState(0),Y=(0,d.Z)(W,2),Q=Y[0],w=Y[1],ve=t.useRef(null),ee=t.useRef(null),K=t.useMemo(function(){return(0,ue.Z)(o)},[o]),j=t.useMemo(function(){return Ot(K)},[K]),y=t.useMemo(function(){return!a||x!==Me?n(K,!1):n(Ue(K,I),I<j)},[a,x,n,K,I,j]);(0,de.Z)(function(){a&&u&&P&&j&&(J(Se),$([0,Math.ceil(j/2),j]))},[a,u,P,o,j,T]),(0,de.Z)(function(){var A;x===Se&&w(((A=ve.current)===null||A===void 0?void 0:A.offsetHeight)||0)},[x]),(0,de.Z)(function(){var A,g;if(Q){if(x===Se){var E=((A=ee.current)===null||A===void 0?void 0:A.offsetHeight)||0,O=T*Q;E<=O?(J(We),b(!1)):J(Be)}else if(x===Be)if(D!==N){var ye=((g=ee.current)===null||g===void 0?void 0:g.offsetHeight)||0,Ee=T*Q,le=D,ne=N;D===N-1?ne=D:ye<=Ee?le=I:ne=I;var xe=Math.ceil((le+ne)/2);$([le,xe,ne])}else J(Me),b(!0)}},[x,D,N,T,Q]);var pe={width:u,whiteSpace:"normal",margin:0,padding:0},te=function(g,E,O){return t.createElement("span",{"aria-hidden":!0,ref:E,style:(0,f.Z)({position:"fixed",display:"block",left:0,top:0,zIndex:-9999,visibility:"hidden",pointerEvents:"none",fontSize:Math.floor(P/2)*2},O)},g)},ie=function(g,E){var O=Ue(K,g);return te(n(O,!0),E,pe)};return t.createElement(t.Fragment,null,y,a&&x!==Me&&x!==We&&t.createElement(t.Fragment,null,te("lg",ve,{wordBreak:"keep-all",whiteSpace:"nowrap"}),x===Se?te(n(K,!1),ee,pe):ie(I,ee)))},wt=Zt,Pt=function(r){var a=r.enabledEllipsis,n=r.isEllipsis,o=r.children,u=r.tooltipProps;return!(u==null?void 0:u.title)||!a?o:t.createElement(Pe.Z,(0,f.Z)({open:n?void 0:!1},u),o)},Tt=Pt,Mt=function(e,r){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)r.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(a[n[o]]=e[n[o]]);return a};function It(e,r){var a=e.mark,n=e.code,o=e.underline,u=e.delete,P=e.strong,T=e.keyboard,b=e.italic,L=r;function v(B,D){!B||(L=t.createElement(D,{},L))}return v(P,"strong"),v(o,"u"),v(u,"del"),v(n,"code"),v(a,"mark"),v(T,"kbd"),v(b,"i"),L}function he(e,r,a){return e===!0||e===void 0?r:e||a&&r}function He(e){return e===!1?[!1,!1]:Array.isArray(e)?e:[e]}var Lt="...",Dt=t.forwardRef(function(e,r){var a,n,o,u=e.prefixCls,P=e.className,T=e.style,b=e.type,L=e.disabled,v=e.children,B=e.ellipsis,D=e.editable,I=e.copyable,N=e.component,$=e.title,q=Mt(e,["prefixCls","className","style","type","disabled","children","ellipsis","editable","copyable","component","title"]),G=t.useContext(De.E_),x=G.getPrefixCls,J=G.direction,W=(0,dt.E)("Text")[0],Y=t.useRef(null),Q=t.useRef(null),w=x("typography",u),ve=(0,fe.Z)(q,["mark","code","delete","underline","strong","keyboard","italic"]),ee=Te(D),K=(0,d.Z)(ee,2),j=K[0],y=K[1],pe=(0,U.Z)(!1,{value:y.editing}),te=(0,d.Z)(pe,2),ie=te[0],A=te[1],g=y.triggerType,E=g===void 0?["icon"]:g,O=function(i){var c;i&&((c=y.onStart)===null||c===void 0||c.call(y)),A(i)};ht(function(){var s;ie||(s=Q.current)===null||s===void 0||s.focus()},[ie]);var ye=function(i){i==null||i.preventDefault(),O(!0)},Ee=function(i){var c;(c=y.onChange)===null||c===void 0||c.call(y,i),O(!1)},le=function(){var i;(i=y.onCancel)===null||i===void 0||i.call(y),O(!1)},ne=Te(I),xe=(0,d.Z)(ne,2),Ie=xe[0],se=xe[1],Jt=t.useState(!1),Ve=(0,d.Z)(Jt,2),Oe=Ve[0],Fe=Ve[1],Ge=t.useRef(),Je={};se.format&&(Je.format=se.format);var Qe=function(){window.clearTimeout(Ge.current)},Qt=function(i){var c;i==null||i.preventDefault(),i==null||i.stopPropagation(),_()(se.text||String(v)||"",Je),Fe(!0),Qe(),Ge.current=window.setTimeout(function(){Fe(!1)},3e3),(c=se.onCopy)===null||c===void 0||c.call(se,i)};t.useEffect(function(){return Qe},[]);var Xt=t.useState(!1),Xe=(0,d.Z)(Xt,2),Ye=Xe[0],Yt=Xe[1],_t=t.useState(!1),_e=(0,d.Z)(_t,2),qe=_e[0],qt=_e[1],en=t.useState(!1),et=(0,d.Z)(en,2),tn=et[0],nn=et[1],rn=t.useState(!1),tt=(0,d.Z)(rn,2),nt=tt[0],an=tt[1],on=t.useState(!1),rt=(0,d.Z)(on,2),at=rt[0],ln=rt[1],sn=t.useState(!0),ot=(0,d.Z)(sn,2),cn=ot[0],un=ot[1],dn=Te(B,{expandable:!1}),it=(0,d.Z)(dn,2),re=it[0],h=it[1],H=re&&!tn,lt=h.rows,me=lt===void 0?1:lt,Re=t.useMemo(function(){return!H||h.suffix!==void 0||h.onEllipsis||h.expandable||j||Ie},[H,h,j,Ie]);(0,de.Z)(function(){re&&!Re&&(Yt((0,$e.G)("webkitLineClamp")),qt((0,$e.G)("textOverflow")))},[Re,re]);var V=t.useMemo(function(){return Re?!1:me===1?qe:Ye},[Re,qe,Ye]),st=H&&(V?at:nt),fn=H&&me===1&&V,Ze=H&&me>1&&V,vn=function(i){var c;nn(!0),(c=h.onExpand)===null||c===void 0||c.call(h,i)},pn=t.useState(0),ct=(0,d.Z)(pn,2),yn=ct[0],mn=ct[1],gn=t.useState(0),ut=(0,d.Z)(gn,2),En=ut[0],Cn=ut[1],Sn=function(i,c){var M=i.offsetWidth,k;mn(M),Cn(parseInt((k=window.getComputedStyle)===null||k===void 0?void 0:k.call(window,c).fontSize,10)||0)},hn=function(i){var c;an(i),nt!==i&&((c=h.onEllipsis)===null||c===void 0||c.call(h,i))};t.useEffect(function(){var s=Y.current;if(re&&V&&s){var i=Ze?s.offsetHeight<s.scrollHeight:s.offsetWidth<s.scrollWidth;at!==i&&ln(i)}},[re,V,v,Ze,cn]),t.useEffect(function(){var s=Y.current;if(!(typeof IntersectionObserver=="undefined"||!s||!V||!H)){var i=new IntersectionObserver(function(){un(!!s.offsetParent)});return i.observe(s),function(){i.disconnect()}}},[V,H]);var ae={};h.tooltip===!0?ae={title:(a=y.text)!==null&&a!==void 0?a:v}:t.isValidElement(h.tooltip)?ae={title:h.tooltip}:(0,z.Z)(h.tooltip)==="object"?ae=(0,f.Z)({title:(n=y.text)!==null&&n!==void 0?n:v},h.tooltip):ae={title:h.tooltip};var we=t.useMemo(function(){var s=function(c){return["string","number"].includes((0,z.Z)(c))};if(!(!re||V)){if(s(y.text))return y.text;if(s(v))return v;if(s($))return $;if(s(ae.title))return ae.title}},[re,V,$,ae.title,st]);if(ie)return t.createElement(Ct,{value:(o=y.text)!==null&&o!==void 0?o:typeof v=="string"?v:"",onSave:Ee,onCancel:le,onEnd:y.onEnd,prefixCls:w,className:P,style:T,direction:J,component:N,maxLength:y.maxLength,autoSize:y.autoSize,enterIcon:y.enterIcon});var bn=function(){var i=h.expandable,c=h.symbol;if(!i)return null;var M;return c?M=c:M=W.expand,t.createElement("a",{key:"expand",className:"".concat(w,"-expand"),onClick:vn,"aria-label":W.expand},M)},xn=function(){if(!!j){var i=y.icon,c=y.tooltip,M=(0,ue.Z)(c)[0]||W.edit,k=typeof M=="string"?M:"";return E.includes("icon")?t.createElement(Pe.Z,{key:"edit",title:c===!1?"":M},t.createElement(Ne.Z,{ref:Q,className:"".concat(w,"-edit"),onClick:ye,"aria-label":k},i||t.createElement(Z.Z,{role:"button"}))):null}},On=function(){if(!!Ie){var i=se.tooltips,c=se.icon,M=He(i),k=He(c),Ce=Oe?he(M[1],W.copied):he(M[0],W.copy),wn=Oe?W.copied:W.copy,Pn=typeof Ce=="string"?Ce:wn;return t.createElement(Pe.Z,{key:"copy",title:Ce},t.createElement(Ne.Z,{className:X()("".concat(w,"-copy"),Oe&&"".concat(w,"-copy-success")),onClick:Qt,"aria-label":Pn},Oe?he(k[1],t.createElement(p.Z,null),!0):he(k[0],t.createElement(m.Z,null),!0)))}},Rn=function(i){return[i&&bn(),xn(),On()]},Zn=function(i){return[i&&t.createElement("span",{"aria-hidden":!0,key:"ellipsis"},Lt),h.suffix,Rn(i)]};return t.createElement(C.Z,{onResize:Sn,disabled:!H||V},function(s){var i;return t.createElement(Tt,{tooltipProps:ae,enabledEllipsis:H,isEllipsis:st},t.createElement(je,(0,f.Z)({className:X()((i={},(0,S.Z)(i,"".concat(w,"-").concat(b),b),(0,S.Z)(i,"".concat(w,"-disabled"),L),(0,S.Z)(i,"".concat(w,"-ellipsis"),re),(0,S.Z)(i,"".concat(w,"-single-line"),H&&me===1),(0,S.Z)(i,"".concat(w,"-ellipsis-single-line"),fn),(0,S.Z)(i,"".concat(w,"-ellipsis-multiple-line"),Ze),i),P),prefixCls:u,style:(0,f.Z)((0,f.Z)({},T),{WebkitLineClamp:Ze?me:void 0}),component:N,ref:(0,Le.sQ)(s,Y,r),direction:J,onClick:E.includes("text")?ye:void 0,"aria-label":we==null?void 0:we.toString(),title:$},ve),t.createElement(wt,{enabledMeasure:H&&!V,text:v,rows:me,width:yn,fontSize:En,onEllipsis:hn},function(c,M){var k=c;c.length&&M&&we&&(k=t.createElement("span",{key:"show-content","aria-hidden":!0},k));var Ce=It(e,t.createElement(t.Fragment,null,k,Zn(M)));return Ce})))})}),be=Dt,Nt=function(e,r){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)r.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(a[n[o]]=e[n[o]]);return a},$t=t.forwardRef(function(e,r){var a=e.ellipsis,n=e.rel,o=Nt(e,["ellipsis","rel"]),u=(0,f.Z)((0,f.Z)({},o),{rel:n===void 0&&o.target==="_blank"?"noopener noreferrer":n});return delete u.navigate,t.createElement(be,(0,f.Z)({},u,{ref:r,ellipsis:!!a,component:"a"}))}),At=$t,zt=t.forwardRef(function(e,r){return t.createElement(be,(0,f.Z)({ref:r},e,{component:"div"}))}),Kt=zt,jt=function(e,r){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)r.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(a[n[o]]=e[n[o]]);return a},kt=function(r,a){var n=r.ellipsis,o=jt(r,["ellipsis"]),u=t.useMemo(function(){return n&&(0,z.Z)(n)==="object"?(0,fe.Z)(n,["expandable","rows"]):n},[n]);return t.createElement(be,(0,f.Z)({ref:a},o,{ellipsis:u,component:"span"}))},Ut=t.forwardRef(kt),Bt=l(93355),Wt=function(e,r){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)r.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(a[n[o]]=e[n[o]]);return a},Ht=(0,Bt.a)(1,2,3,4,5),Vt=t.forwardRef(function(e,r){var a=e.level,n=a===void 0?1:a,o=Wt(e,["level"]),u;return Ht.includes(n)?u="h".concat(n):u="h1",t.createElement(be,(0,f.Z)({ref:r},o,{component:u}))}),Ft=Vt,ge=je;ge.Text=Ut,ge.Link=At,ge.Title=Ft,ge.Paragraph=Kt;var Gt=ge},402:function(oe,R,l){"use strict";var f=l(38663),t=l.n(f),S=l(47828),z=l.n(S),d=l(47673),p=l(22385)},20640:function(oe,R,l){"use strict";var f=l(11742),t={"text/plain":"Text","text/html":"Url",default:"Text"},S="Copy to clipboard: #{key}, Enter";function z(p){var m=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return p.replace(/#{\s*key\s*}/g,m)}function d(p,m){var Z,F,X,ce,_,C,ue=!1;m||(m={}),Z=m.debug||!1;try{X=f(),ce=document.createRange(),_=document.getSelection(),C=document.createElement("span"),C.textContent=p,C.ariaHidden="true",C.style.all="unset",C.style.position="fixed",C.style.top=0,C.style.clip="rect(0, 0, 0, 0)",C.style.whiteSpace="pre",C.style.webkitUserSelect="text",C.style.MozUserSelect="text",C.style.msUserSelect="text",C.style.userSelect="text",C.addEventListener("copy",function(U){if(U.stopPropagation(),m.format)if(U.preventDefault(),typeof U.clipboardData=="undefined"){Z&&console.warn("unable to use e.clipboardData"),Z&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var fe=t[m.format]||t.default;window.clipboardData.setData(fe,p)}else U.clipboardData.clearData(),U.clipboardData.setData(m.format,p);m.onCopy&&(U.preventDefault(),m.onCopy(U.clipboardData))}),document.body.appendChild(C),ce.selectNodeContents(C),_.addRange(ce);var de=document.execCommand("copy");if(!de)throw new Error("copy command was unsuccessful");ue=!0}catch(U){Z&&console.error("unable to copy using execCommand: ",U),Z&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(m.format||"text",p),m.onCopy&&m.onCopy(window.clipboardData),ue=!0}catch(fe){Z&&console.error("unable to copy using clipboardData: ",fe),Z&&console.error("falling back to prompt"),F=z("message"in m?m.message:S),window.prompt(F,p)}}finally{_&&(typeof _.removeRange=="function"?_.removeRange(ce):_.removeAllRanges()),C&&document.body.removeChild(C),X()}return ue}oe.exports=d},79370:function(oe,R,l){"use strict";l.d(R,{G:function(){return z}});var f=l(98924),t=function(p){if((0,f.Z)()&&window.document.documentElement){var m=Array.isArray(p)?p:[p],Z=window.document.documentElement;return m.some(function(F){return F in Z.style})}return!1},S=function(p,m){if(!t(p))return!1;var Z=document.createElement("div"),F=Z.style[p];return Z.style[p]=m,Z.style[p]!==F};function z(d,p){return!Array.isArray(d)&&p!==void 0?S(d,p):t(d)}},11742:function(oe){oe.exports=function(){var R=document.getSelection();if(!R.rangeCount)return function(){};for(var l=document.activeElement,f=[],t=0;t<R.rangeCount;t++)f.push(R.getRangeAt(t));switch(l.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":l.blur();break;default:l=null;break}return R.removeAllRanges(),function(){R.type==="Caret"&&R.removeAllRanges(),R.rangeCount||f.forEach(function(S){R.addRange(S)}),l&&l.focus()}}}}]);
