import{z as X}from"./kit-i0Ep7n0Q.js";import{a8 as B,a9 as V,aa as L,ab as Y,ac as Z,ad as $,ae as ee,af as te}from"./index-BYsr0QCo.js";import"./kit-osaTBuVK.js";const re=new V,ne=new L,se=new L;class ie extends B{constructor(e,{near:t=.1,far:n=100,fov:s=45,aspect:o=1,left:h,right:u,bottom:f,top:y,zoom:w=1}={}){super(),Object.assign(this,{near:t,far:n,fov:s,aspect:o,left:h,right:u,bottom:f,top:y,zoom:w}),this.projectionMatrix=new V,this.viewMatrix=new V,this.projectionViewMatrix=new V,this.worldPosition=new L,this.type=h||u?"orthographic":"perspective",this.type==="orthographic"?this.orthographic():this.perspective()}perspective({near:e=this.near,far:t=this.far,fov:n=this.fov,aspect:s=this.aspect}={}){return Object.assign(this,{near:e,far:t,fov:n,aspect:s}),this.projectionMatrix.fromPerspective({fov:n*(Math.PI/180),aspect:s,near:e,far:t}),this.type="perspective",this}orthographic({near:e=this.near,far:t=this.far,left:n=this.left||-1,right:s=this.right||1,bottom:o=this.bottom||-1,top:h=this.top||1,zoom:u=this.zoom}={}){return Object.assign(this,{near:e,far:t,left:n,right:s,bottom:o,top:h,zoom:u}),n/=u,s/=u,o/=u,h/=u,this.projectionMatrix.fromOrthogonal({left:n,right:s,bottom:o,top:h,near:e,far:t}),this.type="orthographic",this}updateMatrixWorld(){return super.updateMatrixWorld(),this.viewMatrix.inverse(this.worldMatrix),this.worldMatrix.getTranslation(this.worldPosition),this.projectionViewMatrix.multiply(this.projectionMatrix,this.viewMatrix),this}updateProjectionMatrix(){return this.type==="perspective"?this.perspective():this.orthographic()}lookAt(e){return super.lookAt(e,!0),this}project(e){return e.applyMatrix4(this.viewMatrix),e.applyMatrix4(this.projectionMatrix),this}unproject(e){return e.applyMatrix4(re.inverse(this.projectionMatrix)),e.applyMatrix4(this.worldMatrix),this}updateFrustum(){this.frustum||(this.frustum=[new L,new L,new L,new L,new L,new L]);const e=this.projectionViewMatrix;this.frustum[0].set(e[3]-e[0],e[7]-e[4],e[11]-e[8]).constant=e[15]-e[12],this.frustum[1].set(e[3]+e[0],e[7]+e[4],e[11]+e[8]).constant=e[15]+e[12],this.frustum[2].set(e[3]+e[1],e[7]+e[5],e[11]+e[9]).constant=e[15]+e[13],this.frustum[3].set(e[3]-e[1],e[7]-e[5],e[11]-e[9]).constant=e[15]-e[13],this.frustum[4].set(e[3]-e[2],e[7]-e[6],e[11]-e[10]).constant=e[15]-e[14],this.frustum[5].set(e[3]+e[2],e[7]+e[6],e[11]+e[10]).constant=e[15]+e[14];for(let t=0;t<6;t++){const n=1/this.frustum[t].distance();this.frustum[t].multiply(n),this.frustum[t].constant*=n}}frustumIntersectsMesh(e,t=e.worldMatrix){if(!e.geometry.attributes.position||((!e.geometry.bounds||e.geometry.bounds.radius===1/0)&&e.geometry.computeBoundingSphere(),!e.geometry.bounds))return!0;const n=ne;n.copy(e.geometry.bounds.center),n.applyMatrix4(t);const s=e.geometry.bounds.radius*t.getMaxScaleOnAxis();return this.frustumIntersectsSphere(n,s)}frustumIntersectsSphere(e,t){const n=se;for(let s=0;s<6;s++){const o=this.frustum[s];if(n.copy(o).dot(e)+o.constant<-t)return!1}return!0}}function oe(r,e){return r[0]=e[0],r[1]=e[1],r}function ae(r,e,t){return r[0]=e,r[1]=t,r}function _(r,e,t){return r[0]=e[0]+t[0],r[1]=e[1]+t[1],r}function G(r,e,t){return r[0]=e[0]-t[0],r[1]=e[1]-t[1],r}function ue(r,e,t){return r[0]=e[0]*t[0],r[1]=e[1]*t[1],r}function ce(r,e,t){return r[0]=e[0]/t[0],r[1]=e[1]/t[1],r}function W(r,e,t){return r[0]=e[0]*t,r[1]=e[1]*t,r}function le(r,e){var t=e[0]-r[0],n=e[1]-r[1];return Math.sqrt(t*t+n*n)}function he(r,e){var t=e[0]-r[0],n=e[1]-r[1];return t*t+n*n}function N(r){var e=r[0],t=r[1];return Math.sqrt(e*e+t*t)}function fe(r){var e=r[0],t=r[1];return e*e+t*t}function me(r,e){return r[0]=-e[0],r[1]=-e[1],r}function pe(r,e){return r[0]=1/e[0],r[1]=1/e[1],r}function ve(r,e){var t=e[0],n=e[1],s=t*t+n*n;return s>0&&(s=1/Math.sqrt(s)),r[0]=e[0]*s,r[1]=e[1]*s,r}function de(r,e){return r[0]*e[0]+r[1]*e[1]}function k(r,e){return r[0]*e[1]-r[1]*e[0]}function xe(r,e,t,n){var s=e[0],o=e[1];return r[0]=s+n*(t[0]-s),r[1]=o+n*(t[1]-o),r}function ye(r,e,t,n,s){const o=Math.exp(-n*s);let h=e[0],u=e[1];return r[0]=t[0]+(h-t[0])*o,r[1]=t[1]+(u-t[1])*o,r}function ge(r,e,t){var n=e[0],s=e[1];return r[0]=t[0]*n+t[3]*s+t[6],r[1]=t[1]*n+t[4]*s+t[7],r}function we(r,e,t){let n=e[0],s=e[1];return r[0]=t[0]*n+t[4]*s+t[12],r[1]=t[1]*n+t[5]*s+t[13],r}function Me(r,e){return r[0]===e[0]&&r[1]===e[1]}class I extends Array{constructor(e=0,t=e){return super(e,t),this}get x(){return this[0]}get y(){return this[1]}set x(e){this[0]=e}set y(e){this[1]=e}set(e,t=e){return e.length?this.copy(e):(ae(this,e,t),this)}copy(e){return oe(this,e),this}add(e,t){return t?_(this,e,t):_(this,this,e),this}sub(e,t){return t?G(this,e,t):G(this,this,e),this}multiply(e){return e.length?ue(this,this,e):W(this,this,e),this}divide(e){return e.length?ce(this,this,e):W(this,this,1/e),this}inverse(e=this){return pe(this,e),this}len(){return N(this)}distance(e){return e?le(this,e):N(this)}squaredLen(){return this.squaredDistance()}squaredDistance(e){return e?he(this,e):fe(this)}negate(e=this){return me(this,e),this}cross(e,t){return t?k(e,t):k(this,e)}scale(e){return W(this,this,e),this}normalize(){return ve(this,this),this}dot(e){return de(this,e)}equals(e){return Me(this,e)}applyMatrix3(e){return ge(this,this,e),this}applyMatrix4(e){return we(this,this,e),this}lerp(e,t){return xe(this,this,e,t),this}smoothLerp(e,t,n){return ye(this,this,e,t,n),this}clone(){return new I(this[0],this[1])}fromArray(e,t=0){return this[0]=e[t],this[1]=e[t+1],this}toArray(e=[],t=0){return e[t]=this[0],e[t+1]=this[1],e}}class H extends Y{constructor(e,{width:t=1,height:n=1,widthSegments:s=1,heightSegments:o=1,attributes:h={}}={}){const u=s,f=o,y=(u+1)*(f+1),w=u*f*6,M=new Float32Array(y*3),p=new Float32Array(y*3),P=new Float32Array(y*2),A=w>65536?new Uint32Array(w):new Uint16Array(w);H.buildPlane(M,p,P,A,t,n,0,u,f),Object.assign(h,{position:{size:3,data:M},normal:{size:3,data:p},uv:{size:2,data:P},index:{data:A}}),super(e,h)}static buildPlane(e,t,n,s,o,h,u,f,y,w=0,M=1,p=2,P=1,A=-1,v=0,d=0){const E=v,R=o/f,S=h/y;for(let g=0;g<=y;g++){let q=g*S-h/2;for(let x=0;x<=f;x++,v++){let i=x*R-o/2;if(e[v*3+w]=i*P,e[v*3+M]=q*A,e[v*3+p]=u/2,t[v*3+w]=0,t[v*3+M]=0,t[v*3+p]=u>=0?1:-1,n[v*2]=x/f,n[v*2+1]=1-g/y,g===y||x===f)continue;let a=E+x+g*(f+1),l=E+x+(g+1)*(f+1),c=E+x+(g+1)*(f+1)+1,m=E+x+g*(f+1)+1;s[d*6]=a,s[d*6+1]=l,s[d*6+2]=m,s[d*6+3]=l,s[d*6+4]=c,s[d*6+5]=m,d++}}}}const ze=r=>r+(r.indexOf("?")<0?"?":"&")+"tex=1";function Pe(r){return new Promise((e,t)=>{const n=new Image;n.crossOrigin="anonymous",n.decoding="async",n.onload=()=>n.naturalWidth?e(n):t(new Error("empty")),n.onerror=t,n.src=ze(r)})}const Le=`
precision highp float;
vec3 permute(vec3 x) { return mod(((x * 34.0) + 1.0) * x, 289.0); }
float snoise(vec2 v) {
  const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
  vec2 i = floor(v + dot(v, C.yy));
  vec2 x0 = v - i + dot(i, C.xx);
  vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;
  i = mod(i, 289.0);
  vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0)) + i.x + vec3(0.0, i1.x, 1.0));
  vec3 m = max(0.5 - vec3(dot(x0, x0), dot(x12.xy, x12.xy), dot(x12.zw, x12.zw)), 0.0);
  m = m * m;
  m = m * m;
  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;
  m *= 1.79284291400159 - 0.85373472095314 * (a0 * a0 + h * h);
  vec3 g;
  g.x = a0.x * x0.x + h.x * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}
vec2 cover(vec2 uv, vec2 plane, vec2 img, float zoom) {
  float pr = plane.x / plane.y;
  float ir = img.x / img.y;
  vec2 s = pr > ir ? vec2(1.0, ir / pr) : vec2(pr / ir, 1.0);
  return (uv - 0.5) * s / zoom + 0.5;
}
`,Ae=`
attribute vec3 position;
attribute vec2 uv;
uniform mat4 modelMatrix;
uniform mat4 viewMatrix;
uniform mat4 projectionMatrix;
uniform float uVelo;
uniform float uTime;
uniform float uHover;
uniform vec2 uSize;
varying vec2 vUv;
void main() {
  vUv = uv;
  vec4 p = modelMatrix * vec4(position, 1.0);
  float bx = sin(uv.x * 3.14159265);
  p.y -= bx * uVelo * min(uSize.y, 640.0) * 0.14;
  p.z += (sin(uv.y * 5.0 + uTime * 2.0) * 0.5 + 0.5) * abs(uVelo) * 80.0;
  p.z += bx * sin(uv.y * 3.14159265) * uHover * 40.0;
  gl_Position = projectionMatrix * viewMatrix * p;
}
`,Ce=Le+`
uniform sampler2D tMap;
uniform vec2 uImg;
uniform vec2 uSize;
uniform vec2 uMouse;
uniform float uReveal;
uniform float uVelo;
uniform float uTime;
uniform float uHover;
uniform float uPar;
varying vec2 vUv;
void main() {
  float n = snoise(vUv * vec2(2.6, 2.0) + vec2(0.0, uTime * 0.12)) * 0.5 + 0.5;
  float w = 0.22;
  float m = 1.0 - smoothstep(uReveal * (1.0 + w) - w, uReveal * (1.0 + w), vUv.y * 0.72 + n * 0.28);
  float edge = 4.0 * m * (1.0 - m);
  vec2 uv = vUv;
  uv.y -= edge * 0.07 * (n - 0.2);
  vec2 dm = vUv - uMouse;
  dm.x *= uSize.x / uSize.y;
  float dist = length(dm);
  uv += dm / (dist + 0.0001) * sin(dist * 26.0 - uTime * 5.0) * 0.007 * uHover * (1.0 - smoothstep(0.0, 0.55, dist));
  vec2 c = cover(uv, uSize, uImg, 1.1 + 0.18 * (1.0 - uReveal) + 0.06 * uHover);
  c.y += uPar * 0.04;
  float s = uVelo * 0.016;
  vec3 col = vec3(texture2D(tMap, c + vec2(0.0, s)).r, texture2D(tMap, c).g, texture2D(tMap, c - vec2(0.0, s)).b);
  col = mix(col, vec3(0.0, 0.404, 0.784), smoothstep(0.2, 1.0, edge) * 0.7);
  col += vec3(0.969, 0.659, 0.106) * smoothstep(0.93, 1.0, edge) * 0.4;
  gl_FragColor = vec4(clamp(col, 0.0, 1.0) * m, m);
}
`;let z=null,T=0;function be(){return z||(z=Ee()),z&&T++,z}function Ve(){z&&(T-=1,T<=0&&(T=0,z.destroy(),z=null))}function Ee(){const r=document.createElement("canvas"),e={alpha:!0,depth:!1,stencil:!1,antialias:!1,premultipliedAlpha:!0,preserveDrawingBuffer:!1,powerPreference:"high-performance"};let t;try{if(!(r.getContext("webgl2",e)||r.getContext("webgl",e)))return null;t=new Z({canvas:r,dpr:Math.min(window.devicePixelRatio||1,1.5),...e})}catch{return null}const n=t.gl;if(!n)return null;n.clearColor(0,0,0,0),r.className="liq-gl",r.setAttribute("aria-hidden","true"),document.body.appendChild(r);const s=new ie(n,{fov:30,near:1,far:2e4}),o=new B,h=new H(n,{widthSegments:24,heightSegments:24}),u=!!t.isWebgl2,f=i=>new $(n,{image:i,generateMipmaps:u,minFilter:u?n.LINEAR_MIPMAP_LINEAR:n.LINEAR}),y=i=>{try{i&&i.texture&&n.deleteTexture(i.texture)}catch{}},w=(i,a,l)=>{try{const c=new ee(n,{vertex:i,fragment:a,uniforms:l,transparent:!0,depthTest:!1,depthWrite:!1,cullFace:!1});return n.getProgramParameter(c.program,n.LINK_STATUS)?c:null}catch{return null}};let M=1,p=1,P=!0,A=!1;const v=()=>{M=document.documentElement.clientWidth||window.innerWidth,p=window.innerHeight,t.setSize(M,p),s.perspective({aspect:M/p}),s.position.z=p/2/Math.tan(s.fov*Math.PI/360),d.forEach(i=>i.resize&&i.resize())},d=new Set;v(),window.addEventListener("resize",v);const E=(i,a)=>{i.scale.set(a.width,a.height,1),i.position.set(a.left+a.width/2-M/2,p/2-a.top-a.height/2,0)},R=X(({v:i,time:a})=>{if(!P||document.hidden)return;let l=!1;d.forEach(c=>{if(!c.mesh)return;const m=c.el.getBoundingClientRect(),j=m.bottom>-60&&m.top<p+60&&m.width>0&&m.height>0;c.mesh.visible=j,j&&(l=!0,E(c.mesh,m),c.update(c.mesh.program.uniforms,m,i,a))}),(l||A)&&t.render({scene:o,camera:s}),A=l,d.forEach(c=>{c.pending&&c.mesh&&c.mesh.visible&&(c.pending=!1,c.onGL(!0))})}),S=(i,a)=>{i.mesh=new te(n,{geometry:h,program:a,frustumCulled:!1}),i.mesh.setParent(o),i.pending=!0},g=i=>{d.delete(i),i.mesh&&(i.mesh.setParent(null),i.textures.forEach(y),i.mesh=null),i.onGL(!1)};function q({el:i,img:a,s:l,onGL:c}){const m={el:i,mesh:null,pending:!1,onGL:c,textures:[],update:null};let j=!1;const U=()=>Pe(a.currentSrc||a.src).then(D=>{if(j||!P)return;const O=f(D);m.textures.push(O);const K={tMap:{value:O},uImg:{value:new I(D.naturalWidth,D.naturalHeight)},uSize:{value:new I(1,1)},uMouse:{value:new I(.5,.5)},uReveal:{value:0},uVelo:{value:0},uTime:{value:0},uHover:{value:0},uPar:{value:0}},F=w(Ae,Ce,K);F&&(m.update=(C,b,J,Q)=>{l.mx+=(l.tx-l.mx)*.12,l.my+=(l.ty-l.my)*.12,C.uSize.value.set(b.width,b.height),C.uReveal.value=l.r,C.uHover.value=l.hover,C.uMouse.value.set(l.mx,l.my),C.uVelo.value=J,C.uTime.value=Q,C.uPar.value=Math.max(-1,Math.min(1,(b.top+b.height/2-p/2)/p))},S(m,F))}).catch(()=>{});return a.complete&&a.naturalWidth?U():a.addEventListener("load",U,{once:!0}),d.add(m),()=>{j=!0,a.removeEventListener("load",U),g(m)}}function x(){if(!P)return;P=!1,R(),window.removeEventListener("resize",v),[...d].forEach(g),r.remove();const i=n.getExtension("WEBGL_lose_context");i&&i.loseContext()}return r.addEventListener("webglcontextlost",i=>{i.preventDefault(),x(),z&&z.destroy===x&&(z=null,T=0)}),{addCard:q,destroy:x}}export{be as acquireGL,Ve as releaseGL};
