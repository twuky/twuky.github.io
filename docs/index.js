var SS=Object.defineProperty;var OS=(S,q)=>{for(var O in q)SS(S,O,{get:q[O],enumerable:!0,configurable:!0,set:(J)=>q[O]=()=>J})};function c(S){F=S.signal,U=S.effect,h=S.computed,_=S.batch||((q)=>q()),j=S.untracked||_}var F,U,j,_,h;function qS(S){let q;if(S[M])return S;let O=F(S.length),J=Array(S.length).fill();const G=new Proxy(J,{get(D,B){if(typeof B==="symbol")return B===b?O:B===M?J:J[B];if(B==="length")return JS[q]?O.peek():O.value;if(q=B,J[B])return J[B].valueOf();if(B<J.length)return(J[B]=F(W(S[B]))).value},set(D,B,K){if(B==="length"){for(let Q=K,A=J.length;Q<A;Q++)delete G[Q];return O.value=J.length=K,!0}if(g(J,B,K),B>=O.peek())O.value=J.length=Number(B)+1;return!0},deleteProperty:(D,B)=>(J[B]&&u(J,B),1)});return G}var g=function(S,q,O){let J=S[q];if(q[0]==="_")S[q]=O;else if(!J)S[q]=J=O?.peek?O:F(W(O));else if(O===J.peek());else if(J._set)J._set(O);else if(Array.isArray(O)&&Array.isArray(J.peek())){const G=J.peek();if(G[b])j(()=>{_(()=>{let D=0,B=O.length;for(;D<B;D++)G[D]=O[D];G.length=B})});else J.value=O}else J.value=W(O)},u=function(S,q){const O=S[q],J=O[Symbol.dispose];if(J)delete O[Symbol.dispose];delete S[q],J?.()},M=Symbol("signals"),b=Symbol("length");function W(S,q){if(!S)return S;if(S[M])return S;if(Array.isArray(S))return qS(S);if(S.constructor!==Object)return S;let O={...q?.[M]},J=F(Object.values(S).length);const G=new Proxy(O,{get:(D,B)=>B===b?J:B===M?O:O[B]?.valueOf(),set:(D,B,K,Q)=>(Q=O[B],g(O,B,K),Q??++J.value,1),deleteProperty:(D,B)=>(O[B]&&(u(O,B),J.value--),1),ownKeys(){return J.value,Reflect.ownKeys(O)}});for(let D in S){const B=Object.getOwnPropertyDescriptor(S,D);if(B?.get)(O[D]=h(B.get.bind(G)))._set=B.set?.bind(G);else O[D]=void 0,g(O,D,S[D])}return G}var JS={push:1,pop:1,shift:1,unshift:1,splice:1};var o=Symbol.dispose||=Symbol("dispose"),X={},$=new WeakMap;function z(S,q){if(!S?.childNodes)return;if($.has(S))return Object.assign($.get(S),q);const O=W(q||{}),J=[];if(G(S),!$.has(S))$.set(S,O);return S[o]=()=>{while(J.length)J.pop()();$.delete(S)},O;function G(D,B=D.parentNode){if(!D.childNodes)return;for(let K=0;K<D.attributes?.length;){let Q=D.attributes[K];if(Q.name[0]===":"){D.removeAttribute(Q.name);let A=Q.name.slice(1).split(":");for(let N of A){let R=X[N]||X.default,H=(R.parse||V)(Q.value),Y=R(D,H,O,N);if(Y)J.push(Y)}if($.has(D))return D[o]&&J.push(D[o]);if(D.parentNode!==B)return}else K++}for(let K of[...D.childNodes])G(K,D)}}var p={},V=(S,q,O)=>{if(O=p[S=S.trim()])return O;try{O=v(S)}catch(J){k(J,q,S)}return p[S]=O},k=(S,q,O="")=>{throw Object.assign(S,{message:`\u2234 ${S.message}\n\n${q}${O?`="${O}"\n\n`:""}`,expr:O})},v;z.use=(S)=>{S.signal&&c(S),S.compile&&(v=S.compile)};var I=(S)=>{if(!S.nodeType)return S;let q=S.content.cloneNode(!0),O=[...S.attributes],J=document.createTextNode(""),G=(q.append(J),[...q.childNodes]);return{childNodes:G,content:q,remove:()=>q.append(...G),replaceWith(D){if(D===J)return;J.before(D),q.append(...G)},attributes:O,removeAttribute(D){O.splice(O.findIndex((B)=>B.name===D),1)}}};var n=function(){document.querySelectorAll("span.wavy").forEach((S)=>{let q=S.textContent?S.textContent:"";S.textContent="";for(let O=0;O<q.length;O++){let J=document.createElement("span");if(J.textContent=q[O],q[O]==" ")J.textContent="\xA0";J.style.animationDelay=`${O*-0.05}s`,S.appendChild(J)}})},r={routes:{"":"",home:"",about:"",folio:"",cv:"","folio/code":"","folio/art":"","folio/games":""},current_route:"",mounted(){document.getElementById("app").style.visibility="visible",this.handle_route_change(),this.add_routes(),n(),window.onmousemove=(S)=>{let q=-(S.x/window.innerWidth)*16-24,O=-(S.y/window.innerHeight)*16-24;document.getElementById("pfp").style.objectPosition=`${q}px ${O}px`}},handle_route_change(){for(let[S,q]of Object.entries(this.routes))if(window.location.hash.replace("#/","")==S){if(this.current_route=S,this.hasOwnProperty(q)){if(this[q]instanceof Function)this[q]()}}},add_routes(){window.onhashchange=()=>{this.handle_route_change(),n()}},tab(S){return this.current_route.includes(S)?`> ${S}`:S}};var y={};OS(y,{untracked:()=>GS,signal:()=>a,effect:()=>t,computed:()=>BS,batch:()=>DS});var P,w,i=(S)=>{return S.toJSON=S.then=S.toString=S.valueOf=()=>S.value,S},a=(S,q,O=new Set)=>i({get value(){return P?.deps.push(O.add(P)),S},set value(J){if(J===S)return;S=J;for(let G of O)w?w.add(G):G()},peek:()=>S}),t=(S,q,O,J)=>(O=(G)=>{q?.call?.(),G=P,P=O;try{q=S()}finally{P=G}},J=O.deps=[],O(),(G)=>{q?.call?.();while(G=J.pop())G.delete(O)}),BS=(S,q=a(),O,J)=>i({get value(){return J||=t(()=>q.value=S()),q.value},peek:q.peek}),DS=(S)=>{let q=w;if(!q)w=new Set;try{S()}finally{if(!q){q=w,w=null;for(let O of q)O()}}},GS=(S,q,O)=>(q=P,P=null,O=S(),P=q,O);var s=Symbol("if");X.if=(S,q,O)=>{let J=S.nextElementSibling,G=document.createTextNode(""),D,B,K;if(S.replaceWith(G),B=S.content?I(S):S,$.set(B,null),J?.hasAttribute(":else")){if(J.removeAttribute(":else"),!J.hasAttribute(":if"))J.remove(),K=J.content?I(J):J,$.set(K,null)}return U(()=>{const Q=q(O)?B:S[s]?null:K;if(J)J[s]=Q===B;if(D!=Q){if(D?.remove(),D=Q)G.before(D.content||D),$.get(D)===null&&$.delete(D),z(D,O)}})};X.each=(S,[q,O,J],G)=>{const D=document.createTextNode("");S.replaceWith(D);let B,K,Q=0;const A=h(()=>{K=null;let H=J(G);if(typeof H==="number")H=Array.from({length:H},(Y,C)=>C+1);if(H?.constructor===Object)K=Object.keys(H),H=Object.values(H);return H||[]}),N=()=>{j(()=>{let H=0,Y=A.value,C=Y.length;if(B&&!B[b]){for(let Z of B[M]||[])Z[Symbol.dispose]();B=null,Q=0}if(C<Q)B.length=C;else{if(!B)B=Y;else for(;H<Q;H++)B[H]=Y[H];for(;H<C;H++){B[H]=Y[H];let Z=H,x=W({[q]:B[M]?.[Z]||B[Z],[O]:K?K[Z]:Z},G),L=S.content?I(S):S.cloneNode(!0);D.before(L.content||L),z(L,x),((B[M]||=[])[H]||={})[Symbol.dispose]=()=>{L[Symbol.dispose](),L.remove()}}}Q=C})};let R=0;return U(()=>{if(A.value[b]?.value,!R)N(),queueMicrotask(()=>(R&&N(),R=0));else R++})};X.each.parse=(S)=>{let[q,O]=S.split(/\s+in\s+/),[J,G="$"]=q.split(/\s*,\s*/);return[J,G,V(O)]};X.text=(S,q,O)=>{if(S.content)S.replaceWith(S=I(S).childNodes[0]);return U(()=>{let J=q(O);S.textContent=J==null?"":J})};X.default=(S,q,O,J)=>{if(!J.startsWith("on"))return U(()=>{let R=q(O);if(J)f(S,J,R);else for(let H in R)f(S,RS(H),R[H])});const G=J.split("..").map((R)=>{let H={evt:"",target:S,test:()=>!0};return H.evt=(R.startsWith("on")?R.slice(2):R).replace(/\.(\w+)?-?([-\w]+)?/g,(Y,C,Z="")=>(H.test=HS[C]?.(H,...Z.split("-"))||H.test,"")),H});if(G.length==1)return U(()=>N(q(O),G[0]));let D,B,K,Q=0;const A=(R)=>{K=N((H)=>(K(),B=R?.(H),(Q=++Q%G.length)?A(B):D&&A(D)),G[Q])};return U(()=>(D=q(O),!K&&A(D),()=>D=null));function N(R,{evt:H,target:Y,test:C,defer:Z,stop:x,prevent:L,immediate:l,...d}){if(Z)R=Z(R);const m=(E)=>{try{C(E)&&(x&&(l?E.stopImmediatePropagation():E.stopPropagation()),L&&E.preventDefault(),R?.(E))}catch(e){k(e,`:on${H}`,R)}};return Y.addEventListener(H,m,d),()=>Y.removeEventListener(H,m,d)}};var HS={prevent(S){S.prevent=!0},stop(S){S.stop=!0},immediate(S){S.immediate=!0},once(S){S.once=!0},passive(S){S.passive=!0},capture(S){S.capture=!0},window(S){S.target=window},document(S){S.target=document},throttle(S,q){S.defer=(O)=>KS(O,q?Number(q)||0:108)},debounce(S,q){S.defer=(O)=>QS(O,q?Number(q)||0:108)},outside:(S)=>(q)=>{let O=S.target;if(O.contains(q.target))return!1;if(q.target.isConnected===!1)return!1;if(O.offsetWidth<1&&O.offsetHeight<1)return!1;return!0},self:(S)=>(q)=>q.target===S.target,ctrl:(S,...q)=>(O)=>T.ctrl(O)&&q.every((J)=>T[J]?T[J](O):O.key===J),shift:(S,...q)=>(O)=>T.shift(O)&&q.every((J)=>T[J]?T[J](O):O.key===J),alt:(S,...q)=>(O)=>T.alt(O)&&q.every((J)=>T[J]?T[J](O):O.key===J),meta:(S,...q)=>(O)=>T.meta(O)&&q.every((J)=>T[J]?T[J](O):O.key===J),arrow:()=>T.arrow,enter:()=>T.enter,esc:()=>T.esc,tab:()=>T.tab,space:()=>T.space,delete:()=>T.delete,digit:()=>T.digit,letter:()=>T.letter,char:()=>T.char},T={ctrl:(S)=>S.ctrlKey||S.key==="Control"||S.key==="Ctrl",shift:(S)=>S.shiftKey||S.key==="Shift",alt:(S)=>S.altKey||S.key==="Alt",meta:(S)=>S.metaKey||S.key==="Meta"||S.key==="Command",arrow:(S)=>S.key.startsWith("Arrow"),enter:(S)=>S.key==="Enter",esc:(S)=>S.key.startsWith("Esc"),tab:(S)=>S.key==="Tab",space:(S)=>S.key==="\xA0"||S.key==="Space"||S.key===" ",delete:(S)=>S.key==="Delete"||S.key==="Backspace",digit:(S)=>/^\d$/.test(S.key),letter:(S)=>/^\p{L}$/gu.test(S.key),char:(S)=>/^\S$/.test(S.key)},f=(S,q,O)=>{if(O==null||O===!1)S.removeAttribute(q);else S.setAttribute(q,O===!0?"":typeof O==="number"||typeof O==="string"?O:"")},KS=(S,q)=>{let O,J,G=(D)=>{O=!0,setTimeout(()=>{if(O=!1,J)return J=!1,G(D),S(D)},q)};return(D)=>{if(O)return J=!0;return G(D),S(D)}},QS=(S,q)=>{let O;return(J)=>{clearTimeout(O),O=setTimeout(()=>{O=null,S(J)},q)}},RS=(S)=>{return S.replace(/[A-Z\u00C0-\u00D6\u00D8-\u00DE]/g,(q,O)=>(O?"-":"")+q.toLowerCase())};X.value=(S,[q,O],J)=>{const G=S.type==="text"||S.type===""?(B)=>S.setAttribute("value",S.value=B==null?"":B):S.tagName==="TEXTAREA"||S.type==="text"||S.type===""?(B,K,Q)=>(K=S.selectionStart,Q=S.selectionEnd,S.setAttribute("value",S.value=B==null?"":B),K&&S.setSelectionRange(K,Q)):S.type==="checkbox"?(B)=>(S.checked=B,f(S,"checked",B)):S.type==="select-one"?(B)=>{for(let K in S.options)K.removeAttribute("selected");S.value=B,S.selectedOptions[0]?.setAttribute("selected","")}:(B)=>S.value=B,D=S.type==="checkbox"?(B)=>O(J,S.checked):(B)=>O(J,S.value);return S.addEventListener("input",D),S.addEventListener("change",D),U(()=>G(q(J)))};X.value.parse=(S)=>{let q=[V(S)];try{q.push(V(`${S}=arguments[1];`))}catch(O){}return q};z.use(y);z.use({compile:(S)=>z.constructor("__scope",`with (__scope) { return ${S} };`)});var TS=z(document.querySelector("#app"),r);TS.mounted();
