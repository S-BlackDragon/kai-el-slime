var Kg=Object.defineProperty;var $g=(n,e,t)=>e in n?Kg(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var Qt=(n,e,t)=>$g(n,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ed="185",Zg=0,jd=1,Jg=2,Da=1,jg=2,oo=3,Ri=0,dn=1,ni=2,Ei=0,hr=1,Dl=2,Qd=3,ef=4,Qg=5,vs=100,e0=101,t0=102,n0=103,i0=104,s0=200,r0=201,o0=202,a0=203,Nl=204,kl=205,c0=206,l0=207,u0=208,d0=209,f0=210,h0=211,p0=212,m0=213,g0=214,Ul=0,Ol=1,Fl=2,yr=3,Bl=4,zl=5,Hl=6,Vl=7,Up=0,_0=1,v0=2,ri=0,Op=1,Fp=2,Bp=3,zp=4,Hp=5,Vp=6,Gp=7,tf="attached",x0="detached",Wp=300,ws=301,Sr=302,bc=303,Mc=304,uc=306,br=1e3,ii=1001,Ka=1002,It=1003,Xp=1004,ao=1005,Lt=1006,Na=1007,bi=1008,gn=1009,qp=1010,Yp=1011,yo=1012,td=1013,ci=1014,wn=1015,Ci=1016,nd=1017,id=1018,So=1020,Kp=35902,$p=35899,Zp=1021,Jp=1022,An=1023,Pi=1026,Ss=1027,sd=1028,rd=1029,As=1030,od=1031,ad=1033,ka=33776,Ua=33777,Oa=33778,Fa=33779,Gl=35840,Wl=35841,Xl=35842,ql=35843,Yl=36196,Kl=37492,$l=37496,Zl=37488,Jl=37489,$a=37490,jl=37491,Ql=37808,eu=37809,tu=37810,nu=37811,iu=37812,su=37813,ru=37814,ou=37815,au=37816,cu=37817,lu=37818,uu=37819,du=37820,fu=37821,hu=36492,pu=36494,mu=36495,gu=36283,_u=36284,Za=36285,vu=36286,jp=2200,y0=2201,S0=2202,bo=2300,Mo=2301,Tc=2302,nf=2303,lr=2400,ur=2401,Ja=2402,cd=2500,b0=2501,M0=0,Qp=1,xu=2,T0=3200,yu=0,E0=1,Wi="",Vt="srgb",vn="srgb-linear",ja="linear",gt="srgb",Os=7680,sf=519,w0=512,A0=513,R0=514,ld=515,C0=516,P0=517,ud=518,I0=519,Su=35044,rf="300 es",si=2e3,To=2001;function L0(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function D0(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Eo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function N0(){const n=Eo("canvas");return n.style.display="block",n}const of={};function Qa(...n){const e="THREE."+n.shift();console.log(e,...n)}function em(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Oe(...n){n=em(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function Ze(...n){n=em(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function pr(...n){const e=n.join(" ");e in of||(of[e]=!0,Oe(...n))}function k0(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}const U0={[Ul]:Ol,[Fl]:Hl,[Bl]:Vl,[yr]:zl,[Ol]:Ul,[Hl]:Fl,[Vl]:Bl,[zl]:yr};class os{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const $t=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let af=1234567;const fo=Math.PI/180,Mr=180/Math.PI;function Pn(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return($t[n&255]+$t[n>>8&255]+$t[n>>16&255]+$t[n>>24&255]+"-"+$t[e&255]+$t[e>>8&255]+"-"+$t[e>>16&15|64]+$t[e>>24&255]+"-"+$t[t&63|128]+$t[t>>8&255]+"-"+$t[t>>16&255]+$t[t>>24&255]+$t[i&255]+$t[i>>8&255]+$t[i>>16&255]+$t[i>>24&255]).toLowerCase()}function ot(n,e,t){return Math.max(e,Math.min(t,n))}function dd(n,e){return(n%e+e)%e}function O0(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function F0(n,e,t){return n!==e?(t-n)/(e-n):0}function ho(n,e,t){return(1-t)*n+t*e}function B0(n,e,t,i){return ho(n,e,1-Math.exp(-t*i))}function z0(n,e=1){return e-Math.abs(dd(n,e*2)-e)}function H0(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function V0(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function G0(n,e){return n+Math.floor(Math.random()*(e-n+1))}function W0(n,e){return n+Math.random()*(e-n)}function X0(n){return n*(.5-Math.random())}function q0(n){n!==void 0&&(af=n);let e=af+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Y0(n){return n*fo}function K0(n){return n*Mr}function $0(n){return(n&n-1)===0&&n!==0}function Z0(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function J0(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function j0(n,e,t,i,s){const r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+i)/2),u=o((e+i)/2),d=r((e-i)/2),f=o((e-i)/2),h=r((i-e)/2),p=o((i-e)/2);switch(s){case"XYX":n.set(a*u,c*d,c*f,a*l);break;case"YZY":n.set(c*f,a*u,c*d,a*l);break;case"ZXZ":n.set(c*d,c*f,a*u,a*l);break;case"XZX":n.set(a*u,c*p,c*h,a*l);break;case"YXY":n.set(c*h,a*u,c*p,a*l);break;case"ZYZ":n.set(c*p,c*h,a*u,a*l);break;default:Oe("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Bn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function _t(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const bu={DEG2RAD:fo,RAD2DEG:Mr,generateUUID:Pn,clamp:ot,euclideanModulo:dd,mapLinear:O0,inverseLerp:F0,lerp:ho,damp:B0,pingpong:z0,smoothstep:H0,smootherstep:V0,randInt:G0,randFloat:W0,randFloatSpread:X0,seededRandom:q0,degToRad:Y0,radToDeg:K0,isPowerOfTwo:$0,ceilPowerOfTwo:Z0,floorPowerOfTwo:J0,setQuaternionFromProperEuler:j0,normalize:_t,denormalize:Bn},Fd=class Fd{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ot(this.x,e.x,t.x),this.y=ot(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ot(this.x,e,t),this.y=ot(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ot(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(ot(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Fd.prototype.isVector2=!0;let Ee=Fd;class In{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let c=i[s+0],l=i[s+1],u=i[s+2],d=i[s+3],f=r[o+0],h=r[o+1],p=r[o+2],v=r[o+3];if(d!==v||c!==f||l!==h||u!==p){let m=c*f+l*h+u*p+d*v;m<0&&(f=-f,h=-h,p=-p,v=-v,m=-m);let g=1-a;if(m<.9995){const S=Math.acos(m),T=Math.sin(S);g=Math.sin(g*S)/T,a=Math.sin(a*S)/T,c=c*g+f*a,l=l*g+h*a,u=u*g+p*a,d=d*g+v*a}else{c=c*g+f*a,l=l*g+h*a,u=u*g+p*a,d=d*g+v*a;const S=1/Math.sqrt(c*c+l*l+u*u+d*d);c*=S,l*=S,u*=S,d*=S}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,s,r,o){const a=i[s],c=i[s+1],l=i[s+2],u=i[s+3],d=r[o],f=r[o+1],h=r[o+2],p=r[o+3];return e[t]=a*p+u*d+c*h-l*f,e[t+1]=c*p+u*f+l*d-a*h,e[t+2]=l*p+u*h+a*f-c*d,e[t+3]=u*p-a*d-c*f-l*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),u=a(s/2),d=a(r/2),f=c(i/2),h=c(s/2),p=c(r/2);switch(o){case"XYZ":this._x=f*u*d+l*h*p,this._y=l*h*d-f*u*p,this._z=l*u*p+f*h*d,this._w=l*u*d-f*h*p;break;case"YXZ":this._x=f*u*d+l*h*p,this._y=l*h*d-f*u*p,this._z=l*u*p-f*h*d,this._w=l*u*d+f*h*p;break;case"ZXY":this._x=f*u*d-l*h*p,this._y=l*h*d+f*u*p,this._z=l*u*p+f*h*d,this._w=l*u*d-f*h*p;break;case"ZYX":this._x=f*u*d-l*h*p,this._y=l*h*d+f*u*p,this._z=l*u*p-f*h*d,this._w=l*u*d+f*h*p;break;case"YZX":this._x=f*u*d+l*h*p,this._y=l*h*d+f*u*p,this._z=l*u*p-f*h*d,this._w=l*u*d-f*h*p;break;case"XZY":this._x=f*u*d-l*h*p,this._y=l*h*d-f*u*p,this._z=l*u*p+f*h*d,this._w=l*u*d+f*h*p;break;default:Oe("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],d=t[10],f=i+a+d;if(f>0){const h=.5/Math.sqrt(f+1);this._w=.25/h,this._x=(u-c)*h,this._y=(r-l)*h,this._z=(o-s)*h}else if(i>a&&i>d){const h=2*Math.sqrt(1+i-a-d);this._w=(u-c)/h,this._x=.25*h,this._y=(s+o)/h,this._z=(r+l)/h}else if(a>d){const h=2*Math.sqrt(1+a-i-d);this._w=(r-l)/h,this._x=(s+o)/h,this._y=.25*h,this._z=(c+u)/h}else{const h=2*Math.sqrt(1+d-i-a);this._w=(o-s)/h,this._x=(r+l)/h,this._y=(c+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ot(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=i*u+o*a+s*l-r*c,this._y=s*u+o*c+r*a-i*l,this._z=r*u+o*l+i*c-s*a,this._w=o*u-i*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let c=1-t;if(a<.9995){const l=Math.acos(a),u=Math.sin(l);c=Math.sin(c*l)/u,t=Math.sin(t*l)/u,this._x=this._x*c+i*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this._onChangeCallback()}else this._x=this._x*c+i*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Bd=class Bd{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(cf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(cf.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*i),u=2*(a*t-r*s),d=2*(r*i-o*t);return this.x=t+c*l+o*d-a*u,this.y=i+c*u+a*l-r*d,this.z=s+c*d+r*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ot(this.x,e.x,t.x),this.y=ot(this.y,e.y,t.y),this.z=ot(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ot(this.x,e,t),this.y=ot(this.y,e,t),this.z=ot(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ot(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-i*c,this.z=i*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ec.copy(this).projectOnVector(e),this.sub(Ec)}reflect(e){return this.sub(Ec.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(ot(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Bd.prototype.isVector3=!0;let X=Bd;const Ec=new X,cf=new In,zd=class zd{constructor(e,t,i,s,r,o,a,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,c,l)}set(e,t,i,s,r,o,a,c,l){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=c,u[6]=i,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],u=i[4],d=i[7],f=i[2],h=i[5],p=i[8],v=s[0],m=s[3],g=s[6],S=s[1],T=s[4],x=s[7],M=s[2],E=s[5],L=s[8];return r[0]=o*v+a*S+c*M,r[3]=o*m+a*T+c*E,r[6]=o*g+a*x+c*L,r[1]=l*v+u*S+d*M,r[4]=l*m+u*T+d*E,r[7]=l*g+u*x+d*L,r[2]=f*v+h*S+p*M,r[5]=f*m+h*T+p*E,r[8]=f*g+h*x+p*L,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-i*r*u+i*a*c+s*r*l-s*o*c}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],d=u*o-a*l,f=a*c-u*r,h=l*r-o*c,p=t*d+i*f+s*h;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/p;return e[0]=d*v,e[1]=(s*l-u*i)*v,e[2]=(a*i-s*o)*v,e[3]=f*v,e[4]=(u*t-s*c)*v,e[5]=(s*r-a*t)*v,e[6]=h*v,e[7]=(i*c-l*t)*v,e[8]=(o*t-i*r)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return pr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(wc.makeScale(e,t)),this}rotate(e){return pr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(wc.makeRotation(-e)),this}translate(e,t){return pr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(wc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};zd.prototype.isMatrix3=!0;let Qe=zd;const wc=new Qe,lf=new Qe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),uf=new Qe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Q0(){const n={enabled:!0,workingColorSpace:vn,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===gt&&(s.r=wi(s.r),s.g=wi(s.g),s.b=wi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===gt&&(s.r=mr(s.r),s.g=mr(s.g),s.b=mr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Wi?ja:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return pr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return pr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[vn]:{primaries:e,whitePoint:i,transfer:ja,toXYZ:lf,fromXYZ:uf,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Vt},outputColorSpaceConfig:{drawingBufferColorSpace:Vt}},[Vt]:{primaries:e,whitePoint:i,transfer:gt,toXYZ:lf,fromXYZ:uf,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Vt}}}),n}const ct=Q0();function wi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function mr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Fs;class e_{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Fs===void 0&&(Fs=Eo("canvas")),Fs.width=e.width,Fs.height=e.height;const s=Fs.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Fs}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Eo("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=wi(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(wi(t[i]/255)*255):t[i]=wi(t[i]);return{data:t,width:e.width,height:e.height}}else return Oe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let t_=0;class fd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:t_++}),this.uuid=Pn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Ac(s[o].image)):r.push(Ac(s[o]))}else r=Ac(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function Ac(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?e_.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Oe("Texture: Unable to serialize Texture."),{})}let n_=0;const Rc=new X;class Gt extends os{constructor(e=Gt.DEFAULT_IMAGE,t=Gt.DEFAULT_MAPPING,i=ii,s=ii,r=Lt,o=bi,a=An,c=gn,l=Gt.DEFAULT_ANISOTROPY,u=Wi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:n_++}),this.uuid=Pn(),this.name="",this.source=new fd(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Ee(0,0),this.repeat=new Ee(1,1),this.center=new Ee(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Rc).x}get height(){return this.source.getSize(Rc).y}get depth(){return this.source.getSize(Rc).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){Oe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Oe(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Wp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case br:e.x=e.x-Math.floor(e.x);break;case ii:e.x=e.x<0?0:1;break;case Ka:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case br:e.y=e.y-Math.floor(e.y);break;case ii:e.y=e.y<0?0:1;break;case Ka:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Gt.DEFAULT_IMAGE=null;Gt.DEFAULT_MAPPING=Wp;Gt.DEFAULT_ANISOTROPY=1;const Hd=class Hd{constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const c=e.elements,l=c[0],u=c[4],d=c[8],f=c[1],h=c[5],p=c[9],v=c[2],m=c[6],g=c[10];if(Math.abs(u-f)<.01&&Math.abs(d-v)<.01&&Math.abs(p-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+v)<.1&&Math.abs(p+m)<.1&&Math.abs(l+h+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const T=(l+1)/2,x=(h+1)/2,M=(g+1)/2,E=(u+f)/4,L=(d+v)/4,y=(p+m)/4;return T>x&&T>M?T<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(T),s=E/i,r=L/i):x>M?x<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),i=E/s,r=y/s):M<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(M),i=L/r,s=y/r),this.set(i,s,r,t),this}let S=Math.sqrt((m-p)*(m-p)+(d-v)*(d-v)+(f-u)*(f-u));return Math.abs(S)<.001&&(S=1),this.x=(m-p)/S,this.y=(d-v)/S,this.z=(f-u)/S,this.w=Math.acos((l+h+g-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ot(this.x,e.x,t.x),this.y=ot(this.y,e.y,t.y),this.z=ot(this.z,e.z,t.z),this.w=ot(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ot(this.x,e,t),this.y=ot(this.y,e,t),this.z=ot(this.z,e,t),this.w=ot(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ot(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Hd.prototype.isVector4=!0;let St=Hd;class i_ extends os{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Lt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new St(0,0,e,t),this.scissorTest=!1,this.viewport=new St(0,0,e,t),this.textures=[];const s={width:e,height:t,depth:i.depth},r=new Gt(s),o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Lt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new fd(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class oi extends i_{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class tm extends Gt{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=It,this.minFilter=It,this.wrapR=ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class s_ extends Gt{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=It,this.minFilter=It,this.wrapR=ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const lc=class lc{constructor(e,t,i,s,r,o,a,c,l,u,d,f,h,p,v,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,c,l,u,d,f,h,p,v,m)}set(e,t,i,s,r,o,a,c,l,u,d,f,h,p,v,m){const g=this.elements;return g[0]=e,g[4]=t,g[8]=i,g[12]=s,g[1]=r,g[5]=o,g[9]=a,g[13]=c,g[2]=l,g[6]=u,g[10]=d,g[14]=f,g[3]=h,g[7]=p,g[11]=v,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new lc().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,i=e.elements,s=1/Bs.setFromMatrixColumn(e,0).length(),r=1/Bs.setFromMatrixColumn(e,1).length(),o=1/Bs.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const f=o*u,h=o*d,p=a*u,v=a*d;t[0]=c*u,t[4]=-c*d,t[8]=l,t[1]=h+p*l,t[5]=f-v*l,t[9]=-a*c,t[2]=v-f*l,t[6]=p+h*l,t[10]=o*c}else if(e.order==="YXZ"){const f=c*u,h=c*d,p=l*u,v=l*d;t[0]=f+v*a,t[4]=p*a-h,t[8]=o*l,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=h*a-p,t[6]=v+f*a,t[10]=o*c}else if(e.order==="ZXY"){const f=c*u,h=c*d,p=l*u,v=l*d;t[0]=f-v*a,t[4]=-o*d,t[8]=p+h*a,t[1]=h+p*a,t[5]=o*u,t[9]=v-f*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const f=o*u,h=o*d,p=a*u,v=a*d;t[0]=c*u,t[4]=p*l-h,t[8]=f*l+v,t[1]=c*d,t[5]=v*l+f,t[9]=h*l-p,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const f=o*c,h=o*l,p=a*c,v=a*l;t[0]=c*u,t[4]=v-f*d,t[8]=p*d+h,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=h*d+p,t[10]=f-v*d}else if(e.order==="XZY"){const f=o*c,h=o*l,p=a*c,v=a*l;t[0]=c*u,t[4]=-d,t[8]=l*u,t[1]=f*d+v,t[5]=o*u,t[9]=h*d-p,t[2]=p*d-h,t[6]=a*u,t[10]=v*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(r_,e,o_)}lookAt(e,t,i){const s=this.elements;return pn.subVectors(e,t),pn.lengthSq()===0&&(pn.z=1),pn.normalize(),ki.crossVectors(i,pn),ki.lengthSq()===0&&(Math.abs(i.z)===1?pn.x+=1e-4:pn.z+=1e-4,pn.normalize(),ki.crossVectors(i,pn)),ki.normalize(),Yo.crossVectors(pn,ki),s[0]=ki.x,s[4]=Yo.x,s[8]=pn.x,s[1]=ki.y,s[5]=Yo.y,s[9]=pn.y,s[2]=ki.z,s[6]=Yo.z,s[10]=pn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],u=i[1],d=i[5],f=i[9],h=i[13],p=i[2],v=i[6],m=i[10],g=i[14],S=i[3],T=i[7],x=i[11],M=i[15],E=s[0],L=s[4],y=s[8],b=s[12],N=s[1],P=s[5],D=s[9],Y=s[13],R=s[2],A=s[6],k=s[10],I=s[14],O=s[3],F=s[7],G=s[11],U=s[15];return r[0]=o*E+a*N+c*R+l*O,r[4]=o*L+a*P+c*A+l*F,r[8]=o*y+a*D+c*k+l*G,r[12]=o*b+a*Y+c*I+l*U,r[1]=u*E+d*N+f*R+h*O,r[5]=u*L+d*P+f*A+h*F,r[9]=u*y+d*D+f*k+h*G,r[13]=u*b+d*Y+f*I+h*U,r[2]=p*E+v*N+m*R+g*O,r[6]=p*L+v*P+m*A+g*F,r[10]=p*y+v*D+m*k+g*G,r[14]=p*b+v*Y+m*I+g*U,r[3]=S*E+T*N+x*R+M*O,r[7]=S*L+T*P+x*A+M*F,r[11]=S*y+T*D+x*k+M*G,r[15]=S*b+T*Y+x*I+M*U,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],d=e[6],f=e[10],h=e[14],p=e[3],v=e[7],m=e[11],g=e[15],S=c*h-l*f,T=a*h-l*d,x=a*f-c*d,M=o*h-l*u,E=o*f-c*u,L=o*d-a*u;return t*(v*S-m*T+g*x)-i*(p*S-m*M+g*E)+s*(p*T-v*M+g*L)-r*(p*x-v*E+m*L)}determinantAffine(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[1],o=e[5],a=e[9],c=e[2],l=e[6],u=e[10];return t*(o*u-a*l)-i*(r*u-a*c)+s*(r*l-o*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],d=e[9],f=e[10],h=e[11],p=e[12],v=e[13],m=e[14],g=e[15],S=t*a-i*o,T=t*c-s*o,x=t*l-r*o,M=i*c-s*a,E=i*l-r*a,L=s*l-r*c,y=u*v-d*p,b=u*m-f*p,N=u*g-h*p,P=d*m-f*v,D=d*g-h*v,Y=f*g-h*m,R=S*Y-T*D+x*P+M*N-E*b+L*y;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/R;return e[0]=(a*Y-c*D+l*P)*A,e[1]=(s*D-i*Y-r*P)*A,e[2]=(v*L-m*E+g*M)*A,e[3]=(f*E-d*L-h*M)*A,e[4]=(c*N-o*Y-l*b)*A,e[5]=(t*Y-s*N+r*b)*A,e[6]=(m*x-p*L-g*T)*A,e[7]=(u*L-f*x+h*T)*A,e[8]=(o*D-a*N+l*y)*A,e[9]=(i*N-t*D-r*y)*A,e[10]=(p*E-v*x+g*S)*A,e[11]=(d*x-u*E-h*S)*A,e[12]=(a*b-o*P-c*y)*A,e[13]=(t*P-i*b+s*y)*A,e[14]=(v*T-p*M-m*S)*A,e[15]=(u*M-d*T+f*S)*A,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,c=e.z,l=r*o,u=r*a;return this.set(l*o+i,l*a-s*c,l*c+s*a,0,l*a+s*c,u*a+i,u*c-s*o,0,l*c-s*a,u*c+s*o,r*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,u=o+o,d=a+a,f=r*l,h=r*u,p=r*d,v=o*u,m=o*d,g=a*d,S=c*l,T=c*u,x=c*d,M=i.x,E=i.y,L=i.z;return s[0]=(1-(v+g))*M,s[1]=(h+x)*M,s[2]=(p-T)*M,s[3]=0,s[4]=(h-x)*E,s[5]=(1-(f+g))*E,s[6]=(m+S)*E,s[7]=0,s[8]=(p+T)*L,s[9]=(m-S)*L,s[10]=(1-(f+v))*L,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let o=Bs.set(s[0],s[1],s[2]).length();const a=Bs.set(s[4],s[5],s[6]).length(),c=Bs.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Nn.copy(this);const l=1/o,u=1/a,d=1/c;return Nn.elements[0]*=l,Nn.elements[1]*=l,Nn.elements[2]*=l,Nn.elements[4]*=u,Nn.elements[5]*=u,Nn.elements[6]*=u,Nn.elements[8]*=d,Nn.elements[9]*=d,Nn.elements[10]*=d,t.setFromRotationMatrix(Nn),i.x=o,i.y=a,i.z=c,this}makePerspective(e,t,i,s,r,o,a=si,c=!1){const l=this.elements,u=2*r/(t-e),d=2*r/(i-s),f=(t+e)/(t-e),h=(i+s)/(i-s);let p,v;if(c)p=r/(o-r),v=o*r/(o-r);else if(a===si)p=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(a===To)p=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=d,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=si,c=!1){const l=this.elements,u=2/(t-e),d=2/(i-s),f=-(t+e)/(t-e),h=-(i+s)/(i-s);let p,v;if(c)p=1/(o-r),v=o/(o-r);else if(a===si)p=-2/(o-r),v=-(o+r)/(o-r);else if(a===To)p=-1/(o-r),v=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=d,l[9]=0,l[13]=h,l[2]=0,l[6]=0,l[10]=p,l[14]=v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};lc.prototype.isMatrix4=!0;let et=lc;const Bs=new X,Nn=new et,r_=new X(0,0,0),o_=new X(1,1,1),ki=new X,Yo=new X,pn=new X,df=new et,ff=new In;class ts{constructor(e=0,t=0,i=0,s=ts.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],u=s[9],d=s[2],f=s[6],h=s[10];switch(t){case"XYZ":this._y=Math.asin(ot(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ot(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,h),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(ot(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,h),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-ot(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,h),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(ot(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,h));break;case"XZY":this._z=Math.asin(-ot(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,h),this._y=0);break;default:Oe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return df.makeRotationFromQuaternion(e),this.setFromRotationMatrix(df,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ff.setFromEuler(this),this.setFromQuaternion(ff,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ts.DEFAULT_ORDER="XYZ";class hd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let a_=0;const hf=new X,zs=new In,pi=new et,Ko=new X,Fr=new X,c_=new X,l_=new In,pf=new X(1,0,0),mf=new X(0,1,0),gf=new X(0,0,1),_f={type:"added"},u_={type:"removed"},Hs={type:"childadded",child:null},Cc={type:"childremoved",child:null};class Ct extends os{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:a_++}),this.uuid=Pn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ct.DEFAULT_UP.clone();const e=new X,t=new ts,i=new In,s=new X(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new et},normalMatrix:{value:new Qe}}),this.matrix=new et,this.matrixWorld=new et,this.matrixAutoUpdate=Ct.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new hd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return zs.setFromAxisAngle(e,t),this.quaternion.multiply(zs),this}rotateOnWorldAxis(e,t){return zs.setFromAxisAngle(e,t),this.quaternion.premultiply(zs),this}rotateX(e){return this.rotateOnAxis(pf,e)}rotateY(e){return this.rotateOnAxis(mf,e)}rotateZ(e){return this.rotateOnAxis(gf,e)}translateOnAxis(e,t){return hf.copy(e).applyQuaternion(this.quaternion),this.position.add(hf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(pf,e)}translateY(e){return this.translateOnAxis(mf,e)}translateZ(e){return this.translateOnAxis(gf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(pi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Ko.copy(e):Ko.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Fr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pi.lookAt(Fr,Ko,this.up):pi.lookAt(Ko,Fr,this.up),this.quaternion.setFromRotationMatrix(pi),s&&(pi.extractRotation(s.matrixWorld),zs.setFromRotationMatrix(pi),this.quaternion.premultiply(zs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ze("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(_f),Hs.child=e,this.dispatchEvent(Hs),Hs.child=null):Ze("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(u_),Cc.child=e,this.dispatchEvent(Cc),Cc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),pi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),pi.multiply(e.parent.matrixWorld)),e.applyMatrix4(pi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(_f),Hs.child=e,this.dispatchEvent(Hs),Hs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fr,e,c_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fr,l_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){const r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,i)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const d=c[l];r(e.shapes,d)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),d=o(e.shapes),f=o(e.skeletons),h=o(e.animations),p=o(e.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),h.length>0&&(i.animations=h),p.length>0&&(i.nodes=p)}return i.object=s,i;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}Ct.DEFAULT_UP=new X(0,1,0);Ct.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class zn extends Ct{constructor(){super(),this.isGroup=!0,this.type="Group"}}const d_={type:"move"};class Pc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new zn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new zn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new zn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,i),g=this._getHandJoint(l,v);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}const u=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],f=u.position.distanceTo(d.position),h=.02,p=.005;l.inputState.pinching&&f>h+p?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=h-p&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(d_)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new zn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const nm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ui={h:0,s:0,l:0},$o={h:0,s:0,l:0};function Ic(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Je{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Vt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ct.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=ct.workingColorSpace){return this.r=e,this.g=t,this.b=i,ct.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=ct.workingColorSpace){if(e=dd(e,1),t=ot(t,0,1),i=ot(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=Ic(o,r,e+1/3),this.g=Ic(o,r,e),this.b=Ic(o,r,e-1/3)}return ct.colorSpaceToWorking(this,s),this}setStyle(e,t=Vt){function i(r){r!==void 0&&parseFloat(r)<1&&Oe("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Oe("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);Oe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Vt){const i=nm[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Oe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=wi(e.r),this.g=wi(e.g),this.b=wi(e.b),this}copyLinearToSRGB(e){return this.r=mr(e.r),this.g=mr(e.g),this.b=mr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Vt){return ct.workingToColorSpace(Zt.copy(this),e),Math.round(ot(Zt.r*255,0,255))*65536+Math.round(ot(Zt.g*255,0,255))*256+Math.round(ot(Zt.b*255,0,255))}getHexString(e=Vt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ct.workingColorSpace){ct.workingToColorSpace(Zt.copy(this),t);const i=Zt.r,s=Zt.g,r=Zt.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const d=o-a;switch(l=u<=.5?d/(o+a):d/(2-o-a),o){case i:c=(s-r)/d+(s<r?6:0);break;case s:c=(r-i)/d+2;break;case r:c=(i-s)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=ct.workingColorSpace){return ct.workingToColorSpace(Zt.copy(this),t),e.r=Zt.r,e.g=Zt.g,e.b=Zt.b,e}getStyle(e=Vt){ct.workingToColorSpace(Zt.copy(this),e);const t=Zt.r,i=Zt.g,s=Zt.b;return e!==Vt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Ui),this.setHSL(Ui.h+e,Ui.s+t,Ui.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Ui),e.getHSL($o);const i=ho(Ui.h,$o.h,t),s=ho(Ui.s,$o.s,t),r=ho(Ui.l,$o.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Zt=new Je;Je.NAMES=nm;class pd{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new Je(e),this.near=t,this.far=i}clone(){return new pd(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class f_ extends Ct{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ts,this.environmentIntensity=1,this.environmentRotation=new ts,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const kn=new X,mi=new X,Lc=new X,gi=new X,Vs=new X,Gs=new X,vf=new X,Dc=new X,Nc=new X,kc=new X,Uc=new St,Oc=new St,Fc=new St;class Tn{constructor(e=new X,t=new X,i=new X){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),kn.subVectors(e,t),s.cross(kn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){kn.subVectors(s,t),mi.subVectors(i,t),Lc.subVectors(e,t);const o=kn.dot(kn),a=kn.dot(mi),c=kn.dot(Lc),l=mi.dot(mi),u=mi.dot(Lc),d=o*l-a*a;if(d===0)return r.set(0,0,0),null;const f=1/d,h=(l*c-a*u)*f,p=(o*u-a*c)*f;return r.set(1-h-p,p,h)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,gi)===null?!1:gi.x>=0&&gi.y>=0&&gi.x+gi.y<=1}static getInterpolation(e,t,i,s,r,o,a,c){return this.getBarycoord(e,t,i,s,gi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,gi.x),c.addScaledVector(o,gi.y),c.addScaledVector(a,gi.z),c)}static getInterpolatedAttribute(e,t,i,s,r,o){return Uc.setScalar(0),Oc.setScalar(0),Fc.setScalar(0),Uc.fromBufferAttribute(e,t),Oc.fromBufferAttribute(e,i),Fc.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Uc,r.x),o.addScaledVector(Oc,r.y),o.addScaledVector(Fc,r.z),o}static isFrontFacing(e,t,i,s){return kn.subVectors(i,t),mi.subVectors(e,t),kn.cross(mi).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return kn.subVectors(this.c,this.b),mi.subVectors(this.a,this.b),kn.cross(mi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Tn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Tn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return Tn.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return Tn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Tn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let o,a;Vs.subVectors(s,i),Gs.subVectors(r,i),Dc.subVectors(e,i);const c=Vs.dot(Dc),l=Gs.dot(Dc);if(c<=0&&l<=0)return t.copy(i);Nc.subVectors(e,s);const u=Vs.dot(Nc),d=Gs.dot(Nc);if(u>=0&&d<=u)return t.copy(s);const f=c*d-u*l;if(f<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(i).addScaledVector(Vs,o);kc.subVectors(e,r);const h=Vs.dot(kc),p=Gs.dot(kc);if(p>=0&&h<=p)return t.copy(r);const v=h*l-c*p;if(v<=0&&l>=0&&p<=0)return a=l/(l-p),t.copy(i).addScaledVector(Gs,a);const m=u*p-h*d;if(m<=0&&d-u>=0&&h-p>=0)return vf.subVectors(r,s),a=(d-u)/(d-u+(h-p)),t.copy(s).addScaledVector(vf,a);const g=1/(m+v+f);return o=v*g,a=f*g,t.copy(i).addScaledVector(Vs,o).addScaledVector(Gs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class an{constructor(e=new X(1/0,1/0,1/0),t=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Un.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Un.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Un.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Un):Un.fromBufferAttribute(r,o),Un.applyMatrix4(e.matrixWorld),this.expandByPoint(Un);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Zo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Zo.copy(i.boundingBox)),Zo.applyMatrix4(e.matrixWorld),this.union(Zo)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Un),Un.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Br),Jo.subVectors(this.max,Br),Ws.subVectors(e.a,Br),Xs.subVectors(e.b,Br),qs.subVectors(e.c,Br),Oi.subVectors(Xs,Ws),Fi.subVectors(qs,Xs),ls.subVectors(Ws,qs);let t=[0,-Oi.z,Oi.y,0,-Fi.z,Fi.y,0,-ls.z,ls.y,Oi.z,0,-Oi.x,Fi.z,0,-Fi.x,ls.z,0,-ls.x,-Oi.y,Oi.x,0,-Fi.y,Fi.x,0,-ls.y,ls.x,0];return!Bc(t,Ws,Xs,qs,Jo)||(t=[1,0,0,0,1,0,0,0,1],!Bc(t,Ws,Xs,qs,Jo))?!1:(jo.crossVectors(Oi,Fi),t=[jo.x,jo.y,jo.z],Bc(t,Ws,Xs,qs,Jo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Un).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Un).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(_i[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),_i[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),_i[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),_i[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),_i[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),_i[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),_i[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),_i[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(_i),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const _i=[new X,new X,new X,new X,new X,new X,new X,new X],Un=new X,Zo=new an,Ws=new X,Xs=new X,qs=new X,Oi=new X,Fi=new X,ls=new X,Br=new X,Jo=new X,jo=new X,us=new X;function Bc(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){us.fromArray(n,r);const a=s.x*Math.abs(us.x)+s.y*Math.abs(us.y)+s.z*Math.abs(us.z),c=e.dot(us),l=t.dot(us),u=i.dot(us);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const zt=new X,Qo=new Ee;let h_=0;class cn extends os{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:h_++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Su,this.updateRanges=[],this.gpuType=wn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Qo.fromBufferAttribute(this,t),Qo.applyMatrix3(e),this.setXY(t,Qo.x,Qo.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)zt.fromBufferAttribute(this,t),zt.applyMatrix3(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)zt.fromBufferAttribute(this,t),zt.applyMatrix4(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)zt.fromBufferAttribute(this,t),zt.applyNormalMatrix(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)zt.fromBufferAttribute(this,t),zt.transformDirection(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Bn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=_t(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Bn(t,this.array)),t}setX(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Bn(t,this.array)),t}setY(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Bn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Bn(t,this.array)),t}setW(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=_t(t,this.array),i=_t(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=_t(t,this.array),i=_t(i,this.array),s=_t(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=_t(t,this.array),i=_t(i,this.array),s=_t(s,this.array),r=_t(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Su&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class im extends cn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class sm extends cn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Yt extends cn{constructor(e,t,i){super(new Float32Array(e),t,i)}}const p_=new an,zr=new X,zc=new X;class di{constructor(e=new X,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):p_.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;zr.subVectors(e,this.center);const t=zr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(zr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(zc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(zr.copy(e.center).add(zc)),this.expandByPoint(zr.copy(e.center).sub(zc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let m_=0;const Sn=new et,Hc=new Ct,Ys=new X,mn=new an,Hr=new an,qt=new X;class un extends os{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:m_++}),this.uuid=Pn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(L0(e)?sm:im)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Qe().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Sn.makeRotationFromQuaternion(e),this.applyMatrix4(Sn),this}rotateX(e){return Sn.makeRotationX(e),this.applyMatrix4(Sn),this}rotateY(e){return Sn.makeRotationY(e),this.applyMatrix4(Sn),this}rotateZ(e){return Sn.makeRotationZ(e),this.applyMatrix4(Sn),this}translate(e,t,i){return Sn.makeTranslation(e,t,i),this.applyMatrix4(Sn),this}scale(e,t,i){return Sn.makeScale(e,t,i),this.applyMatrix4(Sn),this}lookAt(e){return Hc.lookAt(e),Hc.updateMatrix(),this.applyMatrix4(Hc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ys).negate(),this.translate(Ys.x,Ys.y,Ys.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Yt(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Oe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new an);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ze("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];mn.setFromBufferAttribute(r),this.morphTargetsRelative?(qt.addVectors(this.boundingBox.min,mn.min),this.boundingBox.expandByPoint(qt),qt.addVectors(this.boundingBox.max,mn.max),this.boundingBox.expandByPoint(qt)):(this.boundingBox.expandByPoint(mn.min),this.boundingBox.expandByPoint(mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ze('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new di);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ze("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new X,1/0);return}if(e){const i=this.boundingSphere.center;if(mn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Hr.setFromBufferAttribute(a),this.morphTargetsRelative?(qt.addVectors(mn.min,Hr.min),mn.expandByPoint(qt),qt.addVectors(mn.max,Hr.max),mn.expandByPoint(qt)):(mn.expandByPoint(Hr.min),mn.expandByPoint(Hr.max))}mn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)qt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(qt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)qt.fromBufferAttribute(a,l),c&&(Ys.fromBufferAttribute(e,l),qt.add(Ys)),s=Math.max(s,i.distanceToSquared(qt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ze('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ze("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;let o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new cn(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));const a=[],c=[];for(let y=0;y<i.count;y++)a[y]=new X,c[y]=new X;const l=new X,u=new X,d=new X,f=new Ee,h=new Ee,p=new Ee,v=new X,m=new X;function g(y,b,N){l.fromBufferAttribute(i,y),u.fromBufferAttribute(i,b),d.fromBufferAttribute(i,N),f.fromBufferAttribute(r,y),h.fromBufferAttribute(r,b),p.fromBufferAttribute(r,N),u.sub(l),d.sub(l),h.sub(f),p.sub(f);const P=1/(h.x*p.y-p.x*h.y);isFinite(P)&&(v.copy(u).multiplyScalar(p.y).addScaledVector(d,-h.y).multiplyScalar(P),m.copy(d).multiplyScalar(h.x).addScaledVector(u,-p.x).multiplyScalar(P),a[y].add(v),a[b].add(v),a[N].add(v),c[y].add(m),c[b].add(m),c[N].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let y=0,b=S.length;y<b;++y){const N=S[y],P=N.start,D=N.count;for(let Y=P,R=P+D;Y<R;Y+=3)g(e.getX(Y+0),e.getX(Y+1),e.getX(Y+2))}const T=new X,x=new X,M=new X,E=new X;function L(y){M.fromBufferAttribute(s,y),E.copy(M);const b=a[y];T.copy(b),T.sub(M.multiplyScalar(M.dot(b))).normalize(),x.crossVectors(E,b);const P=x.dot(c[y])<0?-1:1;o.setXYZW(y,T.x,T.y,T.z,P)}for(let y=0,b=S.length;y<b;++y){const N=S[y],P=N.start,D=N.count;for(let Y=P,R=P+D;Y<R;Y+=3)L(e.getX(Y+0)),L(e.getX(Y+1)),L(e.getX(Y+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new cn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,h=i.count;f<h;f++)i.setXYZ(f,0,0,0);const s=new X,r=new X,o=new X,a=new X,c=new X,l=new X,u=new X,d=new X;if(e)for(let f=0,h=e.count;f<h;f+=3){const p=e.getX(f+0),v=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(t,p),r.fromBufferAttribute(t,v),o.fromBufferAttribute(t,m),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),a.fromBufferAttribute(i,p),c.fromBufferAttribute(i,v),l.fromBufferAttribute(i,m),a.add(u),c.add(u),l.add(u),i.setXYZ(p,a.x,a.y,a.z),i.setXYZ(v,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,h=t.count;f<h;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)qt.fromBufferAttribute(e,t),qt.normalize(),e.setXYZ(t,qt.x,qt.y,qt.z)}toNonIndexed(){function e(a,c){const l=a.array,u=a.itemSize,d=a.normalized,f=new l.constructor(c.length*u);let h=0,p=0;for(let v=0,m=c.length;v<m;v++){a.isInterleavedBufferAttribute?h=c[v]*a.data.stride+a.offset:h=c[v]*u;for(let g=0;g<u;g++)f[p++]=l[h++]}return new cn(f,u,d)}if(this.index===null)return Oe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new un,i=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=e(c,i);t.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let u=0,d=l.length;u<d;u++){const f=l[u],h=e(f,i);c.push(h)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let d=0,f=l.length;d<f;d++){const h=l[d];u.push(h.toJSON(e.data))}u.length>0&&(s[c]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const l in s){const u=s[l];this.setAttribute(l,u.clone(t))}const r=e.morphAttributes;for(const l in r){const u=[],d=r[l];for(let f=0,h=d.length;f<h;f++)u.push(d[f].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,u=o.length;l<u;l++){const d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class rm{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Su,this.updateRanges=[],this.version=0,this.uuid=Pn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Pn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Pn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const en=new X;class wo{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)en.fromBufferAttribute(this,t),en.applyMatrix4(e),this.setXYZ(t,en.x,en.y,en.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)en.fromBufferAttribute(this,t),en.applyNormalMatrix(e),this.setXYZ(t,en.x,en.y,en.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)en.fromBufferAttribute(this,t),en.transformDirection(e),this.setXYZ(t,en.x,en.y,en.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=Bn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=_t(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Bn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Bn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Bn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Bn(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=_t(t,this.array),i=_t(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=_t(t,this.array),i=_t(i,this.array),s=_t(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=_t(t,this.array),i=_t(i,this.array),s=_t(s,this.array),r=_t(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Qa("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new cn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new wo(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Qa("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let g_=0;class Hn extends os{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:g_++}),this.uuid=Pn(),this.name="",this.type="Material",this.blending=hr,this.side=Ri,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Nl,this.blendDst=kl,this.blendEquation=vs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Je(0,0,0),this.blendAlpha=0,this.depthFunc=yr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=sf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Os,this.stencilZFail=Os,this.stencilZPass=Os,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){Oe(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Oe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==hr&&(i.blending=this.blending),this.side!==Ri&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Nl&&(i.blendSrc=this.blendSrc),this.blendDst!==kl&&(i.blendDst=this.blendDst),this.blendEquation!==vs&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==yr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==sf&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Os&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Os&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Os&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Je().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Ee().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ee().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class bs extends Hn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Je(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Ks;const Vr=new X,$s=new X,Zs=new X,Js=new Ee,Gr=new Ee,om=new et,ea=new X,Wr=new X,ta=new X,xf=new Ee,Vc=new Ee,yf=new Ee;class dr extends Ct{constructor(e=new bs){if(super(),this.isSprite=!0,this.type="Sprite",Ks===void 0){Ks=new un;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new rm(t,5);Ks.setIndex([0,1,2,0,2,3]),Ks.setAttribute("position",new wo(i,3,0,!1)),Ks.setAttribute("uv",new wo(i,2,3,!1))}this.geometry=Ks,this.material=e,this.center=new Ee(.5,.5),this.count=1}raycast(e,t){e.camera===null&&Ze('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),$s.setFromMatrixScale(this.matrixWorld),om.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Zs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&$s.multiplyScalar(-Zs.z);const i=this.material.rotation;let s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));const o=this.center;na(ea.set(-.5,-.5,0),Zs,o,$s,s,r),na(Wr.set(.5,-.5,0),Zs,o,$s,s,r),na(ta.set(.5,.5,0),Zs,o,$s,s,r),xf.set(0,0),Vc.set(1,0),yf.set(1,1);let a=e.ray.intersectTriangle(ea,Wr,ta,!1,Vr);if(a===null&&(na(Wr.set(-.5,.5,0),Zs,o,$s,s,r),Vc.set(0,1),a=e.ray.intersectTriangle(ea,ta,Wr,!1,Vr),a===null))return;const c=e.ray.origin.distanceTo(Vr);c<e.near||c>e.far||t.push({distance:c,point:Vr.clone(),uv:Tn.getInterpolation(Vr,ea,Wr,ta,xf,Vc,yf,new Ee),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function na(n,e,t,i,s,r){Js.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(Gr.x=r*Js.x-s*Js.y,Gr.y=s*Js.x+r*Js.y):Gr.copy(Js),n.copy(e),n.x+=Gr.x,n.y+=Gr.y,n.applyMatrix4(om)}const vi=new X,Gc=new X,ia=new X,Bi=new X,Wc=new X,sa=new X,Xc=new X;class Vo{constructor(e=new X,t=new X(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,vi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=vi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(vi.copy(this.origin).addScaledVector(this.direction,t),vi.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Gc.copy(e).add(t).multiplyScalar(.5),ia.copy(t).sub(e).normalize(),Bi.copy(this.origin).sub(Gc);const r=e.distanceTo(t)*.5,o=-this.direction.dot(ia),a=Bi.dot(this.direction),c=-Bi.dot(ia),l=Bi.lengthSq(),u=Math.abs(1-o*o);let d,f,h,p;if(u>0)if(d=o*c-a,f=o*a-c,p=r*u,d>=0)if(f>=-p)if(f<=p){const v=1/u;d*=v,f*=v,h=d*(d+o*f+2*a)+f*(o*d+f+2*c)+l}else f=r,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*c)+l;else f=-r,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*c)+l;else f<=-p?(d=Math.max(0,-(-o*r+a)),f=d>0?-r:Math.min(Math.max(-r,-c),r),h=-d*d+f*(f+2*c)+l):f<=p?(d=0,f=Math.min(Math.max(-r,-c),r),h=f*(f+2*c)+l):(d=Math.max(0,-(o*r+a)),f=d>0?r:Math.min(Math.max(-r,-c),r),h=-d*d+f*(f+2*c)+l);else f=o>0?-r:r,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Gc).addScaledVector(ia,f),h}intersectSphere(e,t){vi.subVectors(e.center,this.origin);const i=vi.dot(this.direction),s=vi.dot(vi)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return l>=0?(i=(e.min.x-f.x)*l,s=(e.max.x-f.x)*l):(i=(e.max.x-f.x)*l,s=(e.min.x-f.x)*l),u>=0?(r=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(e.min.z-f.z)*d,c=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,c=(e.min.z-f.z)*d),i>c||a>s)||((a>i||i!==i)&&(i=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,vi)!==null}intersectTriangle(e,t,i,s,r){Wc.subVectors(t,e),sa.subVectors(i,e),Xc.crossVectors(Wc,sa);let o=this.direction.dot(Xc),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Bi.subVectors(this.origin,e);const c=a*this.direction.dot(sa.crossVectors(Bi,sa));if(c<0)return null;const l=a*this.direction.dot(Wc.cross(Bi));if(l<0||c+l>o)return null;const u=-a*Bi.dot(Xc);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Rn extends Hn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ts,this.combine=Up,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Sf=new et,ds=new Vo,ra=new di,bf=new X,oa=new X,aa=new X,ca=new X,qc=new X,la=new X,Mf=new X,ua=new X;class kt extends Ct{constructor(e=new un,t=new Rn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){la.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=a[c],d=r[c];u!==0&&(qc.fromBufferAttribute(d,e),o?la.addScaledVector(qc,u):la.addScaledVector(qc.sub(t),u))}t.add(la)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ra.copy(i.boundingSphere),ra.applyMatrix4(r),ds.copy(e.ray).recast(e.near),!(ra.containsPoint(ds.origin)===!1&&(ds.intersectSphere(ra,bf)===null||ds.origin.distanceToSquared(bf)>(e.far-e.near)**2))&&(Sf.copy(r).invert(),ds.copy(e.ray).applyMatrix4(Sf),!(i.boundingBox!==null&&ds.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ds)))}_computeIntersections(e,t,i){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,f=r.groups,h=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,v=f.length;p<v;p++){const m=f[p],g=o[m.materialIndex],S=Math.max(m.start,h.start),T=Math.min(a.count,Math.min(m.start+m.count,h.start+h.count));for(let x=S,M=T;x<M;x+=3){const E=a.getX(x),L=a.getX(x+1),y=a.getX(x+2);s=da(this,g,e,i,l,u,d,E,L,y),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const p=Math.max(0,h.start),v=Math.min(a.count,h.start+h.count);for(let m=p,g=v;m<g;m+=3){const S=a.getX(m),T=a.getX(m+1),x=a.getX(m+2);s=da(this,o,e,i,l,u,d,S,T,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let p=0,v=f.length;p<v;p++){const m=f[p],g=o[m.materialIndex],S=Math.max(m.start,h.start),T=Math.min(c.count,Math.min(m.start+m.count,h.start+h.count));for(let x=S,M=T;x<M;x+=3){const E=x,L=x+1,y=x+2;s=da(this,g,e,i,l,u,d,E,L,y),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const p=Math.max(0,h.start),v=Math.min(c.count,h.start+h.count);for(let m=p,g=v;m<g;m+=3){const S=m,T=m+1,x=m+2;s=da(this,o,e,i,l,u,d,S,T,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function __(n,e,t,i,s,r,o,a){let c;if(e.side===dn?c=i.intersectTriangle(o,r,s,!0,a):c=i.intersectTriangle(s,r,o,e.side===Ri,a),c===null)return null;ua.copy(a),ua.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(ua);return l<t.near||l>t.far?null:{distance:l,point:ua.clone(),object:n}}function da(n,e,t,i,s,r,o,a,c,l){n.getVertexPosition(a,oa),n.getVertexPosition(c,aa),n.getVertexPosition(l,ca);const u=__(n,e,t,i,oa,aa,ca,Mf);if(u){const d=new X;Tn.getBarycoord(Mf,oa,aa,ca,d),s&&(u.uv=Tn.getInterpolatedAttribute(s,a,c,l,d,new Ee)),r&&(u.uv1=Tn.getInterpolatedAttribute(r,a,c,l,d,new Ee)),o&&(u.normal=Tn.getInterpolatedAttribute(o,a,c,l,d,new X),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:c,c:l,normal:new X,materialIndex:0};Tn.getNormal(oa,aa,ca,f.normal),u.face=f,u.barycoord=d}return u}const Xr=new St,Tf=new St,Ef=new St,v_=new St,wf=new et,fa=new X,Yc=new di,Af=new et,Kc=new Vo;class x_ extends kt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=tf,this.bindMatrix=new et,this.bindMatrixInverse=new et,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new an),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,fa),this.boundingBox.expandByPoint(fa)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new di),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,fa),this.boundingSphere.expandByPoint(fa)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const i=this.material,s=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Yc.copy(this.boundingSphere),Yc.applyMatrix4(s),e.ray.intersectsSphere(Yc)!==!1&&(Af.copy(s).invert(),Kc.copy(e.ray).applyMatrix4(Af),!(this.boundingBox!==null&&Kc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Kc)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new St,t=this.geometry.attributes.skinWeight;for(let i=0,s=t.count;i<s;i++){e.fromBufferAttribute(t,i);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===tf?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===x0?this.bindMatrixInverse.copy(this.bindMatrix).invert():Oe("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,s=this.geometry;Tf.fromBufferAttribute(s.attributes.skinIndex,e),Ef.fromBufferAttribute(s.attributes.skinWeight,e),t.isVector4?(Xr.copy(t),t.set(0,0,0,0)):(Xr.set(...t,1),t.set(0,0,0)),Xr.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){const o=Ef.getComponent(r);if(o!==0){const a=Tf.getComponent(r);wf.multiplyMatrices(i.bones[a].matrixWorld,i.boneInverses[a]),t.addScaledVector(v_.copy(Xr).applyMatrix4(wf),o)}}return t.isVector4&&(t.w=Xr.w),t.applyMatrix4(this.bindMatrixInverse)}}class am extends Ct{constructor(){super(),this.isBone=!0,this.type="Bone"}}class md extends Gt{constructor(e=null,t=1,i=1,s,r,o,a,c,l=It,u=It,d,f){super(null,o,a,c,l,u,s,r,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Rf=new et,y_=new et;class gd{constructor(e=[],t=[]){this.uuid=Pn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Oe("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,s=this.bones.length;i<s;i++)this.boneInverses.push(new et)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new et;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:y_;Rf.multiplyMatrices(a,t[r]),Rf.toArray(i,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new gd(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new md(t,e,e,An,wn);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,s=e.bones.length;i<s;i++){const r=e.bones[i];let o=t[r];o===void 0&&(Oe("Skeleton: No bone found with UUID:",r),o=new am),this.bones.push(o),this.boneInverses.push(new et().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let s=0,r=t.length;s<r;s++){const o=t[s];e.bones.push(o.uuid);const a=i[s];e.boneInverses.push(a.toArray())}return e}}class Mu extends cn{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const js=new et,Cf=new et,ha=[],Pf=new an,S_=new et,qr=new kt,Yr=new di;class b_ extends kt{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Mu(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,S_)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new an),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,js),Pf.copy(e.boundingBox).applyMatrix4(js),this.boundingBox.union(Pf)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new di),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,js),Yr.copy(e.boundingSphere).applyMatrix4(js),this.boundingSphere.union(Yr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,t){const i=this.matrixWorld,s=this.count;if(qr.geometry=this.geometry,qr.material=this.material,qr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Yr.copy(this.boundingSphere),Yr.applyMatrix4(i),e.ray.intersectsSphere(Yr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,js),Cf.multiplyMatrices(i,js),qr.matrixWorld=Cf,qr.raycast(e,ha);for(let o=0,a=ha.length;o<a;o++){const c=ha[o];c.instanceId=r,c.object=this,t.push(c)}ha.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Mu(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new md(new Float32Array(s*this.count),s,this.count,sd,wn));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<i.length;l++)o+=i[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=s*e;return r[c]=a,r.set(i,c+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const $c=new X,M_=new X,T_=new Qe;class Gi{constructor(e=new X(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=$c.subVectors(i,t).cross(M_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){const s=e.delta($c),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||T_.getNormalMatrix(e),s=this.coplanarPoint($c).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const fs=new di,E_=new Ee(.5,.5),pa=new X;class _d{constructor(e=new Gi,t=new Gi,i=new Gi,s=new Gi,r=new Gi,o=new Gi){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=si,i=!1){const s=this.planes,r=e.elements,o=r[0],a=r[1],c=r[2],l=r[3],u=r[4],d=r[5],f=r[6],h=r[7],p=r[8],v=r[9],m=r[10],g=r[11],S=r[12],T=r[13],x=r[14],M=r[15];if(s[0].setComponents(l-o,h-u,g-p,M-S).normalize(),s[1].setComponents(l+o,h+u,g+p,M+S).normalize(),s[2].setComponents(l+a,h+d,g+v,M+T).normalize(),s[3].setComponents(l-a,h-d,g-v,M-T).normalize(),i)s[4].setComponents(c,f,m,x).normalize(),s[5].setComponents(l-c,h-f,g-m,M-x).normalize();else if(s[4].setComponents(l-c,h-f,g-m,M-x).normalize(),t===si)s[5].setComponents(l+c,h+f,g+m,M+x).normalize();else if(t===To)s[5].setComponents(c,f,m,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),fs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),fs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(fs)}intersectsSprite(e){fs.center.set(0,0,0);const t=E_.distanceTo(e.center);return fs.radius=.7071067811865476+t,fs.applyMatrix4(e.matrixWorld),this.intersectsSphere(fs)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(pa.x=s.normal.x>0?e.max.x:e.min.x,pa.y=s.normal.y>0?e.max.y:e.min.y,pa.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(pa)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class cm extends Hn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Je(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ec=new X,tc=new X,If=new et,Kr=new Vo,ma=new di,Zc=new X,Lf=new X;class vd extends Ct{constructor(e=new un,t=new cm){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)ec.fromBufferAttribute(t,s-1),tc.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=ec.distanceTo(tc);e.setAttribute("lineDistance",new Yt(i,1))}else Oe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ma.copy(i.boundingSphere),ma.applyMatrix4(s),ma.radius+=r,e.ray.intersectsSphere(ma)===!1)return;If.copy(s).invert(),Kr.copy(e.ray).applyMatrix4(If);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,u=i.index,f=i.attributes.position;if(u!==null){const h=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let v=h,m=p-1;v<m;v+=l){const g=u.getX(v),S=u.getX(v+1),T=ga(this,e,Kr,c,g,S,v);T&&t.push(T)}if(this.isLineLoop){const v=u.getX(p-1),m=u.getX(h),g=ga(this,e,Kr,c,v,m,p-1);g&&t.push(g)}}else{const h=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let v=h,m=p-1;v<m;v+=l){const g=ga(this,e,Kr,c,v,v+1,v);g&&t.push(g)}if(this.isLineLoop){const v=ga(this,e,Kr,c,p-1,h,p-1);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function ga(n,e,t,i,s,r,o){const a=n.geometry.attributes.position;if(ec.fromBufferAttribute(a,s),tc.fromBufferAttribute(a,r),t.distanceSqToSegment(ec,tc,Zc,Lf)>i)return;Zc.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(Zc);if(!(l<e.near||l>e.far))return{distance:l,point:Lf.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}const Df=new X,Nf=new X;class w_ extends vd{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)Df.fromBufferAttribute(t,s),Nf.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Df.distanceTo(Nf);e.setAttribute("lineDistance",new Yt(i,1))}else Oe("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class A_ extends vd{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class lm extends Hn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Je(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const kf=new et,Tu=new Vo,_a=new di,va=new X;class R_ extends Ct{constructor(e=new un,t=new lm){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),_a.copy(i.boundingSphere),_a.applyMatrix4(s),_a.radius+=r,e.ray.intersectsSphere(_a)===!1)return;kf.copy(s).invert(),Tu.copy(e.ray).applyMatrix4(kf);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=i.index,d=i.attributes.position;if(l!==null){const f=Math.max(0,o.start),h=Math.min(l.count,o.start+o.count);for(let p=f,v=h;p<v;p++){const m=l.getX(p);va.fromBufferAttribute(d,m),Uf(va,m,c,s,e,t,this)}}else{const f=Math.max(0,o.start),h=Math.min(d.count,o.start+o.count);for(let p=f,v=h;p<v;p++)va.fromBufferAttribute(d,p),Uf(va,p,c,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Uf(n,e,t,i,s,r,o){const a=Tu.distanceSqToPoint(n);if(a<t){const c=new X;Tu.closestPointToPoint(n,c),c.applyMatrix4(i);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class um extends Gt{constructor(e=[],t=ws,i,s,r,o,a,c,l,u){super(e,t,i,s,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class C_ extends Gt{constructor(e,t,i,s,r,o,a,c,l){super(e,t,i,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Tr extends Gt{constructor(e,t,i=ci,s,r,o,a=It,c=It,l,u=Pi,d=1){if(u!==Pi&&u!==Ss)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:d};super(f,s,r,o,a,c,u,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new fd(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class P_ extends Tr{constructor(e,t=ci,i=ws,s,r,o=It,a=It,c,l=Pi){const u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,i,s,r,o,a,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class dm extends Gt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class ns extends un{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],u=[],d=[];let f=0,h=0;p("z","y","x",-1,-1,i,t,e,o,r,0),p("z","y","x",1,-1,i,t,-e,o,r,1),p("x","z","y",1,1,e,i,t,s,o,2),p("x","z","y",1,-1,e,i,-t,s,o,3),p("x","y","z",1,-1,e,t,i,s,r,4),p("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new Yt(l,3)),this.setAttribute("normal",new Yt(u,3)),this.setAttribute("uv",new Yt(d,2));function p(v,m,g,S,T,x,M,E,L,y,b){const N=x/L,P=M/y,D=x/2,Y=M/2,R=E/2,A=L+1,k=y+1;let I=0,O=0;const F=new X;for(let G=0;G<k;G++){const U=G*P-Y;for(let $=0;$<A;$++){const ue=$*N-D;F[v]=ue*S,F[m]=U*T,F[g]=R,l.push(F.x,F.y,F.z),F[v]=0,F[m]=0,F[g]=E>0?1:-1,u.push(F.x,F.y,F.z),d.push($/L),d.push(1-G/y),I+=1}}for(let G=0;G<y;G++)for(let U=0;U<L;U++){const $=f+U+A*G,ue=f+U+A*(G+1),we=f+(U+1)+A*(G+1),Le=f+(U+1)+A*G;c.push($,ue,Le),c.push(ue,we,Le),O+=6}a.addGroup(h,O,b),h+=O,f+=I}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ns(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class fi{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Oe("Curve: .getPoint() not implemented.")}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const i=this.getLengths();let s=0;const r=i.length;let o;t?o=t:o=e*i[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=i[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,i[s]===o)return s/(r-1);const u=i[s],f=i[s+1]-u,h=(o-u)/f;return(s+h)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),c=t||(o.isVector2?new Ee:new X);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){const i=new X,s=[],r=[],o=[],a=new X,c=new et;for(let h=0;h<=e;h++){const p=h/e;s[h]=this.getTangentAt(p,new X)}r[0]=new X,o[0]=new X;let l=Number.MAX_VALUE;const u=Math.abs(s[0].x),d=Math.abs(s[0].y),f=Math.abs(s[0].z);u<=l&&(l=u,i.set(1,0,0)),d<=l&&(l=d,i.set(0,1,0)),f<=l&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let h=1;h<=e;h++){if(r[h]=r[h-1].clone(),o[h]=o[h-1].clone(),a.crossVectors(s[h-1],s[h]),a.length()>Number.EPSILON){a.normalize();const p=Math.acos(ot(s[h-1].dot(s[h]),-1,1));r[h].applyMatrix4(c.makeRotationAxis(a,p))}o[h].crossVectors(s[h],r[h])}if(t===!0){let h=Math.acos(ot(r[0].dot(r[e]),-1,1));h/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(h=-h);for(let p=1;p<=e;p++)r[p].applyMatrix4(c.makeRotationAxis(s[p],h*p)),o[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class xd extends fi{constructor(e=0,t=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new Ee){const i=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+e*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),f=c-this.aX,h=l-this.aY;c=f*u-h*d+this.aX,l=f*d+h*u+this.aY}return i.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class I_ extends xd{constructor(e,t,i,s,r,o){super(e,t,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function yd(){let n=0,e=0,t=0,i=0;function s(r,o,a,c){n=r,e=a,t=-3*r+3*o-2*a-c,i=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,u,d){let f=(o-r)/l-(a-r)/(l+u)+(a-o)/u,h=(a-o)/u-(c-o)/(u+d)+(c-a)/d;f*=u,h*=u,s(o,a,f,h)},calc:function(r){const o=r*r,a=o*r;return n+e*r+t*o+i*a}}}const Of=new X,Ff=new X,Jc=new yd,jc=new yd,Qc=new yd;class L_ extends fi{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new X){const i=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,u;this.closed||a>0?l=s[(a-1)%r]:(Ff.subVectors(s[0],s[1]).add(s[0]),l=Ff);const d=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(Of.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Of),this.curveType==="centripetal"||this.curveType==="chordal"){const h=this.curveType==="chordal"?.5:.25;let p=Math.pow(l.distanceToSquared(d),h),v=Math.pow(d.distanceToSquared(f),h),m=Math.pow(f.distanceToSquared(u),h);v<1e-4&&(v=1),p<1e-4&&(p=v),m<1e-4&&(m=v),Jc.initNonuniformCatmullRom(l.x,d.x,f.x,u.x,p,v,m),jc.initNonuniformCatmullRom(l.y,d.y,f.y,u.y,p,v,m),Qc.initNonuniformCatmullRom(l.z,d.z,f.z,u.z,p,v,m)}else this.curveType==="catmullrom"&&(Jc.initCatmullRom(l.x,d.x,f.x,u.x,this.tension),jc.initCatmullRom(l.y,d.y,f.y,u.y,this.tension),Qc.initCatmullRom(l.z,d.z,f.z,u.z,this.tension));return i.set(Jc.calc(c),jc.calc(c),Qc.calc(c)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new X().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Bf(n,e,t,i,s){const r=(i-e)*.5,o=(s-t)*.5,a=n*n,c=n*a;return(2*t-2*i+r+o)*c+(-3*t+3*i-2*r-o)*a+r*n+t}function D_(n,e){const t=1-n;return t*t*e}function N_(n,e){return 2*(1-n)*n*e}function k_(n,e){return n*n*e}function po(n,e,t,i){return D_(n,e)+N_(n,t)+k_(n,i)}function U_(n,e){const t=1-n;return t*t*t*e}function O_(n,e){const t=1-n;return 3*t*t*n*e}function F_(n,e){return 3*(1-n)*n*n*e}function B_(n,e){return n*n*n*e}function mo(n,e,t,i,s){return U_(n,e)+O_(n,t)+F_(n,i)+B_(n,s)}class fm extends fi{constructor(e=new Ee,t=new Ee,i=new Ee,s=new Ee){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new Ee){const i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(mo(e,s.x,r.x,o.x,a.x),mo(e,s.y,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class z_ extends fi{constructor(e=new X,t=new X,i=new X,s=new X){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new X){const i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(mo(e,s.x,r.x,o.x,a.x),mo(e,s.y,r.y,o.y,a.y),mo(e,s.z,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class hm extends fi{constructor(e=new Ee,t=new Ee){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Ee){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Ee){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class H_ extends fi{constructor(e=new X,t=new X){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new X){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new X){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class pm extends fi{constructor(e=new Ee,t=new Ee,i=new Ee){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new Ee){const i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(po(e,s.x,r.x,o.x),po(e,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class V_ extends fi{constructor(e=new X,t=new X,i=new X){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new X){const i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(po(e,s.x,r.x,o.x),po(e,s.y,r.y,o.y),po(e,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class mm extends fi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Ee){const i=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],u=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return i.set(Bf(a,c.x,l.x,u.x,d.x),Bf(a,c.y,l.y,u.y,d.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new Ee().fromArray(s))}return this}}var zf=Object.freeze({__proto__:null,ArcCurve:I_,CatmullRomCurve3:L_,CubicBezierCurve:fm,CubicBezierCurve3:z_,EllipseCurve:xd,LineCurve:hm,LineCurve3:H_,QuadraticBezierCurve:pm,QuadraticBezierCurve3:V_,SplineCurve:mm});class G_ extends fi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new zf[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=i){const o=s[r]-i,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){const u=c[l];i&&i.equals(u)||(t.push(u),i=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const s=e.curves[t];this.curves.push(new zf[s.type]().fromJSON(s))}return this}}class Eu extends G_{constructor(e){super(),this.type="Path",this.currentPoint=new Ee,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new hm(this.currentPoint.clone(),new Ee(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){const r=new pm(this.currentPoint.clone(),new Ee(e,t),new Ee(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,o){const a=new fm(this.currentPoint.clone(),new Ee(e,t),new Ee(i,s),new Ee(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new mm(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,i,s,r,o),this}absarc(e,t,i,s,r,o){return this.absellipse(e,t,i,i,s,r,o),this}ellipse(e,t,i,s,r,o,a,c){const l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+l,t+u,i,s,r,o,a,c),this}absellipse(e,t,i,s,r,o,a,c){const l=new xd(e,t,i,s,r,o,a,c);if(this.curves.length>0){const d=l.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(l);const u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class gm extends Eu{constructor(e){super(e),this.uuid=Pn(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const s=e.holes[t];this.holes.push(new Eu().fromJSON(s))}return this}}function W_(n,e,t=2){const i=e&&e.length,s=i?e[0]*t:n.length;let r=_m(n,0,s,t,!0);const o=[];if(!r||r.next===r.prev)return o;let a,c,l;if(i&&(r=$_(n,e,r,t)),n.length>80*t){a=n[0],c=n[1];let u=a,d=c;for(let f=t;f<s;f+=t){const h=n[f],p=n[f+1];h<a&&(a=h),p<c&&(c=p),h>u&&(u=h),p>d&&(d=p)}l=Math.max(u-a,d-c),l=l!==0?32767/l:0}return Ao(r,o,t,a,c,l,0),o}function _m(n,e,t,i,s){let r;if(s===ov(n,e,t,i)>0)for(let o=e;o<t;o+=i)r=Hf(o/i|0,n[o],n[o+1],r);else for(let o=t-i;o>=e;o-=i)r=Hf(o/i|0,n[o],n[o+1],r);return r&&Er(r,r.next)&&(Co(r),r=r.next),r}function Rs(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(Er(t,t.next)||Pt(t.prev,t,t.next)===0)){if(Co(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function Ao(n,e,t,i,s,r,o){if(!n)return;!o&&r&&ev(n,i,s,r);let a=n;for(;n.prev!==n.next;){const c=n.prev,l=n.next;if(r?q_(n,i,s,r):X_(n)){e.push(c.i,n.i,l.i),Co(n),n=l.next,a=l.next;continue}if(n=l,n===a){o?o===1?(n=Y_(Rs(n),e),Ao(n,e,t,i,s,r,2)):o===2&&K_(n,e,t,i,s,r):Ao(Rs(n),e,t,i,s,r,1);break}}}function X_(n){const e=n.prev,t=n,i=n.next;if(Pt(e,t,i)>=0)return!1;const s=e.x,r=t.x,o=i.x,a=e.y,c=t.y,l=i.y,u=Math.min(s,r,o),d=Math.min(a,c,l),f=Math.max(s,r,o),h=Math.max(a,c,l);let p=i.next;for(;p!==e;){if(p.x>=u&&p.x<=f&&p.y>=d&&p.y<=h&&co(s,a,r,c,o,l,p.x,p.y)&&Pt(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function q_(n,e,t,i){const s=n.prev,r=n,o=n.next;if(Pt(s,r,o)>=0)return!1;const a=s.x,c=r.x,l=o.x,u=s.y,d=r.y,f=o.y,h=Math.min(a,c,l),p=Math.min(u,d,f),v=Math.max(a,c,l),m=Math.max(u,d,f),g=wu(h,p,e,t,i),S=wu(v,m,e,t,i);let T=n.prevZ,x=n.nextZ;for(;T&&T.z>=g&&x&&x.z<=S;){if(T.x>=h&&T.x<=v&&T.y>=p&&T.y<=m&&T!==s&&T!==o&&co(a,u,c,d,l,f,T.x,T.y)&&Pt(T.prev,T,T.next)>=0||(T=T.prevZ,x.x>=h&&x.x<=v&&x.y>=p&&x.y<=m&&x!==s&&x!==o&&co(a,u,c,d,l,f,x.x,x.y)&&Pt(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;T&&T.z>=g;){if(T.x>=h&&T.x<=v&&T.y>=p&&T.y<=m&&T!==s&&T!==o&&co(a,u,c,d,l,f,T.x,T.y)&&Pt(T.prev,T,T.next)>=0)return!1;T=T.prevZ}for(;x&&x.z<=S;){if(x.x>=h&&x.x<=v&&x.y>=p&&x.y<=m&&x!==s&&x!==o&&co(a,u,c,d,l,f,x.x,x.y)&&Pt(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function Y_(n,e){let t=n;do{const i=t.prev,s=t.next.next;!Er(i,s)&&xm(i,t,t.next,s)&&Ro(i,s)&&Ro(s,i)&&(e.push(i.i,t.i,s.i),Co(t),Co(t.next),t=n=s),t=t.next}while(t!==n);return Rs(t)}function K_(n,e,t,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&iv(o,a)){let c=ym(o,a);o=Rs(o,o.next),c=Rs(c,c.next),Ao(o,e,t,i,s,r,0),Ao(c,e,t,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function $_(n,e,t,i){const s=[];for(let r=0,o=e.length;r<o;r++){const a=e[r]*i,c=r<o-1?e[r+1]*i:n.length,l=_m(n,a,c,i,!1);l===l.next&&(l.steiner=!0),s.push(nv(l))}s.sort(Z_);for(let r=0;r<s.length;r++)t=J_(s[r],t);return t}function Z_(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){const i=(n.next.y-n.y)/(n.next.x-n.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=i-s}return t}function J_(n,e){const t=j_(n,e);if(!t)return e;const i=ym(t,n);return Rs(i,i.next),Rs(t,t.next)}function j_(n,e){let t=e;const i=n.x,s=n.y;let r=-1/0,o;if(Er(n,t))return t;do{if(Er(n,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){const d=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=i&&d>r&&(r=d,o=t.x<t.next.x?t:t.next,d===i))return o}t=t.next}while(t!==e);if(!o)return null;const a=o,c=o.x,l=o.y;let u=1/0;t=o;do{if(i>=t.x&&t.x>=c&&i!==t.x&&vm(s<l?i:r,s,c,l,s<l?r:i,s,t.x,t.y)){const d=Math.abs(s-t.y)/(i-t.x);Ro(t,n)&&(d<u||d===u&&(t.x>o.x||t.x===o.x&&Q_(o,t)))&&(o=t,u=d)}t=t.next}while(t!==a);return o}function Q_(n,e){return Pt(n.prev,n,e.prev)<0&&Pt(e.next,n,n.next)<0}function ev(n,e,t,i){let s=n;do s.z===0&&(s.z=wu(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,tv(s)}function tv(n){let e,t=1;do{let i=n,s;n=null;let r=null;for(e=0;i;){e++;let o=i,a=0;for(let l=0;l<t&&(a++,o=o.nextZ,!!o);l++);let c=t;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||i.z<=o.z)?(s=i,i=i.nextZ,a--):(s=o,o=o.nextZ,c--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=o}r.nextZ=null,t*=2}while(e>1);return n}function wu(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function nv(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function vm(n,e,t,i,s,r,o,a){return(s-o)*(e-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(i-a)}function co(n,e,t,i,s,r,o,a){return!(n===o&&e===a)&&vm(n,e,t,i,s,r,o,a)}function iv(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!sv(n,e)&&(Ro(n,e)&&Ro(e,n)&&rv(n,e)&&(Pt(n.prev,n,e.prev)||Pt(n,e.prev,e))||Er(n,e)&&Pt(n.prev,n,n.next)>0&&Pt(e.prev,e,e.next)>0)}function Pt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function Er(n,e){return n.x===e.x&&n.y===e.y}function xm(n,e,t,i){const s=ya(Pt(n,e,t)),r=ya(Pt(n,e,i)),o=ya(Pt(t,i,n)),a=ya(Pt(t,i,e));return!!(s!==r&&o!==a||s===0&&xa(n,t,e)||r===0&&xa(n,i,e)||o===0&&xa(t,n,i)||a===0&&xa(t,e,i))}function xa(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function ya(n){return n>0?1:n<0?-1:0}function sv(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&xm(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function Ro(n,e){return Pt(n.prev,n,n.next)<0?Pt(n,e,n.next)>=0&&Pt(n,n.prev,e)>=0:Pt(n,e,n.prev)<0||Pt(n,n.next,e)<0}function rv(n,e){let t=n,i=!1;const s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function ym(n,e){const t=Au(n.i,n.x,n.y),i=Au(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function Hf(n,e,t,i){const s=Au(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function Co(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Au(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function ov(n,e,t,i){let s=0;for(let r=e,o=t-i;r<t;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}class av{static triangulate(e,t,i=2){return W_(e,t,i)}}class go{static area(e){const t=e.length;let i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return go.area(e)<0}static triangulateShape(e,t){const i=[],s=[],r=[];Vf(e),Gf(i,e);let o=e.length;t.forEach(Vf);for(let c=0;c<t.length;c++)s.push(o),o+=t[c].length,Gf(i,t[c]);const a=av.triangulate(i,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}}function Vf(n){const e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function Gf(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class is extends un{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(i),c=Math.floor(s),l=a+1,u=c+1,d=e/a,f=t/c,h=[],p=[],v=[],m=[];for(let g=0;g<u;g++){const S=g*f-o;for(let T=0;T<l;T++){const x=T*d-r;p.push(x,-S,0),v.push(0,0,1),m.push(T/a),m.push(1-g/c)}}for(let g=0;g<c;g++)for(let S=0;S<a;S++){const T=S+l*g,x=S+l*(g+1),M=S+1+l*(g+1),E=S+1+l*g;h.push(T,x,E),h.push(x,M,E)}this.setIndex(h),this.setAttribute("position",new Yt(p,3)),this.setAttribute("normal",new Yt(v,3)),this.setAttribute("uv",new Yt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new is(e.width,e.height,e.widthSegments,e.heightSegments)}}class Sd extends un{constructor(e=.5,t=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);const a=[],c=[],l=[],u=[];let d=e;const f=(t-e)/s,h=new X,p=new Ee;for(let v=0;v<=s;v++){for(let m=0;m<=i;m++){const g=r+m/i*o;h.x=d*Math.cos(g),h.y=d*Math.sin(g),c.push(h.x,h.y,h.z),l.push(0,0,1),p.x=(h.x/t+1)/2,p.y=(h.y/t+1)/2,u.push(p.x,p.y)}d+=f}for(let v=0;v<s;v++){const m=v*(i+1);for(let g=0;g<i;g++){const S=g+m,T=S,x=S+i+1,M=S+i+2,E=S+1;a.push(T,x,E),a.push(x,M,E)}}this.setIndex(a),this.setAttribute("position",new Yt(c,3)),this.setAttribute("normal",new Yt(l,3)),this.setAttribute("uv",new Yt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Sd(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class bd extends un{constructor(e=new gm([new Ee(0,.5),new Ee(-.5,-.5),new Ee(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const i=[],s=[],r=[],o=[];let a=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let u=0;u<e.length;u++)l(e[u]),this.addGroup(a,c,u),a+=c,c=0;this.setIndex(i),this.setAttribute("position",new Yt(s,3)),this.setAttribute("normal",new Yt(r,3)),this.setAttribute("uv",new Yt(o,2));function l(u){const d=s.length/3,f=u.extractPoints(t);let h=f.shape;const p=f.holes;go.isClockWise(h)===!1&&(h=h.reverse());for(let m=0,g=p.length;m<g;m++){const S=p[m];go.isClockWise(S)===!0&&(p[m]=S.reverse())}const v=go.triangulateShape(h,p);for(let m=0,g=p.length;m<g;m++){const S=p[m];h=h.concat(S)}for(let m=0,g=h.length;m<g;m++){const S=h[m];s.push(S.x,S.y,0),r.push(0,0,1),o.push(S.x,S.y)}for(let m=0,g=v.length;m<g;m++){const S=v[m],T=S[0]+d,x=S[1]+d,M=S[2]+d;i.push(T,x,M),c+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return cv(t,e)}static fromJSON(e,t){const i=[];for(let s=0,r=e.shapes.length;s<r;s++){const o=t[e.shapes[s]];i.push(o)}return new bd(i,e.curveSegments)}}function cv(n,e){if(e.shapes=[],Array.isArray(n))for(let t=0,i=n.length;t<i;t++){const s=n[t];e.shapes.push(s.uuid)}else e.shapes.push(n.uuid);return e}function wr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];if(Wf(s))s.isRenderTargetTexture?(Oe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(Wf(s[0])){const r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[t][i]=r}else e[t][i]=s.slice();else e[t][i]=s}}return e}function tn(n){const e={};for(let t=0;t<n.length;t++){const i=wr(n[t]);for(const s in i)e[s]=i[s]}return e}function Wf(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function lv(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Sm(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ct.workingColorSpace}const uv={clone:wr,merge:tn};var dv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,fv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class li extends Hn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=dv,this.fragmentShader=fv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=wr(e.uniforms),this.uniformsGroups=lv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const i in e.uniforms){const s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=t[s.value]||null;break;case"c":this.uniforms[i].value=new Je().setHex(s.value);break;case"v2":this.uniforms[i].value=new Ee().fromArray(s.value);break;case"v3":this.uniforms[i].value=new X().fromArray(s.value);break;case"v4":this.uniforms[i].value=new St().fromArray(s.value);break;case"m3":this.uniforms[i].value=new Qe().fromArray(s.value);break;case"m4":this.uniforms[i].value=new et().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class hv extends li{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Ts extends Hn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Je(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=yu,this.normalScale=new Ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ts,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class hi extends Ts{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ee(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ot(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Je(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Je(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Je(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class pv extends Hn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=T0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class mv extends Hn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function Sa(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function gv(n){function e(s,r){return n[s]-n[r]}const t=n.length,i=new Array(t);for(let s=0;s!==t;++s)i[s]=s;return i.sort(e),i}function Xf(n,e,t){const i=n.length,s=new n.constructor(i);for(let r=0,o=0;o!==i;++r){const a=t[r]*e;for(let c=0;c!==e;++c)s[o++]=n[a+c]}return s}function _v(n,e,t,i){let s=1,r=n[0];for(;r!==void 0&&r[i]===void 0;)r=n[s++];if(r===void 0)return;let o=r[i];if(o!==void 0)if(Array.isArray(o))do o=r[i],o!==void 0&&(e.push(r.time),t.push(...o)),r=n[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[i],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=n[s++];while(r!==void 0);else do o=r[i],o!==void 0&&(e.push(r.time),t.push(o)),r=n[s++];while(r!==void 0)}class Ir{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,s=t[i],r=t[i-1];e:{t:{let o;n:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break t}o=t.length;break n}if(!(e>=r)){const a=t[1];e<a&&(i=2,r=a);for(let c=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(s=r,r=t[--i-1],e>=r)break t}o=i,i=0;break n}break e}for(;i<o;){const a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}}class vv extends Ir{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:lr,endingEnd:lr}}intervalChanged_(e,t,i){const s=this.parameterPositions;let r=e-2,o=e+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case ur:r=e,a=2*t-i;break;case Ja:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(c===void 0)switch(this.getSettings_().endingEnd){case ur:o=e,c=2*i-t;break;case Ja:o=1,c=i+s[1]-s[0];break;default:o=e-1,c=t}const l=(i-t)*.5,u=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-i),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,i,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,h=this._weightNext,p=(i-t)/(s-t),v=p*p,m=v*p,g=-f*m+2*f*v-f*p,S=(1+f)*m+(-1.5-2*f)*v+(-.5+f)*p+1,T=(-1-h)*m+(1.5+h)*v+.5*p,x=h*m-h*v;for(let M=0;M!==a;++M)r[M]=g*o[u+M]+S*o[l+M]+T*o[c+M]+x*o[d+M];return r}}class bm extends Ir{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=(i-t)/(s-t),d=1-u;for(let f=0;f!==a;++f)r[f]=o[l+f]*d+o[c+f]*u;return r}}class xv extends Ir{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class yv extends Ir{interpolate_(e,t,i,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=this.inTangents,d=this.outTangents;if(!u||!d){const p=(i-t)/(s-t),v=1-p;for(let m=0;m!==a;++m)r[m]=o[l+m]*v+o[c+m]*p;return r}const f=a*2,h=e-1;for(let p=0;p!==a;++p){const v=o[l+p],m=o[c+p],g=h*f+p*2,S=d[g],T=d[g+1],x=e*f+p*2,M=u[x],E=u[x+1];let L=(i-t)/(s-t),y,b,N,P,D;for(let Y=0;Y<8;Y++){y=L*L,b=y*L,N=1-L,P=N*N,D=P*N;const A=D*t+3*P*L*S+3*N*y*M+b*s-i;if(Math.abs(A)<1e-10)break;const k=3*P*(S-t)+6*N*L*(M-S)+3*y*(s-M);if(Math.abs(k)<1e-10)break;L=L-A/k,L=Math.max(0,Math.min(1,L))}r[p]=D*v+3*P*L*T+3*N*y*E+b*m}return r}}class Yn{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Sa(t,this.TimeBufferType),this.values=Sa(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Sa(e.times,Array),values:Sa(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new xv(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new bm(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new vv(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){const t=new yv(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case bo:t=this.InterpolantFactoryMethodDiscrete;break;case Mo:t=this.InterpolantFactoryMethodLinear;break;case Tc:t=this.InterpolantFactoryMethodSmooth;break;case nf:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Oe("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return bo;case this.InterpolantFactoryMethodLinear:return Mo;case this.InterpolantFactoryMethodSmooth:return Tc;case this.InterpolantFactoryMethodBezier:return nf}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){const i=this.times,s=i.length;let r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(Ze("KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,s=this.values,r=i.length;r===0&&(Ze("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const c=i[a];if(typeof c=="number"&&isNaN(c)){Ze("KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){Ze("KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(s!==void 0&&D0(s))for(let a=0,c=s.length;a!==c;++a){const l=s[a];if(isNaN(l)){Ze("KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Tc,r=e.length-1;let o=1;for(let a=1;a<r;++a){let c=!1;const l=e[a],u=e[a+1];if(l!==u&&(a!==1||l!==e[0]))if(s)c=!0;else{const d=a*i,f=d-i,h=d+i;for(let p=0;p!==i;++p){const v=t[d+p];if(v!==t[f+p]||v!==t[h+p]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];const d=a*i,f=o*i;for(let h=0;h!==i;++h)t[f+h]=t[d+h]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,c=o*i,l=0;l!==i;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}Yn.prototype.ValueTypeName="";Yn.prototype.TimeBufferType=Float32Array;Yn.prototype.ValueBufferType=Float32Array;Yn.prototype.DefaultInterpolation=Mo;class Lr extends Yn{constructor(e,t,i){super(e,t,i)}}Lr.prototype.ValueTypeName="bool";Lr.prototype.ValueBufferType=Array;Lr.prototype.DefaultInterpolation=bo;Lr.prototype.InterpolantFactoryMethodLinear=void 0;Lr.prototype.InterpolantFactoryMethodSmooth=void 0;class Mm extends Yn{constructor(e,t,i,s){super(e,t,i,s)}}Mm.prototype.ValueTypeName="color";class Po extends Yn{constructor(e,t,i,s){super(e,t,i,s)}}Po.prototype.ValueTypeName="number";class Sv extends Ir{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(i-t)/(s-t);let l=e*a;for(let u=l+a;l!==u;l+=4)In.slerpFlat(r,0,o,l-a,o,l,c);return r}}class Io extends Yn{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new Sv(this.times,this.values,this.getValueSize(),e)}}Io.prototype.ValueTypeName="quaternion";Io.prototype.InterpolantFactoryMethodSmooth=void 0;class Dr extends Yn{constructor(e,t,i){super(e,t,i)}}Dr.prototype.ValueTypeName="string";Dr.prototype.ValueBufferType=Array;Dr.prototype.DefaultInterpolation=bo;Dr.prototype.InterpolantFactoryMethodLinear=void 0;Dr.prototype.InterpolantFactoryMethodSmooth=void 0;class nc extends Yn{constructor(e,t,i,s){super(e,t,i,s)}}nc.prototype.ValueTypeName="vector";class ic{constructor(e="",t=-1,i=[],s=cd){this.name=e,this.tracks=i,this.duration=t,this.blendMode=s,this.uuid=Pn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,s=1/(e.fps||1);for(let o=0,a=i.length;o!==a;++o)t.push(Mv(i[o]).scale(s));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){const t=[],i=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,o=i.length;r!==o;++r)t.push(Yn.toJSON(i[r]));return s}static CreateFromMorphTargetSequence(e,t,i,s){const r=t.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);const u=gv(c);c=Xf(c,1,u),l=Xf(l,1,u),!s&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new Po(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/i))}return new this(e,-1,o)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const s=e;i=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<i.length;s++)if(i[s].name===t)return i[s];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){const l=e[a],u=l.name.match(r);if(u&&u.length>1){const d=u[1];let f=s[d];f||(s[d]=f=[]),f.push(l)}}const o=[];for(const a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,i));return o}resetDuration(){const e=this.tracks;let t=0;for(let i=0,s=e.length;i!==s;++i){const r=this.tracks[i];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let i=0;i<this.tracks.length;i++)e.push(this.tracks[i].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function bv(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Po;case"vector":case"vector2":case"vector3":case"vector4":return nc;case"color":return Mm;case"quaternion":return Io;case"bool":case"boolean":return Lr;case"string":return Dr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function Mv(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=bv(n.type);if(n.times===void 0){const t=[],i=[];_v(n.keys,t,i,"value"),n.times=t,n.values=i}return e.parse!==void 0?e.parse(n):new e(n.name,n.times,n.values,n.interpolation)}const Mi={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(qf(n)||(this.files[n]=e))},get:function(n){if(this.enabled!==!1&&!qf(n))return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};function qf(n){try{const e=n.slice(n.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class Tv{constructor(e,t,i){const s=this;let r=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,d){return l.push(u,d),this},this.removeHandler=function(u){const d=l.indexOf(u);return d!==-1&&l.splice(d,2),this},this.getHandler=function(u){for(let d=0,f=l.length;d<f;d+=2){const h=l[d],p=l[d+1];if(h.global&&(h.lastIndex=0),h.test(u))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Ev=new Tv;class Nr{constructor(e){this.manager=e!==void 0?e:Ev,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Nr.DEFAULT_MATERIAL_NAME="__DEFAULT";const xi={};class wv extends Error{constructor(e,t){super(e),this.response=t}}class Tm extends Nr{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Mi.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(xi[e]!==void 0){xi[e].push({onLoad:t,onProgress:i,onError:s});return}xi[e]=[],xi[e].push({onLoad:t,onProgress:i,onError:s});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&Oe("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const u=xi[e],d=l.body.getReader(),f=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),h=f?parseInt(f):0,p=h!==0;let v=0;const m=new ReadableStream({start(g){S();function S(){d.read().then(({done:T,value:x})=>{if(T)g.close();else{v+=x.byteLength;const M=new ProgressEvent("progress",{lengthComputable:p,loaded:v,total:h});for(let E=0,L=u.length;E<L;E++){const y=u[E];y.onProgress&&y.onProgress(M)}g.enqueue(x),S()}},T=>{g.error(T)})}}});return new Response(m)}else throw new wv(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return l.json();default:if(a==="")return l.text();{const d=/charset="?([^;"\s]*)"?/i.exec(a),f=d&&d[1]?d[1].toLowerCase():void 0,h=new TextDecoder(f);return l.arrayBuffer().then(p=>h.decode(p))}}}).then(l=>{Mi.add(`file:${e}`,l);const u=xi[e];delete xi[e];for(let d=0,f=u.length;d<f;d++){const h=u[d];h.onLoad&&h.onLoad(l)}}).catch(l=>{const u=xi[e];if(u===void 0)throw this.manager.itemError(e),l;delete xi[e];for(let d=0,f=u.length;d<f;d++){const h=u[d];h.onError&&h.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Qs=new WeakMap;class Av extends Nr{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Mi.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let d=Qs.get(o);d===void 0&&(d=[],Qs.set(o,d)),d.push({onLoad:t,onError:s})}return o}const a=Eo("img");function c(){u(),t&&t(this);const d=Qs.get(this)||[];for(let f=0;f<d.length;f++){const h=d[f];h.onLoad&&h.onLoad(this)}Qs.delete(this),r.manager.itemEnd(e)}function l(d){u(),s&&s(d),Mi.remove(`image:${e}`);const f=Qs.get(this)||[];for(let h=0;h<f.length;h++){const p=f[h];p.onError&&p.onError(d)}Qs.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Mi.add(`image:${e}`,a),r.manager.itemStart(e),a.src=e,a}}class Em extends Nr{constructor(e){super(e)}load(e,t,i,s){const r=new Gt,o=new Av(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}}class dc extends Ct{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Je(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const el=new et,Yf=new X,Kf=new X;class Md{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ee(512,512),this.mapType=gn,this.map=null,this.mapPass=null,this.matrix=new et,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new _d,this._frameExtents=new Ee(1,1),this._viewportCount=1,this._viewports=[new St(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Yf.setFromMatrixPosition(e.matrixWorld),t.position.copy(Yf),Kf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Kf),t.updateMatrixWorld(),el.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(el,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===To||t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(el)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const ba=new X,Ma=new In,Jn=new X;class wm extends Ct{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new et,this.projectionMatrix=new et,this.projectionMatrixInverse=new et,this.coordinateSystem=si,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ba,Ma,Jn),Jn.x===1&&Jn.y===1&&Jn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ba,Ma,Jn.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(ba,Ma,Jn),Jn.x===1&&Jn.y===1&&Jn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ba,Ma,Jn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const zi=new X,$f=new Ee,Zf=new Ee;class rn extends wm{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Mr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(fo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Mr*2*Math.atan(Math.tan(fo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){zi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(zi.x,zi.y).multiplyScalar(-e/zi.z),zi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(zi.x,zi.y).multiplyScalar(-e/zi.z)}getViewSize(e,t){return this.getViewBounds(e,$f,Zf),t.subVectors(Zf,$f)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(fo*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*i/l,s*=o.width/c,i*=o.height/l}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Rv extends Md{constructor(){super(new rn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,i=Mr*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(i!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Cv extends dc{constructor(e,t,i=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ct.DEFAULT_UP),this.updateMatrix(),this.target=new Ct,this.distance=i,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Rv}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class Pv extends Md{constructor(){super(new rn(90,1,.5,500)),this.isPointLightShadow=!0}}class Ru extends dc{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Pv}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class fc extends wm{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Iv extends Md{constructor(){super(new fc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Am extends dc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ct.DEFAULT_UP),this.updateMatrix(),this.target=new Ct,this.shadow=new Iv}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class Lv extends dc{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class _o{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const tl=new WeakMap;class Dv extends Nr{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Oe("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Oe("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Mi.get(`image-bitmap:${e}`);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(l=>{tl.has(o)===!0?(s&&s(tl.get(o)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(l),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);return}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const c=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){Mi.add(`image-bitmap:${e}`,l),t&&t(l),r.manager.itemEnd(e)}).catch(function(l){s&&s(l),tl.set(c,l),Mi.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});Mi.add(`image-bitmap:${e}`,c),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const er=-90,tr=1;class Nv extends Ct{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new rn(er,tr,e,t);s.layers=this.layers,this.add(s);const r=new rn(er,tr,e,t);r.layers=this.layers,this.add(r);const o=new rn(er,tr,e,t);o.layers=this.layers,this.add(o);const a=new rn(er,tr,e,t);a.layers=this.layers,this.add(a);const c=new rn(er,tr,e,t);c.layers=this.layers,this.add(c);const l=new rn(er,tr,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,c]=t;for(const l of t)this.remove(l);if(e===si)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===To)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(i,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(d,f,h),e.xr.enabled=p,i.texture.needsPMREMUpdate=!0}}class kv extends rn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Uv{constructor(e,t,i){this.binding=e,this.valueSize=i;let s,r,o;switch(t){case"quaternion":s=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(i*6),this._workIndex=5;break;case"string":case"bool":s=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(i*5);break;default:s=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(i*5)}this._mixBufferRegion=s,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const i=this.buffer,s=this.valueSize,r=e*s+s;let o=this.cumulativeWeight;if(o===0){for(let a=0;a!==s;++a)i[r+a]=i[a];o=t}else{o+=t;const a=t/o;this._mixBufferRegion(i,r,0,a,s)}this.cumulativeWeight=o}accumulateAdditive(e){const t=this.buffer,i=this.valueSize,s=i*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,s,0,e,i),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,i=this.buffer,s=e*t+t,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const c=t*this._origIndex;this._mixBufferRegion(i,s,c,1-r,t)}o>0&&this._mixBufferRegionAdditive(i,s,this._addIndex*t,1,t);for(let c=t,l=t+t;c!==l;++c)if(i[c]!==i[c+t]){a.setValue(i,s);break}}saveOriginalState(){const e=this.binding,t=this.buffer,i=this.valueSize,s=i*this._origIndex;e.getValue(t,s);for(let r=i,o=s;r!==o;++r)t[r]=t[s+r%i];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let i=e;i<t;i++)this.buffer[i]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let i=0;i<this.valueSize;i++)this.buffer[t+i]=this.buffer[e+i]}_select(e,t,i,s,r){if(s>=.5)for(let o=0;o!==r;++o)e[t+o]=e[i+o]}_slerp(e,t,i,s){In.slerpFlat(e,t,e,t,e,i,s)}_slerpAdditive(e,t,i,s,r){const o=this._workIndex*r;In.multiplyQuaternionsFlat(e,o,e,t,e,i),In.slerpFlat(e,t,e,t,e,o,s)}_lerp(e,t,i,s,r){const o=1-s;for(let a=0;a!==r;++a){const c=t+a;e[c]=e[c]*o+e[i+a]*s}}_lerpAdditive(e,t,i,s,r){for(let o=0;o!==r;++o){const a=t+o;e[a]=e[a]+e[i+o]*s}}}const Td="\\[\\]\\.:\\/",Ov=new RegExp("["+Td+"]","g"),Ed="[^"+Td+"]",Fv="[^"+Td.replace("\\.","")+"]",Bv=/((?:WC+[\/:])*)/.source.replace("WC",Ed),zv=/(WCOD+)?/.source.replace("WCOD",Fv),Hv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ed),Vv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ed),Gv=new RegExp("^"+Bv+zv+Hv+Vv+"$"),Wv=["material","materials","bones","map"];class Xv{constructor(e,t,i){const s=i||ht.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class ht{constructor(e,t,i){this.path=t,this.parsedPath=i||ht.parseTrackName(t),this.node=ht.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new ht.Composite(e,t,i):new ht(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Ov,"")}static parseTrackName(e){const t=Gv.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=i.nodeName.substring(s+1);Wv.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const c=i(a.children);if(c)return c}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,s=t.propertyName;let r=t.propertyIndex;if(e||(e=ht.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Oe("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=t.objectIndex;switch(i){case"materials":if(!e.material){Ze("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ze("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ze("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===l){l=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ze("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ze("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){Ze("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(l!==void 0){if(e[l]===void 0){Ze("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const o=e[s];if(o===void 0){const l=t.nodeName;Ze("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Ze("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ze("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}ht.Composite=Xv;ht.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ht.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ht.prototype.GetterByBindingType=[ht.prototype._getValue_direct,ht.prototype._getValue_array,ht.prototype._getValue_arrayElement,ht.prototype._getValue_toArray];ht.prototype.SetterByBindingTypeAndVersioning=[[ht.prototype._setValue_direct,ht.prototype._setValue_direct_setNeedsUpdate,ht.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ht.prototype._setValue_array,ht.prototype._setValue_array_setNeedsUpdate,ht.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ht.prototype._setValue_arrayElement,ht.prototype._setValue_arrayElement_setNeedsUpdate,ht.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ht.prototype._setValue_fromArray,ht.prototype._setValue_fromArray_setNeedsUpdate,ht.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class qv{constructor(e,t,i=null,s=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=i,this.blendMode=s;const r=t.tracks,o=r.length,a=new Array(o),c={endingStart:lr,endingEnd:lr};for(let l=0;l!==o;++l){const u=r[l].createInterpolant(null);a[l]=u,u.settings=c}this._interpolantSettings=c,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._restoreTimeScale=null,this._weightInterpolant=null,this.loop=y0,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,i=!1){if(e.fadeOut(t),this.fadeIn(t),i===!0){const s=this._clip.duration,r=e._clip.duration,o=r/s,a=s/r;e._restoreTimeScale=e.timeScale,this._restoreTimeScale=this.timeScale,e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,i=!1){return e.crossFadeFrom(this,t,i)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,i){const s=this._mixer,r=s.time,o=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=s._lendControlInterpolant(),this._timeScaleInterpolant=a);const c=a.parameterPositions,l=a.sampleValues;return c[0]=r,c[1]=r+i,l[0]=e/o,l[1]=t/o,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this._restoreTimeScale=null,this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,i,s){if(!this.enabled){this._updateWeight(e);return}const r=this._startTime;if(r!==null){const c=(e-r)*i;c<0||i===0?t=0:(this._startTime=null,t=i*c)}t*=this._updateTimeScale(e);const o=this._updateTime(t),a=this._updateWeight(e);if(a>0){const c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case b0:for(let u=0,d=c.length;u!==d;++u)c[u].evaluate(o),l[u].accumulateAdditive(a);break;case cd:default:for(let u=0,d=c.length;u!==d;++u)c[u].evaluate(o),l[u].accumulate(s,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const i=this._weightInterpolant;if(i!==null){const s=i.evaluate(e)[0];t*=s,e>i.parameterPositions[1]&&(this.stopFading(),s===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const i=this._timeScaleInterpolant;if(i!==null){const s=i.evaluate(e)[0];t*=s,e>i.parameterPositions[1]&&(t===0?this.paused=!0:(this._restoreTimeScale!==null&&(t=this._restoreTimeScale),this.timeScale=t),this.stopWarping())}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,i=this.loop;let s=this.time+e,r=this._loopCount;const o=i===S0;if(e===0)return r===-1?s:o&&(r&1)===1?t-s:s;if(i===jp){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(s>=t)s=t;else if(s<0)s=0;else{this.time=s;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),s>=t||s<0){const a=Math.floor(s/t);s-=t*a,r+=Math.abs(a);const c=this.repetitions-r;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,s=e>0?t:0,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(c===1){const l=e<0;this._setEndings(l,!l,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=s,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this._loopCount=r,this.time=s;if(o&&(r&1)===1)return t-s}return s}_setEndings(e,t,i){const s=this._interpolantSettings;i?(s.endingStart=ur,s.endingEnd=ur):(e?s.endingStart=this.zeroSlopeAtStart?ur:lr:s.endingStart=Ja,t?s.endingEnd=this.zeroSlopeAtEnd?ur:lr:s.endingEnd=Ja)}_scheduleFading(e,t,i){const s=this._mixer,r=s.time;let o=this._weightInterpolant;o===null&&(o=s._lendControlInterpolant(),this._weightInterpolant=o);const a=o.parameterPositions,c=o.sampleValues;return a[0]=r,c[0]=t,a[1]=r+e,c[1]=i,this}}const Yv=new Float32Array(1);class Kv extends os{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}_bindAction(e,t){const i=e._localRoot||this._root,s=e._clip.tracks,r=s.length,o=e._propertyBindings,a=e._interpolants,c=i.uuid,l=this._bindingsByRootAndName;let u=l[c];u===void 0&&(u={},l[c]=u);for(let d=0;d!==r;++d){const f=s[d],h=f.name;let p=u[h];if(p!==void 0)++p.referenceCount,o[d]=p;else{if(p=o[d],p!==void 0){p._cacheIndex===null&&(++p.referenceCount,this._addInactiveBinding(p,c,h));continue}const v=t&&t._propertyBindings[d].binding.parsedPath;p=new Uv(ht.create(i,h,v),f.ValueTypeName,f.getValueSize()),++p.referenceCount,this._addInactiveBinding(p,c,h),o[d]=p}a[d].resultBuffer=p.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const i=(e._localRoot||this._root).uuid,s=e._clip.uuid,r=this._actionsByClip[s];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,s,i)}const t=e._propertyBindings;for(let i=0,s=t.length;i!==s;++i){const r=t[i];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let i=0,s=t.length;i!==s;++i){const r=t[i];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,i){const s=this._actions,r=this._actionsByClip;let o=r[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=o;else{const a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=s.length,s.push(e),o.actionByRoot[i]=e}_removeInactiveAction(e){const t=this._actions,i=t[t.length-1],s=e._cacheIndex;i._cacheIndex=s,t[s]=i,t.pop(),e._cacheIndex=null;const r=e._clip.uuid,o=this._actionsByClip,a=o[r],c=a.knownActions,l=c[c.length-1],u=e._byClipCacheIndex;l._byClipCacheIndex=u,c[u]=l,c.pop(),e._byClipCacheIndex=null;const d=a.actionByRoot,f=(e._localRoot||this._root).uuid;delete d[f],c.length===0&&delete o[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let i=0,s=t.length;i!==s;++i){const r=t[i];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){const t=this._actions,i=e._cacheIndex,s=this._nActiveActions++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=i,t[i]=r}_takeBackAction(e){const t=this._actions,i=e._cacheIndex,s=--this._nActiveActions,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=i,t[i]=r}_addInactiveBinding(e,t,i){const s=this._bindingsByRootAndName,r=this._bindings;let o=s[t];o===void 0&&(o={},s[t]=o),o[i]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){const t=this._bindings,i=e.binding,s=i.rootNode.uuid,r=i.path,o=this._bindingsByRootAndName,a=o[s],c=t[t.length-1],l=e._cacheIndex;c._cacheIndex=l,t[l]=c,t.pop(),delete a[r],Object.keys(a).length===0&&delete o[s]}_lendBinding(e){const t=this._bindings,i=e._cacheIndex,s=this._nActiveBindings++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=i,t[i]=r}_takeBackBinding(e){const t=this._bindings,i=e._cacheIndex,s=--this._nActiveBindings,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=i,t[i]=r}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let i=e[t];return i===void 0&&(i=new bm(new Float32Array(2),new Float32Array(2),1,Yv),i.__cacheIndex=t,e[t]=i),i}_takeBackControlInterpolant(e){const t=this._controlInterpolants,i=e.__cacheIndex,s=--this._nActiveControlInterpolants,r=t[s];e.__cacheIndex=s,t[s]=e,r.__cacheIndex=i,t[i]=r}clipAction(e,t,i){const s=t||this._root,r=s.uuid;let o=typeof e=="string"?ic.findByName(s,e):e;const a=o!==null?o.uuid:e,c=this._actionsByClip[a];let l=null;if(i===void 0&&(o!==null?i=o.blendMode:i=cd),c!==void 0){const d=c.actionByRoot[r];if(d!==void 0&&d.blendMode===i)return d;l=c.knownActions[0],o===null&&(o=l._clip)}if(o===null)return null;const u=new qv(this,o,t,i);return this._bindAction(u,l),this._addInactiveAction(u,a,r),u}existingAction(e,t){const i=t||this._root,s=i.uuid,r=typeof e=="string"?ic.findByName(i,e):e,o=r?r.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[s]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let i=t-1;i>=0;--i)e[i].stop();return this}update(e){e*=this.timeScale;const t=this._actions,i=this._nActiveActions,s=this.time+=e,r=Math.sign(e),o=this._accuIndex^=1;for(let l=0;l!==i;++l)t[l]._update(s,e,r,o);const a=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)a[l].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,i=e.uuid,s=this._actionsByClip,r=s[i];if(r!==void 0){const o=r.knownActions;for(let a=0,c=o.length;a!==c;++a){const l=o[a];this._deactivateAction(l);const u=l._cacheIndex,d=t[t.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,d._cacheIndex=u,t[u]=d,t.pop(),this._removeInactiveBindingsForAction(l)}delete s[i]}}uncacheRoot(e){const t=e.uuid,i=this._actionsByClip;for(const o in i){const a=i[o].actionByRoot,c=a[t];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}const s=this._bindingsByRootAndName,r=s[t];if(r!==void 0)for(const o in r){const a=r[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){const i=this.existingAction(e,t);i!==null&&(this._deactivateAction(i),this._removeInactiveAction(i))}}const Jf=new et;class $v{constructor(e,t,i=0,s=1/0){this.ray=new Vo(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new hd,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Ze("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Jf.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Jf),this}intersectObject(e,t=!0,i=[]){return Cu(e,this,i,t),i.sort(jf),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)Cu(e[s],this,i,t);return i.sort(jf),i}}function jf(n,e){return n.distance-e.distance}function Cu(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let o=0,a=r.length;o<a;o++)Cu(r[o],e,t,!0)}}class Zv{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Oe("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const Vd=class Vd{constructor(e,t,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){const r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=s,this}};Vd.prototype.isMatrix2=!0;let Qf=Vd;function eh(n,e,t,i){const s=Jv(i);switch(t){case Zp:return n*e;case sd:return n*e/s.components*s.byteLength;case rd:return n*e/s.components*s.byteLength;case As:return n*e*2/s.components*s.byteLength;case od:return n*e*2/s.components*s.byteLength;case Jp:return n*e*3/s.components*s.byteLength;case An:return n*e*4/s.components*s.byteLength;case ad:return n*e*4/s.components*s.byteLength;case ka:case Ua:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Oa:case Fa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Wl:case ql:return Math.max(n,16)*Math.max(e,8)/4;case Gl:case Xl:return Math.max(n,8)*Math.max(e,8)/2;case Yl:case Kl:case Zl:case Jl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case $l:case $a:case jl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ql:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case eu:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case tu:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case nu:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case iu:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case su:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case ru:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case ou:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case au:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case cu:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case lu:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case uu:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case du:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case fu:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case hu:case pu:case mu:return Math.ceil(n/4)*Math.ceil(e/4)*16;case gu:case _u:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Za:case vu:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Jv(n){switch(n){case gn:case qp:return{byteLength:1,components:1};case yo:case Yp:case Ci:return{byteLength:2,components:1};case nd:case id:return{byteLength:2,components:4};case ci:case td:case wn:return{byteLength:4,components:1};case Kp:case $p:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ed}}));typeof window<"u"&&(window.__THREE__?Oe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ed);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Rm(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function jv(n){const e=new WeakMap;function t(a,c){const l=a.array,u=a.usage,d=l.byteLength,f=n.createBuffer();n.bindBuffer(c,f),n.bufferData(c,l,u),a.onUploadCallback();let h;if(l instanceof Float32Array)h=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)h=n.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?h=n.HALF_FLOAT:h=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)h=n.SHORT;else if(l instanceof Uint32Array)h=n.UNSIGNED_INT;else if(l instanceof Int32Array)h=n.INT;else if(l instanceof Int8Array)h=n.BYTE;else if(l instanceof Uint8Array)h=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)h=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:h,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,c,l){const u=c.array,d=c.updateRanges;if(n.bindBuffer(l,a),d.length===0)n.bufferSubData(l,0,u);else{d.sort((h,p)=>h.start-p.start);let f=0;for(let h=1;h<d.length;h++){const p=d[f],v=d[h];v.start<=p.start+p.count+1?p.count=Math.max(p.count,v.start+v.count-p.start):(++f,d[f]=v)}d.length=f+1;for(let h=0,p=d.length;h<p;h++){const v=d[h];n.bufferSubData(l,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(n.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var Qv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ex=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,tx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,nx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ix=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,sx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,rx=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,ox=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ax=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,cx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,lx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ux=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,dx=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,fx=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,hx=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,px=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,mx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,gx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,_x=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,vx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,xx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,yx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Sx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,bx=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Mx=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Tx=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Ex=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,wx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ax=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Rx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Cx="gl_FragColor = linearToOutputTexel( gl_FragColor );",Px=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ix=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Lx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Dx=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Nx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,kx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Ux=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ox=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Fx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Bx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,zx=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Hx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Vx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Gx=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Wx=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Xx=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,qx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Yx=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Kx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,$x=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Zx=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Jx=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,jx=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Qx=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ey=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ty=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,ny=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,iy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ry=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,oy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ay=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,cy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,ly=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,uy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,dy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,fy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,hy=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,py=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,my=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,gy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_y=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,vy=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,xy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,by=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,My=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ty=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ey=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,wy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ay=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ry=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Cy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Py=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Iy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ly=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Dy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ny=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ky=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Uy=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Oy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Fy=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,By=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,zy=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Hy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Vy=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Gy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Wy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Xy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,qy=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Yy=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Ky=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,$y=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Zy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Jy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,jy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Qy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,eS=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nS=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,iS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,oS=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,aS=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,cS=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,lS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,uS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dS=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,fS=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,hS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,pS=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mS=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gS=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_S=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,vS=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xS=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,yS=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,SS=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bS=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,MS=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,TS=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ES=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wS=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,AS=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,RS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,CS=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,PS=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,IS=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,LS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,it={alphahash_fragment:Qv,alphahash_pars_fragment:ex,alphamap_fragment:tx,alphamap_pars_fragment:nx,alphatest_fragment:ix,alphatest_pars_fragment:sx,aomap_fragment:rx,aomap_pars_fragment:ox,batching_pars_vertex:ax,batching_vertex:cx,begin_vertex:lx,beginnormal_vertex:ux,bsdfs:dx,iridescence_fragment:fx,bumpmap_pars_fragment:hx,clipping_planes_fragment:px,clipping_planes_pars_fragment:mx,clipping_planes_pars_vertex:gx,clipping_planes_vertex:_x,color_fragment:vx,color_pars_fragment:xx,color_pars_vertex:yx,color_vertex:Sx,common:bx,cube_uv_reflection_fragment:Mx,defaultnormal_vertex:Tx,displacementmap_pars_vertex:Ex,displacementmap_vertex:wx,emissivemap_fragment:Ax,emissivemap_pars_fragment:Rx,colorspace_fragment:Cx,colorspace_pars_fragment:Px,envmap_fragment:Ix,envmap_common_pars_fragment:Lx,envmap_pars_fragment:Dx,envmap_pars_vertex:Nx,envmap_physical_pars_fragment:Xx,envmap_vertex:kx,fog_vertex:Ux,fog_pars_vertex:Ox,fog_fragment:Fx,fog_pars_fragment:Bx,gradientmap_pars_fragment:zx,lightmap_pars_fragment:Hx,lights_lambert_fragment:Vx,lights_lambert_pars_fragment:Gx,lights_pars_begin:Wx,lights_toon_fragment:qx,lights_toon_pars_fragment:Yx,lights_phong_fragment:Kx,lights_phong_pars_fragment:$x,lights_physical_fragment:Zx,lights_physical_pars_fragment:Jx,lights_fragment_begin:jx,lights_fragment_maps:Qx,lights_fragment_end:ey,lightprobes_pars_fragment:ty,logdepthbuf_fragment:ny,logdepthbuf_pars_fragment:iy,logdepthbuf_pars_vertex:sy,logdepthbuf_vertex:ry,map_fragment:oy,map_pars_fragment:ay,map_particle_fragment:cy,map_particle_pars_fragment:ly,metalnessmap_fragment:uy,metalnessmap_pars_fragment:dy,morphinstance_vertex:fy,morphcolor_vertex:hy,morphnormal_vertex:py,morphtarget_pars_vertex:my,morphtarget_vertex:gy,normal_fragment_begin:_y,normal_fragment_maps:vy,normal_pars_fragment:xy,normal_pars_vertex:yy,normal_vertex:Sy,normalmap_pars_fragment:by,clearcoat_normal_fragment_begin:My,clearcoat_normal_fragment_maps:Ty,clearcoat_pars_fragment:Ey,iridescence_pars_fragment:wy,opaque_fragment:Ay,packing:Ry,premultiplied_alpha_fragment:Cy,project_vertex:Py,dithering_fragment:Iy,dithering_pars_fragment:Ly,roughnessmap_fragment:Dy,roughnessmap_pars_fragment:Ny,shadowmap_pars_fragment:ky,shadowmap_pars_vertex:Uy,shadowmap_vertex:Oy,shadowmask_pars_fragment:Fy,skinbase_vertex:By,skinning_pars_vertex:zy,skinning_vertex:Hy,skinnormal_vertex:Vy,specularmap_fragment:Gy,specularmap_pars_fragment:Wy,tonemapping_fragment:Xy,tonemapping_pars_fragment:qy,transmission_fragment:Yy,transmission_pars_fragment:Ky,uv_pars_fragment:$y,uv_pars_vertex:Zy,uv_vertex:Jy,worldpos_vertex:jy,background_vert:Qy,background_frag:eS,backgroundCube_vert:tS,backgroundCube_frag:nS,cube_vert:iS,cube_frag:sS,depth_vert:rS,depth_frag:oS,distance_vert:aS,distance_frag:cS,equirect_vert:lS,equirect_frag:uS,linedashed_vert:dS,linedashed_frag:fS,meshbasic_vert:hS,meshbasic_frag:pS,meshlambert_vert:mS,meshlambert_frag:gS,meshmatcap_vert:_S,meshmatcap_frag:vS,meshnormal_vert:xS,meshnormal_frag:yS,meshphong_vert:SS,meshphong_frag:bS,meshphysical_vert:MS,meshphysical_frag:TS,meshtoon_vert:ES,meshtoon_frag:wS,points_vert:AS,points_frag:RS,shadow_vert:CS,shadow_frag:PS,sprite_vert:IS,sprite_frag:LS},be={common:{diffuse:{value:new Je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qe}},envmap:{envMap:{value:null},envMapRotation:{value:new Qe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qe},normalScale:{value:new Ee(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new X},probesMax:{value:new X},probesResolution:{value:new X}},points:{diffuse:{value:new Je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0},uvTransform:{value:new Qe}},sprite:{diffuse:{value:new Je(16777215)},opacity:{value:1},center:{value:new Ee(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}}},ti={basic:{uniforms:tn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.fog]),vertexShader:it.meshbasic_vert,fragmentShader:it.meshbasic_frag},lambert:{uniforms:tn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new Je(0)},envMapIntensity:{value:1}}]),vertexShader:it.meshlambert_vert,fragmentShader:it.meshlambert_frag},phong:{uniforms:tn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new Je(0)},specular:{value:new Je(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:it.meshphong_vert,fragmentShader:it.meshphong_frag},standard:{uniforms:tn([be.common,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.roughnessmap,be.metalnessmap,be.fog,be.lights,{emissive:{value:new Je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag},toon:{uniforms:tn([be.common,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.gradientmap,be.fog,be.lights,{emissive:{value:new Je(0)}}]),vertexShader:it.meshtoon_vert,fragmentShader:it.meshtoon_frag},matcap:{uniforms:tn([be.common,be.bumpmap,be.normalmap,be.displacementmap,be.fog,{matcap:{value:null}}]),vertexShader:it.meshmatcap_vert,fragmentShader:it.meshmatcap_frag},points:{uniforms:tn([be.points,be.fog]),vertexShader:it.points_vert,fragmentShader:it.points_frag},dashed:{uniforms:tn([be.common,be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:it.linedashed_vert,fragmentShader:it.linedashed_frag},depth:{uniforms:tn([be.common,be.displacementmap]),vertexShader:it.depth_vert,fragmentShader:it.depth_frag},normal:{uniforms:tn([be.common,be.bumpmap,be.normalmap,be.displacementmap,{opacity:{value:1}}]),vertexShader:it.meshnormal_vert,fragmentShader:it.meshnormal_frag},sprite:{uniforms:tn([be.sprite,be.fog]),vertexShader:it.sprite_vert,fragmentShader:it.sprite_frag},background:{uniforms:{uvTransform:{value:new Qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:it.background_vert,fragmentShader:it.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Qe}},vertexShader:it.backgroundCube_vert,fragmentShader:it.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:it.cube_vert,fragmentShader:it.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:it.equirect_vert,fragmentShader:it.equirect_frag},distance:{uniforms:tn([be.common,be.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:it.distance_vert,fragmentShader:it.distance_frag},shadow:{uniforms:tn([be.lights,be.fog,{color:{value:new Je(0)},opacity:{value:1}}]),vertexShader:it.shadow_vert,fragmentShader:it.shadow_frag}};ti.physical={uniforms:tn([ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qe},clearcoatNormalScale:{value:new Ee(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qe},sheen:{value:0},sheenColor:{value:new Je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qe},transmissionSamplerSize:{value:new Ee},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qe},attenuationDistance:{value:0},attenuationColor:{value:new Je(0)},specularColor:{value:new Je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qe},anisotropyVector:{value:new Ee},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qe}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag};const Ta={r:0,b:0,g:0},DS=new et,Cm=new Qe;Cm.set(-1,0,0,0,1,0,0,0,1);function NS(n,e,t,i,s,r){const o=new Je(0);let a=s===!0?0:1,c,l,u=null,d=0,f=null;function h(S){let T=S.isScene===!0?S.background:null;if(T&&T.isTexture){const x=S.backgroundBlurriness>0;T=e.get(T,x)}return T}function p(S){let T=!1;const x=h(S);x===null?m(o,a):x&&x.isColor&&(m(x,1),T=!0);const M=n.xr.getEnvironmentBlendMode();M==="additive"?t.buffers.color.setClear(0,0,0,1,r):M==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||T)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function v(S,T){const x=h(T);x&&(x.isCubeTexture||x.mapping===uc)?(l===void 0&&(l=new kt(new ns(1,1,1),new li({name:"BackgroundCubeMaterial",uniforms:wr(ti.backgroundCube.uniforms),vertexShader:ti.backgroundCube.vertexShader,fragmentShader:ti.backgroundCube.fragmentShader,side:dn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(M,E,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),l.material.uniforms.envMap.value=x,l.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(DS.makeRotationFromEuler(T.backgroundRotation)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Cm),l.material.toneMapped=ct.getTransfer(x.colorSpace)!==gt,(u!==x||d!==x.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,u=x,d=x.version,f=n.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new kt(new is(2,2),new li({name:"BackgroundMaterial",uniforms:wr(ti.background.uniforms),vertexShader:ti.background.vertexShader,fragmentShader:ti.background.fragmentShader,side:Ri,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.toneMapped=ct.getTransfer(x.colorSpace)!==gt,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||d!==x.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,u=x,d=x.version,f=n.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function m(S,T){S.getRGB(Ta,Sm(n)),t.buffers.color.setClear(Ta.r,Ta.g,Ta.b,T,r)}function g(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(S,T=1){o.set(S),a=T,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(S){a=S,m(o,a)},render:p,addToRenderList:v,dispose:g}}function kS(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null);let r=s,o=!1;function a(P,D,Y,R,A){let k=!1;const I=d(P,R,Y,D);r!==I&&(r=I,l(r.object)),k=h(P,R,Y,A),k&&p(P,R,Y,A),A!==null&&e.update(A,n.ELEMENT_ARRAY_BUFFER),(k||o)&&(o=!1,x(P,D,Y,R),A!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(A).buffer))}function c(){return n.createVertexArray()}function l(P){return n.bindVertexArray(P)}function u(P){return n.deleteVertexArray(P)}function d(P,D,Y,R){const A=R.wireframe===!0;let k=i[D.id];k===void 0&&(k={},i[D.id]=k);const I=P.isInstancedMesh===!0?P.id:0;let O=k[I];O===void 0&&(O={},k[I]=O);let F=O[Y.id];F===void 0&&(F={},O[Y.id]=F);let G=F[A];return G===void 0&&(G=f(c()),F[A]=G),G}function f(P){const D=[],Y=[],R=[];for(let A=0;A<t;A++)D[A]=0,Y[A]=0,R[A]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:Y,attributeDivisors:R,object:P,attributes:{},index:null}}function h(P,D,Y,R){const A=r.attributes,k=D.attributes;let I=0;const O=Y.getAttributes();for(const F in O)if(O[F].location>=0){const U=A[F];let $=k[F];if($===void 0&&(F==="instanceMatrix"&&P.instanceMatrix&&($=P.instanceMatrix),F==="instanceColor"&&P.instanceColor&&($=P.instanceColor)),U===void 0||U.attribute!==$||$&&U.data!==$.data)return!0;I++}return r.attributesNum!==I||r.index!==R}function p(P,D,Y,R){const A={},k=D.attributes;let I=0;const O=Y.getAttributes();for(const F in O)if(O[F].location>=0){let U=k[F];U===void 0&&(F==="instanceMatrix"&&P.instanceMatrix&&(U=P.instanceMatrix),F==="instanceColor"&&P.instanceColor&&(U=P.instanceColor));const $={};$.attribute=U,U&&U.data&&($.data=U.data),A[F]=$,I++}r.attributes=A,r.attributesNum=I,r.index=R}function v(){const P=r.newAttributes;for(let D=0,Y=P.length;D<Y;D++)P[D]=0}function m(P){g(P,0)}function g(P,D){const Y=r.newAttributes,R=r.enabledAttributes,A=r.attributeDivisors;Y[P]=1,R[P]===0&&(n.enableVertexAttribArray(P),R[P]=1),A[P]!==D&&(n.vertexAttribDivisor(P,D),A[P]=D)}function S(){const P=r.newAttributes,D=r.enabledAttributes;for(let Y=0,R=D.length;Y<R;Y++)D[Y]!==P[Y]&&(n.disableVertexAttribArray(Y),D[Y]=0)}function T(P,D,Y,R,A,k,I){I===!0?n.vertexAttribIPointer(P,D,Y,A,k):n.vertexAttribPointer(P,D,Y,R,A,k)}function x(P,D,Y,R){v();const A=R.attributes,k=Y.getAttributes(),I=D.defaultAttributeValues;for(const O in k){const F=k[O];if(F.location>=0){let G=A[O];if(G===void 0&&(O==="instanceMatrix"&&P.instanceMatrix&&(G=P.instanceMatrix),O==="instanceColor"&&P.instanceColor&&(G=P.instanceColor)),G!==void 0){const U=G.normalized,$=G.itemSize,ue=e.get(G);if(ue===void 0)continue;const we=ue.buffer,Le=ue.type,ne=ue.bytesPerElement,le=Le===n.INT||Le===n.UNSIGNED_INT||G.gpuType===td;if(G.isInterleavedBufferAttribute){const fe=G.data,Ae=fe.stride,Fe=G.offset;if(fe.isInstancedInterleavedBuffer){for(let De=0;De<F.locationSize;De++)g(F.location+De,fe.meshPerAttribute);P.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let De=0;De<F.locationSize;De++)m(F.location+De);n.bindBuffer(n.ARRAY_BUFFER,we);for(let De=0;De<F.locationSize;De++)T(F.location+De,$/F.locationSize,Le,U,Ae*ne,(Fe+$/F.locationSize*De)*ne,le)}else{if(G.isInstancedBufferAttribute){for(let fe=0;fe<F.locationSize;fe++)g(F.location+fe,G.meshPerAttribute);P.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let fe=0;fe<F.locationSize;fe++)m(F.location+fe);n.bindBuffer(n.ARRAY_BUFFER,we);for(let fe=0;fe<F.locationSize;fe++)T(F.location+fe,$/F.locationSize,Le,U,$*ne,$/F.locationSize*fe*ne,le)}}else if(I!==void 0){const U=I[O];if(U!==void 0)switch(U.length){case 2:n.vertexAttrib2fv(F.location,U);break;case 3:n.vertexAttrib3fv(F.location,U);break;case 4:n.vertexAttrib4fv(F.location,U);break;default:n.vertexAttrib1fv(F.location,U)}}}}S()}function M(){b();for(const P in i){const D=i[P];for(const Y in D){const R=D[Y];for(const A in R){const k=R[A];for(const I in k)u(k[I].object),delete k[I];delete R[A]}}delete i[P]}}function E(P){if(i[P.id]===void 0)return;const D=i[P.id];for(const Y in D){const R=D[Y];for(const A in R){const k=R[A];for(const I in k)u(k[I].object),delete k[I];delete R[A]}}delete i[P.id]}function L(P){for(const D in i){const Y=i[D];for(const R in Y){const A=Y[R];if(A[P.id]===void 0)continue;const k=A[P.id];for(const I in k)u(k[I].object),delete k[I];delete A[P.id]}}}function y(P){for(const D in i){const Y=i[D],R=P.isInstancedMesh===!0?P.id:0,A=Y[R];if(A!==void 0){for(const k in A){const I=A[k];for(const O in I)u(I[O].object),delete I[O];delete A[k]}delete Y[R],Object.keys(Y).length===0&&delete i[D]}}}function b(){N(),o=!0,r!==s&&(r=s,l(r.object))}function N(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:b,resetDefaultState:N,dispose:M,releaseStatesOfGeometry:E,releaseStatesOfObject:y,releaseStatesOfProgram:L,initAttributes:v,enableAttribute:m,disableUnusedAttributes:S}}function US(n,e,t){let i;function s(c){i=c}function r(c,l){n.drawArrays(i,c,l),t.update(l,i,1)}function o(c,l,u){u!==0&&(n.drawArraysInstanced(i,c,l,u),t.update(l,i,u))}function a(c,l,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,l,0,u);let f=0;for(let h=0;h<u;h++)f+=l[h];t.update(f,i,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function OS(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(L){return!(L!==An&&i.convert(L)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(L){const y=L===Ci&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(L!==gn&&i.convert(L)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==wn&&!y)}function c(L){if(L==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(Oe("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const d=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&f===!1&&Oe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),g=n.getParameter(n.MAX_VERTEX_ATTRIBS),S=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),T=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),M=n.getParameter(n.MAX_SAMPLES),E=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:h,maxVertexTextures:p,maxTextureSize:v,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:S,maxVaryings:T,maxFragmentUniforms:x,maxSamples:M,samples:E}}function FS(n){const e=this;let t=null,i=0,s=!1,r=!1;const o=new Gi,a=new Qe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const h=d.length!==0||f||i!==0||s;return s=f,i=d.length,h},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){t=u(d,f,0)},this.setState=function(d,f,h){const p=d.clippingPlanes,v=d.clipIntersection,m=d.clipShadows,g=n.get(d);if(!s||p===null||p.length===0||r&&!m)r?u(null):l();else{const S=r?0:i,T=S*4;let x=g.clippingState||null;c.value=x,x=u(p,f,T,h);for(let M=0;M!==T;++M)x[M]=t[M];g.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=S}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,f,h,p){const v=d!==null?d.length:0;let m=null;if(v!==0){if(m=c.value,p!==!0||m===null){const g=h+v*4,S=f.matrixWorldInverse;a.getNormalMatrix(S),(m===null||m.length<g)&&(m=new Float32Array(g));for(let T=0,x=h;T!==v;++T,x+=4)o.copy(d[T]).applyMatrix4(S,a),o.normal.toArray(m,x),m[x+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}const qi=4,th=[.125,.215,.35,.446,.526,.582],xs=20,BS=256,$r=new fc,nh=new Je;let nl=null,il=0,sl=0,rl=!1;const zS=new X;class ih{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){const{size:o=256,position:a=zS}=r;nl=this._renderer.getRenderTarget(),il=this._renderer.getActiveCubeFace(),sl=this._renderer.getActiveMipmapLevel(),rl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,s,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=oh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=rh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(nl,il,sl),this._renderer.xr.enabled=rl,e.scissorTest=!1,nr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ws||e.mapping===Sr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),nl=this._renderer.getRenderTarget(),il=this._renderer.getActiveCubeFace(),sl=this._renderer.getActiveMipmapLevel(),rl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Lt,minFilter:Lt,generateMipmaps:!1,type:Ci,format:An,colorSpace:vn,depthBuffer:!1},s=sh(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=sh(e,t,i);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=HS(r)),this._blurMaterial=GS(r,e,t),this._ggxMaterial=VS(r,e,t)}return s}_compileMaterial(e){const t=new kt(new un,e);this._renderer.compile(t,$r)}_sceneToCubeUV(e,t,i,s,r){const c=new rn(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,h=d.toneMapping;d.getClearColor(nh),d.toneMapping=ri,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new kt(new ns,new Rn({name:"PMREM.Background",side:dn,depthWrite:!1,depthTest:!1})));const v=this._backgroundBox,m=v.material;let g=!1;const S=e.background;S?S.isColor&&(m.color.copy(S),e.background=null,g=!0):(m.color.copy(nh),g=!0);for(let T=0;T<6;T++){const x=T%3;x===0?(c.up.set(0,l[T],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+u[T],r.y,r.z)):x===1?(c.up.set(0,0,l[T]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+u[T],r.z)):(c.up.set(0,l[T],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+u[T]));const M=this._cubeSize;nr(s,x*M,T>2?M:0,M,M),d.setRenderTarget(s),g&&d.render(v,c),d.render(e,c)}d.toneMapping=h,d.autoClear=f,e.background=S}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===ws||e.mapping===Sr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=oh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=rh());const r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;const a=r.uniforms;a.envMap.value=e;const c=this._cubeSize;nr(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(o,$r)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=i}_applyGGXFilter(e,t,i){const s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const c=o.uniforms,l=i/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),d=Math.sqrt(l*l-u*u),f=0+l*1.25,h=d*f,{_lodMax:p}=this,v=this._sizeLods[i],m=3*v*(i>p-qi?i-p+qi:0),g=4*(this._cubeSize-v);c.envMap.value=e.texture,c.roughness.value=h,c.mipInt.value=p-t,nr(r,m,g,3*v,2*v),s.setRenderTarget(r),s.render(a,$r),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=p-i,nr(e,m,g,3*v,2*v),s.setRenderTarget(e),s.render(a,$r)}_blur(e,t,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&Ze("blur direction must be either latitudinal or longitudinal!");const u=3,d=this._lodMeshes[s];d.material=l;const f=l.uniforms,h=this._sizeLods[i]-1,p=isFinite(r)?Math.PI/(2*h):2*Math.PI/(2*xs-1),v=r/p,m=isFinite(r)?1+Math.floor(u*v):xs;m>xs&&Oe(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${xs}`);const g=[];let S=0;for(let L=0;L<xs;++L){const y=L/v,b=Math.exp(-y*y/2);g.push(b),L===0?S+=b:L<m&&(S+=2*b)}for(let L=0;L<g.length;L++)g[L]=g[L]/S;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=g,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:T}=this;f.dTheta.value=p,f.mipInt.value=T-i;const x=this._sizeLods[s],M=3*x*(s>T-qi?s-T+qi:0),E=4*(this._cubeSize-x);nr(t,M,E,3*x,2*x),c.setRenderTarget(t),c.render(d,$r)}}function HS(n){const e=[],t=[],i=[];let s=n;const r=n-qi+1+th.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let c=1/a;o>n-qi?c=th[o-n+qi-1]:o===0&&(c=0),t.push(c);const l=1/(a-2),u=-l,d=1+l,f=[u,u,d,u,d,d,u,u,d,d,u,d],h=6,p=6,v=3,m=2,g=1,S=new Float32Array(v*p*h),T=new Float32Array(m*p*h),x=new Float32Array(g*p*h);for(let E=0;E<h;E++){const L=E%3*2/3-1,y=E>2?0:-1,b=[L,y,0,L+2/3,y,0,L+2/3,y+1,0,L,y,0,L+2/3,y+1,0,L,y+1,0];S.set(b,v*p*E),T.set(f,m*p*E);const N=[E,E,E,E,E,E];x.set(N,g*p*E)}const M=new un;M.setAttribute("position",new cn(S,v)),M.setAttribute("uv",new cn(T,m)),M.setAttribute("faceIndex",new cn(x,g)),i.push(new kt(M,null)),s>qi&&s--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function sh(n,e,t){const i=new oi(n,e,t);return i.texture.mapping=uc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function nr(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function VS(n,e,t){return new li({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:BS,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:hc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function GS(n,e,t){const i=new Float32Array(xs),s=new X(0,1,0);return new li({name:"SphericalGaussianBlur",defines:{n:xs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:hc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function rh(){return new li({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:hc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function oh(){return new li({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:hc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function hc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class Pm extends oi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new um(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new ns(5,5,5),r=new li({name:"CubemapFromEquirect",uniforms:wr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:dn,blending:Ei});r.uniforms.tEquirect.value=t;const o=new kt(s,r),a=t.minFilter;return t.minFilter===bi&&(t.minFilter=Lt),new Nv(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}}function WS(n){let e=new WeakMap,t=new WeakMap,i=null;function s(f,h=!1){return f==null?null:h?o(f):r(f)}function r(f){if(f&&f.isTexture){const h=f.mapping;if(h===bc||h===Mc)if(e.has(f)){const p=e.get(f).texture;return a(p,f.mapping)}else{const p=f.image;if(p&&p.height>0){const v=new Pm(p.height);return v.fromEquirectangularTexture(n,f),e.set(f,v),f.addEventListener("dispose",l),a(v.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture){const h=f.mapping,p=h===bc||h===Mc,v=h===ws||h===Sr;if(p||v){let m=t.get(f);const g=m!==void 0?m.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==g)return i===null&&(i=new ih(n)),m=p?i.fromEquirectangular(f,m):i.fromCubemap(f,m),m.texture.pmremVersion=f.pmremVersion,t.set(f,m),m.texture;if(m!==void 0)return m.texture;{const S=f.image;return p&&S&&S.height>0||v&&S&&c(S)?(i===null&&(i=new ih(n)),m=p?i.fromEquirectangular(f):i.fromCubemap(f),m.texture.pmremVersion=f.pmremVersion,t.set(f,m),f.addEventListener("dispose",u),m.texture):null}}}return f}function a(f,h){return h===bc?f.mapping=ws:h===Mc&&(f.mapping=Sr),f}function c(f){let h=0;const p=6;for(let v=0;v<p;v++)f[v]!==void 0&&h++;return h===p}function l(f){const h=f.target;h.removeEventListener("dispose",l);const p=e.get(h);p!==void 0&&(e.delete(h),p.dispose())}function u(f){const h=f.target;h.removeEventListener("dispose",u);const p=t.get(h);p!==void 0&&(t.delete(h),p.dispose())}function d(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:d}}function XS(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&pr("WebGLRenderer: "+i+" extension not supported."),s}}}function qS(n,e,t,i){const s={},r=new WeakMap;function o(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const p in f.attributes)e.remove(f.attributes[p]);f.removeEventListener("dispose",o),delete s[f.id];const h=r.get(f);h&&(e.remove(h),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(d,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function c(d){const f=d.attributes;for(const h in f)e.update(f[h],n.ARRAY_BUFFER)}function l(d){const f=[],h=d.index,p=d.attributes.position;let v=0;if(p===void 0)return;if(h!==null){const S=h.array;v=h.version;for(let T=0,x=S.length;T<x;T+=3){const M=S[T+0],E=S[T+1],L=S[T+2];f.push(M,E,E,L,L,M)}}else{const S=p.array;v=p.version;for(let T=0,x=S.length/3-1;T<x;T+=3){const M=T+0,E=T+1,L=T+2;f.push(M,E,E,L,L,M)}}const m=new(p.count>=65535?sm:im)(f,1);m.version=v;const g=r.get(d);g&&e.remove(g),r.set(d,m)}function u(d){const f=r.get(d);if(f){const h=d.index;h!==null&&f.version<h.version&&l(d)}else l(d);return r.get(d)}return{get:a,update:c,getWireframeAttribute:u}}function YS(n,e,t){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,f){n.drawElements(i,f,r,d*o),t.update(f,i,1)}function l(d,f,h){h!==0&&(n.drawElementsInstanced(i,f,r,d*o,h),t.update(f,i,h))}function u(d,f,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,d,0,h);let v=0;for(let m=0;m<h;m++)v+=f[m];t.update(v,i,1)}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function KS(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:Ze("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function $S(n,e,t){const i=new WeakMap,s=new St;function r(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let f=i.get(a);if(f===void 0||f.count!==d){let N=function(){y.dispose(),i.delete(a),a.removeEventListener("dispose",N)};var h=N;f!==void 0&&f.texture.dispose();const p=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],S=a.morphAttributes.normal||[],T=a.morphAttributes.color||[];let x=0;p===!0&&(x=1),v===!0&&(x=2),m===!0&&(x=3);let M=a.attributes.position.count*x,E=1;M>e.maxTextureSize&&(E=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);const L=new Float32Array(M*E*4*d),y=new tm(L,M,E,d);y.type=wn,y.needsUpdate=!0;const b=x*4;for(let P=0;P<d;P++){const D=g[P],Y=S[P],R=T[P],A=M*E*4*P;for(let k=0;k<D.count;k++){const I=k*b;p===!0&&(s.fromBufferAttribute(D,k),L[A+I+0]=s.x,L[A+I+1]=s.y,L[A+I+2]=s.z,L[A+I+3]=0),v===!0&&(s.fromBufferAttribute(Y,k),L[A+I+4]=s.x,L[A+I+5]=s.y,L[A+I+6]=s.z,L[A+I+7]=0),m===!0&&(s.fromBufferAttribute(R,k),L[A+I+8]=s.x,L[A+I+9]=s.y,L[A+I+10]=s.z,L[A+I+11]=R.itemSize===4?s.w:1)}}f={count:d,texture:y,size:new Ee(M,E)},i.set(a,f),a.addEventListener("dispose",N)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let p=0;for(let m=0;m<l.length;m++)p+=l[m];const v=a.morphTargetsRelative?1:1-p;c.getUniforms().setValue(n,"morphTargetBaseInfluence",v),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function ZS(n,e,t,i,s){let r=new WeakMap;function o(l){const u=s.render.frame,d=l.geometry,f=e.get(l,d);if(r.get(f)!==u&&(e.update(f),r.set(f,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==u&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==u&&(h.update(),r.set(h,u))}return f}function a(){r=new WeakMap}function c(l){const u=l.target;u.removeEventListener("dispose",c),i.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:o,dispose:a}}const JS={[Op]:"LINEAR_TONE_MAPPING",[Fp]:"REINHARD_TONE_MAPPING",[Bp]:"CINEON_TONE_MAPPING",[zp]:"ACES_FILMIC_TONE_MAPPING",[Vp]:"AGX_TONE_MAPPING",[Gp]:"NEUTRAL_TONE_MAPPING",[Hp]:"CUSTOM_TONE_MAPPING"};function jS(n,e,t,i,s,r){const o=new oi(e,t,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,depthTexture:s?new Tr(e,t):void 0}),a=new oi(e,t,{type:Ci,depthBuffer:!1,stencilBuffer:!1}),c=new un;c.setAttribute("position",new Yt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Yt([0,2,0,0,2,0],2));const l=new hv({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new kt(c,l),d=new fc(-1,1,1,-1,0,1);let f=null,h=null,p=!1,v,m=null,g=[],S=!1;this.setSize=function(T,x){o.setSize(T,x),a.setSize(T,x);for(let M=0;M<g.length;M++){const E=g[M];E.setSize&&E.setSize(T,x)}},this.setEffects=function(T){g=T,S=g.length>0&&g[0].isRenderPass===!0;const x=o.width,M=o.height;for(let E=0;E<g.length;E++){const L=g[E];L.setSize&&L.setSize(x,M)}},this.begin=function(T,x){if(p||T.toneMapping===ri&&g.length===0)return!1;if(m=x,x!==null){const M=x.width,E=x.height;(o.width!==M||o.height!==E)&&this.setSize(M,E)}return S===!1&&T.setRenderTarget(o),v=T.toneMapping,T.toneMapping=ri,!0},this.hasRenderPass=function(){return S},this.end=function(T,x){T.toneMapping=v,p=!0;let M=o,E=a;for(let L=0;L<g.length;L++){const y=g[L];if(y.enabled!==!1&&(y.render(T,E,M,x),y.needsSwap!==!1)){const b=M;M=E,E=b}}if(f!==T.outputColorSpace||h!==T.toneMapping){f=T.outputColorSpace,h=T.toneMapping,l.defines={},ct.getTransfer(f)===gt&&(l.defines.SRGB_TRANSFER="");const L=JS[h];L&&(l.defines[L]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=M.texture,T.setRenderTarget(m),T.render(u,d),m=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){o.depthTexture&&o.depthTexture.dispose(),o.dispose(),a.dispose(),c.dispose(),l.dispose()}}const Im=new Gt,Pu=new Tr(1,1),Lm=new tm,Dm=new s_,Nm=new um,ah=[],ch=[],lh=new Float32Array(16),uh=new Float32Array(9),dh=new Float32Array(4);function kr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=ah[s];if(r===void 0&&(r=new Float32Array(s),ah[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function Wt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Xt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function pc(n,e){let t=ch[e];t===void 0&&(t=new Int32Array(e),ch[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function QS(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function eb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Wt(t,e))return;n.uniform2fv(this.addr,e),Xt(t,e)}}function tb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Wt(t,e))return;n.uniform3fv(this.addr,e),Xt(t,e)}}function nb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Wt(t,e))return;n.uniform4fv(this.addr,e),Xt(t,e)}}function ib(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Wt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Xt(t,e)}else{if(Wt(t,i))return;dh.set(i),n.uniformMatrix2fv(this.addr,!1,dh),Xt(t,i)}}function sb(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Wt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Xt(t,e)}else{if(Wt(t,i))return;uh.set(i),n.uniformMatrix3fv(this.addr,!1,uh),Xt(t,i)}}function rb(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Wt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Xt(t,e)}else{if(Wt(t,i))return;lh.set(i),n.uniformMatrix4fv(this.addr,!1,lh),Xt(t,i)}}function ob(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function ab(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Wt(t,e))return;n.uniform2iv(this.addr,e),Xt(t,e)}}function cb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Wt(t,e))return;n.uniform3iv(this.addr,e),Xt(t,e)}}function lb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Wt(t,e))return;n.uniform4iv(this.addr,e),Xt(t,e)}}function ub(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function db(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Wt(t,e))return;n.uniform2uiv(this.addr,e),Xt(t,e)}}function fb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Wt(t,e))return;n.uniform3uiv(this.addr,e),Xt(t,e)}}function hb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Wt(t,e))return;n.uniform4uiv(this.addr,e),Xt(t,e)}}function pb(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Pu.compareFunction=t.isReversedDepthBuffer()?ud:ld,r=Pu):r=Im,t.setTexture2D(e||r,s)}function mb(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Dm,s)}function gb(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Nm,s)}function _b(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Lm,s)}function vb(n){switch(n){case 5126:return QS;case 35664:return eb;case 35665:return tb;case 35666:return nb;case 35674:return ib;case 35675:return sb;case 35676:return rb;case 5124:case 35670:return ob;case 35667:case 35671:return ab;case 35668:case 35672:return cb;case 35669:case 35673:return lb;case 5125:return ub;case 36294:return db;case 36295:return fb;case 36296:return hb;case 35678:case 36198:case 36298:case 36306:case 35682:return pb;case 35679:case 36299:case 36307:return mb;case 35680:case 36300:case 36308:case 36293:return gb;case 36289:case 36303:case 36311:case 36292:return _b}}function xb(n,e){n.uniform1fv(this.addr,e)}function yb(n,e){const t=kr(e,this.size,2);n.uniform2fv(this.addr,t)}function Sb(n,e){const t=kr(e,this.size,3);n.uniform3fv(this.addr,t)}function bb(n,e){const t=kr(e,this.size,4);n.uniform4fv(this.addr,t)}function Mb(n,e){const t=kr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Tb(n,e){const t=kr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Eb(n,e){const t=kr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function wb(n,e){n.uniform1iv(this.addr,e)}function Ab(n,e){n.uniform2iv(this.addr,e)}function Rb(n,e){n.uniform3iv(this.addr,e)}function Cb(n,e){n.uniform4iv(this.addr,e)}function Pb(n,e){n.uniform1uiv(this.addr,e)}function Ib(n,e){n.uniform2uiv(this.addr,e)}function Lb(n,e){n.uniform3uiv(this.addr,e)}function Db(n,e){n.uniform4uiv(this.addr,e)}function Nb(n,e,t){const i=this.cache,s=e.length,r=pc(t,s);Wt(i,r)||(n.uniform1iv(this.addr,r),Xt(i,r));let o;this.type===n.SAMPLER_2D_SHADOW?o=Pu:o=Im;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function kb(n,e,t){const i=this.cache,s=e.length,r=pc(t,s);Wt(i,r)||(n.uniform1iv(this.addr,r),Xt(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Dm,r[o])}function Ub(n,e,t){const i=this.cache,s=e.length,r=pc(t,s);Wt(i,r)||(n.uniform1iv(this.addr,r),Xt(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Nm,r[o])}function Ob(n,e,t){const i=this.cache,s=e.length,r=pc(t,s);Wt(i,r)||(n.uniform1iv(this.addr,r),Xt(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Lm,r[o])}function Fb(n){switch(n){case 5126:return xb;case 35664:return yb;case 35665:return Sb;case 35666:return bb;case 35674:return Mb;case 35675:return Tb;case 35676:return Eb;case 5124:case 35670:return wb;case 35667:case 35671:return Ab;case 35668:case 35672:return Rb;case 35669:case 35673:return Cb;case 5125:return Pb;case 36294:return Ib;case 36295:return Lb;case 36296:return Db;case 35678:case 36198:case 36298:case 36306:case 35682:return Nb;case 35679:case 36299:case 36307:return kb;case 35680:case 36300:case 36308:case 36293:return Ub;case 36289:case 36303:case 36311:case 36292:return Ob}}class Bb{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=vb(t.type)}}class zb{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Fb(t.type)}}class Hb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],i)}}}const ol=/(\w+)(\])?(\[|\.)?/g;function fh(n,e){n.seq.push(e),n.map[e.id]=e}function Vb(n,e,t){const i=n.name,s=i.length;for(ol.lastIndex=0;;){const r=ol.exec(i),o=ol.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){fh(t,l===void 0?new Bb(a,n,e):new zb(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new Hb(a),fh(t,d)),t=d}}}class Ba{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=e.getActiveUniform(t,o),c=e.getUniformLocation(t,a.name);Vb(a,c,this)}const s=[],r=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&i.push(o)}return i}}function hh(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const Gb=37297;let Wb=0;function Xb(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const ph=new Qe;function qb(n){ct._getMatrix(ph,ct.workingColorSpace,n);const e=`mat3( ${ph.elements.map(t=>t.toFixed(4))} )`;switch(ct.getTransfer(n)){case ja:return[e,"LinearTransferOETF"];case gt:return[e,"sRGBTransferOETF"];default:return Oe("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function mh(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+Xb(n.getShaderSource(e),a)}else return r}function Yb(n,e){const t=qb(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const Kb={[Op]:"Linear",[Fp]:"Reinhard",[Bp]:"Cineon",[zp]:"ACESFilmic",[Vp]:"AgX",[Gp]:"Neutral",[Hp]:"Custom"};function $b(n,e){const t=Kb[e];return t===void 0?(Oe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ea=new X;function Zb(){ct.getLuminanceCoefficients(Ea);const n=Ea.x.toFixed(4),e=Ea.y.toFixed(4),t=Ea.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Jb(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(lo).join(`
`)}function jb(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Qb(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function lo(n){return n!==""}function gh(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function _h(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const eM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Iu(n){return n.replace(eM,nM)}const tM=new Map;function nM(n,e){let t=it[e];if(t===void 0){const i=tM.get(e);if(i!==void 0)t=it[i],Oe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Iu(t)}const iM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function vh(n){return n.replace(iM,sM)}function sM(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function xh(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const rM={[Da]:"SHADOWMAP_TYPE_PCF",[oo]:"SHADOWMAP_TYPE_VSM"};function oM(n){return rM[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const aM={[ws]:"ENVMAP_TYPE_CUBE",[Sr]:"ENVMAP_TYPE_CUBE",[uc]:"ENVMAP_TYPE_CUBE_UV"};function cM(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":aM[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const lM={[Sr]:"ENVMAP_MODE_REFRACTION"};function uM(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":lM[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const dM={[Up]:"ENVMAP_BLENDING_MULTIPLY",[_0]:"ENVMAP_BLENDING_MIX",[v0]:"ENVMAP_BLENDING_ADD"};function fM(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":dM[n.combine]||"ENVMAP_BLENDING_NONE"}function hM(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function pM(n,e,t,i){const s=n.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=oM(t),l=cM(t),u=uM(t),d=fM(t),f=hM(t),h=Jb(t),p=jb(r),v=s.createProgram();let m,g,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(lo).join(`
`),m.length>0&&(m+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(lo).join(`
`),g.length>0&&(g+=`
`)):(m=[xh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(lo).join(`
`),g=[xh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ri?"#define TONE_MAPPING":"",t.toneMapping!==ri?it.tonemapping_pars_fragment:"",t.toneMapping!==ri?$b("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",it.colorspace_pars_fragment,Yb("linearToOutputTexel",t.outputColorSpace),Zb(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(lo).join(`
`)),o=Iu(o),o=gh(o,t),o=_h(o,t),a=Iu(a),a=gh(a,t),a=_h(a,t),o=vh(o),a=vh(a),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,g=["#define varying in",t.glslVersion===rf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===rf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const T=S+m+o,x=S+g+a,M=hh(s,s.VERTEX_SHADER,T),E=hh(s,s.FRAGMENT_SHADER,x);s.attachShader(v,M),s.attachShader(v,E),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function L(P){if(n.debug.checkShaderErrors){const D=s.getProgramInfoLog(v)||"",Y=s.getShaderInfoLog(M)||"",R=s.getShaderInfoLog(E)||"",A=D.trim(),k=Y.trim(),I=R.trim();let O=!0,F=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(O=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,v,M,E);else{const G=mh(s,M,"vertex"),U=mh(s,E,"fragment");Ze("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+A+`
`+G+`
`+U)}else A!==""?Oe("WebGLProgram: Program Info Log:",A):(k===""||I==="")&&(F=!1);F&&(P.diagnostics={runnable:O,programLog:A,vertexShader:{log:k,prefix:m},fragmentShader:{log:I,prefix:g}})}s.deleteShader(M),s.deleteShader(E),y=new Ba(s,v),b=Qb(s,v)}let y;this.getUniforms=function(){return y===void 0&&L(this),y};let b;this.getAttributes=function(){return b===void 0&&L(this),b};let N=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=s.getProgramParameter(v,Gb)),N},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Wb++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=M,this.fragmentShader=E,this}let mM=0;class gM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){const s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new _M(e),t.set(e,i)),i}}class _M{constructor(e){this.id=mM++,this.code=e,this.usedTimes=0}}function vM(n){return n===As||n===$a||n===Za}function xM(n,e,t,i,s,r){const o=new hd,a=new gM,c=new Set,l=[],u=new Map,d=i.logarithmicDepthBuffer;let f=i.precision;const h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(y){return c.add(y),y===0?"uv":`uv${y}`}function v(y,b,N,P,D,Y){const R=P.fog,A=D.geometry,k=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?P.environment:null,I=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,O=e.get(y.envMap||k,I),F=O&&O.mapping===uc?O.image.height:null,G=h[y.type];y.precision!==null&&(f=i.getMaxPrecision(y.precision),f!==y.precision&&Oe("WebGLProgram.getParameters:",y.precision,"not supported, using",f,"instead."));const U=A.morphAttributes.position||A.morphAttributes.normal||A.morphAttributes.color,$=U!==void 0?U.length:0;let ue=0;A.morphAttributes.position!==void 0&&(ue=1),A.morphAttributes.normal!==void 0&&(ue=2),A.morphAttributes.color!==void 0&&(ue=3);let we,Le,ne,le;if(G){const Ne=ti[G];we=Ne.vertexShader,Le=Ne.fragmentShader}else{we=y.vertexShader,Le=y.fragmentShader;const Ne=a.getVertexShaderStage(y),Dt=a.getFragmentShaderStage(y);a.update(y,Ne,Dt),ne=Ne.id,le=Dt.id}const fe=n.getRenderTarget(),Ae=n.state.buffers.depth.getReversed(),Fe=D.isInstancedMesh===!0,De=D.isBatchedMesh===!0,mt=!!y.map,je=!!y.matcap,Xe=!!O,Se=!!y.aoMap,Ce=!!y.lightMap,q=!!y.bumpMap&&y.wireframe===!1,W=!!y.normalMap,z=!!y.displacementMap,H=!!y.emissiveMap,re=!!y.metalnessMap,se=!!y.roughnessMap,B=y.anisotropy>0,pe=y.clearcoat>0,_e=y.dispersion>0,C=y.iridescence>0,_=y.sheen>0,V=y.transmission>0,K=B&&!!y.anisotropyMap,j=pe&&!!y.clearcoatMap,oe=pe&&!!y.clearcoatNormalMap,he=pe&&!!y.clearcoatRoughnessMap,ie=C&&!!y.iridescenceMap,ae=C&&!!y.iridescenceThicknessMap,me=_&&!!y.sheenColorMap,ke=_&&!!y.sheenRoughnessMap,xe=!!y.specularMap,ge=!!y.specularColorMap,Ge=!!y.specularIntensityMap,Ke=V&&!!y.transmissionMap,tt=V&&!!y.thicknessMap,Z=!!y.gradientMap,ve=!!y.alphaMap,ce=y.alphaTest>0,ye=!!y.alphaHash,Re=!!y.extensions;let de=ri;y.toneMapped&&(fe===null||fe.isXRRenderTarget===!0)&&(de=n.toneMapping);const ze={shaderID:G,shaderType:y.type,shaderName:y.name,vertexShader:we,fragmentShader:Le,defines:y.defines,customVertexShaderID:ne,customFragmentShaderID:le,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:f,batching:De,batchingColor:De&&D._colorsTexture!==null,instancing:Fe,instancingColor:Fe&&D.instanceColor!==null,instancingMorph:Fe&&D.morphTexture!==null,outputColorSpace:fe===null?n.outputColorSpace:fe.isXRRenderTarget===!0?fe.texture.colorSpace:ct.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:mt,matcap:je,envMap:Xe,envMapMode:Xe&&O.mapping,envMapCubeUVHeight:F,aoMap:Se,lightMap:Ce,bumpMap:q,normalMap:W,displacementMap:z,emissiveMap:H,normalMapObjectSpace:W&&y.normalMapType===E0,normalMapTangentSpace:W&&y.normalMapType===yu,packedNormalMap:W&&y.normalMapType===yu&&vM(y.normalMap.format),metalnessMap:re,roughnessMap:se,anisotropy:B,anisotropyMap:K,clearcoat:pe,clearcoatMap:j,clearcoatNormalMap:oe,clearcoatRoughnessMap:he,dispersion:_e,iridescence:C,iridescenceMap:ie,iridescenceThicknessMap:ae,sheen:_,sheenColorMap:me,sheenRoughnessMap:ke,specularMap:xe,specularColorMap:ge,specularIntensityMap:Ge,transmission:V,transmissionMap:Ke,thicknessMap:tt,gradientMap:Z,opaque:y.transparent===!1&&y.blending===hr&&y.alphaToCoverage===!1,alphaMap:ve,alphaTest:ce,alphaHash:ye,combine:y.combine,mapUv:mt&&p(y.map.channel),aoMapUv:Se&&p(y.aoMap.channel),lightMapUv:Ce&&p(y.lightMap.channel),bumpMapUv:q&&p(y.bumpMap.channel),normalMapUv:W&&p(y.normalMap.channel),displacementMapUv:z&&p(y.displacementMap.channel),emissiveMapUv:H&&p(y.emissiveMap.channel),metalnessMapUv:re&&p(y.metalnessMap.channel),roughnessMapUv:se&&p(y.roughnessMap.channel),anisotropyMapUv:K&&p(y.anisotropyMap.channel),clearcoatMapUv:j&&p(y.clearcoatMap.channel),clearcoatNormalMapUv:oe&&p(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:he&&p(y.clearcoatRoughnessMap.channel),iridescenceMapUv:ie&&p(y.iridescenceMap.channel),iridescenceThicknessMapUv:ae&&p(y.iridescenceThicknessMap.channel),sheenColorMapUv:me&&p(y.sheenColorMap.channel),sheenRoughnessMapUv:ke&&p(y.sheenRoughnessMap.channel),specularMapUv:xe&&p(y.specularMap.channel),specularColorMapUv:ge&&p(y.specularColorMap.channel),specularIntensityMapUv:Ge&&p(y.specularIntensityMap.channel),transmissionMapUv:Ke&&p(y.transmissionMap.channel),thicknessMapUv:tt&&p(y.thicknessMap.channel),alphaMapUv:ve&&p(y.alphaMap.channel),vertexTangents:!!A.attributes.tangent&&(W||B),vertexNormals:!!A.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!A.attributes.color&&A.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!A.attributes.uv&&(mt||ve),fog:!!R,useFog:y.fog===!0,fogExp2:!!R&&R.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||A.attributes.normal===void 0&&W===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Ae,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:A.attributes.position!==void 0,morphTargets:A.morphAttributes.position!==void 0,morphNormals:A.morphAttributes.normal!==void 0,morphColors:A.morphAttributes.color!==void 0,morphTargetsCount:$,morphTextureStride:ue,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:Y.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&N.length>0,shadowMapType:n.shadowMap.type,toneMapping:de,decodeVideoTexture:mt&&y.map.isVideoTexture===!0&&ct.getTransfer(y.map.colorSpace)===gt,decodeVideoTextureEmissive:H&&y.emissiveMap.isVideoTexture===!0&&ct.getTransfer(y.emissiveMap.colorSpace)===gt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===ni,flipSided:y.side===dn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Re&&y.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Re&&y.extensions.multiDraw===!0||De)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return ze.vertexUv1s=c.has(1),ze.vertexUv2s=c.has(2),ze.vertexUv3s=c.has(3),c.clear(),ze}function m(y){const b=[];if(y.shaderID?b.push(y.shaderID):(b.push(y.customVertexShaderID),b.push(y.customFragmentShaderID)),y.defines!==void 0)for(const N in y.defines)b.push(N),b.push(y.defines[N]);return y.isRawShaderMaterial===!1&&(g(b,y),S(b,y),b.push(n.outputColorSpace)),b.push(y.customProgramCacheKey),b.join()}function g(y,b){y.push(b.precision),y.push(b.outputColorSpace),y.push(b.envMapMode),y.push(b.envMapCubeUVHeight),y.push(b.mapUv),y.push(b.alphaMapUv),y.push(b.lightMapUv),y.push(b.aoMapUv),y.push(b.bumpMapUv),y.push(b.normalMapUv),y.push(b.displacementMapUv),y.push(b.emissiveMapUv),y.push(b.metalnessMapUv),y.push(b.roughnessMapUv),y.push(b.anisotropyMapUv),y.push(b.clearcoatMapUv),y.push(b.clearcoatNormalMapUv),y.push(b.clearcoatRoughnessMapUv),y.push(b.iridescenceMapUv),y.push(b.iridescenceThicknessMapUv),y.push(b.sheenColorMapUv),y.push(b.sheenRoughnessMapUv),y.push(b.specularMapUv),y.push(b.specularColorMapUv),y.push(b.specularIntensityMapUv),y.push(b.transmissionMapUv),y.push(b.thicknessMapUv),y.push(b.combine),y.push(b.fogExp2),y.push(b.sizeAttenuation),y.push(b.morphTargetsCount),y.push(b.morphAttributeCount),y.push(b.numDirLights),y.push(b.numPointLights),y.push(b.numSpotLights),y.push(b.numSpotLightMaps),y.push(b.numHemiLights),y.push(b.numRectAreaLights),y.push(b.numDirLightShadows),y.push(b.numPointLightShadows),y.push(b.numSpotLightShadows),y.push(b.numSpotLightShadowsWithMaps),y.push(b.numLightProbes),y.push(b.shadowMapType),y.push(b.toneMapping),y.push(b.numClippingPlanes),y.push(b.numClipIntersection),y.push(b.depthPacking)}function S(y,b){o.disableAll(),b.instancing&&o.enable(0),b.instancingColor&&o.enable(1),b.instancingMorph&&o.enable(2),b.matcap&&o.enable(3),b.envMap&&o.enable(4),b.normalMapObjectSpace&&o.enable(5),b.normalMapTangentSpace&&o.enable(6),b.clearcoat&&o.enable(7),b.iridescence&&o.enable(8),b.alphaTest&&o.enable(9),b.vertexColors&&o.enable(10),b.vertexAlphas&&o.enable(11),b.vertexUv1s&&o.enable(12),b.vertexUv2s&&o.enable(13),b.vertexUv3s&&o.enable(14),b.vertexTangents&&o.enable(15),b.anisotropy&&o.enable(16),b.alphaHash&&o.enable(17),b.batching&&o.enable(18),b.dispersion&&o.enable(19),b.batchingColor&&o.enable(20),b.gradientMap&&o.enable(21),b.packedNormalMap&&o.enable(22),b.vertexNormals&&o.enable(23),y.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reversedDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),b.numLightProbeGrids>0&&o.enable(22),b.hasPositionAttribute&&o.enable(23),y.push(o.mask)}function T(y){const b=h[y.type];let N;if(b){const P=ti[b];N=uv.clone(P.uniforms)}else N=y.uniforms;return N}function x(y,b){let N=u.get(b);return N!==void 0?++N.usedTimes:(N=new pM(n,b,y,s),l.push(N),u.set(b,N)),N}function M(y){if(--y.usedTimes===0){const b=l.indexOf(y);l[b]=l[l.length-1],l.pop(),u.delete(y.cacheKey),y.destroy()}}function E(y){a.remove(y)}function L(){a.dispose()}return{getParameters:v,getProgramCacheKey:m,getUniforms:T,acquireProgram:x,releaseProgram:M,releaseShaderCache:E,programs:l,dispose:L}}function yM(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,c){n.get(o)[a]=c}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function SM(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function yh(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Sh(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(f){let h=0;return f.isInstancedMesh&&(h+=2),f.isSkinnedMesh&&(h+=1),h}function a(f,h,p,v,m,g){let S=n[e];return S===void 0?(S={id:f.id,object:f,geometry:h,material:p,materialVariant:o(f),groupOrder:v,renderOrder:f.renderOrder,z:m,group:g},n[e]=S):(S.id=f.id,S.object=f,S.geometry=h,S.material=p,S.materialVariant=o(f),S.groupOrder=v,S.renderOrder=f.renderOrder,S.z=m,S.group=g),e++,S}function c(f,h,p,v,m,g){const S=a(f,h,p,v,m,g);p.transmission>0?i.push(S):p.transparent===!0?s.push(S):t.push(S)}function l(f,h,p,v,m,g){const S=a(f,h,p,v,m,g);p.transmission>0?i.unshift(S):p.transparent===!0?s.unshift(S):t.unshift(S)}function u(f,h,p){t.length>1&&t.sort(f||SM),i.length>1&&i.sort(h||yh),s.length>1&&s.sort(h||yh),p&&(t.reverse(),i.reverse(),s.reverse())}function d(){for(let f=e,h=n.length;f<h;f++){const p=n[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:c,unshift:l,finish:d,sort:u}}function bM(){let n=new WeakMap;function e(i,s){const r=n.get(i);let o;return r===void 0?(o=new Sh,n.set(i,[o])):s>=r.length?(o=new Sh,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function MM(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new X,color:new Je};break;case"SpotLight":t={position:new X,direction:new X,color:new Je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new X,color:new Je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new X,skyColor:new Je,groundColor:new Je};break;case"RectAreaLight":t={color:new Je,position:new X,halfWidth:new X,halfHeight:new X};break}return n[e.id]=t,t}}}function TM(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let EM=0;function wM(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function AM(n){const e=new MM,t=TM(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new X);const s=new X,r=new et,o=new et;function a(l){let u=0,d=0,f=0;for(let b=0;b<9;b++)i.probe[b].set(0,0,0);let h=0,p=0,v=0,m=0,g=0,S=0,T=0,x=0,M=0,E=0,L=0;l.sort(wM);for(let b=0,N=l.length;b<N;b++){const P=l[b],D=P.color,Y=P.intensity,R=P.distance;let A=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===As?A=P.shadow.map.texture:A=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)u+=D.r*Y,d+=D.g*Y,f+=D.b*Y;else if(P.isLightProbe){for(let k=0;k<9;k++)i.probe[k].addScaledVector(P.sh.coefficients[k],Y);L++}else if(P.isDirectionalLight){const k=e.get(P);if(k.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const I=P.shadow,O=t.get(P);O.shadowIntensity=I.intensity,O.shadowBias=I.bias,O.shadowNormalBias=I.normalBias,O.shadowRadius=I.radius,O.shadowMapSize=I.mapSize,i.directionalShadow[h]=O,i.directionalShadowMap[h]=A,i.directionalShadowMatrix[h]=P.shadow.matrix,S++}i.directional[h]=k,h++}else if(P.isSpotLight){const k=e.get(P);k.position.setFromMatrixPosition(P.matrixWorld),k.color.copy(D).multiplyScalar(Y),k.distance=R,k.coneCos=Math.cos(P.angle),k.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),k.decay=P.decay,i.spot[v]=k;const I=P.shadow;if(P.map&&(i.spotLightMap[M]=P.map,M++,I.updateMatrices(P),P.castShadow&&E++),i.spotLightMatrix[v]=I.matrix,P.castShadow){const O=t.get(P);O.shadowIntensity=I.intensity,O.shadowBias=I.bias,O.shadowNormalBias=I.normalBias,O.shadowRadius=I.radius,O.shadowMapSize=I.mapSize,i.spotShadow[v]=O,i.spotShadowMap[v]=A,x++}v++}else if(P.isRectAreaLight){const k=e.get(P);k.color.copy(D).multiplyScalar(Y),k.halfWidth.set(P.width*.5,0,0),k.halfHeight.set(0,P.height*.5,0),i.rectArea[m]=k,m++}else if(P.isPointLight){const k=e.get(P);if(k.color.copy(P.color).multiplyScalar(P.intensity),k.distance=P.distance,k.decay=P.decay,P.castShadow){const I=P.shadow,O=t.get(P);O.shadowIntensity=I.intensity,O.shadowBias=I.bias,O.shadowNormalBias=I.normalBias,O.shadowRadius=I.radius,O.shadowMapSize=I.mapSize,O.shadowCameraNear=I.camera.near,O.shadowCameraFar=I.camera.far,i.pointShadow[p]=O,i.pointShadowMap[p]=A,i.pointShadowMatrix[p]=P.shadow.matrix,T++}i.point[p]=k,p++}else if(P.isHemisphereLight){const k=e.get(P);k.skyColor.copy(P.color).multiplyScalar(Y),k.groundColor.copy(P.groundColor).multiplyScalar(Y),i.hemi[g]=k,g++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=be.LTC_FLOAT_1,i.rectAreaLTC2=be.LTC_FLOAT_2):(i.rectAreaLTC1=be.LTC_HALF_1,i.rectAreaLTC2=be.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=f;const y=i.hash;(y.directionalLength!==h||y.pointLength!==p||y.spotLength!==v||y.rectAreaLength!==m||y.hemiLength!==g||y.numDirectionalShadows!==S||y.numPointShadows!==T||y.numSpotShadows!==x||y.numSpotMaps!==M||y.numLightProbes!==L)&&(i.directional.length=h,i.spot.length=v,i.rectArea.length=m,i.point.length=p,i.hemi.length=g,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=T,i.pointShadowMap.length=T,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=T,i.spotLightMatrix.length=x+M-E,i.spotLightMap.length=M,i.numSpotLightShadowsWithMaps=E,i.numLightProbes=L,y.directionalLength=h,y.pointLength=p,y.spotLength=v,y.rectAreaLength=m,y.hemiLength=g,y.numDirectionalShadows=S,y.numPointShadows=T,y.numSpotShadows=x,y.numSpotMaps=M,y.numLightProbes=L,i.version=EM++)}function c(l,u){let d=0,f=0,h=0,p=0,v=0;const m=u.matrixWorldInverse;for(let g=0,S=l.length;g<S;g++){const T=l[g];if(T.isDirectionalLight){const x=i.directional[d];x.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),d++}else if(T.isSpotLight){const x=i.spot[h];x.position.setFromMatrixPosition(T.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),h++}else if(T.isRectAreaLight){const x=i.rectArea[p];x.position.setFromMatrixPosition(T.matrixWorld),x.position.applyMatrix4(m),o.identity(),r.copy(T.matrixWorld),r.premultiply(m),o.extractRotation(r),x.halfWidth.set(T.width*.5,0,0),x.halfHeight.set(0,T.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),p++}else if(T.isPointLight){const x=i.point[f];x.position.setFromMatrixPosition(T.matrixWorld),x.position.applyMatrix4(m),f++}else if(T.isHemisphereLight){const x=i.hemi[v];x.direction.setFromMatrixPosition(T.matrixWorld),x.direction.transformDirection(m),v++}}}return{setup:a,setupView:c,state:i}}function bh(n){const e=new AM(n),t=[],i=[],s=[];function r(f){d.camera=f,t.length=0,i.length=0,s.length=0}function o(f){t.push(f)}function a(f){i.push(f)}function c(f){s.push(f)}function l(){e.setup(t)}function u(f){e.setupView(t,f)}const d={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:a,pushLightProbeGrid:c}}function RM(n){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new bh(n),e.set(s,[a])):r>=o.length?(a=new bh(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const CM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,PM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,IM=[new X(1,0,0),new X(-1,0,0),new X(0,1,0),new X(0,-1,0),new X(0,0,1),new X(0,0,-1)],LM=[new X(0,-1,0),new X(0,-1,0),new X(0,0,1),new X(0,0,-1),new X(0,-1,0),new X(0,-1,0)],Mh=new et,Zr=new X,al=new X;function DM(n,e,t){let i=new _d;const s=new Ee,r=new Ee,o=new St,a=new pv,c=new mv,l={},u=t.maxTextureSize,d={[Ri]:dn,[dn]:Ri,[ni]:ni},f=new li({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ee},radius:{value:4}},vertexShader:CM,fragmentShader:PM}),h=f.clone();h.defines.HORIZONTAL_PASS=1;const p=new un;p.setAttribute("position",new cn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new kt(p,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Da;let g=this.type;this.render=function(E,L,y){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;this.type===jg&&(Oe("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Da);const b=n.getRenderTarget(),N=n.getActiveCubeFace(),P=n.getActiveMipmapLevel(),D=n.state;D.setBlending(Ei),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const Y=g!==this.type;Y&&L.traverse(function(R){R.material&&(Array.isArray(R.material)?R.material.forEach(A=>A.needsUpdate=!0):R.material.needsUpdate=!0)});for(let R=0,A=E.length;R<A;R++){const k=E[R],I=k.shadow;if(I===void 0){Oe("WebGLShadowMap:",k,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;s.copy(I.mapSize);const O=I.getFrameExtents();s.multiply(O),r.copy(I.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/O.x),s.x=r.x*O.x,I.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/O.y),s.y=r.y*O.y,I.mapSize.y=r.y));const F=n.state.buffers.depth.getReversed();if(I.camera._reversedDepth=F,I.map===null||Y===!0){if(I.map!==null&&(I.map.depthTexture!==null&&(I.map.depthTexture.dispose(),I.map.depthTexture=null),I.map.dispose()),this.type===oo){if(k.isPointLight){Oe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}I.map=new oi(s.x,s.y,{format:As,type:Ci,minFilter:Lt,magFilter:Lt,generateMipmaps:!1}),I.map.texture.name=k.name+".shadowMap",I.map.depthTexture=new Tr(s.x,s.y,wn),I.map.depthTexture.name=k.name+".shadowMapDepth",I.map.depthTexture.format=Pi,I.map.depthTexture.compareFunction=null,I.map.depthTexture.minFilter=It,I.map.depthTexture.magFilter=It}else k.isPointLight?(I.map=new Pm(s.x),I.map.depthTexture=new P_(s.x,ci)):(I.map=new oi(s.x,s.y),I.map.depthTexture=new Tr(s.x,s.y,ci)),I.map.depthTexture.name=k.name+".shadowMap",I.map.depthTexture.format=Pi,this.type===Da?(I.map.depthTexture.compareFunction=F?ud:ld,I.map.depthTexture.minFilter=Lt,I.map.depthTexture.magFilter=Lt):(I.map.depthTexture.compareFunction=null,I.map.depthTexture.minFilter=It,I.map.depthTexture.magFilter=It);I.camera.updateProjectionMatrix()}const G=I.map.isWebGLCubeRenderTarget?6:1;for(let U=0;U<G;U++){if(I.map.isWebGLCubeRenderTarget)n.setRenderTarget(I.map,U),n.clear();else{U===0&&(n.setRenderTarget(I.map),n.clear());const $=I.getViewport(U);o.set(r.x*$.x,r.y*$.y,r.x*$.z,r.y*$.w),D.viewport(o)}if(k.isPointLight){const $=I.camera,ue=I.matrix,we=k.distance||$.far;we!==$.far&&($.far=we,$.updateProjectionMatrix()),Zr.setFromMatrixPosition(k.matrixWorld),$.position.copy(Zr),al.copy($.position),al.add(IM[U]),$.up.copy(LM[U]),$.lookAt(al),$.updateMatrixWorld(),ue.makeTranslation(-Zr.x,-Zr.y,-Zr.z),Mh.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),I._frustum.setFromProjectionMatrix(Mh,$.coordinateSystem,$.reversedDepth)}else I.updateMatrices(k);i=I.getFrustum(),x(L,y,I.camera,k,this.type)}I.isPointLightShadow!==!0&&this.type===oo&&S(I,y),I.needsUpdate=!1}g=this.type,m.needsUpdate=!1,n.setRenderTarget(b,N,P)};function S(E,L){const y=e.update(v);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,h.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,h.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new oi(s.x,s.y,{format:As,type:Ci})),f.uniforms.shadow_pass.value=E.map.depthTexture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,n.setRenderTarget(E.mapPass),n.clear(),n.renderBufferDirect(L,null,y,f,v,null),h.uniforms.shadow_pass.value=E.mapPass.texture,h.uniforms.resolution.value=E.mapSize,h.uniforms.radius.value=E.radius,n.setRenderTarget(E.map),n.clear(),n.renderBufferDirect(L,null,y,h,v,null)}function T(E,L,y,b){let N=null;const P=y.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(P!==void 0)N=P;else if(N=y.isPointLight===!0?c:a,n.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0||L.alphaToCoverage===!0){const D=N.uuid,Y=L.uuid;let R=l[D];R===void 0&&(R={},l[D]=R);let A=R[Y];A===void 0&&(A=N.clone(),R[Y]=A,L.addEventListener("dispose",M)),N=A}if(N.visible=L.visible,N.wireframe=L.wireframe,b===oo?N.side=L.shadowSide!==null?L.shadowSide:L.side:N.side=L.shadowSide!==null?L.shadowSide:d[L.side],N.alphaMap=L.alphaMap,N.alphaTest=L.alphaToCoverage===!0?.5:L.alphaTest,N.map=L.map,N.clipShadows=L.clipShadows,N.clippingPlanes=L.clippingPlanes,N.clipIntersection=L.clipIntersection,N.displacementMap=L.displacementMap,N.displacementScale=L.displacementScale,N.displacementBias=L.displacementBias,N.wireframeLinewidth=L.wireframeLinewidth,N.linewidth=L.linewidth,y.isPointLight===!0&&N.isMeshDistanceMaterial===!0){const D=n.properties.get(N);D.light=y}return N}function x(E,L,y,b,N){if(E.visible===!1)return;if(E.layers.test(L.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&N===oo)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,E.matrixWorld);const Y=e.update(E),R=E.material;if(Array.isArray(R)){const A=Y.groups;for(let k=0,I=A.length;k<I;k++){const O=A[k],F=R[O.materialIndex];if(F&&F.visible){const G=T(E,F,b,N);E.onBeforeShadow(n,E,L,y,Y,G,O),n.renderBufferDirect(y,null,Y,G,E,O),E.onAfterShadow(n,E,L,y,Y,G,O)}}}else if(R.visible){const A=T(E,R,b,N);E.onBeforeShadow(n,E,L,y,Y,A,null),n.renderBufferDirect(y,null,Y,A,E,null),E.onAfterShadow(n,E,L,y,Y,A,null)}}const D=E.children;for(let Y=0,R=D.length;Y<R;Y++)x(D[Y],L,y,b,N)}function M(E){E.target.removeEventListener("dispose",M);for(const y in l){const b=l[y],N=E.target.uuid;N in b&&(b[N].dispose(),delete b[N])}}}function NM(n,e){function t(){let Z=!1;const ve=new St;let ce=null;const ye=new St(0,0,0,0);return{setMask:function(Re){ce!==Re&&!Z&&(n.colorMask(Re,Re,Re,Re),ce=Re)},setLocked:function(Re){Z=Re},setClear:function(Re,de,ze,Ne,Dt){Dt===!0&&(Re*=Ne,de*=Ne,ze*=Ne),ve.set(Re,de,ze,Ne),ye.equals(ve)===!1&&(n.clearColor(Re,de,ze,Ne),ye.copy(ve))},reset:function(){Z=!1,ce=null,ye.set(-1,0,0,0)}}}function i(){let Z=!1,ve=!1,ce=null,ye=null,Re=null;return{setReversed:function(de){if(ve!==de){const ze=e.get("EXT_clip_control");de?ze.clipControlEXT(ze.LOWER_LEFT_EXT,ze.ZERO_TO_ONE_EXT):ze.clipControlEXT(ze.LOWER_LEFT_EXT,ze.NEGATIVE_ONE_TO_ONE_EXT),ve=de;const Ne=Re;Re=null,this.setClear(Ne)}},getReversed:function(){return ve},setTest:function(de){de?fe(n.DEPTH_TEST):Ae(n.DEPTH_TEST)},setMask:function(de){ce!==de&&!Z&&(n.depthMask(de),ce=de)},setFunc:function(de){if(ve&&(de=U0[de]),ye!==de){switch(de){case Ul:n.depthFunc(n.NEVER);break;case Ol:n.depthFunc(n.ALWAYS);break;case Fl:n.depthFunc(n.LESS);break;case yr:n.depthFunc(n.LEQUAL);break;case Bl:n.depthFunc(n.EQUAL);break;case zl:n.depthFunc(n.GEQUAL);break;case Hl:n.depthFunc(n.GREATER);break;case Vl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ye=de}},setLocked:function(de){Z=de},setClear:function(de){Re!==de&&(Re=de,ve&&(de=1-de),n.clearDepth(de))},reset:function(){Z=!1,ce=null,ye=null,Re=null,ve=!1}}}function s(){let Z=!1,ve=null,ce=null,ye=null,Re=null,de=null,ze=null,Ne=null,Dt=null;return{setTest:function(Tt){Z||(Tt?fe(n.STENCIL_TEST):Ae(n.STENCIL_TEST))},setMask:function(Tt){ve!==Tt&&!Z&&(n.stencilMask(Tt),ve=Tt)},setFunc:function(Tt,Kn,$n){(ce!==Tt||ye!==Kn||Re!==$n)&&(n.stencilFunc(Tt,Kn,$n),ce=Tt,ye=Kn,Re=$n)},setOp:function(Tt,Kn,$n){(de!==Tt||ze!==Kn||Ne!==$n)&&(n.stencilOp(Tt,Kn,$n),de=Tt,ze=Kn,Ne=$n)},setLocked:function(Tt){Z=Tt},setClear:function(Tt){Dt!==Tt&&(n.clearStencil(Tt),Dt=Tt)},reset:function(){Z=!1,ve=null,ce=null,ye=null,Re=null,de=null,ze=null,Ne=null,Dt=null}}}const r=new t,o=new i,a=new s,c=new WeakMap,l=new WeakMap;let u={},d={},f={},h=new WeakMap,p=[],v=null,m=!1,g=null,S=null,T=null,x=null,M=null,E=null,L=null,y=new Je(0,0,0),b=0,N=!1,P=null,D=null,Y=null,R=null,A=null;const k=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let I=!1,O=0;const F=n.getParameter(n.VERSION);F.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(F)[1]),I=O>=1):F.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),I=O>=2);let G=null,U={};const $=n.getParameter(n.SCISSOR_BOX),ue=n.getParameter(n.VIEWPORT),we=new St().fromArray($),Le=new St().fromArray(ue);function ne(Z,ve,ce,ye){const Re=new Uint8Array(4),de=n.createTexture();n.bindTexture(Z,de),n.texParameteri(Z,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(Z,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ze=0;ze<ce;ze++)Z===n.TEXTURE_3D||Z===n.TEXTURE_2D_ARRAY?n.texImage3D(ve,0,n.RGBA,1,1,ye,0,n.RGBA,n.UNSIGNED_BYTE,Re):n.texImage2D(ve+ze,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Re);return de}const le={};le[n.TEXTURE_2D]=ne(n.TEXTURE_2D,n.TEXTURE_2D,1),le[n.TEXTURE_CUBE_MAP]=ne(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),le[n.TEXTURE_2D_ARRAY]=ne(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),le[n.TEXTURE_3D]=ne(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),fe(n.DEPTH_TEST),o.setFunc(yr),q(!1),W(jd),fe(n.CULL_FACE),Se(Ei);function fe(Z){u[Z]!==!0&&(n.enable(Z),u[Z]=!0)}function Ae(Z){u[Z]!==!1&&(n.disable(Z),u[Z]=!1)}function Fe(Z,ve){return f[Z]!==ve?(n.bindFramebuffer(Z,ve),f[Z]=ve,Z===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=ve),Z===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=ve),!0):!1}function De(Z,ve){let ce=p,ye=!1;if(Z){ce=h.get(ve),ce===void 0&&(ce=[],h.set(ve,ce));const Re=Z.textures;if(ce.length!==Re.length||ce[0]!==n.COLOR_ATTACHMENT0){for(let de=0,ze=Re.length;de<ze;de++)ce[de]=n.COLOR_ATTACHMENT0+de;ce.length=Re.length,ye=!0}}else ce[0]!==n.BACK&&(ce[0]=n.BACK,ye=!0);ye&&n.drawBuffers(ce)}function mt(Z){return v!==Z?(n.useProgram(Z),v=Z,!0):!1}const je={[vs]:n.FUNC_ADD,[e0]:n.FUNC_SUBTRACT,[t0]:n.FUNC_REVERSE_SUBTRACT};je[n0]=n.MIN,je[i0]=n.MAX;const Xe={[s0]:n.ZERO,[r0]:n.ONE,[o0]:n.SRC_COLOR,[Nl]:n.SRC_ALPHA,[f0]:n.SRC_ALPHA_SATURATE,[u0]:n.DST_COLOR,[c0]:n.DST_ALPHA,[a0]:n.ONE_MINUS_SRC_COLOR,[kl]:n.ONE_MINUS_SRC_ALPHA,[d0]:n.ONE_MINUS_DST_COLOR,[l0]:n.ONE_MINUS_DST_ALPHA,[h0]:n.CONSTANT_COLOR,[p0]:n.ONE_MINUS_CONSTANT_COLOR,[m0]:n.CONSTANT_ALPHA,[g0]:n.ONE_MINUS_CONSTANT_ALPHA};function Se(Z,ve,ce,ye,Re,de,ze,Ne,Dt,Tt){if(Z===Ei){m===!0&&(Ae(n.BLEND),m=!1);return}if(m===!1&&(fe(n.BLEND),m=!0),Z!==Qg){if(Z!==g||Tt!==N){if((S!==vs||M!==vs)&&(n.blendEquation(n.FUNC_ADD),S=vs,M=vs),Tt)switch(Z){case hr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Dl:n.blendFunc(n.ONE,n.ONE);break;case Qd:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case ef:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Ze("WebGLState: Invalid blending: ",Z);break}else switch(Z){case hr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Dl:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Qd:Ze("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ef:Ze("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ze("WebGLState: Invalid blending: ",Z);break}T=null,x=null,E=null,L=null,y.set(0,0,0),b=0,g=Z,N=Tt}return}Re=Re||ve,de=de||ce,ze=ze||ye,(ve!==S||Re!==M)&&(n.blendEquationSeparate(je[ve],je[Re]),S=ve,M=Re),(ce!==T||ye!==x||de!==E||ze!==L)&&(n.blendFuncSeparate(Xe[ce],Xe[ye],Xe[de],Xe[ze]),T=ce,x=ye,E=de,L=ze),(Ne.equals(y)===!1||Dt!==b)&&(n.blendColor(Ne.r,Ne.g,Ne.b,Dt),y.copy(Ne),b=Dt),g=Z,N=!1}function Ce(Z,ve){Z.side===ni?Ae(n.CULL_FACE):fe(n.CULL_FACE);let ce=Z.side===dn;ve&&(ce=!ce),q(ce),Z.blending===hr&&Z.transparent===!1?Se(Ei):Se(Z.blending,Z.blendEquation,Z.blendSrc,Z.blendDst,Z.blendEquationAlpha,Z.blendSrcAlpha,Z.blendDstAlpha,Z.blendColor,Z.blendAlpha,Z.premultipliedAlpha),o.setFunc(Z.depthFunc),o.setTest(Z.depthTest),o.setMask(Z.depthWrite),r.setMask(Z.colorWrite);const ye=Z.stencilWrite;a.setTest(ye),ye&&(a.setMask(Z.stencilWriteMask),a.setFunc(Z.stencilFunc,Z.stencilRef,Z.stencilFuncMask),a.setOp(Z.stencilFail,Z.stencilZFail,Z.stencilZPass)),H(Z.polygonOffset,Z.polygonOffsetFactor,Z.polygonOffsetUnits),Z.alphaToCoverage===!0?fe(n.SAMPLE_ALPHA_TO_COVERAGE):Ae(n.SAMPLE_ALPHA_TO_COVERAGE)}function q(Z){P!==Z&&(Z?n.frontFace(n.CW):n.frontFace(n.CCW),P=Z)}function W(Z){Z!==Zg?(fe(n.CULL_FACE),Z!==D&&(Z===jd?n.cullFace(n.BACK):Z===Jg?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ae(n.CULL_FACE),D=Z}function z(Z){Z!==Y&&(I&&n.lineWidth(Z),Y=Z)}function H(Z,ve,ce){Z?(fe(n.POLYGON_OFFSET_FILL),(R!==ve||A!==ce)&&(R=ve,A=ce,o.getReversed()&&(ve=-ve),n.polygonOffset(ve,ce))):Ae(n.POLYGON_OFFSET_FILL)}function re(Z){Z?fe(n.SCISSOR_TEST):Ae(n.SCISSOR_TEST)}function se(Z){Z===void 0&&(Z=n.TEXTURE0+k-1),G!==Z&&(n.activeTexture(Z),G=Z)}function B(Z,ve,ce){ce===void 0&&(G===null?ce=n.TEXTURE0+k-1:ce=G);let ye=U[ce];ye===void 0&&(ye={type:void 0,texture:void 0},U[ce]=ye),(ye.type!==Z||ye.texture!==ve)&&(G!==ce&&(n.activeTexture(ce),G=ce),n.bindTexture(Z,ve||le[Z]),ye.type=Z,ye.texture=ve)}function pe(){const Z=U[G];Z!==void 0&&Z.type!==void 0&&(n.bindTexture(Z.type,null),Z.type=void 0,Z.texture=void 0)}function _e(){try{n.compressedTexImage2D(...arguments)}catch(Z){Ze("WebGLState:",Z)}}function C(){try{n.compressedTexImage3D(...arguments)}catch(Z){Ze("WebGLState:",Z)}}function _(){try{n.texSubImage2D(...arguments)}catch(Z){Ze("WebGLState:",Z)}}function V(){try{n.texSubImage3D(...arguments)}catch(Z){Ze("WebGLState:",Z)}}function K(){try{n.compressedTexSubImage2D(...arguments)}catch(Z){Ze("WebGLState:",Z)}}function j(){try{n.compressedTexSubImage3D(...arguments)}catch(Z){Ze("WebGLState:",Z)}}function oe(){try{n.texStorage2D(...arguments)}catch(Z){Ze("WebGLState:",Z)}}function he(){try{n.texStorage3D(...arguments)}catch(Z){Ze("WebGLState:",Z)}}function ie(){try{n.texImage2D(...arguments)}catch(Z){Ze("WebGLState:",Z)}}function ae(){try{n.texImage3D(...arguments)}catch(Z){Ze("WebGLState:",Z)}}function me(Z){return d[Z]!==void 0?d[Z]:n.getParameter(Z)}function ke(Z,ve){d[Z]!==ve&&(n.pixelStorei(Z,ve),d[Z]=ve)}function xe(Z){we.equals(Z)===!1&&(n.scissor(Z.x,Z.y,Z.z,Z.w),we.copy(Z))}function ge(Z){Le.equals(Z)===!1&&(n.viewport(Z.x,Z.y,Z.z,Z.w),Le.copy(Z))}function Ge(Z,ve){let ce=l.get(ve);ce===void 0&&(ce=new WeakMap,l.set(ve,ce));let ye=ce.get(Z);ye===void 0&&(ye=n.getUniformBlockIndex(ve,Z.name),ce.set(Z,ye))}function Ke(Z,ve){const ye=l.get(ve).get(Z);c.get(ve)!==ye&&(n.uniformBlockBinding(ve,ye,Z.__bindingPointIndex),c.set(ve,ye))}function tt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),u={},d={},G=null,U={},f={},h=new WeakMap,p=[],v=null,m=!1,g=null,S=null,T=null,x=null,M=null,E=null,L=null,y=new Je(0,0,0),b=0,N=!1,P=null,D=null,Y=null,R=null,A=null,we.set(0,0,n.canvas.width,n.canvas.height),Le.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:fe,disable:Ae,bindFramebuffer:Fe,drawBuffers:De,useProgram:mt,setBlending:Se,setMaterial:Ce,setFlipSided:q,setCullFace:W,setLineWidth:z,setPolygonOffset:H,setScissorTest:re,activeTexture:se,bindTexture:B,unbindTexture:pe,compressedTexImage2D:_e,compressedTexImage3D:C,texImage2D:ie,texImage3D:ae,pixelStorei:ke,getParameter:me,updateUBOMapping:Ge,uniformBlockBinding:Ke,texStorage2D:oe,texStorage3D:he,texSubImage2D:_,texSubImage3D:V,compressedTexSubImage2D:K,compressedTexSubImage3D:j,scissor:xe,viewport:ge,reset:tt}}function kM(n,e,t,i,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ee,u=new WeakMap,d=new Set;let f;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(C,_){return p?new OffscreenCanvas(C,_):Eo("canvas")}function m(C,_,V){let K=1;const j=_e(C);if((j.width>V||j.height>V)&&(K=V/Math.max(j.width,j.height)),K<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const oe=Math.floor(K*j.width),he=Math.floor(K*j.height);f===void 0&&(f=v(oe,he));const ie=_?v(oe,he):f;return ie.width=oe,ie.height=he,ie.getContext("2d").drawImage(C,0,0,oe,he),Oe("WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+oe+"x"+he+")."),ie}else return"data"in C&&Oe("WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),C;return C}function g(C){return C.generateMipmaps}function S(C){n.generateMipmap(C)}function T(C){return C.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?n.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function x(C,_,V,K,j,oe=!1){if(C!==null){if(n[C]!==void 0)return n[C];Oe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let he;K&&(he=e.get("EXT_texture_norm16"),he||Oe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ie=_;if(_===n.RED&&(V===n.FLOAT&&(ie=n.R32F),V===n.HALF_FLOAT&&(ie=n.R16F),V===n.UNSIGNED_BYTE&&(ie=n.R8),V===n.UNSIGNED_SHORT&&he&&(ie=he.R16_EXT),V===n.SHORT&&he&&(ie=he.R16_SNORM_EXT)),_===n.RED_INTEGER&&(V===n.UNSIGNED_BYTE&&(ie=n.R8UI),V===n.UNSIGNED_SHORT&&(ie=n.R16UI),V===n.UNSIGNED_INT&&(ie=n.R32UI),V===n.BYTE&&(ie=n.R8I),V===n.SHORT&&(ie=n.R16I),V===n.INT&&(ie=n.R32I)),_===n.RG&&(V===n.FLOAT&&(ie=n.RG32F),V===n.HALF_FLOAT&&(ie=n.RG16F),V===n.UNSIGNED_BYTE&&(ie=n.RG8),V===n.UNSIGNED_SHORT&&he&&(ie=he.RG16_EXT),V===n.SHORT&&he&&(ie=he.RG16_SNORM_EXT)),_===n.RG_INTEGER&&(V===n.UNSIGNED_BYTE&&(ie=n.RG8UI),V===n.UNSIGNED_SHORT&&(ie=n.RG16UI),V===n.UNSIGNED_INT&&(ie=n.RG32UI),V===n.BYTE&&(ie=n.RG8I),V===n.SHORT&&(ie=n.RG16I),V===n.INT&&(ie=n.RG32I)),_===n.RGB_INTEGER&&(V===n.UNSIGNED_BYTE&&(ie=n.RGB8UI),V===n.UNSIGNED_SHORT&&(ie=n.RGB16UI),V===n.UNSIGNED_INT&&(ie=n.RGB32UI),V===n.BYTE&&(ie=n.RGB8I),V===n.SHORT&&(ie=n.RGB16I),V===n.INT&&(ie=n.RGB32I)),_===n.RGBA_INTEGER&&(V===n.UNSIGNED_BYTE&&(ie=n.RGBA8UI),V===n.UNSIGNED_SHORT&&(ie=n.RGBA16UI),V===n.UNSIGNED_INT&&(ie=n.RGBA32UI),V===n.BYTE&&(ie=n.RGBA8I),V===n.SHORT&&(ie=n.RGBA16I),V===n.INT&&(ie=n.RGBA32I)),_===n.RGB&&(V===n.UNSIGNED_SHORT&&he&&(ie=he.RGB16_EXT),V===n.SHORT&&he&&(ie=he.RGB16_SNORM_EXT),V===n.UNSIGNED_INT_5_9_9_9_REV&&(ie=n.RGB9_E5),V===n.UNSIGNED_INT_10F_11F_11F_REV&&(ie=n.R11F_G11F_B10F)),_===n.RGBA){const ae=oe?ja:ct.getTransfer(j);V===n.FLOAT&&(ie=n.RGBA32F),V===n.HALF_FLOAT&&(ie=n.RGBA16F),V===n.UNSIGNED_BYTE&&(ie=ae===gt?n.SRGB8_ALPHA8:n.RGBA8),V===n.UNSIGNED_SHORT&&he&&(ie=he.RGBA16_EXT),V===n.SHORT&&he&&(ie=he.RGBA16_SNORM_EXT),V===n.UNSIGNED_SHORT_4_4_4_4&&(ie=n.RGBA4),V===n.UNSIGNED_SHORT_5_5_5_1&&(ie=n.RGB5_A1)}return(ie===n.R16F||ie===n.R32F||ie===n.RG16F||ie===n.RG32F||ie===n.RGBA16F||ie===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ie}function M(C,_){let V;return C?_===null||_===ci||_===So?V=n.DEPTH24_STENCIL8:_===wn?V=n.DEPTH32F_STENCIL8:_===yo&&(V=n.DEPTH24_STENCIL8,Oe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===ci||_===So?V=n.DEPTH_COMPONENT24:_===wn?V=n.DEPTH_COMPONENT32F:_===yo&&(V=n.DEPTH_COMPONENT16),V}function E(C,_){return g(C)===!0||C.isFramebufferTexture&&C.minFilter!==It&&C.minFilter!==Lt?Math.log2(Math.max(_.width,_.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?_.mipmaps.length:1}function L(C){const _=C.target;_.removeEventListener("dispose",L),b(_),_.isVideoTexture&&u.delete(_),_.isHTMLTexture&&d.delete(_)}function y(C){const _=C.target;_.removeEventListener("dispose",y),P(_)}function b(C){const _=i.get(C);if(_.__webglInit===void 0)return;const V=C.source,K=h.get(V);if(K){const j=K[_.__cacheKey];j.usedTimes--,j.usedTimes===0&&N(C),Object.keys(K).length===0&&h.delete(V)}i.remove(C)}function N(C){const _=i.get(C);n.deleteTexture(_.__webglTexture);const V=C.source,K=h.get(V);delete K[_.__cacheKey],o.memory.textures--}function P(C){const _=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(_.__webglFramebuffer[K]))for(let j=0;j<_.__webglFramebuffer[K].length;j++)n.deleteFramebuffer(_.__webglFramebuffer[K][j]);else n.deleteFramebuffer(_.__webglFramebuffer[K]);_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer[K])}else{if(Array.isArray(_.__webglFramebuffer))for(let K=0;K<_.__webglFramebuffer.length;K++)n.deleteFramebuffer(_.__webglFramebuffer[K]);else n.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&n.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let K=0;K<_.__webglColorRenderbuffer.length;K++)_.__webglColorRenderbuffer[K]&&n.deleteRenderbuffer(_.__webglColorRenderbuffer[K]);_.__webglDepthRenderbuffer&&n.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const V=C.textures;for(let K=0,j=V.length;K<j;K++){const oe=i.get(V[K]);oe.__webglTexture&&(n.deleteTexture(oe.__webglTexture),o.memory.textures--),i.remove(V[K])}i.remove(C)}let D=0;function Y(){D=0}function R(){return D}function A(C){D=C}function k(){const C=D;return C>=s.maxTextures&&Oe("WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),D+=1,C}function I(C){const _=[];return _.push(C.wrapS),_.push(C.wrapT),_.push(C.wrapR||0),_.push(C.magFilter),_.push(C.minFilter),_.push(C.anisotropy),_.push(C.internalFormat),_.push(C.format),_.push(C.type),_.push(C.generateMipmaps),_.push(C.premultiplyAlpha),_.push(C.flipY),_.push(C.unpackAlignment),_.push(C.colorSpace),_.join()}function O(C,_){const V=i.get(C);if(C.isVideoTexture&&B(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&V.__version!==C.version){const K=C.image;if(K===null)Oe("WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)Oe("WebGLRenderer: Texture marked for update but image is incomplete");else{Ae(V,C,_);return}}else C.isExternalTexture&&(V.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,V.__webglTexture,n.TEXTURE0+_)}function F(C,_){const V=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&V.__version!==C.version){Ae(V,C,_);return}else C.isExternalTexture&&(V.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,V.__webglTexture,n.TEXTURE0+_)}function G(C,_){const V=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&V.__version!==C.version){Ae(V,C,_);return}t.bindTexture(n.TEXTURE_3D,V.__webglTexture,n.TEXTURE0+_)}function U(C,_){const V=i.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&V.__version!==C.version){Fe(V,C,_);return}t.bindTexture(n.TEXTURE_CUBE_MAP,V.__webglTexture,n.TEXTURE0+_)}const $={[br]:n.REPEAT,[ii]:n.CLAMP_TO_EDGE,[Ka]:n.MIRRORED_REPEAT},ue={[It]:n.NEAREST,[Xp]:n.NEAREST_MIPMAP_NEAREST,[ao]:n.NEAREST_MIPMAP_LINEAR,[Lt]:n.LINEAR,[Na]:n.LINEAR_MIPMAP_NEAREST,[bi]:n.LINEAR_MIPMAP_LINEAR},we={[w0]:n.NEVER,[I0]:n.ALWAYS,[A0]:n.LESS,[ld]:n.LEQUAL,[R0]:n.EQUAL,[ud]:n.GEQUAL,[C0]:n.GREATER,[P0]:n.NOTEQUAL};function Le(C,_){if(_.type===wn&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===Lt||_.magFilter===Na||_.magFilter===ao||_.magFilter===bi||_.minFilter===Lt||_.minFilter===Na||_.minFilter===ao||_.minFilter===bi)&&Oe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(C,n.TEXTURE_WRAP_S,$[_.wrapS]),n.texParameteri(C,n.TEXTURE_WRAP_T,$[_.wrapT]),(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)&&n.texParameteri(C,n.TEXTURE_WRAP_R,$[_.wrapR]),n.texParameteri(C,n.TEXTURE_MAG_FILTER,ue[_.magFilter]),n.texParameteri(C,n.TEXTURE_MIN_FILTER,ue[_.minFilter]),_.compareFunction&&(n.texParameteri(C,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(C,n.TEXTURE_COMPARE_FUNC,we[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===It||_.minFilter!==ao&&_.minFilter!==bi||_.type===wn&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){const V=e.get("EXT_texture_filter_anisotropic");n.texParameterf(C,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function ne(C,_){let V=!1;C.__webglInit===void 0&&(C.__webglInit=!0,_.addEventListener("dispose",L));const K=_.source;let j=h.get(K);j===void 0&&(j={},h.set(K,j));const oe=I(_);if(oe!==C.__cacheKey){j[oe]===void 0&&(j[oe]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,V=!0),j[oe].usedTimes++;const he=j[C.__cacheKey];he!==void 0&&(j[C.__cacheKey].usedTimes--,he.usedTimes===0&&N(_)),C.__cacheKey=oe,C.__webglTexture=j[oe].texture}return V}function le(C,_,V){return Math.floor(Math.floor(C/V)/_)}function fe(C,_,V,K){const oe=C.updateRanges;if(oe.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,_.width,_.height,V,K,_.data);else{oe.sort((ke,xe)=>ke.start-xe.start);let he=0;for(let ke=1;ke<oe.length;ke++){const xe=oe[he],ge=oe[ke],Ge=xe.start+xe.count,Ke=le(ge.start,_.width,4),tt=le(xe.start,_.width,4);ge.start<=Ge+1&&Ke===tt&&le(ge.start+ge.count-1,_.width,4)===Ke?xe.count=Math.max(xe.count,ge.start+ge.count-xe.start):(++he,oe[he]=ge)}oe.length=he+1;const ie=t.getParameter(n.UNPACK_ROW_LENGTH),ae=t.getParameter(n.UNPACK_SKIP_PIXELS),me=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,_.width);for(let ke=0,xe=oe.length;ke<xe;ke++){const ge=oe[ke],Ge=Math.floor(ge.start/4),Ke=Math.ceil(ge.count/4),tt=Ge%_.width,Z=Math.floor(Ge/_.width),ve=Ke,ce=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,tt),t.pixelStorei(n.UNPACK_SKIP_ROWS,Z),t.texSubImage2D(n.TEXTURE_2D,0,tt,Z,ve,ce,V,K,_.data)}C.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,ie),t.pixelStorei(n.UNPACK_SKIP_PIXELS,ae),t.pixelStorei(n.UNPACK_SKIP_ROWS,me)}}function Ae(C,_,V){let K=n.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(K=n.TEXTURE_2D_ARRAY),_.isData3DTexture&&(K=n.TEXTURE_3D);const j=ne(C,_),oe=_.source;t.bindTexture(K,C.__webglTexture,n.TEXTURE0+V);const he=i.get(oe);if(oe.version!==he.__version||j===!0){if(t.activeTexture(n.TEXTURE0+V),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){const ce=ct.getPrimaries(ct.workingColorSpace),ye=_.colorSpace===Wi?null:ct.getPrimaries(_.colorSpace),Re=_.colorSpace===Wi||ce===ye?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re)}t.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment);let ae=m(_.image,!1,s.maxTextureSize);ae=pe(_,ae);const me=r.convert(_.format,_.colorSpace),ke=r.convert(_.type);let xe=x(_.internalFormat,me,ke,_.normalized,_.colorSpace,_.isVideoTexture);Le(K,_);let ge;const Ge=_.mipmaps,Ke=_.isVideoTexture!==!0,tt=he.__version===void 0||j===!0,Z=oe.dataReady,ve=E(_,ae);if(_.isDepthTexture)xe=M(_.format===Ss,_.type),tt&&(Ke?t.texStorage2D(n.TEXTURE_2D,1,xe,ae.width,ae.height):t.texImage2D(n.TEXTURE_2D,0,xe,ae.width,ae.height,0,me,ke,null));else if(_.isDataTexture)if(Ge.length>0){Ke&&tt&&t.texStorage2D(n.TEXTURE_2D,ve,xe,Ge[0].width,Ge[0].height);for(let ce=0,ye=Ge.length;ce<ye;ce++)ge=Ge[ce],Ke?Z&&t.texSubImage2D(n.TEXTURE_2D,ce,0,0,ge.width,ge.height,me,ke,ge.data):t.texImage2D(n.TEXTURE_2D,ce,xe,ge.width,ge.height,0,me,ke,ge.data);_.generateMipmaps=!1}else Ke?(tt&&t.texStorage2D(n.TEXTURE_2D,ve,xe,ae.width,ae.height),Z&&fe(_,ae,me,ke)):t.texImage2D(n.TEXTURE_2D,0,xe,ae.width,ae.height,0,me,ke,ae.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Ke&&tt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ve,xe,Ge[0].width,Ge[0].height,ae.depth);for(let ce=0,ye=Ge.length;ce<ye;ce++)if(ge=Ge[ce],_.format!==An)if(me!==null)if(Ke){if(Z)if(_.layerUpdates.size>0){const Re=eh(ge.width,ge.height,_.format,_.type);for(const de of _.layerUpdates){const ze=ge.data.subarray(de*Re/ge.data.BYTES_PER_ELEMENT,(de+1)*Re/ge.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ce,0,0,de,ge.width,ge.height,1,me,ze)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ce,0,0,0,ge.width,ge.height,ae.depth,me,ge.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ce,xe,ge.width,ge.height,ae.depth,0,ge.data,0,0);else Oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ke?Z&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ce,0,0,0,ge.width,ge.height,ae.depth,me,ke,ge.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ce,xe,ge.width,ge.height,ae.depth,0,me,ke,ge.data)}else{Ke&&tt&&t.texStorage2D(n.TEXTURE_2D,ve,xe,Ge[0].width,Ge[0].height);for(let ce=0,ye=Ge.length;ce<ye;ce++)ge=Ge[ce],_.format!==An?me!==null?Ke?Z&&t.compressedTexSubImage2D(n.TEXTURE_2D,ce,0,0,ge.width,ge.height,me,ge.data):t.compressedTexImage2D(n.TEXTURE_2D,ce,xe,ge.width,ge.height,0,ge.data):Oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ke?Z&&t.texSubImage2D(n.TEXTURE_2D,ce,0,0,ge.width,ge.height,me,ke,ge.data):t.texImage2D(n.TEXTURE_2D,ce,xe,ge.width,ge.height,0,me,ke,ge.data)}else if(_.isDataArrayTexture)if(Ke){if(tt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ve,xe,ae.width,ae.height,ae.depth),Z)if(_.layerUpdates.size>0){const ce=eh(ae.width,ae.height,_.format,_.type);for(const ye of _.layerUpdates){const Re=ae.data.subarray(ye*ce/ae.data.BYTES_PER_ELEMENT,(ye+1)*ce/ae.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ye,ae.width,ae.height,1,me,ke,Re)}_.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,me,ke,ae.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,xe,ae.width,ae.height,ae.depth,0,me,ke,ae.data);else if(_.isData3DTexture)Ke?(tt&&t.texStorage3D(n.TEXTURE_3D,ve,xe,ae.width,ae.height,ae.depth),Z&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,me,ke,ae.data)):t.texImage3D(n.TEXTURE_3D,0,xe,ae.width,ae.height,ae.depth,0,me,ke,ae.data);else if(_.isFramebufferTexture){if(tt)if(Ke)t.texStorage2D(n.TEXTURE_2D,ve,xe,ae.width,ae.height);else{let ce=ae.width,ye=ae.height;for(let Re=0;Re<ve;Re++)t.texImage2D(n.TEXTURE_2D,Re,xe,ce,ye,0,me,ke,null),ce>>=1,ye>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in n){const ce=n.canvas;if(ce.hasAttribute("layoutsubtree")||ce.setAttribute("layoutsubtree","true"),ae.parentNode!==ce){ce.appendChild(ae),d.add(_),ce.onpaint=ye=>{const Re=ye.changedElements;for(const de of d)Re.includes(de.image)&&(de.needsUpdate=!0)},ce.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,ae);else{const Re=n.RGBA,de=n.RGBA,ze=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Re,de,ze,ae)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Ge.length>0){if(Ke&&tt){const ce=_e(Ge[0]);t.texStorage2D(n.TEXTURE_2D,ve,xe,ce.width,ce.height)}for(let ce=0,ye=Ge.length;ce<ye;ce++)ge=Ge[ce],Ke?Z&&t.texSubImage2D(n.TEXTURE_2D,ce,0,0,me,ke,ge):t.texImage2D(n.TEXTURE_2D,ce,xe,me,ke,ge);_.generateMipmaps=!1}else if(Ke){if(tt){const ce=_e(ae);t.texStorage2D(n.TEXTURE_2D,ve,xe,ce.width,ce.height)}Z&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,me,ke,ae)}else t.texImage2D(n.TEXTURE_2D,0,xe,me,ke,ae);g(_)&&S(K),he.__version=oe.version,_.onUpdate&&_.onUpdate(_)}C.__version=_.version}function Fe(C,_,V){if(_.image.length!==6)return;const K=ne(C,_),j=_.source;t.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+V);const oe=i.get(j);if(j.version!==oe.__version||K===!0){t.activeTexture(n.TEXTURE0+V);const he=ct.getPrimaries(ct.workingColorSpace),ie=_.colorSpace===Wi?null:ct.getPrimaries(_.colorSpace),ae=_.colorSpace===Wi||he===ie?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ae);const me=_.isCompressedTexture||_.image[0].isCompressedTexture,ke=_.image[0]&&_.image[0].isDataTexture,xe=[];for(let de=0;de<6;de++)!me&&!ke?xe[de]=m(_.image[de],!0,s.maxCubemapSize):xe[de]=ke?_.image[de].image:_.image[de],xe[de]=pe(_,xe[de]);const ge=xe[0],Ge=r.convert(_.format,_.colorSpace),Ke=r.convert(_.type),tt=x(_.internalFormat,Ge,Ke,_.normalized,_.colorSpace),Z=_.isVideoTexture!==!0,ve=oe.__version===void 0||K===!0,ce=j.dataReady;let ye=E(_,ge);Le(n.TEXTURE_CUBE_MAP,_);let Re;if(me){Z&&ve&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ye,tt,ge.width,ge.height);for(let de=0;de<6;de++){Re=xe[de].mipmaps;for(let ze=0;ze<Re.length;ze++){const Ne=Re[ze];_.format!==An?Ge!==null?Z?ce&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,ze,0,0,Ne.width,Ne.height,Ge,Ne.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,ze,tt,Ne.width,Ne.height,0,Ne.data):Oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Z?ce&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,ze,0,0,Ne.width,Ne.height,Ge,Ke,Ne.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,ze,tt,Ne.width,Ne.height,0,Ge,Ke,Ne.data)}}}else{if(Re=_.mipmaps,Z&&ve){Re.length>0&&ye++;const de=_e(xe[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ye,tt,de.width,de.height)}for(let de=0;de<6;de++)if(ke){Z?ce&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,xe[de].width,xe[de].height,Ge,Ke,xe[de].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,tt,xe[de].width,xe[de].height,0,Ge,Ke,xe[de].data);for(let ze=0;ze<Re.length;ze++){const Dt=Re[ze].image[de].image;Z?ce&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,ze+1,0,0,Dt.width,Dt.height,Ge,Ke,Dt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,ze+1,tt,Dt.width,Dt.height,0,Ge,Ke,Dt.data)}}else{Z?ce&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,Ge,Ke,xe[de]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,tt,Ge,Ke,xe[de]);for(let ze=0;ze<Re.length;ze++){const Ne=Re[ze];Z?ce&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,ze+1,0,0,Ge,Ke,Ne.image[de]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,ze+1,tt,Ge,Ke,Ne.image[de])}}}g(_)&&S(n.TEXTURE_CUBE_MAP),oe.__version=j.version,_.onUpdate&&_.onUpdate(_)}C.__version=_.version}function De(C,_,V,K,j,oe){const he=r.convert(V.format,V.colorSpace),ie=r.convert(V.type),ae=x(V.internalFormat,he,ie,V.normalized,V.colorSpace),me=i.get(_),ke=i.get(V);if(ke.__renderTarget=_,!me.__hasExternalTextures){const xe=Math.max(1,_.width>>oe),ge=Math.max(1,_.height>>oe);j===n.TEXTURE_3D||j===n.TEXTURE_2D_ARRAY?t.texImage3D(j,oe,ae,xe,ge,_.depth,0,he,ie,null):t.texImage2D(j,oe,ae,xe,ge,0,he,ie,null)}t.bindFramebuffer(n.FRAMEBUFFER,C),se(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,K,j,ke.__webglTexture,0,re(_)):(j===n.TEXTURE_2D||j>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,K,j,ke.__webglTexture,oe),t.bindFramebuffer(n.FRAMEBUFFER,null)}function mt(C,_,V){if(n.bindRenderbuffer(n.RENDERBUFFER,C),_.depthBuffer){const K=_.depthTexture,j=K&&K.isDepthTexture?K.type:null,oe=M(_.stencilBuffer,j),he=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;se(_)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,re(_),oe,_.width,_.height):V?n.renderbufferStorageMultisample(n.RENDERBUFFER,re(_),oe,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,oe,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,he,n.RENDERBUFFER,C)}else{const K=_.textures;for(let j=0;j<K.length;j++){const oe=K[j],he=r.convert(oe.format,oe.colorSpace),ie=r.convert(oe.type),ae=x(oe.internalFormat,he,ie,oe.normalized,oe.colorSpace);se(_)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,re(_),ae,_.width,_.height):V?n.renderbufferStorageMultisample(n.RENDERBUFFER,re(_),ae,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,ae,_.width,_.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function je(C,_,V){const K=_.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,C),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const j=i.get(_.depthTexture);if(j.__renderTarget=_,(!j.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),K){if(j.__webglInit===void 0&&(j.__webglInit=!0,_.depthTexture.addEventListener("dispose",L)),j.__webglTexture===void 0){j.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,j.__webglTexture),Le(n.TEXTURE_CUBE_MAP,_.depthTexture);const me=r.convert(_.depthTexture.format),ke=r.convert(_.depthTexture.type);let xe;_.depthTexture.format===Pi?xe=n.DEPTH_COMPONENT24:_.depthTexture.format===Ss&&(xe=n.DEPTH24_STENCIL8);for(let ge=0;ge<6;ge++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,xe,_.width,_.height,0,me,ke,null)}}else O(_.depthTexture,0);const oe=j.__webglTexture,he=re(_),ie=K?n.TEXTURE_CUBE_MAP_POSITIVE_X+V:n.TEXTURE_2D,ae=_.depthTexture.format===Ss?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(_.depthTexture.format===Pi)se(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ae,ie,oe,0,he):n.framebufferTexture2D(n.FRAMEBUFFER,ae,ie,oe,0);else if(_.depthTexture.format===Ss)se(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ae,ie,oe,0,he):n.framebufferTexture2D(n.FRAMEBUFFER,ae,ie,oe,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Xe(C){const _=i.get(C),V=C.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==C.depthTexture){const K=C.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),K){const j=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,K.removeEventListener("dispose",j)};K.addEventListener("dispose",j),_.__depthDisposeCallback=j}_.__boundDepthTexture=K}if(C.depthTexture&&!_.__autoAllocateDepthBuffer)if(V)for(let K=0;K<6;K++)je(_.__webglFramebuffer[K],C,K);else{const K=C.texture.mipmaps;K&&K.length>0?je(_.__webglFramebuffer[0],C,0):je(_.__webglFramebuffer,C,0)}else if(V){_.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[K]),_.__webglDepthbuffer[K]===void 0)_.__webglDepthbuffer[K]=n.createRenderbuffer(),mt(_.__webglDepthbuffer[K],C,!1);else{const j=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,oe=_.__webglDepthbuffer[K];n.bindRenderbuffer(n.RENDERBUFFER,oe),n.framebufferRenderbuffer(n.FRAMEBUFFER,j,n.RENDERBUFFER,oe)}}else{const K=C.texture.mipmaps;if(K&&K.length>0?t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=n.createRenderbuffer(),mt(_.__webglDepthbuffer,C,!1);else{const j=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,oe=_.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,oe),n.framebufferRenderbuffer(n.FRAMEBUFFER,j,n.RENDERBUFFER,oe)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Se(C,_,V){const K=i.get(C);_!==void 0&&De(K.__webglFramebuffer,C,C.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),V!==void 0&&Xe(C)}function Ce(C){const _=C.texture,V=i.get(C),K=i.get(_);C.addEventListener("dispose",y);const j=C.textures,oe=C.isWebGLCubeRenderTarget===!0,he=j.length>1;if(he||(K.__webglTexture===void 0&&(K.__webglTexture=n.createTexture()),K.__version=_.version,o.memory.textures++),oe){V.__webglFramebuffer=[];for(let ie=0;ie<6;ie++)if(_.mipmaps&&_.mipmaps.length>0){V.__webglFramebuffer[ie]=[];for(let ae=0;ae<_.mipmaps.length;ae++)V.__webglFramebuffer[ie][ae]=n.createFramebuffer()}else V.__webglFramebuffer[ie]=n.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){V.__webglFramebuffer=[];for(let ie=0;ie<_.mipmaps.length;ie++)V.__webglFramebuffer[ie]=n.createFramebuffer()}else V.__webglFramebuffer=n.createFramebuffer();if(he)for(let ie=0,ae=j.length;ie<ae;ie++){const me=i.get(j[ie]);me.__webglTexture===void 0&&(me.__webglTexture=n.createTexture(),o.memory.textures++)}if(C.samples>0&&se(C)===!1){V.__webglMultisampledFramebuffer=n.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let ie=0;ie<j.length;ie++){const ae=j[ie];V.__webglColorRenderbuffer[ie]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,V.__webglColorRenderbuffer[ie]);const me=r.convert(ae.format,ae.colorSpace),ke=r.convert(ae.type),xe=x(ae.internalFormat,me,ke,ae.normalized,ae.colorSpace,C.isXRRenderTarget===!0),ge=re(C);n.renderbufferStorageMultisample(n.RENDERBUFFER,ge,xe,C.width,C.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ie,n.RENDERBUFFER,V.__webglColorRenderbuffer[ie])}n.bindRenderbuffer(n.RENDERBUFFER,null),C.depthBuffer&&(V.__webglDepthRenderbuffer=n.createRenderbuffer(),mt(V.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(oe){t.bindTexture(n.TEXTURE_CUBE_MAP,K.__webglTexture),Le(n.TEXTURE_CUBE_MAP,_);for(let ie=0;ie<6;ie++)if(_.mipmaps&&_.mipmaps.length>0)for(let ae=0;ae<_.mipmaps.length;ae++)De(V.__webglFramebuffer[ie][ae],C,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,ae);else De(V.__webglFramebuffer[ie],C,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0);g(_)&&S(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(he){for(let ie=0,ae=j.length;ie<ae;ie++){const me=j[ie],ke=i.get(me);let xe=n.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(xe=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(xe,ke.__webglTexture),Le(xe,me),De(V.__webglFramebuffer,C,me,n.COLOR_ATTACHMENT0+ie,xe,0),g(me)&&S(xe)}t.unbindTexture()}else{let ie=n.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ie=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ie,K.__webglTexture),Le(ie,_),_.mipmaps&&_.mipmaps.length>0)for(let ae=0;ae<_.mipmaps.length;ae++)De(V.__webglFramebuffer[ae],C,_,n.COLOR_ATTACHMENT0,ie,ae);else De(V.__webglFramebuffer,C,_,n.COLOR_ATTACHMENT0,ie,0);g(_)&&S(ie),t.unbindTexture()}C.depthBuffer&&Xe(C)}function q(C){const _=C.textures;for(let V=0,K=_.length;V<K;V++){const j=_[V];if(g(j)){const oe=T(C),he=i.get(j).__webglTexture;t.bindTexture(oe,he),S(oe),t.unbindTexture()}}}const W=[],z=[];function H(C){if(C.samples>0){if(se(C)===!1){const _=C.textures,V=C.width,K=C.height;let j=n.COLOR_BUFFER_BIT;const oe=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,he=i.get(C),ie=_.length>1;if(ie)for(let me=0;me<_.length;me++)t.bindFramebuffer(n.FRAMEBUFFER,he.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,he.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,he.__webglMultisampledFramebuffer);const ae=C.texture.mipmaps;ae&&ae.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,he.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,he.__webglFramebuffer);for(let me=0;me<_.length;me++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(j|=n.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(j|=n.STENCIL_BUFFER_BIT)),ie){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,he.__webglColorRenderbuffer[me]);const ke=i.get(_[me]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ke,0)}n.blitFramebuffer(0,0,V,K,0,0,V,K,j,n.NEAREST),c===!0&&(W.length=0,z.length=0,W.push(n.COLOR_ATTACHMENT0+me),C.depthBuffer&&C.resolveDepthBuffer===!1&&(W.push(oe),z.push(oe),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,z)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,W))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ie)for(let me=0;me<_.length;me++){t.bindFramebuffer(n.FRAMEBUFFER,he.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.RENDERBUFFER,he.__webglColorRenderbuffer[me]);const ke=i.get(_[me]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,he.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.TEXTURE_2D,ke,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,he.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&c){const _=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[_])}}}function re(C){return Math.min(s.maxSamples,C.samples)}function se(C){const _=i.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function B(C){const _=o.render.frame;u.get(C)!==_&&(u.set(C,_),C.update())}function pe(C,_){const V=C.colorSpace,K=C.format,j=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||V!==vn&&V!==Wi&&(ct.getTransfer(V)===gt?(K!==An||j!==gn)&&Oe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ze("WebGLTextures: Unsupported texture color space:",V)),_}function _e(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(l.width=C.naturalWidth||C.width,l.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(l.width=C.displayWidth,l.height=C.displayHeight):(l.width=C.width,l.height=C.height),l}this.allocateTextureUnit=k,this.resetTextureUnits=Y,this.getTextureUnits=R,this.setTextureUnits=A,this.setTexture2D=O,this.setTexture2DArray=F,this.setTexture3D=G,this.setTextureCube=U,this.rebindTextures=Se,this.setupRenderTarget=Ce,this.updateRenderTargetMipmap=q,this.updateMultisampleRenderTarget=H,this.setupDepthRenderbuffer=Xe,this.setupFrameBufferTexture=De,this.useMultisampledRTT=se,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function UM(n,e){function t(i,s=Wi){let r;const o=ct.getTransfer(s);if(i===gn)return n.UNSIGNED_BYTE;if(i===nd)return n.UNSIGNED_SHORT_4_4_4_4;if(i===id)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Kp)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===$p)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===qp)return n.BYTE;if(i===Yp)return n.SHORT;if(i===yo)return n.UNSIGNED_SHORT;if(i===td)return n.INT;if(i===ci)return n.UNSIGNED_INT;if(i===wn)return n.FLOAT;if(i===Ci)return n.HALF_FLOAT;if(i===Zp)return n.ALPHA;if(i===Jp)return n.RGB;if(i===An)return n.RGBA;if(i===Pi)return n.DEPTH_COMPONENT;if(i===Ss)return n.DEPTH_STENCIL;if(i===sd)return n.RED;if(i===rd)return n.RED_INTEGER;if(i===As)return n.RG;if(i===od)return n.RG_INTEGER;if(i===ad)return n.RGBA_INTEGER;if(i===ka||i===Ua||i===Oa||i===Fa)if(o===gt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===ka)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ua)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Oa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Fa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===ka)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ua)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Oa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Fa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Gl||i===Wl||i===Xl||i===ql)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Gl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Wl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Xl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ql)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Yl||i===Kl||i===$l||i===Zl||i===Jl||i===$a||i===jl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Yl||i===Kl)return o===gt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===$l)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Zl)return r.COMPRESSED_R11_EAC;if(i===Jl)return r.COMPRESSED_SIGNED_R11_EAC;if(i===$a)return r.COMPRESSED_RG11_EAC;if(i===jl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Ql||i===eu||i===tu||i===nu||i===iu||i===su||i===ru||i===ou||i===au||i===cu||i===lu||i===uu||i===du||i===fu)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Ql)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===eu)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===tu)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===nu)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===iu)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===su)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ru)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ou)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===au)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===cu)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===lu)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===uu)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===du)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===fu)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===hu||i===pu||i===mu)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===hu)return o===gt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===pu)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===mu)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===gu||i===_u||i===Za||i===vu)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===gu)return r.COMPRESSED_RED_RGTC1_EXT;if(i===_u)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Za)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===vu)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===So?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const OM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,FM=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class BM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new dm(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new li({vertexShader:OM,fragmentShader:FM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new kt(new is(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class zM extends os{constructor(e,t){super();const i=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,d=null,f=null,h=null,p=null;const v=typeof XRWebGLBinding<"u",m=new BM,g={},S=t.getContextAttributes();let T=null,x=null;const M=[],E=[],L=new Ee;let y=null;const b=new rn;b.viewport=new St;const N=new rn;N.viewport=new St;const P=[b,N],D=new kv;let Y=null,R=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ne){let le=M[ne];return le===void 0&&(le=new Pc,M[ne]=le),le.getTargetRaySpace()},this.getControllerGrip=function(ne){let le=M[ne];return le===void 0&&(le=new Pc,M[ne]=le),le.getGripSpace()},this.getHand=function(ne){let le=M[ne];return le===void 0&&(le=new Pc,M[ne]=le),le.getHandSpace()};function A(ne){const le=E.indexOf(ne.inputSource);if(le===-1)return;const fe=M[le];fe!==void 0&&(fe.update(ne.inputSource,ne.frame,l||o),fe.dispatchEvent({type:ne.type,data:ne.inputSource}))}function k(){s.removeEventListener("select",A),s.removeEventListener("selectstart",A),s.removeEventListener("selectend",A),s.removeEventListener("squeeze",A),s.removeEventListener("squeezestart",A),s.removeEventListener("squeezeend",A),s.removeEventListener("end",k),s.removeEventListener("inputsourceschange",I);for(let ne=0;ne<M.length;ne++){const le=E[ne];le!==null&&(E[ne]=null,M[ne].disconnect(le))}Y=null,R=null,m.reset();for(const ne in g)delete g[ne];e.setRenderTarget(T),h=null,f=null,d=null,s=null,x=null,Le.stop(),i.isPresenting=!1,e.setPixelRatio(y),e.setSize(L.width,L.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ne){r=ne,i.isPresenting===!0&&Oe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ne){a=ne,i.isPresenting===!0&&Oe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(ne){l=ne},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return d===null&&v&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(ne){if(s=ne,s!==null){if(T=e.getRenderTarget(),s.addEventListener("select",A),s.addEventListener("selectstart",A),s.addEventListener("selectend",A),s.addEventListener("squeeze",A),s.addEventListener("squeezestart",A),s.addEventListener("squeezeend",A),s.addEventListener("end",k),s.addEventListener("inputsourceschange",I),S.xrCompatible!==!0&&await t.makeXRCompatible(),y=e.getPixelRatio(),e.getSize(L),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let fe=null,Ae=null,Fe=null;S.depth&&(Fe=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,fe=S.stencil?Ss:Pi,Ae=S.stencil?So:ci);const De={colorFormat:t.RGBA8,depthFormat:Fe,scaleFactor:r};d=this.getBinding(),f=d.createProjectionLayer(De),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),x=new oi(f.textureWidth,f.textureHeight,{format:An,type:gn,depthTexture:new Tr(f.textureWidth,f.textureHeight,Ae,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const fe={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};h=new XRWebGLLayer(s,t,fe),s.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),x=new oi(h.framebufferWidth,h.framebufferHeight,{format:An,type:gn,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),Le.setContext(s),Le.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function I(ne){for(let le=0;le<ne.removed.length;le++){const fe=ne.removed[le],Ae=E.indexOf(fe);Ae>=0&&(E[Ae]=null,M[Ae].disconnect(fe))}for(let le=0;le<ne.added.length;le++){const fe=ne.added[le];let Ae=E.indexOf(fe);if(Ae===-1){for(let De=0;De<M.length;De++)if(De>=E.length){E.push(fe),Ae=De;break}else if(E[De]===null){E[De]=fe,Ae=De;break}if(Ae===-1)break}const Fe=M[Ae];Fe&&Fe.connect(fe)}}const O=new X,F=new X;function G(ne,le,fe){O.setFromMatrixPosition(le.matrixWorld),F.setFromMatrixPosition(fe.matrixWorld);const Ae=O.distanceTo(F),Fe=le.projectionMatrix.elements,De=fe.projectionMatrix.elements,mt=Fe[14]/(Fe[10]-1),je=Fe[14]/(Fe[10]+1),Xe=(Fe[9]+1)/Fe[5],Se=(Fe[9]-1)/Fe[5],Ce=(Fe[8]-1)/Fe[0],q=(De[8]+1)/De[0],W=mt*Ce,z=mt*q,H=Ae/(-Ce+q),re=H*-Ce;if(le.matrixWorld.decompose(ne.position,ne.quaternion,ne.scale),ne.translateX(re),ne.translateZ(H),ne.matrixWorld.compose(ne.position,ne.quaternion,ne.scale),ne.matrixWorldInverse.copy(ne.matrixWorld).invert(),Fe[10]===-1)ne.projectionMatrix.copy(le.projectionMatrix),ne.projectionMatrixInverse.copy(le.projectionMatrixInverse);else{const se=mt+H,B=je+H,pe=W-re,_e=z+(Ae-re),C=Xe*je/B*se,_=Se*je/B*se;ne.projectionMatrix.makePerspective(pe,_e,C,_,se,B),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert()}}function U(ne,le){le===null?ne.matrixWorld.copy(ne.matrix):ne.matrixWorld.multiplyMatrices(le.matrixWorld,ne.matrix),ne.matrixWorldInverse.copy(ne.matrixWorld).invert()}this.updateCamera=function(ne){if(s===null)return;let le=ne.near,fe=ne.far;m.texture!==null&&(m.depthNear>0&&(le=m.depthNear),m.depthFar>0&&(fe=m.depthFar)),D.near=N.near=b.near=le,D.far=N.far=b.far=fe,(Y!==D.near||R!==D.far)&&(s.updateRenderState({depthNear:D.near,depthFar:D.far}),Y=D.near,R=D.far),D.layers.mask=ne.layers.mask|6,b.layers.mask=D.layers.mask&-5,N.layers.mask=D.layers.mask&-3;const Ae=ne.parent,Fe=D.cameras;U(D,Ae);for(let De=0;De<Fe.length;De++)U(Fe[De],Ae);Fe.length===2?G(D,b,N):D.projectionMatrix.copy(b.projectionMatrix),$(ne,D,Ae)};function $(ne,le,fe){fe===null?ne.matrix.copy(le.matrixWorld):(ne.matrix.copy(fe.matrixWorld),ne.matrix.invert(),ne.matrix.multiply(le.matrixWorld)),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.updateMatrixWorld(!0),ne.projectionMatrix.copy(le.projectionMatrix),ne.projectionMatrixInverse.copy(le.projectionMatrixInverse),ne.isPerspectiveCamera&&(ne.fov=Mr*2*Math.atan(1/ne.projectionMatrix.elements[5]),ne.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(f===null&&h===null))return c},this.setFoveation=function(ne){c=ne,f!==null&&(f.fixedFoveation=ne),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=ne)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(D)},this.getCameraTexture=function(ne){return g[ne]};let ue=null;function we(ne,le){if(u=le.getViewerPose(l||o),p=le,u!==null){const fe=u.views;h!==null&&(e.setRenderTargetFramebuffer(x,h.framebuffer),e.setRenderTarget(x));let Ae=!1;fe.length!==D.cameras.length&&(D.cameras.length=0,Ae=!0);for(let je=0;je<fe.length;je++){const Xe=fe[je];let Se=null;if(h!==null)Se=h.getViewport(Xe);else{const q=d.getViewSubImage(f,Xe);Se=q.viewport,je===0&&(e.setRenderTargetTextures(x,q.colorTexture,q.depthStencilTexture),e.setRenderTarget(x))}let Ce=P[je];Ce===void 0&&(Ce=new rn,Ce.layers.enable(je),Ce.viewport=new St,P[je]=Ce),Ce.matrix.fromArray(Xe.transform.matrix),Ce.matrix.decompose(Ce.position,Ce.quaternion,Ce.scale),Ce.projectionMatrix.fromArray(Xe.projectionMatrix),Ce.projectionMatrixInverse.copy(Ce.projectionMatrix).invert(),Ce.viewport.set(Se.x,Se.y,Se.width,Se.height),je===0&&(D.matrix.copy(Ce.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),Ae===!0&&D.cameras.push(Ce)}const Fe=s.enabledFeatures;if(Fe&&Fe.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){d=i.getBinding();const je=d.getDepthInformation(fe[0]);je&&je.isValid&&je.texture&&m.init(je,s.renderState)}if(Fe&&Fe.includes("camera-access")&&v){e.state.unbindTexture(),d=i.getBinding();for(let je=0;je<fe.length;je++){const Xe=fe[je].camera;if(Xe){let Se=g[Xe];Se||(Se=new dm,g[Xe]=Se);const Ce=d.getCameraImage(Xe);Se.sourceTexture=Ce}}}}for(let fe=0;fe<M.length;fe++){const Ae=E[fe],Fe=M[fe];Ae!==null&&Fe!==void 0&&Fe.update(Ae,le,l||o)}ue&&ue(ne,le),le.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:le}),p=null}const Le=new Rm;Le.setAnimationLoop(we),this.setAnimationLoop=function(ne){ue=ne},this.dispose=function(){}}}const HM=new et,km=new Qe;km.set(-1,0,0,0,1,0,0,0,1);function VM(n,e){function t(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function i(m,g){g.color.getRGB(m.fogColor.value,Sm(n)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function s(m,g,S,T,x){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(m,g):g.isMeshLambertMaterial?(r(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(m,g),d(m,g)):g.isMeshPhongMaterial?(r(m,g),u(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(m,g),f(m,g),g.isMeshPhysicalMaterial&&h(m,g,x)):g.isMeshMatcapMaterial?(r(m,g),p(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),v(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(o(m,g),g.isLineDashedMaterial&&a(m,g)):g.isPointsMaterial?c(m,g,S,T):g.isSpriteMaterial?l(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,t(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===dn&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,t(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===dn&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,t(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,t(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);const S=e.get(g),T=S.envMap,x=S.envMapRotation;T&&(m.envMap.value=T,m.envMapRotation.value.setFromMatrix4(HM.makeRotationFromEuler(x)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(km),m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,m.aoMapTransform))}function o(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform))}function a(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function c(m,g,S,T){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*S,m.scale.value=T*.5,g.map&&(m.map.value=g.map,t(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function l(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function u(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function d(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function f(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function h(m,g,S){m.ior.value=g.ior,g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===dn&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function v(m,g){const S=e.get(g).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function GM(n,e,t,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(x,M){const E=M.program;i.uniformBlockBinding(x,E)}function l(x,M){let E=s[x.id];E===void 0&&(m(x),E=u(x),s[x.id]=E,x.addEventListener("dispose",S));const L=M.program;i.updateUBOMapping(x,L);const y=e.render.frame;r[x.id]!==y&&(f(x),r[x.id]=y)}function u(x){const M=d();x.__bindingPointIndex=M;const E=n.createBuffer(),L=x.__size,y=x.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,L,y),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,M,E),E}function d(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return Ze("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(x){const M=s[x.id],E=x.uniforms,L=x.__cache;n.bindBuffer(n.UNIFORM_BUFFER,M);for(let y=0,b=E.length;y<b;y++){const N=E[y];if(Array.isArray(N))for(let P=0,D=N.length;P<D;P++)h(N[P],y,P,L);else h(N,y,0,L)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(x,M,E,L){if(v(x,M,E,L)===!0){const y=x.__offset,b=x.value;if(Array.isArray(b)){let N=0;for(let P=0;P<b.length;P++){const D=b[P],Y=g(D);p(D,x.__data,N),typeof D!="number"&&typeof D!="boolean"&&!D.isMatrix3&&!ArrayBuffer.isView(D)&&(N+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}}else p(b,x.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,y,x.__data)}}function p(x,M,E){typeof x=="number"||typeof x=="boolean"?M[0]=x:x.isMatrix3?(M[0]=x.elements[0],M[1]=x.elements[1],M[2]=x.elements[2],M[3]=0,M[4]=x.elements[3],M[5]=x.elements[4],M[6]=x.elements[5],M[7]=0,M[8]=x.elements[6],M[9]=x.elements[7],M[10]=x.elements[8],M[11]=0):ArrayBuffer.isView(x)?M.set(new x.constructor(x.buffer,x.byteOffset,M.length)):x.toArray(M,E)}function v(x,M,E,L){const y=x.value,b=M+"_"+E;if(L[b]===void 0)return typeof y=="number"||typeof y=="boolean"?L[b]=y:ArrayBuffer.isView(y)?L[b]=y.slice():L[b]=y.clone(),!0;{const N=L[b];if(typeof y=="number"||typeof y=="boolean"){if(N!==y)return L[b]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(N.equals(y)===!1)return N.copy(y),!0}}return!1}function m(x){const M=x.uniforms;let E=0;const L=16;for(let b=0,N=M.length;b<N;b++){const P=Array.isArray(M[b])?M[b]:[M[b]];for(let D=0,Y=P.length;D<Y;D++){const R=P[D],A=Array.isArray(R.value)?R.value:[R.value];for(let k=0,I=A.length;k<I;k++){const O=A[k],F=g(O),G=E%L,U=G%F.boundary,$=G+U;E+=U,$!==0&&L-$<F.storage&&(E+=L-$),R.__data=new Float32Array(F.storage/Float32Array.BYTES_PER_ELEMENT),R.__offset=E,E+=F.storage}}}const y=E%L;return y>0&&(E+=L-y),x.__size=E,x.__cache={},this}function g(x){const M={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(M.boundary=4,M.storage=4):x.isVector2?(M.boundary=8,M.storage=8):x.isVector3||x.isColor?(M.boundary=16,M.storage=12):x.isVector4?(M.boundary=16,M.storage=16):x.isMatrix3?(M.boundary=48,M.storage=48):x.isMatrix4?(M.boundary=64,M.storage=64):x.isTexture?Oe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(M.boundary=16,M.storage=x.byteLength):Oe("WebGLRenderer: Unsupported uniform value type.",x),M}function S(x){const M=x.target;M.removeEventListener("dispose",S);const E=o.indexOf(M.__bindingPointIndex);o.splice(E,1),n.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function T(){for(const x in s)n.deleteBuffer(s[x]);o=[],s={},r={}}return{bind:c,update:l,dispose:T}}const WM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let jn=null;function XM(){return jn===null&&(jn=new md(WM,16,16,As,Ci),jn.name="DFG_LUT",jn.minFilter=Lt,jn.magFilter=Lt,jn.wrapS=ii,jn.wrapT=ii,jn.generateMipmaps=!1,jn.needsUpdate=!0),jn}class qM{constructor(e={}){const{canvas:t=N0(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1,outputBufferType:h=gn}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;const v=h,m=new Set([ad,od,rd]),g=new Set([gn,ci,yo,So,nd,id]),S=new Uint32Array(4),T=new Int32Array(4),x=new X;let M=null,E=null;const L=[],y=[];let b=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ri,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const N=this;let P=!1,D=null,Y=null,R=null,A=null;this._outputColorSpace=Vt;let k=0,I=0,O=null,F=-1,G=null;const U=new St,$=new St;let ue=null;const we=new Je(0);let Le=0,ne=t.width,le=t.height,fe=1,Ae=null,Fe=null;const De=new St(0,0,ne,le),mt=new St(0,0,ne,le);let je=!1;const Xe=new _d;let Se=!1,Ce=!1;const q=new et,W=new X,z=new St,H={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let re=!1;function se(){return O===null?fe:1}let B=i;function pe(w,J){return t.getContext(w,J)}try{const w={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ed}`),t.addEventListener("webglcontextlost",Dt,!1),t.addEventListener("webglcontextrestored",Tt,!1),t.addEventListener("webglcontextcreationerror",Kn,!1),B===null){const J="webgl2";if(B=pe(J,w),B===null)throw pe(J)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(w){throw Ze("WebGLRenderer: "+w.message),w}let _e,C,_,V,K,j,oe,he,ie,ae,me,ke,xe,ge,Ge,Ke,tt,Z,ve,ce,ye,Re,de;function ze(){_e=new XS(B),_e.init(),ye=new UM(B,_e),C=new OS(B,_e,e,ye),_=new NM(B,_e),C.reversedDepthBuffer&&f&&_.buffers.depth.setReversed(!0),Y=B.createFramebuffer(),R=B.createFramebuffer(),A=B.createFramebuffer(),V=new KS(B),K=new yM,j=new kM(B,_e,_,K,C,ye,V),oe=new WS(N),he=new jv(B),Re=new kS(B,he),ie=new qS(B,he,V,Re),ae=new ZS(B,ie,he,Re,V),Z=new $S(B,C,j),Ge=new FS(K),me=new xM(N,oe,_e,C,Re,Ge),ke=new VM(N,K),xe=new bM,ge=new RM(_e),tt=new NS(N,oe,_,ae,p,c),Ke=new DM(N,ae,C),de=new GM(B,V,C,_),ve=new US(B,_e,V),ce=new YS(B,_e,V),V.programs=me.programs,N.capabilities=C,N.extensions=_e,N.properties=K,N.renderLists=xe,N.shadowMap=Ke,N.state=_,N.info=V}ze(),v!==gn&&(b=new jS(v,t.width,t.height,a,s,r));const Ne=new zM(N,B);this.xr=Ne,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const w=_e.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=_e.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return fe},this.setPixelRatio=function(w){w!==void 0&&(fe=w,this.setSize(ne,le,!1))},this.getSize=function(w){return w.set(ne,le)},this.setSize=function(w,J,te=!0){if(Ne.isPresenting){Oe("WebGLRenderer: Can't change size while VR device is presenting.");return}ne=w,le=J,t.width=Math.floor(w*fe),t.height=Math.floor(J*fe),te===!0&&(t.style.width=w+"px",t.style.height=J+"px"),b!==null&&b.setSize(t.width,t.height),this.setViewport(0,0,w,J)},this.getDrawingBufferSize=function(w){return w.set(ne*fe,le*fe).floor()},this.setDrawingBufferSize=function(w,J,te){ne=w,le=J,fe=te,t.width=Math.floor(w*te),t.height=Math.floor(J*te),this.setViewport(0,0,w,J)},this.setEffects=function(w){if(v===gn){Ze("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let J=0;J<w.length;J++)if(w[J].isOutputPass===!0){Oe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}b.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(U)},this.getViewport=function(w){return w.copy(De)},this.setViewport=function(w,J,te,Q){w.isVector4?De.set(w.x,w.y,w.z,w.w):De.set(w,J,te,Q),_.viewport(U.copy(De).multiplyScalar(fe).round())},this.getScissor=function(w){return w.copy(mt)},this.setScissor=function(w,J,te,Q){w.isVector4?mt.set(w.x,w.y,w.z,w.w):mt.set(w,J,te,Q),_.scissor($.copy(mt).multiplyScalar(fe).round())},this.getScissorTest=function(){return je},this.setScissorTest=function(w){_.setScissorTest(je=w)},this.setOpaqueSort=function(w){Ae=w},this.setTransparentSort=function(w){Fe=w},this.getClearColor=function(w){return w.copy(tt.getClearColor())},this.setClearColor=function(){tt.setClearColor(...arguments)},this.getClearAlpha=function(){return tt.getClearAlpha()},this.setClearAlpha=function(){tt.setClearAlpha(...arguments)},this.clear=function(w=!0,J=!0,te=!0){let Q=0;if(w){let ee=!1;if(O!==null){const Te=O.texture.format;ee=m.has(Te)}if(ee){const Te=O.texture.type,Ie=g.has(Te),Me=tt.getClearColor(),Ue=tt.getClearAlpha(),He=Me.r,nt=Me.g,rt=Me.b;Ie?(S[0]=He,S[1]=nt,S[2]=rt,S[3]=Ue,B.clearBufferuiv(B.COLOR,0,S)):(T[0]=He,T[1]=nt,T[2]=rt,T[3]=Ue,B.clearBufferiv(B.COLOR,0,T))}else Q|=B.COLOR_BUFFER_BIT}J&&(Q|=B.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),te&&(Q|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Q!==0&&B.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),D=w},this.dispose=function(){t.removeEventListener("webglcontextlost",Dt,!1),t.removeEventListener("webglcontextrestored",Tt,!1),t.removeEventListener("webglcontextcreationerror",Kn,!1),tt.dispose(),xe.dispose(),ge.dispose(),K.dispose(),oe.dispose(),ae.dispose(),Re.dispose(),de.dispose(),me.dispose(),Ne.dispose(),Ne.removeEventListener("sessionstart",Wd),Ne.removeEventListener("sessionend",Xd),cs.stop()};function Dt(w){w.preventDefault(),Qa("WebGLRenderer: Context Lost."),P=!0}function Tt(){Qa("WebGLRenderer: Context Restored."),P=!1;const w=V.autoReset,J=Ke.enabled,te=Ke.autoUpdate,Q=Ke.needsUpdate,ee=Ke.type;ze(),V.autoReset=w,Ke.enabled=J,Ke.autoUpdate=te,Ke.needsUpdate=Q,Ke.type=ee}function Kn(w){Ze("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function $n(w){const J=w.target;J.removeEventListener("dispose",$n),Hg(J)}function Hg(w){Vg(w),K.remove(w)}function Vg(w){const J=K.get(w).programs;J!==void 0&&(J.forEach(function(te){me.releaseProgram(te)}),w.isShaderMaterial&&me.releaseShaderCache(w))}this.renderBufferDirect=function(w,J,te,Q,ee,Te){J===null&&(J=H);const Ie=ee.isMesh&&ee.matrixWorld.determinantAffine()<0,Me=Xg(w,J,te,Q,ee);_.setMaterial(Q,Ie);let Ue=te.index,He=1;if(Q.wireframe===!0){if(Ue=ie.getWireframeAttribute(te),Ue===void 0)return;He=2}const nt=te.drawRange,rt=te.attributes.position;let Ve=nt.start*He,xt=(nt.start+nt.count)*He;Te!==null&&(Ve=Math.max(Ve,Te.start*He),xt=Math.min(xt,(Te.start+Te.count)*He)),Ue!==null?(Ve=Math.max(Ve,0),xt=Math.min(xt,Ue.count)):rt!=null&&(Ve=Math.max(Ve,0),xt=Math.min(xt,rt.count));const Ot=xt-Ve;if(Ot<0||Ot===1/0)return;Re.setup(ee,Q,Me,te,Ue);let Nt,bt=ve;if(Ue!==null&&(Nt=he.get(Ue),bt=ce,bt.setIndex(Nt)),ee.isMesh)Q.wireframe===!0?(_.setLineWidth(Q.wireframeLinewidth*se()),bt.setMode(B.LINES)):bt.setMode(B.TRIANGLES);else if(ee.isLine){let Kt=Q.linewidth;Kt===void 0&&(Kt=1),_.setLineWidth(Kt*se()),ee.isLineSegments?bt.setMode(B.LINES):ee.isLineLoop?bt.setMode(B.LINE_LOOP):bt.setMode(B.LINE_STRIP)}else ee.isPoints?bt.setMode(B.POINTS):ee.isSprite&&bt.setMode(B.TRIANGLES);if(ee.isBatchedMesh)if(_e.get("WEBGL_multi_draw"))bt.renderMultiDraw(ee._multiDrawStarts,ee._multiDrawCounts,ee._multiDrawCount);else{const Kt=ee._multiDrawStarts,Pe=ee._multiDrawCounts,hn=ee._multiDrawCount,ut=Ue?he.get(Ue).bytesPerElement:1,yn=K.get(Q).currentProgram.getUniforms();for(let Zn=0;Zn<hn;Zn++)yn.setValue(B,"_gl_DrawID",Zn),bt.render(Kt[Zn]/ut,Pe[Zn])}else if(ee.isInstancedMesh)bt.renderInstances(Ve,Ot,ee.count);else if(te.isInstancedBufferGeometry){const Kt=te._maxInstanceCount!==void 0?te._maxInstanceCount:1/0,Pe=Math.min(te.instanceCount,Kt);bt.renderInstances(Ve,Ot,Pe)}else bt.render(Ve,Ot)};function Gd(w,J,te){w.transparent===!0&&w.side===ni&&w.forceSinglePass===!1?(w.side=dn,w.needsUpdate=!0,qo(w,J,te),w.side=Ri,w.needsUpdate=!0,qo(w,J,te),w.side=ni):qo(w,J,te)}this.compile=function(w,J,te=null){te===null&&(te=w),E=ge.get(te),E.init(J),y.push(E),te.traverseVisible(function(ee){ee.isLight&&ee.layers.test(J.layers)&&(E.pushLight(ee),ee.castShadow&&E.pushShadow(ee))}),w!==te&&w.traverseVisible(function(ee){ee.isLight&&ee.layers.test(J.layers)&&(E.pushLight(ee),ee.castShadow&&E.pushShadow(ee))}),E.setupLights();const Q=new Set;return w.traverse(function(ee){if(!(ee.isMesh||ee.isPoints||ee.isLine||ee.isSprite))return;const Te=ee.material;if(Te)if(Array.isArray(Te))for(let Ie=0;Ie<Te.length;Ie++){const Me=Te[Ie];Gd(Me,te,ee),Q.add(Me)}else Gd(Te,te,ee),Q.add(Te)}),E=y.pop(),Q},this.compileAsync=function(w,J,te=null){const Q=this.compile(w,J,te);return new Promise(ee=>{function Te(){if(Q.forEach(function(Ie){K.get(Ie).currentProgram.isReady()&&Q.delete(Ie)}),Q.size===0){ee(w);return}setTimeout(Te,10)}_e.get("KHR_parallel_shader_compile")!==null?Te():setTimeout(Te,10)})};let yc=null;function Gg(w){yc&&yc(w)}function Wd(){cs.stop()}function Xd(){cs.start()}const cs=new Rm;cs.setAnimationLoop(Gg),typeof self<"u"&&cs.setContext(self),this.setAnimationLoop=function(w){yc=w,Ne.setAnimationLoop(w),w===null?cs.stop():cs.start()},Ne.addEventListener("sessionstart",Wd),Ne.addEventListener("sessionend",Xd),this.render=function(w,J){if(J!==void 0&&J.isCamera!==!0){Ze("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;D!==null&&D.renderStart(w,J);const te=Ne.enabled===!0&&Ne.isPresenting===!0,Q=b!==null&&(O===null||te)&&b.begin(N,O);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),J.parent===null&&J.matrixWorldAutoUpdate===!0&&J.updateMatrixWorld(),Ne.enabled===!0&&Ne.isPresenting===!0&&(b===null||b.isCompositing()===!1)&&(Ne.cameraAutoUpdate===!0&&Ne.updateCamera(J),J=Ne.getCamera()),w.isScene===!0&&w.onBeforeRender(N,w,J,O),E=ge.get(w,y.length),E.init(J),E.state.textureUnits=j.getTextureUnits(),y.push(E),q.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),Xe.setFromProjectionMatrix(q,si,J.reversedDepth),Ce=this.localClippingEnabled,Se=Ge.init(this.clippingPlanes,Ce),M=xe.get(w,L.length),M.init(),L.push(M),Ne.enabled===!0&&Ne.isPresenting===!0){const Ie=N.xr.getDepthSensingMesh();Ie!==null&&Sc(Ie,J,-1/0,N.sortObjects)}Sc(w,J,0,N.sortObjects),M.finish(),N.sortObjects===!0&&M.sort(Ae,Fe,J.reversedDepth),re=Ne.enabled===!1||Ne.isPresenting===!1||Ne.hasDepthSensing()===!1,re&&tt.addToRenderList(M,w),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Se===!0&&Ge.beginShadows();const ee=E.state.shadowsArray;if(Ke.render(ee,w,J),Se===!0&&Ge.endShadows(),(Q&&b.hasRenderPass())===!1){const Ie=M.opaque,Me=M.transmissive;if(E.setupLights(),J.isArrayCamera){const Ue=J.cameras;if(Me.length>0)for(let He=0,nt=Ue.length;He<nt;He++){const rt=Ue[He];Yd(Ie,Me,w,rt)}re&&tt.render(w);for(let He=0,nt=Ue.length;He<nt;He++){const rt=Ue[He];qd(M,w,rt,rt.viewport)}}else Me.length>0&&Yd(Ie,Me,w,J),re&&tt.render(w),qd(M,w,J)}O!==null&&I===0&&(j.updateMultisampleRenderTarget(O),j.updateRenderTargetMipmap(O)),Q&&b.end(N),w.isScene===!0&&w.onAfterRender(N,w,J),Re.resetDefaultState(),F=-1,G=null,y.pop(),y.length>0?(E=y[y.length-1],j.setTextureUnits(E.state.textureUnits),Se===!0&&Ge.setGlobalState(N.clippingPlanes,E.state.camera)):E=null,L.pop(),L.length>0?M=L[L.length-1]:M=null,D!==null&&D.renderEnd()};function Sc(w,J,te,Q){if(w.visible===!1)return;if(w.layers.test(J.layers)){if(w.isGroup)te=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(J);else if(w.isLightProbeGrid)E.pushLightProbeGrid(w);else if(w.isLight)E.pushLight(w),w.castShadow&&E.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Xe.intersectsSprite(w)){Q&&z.setFromMatrixPosition(w.matrixWorld).applyMatrix4(q);const Ie=ae.update(w),Me=w.material;Me.visible&&M.push(w,Ie,Me,te,z.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Xe.intersectsObject(w))){const Ie=ae.update(w),Me=w.material;if(Q&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),z.copy(w.boundingSphere.center)):(Ie.boundingSphere===null&&Ie.computeBoundingSphere(),z.copy(Ie.boundingSphere.center)),z.applyMatrix4(w.matrixWorld).applyMatrix4(q)),Array.isArray(Me)){const Ue=Ie.groups;for(let He=0,nt=Ue.length;He<nt;He++){const rt=Ue[He],Ve=Me[rt.materialIndex];Ve&&Ve.visible&&M.push(w,Ie,Ve,te,z.z,rt)}}else Me.visible&&M.push(w,Ie,Me,te,z.z,null)}}const Te=w.children;for(let Ie=0,Me=Te.length;Ie<Me;Ie++)Sc(Te[Ie],J,te,Q)}function qd(w,J,te,Q){const{opaque:ee,transmissive:Te,transparent:Ie}=w;E.setupLightsView(te),Se===!0&&Ge.setGlobalState(N.clippingPlanes,te),Q&&_.viewport(U.copy(Q)),ee.length>0&&Xo(ee,J,te),Te.length>0&&Xo(Te,J,te),Ie.length>0&&Xo(Ie,J,te),_.buffers.depth.setTest(!0),_.buffers.depth.setMask(!0),_.buffers.color.setMask(!0),_.setPolygonOffset(!1)}function Yd(w,J,te,Q){if((te.isScene===!0?te.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[Q.id]===void 0){const Ve=_e.has("EXT_color_buffer_half_float")||_e.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[Q.id]=new oi(1,1,{generateMipmaps:!0,type:Ve?Ci:gn,minFilter:bi,samples:Math.max(4,C.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ct.workingColorSpace})}const Te=E.state.transmissionRenderTarget[Q.id],Ie=Q.viewport||U;Te.setSize(Ie.z*N.transmissionResolutionScale,Ie.w*N.transmissionResolutionScale);const Me=N.getRenderTarget(),Ue=N.getActiveCubeFace(),He=N.getActiveMipmapLevel();N.setRenderTarget(Te),N.getClearColor(we),Le=N.getClearAlpha(),Le<1&&N.setClearColor(16777215,.5),N.clear(),re&&tt.render(te);const nt=N.toneMapping;N.toneMapping=ri;const rt=Q.viewport;if(Q.viewport!==void 0&&(Q.viewport=void 0),E.setupLightsView(Q),Se===!0&&Ge.setGlobalState(N.clippingPlanes,Q),Xo(w,te,Q),j.updateMultisampleRenderTarget(Te),j.updateRenderTargetMipmap(Te),_e.has("WEBGL_multisampled_render_to_texture")===!1){let Ve=!1;for(let xt=0,Ot=J.length;xt<Ot;xt++){const Nt=J[xt],{object:bt,geometry:Kt,material:Pe,group:hn}=Nt;if(Pe.side===ni&&bt.layers.test(Q.layers)){const ut=Pe.side;Pe.side=dn,Pe.needsUpdate=!0,Kd(bt,te,Q,Kt,Pe,hn),Pe.side=ut,Pe.needsUpdate=!0,Ve=!0}}Ve===!0&&(j.updateMultisampleRenderTarget(Te),j.updateRenderTargetMipmap(Te))}N.setRenderTarget(Me,Ue,He),N.setClearColor(we,Le),rt!==void 0&&(Q.viewport=rt),N.toneMapping=nt}function Xo(w,J,te){const Q=J.isScene===!0?J.overrideMaterial:null;for(let ee=0,Te=w.length;ee<Te;ee++){const Ie=w[ee],{object:Me,geometry:Ue,group:He}=Ie;let nt=Ie.material;nt.allowOverride===!0&&Q!==null&&(nt=Q),Me.layers.test(te.layers)&&Kd(Me,J,te,Ue,nt,He)}}function Kd(w,J,te,Q,ee,Te){w.onBeforeRender(N,J,te,Q,ee,Te),w.modelViewMatrix.multiplyMatrices(te.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),ee.onBeforeRender(N,J,te,Q,w,Te),ee.transparent===!0&&ee.side===ni&&ee.forceSinglePass===!1?(ee.side=dn,ee.needsUpdate=!0,N.renderBufferDirect(te,J,Q,ee,w,Te),ee.side=Ri,ee.needsUpdate=!0,N.renderBufferDirect(te,J,Q,ee,w,Te),ee.side=ni):N.renderBufferDirect(te,J,Q,ee,w,Te),w.onAfterRender(N,J,te,Q,ee,Te)}function qo(w,J,te){J.isScene!==!0&&(J=H);const Q=K.get(w),ee=E.state.lights,Te=E.state.shadowsArray,Ie=ee.state.version,Me=me.getParameters(w,ee.state,Te,J,te,E.state.lightProbeGridArray),Ue=me.getProgramCacheKey(Me);let He=Q.programs;Q.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?J.environment:null,Q.fog=J.fog;const nt=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;Q.envMap=oe.get(w.envMap||Q.environment,nt),Q.envMapRotation=Q.environment!==null&&w.envMap===null?J.environmentRotation:w.envMapRotation,He===void 0&&(w.addEventListener("dispose",$n),He=new Map,Q.programs=He);let rt=He.get(Ue);if(rt!==void 0){if(Q.currentProgram===rt&&Q.lightsStateVersion===Ie)return Zd(w,Me),rt}else Me.uniforms=me.getUniforms(w),D!==null&&w.isNodeMaterial&&D.build(w,te,Me),w.onBeforeCompile(Me,N),rt=me.acquireProgram(Me,Ue),He.set(Ue,rt),Q.uniforms=Me.uniforms;const Ve=Q.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ve.clippingPlanes=Ge.uniform),Zd(w,Me),Q.needsLights=Yg(w),Q.lightsStateVersion=Ie,Q.needsLights&&(Ve.ambientLightColor.value=ee.state.ambient,Ve.lightProbe.value=ee.state.probe,Ve.directionalLights.value=ee.state.directional,Ve.directionalLightShadows.value=ee.state.directionalShadow,Ve.spotLights.value=ee.state.spot,Ve.spotLightShadows.value=ee.state.spotShadow,Ve.rectAreaLights.value=ee.state.rectArea,Ve.ltc_1.value=ee.state.rectAreaLTC1,Ve.ltc_2.value=ee.state.rectAreaLTC2,Ve.pointLights.value=ee.state.point,Ve.pointLightShadows.value=ee.state.pointShadow,Ve.hemisphereLights.value=ee.state.hemi,Ve.directionalShadowMatrix.value=ee.state.directionalShadowMatrix,Ve.spotLightMatrix.value=ee.state.spotLightMatrix,Ve.spotLightMap.value=ee.state.spotLightMap,Ve.pointShadowMatrix.value=ee.state.pointShadowMatrix),Q.lightProbeGrid=E.state.lightProbeGridArray.length>0,Q.currentProgram=rt,Q.uniformsList=null,rt}function $d(w){if(w.uniformsList===null){const J=w.currentProgram.getUniforms();w.uniformsList=Ba.seqWithValue(J.seq,w.uniforms)}return w.uniformsList}function Zd(w,J){const te=K.get(w);te.outputColorSpace=J.outputColorSpace,te.batching=J.batching,te.batchingColor=J.batchingColor,te.instancing=J.instancing,te.instancingColor=J.instancingColor,te.instancingMorph=J.instancingMorph,te.skinning=J.skinning,te.morphTargets=J.morphTargets,te.morphNormals=J.morphNormals,te.morphColors=J.morphColors,te.morphTargetsCount=J.morphTargetsCount,te.numClippingPlanes=J.numClippingPlanes,te.numIntersection=J.numClipIntersection,te.vertexAlphas=J.vertexAlphas,te.vertexTangents=J.vertexTangents,te.toneMapping=J.toneMapping}function Wg(w,J){if(w.length===0)return null;if(w.length===1)return w[0].texture!==null?w[0]:null;x.setFromMatrixPosition(J.matrixWorld);for(let te=0,Q=w.length;te<Q;te++){const ee=w[te];if(ee.texture!==null&&ee.boundingBox.containsPoint(x))return ee}return null}function Xg(w,J,te,Q,ee){J.isScene!==!0&&(J=H),j.resetTextureUnits();const Te=J.fog,Ie=Q.isMeshStandardMaterial||Q.isMeshLambertMaterial||Q.isMeshPhongMaterial?J.environment:null,Me=O===null?N.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:ct.workingColorSpace,Ue=Q.isMeshStandardMaterial||Q.isMeshLambertMaterial&&!Q.envMap||Q.isMeshPhongMaterial&&!Q.envMap,He=oe.get(Q.envMap||Ie,Ue),nt=Q.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,rt=!!te.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),Ve=!!te.morphAttributes.position,xt=!!te.morphAttributes.normal,Ot=!!te.morphAttributes.color;let Nt=ri;Q.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(Nt=N.toneMapping);const bt=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,Kt=bt!==void 0?bt.length:0,Pe=K.get(Q),hn=E.state.lights;if(Se===!0&&(Ce===!0||w!==G)){const Et=w===G&&Q.id===F;Ge.setState(Q,w,Et)}let ut=!1;Q.version===Pe.__version?(Pe.needsLights&&Pe.lightsStateVersion!==hn.state.version||Pe.outputColorSpace!==Me||ee.isBatchedMesh&&Pe.batching===!1||!ee.isBatchedMesh&&Pe.batching===!0||ee.isBatchedMesh&&Pe.batchingColor===!0&&ee.colorTexture===null||ee.isBatchedMesh&&Pe.batchingColor===!1&&ee.colorTexture!==null||ee.isInstancedMesh&&Pe.instancing===!1||!ee.isInstancedMesh&&Pe.instancing===!0||ee.isSkinnedMesh&&Pe.skinning===!1||!ee.isSkinnedMesh&&Pe.skinning===!0||ee.isInstancedMesh&&Pe.instancingColor===!0&&ee.instanceColor===null||ee.isInstancedMesh&&Pe.instancingColor===!1&&ee.instanceColor!==null||ee.isInstancedMesh&&Pe.instancingMorph===!0&&ee.morphTexture===null||ee.isInstancedMesh&&Pe.instancingMorph===!1&&ee.morphTexture!==null||Pe.envMap!==He||Q.fog===!0&&Pe.fog!==Te||Pe.numClippingPlanes!==void 0&&(Pe.numClippingPlanes!==Ge.numPlanes||Pe.numIntersection!==Ge.numIntersection)||Pe.vertexAlphas!==nt||Pe.vertexTangents!==rt||Pe.morphTargets!==Ve||Pe.morphNormals!==xt||Pe.morphColors!==Ot||Pe.toneMapping!==Nt||Pe.morphTargetsCount!==Kt||!!Pe.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&(ut=!0):(ut=!0,Pe.__version=Q.version);let yn=Pe.currentProgram;ut===!0&&(yn=qo(Q,J,ee),D&&Q.isNodeMaterial&&D.onUpdateProgram(Q,yn,Pe));let Zn=!1,Li=!1,ks=!1;const Mt=yn.getUniforms(),Ft=Pe.uniforms;if(_.useProgram(yn.program)&&(Zn=!0,Li=!0,ks=!0),Q.id!==F&&(F=Q.id,Li=!0),Pe.needsLights){const Et=Wg(E.state.lightProbeGridArray,ee);Pe.lightProbeGrid!==Et&&(Pe.lightProbeGrid=Et,Li=!0)}if(Zn||G!==w){_.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),Mt.setValue(B,"projectionMatrix",w.projectionMatrix),Mt.setValue(B,"viewMatrix",w.matrixWorldInverse);const Ni=Mt.map.cameraPosition;Ni!==void 0&&Ni.setValue(B,W.setFromMatrixPosition(w.matrixWorld)),C.logarithmicDepthBuffer&&Mt.setValue(B,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&Mt.setValue(B,"isOrthographic",w.isOrthographicCamera===!0),G!==w&&(G=w,Li=!0,ks=!0)}if(Pe.needsLights&&(hn.state.directionalShadowMap.length>0&&Mt.setValue(B,"directionalShadowMap",hn.state.directionalShadowMap,j),hn.state.spotShadowMap.length>0&&Mt.setValue(B,"spotShadowMap",hn.state.spotShadowMap,j),hn.state.pointShadowMap.length>0&&Mt.setValue(B,"pointShadowMap",hn.state.pointShadowMap,j)),ee.isSkinnedMesh){Mt.setOptional(B,ee,"bindMatrix"),Mt.setOptional(B,ee,"bindMatrixInverse");const Et=ee.skeleton;Et&&(Et.boneTexture===null&&Et.computeBoneTexture(),Mt.setValue(B,"boneTexture",Et.boneTexture,j))}ee.isBatchedMesh&&(Mt.setOptional(B,ee,"batchingTexture"),Mt.setValue(B,"batchingTexture",ee._matricesTexture,j),Mt.setOptional(B,ee,"batchingIdTexture"),Mt.setValue(B,"batchingIdTexture",ee._indirectTexture,j),Mt.setOptional(B,ee,"batchingColorTexture"),ee._colorsTexture!==null&&Mt.setValue(B,"batchingColorTexture",ee._colorsTexture,j));const Di=te.morphAttributes;if((Di.position!==void 0||Di.normal!==void 0||Di.color!==void 0)&&Z.update(ee,te,yn),(Li||Pe.receiveShadow!==ee.receiveShadow)&&(Pe.receiveShadow=ee.receiveShadow,Mt.setValue(B,"receiveShadow",ee.receiveShadow)),(Q.isMeshStandardMaterial||Q.isMeshLambertMaterial||Q.isMeshPhongMaterial)&&Q.envMap===null&&J.environment!==null&&(Ft.envMapIntensity.value=J.environmentIntensity),Ft.dfgLUT!==void 0&&(Ft.dfgLUT.value=XM()),Li){if(Mt.setValue(B,"toneMappingExposure",N.toneMappingExposure),Pe.needsLights&&qg(Ft,ks),Te&&Q.fog===!0&&ke.refreshFogUniforms(Ft,Te),ke.refreshMaterialUniforms(Ft,Q,fe,le,E.state.transmissionRenderTarget[w.id]),Pe.needsLights&&Pe.lightProbeGrid){const Et=Pe.lightProbeGrid;Ft.probesSH.value=Et.texture,Ft.probesMin.value.copy(Et.boundingBox.min),Ft.probesMax.value.copy(Et.boundingBox.max),Ft.probesResolution.value.copy(Et.resolution)}Ba.upload(B,$d(Pe),Ft,j)}if(Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(Ba.upload(B,$d(Pe),Ft,j),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&Mt.setValue(B,"center",ee.center),Mt.setValue(B,"modelViewMatrix",ee.modelViewMatrix),Mt.setValue(B,"normalMatrix",ee.normalMatrix),Mt.setValue(B,"modelMatrix",ee.matrixWorld),Q.uniformsGroups!==void 0){const Et=Q.uniformsGroups;for(let Ni=0,Us=Et.length;Ni<Us;Ni++){const Jd=Et[Ni];de.update(Jd,yn),de.bind(Jd,yn)}}return yn}function qg(w,J){w.ambientLightColor.needsUpdate=J,w.lightProbe.needsUpdate=J,w.directionalLights.needsUpdate=J,w.directionalLightShadows.needsUpdate=J,w.pointLights.needsUpdate=J,w.pointLightShadows.needsUpdate=J,w.spotLights.needsUpdate=J,w.spotLightShadows.needsUpdate=J,w.rectAreaLights.needsUpdate=J,w.hemisphereLights.needsUpdate=J}function Yg(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(w,J,te){const Q=K.get(w);Q.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,Q.__autoAllocateDepthBuffer===!1&&(Q.__useRenderToTexture=!1),K.get(w.texture).__webglTexture=J,K.get(w.depthTexture).__webglTexture=Q.__autoAllocateDepthBuffer?void 0:te,Q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,J){const te=K.get(w);te.__webglFramebuffer=J,te.__useDefaultFramebuffer=J===void 0},this.setRenderTarget=function(w,J=0,te=0){O=w,k=J,I=te;let Q=null,ee=!1,Te=!1;if(w){const Me=K.get(w);if(Me.__useDefaultFramebuffer!==void 0){_.bindFramebuffer(B.FRAMEBUFFER,Me.__webglFramebuffer),U.copy(w.viewport),$.copy(w.scissor),ue=w.scissorTest,_.viewport(U),_.scissor($),_.setScissorTest(ue),F=-1;return}else if(Me.__webglFramebuffer===void 0)j.setupRenderTarget(w);else if(Me.__hasExternalTextures)j.rebindTextures(w,K.get(w.texture).__webglTexture,K.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const nt=w.depthTexture;if(Me.__boundDepthTexture!==nt){if(nt!==null&&K.has(nt)&&(w.width!==nt.image.width||w.height!==nt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");j.setupDepthRenderbuffer(w)}}const Ue=w.texture;(Ue.isData3DTexture||Ue.isDataArrayTexture||Ue.isCompressedArrayTexture)&&(Te=!0);const He=K.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(He[J])?Q=He[J][te]:Q=He[J],ee=!0):w.samples>0&&j.useMultisampledRTT(w)===!1?Q=K.get(w).__webglMultisampledFramebuffer:Array.isArray(He)?Q=He[te]:Q=He,U.copy(w.viewport),$.copy(w.scissor),ue=w.scissorTest}else U.copy(De).multiplyScalar(fe).floor(),$.copy(mt).multiplyScalar(fe).floor(),ue=je;if(te!==0&&(Q=Y),_.bindFramebuffer(B.FRAMEBUFFER,Q)&&_.drawBuffers(w,Q),_.viewport(U),_.scissor($),_.setScissorTest(ue),ee){const Me=K.get(w.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+J,Me.__webglTexture,te)}else if(Te){const Me=J;for(let Ue=0;Ue<w.textures.length;Ue++){const He=K.get(w.textures[Ue]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+Ue,He.__webglTexture,te,Me)}}else if(w!==null&&te!==0){const Me=K.get(w.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Me.__webglTexture,te)}F=-1},this.readRenderTargetPixels=function(w,J,te,Q,ee,Te,Ie,Me=0){if(!(w&&w.isWebGLRenderTarget)){Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ue=K.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ie!==void 0&&(Ue=Ue[Ie]),Ue){_.bindFramebuffer(B.FRAMEBUFFER,Ue);try{const He=w.textures[Me],nt=He.format,rt=He.type;if(w.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Me),!C.textureFormatReadable(nt)){Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!C.textureTypeReadable(rt)){Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}J>=0&&J<=w.width-Q&&te>=0&&te<=w.height-ee&&B.readPixels(J,te,Q,ee,ye.convert(nt),ye.convert(rt),Te)}finally{const He=O!==null?K.get(O).__webglFramebuffer:null;_.bindFramebuffer(B.FRAMEBUFFER,He)}}},this.readRenderTargetPixelsAsync=async function(w,J,te,Q,ee,Te,Ie,Me=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ue=K.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ie!==void 0&&(Ue=Ue[Ie]),Ue)if(J>=0&&J<=w.width-Q&&te>=0&&te<=w.height-ee){_.bindFramebuffer(B.FRAMEBUFFER,Ue);const He=w.textures[Me],nt=He.format,rt=He.type;if(w.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Me),!C.textureFormatReadable(nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!C.textureTypeReadable(rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ve=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,Ve),B.bufferData(B.PIXEL_PACK_BUFFER,Te.byteLength,B.STREAM_READ),B.readPixels(J,te,Q,ee,ye.convert(nt),ye.convert(rt),0);const xt=O!==null?K.get(O).__webglFramebuffer:null;_.bindFramebuffer(B.FRAMEBUFFER,xt);const Ot=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await k0(B,Ot,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,Ve),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,Te),B.deleteBuffer(Ve),B.deleteSync(Ot),Te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,J=null,te=0){const Q=Math.pow(2,-te),ee=Math.floor(w.image.width*Q),Te=Math.floor(w.image.height*Q),Ie=J!==null?J.x:0,Me=J!==null?J.y:0;j.setTexture2D(w,0),B.copyTexSubImage2D(B.TEXTURE_2D,te,0,0,Ie,Me,ee,Te),_.unbindTexture()},this.copyTextureToTexture=function(w,J,te=null,Q=null,ee=0,Te=0){let Ie,Me,Ue,He,nt,rt,Ve,xt,Ot;const Nt=w.isCompressedTexture?w.mipmaps[Te]:w.image;if(te!==null)Ie=te.max.x-te.min.x,Me=te.max.y-te.min.y,Ue=te.isBox3?te.max.z-te.min.z:1,He=te.min.x,nt=te.min.y,rt=te.isBox3?te.min.z:0;else{const Ft=Math.pow(2,-ee);Ie=Math.floor(Nt.width*Ft),Me=Math.floor(Nt.height*Ft),w.isDataArrayTexture?Ue=Nt.depth:w.isData3DTexture?Ue=Math.floor(Nt.depth*Ft):Ue=1,He=0,nt=0,rt=0}Q!==null?(Ve=Q.x,xt=Q.y,Ot=Q.z):(Ve=0,xt=0,Ot=0);const bt=ye.convert(J.format),Kt=ye.convert(J.type);let Pe;J.isData3DTexture?(j.setTexture3D(J,0),Pe=B.TEXTURE_3D):J.isDataArrayTexture||J.isCompressedArrayTexture?(j.setTexture2DArray(J,0),Pe=B.TEXTURE_2D_ARRAY):(j.setTexture2D(J,0),Pe=B.TEXTURE_2D),_.activeTexture(B.TEXTURE0),_.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,J.flipY),_.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),_.pixelStorei(B.UNPACK_ALIGNMENT,J.unpackAlignment);const hn=_.getParameter(B.UNPACK_ROW_LENGTH),ut=_.getParameter(B.UNPACK_IMAGE_HEIGHT),yn=_.getParameter(B.UNPACK_SKIP_PIXELS),Zn=_.getParameter(B.UNPACK_SKIP_ROWS),Li=_.getParameter(B.UNPACK_SKIP_IMAGES);_.pixelStorei(B.UNPACK_ROW_LENGTH,Nt.width),_.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Nt.height),_.pixelStorei(B.UNPACK_SKIP_PIXELS,He),_.pixelStorei(B.UNPACK_SKIP_ROWS,nt),_.pixelStorei(B.UNPACK_SKIP_IMAGES,rt);const ks=w.isDataArrayTexture||w.isData3DTexture,Mt=J.isDataArrayTexture||J.isData3DTexture;if(w.isDepthTexture){const Ft=K.get(w),Di=K.get(J),Et=K.get(Ft.__renderTarget),Ni=K.get(Di.__renderTarget);_.bindFramebuffer(B.READ_FRAMEBUFFER,Et.__webglFramebuffer),_.bindFramebuffer(B.DRAW_FRAMEBUFFER,Ni.__webglFramebuffer);for(let Us=0;Us<Ue;Us++)ks&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,K.get(w).__webglTexture,ee,rt+Us),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,K.get(J).__webglTexture,Te,Ot+Us)),B.blitFramebuffer(He,nt,Ie,Me,Ve,xt,Ie,Me,B.DEPTH_BUFFER_BIT,B.NEAREST);_.bindFramebuffer(B.READ_FRAMEBUFFER,null),_.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(ee!==0||w.isRenderTargetTexture||K.has(w)){const Ft=K.get(w),Di=K.get(J);_.bindFramebuffer(B.READ_FRAMEBUFFER,R),_.bindFramebuffer(B.DRAW_FRAMEBUFFER,A);for(let Et=0;Et<Ue;Et++)ks?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ft.__webglTexture,ee,rt+Et):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Ft.__webglTexture,ee),Mt?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Di.__webglTexture,Te,Ot+Et):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Di.__webglTexture,Te),ee!==0?B.blitFramebuffer(He,nt,Ie,Me,Ve,xt,Ie,Me,B.COLOR_BUFFER_BIT,B.NEAREST):Mt?B.copyTexSubImage3D(Pe,Te,Ve,xt,Ot+Et,He,nt,Ie,Me):B.copyTexSubImage2D(Pe,Te,Ve,xt,He,nt,Ie,Me);_.bindFramebuffer(B.READ_FRAMEBUFFER,null),_.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else Mt?w.isDataTexture||w.isData3DTexture?B.texSubImage3D(Pe,Te,Ve,xt,Ot,Ie,Me,Ue,bt,Kt,Nt.data):J.isCompressedArrayTexture?B.compressedTexSubImage3D(Pe,Te,Ve,xt,Ot,Ie,Me,Ue,bt,Nt.data):B.texSubImage3D(Pe,Te,Ve,xt,Ot,Ie,Me,Ue,bt,Kt,Nt):w.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,Te,Ve,xt,Ie,Me,bt,Kt,Nt.data):w.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,Te,Ve,xt,Nt.width,Nt.height,bt,Nt.data):B.texSubImage2D(B.TEXTURE_2D,Te,Ve,xt,Ie,Me,bt,Kt,Nt);_.pixelStorei(B.UNPACK_ROW_LENGTH,hn),_.pixelStorei(B.UNPACK_IMAGE_HEIGHT,ut),_.pixelStorei(B.UNPACK_SKIP_PIXELS,yn),_.pixelStorei(B.UNPACK_SKIP_ROWS,Zn),_.pixelStorei(B.UNPACK_SKIP_IMAGES,Li),Te===0&&J.generateMipmaps&&B.generateMipmap(Pe),_.unbindTexture()},this.initRenderTarget=function(w){K.get(w).__webglFramebuffer===void 0&&j.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?j.setTextureCube(w,0):w.isData3DTexture?j.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?j.setTexture2DArray(w,0):j.setTexture2D(w,0),_.unbindTexture()},this.resetState=function(){k=0,I=0,O=null,_.reset(),Re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return si}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=ct._getDrawingBufferColorSpace(e),t.unpackColorSpace=ct._getUnpackColorSpace()}}const ss=60,wt=1/ss,Lu=32,$e=21,qe=12,Rt={radius:.35,maxHalfHearts:6,moveSpeed:5,damage:10,fireRate:2,range:6,shotSpeed:9,luck:0},YM=60,KM=7,gr=.18,za=600,nn={radius:.42,hp:25,moveSpeed:1.6,aggroRange:7,attackRange:5.5,telegraphTicks:24,cooldownTicks:66,spitSpeed:6,spitDamage:1,contactDamage:1},Th=3.2,sc=.82,hs={halfHearts:{min:2,max:24},damage:{min:1,max:1/0},fireRate:{min:.5,max:5},range:{min:3,max:12},shotSpeed:{min:5,max:16},moveSpeed:{min:3.5,max:7.5},luck:{min:0,max:10}},$M=6,ZM=2.2,JM=1.6,jM=.11,Jr={damageMult:.5,range:2.5,angleRad:.9,radiusMult:.8},fr={speedMult:.5,radiusMult:1.6,homingRange:4.5,turnRadPerTick:.05,giantRadiusMult:2.2,giantDamageMult:2},QM=18,eT=240,jr={ticks:8,speed:14,iframeTicks:12,cooldownTicks:120},Eh=4,tT=3,nT={renacuajo:1,mosca_gorda:1,sapo_escupidor:3,babosa_acorazada:4,sapo_doble:8},sn={radius:.22,hp:4,contactDamage:1,windupTicks:18,hopTicks:12,hopSpeed:7,pauseTicks:26,aggroRange:9},Xi={radius:.28,hp:6,contactDamage:1,speed:1.3,retargetTicks:55,wobble:2.2},Yi={radius:.45,hp:30,contactDamage:2,speed:.8,aggroRange:10,turnRadPerTick:.02,backDot:.25},yt={radius:.5,hp:50,contactDamage:2,moveSpeed:1.2,aggroRange:9,attackRange:6,telegraphTicks:24,cooldownTicks:80,spitSpeed:6.5,spitDamage:1,spitSpreadRad:.16,swallowSeekRange:5,swallowRange:1.7,swallowTelegraphTicks:24,healPerSwallow:10,swallowCooldownTicks:140},iT=3,sT=2,cl={hpPorNivel:.15,velPorNivel:.04,danoExtraDesdeNivel:4},Du={gigante:{hpMult:2.2,velMult:.85,sizeMult:1.45,danoPlus:1,chanceBase:.03,chancePorNivel:.05,chanceTope:.25},veloz:{hpMult:1,velMult:1.5,sizeMult:.8,danoPlus:0,chanceBase:.03,chancePorNivel:.04,chanceTope:.2}},Um=99,rT={heart:.06},oT=2,aT={crystal:1,crystal_med:3,crystal_big:5},cT={big:.15,med:.35},lT={big:.08,med:.25},wh=1.7,Ah=7,uT=.45,We={radius:.95,hp:300,contactDamage:2,moveSpeed:1,idleTicks:45,jumpAimTicks:30,airborneTicks:20,slamRadius:1.7,slamDamage:2,tongueAimTicks:24,tongueSpeed:16,tongueDamage:2,tongueRadius:.32,tongueRange:11,summonTicks:20,summonCount:2,maxTadpoles:4,volleyAimTicks:26,volleyCount:7,volleySpreadRad:1.1,volleySpitSpeed:6.5,volleyDamage:1,bellyTicks:90,bellyDamageMult:1.5},dT=[$e/2,qe/2-.6],fT={x:$e/2-.55,y:qe/2-.9,w:1.1,h:.8},Rh=[[$e/2-2,qe/2+1.4],[$e/2,qe/2+1.4],[$e/2+2,qe/2+1.4]],hT=1.2,pT=1.5,Ti={caja:{hp:20,radius:.42,peso:4,loot:{heart:.2,crystal:.08}},caja_rica:{hp:20,radius:.42,peso:1,loot:{heart:.1,crystal:.45}},pila:{hp:30,radius:.5,peso:2,loot:{heart:.25,crystal:.12}},barril:{hp:20,radius:.4,peso:3,loot:{heart:.15,crystal:.05}},barrilete:{hp:20,radius:.42,peso:2,loot:{heart:.15,crystal:.05}}},Ch={maxPerRoom:2,chancePerRoom:.75},Nu={comun:60,rara:30,legendaria:10},mT=.75,Ki=1,gT=.55,Ji=5,$i=Math.PI,ll=2*$i,Ar=$i/2;function ai(n){n=n%ll,n>$i?n-=ll:n<-$i&&(n+=ll),n>Ar?n=$i-n:n<-Ar&&(n=-$i-n);const e=n*n;return n*(1+e*(-1/6+e*(1/120+e*(-1/5040+e*(1/362880+e*(-1/39916800+e/6227020800))))))}function Ai(n){return ai(n+Ar)}function ul(n){const e=n<0;e&&(n=-n);const t=n>1;t&&(n=1/n);const i=n*n,s=i/(1+i);let r=n/(1+i),o=r;for(let c=1;c<30;c++)r*=s*(2*c)/(2*c+1),o+=r;const a=t?Ar-o:o;return e?-a:a}function Ii(n,e){return e>0?ul(n/e):e<0?n>=0?ul(n/e)+$i:ul(n/e)-$i:n>0?Ar:n<0?-Ar:0}function Dn(n,e){return Math.sqrt(n*n+e*e)}const _T=[{id:"punos_de_piedra",nombre:"Puños de Piedra",categoria:"pasivo",slot:"brazos",rareza:"comun",precio:4,stats:{dano:4},mults:{cadencia:.8},tags:["empuje"],procs:[],spriteOverlay:"brazos_piedra",descripcion:"Golpea como montaña, dispara como abuela."},{id:"brazos_de_arquero",nombre:"Brazos de Arquero",categoria:"pasivo",slot:"brazos",rareza:"comun",precio:3,stats:{alcance:3,velProyectil:3},mults:{},tags:[],procs:[],spriteOverlay:"brazos_arquero",descripcion:"Brazos tensos como cuerdas: el chorro vuela lejos y rápido."},{id:"piernas_de_renacuajo",nombre:"Piernas de Renacuajo",categoria:"pasivo",slot:"piernas",rareza:"comun",precio:4,stats:{velMovimiento:1.2},mults:{},tags:["rastro_charcos"],procs:[],spriteOverlay:"piernas_renacuajo",descripcion:"Deja un caminito húmedo de pura prisa."},{id:"botas_de_salto",nombre:"Botas de Salto",categoria:"pasivo",slot:"piernas",rareza:"rara",precio:8,stats:{},mults:{},tags:["dash"],procs:[],spriteOverlay:"piernas_botas",descripcion:"Un brinquito con ventaja injusta (Shift)."},{id:"casco_de_lata",nombre:"Casco de Lata",categoria:"pasivo",slot:"cabeza",rareza:"comun",precio:3,stats:{armaduraPorSala:1},mults:{},tags:[],procs:[],spriteOverlay:"cabeza_casco",descripcion:"Una olla abollada que te para el primer golpe."},{id:"ojo_de_cristal",nombre:"Ojo de Cristal",categoria:"pasivo",slot:"cabeza",rareza:"rara",precio:8,stats:{},mults:{},tags:["ver_cofres"],procs:[{efecto:"critico",base:.1,porSuerte:.015,tope:.25}],spriteOverlay:"cabeza_monoculo",descripcion:"Ve el punto débil. A veces incluso lo acierta."},{id:"nucleo_denso",nombre:"Núcleo Denso",categoria:"pasivo",slot:"nucleo",rareza:"rara",precio:9,stats:{corazones:2,velMovimiento:-.8},mults:{},tags:[],procs:[],spriteOverlay:"nucleo_denso",descripcion:"Un núcleo el doble de pesado: aguanta más, corre menos."},{id:"corazon_de_la_gema",nombre:"Corazón de la Gema",categoria:"pasivo",slot:"nucleo",rareza:"legendaria",precio:15,stats:{proyectiles:1},mults:{dano:.75},tags:[],procs:[],spriteOverlay:"nucleo_gemelo",descripcion:"Dos gotas del mismo corazón."},{id:"chorro_dividido",nombre:"Chorro Dividido",categoria:"modificador",slot:"tragado",rareza:"comun",precio:3,stats:{},mults:{},tags:["divide"],procs:[{efecto:"dividir_en_3",base:.2,porSuerte:.03,tope:.5}],spriteOverlay:"tragado_bifurcador",descripcion:"El chorro se parte en dos al impactar. A veces en tres."},{id:"burbujas_traviesas",nombre:"Burbujas Traviesas",categoria:"modificador",slot:"tragado",rareza:"comun",precio:3,stats:{},mults:{dano:.7},tags:["burbuja"],procs:[{efecto:"burbuja_gigante",base:.05,porSuerte:.02,tope:.25}],spriteOverlay:"tragado_burbujas",descripcion:"Lentas, flotonas y con malas intenciones."},{id:"libro_multidisparo",nombre:"Libro de Multidisparo",categoria:"usable",slot:"usable",rareza:"rara",precio:7,stats:{},mults:{},tags:[],procs:[],usable:{efecto:"multidisparo",recargaTicks:1200,duracionTicks:300},spriteOverlay:"usable_libro",descripcion:"Capítulo 3: cómo disparar tres veces (Espacio)."},{id:"trebol_de_alcantarilla",nombre:"Trébol de Alcantarilla",categoria:"pasivo",slot:"nucleo",rareza:"comun",precio:3,stats:{suerte:2},mults:{},tags:[],procs:[],spriteOverlay:"nucleo_trebol",descripcion:"Creció donde nadie miraba. Da suerte igual."},{id:"manos_de_ladron",nombre:"Manos de Ladrón",categoria:"pasivo",slot:"brazos",rareza:"comun",precio:4,stats:{suerte:1},mults:{},tags:["iman_monedas"],procs:[],unlockable:!0,spriteOverlay:"brazos_ladron",descripcion:"Dedos largos: lo brillante viene solo a ti."},{id:"herradura_del_ahogado",nombre:"Herradura del Ahogado",categoria:"pasivo",slot:"cabeza",rareza:"rara",precio:8,stats:{suerte:3,corazones:-1},mults:{},tags:[],procs:[],unlockable:!0,spriteOverlay:"cabeza_herradura",descripcion:"Da mucha suerte. A su dueño anterior no."},{id:"punta_de_lanza",nombre:"Punta de Lanza",categoria:"pasivo",slot:"brazos",rareza:"comun",precio:4,stats:{dano:2,velProyectil:2},mults:{},tags:[],procs:[],spriteOverlay:"brazos_lanza",descripcion:"Afilada por generaciones de sapos descuidados."},{id:"pulmones_de_buzo",nombre:"Pulmones de Buzo",categoria:"pasivo",slot:"nucleo",rareza:"comun",precio:3,stats:{alcance:-1},mults:{cadencia:1.25},tags:[],procs:[],spriteOverlay:"nucleo_pulmones",descripcion:"Respira hondo, escupe seguido, apunta cerca."},{id:"caparazon_de_tortuga",nombre:"Caparazón de Tortuga",categoria:"pasivo",slot:"cabeza",rareza:"rara",precio:8,stats:{armaduraPorSala:2,velMovimiento:-.5},mults:{},tags:[],procs:[],spriteOverlay:"cabeza_caparazon",descripcion:"Su dueña llegó a los 200 años. Por algo será."},{id:"anillo_de_marea",nombre:"Anillo de Marea",categoria:"pasivo",slot:"nucleo",rareza:"rara",precio:8,stats:{suerte:1},mults:{},tags:[],procs:[{efecto:"critico",base:.05,porSuerte:.02,tope:.2}],spriteOverlay:"nucleo_anillo",descripcion:"Sube y baja con la marea. A veces, arrasa."},{id:"chorro_a_presion",nombre:"Chorro a Presión",categoria:"modificador",slot:"tragado",rareza:"rara",precio:9,stats:{},mults:{velProyectil:1.5,dano:1.2,cadencia:.85},tags:["empuje"],procs:[],spriteOverlay:"tragado_presion",descripcion:"Tragaste una manguera de bombero. Se nota."},{id:"medalla_oxidada",nombre:"Medalla Oxidada",categoria:"pasivo",slot:"nucleo",rareza:"comun",precio:3,stats:{corazones:1},mults:{},tags:[],procs:[],spriteOverlay:"nucleo_medalla",descripcion:"Alguien fue valiente antes que tú. Te presta un poco."},{id:"aletas_de_carpa",nombre:"Aletas de Carpa",categoria:"pasivo",slot:"piernas",rareza:"comun",precio:4,stats:{velMovimiento:.8,velProyectil:1},mults:{},tags:[],procs:[],spriteOverlay:"piernas_aletas",descripcion:"Nadan solas. Tú solo apunta."},{id:"silbato_del_pantano",nombre:"Silbato del Pantano",categoria:"usable",slot:"usable",rareza:"rara",precio:7,stats:{},mults:{},tags:[],procs:[],usable:{efecto:"prisa",recargaTicks:900,duracionTicks:300},spriteOverlay:"usable_silbato",descripcion:"Suena a huida digna. Corres el doble de digno."},{id:"corona_del_rey_sapo",nombre:"Corona del Rey Sapo",categoria:"pasivo",slot:"cabeza",rareza:"legendaria",precio:15,stats:{dano:3,velMovimiento:-.6},mults:{cadencia:1.15},tags:[],procs:[],unlockable:!0,spriteOverlay:"cabeza_corona",descripcion:"Pesa como un reino. Escupe como un rey."},{id:"perla_negra",nombre:"Perla Negra",categoria:"pasivo",slot:"nucleo",rareza:"rara",precio:9,stats:{suerte:2},mults:{},tags:[],procs:[{efecto:"critico",base:.08,porSuerte:.02,tope:.3}],unlockable:!0,spriteOverlay:"nucleo_perla",descripcion:"Creció alrededor de algo que nadie quiere nombrar."},{id:"escudo_de_caracol",nombre:"Escudo de Caracol",categoria:"usable",slot:"usable",rareza:"rara",precio:8,stats:{},mults:{},tags:[],procs:[],usable:{efecto:"escudo",recargaTicks:1200,duracionTicks:150},unlockable:!0,spriteOverlay:"usable_caracol",descripcion:"Préstamo de un caracol generoso. Devuélvelo entero."},{id:"guantes_de_rana",nombre:"Guantes de Rana",categoria:"pasivo",slot:"brazos",rareza:"comun",precio:4,stats:{},mults:{cadencia:1.2},tags:[],procs:[],unlockable:!0,spriteOverlay:"brazos_rana",descripcion:"Pegajosos por fuera, rapidísimos por dentro."}],vT={items:_T},xT=["dano","cadencia","alcance","velProyectil","velMovimiento","suerte","corazones","proyectiles","armaduraPorSala"];function yT(n,e){const t=n,i=s=>{throw new Error(`items.json[${e}] (${String(t?.id??"?")}): ${s}`)};(typeof t.id!="string"||!t.id)&&i("id inválido"),(typeof t.nombre!="string"||!t.nombre)&&i("nombre inválido"),["pasivo","modificador","usable","gema"].includes(t.categoria)||i(`categoria inválida: ${String(t.categoria)}`),["comun","rara","legendaria"].includes(t.rareza)||i(`rareza inválida: ${String(t.rareza)}`),(typeof t.precio!="number"||t.precio<=0)&&i("precio inválido");for(const s of["stats","mults"]){const r=t[s];(typeof r!="object"||r===null)&&i(`${s} debe ser objeto`);for(const[o,a]of Object.entries(r))xT.includes(o)||i(`${s}.${o} no es un stat conocido`),(typeof a!="number"||!Number.isFinite(a))&&i(`${s}.${o} no numérico`),s==="mults"&&a<=0&&i(`mults.${o} debe ser > 0`)}(!Array.isArray(t.tags)||t.tags.some(s=>typeof s!="string"))&&i("tags debe ser string[]"),Array.isArray(t.procs)||i("procs debe ser array");for(const s of t.procs){typeof s.efecto!="string"&&i("proc sin efecto");for(const r of["base","porSuerte","tope"]){const o=s[r];(typeof o!="number"||o<0||o>1)&&i(`proc.${r} fuera de [0,1]`)}s.base>s.tope&&i("proc.base > proc.tope")}if(t.categoria==="usable"){const s=t.usable??{};typeof s.efecto!="string"&&i("usable sin efecto"),(typeof s.recargaTicks!="number"||s.recargaTicks<=0)&&i("usable.recargaTicks inválido"),(typeof s.duracionTicks!="number"||s.duracionTicks<0)&&i("usable.duracionTicks inválido")}return t}function ST(){const n=vT.items;if(!Array.isArray(n)||n.length===0)throw new Error("items.json: lista de items vacía");const e=new Map;return n.forEach((t,i)=>{const s=yT(t,i);if(e.has(s.id))throw new Error(`items.json: id duplicado ${s.id}`);e.set(s.id,s)}),e}const as=ST(),bT=[...as.values()].filter(n=>!n.unlockable).map(n=>n.id);function _n(n){const e=as.get(n);if(!e)throw new Error(`Item desconocido: ${n}`);return e}function _r(n,e){return n.some(t=>_n(t).tags.includes(e))}function MT(n){const e=[];for(const t of n)e.push(..._n(t).procs);return e}const TT=[{id:"vacia",obstacles:[],spawns:[[4,2.5],[11,2.5],[4,6.5],[11,6.5],[7.5,2],[7.5,7]]},{id:"pilares_esquinas",obstacles:[{x:3,y:2,w:1,h:1},{x:11,y:2,w:1,h:1},{x:3,y:6,w:1,h:1},{x:11,y:6,w:1,h:1}],spawns:[[7.5,2],[7.5,7],[2,4.5],[13,4.5],[5.5,4.5],[9.5,4.5]]},{id:"bloque_central",obstacles:[{x:6,y:3.5,w:3,h:2}],spawns:[[3,2.5],[12,2.5],[3,6.5],[12,6.5]]},{id:"columnas_dobles",obstacles:[{x:4,y:3,w:1,h:3},{x:10,y:3,w:1,h:3}],spawns:[[2.5,2],[12.5,2],[2.5,7],[12.5,7],[7.5,4.5]]},{id:"esquinas_diagonales",obstacles:[{x:2.5,y:1.5,w:2,h:1.5},{x:10.5,y:6,w:2,h:1.5}],spawns:[[11.5,2],[3.5,7],[7.5,4.5],[13,4.5]]},{id:"pasillo_partido",obstacles:[{x:2.5,y:4,w:3,h:1},{x:9.5,y:4,w:3,h:1}],spawns:[[3.5,2],[11.5,2],[3.5,7],[11.5,7]]},{id:"celdas_sueltas",obstacles:[{x:4,y:2.5,w:1,h:1},{x:10,y:2.5,w:1,h:1},{x:4,y:5.5,w:1,h:1},{x:10,y:5.5,w:1,h:1}],spawns:[[7.5,2],[7.5,7],[2,4.5],[13,4.5]]},{id:"islas_gemelas",obstacles:[{x:2.5,y:2,w:2,h:2},{x:10.5,y:5,w:2,h:2}],spawns:[[12,2],[3,7],[7.5,4.5],[7.5,7]]},{id:"espina_central",obstacles:[{x:7,y:2.8,w:1,h:3.4}],spawns:[[3.5,2.5],[3.5,6.5],[11.5,2.5],[11.5,6.5]]},{id:"dientes",obstacles:[{x:3,y:3,w:1,h:1},{x:5.5,y:5,w:1,h:1},{x:9,y:2.8,w:1,h:1},{x:11.5,y:5,w:1,h:1}],spawns:[[2,6.5],[13,2],[7.5,7],[10.5,6.5]]},{id:"murallas_laterales",obstacles:[{x:3,y:2,w:1,h:2},{x:3,y:5.5,w:1,h:2},{x:11,y:2,w:1,h:2},{x:11,y:5.5,w:1,h:2}],spawns:[[7.5,2],[7.5,7],[1.8,4.5],[13.2,4.5],[7.5,4.5]]},{id:"anillo_roto",obstacles:[{x:5,y:2.8,w:2,h:1},{x:8.5,y:2.8,w:2,h:1},{x:5,y:5.2,w:2,h:1},{x:8.5,y:5.2,w:2,h:1}],spawns:[[7.5,4.5],[2.5,2],[12.5,2],[2.5,7],[12.5,7]]},{id:"cuello_botella",obstacles:[{x:4.5,y:1,w:1,h:2.2},{x:4.5,y:5.8,w:1,h:2.2},{x:9,y:3.2,w:1,h:2.6}],spawns:[[3,4.5],[12,2.5],[12,6.5],[11,4.5]]},{id:"escombros",obstacles:[{x:2.5,y:5.8,w:1.5,h:1},{x:5.5,y:2.8,w:1,h:1.5},{x:9.5,y:6,w:1.5,h:1},{x:11.5,y:2.2,w:1,h:1}],spawns:[[7.5,4.5],[3.5,2.5],[11.5,4.2],[4.5,6.8]]}],ET={templates:TT};function wT(n){let e=2166136261;for(let t=0;t<n.length;t++)e^=n.charCodeAt(t),e=Math.imul(e,16777619);return e>>>0}function Ls(n){let e=n>>>0;return function(){e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function AT(n){const e=t=>Ls((n^wT(t))>>>0);return{mapgen:e("mapgen"),ai:e("ai"),drops:e("drops"),procs:e("procs")}}function Rr(n,e,t){return e+n()*(t-e)}function RT(){const n=ET.templates;if(!Array.isArray(n)||n.length<12)throw new Error("el_pozo.json: se esperan al menos 12 plantillas (PLAN F1.2)");const e=Math.floor(($e-17)/2),t=Math.floor((qe-10)/2);for(const i of n){if(!i.id||!Array.isArray(i.obstacles)||!Array.isArray(i.spawns))throw new Error(`plantilla malformada: ${i.id??"?"}`);(e!==0||t!==0)&&(i.obstacles=i.obstacles.map(s=>({...s,x:s.x+e,y:s.y+t})),i.spawns=i.spawns.map(([s,r])=>[s+e,r+t]))}return n}const ku=RT();function mc(n){const e=ku.find(t=>t.id===n);if(!e)throw new Error(`plantilla desconocida: ${n}`);return e}const _s=11,Qr=[{dx:0,dy:-1,door:"n",opp:"s"},{dx:1,dy:0,door:"e",opp:"w"},{dx:0,dy:1,door:"s",opp:"n"},{dx:-1,dy:0,door:"w",opp:"e"}];function ir(n,e){return e*_s+n}function CT(n){return 4+n}function Uu(n,e){const t=new Map,i=[],s=(f,h,p)=>{const v={id:i.length,gx:f,gy:h,kind:p,doors:{n:-1,e:-1,s:-1,w:-1},templateId:"vacia",seed:Math.floor(n()*4294967295)>>>0,cleared:p==="start"||p==="treasure"||p==="shop",visited:p==="start",looted:!1,locked:p==="treasure",sold:[],drops:[],props:null};return i.push(v),t.set(ir(f,h),v),v},r=s(Math.floor(_s/2),Math.floor(_s/2),"start"),o=CT(e);let a=0,c=0;for(;a<o&&c++<500;){const f=i[Math.floor(n()*i.length)],h=Qr[Math.floor(n()*4)],p=f.gx+h.dx,v=f.gy+h.dy;if(p<0||v<0||p>=_s||v>=_s||t.has(ir(p,v)))continue;let m=0;for(const g of Qr)t.has(ir(p+g.dx,v+g.dy))&&m++;m>1||(s(p,v,"normal"),a++)}const l=["boss","treasure","shop"];for(const f of l){const h=[];for(const v of i)if(!(v.kind!=="normal"&&v.kind!=="start"))for(const m of Qr){const g=v.gx+m.dx,S=v.gy+m.dy;if(g<0||S<0||g>=_s||S>=_s||t.has(ir(g,S)))continue;let T=0;for(const x of Qr)t.has(ir(g+x.dx,S+x.dy))&&T++;T===1&&h.push({gx:g,gy:S,host:v})}if(h.length===0)throw new Error(`mapgen: sin hueco para la sala ${f} (nivel ${e})`);let p;if(f==="boss"){let v=-1,m=h[0];for(const g of h){const S=Math.abs(g.gx-r.gx)+Math.abs(g.gy-r.gy);S>v&&(v=S,m=g)}p=m}else p=h[Math.floor(n()*h.length)];s(p.gx,p.gy,f)}for(const f of i)for(const h of Qr){const p=t.get(ir(f.gx+h.dx,f.gy+h.dy));p&&(f.doors[h.door]=p.id)}for(const f of i)f.kind==="normal"&&(f.templateId=ku[Math.floor(n()*ku.length)].id);const u=i.filter(f=>f.kind==="normal"),d=u[Math.floor(n()*u.length)].id;return{level:e,rooms:i,current:r.id,trapdoorOpen:!1,keyRoomId:d}}function PT(n,e=bT){const t=Ls(n.seed^24301),i=[...e],s=[];for(let r=0;r<3&&i.length;r++)s.push(i.splice(Math.floor(t()*i.length),1)[0]);return s}function IT(n,e){return e==="boss"?(n+Eh)*tT:e==="normal"?n+Eh:0}function LT(n,e,t){const i=n();if(t==="sapo_doble"||t==="gorko")return null;let s=0;for(const r of Object.keys(Du)){const o=Du[r];if(s+=Math.min(o.chanceTope,o.chanceBase+o.chancePorNivel*(e-1)),i<s)return r}return null}function DT(n,e){if(n.kind==="boss"&&e===Ji)return[{kind:"gorko",x:$e/2,y:qe/2-1.5,variant:null}];const t=IT(e,n.kind);if(t<=0)return[];const i=Ls(n.seed),r=mc(n.templateId).spawns.map(([f,h])=>({x:f,y:h}));for(let f=r.length-1;f>0;f--){const h=Math.floor(i()*(f+1));[r[f],r[h]]=[r[h],r[f]]}const o=Object.entries(nT),a=Math.min(...o.map(([,f])=>f)),c=[];let l=t,u=0,d=0;for(;l>=a&&u<32;){const f=o.filter(([g,S])=>S<=l&&(g!=="sapo_doble"||d<sT));if(f.length===0)break;const[h,p]=f[Math.floor(i()*f.length)];h==="sapo_doble"&&d++;const v=r[u%r.length],m=u>=r.length?.6:0;c.push({kind:h,x:v.x+(i()*2-1)*m,y:v.y+(i()*2-1)*m,variant:LT(i,e,h)}),l-=p,u++}return c}function NT(n){const e={},t={};for(const i of n){const s=_n(i);for(const[r,o]of Object.entries(s.stats))e[r]=(e[r]??0)+o;for(const[r,o]of Object.entries(s.mults))t[r]=(t[r]??1)*o}return{flat:e,mult:t}}function Om(n,e){return Math.min(e.max,Math.max(e.min,n))}function sr(n,e,t,i){return Om((n+(t.flat[e]??0))*(t.mult[e]??1),i)}function Go(n){const e=NT(n);return{maxHalfHearts:Om(Rt.maxHalfHearts+(e.flat.corazones??0)*2,hs.halfHearts),damage:sr(Rt.damage,"dano",e,hs.damage),fireRate:sr(Rt.fireRate,"cadencia",e,hs.fireRate),range:sr(Rt.range,"alcance",e,hs.range),shotSpeed:sr(Rt.shotSpeed,"velProyectil",e,hs.shotSpeed),moveSpeed:sr(Rt.moveSpeed,"velMovimiento",e,hs.moveSpeed),luck:sr(Rt.luck,"suerte",e,hs.luck),projectiles:1+(e.flat.proyectiles??0),armorPerRoom:e.flat.armaduraPorSala??0}}function Fm(n,e){return Math.min(n.tope,n.base+e*n.porSuerte)}function Lo(){return{up:!1,down:!1,left:!1,right:!1,fire:!1,dash:!1,use:!1,use2:!1,interact:!1,aimX:0,aimY:0}}function Ou(n){return[...as.values()].filter(e=>!e.unlockable||n.config.unlockedItems.includes(e.id)).map(e=>e.id)}const Ha="0.1.0",Vn=1,Gn=1,Wn=$e-1,Xn=qe-1;function kT(n){return{x:3.5,y:qe/2+[0,1.2,-1.2,2.4,-2.4,3.6][n],kx:0,ky:0,halfHearts:Rt.maxHalfHearts,maxHalfHearts:Rt.maxHalfHearts,armor:0,keys:0,crystals:0,iframes:0,fireCooldown:0,aimX:1,aimY:0,deathTick:0,items:[],usable:null,usable2:null,dashTicks:0,dashCooldown:0,dashDirX:1,dashDirY:0,stats:Go([])}}function Ph(n,e){const t=AT(n),i=Math.max(1,Math.min(6,e?.players??1)),s={usableSlots:e?.usableSlots??1,unlockedItems:e?.unlockedItems??[],resume:i===1?e?.resume??null:null,players:i},r=Array.from({length:i},(c,l)=>kT(l)),o={version:Ha,seed:n,tick:0,status:"playing",config:s,player:r[0],players:r,stats:r[0].stats,floor:Uu(t.mapgen,1),obstacles:[],enemies:[],shots:[],puddles:[],pickups:[],drops:[],chest:null,props:[],events:[],nextId:2},a=s.resume;if(a&&a.nivel>1){const c=Math.min(a.nivel,Ji);for(let u=2;u<=c;u++)o.floor=Uu(t.mapgen,u);const l=o.player;l.items=[...a.items],l.stats=Go(l.items),o.stats=l.stats,l.maxHalfHearts=o.stats.maxHalfHearts,l.halfHearts=Math.max(1,Math.min(a.halfHearts,l.maxHalfHearts)),l.crystals=Math.min(Um,Math.max(0,a.crystals)),l.keys=Math.max(0,a.keys);for(const[u,d]of[["usable",a.usable],["usable2",a.usable2]])d&&as.has(d)&&(l[u]={itemId:d,cooldown:0,activeTicks:0})}return o.obstacles=[...mc(o.floor.rooms[o.floor.current].templateId).obstacles],{state:o,step(c){const l=Array.isArray(c)?c:[c??Lo()],u=o.players.map((d,f)=>l[f]??Lo());VT(o,u,t)},hash(){return oE(o)}}}const UT={sapo_escupidor:nn.hp,renacuajo:sn.hp,mosca_gorda:Xi.hp,babosa_acorazada:Yi.hp,sapo_doble:yt.hp,gorko:We.hp};function Cs(n){return OT(n.kind)*n.sizeMult}function OT(n){switch(n){case"sapo_escupidor":return nn.radius;case"renacuajo":return sn.radius;case"mosca_gorda":return Xi.radius;case"babosa_acorazada":return Yi.radius;case"sapo_doble":return yt.radius;case"gorko":return We.radius}}function FT(n){switch(n){case"sapo_escupidor":return nn.contactDamage;case"renacuajo":return sn.contactDamage;case"mosca_gorda":return Xi.contactDamage;case"babosa_acorazada":return Yi.contactDamage;case"sapo_doble":return yt.contactDamage;case"gorko":return We.contactDamage}}function Bm(n,e,t,i,s=1,r=null){const o=$e/2-t,a=qe/2-i,c=Dn(o,a)||1,l=r?Du[r]:null,u=e==="gorko"?1:s,d=(1+cl.hpPorNivel*(u-1))*(l?.hpMult??1),f=Math.round(UT[e]*d);return{id:n,kind:e,x:t,y:i,kx:0,ky:0,hp:f,maxHp:f,fsm:"idle",timer:0,targetX:t,targetY:i,wanderX:t,wanderY:i,facingX:o/c,facingY:a/c,swallowTarget:-1,swallowCooldown:0,attackCycle:0,phase2:!1,speedMult:(1+cl.velPorNivel*(u-1))*(l?.velMult??1),sizeMult:l?.sizeMult??1,dmgPlus:(u>=cl.danoExtraDesdeNivel?1:0)+(l?.danoPlus??0),variant:r}}const wa=.8;function wd(n,e,t){const i=n.floor.current,s=n.floor.rooms[e];i!==e&&(n.floor.rooms[i].drops=n.drops.map(o=>({kind:o.kind,x:o.x,y:o.y})),n.floor.rooms[i].props=n.props.map(o=>({kind:o.kind,x:o.x,y:o.y,hp:o.hp,loot:o.loot}))),n.floor.current=e,n.obstacles=[...mc(s.templateId).obstacles],n.shots.length=0,n.puddles.length=0,n.pickups.length=0,n.drops.length=0;for(const o of s.drops)n.drops.push({id:n.nextId++,kind:o.kind,x:o.x,y:o.y});s.drops=[],s.props===null&&(s.props=BT(s)),n.props=s.props.map(o=>({id:n.nextId++,...o}));const r=[0,.9,-.9,1.8,-1.8,2.7];if(n.players.forEach((o,a)=>{const c=r[a]??0;t==="n"?(o.x=$e/2+c,o.y=qe-1-wa):t==="s"?(o.x=$e/2+c,o.y=1+wa):t==="e"?(o.x=1+wa,o.y=qe/2+c):t==="w"?(o.x=$e-1-wa,o.y=qe/2+c):(o.x=$e/2+c,o.y=qe/2+1.5),o.kx=o.ky=0}),n.enemies.length=0,s.visited=!0,!s.cleared)for(const o of DT(s,n.floor.level))n.enemies.push(Bm(n.nextId++,o.kind,o.x,o.y,n.floor.level,o.variant));if(s.kind==="treasure"&&!s.looted){const o=Ls(s.seed),a=Ou(n),c=a[Math.floor(o()*a.length)];n.pickups.push({id:n.nextId++,itemId:c,x:$e/2,y:qe/2})}s.kind==="shop"&&(PT(s,Ou(n)).filter(a=>!s.sold.includes(a)).forEach((a,c)=>{const[l,u]=Rh[c%Rh.length];n.pickups.push({id:n.nextId++,itemId:a,x:l,y:u,price:_n(a).precio})}),n.obstacles.push({...fT,invisible:!0})),t&&st(n,{type:"room_changed",from:i,to:e,dir:t,tick:n.tick})}function BT(n){if(n.kind!=="normal")return[];const e=Ls(n.seed^805502);if(e()>Ch.chancePerRoom)return[];const t=mc(n.templateId),i=1+Math.floor(e()*Ch.maxPerRoom),s=Object.keys(Ti),r=s.reduce((a,c)=>a+Ti[c].peso,0),o=[];for(let a=0;a<i;a++){let c=e()*r,l="caja";for(const h of s)if(c-=Ti[h].peso,c<=0){l=h;break}const u=Ti[l],d=e(),f=d<u.loot.heart?"heart":d<u.loot.heart+u.loot.crystal?"crystal":"nada";for(let h=0;h<10;h++){const p=2+e()*($e-4),v=2+e()*(qe-4),m=Math.abs(p-$e/2)<Ki+.8||Math.abs(v-qe/2)<Ki+.8,g=t.obstacles.some(T=>p>T.x-.5&&p<T.x+T.w+.5&&v>T.y-.5&&v<T.y+T.h+.5),S=o.some(T=>At(T.x,T.y,p,v)<1.3);if(!(m||g||S)){o.push({kind:l,x:p,y:v,hp:u.hp,loot:f});break}}}return o}function zT(n,e){if(n.floor.level>=Ji){n.status="victory",st(n,{type:"victory",tick:n.tick});return}n.floor=Uu(e.mapgen,n.floor.level+1);for(const t of n.players)t.halfHearts<=0&&(t.halfHearts=2,t.deathTick=0);wd(n,n.floor.current),st(n,{type:"level_started",level:n.floor.level,tick:n.tick})}function Ad(n,e,t,i){for(const s of i){const r=Ht(n,s.x,s.x+s.w),o=Ht(e,s.y,s.y+s.h),a=n-r,c=e-o,l=a*a+c*c;if(!(l>=t*t))if(l>1e-9){const u=Math.sqrt(l);n=r+a/u*t,e=o+c/u*t}else{const u=n-s.x,d=s.x+s.w-n,f=e-s.y,h=s.y+s.h-e,p=Math.min(u,d,f,h);p===u?n=s.x-t:p===d?n=s.x+s.w+t:p===f?e=s.y-t:e=s.y+s.h+t}}return{x:n,y:e}}function HT(n,e,t){for(const i of t)if(n>=i.x&&n<=i.x+i.w&&e>=i.y&&e<=i.y+i.h)return!0;return!1}function VT(n,e,t){if(n.events=[],n.tick++,n.status!=="playing"){Lh(n),Dh(n);return}const i=n.floor.current,s=n.floor.level;for(let r=0;r<n.players.length;r++){const o=n.players[r];if(!(o.halfHearts<=0)&&(GT(n,o,e[r],t),n.floor.current!==i||n.floor.level!==s||n.status!=="playing"))return}qT(n,t),Lh(n),Dh(n),tE(n,t),sE(n)}function GT(n,e,t,i){const s=(b,N)=>{if(b&&(b.cooldown>0&&b.cooldown--,b.activeTicks>0&&b.activeTicks--,N&&b.cooldown===0)){const P=_n(b.itemId);b.activeTicks=P.usable.duracionTicks,b.cooldown=P.usable.recargaTicks,st(n,{type:"usable_activated",itemId:b.itemId,tick:n.tick})}};s(e.usable,t.use),s(e.usable2,t.use2),e.dashCooldown>0&&e.dashCooldown--;let r=(t.right?1:0)-(t.left?1:0),o=(t.down?1:0)-(t.up?1:0);if(r!==0&&o!==0){const b=1/Math.SQRT2;r*=b,o*=b}if(t.dash&&e.dashTicks===0&&e.dashCooldown===0&&_r(e.items,"dash")){const b=r!==0||o!==0?r:e.aimX,N=r!==0||o!==0?o:e.aimY,P=Dn(b,N)||1;e.dashDirX=b/P,e.dashDirY=N/P,e.dashTicks=jr.ticks,e.dashCooldown=jr.cooldownTicks,e.iframes=Math.max(e.iframes,jr.iframeTicks),st(n,{type:"dash_used",tick:n.tick})}const a=e.x,c=e.y;if(e.dashTicks>0)e.dashTicks--,e.x+=(e.dashDirX*jr.speed+e.kx)*wt,e.y+=(e.dashDirY*jr.speed+e.ky)*wt;else{const b=e.stats.moveSpeed*(zm(e,"prisa")?pT:1);e.x+=(r*b+e.kx)*wt,e.y+=(o*b+e.ky)*wt}e.kx*=sc,e.ky*=sc,Math.abs(e.kx)<.05&&(e.kx=0),Math.abs(e.ky)<.05&&(e.ky=0);const l=n.floor.rooms[n.floor.current],u=l.cleared,d=b=>!u||b<0?!1:!n.floor.rooms[b].locked||e.keys>0,f=Math.abs(e.x-$e/2)<Ki,h=Math.abs(e.y-qe/2)<Ki,p=Rt.radius,v=d(l.doors.n)&&f?Gn-.5:Gn+p,m=d(l.doors.s)&&f?Xn+.5:Xn-p,g=d(l.doors.w)&&h?Vn-.5:Vn+p,S=d(l.doors.e)&&h?Wn+.5:Wn-p;e.x=Ht(e.x,g,S),e.y=Ht(e.y,v,m);const T=Ad(e.x,e.y,p,n.obstacles);e.x=T.x,e.y=T.y;for(const b of n.props){const N=At(e.x,e.y,b.x,b.y),P=p+Ti[b.kind].radius;N<P&&N>1e-4&&(e.x=b.x+(e.x-b.x)/N*P,e.y=b.y+(e.y-b.y)/N*P)}const x=(b,N)=>{const P=n.floor.rooms[b];P.locked&&(P.locked=!1,e.keys--,st(n,{type:"door_unlocked",roomId:b,tick:n.tick})),wd(n,b,N)};if(e.y<Gn-.25&&l.doors.n>=0){x(l.doors.n,"n");return}if(e.y>Xn+.25&&l.doors.s>=0){x(l.doors.s,"s");return}if(e.x<Vn-.25&&l.doors.w>=0){x(l.doors.w,"w");return}if(e.x>Wn+.25&&l.doors.e>=0){x(l.doors.e,"e");return}if(n.floor.trapdoorOpen&&l.kind==="boss"&&At(e.x,e.y,$e/2,qe/2)<gT){zT(n,i);return}(e.x!==a||e.y!==c)&&n.tick%QM===0&&_r(e.items,"rastro_charcos")&&n.puddles.push({x:e.x,y:e.y+Rt.radius*.6,ttl:eT});const M=t.aimX-e.x,E=t.aimY-e.y,L=Dn(M,E);L>.001&&(e.aimX=M/L,e.aimY=E/L),e.fireCooldown>0&&e.fireCooldown--,t.fire&&e.fireCooldown===0&&(WT(n,e,i),e.fireCooldown=Math.round(ss/e.stats.fireRate),st(n,{type:"shot_fired",owner:"player",tick:n.tick}));for(let b=n.pickups.length-1;b>=0;b--){const N=n.pickups[b],P=At(e.x,e.y,N.x,N.y);if(!N.price&&P<Rt.radius+.35)Ih(n,e,b);else if(N.price&&t.interact&&P<hT&&e.crystals>=N.price){const D=N.price,Y=N.itemId;e.crystals-=D,n.floor.rooms[n.floor.current].sold.push(Y),N.price=0,Ih(n,e,b),st(n,{type:"item_bought",itemId:Y,price:D,crystalsLeft:e.crystals,tick:n.tick})}}const y=_r(e.items,"iman_monedas")?wh*2.2:wh;for(let b=n.drops.length-1;b>=0;b--){const N=n.drops[b];if(N.kind==="heart"&&e.halfHearts>=e.maxHalfHearts)continue;const P=At(e.x,e.y,N.x,N.y);if(P<y&&P>1e-6&&(N.x+=(e.x-N.x)/P*Ah*wt,N.y+=(e.y-N.y)/P*Ah*wt),!(P>=uT)){switch(N.kind){case"heart":e.halfHearts=Math.min(e.maxHalfHearts,e.halfHearts+oT),st(n,{type:"heart_collected",halfHeartsLeft:e.halfHearts,tick:n.tick});break;case"key":e.keys++,st(n,{type:"key_collected",keys:e.keys,tick:n.tick});break;case"crystal":case"crystal_med":case"crystal_big":{const D=aT[N.kind];e.crystals=Math.min(Um,e.crystals+D),st(n,{type:"crystal_collected",value:D,total:e.crystals,tick:n.tick});break}}n.drops.splice(b,1)}}n.chest&&!n.chest.opened&&n.chest.roomId===n.floor.current&&At(e.x,e.y,n.chest.x,n.chest.y)<Rt.radius+mT&&(n.chest.opened=!0,n.chest.reward==="cristales"&&n.drops.push({id:n.nextId++,kind:"crystal_big",x:n.chest.x,y:n.chest.y+.7}),st(n,{type:"chest_opened",reward:n.chest.reward,tick:n.tick})),XT(n,e)}function WT(n,e,t){const i=_r(e.items,"burbuja"),s=[];_r(e.items,"divide")&&s.push("divide"),i&&s.push("burbuja");let r=e.stats.projectiles;for(const l of[e.usable,e.usable2])l&&l.activeTicks>0&&_n(l.itemId).usable.efecto==="multidisparo"&&(r+=2);const o=e.stats.shotSpeed*(i?fr.speedMult:1),a=ZM+(_r(e.items,"empuje")?JM:0),c=Ii(e.aimY,e.aimX);for(let l=0;l<r;l++){const u=c+(l-(r-1)/2)*jM,d=Ai(u),f=ai(u);let h=gr*(i?fr.radiusMult:1),p=e.stats.damage;i&&Rd(n,e,t,"burbuja_gigante")&&(h=gr*fr.giantRadiusMult,p*=fr.giantDamageMult),n.shots.push({id:n.nextId++,owner:"player",pidx:n.players.indexOf(e),x:e.x+d*(Rt.radius+h),y:e.y+f*(Rt.radius+h),vx:d*o,vy:f*o,damage:p,traveled:0,maxRange:e.stats.range,radius:h,knockback:a,tags:s,fragment:!1})}}function Rd(n,e,t,i){const s=MT(e.items).find(a=>a.efecto===i);if(!s)return!1;const r=Fm(s,e.stats.luck),o=t.procs()<r;return o&&st(n,{type:"proc_triggered",efecto:i,tick:n.tick}),o}function Ih(n,e,t){const i=n.pickups[t],s=_n(i.itemId);if(s.categoria==="usable")if(!e.usable)e.usable={itemId:i.itemId,cooldown:0,activeTicks:0},n.pickups.splice(t,1);else if(n.config.usableSlots>=2&&!e.usable2)e.usable2={itemId:i.itemId,cooldown:0,activeTicks:0},n.pickups.splice(t,1);else{const r=e.usable;e.usable={itemId:i.itemId,cooldown:0,activeTicks:0},i.itemId=r.itemId}else{e.items.push(i.itemId),n.pickups.splice(t,1);const r=n.floor.rooms[n.floor.current];r.kind==="treasure"&&(r.looted=!0);const o=e.stats;e.stats=Go(e.items),e===n.player&&(n.stats=e.stats);const a=e.stats.maxHalfHearts-o.maxHalfHearts;e.maxHalfHearts=e.stats.maxHalfHearts,a>0&&(e.halfHearts+=a),e.halfHearts=Math.min(e.halfHearts,e.maxHalfHearts);const c=e.stats.armorPerRoom-o.armorPerRoom;c>0&&(e.armor=Math.min($M,e.armor+c*2))}st(n,{type:"item_picked",itemId:s.id,tick:n.tick})}function XT(n,e){if(e.iframes>0&&(e.iframes--,e.iframes===0)){let t=!1;for(const i of n.enemies){const s=At(e.x,e.y,i.x,i.y),r=Rt.radius+Cs(i);if(s<r){const o=s>.001?(e.x-i.x)/s:1,a=s>.001?(e.y-i.y)/s:0;e.x=Ht(i.x+o*(r+.05),Vn+Rt.radius,Wn-Rt.radius),e.y=Ht(i.y+a*(r+.05),Gn+Rt.radius,Xn-Rt.radius),t=!0}}st(n,{type:"iframes_ended",separated:t,tick:n.tick})}}function qT(n,e){const t=[];for(const i of n.enemies){switch(i.x+=i.kx*wt,i.y+=i.ky*wt,i.kx*=sc,i.ky*=sc,i.kind){case"sapo_escupidor":YT(n,i,e);break;case"renacuajo":KT(n,i);break;case"mosca_gorda":$T(n,i,e);break;case"babosa_acorazada":ZT(n,i);break;case"sapo_doble":JT(n,i,t);break;case"gorko":jT(n,i,e,t);break}const s=Cs(i);if(i.x=Ht(i.x,Vn+s,Wn-s),i.y=Ht(i.y,Gn+s,Xn-s),i.kind!=="mosca_gorda"){const r=Ad(i.x,i.y,s,n.obstacles);i.x=r.x,i.y=r.y;for(const o of n.props){const a=At(i.x,i.y,o.x,o.y),c=s+Ti[o.kind].radius;a<c&&a>1e-4&&(i.x=o.x+(i.x-o.x)/a*c,i.y=o.y+(i.y-o.y)/a*c)}}}eE(n),t.length&&(n.enemies=n.enemies.filter(i=>!t.includes(i.id)))}function Ur(n,e,t){let i=n.players[0],s=1/0;for(const r of n.players){if(r.halfHearts<=0)continue;const o=At(e,t,r.x,r.y);o<s&&(s=o,i=r)}return i}function YT(n,e,t){const i=Ur(n,e.x,e.y),s=At(e.x,e.y,i.x,i.y);switch(e.fsm){case"idle":{if(e.timer>0&&e.timer--,s<=nn.attackRange&&e.timer===0){e.fsm="aim",e.timer=nn.telegraphTicks,e.targetX=i.x,e.targetY=i.y,st(n,{type:"telegraph_started",enemyId:e.id,tick:n.tick});break}n.tick%45===0&&(s<=nn.aggroRange?(e.wanderX=i.x,e.wanderY=i.y):(e.wanderX=Ht(e.x+Rr(t.ai,-2,2),Vn+1,Wn-1),e.wanderY=Ht(e.y+Rr(t.ai,-2,2),Gn+1,Xn-1)));const r=At(e.x,e.y,e.wanderX,e.wanderY);r>.2&&(e.x+=(e.wanderX-e.x)/r*nn.moveSpeed*e.speedMult*wt,e.y+=(e.wanderY-e.y)/r*nn.moveSpeed*e.speedMult*wt);break}case"aim":{e.timer--,e.timer<=0&&(e.fsm="shoot");break}case"shoot":{rc(n,e,e.targetX,e.targetY,0,nn.spitSpeed,nn.spitDamage),st(n,{type:"shot_fired",owner:"enemy",tick:n.tick}),e.fsm="cool",e.timer=nn.cooldownTicks;break}case"cool":{e.timer--,e.timer<=0&&(e.fsm="idle",e.timer=12);break}default:e.fsm="idle"}}function KT(n,e){const t=Ur(n,e.x,e.y);switch(e.fsm){case"idle":{if(e.timer>0&&e.timer--,e.timer===0&&At(e.x,e.y,t.x,t.y)<=sn.aggroRange){e.fsm="windup",e.timer=sn.windupTicks;const i=t.x-e.x,s=t.y-e.y,r=Dn(i,s)||1;e.facingX=i/r,e.facingY=s/r,st(n,{type:"telegraph_started",enemyId:e.id,tick:n.tick})}break}case"windup":{e.timer--,e.timer<=0&&(e.fsm="hop",e.timer=sn.hopTicks);break}case"hop":{e.x+=e.facingX*sn.hopSpeed*e.speedMult*wt,e.y+=e.facingY*sn.hopSpeed*e.speedMult*wt,e.timer--,e.timer<=0&&(e.fsm="idle",e.timer=sn.pauseTicks);break}default:e.fsm="idle",e.timer=sn.pauseTicks}}function $T(n,e,t){const i=Ur(n,e.x,e.y);n.tick%Xi.retargetTicks===0&&(e.wanderX=Ht(i.x+Rr(t.ai,-2.2,Xi.wobble),Vn+.5,Wn-.5),e.wanderY=Ht(i.y+Rr(t.ai,-2.2,Xi.wobble),Gn+.5,Xn-.5));const s=e.wanderX-e.x,r=e.wanderY-e.y,o=Dn(s,r);o>.15&&(e.x+=s/o*Xi.speed*e.speedMult*wt,e.y+=r/o*Xi.speed*e.speedMult*wt,e.facingX=s/o,e.facingY=r/o)}function ZT(n,e){const t=Ur(n,e.x,e.y),i=Ii(t.y-e.y,t.x-e.x),s=Ii(e.facingY,e.facingX);let r=i-s;for(;r>Math.PI;)r-=2*Math.PI;for(;r<-Math.PI;)r+=2*Math.PI;const o=Ht(r,-.02,Yi.turnRadPerTick),a=s+o;e.facingX=Ai(a),e.facingY=ai(a),At(e.x,e.y,t.x,t.y)<=Yi.aggroRange&&(e.x+=e.facingX*Yi.speed*e.speedMult*wt,e.y+=e.facingY*Yi.speed*e.speedMult*wt)}function JT(n,e,t){const i=Ur(n,e.x,e.y),s=At(e.x,e.y,i.x,i.y);switch(e.swallowCooldown>0&&e.swallowCooldown--,e.fsm){case"idle":{e.timer>0&&e.timer--;const r=QT(n,e);if(e.hp<e.maxHp&&e.swallowCooldown===0&&r){const o=At(e.x,e.y,r.x,r.y);if(o<=yt.swallowRange){e.fsm="swallow_aim",e.timer=yt.swallowTelegraphTicks,e.swallowTarget=r.id,st(n,{type:"telegraph_started",enemyId:e.id,tick:n.tick});break}const a=o||1;e.x+=(r.x-e.x)/a*yt.moveSpeed*e.speedMult*wt,e.y+=(r.y-e.y)/a*yt.moveSpeed*e.speedMult*wt;break}if(s<=yt.attackRange&&e.timer===0){e.fsm="aim",e.timer=yt.telegraphTicks,e.targetX=i.x,e.targetY=i.y,st(n,{type:"telegraph_started",enemyId:e.id,tick:n.tick});break}s<=yt.aggroRange&&s>2&&(e.x+=(i.x-e.x)/s*yt.moveSpeed*e.speedMult*wt,e.y+=(i.y-e.y)/s*yt.moveSpeed*e.speedMult*wt);break}case"aim":{e.timer--,e.timer<=0&&(e.fsm="shoot");break}case"shoot":{rc(n,e,e.targetX,e.targetY,-.16,yt.spitSpeed,yt.spitDamage),rc(n,e,e.targetX,e.targetY,yt.spitSpreadRad,yt.spitSpeed,yt.spitDamage),st(n,{type:"shot_fired",owner:"enemy",tick:n.tick}),e.fsm="cool",e.timer=yt.cooldownTicks;break}case"swallow_aim":{if(e.timer--,e.timer<=0){const r=n.enemies.find(o=>o.id===e.swallowTarget);if(r&&At(e.x,e.y,r.x,r.y)<=yt.swallowRange*1.3){t.push(r.id);const o=Math.min(yt.healPerSwallow,e.maxHp-e.hp);e.hp+=o,st(n,{type:"elite_swallowed",enemyId:e.id,victimId:r.id,healed:o,tick:n.tick})}e.swallowTarget=-1,e.swallowCooldown=yt.swallowCooldownTicks,e.fsm="cool",e.timer=24}break}case"cool":{e.timer--,e.timer<=0&&(e.fsm="idle",e.timer=10);break}default:e.fsm="idle"}}function jT(n,e,t,i){const s=Ur(n,e.x,e.y);if(!e.phase2&&e.hp<=e.maxHp/2){e.phase2=!0,e.fsm="cool",e.timer=30,st(n,{type:"gorko_phase2",hp:e.hp,tick:n.tick});return}switch(e.fsm){case"idle":{if(e.timer>0){e.timer--;const a=At(e.x,e.y,s.x,s.y);a>2.5&&(e.x+=(s.x-e.x)/a*We.moveSpeed*wt,e.y+=(s.y-e.y)/a*We.moveSpeed*wt);break}const r=e.attackCycle++;if(e.phase2){const a=n.enemies.find(c=>c.kind==="renacuajo");if(r%2===0&&a){i.push(a.id),st(n,{type:"elite_swallowed",enemyId:e.id,victimId:a.id,healed:0,tick:n.tick}),e.fsm="volley",e.timer=We.volleyAimTicks,e.targetX=s.x,e.targetY=s.y,st(n,{type:"telegraph_started",enemyId:e.id,tick:n.tick});break}if(r%2===0){e.fsm="summon",e.timer=We.summonTicks,st(n,{type:"telegraph_started",enemyId:e.id,tick:n.tick});break}e.fsm="jump_aim",e.timer=We.jumpAimTicks,e.targetX=s.x,e.targetY=s.y,st(n,{type:"telegraph_started",enemyId:e.id,tick:n.tick});break}const o=r%3;o===0?(e.fsm="jump_aim",e.timer=We.jumpAimTicks,e.targetX=s.x,e.targetY=s.y):o===1?(e.fsm="aim",e.timer=We.tongueAimTicks,e.targetX=s.x,e.targetY=s.y):(e.fsm="summon",e.timer=We.summonTicks),st(n,{type:"telegraph_started",enemyId:e.id,tick:n.tick});break}case"jump_aim":{e.timer--,e.timer<=0&&(e.fsm="airborne",e.timer=We.airborneTicks);break}case"airborne":{if(e.timer--,e.timer<=0){e.x=Ht(e.targetX,Vn+We.radius,Wn-We.radius),e.y=Ht(e.targetY,Gn+We.radius,Xn-We.radius);const r=Ad(e.x,e.y,We.radius,n.obstacles);e.x=r.x,e.y=r.y;for(const o of n.players)o.halfHearts<=0||o.iframes>0||At(o.x,o.y,e.x,e.y)<We.slamRadius+Rt.radius&&Fu(n,o,We.slamDamage,e.x,e.y,"aplastamiento:gorko");e.fsm="cool",e.timer=We.idleTicks}break}case"aim":{e.timer--,e.timer<=0&&(e.fsm="shoot");break}case"shoot":{const r=Ii(e.targetY-e.y,e.targetX-e.x);n.shots.push({id:n.nextId++,owner:"enemy",x:e.x+Ai(r)*(We.radius+We.tongueRadius),y:e.y+ai(r)*(We.radius+We.tongueRadius),vx:Ai(r)*We.tongueSpeed,vy:ai(r)*We.tongueSpeed,damage:We.tongueDamage,traveled:0,maxRange:We.tongueRange,radius:We.tongueRadius,knockback:0,tags:["lengua"],fragment:!1}),st(n,{type:"shot_fired",owner:"enemy",tick:n.tick}),e.fsm="cool",e.timer=We.idleTicks;break}case"summon":{if(e.timer--,e.timer<=0){const r=n.enemies.filter(a=>a.kind==="renacuajo").length,o=Math.min(We.summonCount,We.maxTadpoles-r);for(let a=0;a<o;a++){const c=Ht(e.x+Rr(t.ai,-2,2),Vn+1,Wn-1),l=Ht(e.y+Rr(t.ai,-2,2),Gn+1,Xn-1);n.enemies.push(Bm(n.nextId++,"renacuajo",c,l))}e.fsm="cool",e.timer=We.idleTicks}break}case"volley":{if(e.timer--,e.timer<=0){const r=Ii(e.targetY-e.y,e.targetX-e.x);for(let o=0;o<We.volleyCount;o++){const a=(o-(We.volleyCount-1)/2)*(We.volleySpreadRad/(We.volleyCount-1));rc(n,e,e.x+Ai(r+a),e.y+ai(r+a),0,We.volleySpitSpeed,We.volleyDamage)}st(n,{type:"shot_fired",owner:"enemy",tick:n.tick}),e.fsm="belly",e.timer=We.bellyTicks}break}case"belly":{e.timer--,e.timer<=0&&(e.fsm="idle",e.timer=We.idleTicks);break}case"cool":{e.timer--,e.timer<=0&&(e.fsm="idle",e.timer=We.idleTicks);break}default:e.fsm="idle",e.timer=We.idleTicks}}function QT(n,e){let t=null,i=yt.swallowSeekRange;for(const s of n.enemies){if(s.id===e.id||s.kind==="sapo_doble")continue;const r=At(e.x,e.y,s.x,s.y);r<i&&(i=r,t=s)}return t}function rc(n,e,t,i,s,r,o){const a=Ii(i-e.y,t-e.x)+s,c=Ai(a),l=ai(a),u=Cs(e);n.shots.push({id:n.nextId++,owner:"enemy",x:e.x+c*(u+gr),y:e.y+l*(u+gr),vx:c*r,vy:l*r,damage:o,traveled:0,maxRange:12,radius:gr,knockback:0,tags:[],fragment:!1})}function eE(n){for(let e=0;e<n.enemies.length;e++)for(let t=e+1;t<n.enemies.length;t++){const i=n.enemies[e],s=n.enemies[t];if(i.fsm==="airborne"||s.fsm==="airborne")continue;const r=(Cs(i)+Cs(s))*.95,o=s.x-i.x,a=s.y-i.y,c=Dn(o,a);if(c>=r)continue;const l=c>1e-6?o/c:Ai(i.id*2.399),u=c>1e-6?a/c:ai(i.id*2.399),d=iT*wt*.5;i.x-=l*d,i.y-=u*d,s.x+=l*d,s.y+=u*d}}function Lh(n){for(let e=n.shots.length-1;e>=0;e--){const t=n.shots[e];if(t.owner==="player"&&t.tags.includes("burbuja")&&n.enemies.length){let r=null,o=fr.homingRange;for(const a of n.enemies){const c=At(t.x,t.y,a.x,a.y);c<o&&(o=c,r=a)}if(r){const a=Ii(t.vy,t.vx);let l=Ii(r.y-t.y,r.x-t.x)-a;for(;l>Math.PI;)l-=2*Math.PI;for(;l<-Math.PI;)l+=2*Math.PI;const u=Ht(l,-.05,fr.turnRadPerTick),d=Dn(t.vx,t.vy);t.vx=Ai(a+u)*d,t.vy=ai(a+u)*d}}t.x+=t.vx*wt,t.y+=t.vy*wt,t.traveled+=Dn(t.vx,t.vy)*wt;const i=t.x<Vn||t.x>Wn||t.y<Gn||t.y>Xn||HT(t.x,t.y,n.obstacles),s=t.traveled>=t.maxRange;(i||s)&&(t.owner==="player"&&n.puddles.push({x:Ht(t.x,Vn+.2,Wn-.2),y:Ht(t.y,Gn+.2,Xn-.2),ttl:za}),n.shots.splice(e,1))}}function Dh(n){for(let e=n.puddles.length-1;e>=0;e--)--n.puddles[e].ttl<=0&&n.puddles.splice(e,1)}function tE(n,e){for(let t=n.shots.length-1;t>=0;t--){const i=n.shots[t];if(i.owner==="player")for(let s=n.props.length-1;s>=0;s--){const r=n.props[s];if(!(At(i.x,i.y,r.x,r.y)>=i.radius+Ti[r.kind].radius)){r.hp-=i.damage,n.puddles.push({x:i.x,y:i.y,ttl:za/2}),n.shots.splice(t,1),r.hp<=0&&(r.loot==="heart"?n.drops.push({id:n.nextId++,kind:"heart",x:r.x,y:r.y}):r.loot==="crystal"&&n.drops.push({id:n.nextId++,kind:"crystal",x:r.x,y:r.y}),st(n,{type:"prop_broken",kind:r.kind,loot:r.loot,tick:n.tick}),n.props.splice(s,1));break}}}for(let t=n.shots.length-1;t>=0;t--){const i=n.shots[t];if(i.owner==="player"){for(const s of n.enemies)if(!(s.kind==="gorko"&&s.fsm==="airborne")&&At(i.x,i.y,s.x,s.y)<i.radius+Cs(s)){if(s.kind==="babosa_acorazada"){const c=Dn(i.vx,i.vy)||1;if(i.vx/c*s.facingX+i.vy/c*s.facingY<Yi.backDot){n.puddles.push({x:i.x,y:i.y,ttl:za/3}),n.shots.splice(t,1),st(n,{type:"shot_blocked",enemyId:s.id,tick:n.tick});break}}const r=n.players[i.pidx??0]??n.player;let o=i.damage;Rd(n,r,e,"critico")&&(o*=2),s.kind==="gorko"&&s.fsm==="belly"&&(o=Math.round(o*We.bellyDamageMult)),s.hp-=o;const a=Dn(i.vx,i.vy)||1;s.kx+=i.vx/a*i.knockback,s.ky+=i.vy/a*i.knockback,n.puddles.push({x:i.x,y:i.y,ttl:za/2}),i.tags.includes("divide")&&!i.fragment&&iE(n,i,e),n.shots.splice(t,1),st(n,{type:"enemy_hit",enemyId:s.id,damage:o,hpLeft:Math.max(0,s.hp),tick:n.tick});break}}}for(let t=n.enemies.length-1;t>=0;t--){const i=n.enemies[t];i.hp<=0&&(n.enemies.splice(t,1),nE(n,i,e),st(n,{type:"enemy_killed",enemyId:i.id,kind:i.kind,tick:n.tick}))}for(const t of n.players)if(!(t.halfHearts<=0)){if(t.iframes===0){for(const i of n.enemies)if(!(i.kind==="gorko"&&i.fsm==="airborne")&&At(t.x,t.y,i.x,i.y)<Rt.radius+Cs(i)){Fu(n,t,FT(i.kind)+i.dmgPlus,i.x,i.y,"contacto:"+i.kind);break}}if(t.iframes===0)for(let i=n.shots.length-1;i>=0;i--){const s=n.shots[i];if(s.owner==="enemy"&&At(s.x,s.y,t.x,t.y)<s.radius+Rt.radius){n.shots.splice(i,1),Fu(n,t,s.damage,s.x,s.y,"escupitajo");break}}}}function nE(n,e,t){const i=()=>(t.drops()-.5)*.5;if(e.kind==="gorko")return;const s=e.kind==="sapo_doble"?cT:e.variant==="gigante"?lT:null;let r="crystal";if(s){const o=t.drops();r=o<s.big?"crystal_big":o<s.big+s.med?"crystal_med":"crystal"}n.drops.push({id:n.nextId++,kind:r,x:e.x+i(),y:e.y+i()}),!s&&t.drops()<rT.heart&&n.drops.push({id:n.nextId++,kind:"heart",x:e.x+i(),y:e.y+i()})}function iE(n,e,t){const i=n.players[e.pidx??0]??n.player,r=Rd(n,i,t,"dividir_en_3")?[-.9,0,Jr.angleRad]:[-.9,Jr.angleRad],o=Ii(e.vy,e.vx),a=Dn(e.vx,e.vy)||1;for(const c of r){const l=o+c;n.shots.push({id:n.nextId++,owner:"player",pidx:e.pidx,x:e.x,y:e.y,vx:Ai(l)*a,vy:ai(l)*a,damage:Math.max(1,Math.round(e.damage*Jr.damageMult)),traveled:0,maxRange:Jr.range,radius:e.radius*Jr.radiusMult,knockback:e.knockback*.5,tags:[],fragment:!0})}st(n,{type:"shot_split",count:r.length,tick:n.tick})}function zm(n,e){for(const t of[n.usable,n.usable2])if(t&&t.activeTicks>0&&_n(t.itemId).usable.efecto===e)return!0;return!1}function Fu(n,e,t,i,s,r){if(zm(e,"escudo"))return;const o=Math.min(e.armor,t);o>0&&(e.armor-=o,st(n,{type:"armor_absorbed",amount:o,armorLeft:e.armor,tick:n.tick}));const a=t-o;e.halfHearts=Math.max(0,e.halfHearts-a),e.halfHearts===0&&e.deathTick===0&&(e.deathTick=n.tick),e.iframes=YM;const c=At(e.x,e.y,i,s),l=c>.001?(e.x-i)/c:1,u=c>.001?(e.y-s)/c:0;e.kx+=l*Th,e.ky+=u*Th,a>0&&st(n,{type:"damage_taken",amount:a,halfHeartsLeft:e.halfHearts,source:r,tick:n.tick})}function sE(n){if(n.status==="playing"&&n.players.every(t=>t.halfHearts<=0)){n.status="dead";for(const t of n.players)t.deathTick===0&&(t.deathTick=n.tick);st(n,{type:"player_died",tick:n.tick});return}const e=n.floor.rooms[n.floor.current];if(n.enemies.length===0&&!e.cleared&&n.status==="playing"&&(e.cleared=!0,st(n,{type:"room_cleared",tick:n.tick}),e.id===n.floor.keyRoomId&&n.drops.push({id:n.nextId++,kind:"key",x:$e/2,y:qe/2}),e.kind==="boss"&&!n.floor.trapdoorOpen&&(n.floor.trapdoorOpen=!0,st(n,{type:"trapdoor_opened",tick:n.tick}),n.drops.push({id:n.nextId++,kind:"crystal_med",x:$e/2-1,y:qe/2+1.2}),n.drops.push({id:n.nextId++,kind:"heart",x:$e/2+1,y:qe/2+1.2}),n.drops.push({id:n.nextId++,kind:"heart",x:$e/2,y:qe/2+1.8}),n.floor.level===Ji))){n.drops.push({id:n.nextId++,kind:"crystal_big",x:$e/2,y:qe/2-1.4});const t=Ou(n),i=[...as.values()].filter(o=>t.includes(o.id)&&(o.rareza==="legendaria"||o.slot==="nucleo")),s=Ls(e.seed^45141),r=i[Math.floor(s()*i.length)];n.pickups.push({id:n.nextId++,itemId:r.id,x:$e/2-1.6,y:qe/2-1.4}),n.chest={roomId:e.id,x:$e/2+1.6,y:qe/2-1.4,opened:!1,reward:rE(n,e.seed)}}}function rE(n,e){const t=Ls(e^49395),i=[];for(const o of as.values())o.unlockable&&!n.config.unlockedItems.includes(o.id)&&i.push([o.id,Nu[o.rareza]]);if(n.config.usableSlots<2&&i.push(["slot_usable_2",Nu.legendaria]),i.length===0)return"cristales";const s=i.reduce((o,[,a])=>o+a,0);let r=t()*s;for(const[o,a]of i)if(r-=a,r<=0)return o;return i[i.length-1][0]}function st(n,e){n.events.push(e)}function Ht(n,e,t){return n<e?e:n>t?t:n}function At(n,e,t,i){return Dn(t-n,i-e)}function oE(n){const e=r=>Math.round(r*1e6)/1e6,t={t:n.tick,st:n.status,p:n.players.map(r=>[e(r.x),e(r.y),r.halfHearts,r.iframes,r.items.join(","),r.armor,r.keys,r.crystals,r.dashTicks,r.dashCooldown,r.usable?[r.usable.itemId,r.usable.cooldown,r.usable.activeTicks]:null,r.usable2?[r.usable2.itemId,r.usable2.cooldown,r.usable2.activeTicks]:null]),cf:[n.config.usableSlots,n.config.unlockedItems.join(","),n.config.resume?[n.config.resume.nivel,n.config.resume.items.join(",")]:null,n.config.players],pk:n.pickups.map(r=>[r.id,r.itemId]),fl:[n.floor.level,n.floor.current,n.floor.trapdoorOpen?1:0,n.floor.rooms.map(r=>(r.cleared?1:0)+(r.visited?2:0)+(r.locked?4:0)).join("")],ec:n.drops.map(r=>`${r.kind}${e(r.x)}`).join(","),ch:n.chest?[n.chest.roomId,n.chest.opened?1:0,n.chest.reward]:null,pr:n.props.map(r=>[r.kind,e(r.x),r.hp]),e:n.enemies.map(r=>[r.id,e(r.x),e(r.y),r.hp,r.fsm,r.timer]),sh:n.shots.map(r=>[r.id,r.owner,e(r.x),e(r.y),e(r.traveled)]),pu:n.puddles.length},i=JSON.stringify(t);let s=2166136261;for(let r=0;r<i.length;r++)s^=i.charCodeAt(r),s=Math.imul(s,16777619);return(s>>>0).toString(16).padStart(8,"0")}function aE(n,e){const t={version:e,seed:()=>n.sim.state.seed,state:()=>structuredClone(n.sim.state),hash:()=>n.sim.hash(),press:(i,s)=>n.press(i,s/1e3*ss),aimAt:(i,s)=>n.aimAt(i,s),clearAim:()=>n.clearAim(),tick:i=>n.tick(i),pause:i=>{n.paused=i},isPaused:()=>n.paused,reset:i=>n.reset(i),telemetry:()=>structuredClone(n.telemetry),clearTelemetry:()=>{n.telemetry.length=0},goto:i=>wd(n.sim.state,i),heal:()=>{const i=n.sim.state.player;i.halfHearts=i.maxHalfHearts},grant:i=>{const s=n.sim.state;s.player.items.push(i),s.player.stats=Go(s.player.items),s.stats=s.player.stats,s.player.maxHalfHearts=s.stats.maxHalfHearts},clear:()=>{n.sim.state.enemies.length=0}};return window.__game=t,t}const Aa=1e3/ss,Nh=5;function cE(n,e){let t=e,i=Ph(n,t),s=0,r=0;const o={up:0,down:0,left:0,right:0,fire:0,dash:0,use:0,use2:0,interact:0};let a=null;const c={sim:i,live:Lo(),paused:!1,net:null,telemetry:[],frame(d){if(c.paused)return[];if(r>0)return r--,[];s+=Math.min(d,Aa*Nh);const f=[];for(;s>=Aa;){const h=u();if(h===null){s=Math.min(s,Aa*Nh);break}s-=Aa,f.push(...h)}return f},tick(d){const f=[];for(let h=0;h<d;h++){const p=u();if(p===null)break;f.push(...p)}return f},press(d,f){o[d]=Math.max(o[d],Math.max(0,Math.round(f)))},aimAt(d,f){a={x:d,y:f}},clearAim(){a=null},freeze(d){r=Math.max(r,d)},reset(d,f){f&&(t=f),i=Ph(d??i.state.seed,t),c.sim=i,s=0,r=0,c.telemetry.length=0,Object.keys(o).forEach(h=>o[h]=0),a=null}};function l(){const d={...c.live};return Object.keys(o).forEach(f=>{o[f]>0&&(d[f]=!0,o[f]--)}),a&&(d.aimX=a.x,d.aimY=a.y),d}function u(){if(c.net){const f=c.net.tick(l(),i.state.tick);if(f===null)return null;i.step(f),c.net.afterTick(i.state.tick,()=>i.hash())}else i.step(l());const d=i.state.events;return d.length&&c.telemetry.push(...d),d}return c}const Bu=1,kh="kai_save";function Uh(){return{version:Bu,cristales:0,desbloqueos:[],slimepedia:[],expedicion:null}}function lE(n){const e=n;return!e||typeof e.seed!="number"||typeof e.nivel!="number"||e.nivel<1||!Array.isArray(e.items)||e.items.some(t=>typeof t!="string")||typeof e.halfHearts!="number"?null:{seed:e.seed>>>0,nivel:Math.floor(e.nivel),items:e.items,usable:typeof e.usable=="string"?e.usable:null,usable2:typeof e.usable2=="string"?e.usable2:null,halfHearts:Math.max(1,Math.floor(e.halfHearts)),crystals:typeof e.crystals=="number"?Math.max(0,Math.floor(e.crystals)):0,keys:typeof e.keys=="number"?Math.max(0,Math.floor(e.keys)):0}}function uE(n){const e=typeof localStorage<"u"?localStorage:(()=>{const s=new Map;return{getItem:r=>s.get(r)??null,setItem:(r,o)=>void s.set(r,o)}})();let t=Uh();try{const s=e.getItem(kh);if(s){const r=JSON.parse(s);r&&r.version===Bu&&typeof r.cristales=="number"&&Array.isArray(r.desbloqueos)&&(t={version:Bu,cristales:Math.max(0,Math.floor(r.cristales)),desbloqueos:r.desbloqueos.filter(o=>typeof o=="string"),slimepedia:Array.isArray(r.slimepedia)?r.slimepedia.filter(o=>typeof o=="string"):[],expedicion:lE(r.expedicion)})}}catch{t=Uh()}const i={data:t,persist(){e.setItem(kh,JSON.stringify(i.data))},harvest(s){s>0&&(i.data.cristales+=s,i.persist())},unlock(s){return i.has(s)?!1:(i.data.desbloqueos.push(s),i.persist(),!0)},has(s){return i.data.desbloqueos.includes(s)},saveExpedition(s){i.data.expedicion=s,i.persist()}};return i}function Va(n){return{usableSlots:n.has("slot_usable_2")?2:1,unlockedItems:n.data.desbloqueos.filter(e=>e.startsWith("item_")).map(e=>e.slice(5))}}const Hm="kai_audio",Oh={titulo:"assets/music/titulo.ogg",ambiente:"assets/music/ambiente.ogg",combate:"assets/music/combate.ogg",gorko:"assets/music/gorko.ogg"},dE="assets/music/gameover.ogg",Fh={dano:["impactPunch_medium_000","impactPunch_medium_001"],dano_fuerte:["impactPunch_heavy_000","impactPunch_heavy_001"],caja:["impactPlank_medium_000","impactPlank_medium_001","impactPlank_medium_002"],roca:["impactMining_000","impactMining_001"],cristal:["impactGlass_light_000","impactGlass_light_001","impactGlass_light_002"],armadura:["impactPlate_light_000","impactPlate_light_001"]};function fE(){try{const n=localStorage.getItem(Hm);if(n){const e=JSON.parse(n),t=typeof e.volume=="number"?e.volume:.8,i=(s,r)=>typeof s=="number"?Math.min(1,Math.max(0,s)):r;return{musicVol:i(e.musicVol,t),sfxVol:i(e.sfxVol,t),muted:!!e.muted}}}catch{}return{musicVol:.8,sfxVol:.8,muted:!1}}function hE(n){const e=fE(),t=new AudioContext,i=t.createGain();i.gain.value=e.muted?0:1,i.connect(t.destination);const s=t.createGain();s.gain.value=e.musicVol,s.connect(i);const r=t.createGain();r.gain.value=e.sfxVol,r.connect(i);const o=()=>localStorage.setItem(Hm,JSON.stringify(e)),a=()=>{t.state==="suspended"&&t.resume()};window.addEventListener("pointerdown",a),window.addEventListener("keydown",a);const c=new Map;async function l(k,I){try{const F=await(await fetch(I)).arrayBuffer();c.set(k,await t.decodeAudioData(F))}catch{}}for(const[k,I]of Object.entries(Oh))l(`music:${k}`,I);l("music:gameover",dE);for(const[k,I]of Object.entries(Fh))I.forEach((O,F)=>void l(`${k}:${F}`,`assets/sfx/${O}.ogg`));const u=new Map,d=new Set;function f(k){const I=c.get(`music:${k}`);if(!I)return null;let O=u.get(k);if(O||(O=t.createGain(),O.gain.value=0,O.connect(s),u.set(k,O)),!d.has(k)&&t.state==="running"){const F=t.createBufferSource();F.buffer=I,F.loop=!0,F.connect(O),F.start(),d.add(k)}return O}function h(k){const I=t.currentTime;for(const O of Object.keys(Oh))f(O)?.gain.setTargetAtTime(k[O]??0,I,.9)}let p=!1,v=null,m=null;function g(){const k=c.get("music:gameover");if(!k||p)return;p=!0;const I=t.createBufferSource();I.buffer=k;const O=t.createGain();O.gain.value=.4,I.connect(O),O.connect(s),I.start(),I.onended=()=>{v===I&&(v=null,m=null)},v=I,m=O}function S(){if(!v)return;const k=v,I=m;v=null,m=null;const O=t.currentTime;I.gain.setTargetAtTime(0,O,.12),k.stop(O+.5)}function T(k,I){const O=Fh[k].length,F=c.get(`${k}:${Math.floor(Math.random()*O)}`);if(!F)return;const G=t.createBufferSource();G.buffer=F,G.playbackRate.value=.92+Math.random()*.16;const U=t.createGain();U.gain.value=I,G.connect(U),U.connect(r),G.start()}const x=(()=>{const k=t.createBuffer(1,t.sampleRate,t.sampleRate),I=k.getChannelData(0);for(let O=0;O<I.length;O++)I[O]=Math.random()*2-1;return k})();function M(k,I){const O=t.createGain(),F=t.currentTime;return O.gain.setValueAtTime(1e-4,F),O.gain.exponentialRampToValueAtTime(Math.max(2e-4,k),F+.008),O.gain.exponentialRampToValueAtTime(1e-4,F+I),O.connect(r),O}function E(k,I,O,F,G,U=30){const $=t.createOscillator();$.type=k;const ue=t.currentTime;$.frequency.setValueAtTime(I,ue),$.frequency.exponentialRampToValueAtTime(Math.max(20,O),ue+F),$.detune.value=(Math.random()*2-1)*U,$.connect(M(G,F)),$.start(ue),$.stop(ue+F+.02)}function L(k,I,O,F=1){const G=t.createBufferSource();G.buffer=x,G.playbackRate.value=.7+Math.random()*.6;const U=t.createBiquadFilter();U.type="bandpass",U.frequency.value=k,U.Q.value=F,G.connect(U),U.connect(M(O,I)),G.start(),G.stop(t.currentTime+I+.02)}function y(k,I,O){k.forEach((F,G)=>{const U=t.createOscillator();U.type="triangle";const $=t.currentTime+G*I*.8;U.frequency.value=F;const ue=t.createGain();ue.gain.setValueAtTime(1e-4,$),ue.gain.exponentialRampToValueAtTime(O,$+.01),ue.gain.exponentialRampToValueAtTime(1e-4,$+I),ue.connect(r),U.connect(ue),U.start($),U.stop($+I+.02)})}const b=new Map;function N(k,I){const O=performance.now();return(b.get(k)??0)+I>O?!1:(b.set(k,O),!0)}function P(k){switch(k.type){case"shot_fired":k.owner==="player"?N("shot",45)&&E("sine",640,220,.09,.1):N("eshot",60)&&E("square",240,140,.12,.05);break;case"enemy_hit":N("hit",40)&&L(900,.07,.12,2);break;case"shot_blocked":N("block",80)&&T("armadura",.14);break;case"enemy_killed":L(500,.18,.16,1.2),E("sine",300,80,.2,.1);break;case"damage_taken":T(k.amount>=2?"dano_fuerte":"dano",.5);break;case"armor_absorbed":T("armadura",.4);break;case"prop_broken":T("caja",.45);break;case"dash_used":L(1600,.14,.09,.6);break;case"telegraph_started":N("tele",150)&&E("sine",880,660,.08,.045);break;case"heart_collected":y([392,523.25],.09,.16);break;case"crystal_collected":N("crystal",70)&&T("cristal",.35);break;case"key_collected":y([659.3,880],.08,.1);break;case"door_unlocked":E("square",220,320,.12,.1,4);break;case"item_picked":case"item_bought":y([523.25,659.3,784,1046.5],.1,.22),T("cristal",.28);break;case"usable_activated":E("triangle",440,880,.14,.11);break;case"proc_triggered":k.efecto==="critico"&&N("crit",90)&&L(2400,.06,.1,3);break;case"room_cleared":y([261.6,392],.12,.09);break;case"trapdoor_opened":E("sine",120,50,.5,.14);break;case"level_started":E("sine",80,45,.8,.16),L(300,.6,.07,.5);break;case"gorko_phase2":E("sawtooth",90,40,.7,.14),L(150,.5,.12,.7);break;case"elite_swallowed":E("sine",500,90,.3,.12);break;case"chest_opened":y([523.25,659.3,784,1046.5,1318.5],.1,.2);break;case"victory":y([392,523.25,659.3,784,1046.5],.14,.13);break;case"player_died":g();break}}const D=document.createElement("button");D.className="audio-toggle";const Y=()=>{D.textContent=e.muted?"🔇":"🔊"};Y(),D.addEventListener("pointerdown",k=>{k.stopPropagation(),A()}),window.addEventListener("keydown",k=>{k.code==="KeyM"&&A()}),n.appendChild(D);function R(k){e.muted=k,i.gain.linearRampToValueAtTime(k?0:1,t.currentTime+.08),o(),Y()}function A(){R(!e.muted)}return{onEvents(k){if(!(e.muted||t.state!=="running"))for(const I of k)P(I)},prefs:()=>({...e}),setMusicVol(k){e.musicVol=Math.min(1,Math.max(0,k)),s.gain.setTargetAtTime(e.musicVol,t.currentTime,.03),o()},setSfxVol(k){e.sfxVol=Math.min(1,Math.max(0,k)),r.gain.setTargetAtTime(e.sfxVol,t.currentTime,.03),o()},setMuted:R,previewSfx(){t.state==="running"&&T("cristal",.35)},update(k){if(t.state!=="running")return;if(document.body.classList.contains("at-title")){S(),h({titulo:.32});return}if(k.status==="dead"){h({});return}if(S(),k.status==="victory"){h({ambiente:.12});return}if(p=!1,k.tick<=0){h({});return}const O=k.floor.rooms[k.floor.current],F=O?.kind==="boss"&&!O.cleared&&k.enemies.length>0;F&&k.floor.level>=Ji?h({ambiente:.1,gorko:.3}):h(F?{ambiente:.1,combate:.28}:{ambiente:.32})}}}/*! noble-secp256k1 - MIT License (c) 2019 Paul Miller (paulmillr.com) */const Vm=Object.freeze({p:0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2fn,n:0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141n,h:1n,a:0n,b:7n,Gx:0x79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798n,Gy:0x483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8n}),{p:ji,n:Wo,Gx:pE,Gy:mE,b:Gm}=Vm,ln=32,Do=64,zu={publicKey:ln+1,publicKeyUncompressed:Do+1,seed:ln+ln/2},Ut=(n="",e=Error)=>{const t=new e(n),{captureStackTrace:i}=Error;throw typeof i=="function"&&i(t,Ut),t},gE=n=>n instanceof Uint8Array||ArrayBuffer.isView(n)&&n.constructor.name==="Uint8Array"&&n.BYTES_PER_ELEMENT===1,Ln=(n,e,t="")=>{const i=gE(n),s=n?.length,r=e!==void 0;if(!i||r&&s!==e){const o=t&&`"${t}" `,a=r?` of length ${e}`:"",c=i?`length=${s}`:`type=${typeof n}`,l=o+"expected Uint8Array"+a+", got "+c;return i?Ut(l,RangeError):Ut(l,TypeError)}return n},No=n=>new Uint8Array(n),Wm=(n,e)=>n.toString(16).padStart(e,"0"),Xm=n=>{let e="";for(const t of Ln(n))e+=Wm(t,2);return e},yi={_0:48,_9:57,A:65,F:70,a:97,f:102},Bh=n=>n>=yi._0&&n<=yi._9?n-yi._0:n>=yi.A&&n<=yi.F?n-(yi.A-10):n>=yi.a&&n<=yi.f?n-(yi.a-10):void 0,qm=n=>{const e="hex invalid";if(typeof n!="string")return Ut(e);const t=n.length,i=t/2;if(t%2)return Ut(e);const s=No(i);for(let r=0,o=0;r<i;r++,o+=2){const a=Bh(n.charCodeAt(o)),c=Bh(n.charCodeAt(o+1));if(a===void 0||c===void 0)return Ut(e);s[r]=a*16+c}return s},zh=()=>globalThis?.crypto?.subtle??Ut("crypto.subtle must be defined, consider polyfill"),Cr=(...n)=>{let e=0;for(const s of n)e+=Ln(s).length;const t=No(e);let i=0;for(const s of n)t.set(s,i),i+=s.length;return t},Cd=(n=ln)=>(globalThis?.crypto).getRandomValues(No(n)),Hu=BigInt,Ps=(n,e,t,i="bad number: out of range")=>typeof n!="bigint"?Ut(i,TypeError):e<=n&&n<t?n:Ut(i,RangeError),Be=(n,e=ji)=>{const t=n%e;return t>=0n?t:e+t},gc=n=>Be(n,Wo),_E=(n,e)=>{(n===0n||e<=0n)&&Ut("no inverse n="+n+" mod="+e);let t=Be(n,e),i=e,s=0n,r=1n;for(;t!==0n;){const o=i/t,a=i%t,c=s-r*o;i=t,t=a,s=r,r=c}return i===1n?Be(s,e):Ut("no inverse")},Ym=n=>{const e=ME[n];return typeof e!="function"&&Ut("hashes."+n+" not set"),e},Hh=(n,e,t)=>Ln(Ym(n)(e,t),ln,"digest"),Vh=(n,e,t)=>Promise.resolve(Ym(n)(e,t)).then(i=>Ln(i,ln,"digest")),dl=n=>n instanceof rs?n:Ut("Point expected"),Km=n=>Be(Be(n*n)*n+Gm),Gh=n=>Ps(n,0n,ji),Ga=n=>Ps(n,1n,ji),vE=n=>Ps(n,1n,Wo),_c=n=>!(n&1n),$m=n=>Uint8Array.of(n),xE=n=>$m(_c(n)?2:3),Zm=n=>{const e=Km(Ga(n));let t=1n;for(let i=e,s=(ji+1n)/4n;s>0n;s>>=1n)s&1n&&(t=t*i%ji),i=i*i%ji;return Be(t*t)!==e&&Ut("sqrt invalid"),_c(t)?t:Be(-t)},ei=class ei{constructor(e,t,i){Qt(this,"X");Qt(this,"Y");Qt(this,"Z");this.X=Gh(e),this.Y=Ga(t),this.Z=Gh(i),Object.freeze(this)}static CURVE(){return Vm}static fromAffine(e){const{x:t,y:i}=e;return t===0n&&i===0n?ys:new ei(t,i,1n)}static fromBytes(e){Ln(e);const{publicKey:t,publicKeyUncompressed:i}=zu;let s;const r=e.length,o=e[0],a=e.subarray(1),c=oc(a,0,ln);if(r===t&&(o===2||o===3)){let l=Zm(c);o===3&&(l=Be(-l)),s=new ei(c,l,1n)}return r===i&&o===4&&(s=new ei(c,oc(a,ln,Do),1n)),s?s.assertValidity():Ut("bad point: not on curve")}static fromHex(e){return ei.fromBytes(qm(e))}get x(){return this.toAffine().x}get y(){return this.toAffine().y}equals(e){const{X:t,Y:i,Z:s}=this,{X:r,Y:o,Z:a}=dl(e),c=Be(t*a),l=Be(r*s),u=Be(i*a),d=Be(o*s);return c===l&&u===d}is0(){return this.equals(ys)}negate(){return new ei(this.X,Be(-this.Y),this.Z)}double(){return this.add(this)}add(e){const{X:t,Y:i,Z:s}=this,{X:r,Y:o,Z:a}=dl(e),c=0n,l=Gm;let u=0n,d=0n,f=0n;const h=Be(l*3n);let p=Be(t*r),v=Be(i*o),m=Be(s*a),g=Be(t+i),S=Be(r+o);g=Be(g*S),S=Be(p+v),g=Be(g-S),S=Be(t+s);let T=Be(r+a);return S=Be(S*T),T=Be(p+m),S=Be(S-T),T=Be(i+s),u=Be(o+a),T=Be(T*u),u=Be(v+m),T=Be(T-u),f=Be(c*S),u=Be(h*m),f=Be(u+f),u=Be(v-f),f=Be(v+f),d=Be(u*f),v=Be(p+p),v=Be(v+p),m=Be(c*m),S=Be(h*S),v=Be(v+m),m=Be(p-m),m=Be(c*m),S=Be(S+m),p=Be(v*S),d=Be(d+p),p=Be(T*S),u=Be(g*u),u=Be(u-p),p=Be(g*v),f=Be(T*f),f=Be(f+p),new ei(u,d,f)}subtract(e){return this.add(dl(e).negate())}multiply(e,t=!0){if(!t&&e===0n)return ys;if(vE(e),e===1n)return this;if(this.equals(Is))return LE(e).p;let i=ys,s=Is;for(let r=this;e>0n;r=r.double(),e>>=1n)e&1n?i=i.add(r):t&&(s=s.add(r));return i}multiplyUnsafe(e){return this.multiply(e,!1)}toAffine(){const{X:e,Y:t,Z:i}=this;if(this.equals(ys))return{x:0n,y:0n};if(i===1n)return{x:e,y:t};const s=_E(i,ji);return Be(i*s)!==1n&&Ut("inverse invalid"),{x:Be(e*s),y:Be(t*s)}}assertValidity(){const{x:e,y:t}=this.toAffine();return Ga(e),Ga(t),Be(t*t)===Km(e)?this:Ut("bad point: not on curve")}toBytes(e=!0){const{x:t,y:i}=this.assertValidity().toAffine(),s=ui(t);return e?Cr(xE(i),s):Cr($m(4),s,ui(i))}toHex(e){return Xm(this.toBytes(e))}};Qt(ei,"BASE"),Qt(ei,"ZERO");let rs=ei;const Is=new rs(pE,mE,1n),ys=new rs(0n,1n,0n);rs.BASE=Is;rs.ZERO=ys;const yE=(n,e,t)=>Is.multiply(e,!1).add(n.multiply(t,!1)).assertValidity(),Ds=n=>Hu("0x"+(Xm(n)||"0")),oc=(n,e,t)=>Ds(n.subarray(e,t)),SE=2n**256n,ui=n=>qm(Wm(Ps(n,0n,SE),Do)),bE=n=>{const e=Ds(Ln(n,ln,"secret key"));return Ps(e,1n,Wo,"invalid secret key: outside of range")},Wh="SHA-256",ME={hmacSha256Async:async(n,e)=>{const t=zh(),i="HMAC",s=await t.importKey("raw",n,{name:i,hash:{name:Wh}},!1,["sign"]);return No(await t.sign(i,s,e))},hmacSha256:void 0,sha256Async:async n=>No(await zh().digest(Wh,n)),sha256:void 0},TE=n=>{if(n=n===void 0?Cd(zu.seed):n,Ln(n),n.length<zu.seed||n.length>1024)return Ut("expected 48-1024b",RangeError);const e=Be(Ds(n),Wo-1n);return ui(e+1n)},EE=n=>e=>{const t=TE(e);return{secretKey:t,publicKey:n(t)}},Jm=n=>Uint8Array.from("BIP0340/"+n,e=>e.charCodeAt(0)),jm="aux",Qm="nonce",eg="challenge",Vu=(n,...e)=>{const t=Hh("sha256",Jm(n));return Hh("sha256",Cr(t,t,...e))},Gu=(n,...e)=>Vh("sha256Async",Jm(n)).then(t=>Vh("sha256Async",Cr(t,t,...e))),Pd=n=>{const e=bE(n),t=Is.multiply(e),{x:i,y:s}=t.assertValidity().toAffine(),r=_c(s)?e:gc(-e),o=ui(i);return{d:r,px:o}},Id=n=>gc(Ds(n)),tg=(...n)=>Id(Vu(eg,...n)),ng=async(...n)=>Id(await Gu(eg,...n)),ig=n=>Pd(n).px,wE=EE(ig),sg=(n,e,t)=>{const{px:i,d:s}=Pd(e);return{m:Ln(n),px:i,d:s,a:Ln(t,ln)}},rg=n=>{const e=Id(n);e===0n&&Ut("sign failed: k is zero");const{px:t,d:i}=Pd(ui(e));return{rx:t,k:i}},og=(n,e,t,i)=>Cr(e,ui(gc(n+t*i))),ag="invalid signature produced",AE=(n,e,t=Cd(ln))=>{const{m:i,px:s,d:r,a:o}=sg(n,e,t),a=Vu(jm,o),c=ui(r^Ds(a)),l=Vu(Qm,c,s,i),{rx:u,k:d}=rg(l),f=tg(u,s,i),h=og(d,u,f,r);return lg(h,i,s)||Ut(ag),h},RE=async(n,e,t=Cd(ln))=>{const{m:i,px:s,d:r,a:o}=sg(n,e,t),a=await Gu(jm,o),c=ui(r^Ds(a)),l=await Gu(Qm,c,s,i),{rx:u,k:d}=rg(l),f=await ng(u,s,i),h=og(d,u,f,r);return await ug(h,i,s)||Ut(ag),h},CE=(n,e)=>n instanceof Promise?n.then(e):e(n),cg=(n,e,t,i)=>{const s=Ln(n,Do,"signature"),r=Ln(e,void 0,"message"),o=Ln(t,ln,"publicKey");try{const a=Ds(o),c=Zm(a),l=new rs(a,c,1n).assertValidity(),u=ui(l.toAffine().x),d=oc(s,0,ln);Ps(d,1n,ji);const f=oc(s,ln,Do);Ps(f,1n,Wo);const h=Cr(ui(d),u,r);return CE(i(h),p=>{const{x:v,y:m}=yE(l,f,gc(-p)).toAffine();return!(!_c(m)||v!==d)})}catch{return!1}},lg=(n,e,t)=>cg(n,e,t,tg),ug=async(n,e,t)=>cg(n,e,t,ng),dg=Object.freeze({keygen:wE,getPublicKey:ig,sign:AE,verify:lg,signAsync:RE,verifyAsync:ug}),ac=8,PE=256,fg=Math.ceil(PE/ac)+1,Wu=2**(ac-1),IE=()=>{const n=[];let e=Is,t=e;for(let i=0;i<fg;i++){t=e,n.push(t);for(let s=1;s<Wu;s++)t=t.add(e),n.push(t);e=t.double()}return n};let Xh;const qh=(n,e)=>{const t=e.negate();return n?t:e},LE=n=>{const e=Xh||(Xh=IE());let t=ys,i=Is;const s=2**ac,r=s,o=Hu(s-1),a=Hu(ac);for(let c=0;c<fg;c++){let l=Number(n&o);n>>=a,l>Wu&&(l-=r,n+=1n);const u=c*Wu,d=u,f=u+Math.abs(l)-1,h=c%2!==0,p=l<0;l===0?i=i.add(qh(h,e[d])):t=t.add(qh(p,e[f]))}return n!==0n&&Ut("invalid wnaf"),{p:t,f:i}},{floor:Xu,min:DE,sin:NE}=Math,qn="Trystero",ko=(n,e)=>Array(n).fill(void 0).map(e),kE="0123456789AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz",Or=n=>ko(n,()=>kE[Xu(Math.random()*62)]??"").join(""),fn=Or(20),Ns=Promise.all.bind(Promise),hg=typeof window<"u",{entries:Es,fromEntries:pg,keys:En,values:vr}=Object,on=()=>{},mg="candidate",vt=n=>(n!==null&&clearTimeout(n),null),pt=n=>new Error(`${qn}: ${n}`),Pr=(n,e)=>n instanceof Error&&n.message?n.message:typeof n=="string"&&n?n:xn(n??e),Zi=(n,e)=>n instanceof Error?n:pt(Pr(n,e)),UE=new TextEncoder,OE=new TextDecoder,Qi=n=>UE.encode(n),Ms=n=>OE.decode(n),Uo=n=>n.reduce((e,t)=>e+t.toString(16).padStart(2,"0"),""),Oo=(...n)=>n.join("@"),FE=(n,e)=>{const t=[...n],i=()=>{const r=NE(e++)*1e4;return r-Xu(r)};let s=t.length;for(;s;){const r=Xu(i()*s--),o=t[s];t[s]=t[r],t[r]=o}return t},BE=(n,e,t,i=!1)=>n.relayConfig?.urls||(i?FE(e,gg(n.appId)):e).slice(0,n.relayConfig?.redundancy??t),xn=JSON.stringify,Fo=n=>{try{return JSON.parse(n)}catch{throw pt(`failed to parse JSON: ${n}`)}},gg=(n,e=Number.MAX_SAFE_INTEGER)=>n.split("").reduce((t,i)=>t+i.charCodeAt(0),0)%e,Yh=3333,zE=6e4,eo={};let vo=null,qu=null;const HE=()=>{vo||(vo=new Promise(n=>{qu=n}).finally(()=>{qu=null,vo=null}))},VE=()=>{qu?.()},GE=(n,e,t)=>{const i={};let s=!1,r=!1,o=on;i.ready=new Promise(c=>o=c);const a=()=>{r=!1;const c=new WebSocket(n);c.onclose=()=>{if(r)return;if(r=!0,vo){vo.then(a);return}const l=eo[n]??(eo[n]=Yh);setTimeout(a,Math.random()*l),eo[n]=DE(l*2,zE)},c.onmessage=l=>e(String(l.data)),i.socket=c,i.url=c.url,c.onopen=()=>{const l=s;s=!0,o(i),eo[n]=Yh,l&&t?.()},i.send=l=>{c.readyState===1&&c.send(l)}};return a(),i},WE=n=>{const e={},t=new WeakMap,i=o=>{const a=t.get(o);if(!a)throw pt("relay bookkeeping missing registration for relay client");return a},s=()=>{const o={},a=c=>o[c]??(o[c]={});return{forKey:a,forRelay:c=>a(i(c))}},r=(o,a)=>(e[o]=a,t.set(a,o),a);return{register:(o,a)=>{const c=e[o];return c||r(o,a())},keyOf:i,scoped:s,getSockets:()=>pg(Es(e).flatMap(([o,a])=>{const c=n(a);return c?[[o,c]]:[]}))}},XE=()=>{if(hg){const n=new AbortController;return addEventListener("online",VE,{signal:n.signal}),addEventListener("offline",HE,{signal:n.signal}),()=>n.abort()}return on},Ld="AES-GCM",fl={},qE=n=>btoa(String.fromCharCode.apply(null,Array.from(new Uint8Array(n)))),YE=n=>{const e=atob(n);return new Uint8Array(e.length).map((t,i)=>e.charCodeAt(i)).buffer},vc=async(n,e)=>new Uint8Array(await crypto.subtle.digest(n,Qi(e))),Bo=async n=>fl[n]??(fl[n]=Array.from(await vc("SHA-1",n)).map(e=>e.toString(36)).join("")),KE=async(n,e,t)=>crypto.subtle.importKey("raw",await crypto.subtle.digest({name:"SHA-256"},Qi(`${n}:${e}:${t}`)),{name:Ld},!1,["encrypt","decrypt"]),$E=async(n,e)=>Uo(await vc("SHA-256",`${qn}:${n}:${e}`)),_g="$",vg=",",ZE=async(n,e)=>{const t=crypto.getRandomValues(new Uint8Array(16));return t.join(vg)+_g+qE(await crypto.subtle.encrypt({name:Ld,iv:t},await n,Qi(e)))},JE=async(n,e)=>{const[t,i]=e.split(_g);return Ms(await crypto.subtle.decrypt({name:Ld,iv:new Uint8Array(t?.split(vg).map(Number)??[])},await n,YE(i??"")))},Dd=57333,jE=18e4,QE=20;var ew=class{constructor(n){Qt(this,"makeOffer");Qt(this,"pool",[]);Qt(this,"pooled",new Set);Qt(this,"leased",new Map);Qt(this,"recycling",new Set);Qt(this,"cleanupTimer",null);Qt(this,"active",!1);this.makeOffer=n}get isActive(){return this.active}warmup(){this.pool=[],this.pooled.clear(),ko(QE,this.makeOffer).forEach(n=>this.push(n)),this.active=!0,this.cleanupTimer=setInterval(()=>{this.pool=this.pool.filter(n=>n.isDead?(this.pooled.delete(n),!1):!0)},Dd)}push(n){n.isDead||this.pooled.has(n)||this.leased.has(n)||(this.pool.push(n),this.pooled.add(n))}shift(n){const e=[];for(;e.length<n&&this.pool.length>0;){const t=this.pool.shift();if(!t)break;this.pooled.delete(t),e.push(t)}return e}claimLeased(n){const e=this.leased.get(n);e&&(vt(e),this.leased.delete(n))}recycle(n){if(!(n.isDead||this.recycling.has(n))){if(n.connection.remoteDescription){n.destroy();return}if(!this.active){n.destroy();return}this.recycling.add(n),n.setHandlers({connect:on,close:on,error:on}),n.getOffer(!0).then(e=>{if(!e||e.type!=="offer"||n.isDead||!this.active){n.destroy();return}this.push(n)}).catch(()=>n.destroy()).finally(()=>this.recycling.delete(n))}}reclaimLeased(n){const e=this.leased.get(n);e&&(vt(e),this.leased.delete(n),this.recycle(n))}lease(n){this.claimLeased(n),this.leased.set(n,setTimeout(()=>{this.leased.delete(n),this.recycle(n)},jE))}checkout(n,e,t){const i=this.shift(n),s=Math.max(0,n-i.length);s>0&&i.push(...ko(s,this.makeOffer));const r=async(o,a=!1)=>{try{const c=await t(o);return e?(this.lease(o),{peer:o,offer:c,claim:()=>this.claimLeased(o),reclaim:()=>this.reclaimLeased(o)}):{peer:o,offer:c}}catch(c){if(this.claimLeased(o),this.pooled.delete(o),o.destroy(),!a)return r(this.makeOffer(),!0);throw c}};return Ns(i.map(o=>r(o)))}getOffers(n,e){return this.checkout(n,!0,e)}destroy(){this.active=!1,this.cleanupTimer&&(clearInterval(this.cleanupTimer),this.cleanupTimer=null),this.pool.forEach(n=>n.destroy()),this.pool=[],this.pooled.clear(),this.leased.forEach((n,e)=>{vt(n),e.destroy()}),this.leased.clear(),this.recycling.forEach(n=>n.destroy()),this.recycling.clear()}};const hl=pt("incorrect password for overlapping room"),tw=(n,e,t)=>{const i=o=>vc("SHA-256",`${o}:${n}:${e}:${t}`).then(Uo),s=async(o,a,c)=>{if(!n)return;if(c){const u=Or(36);await o({__trystero_pw:"challenge",c:u});const{data:d}=await a();if(!d||typeof d!="object"||d.__trystero_pw!=="response"||typeof d.h!="string")throw hl;const f=await i(u);if(d.h!==f)throw hl;return}const{data:l}=await a();if(!l||typeof l!="object"||l.__trystero_pw!=="challenge"||typeof l.c!="string")throw hl;await o({__trystero_pw:"response",h:await i(l.c)})};return{run:s,compose:o=>n||o?async(a,c,l,u)=>{await s(c,l,u),await o?.(a,c,l,u)}:void 0}},nw=n=>{const e=Pr(n,"unknown error");return e.startsWith("handshake ")?e:`handshake failed: ${e}`},iw=({onPeerHandshake:n,onHandshakeError:e,handshakeTimeoutMs:t,sendHandshakeData:i,sendHandshakeReady:s,onActivate:r,onFailure:o})=>{const a={},c=(d,f)=>{const h=a[d];!h||f&&h.peer!==f||h.isActive||!h.didLocalHandshakePass||!h.didReceiveRemoteReady||(h.isActive=!0,h.handshakeTimer=vt(h.handshakeTimer),r(d,h.peer))},l=(d,f,h)=>{const p=a[d];if(!p||p.peer!==f)return;const v=nw(h);e?.(d,v),o(d,f,pt(v))},u=(d,f)=>{const h=a[d];!h||h.peer!==f||h.isActive||(h.didLocalHandshakePass=!0,s("",d).catch(p=>l(d,f,pt(`failed sending handshake readiness: ${Pr(p,"unknown send failure")}`))),c(d,f))};return{addPeer:(d,f)=>{a[d]={peer:f,isActive:!1,didLocalHandshakePass:!1,didReceiveRemoteReady:!1,handshakeTimer:null,pendingHandshakePayloads:[],handshakeWaiters:[]}},clearPeer:(d,f)=>{const h=a[d];h&&(h.handshakeTimer=vt(h.handshakeTimer),h.pendingHandshakePayloads.length=0,h.handshakeWaiters.splice(0).forEach(p=>p.reject(f)),delete a[d])},canReceiveFromPeer:(d,f)=>{const h=a[d];return!!(h&&(h.isActive||f))},start:(d,f)=>{const h=a[d];if(!h||h.peer!==f)return;h.handshakeTimer=setTimeout(()=>l(d,f,pt(`handshake timed out after ${t}ms`)),t);const p=async(g,S)=>{await i(g,d,S)},v=()=>new Promise((g,S)=>{const T=a[d];if(!T||T.peer!==f){S(pt("peer disconnected during handshake"));return}const x=T.pendingHandshakePayloads.shift();if(x){g(x);return}T.handshakeWaiters.push({resolve:g,reject:M=>S(M)})}),m=fn<d;Promise.resolve(n?.(d,p,v,m)).then(()=>u(d,f)).catch(g=>l(d,f,Zi(g,"handshake failed")))},receiveHandshakeData:(d,f,h)=>{const p=a[f];if(!p||p.isActive)return;const v=h===void 0?{data:d}:{data:d,metadata:h},m=p.handshakeWaiters.shift();if(m){m.resolve(v);return}p.pendingHandshakePayloads.push(v)},receiveHandshakeReady:d=>{const f=a[d];!f||f.isActive||(f.didReceiveRemoteReady=!0,c(d))}}},sw=15e3,rw=5e3,Kh="icegatheringstatechange",ow="iceconnectionstatechange",to="offer",aw="answer",cw=/out of range/i,$h=n=>n.replace(/ (\S+\.local) (\d+) typ host/g," 127.0.0.1 $2 typ host");var Zh=(n,{trickleIce:e,rtcConfig:t,rtcPolyfill:i,turnConfig:s,_test_only_mdnsHostFallbackToLoopback:r})=>{const o=new(i??RTCPeerConnection)({iceServers:lw.concat(s??[]),...t}),a={},c=[],l=[],u=e!==!1,d=[],f=[];let h=!1,p=!1,v=null,m=null,g=!1;const S=()=>m=vt(m),T=()=>{g||(g=!0,S(),a.close?.())},x=U=>{a.signal?a.signal(U):c.push(U)},M=U=>{const $=a.signal;a.signal=ue=>{$?.(ue),U(ue)},c.length>0&&c.splice(0).forEach(ue=>a.signal?.(ue))},E=U=>r?$h(U):U,L=U=>{if(!r||typeof U.candidate!="string")return U;const $=$h(U.candidate);return $===U.candidate?U:{...U,candidate:$}},y=U=>({type:U.localDescription?.type??to,sdp:E(U.localDescription?.sdp??"")}),b=()=>{const U=o.remoteDescription?.sdp;return U?U.match(/a=ice-ufrag:([^\s]+)/)?.[1]??null:null},N=()=>(o.remoteDescription?.sdp?.match(/^m=/gm)??[]).length,P=U=>{if(!o.remoteDescription)return!1;const $=N();if(typeof U.sdpMLineIndex=="number"&&$>0&&U.sdpMLineIndex>=$)return!1;const ue=b();return!(ue&&U.usernameFragment&&U.usernameFragment!==ue)},D=async U=>{try{return await o.addIceCandidate(U),!0}catch($){if($ instanceof Error&&cw.test($.message)&&typeof U.sdpMLineIndex=="number")return!1;throw $}},Y=async()=>{if(!o.remoteDescription||d.length===0)return;const U=d.splice(0),$=[];for(const ue of U){if(!P(ue)){$.push(ue);continue}await D(ue)||$.push(ue)}$.length>0&&d.push(...$)},R=async U=>{if(P(U)){await D(U)||d.push(U);return}d.push(U)},A=U=>{U.binaryType="arraybuffer",U.bufferedAmountLowThreshold=65535,U.onmessage=$=>{const ue=$.data;a.data?a.data(ue):l.push(ue)},U.onopen=()=>a.connect?.(),U.onclose=T,U.onerror=({error:$})=>a.error?.(Zi($,"data channel error"))},k=async U=>{let $=null;try{await Promise.race([new Promise(ue=>{const we=()=>{U.iceGatheringState==="complete"&&(U.removeEventListener(Kh,we),ue())};U.addEventListener(Kh,we),we()}),new Promise(ue=>{$=setTimeout(ue,sw)})])}finally{vt($)}return y(U)},I=async()=>{const U=u?y(o):await k(o);return x(U),U};n?(v=o.createDataChannel("data"),A(v)):o.ondatachannel=({channel:U})=>{v=U,A(U)};const O=async(U=!1)=>{if(o.connectionState!=="closed")try{return h=!0,U&&(o.signalingState!=="stable"&&o.signalingState!=="closed"&&o.localDescription?.type===to&&await o.setLocalDescription({type:"rollback"}),typeof o.restartIce=="function"&&o.restartIce()),await o.setLocalDescription(U?await o.createOffer({iceRestart:!0}):void 0),await I()}catch($){a.error?.(Zi($,"failed to create local offer"))}finally{h=!1}};o.onnegotiationneeded=async()=>O(!1),o.onicecandidate=({candidate:U})=>{if(!u||!U)return;const $=L(typeof U.toJSON=="function"?U.toJSON():{candidate:U.candidate,sdpMid:U.sdpMid,sdpMLineIndex:U.sdpMLineIndex,usernameFragment:U.usernameFragment});x({type:mg,sdp:JSON.stringify($)})};const F=()=>{if(o.connectionState==="failed"||o.connectionState==="closed"||o.iceConnectionState==="failed"||o.iceConnectionState==="closed"){T();return}if(o.connectionState==="connected"||o.connectionState==="connecting"||o.iceConnectionState==="connected"||o.iceConnectionState==="completed"||o.iceConnectionState==="checking"){S();return}if(o.connectionState==="disconnected"||o.iceConnectionState==="disconnected"){m||(m=setTimeout(()=>{m=null,(o.connectionState==="disconnected"||o.iceConnectionState==="disconnected")&&T()},rw));return}};o.onconnectionstatechange=F,o.addEventListener(ow,F),o.ontrack=U=>{const $=U.streams[0];if($){if(!a.track&&!a.stream){f.push({track:U.track,stream:$});return}a.track?.(U.track,$),a.stream?.($)}},o.onremovestream=U=>a.stream?.(U.stream);const G=n?new Promise(U=>M($=>{$.type===to&&U($)})):Promise.resolve();return n&&queueMicrotask(()=>{!h&&o.signalingState==="stable"&&!o.localDescription&&o.connectionState!=="closed"&&o.onnegotiationneeded?.(new Event("negotiationneeded"))}),{created:Date.now(),connection:o,get channel(){return v},get isDead(){return o.connectionState==="closed"},getOffer:async(U=!1)=>{if(n)return U?O(!0):o.localDescription?.type===to?u?y(o):k(o):G},async signal(U){if(U.type==="candidate"){try{const $=JSON.parse(U.sdp);$&&typeof $=="object"&&await R(L($))}catch($){a.error?.(Zi($,"failed to parse remote candidate"))}return}if(!(v?.readyState==="open"&&!U.sdp?.includes("a=rtpmap")))try{const $={...U,sdp:E(U.sdp)};if(U.type===to){if(h||o.signalingState!=="stable"&&!p){if(n)return;await Ns([o.setLocalDescription({type:"rollback"}),o.setRemoteDescription($)])}else await o.setRemoteDescription($);return await Y(),await o.setLocalDescription(),await I()}if(U.type===aw){p=!0;try{await o.setRemoteDescription($),await Y()}finally{p=!1}}}catch($){a.error?.(Zi($,"failed to apply remote signal"))}},sendData:U=>v?.send(U),destroy:()=>{S(),v?.close(),o.close(),h=!1,p=!1,T()},setHandlers:U=>{const{signal:$,...ue}=U;Object.assign(a,ue),a.data&&l.length>0&&l.splice(0).forEach(we=>a.data?.(we)),$&&M($),(a.track||a.stream)&&f.length>0&&f.splice(0).forEach(({track:we,stream:Le})=>{a.track?.(we,Le),a.stream?.(Le)})},offerPromise:G,addStream:U=>U.getTracks().forEach($=>o.addTrack($,U)),removeStream:U=>o.getSenders().filter($=>$.track&&U.getTracks().includes($.track)).forEach($=>o.removeTrack($)),addTrack:(U,$)=>o.addTrack(U,$),removeTrack:U=>{const $=o.getSenders().find(ue=>ue.track===U);$&&o.removeTrack($)},replaceTrack:(U,$)=>{const ue=o.getSenders().find(we=>we.track===U);if(ue)return ue.replaceTrack($)}}};const lw=[...ko(3,(n,e)=>`stun:stun${e||""}.l.google.com:19302`),"stun:stun.cloudflare.com:3478"].map(n=>({urls:n})),uw=Object.getPrototypeOf(Uint8Array),pl=32,dw=0,ml=32,Jh=34,gl=35,Wa=36,ps=16*2**10-Wa,no=255,fw=65535,jh="bufferedamountlow",Qh="close",ep="error",hw=1e4,pw=n=>n instanceof ArrayBuffer?new Uint8Array(n):new Uint8Array(n.buffer,n.byteOffset,n.byteLength),mw=(n,e=hw)=>n.readyState!=="open"||n.bufferedAmount<=n.bufferedAmountLowThreshold?Promise.resolve(n.readyState==="open"):new Promise(t=>{let i=!1,s=null;const r=c=>{i||(i=!0,n.removeEventListener(jh,o),n.removeEventListener(Qh,a),n.removeEventListener(ep,a),vt(s),t(c))},o=()=>r(!0),a=()=>r(!1);if(n.addEventListener(jh,o),n.addEventListener(Qh,a),n.addEventListener(ep,a),s=setTimeout(()=>r(!1),e),n.readyState!=="open"){r(!1);return}n.bufferedAmount<=n.bufferedAmountLowThreshold&&r(!0)}),gw=({getPeer:n,getPeerIds:e,canReceiveFromPeer:t,throwIfAborted:i})=>{const s={},r={},o={},a={},c=(d,f,{includePending:h=!1}={})=>(d?Array.isArray(d)?d:[d]:e(h)).flatMap(p=>{const v=n(p,h);return v?[Promise.resolve(f(p,v))]:(console.warn(`${qn}: no peer with id ${p} found`),[])});return{makeInternalAction:(d,f={})=>{const h=r[d];if(s[d]&&h){const S=s[d].options;if(S.sendToPending!==!!f.sendToPending||S.receiveWhilePending!==!!f.receiveWhilePending)throw pt(`action type "${d}" cannot be redefined`);return h}if(!d)throw pt("action type argument is required");const p=Qi(d);if(p.byteLength>pl)throw pt(`action type string "${d}" (${p.byteLength}b) exceeds byte limit (${pl}). Hint: choose a shorter name.`);const v={sendToPending:!!f.sendToPending,receiveWhilePending:!!f.receiveWhilePending},m=new Uint8Array(pl);m.set(p);let g=0;return s[d]={onComplete:on,onProgress:on,setOnComplete:S=>{s[d].onComplete=S;const T=a[d];T?.length&&(delete a[d],T.forEach(({payload:x,peerId:M,metadata:E})=>S(x,M,E)))},setOnProgress:S=>{s[d].onProgress=S},send:async(S,T,x,M,E)=>{i(E);const L=typeof S;if(L==="undefined")throw pt("action data cannot be undefined");const y=L!=="string",b=S instanceof Blob,N=b||S instanceof ArrayBuffer||S instanceof uw,P=x!==void 0,D=N?pw(b?await S.arrayBuffer():S):Qi(y?xn(S):S),Y=P?Qi(xn(x)):null,R=Math.ceil(D.byteLength/ps)+(P?1:0)||1,A=ko(R,(k,I)=>{const O=I===R-1,F=!!(P&&I===0),G=new Uint8Array(Wa+(F?Y?.byteLength??0:O?D.byteLength-ps*(R-(P?2:1)):ps));return G.set(m),G.set([g>>8,g&no],ml),G.set([Number(O)|Number(F)<<1|Number(N)<<2|Number(y)<<3],Jh),G.set([Math.round((I+1)/R*no)],gl),G.set(P?F?Y??new Uint8Array:D.subarray((I-1)*ps,I*ps):D.subarray(I*ps,(I+1)*ps),Wa),G});return g=g+1&fw,await Ns(c(T,async(k,I)=>{const{channel:O}=I;let F=0;for(;F<R;){i(E);const G=A[F];if(!G)break;if(O&&O.bufferedAmount>O.bufferedAmountLowThreshold){const ue=await mw(O);if(i(E),!ue)break}const U=n(k,v.sendToPending);if(!U||U!==I)break;I.sendData(G),F++;const $=G[gl]??no;M?.($/no,k,x)}},{includePending:v.sendToPending})),[]},options:v},r[d]={send:s[d].send,onMessage:s[d].setOnComplete,onProgress:s[d].setOnProgress}},handleData:(d,f)=>{var P,D;const h=new Uint8Array(f),p=Ms(h.subarray(dw,ml)).replaceAll("\0",""),v=s[p];if(!t(d,!!v?.options.receiveWhilePending))return;const m=(h[ml]??0)<<8|(h[33]??0),g=h[Jh]??0,S=h[gl]??0,T=h.subarray(Wa),x=!!(g&1),M=!!(g&2),E=!!(g&4),L=!!(g&8);o[d]??(o[d]={}),(P=o[d])[p]??(P[p]={});const y=(D=o[d][p])[m]??(D[m]={chunks:[]});if(M?y.meta=Fo(Ms(T)):y.chunks.push(T),v?.onProgress(S/no,d,y.meta),!x)return;const b=new Uint8Array(y.chunks.reduce((Y,R)=>Y+R.byteLength,0));y.chunks.reduce((Y,R)=>(b.set(R,Y),Y+R.byteLength),0),delete o[d][p][m];const N=E?b:L?Fo(Ms(b)):Ms(b);if(v){v.onComplete(N,d,y.meta);return}(a[p]??(a[p]=[])).push({payload:N,peerId:d,...y.meta===void 0?{}:{metadata:y.meta}})},clearPeer:d=>{delete o[d]}}},_w=500,cr=(n,e)=>{const t=pt(e);return t.kind=n,t.name=n==="aborted"?"AbortError":t.name,t},_l=n=>{if(n?.aborted)throw cr("aborted","operation aborted")},tp=n=>n&&typeof n=="object"&&!Array.isArray(n)&&typeof n.r=="string"?{r:n.r,...Object.hasOwn(n,"m")?{m:n.m}:{}}:null,vw=n=>n&&typeof n=="object"&&!Array.isArray(n)&&typeof n.r=="string"?{r:n.r,...typeof n.e=="string"?{e:n.e}:{}}:null,Ra=(n,e)=>e===void 0?n:{...n,metadata:e},xw=({getPeer:n,getPeerIds:e,canReceiveFromPeer:t})=>{const i={},s={},r=gw({getPeer:n,getPeerIds:e,canReceiveFromPeer:t,throwIfAborted:_l}),o=r.makeInternalAction,a=r.handleData,c=h=>{const p=s[h];p&&(vt(p.timer),p.signal&&p.abortHandler&&p.signal.removeEventListener("abort",p.abortHandler),delete s[h])},l=(h,p)=>{Es(s).forEach(([v,m])=>{m.peerId===h&&(c(v),m.reject(p))})},u=(h,p)=>{r.clearPeer(h),l(h,cr("disconnected",Pr(p,"peer disconnected")))},d=o("@_response");return d.onMessage((h,p,v)=>{const m=vw(v);if(!m)return;const g=s[m.r];if(!(!g||g.peerId!==p)){if(c(m.r),m.e!==void 0){g.reject(cr("rejected",m.e));return}g.resolve(h)}}),{makeAction:(h,p)=>{if(p&&"onRequest"in p&&p.kind!=="request")throw pt('request actions must use kind: "request"');const v=p?.kind??"message",m=o(h),g=i[h];if(g){if(g.kind!==v)throw pt(`action type "${h}" cannot be redefined`);return g.action}const S={kind:v,action:null,pendingMessages:[],pendingRequests:[],onReceiveProgress:p?.onReceiveProgress??null},T=(R,A)=>R?(k,I)=>R(k,Ra({peerId:I},A)):void 0,x=R=>{S.onReceiveProgress=R},M=(R,A,k)=>{const I=S.kind==="request"?tp(k):null;S.onReceiveProgress?.(R,Ra({peerId:A},I?I.m:k))};if(m.onProgress(M),v==="message"){let R=p?.onMessage??null;const A=()=>{if(!R)return;const I=R;S.pendingMessages.splice(0).forEach(({payload:O,peerId:F,metadata:G})=>{Promise.resolve().then(()=>I(O,Ra({peerId:F},G))).catch(U=>console.error(`${qn} action handler error:`,U))})},k={send:async(I,O={})=>{await m.send(I,O.target,O.metadata,T(O.onProgress,O.metadata),O.signal)},get onMessage(){return R},set onMessage(I){R=I,A()},get onReceiveProgress(){return S.onReceiveProgress},set onReceiveProgress(I){x(I)}};return m.onMessage((I,O,F)=>{if(!R){S.pendingMessages.push(F===void 0?{payload:I,peerId:O}:{payload:I,peerId:O,metadata:F});return}const G=R;Promise.resolve().then(()=>G(I,Ra({peerId:O},F))).catch(U=>console.error(`${qn} action handler error:`,U))}),S.action=k,i[h]=S,A(),k}let E=p?.onRequest??null;const L=R=>{vt(R.timer);const A=S.pendingRequests.indexOf(R);A>-1&&S.pendingRequests.splice(A,1)},y=(R,A,k)=>{d.send(null,R,{r:A,e:Pr(k,"request failed")})},b=(R,A)=>{L(R),Promise.resolve().then(()=>A(R.payload,{peerId:R.peerId,...R.metadata===void 0?{}:{metadata:R.metadata},signal:R.controller.signal})).then(async k=>{if(k===void 0)throw pt("request handler returned undefined");await d.send(k,R.peerId,{r:R.requestId})}).catch(k=>y(R.peerId,R.requestId,k)).finally(()=>R.controller.abort())},N=()=>{E&&S.pendingRequests.slice().forEach(R=>b(R,E))},P=(R,A,k,I)=>{if(E){b({payload:R,peerId:A,...k===void 0?{}:{metadata:k},requestId:I,controller:new AbortController,timer:null},E);return}const O={payload:R,peerId:A,...k===void 0?{}:{metadata:k},requestId:I,controller:new AbortController,timer:setTimeout(()=>{L(O),O.controller.abort(),y(A,I,"request handler unavailable")},_w)};S.pendingRequests.push(O)},D=async(R,A)=>{const{target:k,metadata:I,onProgress:O,signal:F,timeoutMs:G}=A;if(_l(F),!n(k,!1))throw cr("disconnected",`no active peer with id ${k}`);const U=Or(20),$=new Promise((ue,we)=>{const Le={peerId:k,resolve:ue,reject:we,timer:null,...F===void 0?{}:{signal:F}},ne=()=>{c(U),we(cr("aborted","operation aborted"))};F&&(Le.abortHandler=ne,F.addEventListener("abort",ne,{once:!0})),s[U]=Le}).catch(ue=>{throw ue});try{await m.send(R,k,I===void 0?{r:U}:{r:U,m:I},T(O,I),F);const ue=s[U];return ue&&G!==void 0&&(ue.timer=setTimeout(()=>{c(U),ue.reject(cr("timeout","request timed out"))},G)),await $}catch(ue){throw c(U),ue}},Y={request:D,requestMany:async(R,A)=>(_l(A.signal),await Ns(A.targets.map(async k=>{try{const I={peerId:k,status:"fulfilled",value:await D(R,{target:k,...A.metadata===void 0?{}:{metadata:A.metadata},...A.timeoutMs===void 0?{}:{timeoutMs:A.timeoutMs},...A.onProgress===void 0?{}:{onProgress:A.onProgress},...A.signal===void 0?{}:{signal:A.signal}})};return A.onResult?.(I),I}catch(I){const O=Zi(I,"request failed");if(O.kind==="aborted"||!O.kind)throw O;const F=O.kind==="timeout"?{peerId:k,status:"timeout"}:O.kind==="disconnected"?{peerId:k,status:"disconnected"}:{peerId:k,status:"rejected",error:O};return A.onResult?.(F),F}}))),get onRequest(){return E},set onRequest(R){E=R,N()},get onReceiveProgress(){return S.onReceiveProgress},set onReceiveProgress(R){x(R)}};return m.onMessage((R,A,k)=>{const I=tp(k);I&&P(R,A,I.m,I.r)}),S.action=Y,i[h]=S,N(),Y},makeInternalAction:o,handleData:a,clearPeer:u}},np=n=>n&&typeof n=="object"&&!Array.isArray(n)&&typeof n.k=="string"?{key:n.k,...typeof n.s=="string"?{streamId:n.s}:{},...typeof n.t=="string"?{trackId:n.t}:{},...Object.hasOwn(n,"m")?{metadata:n.m}:{}}:null,ip=n=>e=>{let t=n.get(e);return t||(t=Or(20),n.set(e,t)),t},xg=()=>{const n=new WeakMap,e=new WeakMap,t=new Map,i=new Map,s=new Map,r=new Map;return{getStreamKey:ip(n),getTrackKey:ip(e),rememberRemoteStream:(o,a,c)=>{t.set(o,a),c&&i.set(c,a)},getRemoteStream:(o,a)=>t.get(o)??(a?i.get(a):void 0),rememberRemoteTrack:(o,a,c,l,u)=>{const d={track:a,stream:c};s.set(o,d),l&&r.set(l,d),u&&i.set(u,c)},getRemoteTrack:(o,a)=>s.get(o)??(a?r.get(a):void 0),clearRemote:()=>{t.clear(),i.clear(),s.clear(),r.clear()}}},yw=({iterate:n,isActive:e,getSharedMediaPeer:t})=>{const i={},s={},r=xg(),o={onPeerStream:null,onPeerTrack:null},a=(u,d,f,h)=>{e(u)&&(t(u)?.__trysteroMedia?.rememberRemoteStream(d,f,typeof f.id=="string"?f.id:void 0),o.onPeerStream?.(f,u,h))},c=(u,d,f,h,p)=>{e(u)&&(t(u)?.__trysteroMedia?.rememberRemoteTrack(d,f,h,typeof f.id=="string"?f.id:void 0,typeof h.id=="string"?h.id:void 0),o.onPeerTrack?.(f,h,u,p))},l=(u,d,f,h,p,v={})=>{const m={k:d,...v,...f===void 0?{}:{m:f}};return n(u,async(g,S)=>{await h(m,g),p(S)})};return{addStream:(u,d,f)=>l(d.target,r.getStreamKey(u),d.metadata,f,h=>h.addStream(u),{s:u.id}),removeStream:(u,d)=>{n(d,(f,h)=>h.removeStream(u))},addTrack:(u,d,f,h)=>l(f.target,r.getTrackKey(u),f.metadata,h,p=>p.addTrack(u,d),{s:d.id,t:u.id}),removeTrack:(u,d)=>{n(d,(f,h)=>h.removeTrack(u))},replaceTrack:(u,d,f,h)=>l(f.target,r.getTrackKey(d),f.metadata,h,p=>p.replaceTrack(u,d),{t:u.id}),receiveStreamMeta:(u,d)=>{if(!e(d))return;const f=np(u);if(!f)return;const h=t(d)?.__trysteroMedia?.getRemoteStream(f.key,f.streamId);if(h){a(d,f.key,h,f.metadata);return}(i[d]??(i[d]=[])).push(f)},receiveTrackMeta:(u,d)=>{if(!e(d))return;const f=np(u);if(!f)return;const h=t(d)?.__trysteroMedia?.getRemoteTrack(f.key,f.trackId);if(h){c(d,f.key,h.track,h.stream,f.metadata);return}(s[d]??(s[d]=[])).push(f)},receiveRemoteStream:(u,d)=>{if(!e(u))return;const f=i[u]?.shift();f&&a(u,f.key,d,f.metadata)},receiveRemoteTrack:(u,d,f)=>{if(!e(u))return;const h=s[u]?.shift();h&&c(u,h.key,d,f,h.metadata)},clearPeer:u=>{delete i[u],delete s[u]},get onPeerStream(){return o.onPeerStream},set onPeerStream(u){o.onPeerStream=u},get onPeerTrack(){return o.onPeerTrack},set onPeerTrack(u){o.onPeerTrack=u}}},sp="beforeunload",Sw=1e4,Hi=n=>"@_"+n,uo=new Set,rp=()=>uo.forEach(n=>n()),bw=n=>(uo.add(n),uo.size===1&&addEventListener(sp,rp),()=>{uo.delete(n),uo.size||removeEventListener(sp,rp)});var Mw=(n,e,t,{onPeerHandshake:i,onHandshakeError:s,handshakeTimeoutMs:r=Sw,isPassive:o=!1}={})=>{const a={},c={},l={},u={onPeerJoin:null,onPeerLeave:null};let d=on,f=null;const h=(R,A,{includePending:k=!1}={})=>(R?Array.isArray(R)?R:[R]:En(k?a:c)).flatMap(I=>{const O=k?a[I]:c[I];return O?[Promise.resolve(A(I,O))]:(console.warn(`${qn}: no peer with id ${I} found`),[])}),p=yw({iterate:(R,A)=>h(R,(k,I)=>A(k,I)),isActive:R=>!!c[R],getSharedMediaPeer:R=>a[R]??null}),v=xw({getPeer:(R,A)=>(A?a:c)[R],getPeerIds:R=>En(R?a:c),canReceiveFromPeer:(R,A)=>!!f?.canReceiveFromPeer(R,A)}),m=v.makeInternalAction,g=v.handleData,S=v.makeAction,T=(R,A=pt("peer disconnected"))=>{const k=Zi(A,"peer disconnected");f?.clearPeer(R,k),delete a[R],delete c[R],v.clearPeer(R,k),l[R]?.splice(0).forEach(I=>I.reject(k)),delete l[R],p.clearPeer(R)},x=(R,A,k)=>{const I=a[R];if(!I||A&&I!==A)return;const O=!!c[R];T(R,k),I.destroy(),O&&u.onPeerLeave?.(R),e(R)},M=async()=>{await P.send(""),await new Promise(R=>setTimeout(R,99)),Es(a).forEach(([R,A])=>{A.destroy(),T(R,pt("room left"))}),d(),t()},E=m(Hi("ping")),L=m(Hi("pong")),y=m(Hi("signal")),b=m(Hi("stream")),N=m(Hi("track")),P=m(Hi("leave"),{sendToPending:!0,receiveWhilePending:!0}),D=m(Hi("hsdata"),{sendToPending:!0,receiveWhilePending:!0}),Y=m(Hi("hsready"),{sendToPending:!0,receiveWhilePending:!0});return f=iw({...i===void 0?{}:{onPeerHandshake:i},...s===void 0?{}:{onHandshakeError:s},handshakeTimeoutMs:r,sendHandshakeData:D.send,sendHandshakeReady:Y.send,onActivate:(R,A)=>{c[R]=A,u.onPeerJoin?.(R)},onFailure:(R,A,k)=>x(R,A,k)}),E.onMessage((R,A)=>L.send("",A)),L.onMessage((R,A)=>{const k=l[A];k?.shift()?.resolve(),k&&!k.length&&delete l[A]}),y.onMessage((R,A)=>{c[A]&&a[A]?.signal(R)}),b.onMessage((R,A)=>p.receiveStreamMeta(R,A)),N.onMessage((R,A)=>p.receiveTrackMeta(R,A)),P.onMessage((R,A)=>x(A,void 0,pt("peer left room"))),D.onMessage((R,A,k)=>f?.receiveHandshakeData(R,A,k)),Y.onMessage((R,A)=>f?.receiveHandshakeReady(A)),n((R,A)=>{const k=a[A];if(k){if(k===R)return;k.destroy(),T(A,pt("peer replaced"))}a[A]=R,f?.addPeer(A,R),R.setHandlers({data:I=>g(A,I),stream:I=>p.receiveRemoteStream(A,I),track:(I,O)=>p.receiveRemoteTrack(A,I,O),signal:I=>{c[A]&&y.send(I,A)},close:()=>x(A,R,pt("peer disconnected")),error:I=>{console.error(`${qn} peer error:`,I),x(A,R,I)}}),f?.start(A,R)}),hg&&(d=bw(()=>M().catch(on))),{makeAction:S,leave:M,ping:async R=>{if(!c[R])throw pt(`no active peer with id ${R}`);const A=Date.now();return await new Promise((k,I)=>{const O=l[R]??(l[R]=[]),F=()=>{const U=l[R];if(!U)return;const $=U.indexOf(G);$>-1&&U.splice($,1),U.length||delete l[R]},G={resolve:()=>{F(),k()},reject:U=>{F(),I(U)}};O.push(G),E.send("",R).catch(U=>G.reject(Zi(U,"peer disconnected")))}),Date.now()-A},isPassive:()=>o,getPeers:()=>pg(Es(c).map(([R,A])=>[R,A.connection])),addStream:(R,A={})=>p.addStream(R,A,b.send),removeStream:(R,A={})=>{p.removeStream(R,A.target)},addTrack:(R,A,k={})=>p.addTrack(R,A,k,N.send),removeTrack:(R,A={})=>{p.removeTrack(R,A.target)},replaceTrack:(R,A,k={})=>p.replaceTrack(R,A,k,N.send),get onPeerJoin(){return u.onPeerJoin},set onPeerJoin(R){u.onPeerJoin=R,R&&En(c).forEach(A=>R(A))},get onPeerLeave(){return u.onPeerLeave},set onPeerLeave(R){u.onPeerLeave=R},get onPeerStream(){return p.onPeerStream},set onPeerStream(R){p.onPeerStream=R},get onPeerTrack(){return p.onPeerTrack},set onPeerTrack(R){p.onPeerTrack=R}}};const yg=1,Sg=2,op=(n,e)=>{const t=Qi(n),i=new Uint8Array(3+t.byteLength+e.byteLength);return i[0]=yg,i[1]=t.byteLength>>>8&255,i[2]=t.byteLength&255,i.set(t,3),i.set(e,3+t.byteLength),i},Tw=(n,e)=>{const t=Qi(n),i=new Uint8Array(4+t.byteLength);return i[0]=Sg,i[1]=Number(e),i[2]=t.byteLength>>>8&255,i[3]=t.byteLength&255,i.set(t,4),i},Ew=n=>{const e=new Uint8Array(n);if(e.byteLength<3)return null;if(e[0]===yg){const s=(e[1]??0)<<8|(e[2]??0),r=3+s;return s<=0||e.byteLength<r?null:{type:"room",roomToken:Ms(e.subarray(3,r)),payload:e.subarray(r).slice().buffer}}if(e[0]!==Sg||e.byteLength<4)return null;const t=(e[2]??0)<<8|(e[3]??0),i=4+t;return t<=0||e.byteLength<i?null:{type:"presence",roomToken:Ms(e.subarray(4,i)),isPresent:e[1]===1}},bg=n=>{const{connection:e,channel:t}=n;return n.isDead||e.connectionState==="closed"||e.connectionState==="failed"||e.iceConnectionState==="closed"||e.iceConnectionState==="failed"||t?.readyState==="closing"||t?.readyState==="closed"},ww=n=>{if(bg(n))return"stale";const{channel:e}=n;return!e||e.readyState!=="open"?"transient":"live"};var Aw=class{constructor(){Qt(this,"byApp",{});Qt(this,"roomPresenceHandlers",{})}getMap(n){var e;return(e=this.byApp)[n]??(e[n]={})}get(n,e){return this.byApp[n]?.[e]}isPeerStale(n){return bg(n)}getHealth(n){return this.isPeerStale(n)?"stale":"live"}setRoomPresenceHandler(n,e){return this.roomPresenceHandlers[n]=e,()=>{this.roomPresenceHandlers[n]===e&&delete this.roomPresenceHandlers[n]}}sendRoomPresence(n,e,t){n.isClosing||n.peer.isDead||n.peer.sendData(Tw(e,t))}clear(n,e,{destroyPeer:t}){const i=this.byApp[n],s=i?.[e];if(!s||s.isClosing)return;s.idleTimer=vt(s.idleTimer),s.isClosing=!0,t&&!s.peer.isDead&&s.peer.destroy();const r=vr(s.bindings);s.bindings={},s.bindingsByToken={},s.controlRoomId=null,delete i[e],r.forEach(o=>{o.handlers.close?.(),o.pendingData.length=0,o.pendingSendData.length=0,o.pendingTracks.length=0}),s.media.clearRemote(),s.pendingDataByToken.clear(),s.remoteRoomTokens.clear(),En(i).length===0&&delete this.byApp[n]}register(n,e,t,i){const s=this.getMap(n),r=s[e];if(r){if(r.idleTimer=vt(r.idleTimer),r.peer===t)return r;this.clear(n,e,{destroyPeer:!0})}const o={appId:n,peerId:e,peer:t,bindings:{},bindingsByToken:{},pendingDataByToken:new Map,remoteRoomTokens:new Set,idleTimer:null,controlRoomId:null,streamOwners:new Map,trackOwners:new Map,media:xg(),idleMs:i,isClosing:!1};return t.setHandlers({data:a=>this.dispatchData(o,a),signal:a=>this.dispatchSignal(o,a),close:()=>this.clear(n,e,{destroyPeer:!1}),error:a=>{console.error(`${qn} peer error:`,a),this.clear(n,e,{destroyPeer:!1})},track:(a,c)=>this.dispatchTrack(o,a,c)}),s[e]=o,o}bind(n,e,t,{onDetach:i}){const s=t.bindings[n];if(s)return t.idleTimer=vt(t.idleTimer),{proxy:s.proxy,isNew:!1};const r={roomId:n,roomToken:null,roomTokenPromise:e,handlers:{},pendingData:[],pendingSendData:[],pendingTracks:[],detach:on,proxy:{}},o=()=>{t.bindings[n]&&(this.pruneRoomOwnership(t,n),delete t.bindings[n],r.roomToken&&t.bindingsByToken[r.roomToken]===r&&delete t.bindingsByToken[r.roomToken],t.controlRoomId===n&&(t.controlRoomId=En(t.bindings)[0]??null),i(),this.scheduleIdleTimer(t))},a={created:t.peer.created,get connection(){return t.peer.connection},get channel(){return t.peer.channel},get isDead(){return t.peer.isDead},getOffer:c=>t.peer.getOffer(c),signal:c=>t.peer.signal(c),sendData:c=>{if(!r.roomToken){r.pendingSendData.push(c);return}t.peer.sendData(op(r.roomToken,c))},destroy:()=>o(),setHandlers:c=>{const{signal:l,...u}=c;Object.assign(r.handlers,u),l&&(r.handlers.signal=l),this.flushBindingQueues(r)},offerPromise:t.peer.offerPromise,addStream:c=>{const l=t.streamOwners.get(c)??new Set,u=l.size===0;l.add(n),t.streamOwners.set(c,l),u&&t.peer.addStream(c)},removeStream:c=>{const l=t.streamOwners.get(c);l&&(l.delete(n),l.size===0&&(t.streamOwners.delete(c),t.peer.removeStream(c)))},addTrack:(c,l)=>{const u=t.trackOwners.get(c)??{stream:l,rooms:new Set},d=u.rooms.size===0;return u.stream=l,u.rooms.add(n),t.trackOwners.set(c,u),d?t.peer.addTrack(c,l):t.peer.connection.getSenders().find(f=>f.track===c)??t.peer.addTrack(c,l)},removeTrack:c=>{const l=t.trackOwners.get(c);l&&(l.rooms.delete(n),l.rooms.size===0&&(t.trackOwners.delete(c),t.peer.removeTrack(c)))},replaceTrack:(c,l)=>{const u=t.trackOwners.get(c);if(u){t.trackOwners.delete(c);const d=t.trackOwners.get(l)??{stream:u.stream,rooms:new Set};u.rooms.forEach(f=>d.rooms.add(f)),t.trackOwners.set(l,d)}return t.peer.replaceTrack(c,l)},__trysteroMedia:t.media};return r.proxy=a,r.detach=o,t.bindings[n]=r,t.controlRoomId??(t.controlRoomId=n),t.idleTimer=vt(t.idleTimer),e.then(c=>{if(t.isClosing||t.bindings[n]!==r)return;r.roomToken=c,t.bindingsByToken[c]=r;const l=t.pendingDataByToken.get(c);l?.length&&(r.pendingData.push(...l),t.pendingDataByToken.delete(c)),r.pendingSendData.splice(0).forEach(u=>t.peer.sendData(op(c,u))),this.flushBindingQueues(r)}),{proxy:a,isNew:!0}}pruneRoomOwnership(n,e){n.streamOwners.forEach((t,i)=>{t.delete(e),t.size===0&&(n.streamOwners.delete(i),n.peer.removeStream(i))}),n.trackOwners.forEach((t,i)=>{t.rooms.delete(e),t.rooms.size===0&&(n.trackOwners.delete(i),n.peer.removeTrack(i))})}scheduleIdleTimer(n){n.isClosing||En(n.bindings).length>0||(n.idleTimer=vt(n.idleTimer),n.idleTimer=setTimeout(()=>{const e=this.byApp[n.appId]?.[n.peerId];!e||En(e.bindings).length>0||this.clear(n.appId,n.peerId,{destroyPeer:!0})},n.idleMs))}getSignalBinding(n){if(n.controlRoomId){const t=n.bindings[n.controlRoomId];if(t?.handlers.signal)return t}const e=vr(n.bindings).find(t=>!!t.handlers.signal);return e?(n.controlRoomId=e.roomId,e):null}flushBindingQueues(n){const{handlers:e}=n;e.data&&n.pendingData.length>0&&n.pendingData.splice(0).forEach(t=>e.data?.(t)),(e.track||e.stream)&&n.pendingTracks.length&&n.pendingTracks.splice(0).forEach(({track:t,stream:i})=>{e.track?.(t,i),e.stream?.(i)})}dispatchData(n,e){const t=Ew(e);if(!t)return;if(t.type==="presence"){t.isPresent?n.remoteRoomTokens.add(t.roomToken):n.remoteRoomTokens.delete(t.roomToken),this.roomPresenceHandlers[n.appId]?.(n.peerId,t.roomToken,t.isPresent);return}const i=n.bindingsByToken[t.roomToken];if(!i){const s=n.pendingDataByToken.get(t.roomToken)??[];s.push(t.payload),n.pendingDataByToken.set(t.roomToken,s);return}i.handlers.data?i.handlers.data(t.payload):i.pendingData.push(t.payload)}dispatchSignal(n,e){this.getSignalBinding(n)?.handlers.signal?.(e)}dispatchTrack(n,e,t){vr(n.bindings).forEach(i=>{if(i.handlers.track||i.handlers.stream){i.handlers.track?.(e,t),i.handlers.stream?.(t);return}i.pendingTracks.push({track:e,stream:t})})}};const Rw=23333,Cw=12,Pw=7533,Iw=23333,Yu="__legacy__",cc="offer-placeholder",Lw=["offer","answer","candidate"],Dw=n=>{if(typeof n=="string")try{const e=Fo(n);return e&&typeof e=="object"?e:null}catch{return null}return n&&typeof n=="object"?n:null},io=(n,e)=>typeof n[e]=="string"&&n[e]?n[e]:void 0,Nw=n=>Lw.some(e=>e in n&&(typeof n[e]!="string"||n[e]==="")),Mg=(n,e,t,i,s,r)=>{n.toCipher(e).then(o=>{n.isLeaving()||!r()||i(t,xn(s(o.sdp)))})},kw=()=>({status:"idle",offerPeer:null,offerId:null,offerSdp:null,offerInitPromise:null,offerAnswered:!1,offerRelays:[],offerSignalRelays:[],offerSignalBacklog:[],offerRelayTimers:[],offerExpiryTimer:null,connectedPeer:null,connectedPeerUnhealthySinceMs:null,answeringExpiryTimer:null,answeringPeer:null,answerSent:!1,connectionErrorReported:!1,pendingCandidates:{}}),Uw=n=>[...n.turnConfig??[],...n.rtcConfig?.iceServers??[]].some(({urls:e})=>(Array.isArray(e)?e:[e]).some(t=>/^turns?:/i.test(t))),Ow=(n,e)=>`could not connect to peer ${n} after exchanging SDP; ${Uw(e)?"check that your TURN server URLs and credentials are reachable by both peers":"configure TURN servers with turnConfig or rtcConfig.iceServers"}`,xc=(n,e,t)=>{n.isLeaving()||e.connectedPeer||e.connectionErrorReported||(e.connectionErrorReported=!0,n.onJoinError?.({error:Ow(t,n.config),appId:n.appId,peerId:t,roomId:n.roomId}))},zo=(n,e)=>n[e]??(n[e]=kw()),Cn=n=>{n.connectedPeer?n.status="connected":n.answeringPeer?n.status="answering":n.offerPeer||n.offerRelays.some(Boolean)?n.status="offering":n.status="idle"},Xa=(n,e)=>{n.answeringPeer===e&&(n.answeringExpiryTimer=vt(n.answeringExpiryTimer),n.answeringPeer=null,n.answerSent=!1,Cn(n))},Ku=(n,e,t)=>{n.connectedPeer&&(n.connectedPeer.isDead||n.connectedPeer.destroy(),n.connectedPeer=null,n.connectedPeerUnhealthySinceMs=null,Cn(n))},Nd=(n,e)=>{n.offerRelayTimers[e]=vt(n.offerRelayTimers[e]),n.offerRelays[e]&&(n.offerRelays[e]=void 0,Cn(n))},ap=(n,e)=>{n?.offerRelays[e]===cc&&Nd(n,e)},Fw=n=>{if(n.isDead||n.connection.connectionState==="closed")return!0;try{return!!n.connection.remoteDescription}catch{return!0}},Ho=(n,e)=>{const t=n.offerAnswered;n.offerExpiryTimer=vt(n.offerExpiryTimer),n.offerInitPromise=null,n.offerRelays.forEach((i,s)=>Nd(n,s)),n.offerRelays=[],n.offerSignalRelays=[],n.offerRelayTimers=[],n.offerSignalBacklog=[],n.offerPeer&&n.offerPeer!==n.connectedPeer&&(t||Fw(n.offerPeer)?n.offerPeer.isDead||n.offerPeer.destroy():e.recycle(n.offerPeer)),n.offerPeer=null,n.offerId=null,n.offerSdp=null,n.offerAnswered=!1,n.connectionErrorReported=!1,Cn(n)},Bw=(n,e,t,i)=>{vt(e.answeringExpiryTimer),e.answeringExpiryTimer=setTimeout(()=>{const s=n.peerStates[t];!s||s.connectedPeer||s.answeringPeer!==i||(s.answerSent&&xc(n,s,t),i.destroy(),Xa(s,i),n.checkDeactivate())},Iw)},zw=async(n,e,t)=>{const i=t?[t,Yu]:[Yu];for(const s of i){const r=n.pendingCandidates[s];if(r?.length){delete n.pendingCandidates[s];for(const o of r)await e.signal(o)}}},Tg=(n,e,t,i=Dd)=>{vt(e.offerExpiryTimer);const s=e.offerId;e.offerExpiryTimer=setTimeout(()=>{const r=n.peerStates[t];!r||r.connectedPeer||r.offerId!==s||(r.offerAnswered&&xc(n,r,t),Ho(r,n.offerPool),n.checkDeactivate())},i)},Hw=(n,e,t,i)=>e.offerPeer&&e.offerId&&e.offerSdp?Promise.resolve({peer:e.offerPeer,offer:e.offerSdp,offerId:e.offerId}):(e.offerInitPromise||(e.offerInitPromise=(async()=>{const s=(await n.offerPool.checkout(1,!1,n.encryptOffer))[0];if(!s)throw pt("failed to allocate offer peer");const{peer:r,offer:o}=s;e.offerPeer=r,e.offerId=Or(Cw),e.offerSdp=o,e.offerAnswered=!1,e.connectionErrorReported=!1,e.offerSignalBacklog=[],Cn(e);const a=()=>{e.offerPeer===r&&!e.connectedPeer&&(e.offerAnswered&&xc(n,e,t),Ho(e,n.offerPool)),n.disconnectPeer(r,t),n.checkDeactivate()};return r.setHandlers({connect:()=>n.connectPeer(r,t,i),signal:c=>{e.offerPeer===r&&(e.offerSignalBacklog.push(c),e.offerSignalRelays.forEach(l=>l?.(c)))},close:a,error:a}),Tg(n,e,t),{peer:r,offer:o,offerId:e.offerId}})().finally(()=>e.offerInitPromise=null)),e.offerInitPromise),Vw=async(n,e,t,i,s)=>{if(i){n.attachSharedPeerToRoom(t,i);return}const r=n.peerStates[t];if(!r||r.connectedPeer||r.answeringPeer||r.offerAnswered){ap(r,e);return}if(r.offerRelays[e]!==cc)return;const[o,a]=await Ns([Bo(Oo(n.rootTopicPlaintext,t)),Hw(n,r,t,e)]);if(n.isLeaving())return;if(r.connectedPeer||r.answeringPeer||r.offerAnswered||r.offerRelays[e]!==cc){ap(r,e);return}r.offerRelayTimers[e]=vt(r.offerRelayTimers[e]),r.offerRelays[e]=!0,Cn(r),r.offerRelayTimers[e]=setTimeout(()=>qw(n,t,e),(n.announceIntervals[e]??n.announceIntervalMs)*.9);let c=!1;r.offerSignalRelays[e]=l=>{c&&(n.isLeaving()||r.connectedPeer||r.offerPeer!==a.peer||r.offerId!==a.offerId||l.type!=="candidate"||Mg(n,l,o,s,u=>({peerId:fn,offerId:a.offerId,candidate:u,...n.isPassive?{passive:!0}:{}}),()=>!r.connectedPeer&&r.offerPeer===a.peer&&r.offerId===a.offerId))},s(o,xn({peerId:fn,offerId:a.offerId,offer:a.offer,...n.isPassive?{passive:!0}:{}})),c=!0,r.offerSignalBacklog.forEach(l=>r.offerSignalRelays[e]?.(l))},Gw=async(n,e,t,i,s,r,o)=>{const a=zo(n.peerStates,t);if(a.answeringPeer||a.offerAnswered)return;const c=!!(a.offerPeer||a.offerRelays.some(Boolean));if((c||r)&&fn<t)return;c&&Ho(a,n.offerPool);const l=n.initPeer(!1,n.config);a.answeringPeer=l,a.answerSent=!1,a.connectionErrorReported=!1,Bw(n,a,t,l),Cn(a);const u=()=>{a.answeringPeer===l&&!a.connectedPeer&&a.answerSent&&xc(n,a,t),Xa(a,l),n.disconnectPeer(l,t),n.checkDeactivate()};l.setHandlers({connect:()=>n.connectPeer(l,t,e),close:u,error:u});let d;try{d=await n.toPlain({type:"offer",sdp:i})}catch{Xa(a,l),n.onJoinError?.({error:"incorrect room password when decrypting offer",appId:n.appId,peerId:t,roomId:n.roomId});return}if(l.isDead){Xa(a,l);return}const f=await Bo(Oo(n.rootTopicPlaintext,t));n.isLeaving()||(l.setHandlers({signal:h=>{n.isLeaving()||a.answeringPeer!==l||l.isDead||h.type!=="answer"&&h.type!=="candidate"||Mg(n,h,f,o,p=>{const v={peerId:fn};return h.type==="answer"?(a.answerSent=!0,v.answer=p):v.candidate=p,s&&(v.offerId=s),n.isPassive&&(v.passive=!0),v},()=>a.answeringPeer===l&&!l.isDead)}}),await l.signal(d),await zw(a,l,s))},Ww=async(n,e,t,i,s)=>{var d;let r;try{r=await n.toPlain({type:mg,sdp:t})}catch{return}const o=zo(n.peerStates,e),a=i&&o?.offerPeer&&o.offerId===i?o.offerPeer:null,c=o?.answeringPeer??null,l=!i&&o?.offerPeer?o.offerPeer:null,u=s&&!s.isDead?s:a??c??l;if(!u||u.isDead){const f=i??Yu;((d=o.pendingCandidates)[f]??(d[f]=[])).push(r);return}u.signal(r)},Xw=async(n,e,t,i,s,r)=>{let o;try{o=await n.toPlain({type:"answer",sdp:i})}catch{n.onJoinError?.({error:"incorrect room password when decrypting answer",appId:n.appId,peerId:t,roomId:n.roomId});return}if(r)n.offerPool.claimLeased(r),r.setHandlers({connect:()=>n.connectPeer(r,t,e),close:()=>n.disconnectPeer(r,t)}),r.signal(o);else{const a=n.peerStates[t];if(!a||!a.offerPeer||a.offerAnswered||s&&a.offerId&&s!==a.offerId||a.offerPeer.isDead)return;a.offerAnswered=!0,Tg(n,a,t,Rw),a.offerPeer.signal(o)}},qw=(n,e,t)=>{const i=n.peerStates[e];!i||i.connectedPeer||i.offerRelays[t]&&(Nd(i,t),n.checkDeactivate())},Yw=n=>e=>async(t,i,s)=>{if(n.isLeaving())return;const r=Dw(i);if(!r||Nw(r))return;const o=io(r,"peerId")??"",a=io(r,"offer"),c=io(r,"answer"),l=io(r,"candidate"),u=io(r,"offerId"),d=r.peer,f=r.hasOutgoingOffer===!0,h=r.passive===!0;if(!o||o===fn)return;const[p,v]=await Ns([n.rootTopicP,n.selfTopicP]);if(n.isLeaving()||t!==p&&t!==v||n.isPassive&&h||(n.isPassive&&!n.isActive&&!c&&!l&&(n.isActive=!0,n.requeueAnnounce?.()),n.isPassive&&!n.isActive))return;const m=n.peerStates[o],g=m?.connectedPeer;if(g&&m){const x=ww(g);if(x==="live"){m.connectedPeerUnhealthySinceMs=null;return}if(x==="stale")Ku(m);else{const M=Date.now(),E=m.connectedPeerUnhealthySinceMs??M;if(m.connectedPeerUnhealthySinceMs=E,M-E<Pw)return;Ku(m)}}let S=n.sharedPeers.get(n.appId,o);S&&n.sharedPeers.getHealth(S.peer)==="stale"&&(n.sharedPeers.clear(n.appId,o,{destroyPeer:!0}),S=void 0);const T=!!(o&&!a&&!c&&!l);if(T&&!S){const x=zo(n.peerStates,o),M=fn<o;if(x.answeringPeer||x.connectedPeer||x.offerAnswered)return;if(!M&&!x.offerPeer){const E=await Bo(Oo(n.rootTopicPlaintext,o));!n.isLeaving()&&!x.connectedPeer&&s(E,xn({peerId:fn}));return}if(x.offerRelays[e])return;x.offerRelays[e]=cc,Cn(x)}if(S&&(a||c||l)){if(S.bindings[n.roomId])return;n.attachSharedPeerToRoom(o,S);return}if(T)return Vw(n,e,o,S,s);if(a)return Gw(n,e,o,a,u,f,s);if(l)return Ww(n,o,l,u,d);if(c)return Xw(n,e,o,c,u,d)},vl=5333,Kw=[233,533,1333],$w=7533,Zw=123333;var Jw=({init:n,subscribe:e,announce:t,deactivate:i})=>{const s={},r={},o={},a={},c=new Aw,l=()=>vr(s).some(M=>En(M).length>0),u=M=>r[M]??(r[M]={}),d=M=>o[M]??(o[M]={}),f=(M,E,L)=>{c.getHealth(M.peer)==="live"&&c.sendRoomPresence(M,E,L)},h=(M,E)=>{Es(r[M]??{}).forEach(([L,y])=>{if(!y.shouldAdvertise())return;const{roomToken:b,roomTokenPromise:N}=y;if(b){f(E,b,!0);return}N.then(P=>{r[M]?.[L]===y&&y.roomToken===P&&(c.get(M,E.peerId)!==E||E.isClosing||y.shouldAdvertise()&&f(E,P,!0))})})},p=(M,E,L)=>vr(c.getMap(M)).forEach(y=>f(y,E,L)),v=M=>{a[M]||(a[M]=c.setRoomPresenceHandler(M,(E,L,y)=>{if(!y)return;const b=c.get(M,E),N=o[M]?.[L];!b||!N||r[M]?.[N]?.attachSharedPeerToRoom(E,b)}))},m=M=>{s[M]&&En(s[M]).length>0||(a[M]?.(),delete a[M],delete r[M],delete o[M])};let g=!1,S=[],T=null,x=on;return(M,E,L)=>{if(!M)throw pt("requires a config map as the first argument");if(L&&typeof L!="object")throw pt("third argument must be a callbacks object");const{appId:y}=M,b=L?.onJoinError,N=L?.onPeerHandshake,P=L?.handshakeTimeoutMs;if(!y)throw pt("config map is missing appId field");if(!E)throw pt("roomId argument required");if(P!==void 0&&(!Number.isFinite(P)||P<=0))throw pt("handshakeTimeoutMs must be a positive number");if(s[y]?.[E])return s[y][E];v(y);const D=Oo(qn,y,E),Y=Bo(D),R=Bo(Oo(D,fn)),A=KE(M.password??"",y,E),k=$E(y,E),I=M._test_only_sharedPeerIdleMs??Zw;let O=!1;const F=_=>async V=>({type:V.type,sdp:await _(A,V.sdp)}),G=F(JE),U=F(ZE),$=c.getMap(y),ue=()=>Zh(!0,M);T||(T=new ew(ue));const we=T,Le=async _=>{const V=await _.getOffer(Date.now()-_.created>Dd);if(!V||V.type!=="offer")throw pt("failed to get offer for peer");return(await U(V)).sdp},ne=(_,V)=>{const K=zo(Xe.peerStates,_);K.answeringExpiryTimer=vt(K.answeringExpiryTimer),K.answeringPeer=null;const{proxy:j,isNew:oe}=c.bind(E,k,V,{onDetach:()=>{const he=Xe.peerStates[_];he?.connectedPeer===V.peer&&(he.connectedPeer=null,he.connectedPeerUnhealthySinceMs=null,Cn(he))}});K.connectedPeer=V.peer,K.connectedPeerUnhealthySinceMs=null,Cn(K),oe&&re(j,_),Ho(K,we)},le=(_,V,K)=>{if(O){_.destroy();return}const j=zo(Xe.peerStates,V);if(j.connectedPeer){const ie=$[V];if(ie&&j.connectedPeer===ie.peer&&ie.bindings[E])return;j.connectedPeer!==_&&!_.isDead&&_.destroy();return}let oe=$[V];if(oe&&c.getHealth(oe.peer)==="stale"&&(c.clear(y,V,{destroyPeer:!0}),oe=void 0),oe&&oe.peer!==_){_.isDead||_.destroy(),ne(V,oe);return}const he=!oe;oe||(oe=c.register(y,V,_,I)),ne(V,oe),he&&h(y,oe)},fe=(_,V)=>{if(O)return;const K=Xe.peerStates[V];K?.connectedPeer===_&&(Ku(K),je())},Ae=!!M.passive;let Fe=null,De,mt=on;const je=()=>{if(!Ae||!Xe.isActive)return;let _=!1;Es(Xe.peerStates).forEach(([V,K])=>{K.connectedPeer||K.answeringPeer||K.offerInitPromise||K.offerPeer||K.offerRelays.some(Boolean)?_=!0:K.status==="idle"&&delete Xe.peerStates[V]}),_||(Xe.isActive=!1,De=vt(De),z.forEach(vt),z.length=0,mt(),Fe?.roomToken&&p(y,Fe.roomToken,!1))},Xe={appId:y,roomId:E,config:M,peerStates:{},rootTopicPlaintext:D,rootTopicP:Y,selfTopicP:R,toPlain:G,toCipher:U,isLeaving:()=>O,isPassive:Ae,isActive:!Ae,onJoinError:b,sharedPeers:c,offerPool:we,encryptOffer:Le,initPeer:Zh,connectPeer:le,disconnectPeer:fe,attachSharedPeerToRoom:ne,checkDeactivate:je,announceIntervals:[],announceIntervalMs:vl},Se={config:M,appId:y,roomId:E,isPassive:Ae},Ce=Yw(Xe);if(!g){const _=n(M);S=(Array.isArray(_)?_:[_]).map(V=>Promise.resolve(V)),g=!0,x=M.relayConfig?.manualReconnection?on:XE()}!Ae&&!we.isActive&&we.warmup(),Xe.announceIntervals=S.map(()=>vl);const q=S.map(()=>0),W=S.map(()=>0),z=[],H=S.map(async(_,V)=>e(await _,await Y,await R,Ce(V),K=>we.getOffers(K,Le),Se));Ns([Y,R]).then(([_,V])=>{if(O)return;const K=async(j,oe)=>{if(O||Ae&&!Xe.isActive)return;const he=Ae?{passive:!0}:void 0;let ie;try{ie=await t(j,_,V,he,Se),W[oe]=0}catch(xe){const ge=W[oe]??0;ge===0&&console.warn(`${qn}: announce failed - ${Pr(xe,"")}`),W[oe]=ge+1}if(O||Ae&&!Xe.isActive)return;typeof ie=="number"&&(Xe.announceIntervals[oe]=ie);const ae=q[oe]??0;q[oe]=ae+1;const me=Xe.announceIntervals[oe]??vl,ke=Kw[ae];z[oe]=setTimeout(()=>{K(j,oe)},typeof ke=="number"?Math.min(me,ke):me)};mt=()=>{i&&S.forEach(async j=>{const oe=await j;O||i(oe,_,V,Se)})},Xe.requeueAnnounce=()=>{z.forEach(vt),z.length=0,De=vt(De),we.isActive||we.warmup(),Fe?.roomToken&&p(y,Fe.roomToken,!0),De=setTimeout(je,$w),S.forEach(async(j,oe)=>{const he=await j;he&&!O&&(q[oe]=0,K(he,oe))})},H.forEach(async(j,oe)=>{if(await j,O)return;const he=await S[oe];he&&!O&&(!Ae||Xe.isActive)&&K(he,oe)})});let re=on;const{compose:se}=tw(M.password??"",y,E),B=se(N),pe={...B?{onPeerHandshake:B}:{},...P===void 0?{}:{handshakeTimeoutMs:P},isPassive:Ae,onHandshakeError:(_,V)=>b?.({error:V.replace(/^handshake failed: /,""),appId:y,peerId:_,roomId:E})};s[y]??(s[y]={});const _e=u(y),C=Mw(_=>re=_,_=>{if(O)return;const V=Xe.peerStates[_];V?.connectedPeer&&(V.connectedPeer=null,Cn(V),je())},()=>{O=!0,re=on;const _=r[y]?.[E];_?.roomToken&&(p(y,_.roomToken,!1),delete o[y]?.[_.roomToken],o[y]&&!En(o[y]).length&&delete o[y]),r[y]&&(delete r[y][E],En(r[y]).length||delete r[y]),Es(Xe.peerStates).forEach(([V,K])=>{if(K.answeringExpiryTimer=vt(K.answeringExpiryTimer),K.connectedPeer&&!K.connectedPeer.isDead){const j=$[V];(!j||j.peer!==K.connectedPeer)&&K.connectedPeer.destroy()}K.answeringPeer&&!K.answeringPeer.isDead&&K.answeringPeer.destroy(),Ho(K,we),K.connectedPeer=null,K.answeringPeer=null,Cn(K)}),s[y]&&(delete s[y][E],En(s[y]).length===0&&delete s[y]),z.forEach(vt),De=vt(De),H.forEach(async V=>{(await V)()}),!l()&&(g=!1,we.destroy(),T=null,x(),m(y))},pe);return Fe={roomToken:null,roomTokenPromise:k,attachSharedPeerToRoom:ne,shouldAdvertise:()=>!Ae||Xe.isActive},_e[E]=Fe,k.then(_=>{const V=Fe;!V||O||r[y]?.[E]!==V||(V.roomToken=_,d(y)[_]=E,vr($).forEach(K=>{K.remoteRoomTokens.has(_)&&ne(K.peerId,K)}),(!Ae||Xe.isActive)&&p(y,_,!0))}),s[y][E]=C}};const jw=["offer","answer","candidate"],Qw=n=>{if(typeof n=="string")try{const e=Fo(n);return e&&typeof e=="object"?e:null}catch{return null}return n},xl=(n,e)=>typeof n[e]=="string"&&n[e]?n[e]:void 0,eA=n=>jw.some(e=>e in n&&(typeof n[e]!="string"||n[e]==="")),tA=n=>{const e=Qw(n);if(!e||eA(e))return!1;const t=xl(e,"peerId");return!!(t&&t!==fn&&e.passive!==!0&&!xl(e,"answer")&&!xl(e,"candidate"))},yl=n=>{if(!n)throw pt("topic strategy missing room context");return n},cp=(n,e,t,i)=>({kind:e,appId:n.appId,roomId:n.roomId,rootTopic:t,selfTopic:i}),Sl=(n,e,t,i)=>({kind:e,appId:n.appId,roomId:n.roomId,rootTopic:t,selfTopic:i});var nA=({init:n,subscribeTopic:e,publishTopic:t,unpublishTopic:i})=>Jw({init:n,subscribe:async(s,r,o,a,c,l)=>{const u=yl(l),d=(T,x)=>t(s,T,x,Sl(u,"signal",r,o));let f=null,h=!1,p=null,v=!1;const m=T=>{h||(h=!0,T())},g=()=>(p||(p=Promise.resolve(e(s,o,(T,x)=>{v||a(T,x,d)},cp(u,"self",r,o))).then(T=>{f=T,v&&m(T)})),p);u.isPassive||await g();const S=await e(s,r,async(T,x)=>{v||(u.isPassive&&tA(x)&&await g(),v||await a(T,x,d))},cp(u,"root",r,o));return()=>{v=!0,f&&m(f),S()}},announce:(s,r,o,a,c)=>{const l=yl(c);return t(s,r,xn({peerId:fn,...a}),Sl(l,"announce",r,o))},...i?{deactivate:(s,r,o,a)=>i(s,r,Sl(yl(a),"announce",r,o))}:{}});const iA=WE(n=>n.socket),sA=5,Eg="x",wg="EVENT",{secretKey:rA,publicKey:oA}=dg.keygen(),aA=Uo(oA),cA={},lA={},bl={},lp=250,Ag=()=>Math.floor(Date.now()/1e3),Rg=n=>bl[n]??(bl[n]=gg(n,1e4)+2e4),uA=async(n,e)=>{const t={kind:Rg(n),tags:[[Eg,n]],created_at:Ag(),content:e,pubkey:aA},i=await vc("SHA-256",xn([0,t.pubkey,t.created_at,t.kind,t.tags,t.content]));return xn([wg,{...t,id:Uo(i),sig:Uo(await dg.signAsync(i,rA))}])},es={},dA=(n,e,t)=>{var s;const i=es[s=n.url]??(es[s]={subIds:[],topics:new Map,updateTimer:null});i.topics.set(e,t),Cg(n,i)},fA=(n,e)=>{const t=es[n.url];t&&(t.topics.delete(e),t.topics.size===0?(t.updateTimer!==null&&(clearTimeout(t.updateTimer),t.updateTimer=null),t.subIds.forEach(i=>n.send(xn(["CLOSE",i]))),delete es[n.url]):Cg(n,t))},Cg=(n,e)=>{e.updateTimer===null&&(e.updateTimer=setTimeout(()=>{e.updateTimer=null,Pg(n)},0))},Pg=n=>{const e=es[n.url];if(!e||e.topics.size===0)return;const t=[...e.topics.keys()],i=[],s=Ag();for(let r=0;r<t.length;r+=lp)i.push(t.slice(r,r+lp));for(;e.subIds.length>i.length;){const r=e.subIds.pop();r&&n.send(xn(["CLOSE",r]))}i.forEach((r,o)=>{var c;const a=(c=e.subIds)[o]??(c[o]=Or(64));n.send(xn(["REQ",a,{kinds:[...new Set(r.map(Rg))],since:s,"#x":r}]))})},hA=n=>{const e=es[n.url];e&&e.topics.size>0&&Pg(n)},pA=nA({init:n=>BE(n,mA,sA,!0).map(e=>{const t=iA.register(e,()=>GE(e,i=>{const[s,r,o,a]=Fo(i);if(s!==wg){const c=`${qn}: relay failure from ${t.url} - `;s==="NOTICE"?console.warn(c+r):s==="OK"&&!o&&console.warn(c+a);return}if(o&&typeof o=="object"&&"content"in o){const{content:c}=o,l=lA[r];if(l){l(cA[r]??"",c);return}const u=es[t.url];if(u?.subIds.includes(r)&&o.tags){const d=o.tags.find(f=>f[0]===Eg);d?.[1]&&u.topics.get(d[1])?.(d[1],c)}}},()=>hA(t)));return t.ready}),subscribeTopic:(n,e,t)=>(dA(n,e,(s,r)=>void t(s,r)),()=>{fA(n,e)}),publishTopic:async(n,e,t)=>n.send(await uA(e,typeof t=="string"?t:xn(t)))}),mA=["basspistol.org","bucket.coracle.social","chorus.almostmachines.dev","chorus.pjv.me","communities.nos.social","ftp.halifax.rwth-aachen.de/nostr","hol.is","hornetstorage.net/relay","koru.bitcointxoko.org","nos.lol","nostr-01.uid.ovh","nostr-01.yakihonne.com","nostr-relay.corb.net","nostr.data.haus","nostr.islandarea.net","nostr.sathoarder.com","nostr.self-determined.de","nostr.tegila.com.br","nostr.vulpem.com","purplerelay.com","relay-can.zombi.cloudrodion.com","relay-rpi.edufeed.org","relay.agorist.space","relay.angor.io","relay.artio.inf.unibe.ch","relay.binaryrobot.com","relay.damus.io","relay.froth.zone","relay.libernet.app","relay.mostr.pub","relay.mostro.network","relay.nostr.place","relay.nostrdice.com","relay.notoshi.win","relay.sigit.io","relay02.lnfi.network","relay2.angor.io","schnorr.me","slick.mjex.me","social.amanah.eblessing.co","staging.yabu.me","strfry.openhoofd.nl","strfry.shock.network","testnet-relay.samt.st","top.testrelay.top","x.kojira.io","yabu.me/v2"].map(n=>"wss://"+n),gA=1e3/ss,kd=6,_A=10,vA=24,up=kd,xA=3,yA=1200,SA=500,bA="kai-el-slime-coop-v1",MA=120;function TA(n){return Math.max(kd,Math.min(vA,n))}function EA(n,e){const t=pA({appId:bA},n),i=t.makeAction("start"),s=t.makeAction("in"),r=t.makeAction("hash"),o=t.makeAction("restart"),a=t.makeAction("ping"),c=t.makeAction("pong"),l=t.makeAction("bump");let u=null,d=null,f=null;t.onPeerJoin=()=>u?.(),t.onPeerLeave=D=>{h.add(D),x.delete(D),u?.()},i.onMessage=D=>d?.(D),o.onMessage=D=>f?.(D.seed);const h=new Set;let p=[],v=[],m=-1,g=0;const S=new Map;let T=new Map;const x=new Map;let M=_A,E=0,L=0,y=0;a.onMessage=(D,Y)=>{c.send({ts:D.ts},{target:Y.peerId})},c.onMessage=(D,Y)=>{const R=performance.now()-D.ts,A=x.get(Y.peerId);x.set(Y.peerId,A==null?R:A*.7+R*.3)},l.onMessage=()=>b();function b(){const D=performance.now();D-E<400||(E=D,M=TA(M+xA),y=0)}const N=window.setInterval(()=>{for(const D of Object.keys(t.getPeers()))a.send({ts:performance.now()},{target:D})},SA);return s.onMessage=(D,Y)=>{const R=D,A=p.indexOf(Y.peerId);A>=0&&v[A]?.set(R.t,R.i)},r.onMessage=(D,Y)=>{const R=D;let A=S.get(R.t);A||(A=new Map,S.set(R.t,A)),A.set(Y.peerId,R.h)},{code:n,isHost:e,selfId:fn,peerCount:()=>Object.keys(t.getPeers()).length,onPeersChanged(D){u=D},start(D,Y,R){const A=Object.keys(t.getPeers()),k={seed:D,usableSlots:Y,unlockedItems:R,order:[fn,...A]};i.send(k),d?.(k)},onStart(D){d=D},restart(D){o.send({seed:D}),f?.(D)},onRestart(D){f=D},driver(D){p=D,g=p.indexOf(fn),v=p.map(()=>new Map),m=-1,S.clear(),T=new Map;const Y={localIndex:g,playerCount:p.length,desynced:!1,waiting:!1,stats(){let R=0;for(const A of x.values())R=Math.max(R,A);return{pingMs:Math.round(R),bufferMs:Math.round(M*gA)}},tick(R,A){const k=A+M;if(k>m){for(let O=Math.max(m+1,up);O<=k;O++)v[g].set(O,R),s.send({t:O,i:R});m=k}if(A<up)return Y.waiting=!1,p.map(()=>Lo());const I=[];for(let O=0;O<p.length;O++){if(O!==g&&h.has(p[O])){I[O]=v[O].get(A)??Lo();continue}const F=v[O].get(A);if(!F){Y.waiting=!0,y=0;const G=performance.now();return G-L>250&&(L=G,l.send({},{target:p[O]})),null}I[O]=F}if(Y.waiting=!1,++y>=yA&&M>kd&&(M--,y=0),A%120===0){for(const O of v)for(const F of O.keys())F<A-120&&O.delete(F);for(const O of S.keys())O<A-600&&S.delete(O);for(const O of T.keys())O<A-600&&T.delete(O)}return I},afterTick(R,A){if(R%MA!==0)return;const k=A();T.set(R,k),r.send({t:R,h:k});for(const[I,O]of T){const F=S.get(I);if(F)for(const[,G]of F)G!==O&&!Y.desynced&&(Y.desynced=!0,window.dispatchEvent(new CustomEvent("kai-desync",{detail:{tick:I}})))}}};return Y},leave(){window.clearInterval(N),t.leave()}}}function wA(){const n="ABCDEFGHJKMNPQRSTUVWXYZ23456789";let e="";for(let t=0;t<4;t++)e+=n[Math.floor(Math.random()*n.length)];return e}let Ig=0;function dp(n){Ig=n}function lt(n){return n.players[Ig]??n.player}function fp(n,e){if(e===M0)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),n;if(e===xu||e===Qp){let t=n.getIndex();if(t===null){const o=[],a=n.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);n.setIndex(o),t=n.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),n}const i=t.count-2,s=[];if(e===xu)for(let o=1;o<=i;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<i;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=n.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),n}function AA(n){const e=new Map,t=new Map,i=n.clone();return Lg(n,i,function(s,r){e.set(r,s),t.set(s,r)}),i.traverse(function(s){if(!s.isSkinnedMesh)return;const r=s,o=e.get(s),a=o.skeleton.bones;r.skeleton=o.skeleton.clone(),r.bindMatrix.copy(o.bindMatrix),r.skeleton.bones=a.map(function(c){return t.get(c)}),r.bind(r.skeleton,r.bindMatrix)}),i}function Lg(n,e,t){t(n,e);for(let i=0;i<n.children.length;i++)Lg(n.children[i],e.children[i],t)}class Ud extends Nr{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new LA(t)}),this.register(function(t){return new DA(t)}),this.register(function(t){return new VA(t)}),this.register(function(t){return new GA(t)}),this.register(function(t){return new WA(t)}),this.register(function(t){return new kA(t)}),this.register(function(t){return new UA(t)}),this.register(function(t){return new OA(t)}),this.register(function(t){return new FA(t)}),this.register(function(t){return new IA(t)}),this.register(function(t){return new BA(t)}),this.register(function(t){return new NA(t)}),this.register(function(t){return new HA(t)}),this.register(function(t){return new zA(t)}),this.register(function(t){return new CA(t)}),this.register(function(t){return new hp(t,at.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new hp(t,at.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new XA(t)})}load(e,t,i,s){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const l=_o.extractUrlBase(e);o=_o.resolveURL(l,this.path)}else o=_o.extractUrlBase(e);this.manager.itemStart(e);const a=function(l){s?s(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new Tm(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,o,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},i,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,s){let r;const o={},a={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===Dg){try{o[at.KHR_BINARY_GLTF]=new qA(e)}catch(d){s&&s(d);return}r=JSON.parse(o[at.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new r1(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const d=this.pluginCallbacks[u](l);d.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[d.name]=d,o[d.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){const d=r.extensionsUsed[u],f=r.extensionsRequired||[];switch(d){case at.KHR_MATERIALS_UNLIT:o[d]=new PA;break;case at.KHR_DRACO_MESH_COMPRESSION:o[d]=new YA(r,this.dracoLoader);break;case at.KHR_TEXTURE_TRANSFORM:o[d]=new KA;break;case at.KHR_MESH_QUANTIZATION:o[d]=new $A;break;default:f.indexOf(d)>=0&&a[d]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+d+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(i,s)}parseAsync(e,t){const i=this;return new Promise(function(s,r){i.parse(e,t,s,r)})}}function RA(){let n={};return{get:function(e){return n[e]},add:function(e,t){n[e]=t},remove:function(e){delete n[e]},removeAll:function(){n={}}}}function Bt(n,e,t){const i=n.json.materials[e];return i.extensions&&i.extensions[t]?i.extensions[t]:null}const at={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class CA{constructor(e){this.parser=e,this.name=at.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let i=0,s=t.length;i<s;i++){const r=t[i];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,i="light:"+e;let s=t.cache.get(i);if(s)return s;const r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let l;const u=new Je(16777215);c.color!==void 0&&u.setRGB(c.color[0],c.color[1],c.color[2],vn);const d=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new Am(u),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new Ru(u),l.distance=d;break;case"spot":l=new Cv(u),l.distance=d,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),Qn(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),s=Promise.resolve(l),t.cache.add(i,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,i=this.parser,r=i.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return i._getNodeRef(t.cache,a,c)})}}class PA{constructor(){this.name=at.KHR_MATERIALS_UNLIT}getMaterialType(){return Rn}extendParams(e,t,i){const s=[];e.color=new Je(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],vn),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(i.assignTexture(e,"map",r.baseColorTexture,Vt))}return Promise.all(s)}}class IA{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=Bt(this.parser,e,this.name);return i===null||i.emissiveStrength!==void 0&&(t.emissiveIntensity=i.emissiveStrength),Promise.resolve()}}class LA{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return Bt(this.parser,e,this.name)!==null?hi:null}extendMaterialParams(e,t){const i=Bt(this.parser,e,this.name);if(i===null)return Promise.resolve();const s=[];if(i.clearcoatFactor!==void 0&&(t.clearcoat=i.clearcoatFactor),i.clearcoatTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatMap",i.clearcoatTexture)),i.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=i.clearcoatRoughnessFactor),i.clearcoatRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",i.clearcoatRoughnessTexture)),i.clearcoatNormalTexture!==void 0&&(s.push(this.parser.assignTexture(t,"clearcoatNormalMap",i.clearcoatNormalTexture)),i.clearcoatNormalTexture.scale!==void 0)){const r=i.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ee(r,r)}return Promise.all(s)}}class DA{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_DISPERSION}getMaterialType(e){return Bt(this.parser,e,this.name)!==null?hi:null}extendMaterialParams(e,t){const i=Bt(this.parser,e,this.name);return i===null||(t.dispersion=i.dispersion!==void 0?i.dispersion:0),Promise.resolve()}}class NA{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return Bt(this.parser,e,this.name)!==null?hi:null}extendMaterialParams(e,t){const i=Bt(this.parser,e,this.name);if(i===null)return Promise.resolve();const s=[];return i.iridescenceFactor!==void 0&&(t.iridescence=i.iridescenceFactor),i.iridescenceTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceMap",i.iridescenceTexture)),i.iridescenceIor!==void 0&&(t.iridescenceIOR=i.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),i.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=i.iridescenceThicknessMinimum),i.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=i.iridescenceThicknessMaximum),i.iridescenceThicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceThicknessMap",i.iridescenceThicknessTexture)),Promise.all(s)}}class kA{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_SHEEN}getMaterialType(e){return Bt(this.parser,e,this.name)!==null?hi:null}extendMaterialParams(e,t){const i=Bt(this.parser,e,this.name);if(i===null)return Promise.resolve();const s=[];if(t.sheenColor=new Je(0,0,0),t.sheenRoughness=0,t.sheen=1,i.sheenColorFactor!==void 0){const r=i.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],vn)}return i.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=i.sheenRoughnessFactor),i.sheenColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenColorMap",i.sheenColorTexture,Vt)),i.sheenRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenRoughnessMap",i.sheenRoughnessTexture)),Promise.all(s)}}class UA{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return Bt(this.parser,e,this.name)!==null?hi:null}extendMaterialParams(e,t){const i=Bt(this.parser,e,this.name);if(i===null)return Promise.resolve();const s=[];return i.transmissionFactor!==void 0&&(t.transmission=i.transmissionFactor),i.transmissionTexture!==void 0&&s.push(this.parser.assignTexture(t,"transmissionMap",i.transmissionTexture)),Promise.all(s)}}class OA{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_VOLUME}getMaterialType(e){return Bt(this.parser,e,this.name)!==null?hi:null}extendMaterialParams(e,t){const i=Bt(this.parser,e,this.name);if(i===null)return Promise.resolve();const s=[];t.thickness=i.thicknessFactor!==void 0?i.thicknessFactor:0,i.thicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"thicknessMap",i.thicknessTexture)),t.attenuationDistance=i.attenuationDistance||1/0;const r=i.attenuationColor||[1,1,1];return t.attenuationColor=new Je().setRGB(r[0],r[1],r[2],vn),Promise.all(s)}}class FA{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_IOR}getMaterialType(e){return Bt(this.parser,e,this.name)!==null?hi:null}extendMaterialParams(e,t){const i=Bt(this.parser,e,this.name);return i===null||(t.ior=i.ior!==void 0?i.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}}class BA{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_SPECULAR}getMaterialType(e){return Bt(this.parser,e,this.name)!==null?hi:null}extendMaterialParams(e,t){const i=Bt(this.parser,e,this.name);if(i===null)return Promise.resolve();const s=[];t.specularIntensity=i.specularFactor!==void 0?i.specularFactor:1,i.specularTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularIntensityMap",i.specularTexture));const r=i.specularColorFactor||[1,1,1];return t.specularColor=new Je().setRGB(r[0],r[1],r[2],vn),i.specularColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularColorMap",i.specularColorTexture,Vt)),Promise.all(s)}}class zA{constructor(e){this.parser=e,this.name=at.EXT_MATERIALS_BUMP}getMaterialType(e){return Bt(this.parser,e,this.name)!==null?hi:null}extendMaterialParams(e,t){const i=Bt(this.parser,e,this.name);if(i===null)return Promise.resolve();const s=[];return t.bumpScale=i.bumpFactor!==void 0?i.bumpFactor:1,i.bumpTexture!==void 0&&s.push(this.parser.assignTexture(t,"bumpMap",i.bumpTexture)),Promise.all(s)}}class HA{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return Bt(this.parser,e,this.name)!==null?hi:null}extendMaterialParams(e,t){const i=Bt(this.parser,e,this.name);if(i===null)return Promise.resolve();const s=[];return i.anisotropyStrength!==void 0&&(t.anisotropy=i.anisotropyStrength),i.anisotropyRotation!==void 0&&(t.anisotropyRotation=i.anisotropyRotation),i.anisotropyTexture!==void 0&&s.push(this.parser.assignTexture(t,"anisotropyMap",i.anisotropyTexture)),Promise.all(s)}}class VA{constructor(e){this.parser=e,this.name=at.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,i=t.json,s=i.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class GA{constructor(e){this.parser=e,this.name=at.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let c=i.textureLoader;if(a.uri){const l=i.options.manager.getHandler(a.uri);l!==null&&(c=l)}return i.loadTextureImage(e,o.source,c)}}class WA{constructor(e){this.parser=e,this.name=at.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let c=i.textureLoader;if(a.uri){const l=i.options.manager.getHandler(a.uri);l!==null&&(c=l)}return i.loadTextureImage(e,o.source,c)}}class hp{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){const t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){const s=i.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const c=s.byteOffset||0,l=s.byteLength||0,u=s.count,d=s.byteStride,f=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,d,f,s.mode,s.filter).then(function(h){return h.buffer}):o.ready.then(function(){const h=new ArrayBuffer(u*d);return o.decodeGltfBuffer(new Uint8Array(h),u,d,f,s.mode,s.filter),h})})}else return null}}class XA{constructor(e){this.name=at.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;const s=t.meshes[i.mesh];for(const l of s.primitives)if(l.mode!==bn.TRIANGLES&&l.mode!==bn.TRIANGLE_STRIP&&l.mode!==bn.TRIANGLE_FAN&&l.mode!==void 0)return null;const o=i.extensions[this.name].attributes,a=[],c={};for(const l in o)a.push(this.parser.getDependency("accessor",o[l]).then(u=>(c[l]=u,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{const u=l.pop(),d=u.isGroup?u.children:[u],f=l[0].count,h=[];for(const p of d){const v=new et,m=new X,g=new In,S=new X(1,1,1),T=new b_(p.geometry,p.material,f);for(let x=0;x<f;x++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,x),c.ROTATION&&g.fromBufferAttribute(c.ROTATION,x),c.SCALE&&S.fromBufferAttribute(c.SCALE,x),T.setMatrixAt(x,v.compose(m,g,S));for(const x in c)if(x==="_COLOR_0"){const M=c[x];T.instanceColor=new Mu(M.array,M.itemSize,M.normalized)}else x!=="TRANSLATION"&&x!=="ROTATION"&&x!=="SCALE"&&p.geometry.setAttribute(x,c[x]);Ct.prototype.copy.call(T,p),this.parser.assignFinalMaterial(T),h.push(T)}return u.isGroup?(u.clear(),u.add(...h),u):h[0]}))}}const Dg="glTF",so=12,pp={JSON:1313821514,BIN:5130562};class qA{constructor(e){this.name=at.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,so),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Dg)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-so,r=new DataView(e,so);let o=0;for(;o<s;){const a=r.getUint32(o,!0);o+=4;const c=r.getUint32(o,!0);if(o+=4,c===pp.JSON){const l=new Uint8Array(e,so+o,a);this.content=i.decode(l)}else if(c===pp.BIN){const l=so+o;this.body=e.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class YA{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=at.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const i=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},l={};for(const u in o){const d=$u[u]||u.toLowerCase();a[d]=o[u]}for(const u in e.attributes){const d=$u[u]||u.toLowerCase();if(o[u]!==void 0){const f=i.accessors[e.attributes[u]],h=xr[f.componentType];l[d]=h.name,c[d]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(d,f){s.decodeDracoFile(u,function(h){for(const p in h.attributes){const v=h.attributes[p],m=c[p];m!==void 0&&(v.normalized=m)}d(h)},a,l,vn,f)})})}}class KA{constructor(){this.name=at.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class $A{constructor(){this.name=at.KHR_MESH_QUANTIZATION}}class Ng extends Ir{constructor(e,t,i,s){super(e,t,i,s)}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=i[r+o];return t}interpolate_(e,t,i,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,u=s-t,d=(i-t)/u,f=d*d,h=f*d,p=e*l,v=p-l,m=-2*h+3*f,g=h-f,S=1-m,T=g-f+d;for(let x=0;x!==a;x++){const M=o[v+x+a],E=o[v+x+c]*u,L=o[p+x+a],y=o[p+x]*u;r[x]=S*M+T*E+m*L+g*y}return r}}const ZA=new In;class JA extends Ng{interpolate_(e,t,i,s){const r=super.interpolate_(e,t,i,s);return ZA.fromArray(r).normalize().toArray(r),r}}const bn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},xr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},mp={9728:It,9729:Lt,9984:Xp,9985:Na,9986:ao,9987:bi},gp={33071:ii,33648:Ka,10497:br},Ml={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},$u={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Vi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},jA={CUBICSPLINE:void 0,LINEAR:Mo,STEP:bo},Tl={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function QA(n){return n.DefaultMaterial===void 0&&(n.DefaultMaterial=new Ts({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Ri})),n.DefaultMaterial}function ms(n,e,t){for(const i in t.extensions)n[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function Qn(n,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(n.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function e1(n,e,t){let i=!1,s=!1,r=!1;for(let l=0,u=e.length;l<u;l++){const d=e[l];if(d.POSITION!==void 0&&(i=!0),d.NORMAL!==void 0&&(s=!0),d.COLOR_0!==void 0&&(r=!0),i&&s&&r)break}if(!i&&!s&&!r)return Promise.resolve(n);const o=[],a=[],c=[];for(let l=0,u=e.length;l<u;l++){const d=e[l];if(i){const f=d.POSITION!==void 0?t.getDependency("accessor",d.POSITION):n.attributes.position;o.push(f)}if(s){const f=d.NORMAL!==void 0?t.getDependency("accessor",d.NORMAL):n.attributes.normal;a.push(f)}if(r){const f=d.COLOR_0!==void 0?t.getDependency("accessor",d.COLOR_0):n.attributes.color;c.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){const u=l[0],d=l[1],f=l[2];return i&&(n.morphAttributes.position=u),s&&(n.morphAttributes.normal=d),r&&(n.morphAttributes.color=f),n.morphTargetsRelative=!0,n})}function t1(n,e){if(n.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)n.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(n.morphTargetInfluences.length===t.length){n.morphTargetDictionary={};for(let i=0,s=t.length;i<s;i++)n.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function n1(n){let e;const t=n.extensions&&n.extensions[at.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+El(t.attributes):e=n.indices+":"+El(n.attributes)+":"+n.mode,n.targets!==void 0)for(let i=0,s=n.targets.length;i<s;i++)e+=":"+El(n.targets[i]);return e}function El(n){let e="";const t=Object.keys(n).sort();for(let i=0,s=t.length;i<s;i++)e+=t[i]+":"+n[t[i]]+";";return e}function Zu(n){switch(n){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function i1(n){return n.search(/\.jpe?g($|\?)/i)>0||n.search(/^data\:image\/jpeg/)===0?"image/jpeg":n.search(/\.webp($|\?)/i)>0||n.search(/^data\:image\/webp/)===0?"image/webp":n.search(/\.ktx2($|\?)/i)>0||n.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const s1=new et;class r1{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new RA,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){const a=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(a)===!0;const c=a.match(/Version\/(\d+)/);s=i&&c?parseInt(c[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||i&&s<17||r&&o<98?this.textureLoader=new Em(this.options.manager):this.textureLoader=new Dv(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Tm(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const i=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(o){const a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:i,userData:{}};return ms(r,a,s),Qn(a,s),Promise.all(i._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(const c of a.scenes)c.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){const o=t[s].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){const o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(i[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;const s=i.clone(),r=(o,a)=>{const c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(const[l,u]of o.children.entries())r(u,a.children[l])};return r(i,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){const s=e(t[i]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const i=[];for(let s=0;s<t.length;s++){const r=e(t[s]);r&&i.push(r)}return i}getDependency(e,t){const i=e+":"+t;let s=this.cache.get(i);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(i,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const i=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return i.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[at.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(r,o){i.load(_o.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){const s=t.byteLength||0,r=t.byteOffset||0;return i.slice(r,r+s)})}loadAccessor(e){const t=this,i=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){const o=Ml[s.type],a=xr[s.componentType],c=s.normalized===!0,l=new a(s.count*o);return Promise.resolve(new cn(l,o,c))}const r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],c=Ml[s.type],l=xr[s.componentType],u=l.BYTES_PER_ELEMENT,d=u*c,f=s.byteOffset||0,h=s.bufferView!==void 0?i.bufferViews[s.bufferView].byteStride:void 0,p=s.normalized===!0;let v,m;if(h&&h!==d){const g=Math.floor(f/h),S="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+g+":"+s.count;let T=t.cache.get(S);T||(v=new l(a,g*h,s.count*h/u),T=new rm(v,h/u),t.cache.add(S,T)),m=new wo(T,c,f%h/u,p)}else a===null?v=new l(s.count*c):v=new l(a,f,s.count*c),m=new cn(v,c,p);if(s.sparse!==void 0){const g=Ml.SCALAR,S=xr[s.sparse.indices.componentType],T=s.sparse.indices.byteOffset||0,x=s.sparse.values.byteOffset||0,M=new S(o[1],T,s.sparse.count*g),E=new l(o[2],x,s.sparse.count*c);a!==null&&(m=new cn(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let L=0,y=M.length;L<y;L++){const b=M[L];if(m.setX(b,E[L*c]),c>=2&&m.setY(b,E[L*c+1]),c>=3&&m.setZ(b,E[L*c+2]),c>=4&&m.setW(b,E[L*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=p}return m})}loadTexture(e){const t=this.json,i=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const c=i.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,i){const s=this,r=this.json,o=r.textures[e],a=r.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(t,i).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const f=(r.samplers||{})[o.sampler]||{};return u.magFilter=mp[f.magFilter]||Lt,u.minFilter=mp[f.minFilter]||bi,u.wrapS=gp[f.wrapS]||br,u.wrapT=gp[f.wrapT]||br,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==It&&u.minFilter!==Lt,s.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){const i=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(d=>d.clone());const o=s.images[e],a=self.URL||self.webkitURL;let c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=i.getDependency("bufferView",o.bufferView).then(function(d){l=!0;const f=new Blob([d],{type:o.mimeType});return c=a.createObjectURL(f),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(c).then(function(d){return new Promise(function(f,h){let p=f;t.isImageBitmapLoader===!0&&(p=function(v){const m=new Gt(v);m.needsUpdate=!0,f(m)}),t.load(_o.resolveURL(d,r.path),p,void 0,h)})}).then(function(d){return l===!0&&a.revokeObjectURL(c),Qn(d,o),d.userData.mimeType=o.mimeType||i1(o.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),d});return this.sourceCache[e]=u,u}assignTexture(e,t,i,s){const r=this;return this.getDependency("texture",i.index).then(function(o){if(!o)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(o=o.clone(),o.channel=i.texCoord),r.extensions[at.KHR_TEXTURE_TRANSFORM]){const a=i.extensions!==void 0?i.extensions[at.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const c=r.associations.get(o);o=r.extensions[at.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,c)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let i=e.material;const s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+i.uuid;let c=this.cache.get(a);c||(c=new lm,Hn.prototype.copy.call(c,i),c.color.copy(i.color),c.map=i.map,c.sizeAttenuation=!1,this.cache.add(a,c)),i=c}else if(e.isLine){const a="LineBasicMaterial:"+i.uuid;let c=this.cache.get(a);c||(c=new cm,Hn.prototype.copy.call(c,i),c.color.copy(i.color),c.map=i.map,this.cache.add(a,c)),i=c}if(s||r||o){let a="ClonedMaterial:"+i.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=i.clone(),r&&(c.vertexColors=!0),o&&(c.flatShading=!0),s&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(i))),i=c}e.material=i}getMaterialType(){return Ts}loadMaterial(e){const t=this,i=this.json,s=this.extensions,r=i.materials[e];let o;const a={},c=r.extensions||{},l=[];if(c[at.KHR_MATERIALS_UNLIT]){const d=s[at.KHR_MATERIALS_UNLIT];o=d.getMaterialType(),l.push(d.extendParams(a,r,t))}else{const d=r.pbrMetallicRoughness||{};if(a.color=new Je(1,1,1),a.opacity=1,Array.isArray(d.baseColorFactor)){const f=d.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],vn),a.opacity=f[3]}d.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",d.baseColorTexture,Vt)),a.metalness=d.metallicFactor!==void 0?d.metallicFactor:1,a.roughness=d.roughnessFactor!==void 0?d.roughnessFactor:1,d.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",d.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",d.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=ni);const u=r.alphaMode||Tl.OPAQUE;if(u===Tl.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===Tl.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Rn&&(l.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new Ee(1,1),r.normalTexture.scale!==void 0)){const d=r.normalTexture.scale;a.normalScale.set(d,d)}if(r.occlusionTexture!==void 0&&o!==Rn&&(l.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Rn){const d=r.emissiveFactor;a.emissive=new Je().setRGB(d[0],d[1],d[2],vn)}return r.emissiveTexture!==void 0&&o!==Rn&&l.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,Vt)),Promise.all(l).then(function(){const d=new o(a);return r.name&&(d.name=r.name),Qn(d,r),t.associations.set(d,{materials:e}),r.extensions&&ms(s,d,r),d})}createUniqueName(e){const t=ht.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,i=this.extensions,s=this.primitiveCache;function r(a){return i[at.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return _p(c,a,t)})}const o=[];for(let a=0,c=e.length;a<c;a++){const l=e[a],u=n1(l),d=s[u];if(d)o.push(d.promise);else{let f;l.extensions&&l.extensions[at.KHR_DRACO_MESH_COMPRESSION]?f=r(l):f=_p(new un,l,t),s[u]={primitive:l,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){const t=this,i=this.json,s=this.extensions,r=i.meshes[e],o=r.primitives,a=[];for(let c=0,l=o.length;c<l;c++){const u=o[c].material===void 0?QA(this.cache):this.getDependency("material",o[c].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(c){const l=c.slice(0,c.length-1),u=c[c.length-1],d=[];for(let h=0,p=u.length;h<p;h++){const v=u[h],m=o[h];let g;const S=l[h];if(m.mode===bn.TRIANGLES||m.mode===bn.TRIANGLE_STRIP||m.mode===bn.TRIANGLE_FAN||m.mode===void 0)g=r.isSkinnedMesh===!0?new x_(v,S):new kt(v,S),g.isSkinnedMesh===!0&&g.normalizeSkinWeights(),m.mode===bn.TRIANGLE_STRIP?g.geometry=fp(g.geometry,Qp):m.mode===bn.TRIANGLE_FAN&&(g.geometry=fp(g.geometry,xu));else if(m.mode===bn.LINES)g=new w_(v,S);else if(m.mode===bn.LINE_STRIP)g=new vd(v,S);else if(m.mode===bn.LINE_LOOP)g=new A_(v,S);else if(m.mode===bn.POINTS)g=new R_(v,S);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(g.geometry.morphAttributes).length>0&&t1(g,r),g.name=t.createUniqueName(r.name||"mesh_"+e),Qn(g,r),m.extensions&&ms(s,g,m),t.assignFinalMaterial(g),d.push(g)}for(let h=0,p=d.length;h<p;h++)t.associations.set(d[h],{meshes:e,primitives:h});if(d.length===1)return r.extensions&&ms(s,d[0],r),d[0];const f=new zn;r.extensions&&ms(s,f,r),t.associations.set(f,{meshes:e});for(let h=0,p=d.length;h<p;h++)f.add(d[h]);return f})}loadCamera(e){let t;const i=this.json.cameras[e],s=i[i.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new rn(bu.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):i.type==="orthographic"&&(t=new fc(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),Qn(t,i),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],i=[];for(let s=0,r=t.joints.length;s<r;s++)i.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(s){const r=s.pop(),o=s,a=[],c=[];for(let l=0,u=o.length;l<u;l++){const d=o[l];if(d){a.push(d);const f=new et;r!==null&&f.fromArray(r.array,l*16),c.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new gd(a,c)})}loadAnimation(e){const t=this.json,i=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],c=[],l=[],u=[];for(let d=0,f=s.channels.length;d<f;d++){const h=s.channels[d],p=s.samplers[h.sampler],v=h.target,m=v.node,g=s.parameters!==void 0?s.parameters[p.input]:p.input,S=s.parameters!==void 0?s.parameters[p.output]:p.output;v.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",g)),c.push(this.getDependency("accessor",S)),l.push(p),u.push(v))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(u)]).then(function(d){const f=d[0],h=d[1],p=d[2],v=d[3],m=d[4],g=[];for(let T=0,x=f.length;T<x;T++){const M=f[T],E=h[T],L=p[T],y=v[T],b=m[T];if(M===void 0)continue;M.updateMatrix&&M.updateMatrix();const N=i._createAnimationTracks(M,E,L,y,b);if(N)for(let P=0;P<N.length;P++)g.push(N[P])}const S=new ic(r,void 0,g);return Qn(S,s),S})}createNodeMesh(e){const t=this.json,i=this,s=t.nodes[e];return s.mesh===void 0?null:i.getDependency("mesh",s.mesh).then(function(r){const o=i._getNodeRef(i.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=s.weights.length;c<l;c++)a.morphTargetInfluences[c]=s.weights[c]}),o})}loadNode(e){const t=this.json,i=this,s=t.nodes[e],r=i._loadNodeShallow(e),o=[],a=s.children||[];for(let l=0,u=a.length;l<u;l++)o.push(i.getDependency("node",a[l]));const c=s.skin===void 0?Promise.resolve(null):i.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),c]).then(function(l){const u=l[0],d=l[1],f=l[2];f!==null&&u.traverse(function(h){h.isSkinnedMesh&&h.bind(f,s1)});for(let h=0,p=d.length;h<p;h++)u.add(d[h]);if(u.userData.pivot!==void 0&&d.length>0){const h=u.userData.pivot,p=d[0];u.pivot=new X().fromArray(h),u.position.x-=h[0],u.position.y-=h[1],u.position.z-=h[2],p.position.set(0,0,0),delete u.userData.pivot}return u})}_loadNodeShallow(e){const t=this.json,i=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],c=s._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(l){return s._getNodeRef(s.cameraCache,r.camera,l)})),s._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let u;if(r.isBone===!0?u=new am:l.length>1?u=new zn:l.length===1?u=l[0]:u=new Ct,u!==l[0])for(let d=0,f=l.length;d<f;d++)u.add(l[d]);if(r.name&&(u.userData.name=r.name,u.name=o),Qn(u,r),r.extensions&&ms(i,u,r),r.matrix!==void 0){const d=new et;d.fromArray(r.matrix),u.applyMatrix4(d)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);if(!s.associations.has(u))s.associations.set(u,{});else if(r.mesh!==void 0&&s.meshCache.refs[r.mesh]>1){const d=s.associations.get(u);s.associations.set(u,{...d})}return s.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,i=this.json.scenes[e],s=this,r=new zn;i.name&&(r.name=s.createUniqueName(i.name)),Qn(r,i),i.extensions&&ms(t,r,i);const o=i.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(s.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let u=0,d=c.length;u<d;u++){const f=c[u];f.parent!==null?r.add(AA(f)):r.add(f)}const l=u=>{const d=new Map;for(const[f,h]of s.associations)(f instanceof Hn||f instanceof Gt)&&d.set(f,h);return u.traverse(f=>{const h=s.associations.get(f);h!=null&&d.set(f,h)}),d};return s.associations=l(r),r})}_createAnimationTracks(e,t,i,s,r){const o=[],a=e.name?e.name:e.uuid,c=[];function l(h){h.morphTargetInfluences&&c.push(h.name?h.name:h.uuid)}Vi[r.path]===Vi.weights?(l(e),e.isGroup&&e.children.forEach(l)):c.push(a);let u;switch(Vi[r.path]){case Vi.weights:u=Po;break;case Vi.rotation:u=Io;break;case Vi.translation:case Vi.scale:u=nc;break;default:switch(i.itemSize){case 1:u=Po;break;case 2:case 3:default:u=nc;break}break}const d=s.interpolation!==void 0?jA[s.interpolation]:Mo,f=this._getArrayFromAccessor(i);for(let h=0,p=c.length;h<p;h++){const v=new u(c[h]+"."+Vi[r.path],t.array,f,d);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(v),o.push(v)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const i=Zu(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*i;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){const s=this instanceof Io?JA:Ng;return new s(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function o1(n,e,t){const i=e.attributes,s=new an;if(i.POSITION!==void 0){const a=t.json.accessors[i.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(s.set(new X(c[0],c[1],c[2]),new X(l[0],l[1],l[2])),a.normalized){const u=Zu(xr[a.componentType]);s.min.multiplyScalar(u),s.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new X,c=new X;for(let l=0,u=r.length;l<u;l++){const d=r[l];if(d.POSITION!==void 0){const f=t.json.accessors[d.POSITION],h=f.min,p=f.max;if(h!==void 0&&p!==void 0){if(c.setX(Math.max(Math.abs(h[0]),Math.abs(p[0]))),c.setY(Math.max(Math.abs(h[1]),Math.abs(p[1]))),c.setZ(Math.max(Math.abs(h[2]),Math.abs(p[2]))),f.normalized){const v=Zu(xr[f.componentType]);c.multiplyScalar(v)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}n.boundingBox=s;const o=new di;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,n.boundingSphere=o}function _p(n,e,t){const i=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(c){n.setAttribute(a,c)})}for(const o in i){const a=$u[o]||o.toLowerCase();a in n.attributes||s.push(r(i[o],a))}if(e.indices!==void 0&&!n.index){const o=t.getDependency("accessor",e.indices).then(function(a){n.setIndex(a)});s.push(o)}return ct.workingColorSpace!==vn&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ct.workingColorSpace}" not supported.`),Qn(n,e),o1(n,e,t),Promise.all(s).then(function(){return e.targets!==void 0?e1(n,e.targets,t):n})}const Ye={outline:1916526,body:4033504,bodyHurt:7251933,shine:9426165,core:14677503,torch:15245628,torchBright:16177034,stone:4861726,stoneDark:2759696,floor:2365968,floorAlt:2826260,dungeonBg:1708555,toad:5934138,toadBelly:10339434,toadOutline:3099166,spit:8829247,spitDark:4021278,danger:14830410,eyeWhite:16055295,eyeDark:1320511,white:16777215};function dt(n){return"#"+n.toString(16).padStart(6,"0")}function On(n,e){const t={img:new Image,cell:e,cols:0,rows:0,ready:!1};return t.img.onload=()=>{t.cols=Math.max(1,Math.floor(t.img.width/e)),t.rows=Math.max(1,Math.floor(t.img.height/e)),t.ready=!0},t.img.src=n,t}function a1(){return{frog:On("assets/enemies/frogs/frog_spritesheets/frog_green_spritesheet.png",32),frogPurple:On("assets/enemies/frogs/frog_spritesheets/frog_purple_spritesheet.png",32),bat:On("assets/enemies/cave-bat/Bat/Spritesheets/Blue_Flying.png",32),trader:On("assets/characters/craftpix-slime/Slime1/Idle/Slime1_Idle_body.png",64),babosaWalk:On("assets/characters/craftpix-slime/Slime3/Walk/Slime3_Walk_body.png",64),babosaIdle:On("assets/characters/craftpix-slime/Slime3/Idle/Slime3_Idle_body.png",64),babosaHurt:On("assets/characters/craftpix-slime/Slime3/Hurt/Slime3_Hurt_body.png",64),kaiIdle:On("assets/characters/craftpix-slime/Slime2/Idle/Slime2_Idle_body.png",64),kaiRun:On("assets/characters/craftpix-slime/Slime2/Run/Slime2_Run_body.png",64),kaiAttack:On("assets/characters/craftpix-slime/Slime2/Attack/Slime2_Attack_body.png",64),kaiHurt:On("assets/characters/craftpix-slime/Slime2/Hurt/Slime2_Hurt_body.png",64)}}function rr(n,e,t,i,s,r,o,a=!1){n.imageSmoothingEnabled=!1;const c=e.cell;if(a){n.save(),n.translate(s,0),n.scale(-1,1),n.drawImage(e.img,t*c,i*c,c,c,-o/2,r-o/2,o,o),n.restore();return}n.drawImage(e.img,t*c,i*c,c,c,s-o/2,r-o/2,o,o)}const c1="assets/tileset/",kg=["floor_1","floor_2","floor_3","floor_4","floor_5","floor_6","floor_7","floor_8","wall_mid","wall_top_mid","floor_stairs","doors_leaf_open","doors_leaf_closed","doors_frame_left","doors_frame_right"],Ug=new Map,Ju=[];let ju=kg.length;for(const n of kg){const e=new Image;e.src=`${c1}${n}.png`,e.onload=()=>{if(--ju===0)for(const t of Ju)t()},e.onerror=()=>{if(--ju===0)for(const t of Ju)t()},Ug.set(n,e)}function Og(n){ju===0?n():Ju.push(n)}function qa(n){const e=Ug.get(n);return e&&e.complete&&e.naturalWidth>0?e:null}function Jt(n,e){const t=document.createElement("canvas");t.width=n,t.height=e;const i=t.getContext("2d");return[t,i]}function jt(n){const e=new C_(n);return e.magFilter=It,e.minFilter=It,e.generateMipmaps=!1,e.colorSpace=Vt,e}function Fg(n,e){let t=n*374761393+e*668265263>>>0;return t=Math.imul(t^t>>>13,1274126177)>>>0,(t^t>>>16)>>>0}function l1(n,e){const[i,s]=Jt(n*16,e*16);for(let r=0;r<e;r++)for(let o=0;o<n;o++){s.fillStyle=(o+r)%2===0?dt(Ye.floor):dt(Ye.floorAlt),s.fillRect(o*16,r*16,16,16);const a=Fg(o,r);s.fillStyle="rgba(0,0,0,0.18)",s.fillRect(o*16+a%16,r*16+(a>>5)%16,2,1),s.fillRect(o*16+(a>>10)%16,r*16+(a>>15)%16,1,2),s.strokeStyle="rgba(0,0,0,0.25)",s.lineWidth=1,s.strokeRect(o*16+.5,r*16+.5,15,15)}return jt(i)}function u1(n,e){const[i,s]=Jt(n*16,e*16),r=jt(i);let o=1;function a(c){if(o=c,!qa("floor_1")){const d=l1(n,e);s.drawImage(d.image,0,0),r.needsUpdate=!0;return}let l=c>>>0||1;const u=()=>(l^=l<<13,l>>>=0,l^=l>>17,l^=l<<5,l>>>=0,l/4294967295);for(let d=0;d<e;d++)for(let f=0;f<n;f++){const h=u()<.72?"floor_1":`floor_${1+Math.floor(u()*8)}`,p=qa(h)??qa("floor_1");s.drawImage(p,f*16,d*16,16,16)}r.needsUpdate=!0}return a(1),Og(()=>a(o)),{texture:r,repaint:a}}function vp(n,e){const[i,s]=Jt(Math.max(1,n)*16,Math.max(1,e)*16),r=jt(i),o=()=>{const a=qa("wall_mid");if(a)for(let c=0;c*16<i.height;c++)for(let l=0;l*16<i.width;l++)s.drawImage(a,l*16,c*16,16,16);else{const c=d1(n,e);s.drawImage(c.image,0,0)}r.needsUpdate=!0};return o(),Og(o),r}function d1(n,e){const[i,s]=Jt(Math.max(1,n)*16,Math.max(1,e)*16);s.fillStyle=dt(Ye.stone),s.fillRect(0,0,i.width,i.height);const r=16/2;for(let o=0;o*r<i.height;o++){const a=o%2===0?0:8;for(let c=-1;c*16<i.width;c++){const l=c*16+a,d=(Fg(c,o)%21-10)/100;s.fillStyle=d>=0?`rgba(255,235,200,${d*.5})`:`rgba(0,0,0,${-d})`,s.fillRect(l+1,o*r+1,14,r-2),s.strokeStyle=dt(Ye.stoneDark),s.lineWidth=1,s.strokeRect(l+.5,o*r+.5,15,r-1)}}return jt(i)}const f1={down:0,up:1,left:2,right:3},wl={idle:6,run:8,hurt:5},h1=13,p1=4,m1=10,xp=3,g1=.24,_1=[2,1,0,7,6,5,4,3],yp={sapo_escupidor:{canvas:96,world:3,y:.42,shadow:[.9,.58]},renacuajo:{canvas:64,world:1.5,y:.28,shadow:[.45,.3]},mosca_gorda:{canvas:64,world:1.6,y:.85,shadow:[.42,.27]},babosa_acorazada:{canvas:96,world:2.5,y:.42,shadow:[1.05,.66]},sapo_doble:{canvas:128,world:4.2,y:.56,shadow:[1.3,.82]},gorko:{canvas:192,world:7,y:.95,shadow:[2.3,1.45]}};function v1(n,e){return Math.abs(n)>=Math.abs(e)?n>0?3:2:e>0?0:1}const Ca={col:0,frames:3},or={col:3,frames:4},Pa={col:7,frames:4},Al={col:11,frames:5},gs={frames:5,ticksPerFrame:4,rowOffset:8},Rl={frames:2,ticksPerFrame:5},Sp=18,bp=.16,x1=.22,Ia=4;function La(n,e){const t=Math.round(Math.atan2(e,n)/(Math.PI/4))+8&7;return _1[t]}const y1="assets/items/ssugmi-rpg-16x16/Free RPG asset Pack/separate files/",S1={punos_de_piedra:"glove_01.png",brazos_de_arquero:"bow_01.png",piernas_de_renacuajo:"boots_01.png",botas_de_salto:"boots_02.png",casco_de_lata:"headgear_01.png",ojo_de_cristal:"glasses.png",nucleo_denso:"stone.png",corazon_de_la_gema:"hp_potion.png",chorro_dividido:"arrow.png",burbujas_traviesas:"mana_potion.png",libro_multidisparo:"book.png",trebol_de_alcantarilla:"clover_leaf.png",manos_de_ladron:"glove_02.png",herradura_del_ahogado:"necklace_01.png",punta_de_lanza:"spear_01.png",pulmones_de_buzo:"feather_a.png",caparazon_de_tortuga:"wooden_shield.png",anillo_de_marea:"ring_01.png",chorro_a_presion:"wand_01.png",medalla_oxidada:"necklace_02.png",aletas_de_carpa:"tail.png",silbato_del_pantano:"compass.png",corona_del_rey_sapo:"circlet.png",perla_negra:"glowing_dust.png",escudo_de_caracol:"shield_01.png",guantes_de_rana:"leather_glove.png"};function xo(n){return y1+(S1[n]??"pouch.png")}const Mp=new Map;function Tp(n){const e=xo(n);let t=Mp.get(e);return t||(t=new Em().load(e),t.magFilter=It,t.minFilter=It,t.generateMipmaps=!1,t.colorSpace=Vt,Mp.set(e,t)),t}const b1=24,M1=64,T1=Rt.radius*Lu+4;function E1(n,e){const t=w1(),i=A1(),s=R1(),r=C1(),o=I1(),a=N1(),c=new kt(new is(1,.62),new Rn({map:P1(),transparent:!0,depthWrite:!1,opacity:.85}));c.rotation.x=-Math.PI/2,c.position.y=.022,c.renderOrder=2,c.visible=!1,n.add(c);function l(q){const W=q.enemies.find(H=>H.kind==="gorko"&&(H.fsm==="jump_aim"||H.fsm==="airborne"));if(c.visible=!!W,!W)return;const z=W.fsm==="jump_aim"?.6+1.6*(1-W.timer/We.jumpAimTicks):2.2+.5*(1-W.timer/We.airborneTicks)+.12*Math.sin(q.tick*.5);c.scale.set(z*1.6,z,1),c.position.x=W.targetX,c.position.z=W.targetY}const u=[16777215,11075504,16757721,16773800,11786751,16763304],d=new Map;function f(q){let W=d.get(q);return W||(W={view:Cl(n,64),shadow:ar(n,t,1,.62),anim:p()},q>0&&(W.view.sprite.material.color=new Je(u[q%u.length])),d.set(q,W)),W}const h=new Map;function p(){return{prevX:null,prevY:0,lastMoveTick:-99,dist:0,facing:"down",prevFireCooldown:0,prevHalfHearts:-1,attackStart:-1,hurtStart:-1}}const v=Array.from({length:b1},()=>{const q=new dr(new bs({map:s,depthWrite:!1,transparent:!0}));q.scale.set(.5,.5,1),q.renderOrder=3,q.visible=!1,n.add(q);const W=new dr(new bs({map:a,depthWrite:!1,transparent:!0,opacity:.5}));W.scale.set(.3,.3,1),W.renderOrder=3,W.visible=!1,n.add(W);const z=ar(n,t,.24,.15);return z.visible=!1,{sprite:q,trail:W,shadow:z}}),m=Array.from({length:M1},(q,W)=>{const z=new kt(new is(.55,.32),new Rn({map:i,transparent:!0,depthWrite:!1,opacity:0}));return z.rotation.x=-Math.PI/2,z.position.y=.008+W%8*.0015,z.renderOrder=1,z.visible=!1,n.add(z),z}),g=new Map,S=new ns(.52,.3,.42),T=new Ts({color:Ye.stone,roughness:.9});function x(q){for(const W of q.pickups)if(!g.has(W.id)){const z=new kt(S,T);z.position.set(W.x,.15,W.y),n.add(z);const H=new dr(new bs({map:Tp(W.itemId),depthWrite:!1,transparent:!0}));H.scale.set(.55,.55,1),H.renderOrder=3,n.add(H),g.set(W.id,{itemId:W.itemId,icon:H,base:z,shadow:ar(n,t,.5,.32)})}for(const[W,z]of g){const H=q.pickups.find(re=>re.id===W);if(!H){n.remove(z.icon),z.icon.material.dispose(),n.remove(z.base),n.remove(z.shadow),g.delete(W);continue}H.itemId!==z.itemId&&(z.itemId=H.itemId,z.icon.material.map=Tp(H.itemId)),z.icon.position.set(H.x,.72+.05*Math.sin(q.tick*.07),H.y),z.shadow.position.set(H.x,z.shadow.position.y,H.y)}}const M={heart:L1(),key:D1(),crystal:Pl(4.5),crystal_med:Pl(5.5),crystal_big:Pl(6.5)},E=new Map;function L(q){for(const W of q.drops)if(!E.has(W.id)){const z=new dr(new bs({map:M[W.kind],depthWrite:!1,transparent:!0}));z.renderOrder=3,n.add(z),E.set(W.id,{sprite:z,shadow:ar(n,t,.28,.18)})}for(const[W,z]of E){const H=q.drops.find(B=>B.id===W);if(!H){n.remove(z.sprite),z.sprite.material.dispose(),n.remove(z.shadow),E.delete(W);continue}const re=Math.abs(Math.sin(q.tick*.09+W)),se=H.kind==="crystal_big"?.64:H.kind==="crystal_med"?.52:.44;z.sprite.scale.set(se*(.35+.65*re),se,1),z.sprite.position.set(H.x,.34+.05*Math.sin(q.tick*.1+W*2.1),H.y),z.shadow.position.set(H.x,z.shadow.position.y,H.y)}}const y=new Ud,b=new Map;for(const q of["caja","caja_rica","pila","barril","barrilete"])y.load(`assets/models/prop_${q}.glb`,W=>{b.set(q,W.scene)});let N=null;y.load("assets/models/cofre_nido.glb",q=>{N=q.scene});function P(q,W){const z=q.clone(!0),re=new an().setFromObject(q).getSize(new X),se=W/Math.max(.001,Math.max(re.x,re.z));z.scale.setScalar(se);const B=new an().setFromObject(z),pe=B.getCenter(new X);z.position.sub(new X(pe.x,B.min.y,pe.z));const _e=new zn;return _e.add(z),_e}const D=new Map;function Y(q){for(const W of q.props){const z=D.get(W.id);if(!z||z.kind!==W.kind){const H=b.get(W.kind);if(!H)continue;z&&n.remove(z.group);const re=P(H,Ti[W.kind].radius*2.2);n.add(re),D.set(W.id,{group:re,kind:W.kind})}}for(const[W,z]of D){const H=q.props.find(B=>B.id===W);if(!H){n.remove(z.group),D.delete(W);continue}const re=Ti[H.kind],se=H.hp<re.hp?.9:1;z.group.scale.setScalar(se),z.group.position.set(H.x,0,H.y)}}let R=null,A=null;function k(q){const W=q.chest,z=!!W&&W.roomId===q.floor.current;if(z&&!R&&N&&(R=P(N,1),R.traverse(H=>{H.name==="chest_gold_lid"&&(A=H)}),n.add(R)),!!R&&(R.visible=z,!(!W||!z)&&(R.position.set(W.x,0,W.y),A))){const H=W.opened?-1.35:0;A.rotation.x+=(H-A.rotation.x)*.1}}const I=Cl(n,96);I.sprite.visible=!1;const O=ar(n,t,1.2,.75);O.visible=!1;function F(q){const W=q.floor.rooms[q.floor.current].kind==="shop";if(I.sprite.visible=W,O.visible=W,!W)return;const[z,H]=dT;I.sprite.scale.set(3.4,3.4,1),I.sprite.position.set(z,.62,H),O.position.set(z,O.position.y,H);const{ctx:re,size:se}=I,B=se/2;re.clearRect(0,0,se,se);const pe=e.trader;if(pe&&pe.ready){const _=Math.floor(q.tick/16)%6;rr(re,pe,_,0,B,B+4,se*.8)}else re.fillStyle=dt(Ye.toad),ft(re,B,B,se*.3,!0);const _e=3*Math.sin(q.tick*.08),C=B-se*.32+_e;re.fillStyle=dt(Ye.core),re.beginPath(),re.moveTo(B,C-6),re.lineTo(B+4.5,C),re.lineTo(B,C+6),re.lineTo(B-4.5,C),re.closePath(),re.fill(),re.strokeStyle=dt(Ye.shine),re.lineWidth=1.4,re.stroke(),I.tex.needsUpdate=!0}function G(q){U(q),le(q),Se(q),Ce(q),x(q),L(q),Y(q),k(q),F(q),l(q)}function U(q){for(let W=0;W<q.players.length;W++)$(q,W);for(const[W,z]of d){const H=W<q.players.length;z.view.sprite.visible=H,z.shadow.visible=H}}function $(q,W){const z=q.players[W],H=f(W),re=q.status==="dead"||z.halfHearts<=0,se=z.iframes>0&&Math.floor(z.iframes/KM)%2===1;H.view.sprite.material.opacity=se?.35:1;const pe=z.halfHearts<=2&&!re?Math.sin(q.tick*.9)*.025:0;H.view.sprite.position.set(z.x+pe,.52,z.y),H.shadow.position.set(z.x,H.shadow.position.y,z.y),ue(q,z,H.anim);const _e=!!(e.kaiIdle&&e.kaiIdle.ready);if(re)H.view.sprite.scale.set(2,2,1),ne(H.view,q,z);else if(_e)H.view.sprite.scale.set(2.2,2.2,1),we(H.view,q,H.anim);else{const C=1+.04*Math.sin(q.tick*.12);H.view.sprite.scale.set(2*C,2*(2-C)*.95,1),Le(H.view,q,z)}}function ue(q,W,z){if(z.attackStart>q.tick&&(z.attackStart=-1),z.hurtStart>q.tick&&(z.hurtStart=-1),z.prevX!==null){const H=W.x-z.prevX,re=W.y-z.prevY,se=Math.hypot(H,re);se>1?z.dist=0:se>5e-4&&(z.dist+=se,z.lastMoveTick=q.tick,z.facing=Math.abs(H)>=Math.abs(re)?H>0?"right":"left":re>0?"down":"up")}z.prevX=W.x,z.prevY=W.y,W.fireCooldown>z.prevFireCooldown&&(z.attackStart=q.tick,z.facing=Math.abs(W.aimX)>=Math.abs(W.aimY)?W.aimX>0?"right":"left":W.aimY>0?"down":"up"),z.prevFireCooldown=W.fireCooldown,z.prevHalfHearts>=0&&W.halfHearts<z.prevHalfHearts&&(z.hurtStart=q.tick),z.prevHalfHearts=W.halfHearts}function we(q,W,z){const{ctx:H,size:re}=q,se=re/2;H.clearRect(0,0,re,re);const B=f1[z.facing],pe=z.hurtStart>=0?W.tick-z.hurtStart:1/0,_e=z.attackStart>=0?W.tick-z.attackStart:1/0;let C=e.kaiIdle,_;e.kaiHurt?.ready&&pe<wl.hurt*xp?(C=e.kaiHurt,_=Math.floor(pe/xp)):e.kaiAttack?.ready&&_e<m1?(C=e.kaiAttack,_=p1):e.kaiRun?.ready&&W.tick-z.lastMoveTick<=Ia?(C=e.kaiRun,_=Math.floor(z.dist/g1)%wl.run):_=Math.floor(W.tick/h1)%wl.idle,rr(H,C,_,B,se,se+re*.06,re),q.tex.needsUpdate=!0}function Le(q,W,z){const{ctx:H,size:re}=q,se=re/2,B=T1,pe=z.halfHearts<=2;H.clearRect(0,0,re,re),H.fillStyle=dt(pe?Ye.bodyHurt:Ye.body),H.strokeStyle=dt(Ye.outline),H.lineWidth=2,Fn(H,se,se,B,B*1.05,!0,!0),H.fillStyle=Mn(Ye.shine,.85),Fn(H,se-B*.55,se-B*.55,B*.4,B*.225,!0,!1);const _e=pe?.6+.4*Math.abs(Math.sin(W.tick*.25)):1;H.fillStyle=Mn(pe?Ye.danger:Ye.core,_e),ft(H,se,se+B*.35,4.5,!0),H.strokeStyle=Mn(Ye.shine,.9),H.lineWidth=1,ft(H,se,se+B*.35,4.5,!1,!0);const C=z.aimX*1.6,_=z.aimY*1.6;H.fillStyle=dt(Ye.eyeWhite),Fn(H,se-6,se-4,3.5,4.5,!0,!1),Fn(H,se+6,se-4,3.5,4.5,!0,!1),H.fillStyle=dt(Ye.eyeDark),ft(H,se-6+C,se-4+_,2.2,!0),ft(H,se+6+C,se-4+_,2.2,!0),H.fillStyle=dt(Ye.white),ft(H,se-5+C,se-5+_,.9,!0),ft(H,se+7+C,se-5+_,.9,!0),q.tex.needsUpdate=!0}function ne(q,W,z){const{ctx:H,size:re}=q,se=re/2,B=W.tick-(z.deathTick||W.tick);H.clearRect(0,0,re,re);const pe=Math.min(1,B/40);H.fillStyle=Mn(Ye.outline,.4),Fn(H,se,se+6,15+10*pe,6+3*pe,!0,!1),H.fillStyle=Mn(Ye.body,.55),Fn(H,se,se+6,13+9*pe,5+2.5*pe,!0,!1);const _e=Math.floor(B/14)%2===0?1:.25;H.fillStyle=Mn(Ye.core,_e),ft(H,se,se+3,4.5,!0),H.strokeStyle=Mn(Ye.shine,_e),H.lineWidth=1,ft(H,se,se+3,4.5,!1,!0),q.tex.needsUpdate=!0}function le(q){for(const W of q.enemies)if(!h.has(W.id)){const z=yp[W.kind];h.set(W.id,{kind:W.kind,view:Cl(n,z.canvas),shadow:ar(n,t,z.shadow[0],z.shadow[1]),prevX:W.x,prevY:W.y,lastMoveTick:-99,dist:0,prevHp:W.hp,hurtStart:-1,spitStart:-1,prevFsm:W.fsm,dirRow:0})}for(const[W,z]of h){const H=q.enemies.find(K=>K.id===W);if(!H){n.remove(z.view.sprite),z.view.sprite.material.map?.dispose(),z.view.sprite.material.dispose(),n.remove(z.shadow),h.delete(W);continue}z.hurtStart>q.tick&&(z.hurtStart=-1),z.spitStart>q.tick&&(z.spitStart=-1),H.fsm==="shoot"&&z.prevFsm!=="shoot"&&(z.spitStart=q.tick),z.prevFsm=H.fsm;const re=H.x-z.prevX,se=H.y-z.prevY,B=Math.hypot(re,se);B>1?z.dist=0:B>5e-4&&(z.dist+=B,z.lastMoveTick=q.tick,z.dirRow=La(re,se)),z.prevX=H.x,z.prevY=H.y,H.hp<z.prevHp&&(z.hurtStart=q.tick),z.prevHp=H.hp,(H.fsm==="aim"||H.fsm==="shoot")&&(z.dirRow=La(H.targetX-H.x,H.targetY-H.y)),H.kind==="renacuajo"&&(H.fsm==="windup"||H.fsm==="hop")&&(z.dirRow=La(H.facingX,H.facingY)),H.kind==="gorko"&&(H.fsm==="jump_aim"||H.fsm==="volley")&&(z.dirRow=La(H.targetX-H.x,H.targetY-H.y));const pe=yp[H.kind];let _e=1+.05*Math.sin(q.tick*.15);const C=H.kind!=="mosca_gorda"&&H.kind!=="babosa_acorazada";if(C&&(H.fsm==="aim"||H.fsm==="swallow_aim")){const K=H.kind==="sapo_doble"?yt.telegraphTicks:nn.telegraphTicks;_e=1+.25*(1-H.timer/K)}C||(_e=1);const _=pe.world*H.sizeMult;z.view.sprite.scale.set(_*_e,_,1),z.shadow.scale.setScalar(H.sizeMult);const V=(H.kind==="mosca_gorda"?pe.y+.08*Math.sin(q.tick*.13+H.id*1.7):pe.y)*H.sizeMult;z.view.sprite.position.set(H.x,V,H.y),z.shadow.position.set(H.x,z.shadow.position.y,H.y),fe(z,H,q)}}function fe(q,W,z){const{ctx:H,size:re}=q.view;switch(H.clearRect(0,0,re,re),Ae(q,W),W.kind){case"sapo_escupidor":Fe(q,W,z,e.frog,nn.telegraphTicks,nn.aggroRange);break;case"renacuajo":Fe(q,W,z,e.frog,sn.windupTicks,sn.aggroRange);break;case"sapo_doble":Fe(q,W,z,e.frogPurple,yt.telegraphTicks,yt.aggroRange);break;case"mosca_gorda":De(q,W,z);break;case"babosa_acorazada":je(q,W,z);break;case"gorko":mt(q,W,z);break}if(W.variant&&(H.globalCompositeOperation="source-atop",H.fillStyle=W.variant==="gigante"?"rgba(224, 70, 40, 0.25)":"rgba(90, 205, 255, 0.25)",H.fillRect(0,0,re,re),H.globalCompositeOperation="source-over"),W.hp<W.maxHp){const se=re/2,B=re*.42,pe=re*.16;H.fillStyle="rgba(0,0,0,0.5)",H.fillRect(se-B/2,pe,B,3),H.fillStyle=dt(Ye.danger),H.fillRect(se-B/2,pe,B*W.hp/W.maxHp,3)}q.view.tex.needsUpdate=!0}function Ae(q,W){const H={aim:W.kind==="gorko"?We.tongueAimTicks:W.kind==="sapo_doble"?yt.telegraphTicks:nn.telegraphTicks,swallow_aim:yt.swallowTelegraphTicks,windup:sn.windupTicks,jump_aim:We.jumpAimTicks,summon:We.summonTicks,volley:We.volleyAimTicks}[W.fsm];if(!H)return;const{ctx:re,size:se}=q.view,B=se/2,pe=se*.3,_e=1-W.timer/H;re.strokeStyle=Mn(Ye.white,.35+.4*_e),re.lineWidth=2,ft(re,B,B,pe+4*(1-_e),!1,!0),re.fillStyle=Mn(Ye.white,.9),re.fillRect(B-1.5,B-pe-12,3,7),ft(re,B,B-pe-3,1.8,!0)}function Fe(q,W,z,H,re,se){const{ctx:B,size:pe}=q.view,_e=pe/2;if(!H||!H.ready){Xe(B,_e,pe*.28,W,z);return}const C=q.hurtStart>=0?z.tick-q.hurtStart:1/0,_=q.spitStart>=0?z.tick-q.spitStart:1/0;let V,K=q.dirRow;if(C<gs.frames*gs.ticksPerFrame)K=gs.rowOffset+q.dirRow,V=Math.floor(C/gs.ticksPerFrame);else if(_<Rl.frames*Rl.ticksPerFrame)K=gs.rowOffset+q.dirRow,V=Math.floor(_/Rl.ticksPerFrame);else if(W.fsm==="aim"||W.fsm==="swallow_aim"||W.fsm==="windup"){const j=W.fsm==="aim"?re:W.fsm==="windup"?sn.windupTicks:yt.swallowTelegraphTicks,oe=Math.max(1,Math.floor(j/or.frames));V=or.col+Math.min(or.frames-1,Math.floor((j-W.timer)/oe))}else if(W.fsm==="hop"){const j=1-W.timer/sn.hopTicks;V=Pa.col+Math.min(Pa.frames-1,Math.floor(j*Pa.frames))}else if(z.tick-q.lastMoveTick<=Ia){const j=Math.hypot(lt(z).x-W.x,lt(z).y-W.y)<=se,oe=j?Pa:Al,he=j?x1:bp;V=oe.col+Math.floor(q.dist/he)%oe.frames}else V=Ca.col+Math.floor(z.tick/Sp)%Ca.frames;rr(B,H,V,K,_e,_e,pe*.58)}function De(q,W,z){const{ctx:H,size:re}=q.view,se=re/2,B=e.bat;if(!B||!B.ready){H.fillStyle=dt(Ye.spitDark),ft(H,se,se,re*.2,!0);return}const pe=Math.floor(z.tick/5)%6,_e=pe%4,C=Math.floor(pe/4);rr(H,B,_e,C,se,se,re*.62,W.facingX>0);const _=q.hurtStart>=0?z.tick-q.hurtStart:1/0;_<8&&(H.fillStyle=`rgba(255,255,255,${.5*(1-_/8)})`,ft(H,se,se,re*.2,!0))}function mt(q,W,z){const{ctx:H,size:re}=q.view,se=re/2;if(W.fsm==="airborne")return;const B=e.frogPurple;if(!B||!B.ready){H.fillStyle="#8a4a9a",ft(H,se,se,re*.28,!0);return}if(W.fsm==="belly"){const _=.35+.2*Math.abs(Math.sin(z.tick*.2)),V=H.createRadialGradient(se,se,4,se,se,re*.34);V.addColorStop(0,`rgba(246,215,138,${_})`),V.addColorStop(1,"rgba(246,215,138,0)"),H.fillStyle=V,ft(H,se,se,re*.34,!0)}const pe=q.hurtStart>=0?z.tick-q.hurtStart:1/0;let _e,C=q.dirRow;if(W.fsm==="belly")C=gs.rowOffset+q.dirRow,_e=2;else if(pe<6)C=gs.rowOffset+q.dirRow,_e=0;else if(W.fsm==="aim"||W.fsm==="jump_aim"||W.fsm==="summon"||W.fsm==="volley"){const V={aim:We.tongueAimTicks,jump_aim:We.jumpAimTicks,summon:We.summonTicks,volley:We.volleyAimTicks}[W.fsm],K=Math.max(1,Math.floor(V/or.frames));_e=or.col+Math.min(or.frames-1,Math.floor((V-W.timer)/K))}else z.tick-q.lastMoveTick<=Ia?_e=Al.col+Math.floor(q.dist/bp)%Al.frames:_e=Ca.col+Math.floor(z.tick/Sp)%Ca.frames;rr(H,B,_e,C,se,se,re*.6)}function je(q,W,z){const{ctx:H,size:re}=q.view,se=re/2,B=v1(W.facingX,W.facingY),pe=q.hurtStart>=0?z.tick-q.hurtStart:1/0;let _e=e.babosaIdle,C=0;e.babosaHurt?.ready&&pe<5*3?(_e=e.babosaHurt,C=Math.floor(pe/3)):e.babosaWalk?.ready&&z.tick-q.lastMoveTick<=Ia?(_e=e.babosaWalk,C=Math.floor(q.dist/.14)%8):e.babosaIdle?.ready&&(C=Math.floor(z.tick/16)%6),_e&&_e.ready?rr(H,_e,C,B,se,se,re*.72):(H.fillStyle="#7a5b3a",ft(H,se,se,re*.26,!0));const _=Math.atan2(W.facingY,W.facingX);H.strokeStyle="rgba(205,218,228,0.9)",H.lineWidth=3.5,H.beginPath(),H.arc(se,se,re*.28,_-1.15,_+1.15),H.stroke()}function Xe(q,W,z,H,re){q.fillStyle=dt(Ye.toad),q.strokeStyle=dt(Ye.toadOutline),q.lineWidth=2,Fn(q,W,W,z,z*.85,!0,!0),q.fillStyle=dt(Ye.toadBelly),Fn(q,W,W+z*.35,z*.65,z*.4,!0,!1);const se=lt(re).x-H.x,B=lt(re).y-H.y,pe=Math.hypot(se,B)||1,_e=se/pe*1.2,C=B/pe*1.2;q.fillStyle=dt(Ye.eyeWhite),ft(q,W-z*.45,W-z*.7,4,!0),ft(q,W+z*.45,W-z*.7,4,!0),q.fillStyle=dt(Ye.eyeDark),ft(q,W-z*.45+_e,W-z*.7+C,2,!0),ft(q,W+z*.45+_e,W-z*.7+C,2,!0)}function Se(q){for(let W=0;W<v.length;W++){const z=v[W],H=q.shots[W];if(!H){z.sprite.visible=z.trail.visible=z.shadow.visible=!1;continue}z.sprite.visible=z.shadow.visible=!0,z.sprite.material.map=H.owner==="player"?s:H.tags.includes("lengua")?o:r;const re=.5*(H.radius/gr);if(z.sprite.scale.set(re,re,1),z.sprite.position.set(H.x,.38,H.y),z.shadow.position.set(H.x,z.shadow.position.y,H.y),z.trail.visible=H.owner==="player",z.trail.visible){const se=Math.hypot(H.vx,H.vy)||1;z.trail.position.set(H.x-H.vx/se*.28,.38,H.y-H.vy/se*.28)}}}function Ce(q){for(let W=0;W<m.length;W++){const z=m[W],H=q.puddles[W];if(!H){z.visible=!1;continue}z.visible=!0,z.position.x=H.x,z.position.z=H.y,z.material.opacity=Math.min(.5,H.ttl/400)}}return{update:G}}function Cl(n,e){const[t,i]=Jt(e,e),s=jt(t),r=new dr(new bs({map:s,depthWrite:!1,transparent:!0}));return r.scale.set(e/Lu,e/Lu,1),r.renderOrder=3,n.add(r),{sprite:r,ctx:i,tex:s,size:e}}function ar(n,e,t,i){const s=new kt(new is(t,i),new Rn({map:e,transparent:!0,depthWrite:!1,opacity:.4}));return s.rotation.x=-Math.PI/2,s.position.y=.02,s.renderOrder=2,n.add(s),s}function w1(){const[n,e]=Jt(32,32),t=e.createRadialGradient(16,16,2,16,16,15);t.addColorStop(0,"rgba(0,0,0,0.85)"),t.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=t,e.fillRect(0,0,32,32);const i=jt(n);return i.magFilter=Lt,i.minFilter=Lt,i}function A1(){const[n,e]=Jt(32,20);return e.fillStyle=dt(Ye.outline),Fn(e,16,10,15,8,!0,!1),e.fillStyle=Mn(Ye.body,.6),Fn(e,16,10,9,4.5,!0,!1),e.fillStyle=Mn(Ye.shine,.35),Fn(e,13,8,3.5,1.6,!0,!1),jt(n)}function R1(){const[n,e]=Jt(16,16);return e.fillStyle=dt(Ye.body),ft(e,8,8,6,!0),e.fillStyle=dt(Ye.core),ft(e,7,7,2.5,!0),jt(n)}function C1(){const[n,e]=Jt(16,16);return e.fillStyle=dt(Ye.spit),ft(e,8,8,5,!0),e.fillStyle=dt(Ye.spitDark),ft(e,9,9,1.8,!0),jt(n)}function P1(){const[n,e]=Jt(64,64),t=e.createRadialGradient(32,32,4,32,32,30);t.addColorStop(0,"rgba(0,0,0,0.9)"),t.addColorStop(.75,"rgba(0,0,0,0.75)"),t.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=t,e.fillRect(0,0,64,64),e.strokeStyle="rgba(226,75,74,0.9)",e.lineWidth=2.5,e.beginPath(),e.arc(32,32,27,0,Math.PI*2),e.stroke();const i=jt(n);return i.magFilter=Lt,i.minFilter=Lt,i}function I1(){const[n,e]=Jt(16,16);return e.fillStyle="#e07a9a",ft(e,8,8,6.5,!0),e.fillStyle="#b04a6a",ft(e,9,9,2.4,!0),e.strokeStyle="#7a2a44",e.lineWidth=1.2,ft(e,8,8,6.5,!1,!0),jt(n)}function Pl(n){const[e,t]=Jt(16,16),i=8,s=8;return t.fillStyle=dt(Ye.core),t.beginPath(),t.moveTo(i,s-n),t.lineTo(i+n*.7,s),t.lineTo(i,s+n),t.lineTo(i-n*.7,s),t.closePath(),t.fill(),t.strokeStyle=dt(Ye.shine),t.lineWidth=1.4,t.stroke(),t.fillStyle="rgba(255,255,255,0.85)",ft(t,i-1.5,s-2,1.1,!0),jt(e)}function L1(){const[n,e]=Jt(16,16);return e.fillStyle=dt(Ye.danger),e.beginPath(),e.moveTo(8,14),e.bezierCurveTo(2,9,2,4,5.5,3.5),e.bezierCurveTo(7,3.2,8,4.5,8,5.5),e.bezierCurveTo(8,4.5,9,3.2,10.5,3.5),e.bezierCurveTo(14,4,14,9,8,14),e.fill(),e.fillStyle="rgba(255,255,255,0.6)",ft(e,5.5,5.5,1.2,!0),jt(n)}function D1(){const[n,e]=Jt(16,16);return e.strokeStyle="#f2c14e",e.lineWidth=2,ft(e,5.5,5.5,3,!1,!0),e.beginPath(),e.moveTo(7.5,7.5),e.lineTo(12.5,12.5),e.moveTo(10.5,10.5),e.lineTo(12,9),e.moveTo(12.5,12.5),e.lineTo(14,11),e.stroke(),jt(n)}function N1(){const[n,e]=Jt(16,16),t=e.createRadialGradient(8,8,1,8,8,7);return t.addColorStop(0,Mn(Ye.shine,.9)),t.addColorStop(1,"rgba(143,212,245,0)"),e.fillStyle=t,e.fillRect(0,0,16,16),jt(n)}function Fn(n,e,t,i,s,r,o){n.beginPath(),n.ellipse(e,t,i,s,0,0,Math.PI*2),n.fill(),o&&n.stroke()}function ft(n,e,t,i,s,r=!1){n.beginPath(),n.arc(e,t,Math.max(.1,i),0,Math.PI*2),s&&n.fill(),r&&n.stroke()}function Mn(n,e){const t=n>>16&255,i=n>>8&255,s=n&255;return`rgba(${t},${i},${s},${e})`}function k1(n,e,t,i,s){const r=document.createElement("div");r.className="screens",n.appendChild(r);const o=document.createElement("button");o.className="menu-toggle",o.textContent="⚙",o.addEventListener("pointerdown",F=>{F.stopPropagation(),u?P():r.childElementCount===0&&N()}),n.appendChild(o);let a=!1,c=!1,l=!1,u=!1,d=!1,f=!1,h=!1,p=0,v=null,m=null,g=null,S=null;function T(){a=!0,e.paused=!0,document.body.classList.add("at-title");const F=t.data.expedicion,G=F?`<button class="title-continue">▶ Continuar expedición — nivel ${F.nivel} de ${Ji}</button>`:"";r.innerHTML=`
      <div class="screen screen-title">
        <div class="title-name">KAI</div>
        <div class="title-sub">un slime contra El Pozo</div>
        ${G}
        <div class="title-row">
          <input class="title-seed" type="text" inputmode="numeric" placeholder="seed (opcional)" />
          <button class="title-play">${F?"Nueva expedición":"Entrar al Pozo"}</button>
        </div>
        <div class="title-row title-coop">
          <button class="coop-create">🤝 Co-op: crear sala</button>
          <input class="coop-code" type="text" placeholder="código" maxlength="4" autocapitalize="characters" />
          <button class="coop-join">Unirse</button>
        </div>
        <div class="title-hint">WASD mover · ratón apuntar · clic disparar · espacio usable · shift dash</div>
        <div class="title-version">sim v${i} · desbloqueos ${t.data.desbloqueos.length}</div>
      </div>`,r.querySelector(".title-play").addEventListener("click",()=>{const U=r.querySelector(".title-seed").value.trim(),$=U?Number(U)>>>0:Math.floor(Math.random()*4294967295)>>>0;x($)}),r.querySelector(".coop-create").addEventListener("click",()=>{M(wA(),!0)}),r.querySelector(".coop-join").addEventListener("click",()=>{const U=r.querySelector(".coop-code").value.trim().toUpperCase();U.length>=3&&M(U,!1)}),r.querySelector(".title-continue")?.addEventListener("click",()=>{const U=t.data.expedicion;U&&(e.reset(U.seed,{...Va(t),resume:{...U}}),v=null,p=0,h=!1,b(),e.paused=!1)})}function x(F){e.reset(F,Va(t)),v=null,p=0,h=!1,b(),e.paused=!1}function M(F,G){y(),g=EA(F,G),g.onStart(U=>L(U)),g.onRestart(U=>{S&&L({...S,seed:U})}),E(),g.onPeersChanged(()=>{r.querySelector(".screen-lobby")&&E()})}function E(){if(!g)return;a=!1,e.paused=!0,document.body.classList.add("at-title");const F=g.peerCount(),G=F+1;r.innerHTML=`
      <div class="screen screen-lobby">
        <div class="lobby-title">SALA CO-OP</div>
        <div class="lobby-code">código: <b>${g.code}</b></div>
        <div class="lobby-sub">compártelo — se juega de 2 a 6</div>
        <div class="lobby-peers">${G} jugador${G===1?"":"es"} en la sala</div>
        ${g.isHost?`<button class="lobby-start" ${F===0?"disabled":""}>Empezar (${G})</button>`:'<div class="lobby-wait">esperando a que el anfitrión empiece…</div>'}
        <button class="lobby-cancel">Cancelar</button>
      </div>`,r.querySelector(".lobby-start")?.addEventListener("click",()=>{const U=Va(t);g.start(Math.floor(Math.random()*4294967295)>>>0,U.usableSlots??1,U.unlockedItems??[])}),r.querySelector(".lobby-cancel").addEventListener("click",()=>{y(),T()})}function L(F){if(!g)return;S=F;const G=g.driver(F.order);e.net=G,dp(G.localIndex),e.reset(F.seed,{usableSlots:F.usableSlots,unlockedItems:F.unlockedItems,resume:null,players:F.order.length}),v=null,p=0,h=!1,b(),e.paused=!1}function y(){g&&(g.leave(),g=null,S=null,e.net=null,dp(0))}window.addEventListener("kai-desync",()=>{const F=document.createElement("div");F.className="desync-warn",F.textContent="⚠ desincronización detectada — reinicien la sala",n.appendChild(F),window.setTimeout(()=>F.remove(),8e3)});function b(){a=!1,c=!1,l=!1,u=!1,document.body.classList.remove("at-title"),r.innerHTML=""}function N(){u=!0,d=e.paused,e.paused=!0;const F=s.prefs(),G=()=>document.fullscreenElement?"Salir de pantalla completa":"Pantalla completa";r.innerHTML=`
      <div class="screen screen-menu">
        <div class="menu-title">AJUSTES</div>
        <div class="menu-panel">
          <label class="menu-row">
            <span>Música</span>
            <input class="menu-music" type="range" min="0" max="100" value="${Math.round(F.musicVol*100)}" />
          </label>
          <label class="menu-row">
            <span>Efectos</span>
            <input class="menu-sfx" type="range" min="0" max="100" value="${Math.round(F.sfxVol*100)}" />
          </label>
          <button class="menu-mute">${F.muted?"🔇 Sonido: apagado":"🔊 Sonido: encendido"}</button>
          <button class="menu-fullscreen">${G()}</button>
        </div>
        <div class="refuge-actions">
          <button class="menu-resume">Seguir jugando</button>
          <button class="menu-exit">Salir al título</button>
        </div>
        <div class="menu-hint">ESC para cerrar</div>
      </div>`,r.querySelector(".menu-music").addEventListener("input",we=>{s.setMusicVol(Number(we.target.value)/100)});const U=r.querySelector(".menu-sfx");U.addEventListener("input",()=>{s.setSfxVol(Number(U.value)/100)}),U.addEventListener("change",()=>s.previewSfx());const $=r.querySelector(".menu-mute");$.addEventListener("click",()=>{const we=!s.prefs().muted;s.setMuted(we),$.textContent=we?"🔇 Sonido: apagado":"🔊 Sonido: encendido"});const ue=r.querySelector(".menu-fullscreen");ue.addEventListener("click",()=>{document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen(),window.setTimeout(()=>{ue.textContent=G()},120)}),r.querySelector(".menu-resume").addEventListener("click",P),r.querySelector(".menu-exit").addEventListener("click",()=>{y(),h=!0,T()})}function P(){const F=d;b(),e.paused=F}window.addEventListener("keydown",F=>{F.code==="Escape"&&(u?P():r.childElementCount===0&&N())});function D(F){F.config.players>1||t.saveExpedition({seed:F.seed,nivel:F.floor.level,items:[...F.player.items],usable:F.player.usable?.itemId??null,usable2:F.player.usable2?.itemId??null,halfHearts:F.player.halfHearts,crystals:F.player.crystals,keys:F.player.keys})}function Y(F){e.paused=!0;const G=F.floor.level,U=Array.from({length:Ji},($,ue)=>`<div class="level-seg ${ue<G-1?"done":ue===G-1?"current":""}"></div>`).join("");r.innerHTML=`
      <div class="screen screen-level">
        <div class="level-name">EL POZO</div>
        <div class="level-sub">nivel ${G} de ${Ji}</div>
        <div class="level-bar">${U}</div>
        <div class="level-saved">expedición guardada</div>
        <div class="refuge-actions">
          <button class="level-go">Seguir bajando</button>
          <button class="level-exit">Salir al título</button>
        </div>
      </div>`,r.querySelector(".level-go").addEventListener("click",()=>{b(),e.paused=!1}),r.querySelector(".level-exit").addEventListener("click",()=>{y(),h=!0,T()})}function R(F){if(F==="slot_usable_2")return{iconHtml:'<span class="roulette-emoji">🎒</span>',nombre:"2º slot de usable",desc:"Un hueco más en el cinturón: lleva DOS usables a la vez (tecla Q).",rareza:"legendaria"};if(F==="cristales")return{iconHtml:'<span class="roulette-emoji">💎</span>',nombre:"Cristales",desc:"Ya lo has desbloqueado todo — el Nido te paga en cristales.",rareza:"comun"};const G=_n(F);return{iconHtml:`<img src="${xo(F)}" alt="" />`,nombre:G.nombre,desc:G.descripcion,rareza:G.rareza}}function A(F,G){const U=[...as.values()].filter(we=>we.id!==F),$=Nu,ue=[];for(;ue.length<G&&U.length>0;){const we=U.reduce((le,fe)=>le+($[fe.rareza]??1),0);let Le=Math.random()*we,ne=U.length-1;for(let le=0;le<U.length;le++)if(Le-=$[U[le].rareza]??1,Le<=0){ne=le;break}ue.push(R(U[ne].id)),U.splice(ne,1)}return ue}function k(F){if(!F.chest)return;l=!0,e.paused=!0;const G=R(F.chest.reward),U=A(F.chest.reward,4),$=Math.floor(Math.random()*5);U.splice($,0,G),r.innerHTML=`
      <div class="screen screen-roulette">
        <div class="roulette-title">📦 COFRE DEL NIDO</div>
        <div class="roulette-row">
          ${U.map(Ae=>`<div class="roulette-cell">${Ae.iconHtml}</div>`).join("")}
        </div>
        <div class="roulette-result">
          <div class="roulette-name rareza-${G.rareza}">${G.nombre}</div>
          <div class="roulette-desc">${G.desc}</div>
          ${F.chest.reward==="cristales"?"":'<div class="roulette-forever">objeto desbloqueado</div>'}
          <button class="roulette-go">Continuar</button>
        </div>
      </div>`;const ue=[...r.querySelectorAll(".roulette-cell")],we=r.querySelector(".roulette-result");we.style.visibility="hidden",r.querySelector(".roulette-go").addEventListener("click",()=>{b(),e.paused=!1});const ne=20+$+5*Math.floor(Math.random()*2);let le=0;const fe=()=>{if(l){if(ue.forEach((Ae,Fe)=>Ae.classList.toggle("lit",Fe===le%5)),le++,le<=ne){const Ae=le/ne;window.setTimeout(fe,55+620*Ae*Ae*Ae);return}window.setTimeout(()=>{l&&(ue[$].classList.add("win"),we.style.visibility="")},420)}};fe()}function I(F){return F==="slot_usable_2"?"2º slot de usable (tecla Q)":F==="cristales"?null:_n(F).nombre}function O(F){c=!0;const G=F.status==="victory";let U="";if(F.chest?.opened){const we=I(F.chest.reward);U=we?`<div class="refuge-chest">📦 <b>${we}</b><div class="refuge-desc">objeto desbloqueado</div></div>`:'<div class="refuge-chest">📦 Cofre del Nido: cristales</div>'}else G&&(U='<div class="refuge-chest refuge-chest-missed">El cofre del Nido se quedó sin abrir…</div>');const $=g!==null&&F.config.players>1,ue=$?g.isHost?`<button class="refuge-again">Nueva run (para todos)</button>
           <button class="refuge-exit">Salir al título</button>`:`<div class="lobby-wait">el anfitrión decide la próxima run…</div>
           <button class="refuge-exit">Salir al título</button>`:`<button class="refuge-again">Nueva run</button>
         <button class="refuge-same">Repetir seed ${F.seed}</button>`;r.innerHTML=`
      <div class="screen screen-refuge">
        <div class="refuge-title">${G?"El refugio celebra tu victoria":"El refugio te recoge"}</div>
        ${U}
        <div class="refuge-actions">${ue}</div>
      </div>`,r.querySelector(".refuge-again")?.addEventListener("click",()=>{const we=Math.floor(Math.random()*4294967295)>>>0;$?g.restart(we):x(we)}),r.querySelector(".refuge-same")?.addEventListener("click",()=>{x(F.seed)}),r.querySelector(".refuge-exit")?.addEventListener("click",()=>{y(),h=!0,T()})}return T(),{update(F){if(a&&!h&&(F.tick>0||!e.paused)&&b(),F.status==="playing"&&F.floor.level!==p){const $=p;p=F.floor.level,D(F),$>=1&&F.floor.level>$&&Y(F)}const G=!!F.chest?.opened;G&&!f&&F.tick>0&&k(F),f=G;const U=F.status==="dead"||F.status==="victory";if(U&&v!==e.sim){if(v=e.sim,t.saveExpedition(null),F.chest?.opened&&F.chest.reward!=="cristales"){const $=F.chest.reward;t.unlock($==="slot_usable_2"?$:`item_${$}`)}m!==null&&clearTimeout(m),m=window.setTimeout(()=>{e.sim===v&&!c&&O(F)},2400)}!U&&c&&b()}}}const ro=12,Ep=42,wp=6;function U1(){const n=new URLSearchParams(location.search).get("touch");return n==="1"?!0:n==="0"?!1:window.matchMedia("(pointer: coarse) and (hover: none)").matches}function O1(n,e){const t=e.live,i=document.createElement("div");if(i.className="touch",i.innerHTML=`
    <div class="touch-zone touch-zone-left"></div>
    <div class="touch-zone touch-zone-right"></div>
    <div class="touch-stick touch-stick-move"><div class="touch-knob"></div></div>
    <div class="touch-stick touch-stick-aim"><div class="touch-knob"></div></div>
    <div class="touch-buttons">
      <button class="touch-btn touch-btn-dash">⚡<small>dash</small></button>
      <button class="touch-btn touch-btn-use">◇<small>objeto</small></button>
      <button class="touch-btn touch-btn-use2" hidden>◆<small>obj. 2</small></button>
      <button class="touch-btn touch-btn-buy" hidden>€<small>comprar</small></button>
    </div>`,n.appendChild(i),!localStorage.getItem("kai_touch_help_v1")){const x=document.createElement("div");x.className="touch-help",x.innerHTML=`
      <div class="touch-help-card">
        <div class="touch-help-title">Controles</div>
        <div>🕹️ <b>Pulgar izquierdo</b> — mover a Kai</div>
        <div>🎯 <b>Pulgar derecho</b> — apuntar (dispara solo mientras apuntas)</div>
        <div>⚡ <b>dash</b> — esquiva con invulnerabilidad</div>
        <div>◇ <b>objeto</b> — usa tu objeto activo</div>
        <div>€ <b>comprar</b> — aparece al acercarte a la tienda</div>
        <div class="touch-help-go">toca para jugar</div>
      </div>`,i.appendChild(x),x.addEventListener("pointerdown",M=>{M.stopPropagation(),localStorage.setItem("kai_touch_help_v1","1"),x.remove()})}const s=i.querySelector(".touch-zone-left"),r=i.querySelector(".touch-zone-right"),o=i.querySelector(".touch-stick-move"),a=i.querySelector(".touch-stick-aim"),c=o.querySelector(".touch-knob"),l=a.querySelector(".touch-knob"),u=i.querySelector(".touch-btn-use2"),d=i.querySelector(".touch-btn-buy");let f=null,h=null,p=null;function v(x,M,E){const L=Math.hypot(M,E),y=L>Ep?Ep/L:1;x.style.transform=`translate(${M*y}px, ${E*y}px)`}function m(x,M){t.left=x<-ro,t.right=x>ro,t.up=M<-ro,t.down=M>ro}function g(x,M){const E=Math.hypot(x,M);E>ro?(f={x:x/E,y:M/E},t.fire=!0):t.fire=!1}function S(x,M,E,L,y,b,N){x.addEventListener("pointerdown",D=>{if(L())return;const Y=M.getBoundingClientRect(),R={pointerId:D.pointerId,baseX:Y.left+Y.width/2,baseY:Y.top+Y.height/2};y(R);try{x.setPointerCapture(D.pointerId)}catch{}M.classList.add("active");const A=D.clientX-R.baseX,k=D.clientY-R.baseY;v(E,A,k),b(A,k),D.preventDefault()}),x.addEventListener("pointermove",D=>{const Y=L();if(!Y||D.pointerId!==Y.pointerId)return;const R=D.clientX-Y.baseX,A=D.clientY-Y.baseY;v(E,R,A),b(R,A),D.preventDefault()});const P=D=>{const Y=L();!Y||D.pointerId!==Y.pointerId||(y(null),M.classList.remove("active"),v(E,0,0),N())};x.addEventListener("pointerup",P),x.addEventListener("pointercancel",P)}S(s,o,c,()=>h,x=>h=x,m,()=>{t.left=t.right=t.up=t.down=!1}),S(r,a,l,()=>p,x=>p=x,g,()=>{f=null,t.fire=!1});const T=(x,M)=>{const E=i.querySelector(x);E.addEventListener("pointerdown",L=>{M(!0),L.preventDefault(),L.stopPropagation()});for(const L of["pointerup","pointercancel","pointerleave"])E.addEventListener(L,()=>M(!1))};return T(".touch-btn-dash",x=>t.dash=x),T(".touch-btn-use",x=>t.use=x),T(".touch-btn-use2",x=>t.use2=x),T(".touch-btn-buy",x=>t.interact=x),{update(x){f&&(t.aimX=lt(x).x+f.x*wp,t.aimY=lt(x).y+f.y*wp),u.hidden=!lt(x).usable2;const M=x.pickups.some(E=>E.price&&Math.hypot(E.x-lt(x).x,E.y-lt(x).y)<1.6);d.hidden=!M}}}function F1(n,e){let t=0,i=1,s=0,r=0;const o=340,a={x:0,z:0};function c(l,u){(u>=s||t<=0)&&(t=l,i=l,s=u)}return{onEvents(l){for(const u of l)switch(u.type){case"damage_taken":c(140,.14),n.freeze(3);break;case"enemy_killed":c(90,.08),n.freeze(2);break;case"enemy_hit":c(40,.03);break;case"player_died":c(260,.2);break;case"room_changed":{const d={n:[0,1],s:[0,-1],e:[-1,0],w:[1,0]}[u.dir];a.x=d[0],a.z=d[1],r=o;break}case"level_started":n.freeze(6);break}},update(l,u){if(u.position.copy(e.cameraHome),r>0){r=Math.max(0,r-l);const d=r/o,f=d*d*(3-2*d);u.position.x+=a.x*6*f,u.position.z+=a.z*6*f}if(t>0){t-=l;const d=Math.max(0,t/i),f=s*d;u.position.x+=(Math.random()*2-1)*f,u.position.y+=(Math.random()*2-1)*f*.6,u.position.z+=(Math.random()*2-1)*f*.4,t<=0&&(s=0)}}}}const Ap={dano:"daño",cadencia:"caudal",alcance:"alcance",velProyectil:"presión",velMovimiento:"velocidad",suerte:"suerte",corazones:"vida",proyectiles:"chorro(s)",armaduraPorSala:"armadura/sala"},Rp={empuje:"más empuje al impactar",rastro_charcos:"deja un rastro de charquitos",dash:"dash con i-frames (Shift)",divide:"los disparos se dividen al impactar",burbuja:"disparos flotantes que persiguen",ver_cofres:"ves el contenido de los cofres"},B1={critico:"crítico ×2",dividir_en_3:"dividirse en 3",burbuja_gigante:"burbuja gigante"},z1={multidisparo:"+2 chorros",prisa:"sprint ×1.5",escudo:"bloquea TODO el daño"},H1={comun:"común",rara:"rara",legendaria:"legendaria"};function Bg(n,e){const t=[];for(const i of n.tags)Rp[i]&&t.push(Rp[i]);for(const i of n.procs){const s=Math.round(Fm(i,e)*100);t.push(`${B1[i.efecto]??i.efecto}: ${s}% (con tu suerte)`)}if(n.usable){const i=Math.round(n.usable.duracionTicks/ss),s=Math.round(n.usable.recargaTicks/ss),r=z1[n.usable.efecto]??n.usable.efecto;t.push(`usable: ${r} durante ${i} s, recarga ${s} s`)}return t}function V1(n,e){const t=[];for(const[i,s]of Object.entries(n.stats))t.push(`${s>0?"+":""}${s} ${Ap[i]??i}`);for(const[i,s]of Object.entries(n.mults))t.push(`×${s} ${Ap[i]??i}`);return t.push(...Bg(n,e)),t}function Si(n){return Number.isInteger(n)?String(n):n.toFixed(1)}function Cp(n,e){const t=[],i=(s,r,o,a=1)=>{const c=(o-r)*a;Math.abs(c)>1e-9&&t.push(`${c>0?"+":"−"}${Si(Math.abs(c))} ${s}`)};return i("daño",n.damage,e.damage),i("caudal",n.fireRate,e.fireRate),i("alcance",n.range,e.range),i("presión",n.shotSpeed,e.shotSpeed),i("velocidad",n.moveSpeed,e.moveSpeed),i("suerte",n.luck,e.luck),i("chorro(s)",n.projectiles,e.projectiles),i("vida",n.maxHalfHearts,e.maxHalfHearts,.5),i("armadura/sala",n.armorPerRoom,e.armorPerRoom),t}const Pp="M10 17 C4.5 12.5 1 9 1 5.6 A4.4 4.4 0 0 1 10 4 A4.4 4.4 0 0 1 19 5.6 C19 9 15.5 12.5 10 17 Z";function G1(n,e,t){const i=document.createElement("div");i.className="hud",i.innerHTML=`
    <div class="hud-vignette"></div>
    <div class="hud-hearts"></div>
    <div class="hud-toasts"></div>
    <div class="hud-items"></div>
    <div class="hud-stats"></div>
    <div class="hud-minimap"></div>
    <div class="hud-near" hidden></div>
    <div class="hud-wallet"></div>
    <div class="hud-boss" hidden></div>
    <div class="hud-usable" hidden>
      <img class="hud-usable-icon" alt="" />
      <div class="hud-usable-cd"></div>
    </div>
    <div class="hud-usable hud-usable-b" hidden>
      <img class="hud-usable-icon" alt="" />
      <div class="hud-usable-cd"></div>
    </div>
    <div class="hud-center">
      <div class="hud-center-box">
        <div class="hud-msg"></div>
        <div class="hud-sub"></div>
      </div>
    </div>
    <div class="hud-seed"></div>
  `,n.appendChild(i);const s=i.querySelector(".hud-hearts"),r=i.querySelector(".hud-toasts"),o=i.querySelector(".hud-items"),a=i.querySelector(".hud-stats"),c=i.querySelector(".hud-near"),l=i.querySelector(".hud-minimap"),u=i.querySelector(".hud-wallet"),d=i.querySelector(".hud-boss"),f=[...i.querySelectorAll(".hud-usable")],h=[...i.querySelectorAll(".hud-usable-icon")],p=[...i.querySelectorAll(".hud-usable-cd")],v=i.querySelector(".hud-center"),m=i.querySelector(".hud-msg"),g=i.querySelector(".hud-sub"),S=i.querySelector(".hud-seed");let T=-1,x=-1,M=-1,E="",L=-1;const y=["",""],b=[-1,-1];let N="",P="",D="",Y="",R="",A="",k=null,I=!0;window.addEventListener("keydown",G=>{G.code==="Tab"&&(G.preventDefault(),I=!I,a.hidden=!I)});function O(G,U){const $=document.createElement("div");for($.className="hud-toast"+(U==="delta"?" hud-toast-delta":""),$.textContent=G,r.appendChild($);r.children.length>6;)r.firstChild?.remove();setTimeout(()=>$.remove(),2600)}function F(G,U="#e24b4a",$="#f6a5a4"){const ue=`<path d="${Pp}" fill="rgba(0,0,0,0.45)" stroke="rgba(0,0,0,0.6)" stroke-width="1"/>`,we=G===1?' style="clip-path: inset(0 50% 0 0)"':"",Le=G>0?`<path d="${Pp}" fill="${U}"${we}/><path d="M6 6.2 A2.4 2.4 0 0 1 9 4.8" stroke="${$}" stroke-width="1.4" fill="none"${we}/>`:"";return`<svg viewBox="0 0 20 18" class="hud-heart">${ue}${Le}</svg>`}return{update(G){const U=lt(G).halfHearts,$=lt(G).maxHalfHearts,ue=lt(G).armor;if(U!==T||$!==x||ue!==M){T=U,x=$,M=ue;const Se=Math.ceil($/2);let Ce="";for(let q=0;q<Se;q++)Ce+=F(Math.min(2,Math.max(0,U-q*2)));for(let q=0;q<Math.ceil(ue/2);q++)Ce+=F(Math.min(2,Math.max(0,ue-q*2)),"#9fb8c8","#dfeef7");s.innerHTML=Ce}if([lt(G).usable,lt(G).usable2].forEach((Se,Ce)=>{const q=Se?.itemId??"";if(q!==y[Ce]&&(y[Ce]=q,f[Ce].hidden=!Se,Se&&(h[Ce].src=xo(Se.itemId))),Se){const W=Math.ceil(Se.cooldown/ss);W!==b[Ce]&&(b[Ce]=W,p[Ce].textContent=W>0?String(W):""),f[Ce].classList.toggle("ready",Se.cooldown===0),f[Ce].classList.toggle("active",Se.activeTicks>0)}}),G.status!==E)if(E=G.status,v.classList.toggle("has-msg",G.status!=="playing"),G.status==="victory"){const Se=t(),Ce=Se.filter(se=>se.type==="enemy_killed").length,q=Se.filter(se=>se.type==="damage_taken").length,W=Se.filter(se=>se.type==="heart_collected").length,z=Se.filter(se=>se.type==="item_bought").length,H=Math.floor(G.tick/3600),re=Math.floor(G.tick%3600/60);m.textContent="¡El Pozo superado!",g.innerHTML=`<div class="hud-run-summary"><div>tiempo <b>${H}:${String(re).padStart(2,"0")}</b></div><div>abatidos <b>${Ce}</b> · golpes recibidos <b>${q}</b></div><div>items <b>${lt(G).items.length}</b> · compras <b>${z}</b> · corazones <b>${W}</b></div><div>cristales <b class="hud-wallet-crystal">◆ ${lt(G).crystals}</b></div><div style="margin-top:6px">R para otra run</div></div>`}else G.status==="dead"?(m.textContent="Kai se derritió…",g.textContent="R para reintentar"):(m.textContent="",g.textContent="");const we=lt(G).items.join(",");if(we!==N){const Se=lt(G).items.length>N.split(",").filter(Boolean).length;if(N=we,o.innerHTML=lt(G).items.map(Ce=>{const q=_n(Ce),W=`<b>${q.nombre}</b>`+V1(q,G.stats.luck).map(z=>`<div>· ${z}</div>`).join("");return`<div class="hud-item"><img src="${xo(Ce)}" alt="${q.nombre}" /><div class="hud-item-tip">${W}</div></div>`}).join(""),Se&&k){const Ce=_n(lt(G).items[lt(G).items.length-1]).nombre;O(Ce);for(const q of Cp(k,G.stats))O(q,"delta")}}k={...G.stats};const Le=G.stats,ne=[Le.maxHalfHearts,Le.damage,Le.fireRate,Le.range,Le.shotSpeed,Le.moveSpeed,Le.luck,Le.projectiles].join("|");if(ne!==P){P=ne;const Se=[["❤️","Vida",Si(Le.maxHalfHearts/2),"corazones máximos"],["⚔️","Daño",Si(Le.damage),"daño por proyectil"],["💧","Caudal",`${Si(Le.fireRate)}/s`,"disparos por segundo (cadencia)"],["🏹","Alcance",Si(Le.range),"tiles antes de caer en charco"],["💨","Presión",Si(Le.shotSpeed),"velocidad del proyectil"],["👢","Velocidad",Si(Le.moveSpeed),"velocidad de movimiento"],["🍀","Suerte",Si(Le.luck),"escala los procs y la calidad de drops"],["🔱","Chorros",Si(Le.projectiles),"proyectiles por disparo"]];a.innerHTML='<div class="hud-stats-title">stats · Tab</div>'+Se.map(([Ce,q,W,z])=>`<div class="hud-stats-row" title="${z}"><span class="hud-stats-icon">${Ce}</span><span class="hud-stats-name">${q}</span><span class="hud-stats-value">${W}</span></div>`).join("")}let le=null,fe=1.25;for(const Se of G.pickups){const Ce=Math.hypot(Se.x-lt(G).x,Se.y-lt(G).y);Ce<fe&&(fe=Ce,le=Se)}const Ae=le?`${le.id}:${le.itemId}:${le.price?lt(G).crystals>=le.price?"ok":"no":""}`:"";if(Ae!==D&&(D=Ae,c.hidden=!le,le)){const Se=_n(le.itemId),Ce=Bg(Se,G.stats.luck).map(z=>`<div>· ${z}</div>`).join("");let q="";if(Se.categoria!=="usable"){const z=Go([...lt(G).items,le.itemId]),H=Cp(G.stats,z);q=H.length?H.map(re=>`<div class="hud-near-diff">${re}</div>`).join(""):""}const W=le.price?`<div class="hud-near-price ${lt(G).crystals>=le.price?"ok":"no"}">◆ ${le.price} cristales — ${lt(G).crystals>=le.price?"pulsa E para comprar":"no te alcanza"}</div>`:"";c.innerHTML=`<img src="${xo(Se.id)}" alt="" /><div><b>${Se.nombre}</b> <span class="hud-near-rar">${H1[Se.rareza]}</span>${W}${q}${Ce}<i>«${Se.descripcion}»</i></div>`}const Fe=`${lt(G).crystals}:${lt(G).keys}`;Fe!==R&&(R=Fe,u.innerHTML=`<span class="hud-wallet-crystal">◆</span> ${lt(G).crystals}`+(lt(G).keys>0?` &nbsp;<span class="hud-wallet-key">⚷</span> ${lt(G).keys}`:""));const De=G.enemies.some(Se=>Se.kind==="gorko"),mt=`${G.seed}:${G.floor.level}`;De&&A!==mt&&(A=mt,d.hidden=!1,d.innerHTML='<div class="hud-boss-name">GORKO</div><div class="hud-boss-sub">el Sapo Glotón</div>',setTimeout(()=>{d.hidden=!0},2800));const je=`${G.floor.level}:${G.floor.current}:`+G.floor.rooms.map(Se=>(Se.visited?"v":".")+(Se.cleared?"c":".")).join("");if(je!==Y){Y=je;const Se=G.floor.rooms.filter(pe=>pe.visited),Ce=new Set;for(const pe of Se){Ce.add(pe.id);for(const _e of Object.values(pe.doors))_e>=0&&Ce.add(_e)}const q=G.floor.rooms.filter(pe=>Ce.has(pe.id)),W=Math.min(...q.map(pe=>pe.gx)),z=Math.min(...q.map(pe=>pe.gy)),H={treasure:"♦",shop:"$",boss:"☠"},re=19;l.innerHTML=q.map(pe=>{const _e=["hud-map-cell",pe.id===G.floor.current?"current":"",pe.visited?"visited":"known",pe.cleared?"cleared":""].filter(Boolean).join(" "),C=pe.visited||pe.kind!=="boss"?H[pe.kind]??"":H.boss;return`<div class="${_e}" style="left:${(pe.gx-W)*re}px;top:${(pe.gy-z)*re}px">${C}</div>`}).join("");const se=(Math.max(...q.map(pe=>pe.gx))-W+1)*re,B=(Math.max(...q.map(pe=>pe.gy))-z+1)*re;l.style.width=`${se}px`,l.style.height=`${B}px`}const Xe=G.seed*10+G.floor.level;Xe!==L&&(L=Xe,S.textContent=`seed ${G.seed} · nivel ${G.floor.level} · sim v${e}`)},onEvents(G){for(const U of G)if(U.type==="proc_triggered"&&U.efecto==="critico")O("¡Crítico!");else if(U.type==="usable_activated"){const $=as.get(U.itemId);O(`¡${$?.nombre??"Usable"}!`)}else U.type==="item_bought"?O(`Comprado: −${U.price} ◆`,"delta"):U.type==="key_collected"?O("Llave del tesoro","delta"):U.type==="door_unlocked"&&O("El tesoro se abre…","delta")}}}const Ip={KeyW:"up",ArrowUp:"up",KeyS:"down",ArrowDown:"down",KeyA:"left",ArrowLeft:"left",KeyD:"right",ArrowRight:"right"};function W1(n,e,t){const i=n.live,s=new $v,r=new Ee,o=new Gi(new X(0,1,0),0),a=new X;let c=!1,l=!1,u=!1;window.addEventListener("keydown",h=>{const p=Ip[h.code];p?(i[p]=!0,h.preventDefault()):h.code==="Space"?(u=!0,i.use=u||l,h.preventDefault()):h.code==="ShiftLeft"||h.code==="ShiftRight"?i.dash=!0:h.code==="KeyE"?i.interact=!0:h.code==="KeyQ"?i.use2=!0:h.code==="KeyR"&&!h.repeat&&n.reset()}),window.addEventListener("keyup",h=>{const p=Ip[h.code];p&&(i[p]=!1),h.code==="Space"&&(u=!1,i.use=u||l),(h.code==="ShiftLeft"||h.code==="ShiftRight")&&(i.dash=!1),h.code==="KeyE"&&(i.interact=!1),h.code==="KeyQ"&&(i.use2=!1)}),window.addEventListener("blur",()=>{i.up=i.down=i.left=i.right=!1,c=l=u=!1,i.fire=i.dash=i.use=i.interact=!1}),e.addEventListener("contextmenu",h=>h.preventDefault());function d(h){const p=e.getBoundingClientRect();p.width===0||p.height===0||(r.set((h.clientX-p.left)/p.width*2-1,-((h.clientY-p.top)/p.height)*2+1),s.setFromCamera(r,t),s.ray.intersectPlane(o,a)&&(i.aimX=a.x,i.aimY=a.z))}const f=()=>document.body.classList.contains("touch-mode");window.addEventListener("pointermove",h=>{f()||d(h)}),window.addEventListener("pointerdown",h=>{f()||(h.button===0?(c=!0,i.fire=!0,d(h)):h.button===2&&(l=!0,i.use=u||l))}),window.addEventListener("pointerup",h=>{f()||(h.button===0?(c=!1,i.fire=c):h.button===2&&(l=!1,i.use=u||l))})}const X1=[[3.5,1],[$e-3.5,1]],Il=1;function q1(n){n.add(new Lv(16767398,.7));const e=new Am(9414856,.22);e.position.set($e/2,6,qe+8),e.target.position.set($e/2,0,qe/2),n.add(e,e.target);const t=X1.map(([s,r])=>{const o=new Ru(Ye.torch,12,11,2);o.position.set(s,Il,r+.35),n.add(o);const a=new dr(new bs({map:Y1(),blending:Dl,depthWrite:!1}));return a.position.set(s,Il+.08,r+.18),a.scale.set(.32,.5,1),n.add(a),{light:o,flame:a,baseY:Il}}),i=new Ru(Ye.shine,3.2,5,2);return i.position.set(3.5,.7,qe/2),n.add(i),{update(s){const r=.8+.2*Math.sin(s.tick*.31)*Math.sin(s.tick*.13);for(const a of t)a.light.intensity=12*r,a.flame.scale.set(.32,.5*(.85+.3*r),1),a.flame.position.y=a.baseY+.08+.02*r;const o=lt(s);if(i.position.set(o.x,.7,o.y),s.status==="dead"){const a=s.tick-o.deathTick;i.intensity=Math.floor(a/14)%2===0?1.8:.6}else i.intensity=3.2}}}function Y1(){const[n,e]=Jt(16,24),t=e.createRadialGradient(8,14,1,8,14,10);return t.addColorStop(0,dt(Ye.torchBright)),t.addColorStop(.45,dt(Ye.torch)),t.addColorStop(1,"rgba(232,161,60,0)"),e.fillStyle=t,e.fillRect(0,0,16,24),e.fillStyle=dt(Ye.torch),e.beginPath(),e.moveTo(8,2),e.quadraticCurveTo(12,10,8,16),e.quadraticCurveTo(4,10,8,2),e.fill(),e.fillStyle=dt(Ye.torchBright),e.beginPath(),e.ellipse(8,13,2.4,4,0,0,Math.PI*2),e.fill(),jt(n)}const Qu={},Od=[];{const n=new Ud,e=(t,i)=>{n.load(i,s=>{Qu[t]={scene:s.scene,animations:s.animations};for(const r of Od)r()})};e("puerta","assets/models/portal_puerta.glb"),e("reja","assets/models/portal_reja.glb")}let Ya=null;new Ud().load("assets/models/trampilla_escalera.glb",e=>{Ya=e.scene;for(const t of Od)t()});const K1={1:16777215,2:15919832,3:13625544,4:15519936,5:12563672},Lp=40,$1=55,Ll=1.15,Z1=1.45,J1=1.9,Dp=.1,Np=.6,j1=1.15,Q1=.9,eR=.45;function tR(){const n=new f_;n.background=new Je(Ye.dungeonBg);const e=new pd(Ye.dungeonBg,14,30);n.fog=e;const t=nR(n),i=new X($e/2,0,qe/2),s=new rn(Lp,1,.1,100),r=new X,o=bu.degToRad($1),a=new X(i.x,0,i.z);let c=20,l=$e/2,u=qe/2,d=960,f=576,h=!1;function p(){r.set(a.x,c*Math.sin(o),a.z+c*Math.cos(o)),s.position.copy(r),s.lookAt(a)}function v(S,T){d=S,f=T,s.aspect=S/Math.max(1,T);const x=Math.tan(bu.degToRad(Lp/2)),M=x*s.aspect,E=($e/2+Ll)/M,L=(qe/2+Ll)*Math.sin(o)/x+(qe/2+Ll)*Math.cos(o);h=document.body.classList.contains("touch-mode"),c=Math.max(E,L)/(h?J1:Z1),l=M*c,u=x*c/Math.sin(o),e.near=c-2,e.far=c+15,p(),s.updateProjectionMatrix()}function m(S,T,x){const M=T-Np,E=x-T+Np;return M>=E?x/2:Math.min(E,Math.max(M,S))}function g(S){document.body.classList.contains("touch-mode")!==h&&v(d,f);const T=m(lt(S).x,l,$e),x=m(lt(S).y,u,qe);a.x+=(T-a.x)*Dp,a.z+=(x-a.z)*Dp,p()}return{scene:n,camera:s,center:i,cameraHome:r,resize:v,updateRoom:S=>{t.update(S),g(S)}}}function nR(n){const e=u1($e,qe),t=new Ts({map:e.texture,roughness:.92,metalness:0}),i=new is($e,qe),s=1.7,r=new gm;r.moveTo(-$e/2,-qe/2),r.lineTo($e/2,-qe/2),r.lineTo($e/2,qe/2),r.lineTo(-$e/2,qe/2);const o=new Eu;o.moveTo(-s/2,-s/2),o.lineTo(s/2,-s/2),o.lineTo(s/2,s/2),o.lineTo(-s/2,s/2),r.holes.push(o);const a=new bd(r);{const b=a.attributes.uv,N=a.attributes.position;for(let P=0;P<b.count;P++)b.setXY(P,(N.getX(P)+$e/2)/$e,(N.getY(P)+qe/2)/qe)}const c=new kt(i,t);c.rotation.x=-Math.PI/2,c.position.set($e/2,0,qe/2),n.add(c);const l=new Map;function u(b){const N=Math.max(1,Math.round(b));let P=l.get(N);return P||(P=new Ts({map:vp(N,2),roughness:1,metalness:0}),l.set(N,P)),P}const d=new Map;function f(b){const N=Math.max(1,Math.round(b));let P=d.get(N);return P||(P=new Ts({map:vp(N,1),roughness:1,metalness:0}),d.set(N,P)),P}const h=new Rn({color:Ye.torch}),p=new zn;n.add(p);const v=[],m=new Zv;let g=null,S="";Od.push(()=>{S=""});function T(){for(const b of[...p.children])p.remove(b),b.traverse(N=>{N instanceof kt&&N.geometry.dispose()});v.length=0,g=null}function x(b,N,P,D,Y,R){const A=new kt(new ns(b,N,P),R);return A.position.set(D,N/2,Y),p.add(A),A}function M(b,N){const P=b==="n"?j1:b==="s"?eR:Q1,D=b==="n"||b==="s",Y=b==="n"?.5:qe-.5,R=b==="w"?.5:$e-.5,A=D?$e/2:qe/2,k=D?$e:qe-2,I=D?0:1;if(!N){D?x(k,P,1,$e/2,Y,u(k)):x(1,P,k,R,qe/2,u(k));return}const O=A-Ki-I,F=I+k-(A+Ki);D?(x(O,P,1,I+O/2,Y,u(O)),x(F,P,1,A+Ki+F/2,Y,u(F))):(x(1,P,O,R,I+O/2,u(O)),x(1,P,F,R,A+Ki+F/2,u(F)))}function E(b,N){const P=N==="puerta"?Qu.puerta:Qu.reja;if(!P)return;const D=P.scene.clone(!0),R=new an().setFromObject(P.scene).getSize(new X),A=2.6/Math.max(.001,R.x);D.scale.setScalar(A);const k=new an().setFromObject(D),I=k.getCenter(new X);D.position.sub(new X(I.x,k.min.y,I.z));const O=new zn;O.add(D);const G=b==="n"||b==="s"?$e/2:qe/2;b==="n"&&O.position.set(G,0,.55),b==="s"&&O.position.set(G,0,qe-.55),b==="e"&&(O.position.set($e-.55,0,G),O.rotation.y=-Math.PI/2),b==="w"&&(O.position.set(.55,0,G),O.rotation.y=Math.PI/2),p.add(O);const U={side:b,variant:N,wrapper:O,mixer:null,clips:null,barsNode:null,barsY0:0,open:null};N==="puerta"&&P.animations.length?(U.mixer=new Kv(D),U.clips=P.animations):(D.traverse($=>{$.name==="gate"&&(U.barsNode=$)}),U.barsNode&&(U.barsY0=U.barsNode.position.y)),v.push(U)}function L(b,N,P){if(b.mixer&&b.clips){const D=ic.findByName(b.clips,N?"open":"close");if(!D)return;b.mixer.stopAllAction();const Y=b.mixer.clipAction(D);Y.setLoop(jp,1),Y.clampWhenFinished=!0,Y.play(),P&&b.mixer.update(D.duration)}}function y(b){T();const N=b.floor.rooms[b.floor.current],P=K1[b.floor.level]??16777215;t.color.setHex(P),e.repaint(N.seed);for(const D of["n","s","e","w"]){const Y=N.doors[D];if(M(D,Y>=0),Y>=0){const R=b.floor.rooms[Y].locked;E(D,R?"reja":"puerta")}}for(const D of b.obstacles)D.invisible||x(D.w,.55,D.h,D.x+D.w/2,D.y+D.h/2,f(D.w));if(N.kind==="boss"){const D=new zn,Y=new kt(new ns(1.7,.05,1.7),new Rn({color:262657}));if(Y.position.set($e/2,-1.3,qe/2),D.add(Y),Ya){const A=Ya.clone(!0),I=new an().setFromObject(Ya).getSize(new X),O=1.55/Math.max(.001,Math.max(I.x,I.z));A.scale.setScalar(O);const F=new an().setFromObject(A),G=F.getCenter(new X);A.position.sub(new X(G.x,F.min.y,G.z)),A.position.y-=I.y*O-.04,D.add(A),A.position.x+=$e/2,A.position.z+=qe/2}const R=new kt(new Sd(.95,1.05,24),h);R.rotation.x=-Math.PI/2,R.position.set($e/2,.013,qe/2),D.add(R),D.visible=!1,p.add(D),g=D}for(const D of l.values())D.color.setHex(P);for(const D of d.values())D.color.setHex(P),D.color.multiplyScalar(1.18)}return{update(b){const N=`${b.seed}:${b.floor.level}:${b.floor.current}`;N!==S&&(S=N,y(b));const P=m.getDelta(),D=b.floor.rooms[b.floor.current];for(const A of v){const k=D.doors[A.side],I=k>=0&&b.floor.rooms[k].locked,O=D.cleared&&!I;if(A.variant==="puerta")A.open===null?L(A,O,!0):O!==A.open&&L(A,O,!1),A.mixer?.update(P);else if(A.barsNode){const F=A.barsY0+(O?.9:0);A.open===null?A.barsNode.position.y=F:A.barsNode.position.y+=(F-A.barsNode.position.y)*.08}A.open=O}g&&(g.visible=b.floor.trapdoorOpen);const R=D.kind==="boss"&&b.floor.trapdoorOpen?a:i;c.geometry!==R&&(c.geometry=R)}}}function iR(n,e){const t=uE(),i=cE(e,Va(t));aE(i,Ha);const s=new qM({antialias:!1});s.setPixelRatio(1),n.appendChild(s.domElement);const r=tR(),o=q1(r.scene),a=E1(r.scene,a1());W1(i,s.domElement,r.camera);const c=G1(n,Ha,()=>i.telemetry),l=F1(i,r),u=hE(n),d=k1(n,i,t,Ha,u);let f=null;function h(x){if(x&&!f&&(f=O1(n,i)),document.body.classList.toggle("touch-mode",x),!x){const M=i.live;M.left=M.right=M.up=M.down=M.fire=!1}}U1()?h(!0):new URLSearchParams(location.search).get("touch")!=="0"&&(window.addEventListener("touchstart",()=>h(!0)),window.addEventListener("pointermove",x=>{x.pointerType==="mouse"&&document.body.classList.contains("touch-mode")&&h(!1)}));function p(){const x=n.clientWidth||960,M=n.clientHeight||576;s.setSize(x,M),r.resize(x,M)}new ResizeObserver(p).observe(n),p();const v=document.createElement("div");v.className="net-status",n.appendChild(v);let m=0;function g(){if(!i.net){v.style.display!=="none"&&(v.style.display="none");return}v.style.display="",m=i.net.waiting?m+1:0;const{pingMs:x,bufferMs:M}=i.net.stats(),E=m>20;v.classList.toggle("net-waiting",E),v.textContent=E?"⏳ ajustando conexión…":`🌐 ${x} ms · buffer ${M} ms`}let S=performance.now();function T(x){const M=x-S;S=x;const E=i.frame(M);l.onEvents(E),c.onEvents(E),u.onEvents(E),r.updateRoom(i.sim.state),o.update(i.sim.state),a.update(i.sim.state),c.update(i.sim.state),d.update(i.sim.state),u.update(i.sim.state),f?.update(i.sim.state),l.update(M,r.camera),g(),s.render(r.scene,r.camera),requestAnimationFrame(T)}requestAnimationFrame(T)}const sR=new URLSearchParams(location.search),kp=sR.get("seed"),zg=kp!==null?Number(kp)>>>0:Date.now()>>>0;iR(document.getElementById("game"),zg);console.info(`%cKai · Fase 0.5 · seed=${zg} · API de tester en window.__game`,"color:#e8a13c");
