(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const pl="185",Bf=0,ru=1,zf=2,ba=1,Hf=2,fr=3,ci=0,nn=1,zn=2,ai=0,Ps=1,nc=2,au=3,ou=4,Vf=5,zi=100,Gf=101,Wf=102,Xf=103,qf=104,Yf=200,Kf=201,$f=202,Zf=203,ic=204,sc=205,Jf=206,jf=207,Qf=208,ep=209,tp=210,np=211,ip=212,sp=213,rp=214,rc=0,ac=1,oc=2,Os=3,cc=4,lc=5,uc=6,dc=7,mh=0,ap=1,op=2,Gn=0,gh=1,_h=2,xh=3,vh=4,yh=5,Mh=6,Sh=7,cu="attached",cp="detached",bh=300,qi=301,Fs=302,no=303,io=304,Ka=306,ks=1e3,Hn=1001,Ua=1002,wt=1003,Th=1004,pr=1005,Rt=1006,Ta=1007,ii=1008,on=1009,Eh=1010,Ah=1011,br=1012,ml=1013,Xn=1014,pn=1015,li=1016,gl=1017,_l=1018,Tr=1020,wh=35902,Rh=35899,Ch=1021,Ph=1022,mn=1023,ui=1026,Vi=1027,xl=1028,vl=1029,Yi=1030,yl=1031,Ml=1033,Ea=33776,Aa=33777,wa=33778,Ra=33779,hc=35840,fc=35841,pc=35842,mc=35843,gc=36196,_c=37492,xc=37496,vc=37488,yc=37489,Oa=37490,Mc=37491,Sc=37808,bc=37809,Tc=37810,Ec=37811,Ac=37812,wc=37813,Rc=37814,Cc=37815,Pc=37816,Ic=37817,Lc=37818,Dc=37819,Nc=37820,Uc=37821,Oc=36492,Fc=36494,kc=36495,Bc=36283,zc=36284,Fa=36285,Hc=36286,Ih=2200,lp=2201,up=2202,Er=2300,Ar=2301,so=2302,lu=2303,As=2400,ws=2401,ka=2402,Sl=2500,dp=2501,hp=0,Lh=1,Vc=2,fp=3200,Gc=0,pp=1,Si="",Ft="srgb",cn="srgb-linear",Ba="linear",ht="srgb",ts=7680,uu=519,mp=512,gp=513,_p=514,bl=515,xp=516,vp=517,Tl=518,yp=519,Wc=35044,du="300 es",Vn=2e3,wr=2001;function Mp(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Sp(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Rr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function bp(){const i=Rr("canvas");return i.style.display="block",i}const hu={};function za(...i){const e="THREE."+i.shift();console.log(e,...i)}function Dh(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ie(...i){i=Dh(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Ge(...i){i=Dh(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Is(...i){const e=i.join(" ");e in hu||(hu[e]=!0,Ie(...i))}function Tp(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const Ep={[rc]:ac,[oc]:uc,[cc]:dc,[Os]:lc,[ac]:rc,[uc]:oc,[dc]:cc,[lc]:Os};class Pi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const Wt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let fu=1234567;const _r=Math.PI/180,Bs=180/Math.PI;function _n(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Wt[i&255]+Wt[i>>8&255]+Wt[i>>16&255]+Wt[i>>24&255]+"-"+Wt[e&255]+Wt[e>>8&255]+"-"+Wt[e>>16&15|64]+Wt[e>>24&255]+"-"+Wt[t&63|128]+Wt[t>>8&255]+"-"+Wt[t>>16&255]+Wt[t>>24&255]+Wt[n&255]+Wt[n>>8&255]+Wt[n>>16&255]+Wt[n>>24&255]).toLowerCase()}function it(i,e,t){return Math.max(e,Math.min(t,i))}function El(i,e){return(i%e+e)%e}function Ap(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function wp(i,e,t){return i!==e?(t-i)/(e-i):0}function xr(i,e,t){return(1-t)*i+t*e}function Rp(i,e,t,n){return xr(i,e,1-Math.exp(-t*n))}function Cp(i,e=1){return e-Math.abs(El(i,e*2)-e)}function Pp(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Ip(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Lp(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Dp(i,e){return i+Math.random()*(e-i)}function Np(i){return i*(.5-Math.random())}function Up(i){i!==void 0&&(fu=i);let e=fu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Op(i){return i*_r}function Fp(i){return i*Bs}function kp(i){return(i&i-1)===0&&i!==0}function Bp(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function zp(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Hp(i,e,t,n,s){const r=Math.cos,a=Math.sin,o=r(t/2),c=a(t/2),l=r((e+n)/2),u=a((e+n)/2),d=r((e-n)/2),h=a((e-n)/2),f=r((n-e)/2),p=a((n-e)/2);switch(s){case"XYX":i.set(o*u,c*d,c*h,o*l);break;case"YZY":i.set(c*h,o*u,c*d,o*l);break;case"ZXZ":i.set(c*d,c*h,o*u,o*l);break;case"XZX":i.set(o*u,c*p,c*f,o*l);break;case"YXY":i.set(c*f,o*u,c*p,o*l);break;case"ZYZ":i.set(c*p,c*f,o*u,o*l);break;default:Ie("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function En(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ft(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Xc={DEG2RAD:_r,RAD2DEG:Bs,generateUUID:_n,clamp:it,euclideanModulo:El,mapLinear:Ap,inverseLerp:wp,lerp:xr,damp:Rp,pingpong:Cp,smoothstep:Pp,smootherstep:Ip,randInt:Lp,randFloat:Dp,randFloatSpread:Np,seededRandom:Up,degToRad:Op,radToDeg:Fp,isPowerOfTwo:kp,ceilPowerOfTwo:Bp,floorPowerOfTwo:zp,setQuaternionFromProperEuler:Hp,normalize:ft,denormalize:En},Xl=class Xl{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(it(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(it(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Xl.prototype.isVector2=!0;let Te=Xl;class xn{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let c=n[s+0],l=n[s+1],u=n[s+2],d=n[s+3],h=r[a+0],f=r[a+1],p=r[a+2],v=r[a+3];if(d!==v||c!==h||l!==f||u!==p){let g=c*h+l*f+u*p+d*v;g<0&&(h=-h,f=-f,p=-p,v=-v,g=-g);let m=1-o;if(g<.9995){const S=Math.acos(g),T=Math.sin(S);m=Math.sin(m*S)/T,o=Math.sin(o*S)/T,c=c*m+h*o,l=l*m+f*o,u=u*m+p*o,d=d*m+v*o}else{c=c*m+h*o,l=l*m+f*o,u=u*m+p*o,d=d*m+v*o;const S=1/Math.sqrt(c*c+l*l+u*u+d*d);c*=S,l*=S,u*=S,d*=S}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,s,r,a){const o=n[s],c=n[s+1],l=n[s+2],u=n[s+3],d=r[a],h=r[a+1],f=r[a+2],p=r[a+3];return e[t]=o*p+u*d+c*f-l*h,e[t+1]=c*p+u*h+l*d-o*f,e[t+2]=l*p+u*f+o*h-c*d,e[t+3]=u*p-o*d-c*h-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),u=o(s/2),d=o(r/2),h=c(n/2),f=c(s/2),p=c(r/2);switch(a){case"XYZ":this._x=h*u*d+l*f*p,this._y=l*f*d-h*u*p,this._z=l*u*p+h*f*d,this._w=l*u*d-h*f*p;break;case"YXZ":this._x=h*u*d+l*f*p,this._y=l*f*d-h*u*p,this._z=l*u*p-h*f*d,this._w=l*u*d+h*f*p;break;case"ZXY":this._x=h*u*d-l*f*p,this._y=l*f*d+h*u*p,this._z=l*u*p+h*f*d,this._w=l*u*d-h*f*p;break;case"ZYX":this._x=h*u*d-l*f*p,this._y=l*f*d+h*u*p,this._z=l*u*p-h*f*d,this._w=l*u*d+h*f*p;break;case"YZX":this._x=h*u*d+l*f*p,this._y=l*f*d+h*u*p,this._z=l*u*p-h*f*d,this._w=l*u*d-h*f*p;break;case"XZY":this._x=h*u*d-l*f*p,this._y=l*f*d-h*u*p,this._z=l*u*p+h*f*d,this._w=l*u*d+h*f*p;break;default:Ie("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],u=t[6],d=t[10],h=n+o+d;if(h>0){const f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-c)*f,this._y=(r-l)*f,this._z=(a-s)*f}else if(n>o&&n>d){const f=2*Math.sqrt(1+n-o-d);this._w=(u-c)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+l)/f}else if(o>d){const f=2*Math.sqrt(1+o-n-d);this._w=(r-l)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(c+u)/f}else{const f=2*Math.sqrt(1+d-n-o);this._w=(a-s)/f,this._x=(r+l)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(it(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+a*o+s*l-r*c,this._y=s*u+a*c+r*o-n*l,this._z=r*u+a*l+n*c-s*o,this._w=a*u-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let c=1-t;if(o<.9995){const l=Math.acos(o),u=Math.sin(l);c=Math.sin(c*l)/u,t=Math.sin(t*l)/u,this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const ql=class ql{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(pu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(pu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*s-o*n),u=2*(o*t-r*s),d=2*(r*n-a*t);return this.x=t+c*l+a*d-o*u,this.y=n+c*u+o*l-r*d,this.z=s+c*d+r*u-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this.z=it(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this.z=it(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(it(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ro.copy(this).projectOnVector(e),this.sub(ro)}reflect(e){return this.sub(ro.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(it(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};ql.prototype.isVector3=!0;let F=ql;const ro=new F,pu=new xn,Yl=class Yl{constructor(e,t,n,s,r,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l)}set(e,t,n,s,r,a,o,c,l){const u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=c,u[6]=n,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],u=n[4],d=n[7],h=n[2],f=n[5],p=n[8],v=s[0],g=s[3],m=s[6],S=s[1],T=s[4],_=s[7],E=s[2],A=s[5],I=s[8];return r[0]=a*v+o*S+c*E,r[3]=a*g+o*T+c*A,r[6]=a*m+o*_+c*I,r[1]=l*v+u*S+d*E,r[4]=l*g+u*T+d*A,r[7]=l*m+u*_+d*I,r[2]=h*v+f*S+p*E,r[5]=h*g+f*T+p*A,r[8]=h*m+f*_+p*I,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return t*a*u-t*o*l-n*r*u+n*o*c+s*r*l-s*a*c}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],d=u*a-o*l,h=o*c-u*r,f=l*r-a*c,p=t*d+n*h+s*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/p;return e[0]=d*v,e[1]=(s*l-u*n)*v,e[2]=(o*n-s*a)*v,e[3]=h*v,e[4]=(u*t-s*c)*v,e[5]=(s*r-o*t)*v,e[6]=f*v,e[7]=(n*c-l*t)*v,e[8]=(a*t-n*r)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-s*l,s*c,-s*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return Is("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ao.makeScale(e,t)),this}rotate(e){return Is("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ao.makeRotation(-e)),this}translate(e,t){return Is("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ao.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Yl.prototype.isMatrix3=!0;let Ke=Yl;const ao=new Ke,mu=new Ke().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),gu=new Ke().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Vp(){const i={enabled:!0,workingColorSpace:cn,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ht&&(s.r=oi(s.r),s.g=oi(s.g),s.b=oi(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ht&&(s.r=Ls(s.r),s.g=Ls(s.g),s.b=Ls(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Si?Ba:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Is("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Is("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[cn]:{primaries:e,whitePoint:n,transfer:Ba,toXYZ:mu,fromXYZ:gu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ft},outputColorSpaceConfig:{drawingBufferColorSpace:Ft}},[Ft]:{primaries:e,whitePoint:n,transfer:ht,toXYZ:mu,fromXYZ:gu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ft}}}),i}const rt=Vp();function oi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ls(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let ns;class Gp{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ns===void 0&&(ns=Rr("canvas")),ns.width=e.width,ns.height=e.height;const s=ns.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=ns}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Rr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=oi(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(oi(t[n]/255)*255):t[n]=oi(t[n]);return{data:t,width:e.width,height:e.height}}else return Ie("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Wp=0;class Al{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Wp++}),this.uuid=_n(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(oo(s[a].image)):r.push(oo(s[a]))}else r=oo(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function oo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Gp.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ie("Texture: Unable to serialize Texture."),{})}let Xp=0;const co=new F;class kt extends Pi{constructor(e=kt.DEFAULT_IMAGE,t=kt.DEFAULT_MAPPING,n=Hn,s=Hn,r=Rt,a=ii,o=mn,c=on,l=kt.DEFAULT_ANISOTROPY,u=Si){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Xp++}),this.uuid=_n(),this.name="",this.source=new Al(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Te(0,0),this.repeat=new Te(1,1),this.center=new Te(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(co).x}get height(){return this.source.getSize(co).y}get depth(){return this.source.getSize(co).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Ie(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Ie(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==bh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ks:e.x=e.x-Math.floor(e.x);break;case Hn:e.x=e.x<0?0:1;break;case Ua:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ks:e.y=e.y-Math.floor(e.y);break;case Hn:e.y=e.y<0?0:1;break;case Ua:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}kt.DEFAULT_IMAGE=null;kt.DEFAULT_MAPPING=bh;kt.DEFAULT_ANISOTROPY=1;const Kl=class Kl{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const c=e.elements,l=c[0],u=c[4],d=c[8],h=c[1],f=c[5],p=c[9],v=c[2],g=c[6],m=c[10];if(Math.abs(u-h)<.01&&Math.abs(d-v)<.01&&Math.abs(p-g)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+v)<.1&&Math.abs(p+g)<.1&&Math.abs(l+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const T=(l+1)/2,_=(f+1)/2,E=(m+1)/2,A=(u+h)/4,I=(d+v)/4,y=(p+g)/4;return T>_&&T>E?T<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(T),s=A/n,r=I/n):_>E?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=A/s,r=y/s):E<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),n=I/r,s=y/r),this.set(n,s,r,t),this}let S=Math.sqrt((g-p)*(g-p)+(d-v)*(d-v)+(h-u)*(h-u));return Math.abs(S)<.001&&(S=1),this.x=(g-p)/S,this.y=(d-v)/S,this.z=(h-u)/S,this.w=Math.acos((l+f+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this.z=it(this.z,e.z,t.z),this.w=it(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this.z=it(this.z,e,t),this.w=it(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(it(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Kl.prototype.isVector4=!0;let gt=Kl;class qp extends Pi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Rt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new gt(0,0,e,t),this.scissorTest=!1,this.viewport=new gt(0,0,e,t),this.textures=[];const s={width:e,height:t,depth:n.depth},r=new kt(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Rt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new Al(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Wn extends qp{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Nh extends kt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=wt,this.minFilter=wt,this.wrapR=Hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Yp extends kt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=wt,this.minFilter=wt,this.wrapR=Hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ya=class Ya{constructor(e,t,n,s,r,a,o,c,l,u,d,h,f,p,v,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l,u,d,h,f,p,v,g)}set(e,t,n,s,r,a,o,c,l,u,d,h,f,p,v,g){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=c,m[2]=l,m[6]=u,m[10]=d,m[14]=h,m[3]=f,m[7]=p,m[11]=v,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ya().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,s=1/is.setFromMatrixColumn(e,0).length(),r=1/is.setFromMatrixColumn(e,1).length(),a=1/is.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const h=a*u,f=a*d,p=o*u,v=o*d;t[0]=c*u,t[4]=-c*d,t[8]=l,t[1]=f+p*l,t[5]=h-v*l,t[9]=-o*c,t[2]=v-h*l,t[6]=p+f*l,t[10]=a*c}else if(e.order==="YXZ"){const h=c*u,f=c*d,p=l*u,v=l*d;t[0]=h+v*o,t[4]=p*o-f,t[8]=a*l,t[1]=a*d,t[5]=a*u,t[9]=-o,t[2]=f*o-p,t[6]=v+h*o,t[10]=a*c}else if(e.order==="ZXY"){const h=c*u,f=c*d,p=l*u,v=l*d;t[0]=h-v*o,t[4]=-a*d,t[8]=p+f*o,t[1]=f+p*o,t[5]=a*u,t[9]=v-h*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const h=a*u,f=a*d,p=o*u,v=o*d;t[0]=c*u,t[4]=p*l-f,t[8]=h*l+v,t[1]=c*d,t[5]=v*l+h,t[9]=f*l-p,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const h=a*c,f=a*l,p=o*c,v=o*l;t[0]=c*u,t[4]=v-h*d,t[8]=p*d+f,t[1]=d,t[5]=a*u,t[9]=-o*u,t[2]=-l*u,t[6]=f*d+p,t[10]=h-v*d}else if(e.order==="XZY"){const h=a*c,f=a*l,p=o*c,v=o*l;t[0]=c*u,t[4]=-d,t[8]=l*u,t[1]=h*d+v,t[5]=a*u,t[9]=f*d-p,t[2]=p*d-f,t[6]=o*u,t[10]=v*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Kp,e,$p)}lookAt(e,t,n){const s=this.elements;return rn.subVectors(e,t),rn.lengthSq()===0&&(rn.z=1),rn.normalize(),pi.crossVectors(n,rn),pi.lengthSq()===0&&(Math.abs(n.z)===1?rn.x+=1e-4:rn.z+=1e-4,rn.normalize(),pi.crossVectors(n,rn)),pi.normalize(),Br.crossVectors(rn,pi),s[0]=pi.x,s[4]=Br.x,s[8]=rn.x,s[1]=pi.y,s[5]=Br.y,s[9]=rn.y,s[2]=pi.z,s[6]=Br.z,s[10]=rn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],u=n[1],d=n[5],h=n[9],f=n[13],p=n[2],v=n[6],g=n[10],m=n[14],S=n[3],T=n[7],_=n[11],E=n[15],A=s[0],I=s[4],y=s[8],M=s[12],L=s[1],C=s[5],R=s[9],B=s[13],V=s[2],N=s[6],X=s[10],H=s[14],q=s[3],te=s[7],Z=s[11],oe=s[15];return r[0]=a*A+o*L+c*V+l*q,r[4]=a*I+o*C+c*N+l*te,r[8]=a*y+o*R+c*X+l*Z,r[12]=a*M+o*B+c*H+l*oe,r[1]=u*A+d*L+h*V+f*q,r[5]=u*I+d*C+h*N+f*te,r[9]=u*y+d*R+h*X+f*Z,r[13]=u*M+d*B+h*H+f*oe,r[2]=p*A+v*L+g*V+m*q,r[6]=p*I+v*C+g*N+m*te,r[10]=p*y+v*R+g*X+m*Z,r[14]=p*M+v*B+g*H+m*oe,r[3]=S*A+T*L+_*V+E*q,r[7]=S*I+T*C+_*N+E*te,r[11]=S*y+T*R+_*X+E*Z,r[15]=S*M+T*B+_*H+E*oe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],u=e[2],d=e[6],h=e[10],f=e[14],p=e[3],v=e[7],g=e[11],m=e[15],S=c*f-l*h,T=o*f-l*d,_=o*h-c*d,E=a*f-l*u,A=a*h-c*u,I=a*d-o*u;return t*(v*S-g*T+m*_)-n*(p*S-g*E+m*A)+s*(p*T-v*E+m*I)-r*(p*_-v*A+g*I)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],c=e[2],l=e[6],u=e[10];return t*(a*u-o*l)-n*(r*u-o*c)+s*(r*l-a*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],d=e[9],h=e[10],f=e[11],p=e[12],v=e[13],g=e[14],m=e[15],S=t*o-n*a,T=t*c-s*a,_=t*l-r*a,E=n*c-s*o,A=n*l-r*o,I=s*l-r*c,y=u*v-d*p,M=u*g-h*p,L=u*m-f*p,C=d*g-h*v,R=d*m-f*v,B=h*m-f*g,V=S*B-T*R+_*C+E*L-A*M+I*y;if(V===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const N=1/V;return e[0]=(o*B-c*R+l*C)*N,e[1]=(s*R-n*B-r*C)*N,e[2]=(v*I-g*A+m*E)*N,e[3]=(h*A-d*I-f*E)*N,e[4]=(c*L-a*B-l*M)*N,e[5]=(t*B-s*L+r*M)*N,e[6]=(g*_-p*I-m*T)*N,e[7]=(u*I-h*_+f*T)*N,e[8]=(a*R-o*L+l*y)*N,e[9]=(n*L-t*R-r*y)*N,e[10]=(p*A-v*_+m*S)*N,e[11]=(d*_-u*A-f*S)*N,e[12]=(o*M-a*C-c*y)*N,e[13]=(t*C-n*M+s*y)*N,e[14]=(v*T-p*E-g*S)*N,e[15]=(u*E-d*T+h*S)*N,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,u=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,u*o+n,u*c-s*a,0,l*c-s*o,u*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,u=a+a,d=o+o,h=r*l,f=r*u,p=r*d,v=a*u,g=a*d,m=o*d,S=c*l,T=c*u,_=c*d,E=n.x,A=n.y,I=n.z;return s[0]=(1-(v+m))*E,s[1]=(f+_)*E,s[2]=(p-T)*E,s[3]=0,s[4]=(f-_)*A,s[5]=(1-(h+m))*A,s[6]=(g+S)*A,s[7]=0,s[8]=(p+T)*I,s[9]=(g-S)*I,s[10]=(1-(h+v))*I,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=is.set(s[0],s[1],s[2]).length();const o=is.set(s[4],s[5],s[6]).length(),c=is.set(s[8],s[9],s[10]).length();r<0&&(a=-a),yn.copy(this);const l=1/a,u=1/o,d=1/c;return yn.elements[0]*=l,yn.elements[1]*=l,yn.elements[2]*=l,yn.elements[4]*=u,yn.elements[5]*=u,yn.elements[6]*=u,yn.elements[8]*=d,yn.elements[9]*=d,yn.elements[10]*=d,t.setFromRotationMatrix(yn),n.x=a,n.y=o,n.z=c,this}makePerspective(e,t,n,s,r,a,o=Vn,c=!1){const l=this.elements,u=2*r/(t-e),d=2*r/(n-s),h=(t+e)/(t-e),f=(n+s)/(n-s);let p,v;if(c)p=r/(a-r),v=a*r/(a-r);else if(o===Vn)p=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(o===wr)p=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=d,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=Vn,c=!1){const l=this.elements,u=2/(t-e),d=2/(n-s),h=-(t+e)/(t-e),f=-(n+s)/(n-s);let p,v;if(c)p=1/(a-r),v=a/(a-r);else if(o===Vn)p=-2/(a-r),v=-(a+r)/(a-r);else if(o===wr)p=-1/(a-r),v=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=0,l[12]=h,l[1]=0,l[5]=d,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=p,l[14]=v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Ya.prototype.isMatrix4=!0;let $e=Ya;const is=new F,yn=new $e,Kp=new F(0,0,0),$p=new F(1,1,1),pi=new F,Br=new F,rn=new F,_u=new $e,xu=new xn;class wi{constructor(e=0,t=0,n=0,s=wi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],u=s[9],d=s[2],h=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(it(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-it(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(it(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-it(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(it(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-it(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:Ie("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return _u.makeRotationFromQuaternion(e),this.setFromRotationMatrix(_u,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return xu.setFromEuler(this),this.setFromQuaternion(xu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}wi.DEFAULT_ORDER="XYZ";class wl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Zp=0;const vu=new F,ss=new xn,Zn=new $e,zr=new F,$s=new F,Jp=new F,jp=new xn,yu=new F(1,0,0),Mu=new F(0,1,0),Su=new F(0,0,1),bu={type:"added"},Qp={type:"removed"},rs={type:"childadded",child:null},lo={type:"childremoved",child:null};class Et extends Pi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Zp++}),this.uuid=_n(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Et.DEFAULT_UP.clone();const e=new F,t=new wi,n=new xn,s=new F(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new $e},normalMatrix:{value:new Ke}}),this.matrix=new $e,this.matrixWorld=new $e,this.matrixAutoUpdate=Et.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Et.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new wl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ss.setFromAxisAngle(e,t),this.quaternion.multiply(ss),this}rotateOnWorldAxis(e,t){return ss.setFromAxisAngle(e,t),this.quaternion.premultiply(ss),this}rotateX(e){return this.rotateOnAxis(yu,e)}rotateY(e){return this.rotateOnAxis(Mu,e)}rotateZ(e){return this.rotateOnAxis(Su,e)}translateOnAxis(e,t){return vu.copy(e).applyQuaternion(this.quaternion),this.position.add(vu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(yu,e)}translateY(e){return this.translateOnAxis(Mu,e)}translateZ(e){return this.translateOnAxis(Su,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Zn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?zr.copy(e):zr.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),$s.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Zn.lookAt($s,zr,this.up):Zn.lookAt(zr,$s,this.up),this.quaternion.setFromRotationMatrix(Zn),s&&(Zn.extractRotation(s.matrixWorld),ss.setFromRotationMatrix(Zn),this.quaternion.premultiply(ss.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ge("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(bu),rs.child=e,this.dispatchEvent(rs),rs.child=null):Ge("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Qp),lo.child=e,this.dispatchEvent(lo),lo.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Zn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Zn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Zn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(bu),rs.child=e,this.dispatchEvent(rs),rs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($s,e,Jp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($s,jp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const d=c[l];r(e.shapes,d)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),u=a(e.images),d=a(e.shapes),h=a(e.skeletons),f=a(e.animations),p=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),h.length>0&&(n.skeletons=h),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=s,n;function a(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}Et.DEFAULT_UP=new F(0,1,0);Et.DEFAULT_MATRIX_AUTO_UPDATE=!0;Et.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class An extends Et{constructor(){super(),this.isGroup=!0,this.type="Group"}}const em={type:"move"};class uo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new An,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new An,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new An,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const v of e.hand.values()){const g=t.getJointPose(v,n),m=this._getHandJoint(l,v);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}const u=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],h=u.position.distanceTo(d.position),f=.02,p=.005;l.inputState.pinching&&h>f+p?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&h<=f-p&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(em)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new An;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Uh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},mi={h:0,s:0,l:0},Hr={h:0,s:0,l:0};function ho(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class We{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ft){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,rt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=rt.workingColorSpace){return this.r=e,this.g=t,this.b=n,rt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=rt.workingColorSpace){if(e=El(e,1),t=it(t,0,1),n=it(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=ho(a,r,e+1/3),this.g=ho(a,r,e),this.b=ho(a,r,e-1/3)}return rt.colorSpaceToWorking(this,s),this}setStyle(e,t=Ft){function n(r){r!==void 0&&parseFloat(r)<1&&Ie("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ie("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Ie("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ft){const n=Uh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ie("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=oi(e.r),this.g=oi(e.g),this.b=oi(e.b),this}copyLinearToSRGB(e){return this.r=Ls(e.r),this.g=Ls(e.g),this.b=Ls(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ft){return rt.workingToColorSpace(Xt.copy(this),e),Math.round(it(Xt.r*255,0,255))*65536+Math.round(it(Xt.g*255,0,255))*256+Math.round(it(Xt.b*255,0,255))}getHexString(e=Ft){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=rt.workingColorSpace){rt.workingToColorSpace(Xt.copy(this),t);const n=Xt.r,s=Xt.g,r=Xt.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let c,l;const u=(o+a)/2;if(o===a)c=0,l=0;else{const d=a-o;switch(l=u<=.5?d/(a+o):d/(2-a-o),a){case n:c=(s-r)/d+(s<r?6:0);break;case s:c=(r-n)/d+2;break;case r:c=(n-s)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=rt.workingColorSpace){return rt.workingToColorSpace(Xt.copy(this),t),e.r=Xt.r,e.g=Xt.g,e.b=Xt.b,e}getStyle(e=Ft){rt.workingToColorSpace(Xt.copy(this),e);const t=Xt.r,n=Xt.g,s=Xt.b;return e!==Ft?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(mi),this.setHSL(mi.h+e,mi.s+t,mi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(mi),e.getHSL(Hr);const n=xr(mi.h,Hr.h,t),s=xr(mi.s,Hr.s,t),r=xr(mi.l,Hr.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Xt=new We;We.NAMES=Uh;class Rl{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new We(e),this.near=t,this.far=n}clone(){return new Rl(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class tm extends Et{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new wi,this.environmentIntensity=1,this.environmentRotation=new wi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Mn=new F,Jn=new F,fo=new F,jn=new F,as=new F,os=new F,Tu=new F,po=new F,mo=new F,go=new F,_o=new gt,xo=new gt,vo=new gt;class fn{constructor(e=new F,t=new F,n=new F){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Mn.subVectors(e,t),s.cross(Mn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Mn.subVectors(s,t),Jn.subVectors(n,t),fo.subVectors(e,t);const a=Mn.dot(Mn),o=Mn.dot(Jn),c=Mn.dot(fo),l=Jn.dot(Jn),u=Jn.dot(fo),d=a*l-o*o;if(d===0)return r.set(0,0,0),null;const h=1/d,f=(l*c-o*u)*h,p=(a*u-o*c)*h;return r.set(1-f-p,p,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,jn)===null?!1:jn.x>=0&&jn.y>=0&&jn.x+jn.y<=1}static getInterpolation(e,t,n,s,r,a,o,c){return this.getBarycoord(e,t,n,s,jn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,jn.x),c.addScaledVector(a,jn.y),c.addScaledVector(o,jn.z),c)}static getInterpolatedAttribute(e,t,n,s,r,a){return _o.setScalar(0),xo.setScalar(0),vo.setScalar(0),_o.fromBufferAttribute(e,t),xo.fromBufferAttribute(e,n),vo.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(_o,r.x),a.addScaledVector(xo,r.y),a.addScaledVector(vo,r.z),a}static isFrontFacing(e,t,n,s){return Mn.subVectors(n,t),Jn.subVectors(e,t),Mn.cross(Jn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Mn.subVectors(this.c,this.b),Jn.subVectors(this.a,this.b),Mn.cross(Jn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return fn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return fn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return fn.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return fn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return fn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let a,o;as.subVectors(s,n),os.subVectors(r,n),po.subVectors(e,n);const c=as.dot(po),l=os.dot(po);if(c<=0&&l<=0)return t.copy(n);mo.subVectors(e,s);const u=as.dot(mo),d=os.dot(mo);if(u>=0&&d<=u)return t.copy(s);const h=c*d-u*l;if(h<=0&&c>=0&&u<=0)return a=c/(c-u),t.copy(n).addScaledVector(as,a);go.subVectors(e,r);const f=as.dot(go),p=os.dot(go);if(p>=0&&f<=p)return t.copy(r);const v=f*l-c*p;if(v<=0&&l>=0&&p<=0)return o=l/(l-p),t.copy(n).addScaledVector(os,o);const g=u*p-f*d;if(g<=0&&d-u>=0&&f-p>=0)return Tu.subVectors(r,s),o=(d-u)/(d-u+(f-p)),t.copy(s).addScaledVector(Tu,o);const m=1/(g+v+h);return a=v*m,o=h*m,t.copy(n).addScaledVector(as,a).addScaledVector(os,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Qt{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Sn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Sn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Sn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Sn):Sn.fromBufferAttribute(r,a),Sn.applyMatrix4(e.matrixWorld),this.expandByPoint(Sn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Vr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Vr.copy(n.boundingBox)),Vr.applyMatrix4(e.matrixWorld),this.union(Vr)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Sn),Sn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Zs),Gr.subVectors(this.max,Zs),cs.subVectors(e.a,Zs),ls.subVectors(e.b,Zs),us.subVectors(e.c,Zs),gi.subVectors(ls,cs),_i.subVectors(us,ls),Li.subVectors(cs,us);let t=[0,-gi.z,gi.y,0,-_i.z,_i.y,0,-Li.z,Li.y,gi.z,0,-gi.x,_i.z,0,-_i.x,Li.z,0,-Li.x,-gi.y,gi.x,0,-_i.y,_i.x,0,-Li.y,Li.x,0];return!yo(t,cs,ls,us,Gr)||(t=[1,0,0,0,1,0,0,0,1],!yo(t,cs,ls,us,Gr))?!1:(Wr.crossVectors(gi,_i),t=[Wr.x,Wr.y,Wr.z],yo(t,cs,ls,us,Gr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Sn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Sn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Qn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Qn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Qn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Qn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Qn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Qn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Qn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Qn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Qn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Qn=[new F,new F,new F,new F,new F,new F,new F,new F],Sn=new F,Vr=new Qt,cs=new F,ls=new F,us=new F,gi=new F,_i=new F,Li=new F,Zs=new F,Gr=new F,Wr=new F,Di=new F;function yo(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Di.fromArray(i,r);const o=s.x*Math.abs(Di.x)+s.y*Math.abs(Di.y)+s.z*Math.abs(Di.z),c=e.dot(Di),l=t.dot(Di),u=n.dot(Di);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const Ut=new F,Xr=new Te;let nm=0;class en extends Pi{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:nm++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Wc,this.updateRanges=[],this.gpuType=pn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Xr.fromBufferAttribute(this,t),Xr.applyMatrix3(e),this.setXY(t,Xr.x,Xr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix3(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix4(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyNormalMatrix(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.transformDirection(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=En(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ft(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=En(t,this.array)),t}setX(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=En(t,this.array)),t}setY(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=En(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=En(t,this.array)),t}setW(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ft(t,this.array),n=ft(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=ft(t,this.array),n=ft(n,this.array),s=ft(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=ft(t,this.array),n=ft(n,this.array),s=ft(s,this.array),r=ft(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Wc&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class Oh extends en{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Fh extends en{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Vt extends en{constructor(e,t,n){super(new Float32Array(e),t,n)}}const im=new Qt,Js=new F,Mo=new F;class Yn{constructor(e=new F,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):im.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Js.subVectors(e,this.center);const t=Js.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Js,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Mo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Js.copy(e.center).add(Mo)),this.expandByPoint(Js.copy(e.center).sub(Mo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let sm=0;const un=new $e,So=new Et,ds=new F,an=new Qt,js=new Qt,Ht=new F;class tn extends Pi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:sm++}),this.uuid=_n(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Mp(e)?Fh:Oh)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ke().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return un.makeRotationFromQuaternion(e),this.applyMatrix4(un),this}rotateX(e){return un.makeRotationX(e),this.applyMatrix4(un),this}rotateY(e){return un.makeRotationY(e),this.applyMatrix4(un),this}rotateZ(e){return un.makeRotationZ(e),this.applyMatrix4(un),this}translate(e,t,n){return un.makeTranslation(e,t,n),this.applyMatrix4(un),this}scale(e,t,n){return un.makeScale(e,t,n),this.applyMatrix4(un),this}lookAt(e){return So.lookAt(e),So.updateMatrix(),this.applyMatrix4(So.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ds).negate(),this.translate(ds.x,ds.y,ds.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Vt(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Ie("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Qt);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ge("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];an.setFromBufferAttribute(r),this.morphTargetsRelative?(Ht.addVectors(this.boundingBox.min,an.min),this.boundingBox.expandByPoint(Ht),Ht.addVectors(this.boundingBox.max,an.max),this.boundingBox.expandByPoint(Ht)):(this.boundingBox.expandByPoint(an.min),this.boundingBox.expandByPoint(an.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ge('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Yn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ge("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(e){const n=this.boundingSphere.center;if(an.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];js.setFromBufferAttribute(o),this.morphTargetsRelative?(Ht.addVectors(an.min,js.min),an.expandByPoint(Ht),Ht.addVectors(an.max,js.max),an.expandByPoint(Ht)):(an.expandByPoint(js.min),an.expandByPoint(js.max))}an.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Ht.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Ht));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)Ht.fromBufferAttribute(o,l),c&&(ds.fromBufferAttribute(e,l),Ht.add(ds)),s=Math.max(s,n.distanceToSquared(Ht))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ge('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ge("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new en(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));const o=[],c=[];for(let y=0;y<n.count;y++)o[y]=new F,c[y]=new F;const l=new F,u=new F,d=new F,h=new Te,f=new Te,p=new Te,v=new F,g=new F;function m(y,M,L){l.fromBufferAttribute(n,y),u.fromBufferAttribute(n,M),d.fromBufferAttribute(n,L),h.fromBufferAttribute(r,y),f.fromBufferAttribute(r,M),p.fromBufferAttribute(r,L),u.sub(l),d.sub(l),f.sub(h),p.sub(h);const C=1/(f.x*p.y-p.x*f.y);isFinite(C)&&(v.copy(u).multiplyScalar(p.y).addScaledVector(d,-f.y).multiplyScalar(C),g.copy(d).multiplyScalar(f.x).addScaledVector(u,-p.x).multiplyScalar(C),o[y].add(v),o[M].add(v),o[L].add(v),c[y].add(g),c[M].add(g),c[L].add(g))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let y=0,M=S.length;y<M;++y){const L=S[y],C=L.start,R=L.count;for(let B=C,V=C+R;B<V;B+=3)m(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const T=new F,_=new F,E=new F,A=new F;function I(y){E.fromBufferAttribute(s,y),A.copy(E);const M=o[y];T.copy(M),T.sub(E.multiplyScalar(E.dot(M))).normalize(),_.crossVectors(A,M);const C=_.dot(c[y])<0?-1:1;a.setXYZW(y,T.x,T.y,T.z,C)}for(let y=0,M=S.length;y<M;++y){const L=S[y],C=L.start,R=L.count;for(let B=C,V=C+R;B<V;B+=3)I(e.getX(B+0)),I(e.getX(B+1)),I(e.getX(B+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new en(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,f=n.count;h<f;h++)n.setXYZ(h,0,0,0);const s=new F,r=new F,a=new F,o=new F,c=new F,l=new F,u=new F,d=new F;if(e)for(let h=0,f=e.count;h<f;h+=3){const p=e.getX(h+0),v=e.getX(h+1),g=e.getX(h+2);s.fromBufferAttribute(t,p),r.fromBufferAttribute(t,v),a.fromBufferAttribute(t,g),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),o.fromBufferAttribute(n,p),c.fromBufferAttribute(n,v),l.fromBufferAttribute(n,g),o.add(u),c.add(u),l.add(u),n.setXYZ(p,o.x,o.y,o.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let h=0,f=t.count;h<f;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ht.fromBufferAttribute(e,t),Ht.normalize(),e.setXYZ(t,Ht.x,Ht.y,Ht.z)}toNonIndexed(){function e(o,c){const l=o.array,u=o.itemSize,d=o.normalized,h=new l.constructor(c.length*u);let f=0,p=0;for(let v=0,g=c.length;v<g;v++){o.isInterleavedBufferAttribute?f=c[v]*o.data.stride+o.offset:f=c[v]*u;for(let m=0;m<u;m++)h[p++]=l[f++]}return new en(h,u,d)}if(this.index===null)return Ie("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new tn,n=this.index.array,s=this.attributes;for(const o in s){const c=s[o],l=e(c,n);t.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let u=0,d=l.length;u<d;u++){const h=l[u],f=e(h,n);c.push(f)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let d=0,h=l.length;d<h;d++){const f=l[d];u.push(f.toJSON(e.data))}u.length>0&&(s[c]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const l in s){const u=s[l];this.setAttribute(l,u.clone(t))}const r=e.morphAttributes;for(const l in r){const u=[],d=r[l];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,u=a.length;l<u;l++){const d=a[l];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class kh{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Wc,this.updateRanges=[],this.version=0,this.uuid=_n()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=_n()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=_n()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Kt=new F;class Cr{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.applyMatrix4(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.applyNormalMatrix(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.transformDirection(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=En(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ft(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=ft(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=En(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=En(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=En(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=En(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=ft(t,this.array),n=ft(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=ft(t,this.array),n=ft(n,this.array),s=ft(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ft(t,this.array),n=ft(n,this.array),s=ft(s,this.array),r=ft(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){za("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new en(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Cr(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){za("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let rm=0;class wn extends Pi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:rm++}),this.uuid=_n(),this.name="",this.type="Material",this.blending=Ps,this.side=ci,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ic,this.blendDst=sc,this.blendEquation=zi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new We(0,0,0),this.blendAlpha=0,this.depthFunc=Os,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=uu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ts,this.stencilZFail=ts,this.stencilZPass=ts,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Ie(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Ie(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ps&&(n.blending=this.blending),this.side!==ci&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ic&&(n.blendSrc=this.blendSrc),this.blendDst!==sc&&(n.blendDst=this.blendDst),this.blendEquation!==zi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Os&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==uu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ts&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ts&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ts&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new We().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Te().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Te().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Gi extends wn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new We(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let hs;const Qs=new F,fs=new F,ps=new F,ms=new Te,er=new Te,Bh=new $e,qr=new F,tr=new F,Yr=new F,Eu=new Te,bo=new Te,Au=new Te;class Rs extends Et{constructor(e=new Gi){if(super(),this.isSprite=!0,this.type="Sprite",hs===void 0){hs=new tn;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new kh(t,5);hs.setIndex([0,1,2,0,2,3]),hs.setAttribute("position",new Cr(n,3,0,!1)),hs.setAttribute("uv",new Cr(n,2,3,!1))}this.geometry=hs,this.material=e,this.center=new Te(.5,.5),this.count=1}raycast(e,t){e.camera===null&&Ge('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),fs.setFromMatrixScale(this.matrixWorld),Bh.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ps.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&fs.multiplyScalar(-ps.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const a=this.center;Kr(qr.set(-.5,-.5,0),ps,a,fs,s,r),Kr(tr.set(.5,-.5,0),ps,a,fs,s,r),Kr(Yr.set(.5,.5,0),ps,a,fs,s,r),Eu.set(0,0),bo.set(1,0),Au.set(1,1);let o=e.ray.intersectTriangle(qr,tr,Yr,!1,Qs);if(o===null&&(Kr(tr.set(-.5,.5,0),ps,a,fs,s,r),bo.set(0,1),o=e.ray.intersectTriangle(qr,Yr,tr,!1,Qs),o===null))return;const c=e.ray.origin.distanceTo(Qs);c<e.near||c>e.far||t.push({distance:c,point:Qs.clone(),uv:fn.getInterpolation(Qs,qr,tr,Yr,Eu,bo,Au,new Te),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Kr(i,e,t,n,s,r){ms.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(er.x=r*ms.x-s*ms.y,er.y=s*ms.x+r*ms.y):er.copy(ms),i.copy(e),i.x+=er.x,i.y+=er.y,i.applyMatrix4(Bh)}const ei=new F,To=new F,$r=new F,xi=new F,Eo=new F,Zr=new F,Ao=new F;class Or{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ei)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ei.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ei.copy(this.origin).addScaledVector(this.direction,t),ei.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){To.copy(e).add(t).multiplyScalar(.5),$r.copy(t).sub(e).normalize(),xi.copy(this.origin).sub(To);const r=e.distanceTo(t)*.5,a=-this.direction.dot($r),o=xi.dot(this.direction),c=-xi.dot($r),l=xi.lengthSq(),u=Math.abs(1-a*a);let d,h,f,p;if(u>0)if(d=a*c-o,h=a*o-c,p=r*u,d>=0)if(h>=-p)if(h<=p){const v=1/u;d*=v,h*=v,f=d*(d+a*h+2*o)+h*(a*d+h+2*c)+l}else h=r,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*c)+l;else h=-r,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*c)+l;else h<=-p?(d=Math.max(0,-(-a*r+o)),h=d>0?-r:Math.min(Math.max(-r,-c),r),f=-d*d+h*(h+2*c)+l):h<=p?(d=0,h=Math.min(Math.max(-r,-c),r),f=h*(h+2*c)+l):(d=Math.max(0,-(a*r+o)),h=d>0?r:Math.min(Math.max(-r,-c),r),f=-d*d+h*(h+2*c)+l);else h=a>0?-r:r,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(To).addScaledVector($r,h),f}intersectSphere(e,t){ei.subVectors(e.center,this.origin);const n=ei.dot(this.direction),s=ei.dot(ei)-n*n,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,c;const l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return l>=0?(n=(e.min.x-h.x)*l,s=(e.max.x-h.x)*l):(n=(e.max.x-h.x)*l,s=(e.min.x-h.x)*l),u>=0?(r=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(e.min.z-h.z)*d,c=(e.max.z-h.z)*d):(o=(e.max.z-h.z)*d,c=(e.min.z-h.z)*d),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,ei)!==null}intersectTriangle(e,t,n,s,r){Eo.subVectors(t,e),Zr.subVectors(n,e),Ao.crossVectors(Eo,Zr);let a=this.direction.dot(Ao),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;xi.subVectors(this.origin,e);const c=o*this.direction.dot(Zr.crossVectors(xi,Zr));if(c<0)return null;const l=o*this.direction.dot(Eo.cross(xi));if(l<0||c+l>a)return null;const u=-o*xi.dot(Ao);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class gn extends wn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new We(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wi,this.combine=mh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const wu=new $e,Ni=new Or,Jr=new Yn,Ru=new F,jr=new F,Qr=new F,ea=new F,wo=new F,ta=new F,Cu=new F,na=new F;class It extends Et{constructor(e=new tn,t=new gn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){ta.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=o[c],d=r[c];u!==0&&(wo.fromBufferAttribute(d,e),a?ta.addScaledVector(wo,u):ta.addScaledVector(wo.sub(t),u))}t.add(ta)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Jr.copy(n.boundingSphere),Jr.applyMatrix4(r),Ni.copy(e.ray).recast(e.near),!(Jr.containsPoint(Ni.origin)===!1&&(Ni.intersectSphere(Jr,Ru)===null||Ni.origin.distanceToSquared(Ru)>(e.far-e.near)**2))&&(wu.copy(r).invert(),Ni.copy(e.ray).applyMatrix4(wu),!(n.boundingBox!==null&&Ni.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ni)))}_computeIntersections(e,t,n){let s;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,h=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let p=0,v=h.length;p<v;p++){const g=h[p],m=a[g.materialIndex],S=Math.max(g.start,f.start),T=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let _=S,E=T;_<E;_+=3){const A=o.getX(_),I=o.getX(_+1),y=o.getX(_+2);s=ia(this,m,e,n,l,u,d,A,I,y),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{const p=Math.max(0,f.start),v=Math.min(o.count,f.start+f.count);for(let g=p,m=v;g<m;g+=3){const S=o.getX(g),T=o.getX(g+1),_=o.getX(g+2);s=ia(this,a,e,n,l,u,d,S,T,_),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let p=0,v=h.length;p<v;p++){const g=h[p],m=a[g.materialIndex],S=Math.max(g.start,f.start),T=Math.min(c.count,Math.min(g.start+g.count,f.start+f.count));for(let _=S,E=T;_<E;_+=3){const A=_,I=_+1,y=_+2;s=ia(this,m,e,n,l,u,d,A,I,y),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{const p=Math.max(0,f.start),v=Math.min(c.count,f.start+f.count);for(let g=p,m=v;g<m;g+=3){const S=g,T=g+1,_=g+2;s=ia(this,a,e,n,l,u,d,S,T,_),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}}function am(i,e,t,n,s,r,a,o){let c;if(e.side===nn?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,e.side===ci,o),c===null)return null;na.copy(o),na.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(na);return l<t.near||l>t.far?null:{distance:l,point:na.clone(),object:i}}function ia(i,e,t,n,s,r,a,o,c,l){i.getVertexPosition(o,jr),i.getVertexPosition(c,Qr),i.getVertexPosition(l,ea);const u=am(i,e,t,n,jr,Qr,ea,Cu);if(u){const d=new F;fn.getBarycoord(Cu,jr,Qr,ea,d),s&&(u.uv=fn.getInterpolatedAttribute(s,o,c,l,d,new Te)),r&&(u.uv1=fn.getInterpolatedAttribute(r,o,c,l,d,new Te)),a&&(u.normal=fn.getInterpolatedAttribute(a,o,c,l,d,new F),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:c,c:l,normal:new F,materialIndex:0};fn.getNormal(jr,Qr,ea,h.normal),u.face=h,u.barycoord=d}return u}const nr=new gt,Pu=new gt,Iu=new gt,om=new gt,Lu=new $e,sa=new F,Ro=new Yn,Du=new $e,Co=new Or;class cm extends It{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=cu,this.bindMatrix=new $e,this.bindMatrixInverse=new $e,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Qt),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,sa),this.boundingBox.expandByPoint(sa)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Yn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,sa),this.boundingSphere.expandByPoint(sa)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ro.copy(this.boundingSphere),Ro.applyMatrix4(s),e.ray.intersectsSphere(Ro)!==!1&&(Du.copy(s).invert(),Co.copy(e.ray).applyMatrix4(Du),!(this.boundingBox!==null&&Co.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Co)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new gt,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===cu?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===cp?this.bindMatrixInverse.copy(this.bindMatrix).invert():Ie("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,s=this.geometry;Pu.fromBufferAttribute(s.attributes.skinIndex,e),Iu.fromBufferAttribute(s.attributes.skinWeight,e),t.isVector4?(nr.copy(t),t.set(0,0,0,0)):(nr.set(...t,1),t.set(0,0,0)),nr.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){const a=Iu.getComponent(r);if(a!==0){const o=Pu.getComponent(r);Lu.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(om.copy(nr).applyMatrix4(Lu),a)}}return t.isVector4&&(t.w=nr.w),t.applyMatrix4(this.bindMatrixInverse)}}class zh extends Et{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Cl extends kt{constructor(e=null,t=1,n=1,s,r,a,o,c,l=wt,u=wt,d,h){super(null,a,o,c,l,u,s,r,d,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Nu=new $e,lm=new $e;class Pl{constructor(e=[],t=[]){this.uuid=_n(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Ie("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new $e)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new $e;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,a=e.length;r<a;r++){const o=e[r]?e[r].matrixWorld:lm;Nu.multiplyMatrices(o,t[r]),Nu.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new Pl(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Cl(t,e,e,mn,pn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){const r=e.bones[n];let a=t[r];a===void 0&&(Ie("Skeleton: No bone found with UUID:",r),a=new zh),this.bones.push(a),this.boneInverses.push(new $e().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){const a=t[s];e.bones.push(a.uuid);const o=n[s];e.boneInverses.push(o.toArray())}return e}}class qc extends en{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const gs=new $e,Uu=new $e,ra=[],Ou=new Qt,um=new $e,ir=new It,sr=new Yn;class dm extends It{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new qc(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,um)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Qt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,gs),Ou.copy(e.boundingBox).applyMatrix4(gs),this.boundingBox.union(Ou)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Yn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,gs),sr.copy(e.boundingSphere).applyMatrix4(gs),this.boundingSphere.union(sr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(ir.geometry=this.geometry,ir.material=this.material,ir.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),sr.copy(this.boundingSphere),sr.applyMatrix4(n),e.ray.intersectsSphere(sr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,gs),Uu.multiplyMatrices(n,gs),ir.matrixWorld=Uu,ir.raycast(e,ra);for(let a=0,o=ra.length;a<o;a++){const c=ra[a];c.instanceId=r,c.object=this,t.push(c)}ra.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new qc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Cl(new Float32Array(s*this.count),s,this.count,xl,pn));const r=this.morphTexture.source.data.data;let a=0;for(let l=0;l<n.length;l++)a+=n[l];const o=this.geometry.morphTargetsRelative?1:1-a,c=s*e;return r[c]=o,r.set(n,c+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Po=new F,hm=new F,fm=new Ke;class Mi{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=Po.subVectors(n,t).cross(hm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const s=e.delta(Po),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||fm.getNormalMatrix(e),s=this.coplanarPoint(Po).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ui=new Yn,pm=new Te(.5,.5),aa=new F;class Il{constructor(e=new Mi,t=new Mi,n=new Mi,s=new Mi,r=new Mi,a=new Mi){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Vn,n=!1){const s=this.planes,r=e.elements,a=r[0],o=r[1],c=r[2],l=r[3],u=r[4],d=r[5],h=r[6],f=r[7],p=r[8],v=r[9],g=r[10],m=r[11],S=r[12],T=r[13],_=r[14],E=r[15];if(s[0].setComponents(l-a,f-u,m-p,E-S).normalize(),s[1].setComponents(l+a,f+u,m+p,E+S).normalize(),s[2].setComponents(l+o,f+d,m+v,E+T).normalize(),s[3].setComponents(l-o,f-d,m-v,E-T).normalize(),n)s[4].setComponents(c,h,g,_).normalize(),s[5].setComponents(l-c,f-h,m-g,E-_).normalize();else if(s[4].setComponents(l-c,f-h,m-g,E-_).normalize(),t===Vn)s[5].setComponents(l+c,f+h,m+g,E+_).normalize();else if(t===wr)s[5].setComponents(c,h,g,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ui.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ui.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ui)}intersectsSprite(e){Ui.center.set(0,0,0);const t=pm.distanceTo(e.center);return Ui.radius=.7071067811865476+t,Ui.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ui)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(aa.x=s.normal.x>0?e.max.x:e.min.x,aa.y=s.normal.y>0?e.max.y:e.min.y,aa.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(aa)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Hh extends wn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new We(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ha=new F,Va=new F,Fu=new $e,rr=new Or,oa=new Yn,Io=new F,ku=new F;class Ll extends Et{constructor(e=new tn,t=new Hh){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Ha.fromBufferAttribute(t,s-1),Va.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Ha.distanceTo(Va);e.setAttribute("lineDistance",new Vt(n,1))}else Ie("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),oa.copy(n.boundingSphere),oa.applyMatrix4(s),oa.radius+=r,e.ray.intersectsSphere(oa)===!1)return;Fu.copy(s).invert(),rr.copy(e.ray).applyMatrix4(Fu);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,u=n.index,h=n.attributes.position;if(u!==null){const f=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let v=f,g=p-1;v<g;v+=l){const m=u.getX(v),S=u.getX(v+1),T=ca(this,e,rr,c,m,S,v);T&&t.push(T)}if(this.isLineLoop){const v=u.getX(p-1),g=u.getX(f),m=ca(this,e,rr,c,v,g,p-1);m&&t.push(m)}}else{const f=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let v=f,g=p-1;v<g;v+=l){const m=ca(this,e,rr,c,v,v+1,v);m&&t.push(m)}if(this.isLineLoop){const v=ca(this,e,rr,c,p-1,f,p-1);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function ca(i,e,t,n,s,r,a){const o=i.geometry.attributes.position;if(Ha.fromBufferAttribute(o,s),Va.fromBufferAttribute(o,r),t.distanceSqToSegment(Ha,Va,Io,ku)>n)return;Io.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(Io);if(!(l<e.near||l>e.far))return{distance:l,point:ku.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}const Bu=new F,zu=new F;class mm extends Ll{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Bu.fromBufferAttribute(t,s),zu.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Bu.distanceTo(zu);e.setAttribute("lineDistance",new Vt(n,1))}else Ie("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class gm extends Ll{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Vh extends wn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new We(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Hu=new $e,Yc=new Or,la=new Yn,ua=new F;class _m extends Et{constructor(e=new tn,t=new Vh){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),la.copy(n.boundingSphere),la.applyMatrix4(s),la.radius+=r,e.ray.intersectsSphere(la)===!1)return;Hu.copy(s).invert(),Yc.copy(e.ray).applyMatrix4(Hu);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,d=n.attributes.position;if(l!==null){const h=Math.max(0,a.start),f=Math.min(l.count,a.start+a.count);for(let p=h,v=f;p<v;p++){const g=l.getX(p);ua.fromBufferAttribute(d,g),Vu(ua,g,c,s,e,t,this)}}else{const h=Math.max(0,a.start),f=Math.min(d.count,a.start+a.count);for(let p=h,v=f;p<v;p++)ua.fromBufferAttribute(d,p),Vu(ua,p,c,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Vu(i,e,t,n,s,r,a){const o=Yc.distanceSqToPoint(i);if(o<t){const c=new F;Yc.closestPointToPoint(i,c),c.applyMatrix4(n);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Gh extends kt{constructor(e=[],t=qi,n,s,r,a,o,c,l,u){super(e,t,n,s,r,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class xm extends kt{constructor(e,t,n,s,r,a,o,c,l){super(e,t,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class zs extends kt{constructor(e,t,n=Xn,s,r,a,o=wt,c=wt,l,u=ui,d=1){if(u!==ui&&u!==Vi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:d};super(h,s,r,a,o,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Al(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class vm extends zs{constructor(e,t=Xn,n=qi,s,r,a=wt,o=wt,c,l=ui){const u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,n,s,r,a,o,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Wh extends kt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ri extends tn{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],u=[],d=[];let h=0,f=0;p("z","y","x",-1,-1,n,t,e,a,r,0),p("z","y","x",1,-1,n,t,-e,a,r,1),p("x","z","y",1,1,e,n,t,s,a,2),p("x","z","y",1,-1,e,n,-t,s,a,3),p("x","y","z",1,-1,e,t,n,s,r,4),p("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Vt(l,3)),this.setAttribute("normal",new Vt(u,3)),this.setAttribute("uv",new Vt(d,2));function p(v,g,m,S,T,_,E,A,I,y,M){const L=_/I,C=E/y,R=_/2,B=E/2,V=A/2,N=I+1,X=y+1;let H=0,q=0;const te=new F;for(let Z=0;Z<X;Z++){const oe=Z*C-B;for(let he=0;he<N;he++){const Qe=he*L-R;te[v]=Qe*S,te[g]=oe*T,te[m]=V,l.push(te.x,te.y,te.z),te[v]=0,te[g]=0,te[m]=A>0?1:-1,u.push(te.x,te.y,te.z),d.push(he/I),d.push(1-Z/y),H+=1}}for(let Z=0;Z<y;Z++)for(let oe=0;oe<I;oe++){const he=h+oe+N*Z,Qe=h+oe+N*(Z+1),lt=h+(oe+1)+N*(Z+1),Be=h+(oe+1)+N*Z;c.push(he,Qe,Be),c.push(Qe,lt,Be),q+=6}o.addGroup(f,q,M),f+=q,h+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ri(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Kn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ie("Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let s=0;const r=n.length;let a;t?a=t:a=e*n[r-1];let o=0,c=r-1,l;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),l=n[s]-a,l<0)o=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===a)return s/(r-1);const u=n[s],h=n[s+1]-u,f=(a-u)/h;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),c=t||(a.isVector2?new Te:new F);return c.copy(o).sub(a).normalize(),c}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new F,s=[],r=[],a=[],o=new F,c=new $e;for(let f=0;f<=e;f++){const p=f/e;s[f]=this.getTangentAt(p,new F)}r[0]=new F,a[0]=new F;let l=Number.MAX_VALUE;const u=Math.abs(s[0].x),d=Math.abs(s[0].y),h=Math.abs(s[0].z);u<=l&&(l=u,n.set(1,0,0)),d<=l&&(l=d,n.set(0,1,0)),h<=l&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();const p=Math.acos(it(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(o,p))}a[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(it(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let p=1;p<=e;p++)r[p].applyMatrix4(c.makeRotationAxis(s[p],f*p)),a[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Dl extends Kn{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(e,t=new Te){const n=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+e*r;let c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),h=c-this.aX,f=l-this.aY;c=h*u-f*d+this.aX,l=h*d+f*u+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class ym extends Dl{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Nl(){let i=0,e=0,t=0,n=0;function s(r,a,o,c){i=r,e=o,t=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){s(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,u,d){let h=(a-r)/l-(o-r)/(l+u)+(o-a)/u,f=(o-a)/u-(c-a)/(u+d)+(c-o)/d;h*=u,f*=u,s(a,o,h,f)},calc:function(r){const a=r*r,o=a*r;return i+e*r+t*a+n*o}}}const Gu=new F,Wu=new F,Lo=new Nl,Do=new Nl,No=new Nl;class Mm extends Kn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new F){const n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e;let o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,u;this.closed||o>0?l=s[(o-1)%r]:(Wu.subVectors(s[0],s[1]).add(s[0]),l=Wu);const d=s[o%r],h=s[(o+1)%r];if(this.closed||o+2<r?u=s[(o+2)%r]:(Gu.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Gu),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let p=Math.pow(l.distanceToSquared(d),f),v=Math.pow(d.distanceToSquared(h),f),g=Math.pow(h.distanceToSquared(u),f);v<1e-4&&(v=1),p<1e-4&&(p=v),g<1e-4&&(g=v),Lo.initNonuniformCatmullRom(l.x,d.x,h.x,u.x,p,v,g),Do.initNonuniformCatmullRom(l.y,d.y,h.y,u.y,p,v,g),No.initNonuniformCatmullRom(l.z,d.z,h.z,u.z,p,v,g)}else this.curveType==="catmullrom"&&(Lo.initCatmullRom(l.x,d.x,h.x,u.x,this.tension),Do.initCatmullRom(l.y,d.y,h.y,u.y,this.tension),No.initCatmullRom(l.z,d.z,h.z,u.z,this.tension));return n.set(Lo.calc(c),Do.calc(c),No.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new F().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Xu(i,e,t,n,s){const r=(n-e)*.5,a=(s-t)*.5,o=i*i,c=i*o;return(2*t-2*n+r+a)*c+(-3*t+3*n-2*r-a)*o+r*i+t}function Sm(i,e){const t=1-i;return t*t*e}function bm(i,e){return 2*(1-i)*i*e}function Tm(i,e){return i*i*e}function vr(i,e,t,n){return Sm(i,e)+bm(i,t)+Tm(i,n)}function Em(i,e){const t=1-i;return t*t*t*e}function Am(i,e){const t=1-i;return 3*t*t*i*e}function wm(i,e){return 3*(1-i)*i*i*e}function Rm(i,e){return i*i*i*e}function yr(i,e,t,n,s){return Em(i,e)+Am(i,t)+wm(i,n)+Rm(i,s)}class Xh extends Kn{constructor(e=new Te,t=new Te,n=new Te,s=new Te){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new Te){const n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(yr(e,s.x,r.x,a.x,o.x),yr(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Cm extends Kn{constructor(e=new F,t=new F,n=new F,s=new F){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new F){const n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(yr(e,s.x,r.x,a.x,o.x),yr(e,s.y,r.y,a.y,o.y),yr(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class qh extends Kn{constructor(e=new Te,t=new Te){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Te){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Te){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Pm extends Kn{constructor(e=new F,t=new F){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new F){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new F){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Yh extends Kn{constructor(e=new Te,t=new Te,n=new Te){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Te){const n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(vr(e,s.x,r.x,a.x),vr(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Im extends Kn{constructor(e=new F,t=new F,n=new F){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new F){const n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(vr(e,s.x,r.x,a.x),vr(e,s.y,r.y,a.y),vr(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Kh extends Kn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Te){const n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,c=s[a===0?a:a-1],l=s[a],u=s[a>s.length-2?s.length-1:a+1],d=s[a>s.length-3?s.length-1:a+2];return n.set(Xu(o,c.x,l.x,u.x,d.x),Xu(o,c.y,l.y,u.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new Te().fromArray(s))}return this}}var qu=Object.freeze({__proto__:null,ArcCurve:ym,CatmullRomCurve3:Mm,CubicBezierCurve:Xh,CubicBezierCurve3:Cm,EllipseCurve:Dl,LineCurve:qh,LineCurve3:Pm,QuadraticBezierCurve:Yh,QuadraticBezierCurve3:Im,SplineCurve:Kh});class Lm extends Kn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new qu[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const a=s[r]-n,o=this.curves[r],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,c=a.getPoints(o);for(let l=0;l<c.length;l++){const u=c[l];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(new qu[s.type]().fromJSON(s))}return this}}class Kc extends Lm{constructor(e){super(),this.type="Path",this.currentPoint=new Te,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new qh(this.currentPoint.clone(),new Te(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){const r=new Yh(this.currentPoint.clone(),new Te(e,t),new Te(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){const o=new Xh(this.currentPoint.clone(),new Te(e,t),new Te(n,s),new Te(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new Kh(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){const o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+o,t+c,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,c){const l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+l,t+u,n,s,r,a,o,c),this}absellipse(e,t,n,s,r,a,o,c){const l=new Dl(e,t,n,s,r,a,o,c);if(this.curves.length>0){const d=l.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(l);const u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class $h extends Kc{constructor(e){super(e),this.uuid=_n(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(new Kc().fromJSON(s))}return this}}function Dm(i,e,t=2){const n=e&&e.length,s=n?e[0]*t:i.length;let r=Zh(i,0,s,t,!0);const a=[];if(!r||r.next===r.prev)return a;let o,c,l;if(n&&(r=km(i,e,r,t)),i.length>80*t){o=i[0],c=i[1];let u=o,d=c;for(let h=t;h<s;h+=t){const f=i[h],p=i[h+1];f<o&&(o=f),p<c&&(c=p),f>u&&(u=f),p>d&&(d=p)}l=Math.max(u-o,d-c),l=l!==0?32767/l:0}return Pr(r,a,t,o,c,l,0),a}function Zh(i,e,t,n,s){let r;if(s===$m(i,e,t,n)>0)for(let a=e;a<t;a+=n)r=Yu(a/n|0,i[a],i[a+1],r);else for(let a=t-n;a>=e;a-=n)r=Yu(a/n|0,i[a],i[a+1],r);return r&&Hs(r,r.next)&&(Lr(r),r=r.next),r}function Ki(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Hs(t,t.next)||At(t.prev,t,t.next)===0)){if(Lr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Pr(i,e,t,n,s,r,a){if(!i)return;!a&&r&&Gm(i,n,s,r);let o=i;for(;i.prev!==i.next;){const c=i.prev,l=i.next;if(r?Um(i,n,s,r):Nm(i)){e.push(c.i,i.i,l.i),Lr(i),i=l.next,o=l.next;continue}if(i=l,i===o){a?a===1?(i=Om(Ki(i),e),Pr(i,e,t,n,s,r,2)):a===2&&Fm(i,e,t,n,s,r):Pr(Ki(i),e,t,n,s,r,1);break}}}function Nm(i){const e=i.prev,t=i,n=i.next;if(At(e,t,n)>=0)return!1;const s=e.x,r=t.x,a=n.x,o=e.y,c=t.y,l=n.y,u=Math.min(s,r,a),d=Math.min(o,c,l),h=Math.max(s,r,a),f=Math.max(o,c,l);let p=n.next;for(;p!==e;){if(p.x>=u&&p.x<=h&&p.y>=d&&p.y<=f&&mr(s,o,r,c,a,l,p.x,p.y)&&At(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function Um(i,e,t,n){const s=i.prev,r=i,a=i.next;if(At(s,r,a)>=0)return!1;const o=s.x,c=r.x,l=a.x,u=s.y,d=r.y,h=a.y,f=Math.min(o,c,l),p=Math.min(u,d,h),v=Math.max(o,c,l),g=Math.max(u,d,h),m=$c(f,p,e,t,n),S=$c(v,g,e,t,n);let T=i.prevZ,_=i.nextZ;for(;T&&T.z>=m&&_&&_.z<=S;){if(T.x>=f&&T.x<=v&&T.y>=p&&T.y<=g&&T!==s&&T!==a&&mr(o,u,c,d,l,h,T.x,T.y)&&At(T.prev,T,T.next)>=0||(T=T.prevZ,_.x>=f&&_.x<=v&&_.y>=p&&_.y<=g&&_!==s&&_!==a&&mr(o,u,c,d,l,h,_.x,_.y)&&At(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;T&&T.z>=m;){if(T.x>=f&&T.x<=v&&T.y>=p&&T.y<=g&&T!==s&&T!==a&&mr(o,u,c,d,l,h,T.x,T.y)&&At(T.prev,T,T.next)>=0)return!1;T=T.prevZ}for(;_&&_.z<=S;){if(_.x>=f&&_.x<=v&&_.y>=p&&_.y<=g&&_!==s&&_!==a&&mr(o,u,c,d,l,h,_.x,_.y)&&At(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function Om(i,e){let t=i;do{const n=t.prev,s=t.next.next;!Hs(n,s)&&jh(n,t,t.next,s)&&Ir(n,s)&&Ir(s,n)&&(e.push(n.i,t.i,s.i),Lr(t),Lr(t.next),t=i=s),t=t.next}while(t!==i);return Ki(t)}function Fm(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&qm(a,o)){let c=Qh(a,o);a=Ki(a,a.next),c=Ki(c,c.next),Pr(a,e,t,n,s,r,0),Pr(c,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function km(i,e,t,n){const s=[];for(let r=0,a=e.length;r<a;r++){const o=e[r]*n,c=r<a-1?e[r+1]*n:i.length,l=Zh(i,o,c,n,!1);l===l.next&&(l.steiner=!0),s.push(Xm(l))}s.sort(Bm);for(let r=0;r<s.length;r++)t=zm(s[r],t);return t}function Bm(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function zm(i,e){const t=Hm(i,e);if(!t)return e;const n=Qh(t,i);return Ki(n,n.next),Ki(t,t.next)}function Hm(i,e){let t=e;const n=i.x,s=i.y;let r=-1/0,a;if(Hs(i,t))return t;do{if(Hs(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){const d=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=n&&d>r&&(r=d,a=t.x<t.next.x?t:t.next,d===n))return a}t=t.next}while(t!==e);if(!a)return null;const o=a,c=a.x,l=a.y;let u=1/0;t=a;do{if(n>=t.x&&t.x>=c&&n!==t.x&&Jh(s<l?n:r,s,c,l,s<l?r:n,s,t.x,t.y)){const d=Math.abs(s-t.y)/(n-t.x);Ir(t,i)&&(d<u||d===u&&(t.x>a.x||t.x===a.x&&Vm(a,t)))&&(a=t,u=d)}t=t.next}while(t!==o);return a}function Vm(i,e){return At(i.prev,i,e.prev)<0&&At(e.next,i,i.next)<0}function Gm(i,e,t,n){let s=i;do s.z===0&&(s.z=$c(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Wm(s)}function Wm(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let a=n,o=0;for(let l=0;l<t&&(o++,a=a.nextZ,!!a);l++);let c=t;for(;o>0||c>0&&a;)o!==0&&(c===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,t*=2}while(e>1);return i}function $c(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function Xm(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Jh(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function mr(i,e,t,n,s,r,a,o){return!(i===a&&e===o)&&Jh(i,e,t,n,s,r,a,o)}function qm(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!Ym(i,e)&&(Ir(i,e)&&Ir(e,i)&&Km(i,e)&&(At(i.prev,i,e.prev)||At(i,e.prev,e))||Hs(i,e)&&At(i.prev,i,i.next)>0&&At(e.prev,e,e.next)>0)}function At(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Hs(i,e){return i.x===e.x&&i.y===e.y}function jh(i,e,t,n){const s=ha(At(i,e,t)),r=ha(At(i,e,n)),a=ha(At(t,n,i)),o=ha(At(t,n,e));return!!(s!==r&&a!==o||s===0&&da(i,t,e)||r===0&&da(i,n,e)||a===0&&da(t,i,n)||o===0&&da(t,e,n))}function da(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function ha(i){return i>0?1:i<0?-1:0}function Ym(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&jh(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Ir(i,e){return At(i.prev,i,i.next)<0?At(i,e,i.next)>=0&&At(i,i.prev,e)>=0:At(i,e,i.prev)<0||At(i,i.next,e)<0}function Km(i,e){let t=i,n=!1;const s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Qh(i,e){const t=Zc(i.i,i.x,i.y),n=Zc(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Yu(i,e,t,n){const s=Zc(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Lr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Zc(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function $m(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}class Zm{static triangulate(e,t,n=2){return Dm(e,t,n)}}class Mr{static area(e){const t=e.length;let n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return Mr.area(e)<0}static triangulateShape(e,t){const n=[],s=[],r=[];Ku(e),$u(n,e);let a=e.length;t.forEach(Ku);for(let c=0;c<t.length;c++)s.push(a),a+=t[c].length,$u(n,t[c]);const o=Zm.triangulate(n,s);for(let c=0;c<o.length;c+=3)r.push(o.slice(c,c+3));return r}}function Ku(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function $u(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class Ci extends tn{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(s),l=o+1,u=c+1,d=e/o,h=t/c,f=[],p=[],v=[],g=[];for(let m=0;m<u;m++){const S=m*h-a;for(let T=0;T<l;T++){const _=T*d-r;p.push(_,-S,0),v.push(0,0,1),g.push(T/o),g.push(1-m/c)}}for(let m=0;m<c;m++)for(let S=0;S<o;S++){const T=S+l*m,_=S+l*(m+1),E=S+1+l*(m+1),A=S+1+l*m;f.push(T,_,A),f.push(_,E,A)}this.setIndex(f),this.setAttribute("position",new Vt(p,3)),this.setAttribute("normal",new Vt(v,3)),this.setAttribute("uv",new Vt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ci(e.width,e.height,e.widthSegments,e.heightSegments)}}class Ul extends tn{constructor(e=.5,t=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);const o=[],c=[],l=[],u=[];let d=e;const h=(t-e)/s,f=new F,p=new Te;for(let v=0;v<=s;v++){for(let g=0;g<=n;g++){const m=r+g/n*a;f.x=d*Math.cos(m),f.y=d*Math.sin(m),c.push(f.x,f.y,f.z),l.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,u.push(p.x,p.y)}d+=h}for(let v=0;v<s;v++){const g=v*(n+1);for(let m=0;m<n;m++){const S=m+g,T=S,_=S+n+1,E=S+n+2,A=S+1;o.push(T,_,A),o.push(_,E,A)}}this.setIndex(o),this.setAttribute("position",new Vt(c,3)),this.setAttribute("normal",new Vt(l,3)),this.setAttribute("uv",new Vt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ul(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Ol extends tn{constructor(e=new $h([new Te(0,.5),new Te(-.5,-.5),new Te(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],s=[],r=[],a=[];let o=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let u=0;u<e.length;u++)l(e[u]),this.addGroup(o,c,u),o+=c,c=0;this.setIndex(n),this.setAttribute("position",new Vt(s,3)),this.setAttribute("normal",new Vt(r,3)),this.setAttribute("uv",new Vt(a,2));function l(u){const d=s.length/3,h=u.extractPoints(t);let f=h.shape;const p=h.holes;Mr.isClockWise(f)===!1&&(f=f.reverse());for(let g=0,m=p.length;g<m;g++){const S=p[g];Mr.isClockWise(S)===!0&&(p[g]=S.reverse())}const v=Mr.triangulateShape(f,p);for(let g=0,m=p.length;g<m;g++){const S=p[g];f=f.concat(S)}for(let g=0,m=f.length;g<m;g++){const S=f[g];s.push(S.x,S.y,0),r.push(0,0,1),a.push(S.x,S.y)}for(let g=0,m=v.length;g<m;g++){const S=v[g],T=S[0]+d,_=S[1]+d,E=S[2]+d;n.push(T,_,E),c+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return Jm(t,e)}static fromJSON(e,t){const n=[];for(let s=0,r=e.shapes.length;s<r;s++){const a=t[e.shapes[s]];n.push(a)}return new Ol(n,e.curveSegments)}}function Jm(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){const s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}function Vs(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];if(Zu(s))s.isRenderTargetTexture?(Ie("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(Zu(s[0])){const r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function $t(i){const e={};for(let t=0;t<i.length;t++){const n=Vs(i[t]);for(const s in n)e[s]=n[s]}return e}function Zu(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function jm(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function ef(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:rt.workingColorSpace}const Qm={clone:Vs,merge:$t};var eg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,tg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class qn extends wn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=eg,this.fragmentShader=tg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Vs(e.uniforms),this.uniformsGroups=jm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new We().setHex(s.value);break;case"v2":this.uniforms[n].value=new Te().fromArray(s.value);break;case"v3":this.uniforms[n].value=new F().fromArray(s.value);break;case"v4":this.uniforms[n].value=new gt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Ke().fromArray(s.value);break;case"m4":this.uniforms[n].value=new $e().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class ng extends qn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Wi extends wn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new We(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new We(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Gc,this.normalScale=new Te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class $n extends Wi{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Te(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return it(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new We(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new We(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new We(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class ig extends wn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=fp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class sg extends wn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function fa(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function rg(i){function e(s,r){return i[s]-i[r]}const t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function Ju(i,e,t){const n=i.length,s=new i.constructor(n);for(let r=0,a=0;a!==n;++r){const o=t[r]*e;for(let c=0;c!==e;++c)s[a++]=i[o+c]}return s}function ag(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push(...a)),r=i[s++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=i[s++];while(r!==void 0)}class Ws{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,s=t[n],r=t[n-1];e:{t:{let a;n:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break t}a=t.length;break n}if(!(e>=r)){const o=t[1];e<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break t}a=n,n=0;break n}break e}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}}class og extends Ws{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:As,endingEnd:As}}intervalChanged_(e,t,n){const s=this.parameterPositions;let r=e-2,a=e+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case ws:r=e,o=2*t-n;break;case ka:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case ws:a=e,c=2*n-t;break;case ka:a=1,c=n+s[1]-s[0];break;default:a=e-1,c=t}const l=(n-t)*.5,u=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(e,t,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=this._offsetPrev,d=this._offsetNext,h=this._weightPrev,f=this._weightNext,p=(n-t)/(s-t),v=p*p,g=v*p,m=-h*g+2*h*v-h*p,S=(1+h)*g+(-1.5-2*h)*v+(-.5+h)*p+1,T=(-1-f)*g+(1.5+f)*v+.5*p,_=f*g-f*v;for(let E=0;E!==o;++E)r[E]=m*a[u+E]+S*a[l+E]+T*a[c+E]+_*a[d+E];return r}}class tf extends Ws{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=(n-t)/(s-t),d=1-u;for(let h=0;h!==o;++h)r[h]=a[l+h]*d+a[c+h]*u;return r}}class cg extends Ws{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class lg extends Ws{interpolate_(e,t,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=this.inTangents,d=this.outTangents;if(!u||!d){const p=(n-t)/(s-t),v=1-p;for(let g=0;g!==o;++g)r[g]=a[l+g]*v+a[c+g]*p;return r}const h=o*2,f=e-1;for(let p=0;p!==o;++p){const v=a[l+p],g=a[c+p],m=f*h+p*2,S=d[m],T=d[m+1],_=e*h+p*2,E=u[_],A=u[_+1];let I=(n-t)/(s-t),y,M,L,C,R;for(let B=0;B<8;B++){y=I*I,M=y*I,L=1-I,C=L*L,R=C*L;const N=R*t+3*C*I*S+3*L*y*E+M*s-n;if(Math.abs(N)<1e-10)break;const X=3*C*(S-t)+6*L*I*(E-S)+3*y*(s-E);if(Math.abs(X)<1e-10)break;I=I-N/X,I=Math.max(0,Math.min(1,I))}r[p]=R*v+3*C*I*T+3*L*y*A+M*g}return r}}class Ln{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=fa(t,this.TimeBufferType),this.values=fa(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:fa(e.times,Array),values:fa(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new cg(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new tf(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new og(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){const t=new lg(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Er:t=this.InterpolantFactoryMethodDiscrete;break;case Ar:t=this.InterpolantFactoryMethodLinear;break;case so:t=this.InterpolantFactoryMethodSmooth;break;case lu:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ie("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Er;case this.InterpolantFactoryMethodLinear:return Ar;case this.InterpolantFactoryMethodSmooth:return so;case this.InterpolantFactoryMethodBezier:return lu}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){const n=this.times,s=n.length;let r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);const o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(Ge("KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,s=this.values,r=n.length;r===0&&(Ge("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){const c=n[o];if(typeof c=="number"&&isNaN(c)){Ge("KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){Ge("KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(s!==void 0&&Sp(s))for(let o=0,c=s.length;o!==c;++o){const l=s[o];if(isNaN(l)){Ge("KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===so,r=e.length-1;let a=1;for(let o=1;o<r;++o){let c=!1;const l=e[o],u=e[o+1];if(l!==u&&(o!==1||l!==e[0]))if(s)c=!0;else{const d=o*n,h=d-n,f=d+n;for(let p=0;p!==n;++p){const v=t[d+p];if(v!==t[h+p]||v!==t[f+p]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];const d=o*n,h=a*n;for(let f=0;f!==n;++f)t[h+f]=t[d+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}Ln.prototype.ValueTypeName="";Ln.prototype.TimeBufferType=Float32Array;Ln.prototype.ValueBufferType=Float32Array;Ln.prototype.DefaultInterpolation=Ar;class Xs extends Ln{constructor(e,t,n){super(e,t,n)}}Xs.prototype.ValueTypeName="bool";Xs.prototype.ValueBufferType=Array;Xs.prototype.DefaultInterpolation=Er;Xs.prototype.InterpolantFactoryMethodLinear=void 0;Xs.prototype.InterpolantFactoryMethodSmooth=void 0;class nf extends Ln{constructor(e,t,n,s){super(e,t,n,s)}}nf.prototype.ValueTypeName="color";class Dr extends Ln{constructor(e,t,n,s){super(e,t,n,s)}}Dr.prototype.ValueTypeName="number";class ug extends Ws{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(s-t);let l=e*o;for(let u=l+o;l!==u;l+=4)xn.slerpFlat(r,0,a,l-o,a,l,c);return r}}class Nr extends Ln{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new ug(this.times,this.values,this.getValueSize(),e)}}Nr.prototype.ValueTypeName="quaternion";Nr.prototype.InterpolantFactoryMethodSmooth=void 0;class qs extends Ln{constructor(e,t,n){super(e,t,n)}}qs.prototype.ValueTypeName="string";qs.prototype.ValueBufferType=Array;qs.prototype.DefaultInterpolation=Er;qs.prototype.InterpolantFactoryMethodLinear=void 0;qs.prototype.InterpolantFactoryMethodSmooth=void 0;class Ga extends Ln{constructor(e,t,n,s){super(e,t,n,s)}}Ga.prototype.ValueTypeName="vector";class Wa{constructor(e="",t=-1,n=[],s=Sl){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=_n(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,s=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(hg(n[a]).scale(s));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){const t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,a=n.length;r!==a;++r)t.push(Ln.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){const r=t.length,a=[];for(let o=0;o<r;o++){let c=[],l=[];c.push((o+r-1)%r,o,(o+1)%r),l.push(0,1,0);const u=rg(c);c=Ju(c,1,u),l=Ju(l,1,u),!s&&c[0]===0&&(c.push(r),l.push(l[0])),a.push(new Dr(".morphTargetInfluences["+t[o].name+"]",c,l).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const s={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){const l=e[o],u=l.name.match(r);if(u&&u.length>1){const d=u[1];let h=s[d];h||(s[d]=h=[]),h.push(l)}}const a=[];for(const o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],t,n));return a}resetDuration(){const e=this.tracks;let t=0;for(let n=0,s=e.length;n!==s;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function dg(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Dr;case"vector":case"vector2":case"vector3":case"vector4":return Ga;case"color":return nf;case"quaternion":return Nr;case"bool":case"boolean":return Xs;case"string":return qs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function hg(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=dg(i.type);if(i.times===void 0){const t=[],n=[];ag(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const si={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(ju(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!ju(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function ju(i){try{const e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class fg{constructor(e,t,n){const s=this;let r=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,d){return l.push(u,d),this},this.removeHandler=function(u){const d=l.indexOf(u);return d!==-1&&l.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=l.length;d<h;d+=2){const f=l[d],p=l[d+1];if(f.global&&(f.lastIndex=0),f.test(u))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const pg=new fg;class Ys{constructor(e){this.manager=e!==void 0?e:pg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Ys.DEFAULT_MATERIAL_NAME="__DEFAULT";const ti={};class mg extends Error{constructor(e,t){super(e),this.response=t}}class sf extends Ys{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=si.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(ti[e]!==void 0){ti[e].push({onLoad:t,onProgress:n,onError:s});return}ti[e]=[],ti[e].push({onLoad:t,onProgress:n,onError:s});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&Ie("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const u=ti[e],d=l.body.getReader(),h=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=h?parseInt(h):0,p=f!==0;let v=0;const g=new ReadableStream({start(m){S();function S(){d.read().then(({done:T,value:_})=>{if(T)m.close();else{v+=_.byteLength;const E=new ProgressEvent("progress",{lengthComputable:p,loaded:v,total:f});for(let A=0,I=u.length;A<I;A++){const y=u[A];y.onProgress&&y.onProgress(E)}m.enqueue(_),S()}},T=>{m.error(T)})}}});return new Response(g)}else throw new mg(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return l.json();default:if(o==="")return l.text();{const d=/charset="?([^;"\s]*)"?/i.exec(o),h=d&&d[1]?d[1].toLowerCase():void 0,f=new TextDecoder(h);return l.arrayBuffer().then(p=>f.decode(p))}}}).then(l=>{si.add(`file:${e}`,l);const u=ti[e];delete ti[e];for(let d=0,h=u.length;d<h;d++){const f=u[d];f.onLoad&&f.onLoad(l)}}).catch(l=>{const u=ti[e];if(u===void 0)throw this.manager.itemError(e),l;delete ti[e];for(let d=0,h=u.length;d<h;d++){const f=u[d];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const _s=new WeakMap;class gg extends Ys{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=si.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let d=_s.get(a);d===void 0&&(d=[],_s.set(a,d)),d.push({onLoad:t,onError:s})}return a}const o=Rr("img");function c(){u(),t&&t(this);const d=_s.get(this)||[];for(let h=0;h<d.length;h++){const f=d[h];f.onLoad&&f.onLoad(this)}_s.delete(this),r.manager.itemEnd(e)}function l(d){u(),s&&s(d),si.remove(`image:${e}`);const h=_s.get(this)||[];for(let f=0;f<h.length;f++){const p=h[f];p.onError&&p.onError(d)}_s.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),si.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}}class rf extends Ys{constructor(e){super(e)}load(e,t,n,s){const r=new kt,a=new gg(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}}class $a extends Et{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new We(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const Uo=new $e,Qu=new F,ed=new F;class Fl{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Te(512,512),this.mapType=on,this.map=null,this.mapPass=null,this.matrix=new $e,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Il,this._frameExtents=new Te(1,1),this._viewportCount=1,this._viewports=[new gt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Qu.setFromMatrixPosition(e.matrixWorld),t.position.copy(Qu),ed.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ed),t.updateMatrixWorld(),Uo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Uo,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===wr||t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Uo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const pa=new F,ma=new xn,On=new F;class af extends Et{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $e,this.projectionMatrix=new $e,this.projectionMatrixInverse=new $e,this.coordinateSystem=Vn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(pa,ma,On),On.x===1&&On.y===1&&On.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(pa,ma,On.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(pa,ma,On),On.x===1&&On.y===1&&On.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(pa,ma,On.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const vi=new F,td=new Te,nd=new Te;class jt extends af{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Bs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(_r*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Bs*2*Math.atan(Math.tan(_r*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){vi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(vi.x,vi.y).multiplyScalar(-e/vi.z),vi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(vi.x,vi.y).multiplyScalar(-e/vi.z)}getViewSize(e,t){return this.getViewBounds(e,td,nd),t.subVectors(nd,td)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(_r*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class _g extends Fl{constructor(){super(new jt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=Bs*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class xg extends $a{constructor(e,t,n=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Et.DEFAULT_UP),this.updateMatrix(),this.target=new Et,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new _g}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class vg extends Fl{constructor(){super(new jt(90,1,.5,500)),this.isPointLightShadow=!0}}class Jc extends $a{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new vg}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class Za extends af{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class yg extends Fl{constructor(){super(new Za(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class of extends $a{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Et.DEFAULT_UP),this.updateMatrix(),this.target=new Et,this.shadow=new yg}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class Mg extends $a{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Sr{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const Oo=new WeakMap;class Sg extends Ys{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Ie("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Ie("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=si.get(`image-bitmap:${e}`);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(l=>{Oo.has(a)===!0?(s&&s(Oo.get(a)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(l),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);return}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const c=fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){si.add(`image-bitmap:${e}`,l),t&&t(l),r.manager.itemEnd(e)}).catch(function(l){s&&s(l),Oo.set(c,l),si.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});si.add(`image-bitmap:${e}`,c),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const xs=-90,vs=1;class bg extends Et{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new jt(xs,vs,e,t);s.layers=this.layers,this.add(s);const r=new jt(xs,vs,e,t);r.layers=this.layers,this.add(r);const a=new jt(xs,vs,e,t);a.layers=this.layers,this.add(a);const o=new jt(xs,vs,e,t);o.layers=this.layers,this.add(o);const c=new jt(xs,vs,e,t);c.layers=this.layers,this.add(c);const l=new jt(xs,vs,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,c]=t;for(const l of t)this.remove(l);if(e===Vn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===wr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(d,h,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}}class Tg extends jt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Eg{constructor(e,t,n){this.binding=e,this.valueSize=n;let s,r,a;switch(t){case"quaternion":s=this._slerp,r=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":s=this._select,r=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:s=this._lerp,r=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=s,this._mixBufferRegionAdditive=r,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,s=this.valueSize,r=e*s+s;let a=this.cumulativeWeight;if(a===0){for(let o=0;o!==s;++o)n[r+o]=n[o];a=t}else{a+=t;const o=t/a;this._mixBufferRegion(n,r,0,o,s)}this.cumulativeWeight=a}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,s=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,s,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,s=e*t+t,r=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const c=t*this._origIndex;this._mixBufferRegion(n,s,c,1-r,t)}a>0&&this._mixBufferRegionAdditive(n,s,this._addIndex*t,1,t);for(let c=t,l=t+t;c!==l;++c)if(n[c]!==n[c+t]){o.setValue(n,s);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,s=n*this._origIndex;e.getValue(t,s);for(let r=n,a=s;r!==a;++r)t[r]=t[s+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,s,r){if(s>=.5)for(let a=0;a!==r;++a)e[t+a]=e[n+a]}_slerp(e,t,n,s){xn.slerpFlat(e,t,e,t,e,n,s)}_slerpAdditive(e,t,n,s,r){const a=this._workIndex*r;xn.multiplyQuaternionsFlat(e,a,e,t,e,n),xn.slerpFlat(e,t,e,t,e,a,s)}_lerp(e,t,n,s,r){const a=1-s;for(let o=0;o!==r;++o){const c=t+o;e[c]=e[c]*a+e[n+o]*s}}_lerpAdditive(e,t,n,s,r){for(let a=0;a!==r;++a){const o=t+a;e[o]=e[o]+e[n+a]*s}}}const kl="\\[\\]\\.:\\/",Ag=new RegExp("["+kl+"]","g"),Bl="[^"+kl+"]",wg="[^"+kl.replace("\\.","")+"]",Rg=/((?:WC+[\/:])*)/.source.replace("WC",Bl),Cg=/(WCOD+)?/.source.replace("WCOD",wg),Pg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Bl),Ig=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Bl),Lg=new RegExp("^"+Rg+Cg+Pg+Ig+"$"),Dg=["material","materials","bones","map"];class Ng{constructor(e,t,n){const s=n||dt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class dt{constructor(e,t,n){this.path=t,this.parsedPath=n||dt.parseTrackName(t),this.node=dt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new dt.Composite(e,t,n):new dt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Ag,"")}static parseTrackName(e){const t=Lg.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=n.nodeName.substring(s+1);Dg.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let a=0;a<r.length;a++){const o=r[a];if(o.name===t||o.uuid===t)return o;const c=n(o.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,s=t.propertyName;let r=t.propertyIndex;if(e||(e=dt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ie("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){Ge("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ge("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ge("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===l){l=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ge("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ge("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Ge("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){Ge("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const a=e[s];if(a===void 0){const l=t.nodeName;Ge("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Ge("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ge("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}dt.Composite=Ng;dt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};dt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};dt.prototype.GetterByBindingType=[dt.prototype._getValue_direct,dt.prototype._getValue_array,dt.prototype._getValue_arrayElement,dt.prototype._getValue_toArray];dt.prototype.SetterByBindingTypeAndVersioning=[[dt.prototype._setValue_direct,dt.prototype._setValue_direct_setNeedsUpdate,dt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[dt.prototype._setValue_array,dt.prototype._setValue_array_setNeedsUpdate,dt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[dt.prototype._setValue_arrayElement,dt.prototype._setValue_arrayElement_setNeedsUpdate,dt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[dt.prototype._setValue_fromArray,dt.prototype._setValue_fromArray_setNeedsUpdate,dt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Ug{constructor(e,t,n=null,s=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=s;const r=t.tracks,a=r.length,o=new Array(a),c={endingStart:As,endingEnd:As};for(let l=0;l!==a;++l){const u=r[l].createInterpolant(null);o[l]=u,u.settings=c}this._interpolantSettings=c,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._restoreTimeScale=null,this._weightInterpolant=null,this.loop=lp,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n=!1){if(e.fadeOut(t),this.fadeIn(t),n===!0){const s=this._clip.duration,r=e._clip.duration,a=r/s,o=s/r;e._restoreTimeScale=e.timeScale,this._restoreTimeScale=this.timeScale,e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,n=!1){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const s=this._mixer,r=s.time,a=this.timeScale;let o=this._timeScaleInterpolant;o===null&&(o=s._lendControlInterpolant(),this._timeScaleInterpolant=o);const c=o.parameterPositions,l=o.sampleValues;return c[0]=r,c[1]=r+n,l[0]=e/a,l[1]=t/a,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this._restoreTimeScale=null,this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,s){if(!this.enabled){this._updateWeight(e);return}const r=this._startTime;if(r!==null){const c=(e-r)*n;c<0||n===0?t=0:(this._startTime=null,t=n*c)}t*=this._updateTimeScale(e);const a=this._updateTime(t),o=this._updateWeight(e);if(o>0){const c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case dp:for(let u=0,d=c.length;u!==d;++u)c[u].evaluate(a),l[u].accumulateAdditive(o);break;case Sl:default:for(let u=0,d=c.length;u!==d;++u)c[u].evaluate(a),l[u].accumulate(s,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const s=n.evaluate(e)[0];t*=s,e>n.parameterPositions[1]&&(this.stopFading(),s===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const s=n.evaluate(e)[0];t*=s,e>n.parameterPositions[1]&&(t===0?this.paused=!0:(this._restoreTimeScale!==null&&(t=this._restoreTimeScale),this.timeScale=t),this.stopWarping())}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let s=this.time+e,r=this._loopCount;const a=n===up;if(e===0)return r===-1?s:a&&(r&1)===1?t-s:s;if(n===Ih){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(s>=t)s=t;else if(s<0)s=0;else{this.time=s;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),s>=t||s<0){const o=Math.floor(s/t);s-=t*o,r+=Math.abs(o);const c=this.repetitions-r;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,s=e>0?t:0,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(c===1){const l=e<0;this._setEndings(l,!l,a)}else this._setEndings(!1,!1,a);this._loopCount=r,this.time=s,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this._loopCount=r,this.time=s;if(a&&(r&1)===1)return t-s}return s}_setEndings(e,t,n){const s=this._interpolantSettings;n?(s.endingStart=ws,s.endingEnd=ws):(e?s.endingStart=this.zeroSlopeAtStart?ws:As:s.endingStart=ka,t?s.endingEnd=this.zeroSlopeAtEnd?ws:As:s.endingEnd=ka)}_scheduleFading(e,t,n){const s=this._mixer,r=s.time;let a=this._weightInterpolant;a===null&&(a=s._lendControlInterpolant(),this._weightInterpolant=a);const o=a.parameterPositions,c=a.sampleValues;return o[0]=r,c[0]=t,o[1]=r+e,c[1]=n,this}}const Og=new Float32Array(1);class Fg extends Pi{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}_bindAction(e,t){const n=e._localRoot||this._root,s=e._clip.tracks,r=s.length,a=e._propertyBindings,o=e._interpolants,c=n.uuid,l=this._bindingsByRootAndName;let u=l[c];u===void 0&&(u={},l[c]=u);for(let d=0;d!==r;++d){const h=s[d],f=h.name;let p=u[f];if(p!==void 0)++p.referenceCount,a[d]=p;else{if(p=a[d],p!==void 0){p._cacheIndex===null&&(++p.referenceCount,this._addInactiveBinding(p,c,f));continue}const v=t&&t._propertyBindings[d].binding.parsedPath;p=new Eg(dt.create(n,f,v),h.ValueTypeName,h.getValueSize()),++p.referenceCount,this._addInactiveBinding(p,c,f),a[d]=p}o[d].resultBuffer=p.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,s=e._clip.uuid,r=this._actionsByClip[s];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,s,n)}const t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){const r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){const r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const s=this._actions,r=this._actionsByClip;let a=r[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=a;else{const o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=s.length,s.push(e),a.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],s=e._cacheIndex;n._cacheIndex=s,t[s]=n,t.pop(),e._cacheIndex=null;const r=e._clip.uuid,a=this._actionsByClip,o=a[r],c=o.knownActions,l=c[c.length-1],u=e._byClipCacheIndex;l._byClipCacheIndex=u,c[u]=l,c.pop(),e._byClipCacheIndex=null;const d=o.actionByRoot,h=(e._localRoot||this._root).uuid;delete d[h],c.length===0&&delete a[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){const r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,s=this._nActiveActions++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,s=--this._nActiveActions,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){const s=this._bindingsByRootAndName,r=this._bindings;let a=s[t];a===void 0&&(a={},s[t]=a),a[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,s=n.rootNode.uuid,r=n.path,a=this._bindingsByRootAndName,o=a[s],c=t[t.length-1],l=e._cacheIndex;c._cacheIndex=l,t[l]=c,t.pop(),delete o[r],Object.keys(o).length===0&&delete a[s]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,s=this._nActiveBindings++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,s=--this._nActiveBindings,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new tf(new Float32Array(2),new Float32Array(2),1,Og),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,s=--this._nActiveControlInterpolants,r=t[s];e.__cacheIndex=s,t[s]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){const s=t||this._root,r=s.uuid;let a=typeof e=="string"?Wa.findByName(s,e):e;const o=a!==null?a.uuid:e,c=this._actionsByClip[o];let l=null;if(n===void 0&&(a!==null?n=a.blendMode:n=Sl),c!==void 0){const d=c.actionByRoot[r];if(d!==void 0&&d.blendMode===n)return d;l=c.knownActions[0],a===null&&(a=l._clip)}if(a===null)return null;const u=new Ug(this,a,t,n);return this._bindAction(u,l),this._addInactiveAction(u,o,r),u}existingAction(e,t){const n=t||this._root,s=n.uuid,r=typeof e=="string"?Wa.findByName(n,e):e,a=r?r.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[s]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,s=this.time+=e,r=Math.sign(e),a=this._accuIndex^=1;for(let l=0;l!==n;++l)t[l]._update(s,e,r,a);const o=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)o[l].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,s=this._actionsByClip,r=s[n];if(r!==void 0){const a=r.knownActions;for(let o=0,c=a.length;o!==c;++o){const l=a[o];this._deactivateAction(l);const u=l._cacheIndex,d=t[t.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,d._cacheIndex=u,t[u]=d,t.pop(),this._removeInactiveBindingsForAction(l)}delete s[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const a in n){const o=n[a].actionByRoot,c=o[t];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}const s=this._bindingsByRootAndName,r=s[t];if(r!==void 0)for(const a in r){const o=r[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}const id=new $e;class kg{constructor(e,t,n=0,s=1/0){this.ray=new Or(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new wl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Ge("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return id.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(id),this}intersectObject(e,t=!0,n=[]){return jc(e,this,n,t),n.sort(sd),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)jc(e[s],this,n,t);return n.sort(sd),n}}function sd(i,e){return i.distance-e.distance}function jc(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let a=0,o=r.length;a<o;a++)jc(r[a],e,t,!0)}}class Bg{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Ie("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const $l=class $l{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){const r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};$l.prototype.isMatrix2=!0;let rd=$l;function ad(i,e,t,n){const s=zg(n);switch(t){case Ch:return i*e;case xl:return i*e/s.components*s.byteLength;case vl:return i*e/s.components*s.byteLength;case Yi:return i*e*2/s.components*s.byteLength;case yl:return i*e*2/s.components*s.byteLength;case Ph:return i*e*3/s.components*s.byteLength;case mn:return i*e*4/s.components*s.byteLength;case Ml:return i*e*4/s.components*s.byteLength;case Ea:case Aa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case wa:case Ra:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case fc:case mc:return Math.max(i,16)*Math.max(e,8)/4;case hc:case pc:return Math.max(i,8)*Math.max(e,8)/2;case gc:case _c:case vc:case yc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case xc:case Oa:case Mc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Sc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case bc:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Tc:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Ec:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Ac:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case wc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Rc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Cc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Pc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Ic:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Lc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Dc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Nc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Uc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Oc:case Fc:case kc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Bc:case zc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Fa:case Hc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function zg(i){switch(i){case on:case Eh:return{byteLength:1,components:1};case br:case Ah:case li:return{byteLength:2,components:1};case gl:case _l:return{byteLength:2,components:4};case Xn:case ml:case pn:return{byteLength:4,components:1};case wh:case Rh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:pl}}));typeof window<"u"&&(window.__THREE__?Ie("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=pl);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function cf(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Hg(i){const e=new WeakMap;function t(o,c){const l=o.array,u=o.usage,d=l.byteLength,h=i.createBuffer();i.bindBuffer(c,h),i.bufferData(c,l,u),o.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,c,l){const u=c.array,d=c.updateRanges;if(i.bindBuffer(l,o),d.length===0)i.bufferSubData(l,0,u);else{d.sort((f,p)=>f.start-p.start);let h=0;for(let f=1;f<d.length;f++){const p=d[h],v=d[f];v.start<=p.start+p.count+1?p.count=Math.max(p.count,v.start+v.count-p.start):(++h,d[h]=v)}d.length=h+1;for(let f=0,p=d.length;f<p;f++){const v=d[f];i.bufferSubData(l,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var Vg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Gg=`#ifdef USE_ALPHAHASH
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
#endif`,Wg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Xg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Yg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Kg=`#ifdef USE_AOMAP
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
#endif`,$g=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Zg=`#ifdef USE_BATCHING
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
#endif`,Jg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,jg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Qg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,e_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,t_=`#ifdef USE_IRIDESCENCE
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
#endif`,n_=`#ifdef USE_BUMPMAP
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
#endif`,i_=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,s_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,r_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,a_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,o_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,c_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,l_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,u_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,d_=`#define PI 3.141592653589793
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
} // validated`,h_=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,f_=`vec3 transformedNormal = objectNormal;
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
#endif`,p_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,m_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,g_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,__=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,x_="gl_FragColor = linearToOutputTexel( gl_FragColor );",v_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,y_=`#ifdef USE_ENVMAP
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
#endif`,M_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,S_=`#ifdef USE_ENVMAP
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
#endif`,b_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,T_=`#ifdef USE_ENVMAP
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
#endif`,E_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,A_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,w_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,R_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,C_=`#ifdef USE_GRADIENTMAP
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
}`,P_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,I_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,L_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,D_=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,N_=`#ifdef USE_ENVMAP
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
#endif`,U_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,O_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,F_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,k_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,B_=`PhysicalMaterial material;
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
#endif`,z_=`uniform sampler2D dfgLUT;
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
}`,H_=`
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
#endif`,V_=`#if defined( RE_IndirectDiffuse )
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
#endif`,G_=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,W_=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,X_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,q_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Y_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,K_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,$_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Z_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,J_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,j_=`#if defined( USE_POINTS_UV )
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
#endif`,Q_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,e0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,t0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,n0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,i0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,s0=`#ifdef USE_MORPHTARGETS
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
#endif`,r0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,a0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,o0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,c0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,l0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,u0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,d0=`#ifdef USE_NORMALMAP
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
#endif`,h0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,f0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,p0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,m0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,g0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,_0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,x0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,v0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,y0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,M0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,S0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,b0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,T0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,E0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,A0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,w0=`float getShadowMask() {
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
}`,R0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,C0=`#ifdef USE_SKINNING
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
#endif`,P0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,I0=`#ifdef USE_SKINNING
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
#endif`,L0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,D0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,N0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,U0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,O0=`#ifdef USE_TRANSMISSION
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
#endif`,F0=`#ifdef USE_TRANSMISSION
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
#endif`,k0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,B0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,z0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,H0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const V0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,G0=`uniform sampler2D t2D;
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
}`,W0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,X0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,q0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Y0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,K0=`#include <common>
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
}`,$0=`#if DEPTH_PACKING == 3200
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
}`,Z0=`#define DISTANCE
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
}`,J0=`#define DISTANCE
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
}`,j0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Q0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ex=`uniform float scale;
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
}`,tx=`uniform vec3 diffuse;
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
}`,nx=`#include <common>
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
}`,ix=`uniform vec3 diffuse;
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
}`,sx=`#define LAMBERT
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
}`,rx=`#define LAMBERT
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
}`,ax=`#define MATCAP
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
}`,ox=`#define MATCAP
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
}`,cx=`#define NORMAL
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
}`,lx=`#define NORMAL
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
}`,ux=`#define PHONG
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
}`,dx=`#define PHONG
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
}`,hx=`#define STANDARD
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
}`,fx=`#define STANDARD
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
}`,px=`#define TOON
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
}`,mx=`#define TOON
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
}`,gx=`uniform float size;
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
}`,_x=`uniform vec3 diffuse;
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
}`,xx=`#include <common>
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
}`,vx=`uniform vec3 color;
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
}`,yx=`uniform float rotation;
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
}`,Mx=`uniform vec3 diffuse;
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
}`,et={alphahash_fragment:Vg,alphahash_pars_fragment:Gg,alphamap_fragment:Wg,alphamap_pars_fragment:Xg,alphatest_fragment:qg,alphatest_pars_fragment:Yg,aomap_fragment:Kg,aomap_pars_fragment:$g,batching_pars_vertex:Zg,batching_vertex:Jg,begin_vertex:jg,beginnormal_vertex:Qg,bsdfs:e_,iridescence_fragment:t_,bumpmap_pars_fragment:n_,clipping_planes_fragment:i_,clipping_planes_pars_fragment:s_,clipping_planes_pars_vertex:r_,clipping_planes_vertex:a_,color_fragment:o_,color_pars_fragment:c_,color_pars_vertex:l_,color_vertex:u_,common:d_,cube_uv_reflection_fragment:h_,defaultnormal_vertex:f_,displacementmap_pars_vertex:p_,displacementmap_vertex:m_,emissivemap_fragment:g_,emissivemap_pars_fragment:__,colorspace_fragment:x_,colorspace_pars_fragment:v_,envmap_fragment:y_,envmap_common_pars_fragment:M_,envmap_pars_fragment:S_,envmap_pars_vertex:b_,envmap_physical_pars_fragment:N_,envmap_vertex:T_,fog_vertex:E_,fog_pars_vertex:A_,fog_fragment:w_,fog_pars_fragment:R_,gradientmap_pars_fragment:C_,lightmap_pars_fragment:P_,lights_lambert_fragment:I_,lights_lambert_pars_fragment:L_,lights_pars_begin:D_,lights_toon_fragment:U_,lights_toon_pars_fragment:O_,lights_phong_fragment:F_,lights_phong_pars_fragment:k_,lights_physical_fragment:B_,lights_physical_pars_fragment:z_,lights_fragment_begin:H_,lights_fragment_maps:V_,lights_fragment_end:G_,lightprobes_pars_fragment:W_,logdepthbuf_fragment:X_,logdepthbuf_pars_fragment:q_,logdepthbuf_pars_vertex:Y_,logdepthbuf_vertex:K_,map_fragment:$_,map_pars_fragment:Z_,map_particle_fragment:J_,map_particle_pars_fragment:j_,metalnessmap_fragment:Q_,metalnessmap_pars_fragment:e0,morphinstance_vertex:t0,morphcolor_vertex:n0,morphnormal_vertex:i0,morphtarget_pars_vertex:s0,morphtarget_vertex:r0,normal_fragment_begin:a0,normal_fragment_maps:o0,normal_pars_fragment:c0,normal_pars_vertex:l0,normal_vertex:u0,normalmap_pars_fragment:d0,clearcoat_normal_fragment_begin:h0,clearcoat_normal_fragment_maps:f0,clearcoat_pars_fragment:p0,iridescence_pars_fragment:m0,opaque_fragment:g0,packing:_0,premultiplied_alpha_fragment:x0,project_vertex:v0,dithering_fragment:y0,dithering_pars_fragment:M0,roughnessmap_fragment:S0,roughnessmap_pars_fragment:b0,shadowmap_pars_fragment:T0,shadowmap_pars_vertex:E0,shadowmap_vertex:A0,shadowmask_pars_fragment:w0,skinbase_vertex:R0,skinning_pars_vertex:C0,skinning_vertex:P0,skinnormal_vertex:I0,specularmap_fragment:L0,specularmap_pars_fragment:D0,tonemapping_fragment:N0,tonemapping_pars_fragment:U0,transmission_fragment:O0,transmission_pars_fragment:F0,uv_pars_fragment:k0,uv_pars_vertex:B0,uv_vertex:z0,worldpos_vertex:H0,background_vert:V0,background_frag:G0,backgroundCube_vert:W0,backgroundCube_frag:X0,cube_vert:q0,cube_frag:Y0,depth_vert:K0,depth_frag:$0,distance_vert:Z0,distance_frag:J0,equirect_vert:j0,equirect_frag:Q0,linedashed_vert:ex,linedashed_frag:tx,meshbasic_vert:nx,meshbasic_frag:ix,meshlambert_vert:sx,meshlambert_frag:rx,meshmatcap_vert:ax,meshmatcap_frag:ox,meshnormal_vert:cx,meshnormal_frag:lx,meshphong_vert:ux,meshphong_frag:dx,meshphysical_vert:hx,meshphysical_frag:fx,meshtoon_vert:px,meshtoon_frag:mx,points_vert:gx,points_frag:_x,shadow_vert:xx,shadow_frag:vx,sprite_vert:yx,sprite_frag:Mx},ye={common:{diffuse:{value:new We(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ke}},envmap:{envMap:{value:null},envMapRotation:{value:new Ke},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ke},normalScale:{value:new Te(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new We(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new F},probesMax:{value:new F},probesResolution:{value:new F}},points:{diffuse:{value:new We(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0},uvTransform:{value:new Ke}},sprite:{diffuse:{value:new We(16777215)},opacity:{value:1},center:{value:new Te(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}}},Bn={basic:{uniforms:$t([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.fog]),vertexShader:et.meshbasic_vert,fragmentShader:et.meshbasic_frag},lambert:{uniforms:$t([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new We(0)},envMapIntensity:{value:1}}]),vertexShader:et.meshlambert_vert,fragmentShader:et.meshlambert_frag},phong:{uniforms:$t([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new We(0)},specular:{value:new We(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:et.meshphong_vert,fragmentShader:et.meshphong_frag},standard:{uniforms:$t([ye.common,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.roughnessmap,ye.metalnessmap,ye.fog,ye.lights,{emissive:{value:new We(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag},toon:{uniforms:$t([ye.common,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.gradientmap,ye.fog,ye.lights,{emissive:{value:new We(0)}}]),vertexShader:et.meshtoon_vert,fragmentShader:et.meshtoon_frag},matcap:{uniforms:$t([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,{matcap:{value:null}}]),vertexShader:et.meshmatcap_vert,fragmentShader:et.meshmatcap_frag},points:{uniforms:$t([ye.points,ye.fog]),vertexShader:et.points_vert,fragmentShader:et.points_frag},dashed:{uniforms:$t([ye.common,ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:et.linedashed_vert,fragmentShader:et.linedashed_frag},depth:{uniforms:$t([ye.common,ye.displacementmap]),vertexShader:et.depth_vert,fragmentShader:et.depth_frag},normal:{uniforms:$t([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,{opacity:{value:1}}]),vertexShader:et.meshnormal_vert,fragmentShader:et.meshnormal_frag},sprite:{uniforms:$t([ye.sprite,ye.fog]),vertexShader:et.sprite_vert,fragmentShader:et.sprite_frag},background:{uniforms:{uvTransform:{value:new Ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:et.background_vert,fragmentShader:et.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ke}},vertexShader:et.backgroundCube_vert,fragmentShader:et.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:et.cube_vert,fragmentShader:et.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:et.equirect_vert,fragmentShader:et.equirect_frag},distance:{uniforms:$t([ye.common,ye.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:et.distance_vert,fragmentShader:et.distance_frag},shadow:{uniforms:$t([ye.lights,ye.fog,{color:{value:new We(0)},opacity:{value:1}}]),vertexShader:et.shadow_vert,fragmentShader:et.shadow_frag}};Bn.physical={uniforms:$t([Bn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ke},clearcoatNormalScale:{value:new Te(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ke},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ke},sheen:{value:0},sheenColor:{value:new We(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ke},transmissionSamplerSize:{value:new Te},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ke},attenuationDistance:{value:0},attenuationColor:{value:new We(0)},specularColor:{value:new We(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ke},anisotropyVector:{value:new Te},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ke}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag};const ga={r:0,b:0,g:0},Sx=new $e,lf=new Ke;lf.set(-1,0,0,0,1,0,0,0,1);function bx(i,e,t,n,s,r){const a=new We(0);let o=s===!0?0:1,c,l,u=null,d=0,h=null;function f(S){let T=S.isScene===!0?S.background:null;if(T&&T.isTexture){const _=S.backgroundBlurriness>0;T=e.get(T,_)}return T}function p(S){let T=!1;const _=f(S);_===null?g(a,o):_&&_.isColor&&(g(_,1),T=!0);const E=i.xr.getEnvironmentBlendMode();E==="additive"?t.buffers.color.setClear(0,0,0,1,r):E==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||T)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function v(S,T){const _=f(T);_&&(_.isCubeTexture||_.mapping===Ka)?(l===void 0&&(l=new It(new Ri(1,1,1),new qn({name:"BackgroundCubeMaterial",uniforms:Vs(Bn.backgroundCube.uniforms),vertexShader:Bn.backgroundCube.vertexShader,fragmentShader:Bn.backgroundCube.fragmentShader,side:nn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(E,A,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=_,l.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Sx.makeRotationFromEuler(T.backgroundRotation)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(lf),l.material.toneMapped=rt.getTransfer(_.colorSpace)!==ht,(u!==_||d!==_.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,u=_,d=_.version,h=i.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new It(new Ci(2,2),new qn({name:"BackgroundMaterial",uniforms:Vs(Bn.background.uniforms),vertexShader:Bn.background.vertexShader,fragmentShader:Bn.background.fragmentShader,side:ci,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.toneMapped=rt.getTransfer(_.colorSpace)!==ht,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||d!==_.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,u=_,d=_.version,h=i.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function g(S,T){S.getRGB(ga,ef(i)),t.buffers.color.setClear(ga.r,ga.g,ga.b,T,r)}function m(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,T=1){a.set(S),o=T,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(S){o=S,g(a,o)},render:p,addToRenderList:v,dispose:m}}function Tx(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null);let r=s,a=!1;function o(C,R,B,V,N){let X=!1;const H=d(C,V,B,R);r!==H&&(r=H,l(r.object)),X=f(C,V,B,N),X&&p(C,V,B,N),N!==null&&e.update(N,i.ELEMENT_ARRAY_BUFFER),(X||a)&&(a=!1,_(C,R,B,V),N!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(N).buffer))}function c(){return i.createVertexArray()}function l(C){return i.bindVertexArray(C)}function u(C){return i.deleteVertexArray(C)}function d(C,R,B,V){const N=V.wireframe===!0;let X=n[R.id];X===void 0&&(X={},n[R.id]=X);const H=C.isInstancedMesh===!0?C.id:0;let q=X[H];q===void 0&&(q={},X[H]=q);let te=q[B.id];te===void 0&&(te={},q[B.id]=te);let Z=te[N];return Z===void 0&&(Z=h(c()),te[N]=Z),Z}function h(C){const R=[],B=[],V=[];for(let N=0;N<t;N++)R[N]=0,B[N]=0,V[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:B,attributeDivisors:V,object:C,attributes:{},index:null}}function f(C,R,B,V){const N=r.attributes,X=R.attributes;let H=0;const q=B.getAttributes();for(const te in q)if(q[te].location>=0){const oe=N[te];let he=X[te];if(he===void 0&&(te==="instanceMatrix"&&C.instanceMatrix&&(he=C.instanceMatrix),te==="instanceColor"&&C.instanceColor&&(he=C.instanceColor)),oe===void 0||oe.attribute!==he||he&&oe.data!==he.data)return!0;H++}return r.attributesNum!==H||r.index!==V}function p(C,R,B,V){const N={},X=R.attributes;let H=0;const q=B.getAttributes();for(const te in q)if(q[te].location>=0){let oe=X[te];oe===void 0&&(te==="instanceMatrix"&&C.instanceMatrix&&(oe=C.instanceMatrix),te==="instanceColor"&&C.instanceColor&&(oe=C.instanceColor));const he={};he.attribute=oe,oe&&oe.data&&(he.data=oe.data),N[te]=he,H++}r.attributes=N,r.attributesNum=H,r.index=V}function v(){const C=r.newAttributes;for(let R=0,B=C.length;R<B;R++)C[R]=0}function g(C){m(C,0)}function m(C,R){const B=r.newAttributes,V=r.enabledAttributes,N=r.attributeDivisors;B[C]=1,V[C]===0&&(i.enableVertexAttribArray(C),V[C]=1),N[C]!==R&&(i.vertexAttribDivisor(C,R),N[C]=R)}function S(){const C=r.newAttributes,R=r.enabledAttributes;for(let B=0,V=R.length;B<V;B++)R[B]!==C[B]&&(i.disableVertexAttribArray(B),R[B]=0)}function T(C,R,B,V,N,X,H){H===!0?i.vertexAttribIPointer(C,R,B,N,X):i.vertexAttribPointer(C,R,B,V,N,X)}function _(C,R,B,V){v();const N=V.attributes,X=B.getAttributes(),H=R.defaultAttributeValues;for(const q in X){const te=X[q];if(te.location>=0){let Z=N[q];if(Z===void 0&&(q==="instanceMatrix"&&C.instanceMatrix&&(Z=C.instanceMatrix),q==="instanceColor"&&C.instanceColor&&(Z=C.instanceColor)),Z!==void 0){const oe=Z.normalized,he=Z.itemSize,Qe=e.get(Z);if(Qe===void 0)continue;const lt=Qe.buffer,Be=Qe.type,ne=Qe.bytesPerElement,ue=Be===i.INT||Be===i.UNSIGNED_INT||Z.gpuType===ml;if(Z.isInterleavedBufferAttribute){const le=Z.data,ze=le.stride,Xe=Z.offset;if(le.isInstancedInterleavedBuffer){for(let Oe=0;Oe<te.locationSize;Oe++)m(te.location+Oe,le.meshPerAttribute);C.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let Oe=0;Oe<te.locationSize;Oe++)g(te.location+Oe);i.bindBuffer(i.ARRAY_BUFFER,lt);for(let Oe=0;Oe<te.locationSize;Oe++)T(te.location+Oe,he/te.locationSize,Be,oe,ze*ne,(Xe+he/te.locationSize*Oe)*ne,ue)}else{if(Z.isInstancedBufferAttribute){for(let le=0;le<te.locationSize;le++)m(te.location+le,Z.meshPerAttribute);C.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let le=0;le<te.locationSize;le++)g(te.location+le);i.bindBuffer(i.ARRAY_BUFFER,lt);for(let le=0;le<te.locationSize;le++)T(te.location+le,he/te.locationSize,Be,oe,he*ne,he/te.locationSize*le*ne,ue)}}else if(H!==void 0){const oe=H[q];if(oe!==void 0)switch(oe.length){case 2:i.vertexAttrib2fv(te.location,oe);break;case 3:i.vertexAttrib3fv(te.location,oe);break;case 4:i.vertexAttrib4fv(te.location,oe);break;default:i.vertexAttrib1fv(te.location,oe)}}}}S()}function E(){M();for(const C in n){const R=n[C];for(const B in R){const V=R[B];for(const N in V){const X=V[N];for(const H in X)u(X[H].object),delete X[H];delete V[N]}}delete n[C]}}function A(C){if(n[C.id]===void 0)return;const R=n[C.id];for(const B in R){const V=R[B];for(const N in V){const X=V[N];for(const H in X)u(X[H].object),delete X[H];delete V[N]}}delete n[C.id]}function I(C){for(const R in n){const B=n[R];for(const V in B){const N=B[V];if(N[C.id]===void 0)continue;const X=N[C.id];for(const H in X)u(X[H].object),delete X[H];delete N[C.id]}}}function y(C){for(const R in n){const B=n[R],V=C.isInstancedMesh===!0?C.id:0,N=B[V];if(N!==void 0){for(const X in N){const H=N[X];for(const q in H)u(H[q].object),delete H[q];delete N[X]}delete B[V],Object.keys(B).length===0&&delete n[R]}}}function M(){L(),a=!0,r!==s&&(r=s,l(r.object))}function L(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:M,resetDefaultState:L,dispose:E,releaseStatesOfGeometry:A,releaseStatesOfObject:y,releaseStatesOfProgram:I,initAttributes:v,enableAttribute:g,disableUnusedAttributes:S}}function Ex(i,e,t){let n;function s(c){n=c}function r(c,l){i.drawArrays(n,c,l),t.update(l,n,1)}function a(c,l,u){u!==0&&(i.drawArraysInstanced(n,c,l,u),t.update(l,n,u))}function o(c,l,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,u);let h=0;for(let f=0;f<u;f++)h+=l[f];t.update(h,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Ax(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(I){return!(I!==mn&&n.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(I){const y=I===li&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==on&&n.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==pn&&!y)}function c(I){if(I==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(Ie("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const d=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&h===!1&&Ie("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),T=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),E=i.getParameter(i.MAX_SAMPLES),A=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:f,maxVertexTextures:p,maxTextureSize:v,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:S,maxVaryings:T,maxFragmentUniforms:_,maxSamples:E,samples:A}}function wx(i){const e=this;let t=null,n=0,s=!1,r=!1;const a=new Mi,o=new Ke,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const f=d.length!==0||h||n!==0||s;return s=h,n=d.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,f){const p=d.clippingPlanes,v=d.clipIntersection,g=d.clipShadows,m=i.get(d);if(!s||p===null||p.length===0||r&&!g)r?u(null):l();else{const S=r?0:n,T=S*4;let _=m.clippingState||null;c.value=_,_=u(p,h,T,f);for(let E=0;E!==T;++E)_[E]=t[E];m.clippingState=_,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=S}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(d,h,f,p){const v=d!==null?d.length:0;let g=null;if(v!==0){if(g=c.value,p!==!0||g===null){const m=f+v*4,S=h.matrixWorldInverse;o.getNormalMatrix(S),(g===null||g.length<m)&&(g=new Float32Array(m));for(let T=0,_=f;T!==v;++T,_+=4)a.copy(d[T]).applyMatrix4(S,o),a.normal.toArray(g,_),g[_+3]=a.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,g}}const Ti=4,od=[.125,.215,.35,.446,.526,.582],Hi=20,Rx=256,ar=new Za,cd=new We;let Fo=null,ko=0,Bo=0,zo=!1;const Cx=new F;class ld{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){const{size:a=256,position:o=Cx}=r;Fo=this._renderer.getRenderTarget(),ko=this._renderer.getActiveCubeFace(),Bo=this._renderer.getActiveMipmapLevel(),zo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,s,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=hd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=dd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Fo,ko,Bo),this._renderer.xr.enabled=zo,e.scissorTest=!1,ys(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===qi||e.mapping===Fs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Fo=this._renderer.getRenderTarget(),ko=this._renderer.getActiveCubeFace(),Bo=this._renderer.getActiveMipmapLevel(),zo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Rt,minFilter:Rt,generateMipmaps:!1,type:li,format:mn,colorSpace:cn,depthBuffer:!1},s=ud(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ud(e,t,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Px(r)),this._blurMaterial=Lx(r,e,t),this._ggxMaterial=Ix(r,e,t)}return s}_compileMaterial(e){const t=new It(new tn,e);this._renderer.compile(t,ar)}_sceneToCubeUV(e,t,n,s,r){const c=new jt(90,1,t,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,f=d.toneMapping;d.getClearColor(cd),d.toneMapping=Gn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new It(new Ri,new gn({name:"PMREM.Background",side:nn,depthWrite:!1,depthTest:!1})));const v=this._backgroundBox,g=v.material;let m=!1;const S=e.background;S?S.isColor&&(g.color.copy(S),e.background=null,m=!0):(g.color.copy(cd),m=!0);for(let T=0;T<6;T++){const _=T%3;_===0?(c.up.set(0,l[T],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+u[T],r.y,r.z)):_===1?(c.up.set(0,0,l[T]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+u[T],r.z)):(c.up.set(0,l[T],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+u[T]));const E=this._cubeSize;ys(s,_*E,T>2?E:0,E,E),d.setRenderTarget(s),m&&d.render(v,c),d.render(e,c)}d.toneMapping=f,d.autoClear=h,e.background=S}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===qi||e.mapping===Fs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=hd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=dd());const r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=e;const c=this._cubeSize;ys(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,ar)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){const s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const c=a.uniforms,l=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),d=Math.sqrt(l*l-u*u),h=0+l*1.25,f=d*h,{_lodMax:p}=this,v=this._sizeLods[n],g=3*v*(n>p-Ti?n-p+Ti:0),m=4*(this._cubeSize-v);c.envMap.value=e.texture,c.roughness.value=f,c.mipInt.value=p-t,ys(r,g,m,3*v,2*v),s.setRenderTarget(r),s.render(o,ar),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=p-n,ys(e,g,m,3*v,2*v),s.setRenderTarget(e),s.render(o,ar)}_blur(e,t,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Ge("blur direction must be either latitudinal or longitudinal!");const u=3,d=this._lodMeshes[s];d.material=l;const h=l.uniforms,f=this._sizeLods[n]-1,p=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Hi-1),v=r/p,g=isFinite(r)?1+Math.floor(u*v):Hi;g>Hi&&Ie(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Hi}`);const m=[];let S=0;for(let I=0;I<Hi;++I){const y=I/v,M=Math.exp(-y*y/2);m.push(M),I===0?S+=M:I<g&&(S+=2*M)}for(let I=0;I<m.length;I++)m[I]=m[I]/S;h.envMap.value=e.texture,h.samples.value=g,h.weights.value=m,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:T}=this;h.dTheta.value=p,h.mipInt.value=T-n;const _=this._sizeLods[s],E=3*_*(s>T-Ti?s-T+Ti:0),A=4*(this._cubeSize-_);ys(t,E,A,3*_,2*_),c.setRenderTarget(t),c.render(d,ar)}}function Px(i){const e=[],t=[],n=[];let s=i;const r=i-Ti+1+od.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let c=1/o;a>i-Ti?c=od[a-i+Ti-1]:a===0&&(c=0),t.push(c);const l=1/(o-2),u=-l,d=1+l,h=[u,u,d,u,d,d,u,u,d,d,u,d],f=6,p=6,v=3,g=2,m=1,S=new Float32Array(v*p*f),T=new Float32Array(g*p*f),_=new Float32Array(m*p*f);for(let A=0;A<f;A++){const I=A%3*2/3-1,y=A>2?0:-1,M=[I,y,0,I+2/3,y,0,I+2/3,y+1,0,I,y,0,I+2/3,y+1,0,I,y+1,0];S.set(M,v*p*A),T.set(h,g*p*A);const L=[A,A,A,A,A,A];_.set(L,m*p*A)}const E=new tn;E.setAttribute("position",new en(S,v)),E.setAttribute("uv",new en(T,g)),E.setAttribute("faceIndex",new en(_,m)),n.push(new It(E,null)),s>Ti&&s--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function ud(i,e,t){const n=new Wn(i,e,t);return n.texture.mapping=Ka,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ys(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Ix(i,e,t){return new qn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Rx,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ja(),fragmentShader:`

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
		`,blending:ai,depthTest:!1,depthWrite:!1})}function Lx(i,e,t){const n=new Float32Array(Hi),s=new F(0,1,0);return new qn({name:"SphericalGaussianBlur",defines:{n:Hi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ja(),fragmentShader:`

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
		`,blending:ai,depthTest:!1,depthWrite:!1})}function dd(){return new qn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ja(),fragmentShader:`

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
		`,blending:ai,depthTest:!1,depthWrite:!1})}function hd(){return new qn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ja(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ai,depthTest:!1,depthWrite:!1})}function Ja(){return`

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
	`}class uf extends Wn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Gh(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ri(5,5,5),r=new qn({name:"CubemapFromEquirect",uniforms:Vs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:nn,blending:ai});r.uniforms.tEquirect.value=t;const a=new It(s,r),o=t.minFilter;return t.minFilter===ii&&(t.minFilter=Rt),new bg(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}}function Dx(i){let e=new WeakMap,t=new WeakMap,n=null;function s(h,f=!1){return h==null?null:f?a(h):r(h)}function r(h){if(h&&h.isTexture){const f=h.mapping;if(f===no||f===io)if(e.has(h)){const p=e.get(h).texture;return o(p,h.mapping)}else{const p=h.image;if(p&&p.height>0){const v=new uf(p.height);return v.fromEquirectangularTexture(i,h),e.set(h,v),h.addEventListener("dispose",l),o(v.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){const f=h.mapping,p=f===no||f===io,v=f===qi||f===Fs;if(p||v){let g=t.get(h);const m=g!==void 0?g.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==m)return n===null&&(n=new ld(i)),g=p?n.fromEquirectangular(h,g):n.fromCubemap(h,g),g.texture.pmremVersion=h.pmremVersion,t.set(h,g),g.texture;if(g!==void 0)return g.texture;{const S=h.image;return p&&S&&S.height>0||v&&S&&c(S)?(n===null&&(n=new ld(i)),g=p?n.fromEquirectangular(h):n.fromCubemap(h),g.texture.pmremVersion=h.pmremVersion,t.set(h,g),h.addEventListener("dispose",u),g.texture):null}}}return h}function o(h,f){return f===no?h.mapping=qi:f===io&&(h.mapping=Fs),h}function c(h){let f=0;const p=6;for(let v=0;v<p;v++)h[v]!==void 0&&f++;return f===p}function l(h){const f=h.target;f.removeEventListener("dispose",l);const p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function u(h){const f=h.target;f.removeEventListener("dispose",u);const p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function d(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function Nx(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&Is("WebGLRenderer: "+n+" extension not supported."),s}}}function Ux(i,e,t,n){const s={},r=new WeakMap;function a(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const p in h.attributes)e.remove(h.attributes[p]);h.removeEventListener("dispose",a),delete s[h.id];const f=r.get(h);f&&(e.remove(f),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(d,h){return s[h.id]===!0||(h.addEventListener("dispose",a),s[h.id]=!0,t.memory.geometries++),h}function c(d){const h=d.attributes;for(const f in h)e.update(h[f],i.ARRAY_BUFFER)}function l(d){const h=[],f=d.index,p=d.attributes.position;let v=0;if(p===void 0)return;if(f!==null){const S=f.array;v=f.version;for(let T=0,_=S.length;T<_;T+=3){const E=S[T+0],A=S[T+1],I=S[T+2];h.push(E,A,A,I,I,E)}}else{const S=p.array;v=p.version;for(let T=0,_=S.length/3-1;T<_;T+=3){const E=T+0,A=T+1,I=T+2;h.push(E,A,A,I,I,E)}}const g=new(p.count>=65535?Fh:Oh)(h,1);g.version=v;const m=r.get(d);m&&e.remove(m),r.set(d,g)}function u(d){const h=r.get(d);if(h){const f=d.index;f!==null&&h.version<f.version&&l(d)}else l(d);return r.get(d)}return{get:o,update:c,getWireframeAttribute:u}}function Ox(i,e,t){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function c(d,h){i.drawElements(n,h,r,d*a),t.update(h,n,1)}function l(d,h,f){f!==0&&(i.drawElementsInstanced(n,h,r,d*a,f),t.update(h,n,f))}function u(d,h,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,r,d,0,f);let v=0;for(let g=0;g<f;g++)v+=h[g];t.update(v,n,1)}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function Fx(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:Ge("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function kx(i,e,t){const n=new WeakMap,s=new gt;function r(a,o,c){const l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0;let h=n.get(o);if(h===void 0||h.count!==d){let L=function(){y.dispose(),n.delete(o),o.removeEventListener("dispose",L)};var f=L;h!==void 0&&h.texture.dispose();const p=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],S=o.morphAttributes.normal||[],T=o.morphAttributes.color||[];let _=0;p===!0&&(_=1),v===!0&&(_=2),g===!0&&(_=3);let E=o.attributes.position.count*_,A=1;E>e.maxTextureSize&&(A=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const I=new Float32Array(E*A*4*d),y=new Nh(I,E,A,d);y.type=pn,y.needsUpdate=!0;const M=_*4;for(let C=0;C<d;C++){const R=m[C],B=S[C],V=T[C],N=E*A*4*C;for(let X=0;X<R.count;X++){const H=X*M;p===!0&&(s.fromBufferAttribute(R,X),I[N+H+0]=s.x,I[N+H+1]=s.y,I[N+H+2]=s.z,I[N+H+3]=0),v===!0&&(s.fromBufferAttribute(B,X),I[N+H+4]=s.x,I[N+H+5]=s.y,I[N+H+6]=s.z,I[N+H+7]=0),g===!0&&(s.fromBufferAttribute(V,X),I[N+H+8]=s.x,I[N+H+9]=s.y,I[N+H+10]=s.z,I[N+H+11]=V.itemSize===4?s.w:1)}}h={count:d,texture:y,size:new Te(E,A)},n.set(o,h),o.addEventListener("dispose",L)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let p=0;for(let g=0;g<l.length;g++)p+=l[g];const v=o.morphTargetsRelative?1:1-p;c.getUniforms().setValue(i,"morphTargetBaseInfluence",v),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",h.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function Bx(i,e,t,n,s){let r=new WeakMap;function a(l){const u=s.render.frame,d=l.geometry,h=e.get(l,d);if(r.get(h)!==u&&(e.update(h),r.set(h,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==u&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==u&&(f.update(),r.set(f,u))}return h}function o(){r=new WeakMap}function c(l){const u=l.target;u.removeEventListener("dispose",c),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}const zx={[gh]:"LINEAR_TONE_MAPPING",[_h]:"REINHARD_TONE_MAPPING",[xh]:"CINEON_TONE_MAPPING",[vh]:"ACES_FILMIC_TONE_MAPPING",[Mh]:"AGX_TONE_MAPPING",[Sh]:"NEUTRAL_TONE_MAPPING",[yh]:"CUSTOM_TONE_MAPPING"};function Hx(i,e,t,n,s,r){const a=new Wn(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,depthTexture:s?new zs(e,t):void 0}),o=new Wn(e,t,{type:li,depthBuffer:!1,stencilBuffer:!1}),c=new tn;c.setAttribute("position",new Vt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Vt([0,2,0,0,2,0],2));const l=new ng({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new It(c,l),d=new Za(-1,1,1,-1,0,1);let h=null,f=null,p=!1,v,g=null,m=[],S=!1;this.setSize=function(T,_){a.setSize(T,_),o.setSize(T,_);for(let E=0;E<m.length;E++){const A=m[E];A.setSize&&A.setSize(T,_)}},this.setEffects=function(T){m=T,S=m.length>0&&m[0].isRenderPass===!0;const _=a.width,E=a.height;for(let A=0;A<m.length;A++){const I=m[A];I.setSize&&I.setSize(_,E)}},this.begin=function(T,_){if(p||T.toneMapping===Gn&&m.length===0)return!1;if(g=_,_!==null){const E=_.width,A=_.height;(a.width!==E||a.height!==A)&&this.setSize(E,A)}return S===!1&&T.setRenderTarget(a),v=T.toneMapping,T.toneMapping=Gn,!0},this.hasRenderPass=function(){return S},this.end=function(T,_){T.toneMapping=v,p=!0;let E=a,A=o;for(let I=0;I<m.length;I++){const y=m[I];if(y.enabled!==!1&&(y.render(T,A,E,_),y.needsSwap!==!1)){const M=E;E=A,A=M}}if(h!==T.outputColorSpace||f!==T.toneMapping){h=T.outputColorSpace,f=T.toneMapping,l.defines={},rt.getTransfer(h)===ht&&(l.defines.SRGB_TRANSFER="");const I=zx[f];I&&(l.defines[I]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=E.texture,T.setRenderTarget(g),T.render(u,d),g=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){a.depthTexture&&a.depthTexture.dispose(),a.dispose(),o.dispose(),c.dispose(),l.dispose()}}const df=new kt,Qc=new zs(1,1),hf=new Nh,ff=new Yp,pf=new Gh,fd=[],pd=[],md=new Float32Array(16),gd=new Float32Array(9),_d=new Float32Array(4);function Ks(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=fd[s];if(r===void 0&&(r=new Float32Array(s),fd[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Bt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function zt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function ja(i,e){let t=pd[e];t===void 0&&(t=new Int32Array(e),pd[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Vx(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Gx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;i.uniform2fv(this.addr,e),zt(t,e)}}function Wx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Bt(t,e))return;i.uniform3fv(this.addr,e),zt(t,e)}}function Xx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;i.uniform4fv(this.addr,e),zt(t,e)}}function qx(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Bt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),zt(t,e)}else{if(Bt(t,n))return;_d.set(n),i.uniformMatrix2fv(this.addr,!1,_d),zt(t,n)}}function Yx(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Bt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),zt(t,e)}else{if(Bt(t,n))return;gd.set(n),i.uniformMatrix3fv(this.addr,!1,gd),zt(t,n)}}function Kx(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Bt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),zt(t,e)}else{if(Bt(t,n))return;md.set(n),i.uniformMatrix4fv(this.addr,!1,md),zt(t,n)}}function $x(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Zx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;i.uniform2iv(this.addr,e),zt(t,e)}}function Jx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Bt(t,e))return;i.uniform3iv(this.addr,e),zt(t,e)}}function jx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;i.uniform4iv(this.addr,e),zt(t,e)}}function Qx(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function ev(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;i.uniform2uiv(this.addr,e),zt(t,e)}}function tv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Bt(t,e))return;i.uniform3uiv(this.addr,e),zt(t,e)}}function nv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;i.uniform4uiv(this.addr,e),zt(t,e)}}function iv(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Qc.compareFunction=t.isReversedDepthBuffer()?Tl:bl,r=Qc):r=df,t.setTexture2D(e||r,s)}function sv(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||ff,s)}function rv(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||pf,s)}function av(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||hf,s)}function ov(i){switch(i){case 5126:return Vx;case 35664:return Gx;case 35665:return Wx;case 35666:return Xx;case 35674:return qx;case 35675:return Yx;case 35676:return Kx;case 5124:case 35670:return $x;case 35667:case 35671:return Zx;case 35668:case 35672:return Jx;case 35669:case 35673:return jx;case 5125:return Qx;case 36294:return ev;case 36295:return tv;case 36296:return nv;case 35678:case 36198:case 36298:case 36306:case 35682:return iv;case 35679:case 36299:case 36307:return sv;case 35680:case 36300:case 36308:case 36293:return rv;case 36289:case 36303:case 36311:case 36292:return av}}function cv(i,e){i.uniform1fv(this.addr,e)}function lv(i,e){const t=Ks(e,this.size,2);i.uniform2fv(this.addr,t)}function uv(i,e){const t=Ks(e,this.size,3);i.uniform3fv(this.addr,t)}function dv(i,e){const t=Ks(e,this.size,4);i.uniform4fv(this.addr,t)}function hv(i,e){const t=Ks(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function fv(i,e){const t=Ks(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function pv(i,e){const t=Ks(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function mv(i,e){i.uniform1iv(this.addr,e)}function gv(i,e){i.uniform2iv(this.addr,e)}function _v(i,e){i.uniform3iv(this.addr,e)}function xv(i,e){i.uniform4iv(this.addr,e)}function vv(i,e){i.uniform1uiv(this.addr,e)}function yv(i,e){i.uniform2uiv(this.addr,e)}function Mv(i,e){i.uniform3uiv(this.addr,e)}function Sv(i,e){i.uniform4uiv(this.addr,e)}function bv(i,e,t){const n=this.cache,s=e.length,r=ja(t,s);Bt(n,r)||(i.uniform1iv(this.addr,r),zt(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Qc:a=df;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function Tv(i,e,t){const n=this.cache,s=e.length,r=ja(t,s);Bt(n,r)||(i.uniform1iv(this.addr,r),zt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||ff,r[a])}function Ev(i,e,t){const n=this.cache,s=e.length,r=ja(t,s);Bt(n,r)||(i.uniform1iv(this.addr,r),zt(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||pf,r[a])}function Av(i,e,t){const n=this.cache,s=e.length,r=ja(t,s);Bt(n,r)||(i.uniform1iv(this.addr,r),zt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||hf,r[a])}function wv(i){switch(i){case 5126:return cv;case 35664:return lv;case 35665:return uv;case 35666:return dv;case 35674:return hv;case 35675:return fv;case 35676:return pv;case 5124:case 35670:return mv;case 35667:case 35671:return gv;case 35668:case 35672:return _v;case 35669:case 35673:return xv;case 5125:return vv;case 36294:return yv;case 36295:return Mv;case 36296:return Sv;case 35678:case 36198:case 36298:case 36306:case 35682:return bv;case 35679:case 36299:case 36307:return Tv;case 35680:case 36300:case 36308:case 36293:return Ev;case 36289:case 36303:case 36311:case 36292:return Av}}class Rv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=ov(t.type)}}class Cv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=wv(t.type)}}class Pv{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],n)}}}const Ho=/(\w+)(\])?(\[|\.)?/g;function xd(i,e){i.seq.push(e),i.map[e.id]=e}function Iv(i,e,t){const n=i.name,s=n.length;for(Ho.lastIndex=0;;){const r=Ho.exec(n),a=Ho.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){xd(t,l===void 0?new Rv(o,i,e):new Cv(o,i,e));break}else{let d=t.map[o];d===void 0&&(d=new Pv(o),xd(t,d)),t=d}}}class Ca{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);Iv(o,c,this)}const s=[],r=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&n.push(a)}return n}}function vd(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Lv=37297;let Dv=0;function Nv(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const yd=new Ke;function Uv(i){rt._getMatrix(yd,rt.workingColorSpace,i);const e=`mat3( ${yd.elements.map(t=>t.toFixed(4))} )`;switch(rt.getTransfer(i)){case Ba:return[e,"LinearTransferOETF"];case ht:return[e,"sRGBTransferOETF"];default:return Ie("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Md(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+Nv(i.getShaderSource(e),o)}else return r}function Ov(i,e){const t=Uv(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const Fv={[gh]:"Linear",[_h]:"Reinhard",[xh]:"Cineon",[vh]:"ACESFilmic",[Mh]:"AgX",[Sh]:"Neutral",[yh]:"Custom"};function kv(i,e){const t=Fv[e];return t===void 0?(Ie("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const _a=new F;function Bv(){rt.getLuminanceCoefficients(_a);const i=_a.x.toFixed(4),e=_a.y.toFixed(4),t=_a.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function zv(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(gr).join(`
`)}function Hv(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Vv(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function gr(i){return i!==""}function Sd(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function bd(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Gv=/^[ \t]*#include +<([\w\d./]+)>/gm;function el(i){return i.replace(Gv,Xv)}const Wv=new Map;function Xv(i,e){let t=et[e];if(t===void 0){const n=Wv.get(e);if(n!==void 0)t=et[n],Ie('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return el(t)}const qv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Td(i){return i.replace(qv,Yv)}function Yv(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ed(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const Kv={[ba]:"SHADOWMAP_TYPE_PCF",[fr]:"SHADOWMAP_TYPE_VSM"};function $v(i){return Kv[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Zv={[qi]:"ENVMAP_TYPE_CUBE",[Fs]:"ENVMAP_TYPE_CUBE",[Ka]:"ENVMAP_TYPE_CUBE_UV"};function Jv(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Zv[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const jv={[Fs]:"ENVMAP_MODE_REFRACTION"};function Qv(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":jv[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const ey={[mh]:"ENVMAP_BLENDING_MULTIPLY",[ap]:"ENVMAP_BLENDING_MIX",[op]:"ENVMAP_BLENDING_ADD"};function ty(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":ey[i.combine]||"ENVMAP_BLENDING_NONE"}function ny(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function iy(i,e,t,n){const s=i.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=$v(t),l=Jv(t),u=Qv(t),d=ty(t),h=ny(t),f=zv(t),p=Hv(r),v=s.createProgram();let g,m,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(gr).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(gr).join(`
`),m.length>0&&(m+=`
`)):(g=[Ed(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(gr).join(`
`),m=[Ed(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Gn?"#define TONE_MAPPING":"",t.toneMapping!==Gn?et.tonemapping_pars_fragment:"",t.toneMapping!==Gn?kv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",et.colorspace_pars_fragment,Ov("linearToOutputTexel",t.outputColorSpace),Bv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(gr).join(`
`)),a=el(a),a=Sd(a,t),a=bd(a,t),o=el(o),o=Sd(o,t),o=bd(o,t),a=Td(a),o=Td(o),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",t.glslVersion===du?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===du?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const T=S+g+a,_=S+m+o,E=vd(s,s.VERTEX_SHADER,T),A=vd(s,s.FRAGMENT_SHADER,_);s.attachShader(v,E),s.attachShader(v,A),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function I(C){if(i.debug.checkShaderErrors){const R=s.getProgramInfoLog(v)||"",B=s.getShaderInfoLog(E)||"",V=s.getShaderInfoLog(A)||"",N=R.trim(),X=B.trim(),H=V.trim();let q=!0,te=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,E,A);else{const Z=Md(s,E,"vertex"),oe=Md(s,A,"fragment");Ge("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+N+`
`+Z+`
`+oe)}else N!==""?Ie("WebGLProgram: Program Info Log:",N):(X===""||H==="")&&(te=!1);te&&(C.diagnostics={runnable:q,programLog:N,vertexShader:{log:X,prefix:g},fragmentShader:{log:H,prefix:m}})}s.deleteShader(E),s.deleteShader(A),y=new Ca(s,v),M=Vv(s,v)}let y;this.getUniforms=function(){return y===void 0&&I(this),y};let M;this.getAttributes=function(){return M===void 0&&I(this),M};let L=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=s.getProgramParameter(v,Lv)),L},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Dv++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=E,this.fragmentShader=A,this}let sy=0;class ry{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new ay(e),t.set(e,n)),n}}class ay{constructor(e){this.id=sy++,this.code=e,this.usedTimes=0}}function oy(i){return i===Yi||i===Oa||i===Fa}function cy(i,e,t,n,s,r){const a=new wl,o=new ry,c=new Set,l=[],u=new Map,d=n.logarithmicDepthBuffer;let h=n.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(y){return c.add(y),y===0?"uv":`uv${y}`}function v(y,M,L,C,R,B){const V=C.fog,N=R.geometry,X=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?C.environment:null,H=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,q=e.get(y.envMap||X,H),te=q&&q.mapping===Ka?q.image.height:null,Z=f[y.type];y.precision!==null&&(h=n.getMaxPrecision(y.precision),h!==y.precision&&Ie("WebGLProgram.getParameters:",y.precision,"not supported, using",h,"instead."));const oe=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,he=oe!==void 0?oe.length:0;let Qe=0;N.morphAttributes.position!==void 0&&(Qe=1),N.morphAttributes.normal!==void 0&&(Qe=2),N.morphAttributes.color!==void 0&&(Qe=3);let lt,Be,ne,ue;if(Z){const Ce=Bn[Z];lt=Ce.vertexShader,Be=Ce.fragmentShader}else{lt=y.vertexShader,Be=y.fragmentShader;const Ce=o.getVertexShaderStage(y),Ct=o.getFragmentShaderStage(y);o.update(y,Ce,Ct),ne=Ce.id,ue=Ct.id}const le=i.getRenderTarget(),ze=i.state.buffers.depth.getReversed(),Xe=R.isInstancedMesh===!0,Oe=R.isBatchedMesh===!0,vt=!!y.map,je=!!y.matcap,ot=!!q,O=!!y.aoMap,D=!!y.lightMap,P=!!y.bumpMap&&y.wireframe===!1,k=!!y.normalMap,ee=!!y.displacementMap,ie=!!y.emissiveMap,ce=!!y.metalnessMap,xe=!!y.roughnessMap,U=y.anisotropy>0,Se=y.clearcoat>0,Re=y.dispersion>0,w=y.iridescence>0,x=y.sheen>0,W=y.transmission>0,Y=U&&!!y.anisotropyMap,j=Se&&!!y.clearcoatMap,de=Se&&!!y.clearcoatNormalMap,pe=Se&&!!y.clearcoatRoughnessMap,Q=w&&!!y.iridescenceMap,re=w&&!!y.iridescenceThicknessMap,me=x&&!!y.sheenColorMap,De=x&&!!y.sheenRoughnessMap,ve=!!y.specularMap,ge=!!y.specularColorMap,Fe=!!y.specularIntensityMap,Ve=W&&!!y.transmissionMap,Ze=W&&!!y.thicknessMap,z=!!y.gradientMap,fe=!!y.alphaMap,se=y.alphaTest>0,_e=!!y.alphaHash,Ee=!!y.extensions;let ae=Gn;y.toneMapped&&(le===null||le.isXRRenderTarget===!0)&&(ae=i.toneMapping);const Le={shaderID:Z,shaderType:y.type,shaderName:y.name,vertexShader:lt,fragmentShader:Be,defines:y.defines,customVertexShaderID:ne,customFragmentShaderID:ue,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:h,batching:Oe,batchingColor:Oe&&R._colorsTexture!==null,instancing:Xe,instancingColor:Xe&&R.instanceColor!==null,instancingMorph:Xe&&R.morphTexture!==null,outputColorSpace:le===null?i.outputColorSpace:le.isXRRenderTarget===!0?le.texture.colorSpace:rt.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:vt,matcap:je,envMap:ot,envMapMode:ot&&q.mapping,envMapCubeUVHeight:te,aoMap:O,lightMap:D,bumpMap:P,normalMap:k,displacementMap:ee,emissiveMap:ie,normalMapObjectSpace:k&&y.normalMapType===pp,normalMapTangentSpace:k&&y.normalMapType===Gc,packedNormalMap:k&&y.normalMapType===Gc&&oy(y.normalMap.format),metalnessMap:ce,roughnessMap:xe,anisotropy:U,anisotropyMap:Y,clearcoat:Se,clearcoatMap:j,clearcoatNormalMap:de,clearcoatRoughnessMap:pe,dispersion:Re,iridescence:w,iridescenceMap:Q,iridescenceThicknessMap:re,sheen:x,sheenColorMap:me,sheenRoughnessMap:De,specularMap:ve,specularColorMap:ge,specularIntensityMap:Fe,transmission:W,transmissionMap:Ve,thicknessMap:Ze,gradientMap:z,opaque:y.transparent===!1&&y.blending===Ps&&y.alphaToCoverage===!1,alphaMap:fe,alphaTest:se,alphaHash:_e,combine:y.combine,mapUv:vt&&p(y.map.channel),aoMapUv:O&&p(y.aoMap.channel),lightMapUv:D&&p(y.lightMap.channel),bumpMapUv:P&&p(y.bumpMap.channel),normalMapUv:k&&p(y.normalMap.channel),displacementMapUv:ee&&p(y.displacementMap.channel),emissiveMapUv:ie&&p(y.emissiveMap.channel),metalnessMapUv:ce&&p(y.metalnessMap.channel),roughnessMapUv:xe&&p(y.roughnessMap.channel),anisotropyMapUv:Y&&p(y.anisotropyMap.channel),clearcoatMapUv:j&&p(y.clearcoatMap.channel),clearcoatNormalMapUv:de&&p(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:pe&&p(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Q&&p(y.iridescenceMap.channel),iridescenceThicknessMapUv:re&&p(y.iridescenceThicknessMap.channel),sheenColorMapUv:me&&p(y.sheenColorMap.channel),sheenRoughnessMapUv:De&&p(y.sheenRoughnessMap.channel),specularMapUv:ve&&p(y.specularMap.channel),specularColorMapUv:ge&&p(y.specularColorMap.channel),specularIntensityMapUv:Fe&&p(y.specularIntensityMap.channel),transmissionMapUv:Ve&&p(y.transmissionMap.channel),thicknessMapUv:Ze&&p(y.thicknessMap.channel),alphaMapUv:fe&&p(y.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(k||U),vertexNormals:!!N.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:R.isPoints===!0&&!!N.attributes.uv&&(vt||fe),fog:!!V,useFog:y.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||N.attributes.normal===void 0&&k===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ze,skinning:R.isSkinnedMesh===!0,hasPositionAttribute:N.attributes.position!==void 0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:he,morphTextureStride:Qe,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numLightProbeGrids:B.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:ae,decodeVideoTexture:vt&&y.map.isVideoTexture===!0&&rt.getTransfer(y.map.colorSpace)===ht,decodeVideoTextureEmissive:ie&&y.emissiveMap.isVideoTexture===!0&&rt.getTransfer(y.emissiveMap.colorSpace)===ht,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===zn,flipSided:y.side===nn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Ee&&y.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ee&&y.extensions.multiDraw===!0||Oe)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Le.vertexUv1s=c.has(1),Le.vertexUv2s=c.has(2),Le.vertexUv3s=c.has(3),c.clear(),Le}function g(y){const M=[];if(y.shaderID?M.push(y.shaderID):(M.push(y.customVertexShaderID),M.push(y.customFragmentShaderID)),y.defines!==void 0)for(const L in y.defines)M.push(L),M.push(y.defines[L]);return y.isRawShaderMaterial===!1&&(m(M,y),S(M,y),M.push(i.outputColorSpace)),M.push(y.customProgramCacheKey),M.join()}function m(y,M){y.push(M.precision),y.push(M.outputColorSpace),y.push(M.envMapMode),y.push(M.envMapCubeUVHeight),y.push(M.mapUv),y.push(M.alphaMapUv),y.push(M.lightMapUv),y.push(M.aoMapUv),y.push(M.bumpMapUv),y.push(M.normalMapUv),y.push(M.displacementMapUv),y.push(M.emissiveMapUv),y.push(M.metalnessMapUv),y.push(M.roughnessMapUv),y.push(M.anisotropyMapUv),y.push(M.clearcoatMapUv),y.push(M.clearcoatNormalMapUv),y.push(M.clearcoatRoughnessMapUv),y.push(M.iridescenceMapUv),y.push(M.iridescenceThicknessMapUv),y.push(M.sheenColorMapUv),y.push(M.sheenRoughnessMapUv),y.push(M.specularMapUv),y.push(M.specularColorMapUv),y.push(M.specularIntensityMapUv),y.push(M.transmissionMapUv),y.push(M.thicknessMapUv),y.push(M.combine),y.push(M.fogExp2),y.push(M.sizeAttenuation),y.push(M.morphTargetsCount),y.push(M.morphAttributeCount),y.push(M.numDirLights),y.push(M.numPointLights),y.push(M.numSpotLights),y.push(M.numSpotLightMaps),y.push(M.numHemiLights),y.push(M.numRectAreaLights),y.push(M.numDirLightShadows),y.push(M.numPointLightShadows),y.push(M.numSpotLightShadows),y.push(M.numSpotLightShadowsWithMaps),y.push(M.numLightProbes),y.push(M.shadowMapType),y.push(M.toneMapping),y.push(M.numClippingPlanes),y.push(M.numClipIntersection),y.push(M.depthPacking)}function S(y,M){a.disableAll(),M.instancing&&a.enable(0),M.instancingColor&&a.enable(1),M.instancingMorph&&a.enable(2),M.matcap&&a.enable(3),M.envMap&&a.enable(4),M.normalMapObjectSpace&&a.enable(5),M.normalMapTangentSpace&&a.enable(6),M.clearcoat&&a.enable(7),M.iridescence&&a.enable(8),M.alphaTest&&a.enable(9),M.vertexColors&&a.enable(10),M.vertexAlphas&&a.enable(11),M.vertexUv1s&&a.enable(12),M.vertexUv2s&&a.enable(13),M.vertexUv3s&&a.enable(14),M.vertexTangents&&a.enable(15),M.anisotropy&&a.enable(16),M.alphaHash&&a.enable(17),M.batching&&a.enable(18),M.dispersion&&a.enable(19),M.batchingColor&&a.enable(20),M.gradientMap&&a.enable(21),M.packedNormalMap&&a.enable(22),M.vertexNormals&&a.enable(23),y.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),M.numLightProbeGrids>0&&a.enable(22),M.hasPositionAttribute&&a.enable(23),y.push(a.mask)}function T(y){const M=f[y.type];let L;if(M){const C=Bn[M];L=Qm.clone(C.uniforms)}else L=y.uniforms;return L}function _(y,M){let L=u.get(M);return L!==void 0?++L.usedTimes:(L=new iy(i,M,y,s),l.push(L),u.set(M,L)),L}function E(y){if(--y.usedTimes===0){const M=l.indexOf(y);l[M]=l[l.length-1],l.pop(),u.delete(y.cacheKey),y.destroy()}}function A(y){o.remove(y)}function I(){o.dispose()}return{getParameters:v,getProgramCacheKey:g,getUniforms:T,acquireProgram:_,releaseProgram:E,releaseShaderCache:A,programs:l,dispose:I}}function ly(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function uy(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Ad(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function wd(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(h){let f=0;return h.isInstancedMesh&&(f+=2),h.isSkinnedMesh&&(f+=1),f}function o(h,f,p,v,g,m){let S=i[e];return S===void 0?(S={id:h.id,object:h,geometry:f,material:p,materialVariant:a(h),groupOrder:v,renderOrder:h.renderOrder,z:g,group:m},i[e]=S):(S.id=h.id,S.object=h,S.geometry=f,S.material=p,S.materialVariant=a(h),S.groupOrder=v,S.renderOrder=h.renderOrder,S.z=g,S.group=m),e++,S}function c(h,f,p,v,g,m){const S=o(h,f,p,v,g,m);p.transmission>0?n.push(S):p.transparent===!0?s.push(S):t.push(S)}function l(h,f,p,v,g,m){const S=o(h,f,p,v,g,m);p.transmission>0?n.unshift(S):p.transparent===!0?s.unshift(S):t.unshift(S)}function u(h,f,p){t.length>1&&t.sort(h||uy),n.length>1&&n.sort(f||Ad),s.length>1&&s.sort(f||Ad),p&&(t.reverse(),n.reverse(),s.reverse())}function d(){for(let h=e,f=i.length;h<f;h++){const p=i[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:c,unshift:l,finish:d,sort:u}}function dy(){let i=new WeakMap;function e(n,s){const r=i.get(n);let a;return r===void 0?(a=new wd,i.set(n,[a])):s>=r.length?(a=new wd,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function hy(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new F,color:new We};break;case"SpotLight":t={position:new F,direction:new F,color:new We,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new We,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new We,groundColor:new We};break;case"RectAreaLight":t={color:new We,position:new F,halfWidth:new F,halfHeight:new F};break}return i[e.id]=t,t}}}function fy(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let py=0;function my(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function gy(i){const e=new hy,t=fy(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new F);const s=new F,r=new $e,a=new $e;function o(l){let u=0,d=0,h=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let f=0,p=0,v=0,g=0,m=0,S=0,T=0,_=0,E=0,A=0,I=0;l.sort(my);for(let M=0,L=l.length;M<L;M++){const C=l[M],R=C.color,B=C.intensity,V=C.distance;let N=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===Yi?N=C.shadow.map.texture:N=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)u+=R.r*B,d+=R.g*B,h+=R.b*B;else if(C.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(C.sh.coefficients[X],B);I++}else if(C.isDirectionalLight){const X=e.get(C);if(X.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const H=C.shadow,q=t.get(C);q.shadowIntensity=H.intensity,q.shadowBias=H.bias,q.shadowNormalBias=H.normalBias,q.shadowRadius=H.radius,q.shadowMapSize=H.mapSize,n.directionalShadow[f]=q,n.directionalShadowMap[f]=N,n.directionalShadowMatrix[f]=C.shadow.matrix,S++}n.directional[f]=X,f++}else if(C.isSpotLight){const X=e.get(C);X.position.setFromMatrixPosition(C.matrixWorld),X.color.copy(R).multiplyScalar(B),X.distance=V,X.coneCos=Math.cos(C.angle),X.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),X.decay=C.decay,n.spot[v]=X;const H=C.shadow;if(C.map&&(n.spotLightMap[E]=C.map,E++,H.updateMatrices(C),C.castShadow&&A++),n.spotLightMatrix[v]=H.matrix,C.castShadow){const q=t.get(C);q.shadowIntensity=H.intensity,q.shadowBias=H.bias,q.shadowNormalBias=H.normalBias,q.shadowRadius=H.radius,q.shadowMapSize=H.mapSize,n.spotShadow[v]=q,n.spotShadowMap[v]=N,_++}v++}else if(C.isRectAreaLight){const X=e.get(C);X.color.copy(R).multiplyScalar(B),X.halfWidth.set(C.width*.5,0,0),X.halfHeight.set(0,C.height*.5,0),n.rectArea[g]=X,g++}else if(C.isPointLight){const X=e.get(C);if(X.color.copy(C.color).multiplyScalar(C.intensity),X.distance=C.distance,X.decay=C.decay,C.castShadow){const H=C.shadow,q=t.get(C);q.shadowIntensity=H.intensity,q.shadowBias=H.bias,q.shadowNormalBias=H.normalBias,q.shadowRadius=H.radius,q.shadowMapSize=H.mapSize,q.shadowCameraNear=H.camera.near,q.shadowCameraFar=H.camera.far,n.pointShadow[p]=q,n.pointShadowMap[p]=N,n.pointShadowMatrix[p]=C.shadow.matrix,T++}n.point[p]=X,p++}else if(C.isHemisphereLight){const X=e.get(C);X.skyColor.copy(C.color).multiplyScalar(B),X.groundColor.copy(C.groundColor).multiplyScalar(B),n.hemi[m]=X,m++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ye.LTC_FLOAT_1,n.rectAreaLTC2=ye.LTC_FLOAT_2):(n.rectAreaLTC1=ye.LTC_HALF_1,n.rectAreaLTC2=ye.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=h;const y=n.hash;(y.directionalLength!==f||y.pointLength!==p||y.spotLength!==v||y.rectAreaLength!==g||y.hemiLength!==m||y.numDirectionalShadows!==S||y.numPointShadows!==T||y.numSpotShadows!==_||y.numSpotMaps!==E||y.numLightProbes!==I)&&(n.directional.length=f,n.spot.length=v,n.rectArea.length=g,n.point.length=p,n.hemi.length=m,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=T,n.pointShadowMap.length=T,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=T,n.spotLightMatrix.length=_+E-A,n.spotLightMap.length=E,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=I,y.directionalLength=f,y.pointLength=p,y.spotLength=v,y.rectAreaLength=g,y.hemiLength=m,y.numDirectionalShadows=S,y.numPointShadows=T,y.numSpotShadows=_,y.numSpotMaps=E,y.numLightProbes=I,n.version=py++)}function c(l,u){let d=0,h=0,f=0,p=0,v=0;const g=u.matrixWorldInverse;for(let m=0,S=l.length;m<S;m++){const T=l[m];if(T.isDirectionalLight){const _=n.directional[d];_.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(g),d++}else if(T.isSpotLight){const _=n.spot[f];_.position.setFromMatrixPosition(T.matrixWorld),_.position.applyMatrix4(g),_.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(g),f++}else if(T.isRectAreaLight){const _=n.rectArea[p];_.position.setFromMatrixPosition(T.matrixWorld),_.position.applyMatrix4(g),a.identity(),r.copy(T.matrixWorld),r.premultiply(g),a.extractRotation(r),_.halfWidth.set(T.width*.5,0,0),_.halfHeight.set(0,T.height*.5,0),_.halfWidth.applyMatrix4(a),_.halfHeight.applyMatrix4(a),p++}else if(T.isPointLight){const _=n.point[h];_.position.setFromMatrixPosition(T.matrixWorld),_.position.applyMatrix4(g),h++}else if(T.isHemisphereLight){const _=n.hemi[v];_.direction.setFromMatrixPosition(T.matrixWorld),_.direction.transformDirection(g),v++}}}return{setup:o,setupView:c,state:n}}function Rd(i){const e=new gy(i),t=[],n=[],s=[];function r(h){d.camera=h,t.length=0,n.length=0,s.length=0}function a(h){t.push(h)}function o(h){n.push(h)}function c(h){s.push(h)}function l(){e.setup(t)}function u(h){e.setupView(t,h)}const d={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:l,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:c}}function _y(i){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new Rd(i),e.set(s,[o])):r>=a.length?(o=new Rd(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const xy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,vy=`uniform sampler2D shadow_pass;
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
}`,yy=[new F(1,0,0),new F(-1,0,0),new F(0,1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1)],My=[new F(0,-1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1),new F(0,-1,0),new F(0,-1,0)],Cd=new $e,or=new F,Vo=new F;function Sy(i,e,t){let n=new Il;const s=new Te,r=new Te,a=new gt,o=new ig,c=new sg,l={},u=t.maxTextureSize,d={[ci]:nn,[nn]:ci,[zn]:zn},h=new qn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Te},radius:{value:4}},vertexShader:xy,fragmentShader:vy}),f=h.clone();f.defines.HORIZONTAL_PASS=1;const p=new tn;p.setAttribute("position",new en(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new It(p,h),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ba;let m=this.type;this.render=function(A,I,y){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||A.length===0)return;this.type===Hf&&(Ie("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=ba);const M=i.getRenderTarget(),L=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),R=i.state;R.setBlending(ai),R.buffers.depth.getReversed()===!0?R.buffers.color.setClear(0,0,0,0):R.buffers.color.setClear(1,1,1,1),R.buffers.depth.setTest(!0),R.setScissorTest(!1);const B=m!==this.type;B&&I.traverse(function(V){V.material&&(Array.isArray(V.material)?V.material.forEach(N=>N.needsUpdate=!0):V.material.needsUpdate=!0)});for(let V=0,N=A.length;V<N;V++){const X=A[V],H=X.shadow;if(H===void 0){Ie("WebGLShadowMap:",X,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);const q=H.getFrameExtents();s.multiply(q),r.copy(H.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/q.x),s.x=r.x*q.x,H.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/q.y),s.y=r.y*q.y,H.mapSize.y=r.y));const te=i.state.buffers.depth.getReversed();if(H.camera._reversedDepth=te,H.map===null||B===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===fr){if(X.isPointLight){Ie("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new Wn(s.x,s.y,{format:Yi,type:li,minFilter:Rt,magFilter:Rt,generateMipmaps:!1}),H.map.texture.name=X.name+".shadowMap",H.map.depthTexture=new zs(s.x,s.y,pn),H.map.depthTexture.name=X.name+".shadowMapDepth",H.map.depthTexture.format=ui,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=wt,H.map.depthTexture.magFilter=wt}else X.isPointLight?(H.map=new uf(s.x),H.map.depthTexture=new vm(s.x,Xn)):(H.map=new Wn(s.x,s.y),H.map.depthTexture=new zs(s.x,s.y,Xn)),H.map.depthTexture.name=X.name+".shadowMap",H.map.depthTexture.format=ui,this.type===ba?(H.map.depthTexture.compareFunction=te?Tl:bl,H.map.depthTexture.minFilter=Rt,H.map.depthTexture.magFilter=Rt):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=wt,H.map.depthTexture.magFilter=wt);H.camera.updateProjectionMatrix()}const Z=H.map.isWebGLCubeRenderTarget?6:1;for(let oe=0;oe<Z;oe++){if(H.map.isWebGLCubeRenderTarget)i.setRenderTarget(H.map,oe),i.clear();else{oe===0&&(i.setRenderTarget(H.map),i.clear());const he=H.getViewport(oe);a.set(r.x*he.x,r.y*he.y,r.x*he.z,r.y*he.w),R.viewport(a)}if(X.isPointLight){const he=H.camera,Qe=H.matrix,lt=X.distance||he.far;lt!==he.far&&(he.far=lt,he.updateProjectionMatrix()),or.setFromMatrixPosition(X.matrixWorld),he.position.copy(or),Vo.copy(he.position),Vo.add(yy[oe]),he.up.copy(My[oe]),he.lookAt(Vo),he.updateMatrixWorld(),Qe.makeTranslation(-or.x,-or.y,-or.z),Cd.multiplyMatrices(he.projectionMatrix,he.matrixWorldInverse),H._frustum.setFromProjectionMatrix(Cd,he.coordinateSystem,he.reversedDepth)}else H.updateMatrices(X);n=H.getFrustum(),_(I,y,H.camera,X,this.type)}H.isPointLightShadow!==!0&&this.type===fr&&S(H,y),H.needsUpdate=!1}m=this.type,g.needsUpdate=!1,i.setRenderTarget(M,L,C)};function S(A,I){const y=e.update(v);h.defines.VSM_SAMPLES!==A.blurSamples&&(h.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Wn(s.x,s.y,{format:Yi,type:li})),h.uniforms.shadow_pass.value=A.map.depthTexture,h.uniforms.resolution.value=A.mapSize,h.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(I,null,y,h,v,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(I,null,y,f,v,null)}function T(A,I,y,M){let L=null;const C=y.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(C!==void 0)L=C;else if(L=y.isPointLight===!0?c:o,i.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){const R=L.uuid,B=I.uuid;let V=l[R];V===void 0&&(V={},l[R]=V);let N=V[B];N===void 0&&(N=L.clone(),V[B]=N,I.addEventListener("dispose",E)),L=N}if(L.visible=I.visible,L.wireframe=I.wireframe,M===fr?L.side=I.shadowSide!==null?I.shadowSide:I.side:L.side=I.shadowSide!==null?I.shadowSide:d[I.side],L.alphaMap=I.alphaMap,L.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,L.map=I.map,L.clipShadows=I.clipShadows,L.clippingPlanes=I.clippingPlanes,L.clipIntersection=I.clipIntersection,L.displacementMap=I.displacementMap,L.displacementScale=I.displacementScale,L.displacementBias=I.displacementBias,L.wireframeLinewidth=I.wireframeLinewidth,L.linewidth=I.linewidth,y.isPointLight===!0&&L.isMeshDistanceMaterial===!0){const R=i.properties.get(L);R.light=y}return L}function _(A,I,y,M,L){if(A.visible===!1)return;if(A.layers.test(I.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&L===fr)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,A.matrixWorld);const B=e.update(A),V=A.material;if(Array.isArray(V)){const N=B.groups;for(let X=0,H=N.length;X<H;X++){const q=N[X],te=V[q.materialIndex];if(te&&te.visible){const Z=T(A,te,M,L);A.onBeforeShadow(i,A,I,y,B,Z,q),i.renderBufferDirect(y,null,B,Z,A,q),A.onAfterShadow(i,A,I,y,B,Z,q)}}}else if(V.visible){const N=T(A,V,M,L);A.onBeforeShadow(i,A,I,y,B,N,null),i.renderBufferDirect(y,null,B,N,A,null),A.onAfterShadow(i,A,I,y,B,N,null)}}const R=A.children;for(let B=0,V=R.length;B<V;B++)_(R[B],I,y,M,L)}function E(A){A.target.removeEventListener("dispose",E);for(const y in l){const M=l[y],L=A.target.uuid;L in M&&(M[L].dispose(),delete M[L])}}}function by(i,e){function t(){let z=!1;const fe=new gt;let se=null;const _e=new gt(0,0,0,0);return{setMask:function(Ee){se!==Ee&&!z&&(i.colorMask(Ee,Ee,Ee,Ee),se=Ee)},setLocked:function(Ee){z=Ee},setClear:function(Ee,ae,Le,Ce,Ct){Ct===!0&&(Ee*=Ce,ae*=Ce,Le*=Ce),fe.set(Ee,ae,Le,Ce),_e.equals(fe)===!1&&(i.clearColor(Ee,ae,Le,Ce),_e.copy(fe))},reset:function(){z=!1,se=null,_e.set(-1,0,0,0)}}}function n(){let z=!1,fe=!1,se=null,_e=null,Ee=null;return{setReversed:function(ae){if(fe!==ae){const Le=e.get("EXT_clip_control");ae?Le.clipControlEXT(Le.LOWER_LEFT_EXT,Le.ZERO_TO_ONE_EXT):Le.clipControlEXT(Le.LOWER_LEFT_EXT,Le.NEGATIVE_ONE_TO_ONE_EXT),fe=ae;const Ce=Ee;Ee=null,this.setClear(Ce)}},getReversed:function(){return fe},setTest:function(ae){ae?le(i.DEPTH_TEST):ze(i.DEPTH_TEST)},setMask:function(ae){se!==ae&&!z&&(i.depthMask(ae),se=ae)},setFunc:function(ae){if(fe&&(ae=Ep[ae]),_e!==ae){switch(ae){case rc:i.depthFunc(i.NEVER);break;case ac:i.depthFunc(i.ALWAYS);break;case oc:i.depthFunc(i.LESS);break;case Os:i.depthFunc(i.LEQUAL);break;case cc:i.depthFunc(i.EQUAL);break;case lc:i.depthFunc(i.GEQUAL);break;case uc:i.depthFunc(i.GREATER);break;case dc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}_e=ae}},setLocked:function(ae){z=ae},setClear:function(ae){Ee!==ae&&(Ee=ae,fe&&(ae=1-ae),i.clearDepth(ae))},reset:function(){z=!1,se=null,_e=null,Ee=null,fe=!1}}}function s(){let z=!1,fe=null,se=null,_e=null,Ee=null,ae=null,Le=null,Ce=null,Ct=null;return{setTest:function(yt){z||(yt?le(i.STENCIL_TEST):ze(i.STENCIL_TEST))},setMask:function(yt){fe!==yt&&!z&&(i.stencilMask(yt),fe=yt)},setFunc:function(yt,Dn,Nn){(se!==yt||_e!==Dn||Ee!==Nn)&&(i.stencilFunc(yt,Dn,Nn),se=yt,_e=Dn,Ee=Nn)},setOp:function(yt,Dn,Nn){(ae!==yt||Le!==Dn||Ce!==Nn)&&(i.stencilOp(yt,Dn,Nn),ae=yt,Le=Dn,Ce=Nn)},setLocked:function(yt){z=yt},setClear:function(yt){Ct!==yt&&(i.clearStencil(yt),Ct=yt)},reset:function(){z=!1,fe=null,se=null,_e=null,Ee=null,ae=null,Le=null,Ce=null,Ct=null}}}const r=new t,a=new n,o=new s,c=new WeakMap,l=new WeakMap;let u={},d={},h={},f=new WeakMap,p=[],v=null,g=!1,m=null,S=null,T=null,_=null,E=null,A=null,I=null,y=new We(0,0,0),M=0,L=!1,C=null,R=null,B=null,V=null,N=null;const X=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,q=0;const te=i.getParameter(i.VERSION);te.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(te)[1]),H=q>=1):te.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(te)[1]),H=q>=2);let Z=null,oe={};const he=i.getParameter(i.SCISSOR_BOX),Qe=i.getParameter(i.VIEWPORT),lt=new gt().fromArray(he),Be=new gt().fromArray(Qe);function ne(z,fe,se,_e){const Ee=new Uint8Array(4),ae=i.createTexture();i.bindTexture(z,ae),i.texParameteri(z,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(z,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Le=0;Le<se;Le++)z===i.TEXTURE_3D||z===i.TEXTURE_2D_ARRAY?i.texImage3D(fe,0,i.RGBA,1,1,_e,0,i.RGBA,i.UNSIGNED_BYTE,Ee):i.texImage2D(fe+Le,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ee);return ae}const ue={};ue[i.TEXTURE_2D]=ne(i.TEXTURE_2D,i.TEXTURE_2D,1),ue[i.TEXTURE_CUBE_MAP]=ne(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ue[i.TEXTURE_2D_ARRAY]=ne(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ue[i.TEXTURE_3D]=ne(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),le(i.DEPTH_TEST),a.setFunc(Os),P(!1),k(ru),le(i.CULL_FACE),O(ai);function le(z){u[z]!==!0&&(i.enable(z),u[z]=!0)}function ze(z){u[z]!==!1&&(i.disable(z),u[z]=!1)}function Xe(z,fe){return h[z]!==fe?(i.bindFramebuffer(z,fe),h[z]=fe,z===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=fe),z===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=fe),!0):!1}function Oe(z,fe){let se=p,_e=!1;if(z){se=f.get(fe),se===void 0&&(se=[],f.set(fe,se));const Ee=z.textures;if(se.length!==Ee.length||se[0]!==i.COLOR_ATTACHMENT0){for(let ae=0,Le=Ee.length;ae<Le;ae++)se[ae]=i.COLOR_ATTACHMENT0+ae;se.length=Ee.length,_e=!0}}else se[0]!==i.BACK&&(se[0]=i.BACK,_e=!0);_e&&i.drawBuffers(se)}function vt(z){return v!==z?(i.useProgram(z),v=z,!0):!1}const je={[zi]:i.FUNC_ADD,[Gf]:i.FUNC_SUBTRACT,[Wf]:i.FUNC_REVERSE_SUBTRACT};je[Xf]=i.MIN,je[qf]=i.MAX;const ot={[Yf]:i.ZERO,[Kf]:i.ONE,[$f]:i.SRC_COLOR,[ic]:i.SRC_ALPHA,[tp]:i.SRC_ALPHA_SATURATE,[Qf]:i.DST_COLOR,[Jf]:i.DST_ALPHA,[Zf]:i.ONE_MINUS_SRC_COLOR,[sc]:i.ONE_MINUS_SRC_ALPHA,[ep]:i.ONE_MINUS_DST_COLOR,[jf]:i.ONE_MINUS_DST_ALPHA,[np]:i.CONSTANT_COLOR,[ip]:i.ONE_MINUS_CONSTANT_COLOR,[sp]:i.CONSTANT_ALPHA,[rp]:i.ONE_MINUS_CONSTANT_ALPHA};function O(z,fe,se,_e,Ee,ae,Le,Ce,Ct,yt){if(z===ai){g===!0&&(ze(i.BLEND),g=!1);return}if(g===!1&&(le(i.BLEND),g=!0),z!==Vf){if(z!==m||yt!==L){if((S!==zi||E!==zi)&&(i.blendEquation(i.FUNC_ADD),S=zi,E=zi),yt)switch(z){case Ps:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case nc:i.blendFunc(i.ONE,i.ONE);break;case au:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ou:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Ge("WebGLState: Invalid blending: ",z);break}else switch(z){case Ps:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case nc:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case au:Ge("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ou:Ge("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ge("WebGLState: Invalid blending: ",z);break}T=null,_=null,A=null,I=null,y.set(0,0,0),M=0,m=z,L=yt}return}Ee=Ee||fe,ae=ae||se,Le=Le||_e,(fe!==S||Ee!==E)&&(i.blendEquationSeparate(je[fe],je[Ee]),S=fe,E=Ee),(se!==T||_e!==_||ae!==A||Le!==I)&&(i.blendFuncSeparate(ot[se],ot[_e],ot[ae],ot[Le]),T=se,_=_e,A=ae,I=Le),(Ce.equals(y)===!1||Ct!==M)&&(i.blendColor(Ce.r,Ce.g,Ce.b,Ct),y.copy(Ce),M=Ct),m=z,L=!1}function D(z,fe){z.side===zn?ze(i.CULL_FACE):le(i.CULL_FACE);let se=z.side===nn;fe&&(se=!se),P(se),z.blending===Ps&&z.transparent===!1?O(ai):O(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),a.setFunc(z.depthFunc),a.setTest(z.depthTest),a.setMask(z.depthWrite),r.setMask(z.colorWrite);const _e=z.stencilWrite;o.setTest(_e),_e&&(o.setMask(z.stencilWriteMask),o.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),o.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),ie(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?le(i.SAMPLE_ALPHA_TO_COVERAGE):ze(i.SAMPLE_ALPHA_TO_COVERAGE)}function P(z){C!==z&&(z?i.frontFace(i.CW):i.frontFace(i.CCW),C=z)}function k(z){z!==Bf?(le(i.CULL_FACE),z!==R&&(z===ru?i.cullFace(i.BACK):z===zf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ze(i.CULL_FACE),R=z}function ee(z){z!==B&&(H&&i.lineWidth(z),B=z)}function ie(z,fe,se){z?(le(i.POLYGON_OFFSET_FILL),(V!==fe||N!==se)&&(V=fe,N=se,a.getReversed()&&(fe=-fe),i.polygonOffset(fe,se))):ze(i.POLYGON_OFFSET_FILL)}function ce(z){z?le(i.SCISSOR_TEST):ze(i.SCISSOR_TEST)}function xe(z){z===void 0&&(z=i.TEXTURE0+X-1),Z!==z&&(i.activeTexture(z),Z=z)}function U(z,fe,se){se===void 0&&(Z===null?se=i.TEXTURE0+X-1:se=Z);let _e=oe[se];_e===void 0&&(_e={type:void 0,texture:void 0},oe[se]=_e),(_e.type!==z||_e.texture!==fe)&&(Z!==se&&(i.activeTexture(se),Z=se),i.bindTexture(z,fe||ue[z]),_e.type=z,_e.texture=fe)}function Se(){const z=oe[Z];z!==void 0&&z.type!==void 0&&(i.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function Re(){try{i.compressedTexImage2D(...arguments)}catch(z){Ge("WebGLState:",z)}}function w(){try{i.compressedTexImage3D(...arguments)}catch(z){Ge("WebGLState:",z)}}function x(){try{i.texSubImage2D(...arguments)}catch(z){Ge("WebGLState:",z)}}function W(){try{i.texSubImage3D(...arguments)}catch(z){Ge("WebGLState:",z)}}function Y(){try{i.compressedTexSubImage2D(...arguments)}catch(z){Ge("WebGLState:",z)}}function j(){try{i.compressedTexSubImage3D(...arguments)}catch(z){Ge("WebGLState:",z)}}function de(){try{i.texStorage2D(...arguments)}catch(z){Ge("WebGLState:",z)}}function pe(){try{i.texStorage3D(...arguments)}catch(z){Ge("WebGLState:",z)}}function Q(){try{i.texImage2D(...arguments)}catch(z){Ge("WebGLState:",z)}}function re(){try{i.texImage3D(...arguments)}catch(z){Ge("WebGLState:",z)}}function me(z){return d[z]!==void 0?d[z]:i.getParameter(z)}function De(z,fe){d[z]!==fe&&(i.pixelStorei(z,fe),d[z]=fe)}function ve(z){lt.equals(z)===!1&&(i.scissor(z.x,z.y,z.z,z.w),lt.copy(z))}function ge(z){Be.equals(z)===!1&&(i.viewport(z.x,z.y,z.z,z.w),Be.copy(z))}function Fe(z,fe){let se=l.get(fe);se===void 0&&(se=new WeakMap,l.set(fe,se));let _e=se.get(z);_e===void 0&&(_e=i.getUniformBlockIndex(fe,z.name),se.set(z,_e))}function Ve(z,fe){const _e=l.get(fe).get(z);c.get(fe)!==_e&&(i.uniformBlockBinding(fe,_e,z.__bindingPointIndex),c.set(fe,_e))}function Ze(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},d={},Z=null,oe={},h={},f=new WeakMap,p=[],v=null,g=!1,m=null,S=null,T=null,_=null,E=null,A=null,I=null,y=new We(0,0,0),M=0,L=!1,C=null,R=null,B=null,V=null,N=null,lt.set(0,0,i.canvas.width,i.canvas.height),Be.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:le,disable:ze,bindFramebuffer:Xe,drawBuffers:Oe,useProgram:vt,setBlending:O,setMaterial:D,setFlipSided:P,setCullFace:k,setLineWidth:ee,setPolygonOffset:ie,setScissorTest:ce,activeTexture:xe,bindTexture:U,unbindTexture:Se,compressedTexImage2D:Re,compressedTexImage3D:w,texImage2D:Q,texImage3D:re,pixelStorei:De,getParameter:me,updateUBOMapping:Fe,uniformBlockBinding:Ve,texStorage2D:de,texStorage3D:pe,texSubImage2D:x,texSubImage3D:W,compressedTexSubImage2D:Y,compressedTexSubImage3D:j,scissor:ve,viewport:ge,reset:Ze}}function Ty(i,e,t,n,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Te,u=new WeakMap,d=new Set;let h;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(w,x){return p?new OffscreenCanvas(w,x):Rr("canvas")}function g(w,x,W){let Y=1;const j=Re(w);if((j.width>W||j.height>W)&&(Y=W/Math.max(j.width,j.height)),Y<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const de=Math.floor(Y*j.width),pe=Math.floor(Y*j.height);h===void 0&&(h=v(de,pe));const Q=x?v(de,pe):h;return Q.width=de,Q.height=pe,Q.getContext("2d").drawImage(w,0,0,de,pe),Ie("WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+de+"x"+pe+")."),Q}else return"data"in w&&Ie("WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),w;return w}function m(w){return w.generateMipmaps}function S(w){i.generateMipmap(w)}function T(w){return w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?i.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function _(w,x,W,Y,j,de=!1){if(w!==null){if(i[w]!==void 0)return i[w];Ie("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let pe;Y&&(pe=e.get("EXT_texture_norm16"),pe||Ie("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Q=x;if(x===i.RED&&(W===i.FLOAT&&(Q=i.R32F),W===i.HALF_FLOAT&&(Q=i.R16F),W===i.UNSIGNED_BYTE&&(Q=i.R8),W===i.UNSIGNED_SHORT&&pe&&(Q=pe.R16_EXT),W===i.SHORT&&pe&&(Q=pe.R16_SNORM_EXT)),x===i.RED_INTEGER&&(W===i.UNSIGNED_BYTE&&(Q=i.R8UI),W===i.UNSIGNED_SHORT&&(Q=i.R16UI),W===i.UNSIGNED_INT&&(Q=i.R32UI),W===i.BYTE&&(Q=i.R8I),W===i.SHORT&&(Q=i.R16I),W===i.INT&&(Q=i.R32I)),x===i.RG&&(W===i.FLOAT&&(Q=i.RG32F),W===i.HALF_FLOAT&&(Q=i.RG16F),W===i.UNSIGNED_BYTE&&(Q=i.RG8),W===i.UNSIGNED_SHORT&&pe&&(Q=pe.RG16_EXT),W===i.SHORT&&pe&&(Q=pe.RG16_SNORM_EXT)),x===i.RG_INTEGER&&(W===i.UNSIGNED_BYTE&&(Q=i.RG8UI),W===i.UNSIGNED_SHORT&&(Q=i.RG16UI),W===i.UNSIGNED_INT&&(Q=i.RG32UI),W===i.BYTE&&(Q=i.RG8I),W===i.SHORT&&(Q=i.RG16I),W===i.INT&&(Q=i.RG32I)),x===i.RGB_INTEGER&&(W===i.UNSIGNED_BYTE&&(Q=i.RGB8UI),W===i.UNSIGNED_SHORT&&(Q=i.RGB16UI),W===i.UNSIGNED_INT&&(Q=i.RGB32UI),W===i.BYTE&&(Q=i.RGB8I),W===i.SHORT&&(Q=i.RGB16I),W===i.INT&&(Q=i.RGB32I)),x===i.RGBA_INTEGER&&(W===i.UNSIGNED_BYTE&&(Q=i.RGBA8UI),W===i.UNSIGNED_SHORT&&(Q=i.RGBA16UI),W===i.UNSIGNED_INT&&(Q=i.RGBA32UI),W===i.BYTE&&(Q=i.RGBA8I),W===i.SHORT&&(Q=i.RGBA16I),W===i.INT&&(Q=i.RGBA32I)),x===i.RGB&&(W===i.UNSIGNED_SHORT&&pe&&(Q=pe.RGB16_EXT),W===i.SHORT&&pe&&(Q=pe.RGB16_SNORM_EXT),W===i.UNSIGNED_INT_5_9_9_9_REV&&(Q=i.RGB9_E5),W===i.UNSIGNED_INT_10F_11F_11F_REV&&(Q=i.R11F_G11F_B10F)),x===i.RGBA){const re=de?Ba:rt.getTransfer(j);W===i.FLOAT&&(Q=i.RGBA32F),W===i.HALF_FLOAT&&(Q=i.RGBA16F),W===i.UNSIGNED_BYTE&&(Q=re===ht?i.SRGB8_ALPHA8:i.RGBA8),W===i.UNSIGNED_SHORT&&pe&&(Q=pe.RGBA16_EXT),W===i.SHORT&&pe&&(Q=pe.RGBA16_SNORM_EXT),W===i.UNSIGNED_SHORT_4_4_4_4&&(Q=i.RGBA4),W===i.UNSIGNED_SHORT_5_5_5_1&&(Q=i.RGB5_A1)}return(Q===i.R16F||Q===i.R32F||Q===i.RG16F||Q===i.RG32F||Q===i.RGBA16F||Q===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function E(w,x){let W;return w?x===null||x===Xn||x===Tr?W=i.DEPTH24_STENCIL8:x===pn?W=i.DEPTH32F_STENCIL8:x===br&&(W=i.DEPTH24_STENCIL8,Ie("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Xn||x===Tr?W=i.DEPTH_COMPONENT24:x===pn?W=i.DEPTH_COMPONENT32F:x===br&&(W=i.DEPTH_COMPONENT16),W}function A(w,x){return m(w)===!0||w.isFramebufferTexture&&w.minFilter!==wt&&w.minFilter!==Rt?Math.log2(Math.max(x.width,x.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?x.mipmaps.length:1}function I(w){const x=w.target;x.removeEventListener("dispose",I),M(x),x.isVideoTexture&&u.delete(x),x.isHTMLTexture&&d.delete(x)}function y(w){const x=w.target;x.removeEventListener("dispose",y),C(x)}function M(w){const x=n.get(w);if(x.__webglInit===void 0)return;const W=w.source,Y=f.get(W);if(Y){const j=Y[x.__cacheKey];j.usedTimes--,j.usedTimes===0&&L(w),Object.keys(Y).length===0&&f.delete(W)}n.remove(w)}function L(w){const x=n.get(w);i.deleteTexture(x.__webglTexture);const W=w.source,Y=f.get(W);delete Y[x.__cacheKey],a.memory.textures--}function C(w){const x=n.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),n.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(x.__webglFramebuffer[Y]))for(let j=0;j<x.__webglFramebuffer[Y].length;j++)i.deleteFramebuffer(x.__webglFramebuffer[Y][j]);else i.deleteFramebuffer(x.__webglFramebuffer[Y]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[Y])}else{if(Array.isArray(x.__webglFramebuffer))for(let Y=0;Y<x.__webglFramebuffer.length;Y++)i.deleteFramebuffer(x.__webglFramebuffer[Y]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let Y=0;Y<x.__webglColorRenderbuffer.length;Y++)x.__webglColorRenderbuffer[Y]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[Y]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const W=w.textures;for(let Y=0,j=W.length;Y<j;Y++){const de=n.get(W[Y]);de.__webglTexture&&(i.deleteTexture(de.__webglTexture),a.memory.textures--),n.remove(W[Y])}n.remove(w)}let R=0;function B(){R=0}function V(){return R}function N(w){R=w}function X(){const w=R;return w>=s.maxTextures&&Ie("WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+s.maxTextures),R+=1,w}function H(w){const x=[];return x.push(w.wrapS),x.push(w.wrapT),x.push(w.wrapR||0),x.push(w.magFilter),x.push(w.minFilter),x.push(w.anisotropy),x.push(w.internalFormat),x.push(w.format),x.push(w.type),x.push(w.generateMipmaps),x.push(w.premultiplyAlpha),x.push(w.flipY),x.push(w.unpackAlignment),x.push(w.colorSpace),x.join()}function q(w,x){const W=n.get(w);if(w.isVideoTexture&&U(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&W.__version!==w.version){const Y=w.image;if(Y===null)Ie("WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)Ie("WebGLRenderer: Texture marked for update but image is incomplete");else{ze(W,w,x);return}}else w.isExternalTexture&&(W.__webglTexture=w.sourceTexture?w.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,W.__webglTexture,i.TEXTURE0+x)}function te(w,x){const W=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&W.__version!==w.version){ze(W,w,x);return}else w.isExternalTexture&&(W.__webglTexture=w.sourceTexture?w.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,W.__webglTexture,i.TEXTURE0+x)}function Z(w,x){const W=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&W.__version!==w.version){ze(W,w,x);return}t.bindTexture(i.TEXTURE_3D,W.__webglTexture,i.TEXTURE0+x)}function oe(w,x){const W=n.get(w);if(w.isCubeDepthTexture!==!0&&w.version>0&&W.__version!==w.version){Xe(W,w,x);return}t.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture,i.TEXTURE0+x)}const he={[ks]:i.REPEAT,[Hn]:i.CLAMP_TO_EDGE,[Ua]:i.MIRRORED_REPEAT},Qe={[wt]:i.NEAREST,[Th]:i.NEAREST_MIPMAP_NEAREST,[pr]:i.NEAREST_MIPMAP_LINEAR,[Rt]:i.LINEAR,[Ta]:i.LINEAR_MIPMAP_NEAREST,[ii]:i.LINEAR_MIPMAP_LINEAR},lt={[mp]:i.NEVER,[yp]:i.ALWAYS,[gp]:i.LESS,[bl]:i.LEQUAL,[_p]:i.EQUAL,[Tl]:i.GEQUAL,[xp]:i.GREATER,[vp]:i.NOTEQUAL};function Be(w,x){if(x.type===pn&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===Rt||x.magFilter===Ta||x.magFilter===pr||x.magFilter===ii||x.minFilter===Rt||x.minFilter===Ta||x.minFilter===pr||x.minFilter===ii)&&Ie("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(w,i.TEXTURE_WRAP_S,he[x.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,he[x.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,he[x.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,Qe[x.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,Qe[x.minFilter]),x.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,lt[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===wt||x.minFilter!==pr&&x.minFilter!==ii||x.type===pn&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const W=e.get("EXT_texture_filter_anisotropic");i.texParameterf(w,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function ne(w,x){let W=!1;w.__webglInit===void 0&&(w.__webglInit=!0,x.addEventListener("dispose",I));const Y=x.source;let j=f.get(Y);j===void 0&&(j={},f.set(Y,j));const de=H(x);if(de!==w.__cacheKey){j[de]===void 0&&(j[de]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,W=!0),j[de].usedTimes++;const pe=j[w.__cacheKey];pe!==void 0&&(j[w.__cacheKey].usedTimes--,pe.usedTimes===0&&L(x)),w.__cacheKey=de,w.__webglTexture=j[de].texture}return W}function ue(w,x,W){return Math.floor(Math.floor(w/W)/x)}function le(w,x,W,Y){const de=w.updateRanges;if(de.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,x.width,x.height,W,Y,x.data);else{de.sort((De,ve)=>De.start-ve.start);let pe=0;for(let De=1;De<de.length;De++){const ve=de[pe],ge=de[De],Fe=ve.start+ve.count,Ve=ue(ge.start,x.width,4),Ze=ue(ve.start,x.width,4);ge.start<=Fe+1&&Ve===Ze&&ue(ge.start+ge.count-1,x.width,4)===Ve?ve.count=Math.max(ve.count,ge.start+ge.count-ve.start):(++pe,de[pe]=ge)}de.length=pe+1;const Q=t.getParameter(i.UNPACK_ROW_LENGTH),re=t.getParameter(i.UNPACK_SKIP_PIXELS),me=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,x.width);for(let De=0,ve=de.length;De<ve;De++){const ge=de[De],Fe=Math.floor(ge.start/4),Ve=Math.ceil(ge.count/4),Ze=Fe%x.width,z=Math.floor(Fe/x.width),fe=Ve,se=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,Ze),t.pixelStorei(i.UNPACK_SKIP_ROWS,z),t.texSubImage2D(i.TEXTURE_2D,0,Ze,z,fe,se,W,Y,x.data)}w.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,Q),t.pixelStorei(i.UNPACK_SKIP_PIXELS,re),t.pixelStorei(i.UNPACK_SKIP_ROWS,me)}}function ze(w,x,W){let Y=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(Y=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(Y=i.TEXTURE_3D);const j=ne(w,x),de=x.source;t.bindTexture(Y,w.__webglTexture,i.TEXTURE0+W);const pe=n.get(de);if(de.version!==pe.__version||j===!0){if(t.activeTexture(i.TEXTURE0+W),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){const se=rt.getPrimaries(rt.workingColorSpace),_e=x.colorSpace===Si?null:rt.getPrimaries(x.colorSpace),Ee=x.colorSpace===Si||se===_e?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee)}t.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment);let re=g(x.image,!1,s.maxTextureSize);re=Se(x,re);const me=r.convert(x.format,x.colorSpace),De=r.convert(x.type);let ve=_(x.internalFormat,me,De,x.normalized,x.colorSpace,x.isVideoTexture);Be(Y,x);let ge;const Fe=x.mipmaps,Ve=x.isVideoTexture!==!0,Ze=pe.__version===void 0||j===!0,z=de.dataReady,fe=A(x,re);if(x.isDepthTexture)ve=E(x.format===Vi,x.type),Ze&&(Ve?t.texStorage2D(i.TEXTURE_2D,1,ve,re.width,re.height):t.texImage2D(i.TEXTURE_2D,0,ve,re.width,re.height,0,me,De,null));else if(x.isDataTexture)if(Fe.length>0){Ve&&Ze&&t.texStorage2D(i.TEXTURE_2D,fe,ve,Fe[0].width,Fe[0].height);for(let se=0,_e=Fe.length;se<_e;se++)ge=Fe[se],Ve?z&&t.texSubImage2D(i.TEXTURE_2D,se,0,0,ge.width,ge.height,me,De,ge.data):t.texImage2D(i.TEXTURE_2D,se,ve,ge.width,ge.height,0,me,De,ge.data);x.generateMipmaps=!1}else Ve?(Ze&&t.texStorage2D(i.TEXTURE_2D,fe,ve,re.width,re.height),z&&le(x,re,me,De)):t.texImage2D(i.TEXTURE_2D,0,ve,re.width,re.height,0,me,De,re.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Ve&&Ze&&t.texStorage3D(i.TEXTURE_2D_ARRAY,fe,ve,Fe[0].width,Fe[0].height,re.depth);for(let se=0,_e=Fe.length;se<_e;se++)if(ge=Fe[se],x.format!==mn)if(me!==null)if(Ve){if(z)if(x.layerUpdates.size>0){const Ee=ad(ge.width,ge.height,x.format,x.type);for(const ae of x.layerUpdates){const Le=ge.data.subarray(ae*Ee/ge.data.BYTES_PER_ELEMENT,(ae+1)*Ee/ge.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,se,0,0,ae,ge.width,ge.height,1,me,Le)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,se,0,0,0,ge.width,ge.height,re.depth,me,ge.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,se,ve,ge.width,ge.height,re.depth,0,ge.data,0,0);else Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ve?z&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,se,0,0,0,ge.width,ge.height,re.depth,me,De,ge.data):t.texImage3D(i.TEXTURE_2D_ARRAY,se,ve,ge.width,ge.height,re.depth,0,me,De,ge.data)}else{Ve&&Ze&&t.texStorage2D(i.TEXTURE_2D,fe,ve,Fe[0].width,Fe[0].height);for(let se=0,_e=Fe.length;se<_e;se++)ge=Fe[se],x.format!==mn?me!==null?Ve?z&&t.compressedTexSubImage2D(i.TEXTURE_2D,se,0,0,ge.width,ge.height,me,ge.data):t.compressedTexImage2D(i.TEXTURE_2D,se,ve,ge.width,ge.height,0,ge.data):Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ve?z&&t.texSubImage2D(i.TEXTURE_2D,se,0,0,ge.width,ge.height,me,De,ge.data):t.texImage2D(i.TEXTURE_2D,se,ve,ge.width,ge.height,0,me,De,ge.data)}else if(x.isDataArrayTexture)if(Ve){if(Ze&&t.texStorage3D(i.TEXTURE_2D_ARRAY,fe,ve,re.width,re.height,re.depth),z)if(x.layerUpdates.size>0){const se=ad(re.width,re.height,x.format,x.type);for(const _e of x.layerUpdates){const Ee=re.data.subarray(_e*se/re.data.BYTES_PER_ELEMENT,(_e+1)*se/re.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,_e,re.width,re.height,1,me,De,Ee)}x.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,me,De,re.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ve,re.width,re.height,re.depth,0,me,De,re.data);else if(x.isData3DTexture)Ve?(Ze&&t.texStorage3D(i.TEXTURE_3D,fe,ve,re.width,re.height,re.depth),z&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,me,De,re.data)):t.texImage3D(i.TEXTURE_3D,0,ve,re.width,re.height,re.depth,0,me,De,re.data);else if(x.isFramebufferTexture){if(Ze)if(Ve)t.texStorage2D(i.TEXTURE_2D,fe,ve,re.width,re.height);else{let se=re.width,_e=re.height;for(let Ee=0;Ee<fe;Ee++)t.texImage2D(i.TEXTURE_2D,Ee,ve,se,_e,0,me,De,null),se>>=1,_e>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in i){const se=i.canvas;if(se.hasAttribute("layoutsubtree")||se.setAttribute("layoutsubtree","true"),re.parentNode!==se){se.appendChild(re),d.add(x),se.onpaint=_e=>{const Ee=_e.changedElements;for(const ae of d)Ee.includes(ae.image)&&(ae.needsUpdate=!0)},se.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,re);else{const Ee=i.RGBA,ae=i.RGBA,Le=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Ee,ae,Le,re)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Fe.length>0){if(Ve&&Ze){const se=Re(Fe[0]);t.texStorage2D(i.TEXTURE_2D,fe,ve,se.width,se.height)}for(let se=0,_e=Fe.length;se<_e;se++)ge=Fe[se],Ve?z&&t.texSubImage2D(i.TEXTURE_2D,se,0,0,me,De,ge):t.texImage2D(i.TEXTURE_2D,se,ve,me,De,ge);x.generateMipmaps=!1}else if(Ve){if(Ze){const se=Re(re);t.texStorage2D(i.TEXTURE_2D,fe,ve,se.width,se.height)}z&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,me,De,re)}else t.texImage2D(i.TEXTURE_2D,0,ve,me,De,re);m(x)&&S(Y),pe.__version=de.version,x.onUpdate&&x.onUpdate(x)}w.__version=x.version}function Xe(w,x,W){if(x.image.length!==6)return;const Y=ne(w,x),j=x.source;t.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+W);const de=n.get(j);if(j.version!==de.__version||Y===!0){t.activeTexture(i.TEXTURE0+W);const pe=rt.getPrimaries(rt.workingColorSpace),Q=x.colorSpace===Si?null:rt.getPrimaries(x.colorSpace),re=x.colorSpace===Si||pe===Q?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,re);const me=x.isCompressedTexture||x.image[0].isCompressedTexture,De=x.image[0]&&x.image[0].isDataTexture,ve=[];for(let ae=0;ae<6;ae++)!me&&!De?ve[ae]=g(x.image[ae],!0,s.maxCubemapSize):ve[ae]=De?x.image[ae].image:x.image[ae],ve[ae]=Se(x,ve[ae]);const ge=ve[0],Fe=r.convert(x.format,x.colorSpace),Ve=r.convert(x.type),Ze=_(x.internalFormat,Fe,Ve,x.normalized,x.colorSpace),z=x.isVideoTexture!==!0,fe=de.__version===void 0||Y===!0,se=j.dataReady;let _e=A(x,ge);Be(i.TEXTURE_CUBE_MAP,x);let Ee;if(me){z&&fe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,_e,Ze,ge.width,ge.height);for(let ae=0;ae<6;ae++){Ee=ve[ae].mipmaps;for(let Le=0;Le<Ee.length;Le++){const Ce=Ee[Le];x.format!==mn?Fe!==null?z?se&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Le,0,0,Ce.width,Ce.height,Fe,Ce.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Le,Ze,Ce.width,Ce.height,0,Ce.data):Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):z?se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Le,0,0,Ce.width,Ce.height,Fe,Ve,Ce.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Le,Ze,Ce.width,Ce.height,0,Fe,Ve,Ce.data)}}}else{if(Ee=x.mipmaps,z&&fe){Ee.length>0&&_e++;const ae=Re(ve[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,_e,Ze,ae.width,ae.height)}for(let ae=0;ae<6;ae++)if(De){z?se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,ve[ae].width,ve[ae].height,Fe,Ve,ve[ae].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,Ze,ve[ae].width,ve[ae].height,0,Fe,Ve,ve[ae].data);for(let Le=0;Le<Ee.length;Le++){const Ct=Ee[Le].image[ae].image;z?se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Le+1,0,0,Ct.width,Ct.height,Fe,Ve,Ct.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Le+1,Ze,Ct.width,Ct.height,0,Fe,Ve,Ct.data)}}else{z?se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,Fe,Ve,ve[ae]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,Ze,Fe,Ve,ve[ae]);for(let Le=0;Le<Ee.length;Le++){const Ce=Ee[Le];z?se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Le+1,0,0,Fe,Ve,Ce.image[ae]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Le+1,Ze,Fe,Ve,Ce.image[ae])}}}m(x)&&S(i.TEXTURE_CUBE_MAP),de.__version=j.version,x.onUpdate&&x.onUpdate(x)}w.__version=x.version}function Oe(w,x,W,Y,j,de){const pe=r.convert(W.format,W.colorSpace),Q=r.convert(W.type),re=_(W.internalFormat,pe,Q,W.normalized,W.colorSpace),me=n.get(x),De=n.get(W);if(De.__renderTarget=x,!me.__hasExternalTextures){const ve=Math.max(1,x.width>>de),ge=Math.max(1,x.height>>de);j===i.TEXTURE_3D||j===i.TEXTURE_2D_ARRAY?t.texImage3D(j,de,re,ve,ge,x.depth,0,pe,Q,null):t.texImage2D(j,de,re,ve,ge,0,pe,Q,null)}t.bindFramebuffer(i.FRAMEBUFFER,w),xe(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Y,j,De.__webglTexture,0,ce(x)):(j===i.TEXTURE_2D||j>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Y,j,De.__webglTexture,de),t.bindFramebuffer(i.FRAMEBUFFER,null)}function vt(w,x,W){if(i.bindRenderbuffer(i.RENDERBUFFER,w),x.depthBuffer){const Y=x.depthTexture,j=Y&&Y.isDepthTexture?Y.type:null,de=E(x.stencilBuffer,j),pe=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;xe(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ce(x),de,x.width,x.height):W?i.renderbufferStorageMultisample(i.RENDERBUFFER,ce(x),de,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,de,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,pe,i.RENDERBUFFER,w)}else{const Y=x.textures;for(let j=0;j<Y.length;j++){const de=Y[j],pe=r.convert(de.format,de.colorSpace),Q=r.convert(de.type),re=_(de.internalFormat,pe,Q,de.normalized,de.colorSpace);xe(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ce(x),re,x.width,x.height):W?i.renderbufferStorageMultisample(i.RENDERBUFFER,ce(x),re,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,re,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function je(w,x,W){const Y=x.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,w),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const j=n.get(x.depthTexture);if(j.__renderTarget=x,(!j.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),Y){if(j.__webglInit===void 0&&(j.__webglInit=!0,x.depthTexture.addEventListener("dispose",I)),j.__webglTexture===void 0){j.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture),Be(i.TEXTURE_CUBE_MAP,x.depthTexture);const me=r.convert(x.depthTexture.format),De=r.convert(x.depthTexture.type);let ve;x.depthTexture.format===ui?ve=i.DEPTH_COMPONENT24:x.depthTexture.format===Vi&&(ve=i.DEPTH24_STENCIL8);for(let ge=0;ge<6;ge++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,ve,x.width,x.height,0,me,De,null)}}else q(x.depthTexture,0);const de=j.__webglTexture,pe=ce(x),Q=Y?i.TEXTURE_CUBE_MAP_POSITIVE_X+W:i.TEXTURE_2D,re=x.depthTexture.format===Vi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(x.depthTexture.format===ui)xe(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,re,Q,de,0,pe):i.framebufferTexture2D(i.FRAMEBUFFER,re,Q,de,0);else if(x.depthTexture.format===Vi)xe(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,re,Q,de,0,pe):i.framebufferTexture2D(i.FRAMEBUFFER,re,Q,de,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ot(w){const x=n.get(w),W=w.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==w.depthTexture){const Y=w.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),Y){const j=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,Y.removeEventListener("dispose",j)};Y.addEventListener("dispose",j),x.__depthDisposeCallback=j}x.__boundDepthTexture=Y}if(w.depthTexture&&!x.__autoAllocateDepthBuffer)if(W)for(let Y=0;Y<6;Y++)je(x.__webglFramebuffer[Y],w,Y);else{const Y=w.texture.mipmaps;Y&&Y.length>0?je(x.__webglFramebuffer[0],w,0):je(x.__webglFramebuffer,w,0)}else if(W){x.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[Y]),x.__webglDepthbuffer[Y]===void 0)x.__webglDepthbuffer[Y]=i.createRenderbuffer(),vt(x.__webglDepthbuffer[Y],w,!1);else{const j=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,de=x.__webglDepthbuffer[Y];i.bindRenderbuffer(i.RENDERBUFFER,de),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,de)}}else{const Y=w.texture.mipmaps;if(Y&&Y.length>0?t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),vt(x.__webglDepthbuffer,w,!1);else{const j=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,de=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,de),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,de)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function O(w,x,W){const Y=n.get(w);x!==void 0&&Oe(Y.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),W!==void 0&&ot(w)}function D(w){const x=w.texture,W=n.get(w),Y=n.get(x);w.addEventListener("dispose",y);const j=w.textures,de=w.isWebGLCubeRenderTarget===!0,pe=j.length>1;if(pe||(Y.__webglTexture===void 0&&(Y.__webglTexture=i.createTexture()),Y.__version=x.version,a.memory.textures++),de){W.__webglFramebuffer=[];for(let Q=0;Q<6;Q++)if(x.mipmaps&&x.mipmaps.length>0){W.__webglFramebuffer[Q]=[];for(let re=0;re<x.mipmaps.length;re++)W.__webglFramebuffer[Q][re]=i.createFramebuffer()}else W.__webglFramebuffer[Q]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){W.__webglFramebuffer=[];for(let Q=0;Q<x.mipmaps.length;Q++)W.__webglFramebuffer[Q]=i.createFramebuffer()}else W.__webglFramebuffer=i.createFramebuffer();if(pe)for(let Q=0,re=j.length;Q<re;Q++){const me=n.get(j[Q]);me.__webglTexture===void 0&&(me.__webglTexture=i.createTexture(),a.memory.textures++)}if(w.samples>0&&xe(w)===!1){W.__webglMultisampledFramebuffer=i.createFramebuffer(),W.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let Q=0;Q<j.length;Q++){const re=j[Q];W.__webglColorRenderbuffer[Q]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,W.__webglColorRenderbuffer[Q]);const me=r.convert(re.format,re.colorSpace),De=r.convert(re.type),ve=_(re.internalFormat,me,De,re.normalized,re.colorSpace,w.isXRRenderTarget===!0),ge=ce(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,ge,ve,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Q,i.RENDERBUFFER,W.__webglColorRenderbuffer[Q])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(W.__webglDepthRenderbuffer=i.createRenderbuffer(),vt(W.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(de){t.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),Be(i.TEXTURE_CUBE_MAP,x);for(let Q=0;Q<6;Q++)if(x.mipmaps&&x.mipmaps.length>0)for(let re=0;re<x.mipmaps.length;re++)Oe(W.__webglFramebuffer[Q][re],w,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,re);else Oe(W.__webglFramebuffer[Q],w,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0);m(x)&&S(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(pe){for(let Q=0,re=j.length;Q<re;Q++){const me=j[Q],De=n.get(me);let ve=i.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(ve=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ve,De.__webglTexture),Be(ve,me),Oe(W.__webglFramebuffer,w,me,i.COLOR_ATTACHMENT0+Q,ve,0),m(me)&&S(ve)}t.unbindTexture()}else{let Q=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(Q=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Q,Y.__webglTexture),Be(Q,x),x.mipmaps&&x.mipmaps.length>0)for(let re=0;re<x.mipmaps.length;re++)Oe(W.__webglFramebuffer[re],w,x,i.COLOR_ATTACHMENT0,Q,re);else Oe(W.__webglFramebuffer,w,x,i.COLOR_ATTACHMENT0,Q,0);m(x)&&S(Q),t.unbindTexture()}w.depthBuffer&&ot(w)}function P(w){const x=w.textures;for(let W=0,Y=x.length;W<Y;W++){const j=x[W];if(m(j)){const de=T(w),pe=n.get(j).__webglTexture;t.bindTexture(de,pe),S(de),t.unbindTexture()}}}const k=[],ee=[];function ie(w){if(w.samples>0){if(xe(w)===!1){const x=w.textures,W=w.width,Y=w.height;let j=i.COLOR_BUFFER_BIT;const de=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pe=n.get(w),Q=x.length>1;if(Q)for(let me=0;me<x.length;me++)t.bindFramebuffer(i.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,pe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,pe.__webglMultisampledFramebuffer);const re=w.texture.mipmaps;re&&re.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,pe.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,pe.__webglFramebuffer);for(let me=0;me<x.length;me++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(j|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(j|=i.STENCIL_BUFFER_BIT)),Q){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,pe.__webglColorRenderbuffer[me]);const De=n.get(x[me]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,De,0)}i.blitFramebuffer(0,0,W,Y,0,0,W,Y,j,i.NEAREST),c===!0&&(k.length=0,ee.length=0,k.push(i.COLOR_ATTACHMENT0+me),w.depthBuffer&&w.resolveDepthBuffer===!1&&(k.push(de),ee.push(de),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,ee)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,k))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Q)for(let me=0;me<x.length;me++){t.bindFramebuffer(i.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.RENDERBUFFER,pe.__webglColorRenderbuffer[me]);const De=n.get(x[me]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,pe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.TEXTURE_2D,De,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,pe.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&c){const x=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function ce(w){return Math.min(s.maxSamples,w.samples)}function xe(w){const x=n.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function U(w){const x=a.render.frame;u.get(w)!==x&&(u.set(w,x),w.update())}function Se(w,x){const W=w.colorSpace,Y=w.format,j=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||W!==cn&&W!==Si&&(rt.getTransfer(W)===ht?(Y!==mn||j!==on)&&Ie("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ge("WebGLTextures: Unsupported texture color space:",W)),x}function Re(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(l.width=w.naturalWidth||w.width,l.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(l.width=w.displayWidth,l.height=w.displayHeight):(l.width=w.width,l.height=w.height),l}this.allocateTextureUnit=X,this.resetTextureUnits=B,this.getTextureUnits=V,this.setTextureUnits=N,this.setTexture2D=q,this.setTexture2DArray=te,this.setTexture3D=Z,this.setTextureCube=oe,this.rebindTextures=O,this.setupRenderTarget=D,this.updateRenderTargetMipmap=P,this.updateMultisampleRenderTarget=ie,this.setupDepthRenderbuffer=ot,this.setupFrameBufferTexture=Oe,this.useMultisampledRTT=xe,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Ey(i,e){function t(n,s=Si){let r;const a=rt.getTransfer(s);if(n===on)return i.UNSIGNED_BYTE;if(n===gl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===_l)return i.UNSIGNED_SHORT_5_5_5_1;if(n===wh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Rh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Eh)return i.BYTE;if(n===Ah)return i.SHORT;if(n===br)return i.UNSIGNED_SHORT;if(n===ml)return i.INT;if(n===Xn)return i.UNSIGNED_INT;if(n===pn)return i.FLOAT;if(n===li)return i.HALF_FLOAT;if(n===Ch)return i.ALPHA;if(n===Ph)return i.RGB;if(n===mn)return i.RGBA;if(n===ui)return i.DEPTH_COMPONENT;if(n===Vi)return i.DEPTH_STENCIL;if(n===xl)return i.RED;if(n===vl)return i.RED_INTEGER;if(n===Yi)return i.RG;if(n===yl)return i.RG_INTEGER;if(n===Ml)return i.RGBA_INTEGER;if(n===Ea||n===Aa||n===wa||n===Ra)if(a===ht)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ea)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Aa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===wa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ra)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ea)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Aa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===wa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ra)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===hc||n===fc||n===pc||n===mc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===hc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===fc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===pc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===mc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===gc||n===_c||n===xc||n===vc||n===yc||n===Oa||n===Mc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===gc||n===_c)return a===ht?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===xc)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===vc)return r.COMPRESSED_R11_EAC;if(n===yc)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Oa)return r.COMPRESSED_RG11_EAC;if(n===Mc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Sc||n===bc||n===Tc||n===Ec||n===Ac||n===wc||n===Rc||n===Cc||n===Pc||n===Ic||n===Lc||n===Dc||n===Nc||n===Uc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Sc)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===bc)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Tc)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ec)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ac)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===wc)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Rc)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Cc)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Pc)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ic)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Lc)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Dc)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Nc)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Uc)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Oc||n===Fc||n===kc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Oc)return a===ht?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Fc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===kc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Bc||n===zc||n===Fa||n===Hc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Bc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===zc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Fa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Hc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Tr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const Ay=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,wy=`
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

}`;class Ry{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Wh(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new qn({vertexShader:Ay,fragmentShader:wy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new It(new Ci(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Cy extends Pi{constructor(e,t){super();const n=this;let s=null,r=1,a=null,o="local-floor",c=1,l=null,u=null,d=null,h=null,f=null,p=null;const v=typeof XRWebGLBinding<"u",g=new Ry,m={},S=t.getContextAttributes();let T=null,_=null;const E=[],A=[],I=new Te;let y=null;const M=new jt;M.viewport=new gt;const L=new jt;L.viewport=new gt;const C=[M,L],R=new Tg;let B=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ne){let ue=E[ne];return ue===void 0&&(ue=new uo,E[ne]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function(ne){let ue=E[ne];return ue===void 0&&(ue=new uo,E[ne]=ue),ue.getGripSpace()},this.getHand=function(ne){let ue=E[ne];return ue===void 0&&(ue=new uo,E[ne]=ue),ue.getHandSpace()};function N(ne){const ue=A.indexOf(ne.inputSource);if(ue===-1)return;const le=E[ue];le!==void 0&&(le.update(ne.inputSource,ne.frame,l||a),le.dispatchEvent({type:ne.type,data:ne.inputSource}))}function X(){s.removeEventListener("select",N),s.removeEventListener("selectstart",N),s.removeEventListener("selectend",N),s.removeEventListener("squeeze",N),s.removeEventListener("squeezestart",N),s.removeEventListener("squeezeend",N),s.removeEventListener("end",X),s.removeEventListener("inputsourceschange",H);for(let ne=0;ne<E.length;ne++){const ue=A[ne];ue!==null&&(A[ne]=null,E[ne].disconnect(ue))}B=null,V=null,g.reset();for(const ne in m)delete m[ne];e.setRenderTarget(T),f=null,h=null,d=null,s=null,_=null,Be.stop(),n.isPresenting=!1,e.setPixelRatio(y),e.setSize(I.width,I.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ne){r=ne,n.isPresenting===!0&&Ie("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ne){o=ne,n.isPresenting===!0&&Ie("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(ne){l=ne},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return d===null&&v&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(ne){if(s=ne,s!==null){if(T=e.getRenderTarget(),s.addEventListener("select",N),s.addEventListener("selectstart",N),s.addEventListener("selectend",N),s.addEventListener("squeeze",N),s.addEventListener("squeezestart",N),s.addEventListener("squeezeend",N),s.addEventListener("end",X),s.addEventListener("inputsourceschange",H),S.xrCompatible!==!0&&await t.makeXRCompatible(),y=e.getPixelRatio(),e.getSize(I),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let le=null,ze=null,Xe=null;S.depth&&(Xe=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,le=S.stencil?Vi:ui,ze=S.stencil?Tr:Xn);const Oe={colorFormat:t.RGBA8,depthFormat:Xe,scaleFactor:r};d=this.getBinding(),h=d.createProjectionLayer(Oe),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),_=new Wn(h.textureWidth,h.textureHeight,{format:mn,type:on,depthTexture:new zs(h.textureWidth,h.textureHeight,ze,void 0,void 0,void 0,void 0,void 0,void 0,le),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const le={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,le),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),_=new Wn(f.framebufferWidth,f.framebufferHeight,{format:mn,type:on,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),Be.setContext(s),Be.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function H(ne){for(let ue=0;ue<ne.removed.length;ue++){const le=ne.removed[ue],ze=A.indexOf(le);ze>=0&&(A[ze]=null,E[ze].disconnect(le))}for(let ue=0;ue<ne.added.length;ue++){const le=ne.added[ue];let ze=A.indexOf(le);if(ze===-1){for(let Oe=0;Oe<E.length;Oe++)if(Oe>=A.length){A.push(le),ze=Oe;break}else if(A[Oe]===null){A[Oe]=le,ze=Oe;break}if(ze===-1)break}const Xe=E[ze];Xe&&Xe.connect(le)}}const q=new F,te=new F;function Z(ne,ue,le){q.setFromMatrixPosition(ue.matrixWorld),te.setFromMatrixPosition(le.matrixWorld);const ze=q.distanceTo(te),Xe=ue.projectionMatrix.elements,Oe=le.projectionMatrix.elements,vt=Xe[14]/(Xe[10]-1),je=Xe[14]/(Xe[10]+1),ot=(Xe[9]+1)/Xe[5],O=(Xe[9]-1)/Xe[5],D=(Xe[8]-1)/Xe[0],P=(Oe[8]+1)/Oe[0],k=vt*D,ee=vt*P,ie=ze/(-D+P),ce=ie*-D;if(ue.matrixWorld.decompose(ne.position,ne.quaternion,ne.scale),ne.translateX(ce),ne.translateZ(ie),ne.matrixWorld.compose(ne.position,ne.quaternion,ne.scale),ne.matrixWorldInverse.copy(ne.matrixWorld).invert(),Xe[10]===-1)ne.projectionMatrix.copy(ue.projectionMatrix),ne.projectionMatrixInverse.copy(ue.projectionMatrixInverse);else{const xe=vt+ie,U=je+ie,Se=k-ce,Re=ee+(ze-ce),w=ot*je/U*xe,x=O*je/U*xe;ne.projectionMatrix.makePerspective(Se,Re,w,x,xe,U),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert()}}function oe(ne,ue){ue===null?ne.matrixWorld.copy(ne.matrix):ne.matrixWorld.multiplyMatrices(ue.matrixWorld,ne.matrix),ne.matrixWorldInverse.copy(ne.matrixWorld).invert()}this.updateCamera=function(ne){if(s===null)return;let ue=ne.near,le=ne.far;g.texture!==null&&(g.depthNear>0&&(ue=g.depthNear),g.depthFar>0&&(le=g.depthFar)),R.near=L.near=M.near=ue,R.far=L.far=M.far=le,(B!==R.near||V!==R.far)&&(s.updateRenderState({depthNear:R.near,depthFar:R.far}),B=R.near,V=R.far),R.layers.mask=ne.layers.mask|6,M.layers.mask=R.layers.mask&-5,L.layers.mask=R.layers.mask&-3;const ze=ne.parent,Xe=R.cameras;oe(R,ze);for(let Oe=0;Oe<Xe.length;Oe++)oe(Xe[Oe],ze);Xe.length===2?Z(R,M,L):R.projectionMatrix.copy(M.projectionMatrix),he(ne,R,ze)};function he(ne,ue,le){le===null?ne.matrix.copy(ue.matrixWorld):(ne.matrix.copy(le.matrixWorld),ne.matrix.invert(),ne.matrix.multiply(ue.matrixWorld)),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.updateMatrixWorld(!0),ne.projectionMatrix.copy(ue.projectionMatrix),ne.projectionMatrixInverse.copy(ue.projectionMatrixInverse),ne.isPerspectiveCamera&&(ne.fov=Bs*2*Math.atan(1/ne.projectionMatrix.elements[5]),ne.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(h===null&&f===null))return c},this.setFoveation=function(ne){c=ne,h!==null&&(h.fixedFoveation=ne),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=ne)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(R)},this.getCameraTexture=function(ne){return m[ne]};let Qe=null;function lt(ne,ue){if(u=ue.getViewerPose(l||a),p=ue,u!==null){const le=u.views;f!==null&&(e.setRenderTargetFramebuffer(_,f.framebuffer),e.setRenderTarget(_));let ze=!1;le.length!==R.cameras.length&&(R.cameras.length=0,ze=!0);for(let je=0;je<le.length;je++){const ot=le[je];let O=null;if(f!==null)O=f.getViewport(ot);else{const P=d.getViewSubImage(h,ot);O=P.viewport,je===0&&(e.setRenderTargetTextures(_,P.colorTexture,P.depthStencilTexture),e.setRenderTarget(_))}let D=C[je];D===void 0&&(D=new jt,D.layers.enable(je),D.viewport=new gt,C[je]=D),D.matrix.fromArray(ot.transform.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale),D.projectionMatrix.fromArray(ot.projectionMatrix),D.projectionMatrixInverse.copy(D.projectionMatrix).invert(),D.viewport.set(O.x,O.y,O.width,O.height),je===0&&(R.matrix.copy(D.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),ze===!0&&R.cameras.push(D)}const Xe=s.enabledFeatures;if(Xe&&Xe.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){d=n.getBinding();const je=d.getDepthInformation(le[0]);je&&je.isValid&&je.texture&&g.init(je,s.renderState)}if(Xe&&Xe.includes("camera-access")&&v){e.state.unbindTexture(),d=n.getBinding();for(let je=0;je<le.length;je++){const ot=le[je].camera;if(ot){let O=m[ot];O||(O=new Wh,m[ot]=O);const D=d.getCameraImage(ot);O.sourceTexture=D}}}}for(let le=0;le<E.length;le++){const ze=A[le],Xe=E[le];ze!==null&&Xe!==void 0&&Xe.update(ze,ue,l||a)}Qe&&Qe(ne,ue),ue.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ue}),p=null}const Be=new cf;Be.setAnimationLoop(lt),this.setAnimationLoop=function(ne){Qe=ne},this.dispose=function(){}}}const Py=new $e,mf=new Ke;mf.set(-1,0,0,0,1,0,0,0,1);function Iy(i,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,ef(i)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function s(g,m,S,T,_){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(g,m):m.isMeshLambertMaterial?(r(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(g,m),d(g,m)):m.isMeshPhongMaterial?(r(g,m),u(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(g,m),h(g,m),m.isMeshPhysicalMaterial&&f(g,m,_)):m.isMeshMatcapMaterial?(r(g,m),p(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),v(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(a(g,m),m.isLineDashedMaterial&&o(g,m)):m.isPointsMaterial?c(g,m,S,T):m.isSpriteMaterial?l(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===nn&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===nn&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);const S=e.get(m),T=S.envMap,_=S.envMapRotation;T&&(g.envMap.value=T,g.envMapRotation.value.setFromMatrix4(Py.makeRotationFromEuler(_)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(mf),g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function a(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function o(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function c(g,m,S,T){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*S,g.scale.value=T*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function l(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function u(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function d(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function h(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function f(g,m,S){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===nn&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=S.texture,g.transmissionSamplerSize.value.set(S.width,S.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function v(g,m){const S=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(S.matrixWorld),g.nearDistance.value=S.shadow.camera.near,g.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Ly(i,e,t,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(_,E){const A=E.program;n.uniformBlockBinding(_,A)}function l(_,E){let A=s[_.id];A===void 0&&(g(_),A=u(_),s[_.id]=A,_.addEventListener("dispose",S));const I=E.program;n.updateUBOMapping(_,I);const y=e.render.frame;r[_.id]!==y&&(h(_),r[_.id]=y)}function u(_){const E=d();_.__bindingPointIndex=E;const A=i.createBuffer(),I=_.__size,y=_.usage;return i.bindBuffer(i.UNIFORM_BUFFER,A),i.bufferData(i.UNIFORM_BUFFER,I,y),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,A),A}function d(){for(let _=0;_<o;_++)if(a.indexOf(_)===-1)return a.push(_),_;return Ge("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(_){const E=s[_.id],A=_.uniforms,I=_.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let y=0,M=A.length;y<M;y++){const L=A[y];if(Array.isArray(L))for(let C=0,R=L.length;C<R;C++)f(L[C],y,C,I);else f(L,y,0,I)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(_,E,A,I){if(v(_,E,A,I)===!0){const y=_.__offset,M=_.value;if(Array.isArray(M)){let L=0;for(let C=0;C<M.length;C++){const R=M[C],B=m(R);p(R,_.__data,L),typeof R!="number"&&typeof R!="boolean"&&!R.isMatrix3&&!ArrayBuffer.isView(R)&&(L+=B.storage/Float32Array.BYTES_PER_ELEMENT)}}else p(M,_.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,y,_.__data)}}function p(_,E,A){typeof _=="number"||typeof _=="boolean"?E[0]=_:_.isMatrix3?(E[0]=_.elements[0],E[1]=_.elements[1],E[2]=_.elements[2],E[3]=0,E[4]=_.elements[3],E[5]=_.elements[4],E[6]=_.elements[5],E[7]=0,E[8]=_.elements[6],E[9]=_.elements[7],E[10]=_.elements[8],E[11]=0):ArrayBuffer.isView(_)?E.set(new _.constructor(_.buffer,_.byteOffset,E.length)):_.toArray(E,A)}function v(_,E,A,I){const y=_.value,M=E+"_"+A;if(I[M]===void 0)return typeof y=="number"||typeof y=="boolean"?I[M]=y:ArrayBuffer.isView(y)?I[M]=y.slice():I[M]=y.clone(),!0;{const L=I[M];if(typeof y=="number"||typeof y=="boolean"){if(L!==y)return I[M]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(L.equals(y)===!1)return L.copy(y),!0}}return!1}function g(_){const E=_.uniforms;let A=0;const I=16;for(let M=0,L=E.length;M<L;M++){const C=Array.isArray(E[M])?E[M]:[E[M]];for(let R=0,B=C.length;R<B;R++){const V=C[R],N=Array.isArray(V.value)?V.value:[V.value];for(let X=0,H=N.length;X<H;X++){const q=N[X],te=m(q),Z=A%I,oe=Z%te.boundary,he=Z+oe;A+=oe,he!==0&&I-he<te.storage&&(A+=I-he),V.__data=new Float32Array(te.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=A,A+=te.storage}}}const y=A%I;return y>0&&(A+=I-y),_.__size=A,_.__cache={},this}function m(_){const E={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(E.boundary=4,E.storage=4):_.isVector2?(E.boundary=8,E.storage=8):_.isVector3||_.isColor?(E.boundary=16,E.storage=12):_.isVector4?(E.boundary=16,E.storage=16):_.isMatrix3?(E.boundary=48,E.storage=48):_.isMatrix4?(E.boundary=64,E.storage=64):_.isTexture?Ie("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(E.boundary=16,E.storage=_.byteLength):Ie("WebGLRenderer: Unsupported uniform value type.",_),E}function S(_){const E=_.target;E.removeEventListener("dispose",S);const A=a.indexOf(E.__bindingPointIndex);a.splice(A,1),i.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function T(){for(const _ in s)i.deleteBuffer(s[_]);a=[],s={},r={}}return{bind:c,update:l,dispose:T}}const Dy=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Fn=null;function Ny(){return Fn===null&&(Fn=new Cl(Dy,16,16,Yi,li),Fn.name="DFG_LUT",Fn.minFilter=Rt,Fn.magFilter=Rt,Fn.wrapS=Hn,Fn.wrapT=Hn,Fn.generateMipmaps=!1,Fn.needsUpdate=!0),Fn}class Uy{constructor(e={}){const{canvas:t=bp(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1,outputBufferType:f=on}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;const v=f,g=new Set([Ml,yl,vl]),m=new Set([on,Xn,br,Tr,gl,_l]),S=new Uint32Array(4),T=new Int32Array(4),_=new F;let E=null,A=null;const I=[],y=[];let M=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Gn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const L=this;let C=!1,R=null,B=null,V=null,N=null;this._outputColorSpace=Ft;let X=0,H=0,q=null,te=-1,Z=null;const oe=new gt,he=new gt;let Qe=null;const lt=new We(0);let Be=0,ne=t.width,ue=t.height,le=1,ze=null,Xe=null;const Oe=new gt(0,0,ne,ue),vt=new gt(0,0,ne,ue);let je=!1;const ot=new Il;let O=!1,D=!1;const P=new $e,k=new F,ee=new gt,ie={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ce=!1;function xe(){return q===null?le:1}let U=n;function Se(b,G){return t.getContext(b,G)}try{const b={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${pl}`),t.addEventListener("webglcontextlost",Ct,!1),t.addEventListener("webglcontextrestored",yt,!1),t.addEventListener("webglcontextcreationerror",Dn,!1),U===null){const G="webgl2";if(U=Se(G,b),U===null)throw Se(G)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(b){throw Ge("WebGLRenderer: "+b.message),b}let Re,w,x,W,Y,j,de,pe,Q,re,me,De,ve,ge,Fe,Ve,Ze,z,fe,se,_e,Ee,ae;function Le(){Re=new Nx(U),Re.init(),_e=new Ey(U,Re),w=new Ax(U,Re,e,_e),x=new by(U,Re),w.reversedDepthBuffer&&h&&x.buffers.depth.setReversed(!0),B=U.createFramebuffer(),V=U.createFramebuffer(),N=U.createFramebuffer(),W=new Fx(U),Y=new ly,j=new Ty(U,Re,x,Y,w,_e,W),de=new Dx(L),pe=new Hg(U),Ee=new Tx(U,pe),Q=new Ux(U,pe,W,Ee),re=new Bx(U,Q,pe,Ee,W),z=new kx(U,w,j),Fe=new wx(Y),me=new cy(L,de,Re,w,Ee,Fe),De=new Iy(L,Y),ve=new dy,ge=new _y(Re),Ze=new bx(L,de,x,re,p,c),Ve=new Sy(L,re,w),ae=new Ly(U,W,w,x),fe=new Ex(U,Re,W),se=new Ox(U,Re,W),W.programs=me.programs,L.capabilities=w,L.extensions=Re,L.properties=Y,L.renderLists=ve,L.shadowMap=Ve,L.state=x,L.info=W}Le(),v!==on&&(M=new Hx(v,t.width,t.height,o,s,r));const Ce=new Cy(L,U);this.xr=Ce,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const b=Re.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Re.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return le},this.setPixelRatio=function(b){b!==void 0&&(le=b,this.setSize(ne,ue,!1))},this.getSize=function(b){return b.set(ne,ue)},this.setSize=function(b,G,J=!0){if(Ce.isPresenting){Ie("WebGLRenderer: Can't change size while VR device is presenting.");return}ne=b,ue=G,t.width=Math.floor(b*le),t.height=Math.floor(G*le),J===!0&&(t.style.width=b+"px",t.style.height=G+"px"),M!==null&&M.setSize(t.width,t.height),this.setViewport(0,0,b,G)},this.getDrawingBufferSize=function(b){return b.set(ne*le,ue*le).floor()},this.setDrawingBufferSize=function(b,G,J){ne=b,ue=G,le=J,t.width=Math.floor(b*J),t.height=Math.floor(G*J),this.setViewport(0,0,b,G)},this.setEffects=function(b){if(v===on){Ge("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let G=0;G<b.length;G++)if(b[G].isOutputPass===!0){Ie("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}M.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(oe)},this.getViewport=function(b){return b.copy(Oe)},this.setViewport=function(b,G,J,K){b.isVector4?Oe.set(b.x,b.y,b.z,b.w):Oe.set(b,G,J,K),x.viewport(oe.copy(Oe).multiplyScalar(le).round())},this.getScissor=function(b){return b.copy(vt)},this.setScissor=function(b,G,J,K){b.isVector4?vt.set(b.x,b.y,b.z,b.w):vt.set(b,G,J,K),x.scissor(he.copy(vt).multiplyScalar(le).round())},this.getScissorTest=function(){return je},this.setScissorTest=function(b){x.setScissorTest(je=b)},this.setOpaqueSort=function(b){ze=b},this.setTransparentSort=function(b){Xe=b},this.getClearColor=function(b){return b.copy(Ze.getClearColor())},this.setClearColor=function(){Ze.setClearColor(...arguments)},this.getClearAlpha=function(){return Ze.getClearAlpha()},this.setClearAlpha=function(){Ze.setClearAlpha(...arguments)},this.clear=function(b=!0,G=!0,J=!0){let K=0;if(b){let $=!1;if(q!==null){const be=q.texture.format;$=g.has(be)}if($){const be=q.texture.type,we=m.has(be),Me=Ze.getClearColor(),Pe=Ze.getClearAlpha(),Ne=Me.r,Je=Me.g,nt=Me.b;we?(S[0]=Ne,S[1]=Je,S[2]=nt,S[3]=Pe,U.clearBufferuiv(U.COLOR,0,S)):(T[0]=Ne,T[1]=Je,T[2]=nt,T[3]=Pe,U.clearBufferiv(U.COLOR,0,T))}else K|=U.COLOR_BUFFER_BIT}G&&(K|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),J&&(K|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),K!==0&&U.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),R=b},this.dispose=function(){t.removeEventListener("webglcontextlost",Ct,!1),t.removeEventListener("webglcontextrestored",yt,!1),t.removeEventListener("webglcontextcreationerror",Dn,!1),Ze.dispose(),ve.dispose(),ge.dispose(),Y.dispose(),de.dispose(),re.dispose(),Ee.dispose(),ae.dispose(),me.dispose(),Ce.dispose(),Ce.removeEventListener("sessionstart",Jl),Ce.removeEventListener("sessionend",jl),Ii.stop()};function Ct(b){b.preventDefault(),za("WebGLRenderer: Context Lost."),C=!0}function yt(){za("WebGLRenderer: Context Restored."),C=!1;const b=W.autoReset,G=Ve.enabled,J=Ve.autoUpdate,K=Ve.needsUpdate,$=Ve.type;Le(),W.autoReset=b,Ve.enabled=G,Ve.autoUpdate=J,Ve.needsUpdate=K,Ve.type=$}function Dn(b){Ge("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Nn(b){const G=b.target;G.removeEventListener("dispose",Nn),Lf(G)}function Lf(b){Df(b),Y.remove(b)}function Df(b){const G=Y.get(b).programs;G!==void 0&&(G.forEach(function(J){me.releaseProgram(J)}),b.isShaderMaterial&&me.releaseShaderCache(b))}this.renderBufferDirect=function(b,G,J,K,$,be){G===null&&(G=ie);const we=$.isMesh&&$.matrixWorld.determinantAffine()<0,Me=Of(b,G,J,K,$);x.setMaterial(K,we);let Pe=J.index,Ne=1;if(K.wireframe===!0){if(Pe=Q.getWireframeAttribute(J),Pe===void 0)return;Ne=2}const Je=J.drawRange,nt=J.attributes.position;let Ue=Je.start*Ne,pt=(Je.start+Je.count)*Ne;be!==null&&(Ue=Math.max(Ue,be.start*Ne),pt=Math.min(pt,(be.start+be.count)*Ne)),Pe!==null?(Ue=Math.max(Ue,0),pt=Math.min(pt,Pe.count)):nt!=null&&(Ue=Math.max(Ue,0),pt=Math.min(pt,nt.count));const Lt=pt-Ue;if(Lt<0||Lt===1/0)return;Ee.setup($,K,Me,J,Pe);let Pt,_t=fe;if(Pe!==null&&(Pt=pe.get(Pe),_t=se,_t.setIndex(Pt)),$.isMesh)K.wireframe===!0?(x.setLineWidth(K.wireframeLinewidth*xe()),_t.setMode(U.LINES)):_t.setMode(U.TRIANGLES);else if($.isLine){let Gt=K.linewidth;Gt===void 0&&(Gt=1),x.setLineWidth(Gt*xe()),$.isLineSegments?_t.setMode(U.LINES):$.isLineLoop?_t.setMode(U.LINE_LOOP):_t.setMode(U.LINE_STRIP)}else $.isPoints?_t.setMode(U.POINTS):$.isSprite&&_t.setMode(U.TRIANGLES);if($.isBatchedMesh)if(Re.get("WEBGL_multi_draw"))_t.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{const Gt=$._multiDrawStarts,Ae=$._multiDrawCounts,sn=$._multiDrawCount,at=Pe?pe.get(Pe).bytesPerElement:1,ln=Y.get(K).currentProgram.getUniforms();for(let Un=0;Un<sn;Un++)ln.setValue(U,"_gl_DrawID",Un),_t.render(Gt[Un]/at,Ae[Un])}else if($.isInstancedMesh)_t.renderInstances(Ue,Lt,$.count);else if(J.isInstancedBufferGeometry){const Gt=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,Ae=Math.min(J.instanceCount,Gt);_t.renderInstances(Ue,Lt,Ae)}else _t.render(Ue,Lt)};function Zl(b,G,J){b.transparent===!0&&b.side===zn&&b.forceSinglePass===!1?(b.side=nn,b.needsUpdate=!0,kr(b,G,J),b.side=ci,b.needsUpdate=!0,kr(b,G,J),b.side=zn):kr(b,G,J)}this.compile=function(b,G,J=null){J===null&&(J=b),A=ge.get(J),A.init(G),y.push(A),J.traverseVisible(function($){$.isLight&&$.layers.test(G.layers)&&(A.pushLight($),$.castShadow&&A.pushShadow($))}),b!==J&&b.traverseVisible(function($){$.isLight&&$.layers.test(G.layers)&&(A.pushLight($),$.castShadow&&A.pushShadow($))}),A.setupLights();const K=new Set;return b.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;const be=$.material;if(be)if(Array.isArray(be))for(let we=0;we<be.length;we++){const Me=be[we];Zl(Me,J,$),K.add(Me)}else Zl(be,J,$),K.add(be)}),A=y.pop(),K},this.compileAsync=function(b,G,J=null){const K=this.compile(b,G,J);return new Promise($=>{function be(){if(K.forEach(function(we){Y.get(we).currentProgram.isReady()&&K.delete(we)}),K.size===0){$(b);return}setTimeout(be,10)}Re.get("KHR_parallel_shader_compile")!==null?be():setTimeout(be,10)})};let eo=null;function Nf(b){eo&&eo(b)}function Jl(){Ii.stop()}function jl(){Ii.start()}const Ii=new cf;Ii.setAnimationLoop(Nf),typeof self<"u"&&Ii.setContext(self),this.setAnimationLoop=function(b){eo=b,Ce.setAnimationLoop(b),b===null?Ii.stop():Ii.start()},Ce.addEventListener("sessionstart",Jl),Ce.addEventListener("sessionend",jl),this.render=function(b,G){if(G!==void 0&&G.isCamera!==!0){Ge("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;R!==null&&R.renderStart(b,G);const J=Ce.enabled===!0&&Ce.isPresenting===!0,K=M!==null&&(q===null||J)&&M.begin(L,q);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),Ce.enabled===!0&&Ce.isPresenting===!0&&(M===null||M.isCompositing()===!1)&&(Ce.cameraAutoUpdate===!0&&Ce.updateCamera(G),G=Ce.getCamera()),b.isScene===!0&&b.onBeforeRender(L,b,G,q),A=ge.get(b,y.length),A.init(G),A.state.textureUnits=j.getTextureUnits(),y.push(A),P.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),ot.setFromProjectionMatrix(P,Vn,G.reversedDepth),D=this.localClippingEnabled,O=Fe.init(this.clippingPlanes,D),E=ve.get(b,I.length),E.init(),I.push(E),Ce.enabled===!0&&Ce.isPresenting===!0){const we=L.xr.getDepthSensingMesh();we!==null&&to(we,G,-1/0,L.sortObjects)}to(b,G,0,L.sortObjects),E.finish(),L.sortObjects===!0&&E.sort(ze,Xe,G.reversedDepth),ce=Ce.enabled===!1||Ce.isPresenting===!1||Ce.hasDepthSensing()===!1,ce&&Ze.addToRenderList(E,b),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),O===!0&&Fe.beginShadows();const $=A.state.shadowsArray;if(Ve.render($,b,G),O===!0&&Fe.endShadows(),(K&&M.hasRenderPass())===!1){const we=E.opaque,Me=E.transmissive;if(A.setupLights(),G.isArrayCamera){const Pe=G.cameras;if(Me.length>0)for(let Ne=0,Je=Pe.length;Ne<Je;Ne++){const nt=Pe[Ne];eu(we,Me,b,nt)}ce&&Ze.render(b);for(let Ne=0,Je=Pe.length;Ne<Je;Ne++){const nt=Pe[Ne];Ql(E,b,nt,nt.viewport)}}else Me.length>0&&eu(we,Me,b,G),ce&&Ze.render(b),Ql(E,b,G)}q!==null&&H===0&&(j.updateMultisampleRenderTarget(q),j.updateRenderTargetMipmap(q)),K&&M.end(L),b.isScene===!0&&b.onAfterRender(L,b,G),Ee.resetDefaultState(),te=-1,Z=null,y.pop(),y.length>0?(A=y[y.length-1],j.setTextureUnits(A.state.textureUnits),O===!0&&Fe.setGlobalState(L.clippingPlanes,A.state.camera)):A=null,I.pop(),I.length>0?E=I[I.length-1]:E=null,R!==null&&R.renderEnd()};function to(b,G,J,K){if(b.visible===!1)return;if(b.layers.test(G.layers)){if(b.isGroup)J=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(G);else if(b.isLightProbeGrid)A.pushLightProbeGrid(b);else if(b.isLight)A.pushLight(b),b.castShadow&&A.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||ot.intersectsSprite(b)){K&&ee.setFromMatrixPosition(b.matrixWorld).applyMatrix4(P);const we=re.update(b),Me=b.material;Me.visible&&E.push(b,we,Me,J,ee.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||ot.intersectsObject(b))){const we=re.update(b),Me=b.material;if(K&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),ee.copy(b.boundingSphere.center)):(we.boundingSphere===null&&we.computeBoundingSphere(),ee.copy(we.boundingSphere.center)),ee.applyMatrix4(b.matrixWorld).applyMatrix4(P)),Array.isArray(Me)){const Pe=we.groups;for(let Ne=0,Je=Pe.length;Ne<Je;Ne++){const nt=Pe[Ne],Ue=Me[nt.materialIndex];Ue&&Ue.visible&&E.push(b,we,Ue,J,ee.z,nt)}}else Me.visible&&E.push(b,we,Me,J,ee.z,null)}}const be=b.children;for(let we=0,Me=be.length;we<Me;we++)to(be[we],G,J,K)}function Ql(b,G,J,K){const{opaque:$,transmissive:be,transparent:we}=b;A.setupLightsView(J),O===!0&&Fe.setGlobalState(L.clippingPlanes,J),K&&x.viewport(oe.copy(K)),$.length>0&&Fr($,G,J),be.length>0&&Fr(be,G,J),we.length>0&&Fr(we,G,J),x.buffers.depth.setTest(!0),x.buffers.depth.setMask(!0),x.buffers.color.setMask(!0),x.setPolygonOffset(!1)}function eu(b,G,J,K){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[K.id]===void 0){const Ue=Re.has("EXT_color_buffer_half_float")||Re.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[K.id]=new Wn(1,1,{generateMipmaps:!0,type:Ue?li:on,minFilter:ii,samples:Math.max(4,w.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:rt.workingColorSpace})}const be=A.state.transmissionRenderTarget[K.id],we=K.viewport||oe;be.setSize(we.z*L.transmissionResolutionScale,we.w*L.transmissionResolutionScale);const Me=L.getRenderTarget(),Pe=L.getActiveCubeFace(),Ne=L.getActiveMipmapLevel();L.setRenderTarget(be),L.getClearColor(lt),Be=L.getClearAlpha(),Be<1&&L.setClearColor(16777215,.5),L.clear(),ce&&Ze.render(J);const Je=L.toneMapping;L.toneMapping=Gn;const nt=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),A.setupLightsView(K),O===!0&&Fe.setGlobalState(L.clippingPlanes,K),Fr(b,J,K),j.updateMultisampleRenderTarget(be),j.updateRenderTargetMipmap(be),Re.has("WEBGL_multisampled_render_to_texture")===!1){let Ue=!1;for(let pt=0,Lt=G.length;pt<Lt;pt++){const Pt=G[pt],{object:_t,geometry:Gt,material:Ae,group:sn}=Pt;if(Ae.side===zn&&_t.layers.test(K.layers)){const at=Ae.side;Ae.side=nn,Ae.needsUpdate=!0,tu(_t,J,K,Gt,Ae,sn),Ae.side=at,Ae.needsUpdate=!0,Ue=!0}}Ue===!0&&(j.updateMultisampleRenderTarget(be),j.updateRenderTargetMipmap(be))}L.setRenderTarget(Me,Pe,Ne),L.setClearColor(lt,Be),nt!==void 0&&(K.viewport=nt),L.toneMapping=Je}function Fr(b,G,J){const K=G.isScene===!0?G.overrideMaterial:null;for(let $=0,be=b.length;$<be;$++){const we=b[$],{object:Me,geometry:Pe,group:Ne}=we;let Je=we.material;Je.allowOverride===!0&&K!==null&&(Je=K),Me.layers.test(J.layers)&&tu(Me,G,J,Pe,Je,Ne)}}function tu(b,G,J,K,$,be){b.onBeforeRender(L,G,J,K,$,be),b.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),$.onBeforeRender(L,G,J,K,b,be),$.transparent===!0&&$.side===zn&&$.forceSinglePass===!1?($.side=nn,$.needsUpdate=!0,L.renderBufferDirect(J,G,K,$,b,be),$.side=ci,$.needsUpdate=!0,L.renderBufferDirect(J,G,K,$,b,be),$.side=zn):L.renderBufferDirect(J,G,K,$,b,be),b.onAfterRender(L,G,J,K,$,be)}function kr(b,G,J){G.isScene!==!0&&(G=ie);const K=Y.get(b),$=A.state.lights,be=A.state.shadowsArray,we=$.state.version,Me=me.getParameters(b,$.state,be,G,J,A.state.lightProbeGridArray),Pe=me.getProgramCacheKey(Me);let Ne=K.programs;K.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?G.environment:null,K.fog=G.fog;const Je=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;K.envMap=de.get(b.envMap||K.environment,Je),K.envMapRotation=K.environment!==null&&b.envMap===null?G.environmentRotation:b.envMapRotation,Ne===void 0&&(b.addEventListener("dispose",Nn),Ne=new Map,K.programs=Ne);let nt=Ne.get(Pe);if(nt!==void 0){if(K.currentProgram===nt&&K.lightsStateVersion===we)return iu(b,Me),nt}else Me.uniforms=me.getUniforms(b),R!==null&&b.isNodeMaterial&&R.build(b,J,Me),b.onBeforeCompile(Me,L),nt=me.acquireProgram(Me,Pe),Ne.set(Pe,nt),K.uniforms=Me.uniforms;const Ue=K.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Ue.clippingPlanes=Fe.uniform),iu(b,Me),K.needsLights=kf(b),K.lightsStateVersion=we,K.needsLights&&(Ue.ambientLightColor.value=$.state.ambient,Ue.lightProbe.value=$.state.probe,Ue.directionalLights.value=$.state.directional,Ue.directionalLightShadows.value=$.state.directionalShadow,Ue.spotLights.value=$.state.spot,Ue.spotLightShadows.value=$.state.spotShadow,Ue.rectAreaLights.value=$.state.rectArea,Ue.ltc_1.value=$.state.rectAreaLTC1,Ue.ltc_2.value=$.state.rectAreaLTC2,Ue.pointLights.value=$.state.point,Ue.pointLightShadows.value=$.state.pointShadow,Ue.hemisphereLights.value=$.state.hemi,Ue.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Ue.spotLightMatrix.value=$.state.spotLightMatrix,Ue.spotLightMap.value=$.state.spotLightMap,Ue.pointShadowMatrix.value=$.state.pointShadowMatrix),K.lightProbeGrid=A.state.lightProbeGridArray.length>0,K.currentProgram=nt,K.uniformsList=null,nt}function nu(b){if(b.uniformsList===null){const G=b.currentProgram.getUniforms();b.uniformsList=Ca.seqWithValue(G.seq,b.uniforms)}return b.uniformsList}function iu(b,G){const J=Y.get(b);J.outputColorSpace=G.outputColorSpace,J.batching=G.batching,J.batchingColor=G.batchingColor,J.instancing=G.instancing,J.instancingColor=G.instancingColor,J.instancingMorph=G.instancingMorph,J.skinning=G.skinning,J.morphTargets=G.morphTargets,J.morphNormals=G.morphNormals,J.morphColors=G.morphColors,J.morphTargetsCount=G.morphTargetsCount,J.numClippingPlanes=G.numClippingPlanes,J.numIntersection=G.numClipIntersection,J.vertexAlphas=G.vertexAlphas,J.vertexTangents=G.vertexTangents,J.toneMapping=G.toneMapping}function Uf(b,G){if(b.length===0)return null;if(b.length===1)return b[0].texture!==null?b[0]:null;_.setFromMatrixPosition(G.matrixWorld);for(let J=0,K=b.length;J<K;J++){const $=b[J];if($.texture!==null&&$.boundingBox.containsPoint(_))return $}return null}function Of(b,G,J,K,$){G.isScene!==!0&&(G=ie),j.resetTextureUnits();const be=G.fog,we=K.isMeshStandardMaterial||K.isMeshLambertMaterial||K.isMeshPhongMaterial?G.environment:null,Me=q===null?L.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:rt.workingColorSpace,Pe=K.isMeshStandardMaterial||K.isMeshLambertMaterial&&!K.envMap||K.isMeshPhongMaterial&&!K.envMap,Ne=de.get(K.envMap||we,Pe),Je=K.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,nt=!!J.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),Ue=!!J.morphAttributes.position,pt=!!J.morphAttributes.normal,Lt=!!J.morphAttributes.color;let Pt=Gn;K.toneMapped&&(q===null||q.isXRRenderTarget===!0)&&(Pt=L.toneMapping);const _t=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,Gt=_t!==void 0?_t.length:0,Ae=Y.get(K),sn=A.state.lights;if(O===!0&&(D===!0||b!==Z)){const Mt=b===Z&&K.id===te;Fe.setState(K,b,Mt)}let at=!1;K.version===Ae.__version?(Ae.needsLights&&Ae.lightsStateVersion!==sn.state.version||Ae.outputColorSpace!==Me||$.isBatchedMesh&&Ae.batching===!1||!$.isBatchedMesh&&Ae.batching===!0||$.isBatchedMesh&&Ae.batchingColor===!0&&$.colorTexture===null||$.isBatchedMesh&&Ae.batchingColor===!1&&$.colorTexture!==null||$.isInstancedMesh&&Ae.instancing===!1||!$.isInstancedMesh&&Ae.instancing===!0||$.isSkinnedMesh&&Ae.skinning===!1||!$.isSkinnedMesh&&Ae.skinning===!0||$.isInstancedMesh&&Ae.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&Ae.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&Ae.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&Ae.instancingMorph===!1&&$.morphTexture!==null||Ae.envMap!==Ne||K.fog===!0&&Ae.fog!==be||Ae.numClippingPlanes!==void 0&&(Ae.numClippingPlanes!==Fe.numPlanes||Ae.numIntersection!==Fe.numIntersection)||Ae.vertexAlphas!==Je||Ae.vertexTangents!==nt||Ae.morphTargets!==Ue||Ae.morphNormals!==pt||Ae.morphColors!==Lt||Ae.toneMapping!==Pt||Ae.morphTargetsCount!==Gt||!!Ae.lightProbeGrid!=A.state.lightProbeGridArray.length>0)&&(at=!0):(at=!0,Ae.__version=K.version);let ln=Ae.currentProgram;at===!0&&(ln=kr(K,G,$),R&&K.isNodeMaterial&&R.onUpdateProgram(K,ln,Ae));let Un=!1,di=!1,Qi=!1;const xt=ln.getUniforms(),Dt=Ae.uniforms;if(x.useProgram(ln.program)&&(Un=!0,di=!0,Qi=!0),K.id!==te&&(te=K.id,di=!0),Ae.needsLights){const Mt=Uf(A.state.lightProbeGridArray,$);Ae.lightProbeGrid!==Mt&&(Ae.lightProbeGrid=Mt,di=!0)}if(Un||Z!==b){x.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),xt.setValue(U,"projectionMatrix",b.projectionMatrix),xt.setValue(U,"viewMatrix",b.matrixWorldInverse);const fi=xt.map.cameraPosition;fi!==void 0&&fi.setValue(U,k.setFromMatrixPosition(b.matrixWorld)),w.logarithmicDepthBuffer&&xt.setValue(U,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&xt.setValue(U,"isOrthographic",b.isOrthographicCamera===!0),Z!==b&&(Z=b,di=!0,Qi=!0)}if(Ae.needsLights&&(sn.state.directionalShadowMap.length>0&&xt.setValue(U,"directionalShadowMap",sn.state.directionalShadowMap,j),sn.state.spotShadowMap.length>0&&xt.setValue(U,"spotShadowMap",sn.state.spotShadowMap,j),sn.state.pointShadowMap.length>0&&xt.setValue(U,"pointShadowMap",sn.state.pointShadowMap,j)),$.isSkinnedMesh){xt.setOptional(U,$,"bindMatrix"),xt.setOptional(U,$,"bindMatrixInverse");const Mt=$.skeleton;Mt&&(Mt.boneTexture===null&&Mt.computeBoneTexture(),xt.setValue(U,"boneTexture",Mt.boneTexture,j))}$.isBatchedMesh&&(xt.setOptional(U,$,"batchingTexture"),xt.setValue(U,"batchingTexture",$._matricesTexture,j),xt.setOptional(U,$,"batchingIdTexture"),xt.setValue(U,"batchingIdTexture",$._indirectTexture,j),xt.setOptional(U,$,"batchingColorTexture"),$._colorsTexture!==null&&xt.setValue(U,"batchingColorTexture",$._colorsTexture,j));const hi=J.morphAttributes;if((hi.position!==void 0||hi.normal!==void 0||hi.color!==void 0)&&z.update($,J,ln),(di||Ae.receiveShadow!==$.receiveShadow)&&(Ae.receiveShadow=$.receiveShadow,xt.setValue(U,"receiveShadow",$.receiveShadow)),(K.isMeshStandardMaterial||K.isMeshLambertMaterial||K.isMeshPhongMaterial)&&K.envMap===null&&G.environment!==null&&(Dt.envMapIntensity.value=G.environmentIntensity),Dt.dfgLUT!==void 0&&(Dt.dfgLUT.value=Ny()),di){if(xt.setValue(U,"toneMappingExposure",L.toneMappingExposure),Ae.needsLights&&Ff(Dt,Qi),be&&K.fog===!0&&De.refreshFogUniforms(Dt,be),De.refreshMaterialUniforms(Dt,K,le,ue,A.state.transmissionRenderTarget[b.id]),Ae.needsLights&&Ae.lightProbeGrid){const Mt=Ae.lightProbeGrid;Dt.probesSH.value=Mt.texture,Dt.probesMin.value.copy(Mt.boundingBox.min),Dt.probesMax.value.copy(Mt.boundingBox.max),Dt.probesResolution.value.copy(Mt.resolution)}Ca.upload(U,nu(Ae),Dt,j)}if(K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(Ca.upload(U,nu(Ae),Dt,j),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&xt.setValue(U,"center",$.center),xt.setValue(U,"modelViewMatrix",$.modelViewMatrix),xt.setValue(U,"normalMatrix",$.normalMatrix),xt.setValue(U,"modelMatrix",$.matrixWorld),K.uniformsGroups!==void 0){const Mt=K.uniformsGroups;for(let fi=0,es=Mt.length;fi<es;fi++){const su=Mt[fi];ae.update(su,ln),ae.bind(su,ln)}}return ln}function Ff(b,G){b.ambientLightColor.needsUpdate=G,b.lightProbe.needsUpdate=G,b.directionalLights.needsUpdate=G,b.directionalLightShadows.needsUpdate=G,b.pointLights.needsUpdate=G,b.pointLightShadows.needsUpdate=G,b.spotLights.needsUpdate=G,b.spotLightShadows.needsUpdate=G,b.rectAreaLights.needsUpdate=G,b.hemisphereLights.needsUpdate=G}function kf(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return X},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return q},this.setRenderTargetTextures=function(b,G,J){const K=Y.get(b);K.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,K.__autoAllocateDepthBuffer===!1&&(K.__useRenderToTexture=!1),Y.get(b.texture).__webglTexture=G,Y.get(b.depthTexture).__webglTexture=K.__autoAllocateDepthBuffer?void 0:J,K.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,G){const J=Y.get(b);J.__webglFramebuffer=G,J.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(b,G=0,J=0){q=b,X=G,H=J;let K=null,$=!1,be=!1;if(b){const Me=Y.get(b);if(Me.__useDefaultFramebuffer!==void 0){x.bindFramebuffer(U.FRAMEBUFFER,Me.__webglFramebuffer),oe.copy(b.viewport),he.copy(b.scissor),Qe=b.scissorTest,x.viewport(oe),x.scissor(he),x.setScissorTest(Qe),te=-1;return}else if(Me.__webglFramebuffer===void 0)j.setupRenderTarget(b);else if(Me.__hasExternalTextures)j.rebindTextures(b,Y.get(b.texture).__webglTexture,Y.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Je=b.depthTexture;if(Me.__boundDepthTexture!==Je){if(Je!==null&&Y.has(Je)&&(b.width!==Je.image.width||b.height!==Je.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");j.setupDepthRenderbuffer(b)}}const Pe=b.texture;(Pe.isData3DTexture||Pe.isDataArrayTexture||Pe.isCompressedArrayTexture)&&(be=!0);const Ne=Y.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Ne[G])?K=Ne[G][J]:K=Ne[G],$=!0):b.samples>0&&j.useMultisampledRTT(b)===!1?K=Y.get(b).__webglMultisampledFramebuffer:Array.isArray(Ne)?K=Ne[J]:K=Ne,oe.copy(b.viewport),he.copy(b.scissor),Qe=b.scissorTest}else oe.copy(Oe).multiplyScalar(le).floor(),he.copy(vt).multiplyScalar(le).floor(),Qe=je;if(J!==0&&(K=B),x.bindFramebuffer(U.FRAMEBUFFER,K)&&x.drawBuffers(b,K),x.viewport(oe),x.scissor(he),x.setScissorTest(Qe),$){const Me=Y.get(b.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+G,Me.__webglTexture,J)}else if(be){const Me=G;for(let Pe=0;Pe<b.textures.length;Pe++){const Ne=Y.get(b.textures[Pe]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+Pe,Ne.__webglTexture,J,Me)}}else if(b!==null&&J!==0){const Me=Y.get(b.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Me.__webglTexture,J)}te=-1},this.readRenderTargetPixels=function(b,G,J,K,$,be,we,Me=0){if(!(b&&b.isWebGLRenderTarget)){Ge("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pe=Y.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&we!==void 0&&(Pe=Pe[we]),Pe){x.bindFramebuffer(U.FRAMEBUFFER,Pe);try{const Ne=b.textures[Me],Je=Ne.format,nt=Ne.type;if(b.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Me),!w.textureFormatReadable(Je)){Ge("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!w.textureTypeReadable(nt)){Ge("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=b.width-K&&J>=0&&J<=b.height-$&&U.readPixels(G,J,K,$,_e.convert(Je),_e.convert(nt),be)}finally{const Ne=q!==null?Y.get(q).__webglFramebuffer:null;x.bindFramebuffer(U.FRAMEBUFFER,Ne)}}},this.readRenderTargetPixelsAsync=async function(b,G,J,K,$,be,we,Me=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pe=Y.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&we!==void 0&&(Pe=Pe[we]),Pe)if(G>=0&&G<=b.width-K&&J>=0&&J<=b.height-$){x.bindFramebuffer(U.FRAMEBUFFER,Pe);const Ne=b.textures[Me],Je=Ne.format,nt=Ne.type;if(b.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Me),!w.textureFormatReadable(Je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!w.textureTypeReadable(nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ue=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Ue),U.bufferData(U.PIXEL_PACK_BUFFER,be.byteLength,U.STREAM_READ),U.readPixels(G,J,K,$,_e.convert(Je),_e.convert(nt),0);const pt=q!==null?Y.get(q).__webglFramebuffer:null;x.bindFramebuffer(U.FRAMEBUFFER,pt);const Lt=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await Tp(U,Lt,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,Ue),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,be),U.deleteBuffer(Ue),U.deleteSync(Lt),be}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,G=null,J=0){const K=Math.pow(2,-J),$=Math.floor(b.image.width*K),be=Math.floor(b.image.height*K),we=G!==null?G.x:0,Me=G!==null?G.y:0;j.setTexture2D(b,0),U.copyTexSubImage2D(U.TEXTURE_2D,J,0,0,we,Me,$,be),x.unbindTexture()},this.copyTextureToTexture=function(b,G,J=null,K=null,$=0,be=0){let we,Me,Pe,Ne,Je,nt,Ue,pt,Lt;const Pt=b.isCompressedTexture?b.mipmaps[be]:b.image;if(J!==null)we=J.max.x-J.min.x,Me=J.max.y-J.min.y,Pe=J.isBox3?J.max.z-J.min.z:1,Ne=J.min.x,Je=J.min.y,nt=J.isBox3?J.min.z:0;else{const Dt=Math.pow(2,-$);we=Math.floor(Pt.width*Dt),Me=Math.floor(Pt.height*Dt),b.isDataArrayTexture?Pe=Pt.depth:b.isData3DTexture?Pe=Math.floor(Pt.depth*Dt):Pe=1,Ne=0,Je=0,nt=0}K!==null?(Ue=K.x,pt=K.y,Lt=K.z):(Ue=0,pt=0,Lt=0);const _t=_e.convert(G.format),Gt=_e.convert(G.type);let Ae;G.isData3DTexture?(j.setTexture3D(G,0),Ae=U.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(j.setTexture2DArray(G,0),Ae=U.TEXTURE_2D_ARRAY):(j.setTexture2D(G,0),Ae=U.TEXTURE_2D),x.activeTexture(U.TEXTURE0),x.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,G.flipY),x.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),x.pixelStorei(U.UNPACK_ALIGNMENT,G.unpackAlignment);const sn=x.getParameter(U.UNPACK_ROW_LENGTH),at=x.getParameter(U.UNPACK_IMAGE_HEIGHT),ln=x.getParameter(U.UNPACK_SKIP_PIXELS),Un=x.getParameter(U.UNPACK_SKIP_ROWS),di=x.getParameter(U.UNPACK_SKIP_IMAGES);x.pixelStorei(U.UNPACK_ROW_LENGTH,Pt.width),x.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Pt.height),x.pixelStorei(U.UNPACK_SKIP_PIXELS,Ne),x.pixelStorei(U.UNPACK_SKIP_ROWS,Je),x.pixelStorei(U.UNPACK_SKIP_IMAGES,nt);const Qi=b.isDataArrayTexture||b.isData3DTexture,xt=G.isDataArrayTexture||G.isData3DTexture;if(b.isDepthTexture){const Dt=Y.get(b),hi=Y.get(G),Mt=Y.get(Dt.__renderTarget),fi=Y.get(hi.__renderTarget);x.bindFramebuffer(U.READ_FRAMEBUFFER,Mt.__webglFramebuffer),x.bindFramebuffer(U.DRAW_FRAMEBUFFER,fi.__webglFramebuffer);for(let es=0;es<Pe;es++)Qi&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Y.get(b).__webglTexture,$,nt+es),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Y.get(G).__webglTexture,be,Lt+es)),U.blitFramebuffer(Ne,Je,we,Me,Ue,pt,we,Me,U.DEPTH_BUFFER_BIT,U.NEAREST);x.bindFramebuffer(U.READ_FRAMEBUFFER,null),x.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if($!==0||b.isRenderTargetTexture||Y.has(b)){const Dt=Y.get(b),hi=Y.get(G);x.bindFramebuffer(U.READ_FRAMEBUFFER,V),x.bindFramebuffer(U.DRAW_FRAMEBUFFER,N);for(let Mt=0;Mt<Pe;Mt++)Qi?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Dt.__webglTexture,$,nt+Mt):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Dt.__webglTexture,$),xt?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,hi.__webglTexture,be,Lt+Mt):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,hi.__webglTexture,be),$!==0?U.blitFramebuffer(Ne,Je,we,Me,Ue,pt,we,Me,U.COLOR_BUFFER_BIT,U.NEAREST):xt?U.copyTexSubImage3D(Ae,be,Ue,pt,Lt+Mt,Ne,Je,we,Me):U.copyTexSubImage2D(Ae,be,Ue,pt,Ne,Je,we,Me);x.bindFramebuffer(U.READ_FRAMEBUFFER,null),x.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else xt?b.isDataTexture||b.isData3DTexture?U.texSubImage3D(Ae,be,Ue,pt,Lt,we,Me,Pe,_t,Gt,Pt.data):G.isCompressedArrayTexture?U.compressedTexSubImage3D(Ae,be,Ue,pt,Lt,we,Me,Pe,_t,Pt.data):U.texSubImage3D(Ae,be,Ue,pt,Lt,we,Me,Pe,_t,Gt,Pt):b.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,be,Ue,pt,we,Me,_t,Gt,Pt.data):b.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,be,Ue,pt,Pt.width,Pt.height,_t,Pt.data):U.texSubImage2D(U.TEXTURE_2D,be,Ue,pt,we,Me,_t,Gt,Pt);x.pixelStorei(U.UNPACK_ROW_LENGTH,sn),x.pixelStorei(U.UNPACK_IMAGE_HEIGHT,at),x.pixelStorei(U.UNPACK_SKIP_PIXELS,ln),x.pixelStorei(U.UNPACK_SKIP_ROWS,Un),x.pixelStorei(U.UNPACK_SKIP_IMAGES,di),be===0&&G.generateMipmaps&&U.generateMipmap(Ae),x.unbindTexture()},this.initRenderTarget=function(b){Y.get(b).__webglFramebuffer===void 0&&j.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?j.setTextureCube(b,0):b.isData3DTexture?j.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?j.setTexture2DArray(b,0):j.setTexture2D(b,0),x.unbindTexture()},this.resetState=function(){X=0,H=0,q=null,x.reset(),Ee.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=rt._getDrawingBufferColorSpace(e),t.unpackColorSpace=rt._getUnpackColorSpace()}}const $i=60,St=1/$i,tl=32,Ye=17,qe=10,bt={radius:.35,maxHalfHearts:6,moveSpeed:5,damage:10,fireRate:2,range:6,shotSpeed:9,luck:0},Oy=60,Fy=7,Ds=.18,Pa=600,Zt={radius:.42,hp:25,moveSpeed:1.6,aggroRange:7,attackRange:5.5,telegraphTicks:24,cooldownTicks:66,spitSpeed:6,spitDamage:1,contactDamage:1},Pd=3.2,Xa=.82,Oi={halfHearts:{min:2,max:24},damage:{min:1,max:1/0},fireRate:{min:.5,max:5},range:{min:3,max:12},shotSpeed:{min:5,max:16},moveSpeed:{min:3.5,max:7.5},luck:{min:0,max:10}},ky=6,By=2.2,zy=1.6,Hy=.11,cr={damageMult:.5,range:2.5,angleRad:.9,radiusMult:.8},Cs={speedMult:.5,radiusMult:1.6,homingRange:4.5,turnRadPerTick:.05,giantRadiusMult:2.2,giantDamageMult:2},Vy=18,Gy=240,lr={ticks:8,speed:14,iframeTicks:12,cooldownTicks:120},Id=2,Wy=3,Xy={renacuajo:1,mosca_gorda:1,sapo_escupidor:3,babosa_acorazada:4,sapo_doble:8},Jt={radius:.22,hp:4,contactDamage:1,windupTicks:18,hopTicks:12,hopSpeed:7,pauseTicks:26,aggroRange:9},bi={radius:.28,hp:6,contactDamage:1,speed:1.3,retargetTicks:55,wobble:2.2},Ei={radius:.45,hp:30,contactDamage:2,speed:.8,aggroRange:10,turnRadPerTick:.02,backDot:.25},mt={radius:.5,hp:50,contactDamage:2,moveSpeed:1.2,aggroRange:9,attackRange:6,telegraphTicks:24,cooldownTicks:80,spitSpeed:6.5,spitDamage:1,spitSpreadRad:.16,swallowSeekRange:5,swallowRange:1.7,swallowTelegraphTicks:24,healPerSwallow:10,swallowCooldownTicks:140},qy=3,Yy=1,Go={hpPorNivel:.15,velPorNivel:.04,danoExtraDesdeNivel:4},nl={gigante:{hpMult:2.2,velMult:.85,sizeMult:1.45,danoPlus:1,chanceBase:.03,chancePorNivel:.05,chanceTope:.25},veloz:{hpMult:1,velMult:1.5,sizeMult:.8,danoPlus:0,chanceBase:.03,chancePorNivel:.04,chanceTope:.2}},gf=99,Ky={heart:.06},$y=2,Zy={crystal:1,crystal_med:3,crystal_big:5},Wo={big:.1,med:.3},Ld=1.7,Dd=7,Jy=.45,ke={radius:.95,hp:300,contactDamage:2,moveSpeed:1,idleTicks:45,jumpAimTicks:30,airborneTicks:20,slamRadius:1.7,slamDamage:2,tongueAimTicks:24,tongueSpeed:16,tongueDamage:2,tongueRadius:.32,tongueRange:11,summonTicks:20,summonCount:2,maxTadpoles:4,volleyAimTicks:26,volleyCount:7,volleySpreadRad:1.1,volleySpitSpeed:6.5,volleyDamage:1,bellyTicks:90,bellyDamageMult:1.5},jy=[8.5,4.4],Qy={x:7.95,y:4.1,w:1.1,h:.8},Nd=[[6.5,6.4],[8.5,6.4],[10.5,6.4]],eM=1.2,tM=1.5,ri={caja:{hp:20,radius:.42,peso:4,loot:{heart:.2,crystal:.08}},caja_rica:{hp:20,radius:.42,peso:1,loot:{heart:.1,crystal:.45}},pila:{hp:30,radius:.5,peso:2,loot:{heart:.25,crystal:.12}},barril:{hp:20,radius:.4,peso:3,loot:{heart:.15,crystal:.05}},barrilete:{hp:20,radius:.42,peso:2,loot:{heart:.15,crystal:.05}}},Ud={maxPerRoom:2,chancePerRoom:.75},Od={comun:60,rara:30,legendaria:10},nM=.75,Ai=1,iM=.55,Xi=5,sM=[{id:"punos_de_piedra",nombre:"Puños de Piedra",categoria:"pasivo",slot:"brazos",rareza:"comun",precio:4,stats:{dano:4},mults:{cadencia:.8},tags:["empuje"],procs:[],spriteOverlay:"brazos_piedra",descripcion:"Golpea como montaña, dispara como abuela."},{id:"brazos_de_arquero",nombre:"Brazos de Arquero",categoria:"pasivo",slot:"brazos",rareza:"comun",precio:3,stats:{alcance:3,velProyectil:3},mults:{},tags:[],procs:[],spriteOverlay:"brazos_arquero",descripcion:"Brazos tensos como cuerdas: el chorro vuela lejos y rápido."},{id:"piernas_de_renacuajo",nombre:"Piernas de Renacuajo",categoria:"pasivo",slot:"piernas",rareza:"comun",precio:4,stats:{velMovimiento:1.2},mults:{},tags:["rastro_charcos"],procs:[],spriteOverlay:"piernas_renacuajo",descripcion:"Deja un caminito húmedo de pura prisa."},{id:"botas_de_salto",nombre:"Botas de Salto",categoria:"pasivo",slot:"piernas",rareza:"rara",precio:8,stats:{},mults:{},tags:["dash"],procs:[],spriteOverlay:"piernas_botas",descripcion:"Un brinquito con ventaja injusta (Shift)."},{id:"casco_de_lata",nombre:"Casco de Lata",categoria:"pasivo",slot:"cabeza",rareza:"comun",precio:3,stats:{armaduraPorSala:1},mults:{},tags:[],procs:[],spriteOverlay:"cabeza_casco",descripcion:"Una olla abollada que te para el primer golpe."},{id:"ojo_de_cristal",nombre:"Ojo de Cristal",categoria:"pasivo",slot:"cabeza",rareza:"rara",precio:8,stats:{},mults:{},tags:["ver_cofres"],procs:[{efecto:"critico",base:.1,porSuerte:.015,tope:.25}],spriteOverlay:"cabeza_monoculo",descripcion:"Ve el punto débil. A veces incluso lo acierta."},{id:"nucleo_denso",nombre:"Núcleo Denso",categoria:"pasivo",slot:"nucleo",rareza:"rara",precio:9,stats:{corazones:2,velMovimiento:-.8},mults:{},tags:[],procs:[],spriteOverlay:"nucleo_denso",descripcion:"Un núcleo el doble de pesado: aguanta más, corre menos."},{id:"corazon_de_la_gema",nombre:"Corazón de la Gema",categoria:"pasivo",slot:"nucleo",rareza:"legendaria",precio:15,stats:{proyectiles:1},mults:{dano:.75},tags:[],procs:[],spriteOverlay:"nucleo_gemelo",descripcion:"Dos gotas del mismo corazón."},{id:"chorro_dividido",nombre:"Chorro Dividido",categoria:"modificador",slot:"tragado",rareza:"comun",precio:3,stats:{},mults:{},tags:["divide"],procs:[{efecto:"dividir_en_3",base:.2,porSuerte:.03,tope:.5}],spriteOverlay:"tragado_bifurcador",descripcion:"El chorro se parte en dos al impactar. A veces en tres."},{id:"burbujas_traviesas",nombre:"Burbujas Traviesas",categoria:"modificador",slot:"tragado",rareza:"comun",precio:3,stats:{},mults:{dano:.7},tags:["burbuja"],procs:[{efecto:"burbuja_gigante",base:.05,porSuerte:.02,tope:.25}],spriteOverlay:"tragado_burbujas",descripcion:"Lentas, flotonas y con malas intenciones."},{id:"libro_multidisparo",nombre:"Libro de Multidisparo",categoria:"usable",slot:"usable",rareza:"rara",precio:7,stats:{},mults:{},tags:[],procs:[],usable:{efecto:"multidisparo",recargaTicks:1200,duracionTicks:300},spriteOverlay:"usable_libro",descripcion:"Capítulo 3: cómo disparar tres veces (Espacio)."},{id:"trebol_de_alcantarilla",nombre:"Trébol de Alcantarilla",categoria:"pasivo",slot:"nucleo",rareza:"comun",precio:3,stats:{suerte:2},mults:{},tags:[],procs:[],spriteOverlay:"nucleo_trebol",descripcion:"Creció donde nadie miraba. Da suerte igual."},{id:"manos_de_ladron",nombre:"Manos de Ladrón",categoria:"pasivo",slot:"brazos",rareza:"comun",precio:4,stats:{suerte:1},mults:{},tags:["iman_monedas"],procs:[],unlockable:!0,spriteOverlay:"brazos_ladron",descripcion:"Dedos largos: lo brillante viene solo a ti."},{id:"herradura_del_ahogado",nombre:"Herradura del Ahogado",categoria:"pasivo",slot:"cabeza",rareza:"rara",precio:8,stats:{suerte:3,corazones:-1},mults:{},tags:[],procs:[],unlockable:!0,spriteOverlay:"cabeza_herradura",descripcion:"Da mucha suerte. A su dueño anterior no."},{id:"punta_de_lanza",nombre:"Punta de Lanza",categoria:"pasivo",slot:"brazos",rareza:"comun",precio:4,stats:{dano:2,velProyectil:2},mults:{},tags:[],procs:[],spriteOverlay:"brazos_lanza",descripcion:"Afilada por generaciones de sapos descuidados."},{id:"pulmones_de_buzo",nombre:"Pulmones de Buzo",categoria:"pasivo",slot:"nucleo",rareza:"comun",precio:3,stats:{alcance:-1},mults:{cadencia:1.25},tags:[],procs:[],spriteOverlay:"nucleo_pulmones",descripcion:"Respira hondo, escupe seguido, apunta cerca."},{id:"caparazon_de_tortuga",nombre:"Caparazón de Tortuga",categoria:"pasivo",slot:"cabeza",rareza:"rara",precio:8,stats:{armaduraPorSala:2,velMovimiento:-.5},mults:{},tags:[],procs:[],spriteOverlay:"cabeza_caparazon",descripcion:"Su dueña llegó a los 200 años. Por algo será."},{id:"anillo_de_marea",nombre:"Anillo de Marea",categoria:"pasivo",slot:"nucleo",rareza:"rara",precio:8,stats:{suerte:1},mults:{},tags:[],procs:[{efecto:"critico",base:.05,porSuerte:.02,tope:.2}],spriteOverlay:"nucleo_anillo",descripcion:"Sube y baja con la marea. A veces, arrasa."},{id:"chorro_a_presion",nombre:"Chorro a Presión",categoria:"modificador",slot:"tragado",rareza:"rara",precio:9,stats:{},mults:{velProyectil:1.5,dano:1.2,cadencia:.85},tags:["empuje"],procs:[],spriteOverlay:"tragado_presion",descripcion:"Tragaste una manguera de bombero. Se nota."},{id:"medalla_oxidada",nombre:"Medalla Oxidada",categoria:"pasivo",slot:"nucleo",rareza:"comun",precio:3,stats:{corazones:1},mults:{},tags:[],procs:[],spriteOverlay:"nucleo_medalla",descripcion:"Alguien fue valiente antes que tú. Te presta un poco."},{id:"aletas_de_carpa",nombre:"Aletas de Carpa",categoria:"pasivo",slot:"piernas",rareza:"comun",precio:4,stats:{velMovimiento:.8,velProyectil:1},mults:{},tags:[],procs:[],spriteOverlay:"piernas_aletas",descripcion:"Nadan solas. Tú solo apunta."},{id:"silbato_del_pantano",nombre:"Silbato del Pantano",categoria:"usable",slot:"usable",rareza:"rara",precio:7,stats:{},mults:{},tags:[],procs:[],usable:{efecto:"prisa",recargaTicks:900,duracionTicks:300},spriteOverlay:"usable_silbato",descripcion:"Suena a huida digna. Corres el doble de digno."},{id:"corona_del_rey_sapo",nombre:"Corona del Rey Sapo",categoria:"pasivo",slot:"cabeza",rareza:"legendaria",precio:15,stats:{dano:3,velMovimiento:-.6},mults:{cadencia:1.15},tags:[],procs:[],unlockable:!0,spriteOverlay:"cabeza_corona",descripcion:"Pesa como un reino. Escupe como un rey."},{id:"perla_negra",nombre:"Perla Negra",categoria:"pasivo",slot:"nucleo",rareza:"rara",precio:9,stats:{suerte:2},mults:{},tags:[],procs:[{efecto:"critico",base:.08,porSuerte:.02,tope:.3}],unlockable:!0,spriteOverlay:"nucleo_perla",descripcion:"Creció alrededor de algo que nadie quiere nombrar."},{id:"escudo_de_caracol",nombre:"Escudo de Caracol",categoria:"usable",slot:"usable",rareza:"rara",precio:8,stats:{},mults:{},tags:[],procs:[],usable:{efecto:"escudo",recargaTicks:1200,duracionTicks:150},unlockable:!0,spriteOverlay:"usable_caracol",descripcion:"Préstamo de un caracol generoso. Devuélvelo entero."},{id:"guantes_de_rana",nombre:"Guantes de Rana",categoria:"pasivo",slot:"brazos",rareza:"comun",precio:4,stats:{},mults:{cadencia:1.2},tags:[],procs:[],unlockable:!0,spriteOverlay:"brazos_rana",descripcion:"Pegajosos por fuera, rapidísimos por dentro."}],rM={items:sM},aM=["dano","cadencia","alcance","velProyectil","velMovimiento","suerte","corazones","proyectiles","armaduraPorSala"];function oM(i,e){const t=i,n=s=>{throw new Error(`items.json[${e}] (${String(t?.id??"?")}): ${s}`)};(typeof t.id!="string"||!t.id)&&n("id inválido"),(typeof t.nombre!="string"||!t.nombre)&&n("nombre inválido"),["pasivo","modificador","usable","gema"].includes(t.categoria)||n(`categoria inválida: ${String(t.categoria)}`),["comun","rara","legendaria"].includes(t.rareza)||n(`rareza inválida: ${String(t.rareza)}`),(typeof t.precio!="number"||t.precio<=0)&&n("precio inválido");for(const s of["stats","mults"]){const r=t[s];(typeof r!="object"||r===null)&&n(`${s} debe ser objeto`);for(const[a,o]of Object.entries(r))aM.includes(a)||n(`${s}.${a} no es un stat conocido`),(typeof o!="number"||!Number.isFinite(o))&&n(`${s}.${a} no numérico`),s==="mults"&&o<=0&&n(`mults.${a} debe ser > 0`)}(!Array.isArray(t.tags)||t.tags.some(s=>typeof s!="string"))&&n("tags debe ser string[]"),Array.isArray(t.procs)||n("procs debe ser array");for(const s of t.procs){typeof s.efecto!="string"&&n("proc sin efecto");for(const r of["base","porSuerte","tope"]){const a=s[r];(typeof a!="number"||a<0||a>1)&&n(`proc.${r} fuera de [0,1]`)}s.base>s.tope&&n("proc.base > proc.tope")}if(t.categoria==="usable"){const s=t.usable??{};typeof s.efecto!="string"&&n("usable sin efecto"),(typeof s.recargaTicks!="number"||s.recargaTicks<=0)&&n("usable.recargaTicks inválido"),(typeof s.duracionTicks!="number"||s.duracionTicks<0)&&n("usable.duracionTicks inválido")}return t}function cM(){const i=rM.items;if(!Array.isArray(i)||i.length===0)throw new Error("items.json: lista de items vacía");const e=new Map;return i.forEach((t,n)=>{const s=oM(t,n);if(e.has(s.id))throw new Error(`items.json: id duplicado ${s.id}`);e.set(s.id,s)}),e}const Ji=cM(),lM=[...Ji.values()].filter(i=>!i.unlockable).map(i=>i.id);function vn(i){const e=Ji.get(i);if(!e)throw new Error(`Item desconocido: ${i}`);return e}function Ns(i,e){return i.some(t=>vn(t).tags.includes(e))}function uM(i){const e=[];for(const t of i)e.push(...vn(t).procs);return e}const dM=[{id:"vacia",obstacles:[],spawns:[[4,2.5],[11,2.5],[4,6.5],[11,6.5],[7.5,2],[7.5,7]]},{id:"pilares_esquinas",obstacles:[{x:3,y:2,w:1,h:1},{x:11,y:2,w:1,h:1},{x:3,y:6,w:1,h:1},{x:11,y:6,w:1,h:1}],spawns:[[7.5,2],[7.5,7],[2,4.5],[13,4.5],[5.5,4.5],[9.5,4.5]]},{id:"bloque_central",obstacles:[{x:6,y:3.5,w:3,h:2}],spawns:[[3,2.5],[12,2.5],[3,6.5],[12,6.5]]},{id:"columnas_dobles",obstacles:[{x:4,y:3,w:1,h:3},{x:10,y:3,w:1,h:3}],spawns:[[2.5,2],[12.5,2],[2.5,7],[12.5,7],[7.5,4.5]]},{id:"esquinas_diagonales",obstacles:[{x:2.5,y:1.5,w:2,h:1.5},{x:10.5,y:6,w:2,h:1.5}],spawns:[[11.5,2],[3.5,7],[7.5,4.5],[13,4.5]]},{id:"pasillo_partido",obstacles:[{x:2.5,y:4,w:3,h:1},{x:9.5,y:4,w:3,h:1}],spawns:[[3.5,2],[11.5,2],[3.5,7],[11.5,7]]},{id:"celdas_sueltas",obstacles:[{x:4,y:2.5,w:1,h:1},{x:10,y:2.5,w:1,h:1},{x:4,y:5.5,w:1,h:1},{x:10,y:5.5,w:1,h:1}],spawns:[[7.5,2],[7.5,7],[2,4.5],[13,4.5]]},{id:"islas_gemelas",obstacles:[{x:2.5,y:2,w:2,h:2},{x:10.5,y:5,w:2,h:2}],spawns:[[12,2],[3,7],[7.5,4.5],[7.5,7]]},{id:"espina_central",obstacles:[{x:7,y:2.8,w:1,h:3.4}],spawns:[[3.5,2.5],[3.5,6.5],[11.5,2.5],[11.5,6.5]]},{id:"dientes",obstacles:[{x:3,y:3,w:1,h:1},{x:5.5,y:5,w:1,h:1},{x:9,y:2.8,w:1,h:1},{x:11.5,y:5,w:1,h:1}],spawns:[[2,6.5],[13,2],[7.5,7],[10.5,6.5]]},{id:"murallas_laterales",obstacles:[{x:3,y:2,w:1,h:2},{x:3,y:5.5,w:1,h:2},{x:11,y:2,w:1,h:2},{x:11,y:5.5,w:1,h:2}],spawns:[[7.5,2],[7.5,7],[1.8,4.5],[13.2,4.5],[7.5,4.5]]},{id:"anillo_roto",obstacles:[{x:5,y:2.8,w:2,h:1},{x:8.5,y:2.8,w:2,h:1},{x:5,y:5.2,w:2,h:1},{x:8.5,y:5.2,w:2,h:1}],spawns:[[7.5,4.5],[2.5,2],[12.5,2],[2.5,7],[12.5,7]]},{id:"cuello_botella",obstacles:[{x:4.5,y:1,w:1,h:2.2},{x:4.5,y:5.8,w:1,h:2.2},{x:9,y:3.2,w:1,h:2.6}],spawns:[[3,4.5],[12,2.5],[12,6.5],[11,4.5]]},{id:"escombros",obstacles:[{x:2.5,y:5.8,w:1.5,h:1},{x:5.5,y:2.8,w:1,h:1.5},{x:9.5,y:6,w:1.5,h:1},{x:11.5,y:2.2,w:1,h:1}],spawns:[[7.5,4.5],[3.5,2.5],[11.5,4.2],[4.5,6.8]]}],hM={templates:dM};function fM(i){let e=2166136261;for(let t=0;t<i.length;t++)e^=i.charCodeAt(t),e=Math.imul(e,16777619);return e>>>0}function ji(i){let e=i>>>0;return function(){e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function pM(i){const e=t=>ji((i^fM(t))>>>0);return{mapgen:e("mapgen"),ai:e("ai"),drops:e("drops"),procs:e("procs")}}function Gs(i,e,t){return e+i()*(t-e)}function mM(){const i=hM.templates;if(!Array.isArray(i)||i.length<12)throw new Error("el_pozo.json: se esperan al menos 12 plantillas (PLAN F1.2)");for(const e of i)if(!e.id||!Array.isArray(e.obstacles)||!Array.isArray(e.spawns))throw new Error(`plantilla malformada: ${e.id??"?"}`);return i}const il=mM();function Qa(i){const e=il.find(t=>t.id===i);if(!e)throw new Error(`plantilla desconocida: ${i}`);return e}const Bi=11,ur=[{dx:0,dy:-1,door:"n",opp:"s"},{dx:1,dy:0,door:"e",opp:"w"},{dx:0,dy:1,door:"s",opp:"n"},{dx:-1,dy:0,door:"w",opp:"e"}];function Ms(i,e){return e*Bi+i}function gM(i){return 4+i}function sl(i,e){const t=new Map,n=[],s=(h,f,p)=>{const v={id:n.length,gx:h,gy:f,kind:p,doors:{n:-1,e:-1,s:-1,w:-1},templateId:"vacia",seed:Math.floor(i()*4294967295)>>>0,cleared:p==="start"||p==="treasure"||p==="shop",visited:p==="start",looted:!1,locked:p==="treasure",sold:[],drops:[],props:null};return n.push(v),t.set(Ms(h,f),v),v},r=s(Math.floor(Bi/2),Math.floor(Bi/2),"start"),a=gM(e);let o=0,c=0;for(;o<a&&c++<500;){const h=n[Math.floor(i()*n.length)],f=ur[Math.floor(i()*4)],p=h.gx+f.dx,v=h.gy+f.dy;if(p<0||v<0||p>=Bi||v>=Bi||t.has(Ms(p,v)))continue;let g=0;for(const m of ur)t.has(Ms(p+m.dx,v+m.dy))&&g++;g>1||(s(p,v,"normal"),o++)}const l=["boss","treasure","shop"];for(const h of l){const f=[];for(const v of n)if(!(v.kind!=="normal"&&v.kind!=="start"))for(const g of ur){const m=v.gx+g.dx,S=v.gy+g.dy;if(m<0||S<0||m>=Bi||S>=Bi||t.has(Ms(m,S)))continue;let T=0;for(const _ of ur)t.has(Ms(m+_.dx,S+_.dy))&&T++;T===1&&f.push({gx:m,gy:S,host:v})}if(f.length===0)throw new Error(`mapgen: sin hueco para la sala ${h} (nivel ${e})`);let p;if(h==="boss"){let v=-1,g=f[0];for(const m of f){const S=Math.abs(m.gx-r.gx)+Math.abs(m.gy-r.gy);S>v&&(v=S,g=m)}p=g}else p=f[Math.floor(i()*f.length)];s(p.gx,p.gy,h)}for(const h of n)for(const f of ur){const p=t.get(Ms(h.gx+f.dx,h.gy+f.dy));p&&(h.doors[f.door]=p.id)}for(const h of n)h.kind==="normal"&&(h.templateId=il[Math.floor(i()*il.length)].id);const u=n.filter(h=>h.kind==="normal"),d=u[Math.floor(i()*u.length)].id;return{level:e,rooms:n,current:r.id,trapdoorOpen:!1,keyRoomId:d}}function _M(i,e=lM){const t=ji(i.seed^24301),n=[...e],s=[];for(let r=0;r<3&&n.length;r++)s.push(n.splice(Math.floor(t()*n.length),1)[0]);return s}function xM(i,e){return e==="boss"?(i+Id)*Wy:e==="normal"?i+Id:0}function vM(i,e,t){const n=i();if(t==="sapo_doble"||t==="gorko")return null;let s=0;for(const r of Object.keys(nl)){const a=nl[r];if(s+=Math.min(a.chanceTope,a.chanceBase+a.chancePorNivel*(e-1)),n<s)return r}return null}function yM(i,e){if(i.kind==="boss"&&e===Xi)return[{kind:"gorko",x:Ye/2,y:qe/2-1.5,variant:null}];const t=xM(e,i.kind);if(t<=0)return[];const n=ji(i.seed),r=Qa(i.templateId).spawns.map(([h,f])=>({x:h,y:f}));for(let h=r.length-1;h>0;h--){const f=Math.floor(n()*(h+1));[r[h],r[f]]=[r[f],r[h]]}const a=Object.entries(Xy),o=Math.min(...a.map(([,h])=>h)),c=[];let l=t,u=0,d=0;for(;l>=o&&u<24;){const h=a.filter(([m,S])=>S<=l&&(m!=="sapo_doble"||d<Yy));if(h.length===0)break;const[f,p]=h[Math.floor(n()*h.length)];f==="sapo_doble"&&d++;const v=r[u%r.length],g=u>=r.length?.6:0;c.push({kind:f,x:v.x+(n()*2-1)*g,y:v.y+(n()*2-1)*g,variant:vM(n,e,f)}),l-=p,u++}return c}function MM(i){const e={},t={};for(const n of i){const s=vn(n);for(const[r,a]of Object.entries(s.stats))e[r]=(e[r]??0)+a;for(const[r,a]of Object.entries(s.mults))t[r]=(t[r]??1)*a}return{flat:e,mult:t}}function _f(i,e){return Math.min(e.max,Math.max(e.min,i))}function Ss(i,e,t,n){return _f((i+(t.flat[e]??0))*(t.mult[e]??1),n)}function Ur(i){const e=MM(i);return{maxHalfHearts:_f(bt.maxHalfHearts+(e.flat.corazones??0)*2,Oi.halfHearts),damage:Ss(bt.damage,"dano",e,Oi.damage),fireRate:Ss(bt.fireRate,"cadencia",e,Oi.fireRate),range:Ss(bt.range,"alcance",e,Oi.range),shotSpeed:Ss(bt.shotSpeed,"velProyectil",e,Oi.shotSpeed),moveSpeed:Ss(bt.moveSpeed,"velMovimiento",e,Oi.moveSpeed),luck:Ss(bt.luck,"suerte",e,Oi.luck),projectiles:1+(e.flat.proyectiles??0),armorPerRoom:e.flat.armaduraPorSala??0}}function xf(i,e){return Math.min(i.tope,i.base+e*i.porSuerte)}function vf(){return{up:!1,down:!1,left:!1,right:!1,fire:!1,dash:!1,use:!1,use2:!1,interact:!1,aimX:0,aimY:0}}function rl(i){return[...Ji.values()].filter(e=>!e.unlockable||i.config.unlockedItems.includes(e.id)).map(e=>e.id)}const Ia="0.1.0",Rn=1,Cn=1,Pn=Ye-1,In=qe-1;function Fd(i,e){const t=pM(i),n={usableSlots:e?.usableSlots??1,unlockedItems:e?.unlockedItems??[],resume:e?.resume??null},s={version:Ia,seed:i,tick:0,status:"playing",config:n,player:{x:3.5,y:qe/2,kx:0,ky:0,halfHearts:bt.maxHalfHearts,maxHalfHearts:bt.maxHalfHearts,armor:0,keys:0,crystals:0,iframes:0,fireCooldown:0,aimX:1,aimY:0,deathTick:0,items:[],usable:null,usable2:null,dashTicks:0,dashCooldown:0,dashDirX:1,dashDirY:0},stats:Ur([]),floor:sl(t.mapgen,1),obstacles:[],enemies:[],shots:[],puddles:[],pickups:[],drops:[],chest:null,props:[],events:[],nextId:2},r=n.resume;if(r&&r.nivel>1){const a=Math.min(r.nivel,Xi);for(let c=2;c<=a;c++)s.floor=sl(t.mapgen,c);const o=s.player;o.items=[...r.items],s.stats=Ur(o.items),o.maxHalfHearts=s.stats.maxHalfHearts,o.halfHearts=Math.max(1,Math.min(r.halfHearts,o.maxHalfHearts)),o.crystals=Math.min(gf,Math.max(0,r.crystals)),o.keys=Math.max(0,r.keys);for(const[c,l]of[["usable",r.usable],["usable2",r.usable2]])l&&Ji.has(l)&&(o[c]={itemId:l,cooldown:0,activeTicks:0})}return s.obstacles=[...Qa(s.floor.rooms[s.floor.current].templateId).obstacles],{state:s,step(a){RM(s,a??vf(),t)},hash(){return qM(s)}}}const SM={sapo_escupidor:Zt.hp,renacuajo:Jt.hp,mosca_gorda:bi.hp,babosa_acorazada:Ei.hp,sapo_doble:mt.hp,gorko:ke.hp};function Zi(i){return bM(i.kind)*i.sizeMult}function bM(i){switch(i){case"sapo_escupidor":return Zt.radius;case"renacuajo":return Jt.radius;case"mosca_gorda":return bi.radius;case"babosa_acorazada":return Ei.radius;case"sapo_doble":return mt.radius;case"gorko":return ke.radius}}function TM(i){switch(i){case"sapo_escupidor":return Zt.contactDamage;case"renacuajo":return Jt.contactDamage;case"mosca_gorda":return bi.contactDamage;case"babosa_acorazada":return Ei.contactDamage;case"sapo_doble":return mt.contactDamage;case"gorko":return ke.contactDamage}}function yf(i,e,t,n,s=1,r=null){const a=Ye/2-t,o=qe/2-n,c=Math.hypot(a,o)||1,l=r?nl[r]:null,u=e==="gorko"?1:s,d=(1+Go.hpPorNivel*(u-1))*(l?.hpMult??1),h=Math.round(SM[e]*d);return{id:i,kind:e,x:t,y:n,kx:0,ky:0,hp:h,maxHp:h,fsm:"idle",timer:0,targetX:t,targetY:n,wanderX:t,wanderY:n,facingX:a/c,facingY:o/c,swallowTarget:-1,swallowCooldown:0,attackCycle:0,phase2:!1,speedMult:(1+Go.velPorNivel*(u-1))*(l?.velMult??1),sizeMult:l?.sizeMult??1,dmgPlus:(u>=Go.danoExtraDesdeNivel?1:0)+(l?.danoPlus??0),variant:r}}const xa=.8;function zl(i,e,t){const n=i.floor.current,s=i.floor.rooms[e];n!==e&&(i.floor.rooms[n].drops=i.drops.map(a=>({kind:a.kind,x:a.x,y:a.y})),i.floor.rooms[n].props=i.props.map(a=>({kind:a.kind,x:a.x,y:a.y,hp:a.hp,loot:a.loot}))),i.floor.current=e,i.obstacles=[...Qa(s.templateId).obstacles],i.shots.length=0,i.puddles.length=0,i.pickups.length=0,i.drops.length=0;for(const a of s.drops)i.drops.push({id:i.nextId++,kind:a.kind,x:a.x,y:a.y});s.drops=[],s.props===null&&(s.props=EM(s)),i.props=s.props.map(a=>({id:i.nextId++,...a}));const r=i.player;if(t==="n"?(r.x=Ye/2,r.y=qe-1-xa):t==="s"?(r.x=Ye/2,r.y=1+xa):t==="e"?(r.x=1+xa,r.y=qe/2):t==="w"?(r.x=Ye-1-xa,r.y=qe/2):(r.x=Ye/2,r.y=qe/2+1.5),r.kx=r.ky=0,i.enemies.length=0,s.visited=!0,!s.cleared)for(const a of yM(s,i.floor.level))i.enemies.push(yf(i.nextId++,a.kind,a.x,a.y,i.floor.level,a.variant));if(s.kind==="treasure"&&!s.looted){const a=ji(s.seed),o=rl(i),c=o[Math.floor(a()*o.length)];i.pickups.push({id:i.nextId++,itemId:c,x:Ye/2,y:qe/2})}s.kind==="shop"&&(_M(s,rl(i)).filter(o=>!s.sold.includes(o)).forEach((o,c)=>{const[l,u]=Nd[c%Nd.length];i.pickups.push({id:i.nextId++,itemId:o,x:l,y:u,price:vn(o).precio})}),i.obstacles.push({...Qy,invisible:!0})),t&&tt(i,{type:"room_changed",from:n,to:e,dir:t,tick:i.tick})}function EM(i){if(i.kind!=="normal")return[];const e=ji(i.seed^805502);if(e()>Ud.chancePerRoom)return[];const t=Qa(i.templateId),n=1+Math.floor(e()*Ud.maxPerRoom),s=Object.keys(ri),r=s.reduce((o,c)=>o+ri[c].peso,0),a=[];for(let o=0;o<n;o++){let c=e()*r,l="caja";for(const f of s)if(c-=ri[f].peso,c<=0){l=f;break}const u=ri[l],d=e(),h=d<u.loot.heart?"heart":d<u.loot.heart+u.loot.crystal?"crystal":"nada";for(let f=0;f<10;f++){const p=2+e()*(Ye-4),v=2+e()*(qe-4),g=Math.abs(p-Ye/2)<Ai+.8||Math.abs(v-qe/2)<Ai+.8,m=t.obstacles.some(T=>p>T.x-.5&&p<T.x+T.w+.5&&v>T.y-.5&&v<T.y+T.h+.5),S=a.some(T=>Tt(T.x,T.y,p,v)<1.3);if(!(g||m||S)){a.push({kind:l,x:p,y:v,hp:u.hp,loot:h});break}}}return a}function AM(i,e){if(i.floor.level>=Xi){i.status="victory",tt(i,{type:"victory",tick:i.tick});return}i.floor=sl(e.mapgen,i.floor.level+1),zl(i,i.floor.current),tt(i,{type:"level_started",level:i.floor.level,tick:i.tick})}function Hl(i,e,t,n){for(const s of n){const r=Ot(i,s.x,s.x+s.w),a=Ot(e,s.y,s.y+s.h),o=i-r,c=e-a,l=o*o+c*c;if(!(l>=t*t))if(l>1e-9){const u=Math.sqrt(l);i=r+o/u*t,e=a+c/u*t}else{const u=i-s.x,d=s.x+s.w-i,h=e-s.y,f=s.y+s.h-e,p=Math.min(u,d,h,f);p===u?i=s.x-t:p===d?i=s.x+s.w+t:p===h?e=s.y-t:e=s.y+s.h+t}}return{x:i,y:e}}function wM(i,e,t){for(const n of t)if(i>=n.x&&i<=n.x+n.w&&e>=n.y&&e<=n.y+n.h)return!0;return!1}function RM(i,e,t){if(i.events=[],i.tick++,i.status!=="playing"){Bd(i),zd(i);return}CM(i,e,t),LM(i,t),Bd(i),zd(i),HM(i,t),WM(i)}function CM(i,e,t){const n=i.player,s=(M,L)=>{if(M&&(M.cooldown>0&&M.cooldown--,M.activeTicks>0&&M.activeTicks--,L&&M.cooldown===0)){const C=vn(M.itemId);M.activeTicks=C.usable.duracionTicks,M.cooldown=C.usable.recargaTicks,tt(i,{type:"usable_activated",itemId:M.itemId,tick:i.tick})}};s(n.usable,e.use),s(n.usable2,e.use2),n.dashCooldown>0&&n.dashCooldown--;let r=(e.right?1:0)-(e.left?1:0),a=(e.down?1:0)-(e.up?1:0);if(r!==0&&a!==0){const M=1/Math.SQRT2;r*=M,a*=M}if(e.dash&&n.dashTicks===0&&n.dashCooldown===0&&Ns(n.items,"dash")){const M=r!==0||a!==0?r:n.aimX,L=r!==0||a!==0?a:n.aimY,C=Math.hypot(M,L)||1;n.dashDirX=M/C,n.dashDirY=L/C,n.dashTicks=lr.ticks,n.dashCooldown=lr.cooldownTicks,n.iframes=Math.max(n.iframes,lr.iframeTicks),tt(i,{type:"dash_used",tick:i.tick})}const o=n.x,c=n.y;if(n.dashTicks>0)n.dashTicks--,n.x+=(n.dashDirX*lr.speed+n.kx)*St,n.y+=(n.dashDirY*lr.speed+n.ky)*St;else{const M=i.stats.moveSpeed*(Mf(i,"prisa")?tM:1);n.x+=(r*M+n.kx)*St,n.y+=(a*M+n.ky)*St}n.kx*=Xa,n.ky*=Xa,Math.abs(n.kx)<.05&&(n.kx=0),Math.abs(n.ky)<.05&&(n.ky=0);const l=i.floor.rooms[i.floor.current],u=l.cleared,d=M=>!u||M<0?!1:!i.floor.rooms[M].locked||n.keys>0,h=Math.abs(n.x-Ye/2)<Ai,f=Math.abs(n.y-qe/2)<Ai,p=bt.radius,v=d(l.doors.n)&&h?Cn-.5:Cn+p,g=d(l.doors.s)&&h?In+.5:In-p,m=d(l.doors.w)&&f?Rn-.5:Rn+p,S=d(l.doors.e)&&f?Pn+.5:Pn-p;n.x=Ot(n.x,m,S),n.y=Ot(n.y,v,g);const T=Hl(n.x,n.y,p,i.obstacles);n.x=T.x,n.y=T.y;for(const M of i.props){const L=Tt(n.x,n.y,M.x,M.y),C=p+ri[M.kind].radius;L<C&&L>1e-4&&(n.x=M.x+(n.x-M.x)/L*C,n.y=M.y+(n.y-M.y)/L*C)}const _=(M,L)=>{const C=i.floor.rooms[M];C.locked&&(C.locked=!1,n.keys--,tt(i,{type:"door_unlocked",roomId:M,tick:i.tick})),zl(i,M,L)};if(n.y<Cn-.25&&l.doors.n>=0){_(l.doors.n,"n");return}if(n.y>In+.25&&l.doors.s>=0){_(l.doors.s,"s");return}if(n.x<Rn-.25&&l.doors.w>=0){_(l.doors.w,"w");return}if(n.x>Pn+.25&&l.doors.e>=0){_(l.doors.e,"e");return}if(i.floor.trapdoorOpen&&l.kind==="boss"&&Tt(n.x,n.y,Ye/2,qe/2)<iM){AM(i,t);return}(n.x!==o||n.y!==c)&&i.tick%Vy===0&&Ns(n.items,"rastro_charcos")&&i.puddles.push({x:n.x,y:n.y+bt.radius*.6,ttl:Gy});const E=e.aimX-n.x,A=e.aimY-n.y,I=Math.hypot(E,A);I>.001&&(n.aimX=E/I,n.aimY=A/I),n.fireCooldown>0&&n.fireCooldown--,e.fire&&n.fireCooldown===0&&(PM(i,t),n.fireCooldown=Math.round($i/i.stats.fireRate),tt(i,{type:"shot_fired",owner:"player",tick:i.tick}));for(let M=i.pickups.length-1;M>=0;M--){const L=i.pickups[M],C=Tt(n.x,n.y,L.x,L.y);if(!L.price&&C<bt.radius+.35)kd(i,M);else if(L.price&&e.interact&&C<eM&&n.crystals>=L.price){const R=L.price,B=L.itemId;n.crystals-=R,i.floor.rooms[i.floor.current].sold.push(B),L.price=0,kd(i,M),tt(i,{type:"item_bought",itemId:B,price:R,crystalsLeft:n.crystals,tick:i.tick})}}const y=Ns(n.items,"iman_monedas")?Ld*2.2:Ld;for(let M=i.drops.length-1;M>=0;M--){const L=i.drops[M];if(L.kind==="heart"&&n.halfHearts>=n.maxHalfHearts)continue;const C=Tt(n.x,n.y,L.x,L.y);if(C<y&&C>1e-6&&(L.x+=(n.x-L.x)/C*Dd*St,L.y+=(n.y-L.y)/C*Dd*St),!(C>=Jy)){switch(L.kind){case"heart":n.halfHearts=Math.min(n.maxHalfHearts,n.halfHearts+$y),tt(i,{type:"heart_collected",halfHeartsLeft:n.halfHearts,tick:i.tick});break;case"key":n.keys++,tt(i,{type:"key_collected",keys:n.keys,tick:i.tick});break;case"crystal":case"crystal_med":case"crystal_big":{const R=Zy[L.kind];n.crystals=Math.min(gf,n.crystals+R),tt(i,{type:"crystal_collected",value:R,total:n.crystals,tick:i.tick});break}}i.drops.splice(M,1)}}i.chest&&!i.chest.opened&&i.chest.roomId===i.floor.current&&Tt(n.x,n.y,i.chest.x,i.chest.y)<bt.radius+nM&&(i.chest.opened=!0,i.chest.reward==="cristales"&&i.drops.push({id:i.nextId++,kind:"crystal_big",x:i.chest.x,y:i.chest.y+.7}),tt(i,{type:"chest_opened",reward:i.chest.reward,tick:i.tick})),IM(i)}function PM(i,e){const t=i.player,n=Ns(t.items,"burbuja"),s=[];Ns(t.items,"divide")&&s.push("divide"),n&&s.push("burbuja");let r=i.stats.projectiles;for(const l of[t.usable,t.usable2])l&&l.activeTicks>0&&vn(l.itemId).usable.efecto==="multidisparo"&&(r+=2);const a=i.stats.shotSpeed*(n?Cs.speedMult:1),o=By+(Ns(t.items,"empuje")?zy:0),c=Math.atan2(t.aimY,t.aimX);for(let l=0;l<r;l++){const u=c+(l-(r-1)/2)*Hy,d=Math.cos(u),h=Math.sin(u);let f=Ds*(n?Cs.radiusMult:1),p=i.stats.damage;n&&Vl(i,e,"burbuja_gigante")&&(f=Ds*Cs.giantRadiusMult,p*=Cs.giantDamageMult),i.shots.push({id:i.nextId++,owner:"player",x:t.x+d*(bt.radius+f),y:t.y+h*(bt.radius+f),vx:d*a,vy:h*a,damage:p,traveled:0,maxRange:i.stats.range,radius:f,knockback:o,tags:s,fragment:!1})}}function Vl(i,e,t){const n=uM(i.player.items).find(a=>a.efecto===t);if(!n)return!1;const s=xf(n,i.stats.luck),r=e.procs()<s;return r&&tt(i,{type:"proc_triggered",efecto:t,tick:i.tick}),r}function kd(i,e){const t=i.player,n=i.pickups[e],s=vn(n.itemId);if(s.categoria==="usable")if(!t.usable)t.usable={itemId:n.itemId,cooldown:0,activeTicks:0},i.pickups.splice(e,1);else if(i.config.usableSlots>=2&&!t.usable2)t.usable2={itemId:n.itemId,cooldown:0,activeTicks:0},i.pickups.splice(e,1);else{const r=t.usable;t.usable={itemId:n.itemId,cooldown:0,activeTicks:0},n.itemId=r.itemId}else{t.items.push(n.itemId),i.pickups.splice(e,1);const r=i.floor.rooms[i.floor.current];r.kind==="treasure"&&(r.looted=!0);const a=i.stats;i.stats=Ur(t.items);const o=i.stats.maxHalfHearts-a.maxHalfHearts;t.maxHalfHearts=i.stats.maxHalfHearts,o>0&&(t.halfHearts+=o),t.halfHearts=Math.min(t.halfHearts,t.maxHalfHearts);const c=i.stats.armorPerRoom-a.armorPerRoom;c>0&&(t.armor=Math.min(ky,t.armor+c*2))}tt(i,{type:"item_picked",itemId:s.id,tick:i.tick})}function IM(i){const e=i.player;if(e.iframes>0&&(e.iframes--,e.iframes===0)){let t=!1;for(const n of i.enemies){const s=Tt(e.x,e.y,n.x,n.y),r=bt.radius+Zi(n);if(s<r){const a=s>.001?(e.x-n.x)/s:1,o=s>.001?(e.y-n.y)/s:0;e.x=Ot(n.x+a*(r+.05),Rn+bt.radius,Pn-bt.radius),e.y=Ot(n.y+o*(r+.05),Cn+bt.radius,In-bt.radius),t=!0}}tt(i,{type:"iframes_ended",separated:t,tick:i.tick})}}function LM(i,e){const t=[];for(const n of i.enemies){switch(n.x+=n.kx*St,n.y+=n.ky*St,n.kx*=Xa,n.ky*=Xa,n.kind){case"sapo_escupidor":DM(i,n,e);break;case"renacuajo":NM(i,n);break;case"mosca_gorda":UM(i,n,e);break;case"babosa_acorazada":OM(i,n);break;case"sapo_doble":FM(i,n,t);break;case"gorko":kM(i,n,e,t);break}const s=Zi(n);if(n.x=Ot(n.x,Rn+s,Pn-s),n.y=Ot(n.y,Cn+s,In-s),n.kind!=="mosca_gorda"){const r=Hl(n.x,n.y,s,i.obstacles);n.x=r.x,n.y=r.y;for(const a of i.props){const o=Tt(n.x,n.y,a.x,a.y),c=s+ri[a.kind].radius;o<c&&o>1e-4&&(n.x=a.x+(n.x-a.x)/o*c,n.y=a.y+(n.y-a.y)/o*c)}}}zM(i),t.length&&(i.enemies=i.enemies.filter(n=>!t.includes(n.id)))}function DM(i,e,t){const n=i.player,s=Tt(e.x,e.y,n.x,n.y);switch(e.fsm){case"idle":{if(e.timer>0&&e.timer--,s<=Zt.attackRange&&e.timer===0){e.fsm="aim",e.timer=Zt.telegraphTicks,e.targetX=n.x,e.targetY=n.y,tt(i,{type:"telegraph_started",enemyId:e.id,tick:i.tick});break}i.tick%45===0&&(s<=Zt.aggroRange?(e.wanderX=n.x,e.wanderY=n.y):(e.wanderX=Ot(e.x+Gs(t.ai,-2,2),Rn+1,Pn-1),e.wanderY=Ot(e.y+Gs(t.ai,-2,2),Cn+1,In-1)));const r=Tt(e.x,e.y,e.wanderX,e.wanderY);r>.2&&(e.x+=(e.wanderX-e.x)/r*Zt.moveSpeed*e.speedMult*St,e.y+=(e.wanderY-e.y)/r*Zt.moveSpeed*e.speedMult*St);break}case"aim":{e.timer--,e.timer<=0&&(e.fsm="shoot");break}case"shoot":{qa(i,e,e.targetX,e.targetY,0,Zt.spitSpeed,Zt.spitDamage),tt(i,{type:"shot_fired",owner:"enemy",tick:i.tick}),e.fsm="cool",e.timer=Zt.cooldownTicks;break}case"cool":{e.timer--,e.timer<=0&&(e.fsm="idle",e.timer=12);break}default:e.fsm="idle"}}function NM(i,e){const t=i.player;switch(e.fsm){case"idle":{if(e.timer>0&&e.timer--,e.timer===0&&Tt(e.x,e.y,t.x,t.y)<=Jt.aggroRange){e.fsm="windup",e.timer=Jt.windupTicks;const n=t.x-e.x,s=t.y-e.y,r=Math.hypot(n,s)||1;e.facingX=n/r,e.facingY=s/r,tt(i,{type:"telegraph_started",enemyId:e.id,tick:i.tick})}break}case"windup":{e.timer--,e.timer<=0&&(e.fsm="hop",e.timer=Jt.hopTicks);break}case"hop":{e.x+=e.facingX*Jt.hopSpeed*e.speedMult*St,e.y+=e.facingY*Jt.hopSpeed*e.speedMult*St,e.timer--,e.timer<=0&&(e.fsm="idle",e.timer=Jt.pauseTicks);break}default:e.fsm="idle",e.timer=Jt.pauseTicks}}function UM(i,e,t){const n=i.player;i.tick%bi.retargetTicks===0&&(e.wanderX=Ot(n.x+Gs(t.ai,-2.2,bi.wobble),Rn+.5,Pn-.5),e.wanderY=Ot(n.y+Gs(t.ai,-2.2,bi.wobble),Cn+.5,In-.5));const s=e.wanderX-e.x,r=e.wanderY-e.y,a=Math.hypot(s,r);a>.15&&(e.x+=s/a*bi.speed*e.speedMult*St,e.y+=r/a*bi.speed*e.speedMult*St,e.facingX=s/a,e.facingY=r/a)}function OM(i,e){const t=i.player,n=Math.atan2(t.y-e.y,t.x-e.x),s=Math.atan2(e.facingY,e.facingX);let r=n-s;for(;r>Math.PI;)r-=2*Math.PI;for(;r<-Math.PI;)r+=2*Math.PI;const a=Ot(r,-.02,Ei.turnRadPerTick),o=s+a;e.facingX=Math.cos(o),e.facingY=Math.sin(o),Tt(e.x,e.y,t.x,t.y)<=Ei.aggroRange&&(e.x+=e.facingX*Ei.speed*e.speedMult*St,e.y+=e.facingY*Ei.speed*e.speedMult*St)}function FM(i,e,t){const n=i.player,s=Tt(e.x,e.y,n.x,n.y);switch(e.swallowCooldown>0&&e.swallowCooldown--,e.fsm){case"idle":{e.timer>0&&e.timer--;const r=BM(i,e);if(e.hp<e.maxHp&&e.swallowCooldown===0&&r){const a=Tt(e.x,e.y,r.x,r.y);if(a<=mt.swallowRange){e.fsm="swallow_aim",e.timer=mt.swallowTelegraphTicks,e.swallowTarget=r.id,tt(i,{type:"telegraph_started",enemyId:e.id,tick:i.tick});break}const o=a||1;e.x+=(r.x-e.x)/o*mt.moveSpeed*e.speedMult*St,e.y+=(r.y-e.y)/o*mt.moveSpeed*e.speedMult*St;break}if(s<=mt.attackRange&&e.timer===0){e.fsm="aim",e.timer=mt.telegraphTicks,e.targetX=n.x,e.targetY=n.y,tt(i,{type:"telegraph_started",enemyId:e.id,tick:i.tick});break}s<=mt.aggroRange&&s>2&&(e.x+=(n.x-e.x)/s*mt.moveSpeed*e.speedMult*St,e.y+=(n.y-e.y)/s*mt.moveSpeed*e.speedMult*St);break}case"aim":{e.timer--,e.timer<=0&&(e.fsm="shoot");break}case"shoot":{qa(i,e,e.targetX,e.targetY,-.16,mt.spitSpeed,mt.spitDamage),qa(i,e,e.targetX,e.targetY,mt.spitSpreadRad,mt.spitSpeed,mt.spitDamage),tt(i,{type:"shot_fired",owner:"enemy",tick:i.tick}),e.fsm="cool",e.timer=mt.cooldownTicks;break}case"swallow_aim":{if(e.timer--,e.timer<=0){const r=i.enemies.find(a=>a.id===e.swallowTarget);if(r&&Tt(e.x,e.y,r.x,r.y)<=mt.swallowRange*1.3){t.push(r.id);const a=Math.min(mt.healPerSwallow,e.maxHp-e.hp);e.hp+=a,tt(i,{type:"elite_swallowed",enemyId:e.id,victimId:r.id,healed:a,tick:i.tick})}e.swallowTarget=-1,e.swallowCooldown=mt.swallowCooldownTicks,e.fsm="cool",e.timer=24}break}case"cool":{e.timer--,e.timer<=0&&(e.fsm="idle",e.timer=10);break}default:e.fsm="idle"}}function kM(i,e,t,n){const s=i.player;if(!e.phase2&&e.hp<=e.maxHp/2){e.phase2=!0,e.fsm="cool",e.timer=30,tt(i,{type:"gorko_phase2",hp:e.hp,tick:i.tick});return}switch(e.fsm){case"idle":{if(e.timer>0){e.timer--;const o=Tt(e.x,e.y,s.x,s.y);o>2.5&&(e.x+=(s.x-e.x)/o*ke.moveSpeed*St,e.y+=(s.y-e.y)/o*ke.moveSpeed*St);break}const r=e.attackCycle++;if(e.phase2){const o=i.enemies.find(c=>c.kind==="renacuajo");if(r%2===0&&o){n.push(o.id),tt(i,{type:"elite_swallowed",enemyId:e.id,victimId:o.id,healed:0,tick:i.tick}),e.fsm="volley",e.timer=ke.volleyAimTicks,e.targetX=s.x,e.targetY=s.y,tt(i,{type:"telegraph_started",enemyId:e.id,tick:i.tick});break}if(r%2===0){e.fsm="summon",e.timer=ke.summonTicks,tt(i,{type:"telegraph_started",enemyId:e.id,tick:i.tick});break}e.fsm="jump_aim",e.timer=ke.jumpAimTicks,e.targetX=s.x,e.targetY=s.y,tt(i,{type:"telegraph_started",enemyId:e.id,tick:i.tick});break}const a=r%3;a===0?(e.fsm="jump_aim",e.timer=ke.jumpAimTicks,e.targetX=s.x,e.targetY=s.y):a===1?(e.fsm="aim",e.timer=ke.tongueAimTicks,e.targetX=s.x,e.targetY=s.y):(e.fsm="summon",e.timer=ke.summonTicks),tt(i,{type:"telegraph_started",enemyId:e.id,tick:i.tick});break}case"jump_aim":{e.timer--,e.timer<=0&&(e.fsm="airborne",e.timer=ke.airborneTicks);break}case"airborne":{if(e.timer--,e.timer<=0){e.x=Ot(e.targetX,Rn+ke.radius,Pn-ke.radius),e.y=Ot(e.targetY,Cn+ke.radius,In-ke.radius);const r=Hl(e.x,e.y,ke.radius,i.obstacles);e.x=r.x,e.y=r.y,i.player.iframes===0&&Tt(s.x,s.y,e.x,e.y)<ke.slamRadius+bt.radius&&al(i,ke.slamDamage,e.x,e.y,"aplastamiento:gorko"),e.fsm="cool",e.timer=ke.idleTicks}break}case"aim":{e.timer--,e.timer<=0&&(e.fsm="shoot");break}case"shoot":{const r=Math.atan2(e.targetY-e.y,e.targetX-e.x);i.shots.push({id:i.nextId++,owner:"enemy",x:e.x+Math.cos(r)*(ke.radius+ke.tongueRadius),y:e.y+Math.sin(r)*(ke.radius+ke.tongueRadius),vx:Math.cos(r)*ke.tongueSpeed,vy:Math.sin(r)*ke.tongueSpeed,damage:ke.tongueDamage,traveled:0,maxRange:ke.tongueRange,radius:ke.tongueRadius,knockback:0,tags:["lengua"],fragment:!1}),tt(i,{type:"shot_fired",owner:"enemy",tick:i.tick}),e.fsm="cool",e.timer=ke.idleTicks;break}case"summon":{if(e.timer--,e.timer<=0){const r=i.enemies.filter(o=>o.kind==="renacuajo").length,a=Math.min(ke.summonCount,ke.maxTadpoles-r);for(let o=0;o<a;o++){const c=Ot(e.x+Gs(t.ai,-2,2),Rn+1,Pn-1),l=Ot(e.y+Gs(t.ai,-2,2),Cn+1,In-1);i.enemies.push(yf(i.nextId++,"renacuajo",c,l))}e.fsm="cool",e.timer=ke.idleTicks}break}case"volley":{if(e.timer--,e.timer<=0){const r=Math.atan2(e.targetY-e.y,e.targetX-e.x);for(let a=0;a<ke.volleyCount;a++){const o=(a-(ke.volleyCount-1)/2)*(ke.volleySpreadRad/(ke.volleyCount-1));qa(i,e,e.x+Math.cos(r+o),e.y+Math.sin(r+o),0,ke.volleySpitSpeed,ke.volleyDamage)}tt(i,{type:"shot_fired",owner:"enemy",tick:i.tick}),e.fsm="belly",e.timer=ke.bellyTicks}break}case"belly":{e.timer--,e.timer<=0&&(e.fsm="idle",e.timer=ke.idleTicks);break}case"cool":{e.timer--,e.timer<=0&&(e.fsm="idle",e.timer=ke.idleTicks);break}default:e.fsm="idle",e.timer=ke.idleTicks}}function BM(i,e){let t=null,n=mt.swallowSeekRange;for(const s of i.enemies){if(s.id===e.id||s.kind==="sapo_doble")continue;const r=Tt(e.x,e.y,s.x,s.y);r<n&&(n=r,t=s)}return t}function qa(i,e,t,n,s,r,a){const o=Math.atan2(n-e.y,t-e.x)+s,c=Math.cos(o),l=Math.sin(o),u=Zi(e);i.shots.push({id:i.nextId++,owner:"enemy",x:e.x+c*(u+Ds),y:e.y+l*(u+Ds),vx:c*r,vy:l*r,damage:a,traveled:0,maxRange:12,radius:Ds,knockback:0,tags:[],fragment:!1})}function zM(i){for(let e=0;e<i.enemies.length;e++)for(let t=e+1;t<i.enemies.length;t++){const n=i.enemies[e],s=i.enemies[t];if(n.fsm==="airborne"||s.fsm==="airborne")continue;const r=(Zi(n)+Zi(s))*.95,a=s.x-n.x,o=s.y-n.y,c=Math.hypot(a,o);if(c>=r)continue;const l=c>1e-6?a/c:Math.cos(n.id*2.399),u=c>1e-6?o/c:Math.sin(n.id*2.399),d=qy*St*.5;n.x-=l*d,n.y-=u*d,s.x+=l*d,s.y+=u*d}}function Bd(i){for(let e=i.shots.length-1;e>=0;e--){const t=i.shots[e];if(t.owner==="player"&&t.tags.includes("burbuja")&&i.enemies.length){let r=null,a=Cs.homingRange;for(const o of i.enemies){const c=Tt(t.x,t.y,o.x,o.y);c<a&&(a=c,r=o)}if(r){const o=Math.atan2(t.vy,t.vx);let l=Math.atan2(r.y-t.y,r.x-t.x)-o;for(;l>Math.PI;)l-=2*Math.PI;for(;l<-Math.PI;)l+=2*Math.PI;const u=Ot(l,-.05,Cs.turnRadPerTick),d=Math.hypot(t.vx,t.vy);t.vx=Math.cos(o+u)*d,t.vy=Math.sin(o+u)*d}}t.x+=t.vx*St,t.y+=t.vy*St,t.traveled+=Math.hypot(t.vx,t.vy)*St;const n=t.x<Rn||t.x>Pn||t.y<Cn||t.y>In||wM(t.x,t.y,i.obstacles),s=t.traveled>=t.maxRange;(n||s)&&(t.owner==="player"&&i.puddles.push({x:Ot(t.x,Rn+.2,Pn-.2),y:Ot(t.y,Cn+.2,In-.2),ttl:Pa}),i.shots.splice(e,1))}}function zd(i){for(let e=i.puddles.length-1;e>=0;e--)--i.puddles[e].ttl<=0&&i.puddles.splice(e,1)}function HM(i,e){const t=i.player;for(let n=i.shots.length-1;n>=0;n--){const s=i.shots[n];if(s.owner==="player")for(let r=i.props.length-1;r>=0;r--){const a=i.props[r];if(!(Tt(s.x,s.y,a.x,a.y)>=s.radius+ri[a.kind].radius)){a.hp-=s.damage,i.puddles.push({x:s.x,y:s.y,ttl:Pa/2}),i.shots.splice(n,1),a.hp<=0&&(a.loot==="heart"?i.drops.push({id:i.nextId++,kind:"heart",x:a.x,y:a.y}):a.loot==="crystal"&&i.drops.push({id:i.nextId++,kind:"crystal",x:a.x,y:a.y}),tt(i,{type:"prop_broken",kind:a.kind,loot:a.loot,tick:i.tick}),i.props.splice(r,1));break}}}for(let n=i.shots.length-1;n>=0;n--){const s=i.shots[n];if(s.owner==="player"){for(const r of i.enemies)if(!(r.kind==="gorko"&&r.fsm==="airborne")&&Tt(s.x,s.y,r.x,r.y)<s.radius+Zi(r)){if(r.kind==="babosa_acorazada"){const c=Math.hypot(s.vx,s.vy)||1;if(s.vx/c*r.facingX+s.vy/c*r.facingY<Ei.backDot){i.puddles.push({x:s.x,y:s.y,ttl:Pa/3}),i.shots.splice(n,1),tt(i,{type:"shot_blocked",enemyId:r.id,tick:i.tick});break}}let a=s.damage;Vl(i,e,"critico")&&(a*=2),r.kind==="gorko"&&r.fsm==="belly"&&(a=Math.round(a*ke.bellyDamageMult)),r.hp-=a;const o=Math.hypot(s.vx,s.vy)||1;r.kx+=s.vx/o*s.knockback,r.ky+=s.vy/o*s.knockback,i.puddles.push({x:s.x,y:s.y,ttl:Pa/2}),s.tags.includes("divide")&&!s.fragment&&GM(i,s,e),i.shots.splice(n,1),tt(i,{type:"enemy_hit",enemyId:r.id,damage:a,hpLeft:Math.max(0,r.hp),tick:i.tick});break}}}for(let n=i.enemies.length-1;n>=0;n--){const s=i.enemies[n];s.hp<=0&&(i.enemies.splice(n,1),VM(i,s,e),tt(i,{type:"enemy_killed",enemyId:s.id,kind:s.kind,tick:i.tick}))}if(t.iframes===0){for(const n of i.enemies)if(!(n.kind==="gorko"&&n.fsm==="airborne")&&Tt(t.x,t.y,n.x,n.y)<bt.radius+Zi(n)){al(i,TM(n.kind)+n.dmgPlus,n.x,n.y,"contacto:"+n.kind);break}}if(t.iframes===0)for(let n=i.shots.length-1;n>=0;n--){const s=i.shots[n];if(s.owner==="enemy"&&Tt(s.x,s.y,t.x,t.y)<s.radius+bt.radius){i.shots.splice(n,1),al(i,s.damage,s.x,s.y,"escupitajo");break}}}function VM(i,e,t){const n=()=>(t.drops()-.5)*.5;if(e.kind!=="gorko"){if(e.kind==="sapo_doble"){const s=t.drops(),r=s<Wo.big?"crystal_big":s<Wo.big+Wo.med?"crystal_med":"crystal";i.drops.push({id:i.nextId++,kind:r,x:e.x+n(),y:e.y+n()});return}t.drops()<Ky.heart&&i.drops.push({id:i.nextId++,kind:"heart",x:e.x+n(),y:e.y+n()})}}function GM(i,e,t){const s=Vl(i,t,"dividir_en_3")?[-.9,0,cr.angleRad]:[-.9,cr.angleRad],r=Math.atan2(e.vy,e.vx),a=Math.hypot(e.vx,e.vy)||1;for(const o of s){const c=r+o;i.shots.push({id:i.nextId++,owner:"player",x:e.x,y:e.y,vx:Math.cos(c)*a,vy:Math.sin(c)*a,damage:Math.max(1,Math.round(e.damage*cr.damageMult)),traveled:0,maxRange:cr.range,radius:e.radius*cr.radiusMult,knockback:e.knockback*.5,tags:[],fragment:!0})}tt(i,{type:"shot_split",count:s.length,tick:i.tick})}function Mf(i,e){for(const t of[i.player.usable,i.player.usable2])if(t&&t.activeTicks>0&&vn(t.itemId).usable.efecto===e)return!0;return!1}function al(i,e,t,n,s){const r=i.player;if(Mf(i,"escudo"))return;const a=Math.min(r.armor,e);a>0&&(r.armor-=a,tt(i,{type:"armor_absorbed",amount:a,armorLeft:r.armor,tick:i.tick}));const o=e-a;r.halfHearts=Math.max(0,r.halfHearts-o),r.iframes=Oy;const c=Tt(r.x,r.y,t,n),l=c>.001?(r.x-t)/c:1,u=c>.001?(r.y-n)/c:0;r.kx+=l*Pd,r.ky+=u*Pd,o>0&&tt(i,{type:"damage_taken",amount:o,halfHeartsLeft:r.halfHearts,source:s,tick:i.tick})}function WM(i){if(i.player.halfHearts<=0&&i.status==="playing"){i.status="dead",i.player.deathTick=i.tick,tt(i,{type:"player_died",tick:i.tick});return}const e=i.floor.rooms[i.floor.current];if(i.enemies.length===0&&!e.cleared&&i.status==="playing"&&(e.cleared=!0,tt(i,{type:"room_cleared",tick:i.tick}),e.id===i.floor.keyRoomId&&i.drops.push({id:i.nextId++,kind:"key",x:Ye/2,y:qe/2}),e.kind==="boss"&&!i.floor.trapdoorOpen&&(i.floor.trapdoorOpen=!0,tt(i,{type:"trapdoor_opened",tick:i.tick}),i.drops.push({id:i.nextId++,kind:"crystal_med",x:Ye/2-1,y:qe/2+1.2}),i.drops.push({id:i.nextId++,kind:"heart",x:Ye/2+1,y:qe/2+1.2}),i.drops.push({id:i.nextId++,kind:"heart",x:Ye/2,y:qe/2+1.8}),i.floor.level===Xi))){i.drops.push({id:i.nextId++,kind:"crystal_big",x:Ye/2,y:qe/2-1.4});const t=rl(i),n=[...Ji.values()].filter(a=>t.includes(a.id)&&(a.rareza==="legendaria"||a.slot==="nucleo")),s=ji(e.seed^45141),r=n[Math.floor(s()*n.length)];i.pickups.push({id:i.nextId++,itemId:r.id,x:Ye/2-1.6,y:qe/2-1.4}),i.chest={roomId:e.id,x:Ye/2+1.6,y:qe/2-1.4,opened:!1,reward:XM(i,e.seed)}}}function XM(i,e){const t=ji(e^49395),n=[];for(const a of Ji.values())a.unlockable&&!i.config.unlockedItems.includes(a.id)&&n.push([a.id,Od[a.rareza]]);if(i.config.usableSlots<2&&n.push(["slot_usable_2",Od.legendaria]),n.length===0)return"cristales";const s=n.reduce((a,[,o])=>a+o,0);let r=t()*s;for(const[a,o]of n)if(r-=o,r<=0)return a;return n[n.length-1][0]}function tt(i,e){i.events.push(e)}function Ot(i,e,t){return i<e?e:i>t?t:i}function Tt(i,e,t,n){return Math.hypot(t-i,n-e)}function qM(i){const e=r=>Math.round(r*1e6)/1e6,t={t:i.tick,st:i.status,p:[e(i.player.x),e(i.player.y),i.player.halfHearts,i.player.iframes],it:i.player.items.join(","),ar:i.player.armor,us:i.player.usable?[i.player.usable.itemId,i.player.usable.cooldown,i.player.usable.activeTicks]:null,us2:i.player.usable2?[i.player.usable2.itemId,i.player.usable2.cooldown,i.player.usable2.activeTicks]:null,cf:[i.config.usableSlots,i.config.unlockedItems.join(","),i.config.resume?[i.config.resume.nivel,i.config.resume.items.join(",")]:null],da:[i.player.dashTicks,i.player.dashCooldown],pk:i.pickups.map(r=>[r.id,r.itemId]),fl:[i.floor.level,i.floor.current,i.floor.trapdoorOpen?1:0,i.floor.rooms.map(r=>(r.cleared?1:0)+(r.visited?2:0)+(r.locked?4:0)).join("")],ec:[i.player.keys,i.player.crystals,i.drops.map(r=>`${r.kind}${e(r.x)}`).join(",")],ch:i.chest?[i.chest.roomId,i.chest.opened?1:0,i.chest.reward]:null,pr:i.props.map(r=>[r.kind,e(r.x),r.hp]),e:i.enemies.map(r=>[r.id,e(r.x),e(r.y),r.hp,r.fsm,r.timer]),sh:i.shots.map(r=>[r.id,r.owner,e(r.x),e(r.y),e(r.traveled)]),pu:i.puddles.length},n=JSON.stringify(t);let s=2166136261;for(let r=0;r<n.length;r++)s^=n.charCodeAt(r),s=Math.imul(s,16777619);return(s>>>0).toString(16).padStart(8,"0")}function YM(i,e){const t={version:e,seed:()=>i.sim.state.seed,state:()=>structuredClone(i.sim.state),hash:()=>i.sim.hash(),press:(n,s)=>i.press(n,s/1e3*$i),aimAt:(n,s)=>i.aimAt(n,s),clearAim:()=>i.clearAim(),tick:n=>i.tick(n),pause:n=>{i.paused=n},isPaused:()=>i.paused,reset:n=>i.reset(n),telemetry:()=>structuredClone(i.telemetry),clearTelemetry:()=>{i.telemetry.length=0},goto:n=>zl(i.sim.state,n),heal:()=>{const n=i.sim.state.player;n.halfHearts=n.maxHalfHearts},grant:n=>{const s=i.sim.state;s.player.items.push(n),s.stats=Ur(s.player.items),s.player.maxHalfHearts=s.stats.maxHalfHearts},clear:()=>{i.sim.state.enemies.length=0}};return window.__game=t,t}const Xo=1e3/$i,KM=5;function $M(i,e){let t=e,n=Fd(i,t),s=0,r=0;const a={up:0,down:0,left:0,right:0,fire:0,dash:0,use:0,use2:0,interact:0};let o=null;const c={sim:n,live:vf(),paused:!1,telemetry:[],frame(d){if(c.paused)return[];if(r>0)return r--,[];s+=Math.min(d,Xo*KM);const h=[];for(;s>=Xo;)s-=Xo,h.push(...u());return h},tick(d){const h=[];for(let f=0;f<d;f++)h.push(...u());return h},press(d,h){a[d]=Math.max(a[d],Math.max(0,Math.round(h)))},aimAt(d,h){o={x:d,y:h}},clearAim(){o=null},freeze(d){r=Math.max(r,d)},reset(d,h){h&&(t=h),n=Fd(d??n.state.seed,t),c.sim=n,s=0,r=0,c.telemetry.length=0,Object.keys(a).forEach(f=>a[f]=0),o=null}};function l(){const d={...c.live};return Object.keys(a).forEach(h=>{a[h]>0&&(d[h]=!0,a[h]--)}),o&&(d.aimX=o.x,d.aimY=o.y),d}function u(){n.step(l());const d=n.state.events;return d.length&&c.telemetry.push(...d),d}return c}const ol=1,Hd="kai_save";function Vd(){return{version:ol,cristales:0,desbloqueos:[],slimepedia:[],expedicion:null}}function ZM(i){const e=i;return!e||typeof e.seed!="number"||typeof e.nivel!="number"||e.nivel<1||!Array.isArray(e.items)||e.items.some(t=>typeof t!="string")||typeof e.halfHearts!="number"?null:{seed:e.seed>>>0,nivel:Math.floor(e.nivel),items:e.items,usable:typeof e.usable=="string"?e.usable:null,usable2:typeof e.usable2=="string"?e.usable2:null,halfHearts:Math.max(1,Math.floor(e.halfHearts)),crystals:typeof e.crystals=="number"?Math.max(0,Math.floor(e.crystals)):0,keys:typeof e.keys=="number"?Math.max(0,Math.floor(e.keys)):0}}function JM(i){const e=typeof localStorage<"u"?localStorage:(()=>{const s=new Map;return{getItem:r=>s.get(r)??null,setItem:(r,a)=>void s.set(r,a)}})();let t=Vd();try{const s=e.getItem(Hd);if(s){const r=JSON.parse(s);r&&r.version===ol&&typeof r.cristales=="number"&&Array.isArray(r.desbloqueos)&&(t={version:ol,cristales:Math.max(0,Math.floor(r.cristales)),desbloqueos:r.desbloqueos.filter(a=>typeof a=="string"),slimepedia:Array.isArray(r.slimepedia)?r.slimepedia.filter(a=>typeof a=="string"):[],expedicion:ZM(r.expedicion)})}}catch{t=Vd()}const n={data:t,persist(){e.setItem(Hd,JSON.stringify(n.data))},harvest(s){s>0&&(n.data.cristales+=s,n.persist())},unlock(s){return n.has(s)?!1:(n.data.desbloqueos.push(s),n.persist(),!0)},has(s){return n.data.desbloqueos.includes(s)},saveExpedition(s){n.data.expedicion=s,n.persist()}};return n}function cl(i){return{usableSlots:i.has("slot_usable_2")?2:1,unlockedItems:i.data.desbloqueos.filter(e=>e.startsWith("item_")).map(e=>e.slice(5))}}const Sf="kai_audio",Gd={titulo:"assets/music/titulo.ogg",ambiente:"assets/music/ambiente.ogg"},jM="assets/music/gameover.ogg",Wd={dano:["impactPunch_medium_000","impactPunch_medium_001"],dano_fuerte:["impactPunch_heavy_000","impactPunch_heavy_001"],caja:["impactPlank_medium_000","impactPlank_medium_001","impactPlank_medium_002"],roca:["impactMining_000","impactMining_001"],cristal:["impactGlass_light_000","impactGlass_light_001","impactGlass_light_002"],armadura:["impactPlate_light_000","impactPlate_light_001"]};function QM(){try{const i=localStorage.getItem(Sf);if(i){const e=JSON.parse(i);return{volume:typeof e.volume=="number"?Math.min(1,Math.max(0,e.volume)):.8,muted:!!e.muted}}}catch{}return{volume:.8,muted:!1}}function eS(i){const e=QM(),t=new AudioContext,n=t.createGain();n.gain.value=e.muted?0:e.volume,n.connect(t.destination);const s=()=>{t.state==="suspended"&&t.resume()};window.addEventListener("pointerdown",s),window.addEventListener("keydown",s);const r=new Map;async function a(R,B){try{const N=await(await fetch(B)).arrayBuffer();r.set(R,await t.decodeAudioData(N))}catch{}}for(const[R,B]of Object.entries(Gd))a(`music:${R}`,B);a("music:gameover",jM);for(const[R,B]of Object.entries(Wd))B.forEach((V,N)=>void a(`${R}:${N}`,`assets/sfx/${V}.ogg`));const o=new Map,c=new Set;function l(R){const B=r.get(`music:${R}`);if(!B)return null;let V=o.get(R);if(V||(V=t.createGain(),V.gain.value=0,V.connect(n),o.set(R,V)),!c.has(R)&&t.state==="running"){const N=t.createBufferSource();N.buffer=B,N.loop=!0,N.connect(V),N.start(),c.add(R)}return V}function u(R){const B=t.currentTime;for(const V of Object.keys(Gd))l(V)?.gain.setTargetAtTime(R[V]??0,B,.9)}let d=!1,h=null,f=null;function p(){const R=r.get("music:gameover");if(!R||d)return;d=!0;const B=t.createBufferSource();B.buffer=R;const V=t.createGain();V.gain.value=.4,B.connect(V),V.connect(n),B.start(),B.onended=()=>{h===B&&(h=null,f=null)},h=B,f=V}function v(){if(!h)return;const R=h,B=f;h=null,f=null;const V=t.currentTime;B.gain.setTargetAtTime(0,V,.12),R.stop(V+.5)}function g(R,B){const V=Wd[R].length,N=r.get(`${R}:${Math.floor(Math.random()*V)}`);if(!N)return;const X=t.createBufferSource();X.buffer=N,X.playbackRate.value=.92+Math.random()*.16;const H=t.createGain();H.gain.value=B,X.connect(H),H.connect(n),X.start()}const m=(()=>{const R=t.createBuffer(1,t.sampleRate,t.sampleRate),B=R.getChannelData(0);for(let V=0;V<B.length;V++)B[V]=Math.random()*2-1;return R})();function S(R,B){const V=t.createGain(),N=t.currentTime;return V.gain.setValueAtTime(1e-4,N),V.gain.exponentialRampToValueAtTime(Math.max(2e-4,R),N+.008),V.gain.exponentialRampToValueAtTime(1e-4,N+B),V.connect(n),V}function T(R,B,V,N,X,H=30){const q=t.createOscillator();q.type=R;const te=t.currentTime;q.frequency.setValueAtTime(B,te),q.frequency.exponentialRampToValueAtTime(Math.max(20,V),te+N),q.detune.value=(Math.random()*2-1)*H,q.connect(S(X,N)),q.start(te),q.stop(te+N+.02)}function _(R,B,V,N=1){const X=t.createBufferSource();X.buffer=m,X.playbackRate.value=.7+Math.random()*.6;const H=t.createBiquadFilter();H.type="bandpass",H.frequency.value=R,H.Q.value=N,X.connect(H),H.connect(S(V,B)),X.start(),X.stop(t.currentTime+B+.02)}function E(R,B,V){R.forEach((N,X)=>{const H=t.createOscillator();H.type="triangle";const q=t.currentTime+X*B*.8;H.frequency.value=N;const te=t.createGain();te.gain.setValueAtTime(1e-4,q),te.gain.exponentialRampToValueAtTime(V,q+.01),te.gain.exponentialRampToValueAtTime(1e-4,q+B),te.connect(n),H.connect(te),H.start(q),H.stop(q+B+.02)})}const A=new Map;function I(R,B){const V=performance.now();return(A.get(R)??0)+B>V?!1:(A.set(R,V),!0)}function y(R){switch(R.type){case"shot_fired":R.owner==="player"?I("shot",45)&&T("sine",640,220,.09,.1):I("eshot",60)&&T("square",240,140,.12,.05);break;case"enemy_hit":I("hit",40)&&_(900,.07,.12,2);break;case"shot_blocked":I("block",80)&&g("armadura",.14);break;case"enemy_killed":_(500,.18,.16,1.2),T("sine",300,80,.2,.1);break;case"damage_taken":g(R.amount>=2?"dano_fuerte":"dano",.5);break;case"armor_absorbed":g("armadura",.4);break;case"prop_broken":g("caja",.45);break;case"dash_used":_(1600,.14,.09,.6);break;case"telegraph_started":I("tele",150)&&T("sine",880,660,.08,.045);break;case"heart_collected":E([392,523.25],.09,.16);break;case"crystal_collected":I("crystal",70)&&g("cristal",.35);break;case"key_collected":E([659.3,880],.08,.1);break;case"door_unlocked":T("square",220,320,.12,.1,4);break;case"item_picked":case"item_bought":E([523.25,659.3,784,1046.5],.1,.22),g("cristal",.28);break;case"usable_activated":T("triangle",440,880,.14,.11);break;case"proc_triggered":R.efecto==="critico"&&I("crit",90)&&_(2400,.06,.1,3);break;case"room_cleared":E([261.6,392],.12,.09);break;case"trapdoor_opened":T("sine",120,50,.5,.14);break;case"level_started":T("sine",80,45,.8,.16),_(300,.6,.07,.5);break;case"gorko_phase2":T("sawtooth",90,40,.7,.14),_(150,.5,.12,.7);break;case"elite_swallowed":T("sine",500,90,.3,.12);break;case"chest_opened":E([523.25,659.3,784,1046.5,1318.5],.1,.2);break;case"victory":E([392,523.25,659.3,784,1046.5],.14,.13);break;case"player_died":p();break}}const M=document.createElement("button");M.className="audio-toggle";const L=()=>{M.textContent=e.muted?"🔇":"🔊"};L(),M.addEventListener("pointerdown",R=>{R.stopPropagation(),C()}),window.addEventListener("keydown",R=>{R.code==="KeyM"&&C()}),i.appendChild(M);function C(){e.muted=!e.muted,n.gain.linearRampToValueAtTime(e.muted?0:e.volume,t.currentTime+.08),localStorage.setItem(Sf,JSON.stringify(e)),L()}return{onEvents(R){if(!(e.muted||t.state!=="running"))for(const B of R)y(B)},update(R){if(t.state!=="running")return;if(document.body.classList.contains("at-title")){v(),u({titulo:.32});return}if(R.status==="dead"){u({});return}if(v(),R.status==="victory"){u({ambiente:.12});return}d=!1,u({ambiente:R.tick>0?.32:0})}}}function tS(i,e,t,n){const s=document.createElement("div");s.className="screens",i.appendChild(s);let r=!1,a=!1,o=!1,c=0,l=null,u=null;function d(){r=!0,e.paused=!0,document.body.classList.add("at-title");const S=t.data.expedicion,T=S?`<button class="title-continue">▶ Continuar expedición — nivel ${S.nivel} de ${Xi}</button>`:"";s.innerHTML=`
      <div class="screen screen-title">
        <div class="title-name">KAI</div>
        <div class="title-sub">un slime contra El Pozo</div>
        ${T}
        <div class="title-row">
          <input class="title-seed" type="text" inputmode="numeric" placeholder="seed (opcional)" />
          <button class="title-play">${S?"Nueva expedición":"Entrar al Pozo"}</button>
        </div>
        <div class="title-hint">WASD mover · ratón apuntar · clic disparar · espacio usable · shift dash</div>
        <div class="title-version">sim v${n} · desbloqueos ${t.data.desbloqueos.length}</div>
      </div>`,s.querySelector(".title-play").addEventListener("click",()=>{const _=s.querySelector(".title-seed").value.trim(),E=_?Number(_)>>>0:Math.floor(Math.random()*4294967295)>>>0;h(E)}),s.querySelector(".title-continue")?.addEventListener("click",()=>{const _=t.data.expedicion;_&&(e.reset(_.seed,{...cl(t),resume:{..._}}),l=null,c=0,o=!1,f(),e.paused=!1)})}function h(S){e.reset(S,cl(t)),l=null,c=0,o=!1,f(),e.paused=!1}function f(){r=!1,a=!1,document.body.classList.remove("at-title"),s.innerHTML=""}function p(S){t.saveExpedition({seed:S.seed,nivel:S.floor.level,items:[...S.player.items],usable:S.player.usable?.itemId??null,usable2:S.player.usable2?.itemId??null,halfHearts:S.player.halfHearts,crystals:S.player.crystals,keys:S.player.keys})}function v(S){e.paused=!0;const T=S.floor.level,_=Array.from({length:Xi},(E,A)=>`<div class="level-seg ${A<T-1?"done":A===T-1?"current":""}"></div>`).join("");s.innerHTML=`
      <div class="screen screen-level">
        <div class="level-name">EL POZO</div>
        <div class="level-sub">nivel ${T} de ${Xi}</div>
        <div class="level-bar">${_}</div>
        <div class="level-saved">expedición guardada</div>
        <div class="refuge-actions">
          <button class="level-go">Seguir bajando</button>
          <button class="level-exit">Salir al título</button>
        </div>
      </div>`,s.querySelector(".level-go").addEventListener("click",()=>{f(),e.paused=!1}),s.querySelector(".level-exit").addEventListener("click",()=>{o=!0,d()})}function g(S){return S==="slot_usable_2"?"2º slot de usable (tecla Q)":S==="cristales"?null:vn(S).nombre}function m(S){a=!0;const T=S.status==="victory";let _="";if(S.chest?.opened){const E=g(S.chest.reward);_=E?`<div class="refuge-chest">📦 Cofre del Nido: <b>${E}</b><div class="refuge-desc">desbloqueado PARA SIEMPRE — ya está en el pool</div></div>`:'<div class="refuge-chest">📦 Cofre del Nido: cristales<div class="refuge-desc">ya lo has desbloqueado todo</div></div>'}else T&&(_='<div class="refuge-chest refuge-chest-missed">El cofre del Nido se quedó sin abrir…</div>');s.innerHTML=`
      <div class="screen screen-refuge">
        <div class="refuge-title">${T?"El refugio celebra tu victoria":"El refugio te recoge"}</div>
        ${_}
        <div class="refuge-actions">
          <button class="refuge-again">Nueva run</button>
          <button class="refuge-same">Repetir seed ${S.seed}</button>
        </div>
      </div>`,s.querySelector(".refuge-again").addEventListener("click",()=>{h(Math.floor(Math.random()*4294967295)>>>0)}),s.querySelector(".refuge-same").addEventListener("click",()=>{h(S.seed)})}return d(),{update(S){if(r&&!o&&(S.tick>0||!e.paused)&&f(),S.status==="playing"&&S.floor.level!==c){const _=c;c=S.floor.level,p(S),_>=1&&S.floor.level>_&&v(S)}const T=S.status==="dead"||S.status==="victory";if(T&&l!==e.sim){if(l=e.sim,t.saveExpedition(null),S.chest?.opened&&S.chest.reward!=="cristales"){const _=S.chest.reward;t.unlock(_==="slot_usable_2"?_:`item_${_}`)}u!==null&&clearTimeout(u),u=window.setTimeout(()=>{e.sim===l&&!a&&m(S)},2400)}!T&&a&&f()}}}const dr=12,Xd=42,qd=6;function nS(){const i=new URLSearchParams(location.search).get("touch");return i==="1"?!0:i==="0"?!1:window.matchMedia("(pointer: coarse) and (hover: none)").matches}function iS(i,e){const t=e.live,n=document.createElement("div");if(n.className="touch",n.innerHTML=`
    <div class="touch-zone touch-zone-left"></div>
    <div class="touch-zone touch-zone-right"></div>
    <div class="touch-stick touch-stick-move"><div class="touch-knob"></div></div>
    <div class="touch-stick touch-stick-aim"><div class="touch-knob"></div></div>
    <div class="touch-buttons">
      <button class="touch-btn touch-btn-dash">⚡<small>dash</small></button>
      <button class="touch-btn touch-btn-use">◇<small>objeto</small></button>
      <button class="touch-btn touch-btn-use2" hidden>◆<small>obj. 2</small></button>
      <button class="touch-btn touch-btn-buy" hidden>€<small>comprar</small></button>
    </div>`,i.appendChild(n),!localStorage.getItem("kai_touch_help_v1")){const _=document.createElement("div");_.className="touch-help",_.innerHTML=`
      <div class="touch-help-card">
        <div class="touch-help-title">Controles</div>
        <div>🕹️ <b>Pulgar izquierdo</b> — mover a Kai</div>
        <div>🎯 <b>Pulgar derecho</b> — apuntar (dispara solo mientras apuntas)</div>
        <div>⚡ <b>dash</b> — esquiva con invulnerabilidad</div>
        <div>◇ <b>objeto</b> — usa tu objeto activo</div>
        <div>€ <b>comprar</b> — aparece al acercarte a la tienda</div>
        <div class="touch-help-go">toca para jugar</div>
      </div>`,n.appendChild(_),_.addEventListener("pointerdown",E=>{E.stopPropagation(),localStorage.setItem("kai_touch_help_v1","1"),_.remove()})}const s=n.querySelector(".touch-zone-left"),r=n.querySelector(".touch-zone-right"),a=n.querySelector(".touch-stick-move"),o=n.querySelector(".touch-stick-aim"),c=a.querySelector(".touch-knob"),l=o.querySelector(".touch-knob"),u=n.querySelector(".touch-btn-use2"),d=n.querySelector(".touch-btn-buy");let h=null,f=null,p=null;function v(_,E,A){const I=Math.hypot(E,A),y=I>Xd?Xd/I:1;_.style.transform=`translate(${E*y}px, ${A*y}px)`}function g(_,E){t.left=_<-dr,t.right=_>dr,t.up=E<-dr,t.down=E>dr}function m(_,E){const A=Math.hypot(_,E);A>dr?(h={x:_/A,y:E/A},t.fire=!0):t.fire=!1}function S(_,E,A,I,y,M,L){_.addEventListener("pointerdown",R=>{if(I())return;const B=E.getBoundingClientRect(),V={pointerId:R.pointerId,baseX:B.left+B.width/2,baseY:B.top+B.height/2};y(V);try{_.setPointerCapture(R.pointerId)}catch{}E.classList.add("active");const N=R.clientX-V.baseX,X=R.clientY-V.baseY;v(A,N,X),M(N,X),R.preventDefault()}),_.addEventListener("pointermove",R=>{const B=I();if(!B||R.pointerId!==B.pointerId)return;const V=R.clientX-B.baseX,N=R.clientY-B.baseY;v(A,V,N),M(V,N),R.preventDefault()});const C=R=>{const B=I();!B||R.pointerId!==B.pointerId||(y(null),E.classList.remove("active"),v(A,0,0),L())};_.addEventListener("pointerup",C),_.addEventListener("pointercancel",C)}S(s,a,c,()=>f,_=>f=_,g,()=>{t.left=t.right=t.up=t.down=!1}),S(r,o,l,()=>p,_=>p=_,m,()=>{h=null,t.fire=!1});const T=(_,E)=>{const A=n.querySelector(_);A.addEventListener("pointerdown",I=>{E(!0),I.preventDefault(),I.stopPropagation()});for(const I of["pointerup","pointercancel","pointerleave"])A.addEventListener(I,()=>E(!1))};return T(".touch-btn-dash",_=>t.dash=_),T(".touch-btn-use",_=>t.use=_),T(".touch-btn-use2",_=>t.use2=_),T(".touch-btn-buy",_=>t.interact=_),{update(_){h&&(t.aimX=_.player.x+h.x*qd,t.aimY=_.player.y+h.y*qd),u.hidden=!_.player.usable2;const E=_.pickups.some(A=>A.price&&Math.hypot(A.x-_.player.x,A.y-_.player.y)<1.6);d.hidden=!E}}}function sS(i,e){let t=0,n=1,s=0,r=0;const a=340,o={x:0,z:0};function c(l,u){(u>=s||t<=0)&&(t=l,n=l,s=u)}return{onEvents(l){for(const u of l)switch(u.type){case"damage_taken":c(140,.14),i.freeze(3);break;case"enemy_killed":c(90,.08),i.freeze(2);break;case"enemy_hit":c(40,.03);break;case"player_died":c(260,.2);break;case"room_changed":{const d={n:[0,1],s:[0,-1],e:[-1,0],w:[1,0]}[u.dir];o.x=d[0],o.z=d[1],r=a;break}case"level_started":i.freeze(6);break}},update(l,u){if(u.position.copy(e.cameraHome),r>0){r=Math.max(0,r-l);const d=r/a,h=d*d*(3-2*d);u.position.x+=o.x*6*h,u.position.z+=o.z*6*h}if(t>0){t-=l;const d=Math.max(0,t/n),h=s*d;u.position.x+=(Math.random()*2-1)*h,u.position.y+=(Math.random()*2-1)*h*.6,u.position.z+=(Math.random()*2-1)*h*.4,t<=0&&(s=0)}}}}function Yd(i,e){if(e===hp)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===Vc||e===Lh){let t=i.getIndex();if(t===null){const a=[],o=i.getAttribute("position");if(o!==void 0){for(let c=0;c<o.count;c++)a.push(c);i.setIndex(a),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}const n=t.count-2,s=[];if(e===Vc)for(let a=1;a<=n;a++)s.push(t.getX(0)),s.push(t.getX(a)),s.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(s.push(t.getX(a)),s.push(t.getX(a+1)),s.push(t.getX(a+2))):(s.push(t.getX(a+2)),s.push(t.getX(a+1)),s.push(t.getX(a)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}function rS(i){const e=new Map,t=new Map,n=i.clone();return bf(i,n,function(s,r){e.set(r,s),t.set(s,r)}),n.traverse(function(s){if(!s.isSkinnedMesh)return;const r=s,a=e.get(s),o=a.skeleton.bones;r.skeleton=a.skeleton.clone(),r.bindMatrix.copy(a.bindMatrix),r.skeleton.bones=o.map(function(c){return t.get(c)}),r.bind(r.skeleton,r.bindMatrix)}),n}function bf(i,e,t){t(i,e);for(let n=0;n<i.children.length;n++)bf(i.children[n],e.children[n],t)}class Gl extends Ys{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new uS(t)}),this.register(function(t){return new dS(t)}),this.register(function(t){return new yS(t)}),this.register(function(t){return new MS(t)}),this.register(function(t){return new SS(t)}),this.register(function(t){return new fS(t)}),this.register(function(t){return new pS(t)}),this.register(function(t){return new mS(t)}),this.register(function(t){return new gS(t)}),this.register(function(t){return new lS(t)}),this.register(function(t){return new _S(t)}),this.register(function(t){return new hS(t)}),this.register(function(t){return new vS(t)}),this.register(function(t){return new xS(t)}),this.register(function(t){return new oS(t)}),this.register(function(t){return new Kd(t,st.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new Kd(t,st.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new bS(t)})}load(e,t,n,s){const r=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const l=Sr.extractUrlBase(e);a=Sr.resolveURL(l,this.path)}else a=Sr.extractUrlBase(e);this.manager.itemStart(e);const o=function(l){s?s(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new sf(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,a,function(u){t(u),r.manager.itemEnd(e)},o)}catch(u){o(u)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r;const a={},o={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===Tf){try{a[st.KHR_BINARY_GLTF]=new TS(e)}catch(d){s&&s(d);return}r=JSON.parse(a[st.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new FS(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const d=this.pluginCallbacks[u](l);d.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[d.name]=d,a[d.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){const d=r.extensionsUsed[u],h=r.extensionsRequired||[];switch(d){case st.KHR_MATERIALS_UNLIT:a[d]=new cS;break;case st.KHR_DRACO_MESH_COMPRESSION:a[d]=new ES(r,this.dracoLoader);break;case st.KHR_TEXTURE_TRANSFORM:a[d]=new AS;break;case st.KHR_MESH_QUANTIZATION:a[d]=new wS;break;default:h.indexOf(d)>=0&&o[d]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+d+'".')}}l.setExtensions(a),l.setPlugins(o),l.parse(n,s)}parseAsync(e,t){const n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}}function aS(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}function Nt(i,e,t){const n=i.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}const st={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class oS{constructor(e){this.parser=e,this.name=st.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let s=t.cache.get(n);if(s)return s;const r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let l;const u=new We(16777215);c.color!==void 0&&u.setRGB(c.color[0],c.color[1],c.color[2],cn);const d=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new of(u),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new Jc(u),l.distance=d;break;case"spot":l=new xg(u),l.distance=d,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),kn(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),s=Promise.resolve(l),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return n._getNodeRef(t.cache,o,c)})}}class cS{constructor(){this.name=st.KHR_MATERIALS_UNLIT}getMaterialType(){return gn}extendParams(e,t,n){const s=[];e.color=new We(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],cn),e.opacity=a[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,Ft))}return Promise.all(s)}}class lS{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const n=Nt(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}}class uS{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return Nt(this.parser,e,this.name)!==null?$n:null}extendMaterialParams(e,t){const n=Nt(this.parser,e,this.name);if(n===null)return Promise.resolve();const s=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(s.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){const r=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Te(r,r)}return Promise.all(s)}}class dS{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_DISPERSION}getMaterialType(e){return Nt(this.parser,e,this.name)!==null?$n:null}extendMaterialParams(e,t){const n=Nt(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}}class hS{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return Nt(this.parser,e,this.name)!==null?$n:null}extendMaterialParams(e,t){const n=Nt(this.parser,e,this.name);if(n===null)return Promise.resolve();const s=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(s)}}class fS{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_SHEEN}getMaterialType(e){return Nt(this.parser,e,this.name)!==null?$n:null}extendMaterialParams(e,t){const n=Nt(this.parser,e,this.name);if(n===null)return Promise.resolve();const s=[];if(t.sheenColor=new We(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){const r=n.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],cn)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,Ft)),n.sheenRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(s)}}class pS{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return Nt(this.parser,e,this.name)!==null?$n:null}extendMaterialParams(e,t){const n=Nt(this.parser,e,this.name);if(n===null)return Promise.resolve();const s=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&s.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(s)}}class mS{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_VOLUME}getMaterialType(e){return Nt(this.parser,e,this.name)!==null?$n:null}extendMaterialParams(e,t){const n=Nt(this.parser,e,this.name);if(n===null)return Promise.resolve();const s=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;const r=n.attenuationColor||[1,1,1];return t.attenuationColor=new We().setRGB(r[0],r[1],r[2],cn),Promise.all(s)}}class gS{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_IOR}getMaterialType(e){return Nt(this.parser,e,this.name)!==null?$n:null}extendMaterialParams(e,t){const n=Nt(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}}class _S{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_SPECULAR}getMaterialType(e){return Nt(this.parser,e,this.name)!==null?$n:null}extendMaterialParams(e,t){const n=Nt(this.parser,e,this.name);if(n===null)return Promise.resolve();const s=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));const r=n.specularColorFactor||[1,1,1];return t.specularColor=new We().setRGB(r[0],r[1],r[2],cn),n.specularColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,Ft)),Promise.all(s)}}class xS{constructor(e){this.parser=e,this.name=st.EXT_MATERIALS_BUMP}getMaterialType(e){return Nt(this.parser,e,this.name)!==null?$n:null}extendMaterialParams(e,t){const n=Nt(this.parser,e,this.name);if(n===null)return Promise.resolve();const s=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&s.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(s)}}class vS{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return Nt(this.parser,e,this.name)!==null?$n:null}extendMaterialParams(e,t){const n=Nt(this.parser,e,this.name);if(n===null)return Promise.resolve();const s=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&s.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(s)}}class yS{constructor(e){this.parser=e,this.name=st.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const r=s.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}}class MS{constructor(e){this.parser=e,this.name=st.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=s.images[a.source];let c=n.textureLoader;if(o.uri){const l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(e,a.source,c)}}class SS{constructor(e){this.parser=e,this.name=st.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=s.images[a.source];let c=n.textureLoader;if(o.uri){const l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(e,a.source,c)}}class Kd{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){const c=s.byteOffset||0,l=s.byteLength||0,u=s.count,d=s.byteStride,h=new Uint8Array(o,c,l);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(u,d,h,s.mode,s.filter).then(function(f){return f.buffer}):a.ready.then(function(){const f=new ArrayBuffer(u*d);return a.decodeGltfBuffer(new Uint8Array(f),u,d,h,s.mode,s.filter),f})})}else return null}}class bS{constructor(e){this.name=st.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const s=t.meshes[n.mesh];for(const l of s.primitives)if(l.mode!==dn.TRIANGLES&&l.mode!==dn.TRIANGLE_STRIP&&l.mode!==dn.TRIANGLE_FAN&&l.mode!==void 0)return null;const a=n.extensions[this.name].attributes,o=[],c={};for(const l in a)o.push(this.parser.getDependency("accessor",a[l]).then(u=>(c[l]=u,c[l])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(l=>{const u=l.pop(),d=u.isGroup?u.children:[u],h=l[0].count,f=[];for(const p of d){const v=new $e,g=new F,m=new xn,S=new F(1,1,1),T=new dm(p.geometry,p.material,h);for(let _=0;_<h;_++)c.TRANSLATION&&g.fromBufferAttribute(c.TRANSLATION,_),c.ROTATION&&m.fromBufferAttribute(c.ROTATION,_),c.SCALE&&S.fromBufferAttribute(c.SCALE,_),T.setMatrixAt(_,v.compose(g,m,S));for(const _ in c)if(_==="_COLOR_0"){const E=c[_];T.instanceColor=new qc(E.array,E.itemSize,E.normalized)}else _!=="TRANSLATION"&&_!=="ROTATION"&&_!=="SCALE"&&p.geometry.setAttribute(_,c[_]);Et.prototype.copy.call(T,p),this.parser.assignFinalMaterial(T),f.push(T)}return u.isGroup?(u.clear(),u.add(...f),u):f[0]}))}}const Tf="glTF",hr=12,$d={JSON:1313821514,BIN:5130562};class TS{constructor(e){this.name=st.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,hr),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Tf)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-hr,r=new DataView(e,hr);let a=0;for(;a<s;){const o=r.getUint32(a,!0);a+=4;const c=r.getUint32(a,!0);if(a+=4,c===$d.JSON){const l=new Uint8Array(e,hr+a,o);this.content=n.decode(l)}else if(c===$d.BIN){const l=hr+a;this.body=e.slice(l,l+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class ES{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=st.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},c={},l={};for(const u in a){const d=ll[u]||u.toLowerCase();o[d]=a[u]}for(const u in e.attributes){const d=ll[u]||u.toLowerCase();if(a[u]!==void 0){const h=n.accessors[e.attributes[u]],f=Us[h.componentType];l[d]=f.name,c[d]=h.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(d,h){s.decodeDracoFile(u,function(f){for(const p in f.attributes){const v=f.attributes[p],g=c[p];g!==void 0&&(v.normalized=g)}d(f)},o,l,cn,h)})})}}class AS{constructor(){this.name=st.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class wS{constructor(){this.name=st.KHR_MESH_QUANTIZATION}}class Ef extends Ws{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let a=0;a!==s;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=o*2,l=o*3,u=s-t,d=(n-t)/u,h=d*d,f=h*d,p=e*l,v=p-l,g=-2*f+3*h,m=f-h,S=1-g,T=m-h+d;for(let _=0;_!==o;_++){const E=a[v+_+o],A=a[v+_+c]*u,I=a[p+_+o],y=a[p+_]*u;r[_]=S*E+T*A+g*I+m*y}return r}}const RS=new xn;class CS extends Ef{interpolate_(e,t,n,s){const r=super.interpolate_(e,t,n,s);return RS.fromArray(r).normalize().toArray(r),r}}const dn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Us={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Zd={9728:wt,9729:Rt,9984:Th,9985:Ta,9986:pr,9987:ii},Jd={33071:Hn,33648:Ua,10497:ks},qo={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},ll={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},yi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},PS={CUBICSPLINE:void 0,LINEAR:Ar,STEP:Er},Yo={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function IS(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new Wi({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:ci})),i.DefaultMaterial}function Fi(i,e,t){for(const n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function kn(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function LS(i,e,t){let n=!1,s=!1,r=!1;for(let l=0,u=e.length;l<u;l++){const d=e[l];if(d.POSITION!==void 0&&(n=!0),d.NORMAL!==void 0&&(s=!0),d.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);const a=[],o=[],c=[];for(let l=0,u=e.length;l<u;l++){const d=e[l];if(n){const h=d.POSITION!==void 0?t.getDependency("accessor",d.POSITION):i.attributes.position;a.push(h)}if(s){const h=d.NORMAL!==void 0?t.getDependency("accessor",d.NORMAL):i.attributes.normal;o.push(h)}if(r){const h=d.COLOR_0!==void 0?t.getDependency("accessor",d.COLOR_0):i.attributes.color;c.push(h)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c)]).then(function(l){const u=l[0],d=l[1],h=l[2];return n&&(i.morphAttributes.position=u),s&&(i.morphAttributes.normal=d),r&&(i.morphAttributes.color=h),i.morphTargetsRelative=!0,i})}function DS(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function NS(i){let e;const t=i.extensions&&i.extensions[st.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Ko(t.attributes):e=i.indices+":"+Ko(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+Ko(i.targets[n]);return e}function Ko(i){let e="";const t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function ul(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function US(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const OS=new $e;class FS{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new aS,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,a=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){const o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;const c=o.match(/Version\/(\d+)/);s=n&&c?parseInt(c[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&a<98?this.textureLoader=new rf(this.options.manager):this.textureLoader=new Sg(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new sf(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const o={scene:a[0][s.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:s.asset,parser:n,userData:{}};return Fi(r,o,s),kn(o,s),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){for(const c of o.scenes)c.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){const a=t[s].joints;for(let o=0,c=a.length;o<c;o++)e[a[o]].isBone=!0}for(let s=0,r=e.length;s<r;s++){const a=e[s];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const s=n.clone(),r=(a,o)=>{const c=this.associations.get(a);c!=null&&this.associations.set(o,c);for(const[l,u]of a.children.entries())r(u,o.children[l])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const s=e(t[n]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let s=0;s<t.length;s++){const r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[st.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(r,a){n.load(Sr.resolveURL(t.uri,s.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){const t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){const a=qo[s.type],o=Us[s.componentType],c=s.normalized===!0,l=new o(s.count*a);return Promise.resolve(new en(l,a,c))}const r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(a){const o=a[0],c=qo[s.type],l=Us[s.componentType],u=l.BYTES_PER_ELEMENT,d=u*c,h=s.byteOffset||0,f=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,p=s.normalized===!0;let v,g;if(f&&f!==d){const m=Math.floor(h/f),S="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+m+":"+s.count;let T=t.cache.get(S);T||(v=new l(o,m*f,s.count*f/u),T=new kh(v,f/u),t.cache.add(S,T)),g=new Cr(T,c,h%f/u,p)}else o===null?v=new l(s.count*c):v=new l(o,h,s.count*c),g=new en(v,c,p);if(s.sparse!==void 0){const m=qo.SCALAR,S=Us[s.sparse.indices.componentType],T=s.sparse.indices.byteOffset||0,_=s.sparse.values.byteOffset||0,E=new S(a[1],T,s.sparse.count*m),A=new l(a[2],_,s.sparse.count*c);o!==null&&(g=new en(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let I=0,y=E.length;I<y;I++){const M=E[I];if(g.setX(M,A[I*c]),c>=2&&g.setY(M,A[I*c+1]),c>=3&&g.setZ(M,A[I*c+2]),c>=4&&g.setW(M,A[I*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=p}return g})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r];let o=this.textureLoader;if(a.uri){const c=n.manager.getHandler(a.uri);c!==null&&(o=c)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){const s=this,r=this.json,a=r.textures[e],o=r.images[t],c=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=a.name||o.name||"",u.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(u.name=o.uri);const h=(r.samplers||{})[a.sampler]||{};return u.magFilter=Zd[h.magFilter]||Rt,u.minFilter=Zd[h.minFilter]||ii,u.wrapS=Jd[h.wrapS]||ks,u.wrapT=Jd[h.wrapT]||ks,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==wt&&u.minFilter!==Rt,s.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){const n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(d=>d.clone());const a=s.images[e],o=self.URL||self.webkitURL;let c=a.uri||"",l=!1;if(a.bufferView!==void 0)c=n.getDependency("bufferView",a.bufferView).then(function(d){l=!0;const h=new Blob([d],{type:a.mimeType});return c=o.createObjectURL(h),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(c).then(function(d){return new Promise(function(h,f){let p=h;t.isImageBitmapLoader===!0&&(p=function(v){const g=new kt(v);g.needsUpdate=!0,h(g)}),t.load(Sr.resolveURL(d,r.path),p,void 0,f)})}).then(function(d){return l===!0&&o.revokeObjectURL(c),kn(d,a),d.userData.mimeType=a.mimeType||US(a.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),d});return this.sourceCache[e]=u,u}assignTexture(e,t,n,s){const r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[st.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[st.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const c=r.associations.get(a);a=r.extensions[st.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,c)}}return s!==void 0&&(a.colorSpace=s),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let c=this.cache.get(o);c||(c=new Vh,wn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(o,c)),n=c}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let c=this.cache.get(o);c||(c=new Hh,wn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(o,c)),n=c}if(s||r||a){let o="ClonedMaterial:"+n.uuid+":";s&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=n.clone(),r&&(c.vertexColors=!0),a&&(c.flatShading=!0),s&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return Wi}loadMaterial(e){const t=this,n=this.json,s=this.extensions,r=n.materials[e];let a;const o={},c=r.extensions||{},l=[];if(c[st.KHR_MATERIALS_UNLIT]){const d=s[st.KHR_MATERIALS_UNLIT];a=d.getMaterialType(),l.push(d.extendParams(o,r,t))}else{const d=r.pbrMetallicRoughness||{};if(o.color=new We(1,1,1),o.opacity=1,Array.isArray(d.baseColorFactor)){const h=d.baseColorFactor;o.color.setRGB(h[0],h[1],h[2],cn),o.opacity=h[3]}d.baseColorTexture!==void 0&&l.push(t.assignTexture(o,"map",d.baseColorTexture,Ft)),o.metalness=d.metallicFactor!==void 0?d.metallicFactor:1,o.roughness=d.roughnessFactor!==void 0?d.roughnessFactor:1,d.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(o,"metalnessMap",d.metallicRoughnessTexture)),l.push(t.assignTexture(o,"roughnessMap",d.metallicRoughnessTexture))),a=this._invokeOne(function(h){return h.getMaterialType&&h.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(h){return h.extendMaterialParams&&h.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=zn);const u=r.alphaMode||Yo.OPAQUE;if(u===Yo.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,u===Yo.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==gn&&(l.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new Te(1,1),r.normalTexture.scale!==void 0)){const d=r.normalTexture.scale;o.normalScale.set(d,d)}if(r.occlusionTexture!==void 0&&a!==gn&&(l.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==gn){const d=r.emissiveFactor;o.emissive=new We().setRGB(d[0],d[1],d[2],cn)}return r.emissiveTexture!==void 0&&a!==gn&&l.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,Ft)),Promise.all(l).then(function(){const d=new a(o);return r.name&&(d.name=r.name),kn(d,r),t.associations.set(d,{materials:e}),r.extensions&&Fi(s,d,r),d})}createUniqueName(e){const t=dt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,s=this.primitiveCache;function r(o){return n[st.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(c){return jd(c,o,t)})}const a=[];for(let o=0,c=e.length;o<c;o++){const l=e[o],u=NS(l),d=s[u];if(d)a.push(d.promise);else{let h;l.extensions&&l.extensions[st.KHR_DRACO_MESH_COMPRESSION]?h=r(l):h=jd(new tn,l,t),s[u]={primitive:l,promise:h},a.push(h)}}return Promise.all(a)}loadMesh(e){const t=this,n=this.json,s=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let c=0,l=a.length;c<l;c++){const u=a[c].material===void 0?IS(this.cache):this.getDependency("material",a[c].material);o.push(u)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(c){const l=c.slice(0,c.length-1),u=c[c.length-1],d=[];for(let f=0,p=u.length;f<p;f++){const v=u[f],g=a[f];let m;const S=l[f];if(g.mode===dn.TRIANGLES||g.mode===dn.TRIANGLE_STRIP||g.mode===dn.TRIANGLE_FAN||g.mode===void 0)m=r.isSkinnedMesh===!0?new cm(v,S):new It(v,S),m.isSkinnedMesh===!0&&m.normalizeSkinWeights(),g.mode===dn.TRIANGLE_STRIP?m.geometry=Yd(m.geometry,Lh):g.mode===dn.TRIANGLE_FAN&&(m.geometry=Yd(m.geometry,Vc));else if(g.mode===dn.LINES)m=new mm(v,S);else if(g.mode===dn.LINE_STRIP)m=new Ll(v,S);else if(g.mode===dn.LINE_LOOP)m=new gm(v,S);else if(g.mode===dn.POINTS)m=new _m(v,S);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(m.geometry.morphAttributes).length>0&&DS(m,r),m.name=t.createUniqueName(r.name||"mesh_"+e),kn(m,r),g.extensions&&Fi(s,m,g),t.assignFinalMaterial(m),d.push(m)}for(let f=0,p=d.length;f<p;f++)t.associations.set(d[f],{meshes:e,primitives:f});if(d.length===1)return r.extensions&&Fi(s,d[0],r),d[0];const h=new An;r.extensions&&Fi(s,h,r),t.associations.set(h,{meshes:e});for(let f=0,p=d.length;f<p;f++)h.add(d[f]);return h})}loadCamera(e){let t;const n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new jt(Xc.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new Za(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),kn(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){const r=s.pop(),a=s,o=[],c=[];for(let l=0,u=a.length;l<u;l++){const d=a[l];if(d){o.push(d);const h=new $e;r!==null&&h.fromArray(r.array,l*16),c.push(h)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new Pl(o,c)})}loadAnimation(e){const t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,a=[],o=[],c=[],l=[],u=[];for(let d=0,h=s.channels.length;d<h;d++){const f=s.channels[d],p=s.samplers[f.sampler],v=f.target,g=v.node,m=s.parameters!==void 0?s.parameters[p.input]:p.input,S=s.parameters!==void 0?s.parameters[p.output]:p.output;v.node!==void 0&&(a.push(this.getDependency("node",g)),o.push(this.getDependency("accessor",m)),c.push(this.getDependency("accessor",S)),l.push(p),u.push(v))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c),Promise.all(l),Promise.all(u)]).then(function(d){const h=d[0],f=d[1],p=d[2],v=d[3],g=d[4],m=[];for(let T=0,_=h.length;T<_;T++){const E=h[T],A=f[T],I=p[T],y=v[T],M=g[T];if(E===void 0)continue;E.updateMatrix&&E.updateMatrix();const L=n._createAnimationTracks(E,A,I,y,M);if(L)for(let C=0;C<L.length;C++)m.push(L[C])}const S=new Wa(r,void 0,m);return kn(S,s),S})}createNodeMesh(e){const t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){const a=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let c=0,l=s.weights.length;c<l;c++)o.morphTargetInfluences[c]=s.weights[c]}),a})}loadNode(e){const t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=s.children||[];for(let l=0,u=o.length;l<u;l++)a.push(n.getDependency("node",o[l]));const c=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(a),c]).then(function(l){const u=l[0],d=l[1],h=l[2];h!==null&&u.traverse(function(f){f.isSkinnedMesh&&f.bind(h,OS)});for(let f=0,p=d.length;f<p;f++)u.add(d[f]);if(u.userData.pivot!==void 0&&d.length>0){const f=u.userData.pivot,p=d[0];u.pivot=new F().fromArray(f),u.position.x-=f[0],u.position.y-=f[1],u.position.z-=f[2],p.position.set(0,0,0),delete u.userData.pivot}return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],a=r.name?s.createUniqueName(r.name):"",o=[],c=s._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&o.push(c),r.camera!==void 0&&o.push(s.getDependency("camera",r.camera).then(function(l){return s._getNodeRef(s.cameraCache,r.camera,l)})),s._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){o.push(l)}),this.nodeCache[e]=Promise.all(o).then(function(l){let u;if(r.isBone===!0?u=new zh:l.length>1?u=new An:l.length===1?u=l[0]:u=new Et,u!==l[0])for(let d=0,h=l.length;d<h;d++)u.add(l[d]);if(r.name&&(u.userData.name=r.name,u.name=a),kn(u,r),r.extensions&&Fi(n,u,r),r.matrix!==void 0){const d=new $e;d.fromArray(r.matrix),u.applyMatrix4(d)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);if(!s.associations.has(u))s.associations.set(u,{});else if(r.mesh!==void 0&&s.meshCache.refs[r.mesh]>1){const d=s.associations.get(u);s.associations.set(u,{...d})}return s.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],s=this,r=new An;n.name&&(r.name=s.createUniqueName(n.name)),kn(r,n),n.extensions&&Fi(t,r,n);const a=n.nodes||[],o=[];for(let c=0,l=a.length;c<l;c++)o.push(s.getDependency("node",a[c]));return Promise.all(o).then(function(c){for(let u=0,d=c.length;u<d;u++){const h=c[u];h.parent!==null?r.add(rS(h)):r.add(h)}const l=u=>{const d=new Map;for(const[h,f]of s.associations)(h instanceof wn||h instanceof kt)&&d.set(h,f);return u.traverse(h=>{const f=s.associations.get(h);f!=null&&d.set(h,f)}),d};return s.associations=l(r),r})}_createAnimationTracks(e,t,n,s,r){const a=[],o=e.name?e.name:e.uuid,c=[];function l(f){f.morphTargetInfluences&&c.push(f.name?f.name:f.uuid)}yi[r.path]===yi.weights?(l(e),e.isGroup&&e.children.forEach(l)):c.push(o);let u;switch(yi[r.path]){case yi.weights:u=Dr;break;case yi.rotation:u=Nr;break;case yi.translation:case yi.scale:u=Ga;break;default:switch(n.itemSize){case 1:u=Dr;break;case 2:case 3:default:u=Ga;break}break}const d=s.interpolation!==void 0?PS[s.interpolation]:Ar,h=this._getArrayFromAccessor(n);for(let f=0,p=c.length;f<p;f++){const v=new u(c[f]+"."+yi[r.path],t.array,h,d);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(v),a.push(v)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=ul(t.constructor),s=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const s=this instanceof Nr?CS:Ef;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function kS(i,e,t){const n=e.attributes,s=new Qt;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],c=o.min,l=o.max;if(c!==void 0&&l!==void 0){if(s.set(new F(c[0],c[1],c[2]),new F(l[0],l[1],l[2])),o.normalized){const u=ul(Us[o.componentType]);s.min.multiplyScalar(u),s.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const o=new F,c=new F;for(let l=0,u=r.length;l<u;l++){const d=r[l];if(d.POSITION!==void 0){const h=t.json.accessors[d.POSITION],f=h.min,p=h.max;if(f!==void 0&&p!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(p[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(p[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(p[2]))),h.normalized){const v=ul(Us[h.componentType]);c.multiplyScalar(v)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(o)}i.boundingBox=s;const a=new Yn;s.getCenter(a.center),a.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=a}function jd(i,e,t){const n=e.attributes,s=[];function r(a,o){return t.getDependency("accessor",a).then(function(c){i.setAttribute(o,c)})}for(const a in n){const o=ll[a]||a.toLowerCase();o in i.attributes||s.push(r(n[a],o))}if(e.indices!==void 0&&!i.index){const a=t.getDependency("accessor",e.indices).then(function(o){i.setIndex(o)});s.push(a)}return rt.workingColorSpace!==cn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${rt.workingColorSpace}" not supported.`),kn(i,e),kS(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?LS(i,e.targets,t):i})}const He={outline:1916526,body:4033504,bodyHurt:7251933,shine:9426165,core:14677503,torch:15245628,torchBright:16177034,stone:4861726,stoneDark:2759696,floor:2365968,floorAlt:2826260,dungeonBg:1708555,toad:5934138,toadBelly:10339434,toadOutline:3099166,spit:8829247,spitDark:4021278,danger:14830410,eyeWhite:16055295,eyeDark:1320511,white:16777215};function ct(i){return"#"+i.toString(16).padStart(6,"0")}function bn(i,e){const t={img:new Image,cell:e,cols:0,rows:0,ready:!1};return t.img.onload=()=>{t.cols=Math.max(1,Math.floor(t.img.width/e)),t.rows=Math.max(1,Math.floor(t.img.height/e)),t.ready=!0},t.img.src=i,t}function BS(){return{frog:bn("assets/enemies/frogs/frog_spritesheets/frog_green_spritesheet.png",32),frogPurple:bn("assets/enemies/frogs/frog_spritesheets/frog_purple_spritesheet.png",32),bat:bn("assets/enemies/cave-bat/Bat/Spritesheets/Blue_Flying.png",32),trader:bn("assets/characters/craftpix-slime/Slime1/Idle/Slime1_Idle_body.png",64),babosaWalk:bn("assets/characters/craftpix-slime/Slime3/Walk/Slime3_Walk_body.png",64),babosaIdle:bn("assets/characters/craftpix-slime/Slime3/Idle/Slime3_Idle_body.png",64),babosaHurt:bn("assets/characters/craftpix-slime/Slime3/Hurt/Slime3_Hurt_body.png",64),kaiIdle:bn("assets/characters/craftpix-slime/Slime2/Idle/Slime2_Idle_body.png",64),kaiRun:bn("assets/characters/craftpix-slime/Slime2/Run/Slime2_Run_body.png",64),kaiAttack:bn("assets/characters/craftpix-slime/Slime2/Attack/Slime2_Attack_body.png",64),kaiHurt:bn("assets/characters/craftpix-slime/Slime2/Hurt/Slime2_Hurt_body.png",64)}}function bs(i,e,t,n,s,r,a,o=!1){i.imageSmoothingEnabled=!1;const c=e.cell;if(o){i.save(),i.translate(s,0),i.scale(-1,1),i.drawImage(e.img,t*c,n*c,c,c,-a/2,r-a/2,a,a),i.restore();return}i.drawImage(e.img,t*c,n*c,c,c,s-a/2,r-a/2,a,a)}const zS="assets/tileset/",Af=["floor_1","floor_2","floor_3","floor_4","floor_5","floor_6","floor_7","floor_8","wall_mid","wall_top_mid","floor_stairs","doors_leaf_open","doors_leaf_closed","doors_frame_left","doors_frame_right"],wf=new Map,dl=[];let hl=Af.length;for(const i of Af){const e=new Image;e.src=`${zS}${i}.png`,e.onload=()=>{if(--hl===0)for(const t of dl)t()},e.onerror=()=>{if(--hl===0)for(const t of dl)t()},wf.set(i,e)}function Rf(i){hl===0?i():dl.push(i)}function La(i){const e=wf.get(i);return e&&e.complete&&e.naturalWidth>0?e:null}function qt(i,e){const t=document.createElement("canvas");t.width=i,t.height=e;const n=t.getContext("2d");return[t,n]}function Yt(i){const e=new xm(i);return e.magFilter=wt,e.minFilter=wt,e.generateMipmaps=!1,e.colorSpace=Ft,e}function Cf(i,e){let t=i*374761393+e*668265263>>>0;return t=Math.imul(t^t>>>13,1274126177)>>>0,(t^t>>>16)>>>0}function HS(i,e){const[n,s]=qt(i*16,e*16);for(let r=0;r<e;r++)for(let a=0;a<i;a++){s.fillStyle=(a+r)%2===0?ct(He.floor):ct(He.floorAlt),s.fillRect(a*16,r*16,16,16);const o=Cf(a,r);s.fillStyle="rgba(0,0,0,0.18)",s.fillRect(a*16+o%16,r*16+(o>>5)%16,2,1),s.fillRect(a*16+(o>>10)%16,r*16+(o>>15)%16,1,2),s.strokeStyle="rgba(0,0,0,0.25)",s.lineWidth=1,s.strokeRect(a*16+.5,r*16+.5,15,15)}return Yt(n)}function VS(i,e){const[n,s]=qt(i*16,e*16),r=Yt(n);let a=1;function o(c){if(a=c,!La("floor_1")){const d=HS(i,e);s.drawImage(d.image,0,0),r.needsUpdate=!0;return}let l=c>>>0||1;const u=()=>(l^=l<<13,l>>>=0,l^=l>>17,l^=l<<5,l>>>=0,l/4294967295);for(let d=0;d<e;d++)for(let h=0;h<i;h++){const f=u()<.72?"floor_1":`floor_${1+Math.floor(u()*8)}`,p=La(f)??La("floor_1");s.drawImage(p,h*16,d*16,16,16)}r.needsUpdate=!0}return o(1),Rf(()=>o(a)),{texture:r,repaint:o}}function Qd(i,e){const[n,s]=qt(Math.max(1,i)*16,Math.max(1,e)*16),r=Yt(n),a=()=>{const o=La("wall_mid");if(o)for(let c=0;c*16<n.height;c++)for(let l=0;l*16<n.width;l++)s.drawImage(o,l*16,c*16,16,16);else{const c=GS(i,e);s.drawImage(c.image,0,0)}r.needsUpdate=!0};return a(),Rf(a),r}function GS(i,e){const[n,s]=qt(Math.max(1,i)*16,Math.max(1,e)*16);s.fillStyle=ct(He.stone),s.fillRect(0,0,n.width,n.height);const r=16/2;for(let a=0;a*r<n.height;a++){const o=a%2===0?0:8;for(let c=-1;c*16<n.width;c++){const l=c*16+o,d=(Cf(c,a)%21-10)/100;s.fillStyle=d>=0?`rgba(255,235,200,${d*.5})`:`rgba(0,0,0,${-d})`,s.fillRect(l+1,a*r+1,14,r-2),s.strokeStyle=ct(He.stoneDark),s.lineWidth=1,s.strokeRect(l+.5,a*r+.5,15,r-1)}}return Yt(n)}const WS={down:0,up:1,left:2,right:3},$o={idle:6,run:8,hurt:5},XS=13,qS=4,YS=10,eh=3,KS=.24,$S=[2,1,0,7,6,5,4,3],th={sapo_escupidor:{canvas:96,world:3,y:.42,shadow:[.9,.58]},renacuajo:{canvas:64,world:1.5,y:.28,shadow:[.45,.3]},mosca_gorda:{canvas:64,world:1.6,y:.85,shadow:[.42,.27]},babosa_acorazada:{canvas:96,world:2.5,y:.42,shadow:[1.05,.66]},sapo_doble:{canvas:128,world:4.2,y:.56,shadow:[1.3,.82]},gorko:{canvas:192,world:7,y:.95,shadow:[2.3,1.45]}};function ZS(i,e){return Math.abs(i)>=Math.abs(e)?i>0?3:2:e>0?0:1}const va={col:0,frames:3},Ts={col:3,frames:4},ya={col:7,frames:4},Zo={col:11,frames:5},ki={frames:5,ticksPerFrame:4,rowOffset:8},Jo={frames:2,ticksPerFrame:5},nh=18,ih=.16,JS=.22,Ma=4;function Sa(i,e){const t=Math.round(Math.atan2(e,i)/(Math.PI/4))+8&7;return $S[t]}const jS="assets/items/ssugmi-rpg-16x16/Free RPG asset Pack/separate files/",QS={punos_de_piedra:"glove_01.png",brazos_de_arquero:"bow_01.png",piernas_de_renacuajo:"boots_01.png",botas_de_salto:"boots_02.png",casco_de_lata:"headgear_01.png",ojo_de_cristal:"glasses.png",nucleo_denso:"stone.png",corazon_de_la_gema:"hp_potion.png",chorro_dividido:"arrow.png",burbujas_traviesas:"mana_potion.png",libro_multidisparo:"book.png",trebol_de_alcantarilla:"clover_leaf.png",manos_de_ladron:"glove_02.png",herradura_del_ahogado:"necklace_01.png",punta_de_lanza:"spear_01.png",pulmones_de_buzo:"feather_a.png",caparazon_de_tortuga:"wooden_shield.png",anillo_de_marea:"ring_01.png",chorro_a_presion:"wand_01.png",medalla_oxidada:"necklace_02.png",aletas_de_carpa:"tail.png",silbato_del_pantano:"compass.png",corona_del_rey_sapo:"circlet.png",perla_negra:"glowing_dust.png",escudo_de_caracol:"shield_01.png",guantes_de_rana:"leather_glove.png"};function Da(i){return jS+(QS[i]??"pouch.png")}const sh=new Map;function rh(i){const e=Da(i);let t=sh.get(e);return t||(t=new rf().load(e),t.magFilter=wt,t.minFilter=wt,t.generateMipmaps=!1,t.colorSpace=Ft,sh.set(e,t)),t}const eb=24,tb=64,nb=bt.radius*tl+4;function ib(i,e){const t=sb(),n=rb(),s=ab(),r=ob(),a=lb(),o=hb(),c=new It(new Ci(1,.62),new gn({map:cb(),transparent:!0,depthWrite:!1,opacity:.85}));c.rotation.x=-Math.PI/2,c.position.y=.022,c.renderOrder=2,c.visible=!1,i.add(c);function l(O){const D=O.enemies.find(k=>k.kind==="gorko"&&(k.fsm==="jump_aim"||k.fsm==="airborne"));if(c.visible=!!D,!D)return;const P=D.fsm==="jump_aim"?.6+1.6*(1-D.timer/ke.jumpAimTicks):2.2+.5*(1-D.timer/ke.airborneTicks)+.12*Math.sin(O.tick*.5);c.scale.set(P*1.6,P,1),c.position.x=D.targetX,c.position.z=D.targetY}const u=jo(i,64),d=Es(i,t,1,.62),h=new Map,f={prevX:null,prevY:0,lastMoveTick:-99,dist:0,facing:"down",prevFireCooldown:0,prevHalfHearts:-1,attackStart:-1,hurtStart:-1},p=Array.from({length:eb},()=>{const O=new Rs(new Gi({map:s,depthWrite:!1,transparent:!0}));O.scale.set(.5,.5,1),O.renderOrder=3,O.visible=!1,i.add(O);const D=new Rs(new Gi({map:o,depthWrite:!1,transparent:!0,opacity:.5}));D.scale.set(.3,.3,1),D.renderOrder=3,D.visible=!1,i.add(D);const P=Es(i,t,.24,.15);return P.visible=!1,{sprite:O,trail:D,shadow:P}}),v=Array.from({length:tb},(O,D)=>{const P=new It(new Ci(.55,.32),new gn({map:n,transparent:!0,depthWrite:!1,opacity:0}));return P.rotation.x=-Math.PI/2,P.position.y=.008+D%8*.0015,P.renderOrder=1,P.visible=!1,i.add(P),P}),g=new Map,m=new Ri(.52,.3,.42),S=new Wi({color:He.stone,roughness:.9});function T(O){for(const D of O.pickups)if(!g.has(D.id)){const P=new It(m,S);P.position.set(D.x,.15,D.y),i.add(P);const k=new Rs(new Gi({map:rh(D.itemId),depthWrite:!1,transparent:!0}));k.scale.set(.55,.55,1),k.renderOrder=3,i.add(k),g.set(D.id,{itemId:D.itemId,icon:k,base:P,shadow:Es(i,t,.5,.32)})}for(const[D,P]of g){const k=O.pickups.find(ee=>ee.id===D);if(!k){i.remove(P.icon),P.icon.material.dispose(),i.remove(P.base),i.remove(P.shadow),g.delete(D);continue}k.itemId!==P.itemId&&(P.itemId=k.itemId,P.icon.material.map=rh(k.itemId)),P.icon.position.set(k.x,.72+.05*Math.sin(O.tick*.07),k.y),P.shadow.position.set(k.x,P.shadow.position.y,k.y)}}const _={heart:ub(),key:db(),crystal:Qo(4.5),crystal_med:Qo(5.5),crystal_big:Qo(6.5)},E=new Map;function A(O){for(const D of O.drops)if(!E.has(D.id)){const P=new Rs(new Gi({map:_[D.kind],depthWrite:!1,transparent:!0}));P.renderOrder=3,i.add(P),E.set(D.id,{sprite:P,shadow:Es(i,t,.28,.18)})}for(const[D,P]of E){const k=O.drops.find(ce=>ce.id===D);if(!k){i.remove(P.sprite),P.sprite.material.dispose(),i.remove(P.shadow),E.delete(D);continue}const ee=Math.abs(Math.sin(O.tick*.09+D)),ie=k.kind==="crystal_big"?.64:k.kind==="crystal_med"?.52:.44;P.sprite.scale.set(ie*(.35+.65*ee),ie,1),P.sprite.position.set(k.x,.34+.05*Math.sin(O.tick*.1+D*2.1),k.y),P.shadow.position.set(k.x,P.shadow.position.y,k.y)}}const I=new Gl,y=new Map;for(const O of["caja","caja_rica","pila","barril","barrilete"])I.load(`assets/models/prop_${O}.glb`,D=>{y.set(O,D.scene)});let M=null;I.load("assets/models/cofre_nido.glb",O=>{M=O.scene});function L(O,D){const P=O.clone(!0),ee=new Qt().setFromObject(O).getSize(new F),ie=D/Math.max(.001,Math.max(ee.x,ee.z));P.scale.setScalar(ie);const ce=new Qt().setFromObject(P),xe=ce.getCenter(new F);P.position.sub(new F(xe.x,ce.min.y,xe.z));const U=new An;return U.add(P),U}const C=new Map;function R(O){for(const D of O.props){const P=C.get(D.id);if(!P||P.kind!==D.kind){const k=y.get(D.kind);if(!k)continue;P&&i.remove(P.group);const ee=L(k,ri[D.kind].radius*2.2);i.add(ee),C.set(D.id,{group:ee,kind:D.kind})}}for(const[D,P]of C){const k=O.props.find(ce=>ce.id===D);if(!k){i.remove(P.group),C.delete(D);continue}const ee=ri[k.kind],ie=k.hp<ee.hp?.9:1;P.group.scale.setScalar(ie),P.group.position.set(k.x,0,k.y)}}let B=null,V=null;function N(O){const D=O.chest,P=!!D&&D.roomId===O.floor.current;if(P&&!B&&M&&(B=L(M,1),B.traverse(k=>{k.name==="chest_gold_lid"&&(V=k)}),i.add(B)),!!B&&(B.visible=P,!(!D||!P)&&(B.position.set(D.x,0,D.y),V))){const k=D.opened?-1.35:0;V.rotation.x+=(k-V.rotation.x)*.1}}const X=jo(i,96);X.sprite.visible=!1;const H=Es(i,t,1.2,.75);H.visible=!1;function q(O){const D=O.floor.rooms[O.floor.current].kind==="shop";if(X.sprite.visible=D,H.visible=D,!D)return;const[P,k]=jy;X.sprite.scale.set(3.4,3.4,1),X.sprite.position.set(P,.62,k),H.position.set(P,H.position.y,k);const{ctx:ee,size:ie}=X,ce=ie/2;ee.clearRect(0,0,ie,ie);const xe=e.trader;if(xe&&xe.ready){const Re=Math.floor(O.tick/16)%6;bs(ee,xe,Re,0,ce,ce+4,ie*.8)}else ee.fillStyle=ct(He.toad),ut(ee,ce,ce,ie*.3,!0);const U=3*Math.sin(O.tick*.08),Se=ce-ie*.32+U;ee.fillStyle=ct(He.core),ee.beginPath(),ee.moveTo(ce,Se-6),ee.lineTo(ce+4.5,Se),ee.lineTo(ce,Se+6),ee.lineTo(ce-4.5,Se),ee.closePath(),ee.fill(),ee.strokeStyle=ct(He.shine),ee.lineWidth=1.4,ee.stroke(),X.tex.needsUpdate=!0}function te(O){Z(O),Be(O),je(O),ot(O),T(O),A(O),R(O),N(O),q(O),l(O)}function Z(O){const D=O.player,P=O.status==="dead",k=D.iframes>0&&Math.floor(D.iframes/Fy)%2===1;u.sprite.material.opacity=k?.35:1;const ie=D.halfHearts<=2&&!P?Math.sin(O.tick*.9)*.025:0;u.sprite.position.set(D.x+ie,.52,D.y),d.position.set(D.x,d.position.y,D.y),oe(O);const ce=!!(e.kaiIdle&&e.kaiIdle.ready);if(P)u.sprite.scale.set(2,2,1),lt(u,O);else if(ce)u.sprite.scale.set(2.2,2.2,1),he(u,O);else{const xe=1+.04*Math.sin(O.tick*.12);u.sprite.scale.set(2*xe,2*(2-xe)*.95,1),Qe(u,O)}}function oe(O){const D=O.player,P=f;if(P.attackStart>O.tick&&(P.attackStart=-1),P.hurtStart>O.tick&&(P.hurtStart=-1),P.prevX!==null){const k=D.x-P.prevX,ee=D.y-P.prevY,ie=Math.hypot(k,ee);ie>1?P.dist=0:ie>5e-4&&(P.dist+=ie,P.lastMoveTick=O.tick,P.facing=Math.abs(k)>=Math.abs(ee)?k>0?"right":"left":ee>0?"down":"up")}P.prevX=D.x,P.prevY=D.y,D.fireCooldown>P.prevFireCooldown&&(P.attackStart=O.tick,P.facing=Math.abs(D.aimX)>=Math.abs(D.aimY)?D.aimX>0?"right":"left":D.aimY>0?"down":"up"),P.prevFireCooldown=D.fireCooldown,P.prevHalfHearts>=0&&D.halfHearts<P.prevHalfHearts&&(P.hurtStart=O.tick),P.prevHalfHearts=D.halfHearts}function he(O,D){const{ctx:P,size:k}=O,ee=k/2;P.clearRect(0,0,k,k);const ie=f,ce=WS[ie.facing],xe=ie.hurtStart>=0?D.tick-ie.hurtStart:1/0,U=ie.attackStart>=0?D.tick-ie.attackStart:1/0;let Se=e.kaiIdle,Re;e.kaiHurt?.ready&&xe<$o.hurt*eh?(Se=e.kaiHurt,Re=Math.floor(xe/eh)):e.kaiAttack?.ready&&U<YS?(Se=e.kaiAttack,Re=qS):e.kaiRun?.ready&&D.tick-ie.lastMoveTick<=Ma?(Se=e.kaiRun,Re=Math.floor(ie.dist/KS)%$o.run):Re=Math.floor(D.tick/XS)%$o.idle,bs(P,Se,Re,ce,ee,ee+k*.06,k),O.tex.needsUpdate=!0}function Qe(O,D){const{ctx:P,size:k}=O,ee=D.player,ie=k/2,ce=nb,xe=ee.halfHearts<=2;P.clearRect(0,0,k,k),P.fillStyle=ct(xe?He.bodyHurt:He.body),P.strokeStyle=ct(He.outline),P.lineWidth=2,Tn(P,ie,ie,ce,ce*1.05,!0,!0),P.fillStyle=hn(He.shine,.85),Tn(P,ie-ce*.55,ie-ce*.55,ce*.4,ce*.225,!0,!1);const U=xe?.6+.4*Math.abs(Math.sin(D.tick*.25)):1;P.fillStyle=hn(xe?He.danger:He.core,U),ut(P,ie,ie+ce*.35,4.5,!0),P.strokeStyle=hn(He.shine,.9),P.lineWidth=1,ut(P,ie,ie+ce*.35,4.5,!1,!0);const Se=ee.aimX*1.6,Re=ee.aimY*1.6;P.fillStyle=ct(He.eyeWhite),Tn(P,ie-6,ie-4,3.5,4.5,!0,!1),Tn(P,ie+6,ie-4,3.5,4.5,!0,!1),P.fillStyle=ct(He.eyeDark),ut(P,ie-6+Se,ie-4+Re,2.2,!0),ut(P,ie+6+Se,ie-4+Re,2.2,!0),P.fillStyle=ct(He.white),ut(P,ie-5+Se,ie-5+Re,.9,!0),ut(P,ie+7+Se,ie-5+Re,.9,!0),O.tex.needsUpdate=!0}function lt(O,D){const{ctx:P,size:k}=O,ee=k/2,ie=D.tick-D.player.deathTick;P.clearRect(0,0,k,k);const ce=Math.min(1,ie/40);P.fillStyle=hn(He.outline,.4),Tn(P,ee,ee+6,15+10*ce,6+3*ce,!0,!1),P.fillStyle=hn(He.body,.55),Tn(P,ee,ee+6,13+9*ce,5+2.5*ce,!0,!1);const xe=Math.floor(ie/14)%2===0?1:.25;P.fillStyle=hn(He.core,xe),ut(P,ee,ee+3,4.5,!0),P.strokeStyle=hn(He.shine,xe),P.lineWidth=1,ut(P,ee,ee+3,4.5,!1,!0),O.tex.needsUpdate=!0}function Be(O){for(const D of O.enemies)if(!h.has(D.id)){const P=th[D.kind];h.set(D.id,{kind:D.kind,view:jo(i,P.canvas),shadow:Es(i,t,P.shadow[0],P.shadow[1]),prevX:D.x,prevY:D.y,lastMoveTick:-99,dist:0,prevHp:D.hp,hurtStart:-1,spitStart:-1,prevFsm:D.fsm,dirRow:0})}for(const[D,P]of h){const k=O.enemies.find(x=>x.id===D);if(!k){i.remove(P.view.sprite),P.view.sprite.material.map?.dispose(),P.view.sprite.material.dispose(),i.remove(P.shadow),h.delete(D);continue}P.hurtStart>O.tick&&(P.hurtStart=-1),P.spitStart>O.tick&&(P.spitStart=-1),k.fsm==="shoot"&&P.prevFsm!=="shoot"&&(P.spitStart=O.tick),P.prevFsm=k.fsm;const ee=k.x-P.prevX,ie=k.y-P.prevY,ce=Math.hypot(ee,ie);ce>1?P.dist=0:ce>5e-4&&(P.dist+=ce,P.lastMoveTick=O.tick,P.dirRow=Sa(ee,ie)),P.prevX=k.x,P.prevY=k.y,k.hp<P.prevHp&&(P.hurtStart=O.tick),P.prevHp=k.hp,(k.fsm==="aim"||k.fsm==="shoot")&&(P.dirRow=Sa(k.targetX-k.x,k.targetY-k.y)),k.kind==="renacuajo"&&(k.fsm==="windup"||k.fsm==="hop")&&(P.dirRow=Sa(k.facingX,k.facingY)),k.kind==="gorko"&&(k.fsm==="jump_aim"||k.fsm==="volley")&&(P.dirRow=Sa(k.targetX-k.x,k.targetY-k.y));const xe=th[k.kind];let U=1+.05*Math.sin(O.tick*.15);const Se=k.kind!=="mosca_gorda"&&k.kind!=="babosa_acorazada";if(Se&&(k.fsm==="aim"||k.fsm==="swallow_aim")){const x=k.kind==="sapo_doble"?mt.telegraphTicks:Zt.telegraphTicks;U=1+.25*(1-k.timer/x)}Se||(U=1);const Re=xe.world*k.sizeMult;P.view.sprite.scale.set(Re*U,Re,1),P.shadow.scale.setScalar(k.sizeMult);const w=(k.kind==="mosca_gorda"?xe.y+.08*Math.sin(O.tick*.13+k.id*1.7):xe.y)*k.sizeMult;P.view.sprite.position.set(k.x,w,k.y),P.shadow.position.set(k.x,P.shadow.position.y,k.y),ne(P,k,O)}}function ne(O,D,P){const{ctx:k,size:ee}=O.view;switch(k.clearRect(0,0,ee,ee),ue(O,D),D.kind){case"sapo_escupidor":le(O,D,P,e.frog,Zt.telegraphTicks,Zt.aggroRange);break;case"renacuajo":le(O,D,P,e.frog,Jt.windupTicks,Jt.aggroRange);break;case"sapo_doble":le(O,D,P,e.frogPurple,mt.telegraphTicks,mt.aggroRange);break;case"mosca_gorda":ze(O,D,P);break;case"babosa_acorazada":Oe(O,D,P);break;case"gorko":Xe(O,D,P);break}if(D.variant&&(k.globalCompositeOperation="source-atop",k.fillStyle=D.variant==="gigante"?"rgba(224, 70, 40, 0.25)":"rgba(90, 205, 255, 0.25)",k.fillRect(0,0,ee,ee),k.globalCompositeOperation="source-over"),D.hp<D.maxHp){const ie=ee/2,ce=ee*.42,xe=ee*.16;k.fillStyle="rgba(0,0,0,0.5)",k.fillRect(ie-ce/2,xe,ce,3),k.fillStyle=ct(He.danger),k.fillRect(ie-ce/2,xe,ce*D.hp/D.maxHp,3)}O.view.tex.needsUpdate=!0}function ue(O,D){const k={aim:D.kind==="gorko"?ke.tongueAimTicks:D.kind==="sapo_doble"?mt.telegraphTicks:Zt.telegraphTicks,swallow_aim:mt.swallowTelegraphTicks,windup:Jt.windupTicks,jump_aim:ke.jumpAimTicks,summon:ke.summonTicks,volley:ke.volleyAimTicks}[D.fsm];if(!k)return;const{ctx:ee,size:ie}=O.view,ce=ie/2,xe=ie*.3,U=1-D.timer/k;ee.strokeStyle=hn(He.white,.35+.4*U),ee.lineWidth=2,ut(ee,ce,ce,xe+4*(1-U),!1,!0),ee.fillStyle=hn(He.white,.9),ee.fillRect(ce-1.5,ce-xe-12,3,7),ut(ee,ce,ce-xe-3,1.8,!0)}function le(O,D,P,k,ee,ie){const{ctx:ce,size:xe}=O.view,U=xe/2;if(!k||!k.ready){vt(ce,U,xe*.28,D,P);return}const Se=O.hurtStart>=0?P.tick-O.hurtStart:1/0,Re=O.spitStart>=0?P.tick-O.spitStart:1/0;let w,x=O.dirRow;if(Se<ki.frames*ki.ticksPerFrame)x=ki.rowOffset+O.dirRow,w=Math.floor(Se/ki.ticksPerFrame);else if(Re<Jo.frames*Jo.ticksPerFrame)x=ki.rowOffset+O.dirRow,w=Math.floor(Re/Jo.ticksPerFrame);else if(D.fsm==="aim"||D.fsm==="swallow_aim"||D.fsm==="windup"){const W=D.fsm==="aim"?ee:D.fsm==="windup"?Jt.windupTicks:mt.swallowTelegraphTicks,Y=Math.max(1,Math.floor(W/Ts.frames));w=Ts.col+Math.min(Ts.frames-1,Math.floor((W-D.timer)/Y))}else if(D.fsm==="hop"){const W=1-D.timer/Jt.hopTicks;w=ya.col+Math.min(ya.frames-1,Math.floor(W*ya.frames))}else if(P.tick-O.lastMoveTick<=Ma){const W=Math.hypot(P.player.x-D.x,P.player.y-D.y)<=ie,Y=W?ya:Zo,j=W?JS:ih;w=Y.col+Math.floor(O.dist/j)%Y.frames}else w=va.col+Math.floor(P.tick/nh)%va.frames;bs(ce,k,w,x,U,U,xe*.58)}function ze(O,D,P){const{ctx:k,size:ee}=O.view,ie=ee/2,ce=e.bat;if(!ce||!ce.ready){k.fillStyle=ct(He.spitDark),ut(k,ie,ie,ee*.2,!0);return}const xe=Math.floor(P.tick/5)%6,U=xe%4,Se=Math.floor(xe/4);bs(k,ce,U,Se,ie,ie,ee*.62,D.facingX>0);const Re=O.hurtStart>=0?P.tick-O.hurtStart:1/0;Re<8&&(k.fillStyle=`rgba(255,255,255,${.5*(1-Re/8)})`,ut(k,ie,ie,ee*.2,!0))}function Xe(O,D,P){const{ctx:k,size:ee}=O.view,ie=ee/2;if(D.fsm==="airborne")return;const ce=e.frogPurple;if(!ce||!ce.ready){k.fillStyle="#8a4a9a",ut(k,ie,ie,ee*.28,!0);return}if(D.fsm==="belly"){const Re=.35+.2*Math.abs(Math.sin(P.tick*.2)),w=k.createRadialGradient(ie,ie,4,ie,ie,ee*.34);w.addColorStop(0,`rgba(246,215,138,${Re})`),w.addColorStop(1,"rgba(246,215,138,0)"),k.fillStyle=w,ut(k,ie,ie,ee*.34,!0)}const xe=O.hurtStart>=0?P.tick-O.hurtStart:1/0;let U,Se=O.dirRow;if(D.fsm==="belly")Se=ki.rowOffset+O.dirRow,U=2;else if(xe<6)Se=ki.rowOffset+O.dirRow,U=0;else if(D.fsm==="aim"||D.fsm==="jump_aim"||D.fsm==="summon"||D.fsm==="volley"){const w={aim:ke.tongueAimTicks,jump_aim:ke.jumpAimTicks,summon:ke.summonTicks,volley:ke.volleyAimTicks}[D.fsm],x=Math.max(1,Math.floor(w/Ts.frames));U=Ts.col+Math.min(Ts.frames-1,Math.floor((w-D.timer)/x))}else P.tick-O.lastMoveTick<=Ma?U=Zo.col+Math.floor(O.dist/ih)%Zo.frames:U=va.col+Math.floor(P.tick/nh)%va.frames;bs(k,ce,U,Se,ie,ie,ee*.6)}function Oe(O,D,P){const{ctx:k,size:ee}=O.view,ie=ee/2,ce=ZS(D.facingX,D.facingY),xe=O.hurtStart>=0?P.tick-O.hurtStart:1/0;let U=e.babosaIdle,Se=0;e.babosaHurt?.ready&&xe<5*3?(U=e.babosaHurt,Se=Math.floor(xe/3)):e.babosaWalk?.ready&&P.tick-O.lastMoveTick<=Ma?(U=e.babosaWalk,Se=Math.floor(O.dist/.14)%8):e.babosaIdle?.ready&&(Se=Math.floor(P.tick/16)%6),U&&U.ready?bs(k,U,Se,ce,ie,ie,ee*.72):(k.fillStyle="#7a5b3a",ut(k,ie,ie,ee*.26,!0));const Re=Math.atan2(D.facingY,D.facingX);k.strokeStyle="rgba(205,218,228,0.9)",k.lineWidth=3.5,k.beginPath(),k.arc(ie,ie,ee*.28,Re-1.15,Re+1.15),k.stroke()}function vt(O,D,P,k,ee){O.fillStyle=ct(He.toad),O.strokeStyle=ct(He.toadOutline),O.lineWidth=2,Tn(O,D,D,P,P*.85,!0,!0),O.fillStyle=ct(He.toadBelly),Tn(O,D,D+P*.35,P*.65,P*.4,!0,!1);const ie=ee.player.x-k.x,ce=ee.player.y-k.y,xe=Math.hypot(ie,ce)||1,U=ie/xe*1.2,Se=ce/xe*1.2;O.fillStyle=ct(He.eyeWhite),ut(O,D-P*.45,D-P*.7,4,!0),ut(O,D+P*.45,D-P*.7,4,!0),O.fillStyle=ct(He.eyeDark),ut(O,D-P*.45+U,D-P*.7+Se,2,!0),ut(O,D+P*.45+U,D-P*.7+Se,2,!0)}function je(O){for(let D=0;D<p.length;D++){const P=p[D],k=O.shots[D];if(!k){P.sprite.visible=P.trail.visible=P.shadow.visible=!1;continue}P.sprite.visible=P.shadow.visible=!0,P.sprite.material.map=k.owner==="player"?s:k.tags.includes("lengua")?a:r;const ee=.5*(k.radius/Ds);if(P.sprite.scale.set(ee,ee,1),P.sprite.position.set(k.x,.38,k.y),P.shadow.position.set(k.x,P.shadow.position.y,k.y),P.trail.visible=k.owner==="player",P.trail.visible){const ie=Math.hypot(k.vx,k.vy)||1;P.trail.position.set(k.x-k.vx/ie*.28,.38,k.y-k.vy/ie*.28)}}}function ot(O){for(let D=0;D<v.length;D++){const P=v[D],k=O.puddles[D];if(!k){P.visible=!1;continue}P.visible=!0,P.position.x=k.x,P.position.z=k.y,P.material.opacity=Math.min(.5,k.ttl/400)}}return{update:te}}function jo(i,e){const[t,n]=qt(e,e),s=Yt(t),r=new Rs(new Gi({map:s,depthWrite:!1,transparent:!0}));return r.scale.set(e/tl,e/tl,1),r.renderOrder=3,i.add(r),{sprite:r,ctx:n,tex:s,size:e}}function Es(i,e,t,n){const s=new It(new Ci(t,n),new gn({map:e,transparent:!0,depthWrite:!1,opacity:.4}));return s.rotation.x=-Math.PI/2,s.position.y=.02,s.renderOrder=2,i.add(s),s}function sb(){const[i,e]=qt(32,32),t=e.createRadialGradient(16,16,2,16,16,15);t.addColorStop(0,"rgba(0,0,0,0.85)"),t.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=t,e.fillRect(0,0,32,32);const n=Yt(i);return n.magFilter=Rt,n.minFilter=Rt,n}function rb(){const[i,e]=qt(32,20);return e.fillStyle=ct(He.outline),Tn(e,16,10,15,8,!0,!1),e.fillStyle=hn(He.body,.6),Tn(e,16,10,9,4.5,!0,!1),e.fillStyle=hn(He.shine,.35),Tn(e,13,8,3.5,1.6,!0,!1),Yt(i)}function ab(){const[i,e]=qt(16,16);return e.fillStyle=ct(He.body),ut(e,8,8,6,!0),e.fillStyle=ct(He.core),ut(e,7,7,2.5,!0),Yt(i)}function ob(){const[i,e]=qt(16,16);return e.fillStyle=ct(He.spit),ut(e,8,8,5,!0),e.fillStyle=ct(He.spitDark),ut(e,9,9,1.8,!0),Yt(i)}function cb(){const[i,e]=qt(64,64),t=e.createRadialGradient(32,32,4,32,32,30);t.addColorStop(0,"rgba(0,0,0,0.9)"),t.addColorStop(.75,"rgba(0,0,0,0.75)"),t.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=t,e.fillRect(0,0,64,64),e.strokeStyle="rgba(226,75,74,0.9)",e.lineWidth=2.5,e.beginPath(),e.arc(32,32,27,0,Math.PI*2),e.stroke();const n=Yt(i);return n.magFilter=Rt,n.minFilter=Rt,n}function lb(){const[i,e]=qt(16,16);return e.fillStyle="#e07a9a",ut(e,8,8,6.5,!0),e.fillStyle="#b04a6a",ut(e,9,9,2.4,!0),e.strokeStyle="#7a2a44",e.lineWidth=1.2,ut(e,8,8,6.5,!1,!0),Yt(i)}function Qo(i){const[e,t]=qt(16,16),n=8,s=8;return t.fillStyle=ct(He.core),t.beginPath(),t.moveTo(n,s-i),t.lineTo(n+i*.7,s),t.lineTo(n,s+i),t.lineTo(n-i*.7,s),t.closePath(),t.fill(),t.strokeStyle=ct(He.shine),t.lineWidth=1.4,t.stroke(),t.fillStyle="rgba(255,255,255,0.85)",ut(t,n-1.5,s-2,1.1,!0),Yt(e)}function ub(){const[i,e]=qt(16,16);return e.fillStyle=ct(He.danger),e.beginPath(),e.moveTo(8,14),e.bezierCurveTo(2,9,2,4,5.5,3.5),e.bezierCurveTo(7,3.2,8,4.5,8,5.5),e.bezierCurveTo(8,4.5,9,3.2,10.5,3.5),e.bezierCurveTo(14,4,14,9,8,14),e.fill(),e.fillStyle="rgba(255,255,255,0.6)",ut(e,5.5,5.5,1.2,!0),Yt(i)}function db(){const[i,e]=qt(16,16);return e.strokeStyle="#f2c14e",e.lineWidth=2,ut(e,5.5,5.5,3,!1,!0),e.beginPath(),e.moveTo(7.5,7.5),e.lineTo(12.5,12.5),e.moveTo(10.5,10.5),e.lineTo(12,9),e.moveTo(12.5,12.5),e.lineTo(14,11),e.stroke(),Yt(i)}function hb(){const[i,e]=qt(16,16),t=e.createRadialGradient(8,8,1,8,8,7);return t.addColorStop(0,hn(He.shine,.9)),t.addColorStop(1,"rgba(143,212,245,0)"),e.fillStyle=t,e.fillRect(0,0,16,16),Yt(i)}function Tn(i,e,t,n,s,r,a){i.beginPath(),i.ellipse(e,t,n,s,0,0,Math.PI*2),i.fill(),a&&i.stroke()}function ut(i,e,t,n,s,r=!1){i.beginPath(),i.arc(e,t,Math.max(.1,n),0,Math.PI*2),s&&i.fill(),r&&i.stroke()}function hn(i,e){const t=i>>16&255,n=i>>8&255,s=i&255;return`rgba(${t},${n},${s},${e})`}const ah={dano:"daño",cadencia:"caudal",alcance:"alcance",velProyectil:"presión",velMovimiento:"velocidad",suerte:"suerte",corazones:"vida",proyectiles:"chorro(s)",armaduraPorSala:"armadura/sala"},oh={empuje:"más empuje al impactar",rastro_charcos:"deja un rastro de charquitos",dash:"dash con i-frames (Shift)",divide:"los disparos se dividen al impactar",burbuja:"disparos flotantes que persiguen",ver_cofres:"ves el contenido de los cofres"},fb={critico:"crítico ×2",dividir_en_3:"dividirse en 3",burbuja_gigante:"burbuja gigante"},pb={multidisparo:"+2 chorros",prisa:"sprint ×1.5",escudo:"bloquea TODO el daño"},mb={comun:"común",rara:"rara",legendaria:"legendaria"};function Pf(i,e){const t=[];for(const n of i.tags)oh[n]&&t.push(oh[n]);for(const n of i.procs){const s=Math.round(xf(n,e)*100);t.push(`${fb[n.efecto]??n.efecto}: ${s}% (con tu suerte)`)}if(i.usable){const n=Math.round(i.usable.duracionTicks/$i),s=Math.round(i.usable.recargaTicks/$i),r=pb[i.usable.efecto]??i.usable.efecto;t.push(`usable: ${r} durante ${n} s, recarga ${s} s`)}return t}function gb(i,e){const t=[];for(const[n,s]of Object.entries(i.stats))t.push(`${s>0?"+":""}${s} ${ah[n]??n}`);for(const[n,s]of Object.entries(i.mults))t.push(`×${s} ${ah[n]??n}`);return t.push(...Pf(i,e)),t}function ni(i){return Number.isInteger(i)?String(i):i.toFixed(1)}function ch(i,e){const t=[],n=(s,r,a,o=1)=>{const c=(a-r)*o;Math.abs(c)>1e-9&&t.push(`${c>0?"+":"−"}${ni(Math.abs(c))} ${s}`)};return n("daño",i.damage,e.damage),n("caudal",i.fireRate,e.fireRate),n("alcance",i.range,e.range),n("presión",i.shotSpeed,e.shotSpeed),n("velocidad",i.moveSpeed,e.moveSpeed),n("suerte",i.luck,e.luck),n("chorro(s)",i.projectiles,e.projectiles),n("vida",i.maxHalfHearts,e.maxHalfHearts,.5),n("armadura/sala",i.armorPerRoom,e.armorPerRoom),t}const lh="M10 17 C4.5 12.5 1 9 1 5.6 A4.4 4.4 0 0 1 10 4 A4.4 4.4 0 0 1 19 5.6 C19 9 15.5 12.5 10 17 Z";function _b(i,e,t){const n=document.createElement("div");n.className="hud",n.innerHTML=`
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
  `,i.appendChild(n);const s=n.querySelector(".hud-hearts"),r=n.querySelector(".hud-toasts"),a=n.querySelector(".hud-items"),o=n.querySelector(".hud-stats"),c=n.querySelector(".hud-near"),l=n.querySelector(".hud-minimap"),u=n.querySelector(".hud-wallet"),d=n.querySelector(".hud-boss"),h=[...n.querySelectorAll(".hud-usable")],f=[...n.querySelectorAll(".hud-usable-icon")],p=[...n.querySelectorAll(".hud-usable-cd")],v=n.querySelector(".hud-center"),g=n.querySelector(".hud-msg"),m=n.querySelector(".hud-sub"),S=n.querySelector(".hud-seed");let T=-1,_=-1,E=-1,A="",I=-1;const y=["",""],M=[-1,-1];let L="",C="",R="",B="",V="",N="",X=null,H=!0;window.addEventListener("keydown",Z=>{Z.code==="Tab"&&(Z.preventDefault(),H=!H,o.hidden=!H)});function q(Z,oe){const he=document.createElement("div");for(he.className="hud-toast"+(oe==="delta"?" hud-toast-delta":""),he.textContent=Z,r.appendChild(he);r.children.length>6;)r.firstChild?.remove();setTimeout(()=>he.remove(),2600)}function te(Z,oe="#e24b4a",he="#f6a5a4"){const Qe=`<path d="${lh}" fill="rgba(0,0,0,0.45)" stroke="rgba(0,0,0,0.6)" stroke-width="1"/>`,lt=Z===1?' style="clip-path: inset(0 50% 0 0)"':"",Be=Z>0?`<path d="${lh}" fill="${oe}"${lt}/><path d="M6 6.2 A2.4 2.4 0 0 1 9 4.8" stroke="${he}" stroke-width="1.4" fill="none"${lt}/>`:"";return`<svg viewBox="0 0 20 18" class="hud-heart">${Qe}${Be}</svg>`}return{update(Z){const oe=Z.player.halfHearts,he=Z.player.maxHalfHearts,Qe=Z.player.armor;if(oe!==T||he!==_||Qe!==E){T=oe,_=he,E=Qe;const O=Math.ceil(he/2);let D="";for(let P=0;P<O;P++)D+=te(Math.min(2,Math.max(0,oe-P*2)));for(let P=0;P<Math.ceil(Qe/2);P++)D+=te(Math.min(2,Math.max(0,Qe-P*2)),"#9fb8c8","#dfeef7");s.innerHTML=D}if([Z.player.usable,Z.player.usable2].forEach((O,D)=>{const P=O?.itemId??"";if(P!==y[D]&&(y[D]=P,h[D].hidden=!O,O&&(f[D].src=Da(O.itemId))),O){const k=Math.ceil(O.cooldown/$i);k!==M[D]&&(M[D]=k,p[D].textContent=k>0?String(k):""),h[D].classList.toggle("ready",O.cooldown===0),h[D].classList.toggle("active",O.activeTicks>0)}}),Z.status!==A)if(A=Z.status,v.classList.toggle("has-msg",Z.status!=="playing"),Z.status==="victory"){const O=t(),D=O.filter(xe=>xe.type==="enemy_killed").length,P=O.filter(xe=>xe.type==="damage_taken").length,k=O.filter(xe=>xe.type==="heart_collected").length,ee=O.filter(xe=>xe.type==="item_bought").length,ie=Math.floor(Z.tick/3600),ce=Math.floor(Z.tick%3600/60);g.textContent="¡El Pozo superado!",m.innerHTML=`<div class="hud-run-summary"><div>tiempo <b>${ie}:${String(ce).padStart(2,"0")}</b></div><div>abatidos <b>${D}</b> · golpes recibidos <b>${P}</b></div><div>items <b>${Z.player.items.length}</b> · compras <b>${ee}</b> · corazones <b>${k}</b></div><div>cristales <b class="hud-wallet-crystal">◆ ${Z.player.crystals}</b></div><div style="margin-top:6px">R para otra run</div></div>`}else Z.status==="dead"?(g.textContent="Kai se derritió…",m.textContent="R para reintentar"):(g.textContent="",m.textContent="");const lt=Z.player.items.join(",");if(lt!==L){const O=Z.player.items.length>L.split(",").filter(Boolean).length;if(L=lt,a.innerHTML=Z.player.items.map(D=>{const P=vn(D),k=`<b>${P.nombre}</b>`+gb(P,Z.stats.luck).map(ee=>`<div>· ${ee}</div>`).join("");return`<div class="hud-item"><img src="${Da(D)}" alt="${P.nombre}" /><div class="hud-item-tip">${k}</div></div>`}).join(""),O&&X){const D=vn(Z.player.items[Z.player.items.length-1]).nombre;q(D);for(const P of ch(X,Z.stats))q(P,"delta")}}X={...Z.stats};const Be=Z.stats,ne=[Be.maxHalfHearts,Be.damage,Be.fireRate,Be.range,Be.shotSpeed,Be.moveSpeed,Be.luck,Be.projectiles].join("|");if(ne!==C){C=ne;const O=[["❤️","Vida",ni(Be.maxHalfHearts/2),"corazones máximos"],["⚔️","Daño",ni(Be.damage),"daño por proyectil"],["💧","Caudal",`${ni(Be.fireRate)}/s`,"disparos por segundo (cadencia)"],["🏹","Alcance",ni(Be.range),"tiles antes de caer en charco"],["💨","Presión",ni(Be.shotSpeed),"velocidad del proyectil"],["👢","Velocidad",ni(Be.moveSpeed),"velocidad de movimiento"],["🍀","Suerte",ni(Be.luck),"escala los procs y la calidad de drops"],["🔱","Chorros",ni(Be.projectiles),"proyectiles por disparo"]];o.innerHTML='<div class="hud-stats-title">stats · Tab</div>'+O.map(([D,P,k,ee])=>`<div class="hud-stats-row" title="${ee}"><span class="hud-stats-icon">${D}</span><span class="hud-stats-name">${P}</span><span class="hud-stats-value">${k}</span></div>`).join("")}let ue=null,le=1.25;for(const O of Z.pickups){const D=Math.hypot(O.x-Z.player.x,O.y-Z.player.y);D<le&&(le=D,ue=O)}const ze=ue?`${ue.id}:${ue.itemId}:${ue.price?Z.player.crystals>=ue.price?"ok":"no":""}`:"";if(ze!==R&&(R=ze,c.hidden=!ue,ue)){const O=vn(ue.itemId),D=Pf(O,Z.stats.luck).map(ee=>`<div>· ${ee}</div>`).join("");let P="";if(O.categoria!=="usable"){const ee=Ur([...Z.player.items,ue.itemId]),ie=ch(Z.stats,ee);P=ie.length?ie.map(ce=>`<div class="hud-near-diff">${ce}</div>`).join(""):""}const k=ue.price?`<div class="hud-near-price ${Z.player.crystals>=ue.price?"ok":"no"}">◆ ${ue.price} cristales — ${Z.player.crystals>=ue.price?"pulsa E para comprar":"no te alcanza"}</div>`:"";c.innerHTML=`<img src="${Da(O.id)}" alt="" /><div><b>${O.nombre}</b> <span class="hud-near-rar">${mb[O.rareza]}</span>${k}${P}${D}<i>«${O.descripcion}»</i></div>`}const Xe=`${Z.player.crystals}:${Z.player.keys}`;Xe!==V&&(V=Xe,u.innerHTML=`<span class="hud-wallet-crystal">◆</span> ${Z.player.crystals}`+(Z.player.keys>0?` &nbsp;<span class="hud-wallet-key">⚷</span> ${Z.player.keys}`:""));const Oe=Z.enemies.some(O=>O.kind==="gorko"),vt=`${Z.seed}:${Z.floor.level}`;Oe&&N!==vt&&(N=vt,d.hidden=!1,d.innerHTML='<div class="hud-boss-name">GORKO</div><div class="hud-boss-sub">el Sapo Glotón</div>',setTimeout(()=>{d.hidden=!0},2800));const je=`${Z.floor.level}:${Z.floor.current}:`+Z.floor.rooms.map(O=>(O.visited?"v":".")+(O.cleared?"c":".")).join("");if(je!==B){B=je;const O=Z.floor.rooms.filter(Se=>Se.visited),D=new Set;for(const Se of O){D.add(Se.id);for(const Re of Object.values(Se.doors))Re>=0&&D.add(Re)}const P=Z.floor.rooms.filter(Se=>D.has(Se.id)),k=Math.min(...P.map(Se=>Se.gx)),ee=Math.min(...P.map(Se=>Se.gy)),ie={treasure:"♦",shop:"$",boss:"☠"},ce=19;l.innerHTML=P.map(Se=>{const Re=["hud-map-cell",Se.id===Z.floor.current?"current":"",Se.visited?"visited":"known",Se.cleared?"cleared":""].filter(Boolean).join(" "),w=Se.visited||Se.kind!=="boss"?ie[Se.kind]??"":ie.boss;return`<div class="${Re}" style="left:${(Se.gx-k)*ce}px;top:${(Se.gy-ee)*ce}px">${w}</div>`}).join("");const xe=(Math.max(...P.map(Se=>Se.gx))-k+1)*ce,U=(Math.max(...P.map(Se=>Se.gy))-ee+1)*ce;l.style.width=`${xe}px`,l.style.height=`${U}px`}const ot=Z.seed*10+Z.floor.level;ot!==I&&(I=ot,S.textContent=`seed ${Z.seed} · nivel ${Z.floor.level} · sim v${e}`)},onEvents(Z){for(const oe of Z)if(oe.type==="proc_triggered"&&oe.efecto==="critico")q("¡Crítico!");else if(oe.type==="usable_activated"){const he=Ji.get(oe.itemId);q(`¡${he?.nombre??"Usable"}!`)}else oe.type==="item_bought"?q(`Comprado: −${oe.price} ◆`,"delta"):oe.type==="key_collected"?q("Llave del tesoro","delta"):oe.type==="door_unlocked"&&q("El tesoro se abre…","delta")}}}const uh={KeyW:"up",ArrowUp:"up",KeyS:"down",ArrowDown:"down",KeyA:"left",ArrowLeft:"left",KeyD:"right",ArrowRight:"right"};function xb(i,e,t){const n=i.live,s=new kg,r=new Te,a=new Mi(new F(0,1,0),0),o=new F;let c=!1,l=!1,u=!1;window.addEventListener("keydown",f=>{const p=uh[f.code];p?(n[p]=!0,f.preventDefault()):f.code==="Space"?(u=!0,n.use=u||l,f.preventDefault()):f.code==="ShiftLeft"||f.code==="ShiftRight"?n.dash=!0:f.code==="KeyE"?n.interact=!0:f.code==="KeyQ"?n.use2=!0:f.code==="KeyR"&&!f.repeat&&i.reset()}),window.addEventListener("keyup",f=>{const p=uh[f.code];p&&(n[p]=!1),f.code==="Space"&&(u=!1,n.use=u||l),(f.code==="ShiftLeft"||f.code==="ShiftRight")&&(n.dash=!1),f.code==="KeyE"&&(n.interact=!1),f.code==="KeyQ"&&(n.use2=!1)}),window.addEventListener("blur",()=>{n.up=n.down=n.left=n.right=!1,c=l=u=!1,n.fire=n.dash=n.use=n.interact=!1}),e.addEventListener("contextmenu",f=>f.preventDefault());function d(f){const p=e.getBoundingClientRect();p.width===0||p.height===0||(r.set((f.clientX-p.left)/p.width*2-1,-((f.clientY-p.top)/p.height)*2+1),s.setFromCamera(r,t),s.ray.intersectPlane(a,o)&&(n.aimX=o.x,n.aimY=o.z))}const h=()=>document.body.classList.contains("touch-mode");window.addEventListener("pointermove",f=>{h()||d(f)}),window.addEventListener("pointerdown",f=>{h()||(f.button===0?(c=!0,n.fire=!0,d(f)):f.button===2&&(l=!0,n.use=u||l))}),window.addEventListener("pointerup",f=>{h()||(f.button===0?(c=!1,n.fire=c):f.button===2&&(l=!1,n.use=u||l))})}const vb=[[3.5,1],[Ye-3.5,1]],ec=1;function yb(i){i.add(new Mg(16767398,.7));const e=new of(9414856,.22);e.position.set(Ye/2,6,qe+8),e.target.position.set(Ye/2,0,qe/2),i.add(e,e.target);const t=vb.map(([s,r])=>{const a=new Jc(He.torch,12,11,2);a.position.set(s,ec,r+.35),i.add(a);const o=new Rs(new Gi({map:Mb(),blending:nc,depthWrite:!1}));return o.position.set(s,ec+.08,r+.18),o.scale.set(.32,.5,1),i.add(o),{light:a,flame:o,baseY:ec}}),n=new Jc(He.shine,3.2,5,2);return n.position.set(3.5,.7,qe/2),i.add(n),{update(s){const r=.8+.2*Math.sin(s.tick*.31)*Math.sin(s.tick*.13);for(const o of t)o.light.intensity=12*r,o.flame.scale.set(.32,.5*(.85+.3*r),1),o.flame.position.y=o.baseY+.08+.02*r;const a=s.player;if(n.position.set(a.x,.7,a.y),s.status==="dead"){const o=s.tick-a.deathTick;n.intensity=Math.floor(o/14)%2===0?1.8:.6}else n.intensity=3.2}}}function Mb(){const[i,e]=qt(16,24),t=e.createRadialGradient(8,14,1,8,14,10);return t.addColorStop(0,ct(He.torchBright)),t.addColorStop(.45,ct(He.torch)),t.addColorStop(1,"rgba(232,161,60,0)"),e.fillStyle=t,e.fillRect(0,0,16,24),e.fillStyle=ct(He.torch),e.beginPath(),e.moveTo(8,2),e.quadraticCurveTo(12,10,8,16),e.quadraticCurveTo(4,10,8,2),e.fill(),e.fillStyle=ct(He.torchBright),e.beginPath(),e.ellipse(8,13,2.4,4,0,0,Math.PI*2),e.fill(),Yt(i)}const fl={},Wl=[];{const i=new Gl,e=(t,n)=>{i.load(n,s=>{fl[t]={scene:s.scene,animations:s.animations};for(const r of Wl)r()})};e("puerta","assets/models/portal_puerta.glb"),e("reja","assets/models/portal_reja.glb")}let Na=null;new Gl().load("assets/models/trampilla_escalera.glb",e=>{Na=e.scene;for(const t of Wl)t()});const Sb={1:16777215,2:15919832,3:13625544,4:15519936,5:12563672},dh=40,bb=55,tc=1.15,Tb=1.45,Eb=1.9,hh=.1,fh=.6,Ab=1.15,wb=.9,Rb=.45;function Cb(){const i=new tm;i.background=new We(He.dungeonBg);const e=new Rl(He.dungeonBg,14,30);i.fog=e;const t=Pb(i),n=new F(Ye/2,0,qe/2),s=new jt(dh,1,.1,100),r=new F,a=Xc.degToRad(bb),o=new F(n.x,0,n.z);let c=20,l=Ye/2,u=qe/2,d=960,h=576,f=!1;function p(){r.set(o.x,c*Math.sin(a),o.z+c*Math.cos(a)),s.position.copy(r),s.lookAt(o)}function v(S,T){d=S,h=T,s.aspect=S/Math.max(1,T);const _=Math.tan(Xc.degToRad(dh/2)),E=_*s.aspect,A=(Ye/2+tc)/E,I=(qe/2+tc)*Math.sin(a)/_+(qe/2+tc)*Math.cos(a);f=document.body.classList.contains("touch-mode"),c=Math.max(A,I)/(f?Eb:Tb),l=E*c,u=_*c/Math.sin(a),e.near=c-2,e.far=c+15,p(),s.updateProjectionMatrix()}function g(S,T,_){const E=T-fh,A=_-T+fh;return E>=A?_/2:Math.min(A,Math.max(E,S))}function m(S){document.body.classList.contains("touch-mode")!==f&&v(d,h);const T=g(S.player.x,l,Ye),_=g(S.player.y,u,qe);o.x+=(T-o.x)*hh,o.z+=(_-o.z)*hh,p()}return{scene:i,camera:s,center:n,cameraHome:r,resize:v,updateRoom:S=>{t.update(S),m(S)}}}function Pb(i){const e=VS(Ye,qe),t=new Wi({map:e.texture,roughness:.92,metalness:0}),n=new Ci(Ye,qe),s=1.7,r=new $h;r.moveTo(-Ye/2,-qe/2),r.lineTo(Ye/2,-qe/2),r.lineTo(Ye/2,qe/2),r.lineTo(-Ye/2,qe/2);const a=new Kc;a.moveTo(-s/2,-s/2),a.lineTo(s/2,-s/2),a.lineTo(s/2,s/2),a.lineTo(-s/2,s/2),r.holes.push(a);const o=new Ol(r);{const M=o.attributes.uv,L=o.attributes.position;for(let C=0;C<M.count;C++)M.setXY(C,(L.getX(C)+Ye/2)/Ye,(L.getY(C)+qe/2)/qe)}const c=new It(n,t);c.rotation.x=-Math.PI/2,c.position.set(Ye/2,0,qe/2),i.add(c);const l=new Map;function u(M){const L=Math.max(1,Math.round(M));let C=l.get(L);return C||(C=new Wi({map:Qd(L,2),roughness:1,metalness:0}),l.set(L,C)),C}const d=new Map;function h(M){const L=Math.max(1,Math.round(M));let C=d.get(L);return C||(C=new Wi({map:Qd(L,1),roughness:1,metalness:0}),d.set(L,C)),C}const f=new gn({color:He.torch}),p=new An;i.add(p);const v=[],g=new Bg;let m=null,S="";Wl.push(()=>{S=""});function T(){for(const M of[...p.children])p.remove(M),M.traverse(L=>{L instanceof It&&L.geometry.dispose()});v.length=0,m=null}function _(M,L,C,R,B,V){const N=new It(new Ri(M,L,C),V);return N.position.set(R,L/2,B),p.add(N),N}function E(M,L){const C=M==="n"?Ab:M==="s"?Rb:wb,R=M==="n"||M==="s",B=M==="n"?.5:qe-.5,V=M==="w"?.5:Ye-.5,N=R?Ye/2:qe/2,X=R?Ye:qe-2,H=R?0:1;if(!L){R?_(X,C,1,Ye/2,B,u(X)):_(1,C,X,V,qe/2,u(X));return}const q=N-Ai-H,te=H+X-(N+Ai);R?(_(q,C,1,H+q/2,B,u(q)),_(te,C,1,N+Ai+te/2,B,u(te))):(_(1,C,q,V,H+q/2,u(q)),_(1,C,te,V,N+Ai+te/2,u(te)))}function A(M,L){const C=L==="puerta"?fl.puerta:fl.reja;if(!C)return;const R=C.scene.clone(!0),V=new Qt().setFromObject(C.scene).getSize(new F),N=2.6/Math.max(.001,V.x);R.scale.setScalar(N);const X=new Qt().setFromObject(R),H=X.getCenter(new F);R.position.sub(new F(H.x,X.min.y,H.z));const q=new An;q.add(R);const Z=M==="n"||M==="s"?Ye/2:qe/2;M==="n"&&q.position.set(Z,0,.55),M==="s"&&q.position.set(Z,0,qe-.55),M==="e"&&(q.position.set(Ye-.55,0,Z),q.rotation.y=-Math.PI/2),M==="w"&&(q.position.set(.55,0,Z),q.rotation.y=Math.PI/2),p.add(q);const oe={side:M,variant:L,wrapper:q,mixer:null,clips:null,barsNode:null,barsY0:0,open:null};L==="puerta"&&C.animations.length?(oe.mixer=new Fg(R),oe.clips=C.animations):(R.traverse(he=>{he.name==="gate"&&(oe.barsNode=he)}),oe.barsNode&&(oe.barsY0=oe.barsNode.position.y)),v.push(oe)}function I(M,L,C){if(M.mixer&&M.clips){const R=Wa.findByName(M.clips,L?"open":"close");if(!R)return;M.mixer.stopAllAction();const B=M.mixer.clipAction(R);B.setLoop(Ih,1),B.clampWhenFinished=!0,B.play(),C&&M.mixer.update(R.duration)}}function y(M){T();const L=M.floor.rooms[M.floor.current],C=Sb[M.floor.level]??16777215;t.color.setHex(C),e.repaint(L.seed);for(const R of["n","s","e","w"]){const B=L.doors[R];if(E(R,B>=0),B>=0){const V=M.floor.rooms[B].locked;A(R,V?"reja":"puerta")}}for(const R of M.obstacles)R.invisible||_(R.w,.55,R.h,R.x+R.w/2,R.y+R.h/2,h(R.w));if(L.kind==="boss"){const R=new An,B=new It(new Ri(1.7,.05,1.7),new gn({color:262657}));if(B.position.set(Ye/2,-1.3,qe/2),R.add(B),Na){const N=Na.clone(!0),H=new Qt().setFromObject(Na).getSize(new F),q=1.55/Math.max(.001,Math.max(H.x,H.z));N.scale.setScalar(q);const te=new Qt().setFromObject(N),Z=te.getCenter(new F);N.position.sub(new F(Z.x,te.min.y,Z.z)),N.position.y-=H.y*q-.04,R.add(N),N.position.x+=Ye/2,N.position.z+=qe/2}const V=new It(new Ul(.95,1.05,24),f);V.rotation.x=-Math.PI/2,V.position.set(Ye/2,.013,qe/2),R.add(V),R.visible=!1,p.add(R),m=R}for(const R of l.values())R.color.setHex(C);for(const R of d.values())R.color.setHex(C),R.color.multiplyScalar(1.18)}return{update(M){const L=`${M.seed}:${M.floor.level}:${M.floor.current}`;L!==S&&(S=L,y(M));const C=g.getDelta(),R=M.floor.rooms[M.floor.current];for(const N of v){const X=R.doors[N.side],H=X>=0&&M.floor.rooms[X].locked,q=R.cleared&&!H;if(N.variant==="puerta")N.open===null?I(N,q,!0):q!==N.open&&I(N,q,!1),N.mixer?.update(C);else if(N.barsNode){const te=N.barsY0+(q?.9:0);N.open===null?N.barsNode.position.y=te:N.barsNode.position.y+=(te-N.barsNode.position.y)*.08}N.open=q}m&&(m.visible=M.floor.trapdoorOpen);const V=R.kind==="boss"&&M.floor.trapdoorOpen?o:n;c.geometry!==V&&(c.geometry=V)}}}function Ib(i,e){const t=JM(),n=$M(e,cl(t));YM(n,Ia);const s=new Uy({antialias:!1});s.setPixelRatio(1),i.appendChild(s.domElement);const r=Cb(),a=yb(r.scene),o=ib(r.scene,BS());xb(n,s.domElement,r.camera);const c=_b(i,Ia,()=>n.telemetry),l=sS(n,r),u=eS(i),d=tS(i,n,t,Ia);let h=null;function f(m){if(m&&!h&&(h=iS(i,n)),document.body.classList.toggle("touch-mode",m),!m){const S=n.live;S.left=S.right=S.up=S.down=S.fire=!1}}nS()?f(!0):new URLSearchParams(location.search).get("touch")!=="0"&&(window.addEventListener("touchstart",()=>f(!0)),window.addEventListener("pointermove",m=>{m.pointerType==="mouse"&&document.body.classList.contains("touch-mode")&&f(!1)}));function p(){const m=i.clientWidth||960,S=i.clientHeight||576;s.setSize(m,S),r.resize(m,S)}new ResizeObserver(p).observe(i),p();let v=performance.now();function g(m){const S=m-v;v=m;const T=n.frame(S);l.onEvents(T),c.onEvents(T),u.onEvents(T),r.updateRoom(n.sim.state),a.update(n.sim.state),o.update(n.sim.state),c.update(n.sim.state),d.update(n.sim.state),u.update(n.sim.state),h?.update(n.sim.state),l.update(S,r.camera),s.render(r.scene,r.camera),requestAnimationFrame(g)}requestAnimationFrame(g)}const Lb=new URLSearchParams(location.search),ph=Lb.get("seed"),If=ph!==null?Number(ph)>>>0:Date.now()>>>0;Ib(document.getElementById("game"),If);console.info(`%cKai · Fase 0.5 · seed=${If} · API de tester en window.__game`,"color:#e8a13c");
