(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Go="185",lu=0,bl=1,cu=2,Es=1,du=2,Ur=3,di=0,Yt=1,Bn=2,Hn=0,lr=1,ka=2,El=3,Tl=4,uu=5,Mi=100,fu=101,hu=102,pu=103,mu=104,gu=200,_u=201,xu=202,vu=203,Ba=204,za=205,Mu=206,yu=207,Su=208,bu=209,Eu=210,Tu=211,wu=212,Au=213,Ru=214,Ha=0,Ga=1,Va=2,hr=3,Wa=4,Xa=5,qa=6,Ya=7,rd=0,Cu=1,Pu=2,Rn=0,sd=1,ad=2,od=3,ld=4,cd=5,dd=6,ud=7,fd=300,Ti=301,pr=302,$s=303,Ks=304,Gs=306,$a=1e3,zn=1001,Ka=1002,bt=1003,Iu=1004,$r=1005,Ct=1006,Zs=1007,Si=1008,Qt=1009,hd=1010,pd=1011,Br=1012,Vo=1013,Pn=1014,wn=1015,Wn=1016,Wo=1017,Xo=1018,zr=1020,md=35902,gd=35899,_d=1021,xd=1022,fn=1023,Xn=1026,bi=1027,vd=1028,qo=1029,wi=1030,Yo=1031,$o=1033,Ts=33776,ws=33777,As=33778,Rs=33779,Za=35840,Ja=35841,Qa=35842,ja=35843,eo=36196,to=37492,no=37496,io=37488,ro=37489,Ds=37490,so=37491,ao=37808,oo=37809,lo=37810,co=37811,uo=37812,fo=37813,ho=37814,po=37815,mo=37816,go=37817,_o=37818,xo=37819,vo=37820,Mo=37821,yo=36492,So=36494,bo=36495,Eo=36283,To=36284,Us=36285,wo=36286,Lu=3200,Ao=0,Du=1,si="",Wt="srgb",Ns="srgb-linear",Fs="linear",ct="srgb",Fi=7680,wl=519,Uu=512,Nu=513,Fu=514,Ko=515,Ou=516,ku=517,Zo=518,Bu=519,Ro=35044,Al="300 es",An=2e3,Hr=2001;function zu(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Gr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Hu(){const n=Gr("canvas");return n.style.display="block",n}const Rl={};function Os(...n){const e="THREE."+n.shift();console.log(e,...n)}function Md(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function He(...n){n=Md(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function et(...n){n=Md(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function cr(...n){const e=n.join(" ");e in Rl||(Rl[e]=!0,He(...n))}function Gu(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}const Vu={[Ha]:Ga,[Va]:qa,[Wa]:Ya,[hr]:Xa,[Ga]:Ha,[qa]:Va,[Ya]:Wa,[Xa]:hr};class Pi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Bt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Cl=1234567;const Fr=Math.PI/180,Vr=180/Math.PI;function Gn(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Bt[n&255]+Bt[n>>8&255]+Bt[n>>16&255]+Bt[n>>24&255]+"-"+Bt[e&255]+Bt[e>>8&255]+"-"+Bt[e>>16&15|64]+Bt[e>>24&255]+"-"+Bt[t&63|128]+Bt[t>>8&255]+"-"+Bt[t>>16&255]+Bt[t>>24&255]+Bt[i&255]+Bt[i>>8&255]+Bt[i>>16&255]+Bt[i>>24&255]).toLowerCase()}function Qe(n,e,t){return Math.max(e,Math.min(t,n))}function Jo(n,e){return(n%e+e)%e}function Wu(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function Xu(n,e,t){return n!==e?(t-n)/(e-n):0}function Or(n,e,t){return(1-t)*n+t*e}function qu(n,e,t,i){return Or(n,e,1-Math.exp(-t*i))}function Yu(n,e=1){return e-Math.abs(Jo(n,e*2)-e)}function $u(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Ku(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Zu(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Ju(n,e){return n+Math.random()*(e-n)}function Qu(n){return n*(.5-Math.random())}function ju(n){n!==void 0&&(Cl=n);let e=Cl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function ef(n){return n*Fr}function tf(n){return n*Vr}function nf(n){return(n&n-1)===0&&n!==0}function rf(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function sf(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function af(n,e,t,i,r){const s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+i)/2),u=a((e+i)/2),f=s((e-i)/2),d=a((e-i)/2),h=s((i-e)/2),_=a((i-e)/2);switch(r){case"XYX":n.set(o*u,l*f,l*d,o*c);break;case"YZY":n.set(l*d,o*u,l*f,o*c);break;case"ZXZ":n.set(l*f,l*d,o*u,o*c);break;case"XZX":n.set(o*u,l*_,l*h,o*c);break;case"YXY":n.set(l*h,o*u,l*_,o*c);break;case"ZYZ":n.set(l*_,l*h,o*u,o*c);break;default:He("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function un(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function dt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Pl={DEG2RAD:Fr,RAD2DEG:Vr,generateUUID:Gn,clamp:Qe,euclideanModulo:Jo,mapLinear:Wu,inverseLerp:Xu,lerp:Or,damp:qu,pingpong:Yu,smoothstep:$u,smootherstep:Ku,randInt:Zu,randFloat:Ju,randFloatSpread:Qu,seededRandom:ju,degToRad:ef,radToDeg:tf,isPowerOfTwo:nf,ceilPowerOfTwo:rf,floorPowerOfTwo:sf,setQuaternionFromProperEuler:af,normalize:dt,denormalize:un},cl=class cl{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Qe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};cl.prototype.isVector2=!0;let We=cl;class xr{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3],d=s[a+0],h=s[a+1],_=s[a+2],b=s[a+3];if(f!==b||l!==d||c!==h||u!==_){let m=l*d+c*h+u*_+f*b;m<0&&(d=-d,h=-h,_=-_,b=-b,m=-m);let p=1-o;if(m<.9995){const S=Math.acos(m),I=Math.sin(S);p=Math.sin(p*S)/I,o=Math.sin(o*S)/I,l=l*p+d*o,c=c*p+h*o,u=u*p+_*o,f=f*p+b*o}else{l=l*p+d*o,c=c*p+h*o,u=u*p+_*o,f=f*p+b*o;const S=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=S,c*=S,u*=S,f*=S}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[a],d=s[a+1],h=s[a+2],_=s[a+3];return e[t]=o*_+u*f+l*h-c*d,e[t+1]=l*_+u*d+c*f-o*h,e[t+2]=c*_+u*h+o*d-l*f,e[t+3]=u*_-o*f-l*d-c*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(r/2),f=o(s/2),d=l(i/2),h=l(r/2),_=l(s/2);switch(a){case"XYZ":this._x=d*u*f+c*h*_,this._y=c*h*f-d*u*_,this._z=c*u*_+d*h*f,this._w=c*u*f-d*h*_;break;case"YXZ":this._x=d*u*f+c*h*_,this._y=c*h*f-d*u*_,this._z=c*u*_-d*h*f,this._w=c*u*f+d*h*_;break;case"ZXY":this._x=d*u*f-c*h*_,this._y=c*h*f+d*u*_,this._z=c*u*_+d*h*f,this._w=c*u*f-d*h*_;break;case"ZYX":this._x=d*u*f-c*h*_,this._y=c*h*f+d*u*_,this._z=c*u*_-d*h*f,this._w=c*u*f+d*h*_;break;case"YZX":this._x=d*u*f+c*h*_,this._y=c*h*f+d*u*_,this._z=c*u*_-d*h*f,this._w=c*u*f-d*h*_;break;case"XZY":this._x=d*u*f-c*h*_,this._y=c*h*f-d*u*_,this._z=c*u*_+d*h*f,this._w=c*u*f+d*h*_;break;default:He("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],f=t[10],d=i+o+f;if(d>0){const h=.5/Math.sqrt(d+1);this._w=.25/h,this._x=(u-l)*h,this._y=(s-c)*h,this._z=(a-r)*h}else if(i>o&&i>f){const h=2*Math.sqrt(1+i-o-f);this._w=(u-l)/h,this._x=.25*h,this._y=(r+a)/h,this._z=(s+c)/h}else if(o>f){const h=2*Math.sqrt(1+o-i-f);this._w=(s-c)/h,this._x=(r+a)/h,this._y=.25*h,this._z=(l+u)/h}else{const h=2*Math.sqrt(1+f-i-o);this._w=(a-r)/h,this._x=(s+c)/h,this._y=(l+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Qe(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-i*c,this._z=s*u+a*c+i*l-r*o,this._w=a*u-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const dl=class dl{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Il.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Il.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),u=2*(o*t-s*r),f=2*(s*i-a*t);return this.x=t+l*c+a*f-o*u,this.y=i+l*u+o*c-s*f,this.z=r+l*f+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this.z=Qe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this.z=Qe(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Qe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Js.copy(this).projectOnVector(e),this.sub(Js)}reflect(e){return this.sub(Js.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};dl.prototype.isVector3=!0;let G=dl;const Js=new G,Il=new xr,ul=class ul{constructor(e,t,i,r,s,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c)}set(e,t,i,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],f=i[7],d=i[2],h=i[5],_=i[8],b=r[0],m=r[3],p=r[6],S=r[1],I=r[4],x=r[7],w=r[2],E=r[5],C=r[8];return s[0]=a*b+o*S+l*w,s[3]=a*m+o*I+l*E,s[6]=a*p+o*x+l*C,s[1]=c*b+u*S+f*w,s[4]=c*m+u*I+f*E,s[7]=c*p+u*x+f*C,s[2]=d*b+h*S+_*w,s[5]=d*m+h*I+_*E,s[8]=d*p+h*x+_*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-i*s*u+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=u*a-o*c,d=o*l-u*s,h=c*s-a*l,_=t*f+i*d+r*h;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/_;return e[0]=f*b,e[1]=(r*c-u*i)*b,e[2]=(o*i-r*a)*b,e[3]=d*b,e[4]=(u*t-r*l)*b,e[5]=(r*s-o*t)*b,e[6]=h*b,e[7]=(i*l-c*t)*b,e[8]=(a*t-i*s)*b,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return cr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Qs.makeScale(e,t)),this}rotate(e){return cr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Qs.makeRotation(-e)),this}translate(e,t){return cr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Qs.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};ul.prototype.isMatrix3=!0;let Ve=ul;const Qs=new Ve,Ll=new Ve().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Dl=new Ve().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function of(){const n={enabled:!0,workingColorSpace:Ns,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===ct&&(r.r=Vn(r.r),r.g=Vn(r.g),r.b=Vn(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ct&&(r.r=dr(r.r),r.g=dr(r.g),r.b=dr(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===si?Fs:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return cr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return cr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Ns]:{primaries:e,whitePoint:i,transfer:Fs,toXYZ:Ll,fromXYZ:Dl,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Wt},outputColorSpaceConfig:{drawingBufferColorSpace:Wt}},[Wt]:{primaries:e,whitePoint:i,transfer:ct,toXYZ:Ll,fromXYZ:Dl,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Wt}}}),n}const tt=of();function Vn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function dr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Oi;class lf{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Oi===void 0&&(Oi=Gr("canvas")),Oi.width=e.width,Oi.height=e.height;const r=Oi.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Oi}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Gr("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Vn(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Vn(t[i]/255)*255):t[i]=Vn(t[i]);return{data:t,width:e.width,height:e.height}}else return He("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let cf=0;class Qo{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:cf++}),this.uuid=Gn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(js(r[a].image)):s.push(js(r[a]))}else s=js(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function js(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?lf.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(He("Texture: Unable to serialize Texture."),{})}let df=0;const ea=new G;class Nt extends Pi{constructor(e=Nt.DEFAULT_IMAGE,t=Nt.DEFAULT_MAPPING,i=zn,r=zn,s=Ct,a=Si,o=fn,l=Qt,c=Nt.DEFAULT_ANISOTROPY,u=si){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:df++}),this.uuid=Gn(),this.name="",this.source=new Qo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new We(0,0),this.repeat=new We(1,1),this.center=new We(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ve,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(ea).x}get height(){return this.source.getSize(ea).y}get depth(){return this.source.getSize(ea).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){He(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){He(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==fd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case $a:e.x=e.x-Math.floor(e.x);break;case zn:e.x=e.x<0?0:1;break;case Ka:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case $a:e.y=e.y-Math.floor(e.y);break;case zn:e.y=e.y<0?0:1;break;case Ka:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Nt.DEFAULT_IMAGE=null;Nt.DEFAULT_MAPPING=fd;Nt.DEFAULT_ANISOTROPY=1;const fl=class fl{constructor(e=0,t=0,i=0,r=1){this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],d=l[1],h=l[5],_=l[9],b=l[2],m=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-b)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+b)<.1&&Math.abs(_+m)<.1&&Math.abs(c+h+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const I=(c+1)/2,x=(h+1)/2,w=(p+1)/2,E=(u+d)/4,C=(f+b)/4,v=(_+m)/4;return I>x&&I>w?I<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(I),r=E/i,s=C/i):x>w?x<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),i=E/r,s=v/r):w<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(w),i=C/s,r=v/s),this.set(i,r,s,t),this}let S=Math.sqrt((m-_)*(m-_)+(f-b)*(f-b)+(d-u)*(d-u));return Math.abs(S)<.001&&(S=1),this.x=(m-_)/S,this.y=(f-b)/S,this.z=(d-u)/S,this.w=Math.acos((c+h+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this.z=Qe(this.z,e.z,t.z),this.w=Qe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this.z=Qe(this.z,e,t),this.w=Qe(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Qe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};fl.prototype.isVector4=!0;let St=fl;class uf extends Pi{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ct,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new St(0,0,e,t),this.scissorTest=!1,this.viewport=new St(0,0,e,t),this.textures=[];const r={width:e,height:t,depth:i.depth},s=new Nt(r),a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Ct,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Qo(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Cn extends uf{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class yd extends Nt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=bt,this.minFilter=bt,this.wrapR=zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class ff extends Nt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=bt,this.minFilter=bt,this.wrapR=zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Hs=class Hs{constructor(e,t,i,r,s,a,o,l,c,u,f,d,h,_,b,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c,u,f,d,h,_,b,m)}set(e,t,i,r,s,a,o,l,c,u,f,d,h,_,b,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=s,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=f,p[14]=d,p[3]=h,p[7]=_,p[11]=b,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Hs().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,i=e.elements,r=1/ki.setFromMatrixColumn(e,0).length(),s=1/ki.setFromMatrixColumn(e,1).length(),a=1/ki.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=a*u,h=a*f,_=o*u,b=o*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=h+_*c,t[5]=d-b*c,t[9]=-o*l,t[2]=b-d*c,t[6]=_+h*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*u,h=l*f,_=c*u,b=c*f;t[0]=d+b*o,t[4]=_*o-h,t[8]=a*c,t[1]=a*f,t[5]=a*u,t[9]=-o,t[2]=h*o-_,t[6]=b+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*u,h=l*f,_=c*u,b=c*f;t[0]=d-b*o,t[4]=-a*f,t[8]=_+h*o,t[1]=h+_*o,t[5]=a*u,t[9]=b-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*u,h=a*f,_=o*u,b=o*f;t[0]=l*u,t[4]=_*c-h,t[8]=d*c+b,t[1]=l*f,t[5]=b*c+d,t[9]=h*c-_,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,h=a*c,_=o*l,b=o*c;t[0]=l*u,t[4]=b-d*f,t[8]=_*f+h,t[1]=f,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=h*f+_,t[10]=d-b*f}else if(e.order==="XZY"){const d=a*l,h=a*c,_=o*l,b=o*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=d*f+b,t[5]=a*u,t[9]=h*f-_,t[2]=_*f-h,t[6]=o*u,t[10]=b*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(hf,e,pf)}lookAt(e,t,i){const r=this.elements;return Kt.subVectors(e,t),Kt.lengthSq()===0&&(Kt.z=1),Kt.normalize(),Zn.crossVectors(i,Kt),Zn.lengthSq()===0&&(Math.abs(i.z)===1?Kt.x+=1e-4:Kt.z+=1e-4,Kt.normalize(),Zn.crossVectors(i,Kt)),Zn.normalize(),Kr.crossVectors(Kt,Zn),r[0]=Zn.x,r[4]=Kr.x,r[8]=Kt.x,r[1]=Zn.y,r[5]=Kr.y,r[9]=Kt.y,r[2]=Zn.z,r[6]=Kr.z,r[10]=Kt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],f=i[5],d=i[9],h=i[13],_=i[2],b=i[6],m=i[10],p=i[14],S=i[3],I=i[7],x=i[11],w=i[15],E=r[0],C=r[4],v=r[8],M=r[12],P=r[1],R=r[5],U=r[9],H=r[13],Y=r[2],B=r[6],K=r[10],V=r[14],ee=r[3],oe=r[7],Z=r[11],de=r[15];return s[0]=a*E+o*P+l*Y+c*ee,s[4]=a*C+o*R+l*B+c*oe,s[8]=a*v+o*U+l*K+c*Z,s[12]=a*M+o*H+l*V+c*de,s[1]=u*E+f*P+d*Y+h*ee,s[5]=u*C+f*R+d*B+h*oe,s[9]=u*v+f*U+d*K+h*Z,s[13]=u*M+f*H+d*V+h*de,s[2]=_*E+b*P+m*Y+p*ee,s[6]=_*C+b*R+m*B+p*oe,s[10]=_*v+b*U+m*K+p*Z,s[14]=_*M+b*H+m*V+p*de,s[3]=S*E+I*P+x*Y+w*ee,s[7]=S*C+I*R+x*B+w*oe,s[11]=S*v+I*U+x*K+w*Z,s[15]=S*M+I*H+x*V+w*de,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],f=e[6],d=e[10],h=e[14],_=e[3],b=e[7],m=e[11],p=e[15],S=l*h-c*d,I=o*h-c*f,x=o*d-l*f,w=a*h-c*u,E=a*d-l*u,C=a*f-o*u;return t*(b*S-m*I+p*x)-i*(_*S-m*w+p*E)+r*(_*I-b*w+p*C)-s*(_*x-b*E+m*C)}determinantAffine(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[1],a=e[5],o=e[9],l=e[2],c=e[6],u=e[10];return t*(a*u-o*c)-i*(s*u-o*l)+r*(s*c-a*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=e[9],d=e[10],h=e[11],_=e[12],b=e[13],m=e[14],p=e[15],S=t*o-i*a,I=t*l-r*a,x=t*c-s*a,w=i*l-r*o,E=i*c-s*o,C=r*c-s*l,v=u*b-f*_,M=u*m-d*_,P=u*p-h*_,R=f*m-d*b,U=f*p-h*b,H=d*p-h*m,Y=S*H-I*U+x*R+w*P-E*M+C*v;if(Y===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/Y;return e[0]=(o*H-l*U+c*R)*B,e[1]=(r*U-i*H-s*R)*B,e[2]=(b*C-m*E+p*w)*B,e[3]=(d*E-f*C-h*w)*B,e[4]=(l*P-a*H-c*M)*B,e[5]=(t*H-r*P+s*M)*B,e[6]=(m*x-_*C-p*I)*B,e[7]=(u*C-d*x+h*I)*B,e[8]=(a*U-o*P+c*v)*B,e[9]=(i*P-t*U-s*v)*B,e[10]=(_*E-b*x+p*S)*B,e[11]=(f*x-u*E-h*S)*B,e[12]=(o*M-a*R-l*v)*B,e[13]=(t*R-i*M+r*v)*B,e[14]=(b*I-_*w-m*S)*B,e[15]=(u*w-f*I+d*S)*B,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+i,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,f=o+o,d=s*c,h=s*u,_=s*f,b=a*u,m=a*f,p=o*f,S=l*c,I=l*u,x=l*f,w=i.x,E=i.y,C=i.z;return r[0]=(1-(b+p))*w,r[1]=(h+x)*w,r[2]=(_-I)*w,r[3]=0,r[4]=(h-x)*E,r[5]=(1-(d+p))*E,r[6]=(m+S)*E,r[7]=0,r[8]=(_+I)*C,r[9]=(m-S)*C,r[10]=(1-(d+b))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinantAffine();if(s===0)return i.set(1,1,1),t.identity(),this;let a=ki.set(r[0],r[1],r[2]).length();const o=ki.set(r[4],r[5],r[6]).length(),l=ki.set(r[8],r[9],r[10]).length();s<0&&(a=-a),an.copy(this);const c=1/a,u=1/o,f=1/l;return an.elements[0]*=c,an.elements[1]*=c,an.elements[2]*=c,an.elements[4]*=u,an.elements[5]*=u,an.elements[6]*=u,an.elements[8]*=f,an.elements[9]*=f,an.elements[10]*=f,t.setFromRotationMatrix(an),i.x=a,i.y=o,i.z=l,this}makePerspective(e,t,i,r,s,a,o=An,l=!1){const c=this.elements,u=2*s/(t-e),f=2*s/(i-r),d=(t+e)/(t-e),h=(i+r)/(i-r);let _,b;if(l)_=s/(a-s),b=a*s/(a-s);else if(o===An)_=-(a+s)/(a-s),b=-2*a*s/(a-s);else if(o===Hr)_=-a/(a-s),b=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=f,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=b,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=An,l=!1){const c=this.elements,u=2/(t-e),f=2/(i-r),d=-(t+e)/(t-e),h=-(i+r)/(i-r);let _,b;if(l)_=1/(a-s),b=a/(a-s);else if(o===An)_=-2/(a-s),b=-(a+s)/(a-s);else if(o===Hr)_=-1/(a-s),b=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=f,c[9]=0,c[13]=h,c[2]=0,c[6]=0,c[10]=_,c[14]=b,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};Hs.prototype.isMatrix4=!0;let yt=Hs;const ki=new G,an=new yt,hf=new G(0,0,0),pf=new G(1,1,1),Zn=new G,Kr=new G,Kt=new G,Ul=new yt,Nl=new xr;class ui{constructor(e=0,t=0,i=0,r=ui.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],f=r[2],d=r[6],h=r[10];switch(t){case"XYZ":this._y=Math.asin(Qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Qe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Qe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,h),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Qe(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,h),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Qe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,h));break;case"XZY":this._z=Math.asin(-Qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,h),this._y=0);break;default:He("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Ul.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ul,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Nl.setFromEuler(this),this.setFromQuaternion(Nl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ui.DEFAULT_ORDER="XYZ";class jo{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let mf=0;const Fl=new G,Bi=new xr,Ln=new yt,Zr=new G,yr=new G,gf=new G,_f=new xr,Ol=new G(1,0,0),kl=new G(0,1,0),Bl=new G(0,0,1),zl={type:"added"},xf={type:"removed"},zi={type:"childadded",child:null},ta={type:"childremoved",child:null};class qt extends Pi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:mf++}),this.uuid=Gn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=qt.DEFAULT_UP.clone();const e=new G,t=new ui,i=new xr,r=new G(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new yt},normalMatrix:{value:new Ve}}),this.matrix=new yt,this.matrixWorld=new yt,this.matrixAutoUpdate=qt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new jo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Bi.setFromAxisAngle(e,t),this.quaternion.multiply(Bi),this}rotateOnWorldAxis(e,t){return Bi.setFromAxisAngle(e,t),this.quaternion.premultiply(Bi),this}rotateX(e){return this.rotateOnAxis(Ol,e)}rotateY(e){return this.rotateOnAxis(kl,e)}rotateZ(e){return this.rotateOnAxis(Bl,e)}translateOnAxis(e,t){return Fl.copy(e).applyQuaternion(this.quaternion),this.position.add(Fl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ol,e)}translateY(e){return this.translateOnAxis(kl,e)}translateZ(e){return this.translateOnAxis(Bl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ln.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Zr.copy(e):Zr.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),yr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ln.lookAt(yr,Zr,this.up):Ln.lookAt(Zr,yr,this.up),this.quaternion.setFromRotationMatrix(Ln),r&&(Ln.extractRotation(r.matrixWorld),Bi.setFromRotationMatrix(Ln),this.quaternion.premultiply(Bi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(et("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(zl),zi.child=e,this.dispatchEvent(zi),zi.child=null):et("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(xf),ta.child=e,this.dispatchEvent(ta),ta.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ln.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ln.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ln),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(zl),zi.child=e,this.dispatchEvent(zi),zi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(yr,e,gf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(yr,_f,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*i-s[8]*r,s[13]+=i-s[1]*t-s[5]*i-s[9]*r,s[14]+=r-s[2]*t-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),f=a(e.shapes),d=a(e.skeletons),h=a(e.animations),_=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),h.length>0&&(i.animations=h),_.length>0&&(i.nodes=_)}return i.object=r,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}qt.DEFAULT_UP=new G(0,1,0);qt.DEFAULT_MATRIX_AUTO_UPDATE=!0;qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class ar extends qt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const vf={type:"move"};class na{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ar,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ar,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ar,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const b of e.hand.values()){const m=t.getJointPose(b,i),p=this._getHandJoint(c,b);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),h=.02,_=.005;c.inputState.pinching&&d>h+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=h-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(vf)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new ar;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const Sd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Jn={h:0,s:0,l:0},Jr={h:0,s:0,l:0};function ia(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class je{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Wt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,tt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=tt.workingColorSpace){return this.r=e,this.g=t,this.b=i,tt.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=tt.workingColorSpace){if(e=Jo(e,1),t=Qe(t,0,1),i=Qe(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=ia(a,s,e+1/3),this.g=ia(a,s,e),this.b=ia(a,s,e-1/3)}return tt.colorSpaceToWorking(this,r),this}setStyle(e,t=Wt){function i(s){s!==void 0&&parseFloat(s)<1&&He("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:He("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);He("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Wt){const i=Sd[e.toLowerCase()];return i!==void 0?this.setHex(i,t):He("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Vn(e.r),this.g=Vn(e.g),this.b=Vn(e.b),this}copyLinearToSRGB(e){return this.r=dr(e.r),this.g=dr(e.g),this.b=dr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Wt){return tt.workingToColorSpace(zt.copy(this),e),Math.round(Qe(zt.r*255,0,255))*65536+Math.round(Qe(zt.g*255,0,255))*256+Math.round(Qe(zt.b*255,0,255))}getHexString(e=Wt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=tt.workingColorSpace){tt.workingToColorSpace(zt.copy(this),t);const i=zt.r,r=zt.g,s=zt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=tt.workingColorSpace){return tt.workingToColorSpace(zt.copy(this),t),e.r=zt.r,e.g=zt.g,e.b=zt.b,e}getStyle(e=Wt){tt.workingToColorSpace(zt.copy(this),e);const t=zt.r,i=zt.g,r=zt.b;return e!==Wt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Jn),this.setHSL(Jn.h+e,Jn.s+t,Jn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Jn),e.getHSL(Jr);const i=Or(Jn.h,Jr.h,t),r=Or(Jn.s,Jr.s,t),s=Or(Jn.l,Jr.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const zt=new je;je.NAMES=Sd;class el{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new je(e),this.near=t,this.far=i}clone(){return new el(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Mf extends qt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ui,this.environmentIntensity=1,this.environmentRotation=new ui,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const on=new G,Dn=new G,ra=new G,Un=new G,Hi=new G,Gi=new G,Hl=new G,sa=new G,aa=new G,oa=new G,la=new St,ca=new St,da=new St;class nn{constructor(e=new G,t=new G,i=new G){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),on.subVectors(e,t),r.cross(on);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){on.subVectors(r,t),Dn.subVectors(i,t),ra.subVectors(e,t);const a=on.dot(on),o=on.dot(Dn),l=on.dot(ra),c=Dn.dot(Dn),u=Dn.dot(ra),f=a*c-o*o;if(f===0)return s.set(0,0,0),null;const d=1/f,h=(c*l-o*u)*d,_=(a*u-o*l)*d;return s.set(1-h-_,_,h)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Un)===null?!1:Un.x>=0&&Un.y>=0&&Un.x+Un.y<=1}static getInterpolation(e,t,i,r,s,a,o,l){return this.getBarycoord(e,t,i,r,Un)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Un.x),l.addScaledVector(a,Un.y),l.addScaledVector(o,Un.z),l)}static getInterpolatedAttribute(e,t,i,r,s,a){return la.setScalar(0),ca.setScalar(0),da.setScalar(0),la.fromBufferAttribute(e,t),ca.fromBufferAttribute(e,i),da.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(la,s.x),a.addScaledVector(ca,s.y),a.addScaledVector(da,s.z),a}static isFrontFacing(e,t,i,r){return on.subVectors(i,t),Dn.subVectors(e,t),on.cross(Dn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return on.subVectors(this.c,this.b),Dn.subVectors(this.a,this.b),on.cross(Dn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return nn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return nn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return nn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return nn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return nn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;Hi.subVectors(r,i),Gi.subVectors(s,i),sa.subVectors(e,i);const l=Hi.dot(sa),c=Gi.dot(sa);if(l<=0&&c<=0)return t.copy(i);aa.subVectors(e,r);const u=Hi.dot(aa),f=Gi.dot(aa);if(u>=0&&f<=u)return t.copy(r);const d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(i).addScaledVector(Hi,a);oa.subVectors(e,s);const h=Hi.dot(oa),_=Gi.dot(oa);if(_>=0&&h<=_)return t.copy(s);const b=h*c-l*_;if(b<=0&&c>=0&&_<=0)return o=c/(c-_),t.copy(i).addScaledVector(Gi,o);const m=u*_-h*f;if(m<=0&&f-u>=0&&h-_>=0)return Hl.subVectors(s,r),o=(f-u)/(f-u+(h-_)),t.copy(r).addScaledVector(Hl,o);const p=1/(m+b+d);return a=b*p,o=d*p,t.copy(i).addScaledVector(Hi,a).addScaledVector(Gi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Xr{constructor(e=new G(1/0,1/0,1/0),t=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(ln.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(ln.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=ln.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,ln):ln.fromBufferAttribute(s,a),ln.applyMatrix4(e.matrixWorld),this.expandByPoint(ln);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Qr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Qr.copy(i.boundingBox)),Qr.applyMatrix4(e.matrixWorld),this.union(Qr)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ln),ln.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Sr),jr.subVectors(this.max,Sr),Vi.subVectors(e.a,Sr),Wi.subVectors(e.b,Sr),Xi.subVectors(e.c,Sr),Qn.subVectors(Wi,Vi),jn.subVectors(Xi,Wi),hi.subVectors(Vi,Xi);let t=[0,-Qn.z,Qn.y,0,-jn.z,jn.y,0,-hi.z,hi.y,Qn.z,0,-Qn.x,jn.z,0,-jn.x,hi.z,0,-hi.x,-Qn.y,Qn.x,0,-jn.y,jn.x,0,-hi.y,hi.x,0];return!ua(t,Vi,Wi,Xi,jr)||(t=[1,0,0,0,1,0,0,0,1],!ua(t,Vi,Wi,Xi,jr))?!1:(es.crossVectors(Qn,jn),t=[es.x,es.y,es.z],ua(t,Vi,Wi,Xi,jr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ln).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ln).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Nn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Nn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Nn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Nn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Nn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Nn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Nn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Nn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Nn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Nn=[new G,new G,new G,new G,new G,new G,new G,new G],ln=new G,Qr=new Xr,Vi=new G,Wi=new G,Xi=new G,Qn=new G,jn=new G,hi=new G,Sr=new G,jr=new G,es=new G,pi=new G;function ua(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){pi.fromArray(n,s);const o=r.x*Math.abs(pi.x)+r.y*Math.abs(pi.y)+r.z*Math.abs(pi.z),l=e.dot(pi),c=t.dot(pi),u=i.dot(pi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Rt=new G,ts=new We;let yf=0;class hn extends Pi{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:yf++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Ro,this.updateRanges=[],this.gpuType=wn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ts.fromBufferAttribute(this,t),ts.applyMatrix3(e),this.setXY(t,ts.x,ts.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Rt.fromBufferAttribute(this,t),Rt.applyMatrix3(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Rt.fromBufferAttribute(this,t),Rt.applyMatrix4(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Rt.fromBufferAttribute(this,t),Rt.applyNormalMatrix(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Rt.fromBufferAttribute(this,t),Rt.transformDirection(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=un(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=dt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=un(t,this.array)),t}setX(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=un(t,this.array)),t}setY(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=un(t,this.array)),t}setZ(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=un(t,this.array)),t}setW(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=dt(t,this.array),i=dt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=dt(t,this.array),i=dt(i,this.array),r=dt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=dt(t,this.array),i=dt(i,this.array),r=dt(r,this.array),s=dt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ro&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class bd extends hn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Ed extends hn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class rn extends hn{constructor(e,t,i){super(new Float32Array(e),t,i)}}const Sf=new Xr,br=new G,fa=new G;class tl{constructor(e=new G,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Sf.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;br.subVectors(e,this.center);const t=br.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(br,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(fa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(br.copy(e.center).add(fa)),this.expandByPoint(br.copy(e.center).sub(fa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let bf=0;const en=new yt,ha=new qt,qi=new G,Zt=new Xr,Er=new Xr,Dt=new G;class xn extends Pi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:bf++}),this.uuid=Gn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(zu(e)?Ed:bd)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ve().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return en.makeRotationFromQuaternion(e),this.applyMatrix4(en),this}rotateX(e){return en.makeRotationX(e),this.applyMatrix4(en),this}rotateY(e){return en.makeRotationY(e),this.applyMatrix4(en),this}rotateZ(e){return en.makeRotationZ(e),this.applyMatrix4(en),this}translate(e,t,i){return en.makeTranslation(e,t,i),this.applyMatrix4(en),this}scale(e,t,i){return en.makeScale(e,t,i),this.applyMatrix4(en),this}lookAt(e){return ha.lookAt(e),ha.updateMatrix(),this.applyMatrix4(ha.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(qi).negate(),this.translate(qi.x,qi.y,qi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new rn(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&He("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){et("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Zt.setFromBufferAttribute(s),this.morphTargetsRelative?(Dt.addVectors(this.boundingBox.min,Zt.min),this.boundingBox.expandByPoint(Dt),Dt.addVectors(this.boundingBox.max,Zt.max),this.boundingBox.expandByPoint(Dt)):(this.boundingBox.expandByPoint(Zt.min),this.boundingBox.expandByPoint(Zt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&et('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new tl);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){et("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(e){const i=this.boundingSphere.center;if(Zt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Er.setFromBufferAttribute(o),this.morphTargetsRelative?(Dt.addVectors(Zt.min,Er.min),Zt.expandByPoint(Dt),Dt.addVectors(Zt.max,Er.max),Zt.expandByPoint(Dt)):(Zt.expandByPoint(Er.min),Zt.expandByPoint(Er.max))}Zt.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Dt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Dt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Dt.fromBufferAttribute(o,c),l&&(qi.fromBufferAttribute(e,c),Dt.add(qi)),r=Math.max(r,i.distanceToSquared(Dt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&et('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){et("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new hn(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));const o=[],l=[];for(let v=0;v<i.count;v++)o[v]=new G,l[v]=new G;const c=new G,u=new G,f=new G,d=new We,h=new We,_=new We,b=new G,m=new G;function p(v,M,P){c.fromBufferAttribute(i,v),u.fromBufferAttribute(i,M),f.fromBufferAttribute(i,P),d.fromBufferAttribute(s,v),h.fromBufferAttribute(s,M),_.fromBufferAttribute(s,P),u.sub(c),f.sub(c),h.sub(d),_.sub(d);const R=1/(h.x*_.y-_.x*h.y);isFinite(R)&&(b.copy(u).multiplyScalar(_.y).addScaledVector(f,-h.y).multiplyScalar(R),m.copy(f).multiplyScalar(h.x).addScaledVector(u,-_.x).multiplyScalar(R),o[v].add(b),o[M].add(b),o[P].add(b),l[v].add(m),l[M].add(m),l[P].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let v=0,M=S.length;v<M;++v){const P=S[v],R=P.start,U=P.count;for(let H=R,Y=R+U;H<Y;H+=3)p(e.getX(H+0),e.getX(H+1),e.getX(H+2))}const I=new G,x=new G,w=new G,E=new G;function C(v){w.fromBufferAttribute(r,v),E.copy(w);const M=o[v];I.copy(M),I.sub(w.multiplyScalar(w.dot(M))).normalize(),x.crossVectors(E,M);const R=x.dot(l[v])<0?-1:1;a.setXYZW(v,I.x,I.y,I.z,R)}for(let v=0,M=S.length;v<M;++v){const P=S[v],R=P.start,U=P.count;for(let H=R,Y=R+U;H<Y;H+=3)C(e.getX(H+0)),C(e.getX(H+1)),C(e.getX(H+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new hn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,h=i.count;d<h;d++)i.setXYZ(d,0,0,0);const r=new G,s=new G,a=new G,o=new G,l=new G,c=new G,u=new G,f=new G;if(e)for(let d=0,h=e.count;d<h;d+=3){const _=e.getX(d+0),b=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,b),a.fromBufferAttribute(t,m),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,b),c.fromBufferAttribute(i,m),o.add(u),l.add(u),c.add(u),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(b,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,h=t.count;d<h;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Dt.fromBufferAttribute(e,t),Dt.normalize(),e.setXYZ(t,Dt.x,Dt.y,Dt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,f=o.normalized,d=new c.constructor(l.length*u);let h=0,_=0;for(let b=0,m=l.length;b<m;b++){o.isInterleavedBufferAttribute?h=l[b]*o.data.stride+o.offset:h=l[b]*u;for(let p=0;p<u;p++)d[_++]=c[h++]}return new hn(d,u,f)}if(this.index===null)return He("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new xn,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,f=c.length;u<f;u++){const d=c[u],h=e(d,i);l.push(h)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){const h=c[f];u.push(h.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let d=0,h=f.length;d<h;d++)u.push(f[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ef{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Ro,this.updateRanges=[],this.version=0,this.uuid=Gn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Gn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Gn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ht=new G;class ks{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Ht.fromBufferAttribute(this,t),Ht.applyMatrix4(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ht.fromBufferAttribute(this,t),Ht.applyNormalMatrix(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ht.fromBufferAttribute(this,t),Ht.transformDirection(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=un(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=dt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=un(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=un(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=un(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=un(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=dt(t,this.array),i=dt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=dt(t,this.array),i=dt(i,this.array),r=dt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=dt(t,this.array),i=dt(i,this.array),r=dt(r,this.array),s=dt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){Os("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new hn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new ks(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Os("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let Tf=0;class vr extends Pi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Tf++}),this.uuid=Gn(),this.name="",this.type="Material",this.blending=lr,this.side=di,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ba,this.blendDst=za,this.blendEquation=Mi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new je(0,0,0),this.blendAlpha=0,this.depthFunc=hr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=wl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Fi,this.stencilZFail=Fi,this.stencilZPass=Fi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){He(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){He(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==lr&&(i.blending=this.blending),this.side!==di&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ba&&(i.blendSrc=this.blendSrc),this.blendDst!==za&&(i.blendDst=this.blendDst),this.blendEquation!==Mi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==hr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==wl&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Fi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Fi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Fi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new je().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new We().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new We().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class kn extends vr{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new je(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Yi;const Tr=new G,$i=new G,Ki=new G,Zi=new We,wr=new We,Td=new yt,ns=new G,Ar=new G,is=new G,Gl=new We,pa=new We,Vl=new We;class ii extends qt{constructor(e=new kn){if(super(),this.isSprite=!0,this.type="Sprite",Yi===void 0){Yi=new xn;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Ef(t,5);Yi.setIndex([0,1,2,0,2,3]),Yi.setAttribute("position",new ks(i,3,0,!1)),Yi.setAttribute("uv",new ks(i,2,3,!1))}this.geometry=Yi,this.material=e,this.center=new We(.5,.5),this.count=1}raycast(e,t){e.camera===null&&et('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),$i.setFromMatrixScale(this.matrixWorld),Td.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Ki.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&$i.multiplyScalar(-Ki.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const a=this.center;rs(ns.set(-.5,-.5,0),Ki,a,$i,r,s),rs(Ar.set(.5,-.5,0),Ki,a,$i,r,s),rs(is.set(.5,.5,0),Ki,a,$i,r,s),Gl.set(0,0),pa.set(1,0),Vl.set(1,1);let o=e.ray.intersectTriangle(ns,Ar,is,!1,Tr);if(o===null&&(rs(Ar.set(-.5,.5,0),Ki,a,$i,r,s),pa.set(0,1),o=e.ray.intersectTriangle(ns,is,Ar,!1,Tr),o===null))return;const l=e.ray.origin.distanceTo(Tr);l<e.near||l>e.far||t.push({distance:l,point:Tr.clone(),uv:nn.getInterpolation(Tr,ns,Ar,is,Gl,pa,Vl,new We),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function rs(n,e,t,i,r,s){Zi.subVectors(n,t).addScalar(.5).multiply(i),r!==void 0?(wr.x=s*Zi.x-r*Zi.y,wr.y=r*Zi.x+s*Zi.y):wr.copy(Zi),n.copy(e),n.x+=wr.x,n.y+=wr.y,n.applyMatrix4(Td)}const Fn=new G,ma=new G,ss=new G,ei=new G,ga=new G,as=new G,_a=new G;class wd{constructor(e=new G,t=new G(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Fn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Fn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Fn.copy(this.origin).addScaledVector(this.direction,t),Fn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){ma.copy(e).add(t).multiplyScalar(.5),ss.copy(t).sub(e).normalize(),ei.copy(this.origin).sub(ma);const s=e.distanceTo(t)*.5,a=-this.direction.dot(ss),o=ei.dot(this.direction),l=-ei.dot(ss),c=ei.lengthSq(),u=Math.abs(1-a*a);let f,d,h,_;if(u>0)if(f=a*l-o,d=a*o-l,_=s*u,f>=0)if(d>=-_)if(d<=_){const b=1/u;f*=b,d*=b,h=f*(f+a*d+2*o)+d*(a*f+d+2*l)+c}else d=s,f=Math.max(0,-(a*d+o)),h=-f*f+d*(d+2*l)+c;else d=-s,f=Math.max(0,-(a*d+o)),h=-f*f+d*(d+2*l)+c;else d<=-_?(f=Math.max(0,-(-a*s+o)),d=f>0?-s:Math.min(Math.max(-s,-l),s),h=-f*f+d*(d+2*l)+c):d<=_?(f=0,d=Math.min(Math.max(-s,-l),s),h=d*(d+2*l)+c):(f=Math.max(0,-(a*s+o)),d=f>0?s:Math.min(Math.max(-s,-l),s),h=-f*f+d*(d+2*l)+c);else d=a>0?-s:s,f=Math.max(0,-(a*d+o)),h=-f*f+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(ma).addScaledVector(ss,d),h}intersectSphere(e,t){Fn.subVectors(e.center,this.origin);const i=Fn.dot(this.direction),r=Fn.dot(Fn)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(o=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Fn)!==null}intersectTriangle(e,t,i,r,s){ga.subVectors(t,e),as.subVectors(i,e),_a.crossVectors(ga,as);let a=this.direction.dot(_a),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ei.subVectors(this.origin,e);const l=o*this.direction.dot(as.crossVectors(ei,as));if(l<0)return null;const c=o*this.direction.dot(ga.cross(ei));if(c<0||l+c>a)return null;const u=-o*ei.dot(_a);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ai extends vr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ui,this.combine=rd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Wl=new yt,mi=new wd,os=new tl,Xl=new G,ls=new G,cs=new G,ds=new G,xa=new G,us=new G,ql=new G,fs=new G;class Ut extends qt{constructor(e=new xn,t=new Ai){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){us.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],f=s[l];u!==0&&(xa.fromBufferAttribute(f,e),a?us.addScaledVector(xa,u):us.addScaledVector(xa.sub(t),u))}t.add(us)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),os.copy(i.boundingSphere),os.applyMatrix4(s),mi.copy(e.ray).recast(e.near),!(os.containsPoint(mi.origin)===!1&&(mi.intersectSphere(os,Xl)===null||mi.origin.distanceToSquared(Xl)>(e.far-e.near)**2))&&(Wl.copy(s).invert(),mi.copy(e.ray).applyMatrix4(Wl),!(i.boundingBox!==null&&mi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,mi)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,d=s.groups,h=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,b=d.length;_<b;_++){const m=d[_],p=a[m.materialIndex],S=Math.max(m.start,h.start),I=Math.min(o.count,Math.min(m.start+m.count,h.start+h.count));for(let x=S,w=I;x<w;x+=3){const E=o.getX(x),C=o.getX(x+1),v=o.getX(x+2);r=hs(this,p,e,i,c,u,f,E,C,v),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const _=Math.max(0,h.start),b=Math.min(o.count,h.start+h.count);for(let m=_,p=b;m<p;m+=3){const S=o.getX(m),I=o.getX(m+1),x=o.getX(m+2);r=hs(this,a,e,i,c,u,f,S,I,x),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,b=d.length;_<b;_++){const m=d[_],p=a[m.materialIndex],S=Math.max(m.start,h.start),I=Math.min(l.count,Math.min(m.start+m.count,h.start+h.count));for(let x=S,w=I;x<w;x+=3){const E=x,C=x+1,v=x+2;r=hs(this,p,e,i,c,u,f,E,C,v),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const _=Math.max(0,h.start),b=Math.min(l.count,h.start+h.count);for(let m=_,p=b;m<p;m+=3){const S=m,I=m+1,x=m+2;r=hs(this,a,e,i,c,u,f,S,I,x),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function wf(n,e,t,i,r,s,a,o){let l;if(e.side===Yt?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===di,o),l===null)return null;fs.copy(o),fs.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(fs);return c<t.near||c>t.far?null:{distance:c,point:fs.clone(),object:n}}function hs(n,e,t,i,r,s,a,o,l,c){n.getVertexPosition(o,ls),n.getVertexPosition(l,cs),n.getVertexPosition(c,ds);const u=wf(n,e,t,i,ls,cs,ds,ql);if(u){const f=new G;nn.getBarycoord(ql,ls,cs,ds,f),r&&(u.uv=nn.getInterpolatedAttribute(r,o,l,c,f,new We)),s&&(u.uv1=nn.getInterpolatedAttribute(s,o,l,c,f,new We)),a&&(u.normal=nn.getInterpolatedAttribute(a,o,l,c,f,new G),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new G,materialIndex:0};nn.getNormal(ls,cs,ds,d.normal),u.face=d,u.barycoord=f}return u}class Af extends Nt{constructor(e=null,t=1,i=1,r,s,a,o,l,c=bt,u=bt,f,d){super(null,a,o,l,c,u,r,s,f,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const va=new G,Rf=new G,Cf=new Ve;class ri{constructor(e=new G(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=va.subVectors(i,t).cross(Rf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){const r=e.delta(va),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Cf.getNormalMatrix(e),r=this.coplanarPoint(va).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const gi=new tl,Pf=new We(.5,.5),ps=new G;class nl{constructor(e=new ri,t=new ri,i=new ri,r=new ri,s=new ri,a=new ri){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=An,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],u=s[4],f=s[5],d=s[6],h=s[7],_=s[8],b=s[9],m=s[10],p=s[11],S=s[12],I=s[13],x=s[14],w=s[15];if(r[0].setComponents(c-a,h-u,p-_,w-S).normalize(),r[1].setComponents(c+a,h+u,p+_,w+S).normalize(),r[2].setComponents(c+o,h+f,p+b,w+I).normalize(),r[3].setComponents(c-o,h-f,p-b,w-I).normalize(),i)r[4].setComponents(l,d,m,x).normalize(),r[5].setComponents(c-l,h-d,p-m,w-x).normalize();else if(r[4].setComponents(c-l,h-d,p-m,w-x).normalize(),t===An)r[5].setComponents(c+l,h+d,p+m,w+x).normalize();else if(t===Hr)r[5].setComponents(l,d,m,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),gi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),gi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(gi)}intersectsSprite(e){gi.center.set(0,0,0);const t=Pf.distanceTo(e.center);return gi.radius=.7071067811865476+t,gi.applyMatrix4(e.matrixWorld),this.intersectsSphere(gi)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(ps.x=r.normal.x>0?e.max.x:e.min.x,ps.y=r.normal.y>0?e.max.y:e.min.y,ps.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ps)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ad extends Nt{constructor(e=[],t=Ti,i,r,s,a,o,l,c,u){super(e,t,i,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class If extends Nt{constructor(e,t,i,r,s,a,o,l,c){super(e,t,i,r,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class mr extends Nt{constructor(e,t,i=Pn,r,s,a,o=bt,l=bt,c,u=Xn,f=1){if(u!==Xn&&u!==bi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:f};super(d,r,s,a,o,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Qo(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Lf extends mr{constructor(e,t=Pn,i=Ti,r,s,a=bt,o=bt,l,c=Xn){const u={width:e,height:e,depth:1},f=[u,u,u,u,u,u];super(e,e,t,i,r,s,a,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Rd extends Nt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ii extends xn{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],f=[];let d=0,h=0;_("z","y","x",-1,-1,i,t,e,a,s,0),_("z","y","x",1,-1,i,t,-e,a,s,1),_("x","z","y",1,1,e,i,t,r,a,2),_("x","z","y",1,-1,e,i,-t,r,a,3),_("x","y","z",1,-1,e,t,i,r,s,4),_("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new rn(c,3)),this.setAttribute("normal",new rn(u,3)),this.setAttribute("uv",new rn(f,2));function _(b,m,p,S,I,x,w,E,C,v,M){const P=x/C,R=w/v,U=x/2,H=w/2,Y=E/2,B=C+1,K=v+1;let V=0,ee=0;const oe=new G;for(let Z=0;Z<K;Z++){const de=Z*R-H;for(let he=0;he<B;he++){const $e=he*P-U;oe[b]=$e*S,oe[m]=de*I,oe[p]=Y,c.push(oe.x,oe.y,oe.z),oe[b]=0,oe[m]=0,oe[p]=E>0?1:-1,u.push(oe.x,oe.y,oe.z),f.push(he/C),f.push(1-Z/v),V+=1}}for(let Z=0;Z<v;Z++)for(let de=0;de<C;de++){const he=d+de+B*Z,$e=d+de+B*(Z+1),ot=d+(de+1)+B*(Z+1),Oe=d+(de+1)+B*Z;l.push(he,$e,Oe),l.push($e,ot,Oe),ee+=6}o.addGroup(h,ee,M),h+=ee,d+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ii(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class qn extends xn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(r),c=o+1,u=l+1,f=e/o,d=t/l,h=[],_=[],b=[],m=[];for(let p=0;p<u;p++){const S=p*d-a;for(let I=0;I<c;I++){const x=I*f-s;_.push(x,-S,0),b.push(0,0,1),m.push(I/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let S=0;S<o;S++){const I=S+c*p,x=S+c*(p+1),w=S+1+c*(p+1),E=S+1+c*p;h.push(I,x,E),h.push(x,w,E)}this.setIndex(h),this.setAttribute("position",new rn(_,3)),this.setAttribute("normal",new rn(b,3)),this.setAttribute("uv",new rn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qn(e.width,e.height,e.widthSegments,e.heightSegments)}}class il extends xn{constructor(e=.5,t=1,i=32,r=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:a},i=Math.max(3,i),r=Math.max(1,r);const o=[],l=[],c=[],u=[];let f=e;const d=(t-e)/r,h=new G,_=new We;for(let b=0;b<=r;b++){for(let m=0;m<=i;m++){const p=s+m/i*a;h.x=f*Math.cos(p),h.y=f*Math.sin(p),l.push(h.x,h.y,h.z),c.push(0,0,1),_.x=(h.x/t+1)/2,_.y=(h.y/t+1)/2,u.push(_.x,_.y)}f+=d}for(let b=0;b<r;b++){const m=b*(i+1);for(let p=0;p<i;p++){const S=p+m,I=S,x=S+i+1,w=S+i+2,E=S+1;o.push(I,x,E),o.push(x,w,E)}}this.setIndex(o),this.setAttribute("position",new rn(l,3)),this.setAttribute("normal",new rn(c,3)),this.setAttribute("uv",new rn(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new il(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}function gr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];if(Yl(r))r.isRenderTargetTexture?(He("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone();else if(Array.isArray(r))if(Yl(r[0])){const s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[t][i]=s}else e[t][i]=r.slice();else e[t][i]=r}}return e}function Gt(n){const e={};for(let t=0;t<n.length;t++){const i=gr(n[t]);for(const r in i)e[r]=i[r]}return e}function Yl(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function Df(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Cd(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:tt.workingColorSpace}const Uf={clone:gr,merge:Gt};var Nf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ff=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class In extends vr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Nf,this.fragmentShader=Ff,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=gr(e.uniforms),this.uniformsGroups=Df(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const i in e.uniforms){const r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=t[r.value]||null;break;case"c":this.uniforms[i].value=new je().setHex(r.value);break;case"v2":this.uniforms[i].value=new We().fromArray(r.value);break;case"v3":this.uniforms[i].value=new G().fromArray(r.value);break;case"v4":this.uniforms[i].value=new St().fromArray(r.value);break;case"m3":this.uniforms[i].value=new Ve().fromArray(r.value);break;case"m4":this.uniforms[i].value=new yt().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Of extends In{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class sr extends vr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new je(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ao,this.normalScale=new We(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ui,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class kf extends vr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Lu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Bf extends vr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Ma={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&($l(n)||(this.files[n]=e))},get:function(n){if(this.enabled!==!1&&!$l(n))return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};function $l(n){try{const e=n.slice(n.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class zf{constructor(e,t,i){const r=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(u){o++,s===!1&&r.onStart!==void 0&&r.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,r.onProgress!==void 0&&r.onProgress(u,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,d=c.length;f<d;f+=2){const h=c[f],_=c[f+1];if(h.global&&(h.lastIndex=0),h.test(u))return _}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Hf=new zf;class rl{constructor(e){this.manager=e!==void 0?e:Hf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}rl.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ji=new WeakMap;class Gf extends rl{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=Ma.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);else{let f=Ji.get(a);f===void 0&&(f=[],Ji.set(a,f)),f.push({onLoad:t,onError:r})}return a}const o=Gr("img");function l(){u(),t&&t(this);const f=Ji.get(this)||[];for(let d=0;d<f.length;d++){const h=f[d];h.onLoad&&h.onLoad(this)}Ji.delete(this),s.manager.itemEnd(e)}function c(f){u(),r&&r(f),Ma.remove(`image:${e}`);const d=Ji.get(this)||[];for(let h=0;h<d.length;h++){const _=d[h];_.onError&&_.onError(f)}Ji.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Ma.add(`image:${e}`,o),s.manager.itemStart(e),o.src=e,o}}class Pd extends rl{constructor(e){super(e)}load(e,t,i,r){const s=new Nt,a=new Gf(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}}class Id extends qt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new je(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const ya=new yt,Kl=new G,Zl=new G;class Vf{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new We(512,512),this.mapType=Qt,this.map=null,this.mapPass=null,this.matrix=new yt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new nl,this._frameExtents=new We(1,1),this._viewportCount=1,this._viewports=[new St(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Kl.setFromMatrixPosition(e.matrixWorld),t.position.copy(Kl),Zl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Zl),t.updateMatrixWorld(),ya.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ya,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===Hr||t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(ya)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const ms=new G,gs=new xr,Sn=new G;class Ld extends qt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new yt,this.projectionMatrix=new yt,this.projectionMatrixInverse=new yt,this.coordinateSystem=An,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ms,gs,Sn),Sn.x===1&&Sn.y===1&&Sn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ms,gs,Sn.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(ms,gs,Sn),Sn.x===1&&Sn.y===1&&Sn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ms,gs,Sn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ti=new G,Jl=new We,Ql=new We;class Jt extends Ld{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Vr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Fr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Vr*2*Math.atan(Math.tan(Fr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){ti.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ti.x,ti.y).multiplyScalar(-e/ti.z),ti.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ti.x,ti.y).multiplyScalar(-e/ti.z)}getViewSize(e,t){return this.getViewBounds(e,Jl,Ql),t.subVectors(Ql,Jl)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Fr*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Wf extends Vf{constructor(){super(new Jt(90,1,.5,500)),this.isPointLightShadow=!0}}class jl extends Id{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new Wf}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class Dd extends Ld{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Xf extends Id{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const Qi=-90,ji=1;class qf extends qt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Jt(Qi,ji,e,t);r.layers=this.layers,this.add(r);const s=new Jt(Qi,ji,e,t);s.layers=this.layers,this.add(s);const a=new Jt(Qi,ji,e,t);a.layers=this.layers,this.add(a);const o=new Jt(Qi,ji,e,t);o.layers=this.layers,this.add(o);const l=new Jt(Qi,ji,e,t);l.layers=this.layers,this.add(l);const c=new Jt(Qi,ji,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===An)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Hr)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const b=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,1,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.generateMipmaps=b,e.setRenderTarget(i,5,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(f,d,h),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class Yf extends Jt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const ec=new yt;class $f{constructor(e,t,i=0,r=1/0){this.ray=new wd(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new jo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):et("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return ec.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ec),this}intersectObject(e,t=!0,i=[]){return Co(e,this,i,t),i.sort(tc),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)Co(e[r],this,i,t);return i.sort(tc),i}}function tc(n,e){return n.distance-e.distance}function Co(n,e,t,i){let r=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(r=!1),r===!0&&i===!0){const s=n.children;for(let a=0,o=s.length;a<o;a++)Co(s[a],e,t,!0)}}const hl=class hl{constructor(e,t,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,r){const s=this.elements;return s[0]=e,s[2]=t,s[1]=i,s[3]=r,this}};hl.prototype.isMatrix2=!0;let nc=hl;function ic(n,e,t,i){const r=Kf(i);switch(t){case _d:return n*e;case vd:return n*e/r.components*r.byteLength;case qo:return n*e/r.components*r.byteLength;case wi:return n*e*2/r.components*r.byteLength;case Yo:return n*e*2/r.components*r.byteLength;case xd:return n*e*3/r.components*r.byteLength;case fn:return n*e*4/r.components*r.byteLength;case $o:return n*e*4/r.components*r.byteLength;case Ts:case ws:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case As:case Rs:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ja:case ja:return Math.max(n,16)*Math.max(e,8)/4;case Za:case Qa:return Math.max(n,8)*Math.max(e,8)/2;case eo:case to:case io:case ro:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case no:case Ds:case so:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ao:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case oo:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case lo:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case co:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case uo:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case fo:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case ho:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case po:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case mo:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case go:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case _o:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case xo:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case vo:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Mo:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case yo:case So:case bo:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Eo:case To:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Us:case wo:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Kf(n){switch(n){case Qt:case hd:return{byteLength:1,components:1};case Br:case pd:case Wn:return{byteLength:2,components:1};case Wo:case Xo:return{byteLength:2,components:4};case Pn:case Vo:case wn:return{byteLength:4,components:1};case md:case gd:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Go}}));typeof window<"u"&&(window.__THREE__?He("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Go);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Ud(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Zf(n){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,f=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,u),o.onUploadCallback();let h;if(c instanceof Float32Array)h=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)h=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?h=n.HALF_FLOAT:h=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)h=n.SHORT;else if(c instanceof Uint32Array)h=n.UNSIGNED_INT;else if(c instanceof Int32Array)h=n.INT;else if(c instanceof Int8Array)h=n.BYTE;else if(c instanceof Uint8Array)h=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)h=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:h,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,l,c){const u=l.array,f=l.updateRanges;if(n.bindBuffer(c,o),f.length===0)n.bufferSubData(c,0,u);else{f.sort((h,_)=>h.start-_.start);let d=0;for(let h=1;h<f.length;h++){const _=f[d],b=f[h];b.start<=_.start+_.count+1?_.count=Math.max(_.count,b.start+b.count-_.start):(++d,f[d]=b)}f.length=d+1;for(let h=0,_=f.length;h<_;h++){const b=f[h];n.bufferSubData(c,b.start*u.BYTES_PER_ELEMENT,u,b.start,b.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var Jf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Qf=`#ifdef USE_ALPHAHASH
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
#endif`,jf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,eh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,th=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,nh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ih=`#ifdef USE_AOMAP
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
#endif`,rh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,sh=`#ifdef USE_BATCHING
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
#endif`,ah=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,oh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,lh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ch=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,dh=`#ifdef USE_IRIDESCENCE
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
#endif`,uh=`#ifdef USE_BUMPMAP
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
#endif`,fh=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,hh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ph=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,mh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,gh=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,_h=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,xh=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,vh=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Mh=`#define PI 3.141592653589793
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
} // validated`,yh=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Sh=`vec3 transformedNormal = objectNormal;
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
#endif`,bh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Eh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Th=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,wh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ah="gl_FragColor = linearToOutputTexel( gl_FragColor );",Rh=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ch=`#ifdef USE_ENVMAP
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
#endif`,Ph=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Ih=`#ifdef USE_ENVMAP
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
#endif`,Lh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Dh=`#ifdef USE_ENVMAP
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
#endif`,Uh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Nh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Fh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Oh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,kh=`#ifdef USE_GRADIENTMAP
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
}`,Bh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,zh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Hh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Gh=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Vh=`#ifdef USE_ENVMAP
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
#endif`,Wh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Xh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,qh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Yh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,$h=`PhysicalMaterial material;
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
#endif`,Kh=`uniform sampler2D dfgLUT;
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
}`,Zh=`
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
#endif`,Jh=`#if defined( RE_IndirectDiffuse )
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
#endif`,Qh=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,jh=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,ep=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,tp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,np=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ip=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,rp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,sp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ap=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,op=`#if defined( USE_POINTS_UV )
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
#endif`,lp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,cp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,dp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,up=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,fp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hp=`#ifdef USE_MORPHTARGETS
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
#endif`,pp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,gp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,_p=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Mp=`#ifdef USE_NORMALMAP
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
#endif`,yp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Sp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,bp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ep=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Tp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,wp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Ap=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Rp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Cp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Pp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ip=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Lp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Dp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Up=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Np=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Fp=`float getShadowMask() {
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
}`,Op=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,kp=`#ifdef USE_SKINNING
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
#endif`,Bp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,zp=`#ifdef USE_SKINNING
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
#endif`,Hp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Gp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Vp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Wp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Xp=`#ifdef USE_TRANSMISSION
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
#endif`,qp=`#ifdef USE_TRANSMISSION
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
#endif`,Yp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$p=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Kp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Zp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Jp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Qp=`uniform sampler2D t2D;
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
}`,jp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,em=`#ifdef ENVMAP_TYPE_CUBE
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
}`,tm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,im=`#include <common>
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
}`,rm=`#if DEPTH_PACKING == 3200
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
}`,sm=`#define DISTANCE
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
}`,am=`#define DISTANCE
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
}`,om=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,lm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cm=`uniform float scale;
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
}`,dm=`uniform vec3 diffuse;
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
}`,um=`#include <common>
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
}`,fm=`uniform vec3 diffuse;
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
}`,hm=`#define LAMBERT
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
}`,pm=`#define LAMBERT
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
}`,mm=`#define MATCAP
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
}`,gm=`#define MATCAP
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
}`,_m=`#define NORMAL
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
}`,xm=`#define NORMAL
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
}`,vm=`#define PHONG
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
}`,Mm=`#define PHONG
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
}`,ym=`#define STANDARD
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
}`,Sm=`#define STANDARD
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
}`,bm=`#define TOON
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
}`,Em=`#define TOON
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
}`,Tm=`uniform float size;
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
}`,wm=`uniform vec3 diffuse;
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
}`,Am=`#include <common>
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
}`,Rm=`uniform vec3 color;
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
}`,Cm=`uniform float rotation;
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
}`,Pm=`uniform vec3 diffuse;
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
}`,Ke={alphahash_fragment:Jf,alphahash_pars_fragment:Qf,alphamap_fragment:jf,alphamap_pars_fragment:eh,alphatest_fragment:th,alphatest_pars_fragment:nh,aomap_fragment:ih,aomap_pars_fragment:rh,batching_pars_vertex:sh,batching_vertex:ah,begin_vertex:oh,beginnormal_vertex:lh,bsdfs:ch,iridescence_fragment:dh,bumpmap_pars_fragment:uh,clipping_planes_fragment:fh,clipping_planes_pars_fragment:hh,clipping_planes_pars_vertex:ph,clipping_planes_vertex:mh,color_fragment:gh,color_pars_fragment:_h,color_pars_vertex:xh,color_vertex:vh,common:Mh,cube_uv_reflection_fragment:yh,defaultnormal_vertex:Sh,displacementmap_pars_vertex:bh,displacementmap_vertex:Eh,emissivemap_fragment:Th,emissivemap_pars_fragment:wh,colorspace_fragment:Ah,colorspace_pars_fragment:Rh,envmap_fragment:Ch,envmap_common_pars_fragment:Ph,envmap_pars_fragment:Ih,envmap_pars_vertex:Lh,envmap_physical_pars_fragment:Vh,envmap_vertex:Dh,fog_vertex:Uh,fog_pars_vertex:Nh,fog_fragment:Fh,fog_pars_fragment:Oh,gradientmap_pars_fragment:kh,lightmap_pars_fragment:Bh,lights_lambert_fragment:zh,lights_lambert_pars_fragment:Hh,lights_pars_begin:Gh,lights_toon_fragment:Wh,lights_toon_pars_fragment:Xh,lights_phong_fragment:qh,lights_phong_pars_fragment:Yh,lights_physical_fragment:$h,lights_physical_pars_fragment:Kh,lights_fragment_begin:Zh,lights_fragment_maps:Jh,lights_fragment_end:Qh,lightprobes_pars_fragment:jh,logdepthbuf_fragment:ep,logdepthbuf_pars_fragment:tp,logdepthbuf_pars_vertex:np,logdepthbuf_vertex:ip,map_fragment:rp,map_pars_fragment:sp,map_particle_fragment:ap,map_particle_pars_fragment:op,metalnessmap_fragment:lp,metalnessmap_pars_fragment:cp,morphinstance_vertex:dp,morphcolor_vertex:up,morphnormal_vertex:fp,morphtarget_pars_vertex:hp,morphtarget_vertex:pp,normal_fragment_begin:mp,normal_fragment_maps:gp,normal_pars_fragment:_p,normal_pars_vertex:xp,normal_vertex:vp,normalmap_pars_fragment:Mp,clearcoat_normal_fragment_begin:yp,clearcoat_normal_fragment_maps:Sp,clearcoat_pars_fragment:bp,iridescence_pars_fragment:Ep,opaque_fragment:Tp,packing:wp,premultiplied_alpha_fragment:Ap,project_vertex:Rp,dithering_fragment:Cp,dithering_pars_fragment:Pp,roughnessmap_fragment:Ip,roughnessmap_pars_fragment:Lp,shadowmap_pars_fragment:Dp,shadowmap_pars_vertex:Up,shadowmap_vertex:Np,shadowmask_pars_fragment:Fp,skinbase_vertex:Op,skinning_pars_vertex:kp,skinning_vertex:Bp,skinnormal_vertex:zp,specularmap_fragment:Hp,specularmap_pars_fragment:Gp,tonemapping_fragment:Vp,tonemapping_pars_fragment:Wp,transmission_fragment:Xp,transmission_pars_fragment:qp,uv_pars_fragment:Yp,uv_pars_vertex:$p,uv_vertex:Kp,worldpos_vertex:Zp,background_vert:Jp,background_frag:Qp,backgroundCube_vert:jp,backgroundCube_frag:em,cube_vert:tm,cube_frag:nm,depth_vert:im,depth_frag:rm,distance_vert:sm,distance_frag:am,equirect_vert:om,equirect_frag:lm,linedashed_vert:cm,linedashed_frag:dm,meshbasic_vert:um,meshbasic_frag:fm,meshlambert_vert:hm,meshlambert_frag:pm,meshmatcap_vert:mm,meshmatcap_frag:gm,meshnormal_vert:_m,meshnormal_frag:xm,meshphong_vert:vm,meshphong_frag:Mm,meshphysical_vert:ym,meshphysical_frag:Sm,meshtoon_vert:bm,meshtoon_frag:Em,points_vert:Tm,points_frag:wm,shadow_vert:Am,shadow_frag:Rm,sprite_vert:Cm,sprite_frag:Pm},ve={common:{diffuse:{value:new je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ve}},envmap:{envMap:{value:null},envMapRotation:{value:new Ve},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ve},normalScale:{value:new We(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new G},probesMax:{value:new G},probesResolution:{value:new G}},points:{diffuse:{value:new je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0},uvTransform:{value:new Ve}},sprite:{diffuse:{value:new je(16777215)},opacity:{value:1},center:{value:new We(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}}},En={basic:{uniforms:Gt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.fog]),vertexShader:Ke.meshbasic_vert,fragmentShader:Ke.meshbasic_frag},lambert:{uniforms:Gt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new je(0)},envMapIntensity:{value:1}}]),vertexShader:Ke.meshlambert_vert,fragmentShader:Ke.meshlambert_frag},phong:{uniforms:Gt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new je(0)},specular:{value:new je(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphong_vert,fragmentShader:Ke.meshphong_frag},standard:{uniforms:Gt([ve.common,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.roughnessmap,ve.metalnessmap,ve.fog,ve.lights,{emissive:{value:new je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag},toon:{uniforms:Gt([ve.common,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.gradientmap,ve.fog,ve.lights,{emissive:{value:new je(0)}}]),vertexShader:Ke.meshtoon_vert,fragmentShader:Ke.meshtoon_frag},matcap:{uniforms:Gt([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,{matcap:{value:null}}]),vertexShader:Ke.meshmatcap_vert,fragmentShader:Ke.meshmatcap_frag},points:{uniforms:Gt([ve.points,ve.fog]),vertexShader:Ke.points_vert,fragmentShader:Ke.points_frag},dashed:{uniforms:Gt([ve.common,ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ke.linedashed_vert,fragmentShader:Ke.linedashed_frag},depth:{uniforms:Gt([ve.common,ve.displacementmap]),vertexShader:Ke.depth_vert,fragmentShader:Ke.depth_frag},normal:{uniforms:Gt([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,{opacity:{value:1}}]),vertexShader:Ke.meshnormal_vert,fragmentShader:Ke.meshnormal_frag},sprite:{uniforms:Gt([ve.sprite,ve.fog]),vertexShader:Ke.sprite_vert,fragmentShader:Ke.sprite_frag},background:{uniforms:{uvTransform:{value:new Ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ke.background_vert,fragmentShader:Ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ve}},vertexShader:Ke.backgroundCube_vert,fragmentShader:Ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ke.cube_vert,fragmentShader:Ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ke.equirect_vert,fragmentShader:Ke.equirect_frag},distance:{uniforms:Gt([ve.common,ve.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ke.distance_vert,fragmentShader:Ke.distance_frag},shadow:{uniforms:Gt([ve.lights,ve.fog,{color:{value:new je(0)},opacity:{value:1}}]),vertexShader:Ke.shadow_vert,fragmentShader:Ke.shadow_frag}};En.physical={uniforms:Gt([En.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ve},clearcoatNormalScale:{value:new We(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ve},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ve},sheen:{value:0},sheenColor:{value:new je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ve},transmissionSamplerSize:{value:new We},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ve},attenuationDistance:{value:0},attenuationColor:{value:new je(0)},specularColor:{value:new je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ve},anisotropyVector:{value:new We},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ve}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag};const _s={r:0,b:0,g:0},Im=new yt,Nd=new Ve;Nd.set(-1,0,0,0,1,0,0,0,1);function Lm(n,e,t,i,r,s){const a=new je(0);let o=r===!0?0:1,l,c,u=null,f=0,d=null;function h(S){let I=S.isScene===!0?S.background:null;if(I&&I.isTexture){const x=S.backgroundBlurriness>0;I=e.get(I,x)}return I}function _(S){let I=!1;const x=h(S);x===null?m(a,o):x&&x.isColor&&(m(x,1),I=!0);const w=n.xr.getEnvironmentBlendMode();w==="additive"?t.buffers.color.setClear(0,0,0,1,s):w==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(n.autoClear||I)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function b(S,I){const x=h(I);x&&(x.isCubeTexture||x.mapping===Gs)?(c===void 0&&(c=new Ut(new Ii(1,1,1),new In({name:"BackgroundCubeMaterial",uniforms:gr(En.backgroundCube.uniforms),vertexShader:En.backgroundCube.vertexShader,fragmentShader:En.backgroundCube.fragmentShader,side:Yt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,E,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=x,c.material.uniforms.backgroundBlurriness.value=I.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Im.makeRotationFromEuler(I.backgroundRotation)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Nd),c.material.toneMapped=tt.getTransfer(x.colorSpace)!==ct,(u!==x||f!==x.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,u=x,f=x.version,d=n.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new Ut(new qn(2,2),new In({name:"BackgroundMaterial",uniforms:gr(En.background.uniforms),vertexShader:En.background.vertexShader,fragmentShader:En.background.fragmentShader,side:di,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,l.material.toneMapped=tt.getTransfer(x.colorSpace)!==ct,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||f!==x.version||d!==n.toneMapping)&&(l.material.needsUpdate=!0,u=x,f=x.version,d=n.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function m(S,I){S.getRGB(_s,Cd(n)),t.buffers.color.setClear(_s.r,_s.g,_s.b,I,s)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,I=1){a.set(S),o=I,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(S){o=S,m(a,o)},render:_,addToRenderList:b,dispose:p}}function Dm(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,a=!1;function o(R,U,H,Y,B){let K=!1;const V=f(R,Y,H,U);s!==V&&(s=V,c(s.object)),K=h(R,Y,H,B),K&&_(R,Y,H,B),B!==null&&e.update(B,n.ELEMENT_ARRAY_BUFFER),(K||a)&&(a=!1,x(R,U,H,Y),B!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function l(){return n.createVertexArray()}function c(R){return n.bindVertexArray(R)}function u(R){return n.deleteVertexArray(R)}function f(R,U,H,Y){const B=Y.wireframe===!0;let K=i[U.id];K===void 0&&(K={},i[U.id]=K);const V=R.isInstancedMesh===!0?R.id:0;let ee=K[V];ee===void 0&&(ee={},K[V]=ee);let oe=ee[H.id];oe===void 0&&(oe={},ee[H.id]=oe);let Z=oe[B];return Z===void 0&&(Z=d(l()),oe[B]=Z),Z}function d(R){const U=[],H=[],Y=[];for(let B=0;B<t;B++)U[B]=0,H[B]=0,Y[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:H,attributeDivisors:Y,object:R,attributes:{},index:null}}function h(R,U,H,Y){const B=s.attributes,K=U.attributes;let V=0;const ee=H.getAttributes();for(const oe in ee)if(ee[oe].location>=0){const de=B[oe];let he=K[oe];if(he===void 0&&(oe==="instanceMatrix"&&R.instanceMatrix&&(he=R.instanceMatrix),oe==="instanceColor"&&R.instanceColor&&(he=R.instanceColor)),de===void 0||de.attribute!==he||he&&de.data!==he.data)return!0;V++}return s.attributesNum!==V||s.index!==Y}function _(R,U,H,Y){const B={},K=U.attributes;let V=0;const ee=H.getAttributes();for(const oe in ee)if(ee[oe].location>=0){let de=K[oe];de===void 0&&(oe==="instanceMatrix"&&R.instanceMatrix&&(de=R.instanceMatrix),oe==="instanceColor"&&R.instanceColor&&(de=R.instanceColor));const he={};he.attribute=de,de&&de.data&&(he.data=de.data),B[oe]=he,V++}s.attributes=B,s.attributesNum=V,s.index=Y}function b(){const R=s.newAttributes;for(let U=0,H=R.length;U<H;U++)R[U]=0}function m(R){p(R,0)}function p(R,U){const H=s.newAttributes,Y=s.enabledAttributes,B=s.attributeDivisors;H[R]=1,Y[R]===0&&(n.enableVertexAttribArray(R),Y[R]=1),B[R]!==U&&(n.vertexAttribDivisor(R,U),B[R]=U)}function S(){const R=s.newAttributes,U=s.enabledAttributes;for(let H=0,Y=U.length;H<Y;H++)U[H]!==R[H]&&(n.disableVertexAttribArray(H),U[H]=0)}function I(R,U,H,Y,B,K,V){V===!0?n.vertexAttribIPointer(R,U,H,B,K):n.vertexAttribPointer(R,U,H,Y,B,K)}function x(R,U,H,Y){b();const B=Y.attributes,K=H.getAttributes(),V=U.defaultAttributeValues;for(const ee in K){const oe=K[ee];if(oe.location>=0){let Z=B[ee];if(Z===void 0&&(ee==="instanceMatrix"&&R.instanceMatrix&&(Z=R.instanceMatrix),ee==="instanceColor"&&R.instanceColor&&(Z=R.instanceColor)),Z!==void 0){const de=Z.normalized,he=Z.itemSize,$e=e.get(Z);if($e===void 0)continue;const ot=$e.buffer,Oe=$e.type,j=$e.bytesPerElement,le=Oe===n.INT||Oe===n.UNSIGNED_INT||Z.gpuType===Vo;if(Z.isInterleavedBufferAttribute){const ae=Z.data,ke=ae.stride,Ge=Z.offset;if(ae.isInstancedInterleavedBuffer){for(let Ue=0;Ue<oe.locationSize;Ue++)p(oe.location+Ue,ae.meshPerAttribute);R.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let Ue=0;Ue<oe.locationSize;Ue++)m(oe.location+Ue);n.bindBuffer(n.ARRAY_BUFFER,ot);for(let Ue=0;Ue<oe.locationSize;Ue++)I(oe.location+Ue,he/oe.locationSize,Oe,de,ke*j,(Ge+he/oe.locationSize*Ue)*j,le)}else{if(Z.isInstancedBufferAttribute){for(let ae=0;ae<oe.locationSize;ae++)p(oe.location+ae,Z.meshPerAttribute);R.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let ae=0;ae<oe.locationSize;ae++)m(oe.location+ae);n.bindBuffer(n.ARRAY_BUFFER,ot);for(let ae=0;ae<oe.locationSize;ae++)I(oe.location+ae,he/oe.locationSize,Oe,de,he*j,he/oe.locationSize*ae*j,le)}}else if(V!==void 0){const de=V[ee];if(de!==void 0)switch(de.length){case 2:n.vertexAttrib2fv(oe.location,de);break;case 3:n.vertexAttrib3fv(oe.location,de);break;case 4:n.vertexAttrib4fv(oe.location,de);break;default:n.vertexAttrib1fv(oe.location,de)}}}}S()}function w(){M();for(const R in i){const U=i[R];for(const H in U){const Y=U[H];for(const B in Y){const K=Y[B];for(const V in K)u(K[V].object),delete K[V];delete Y[B]}}delete i[R]}}function E(R){if(i[R.id]===void 0)return;const U=i[R.id];for(const H in U){const Y=U[H];for(const B in Y){const K=Y[B];for(const V in K)u(K[V].object),delete K[V];delete Y[B]}}delete i[R.id]}function C(R){for(const U in i){const H=i[U];for(const Y in H){const B=H[Y];if(B[R.id]===void 0)continue;const K=B[R.id];for(const V in K)u(K[V].object),delete K[V];delete B[R.id]}}}function v(R){for(const U in i){const H=i[U],Y=R.isInstancedMesh===!0?R.id:0,B=H[Y];if(B!==void 0){for(const K in B){const V=B[K];for(const ee in V)u(V[ee].object),delete V[ee];delete B[K]}delete H[Y],Object.keys(H).length===0&&delete i[U]}}}function M(){P(),a=!0,s!==r&&(s=r,c(s.object))}function P(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:M,resetDefaultState:P,dispose:w,releaseStatesOfGeometry:E,releaseStatesOfObject:v,releaseStatesOfProgram:C,initAttributes:b,enableAttribute:m,disableUnusedAttributes:S}}function Um(n,e,t){let i;function r(l){i=l}function s(l,c){n.drawArrays(i,l,c),t.update(c,i,1)}function a(l,c,u){u!==0&&(n.drawArraysInstanced(i,l,c,u),t.update(c,i,u))}function o(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,u);let d=0;for(let h=0;h<u;h++)d+=c[h];t.update(d,i,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function Nm(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(C){return!(C!==fn&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const v=C===Wn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==Qt&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==wn&&!v)}function l(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(He("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&d===!1&&He("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),S=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),I=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),w=n.getParameter(n.MAX_SAMPLES),E=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:h,maxVertexTextures:_,maxTextureSize:b,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:S,maxVaryings:I,maxFragmentUniforms:x,maxSamples:w,samples:E}}function Fm(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new ri,o=new Ve,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const h=f.length!==0||d||i!==0||r;return r=d,i=f.length,h},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){t=u(f,d,0)},this.setState=function(f,d,h){const _=f.clippingPlanes,b=f.clipIntersection,m=f.clipShadows,p=n.get(f);if(!r||_===null||_.length===0||s&&!m)s?u(null):c();else{const S=s?0:i,I=S*4;let x=p.clippingState||null;l.value=x,x=u(_,d,I,h);for(let w=0;w!==I;++w)x[w]=t[w];p.clippingState=x,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,d,h,_){const b=f!==null?f.length:0;let m=null;if(b!==0){if(m=l.value,_!==!0||m===null){const p=h+b*4,S=d.matrixWorldInverse;o.getNormalMatrix(S),(m===null||m.length<p)&&(m=new Float32Array(p));for(let I=0,x=h;I!==b;++I,x+=4)a.copy(f[I]).applyMatrix4(S,o),a.normal.toArray(m,x),m[x+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,m}}const oi=4,rc=[.125,.215,.35,.446,.526,.582],yi=20,Om=256,Rr=new Dd,sc=new je;let Sa=null,ba=0,Ea=0,Ta=!1;const km=new G;class ac{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,s={}){const{size:a=256,position:o=km}=s;Sa=this._renderer.getRenderTarget(),ba=this._renderer.getActiveCubeFace(),Ea=this._renderer.getActiveMipmapLevel(),Ta=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=cc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=lc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Sa,ba,Ea),this._renderer.xr.enabled=Ta,e.scissorTest=!1,er(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ti||e.mapping===pr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Sa=this._renderer.getRenderTarget(),ba=this._renderer.getActiveCubeFace(),Ea=this._renderer.getActiveMipmapLevel(),Ta=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Ct,minFilter:Ct,generateMipmaps:!1,type:Wn,format:fn,colorSpace:Ns,depthBuffer:!1},r=oc(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=oc(e,t,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Bm(s)),this._blurMaterial=Hm(s,e,t),this._ggxMaterial=zm(s,e,t)}return r}_compileMaterial(e){const t=new Ut(new xn,e);this._renderer.compile(t,Rr)}_sceneToCubeUV(e,t,i,r,s){const l=new Jt(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,h=f.toneMapping;f.getClearColor(sc),f.toneMapping=Rn,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ut(new Ii,new Ai({name:"PMREM.Background",side:Yt,depthWrite:!1,depthTest:!1})));const b=this._backgroundBox,m=b.material;let p=!1;const S=e.background;S?S.isColor&&(m.color.copy(S),e.background=null,p=!0):(m.color.copy(sc),p=!0);for(let I=0;I<6;I++){const x=I%3;x===0?(l.up.set(0,c[I],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[I],s.y,s.z)):x===1?(l.up.set(0,0,c[I]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[I],s.z)):(l.up.set(0,c[I],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[I]));const w=this._cubeSize;er(r,x*w,I>2?w:0,w,w),f.setRenderTarget(r),p&&f.render(b,l),f.render(e,l)}f.toneMapping=h,f.autoClear=d,e.background=S}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Ti||e.mapping===pr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=cc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=lc());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;er(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,Rr)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=i}_applyGGXFilter(e,t,i){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const l=a.uniforms,c=i/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),f=Math.sqrt(c*c-u*u),d=0+c*1.25,h=f*d,{_lodMax:_}=this,b=this._sizeLods[i],m=3*b*(i>_-oi?i-_+oi:0),p=4*(this._cubeSize-b);l.envMap.value=e.texture,l.roughness.value=h,l.mipInt.value=_-t,er(s,m,p,3*b,2*b),r.setRenderTarget(s),r.render(o,Rr),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=_-i,er(e,m,p,3*b,2*b),r.setRenderTarget(e),r.render(o,Rr)}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&et("blur direction must be either latitudinal or longitudinal!");const u=3,f=this._lodMeshes[r];f.material=c;const d=c.uniforms,h=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*h):2*Math.PI/(2*yi-1),b=s/_,m=isFinite(s)?1+Math.floor(u*b):yi;m>yi&&He(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${yi}`);const p=[];let S=0;for(let C=0;C<yi;++C){const v=C/b,M=Math.exp(-v*v/2);p.push(M),C===0?S+=M:C<m&&(S+=2*M)}for(let C=0;C<p.length;C++)p[C]=p[C]/S;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:I}=this;d.dTheta.value=_,d.mipInt.value=I-i;const x=this._sizeLods[r],w=3*x*(r>I-oi?r-I+oi:0),E=4*(this._cubeSize-x);er(t,w,E,3*x,2*x),l.setRenderTarget(t),l.render(f,Rr)}}function Bm(n){const e=[],t=[],i=[];let r=n;const s=n-oi+1+rc.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let l=1/o;a>n-oi?l=rc[a-n+oi-1]:a===0&&(l=0),t.push(l);const c=1/(o-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],h=6,_=6,b=3,m=2,p=1,S=new Float32Array(b*_*h),I=new Float32Array(m*_*h),x=new Float32Array(p*_*h);for(let E=0;E<h;E++){const C=E%3*2/3-1,v=E>2?0:-1,M=[C,v,0,C+2/3,v,0,C+2/3,v+1,0,C,v,0,C+2/3,v+1,0,C,v+1,0];S.set(M,b*_*E),I.set(d,m*_*E);const P=[E,E,E,E,E,E];x.set(P,p*_*E)}const w=new xn;w.setAttribute("position",new hn(S,b)),w.setAttribute("uv",new hn(I,m)),w.setAttribute("faceIndex",new hn(x,p)),i.push(new Ut(w,null)),r>oi&&r--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function oc(n,e,t){const i=new Cn(n,e,t);return i.texture.mapping=Gs,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function er(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function zm(n,e,t){return new In({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Om,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Vs(),fragmentShader:`

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
		`,blending:Hn,depthTest:!1,depthWrite:!1})}function Hm(n,e,t){const i=new Float32Array(yi),r=new G(0,1,0);return new In({name:"SphericalGaussianBlur",defines:{n:yi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Vs(),fragmentShader:`

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
		`,blending:Hn,depthTest:!1,depthWrite:!1})}function lc(){return new In({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Vs(),fragmentShader:`

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
		`,blending:Hn,depthTest:!1,depthWrite:!1})}function cc(){return new In({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Vs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Hn,depthTest:!1,depthWrite:!1})}function Vs(){return`

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
	`}class Fd extends Cn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Ad(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ii(5,5,5),s=new In({name:"CubemapFromEquirect",uniforms:gr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Yt,blending:Hn});s.uniforms.tEquirect.value=t;const a=new Ut(r,s),o=t.minFilter;return t.minFilter===Si&&(t.minFilter=Ct),new qf(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}function Gm(n){let e=new WeakMap,t=new WeakMap,i=null;function r(d,h=!1){return d==null?null:h?a(d):s(d)}function s(d){if(d&&d.isTexture){const h=d.mapping;if(h===$s||h===Ks)if(e.has(d)){const _=e.get(d).texture;return o(_,d.mapping)}else{const _=d.image;if(_&&_.height>0){const b=new Fd(_.height);return b.fromEquirectangularTexture(n,d),e.set(d,b),d.addEventListener("dispose",c),o(b.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture){const h=d.mapping,_=h===$s||h===Ks,b=h===Ti||h===pr;if(_||b){let m=t.get(d);const p=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==p)return i===null&&(i=new ac(n)),m=_?i.fromEquirectangular(d,m):i.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),m.texture;if(m!==void 0)return m.texture;{const S=d.image;return _&&S&&S.height>0||b&&S&&l(S)?(i===null&&(i=new ac(n)),m=_?i.fromEquirectangular(d):i.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),d.addEventListener("dispose",u),m.texture):null}}}return d}function o(d,h){return h===$s?d.mapping=Ti:h===Ks&&(d.mapping=pr),d}function l(d){let h=0;const _=6;for(let b=0;b<_;b++)d[b]!==void 0&&h++;return h===_}function c(d){const h=d.target;h.removeEventListener("dispose",c);const _=e.get(h);_!==void 0&&(e.delete(h),_.dispose())}function u(d){const h=d.target;h.removeEventListener("dispose",u);const _=t.get(h);_!==void 0&&(t.delete(h),_.dispose())}function f(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:f}}function Vm(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const r=n.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&cr("WebGLRenderer: "+i+" extension not supported."),r}}}function Wm(n,e,t,i){const r={},s=new WeakMap;function a(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const _ in d.attributes)e.remove(d.attributes[_]);d.removeEventListener("dispose",a),delete r[d.id];const h=s.get(d);h&&(e.remove(h),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(f,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,t.memory.geometries++),d}function l(f){const d=f.attributes;for(const h in d)e.update(d[h],n.ARRAY_BUFFER)}function c(f){const d=[],h=f.index,_=f.attributes.position;let b=0;if(_===void 0)return;if(h!==null){const S=h.array;b=h.version;for(let I=0,x=S.length;I<x;I+=3){const w=S[I+0],E=S[I+1],C=S[I+2];d.push(w,E,E,C,C,w)}}else{const S=_.array;b=_.version;for(let I=0,x=S.length/3-1;I<x;I+=3){const w=I+0,E=I+1,C=I+2;d.push(w,E,E,C,C,w)}}const m=new(_.count>=65535?Ed:bd)(d,1);m.version=b;const p=s.get(f);p&&e.remove(p),s.set(f,m)}function u(f){const d=s.get(f);if(d){const h=f.index;h!==null&&d.version<h.version&&c(f)}else c(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function Xm(n,e,t){let i;function r(f){i=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function l(f,d){n.drawElements(i,d,s,f*a),t.update(d,i,1)}function c(f,d,h){h!==0&&(n.drawElementsInstanced(i,d,s,f*a,h),t.update(d,i,h))}function u(f,d,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,s,f,0,h);let b=0;for(let m=0;m<h;m++)b+=d[m];t.update(b,i,1)}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function qm(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:et("WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function Ym(n,e,t){const i=new WeakMap,r=new St;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0;let d=i.get(o);if(d===void 0||d.count!==f){let P=function(){v.dispose(),i.delete(o),o.removeEventListener("dispose",P)};var h=P;d!==void 0&&d.texture.dispose();const _=o.morphAttributes.position!==void 0,b=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],S=o.morphAttributes.normal||[],I=o.morphAttributes.color||[];let x=0;_===!0&&(x=1),b===!0&&(x=2),m===!0&&(x=3);let w=o.attributes.position.count*x,E=1;w>e.maxTextureSize&&(E=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const C=new Float32Array(w*E*4*f),v=new yd(C,w,E,f);v.type=wn,v.needsUpdate=!0;const M=x*4;for(let R=0;R<f;R++){const U=p[R],H=S[R],Y=I[R],B=w*E*4*R;for(let K=0;K<U.count;K++){const V=K*M;_===!0&&(r.fromBufferAttribute(U,K),C[B+V+0]=r.x,C[B+V+1]=r.y,C[B+V+2]=r.z,C[B+V+3]=0),b===!0&&(r.fromBufferAttribute(H,K),C[B+V+4]=r.x,C[B+V+5]=r.y,C[B+V+6]=r.z,C[B+V+7]=0),m===!0&&(r.fromBufferAttribute(Y,K),C[B+V+8]=r.x,C[B+V+9]=r.y,C[B+V+10]=r.z,C[B+V+11]=Y.itemSize===4?r.w:1)}}d={count:f,texture:v,size:new We(w,E)},i.set(o,d),o.addEventListener("dispose",P)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let _=0;for(let m=0;m<c.length;m++)_+=c[m];const b=o.morphTargetsRelative?1:1-_;l.getUniforms().setValue(n,"morphTargetBaseInfluence",b),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:s}}function $m(n,e,t,i,r){let s=new WeakMap;function a(c){const u=r.render.frame,f=c.geometry,d=e.get(c,f);if(s.get(d)!==u&&(e.update(d),s.set(d,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==u&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,u))),c.isSkinnedMesh){const h=c.skeleton;s.get(h)!==u&&(h.update(),s.set(h,u))}return d}function o(){s=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}const Km={[sd]:"LINEAR_TONE_MAPPING",[ad]:"REINHARD_TONE_MAPPING",[od]:"CINEON_TONE_MAPPING",[ld]:"ACES_FILMIC_TONE_MAPPING",[dd]:"AGX_TONE_MAPPING",[ud]:"NEUTRAL_TONE_MAPPING",[cd]:"CUSTOM_TONE_MAPPING"};function Zm(n,e,t,i,r,s){const a=new Cn(e,t,{type:n,depthBuffer:r,stencilBuffer:s,samples:i?4:0,depthTexture:r?new mr(e,t):void 0}),o=new Cn(e,t,{type:Wn,depthBuffer:!1,stencilBuffer:!1}),l=new xn;l.setAttribute("position",new rn([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new rn([0,2,0,0,2,0],2));const c=new Of({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new Ut(l,c),f=new Dd(-1,1,1,-1,0,1);let d=null,h=null,_=!1,b,m=null,p=[],S=!1;this.setSize=function(I,x){a.setSize(I,x),o.setSize(I,x);for(let w=0;w<p.length;w++){const E=p[w];E.setSize&&E.setSize(I,x)}},this.setEffects=function(I){p=I,S=p.length>0&&p[0].isRenderPass===!0;const x=a.width,w=a.height;for(let E=0;E<p.length;E++){const C=p[E];C.setSize&&C.setSize(x,w)}},this.begin=function(I,x){if(_||I.toneMapping===Rn&&p.length===0)return!1;if(m=x,x!==null){const w=x.width,E=x.height;(a.width!==w||a.height!==E)&&this.setSize(w,E)}return S===!1&&I.setRenderTarget(a),b=I.toneMapping,I.toneMapping=Rn,!0},this.hasRenderPass=function(){return S},this.end=function(I,x){I.toneMapping=b,_=!0;let w=a,E=o;for(let C=0;C<p.length;C++){const v=p[C];if(v.enabled!==!1&&(v.render(I,E,w,x),v.needsSwap!==!1)){const M=w;w=E,E=M}}if(d!==I.outputColorSpace||h!==I.toneMapping){d=I.outputColorSpace,h=I.toneMapping,c.defines={},tt.getTransfer(d)===ct&&(c.defines.SRGB_TRANSFER="");const C=Km[h];C&&(c.defines[C]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=w.texture,I.setRenderTarget(m),I.render(u,f),m=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){a.depthTexture&&a.depthTexture.dispose(),a.dispose(),o.dispose(),l.dispose(),c.dispose()}}const Od=new Nt,Po=new mr(1,1),kd=new yd,Bd=new ff,zd=new Ad,dc=[],uc=[],fc=new Float32Array(16),hc=new Float32Array(9),pc=new Float32Array(4);function Mr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=dc[r];if(s===void 0&&(s=new Float32Array(r),dc[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function It(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Lt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Ws(n,e){let t=uc[e];t===void 0&&(t=new Int32Array(e),uc[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Jm(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Qm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;n.uniform2fv(this.addr,e),Lt(t,e)}}function jm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(It(t,e))return;n.uniform3fv(this.addr,e),Lt(t,e)}}function eg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;n.uniform4fv(this.addr,e),Lt(t,e)}}function tg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(It(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Lt(t,e)}else{if(It(t,i))return;pc.set(i),n.uniformMatrix2fv(this.addr,!1,pc),Lt(t,i)}}function ng(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(It(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Lt(t,e)}else{if(It(t,i))return;hc.set(i),n.uniformMatrix3fv(this.addr,!1,hc),Lt(t,i)}}function ig(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(It(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Lt(t,e)}else{if(It(t,i))return;fc.set(i),n.uniformMatrix4fv(this.addr,!1,fc),Lt(t,i)}}function rg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function sg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;n.uniform2iv(this.addr,e),Lt(t,e)}}function ag(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(It(t,e))return;n.uniform3iv(this.addr,e),Lt(t,e)}}function og(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;n.uniform4iv(this.addr,e),Lt(t,e)}}function lg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function cg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;n.uniform2uiv(this.addr,e),Lt(t,e)}}function dg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(It(t,e))return;n.uniform3uiv(this.addr,e),Lt(t,e)}}function ug(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;n.uniform4uiv(this.addr,e),Lt(t,e)}}function fg(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Po.compareFunction=t.isReversedDepthBuffer()?Zo:Ko,s=Po):s=Od,t.setTexture2D(e||s,r)}function hg(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Bd,r)}function pg(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||zd,r)}function mg(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||kd,r)}function gg(n){switch(n){case 5126:return Jm;case 35664:return Qm;case 35665:return jm;case 35666:return eg;case 35674:return tg;case 35675:return ng;case 35676:return ig;case 5124:case 35670:return rg;case 35667:case 35671:return sg;case 35668:case 35672:return ag;case 35669:case 35673:return og;case 5125:return lg;case 36294:return cg;case 36295:return dg;case 36296:return ug;case 35678:case 36198:case 36298:case 36306:case 35682:return fg;case 35679:case 36299:case 36307:return hg;case 35680:case 36300:case 36308:case 36293:return pg;case 36289:case 36303:case 36311:case 36292:return mg}}function _g(n,e){n.uniform1fv(this.addr,e)}function xg(n,e){const t=Mr(e,this.size,2);n.uniform2fv(this.addr,t)}function vg(n,e){const t=Mr(e,this.size,3);n.uniform3fv(this.addr,t)}function Mg(n,e){const t=Mr(e,this.size,4);n.uniform4fv(this.addr,t)}function yg(n,e){const t=Mr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Sg(n,e){const t=Mr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function bg(n,e){const t=Mr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Eg(n,e){n.uniform1iv(this.addr,e)}function Tg(n,e){n.uniform2iv(this.addr,e)}function wg(n,e){n.uniform3iv(this.addr,e)}function Ag(n,e){n.uniform4iv(this.addr,e)}function Rg(n,e){n.uniform1uiv(this.addr,e)}function Cg(n,e){n.uniform2uiv(this.addr,e)}function Pg(n,e){n.uniform3uiv(this.addr,e)}function Ig(n,e){n.uniform4uiv(this.addr,e)}function Lg(n,e,t){const i=this.cache,r=e.length,s=Ws(t,r);It(i,s)||(n.uniform1iv(this.addr,s),Lt(i,s));let a;this.type===n.SAMPLER_2D_SHADOW?a=Po:a=Od;for(let o=0;o!==r;++o)t.setTexture2D(e[o]||a,s[o])}function Dg(n,e,t){const i=this.cache,r=e.length,s=Ws(t,r);It(i,s)||(n.uniform1iv(this.addr,s),Lt(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Bd,s[a])}function Ug(n,e,t){const i=this.cache,r=e.length,s=Ws(t,r);It(i,s)||(n.uniform1iv(this.addr,s),Lt(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||zd,s[a])}function Ng(n,e,t){const i=this.cache,r=e.length,s=Ws(t,r);It(i,s)||(n.uniform1iv(this.addr,s),Lt(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||kd,s[a])}function Fg(n){switch(n){case 5126:return _g;case 35664:return xg;case 35665:return vg;case 35666:return Mg;case 35674:return yg;case 35675:return Sg;case 35676:return bg;case 5124:case 35670:return Eg;case 35667:case 35671:return Tg;case 35668:case 35672:return wg;case 35669:case 35673:return Ag;case 5125:return Rg;case 36294:return Cg;case 36295:return Pg;case 36296:return Ig;case 35678:case 36198:case 36298:case 36306:case 35682:return Lg;case 35679:case 36299:case 36307:return Dg;case 35680:case 36300:case 36308:case 36293:return Ug;case 36289:case 36303:case 36311:case 36292:return Ng}}class Og{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=gg(t.type)}}class kg{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Fg(t.type)}}class Bg{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const wa=/(\w+)(\])?(\[|\.)?/g;function mc(n,e){n.seq.push(e),n.map[e.id]=e}function zg(n,e,t){const i=n.name,r=i.length;for(wa.lastIndex=0;;){const s=wa.exec(i),a=wa.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){mc(t,c===void 0?new Og(o,n,e):new kg(o,n,e));break}else{let f=t.map[o];f===void 0&&(f=new Bg(o),mc(t,f)),t=f}}}class Cs{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);zg(o,l,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function gc(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const Hg=37297;let Gg=0;function Vg(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const _c=new Ve;function Wg(n){tt._getMatrix(_c,tt.workingColorSpace,n);const e=`mat3( ${_c.elements.map(t=>t.toFixed(4))} )`;switch(tt.getTransfer(n)){case Fs:return[e,"LinearTransferOETF"];case ct:return[e,"sRGBTransferOETF"];default:return He("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function xc(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+Vg(n.getShaderSource(e),o)}else return s}function Xg(n,e){const t=Wg(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const qg={[sd]:"Linear",[ad]:"Reinhard",[od]:"Cineon",[ld]:"ACESFilmic",[dd]:"AgX",[ud]:"Neutral",[cd]:"Custom"};function Yg(n,e){const t=qg[e];return t===void 0?(He("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const xs=new G;function $g(){tt.getLuminanceCoefficients(xs);const n=xs.x.toFixed(4),e=xs.y.toFixed(4),t=xs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Kg(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Nr).join(`
`)}function Zg(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Jg(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function Nr(n){return n!==""}function vc(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Mc(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Qg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Io(n){return n.replace(Qg,e0)}const jg=new Map;function e0(n,e){let t=Ke[e];if(t===void 0){const i=jg.get(e);if(i!==void 0)t=Ke[i],He('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Io(t)}const t0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function yc(n){return n.replace(t0,n0)}function n0(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Sc(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}const i0={[Es]:"SHADOWMAP_TYPE_PCF",[Ur]:"SHADOWMAP_TYPE_VSM"};function r0(n){return i0[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const s0={[Ti]:"ENVMAP_TYPE_CUBE",[pr]:"ENVMAP_TYPE_CUBE",[Gs]:"ENVMAP_TYPE_CUBE_UV"};function a0(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":s0[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const o0={[pr]:"ENVMAP_MODE_REFRACTION"};function l0(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":o0[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const c0={[rd]:"ENVMAP_BLENDING_MULTIPLY",[Cu]:"ENVMAP_BLENDING_MIX",[Pu]:"ENVMAP_BLENDING_ADD"};function d0(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":c0[n.combine]||"ENVMAP_BLENDING_NONE"}function u0(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function f0(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=r0(t),c=a0(t),u=l0(t),f=d0(t),d=u0(t),h=Kg(t),_=Zg(s),b=r.createProgram();let m,p,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Nr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Nr).join(`
`),p.length>0&&(p+=`
`)):(m=[Sc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Nr).join(`
`),p=[Sc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Rn?"#define TONE_MAPPING":"",t.toneMapping!==Rn?Ke.tonemapping_pars_fragment:"",t.toneMapping!==Rn?Yg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ke.colorspace_pars_fragment,Xg("linearToOutputTexel",t.outputColorSpace),$g(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Nr).join(`
`)),a=Io(a),a=vc(a,t),a=Mc(a,t),o=Io(o),o=vc(o,t),o=Mc(o,t),a=yc(a),o=yc(o),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Al?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Al?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const I=S+m+a,x=S+p+o,w=gc(r,r.VERTEX_SHADER,I),E=gc(r,r.FRAGMENT_SHADER,x);r.attachShader(b,w),r.attachShader(b,E),t.index0AttributeName!==void 0?r.bindAttribLocation(b,0,t.index0AttributeName):t.hasPositionAttribute===!0&&r.bindAttribLocation(b,0,"position"),r.linkProgram(b);function C(R){if(n.debug.checkShaderErrors){const U=r.getProgramInfoLog(b)||"",H=r.getShaderInfoLog(w)||"",Y=r.getShaderInfoLog(E)||"",B=U.trim(),K=H.trim(),V=Y.trim();let ee=!0,oe=!0;if(r.getProgramParameter(b,r.LINK_STATUS)===!1)if(ee=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,b,w,E);else{const Z=xc(r,w,"vertex"),de=xc(r,E,"fragment");et("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(b,r.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+B+`
`+Z+`
`+de)}else B!==""?He("WebGLProgram: Program Info Log:",B):(K===""||V==="")&&(oe=!1);oe&&(R.diagnostics={runnable:ee,programLog:B,vertexShader:{log:K,prefix:m},fragmentShader:{log:V,prefix:p}})}r.deleteShader(w),r.deleteShader(E),v=new Cs(r,b),M=Jg(r,b)}let v;this.getUniforms=function(){return v===void 0&&C(this),v};let M;this.getAttributes=function(){return M===void 0&&C(this),M};let P=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=r.getProgramParameter(b,Hg)),P},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(b),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Gg++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=w,this.fragmentShader=E,this}let h0=0;class p0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){const r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new m0(e),t.set(e,i)),i}}class m0{constructor(e){this.id=h0++,this.code=e,this.usedTimes=0}}function g0(n){return n===wi||n===Ds||n===Us}function _0(n,e,t,i,r,s){const a=new jo,o=new p0,l=new Set,c=[],u=new Map,f=i.logarithmicDepthBuffer;let d=i.precision;const h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(v){return l.add(v),v===0?"uv":`uv${v}`}function b(v,M,P,R,U,H){const Y=R.fog,B=U.geometry,K=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?R.environment:null,V=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,ee=e.get(v.envMap||K,V),oe=ee&&ee.mapping===Gs?ee.image.height:null,Z=h[v.type];v.precision!==null&&(d=i.getMaxPrecision(v.precision),d!==v.precision&&He("WebGLProgram.getParameters:",v.precision,"not supported, using",d,"instead."));const de=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,he=de!==void 0?de.length:0;let $e=0;B.morphAttributes.position!==void 0&&($e=1),B.morphAttributes.normal!==void 0&&($e=2),B.morphAttributes.color!==void 0&&($e=3);let ot,Oe,j,le;if(Z){const Re=En[Z];ot=Re.vertexShader,Oe=Re.fragmentShader}else{ot=v.vertexShader,Oe=v.fragmentShader;const Re=o.getVertexShaderStage(v),Et=o.getFragmentShaderStage(v);o.update(v,Re,Et),j=Re.id,le=Et.id}const ae=n.getRenderTarget(),ke=n.state.buffers.depth.getReversed(),Ge=U.isInstancedMesh===!0,Ue=U.isBatchedMesh===!0,mt=!!v.map,Ye=!!v.matcap,rt=!!ee,N=!!v.aoMap,L=!!v.lightMap,A=!!v.bumpMap&&v.wireframe===!1,F=!!v.normalMap,ne=!!v.displacementMap,ie=!!v.emissiveMap,ce=!!v.metalnessMap,ye=!!v.roughnessMap,D=v.anisotropy>0,Se=v.clearcoat>0,Ae=v.dispersion>0,T=v.iridescence>0,g=v.sheen>0,z=v.transmission>0,W=D&&!!v.anisotropyMap,J=Se&&!!v.clearcoatMap,ue=Se&&!!v.clearcoatNormalMap,pe=Se&&!!v.clearcoatRoughnessMap,Q=T&&!!v.iridescenceMap,re=T&&!!v.iridescenceThicknessMap,me=g&&!!v.sheenColorMap,Ie=g&&!!v.sheenRoughnessMap,xe=!!v.specularMap,ge=!!v.specularColorMap,Ne=!!v.specularIntensityMap,ze=z&&!!v.transmissionMap,Xe=z&&!!v.thicknessMap,O=!!v.gradientMap,fe=!!v.alphaMap,te=v.alphaTest>0,_e=!!v.alphaHash,Ee=!!v.extensions;let se=Rn;v.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(se=n.toneMapping);const Pe={shaderID:Z,shaderType:v.type,shaderName:v.name,vertexShader:ot,fragmentShader:Oe,defines:v.defines,customVertexShaderID:j,customFragmentShaderID:le,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:d,batching:Ue,batchingColor:Ue&&U._colorsTexture!==null,instancing:Ge,instancingColor:Ge&&U.instanceColor!==null,instancingMorph:Ge&&U.morphTexture!==null,outputColorSpace:ae===null?n.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:tt.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:mt,matcap:Ye,envMap:rt,envMapMode:rt&&ee.mapping,envMapCubeUVHeight:oe,aoMap:N,lightMap:L,bumpMap:A,normalMap:F,displacementMap:ne,emissiveMap:ie,normalMapObjectSpace:F&&v.normalMapType===Du,normalMapTangentSpace:F&&v.normalMapType===Ao,packedNormalMap:F&&v.normalMapType===Ao&&g0(v.normalMap.format),metalnessMap:ce,roughnessMap:ye,anisotropy:D,anisotropyMap:W,clearcoat:Se,clearcoatMap:J,clearcoatNormalMap:ue,clearcoatRoughnessMap:pe,dispersion:Ae,iridescence:T,iridescenceMap:Q,iridescenceThicknessMap:re,sheen:g,sheenColorMap:me,sheenRoughnessMap:Ie,specularMap:xe,specularColorMap:ge,specularIntensityMap:Ne,transmission:z,transmissionMap:ze,thicknessMap:Xe,gradientMap:O,opaque:v.transparent===!1&&v.blending===lr&&v.alphaToCoverage===!1,alphaMap:fe,alphaTest:te,alphaHash:_e,combine:v.combine,mapUv:mt&&_(v.map.channel),aoMapUv:N&&_(v.aoMap.channel),lightMapUv:L&&_(v.lightMap.channel),bumpMapUv:A&&_(v.bumpMap.channel),normalMapUv:F&&_(v.normalMap.channel),displacementMapUv:ne&&_(v.displacementMap.channel),emissiveMapUv:ie&&_(v.emissiveMap.channel),metalnessMapUv:ce&&_(v.metalnessMap.channel),roughnessMapUv:ye&&_(v.roughnessMap.channel),anisotropyMapUv:W&&_(v.anisotropyMap.channel),clearcoatMapUv:J&&_(v.clearcoatMap.channel),clearcoatNormalMapUv:ue&&_(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:pe&&_(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Q&&_(v.iridescenceMap.channel),iridescenceThicknessMapUv:re&&_(v.iridescenceThicknessMap.channel),sheenColorMapUv:me&&_(v.sheenColorMap.channel),sheenRoughnessMapUv:Ie&&_(v.sheenRoughnessMap.channel),specularMapUv:xe&&_(v.specularMap.channel),specularColorMapUv:ge&&_(v.specularColorMap.channel),specularIntensityMapUv:Ne&&_(v.specularIntensityMap.channel),transmissionMapUv:ze&&_(v.transmissionMap.channel),thicknessMapUv:Xe&&_(v.thicknessMap.channel),alphaMapUv:fe&&_(v.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(F||D),vertexNormals:!!B.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!B.attributes.uv&&(mt||fe),fog:!!Y,useFog:v.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||B.attributes.normal===void 0&&F===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:ke,skinning:U.isSkinnedMesh===!0,hasPositionAttribute:B.attributes.position!==void 0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:he,morphTextureStride:$e,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numLightProbeGrids:H.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:v.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:se,decodeVideoTexture:mt&&v.map.isVideoTexture===!0&&tt.getTransfer(v.map.colorSpace)===ct,decodeVideoTextureEmissive:ie&&v.emissiveMap.isVideoTexture===!0&&tt.getTransfer(v.emissiveMap.colorSpace)===ct,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Bn,flipSided:v.side===Yt,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:Ee&&v.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ee&&v.extensions.multiDraw===!0||Ue)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Pe.vertexUv1s=l.has(1),Pe.vertexUv2s=l.has(2),Pe.vertexUv3s=l.has(3),l.clear(),Pe}function m(v){const M=[];if(v.shaderID?M.push(v.shaderID):(M.push(v.customVertexShaderID),M.push(v.customFragmentShaderID)),v.defines!==void 0)for(const P in v.defines)M.push(P),M.push(v.defines[P]);return v.isRawShaderMaterial===!1&&(p(M,v),S(M,v),M.push(n.outputColorSpace)),M.push(v.customProgramCacheKey),M.join()}function p(v,M){v.push(M.precision),v.push(M.outputColorSpace),v.push(M.envMapMode),v.push(M.envMapCubeUVHeight),v.push(M.mapUv),v.push(M.alphaMapUv),v.push(M.lightMapUv),v.push(M.aoMapUv),v.push(M.bumpMapUv),v.push(M.normalMapUv),v.push(M.displacementMapUv),v.push(M.emissiveMapUv),v.push(M.metalnessMapUv),v.push(M.roughnessMapUv),v.push(M.anisotropyMapUv),v.push(M.clearcoatMapUv),v.push(M.clearcoatNormalMapUv),v.push(M.clearcoatRoughnessMapUv),v.push(M.iridescenceMapUv),v.push(M.iridescenceThicknessMapUv),v.push(M.sheenColorMapUv),v.push(M.sheenRoughnessMapUv),v.push(M.specularMapUv),v.push(M.specularColorMapUv),v.push(M.specularIntensityMapUv),v.push(M.transmissionMapUv),v.push(M.thicknessMapUv),v.push(M.combine),v.push(M.fogExp2),v.push(M.sizeAttenuation),v.push(M.morphTargetsCount),v.push(M.morphAttributeCount),v.push(M.numDirLights),v.push(M.numPointLights),v.push(M.numSpotLights),v.push(M.numSpotLightMaps),v.push(M.numHemiLights),v.push(M.numRectAreaLights),v.push(M.numDirLightShadows),v.push(M.numPointLightShadows),v.push(M.numSpotLightShadows),v.push(M.numSpotLightShadowsWithMaps),v.push(M.numLightProbes),v.push(M.shadowMapType),v.push(M.toneMapping),v.push(M.numClippingPlanes),v.push(M.numClipIntersection),v.push(M.depthPacking)}function S(v,M){a.disableAll(),M.instancing&&a.enable(0),M.instancingColor&&a.enable(1),M.instancingMorph&&a.enable(2),M.matcap&&a.enable(3),M.envMap&&a.enable(4),M.normalMapObjectSpace&&a.enable(5),M.normalMapTangentSpace&&a.enable(6),M.clearcoat&&a.enable(7),M.iridescence&&a.enable(8),M.alphaTest&&a.enable(9),M.vertexColors&&a.enable(10),M.vertexAlphas&&a.enable(11),M.vertexUv1s&&a.enable(12),M.vertexUv2s&&a.enable(13),M.vertexUv3s&&a.enable(14),M.vertexTangents&&a.enable(15),M.anisotropy&&a.enable(16),M.alphaHash&&a.enable(17),M.batching&&a.enable(18),M.dispersion&&a.enable(19),M.batchingColor&&a.enable(20),M.gradientMap&&a.enable(21),M.packedNormalMap&&a.enable(22),M.vertexNormals&&a.enable(23),v.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),M.numLightProbeGrids>0&&a.enable(22),M.hasPositionAttribute&&a.enable(23),v.push(a.mask)}function I(v){const M=h[v.type];let P;if(M){const R=En[M];P=Uf.clone(R.uniforms)}else P=v.uniforms;return P}function x(v,M){let P=u.get(M);return P!==void 0?++P.usedTimes:(P=new f0(n,M,v,r),c.push(P),u.set(M,P)),P}function w(v){if(--v.usedTimes===0){const M=c.indexOf(v);c[M]=c[c.length-1],c.pop(),u.delete(v.cacheKey),v.destroy()}}function E(v){o.remove(v)}function C(){o.dispose()}return{getParameters:b,getProgramCacheKey:m,getUniforms:I,acquireProgram:x,releaseProgram:w,releaseShaderCache:E,programs:c,dispose:C}}function x0(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,l){n.get(a)[o]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function v0(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function bc(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Ec(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(d){let h=0;return d.isInstancedMesh&&(h+=2),d.isSkinnedMesh&&(h+=1),h}function o(d,h,_,b,m,p){let S=n[e];return S===void 0?(S={id:d.id,object:d,geometry:h,material:_,materialVariant:a(d),groupOrder:b,renderOrder:d.renderOrder,z:m,group:p},n[e]=S):(S.id=d.id,S.object=d,S.geometry=h,S.material=_,S.materialVariant=a(d),S.groupOrder=b,S.renderOrder=d.renderOrder,S.z=m,S.group=p),e++,S}function l(d,h,_,b,m,p){const S=o(d,h,_,b,m,p);_.transmission>0?i.push(S):_.transparent===!0?r.push(S):t.push(S)}function c(d,h,_,b,m,p){const S=o(d,h,_,b,m,p);_.transmission>0?i.unshift(S):_.transparent===!0?r.unshift(S):t.unshift(S)}function u(d,h,_){t.length>1&&t.sort(d||v0),i.length>1&&i.sort(h||bc),r.length>1&&r.sort(h||bc),_&&(t.reverse(),i.reverse(),r.reverse())}function f(){for(let d=e,h=n.length;d<h;d++){const _=n[d];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:l,unshift:c,finish:f,sort:u}}function M0(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new Ec,n.set(i,[a])):r>=s.length?(a=new Ec,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function y0(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new G,color:new je};break;case"SpotLight":t={position:new G,direction:new G,color:new je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new G,color:new je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new G,skyColor:new je,groundColor:new je};break;case"RectAreaLight":t={color:new je,position:new G,halfWidth:new G,halfHeight:new G};break}return n[e.id]=t,t}}}function S0(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let b0=0;function E0(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function T0(n){const e=new y0,t=S0(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new G);const r=new G,s=new yt,a=new yt;function o(c){let u=0,f=0,d=0;for(let M=0;M<9;M++)i.probe[M].set(0,0,0);let h=0,_=0,b=0,m=0,p=0,S=0,I=0,x=0,w=0,E=0,C=0;c.sort(E0);for(let M=0,P=c.length;M<P;M++){const R=c[M],U=R.color,H=R.intensity,Y=R.distance;let B=null;if(R.shadow&&R.shadow.map&&(R.shadow.map.texture.format===wi?B=R.shadow.map.texture:B=R.shadow.map.depthTexture||R.shadow.map.texture),R.isAmbientLight)u+=U.r*H,f+=U.g*H,d+=U.b*H;else if(R.isLightProbe){for(let K=0;K<9;K++)i.probe[K].addScaledVector(R.sh.coefficients[K],H);C++}else if(R.isDirectionalLight){const K=e.get(R);if(K.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const V=R.shadow,ee=t.get(R);ee.shadowIntensity=V.intensity,ee.shadowBias=V.bias,ee.shadowNormalBias=V.normalBias,ee.shadowRadius=V.radius,ee.shadowMapSize=V.mapSize,i.directionalShadow[h]=ee,i.directionalShadowMap[h]=B,i.directionalShadowMatrix[h]=R.shadow.matrix,S++}i.directional[h]=K,h++}else if(R.isSpotLight){const K=e.get(R);K.position.setFromMatrixPosition(R.matrixWorld),K.color.copy(U).multiplyScalar(H),K.distance=Y,K.coneCos=Math.cos(R.angle),K.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),K.decay=R.decay,i.spot[b]=K;const V=R.shadow;if(R.map&&(i.spotLightMap[w]=R.map,w++,V.updateMatrices(R),R.castShadow&&E++),i.spotLightMatrix[b]=V.matrix,R.castShadow){const ee=t.get(R);ee.shadowIntensity=V.intensity,ee.shadowBias=V.bias,ee.shadowNormalBias=V.normalBias,ee.shadowRadius=V.radius,ee.shadowMapSize=V.mapSize,i.spotShadow[b]=ee,i.spotShadowMap[b]=B,x++}b++}else if(R.isRectAreaLight){const K=e.get(R);K.color.copy(U).multiplyScalar(H),K.halfWidth.set(R.width*.5,0,0),K.halfHeight.set(0,R.height*.5,0),i.rectArea[m]=K,m++}else if(R.isPointLight){const K=e.get(R);if(K.color.copy(R.color).multiplyScalar(R.intensity),K.distance=R.distance,K.decay=R.decay,R.castShadow){const V=R.shadow,ee=t.get(R);ee.shadowIntensity=V.intensity,ee.shadowBias=V.bias,ee.shadowNormalBias=V.normalBias,ee.shadowRadius=V.radius,ee.shadowMapSize=V.mapSize,ee.shadowCameraNear=V.camera.near,ee.shadowCameraFar=V.camera.far,i.pointShadow[_]=ee,i.pointShadowMap[_]=B,i.pointShadowMatrix[_]=R.shadow.matrix,I++}i.point[_]=K,_++}else if(R.isHemisphereLight){const K=e.get(R);K.skyColor.copy(R.color).multiplyScalar(H),K.groundColor.copy(R.groundColor).multiplyScalar(H),i.hemi[p]=K,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ve.LTC_FLOAT_1,i.rectAreaLTC2=ve.LTC_FLOAT_2):(i.rectAreaLTC1=ve.LTC_HALF_1,i.rectAreaLTC2=ve.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=d;const v=i.hash;(v.directionalLength!==h||v.pointLength!==_||v.spotLength!==b||v.rectAreaLength!==m||v.hemiLength!==p||v.numDirectionalShadows!==S||v.numPointShadows!==I||v.numSpotShadows!==x||v.numSpotMaps!==w||v.numLightProbes!==C)&&(i.directional.length=h,i.spot.length=b,i.rectArea.length=m,i.point.length=_,i.hemi.length=p,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=I,i.pointShadowMap.length=I,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=I,i.spotLightMatrix.length=x+w-E,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=E,i.numLightProbes=C,v.directionalLength=h,v.pointLength=_,v.spotLength=b,v.rectAreaLength=m,v.hemiLength=p,v.numDirectionalShadows=S,v.numPointShadows=I,v.numSpotShadows=x,v.numSpotMaps=w,v.numLightProbes=C,i.version=b0++)}function l(c,u){let f=0,d=0,h=0,_=0,b=0;const m=u.matrixWorldInverse;for(let p=0,S=c.length;p<S;p++){const I=c[p];if(I.isDirectionalLight){const x=i.directional[f];x.direction.setFromMatrixPosition(I.matrixWorld),r.setFromMatrixPosition(I.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(m),f++}else if(I.isSpotLight){const x=i.spot[h];x.position.setFromMatrixPosition(I.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(I.matrixWorld),r.setFromMatrixPosition(I.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(m),h++}else if(I.isRectAreaLight){const x=i.rectArea[_];x.position.setFromMatrixPosition(I.matrixWorld),x.position.applyMatrix4(m),a.identity(),s.copy(I.matrixWorld),s.premultiply(m),a.extractRotation(s),x.halfWidth.set(I.width*.5,0,0),x.halfHeight.set(0,I.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),_++}else if(I.isPointLight){const x=i.point[d];x.position.setFromMatrixPosition(I.matrixWorld),x.position.applyMatrix4(m),d++}else if(I.isHemisphereLight){const x=i.hemi[b];x.direction.setFromMatrixPosition(I.matrixWorld),x.direction.transformDirection(m),b++}}}return{setup:o,setupView:l,state:i}}function Tc(n){const e=new T0(n),t=[],i=[],r=[];function s(d){f.camera=d,t.length=0,i.length=0,r.length=0}function a(d){t.push(d)}function o(d){i.push(d)}function l(d){r.push(d)}function c(){e.setup(t)}function u(d){e.setupView(t,d)}const f={lightsArray:t,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:f,setupLights:c,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function w0(n){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Tc(n),e.set(r,[o])):s>=a.length?(o=new Tc(n),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const A0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,R0=`uniform sampler2D shadow_pass;
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
}`,C0=[new G(1,0,0),new G(-1,0,0),new G(0,1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1)],P0=[new G(0,-1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1),new G(0,-1,0),new G(0,-1,0)],wc=new yt,Cr=new G,Aa=new G;function I0(n,e,t){let i=new nl;const r=new We,s=new We,a=new St,o=new kf,l=new Bf,c={},u=t.maxTextureSize,f={[di]:Yt,[Yt]:di,[Bn]:Bn},d=new In({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new We},radius:{value:4}},vertexShader:A0,fragmentShader:R0}),h=d.clone();h.defines.HORIZONTAL_PASS=1;const _=new xn;_.setAttribute("position",new hn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new Ut(_,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Es;let p=this.type;this.render=function(E,C,v){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;this.type===du&&(He("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Es);const M=n.getRenderTarget(),P=n.getActiveCubeFace(),R=n.getActiveMipmapLevel(),U=n.state;U.setBlending(Hn),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const H=p!==this.type;H&&C.traverse(function(Y){Y.material&&(Array.isArray(Y.material)?Y.material.forEach(B=>B.needsUpdate=!0):Y.material.needsUpdate=!0)});for(let Y=0,B=E.length;Y<B;Y++){const K=E[Y],V=K.shadow;if(V===void 0){He("WebGLShadowMap:",K,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;r.copy(V.mapSize);const ee=V.getFrameExtents();r.multiply(ee),s.copy(V.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/ee.x),r.x=s.x*ee.x,V.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/ee.y),r.y=s.y*ee.y,V.mapSize.y=s.y));const oe=n.state.buffers.depth.getReversed();if(V.camera._reversedDepth=oe,V.map===null||H===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===Ur){if(K.isPointLight){He("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new Cn(r.x,r.y,{format:wi,type:Wn,minFilter:Ct,magFilter:Ct,generateMipmaps:!1}),V.map.texture.name=K.name+".shadowMap",V.map.depthTexture=new mr(r.x,r.y,wn),V.map.depthTexture.name=K.name+".shadowMapDepth",V.map.depthTexture.format=Xn,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=bt,V.map.depthTexture.magFilter=bt}else K.isPointLight?(V.map=new Fd(r.x),V.map.depthTexture=new Lf(r.x,Pn)):(V.map=new Cn(r.x,r.y),V.map.depthTexture=new mr(r.x,r.y,Pn)),V.map.depthTexture.name=K.name+".shadowMap",V.map.depthTexture.format=Xn,this.type===Es?(V.map.depthTexture.compareFunction=oe?Zo:Ko,V.map.depthTexture.minFilter=Ct,V.map.depthTexture.magFilter=Ct):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=bt,V.map.depthTexture.magFilter=bt);V.camera.updateProjectionMatrix()}const Z=V.map.isWebGLCubeRenderTarget?6:1;for(let de=0;de<Z;de++){if(V.map.isWebGLCubeRenderTarget)n.setRenderTarget(V.map,de),n.clear();else{de===0&&(n.setRenderTarget(V.map),n.clear());const he=V.getViewport(de);a.set(s.x*he.x,s.y*he.y,s.x*he.z,s.y*he.w),U.viewport(a)}if(K.isPointLight){const he=V.camera,$e=V.matrix,ot=K.distance||he.far;ot!==he.far&&(he.far=ot,he.updateProjectionMatrix()),Cr.setFromMatrixPosition(K.matrixWorld),he.position.copy(Cr),Aa.copy(he.position),Aa.add(C0[de]),he.up.copy(P0[de]),he.lookAt(Aa),he.updateMatrixWorld(),$e.makeTranslation(-Cr.x,-Cr.y,-Cr.z),wc.multiplyMatrices(he.projectionMatrix,he.matrixWorldInverse),V._frustum.setFromProjectionMatrix(wc,he.coordinateSystem,he.reversedDepth)}else V.updateMatrices(K);i=V.getFrustum(),x(C,v,V.camera,K,this.type)}V.isPointLightShadow!==!0&&this.type===Ur&&S(V,v),V.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(M,P,R)};function S(E,C){const v=e.update(b);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,h.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,h.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Cn(r.x,r.y,{format:wi,type:Wn})),d.uniforms.shadow_pass.value=E.map.depthTexture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,n.setRenderTarget(E.mapPass),n.clear(),n.renderBufferDirect(C,null,v,d,b,null),h.uniforms.shadow_pass.value=E.mapPass.texture,h.uniforms.resolution.value=E.mapSize,h.uniforms.radius.value=E.radius,n.setRenderTarget(E.map),n.clear(),n.renderBufferDirect(C,null,v,h,b,null)}function I(E,C,v,M){let P=null;const R=v.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(R!==void 0)P=R;else if(P=v.isPointLight===!0?l:o,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const U=P.uuid,H=C.uuid;let Y=c[U];Y===void 0&&(Y={},c[U]=Y);let B=Y[H];B===void 0&&(B=P.clone(),Y[H]=B,C.addEventListener("dispose",w)),P=B}if(P.visible=C.visible,P.wireframe=C.wireframe,M===Ur?P.side=C.shadowSide!==null?C.shadowSide:C.side:P.side=C.shadowSide!==null?C.shadowSide:f[C.side],P.alphaMap=C.alphaMap,P.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,P.map=C.map,P.clipShadows=C.clipShadows,P.clippingPlanes=C.clippingPlanes,P.clipIntersection=C.clipIntersection,P.displacementMap=C.displacementMap,P.displacementScale=C.displacementScale,P.displacementBias=C.displacementBias,P.wireframeLinewidth=C.wireframeLinewidth,P.linewidth=C.linewidth,v.isPointLight===!0&&P.isMeshDistanceMaterial===!0){const U=n.properties.get(P);U.light=v}return P}function x(E,C,v,M,P){if(E.visible===!1)return;if(E.layers.test(C.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&P===Ur)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,E.matrixWorld);const H=e.update(E),Y=E.material;if(Array.isArray(Y)){const B=H.groups;for(let K=0,V=B.length;K<V;K++){const ee=B[K],oe=Y[ee.materialIndex];if(oe&&oe.visible){const Z=I(E,oe,M,P);E.onBeforeShadow(n,E,C,v,H,Z,ee),n.renderBufferDirect(v,null,H,Z,E,ee),E.onAfterShadow(n,E,C,v,H,Z,ee)}}}else if(Y.visible){const B=I(E,Y,M,P);E.onBeforeShadow(n,E,C,v,H,B,null),n.renderBufferDirect(v,null,H,B,E,null),E.onAfterShadow(n,E,C,v,H,B,null)}}const U=E.children;for(let H=0,Y=U.length;H<Y;H++)x(U[H],C,v,M,P)}function w(E){E.target.removeEventListener("dispose",w);for(const v in c){const M=c[v],P=E.target.uuid;P in M&&(M[P].dispose(),delete M[P])}}}function L0(n,e){function t(){let O=!1;const fe=new St;let te=null;const _e=new St(0,0,0,0);return{setMask:function(Ee){te!==Ee&&!O&&(n.colorMask(Ee,Ee,Ee,Ee),te=Ee)},setLocked:function(Ee){O=Ee},setClear:function(Ee,se,Pe,Re,Et){Et===!0&&(Ee*=Re,se*=Re,Pe*=Re),fe.set(Ee,se,Pe,Re),_e.equals(fe)===!1&&(n.clearColor(Ee,se,Pe,Re),_e.copy(fe))},reset:function(){O=!1,te=null,_e.set(-1,0,0,0)}}}function i(){let O=!1,fe=!1,te=null,_e=null,Ee=null;return{setReversed:function(se){if(fe!==se){const Pe=e.get("EXT_clip_control");se?Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.ZERO_TO_ONE_EXT):Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.NEGATIVE_ONE_TO_ONE_EXT),fe=se;const Re=Ee;Ee=null,this.setClear(Re)}},getReversed:function(){return fe},setTest:function(se){se?ae(n.DEPTH_TEST):ke(n.DEPTH_TEST)},setMask:function(se){te!==se&&!O&&(n.depthMask(se),te=se)},setFunc:function(se){if(fe&&(se=Vu[se]),_e!==se){switch(se){case Ha:n.depthFunc(n.NEVER);break;case Ga:n.depthFunc(n.ALWAYS);break;case Va:n.depthFunc(n.LESS);break;case hr:n.depthFunc(n.LEQUAL);break;case Wa:n.depthFunc(n.EQUAL);break;case Xa:n.depthFunc(n.GEQUAL);break;case qa:n.depthFunc(n.GREATER);break;case Ya:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}_e=se}},setLocked:function(se){O=se},setClear:function(se){Ee!==se&&(Ee=se,fe&&(se=1-se),n.clearDepth(se))},reset:function(){O=!1,te=null,_e=null,Ee=null,fe=!1}}}function r(){let O=!1,fe=null,te=null,_e=null,Ee=null,se=null,Pe=null,Re=null,Et=null;return{setTest:function(gt){O||(gt?ae(n.STENCIL_TEST):ke(n.STENCIL_TEST))},setMask:function(gt){fe!==gt&&!O&&(n.stencilMask(gt),fe=gt)},setFunc:function(gt,vn,Mn){(te!==gt||_e!==vn||Ee!==Mn)&&(n.stencilFunc(gt,vn,Mn),te=gt,_e=vn,Ee=Mn)},setOp:function(gt,vn,Mn){(se!==gt||Pe!==vn||Re!==Mn)&&(n.stencilOp(gt,vn,Mn),se=gt,Pe=vn,Re=Mn)},setLocked:function(gt){O=gt},setClear:function(gt){Et!==gt&&(n.clearStencil(gt),Et=gt)},reset:function(){O=!1,fe=null,te=null,_e=null,Ee=null,se=null,Pe=null,Re=null,Et=null}}}const s=new t,a=new i,o=new r,l=new WeakMap,c=new WeakMap;let u={},f={},d={},h=new WeakMap,_=[],b=null,m=!1,p=null,S=null,I=null,x=null,w=null,E=null,C=null,v=new je(0,0,0),M=0,P=!1,R=null,U=null,H=null,Y=null,B=null;const K=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,ee=0;const oe=n.getParameter(n.VERSION);oe.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(oe)[1]),V=ee>=1):oe.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(oe)[1]),V=ee>=2);let Z=null,de={};const he=n.getParameter(n.SCISSOR_BOX),$e=n.getParameter(n.VIEWPORT),ot=new St().fromArray(he),Oe=new St().fromArray($e);function j(O,fe,te,_e){const Ee=new Uint8Array(4),se=n.createTexture();n.bindTexture(O,se),n.texParameteri(O,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(O,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Pe=0;Pe<te;Pe++)O===n.TEXTURE_3D||O===n.TEXTURE_2D_ARRAY?n.texImage3D(fe,0,n.RGBA,1,1,_e,0,n.RGBA,n.UNSIGNED_BYTE,Ee):n.texImage2D(fe+Pe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ee);return se}const le={};le[n.TEXTURE_2D]=j(n.TEXTURE_2D,n.TEXTURE_2D,1),le[n.TEXTURE_CUBE_MAP]=j(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),le[n.TEXTURE_2D_ARRAY]=j(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),le[n.TEXTURE_3D]=j(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ae(n.DEPTH_TEST),a.setFunc(hr),A(!1),F(bl),ae(n.CULL_FACE),N(Hn);function ae(O){u[O]!==!0&&(n.enable(O),u[O]=!0)}function ke(O){u[O]!==!1&&(n.disable(O),u[O]=!1)}function Ge(O,fe){return d[O]!==fe?(n.bindFramebuffer(O,fe),d[O]=fe,O===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=fe),O===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=fe),!0):!1}function Ue(O,fe){let te=_,_e=!1;if(O){te=h.get(fe),te===void 0&&(te=[],h.set(fe,te));const Ee=O.textures;if(te.length!==Ee.length||te[0]!==n.COLOR_ATTACHMENT0){for(let se=0,Pe=Ee.length;se<Pe;se++)te[se]=n.COLOR_ATTACHMENT0+se;te.length=Ee.length,_e=!0}}else te[0]!==n.BACK&&(te[0]=n.BACK,_e=!0);_e&&n.drawBuffers(te)}function mt(O){return b!==O?(n.useProgram(O),b=O,!0):!1}const Ye={[Mi]:n.FUNC_ADD,[fu]:n.FUNC_SUBTRACT,[hu]:n.FUNC_REVERSE_SUBTRACT};Ye[pu]=n.MIN,Ye[mu]=n.MAX;const rt={[gu]:n.ZERO,[_u]:n.ONE,[xu]:n.SRC_COLOR,[Ba]:n.SRC_ALPHA,[Eu]:n.SRC_ALPHA_SATURATE,[Su]:n.DST_COLOR,[Mu]:n.DST_ALPHA,[vu]:n.ONE_MINUS_SRC_COLOR,[za]:n.ONE_MINUS_SRC_ALPHA,[bu]:n.ONE_MINUS_DST_COLOR,[yu]:n.ONE_MINUS_DST_ALPHA,[Tu]:n.CONSTANT_COLOR,[wu]:n.ONE_MINUS_CONSTANT_COLOR,[Au]:n.CONSTANT_ALPHA,[Ru]:n.ONE_MINUS_CONSTANT_ALPHA};function N(O,fe,te,_e,Ee,se,Pe,Re,Et,gt){if(O===Hn){m===!0&&(ke(n.BLEND),m=!1);return}if(m===!1&&(ae(n.BLEND),m=!0),O!==uu){if(O!==p||gt!==P){if((S!==Mi||w!==Mi)&&(n.blendEquation(n.FUNC_ADD),S=Mi,w=Mi),gt)switch(O){case lr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ka:n.blendFunc(n.ONE,n.ONE);break;case El:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Tl:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:et("WebGLState: Invalid blending: ",O);break}else switch(O){case lr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ka:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case El:et("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Tl:et("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:et("WebGLState: Invalid blending: ",O);break}I=null,x=null,E=null,C=null,v.set(0,0,0),M=0,p=O,P=gt}return}Ee=Ee||fe,se=se||te,Pe=Pe||_e,(fe!==S||Ee!==w)&&(n.blendEquationSeparate(Ye[fe],Ye[Ee]),S=fe,w=Ee),(te!==I||_e!==x||se!==E||Pe!==C)&&(n.blendFuncSeparate(rt[te],rt[_e],rt[se],rt[Pe]),I=te,x=_e,E=se,C=Pe),(Re.equals(v)===!1||Et!==M)&&(n.blendColor(Re.r,Re.g,Re.b,Et),v.copy(Re),M=Et),p=O,P=!1}function L(O,fe){O.side===Bn?ke(n.CULL_FACE):ae(n.CULL_FACE);let te=O.side===Yt;fe&&(te=!te),A(te),O.blending===lr&&O.transparent===!1?N(Hn):N(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),a.setFunc(O.depthFunc),a.setTest(O.depthTest),a.setMask(O.depthWrite),s.setMask(O.colorWrite);const _e=O.stencilWrite;o.setTest(_e),_e&&(o.setMask(O.stencilWriteMask),o.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),o.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),ie(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?ae(n.SAMPLE_ALPHA_TO_COVERAGE):ke(n.SAMPLE_ALPHA_TO_COVERAGE)}function A(O){R!==O&&(O?n.frontFace(n.CW):n.frontFace(n.CCW),R=O)}function F(O){O!==lu?(ae(n.CULL_FACE),O!==U&&(O===bl?n.cullFace(n.BACK):O===cu?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ke(n.CULL_FACE),U=O}function ne(O){O!==H&&(V&&n.lineWidth(O),H=O)}function ie(O,fe,te){O?(ae(n.POLYGON_OFFSET_FILL),(Y!==fe||B!==te)&&(Y=fe,B=te,a.getReversed()&&(fe=-fe),n.polygonOffset(fe,te))):ke(n.POLYGON_OFFSET_FILL)}function ce(O){O?ae(n.SCISSOR_TEST):ke(n.SCISSOR_TEST)}function ye(O){O===void 0&&(O=n.TEXTURE0+K-1),Z!==O&&(n.activeTexture(O),Z=O)}function D(O,fe,te){te===void 0&&(Z===null?te=n.TEXTURE0+K-1:te=Z);let _e=de[te];_e===void 0&&(_e={type:void 0,texture:void 0},de[te]=_e),(_e.type!==O||_e.texture!==fe)&&(Z!==te&&(n.activeTexture(te),Z=te),n.bindTexture(O,fe||le[O]),_e.type=O,_e.texture=fe)}function Se(){const O=de[Z];O!==void 0&&O.type!==void 0&&(n.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function Ae(){try{n.compressedTexImage2D(...arguments)}catch(O){et("WebGLState:",O)}}function T(){try{n.compressedTexImage3D(...arguments)}catch(O){et("WebGLState:",O)}}function g(){try{n.texSubImage2D(...arguments)}catch(O){et("WebGLState:",O)}}function z(){try{n.texSubImage3D(...arguments)}catch(O){et("WebGLState:",O)}}function W(){try{n.compressedTexSubImage2D(...arguments)}catch(O){et("WebGLState:",O)}}function J(){try{n.compressedTexSubImage3D(...arguments)}catch(O){et("WebGLState:",O)}}function ue(){try{n.texStorage2D(...arguments)}catch(O){et("WebGLState:",O)}}function pe(){try{n.texStorage3D(...arguments)}catch(O){et("WebGLState:",O)}}function Q(){try{n.texImage2D(...arguments)}catch(O){et("WebGLState:",O)}}function re(){try{n.texImage3D(...arguments)}catch(O){et("WebGLState:",O)}}function me(O){return f[O]!==void 0?f[O]:n.getParameter(O)}function Ie(O,fe){f[O]!==fe&&(n.pixelStorei(O,fe),f[O]=fe)}function xe(O){ot.equals(O)===!1&&(n.scissor(O.x,O.y,O.z,O.w),ot.copy(O))}function ge(O){Oe.equals(O)===!1&&(n.viewport(O.x,O.y,O.z,O.w),Oe.copy(O))}function Ne(O,fe){let te=c.get(fe);te===void 0&&(te=new WeakMap,c.set(fe,te));let _e=te.get(O);_e===void 0&&(_e=n.getUniformBlockIndex(fe,O.name),te.set(O,_e))}function ze(O,fe){const _e=c.get(fe).get(O);l.get(fe)!==_e&&(n.uniformBlockBinding(fe,_e,O.__bindingPointIndex),l.set(fe,_e))}function Xe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),u={},f={},Z=null,de={},d={},h=new WeakMap,_=[],b=null,m=!1,p=null,S=null,I=null,x=null,w=null,E=null,C=null,v=new je(0,0,0),M=0,P=!1,R=null,U=null,H=null,Y=null,B=null,ot.set(0,0,n.canvas.width,n.canvas.height),Oe.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:ae,disable:ke,bindFramebuffer:Ge,drawBuffers:Ue,useProgram:mt,setBlending:N,setMaterial:L,setFlipSided:A,setCullFace:F,setLineWidth:ne,setPolygonOffset:ie,setScissorTest:ce,activeTexture:ye,bindTexture:D,unbindTexture:Se,compressedTexImage2D:Ae,compressedTexImage3D:T,texImage2D:Q,texImage3D:re,pixelStorei:Ie,getParameter:me,updateUBOMapping:Ne,uniformBlockBinding:ze,texStorage2D:ue,texStorage3D:pe,texSubImage2D:g,texSubImage3D:z,compressedTexSubImage2D:W,compressedTexSubImage3D:J,scissor:xe,viewport:ge,reset:Xe}}function D0(n,e,t,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new We,u=new WeakMap,f=new Set;let d;const h=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(T,g){return _?new OffscreenCanvas(T,g):Gr("canvas")}function m(T,g,z){let W=1;const J=Ae(T);if((J.width>z||J.height>z)&&(W=z/Math.max(J.width,J.height)),W<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const ue=Math.floor(W*J.width),pe=Math.floor(W*J.height);d===void 0&&(d=b(ue,pe));const Q=g?b(ue,pe):d;return Q.width=ue,Q.height=pe,Q.getContext("2d").drawImage(T,0,0,ue,pe),He("WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+ue+"x"+pe+")."),Q}else return"data"in T&&He("WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),T;return T}function p(T){return T.generateMipmaps}function S(T){n.generateMipmap(T)}function I(T){return T.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?n.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function x(T,g,z,W,J,ue=!1){if(T!==null){if(n[T]!==void 0)return n[T];He("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let pe;W&&(pe=e.get("EXT_texture_norm16"),pe||He("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Q=g;if(g===n.RED&&(z===n.FLOAT&&(Q=n.R32F),z===n.HALF_FLOAT&&(Q=n.R16F),z===n.UNSIGNED_BYTE&&(Q=n.R8),z===n.UNSIGNED_SHORT&&pe&&(Q=pe.R16_EXT),z===n.SHORT&&pe&&(Q=pe.R16_SNORM_EXT)),g===n.RED_INTEGER&&(z===n.UNSIGNED_BYTE&&(Q=n.R8UI),z===n.UNSIGNED_SHORT&&(Q=n.R16UI),z===n.UNSIGNED_INT&&(Q=n.R32UI),z===n.BYTE&&(Q=n.R8I),z===n.SHORT&&(Q=n.R16I),z===n.INT&&(Q=n.R32I)),g===n.RG&&(z===n.FLOAT&&(Q=n.RG32F),z===n.HALF_FLOAT&&(Q=n.RG16F),z===n.UNSIGNED_BYTE&&(Q=n.RG8),z===n.UNSIGNED_SHORT&&pe&&(Q=pe.RG16_EXT),z===n.SHORT&&pe&&(Q=pe.RG16_SNORM_EXT)),g===n.RG_INTEGER&&(z===n.UNSIGNED_BYTE&&(Q=n.RG8UI),z===n.UNSIGNED_SHORT&&(Q=n.RG16UI),z===n.UNSIGNED_INT&&(Q=n.RG32UI),z===n.BYTE&&(Q=n.RG8I),z===n.SHORT&&(Q=n.RG16I),z===n.INT&&(Q=n.RG32I)),g===n.RGB_INTEGER&&(z===n.UNSIGNED_BYTE&&(Q=n.RGB8UI),z===n.UNSIGNED_SHORT&&(Q=n.RGB16UI),z===n.UNSIGNED_INT&&(Q=n.RGB32UI),z===n.BYTE&&(Q=n.RGB8I),z===n.SHORT&&(Q=n.RGB16I),z===n.INT&&(Q=n.RGB32I)),g===n.RGBA_INTEGER&&(z===n.UNSIGNED_BYTE&&(Q=n.RGBA8UI),z===n.UNSIGNED_SHORT&&(Q=n.RGBA16UI),z===n.UNSIGNED_INT&&(Q=n.RGBA32UI),z===n.BYTE&&(Q=n.RGBA8I),z===n.SHORT&&(Q=n.RGBA16I),z===n.INT&&(Q=n.RGBA32I)),g===n.RGB&&(z===n.UNSIGNED_SHORT&&pe&&(Q=pe.RGB16_EXT),z===n.SHORT&&pe&&(Q=pe.RGB16_SNORM_EXT),z===n.UNSIGNED_INT_5_9_9_9_REV&&(Q=n.RGB9_E5),z===n.UNSIGNED_INT_10F_11F_11F_REV&&(Q=n.R11F_G11F_B10F)),g===n.RGBA){const re=ue?Fs:tt.getTransfer(J);z===n.FLOAT&&(Q=n.RGBA32F),z===n.HALF_FLOAT&&(Q=n.RGBA16F),z===n.UNSIGNED_BYTE&&(Q=re===ct?n.SRGB8_ALPHA8:n.RGBA8),z===n.UNSIGNED_SHORT&&pe&&(Q=pe.RGBA16_EXT),z===n.SHORT&&pe&&(Q=pe.RGBA16_SNORM_EXT),z===n.UNSIGNED_SHORT_4_4_4_4&&(Q=n.RGBA4),z===n.UNSIGNED_SHORT_5_5_5_1&&(Q=n.RGB5_A1)}return(Q===n.R16F||Q===n.R32F||Q===n.RG16F||Q===n.RG32F||Q===n.RGBA16F||Q===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function w(T,g){let z;return T?g===null||g===Pn||g===zr?z=n.DEPTH24_STENCIL8:g===wn?z=n.DEPTH32F_STENCIL8:g===Br&&(z=n.DEPTH24_STENCIL8,He("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===Pn||g===zr?z=n.DEPTH_COMPONENT24:g===wn?z=n.DEPTH_COMPONENT32F:g===Br&&(z=n.DEPTH_COMPONENT16),z}function E(T,g){return p(T)===!0||T.isFramebufferTexture&&T.minFilter!==bt&&T.minFilter!==Ct?Math.log2(Math.max(g.width,g.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?g.mipmaps.length:1}function C(T){const g=T.target;g.removeEventListener("dispose",C),M(g),g.isVideoTexture&&u.delete(g),g.isHTMLTexture&&f.delete(g)}function v(T){const g=T.target;g.removeEventListener("dispose",v),R(g)}function M(T){const g=i.get(T);if(g.__webglInit===void 0)return;const z=T.source,W=h.get(z);if(W){const J=W[g.__cacheKey];J.usedTimes--,J.usedTimes===0&&P(T),Object.keys(W).length===0&&h.delete(z)}i.remove(T)}function P(T){const g=i.get(T);n.deleteTexture(g.__webglTexture);const z=T.source,W=h.get(z);delete W[g.__cacheKey],a.memory.textures--}function R(T){const g=i.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),i.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(g.__webglFramebuffer[W]))for(let J=0;J<g.__webglFramebuffer[W].length;J++)n.deleteFramebuffer(g.__webglFramebuffer[W][J]);else n.deleteFramebuffer(g.__webglFramebuffer[W]);g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer[W])}else{if(Array.isArray(g.__webglFramebuffer))for(let W=0;W<g.__webglFramebuffer.length;W++)n.deleteFramebuffer(g.__webglFramebuffer[W]);else n.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&n.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let W=0;W<g.__webglColorRenderbuffer.length;W++)g.__webglColorRenderbuffer[W]&&n.deleteRenderbuffer(g.__webglColorRenderbuffer[W]);g.__webglDepthRenderbuffer&&n.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const z=T.textures;for(let W=0,J=z.length;W<J;W++){const ue=i.get(z[W]);ue.__webglTexture&&(n.deleteTexture(ue.__webglTexture),a.memory.textures--),i.remove(z[W])}i.remove(T)}let U=0;function H(){U=0}function Y(){return U}function B(T){U=T}function K(){const T=U;return T>=r.maxTextures&&He("WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+r.maxTextures),U+=1,T}function V(T){const g=[];return g.push(T.wrapS),g.push(T.wrapT),g.push(T.wrapR||0),g.push(T.magFilter),g.push(T.minFilter),g.push(T.anisotropy),g.push(T.internalFormat),g.push(T.format),g.push(T.type),g.push(T.generateMipmaps),g.push(T.premultiplyAlpha),g.push(T.flipY),g.push(T.unpackAlignment),g.push(T.colorSpace),g.join()}function ee(T,g){const z=i.get(T);if(T.isVideoTexture&&D(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&z.__version!==T.version){const W=T.image;if(W===null)He("WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)He("WebGLRenderer: Texture marked for update but image is incomplete");else{ke(z,T,g);return}}else T.isExternalTexture&&(z.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,z.__webglTexture,n.TEXTURE0+g)}function oe(T,g){const z=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&z.__version!==T.version){ke(z,T,g);return}else T.isExternalTexture&&(z.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,z.__webglTexture,n.TEXTURE0+g)}function Z(T,g){const z=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&z.__version!==T.version){ke(z,T,g);return}t.bindTexture(n.TEXTURE_3D,z.__webglTexture,n.TEXTURE0+g)}function de(T,g){const z=i.get(T);if(T.isCubeDepthTexture!==!0&&T.version>0&&z.__version!==T.version){Ge(z,T,g);return}t.bindTexture(n.TEXTURE_CUBE_MAP,z.__webglTexture,n.TEXTURE0+g)}const he={[$a]:n.REPEAT,[zn]:n.CLAMP_TO_EDGE,[Ka]:n.MIRRORED_REPEAT},$e={[bt]:n.NEAREST,[Iu]:n.NEAREST_MIPMAP_NEAREST,[$r]:n.NEAREST_MIPMAP_LINEAR,[Ct]:n.LINEAR,[Zs]:n.LINEAR_MIPMAP_NEAREST,[Si]:n.LINEAR_MIPMAP_LINEAR},ot={[Uu]:n.NEVER,[Bu]:n.ALWAYS,[Nu]:n.LESS,[Ko]:n.LEQUAL,[Fu]:n.EQUAL,[Zo]:n.GEQUAL,[Ou]:n.GREATER,[ku]:n.NOTEQUAL};function Oe(T,g){if(g.type===wn&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===Ct||g.magFilter===Zs||g.magFilter===$r||g.magFilter===Si||g.minFilter===Ct||g.minFilter===Zs||g.minFilter===$r||g.minFilter===Si)&&He("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(T,n.TEXTURE_WRAP_S,he[g.wrapS]),n.texParameteri(T,n.TEXTURE_WRAP_T,he[g.wrapT]),(T===n.TEXTURE_3D||T===n.TEXTURE_2D_ARRAY)&&n.texParameteri(T,n.TEXTURE_WRAP_R,he[g.wrapR]),n.texParameteri(T,n.TEXTURE_MAG_FILTER,$e[g.magFilter]),n.texParameteri(T,n.TEXTURE_MIN_FILTER,$e[g.minFilter]),g.compareFunction&&(n.texParameteri(T,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(T,n.TEXTURE_COMPARE_FUNC,ot[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===bt||g.minFilter!==$r&&g.minFilter!==Si||g.type===wn&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||i.get(g).__currentAnisotropy){const z=e.get("EXT_texture_filter_anisotropic");n.texParameterf(T,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,r.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy}}}function j(T,g){let z=!1;T.__webglInit===void 0&&(T.__webglInit=!0,g.addEventListener("dispose",C));const W=g.source;let J=h.get(W);J===void 0&&(J={},h.set(W,J));const ue=V(g);if(ue!==T.__cacheKey){J[ue]===void 0&&(J[ue]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,z=!0),J[ue].usedTimes++;const pe=J[T.__cacheKey];pe!==void 0&&(J[T.__cacheKey].usedTimes--,pe.usedTimes===0&&P(g)),T.__cacheKey=ue,T.__webglTexture=J[ue].texture}return z}function le(T,g,z){return Math.floor(Math.floor(T/z)/g)}function ae(T,g,z,W){const ue=T.updateRanges;if(ue.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,g.width,g.height,z,W,g.data);else{ue.sort((Ie,xe)=>Ie.start-xe.start);let pe=0;for(let Ie=1;Ie<ue.length;Ie++){const xe=ue[pe],ge=ue[Ie],Ne=xe.start+xe.count,ze=le(ge.start,g.width,4),Xe=le(xe.start,g.width,4);ge.start<=Ne+1&&ze===Xe&&le(ge.start+ge.count-1,g.width,4)===ze?xe.count=Math.max(xe.count,ge.start+ge.count-xe.start):(++pe,ue[pe]=ge)}ue.length=pe+1;const Q=t.getParameter(n.UNPACK_ROW_LENGTH),re=t.getParameter(n.UNPACK_SKIP_PIXELS),me=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,g.width);for(let Ie=0,xe=ue.length;Ie<xe;Ie++){const ge=ue[Ie],Ne=Math.floor(ge.start/4),ze=Math.ceil(ge.count/4),Xe=Ne%g.width,O=Math.floor(Ne/g.width),fe=ze,te=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,Xe),t.pixelStorei(n.UNPACK_SKIP_ROWS,O),t.texSubImage2D(n.TEXTURE_2D,0,Xe,O,fe,te,z,W,g.data)}T.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,Q),t.pixelStorei(n.UNPACK_SKIP_PIXELS,re),t.pixelStorei(n.UNPACK_SKIP_ROWS,me)}}function ke(T,g,z){let W=n.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(W=n.TEXTURE_2D_ARRAY),g.isData3DTexture&&(W=n.TEXTURE_3D);const J=j(T,g),ue=g.source;t.bindTexture(W,T.__webglTexture,n.TEXTURE0+z);const pe=i.get(ue);if(ue.version!==pe.__version||J===!0){if(t.activeTexture(n.TEXTURE0+z),(typeof ImageBitmap<"u"&&g.image instanceof ImageBitmap)===!1){const te=tt.getPrimaries(tt.workingColorSpace),_e=g.colorSpace===si?null:tt.getPrimaries(g.colorSpace),Ee=g.colorSpace===si||te===_e?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee)}t.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment);let re=m(g.image,!1,r.maxTextureSize);re=Se(g,re);const me=s.convert(g.format,g.colorSpace),Ie=s.convert(g.type);let xe=x(g.internalFormat,me,Ie,g.normalized,g.colorSpace,g.isVideoTexture);Oe(W,g);let ge;const Ne=g.mipmaps,ze=g.isVideoTexture!==!0,Xe=pe.__version===void 0||J===!0,O=ue.dataReady,fe=E(g,re);if(g.isDepthTexture)xe=w(g.format===bi,g.type),Xe&&(ze?t.texStorage2D(n.TEXTURE_2D,1,xe,re.width,re.height):t.texImage2D(n.TEXTURE_2D,0,xe,re.width,re.height,0,me,Ie,null));else if(g.isDataTexture)if(Ne.length>0){ze&&Xe&&t.texStorage2D(n.TEXTURE_2D,fe,xe,Ne[0].width,Ne[0].height);for(let te=0,_e=Ne.length;te<_e;te++)ge=Ne[te],ze?O&&t.texSubImage2D(n.TEXTURE_2D,te,0,0,ge.width,ge.height,me,Ie,ge.data):t.texImage2D(n.TEXTURE_2D,te,xe,ge.width,ge.height,0,me,Ie,ge.data);g.generateMipmaps=!1}else ze?(Xe&&t.texStorage2D(n.TEXTURE_2D,fe,xe,re.width,re.height),O&&ae(g,re,me,Ie)):t.texImage2D(n.TEXTURE_2D,0,xe,re.width,re.height,0,me,Ie,re.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){ze&&Xe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,fe,xe,Ne[0].width,Ne[0].height,re.depth);for(let te=0,_e=Ne.length;te<_e;te++)if(ge=Ne[te],g.format!==fn)if(me!==null)if(ze){if(O)if(g.layerUpdates.size>0){const Ee=ic(ge.width,ge.height,g.format,g.type);for(const se of g.layerUpdates){const Pe=ge.data.subarray(se*Ee/ge.data.BYTES_PER_ELEMENT,(se+1)*Ee/ge.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,te,0,0,se,ge.width,ge.height,1,me,Pe)}g.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,te,0,0,0,ge.width,ge.height,re.depth,me,ge.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,te,xe,ge.width,ge.height,re.depth,0,ge.data,0,0);else He("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ze?O&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,te,0,0,0,ge.width,ge.height,re.depth,me,Ie,ge.data):t.texImage3D(n.TEXTURE_2D_ARRAY,te,xe,ge.width,ge.height,re.depth,0,me,Ie,ge.data)}else{ze&&Xe&&t.texStorage2D(n.TEXTURE_2D,fe,xe,Ne[0].width,Ne[0].height);for(let te=0,_e=Ne.length;te<_e;te++)ge=Ne[te],g.format!==fn?me!==null?ze?O&&t.compressedTexSubImage2D(n.TEXTURE_2D,te,0,0,ge.width,ge.height,me,ge.data):t.compressedTexImage2D(n.TEXTURE_2D,te,xe,ge.width,ge.height,0,ge.data):He("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ze?O&&t.texSubImage2D(n.TEXTURE_2D,te,0,0,ge.width,ge.height,me,Ie,ge.data):t.texImage2D(n.TEXTURE_2D,te,xe,ge.width,ge.height,0,me,Ie,ge.data)}else if(g.isDataArrayTexture)if(ze){if(Xe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,fe,xe,re.width,re.height,re.depth),O)if(g.layerUpdates.size>0){const te=ic(re.width,re.height,g.format,g.type);for(const _e of g.layerUpdates){const Ee=re.data.subarray(_e*te/re.data.BYTES_PER_ELEMENT,(_e+1)*te/re.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,_e,re.width,re.height,1,me,Ie,Ee)}g.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,me,Ie,re.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,xe,re.width,re.height,re.depth,0,me,Ie,re.data);else if(g.isData3DTexture)ze?(Xe&&t.texStorage3D(n.TEXTURE_3D,fe,xe,re.width,re.height,re.depth),O&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,me,Ie,re.data)):t.texImage3D(n.TEXTURE_3D,0,xe,re.width,re.height,re.depth,0,me,Ie,re.data);else if(g.isFramebufferTexture){if(Xe)if(ze)t.texStorage2D(n.TEXTURE_2D,fe,xe,re.width,re.height);else{let te=re.width,_e=re.height;for(let Ee=0;Ee<fe;Ee++)t.texImage2D(n.TEXTURE_2D,Ee,xe,te,_e,0,me,Ie,null),te>>=1,_e>>=1}}else if(g.isHTMLTexture){if("texElementImage2D"in n){const te=n.canvas;if(te.hasAttribute("layoutsubtree")||te.setAttribute("layoutsubtree","true"),re.parentNode!==te){te.appendChild(re),f.add(g),te.onpaint=_e=>{const Ee=_e.changedElements;for(const se of f)Ee.includes(se.image)&&(se.needsUpdate=!0)},te.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,re);else{const Ee=n.RGBA,se=n.RGBA,Pe=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Ee,se,Pe,re)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Ne.length>0){if(ze&&Xe){const te=Ae(Ne[0]);t.texStorage2D(n.TEXTURE_2D,fe,xe,te.width,te.height)}for(let te=0,_e=Ne.length;te<_e;te++)ge=Ne[te],ze?O&&t.texSubImage2D(n.TEXTURE_2D,te,0,0,me,Ie,ge):t.texImage2D(n.TEXTURE_2D,te,xe,me,Ie,ge);g.generateMipmaps=!1}else if(ze){if(Xe){const te=Ae(re);t.texStorage2D(n.TEXTURE_2D,fe,xe,te.width,te.height)}O&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,me,Ie,re)}else t.texImage2D(n.TEXTURE_2D,0,xe,me,Ie,re);p(g)&&S(W),pe.__version=ue.version,g.onUpdate&&g.onUpdate(g)}T.__version=g.version}function Ge(T,g,z){if(g.image.length!==6)return;const W=j(T,g),J=g.source;t.bindTexture(n.TEXTURE_CUBE_MAP,T.__webglTexture,n.TEXTURE0+z);const ue=i.get(J);if(J.version!==ue.__version||W===!0){t.activeTexture(n.TEXTURE0+z);const pe=tt.getPrimaries(tt.workingColorSpace),Q=g.colorSpace===si?null:tt.getPrimaries(g.colorSpace),re=g.colorSpace===si||pe===Q?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,re);const me=g.isCompressedTexture||g.image[0].isCompressedTexture,Ie=g.image[0]&&g.image[0].isDataTexture,xe=[];for(let se=0;se<6;se++)!me&&!Ie?xe[se]=m(g.image[se],!0,r.maxCubemapSize):xe[se]=Ie?g.image[se].image:g.image[se],xe[se]=Se(g,xe[se]);const ge=xe[0],Ne=s.convert(g.format,g.colorSpace),ze=s.convert(g.type),Xe=x(g.internalFormat,Ne,ze,g.normalized,g.colorSpace),O=g.isVideoTexture!==!0,fe=ue.__version===void 0||W===!0,te=J.dataReady;let _e=E(g,ge);Oe(n.TEXTURE_CUBE_MAP,g);let Ee;if(me){O&&fe&&t.texStorage2D(n.TEXTURE_CUBE_MAP,_e,Xe,ge.width,ge.height);for(let se=0;se<6;se++){Ee=xe[se].mipmaps;for(let Pe=0;Pe<Ee.length;Pe++){const Re=Ee[Pe];g.format!==fn?Ne!==null?O?te&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,Pe,0,0,Re.width,Re.height,Ne,Re.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,Pe,Xe,Re.width,Re.height,0,Re.data):He("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?te&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,Pe,0,0,Re.width,Re.height,Ne,ze,Re.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,Pe,Xe,Re.width,Re.height,0,Ne,ze,Re.data)}}}else{if(Ee=g.mipmaps,O&&fe){Ee.length>0&&_e++;const se=Ae(xe[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,_e,Xe,se.width,se.height)}for(let se=0;se<6;se++)if(Ie){O?te&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,xe[se].width,xe[se].height,Ne,ze,xe[se].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,Xe,xe[se].width,xe[se].height,0,Ne,ze,xe[se].data);for(let Pe=0;Pe<Ee.length;Pe++){const Et=Ee[Pe].image[se].image;O?te&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,Pe+1,0,0,Et.width,Et.height,Ne,ze,Et.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,Pe+1,Xe,Et.width,Et.height,0,Ne,ze,Et.data)}}else{O?te&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,Ne,ze,xe[se]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,Xe,Ne,ze,xe[se]);for(let Pe=0;Pe<Ee.length;Pe++){const Re=Ee[Pe];O?te&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,Pe+1,0,0,Ne,ze,Re.image[se]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,Pe+1,Xe,Ne,ze,Re.image[se])}}}p(g)&&S(n.TEXTURE_CUBE_MAP),ue.__version=J.version,g.onUpdate&&g.onUpdate(g)}T.__version=g.version}function Ue(T,g,z,W,J,ue){const pe=s.convert(z.format,z.colorSpace),Q=s.convert(z.type),re=x(z.internalFormat,pe,Q,z.normalized,z.colorSpace),me=i.get(g),Ie=i.get(z);if(Ie.__renderTarget=g,!me.__hasExternalTextures){const xe=Math.max(1,g.width>>ue),ge=Math.max(1,g.height>>ue);J===n.TEXTURE_3D||J===n.TEXTURE_2D_ARRAY?t.texImage3D(J,ue,re,xe,ge,g.depth,0,pe,Q,null):t.texImage2D(J,ue,re,xe,ge,0,pe,Q,null)}t.bindFramebuffer(n.FRAMEBUFFER,T),ye(g)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,W,J,Ie.__webglTexture,0,ce(g)):(J===n.TEXTURE_2D||J>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,W,J,Ie.__webglTexture,ue),t.bindFramebuffer(n.FRAMEBUFFER,null)}function mt(T,g,z){if(n.bindRenderbuffer(n.RENDERBUFFER,T),g.depthBuffer){const W=g.depthTexture,J=W&&W.isDepthTexture?W.type:null,ue=w(g.stencilBuffer,J),pe=g.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;ye(g)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ce(g),ue,g.width,g.height):z?n.renderbufferStorageMultisample(n.RENDERBUFFER,ce(g),ue,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,ue,g.width,g.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,pe,n.RENDERBUFFER,T)}else{const W=g.textures;for(let J=0;J<W.length;J++){const ue=W[J],pe=s.convert(ue.format,ue.colorSpace),Q=s.convert(ue.type),re=x(ue.internalFormat,pe,Q,ue.normalized,ue.colorSpace);ye(g)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ce(g),re,g.width,g.height):z?n.renderbufferStorageMultisample(n.RENDERBUFFER,ce(g),re,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,re,g.width,g.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ye(T,g,z){const W=g.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,T),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const J=i.get(g.depthTexture);if(J.__renderTarget=g,(!J.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),W){if(J.__webglInit===void 0&&(J.__webglInit=!0,g.depthTexture.addEventListener("dispose",C)),J.__webglTexture===void 0){J.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,J.__webglTexture),Oe(n.TEXTURE_CUBE_MAP,g.depthTexture);const me=s.convert(g.depthTexture.format),Ie=s.convert(g.depthTexture.type);let xe;g.depthTexture.format===Xn?xe=n.DEPTH_COMPONENT24:g.depthTexture.format===bi&&(xe=n.DEPTH24_STENCIL8);for(let ge=0;ge<6;ge++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,xe,g.width,g.height,0,me,Ie,null)}}else ee(g.depthTexture,0);const ue=J.__webglTexture,pe=ce(g),Q=W?n.TEXTURE_CUBE_MAP_POSITIVE_X+z:n.TEXTURE_2D,re=g.depthTexture.format===bi?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(g.depthTexture.format===Xn)ye(g)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,re,Q,ue,0,pe):n.framebufferTexture2D(n.FRAMEBUFFER,re,Q,ue,0);else if(g.depthTexture.format===bi)ye(g)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,re,Q,ue,0,pe):n.framebufferTexture2D(n.FRAMEBUFFER,re,Q,ue,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function rt(T){const g=i.get(T),z=T.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==T.depthTexture){const W=T.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),W){const J=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,W.removeEventListener("dispose",J)};W.addEventListener("dispose",J),g.__depthDisposeCallback=J}g.__boundDepthTexture=W}if(T.depthTexture&&!g.__autoAllocateDepthBuffer)if(z)for(let W=0;W<6;W++)Ye(g.__webglFramebuffer[W],T,W);else{const W=T.texture.mipmaps;W&&W.length>0?Ye(g.__webglFramebuffer[0],T,0):Ye(g.__webglFramebuffer,T,0)}else if(z){g.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[W]),g.__webglDepthbuffer[W]===void 0)g.__webglDepthbuffer[W]=n.createRenderbuffer(),mt(g.__webglDepthbuffer[W],T,!1);else{const J=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ue=g.__webglDepthbuffer[W];n.bindRenderbuffer(n.RENDERBUFFER,ue),n.framebufferRenderbuffer(n.FRAMEBUFFER,J,n.RENDERBUFFER,ue)}}else{const W=T.texture.mipmaps;if(W&&W.length>0?t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=n.createRenderbuffer(),mt(g.__webglDepthbuffer,T,!1);else{const J=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ue=g.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ue),n.framebufferRenderbuffer(n.FRAMEBUFFER,J,n.RENDERBUFFER,ue)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function N(T,g,z){const W=i.get(T);g!==void 0&&Ue(W.__webglFramebuffer,T,T.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),z!==void 0&&rt(T)}function L(T){const g=T.texture,z=i.get(T),W=i.get(g);T.addEventListener("dispose",v);const J=T.textures,ue=T.isWebGLCubeRenderTarget===!0,pe=J.length>1;if(pe||(W.__webglTexture===void 0&&(W.__webglTexture=n.createTexture()),W.__version=g.version,a.memory.textures++),ue){z.__webglFramebuffer=[];for(let Q=0;Q<6;Q++)if(g.mipmaps&&g.mipmaps.length>0){z.__webglFramebuffer[Q]=[];for(let re=0;re<g.mipmaps.length;re++)z.__webglFramebuffer[Q][re]=n.createFramebuffer()}else z.__webglFramebuffer[Q]=n.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){z.__webglFramebuffer=[];for(let Q=0;Q<g.mipmaps.length;Q++)z.__webglFramebuffer[Q]=n.createFramebuffer()}else z.__webglFramebuffer=n.createFramebuffer();if(pe)for(let Q=0,re=J.length;Q<re;Q++){const me=i.get(J[Q]);me.__webglTexture===void 0&&(me.__webglTexture=n.createTexture(),a.memory.textures++)}if(T.samples>0&&ye(T)===!1){z.__webglMultisampledFramebuffer=n.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let Q=0;Q<J.length;Q++){const re=J[Q];z.__webglColorRenderbuffer[Q]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,z.__webglColorRenderbuffer[Q]);const me=s.convert(re.format,re.colorSpace),Ie=s.convert(re.type),xe=x(re.internalFormat,me,Ie,re.normalized,re.colorSpace,T.isXRRenderTarget===!0),ge=ce(T);n.renderbufferStorageMultisample(n.RENDERBUFFER,ge,xe,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Q,n.RENDERBUFFER,z.__webglColorRenderbuffer[Q])}n.bindRenderbuffer(n.RENDERBUFFER,null),T.depthBuffer&&(z.__webglDepthRenderbuffer=n.createRenderbuffer(),mt(z.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ue){t.bindTexture(n.TEXTURE_CUBE_MAP,W.__webglTexture),Oe(n.TEXTURE_CUBE_MAP,g);for(let Q=0;Q<6;Q++)if(g.mipmaps&&g.mipmaps.length>0)for(let re=0;re<g.mipmaps.length;re++)Ue(z.__webglFramebuffer[Q][re],T,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,re);else Ue(z.__webglFramebuffer[Q],T,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0);p(g)&&S(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(pe){for(let Q=0,re=J.length;Q<re;Q++){const me=J[Q],Ie=i.get(me);let xe=n.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(xe=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(xe,Ie.__webglTexture),Oe(xe,me),Ue(z.__webglFramebuffer,T,me,n.COLOR_ATTACHMENT0+Q,xe,0),p(me)&&S(xe)}t.unbindTexture()}else{let Q=n.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(Q=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Q,W.__webglTexture),Oe(Q,g),g.mipmaps&&g.mipmaps.length>0)for(let re=0;re<g.mipmaps.length;re++)Ue(z.__webglFramebuffer[re],T,g,n.COLOR_ATTACHMENT0,Q,re);else Ue(z.__webglFramebuffer,T,g,n.COLOR_ATTACHMENT0,Q,0);p(g)&&S(Q),t.unbindTexture()}T.depthBuffer&&rt(T)}function A(T){const g=T.textures;for(let z=0,W=g.length;z<W;z++){const J=g[z];if(p(J)){const ue=I(T),pe=i.get(J).__webglTexture;t.bindTexture(ue,pe),S(ue),t.unbindTexture()}}}const F=[],ne=[];function ie(T){if(T.samples>0){if(ye(T)===!1){const g=T.textures,z=T.width,W=T.height;let J=n.COLOR_BUFFER_BIT;const ue=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,pe=i.get(T),Q=g.length>1;if(Q)for(let me=0;me<g.length;me++)t.bindFramebuffer(n.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,pe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,pe.__webglMultisampledFramebuffer);const re=T.texture.mipmaps;re&&re.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,pe.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,pe.__webglFramebuffer);for(let me=0;me<g.length;me++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(J|=n.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(J|=n.STENCIL_BUFFER_BIT)),Q){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,pe.__webglColorRenderbuffer[me]);const Ie=i.get(g[me]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ie,0)}n.blitFramebuffer(0,0,z,W,0,0,z,W,J,n.NEAREST),l===!0&&(F.length=0,ne.length=0,F.push(n.COLOR_ATTACHMENT0+me),T.depthBuffer&&T.resolveDepthBuffer===!1&&(F.push(ue),ne.push(ue),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,ne)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,F))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Q)for(let me=0;me<g.length;me++){t.bindFramebuffer(n.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.RENDERBUFFER,pe.__webglColorRenderbuffer[me]);const Ie=i.get(g[me]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,pe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.TEXTURE_2D,Ie,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,pe.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const g=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[g])}}}function ce(T){return Math.min(r.maxSamples,T.samples)}function ye(T){const g=i.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function D(T){const g=a.render.frame;u.get(T)!==g&&(u.set(T,g),T.update())}function Se(T,g){const z=T.colorSpace,W=T.format,J=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||z!==Ns&&z!==si&&(tt.getTransfer(z)===ct?(W!==fn||J!==Qt)&&He("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):et("WebGLTextures: Unsupported texture color space:",z)),g}function Ae(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=K,this.resetTextureUnits=H,this.getTextureUnits=Y,this.setTextureUnits=B,this.setTexture2D=ee,this.setTexture2DArray=oe,this.setTexture3D=Z,this.setTextureCube=de,this.rebindTextures=N,this.setupRenderTarget=L,this.updateRenderTargetMipmap=A,this.updateMultisampleRenderTarget=ie,this.setupDepthRenderbuffer=rt,this.setupFrameBufferTexture=Ue,this.useMultisampledRTT=ye,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function U0(n,e){function t(i,r=si){let s;const a=tt.getTransfer(r);if(i===Qt)return n.UNSIGNED_BYTE;if(i===Wo)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Xo)return n.UNSIGNED_SHORT_5_5_5_1;if(i===md)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===gd)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===hd)return n.BYTE;if(i===pd)return n.SHORT;if(i===Br)return n.UNSIGNED_SHORT;if(i===Vo)return n.INT;if(i===Pn)return n.UNSIGNED_INT;if(i===wn)return n.FLOAT;if(i===Wn)return n.HALF_FLOAT;if(i===_d)return n.ALPHA;if(i===xd)return n.RGB;if(i===fn)return n.RGBA;if(i===Xn)return n.DEPTH_COMPONENT;if(i===bi)return n.DEPTH_STENCIL;if(i===vd)return n.RED;if(i===qo)return n.RED_INTEGER;if(i===wi)return n.RG;if(i===Yo)return n.RG_INTEGER;if(i===$o)return n.RGBA_INTEGER;if(i===Ts||i===ws||i===As||i===Rs)if(a===ct)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Ts)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ws)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===As)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Rs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Ts)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ws)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===As)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Rs)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Za||i===Ja||i===Qa||i===ja)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Za)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ja)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Qa)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ja)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===eo||i===to||i===no||i===io||i===ro||i===Ds||i===so)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===eo||i===to)return a===ct?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===no)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===io)return s.COMPRESSED_R11_EAC;if(i===ro)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Ds)return s.COMPRESSED_RG11_EAC;if(i===so)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===ao||i===oo||i===lo||i===co||i===uo||i===fo||i===ho||i===po||i===mo||i===go||i===_o||i===xo||i===vo||i===Mo)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===ao)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===oo)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===lo)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===co)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===uo)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===fo)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ho)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===po)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===mo)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===go)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===_o)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===xo)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===vo)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Mo)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===yo||i===So||i===bo)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===yo)return a===ct?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===So)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===bo)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Eo||i===To||i===Us||i===wo)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Eo)return s.COMPRESSED_RED_RGTC1_EXT;if(i===To)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Us)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===wo)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===zr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const N0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,F0=`
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

}`;class O0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new Rd(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new In({vertexShader:N0,fragmentShader:F0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ut(new qn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class k0 extends Pi{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,f=null,d=null,h=null,_=null;const b=typeof XRWebGLBinding<"u",m=new O0,p={},S=t.getContextAttributes();let I=null,x=null;const w=[],E=[],C=new We;let v=null;const M=new Jt;M.viewport=new St;const P=new Jt;P.viewport=new St;const R=[M,P],U=new Yf;let H=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let le=w[j];return le===void 0&&(le=new na,w[j]=le),le.getTargetRaySpace()},this.getControllerGrip=function(j){let le=w[j];return le===void 0&&(le=new na,w[j]=le),le.getGripSpace()},this.getHand=function(j){let le=w[j];return le===void 0&&(le=new na,w[j]=le),le.getHandSpace()};function B(j){const le=E.indexOf(j.inputSource);if(le===-1)return;const ae=w[le];ae!==void 0&&(ae.update(j.inputSource,j.frame,c||a),ae.dispatchEvent({type:j.type,data:j.inputSource}))}function K(){r.removeEventListener("select",B),r.removeEventListener("selectstart",B),r.removeEventListener("selectend",B),r.removeEventListener("squeeze",B),r.removeEventListener("squeezestart",B),r.removeEventListener("squeezeend",B),r.removeEventListener("end",K),r.removeEventListener("inputsourceschange",V);for(let j=0;j<w.length;j++){const le=E[j];le!==null&&(E[j]=null,w[j].disconnect(le))}H=null,Y=null,m.reset();for(const j in p)delete p[j];e.setRenderTarget(I),h=null,d=null,f=null,r=null,x=null,Oe.stop(),i.isPresenting=!1,e.setPixelRatio(v),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){s=j,i.isPresenting===!0&&He("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,i.isPresenting===!0&&He("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return d!==null?d:h},this.getBinding=function(){return f===null&&b&&(f=new XRWebGLBinding(r,t)),f},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(j){if(r=j,r!==null){if(I=e.getRenderTarget(),r.addEventListener("select",B),r.addEventListener("selectstart",B),r.addEventListener("selectend",B),r.addEventListener("squeeze",B),r.addEventListener("squeezestart",B),r.addEventListener("squeezeend",B),r.addEventListener("end",K),r.addEventListener("inputsourceschange",V),S.xrCompatible!==!0&&await t.makeXRCompatible(),v=e.getPixelRatio(),e.getSize(C),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let ae=null,ke=null,Ge=null;S.depth&&(Ge=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ae=S.stencil?bi:Xn,ke=S.stencil?zr:Pn);const Ue={colorFormat:t.RGBA8,depthFormat:Ge,scaleFactor:s};f=this.getBinding(),d=f.createProjectionLayer(Ue),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),x=new Cn(d.textureWidth,d.textureHeight,{format:fn,type:Qt,depthTexture:new mr(d.textureWidth,d.textureHeight,ke,void 0,void 0,void 0,void 0,void 0,void 0,ae),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const ae={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(r,t,ae),r.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),x=new Cn(h.framebufferWidth,h.framebufferHeight,{format:fn,type:Qt,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),Oe.setContext(r),Oe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function V(j){for(let le=0;le<j.removed.length;le++){const ae=j.removed[le],ke=E.indexOf(ae);ke>=0&&(E[ke]=null,w[ke].disconnect(ae))}for(let le=0;le<j.added.length;le++){const ae=j.added[le];let ke=E.indexOf(ae);if(ke===-1){for(let Ue=0;Ue<w.length;Ue++)if(Ue>=E.length){E.push(ae),ke=Ue;break}else if(E[Ue]===null){E[Ue]=ae,ke=Ue;break}if(ke===-1)break}const Ge=w[ke];Ge&&Ge.connect(ae)}}const ee=new G,oe=new G;function Z(j,le,ae){ee.setFromMatrixPosition(le.matrixWorld),oe.setFromMatrixPosition(ae.matrixWorld);const ke=ee.distanceTo(oe),Ge=le.projectionMatrix.elements,Ue=ae.projectionMatrix.elements,mt=Ge[14]/(Ge[10]-1),Ye=Ge[14]/(Ge[10]+1),rt=(Ge[9]+1)/Ge[5],N=(Ge[9]-1)/Ge[5],L=(Ge[8]-1)/Ge[0],A=(Ue[8]+1)/Ue[0],F=mt*L,ne=mt*A,ie=ke/(-L+A),ce=ie*-L;if(le.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(ce),j.translateZ(ie),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),Ge[10]===-1)j.projectionMatrix.copy(le.projectionMatrix),j.projectionMatrixInverse.copy(le.projectionMatrixInverse);else{const ye=mt+ie,D=Ye+ie,Se=F-ce,Ae=ne+(ke-ce),T=rt*Ye/D*ye,g=N*Ye/D*ye;j.projectionMatrix.makePerspective(Se,Ae,T,g,ye,D),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function de(j,le){le===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(le.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(r===null)return;let le=j.near,ae=j.far;m.texture!==null&&(m.depthNear>0&&(le=m.depthNear),m.depthFar>0&&(ae=m.depthFar)),U.near=P.near=M.near=le,U.far=P.far=M.far=ae,(H!==U.near||Y!==U.far)&&(r.updateRenderState({depthNear:U.near,depthFar:U.far}),H=U.near,Y=U.far),U.layers.mask=j.layers.mask|6,M.layers.mask=U.layers.mask&-5,P.layers.mask=U.layers.mask&-3;const ke=j.parent,Ge=U.cameras;de(U,ke);for(let Ue=0;Ue<Ge.length;Ue++)de(Ge[Ue],ke);Ge.length===2?Z(U,M,P):U.projectionMatrix.copy(M.projectionMatrix),he(j,U,ke)};function he(j,le,ae){ae===null?j.matrix.copy(le.matrixWorld):(j.matrix.copy(ae.matrixWorld),j.matrix.invert(),j.matrix.multiply(le.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(le.projectionMatrix),j.projectionMatrixInverse.copy(le.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Vr*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(d===null&&h===null))return l},this.setFoveation=function(j){l=j,d!==null&&(d.fixedFoveation=j),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=j)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(U)},this.getCameraTexture=function(j){return p[j]};let $e=null;function ot(j,le){if(u=le.getViewerPose(c||a),_=le,u!==null){const ae=u.views;h!==null&&(e.setRenderTargetFramebuffer(x,h.framebuffer),e.setRenderTarget(x));let ke=!1;ae.length!==U.cameras.length&&(U.cameras.length=0,ke=!0);for(let Ye=0;Ye<ae.length;Ye++){const rt=ae[Ye];let N=null;if(h!==null)N=h.getViewport(rt);else{const A=f.getViewSubImage(d,rt);N=A.viewport,Ye===0&&(e.setRenderTargetTextures(x,A.colorTexture,A.depthStencilTexture),e.setRenderTarget(x))}let L=R[Ye];L===void 0&&(L=new Jt,L.layers.enable(Ye),L.viewport=new St,R[Ye]=L),L.matrix.fromArray(rt.transform.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale),L.projectionMatrix.fromArray(rt.projectionMatrix),L.projectionMatrixInverse.copy(L.projectionMatrix).invert(),L.viewport.set(N.x,N.y,N.width,N.height),Ye===0&&(U.matrix.copy(L.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),ke===!0&&U.cameras.push(L)}const Ge=r.enabledFeatures;if(Ge&&Ge.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&b){f=i.getBinding();const Ye=f.getDepthInformation(ae[0]);Ye&&Ye.isValid&&Ye.texture&&m.init(Ye,r.renderState)}if(Ge&&Ge.includes("camera-access")&&b){e.state.unbindTexture(),f=i.getBinding();for(let Ye=0;Ye<ae.length;Ye++){const rt=ae[Ye].camera;if(rt){let N=p[rt];N||(N=new Rd,p[rt]=N);const L=f.getCameraImage(rt);N.sourceTexture=L}}}}for(let ae=0;ae<w.length;ae++){const ke=E[ae],Ge=w[ae];ke!==null&&Ge!==void 0&&Ge.update(ke,le,c||a)}$e&&$e(j,le),le.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:le}),_=null}const Oe=new Ud;Oe.setAnimationLoop(ot),this.setAnimationLoop=function(j){$e=j},this.dispose=function(){}}}const B0=new yt,Hd=new Ve;Hd.set(-1,0,0,0,1,0,0,0,1);function z0(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Cd(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,S,I,x){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?s(m,p):p.isMeshLambertMaterial?(s(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(s(m,p),f(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(s(m,p),d(m,p),p.isMeshPhysicalMaterial&&h(m,p,x)):p.isMeshMatcapMaterial?(s(m,p),_(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),b(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,S,I):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Yt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Yt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const S=e.get(p),I=S.envMap,x=S.envMapRotation;I&&(m.envMap.value=I,m.envMapRotation.value.setFromMatrix4(B0.makeRotationFromEuler(x)).transpose(),I.isCubeTexture&&I.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Hd),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,S,I){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*S,m.scale.value=I*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function h(m,p,S){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Yt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function b(m,p){const S=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function H0(n,e,t,i){let r={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,w){const E=w.program;i.uniformBlockBinding(x,E)}function c(x,w){let E=r[x.id];E===void 0&&(m(x),E=u(x),r[x.id]=E,x.addEventListener("dispose",S));const C=w.program;i.updateUBOMapping(x,C);const v=e.render.frame;s[x.id]!==v&&(d(x),s[x.id]=v)}function u(x){const w=f();x.__bindingPointIndex=w;const E=n.createBuffer(),C=x.__size,v=x.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,C,v),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,w,E),E}function f(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return et("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){const w=r[x.id],E=x.uniforms,C=x.__cache;n.bindBuffer(n.UNIFORM_BUFFER,w);for(let v=0,M=E.length;v<M;v++){const P=E[v];if(Array.isArray(P))for(let R=0,U=P.length;R<U;R++)h(P[R],v,R,C);else h(P,v,0,C)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(x,w,E,C){if(b(x,w,E,C)===!0){const v=x.__offset,M=x.value;if(Array.isArray(M)){let P=0;for(let R=0;R<M.length;R++){const U=M[R],H=p(U);_(U,x.__data,P),typeof U!="number"&&typeof U!="boolean"&&!U.isMatrix3&&!ArrayBuffer.isView(U)&&(P+=H.storage/Float32Array.BYTES_PER_ELEMENT)}}else _(M,x.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,v,x.__data)}}function _(x,w,E){typeof x=="number"||typeof x=="boolean"?w[0]=x:x.isMatrix3?(w[0]=x.elements[0],w[1]=x.elements[1],w[2]=x.elements[2],w[3]=0,w[4]=x.elements[3],w[5]=x.elements[4],w[6]=x.elements[5],w[7]=0,w[8]=x.elements[6],w[9]=x.elements[7],w[10]=x.elements[8],w[11]=0):ArrayBuffer.isView(x)?w.set(new x.constructor(x.buffer,x.byteOffset,w.length)):x.toArray(w,E)}function b(x,w,E,C){const v=x.value,M=w+"_"+E;if(C[M]===void 0)return typeof v=="number"||typeof v=="boolean"?C[M]=v:ArrayBuffer.isView(v)?C[M]=v.slice():C[M]=v.clone(),!0;{const P=C[M];if(typeof v=="number"||typeof v=="boolean"){if(P!==v)return C[M]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(P.equals(v)===!1)return P.copy(v),!0}}return!1}function m(x){const w=x.uniforms;let E=0;const C=16;for(let M=0,P=w.length;M<P;M++){const R=Array.isArray(w[M])?w[M]:[w[M]];for(let U=0,H=R.length;U<H;U++){const Y=R[U],B=Array.isArray(Y.value)?Y.value:[Y.value];for(let K=0,V=B.length;K<V;K++){const ee=B[K],oe=p(ee),Z=E%C,de=Z%oe.boundary,he=Z+de;E+=de,he!==0&&C-he<oe.storage&&(E+=C-he),Y.__data=new Float32Array(oe.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=E,E+=oe.storage}}}const v=E%C;return v>0&&(E+=C-v),x.__size=E,x.__cache={},this}function p(x){const w={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(w.boundary=4,w.storage=4):x.isVector2?(w.boundary=8,w.storage=8):x.isVector3||x.isColor?(w.boundary=16,w.storage=12):x.isVector4?(w.boundary=16,w.storage=16):x.isMatrix3?(w.boundary=48,w.storage=48):x.isMatrix4?(w.boundary=64,w.storage=64):x.isTexture?He("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(w.boundary=16,w.storage=x.byteLength):He("WebGLRenderer: Unsupported uniform value type.",x),w}function S(x){const w=x.target;w.removeEventListener("dispose",S);const E=a.indexOf(w.__bindingPointIndex);a.splice(E,1),n.deleteBuffer(r[w.id]),delete r[w.id],delete s[w.id]}function I(){for(const x in r)n.deleteBuffer(r[x]);a=[],r={},s={}}return{bind:l,update:c,dispose:I}}const G0=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let bn=null;function V0(){return bn===null&&(bn=new Af(G0,16,16,wi,Wn),bn.name="DFG_LUT",bn.minFilter=Ct,bn.magFilter=Ct,bn.wrapS=zn,bn.wrapT=zn,bn.generateMipmaps=!1,bn.needsUpdate=!0),bn}class W0{constructor(e={}){const{canvas:t=Hu(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1,outputBufferType:h=Qt}=e;this.isWebGLRenderer=!0;let _;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=i.getContextAttributes().alpha}else _=a;const b=h,m=new Set([$o,Yo,qo]),p=new Set([Qt,Pn,Br,zr,Wo,Xo]),S=new Uint32Array(4),I=new Int32Array(4),x=new G;let w=null,E=null;const C=[],v=[];let M=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Rn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const P=this;let R=!1,U=null,H=null,Y=null,B=null;this._outputColorSpace=Wt;let K=0,V=0,ee=null,oe=-1,Z=null;const de=new St,he=new St;let $e=null;const ot=new je(0);let Oe=0,j=t.width,le=t.height,ae=1,ke=null,Ge=null;const Ue=new St(0,0,j,le),mt=new St(0,0,j,le);let Ye=!1;const rt=new nl;let N=!1,L=!1;const A=new yt,F=new G,ne=new St,ie={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ce=!1;function ye(){return ee===null?ae:1}let D=i;function Se(y,k){return t.getContext(y,k)}try{const y={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Go}`),t.addEventListener("webglcontextlost",Et,!1),t.addEventListener("webglcontextrestored",gt,!1),t.addEventListener("webglcontextcreationerror",vn,!1),D===null){const k="webgl2";if(D=Se(k,y),D===null)throw Se(k)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(y){throw et("WebGLRenderer: "+y.message),y}let Ae,T,g,z,W,J,ue,pe,Q,re,me,Ie,xe,ge,Ne,ze,Xe,O,fe,te,_e,Ee,se;function Pe(){Ae=new Vm(D),Ae.init(),_e=new U0(D,Ae),T=new Nm(D,Ae,e,_e),g=new L0(D,Ae),T.reversedDepthBuffer&&d&&g.buffers.depth.setReversed(!0),H=D.createFramebuffer(),Y=D.createFramebuffer(),B=D.createFramebuffer(),z=new qm(D),W=new x0,J=new D0(D,Ae,g,W,T,_e,z),ue=new Gm(P),pe=new Zf(D),Ee=new Dm(D,pe),Q=new Wm(D,pe,z,Ee),re=new $m(D,Q,pe,Ee,z),O=new Ym(D,T,J),Ne=new Fm(W),me=new _0(P,ue,Ae,T,Ee,Ne),Ie=new z0(P,W),xe=new M0,ge=new w0(Ae),Xe=new Lm(P,ue,g,re,_,l),ze=new I0(P,re,T),se=new H0(D,z,T,g),fe=new Um(D,Ae,z),te=new Xm(D,Ae,z),z.programs=me.programs,P.capabilities=T,P.extensions=Ae,P.properties=W,P.renderLists=xe,P.shadowMap=ze,P.state=g,P.info=z}Pe(),b!==Qt&&(M=new Zm(b,t.width,t.height,o,r,s));const Re=new k0(P,D);this.xr=Re,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const y=Ae.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=Ae.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return ae},this.setPixelRatio=function(y){y!==void 0&&(ae=y,this.setSize(j,le,!1))},this.getSize=function(y){return y.set(j,le)},this.setSize=function(y,k,$=!0){if(Re.isPresenting){He("WebGLRenderer: Can't change size while VR device is presenting.");return}j=y,le=k,t.width=Math.floor(y*ae),t.height=Math.floor(k*ae),$===!0&&(t.style.width=y+"px",t.style.height=k+"px"),M!==null&&M.setSize(t.width,t.height),this.setViewport(0,0,y,k)},this.getDrawingBufferSize=function(y){return y.set(j*ae,le*ae).floor()},this.setDrawingBufferSize=function(y,k,$){j=y,le=k,ae=$,t.width=Math.floor(y*$),t.height=Math.floor(k*$),this.setViewport(0,0,y,k)},this.setEffects=function(y){if(b===Qt){et("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(y){for(let k=0;k<y.length;k++)if(y[k].isOutputPass===!0){He("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}M.setEffects(y||[])},this.getCurrentViewport=function(y){return y.copy(de)},this.getViewport=function(y){return y.copy(Ue)},this.setViewport=function(y,k,$,X){y.isVector4?Ue.set(y.x,y.y,y.z,y.w):Ue.set(y,k,$,X),g.viewport(de.copy(Ue).multiplyScalar(ae).round())},this.getScissor=function(y){return y.copy(mt)},this.setScissor=function(y,k,$,X){y.isVector4?mt.set(y.x,y.y,y.z,y.w):mt.set(y,k,$,X),g.scissor(he.copy(mt).multiplyScalar(ae).round())},this.getScissorTest=function(){return Ye},this.setScissorTest=function(y){g.setScissorTest(Ye=y)},this.setOpaqueSort=function(y){ke=y},this.setTransparentSort=function(y){Ge=y},this.getClearColor=function(y){return y.copy(Xe.getClearColor())},this.setClearColor=function(){Xe.setClearColor(...arguments)},this.getClearAlpha=function(){return Xe.getClearAlpha()},this.setClearAlpha=function(){Xe.setClearAlpha(...arguments)},this.clear=function(y=!0,k=!0,$=!0){let X=0;if(y){let q=!1;if(ee!==null){const be=ee.texture.format;q=m.has(be)}if(q){const be=ee.texture.type,we=p.has(be),Me=Xe.getClearColor(),Ce=Xe.getClearAlpha(),Le=Me.r,qe=Me.g,Je=Me.b;we?(S[0]=Le,S[1]=qe,S[2]=Je,S[3]=Ce,D.clearBufferuiv(D.COLOR,0,S)):(I[0]=Le,I[1]=qe,I[2]=Je,I[3]=Ce,D.clearBufferiv(D.COLOR,0,I))}else X|=D.COLOR_BUFFER_BIT}k&&(X|=D.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),$&&(X|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X!==0&&D.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(y){y.setRenderer(this),U=y},this.dispose=function(){t.removeEventListener("webglcontextlost",Et,!1),t.removeEventListener("webglcontextrestored",gt,!1),t.removeEventListener("webglcontextcreationerror",vn,!1),Xe.dispose(),xe.dispose(),ge.dispose(),W.dispose(),ue.dispose(),re.dispose(),Ee.dispose(),se.dispose(),me.dispose(),Re.dispose(),Re.removeEventListener("sessionstart",ml),Re.removeEventListener("sessionend",gl),fi.stop()};function Et(y){y.preventDefault(),Os("WebGLRenderer: Context Lost."),R=!0}function gt(){Os("WebGLRenderer: Context Restored."),R=!1;const y=z.autoReset,k=ze.enabled,$=ze.autoUpdate,X=ze.needsUpdate,q=ze.type;Pe(),z.autoReset=y,ze.enabled=k,ze.autoUpdate=$,ze.needsUpdate=X,ze.type=q}function vn(y){et("WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function Mn(y){const k=y.target;k.removeEventListener("dispose",Mn),tu(k)}function tu(y){nu(y),W.remove(y)}function nu(y){const k=W.get(y).programs;k!==void 0&&(k.forEach(function($){me.releaseProgram($)}),y.isShaderMaterial&&me.releaseShaderCache(y))}this.renderBufferDirect=function(y,k,$,X,q,be){k===null&&(k=ie);const we=q.isMesh&&q.matrixWorld.determinantAffine()<0,Me=su(y,k,$,X,q);g.setMaterial(X,we);let Ce=$.index,Le=1;if(X.wireframe===!0){if(Ce=Q.getWireframeAttribute($),Ce===void 0)return;Le=2}const qe=$.drawRange,Je=$.attributes.position;let De=qe.start*Le,ut=(qe.start+qe.count)*Le;be!==null&&(De=Math.max(De,be.start*Le),ut=Math.min(ut,(be.start+be.count)*Le)),Ce!==null?(De=Math.max(De,0),ut=Math.min(ut,Ce.count)):Je!=null&&(De=Math.max(De,0),ut=Math.min(ut,Je.count));const wt=ut-De;if(wt<0||wt===1/0)return;Ee.setup(q,X,Me,$,Ce);let Tt,ht=fe;if(Ce!==null&&(Tt=pe.get(Ce),ht=te,ht.setIndex(Tt)),q.isMesh)X.wireframe===!0?(g.setLineWidth(X.wireframeLinewidth*ye()),ht.setMode(D.LINES)):ht.setMode(D.TRIANGLES);else if(q.isLine){let kt=X.linewidth;kt===void 0&&(kt=1),g.setLineWidth(kt*ye()),q.isLineSegments?ht.setMode(D.LINES):q.isLineLoop?ht.setMode(D.LINE_LOOP):ht.setMode(D.LINE_STRIP)}else q.isPoints?ht.setMode(D.POINTS):q.isSprite&&ht.setMode(D.TRIANGLES);if(q.isBatchedMesh)if(Ae.get("WEBGL_multi_draw"))ht.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{const kt=q._multiDrawStarts,Te=q._multiDrawCounts,$t=q._multiDrawCount,it=Ce?pe.get(Ce).bytesPerElement:1,jt=W.get(X).currentProgram.getUniforms();for(let yn=0;yn<$t;yn++)jt.setValue(D,"_gl_DrawID",yn),ht.render(kt[yn]/it,Te[yn])}else if(q.isInstancedMesh)ht.renderInstances(De,wt,q.count);else if($.isInstancedBufferGeometry){const kt=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,Te=Math.min($.instanceCount,kt);ht.renderInstances(De,wt,Te)}else ht.render(De,wt)};function pl(y,k,$){y.transparent===!0&&y.side===Bn&&y.forceSinglePass===!1?(y.side=Yt,y.needsUpdate=!0,Yr(y,k,$),y.side=di,y.needsUpdate=!0,Yr(y,k,$),y.side=Bn):Yr(y,k,$)}this.compile=function(y,k,$=null){$===null&&($=y),E=ge.get($),E.init(k),v.push(E),$.traverseVisible(function(q){q.isLight&&q.layers.test(k.layers)&&(E.pushLight(q),q.castShadow&&E.pushShadow(q))}),y!==$&&y.traverseVisible(function(q){q.isLight&&q.layers.test(k.layers)&&(E.pushLight(q),q.castShadow&&E.pushShadow(q))}),E.setupLights();const X=new Set;return y.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;const be=q.material;if(be)if(Array.isArray(be))for(let we=0;we<be.length;we++){const Me=be[we];pl(Me,$,q),X.add(Me)}else pl(be,$,q),X.add(be)}),E=v.pop(),X},this.compileAsync=function(y,k,$=null){const X=this.compile(y,k,$);return new Promise(q=>{function be(){if(X.forEach(function(we){W.get(we).currentProgram.isReady()&&X.delete(we)}),X.size===0){q(y);return}setTimeout(be,10)}Ae.get("KHR_parallel_shader_compile")!==null?be():setTimeout(be,10)})};let qs=null;function iu(y){qs&&qs(y)}function ml(){fi.stop()}function gl(){fi.start()}const fi=new Ud;fi.setAnimationLoop(iu),typeof self<"u"&&fi.setContext(self),this.setAnimationLoop=function(y){qs=y,Re.setAnimationLoop(y),y===null?fi.stop():fi.start()},Re.addEventListener("sessionstart",ml),Re.addEventListener("sessionend",gl),this.render=function(y,k){if(k!==void 0&&k.isCamera!==!0){et("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;U!==null&&U.renderStart(y,k);const $=Re.enabled===!0&&Re.isPresenting===!0,X=M!==null&&(ee===null||$)&&M.begin(P,ee);if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),Re.enabled===!0&&Re.isPresenting===!0&&(M===null||M.isCompositing()===!1)&&(Re.cameraAutoUpdate===!0&&Re.updateCamera(k),k=Re.getCamera()),y.isScene===!0&&y.onBeforeRender(P,y,k,ee),E=ge.get(y,v.length),E.init(k),E.state.textureUnits=J.getTextureUnits(),v.push(E),A.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),rt.setFromProjectionMatrix(A,An,k.reversedDepth),L=this.localClippingEnabled,N=Ne.init(this.clippingPlanes,L),w=xe.get(y,C.length),w.init(),C.push(w),Re.enabled===!0&&Re.isPresenting===!0){const we=P.xr.getDepthSensingMesh();we!==null&&Ys(we,k,-1/0,P.sortObjects)}Ys(y,k,0,P.sortObjects),w.finish(),P.sortObjects===!0&&w.sort(ke,Ge,k.reversedDepth),ce=Re.enabled===!1||Re.isPresenting===!1||Re.hasDepthSensing()===!1,ce&&Xe.addToRenderList(w,y),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),N===!0&&Ne.beginShadows();const q=E.state.shadowsArray;if(ze.render(q,y,k),N===!0&&Ne.endShadows(),(X&&M.hasRenderPass())===!1){const we=w.opaque,Me=w.transmissive;if(E.setupLights(),k.isArrayCamera){const Ce=k.cameras;if(Me.length>0)for(let Le=0,qe=Ce.length;Le<qe;Le++){const Je=Ce[Le];xl(we,Me,y,Je)}ce&&Xe.render(y);for(let Le=0,qe=Ce.length;Le<qe;Le++){const Je=Ce[Le];_l(w,y,Je,Je.viewport)}}else Me.length>0&&xl(we,Me,y,k),ce&&Xe.render(y),_l(w,y,k)}ee!==null&&V===0&&(J.updateMultisampleRenderTarget(ee),J.updateRenderTargetMipmap(ee)),X&&M.end(P),y.isScene===!0&&y.onAfterRender(P,y,k),Ee.resetDefaultState(),oe=-1,Z=null,v.pop(),v.length>0?(E=v[v.length-1],J.setTextureUnits(E.state.textureUnits),N===!0&&Ne.setGlobalState(P.clippingPlanes,E.state.camera)):E=null,C.pop(),C.length>0?w=C[C.length-1]:w=null,U!==null&&U.renderEnd()};function Ys(y,k,$,X){if(y.visible===!1)return;if(y.layers.test(k.layers)){if(y.isGroup)$=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(k);else if(y.isLightProbeGrid)E.pushLightProbeGrid(y);else if(y.isLight)E.pushLight(y),y.castShadow&&E.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||rt.intersectsSprite(y)){X&&ne.setFromMatrixPosition(y.matrixWorld).applyMatrix4(A);const we=re.update(y),Me=y.material;Me.visible&&w.push(y,we,Me,$,ne.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||rt.intersectsObject(y))){const we=re.update(y),Me=y.material;if(X&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),ne.copy(y.boundingSphere.center)):(we.boundingSphere===null&&we.computeBoundingSphere(),ne.copy(we.boundingSphere.center)),ne.applyMatrix4(y.matrixWorld).applyMatrix4(A)),Array.isArray(Me)){const Ce=we.groups;for(let Le=0,qe=Ce.length;Le<qe;Le++){const Je=Ce[Le],De=Me[Je.materialIndex];De&&De.visible&&w.push(y,we,De,$,ne.z,Je)}}else Me.visible&&w.push(y,we,Me,$,ne.z,null)}}const be=y.children;for(let we=0,Me=be.length;we<Me;we++)Ys(be[we],k,$,X)}function _l(y,k,$,X){const{opaque:q,transmissive:be,transparent:we}=y;E.setupLightsView($),N===!0&&Ne.setGlobalState(P.clippingPlanes,$),X&&g.viewport(de.copy(X)),q.length>0&&qr(q,k,$),be.length>0&&qr(be,k,$),we.length>0&&qr(we,k,$),g.buffers.depth.setTest(!0),g.buffers.depth.setMask(!0),g.buffers.color.setMask(!0),g.setPolygonOffset(!1)}function xl(y,k,$,X){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[X.id]===void 0){const De=Ae.has("EXT_color_buffer_half_float")||Ae.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[X.id]=new Cn(1,1,{generateMipmaps:!0,type:De?Wn:Qt,minFilter:Si,samples:Math.max(4,T.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:tt.workingColorSpace})}const be=E.state.transmissionRenderTarget[X.id],we=X.viewport||de;be.setSize(we.z*P.transmissionResolutionScale,we.w*P.transmissionResolutionScale);const Me=P.getRenderTarget(),Ce=P.getActiveCubeFace(),Le=P.getActiveMipmapLevel();P.setRenderTarget(be),P.getClearColor(ot),Oe=P.getClearAlpha(),Oe<1&&P.setClearColor(16777215,.5),P.clear(),ce&&Xe.render($);const qe=P.toneMapping;P.toneMapping=Rn;const Je=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),E.setupLightsView(X),N===!0&&Ne.setGlobalState(P.clippingPlanes,X),qr(y,$,X),J.updateMultisampleRenderTarget(be),J.updateRenderTargetMipmap(be),Ae.has("WEBGL_multisampled_render_to_texture")===!1){let De=!1;for(let ut=0,wt=k.length;ut<wt;ut++){const Tt=k[ut],{object:ht,geometry:kt,material:Te,group:$t}=Tt;if(Te.side===Bn&&ht.layers.test(X.layers)){const it=Te.side;Te.side=Yt,Te.needsUpdate=!0,vl(ht,$,X,kt,Te,$t),Te.side=it,Te.needsUpdate=!0,De=!0}}De===!0&&(J.updateMultisampleRenderTarget(be),J.updateRenderTargetMipmap(be))}P.setRenderTarget(Me,Ce,Le),P.setClearColor(ot,Oe),Je!==void 0&&(X.viewport=Je),P.toneMapping=qe}function qr(y,k,$){const X=k.isScene===!0?k.overrideMaterial:null;for(let q=0,be=y.length;q<be;q++){const we=y[q],{object:Me,geometry:Ce,group:Le}=we;let qe=we.material;qe.allowOverride===!0&&X!==null&&(qe=X),Me.layers.test($.layers)&&vl(Me,k,$,Ce,qe,Le)}}function vl(y,k,$,X,q,be){y.onBeforeRender(P,k,$,X,q,be),y.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),q.onBeforeRender(P,k,$,X,y,be),q.transparent===!0&&q.side===Bn&&q.forceSinglePass===!1?(q.side=Yt,q.needsUpdate=!0,P.renderBufferDirect($,k,X,q,y,be),q.side=di,q.needsUpdate=!0,P.renderBufferDirect($,k,X,q,y,be),q.side=Bn):P.renderBufferDirect($,k,X,q,y,be),y.onAfterRender(P,k,$,X,q,be)}function Yr(y,k,$){k.isScene!==!0&&(k=ie);const X=W.get(y),q=E.state.lights,be=E.state.shadowsArray,we=q.state.version,Me=me.getParameters(y,q.state,be,k,$,E.state.lightProbeGridArray),Ce=me.getProgramCacheKey(Me);let Le=X.programs;X.environment=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?k.environment:null,X.fog=k.fog;const qe=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap;X.envMap=ue.get(y.envMap||X.environment,qe),X.envMapRotation=X.environment!==null&&y.envMap===null?k.environmentRotation:y.envMapRotation,Le===void 0&&(y.addEventListener("dispose",Mn),Le=new Map,X.programs=Le);let Je=Le.get(Ce);if(Je!==void 0){if(X.currentProgram===Je&&X.lightsStateVersion===we)return yl(y,Me),Je}else Me.uniforms=me.getUniforms(y),U!==null&&y.isNodeMaterial&&U.build(y,$,Me),y.onBeforeCompile(Me,P),Je=me.acquireProgram(Me,Ce),Le.set(Ce,Je),X.uniforms=Me.uniforms;const De=X.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(De.clippingPlanes=Ne.uniform),yl(y,Me),X.needsLights=ou(y),X.lightsStateVersion=we,X.needsLights&&(De.ambientLightColor.value=q.state.ambient,De.lightProbe.value=q.state.probe,De.directionalLights.value=q.state.directional,De.directionalLightShadows.value=q.state.directionalShadow,De.spotLights.value=q.state.spot,De.spotLightShadows.value=q.state.spotShadow,De.rectAreaLights.value=q.state.rectArea,De.ltc_1.value=q.state.rectAreaLTC1,De.ltc_2.value=q.state.rectAreaLTC2,De.pointLights.value=q.state.point,De.pointLightShadows.value=q.state.pointShadow,De.hemisphereLights.value=q.state.hemi,De.directionalShadowMatrix.value=q.state.directionalShadowMatrix,De.spotLightMatrix.value=q.state.spotLightMatrix,De.spotLightMap.value=q.state.spotLightMap,De.pointShadowMatrix.value=q.state.pointShadowMatrix),X.lightProbeGrid=E.state.lightProbeGridArray.length>0,X.currentProgram=Je,X.uniformsList=null,Je}function Ml(y){if(y.uniformsList===null){const k=y.currentProgram.getUniforms();y.uniformsList=Cs.seqWithValue(k.seq,y.uniforms)}return y.uniformsList}function yl(y,k){const $=W.get(y);$.outputColorSpace=k.outputColorSpace,$.batching=k.batching,$.batchingColor=k.batchingColor,$.instancing=k.instancing,$.instancingColor=k.instancingColor,$.instancingMorph=k.instancingMorph,$.skinning=k.skinning,$.morphTargets=k.morphTargets,$.morphNormals=k.morphNormals,$.morphColors=k.morphColors,$.morphTargetsCount=k.morphTargetsCount,$.numClippingPlanes=k.numClippingPlanes,$.numIntersection=k.numClipIntersection,$.vertexAlphas=k.vertexAlphas,$.vertexTangents=k.vertexTangents,$.toneMapping=k.toneMapping}function ru(y,k){if(y.length===0)return null;if(y.length===1)return y[0].texture!==null?y[0]:null;x.setFromMatrixPosition(k.matrixWorld);for(let $=0,X=y.length;$<X;$++){const q=y[$];if(q.texture!==null&&q.boundingBox.containsPoint(x))return q}return null}function su(y,k,$,X,q){k.isScene!==!0&&(k=ie),J.resetTextureUnits();const be=k.fog,we=X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial?k.environment:null,Me=ee===null?P.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:tt.workingColorSpace,Ce=X.isMeshStandardMaterial||X.isMeshLambertMaterial&&!X.envMap||X.isMeshPhongMaterial&&!X.envMap,Le=ue.get(X.envMap||we,Ce),qe=X.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,Je=!!$.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),De=!!$.morphAttributes.position,ut=!!$.morphAttributes.normal,wt=!!$.morphAttributes.color;let Tt=Rn;X.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(Tt=P.toneMapping);const ht=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,kt=ht!==void 0?ht.length:0,Te=W.get(X),$t=E.state.lights;if(N===!0&&(L===!0||y!==Z)){const _t=y===Z&&X.id===oe;Ne.setState(X,y,_t)}let it=!1;X.version===Te.__version?(Te.needsLights&&Te.lightsStateVersion!==$t.state.version||Te.outputColorSpace!==Me||q.isBatchedMesh&&Te.batching===!1||!q.isBatchedMesh&&Te.batching===!0||q.isBatchedMesh&&Te.batchingColor===!0&&q.colorTexture===null||q.isBatchedMesh&&Te.batchingColor===!1&&q.colorTexture!==null||q.isInstancedMesh&&Te.instancing===!1||!q.isInstancedMesh&&Te.instancing===!0||q.isSkinnedMesh&&Te.skinning===!1||!q.isSkinnedMesh&&Te.skinning===!0||q.isInstancedMesh&&Te.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&Te.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&Te.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&Te.instancingMorph===!1&&q.morphTexture!==null||Te.envMap!==Le||X.fog===!0&&Te.fog!==be||Te.numClippingPlanes!==void 0&&(Te.numClippingPlanes!==Ne.numPlanes||Te.numIntersection!==Ne.numIntersection)||Te.vertexAlphas!==qe||Te.vertexTangents!==Je||Te.morphTargets!==De||Te.morphNormals!==ut||Te.morphColors!==wt||Te.toneMapping!==Tt||Te.morphTargetsCount!==kt||!!Te.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&(it=!0):(it=!0,Te.__version=X.version);let jt=Te.currentProgram;it===!0&&(jt=Yr(X,k,q),U&&X.isNodeMaterial&&U.onUpdateProgram(X,jt,Te));let yn=!1,Yn=!1,Ui=!1;const pt=jt.getUniforms(),At=Te.uniforms;if(g.useProgram(jt.program)&&(yn=!0,Yn=!0,Ui=!0),X.id!==oe&&(oe=X.id,Yn=!0),Te.needsLights){const _t=ru(E.state.lightProbeGridArray,q);Te.lightProbeGrid!==_t&&(Te.lightProbeGrid=_t,Yn=!0)}if(yn||Z!==y){g.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),pt.setValue(D,"projectionMatrix",y.projectionMatrix),pt.setValue(D,"viewMatrix",y.matrixWorldInverse);const Kn=pt.map.cameraPosition;Kn!==void 0&&Kn.setValue(D,F.setFromMatrixPosition(y.matrixWorld)),T.logarithmicDepthBuffer&&pt.setValue(D,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&pt.setValue(D,"isOrthographic",y.isOrthographicCamera===!0),Z!==y&&(Z=y,Yn=!0,Ui=!0)}if(Te.needsLights&&($t.state.directionalShadowMap.length>0&&pt.setValue(D,"directionalShadowMap",$t.state.directionalShadowMap,J),$t.state.spotShadowMap.length>0&&pt.setValue(D,"spotShadowMap",$t.state.spotShadowMap,J),$t.state.pointShadowMap.length>0&&pt.setValue(D,"pointShadowMap",$t.state.pointShadowMap,J)),q.isSkinnedMesh){pt.setOptional(D,q,"bindMatrix"),pt.setOptional(D,q,"bindMatrixInverse");const _t=q.skeleton;_t&&(_t.boneTexture===null&&_t.computeBoneTexture(),pt.setValue(D,"boneTexture",_t.boneTexture,J))}q.isBatchedMesh&&(pt.setOptional(D,q,"batchingTexture"),pt.setValue(D,"batchingTexture",q._matricesTexture,J),pt.setOptional(D,q,"batchingIdTexture"),pt.setValue(D,"batchingIdTexture",q._indirectTexture,J),pt.setOptional(D,q,"batchingColorTexture"),q._colorsTexture!==null&&pt.setValue(D,"batchingColorTexture",q._colorsTexture,J));const $n=$.morphAttributes;if(($n.position!==void 0||$n.normal!==void 0||$n.color!==void 0)&&O.update(q,$,jt),(Yn||Te.receiveShadow!==q.receiveShadow)&&(Te.receiveShadow=q.receiveShadow,pt.setValue(D,"receiveShadow",q.receiveShadow)),(X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial)&&X.envMap===null&&k.environment!==null&&(At.envMapIntensity.value=k.environmentIntensity),At.dfgLUT!==void 0&&(At.dfgLUT.value=V0()),Yn){if(pt.setValue(D,"toneMappingExposure",P.toneMappingExposure),Te.needsLights&&au(At,Ui),be&&X.fog===!0&&Ie.refreshFogUniforms(At,be),Ie.refreshMaterialUniforms(At,X,ae,le,E.state.transmissionRenderTarget[y.id]),Te.needsLights&&Te.lightProbeGrid){const _t=Te.lightProbeGrid;At.probesSH.value=_t.texture,At.probesMin.value.copy(_t.boundingBox.min),At.probesMax.value.copy(_t.boundingBox.max),At.probesResolution.value.copy(_t.resolution)}Cs.upload(D,Ml(Te),At,J)}if(X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Cs.upload(D,Ml(Te),At,J),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&pt.setValue(D,"center",q.center),pt.setValue(D,"modelViewMatrix",q.modelViewMatrix),pt.setValue(D,"normalMatrix",q.normalMatrix),pt.setValue(D,"modelMatrix",q.matrixWorld),X.uniformsGroups!==void 0){const _t=X.uniformsGroups;for(let Kn=0,Ni=_t.length;Kn<Ni;Kn++){const Sl=_t[Kn];se.update(Sl,jt),se.bind(Sl,jt)}}return jt}function au(y,k){y.ambientLightColor.needsUpdate=k,y.lightProbe.needsUpdate=k,y.directionalLights.needsUpdate=k,y.directionalLightShadows.needsUpdate=k,y.pointLights.needsUpdate=k,y.pointLightShadows.needsUpdate=k,y.spotLights.needsUpdate=k,y.spotLightShadows.needsUpdate=k,y.rectAreaLights.needsUpdate=k,y.hemisphereLights.needsUpdate=k}function ou(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return K},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return ee},this.setRenderTargetTextures=function(y,k,$){const X=W.get(y);X.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),W.get(y.texture).__webglTexture=k,W.get(y.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:$,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,k){const $=W.get(y);$.__webglFramebuffer=k,$.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(y,k=0,$=0){ee=y,K=k,V=$;let X=null,q=!1,be=!1;if(y){const Me=W.get(y);if(Me.__useDefaultFramebuffer!==void 0){g.bindFramebuffer(D.FRAMEBUFFER,Me.__webglFramebuffer),de.copy(y.viewport),he.copy(y.scissor),$e=y.scissorTest,g.viewport(de),g.scissor(he),g.setScissorTest($e),oe=-1;return}else if(Me.__webglFramebuffer===void 0)J.setupRenderTarget(y);else if(Me.__hasExternalTextures)J.rebindTextures(y,W.get(y.texture).__webglTexture,W.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const qe=y.depthTexture;if(Me.__boundDepthTexture!==qe){if(qe!==null&&W.has(qe)&&(y.width!==qe.image.width||y.height!==qe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");J.setupDepthRenderbuffer(y)}}const Ce=y.texture;(Ce.isData3DTexture||Ce.isDataArrayTexture||Ce.isCompressedArrayTexture)&&(be=!0);const Le=W.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Le[k])?X=Le[k][$]:X=Le[k],q=!0):y.samples>0&&J.useMultisampledRTT(y)===!1?X=W.get(y).__webglMultisampledFramebuffer:Array.isArray(Le)?X=Le[$]:X=Le,de.copy(y.viewport),he.copy(y.scissor),$e=y.scissorTest}else de.copy(Ue).multiplyScalar(ae).floor(),he.copy(mt).multiplyScalar(ae).floor(),$e=Ye;if($!==0&&(X=H),g.bindFramebuffer(D.FRAMEBUFFER,X)&&g.drawBuffers(y,X),g.viewport(de),g.scissor(he),g.setScissorTest($e),q){const Me=W.get(y.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+k,Me.__webglTexture,$)}else if(be){const Me=k;for(let Ce=0;Ce<y.textures.length;Ce++){const Le=W.get(y.textures[Ce]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Ce,Le.__webglTexture,$,Me)}}else if(y!==null&&$!==0){const Me=W.get(y.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Me.__webglTexture,$)}oe=-1},this.readRenderTargetPixels=function(y,k,$,X,q,be,we,Me=0){if(!(y&&y.isWebGLRenderTarget)){et("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=W.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&we!==void 0&&(Ce=Ce[we]),Ce){g.bindFramebuffer(D.FRAMEBUFFER,Ce);try{const Le=y.textures[Me],qe=Le.format,Je=Le.type;if(y.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Me),!T.textureFormatReadable(qe)){et("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!T.textureTypeReadable(Je)){et("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=y.width-X&&$>=0&&$<=y.height-q&&D.readPixels(k,$,X,q,_e.convert(qe),_e.convert(Je),be)}finally{const Le=ee!==null?W.get(ee).__webglFramebuffer:null;g.bindFramebuffer(D.FRAMEBUFFER,Le)}}},this.readRenderTargetPixelsAsync=async function(y,k,$,X,q,be,we,Me=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ce=W.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&we!==void 0&&(Ce=Ce[we]),Ce)if(k>=0&&k<=y.width-X&&$>=0&&$<=y.height-q){g.bindFramebuffer(D.FRAMEBUFFER,Ce);const Le=y.textures[Me],qe=Le.format,Je=Le.type;if(y.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Me),!T.textureFormatReadable(qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!T.textureTypeReadable(Je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const De=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,De),D.bufferData(D.PIXEL_PACK_BUFFER,be.byteLength,D.STREAM_READ),D.readPixels(k,$,X,q,_e.convert(qe),_e.convert(Je),0);const ut=ee!==null?W.get(ee).__webglFramebuffer:null;g.bindFramebuffer(D.FRAMEBUFFER,ut);const wt=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Gu(D,wt,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,De),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,be),D.deleteBuffer(De),D.deleteSync(wt),be}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,k=null,$=0){const X=Math.pow(2,-$),q=Math.floor(y.image.width*X),be=Math.floor(y.image.height*X),we=k!==null?k.x:0,Me=k!==null?k.y:0;J.setTexture2D(y,0),D.copyTexSubImage2D(D.TEXTURE_2D,$,0,0,we,Me,q,be),g.unbindTexture()},this.copyTextureToTexture=function(y,k,$=null,X=null,q=0,be=0){let we,Me,Ce,Le,qe,Je,De,ut,wt;const Tt=y.isCompressedTexture?y.mipmaps[be]:y.image;if($!==null)we=$.max.x-$.min.x,Me=$.max.y-$.min.y,Ce=$.isBox3?$.max.z-$.min.z:1,Le=$.min.x,qe=$.min.y,Je=$.isBox3?$.min.z:0;else{const At=Math.pow(2,-q);we=Math.floor(Tt.width*At),Me=Math.floor(Tt.height*At),y.isDataArrayTexture?Ce=Tt.depth:y.isData3DTexture?Ce=Math.floor(Tt.depth*At):Ce=1,Le=0,qe=0,Je=0}X!==null?(De=X.x,ut=X.y,wt=X.z):(De=0,ut=0,wt=0);const ht=_e.convert(k.format),kt=_e.convert(k.type);let Te;k.isData3DTexture?(J.setTexture3D(k,0),Te=D.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(J.setTexture2DArray(k,0),Te=D.TEXTURE_2D_ARRAY):(J.setTexture2D(k,0),Te=D.TEXTURE_2D),g.activeTexture(D.TEXTURE0),g.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,k.flipY),g.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),g.pixelStorei(D.UNPACK_ALIGNMENT,k.unpackAlignment);const $t=g.getParameter(D.UNPACK_ROW_LENGTH),it=g.getParameter(D.UNPACK_IMAGE_HEIGHT),jt=g.getParameter(D.UNPACK_SKIP_PIXELS),yn=g.getParameter(D.UNPACK_SKIP_ROWS),Yn=g.getParameter(D.UNPACK_SKIP_IMAGES);g.pixelStorei(D.UNPACK_ROW_LENGTH,Tt.width),g.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Tt.height),g.pixelStorei(D.UNPACK_SKIP_PIXELS,Le),g.pixelStorei(D.UNPACK_SKIP_ROWS,qe),g.pixelStorei(D.UNPACK_SKIP_IMAGES,Je);const Ui=y.isDataArrayTexture||y.isData3DTexture,pt=k.isDataArrayTexture||k.isData3DTexture;if(y.isDepthTexture){const At=W.get(y),$n=W.get(k),_t=W.get(At.__renderTarget),Kn=W.get($n.__renderTarget);g.bindFramebuffer(D.READ_FRAMEBUFFER,_t.__webglFramebuffer),g.bindFramebuffer(D.DRAW_FRAMEBUFFER,Kn.__webglFramebuffer);for(let Ni=0;Ni<Ce;Ni++)Ui&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,W.get(y).__webglTexture,q,Je+Ni),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,W.get(k).__webglTexture,be,wt+Ni)),D.blitFramebuffer(Le,qe,we,Me,De,ut,we,Me,D.DEPTH_BUFFER_BIT,D.NEAREST);g.bindFramebuffer(D.READ_FRAMEBUFFER,null),g.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(q!==0||y.isRenderTargetTexture||W.has(y)){const At=W.get(y),$n=W.get(k);g.bindFramebuffer(D.READ_FRAMEBUFFER,Y),g.bindFramebuffer(D.DRAW_FRAMEBUFFER,B);for(let _t=0;_t<Ce;_t++)Ui?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,At.__webglTexture,q,Je+_t):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,At.__webglTexture,q),pt?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,$n.__webglTexture,be,wt+_t):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,$n.__webglTexture,be),q!==0?D.blitFramebuffer(Le,qe,we,Me,De,ut,we,Me,D.COLOR_BUFFER_BIT,D.NEAREST):pt?D.copyTexSubImage3D(Te,be,De,ut,wt+_t,Le,qe,we,Me):D.copyTexSubImage2D(Te,be,De,ut,Le,qe,we,Me);g.bindFramebuffer(D.READ_FRAMEBUFFER,null),g.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else pt?y.isDataTexture||y.isData3DTexture?D.texSubImage3D(Te,be,De,ut,wt,we,Me,Ce,ht,kt,Tt.data):k.isCompressedArrayTexture?D.compressedTexSubImage3D(Te,be,De,ut,wt,we,Me,Ce,ht,Tt.data):D.texSubImage3D(Te,be,De,ut,wt,we,Me,Ce,ht,kt,Tt):y.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,be,De,ut,we,Me,ht,kt,Tt.data):y.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,be,De,ut,Tt.width,Tt.height,ht,Tt.data):D.texSubImage2D(D.TEXTURE_2D,be,De,ut,we,Me,ht,kt,Tt);g.pixelStorei(D.UNPACK_ROW_LENGTH,$t),g.pixelStorei(D.UNPACK_IMAGE_HEIGHT,it),g.pixelStorei(D.UNPACK_SKIP_PIXELS,jt),g.pixelStorei(D.UNPACK_SKIP_ROWS,yn),g.pixelStorei(D.UNPACK_SKIP_IMAGES,Yn),be===0&&k.generateMipmaps&&D.generateMipmap(Te),g.unbindTexture()},this.initRenderTarget=function(y){W.get(y).__webglFramebuffer===void 0&&J.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?J.setTextureCube(y,0):y.isData3DTexture?J.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?J.setTexture2DArray(y,0):J.setTexture2D(y,0),g.unbindTexture()},this.resetState=function(){K=0,V=0,ee=null,g.reset(),Ee.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return An}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=tt._getDrawingBufferColorSpace(e),t.unpackColorSpace=tt._getUnpackColorSpace()}}const Ri=60,xt=1/Ri,Lo=32,st=17,nt=10,vt={radius:.35,maxHalfHearts:6,moveSpeed:5,damage:10,fireRate:2,range:6,shotSpeed:9,luck:0},X0=60,q0=7,ur=.18,Ps=600,Vt={radius:.42,hp:25,moveSpeed:1.6,aggroRange:7,attackRange:5.5,telegraphTicks:24,cooldownTicks:66,spitSpeed:6,spitDamage:1,contactDamage:1},Ac=3.2,Bs=.82,_i={halfHearts:{min:2,max:24},damage:{min:1,max:1/0},fireRate:{min:.5,max:5},range:{min:3,max:12},shotSpeed:{min:5,max:16},moveSpeed:{min:3.5,max:7.5},luck:{min:0,max:10}},Y0=6,$0=2.2,K0=1.6,Z0=.11,Pr={damageMult:.5,range:2.5,angleRad:.9,radiusMult:.8},or={speedMult:.5,radiusMult:1.6,homingRange:4.5,turnRadPerTick:.05,giantRadiusMult:2.2,giantDamageMult:2},J0=18,Q0=240,Ir={ticks:8,speed:14,iframeTicks:12,cooldownTicks:120},Rc=2,j0=3,e_={renacuajo:1,mosca_gorda:1,sapo_escupidor:3,babosa_acorazada:4,sapo_doble:8},Xt={radius:.22,hp:4,contactDamage:1,windupTicks:18,hopTicks:12,hopSpeed:7,pauseTicks:26,aggroRange:9},ai={radius:.28,hp:6,contactDamage:1,speed:1.3,retargetTicks:55,wobble:2.2},li={radius:.45,hp:30,contactDamage:2,speed:.8,aggroRange:10,turnRadPerTick:.02,backDot:.25},ft={radius:.5,hp:50,contactDamage:2,moveSpeed:1.2,aggroRange:9,attackRange:6,telegraphTicks:24,cooldownTicks:80,spitSpeed:6.5,spitDamage:1,spitSpreadRad:.16,swallowSeekRange:5,swallowRange:1.7,swallowTelegraphTicks:24,healPerSwallow:10,swallowCooldownTicks:140},t_=3,n_=1,Ra={hpPorNivel:.15,velPorNivel:.04,danoExtraDesdeNivel:4},Do={gigante:{hpMult:2.2,velMult:.85,sizeMult:1.45,danoPlus:1,chanceBase:.03,chancePorNivel:.05,chanceTope:.25},veloz:{hpMult:1,velMult:1.5,sizeMult:.8,danoPlus:0,chanceBase:.03,chancePorNivel:.04,chanceTope:.2}},Gd=99,i_={heart:.06},r_=2,s_={crystal:1,crystal_med:3,crystal_big:5},Ca={big:.1,med:.3},Cc=1.7,Pc=7,a_=.45,Fe={radius:.95,hp:300,contactDamage:2,moveSpeed:1,idleTicks:45,jumpAimTicks:30,airborneTicks:20,slamRadius:1.7,slamDamage:2,tongueAimTicks:24,tongueSpeed:16,tongueDamage:2,tongueRadius:.32,tongueRange:11,summonTicks:20,summonCount:2,maxTadpoles:4,volleyAimTicks:26,volleyCount:7,volleySpreadRad:1.1,volleySpitSpeed:6.5,volleyDamage:1,bellyTicks:90,bellyDamageMult:1.5},o_=[8.5,4.4],l_={x:7.95,y:4.1,w:1.1,h:.8},Ic=[[6.5,6.4],[8.5,6.4],[10.5,6.4]],c_=1.2,d_=1.5,ci={hp:20,radius:.42,maxPerRoom:2,chancePerRoom:.75,lootHeart:.25},Lc={comun:60,rara:30,legendaria:10},u_=.75,Tn=1,f_=.55,Ei=5,h_=[{id:"punos_de_piedra",nombre:"Puños de Piedra",categoria:"pasivo",slot:"brazos",rareza:"comun",precio:4,stats:{dano:4},mults:{cadencia:.8},tags:["empuje"],procs:[],spriteOverlay:"brazos_piedra",descripcion:"Golpea como montaña, dispara como abuela."},{id:"brazos_de_arquero",nombre:"Brazos de Arquero",categoria:"pasivo",slot:"brazos",rareza:"comun",precio:3,stats:{alcance:3,velProyectil:3},mults:{},tags:[],procs:[],spriteOverlay:"brazos_arquero",descripcion:"Brazos tensos como cuerdas: el chorro vuela lejos y rápido."},{id:"piernas_de_renacuajo",nombre:"Piernas de Renacuajo",categoria:"pasivo",slot:"piernas",rareza:"comun",precio:4,stats:{velMovimiento:1.2},mults:{},tags:["rastro_charcos"],procs:[],spriteOverlay:"piernas_renacuajo",descripcion:"Deja un caminito húmedo de pura prisa."},{id:"botas_de_salto",nombre:"Botas de Salto",categoria:"pasivo",slot:"piernas",rareza:"rara",precio:8,stats:{},mults:{},tags:["dash"],procs:[],spriteOverlay:"piernas_botas",descripcion:"Un brinquito con ventaja injusta (Shift)."},{id:"casco_de_lata",nombre:"Casco de Lata",categoria:"pasivo",slot:"cabeza",rareza:"comun",precio:3,stats:{armaduraPorSala:1},mults:{},tags:[],procs:[],spriteOverlay:"cabeza_casco",descripcion:"Una olla abollada que te para el primer golpe."},{id:"ojo_de_cristal",nombre:"Ojo de Cristal",categoria:"pasivo",slot:"cabeza",rareza:"rara",precio:8,stats:{},mults:{},tags:["ver_cofres"],procs:[{efecto:"critico",base:.1,porSuerte:.015,tope:.25}],spriteOverlay:"cabeza_monoculo",descripcion:"Ve el punto débil. A veces incluso lo acierta."},{id:"nucleo_denso",nombre:"Núcleo Denso",categoria:"pasivo",slot:"nucleo",rareza:"rara",precio:9,stats:{corazones:2,velMovimiento:-.8},mults:{},tags:[],procs:[],spriteOverlay:"nucleo_denso",descripcion:"Un núcleo el doble de pesado: aguanta más, corre menos."},{id:"corazon_de_la_gema",nombre:"Corazón de la Gema",categoria:"pasivo",slot:"nucleo",rareza:"legendaria",precio:15,stats:{proyectiles:1},mults:{dano:.75},tags:[],procs:[],spriteOverlay:"nucleo_gemelo",descripcion:"Dos gotas del mismo corazón."},{id:"chorro_dividido",nombre:"Chorro Dividido",categoria:"modificador",slot:"tragado",rareza:"comun",precio:3,stats:{},mults:{},tags:["divide"],procs:[{efecto:"dividir_en_3",base:.2,porSuerte:.03,tope:.5}],spriteOverlay:"tragado_bifurcador",descripcion:"El chorro se parte en dos al impactar. A veces en tres."},{id:"burbujas_traviesas",nombre:"Burbujas Traviesas",categoria:"modificador",slot:"tragado",rareza:"comun",precio:3,stats:{},mults:{dano:.7},tags:["burbuja"],procs:[{efecto:"burbuja_gigante",base:.05,porSuerte:.02,tope:.25}],spriteOverlay:"tragado_burbujas",descripcion:"Lentas, flotonas y con malas intenciones."},{id:"libro_multidisparo",nombre:"Libro de Multidisparo",categoria:"usable",slot:"usable",rareza:"rara",precio:7,stats:{},mults:{},tags:[],procs:[],usable:{efecto:"multidisparo",recargaTicks:1200,duracionTicks:300},spriteOverlay:"usable_libro",descripcion:"Capítulo 3: cómo disparar tres veces (Espacio)."},{id:"trebol_de_alcantarilla",nombre:"Trébol de Alcantarilla",categoria:"pasivo",slot:"nucleo",rareza:"comun",precio:3,stats:{suerte:2},mults:{},tags:[],procs:[],spriteOverlay:"nucleo_trebol",descripcion:"Creció donde nadie miraba. Da suerte igual."},{id:"manos_de_ladron",nombre:"Manos de Ladrón",categoria:"pasivo",slot:"brazos",rareza:"comun",precio:4,stats:{suerte:1},mults:{},tags:["iman_monedas"],procs:[],unlockable:!0,spriteOverlay:"brazos_ladron",descripcion:"Dedos largos: lo brillante viene solo a ti."},{id:"herradura_del_ahogado",nombre:"Herradura del Ahogado",categoria:"pasivo",slot:"cabeza",rareza:"rara",precio:8,stats:{suerte:3,corazones:-1},mults:{},tags:[],procs:[],unlockable:!0,spriteOverlay:"cabeza_herradura",descripcion:"Da mucha suerte. A su dueño anterior no."},{id:"punta_de_lanza",nombre:"Punta de Lanza",categoria:"pasivo",slot:"brazos",rareza:"comun",precio:4,stats:{dano:2,velProyectil:2},mults:{},tags:[],procs:[],spriteOverlay:"brazos_lanza",descripcion:"Afilada por generaciones de sapos descuidados."},{id:"pulmones_de_buzo",nombre:"Pulmones de Buzo",categoria:"pasivo",slot:"nucleo",rareza:"comun",precio:3,stats:{alcance:-1},mults:{cadencia:1.25},tags:[],procs:[],spriteOverlay:"nucleo_pulmones",descripcion:"Respira hondo, escupe seguido, apunta cerca."},{id:"caparazon_de_tortuga",nombre:"Caparazón de Tortuga",categoria:"pasivo",slot:"cabeza",rareza:"rara",precio:8,stats:{armaduraPorSala:2,velMovimiento:-.5},mults:{},tags:[],procs:[],spriteOverlay:"cabeza_caparazon",descripcion:"Su dueña llegó a los 200 años. Por algo será."},{id:"anillo_de_marea",nombre:"Anillo de Marea",categoria:"pasivo",slot:"nucleo",rareza:"rara",precio:8,stats:{suerte:1},mults:{},tags:[],procs:[{efecto:"critico",base:.05,porSuerte:.02,tope:.2}],spriteOverlay:"nucleo_anillo",descripcion:"Sube y baja con la marea. A veces, arrasa."},{id:"chorro_a_presion",nombre:"Chorro a Presión",categoria:"modificador",slot:"tragado",rareza:"rara",precio:9,stats:{},mults:{velProyectil:1.5,dano:1.2,cadencia:.85},tags:["empuje"],procs:[],spriteOverlay:"tragado_presion",descripcion:"Tragaste una manguera de bombero. Se nota."},{id:"medalla_oxidada",nombre:"Medalla Oxidada",categoria:"pasivo",slot:"nucleo",rareza:"comun",precio:3,stats:{corazones:1},mults:{},tags:[],procs:[],spriteOverlay:"nucleo_medalla",descripcion:"Alguien fue valiente antes que tú. Te presta un poco."},{id:"aletas_de_carpa",nombre:"Aletas de Carpa",categoria:"pasivo",slot:"piernas",rareza:"comun",precio:4,stats:{velMovimiento:.8,velProyectil:1},mults:{},tags:[],procs:[],spriteOverlay:"piernas_aletas",descripcion:"Nadan solas. Tú solo apunta."},{id:"silbato_del_pantano",nombre:"Silbato del Pantano",categoria:"usable",slot:"usable",rareza:"rara",precio:7,stats:{},mults:{},tags:[],procs:[],usable:{efecto:"prisa",recargaTicks:900,duracionTicks:300},spriteOverlay:"usable_silbato",descripcion:"Suena a huida digna. Corres el doble de digno."},{id:"corona_del_rey_sapo",nombre:"Corona del Rey Sapo",categoria:"pasivo",slot:"cabeza",rareza:"legendaria",precio:15,stats:{dano:3,velMovimiento:-.6},mults:{cadencia:1.15},tags:[],procs:[],unlockable:!0,spriteOverlay:"cabeza_corona",descripcion:"Pesa como un reino. Escupe como un rey."},{id:"perla_negra",nombre:"Perla Negra",categoria:"pasivo",slot:"nucleo",rareza:"rara",precio:9,stats:{suerte:2},mults:{},tags:[],procs:[{efecto:"critico",base:.08,porSuerte:.02,tope:.3}],unlockable:!0,spriteOverlay:"nucleo_perla",descripcion:"Creció alrededor de algo que nadie quiere nombrar."},{id:"escudo_de_caracol",nombre:"Escudo de Caracol",categoria:"usable",slot:"usable",rareza:"rara",precio:8,stats:{},mults:{},tags:[],procs:[],usable:{efecto:"escudo",recargaTicks:1200,duracionTicks:150},unlockable:!0,spriteOverlay:"usable_caracol",descripcion:"Préstamo de un caracol generoso. Devuélvelo entero."},{id:"guantes_de_rana",nombre:"Guantes de Rana",categoria:"pasivo",slot:"brazos",rareza:"comun",precio:4,stats:{},mults:{cadencia:1.2},tags:[],procs:[],unlockable:!0,spriteOverlay:"brazos_rana",descripcion:"Pegajosos por fuera, rapidísimos por dentro."}],p_={items:h_},m_=["dano","cadencia","alcance","velProyectil","velMovimiento","suerte","corazones","proyectiles","armaduraPorSala"];function g_(n,e){const t=n,i=r=>{throw new Error(`items.json[${e}] (${String(t?.id??"?")}): ${r}`)};(typeof t.id!="string"||!t.id)&&i("id inválido"),(typeof t.nombre!="string"||!t.nombre)&&i("nombre inválido"),["pasivo","modificador","usable","gema"].includes(t.categoria)||i(`categoria inválida: ${String(t.categoria)}`),["comun","rara","legendaria"].includes(t.rareza)||i(`rareza inválida: ${String(t.rareza)}`),(typeof t.precio!="number"||t.precio<=0)&&i("precio inválido");for(const r of["stats","mults"]){const s=t[r];(typeof s!="object"||s===null)&&i(`${r} debe ser objeto`);for(const[a,o]of Object.entries(s))m_.includes(a)||i(`${r}.${a} no es un stat conocido`),(typeof o!="number"||!Number.isFinite(o))&&i(`${r}.${a} no numérico`),r==="mults"&&o<=0&&i(`mults.${a} debe ser > 0`)}(!Array.isArray(t.tags)||t.tags.some(r=>typeof r!="string"))&&i("tags debe ser string[]"),Array.isArray(t.procs)||i("procs debe ser array");for(const r of t.procs){typeof r.efecto!="string"&&i("proc sin efecto");for(const s of["base","porSuerte","tope"]){const a=r[s];(typeof a!="number"||a<0||a>1)&&i(`proc.${s} fuera de [0,1]`)}r.base>r.tope&&i("proc.base > proc.tope")}if(t.categoria==="usable"){const r=t.usable??{};typeof r.efecto!="string"&&i("usable sin efecto"),(typeof r.recargaTicks!="number"||r.recargaTicks<=0)&&i("usable.recargaTicks inválido"),(typeof r.duracionTicks!="number"||r.duracionTicks<0)&&i("usable.duracionTicks inválido")}return t}function __(){const n=p_.items;if(!Array.isArray(n)||n.length===0)throw new Error("items.json: lista de items vacía");const e=new Map;return n.forEach((t,i)=>{const r=g_(t,i);if(e.has(r.id))throw new Error(`items.json: id duplicado ${r.id}`);e.set(r.id,r)}),e}const Li=__(),x_=[...Li.values()].filter(n=>!n.unlockable).map(n=>n.id);function sn(n){const e=Li.get(n);if(!e)throw new Error(`Item desconocido: ${n}`);return e}function fr(n,e){return n.some(t=>sn(t).tags.includes(e))}function v_(n){const e=[];for(const t of n)e.push(...sn(t).procs);return e}const M_=[{id:"vacia",obstacles:[],spawns:[[4,2.5],[11,2.5],[4,6.5],[11,6.5],[7.5,2],[7.5,7]]},{id:"pilares_esquinas",obstacles:[{x:3,y:2,w:1,h:1},{x:11,y:2,w:1,h:1},{x:3,y:6,w:1,h:1},{x:11,y:6,w:1,h:1}],spawns:[[7.5,2],[7.5,7],[2,4.5],[13,4.5],[5.5,4.5],[9.5,4.5]]},{id:"bloque_central",obstacles:[{x:6,y:3.5,w:3,h:2}],spawns:[[3,2.5],[12,2.5],[3,6.5],[12,6.5]]},{id:"columnas_dobles",obstacles:[{x:4,y:3,w:1,h:3},{x:10,y:3,w:1,h:3}],spawns:[[2.5,2],[12.5,2],[2.5,7],[12.5,7],[7.5,4.5]]},{id:"esquinas_diagonales",obstacles:[{x:2.5,y:1.5,w:2,h:1.5},{x:10.5,y:6,w:2,h:1.5}],spawns:[[11.5,2],[3.5,7],[7.5,4.5],[13,4.5]]},{id:"pasillo_partido",obstacles:[{x:2.5,y:4,w:3,h:1},{x:9.5,y:4,w:3,h:1}],spawns:[[3.5,2],[11.5,2],[3.5,7],[11.5,7]]},{id:"celdas_sueltas",obstacles:[{x:4,y:2.5,w:1,h:1},{x:10,y:2.5,w:1,h:1},{x:4,y:5.5,w:1,h:1},{x:10,y:5.5,w:1,h:1}],spawns:[[7.5,2],[7.5,7],[2,4.5],[13,4.5]]},{id:"islas_gemelas",obstacles:[{x:2.5,y:2,w:2,h:2},{x:10.5,y:5,w:2,h:2}],spawns:[[12,2],[3,7],[7.5,4.5],[7.5,7]]},{id:"espina_central",obstacles:[{x:7,y:2.8,w:1,h:3.4}],spawns:[[3.5,2.5],[3.5,6.5],[11.5,2.5],[11.5,6.5]]},{id:"dientes",obstacles:[{x:3,y:3,w:1,h:1},{x:5.5,y:5,w:1,h:1},{x:9,y:2.8,w:1,h:1},{x:11.5,y:5,w:1,h:1}],spawns:[[2,6.5],[13,2],[7.5,7],[10.5,6.5]]},{id:"murallas_laterales",obstacles:[{x:3,y:2,w:1,h:2},{x:3,y:5.5,w:1,h:2},{x:11,y:2,w:1,h:2},{x:11,y:5.5,w:1,h:2}],spawns:[[7.5,2],[7.5,7],[1.8,4.5],[13.2,4.5],[7.5,4.5]]},{id:"anillo_roto",obstacles:[{x:5,y:2.8,w:2,h:1},{x:8.5,y:2.8,w:2,h:1},{x:5,y:5.2,w:2,h:1},{x:8.5,y:5.2,w:2,h:1}],spawns:[[7.5,4.5],[2.5,2],[12.5,2],[2.5,7],[12.5,7]]},{id:"cuello_botella",obstacles:[{x:4.5,y:1,w:1,h:2.2},{x:4.5,y:5.8,w:1,h:2.2},{x:9,y:3.2,w:1,h:2.6}],spawns:[[3,4.5],[12,2.5],[12,6.5],[11,4.5]]},{id:"escombros",obstacles:[{x:2.5,y:5.8,w:1.5,h:1},{x:5.5,y:2.8,w:1,h:1.5},{x:9.5,y:6,w:1.5,h:1},{x:11.5,y:2.2,w:1,h:1}],spawns:[[7.5,4.5],[3.5,2.5],[11.5,4.2],[4.5,6.8]]}],y_={templates:M_};function S_(n){let e=2166136261;for(let t=0;t<n.length;t++)e^=n.charCodeAt(t),e=Math.imul(e,16777619);return e>>>0}function Di(n){let e=n>>>0;return function(){e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function b_(n){const e=t=>Di((n^S_(t))>>>0);return{mapgen:e("mapgen"),ai:e("ai"),drops:e("drops"),procs:e("procs")}}function _r(n,e,t){return e+n()*(t-e)}function E_(){const n=y_.templates;if(!Array.isArray(n)||n.length<12)throw new Error("el_pozo.json: se esperan al menos 12 plantillas (PLAN F1.2)");for(const e of n)if(!e.id||!Array.isArray(e.obstacles)||!Array.isArray(e.spawns))throw new Error(`plantilla malformada: ${e.id??"?"}`);return n}const Uo=E_();function Xs(n){const e=Uo.find(t=>t.id===n);if(!e)throw new Error(`plantilla desconocida: ${n}`);return e}const vi=11,Lr=[{dx:0,dy:-1,door:"n",opp:"s"},{dx:1,dy:0,door:"e",opp:"w"},{dx:0,dy:1,door:"s",opp:"n"},{dx:-1,dy:0,door:"w",opp:"e"}];function tr(n,e){return e*vi+n}function T_(n){return 4+n}function No(n,e){const t=new Map,i=[],r=(d,h,_)=>{const b={id:i.length,gx:d,gy:h,kind:_,doors:{n:-1,e:-1,s:-1,w:-1},templateId:"vacia",seed:Math.floor(n()*4294967295)>>>0,cleared:_==="start"||_==="treasure"||_==="shop",visited:_==="start",looted:!1,locked:_==="treasure",sold:[],drops:[],props:null};return i.push(b),t.set(tr(d,h),b),b},s=r(Math.floor(vi/2),Math.floor(vi/2),"start"),a=T_(e);let o=0,l=0;for(;o<a&&l++<500;){const d=i[Math.floor(n()*i.length)],h=Lr[Math.floor(n()*4)],_=d.gx+h.dx,b=d.gy+h.dy;if(_<0||b<0||_>=vi||b>=vi||t.has(tr(_,b)))continue;let m=0;for(const p of Lr)t.has(tr(_+p.dx,b+p.dy))&&m++;m>1||(r(_,b,"normal"),o++)}const c=["boss","treasure","shop"];for(const d of c){const h=[];for(const b of i)if(!(b.kind!=="normal"&&b.kind!=="start"))for(const m of Lr){const p=b.gx+m.dx,S=b.gy+m.dy;if(p<0||S<0||p>=vi||S>=vi||t.has(tr(p,S)))continue;let I=0;for(const x of Lr)t.has(tr(p+x.dx,S+x.dy))&&I++;I===1&&h.push({gx:p,gy:S,host:b})}if(h.length===0)throw new Error(`mapgen: sin hueco para la sala ${d} (nivel ${e})`);let _;if(d==="boss"){let b=-1,m=h[0];for(const p of h){const S=Math.abs(p.gx-s.gx)+Math.abs(p.gy-s.gy);S>b&&(b=S,m=p)}_=m}else _=h[Math.floor(n()*h.length)];r(_.gx,_.gy,d)}for(const d of i)for(const h of Lr){const _=t.get(tr(d.gx+h.dx,d.gy+h.dy));_&&(d.doors[h.door]=_.id)}for(const d of i)d.kind==="normal"&&(d.templateId=Uo[Math.floor(n()*Uo.length)].id);const u=i.filter(d=>d.kind==="normal"),f=u[Math.floor(n()*u.length)].id;return{level:e,rooms:i,current:s.id,trapdoorOpen:!1,keyRoomId:f}}function w_(n,e=x_){const t=Di(n.seed^24301),i=[...e],r=[];for(let s=0;s<3&&i.length;s++)r.push(i.splice(Math.floor(t()*i.length),1)[0]);return r}function A_(n,e){return e==="boss"?(n+Rc)*j0:e==="normal"?n+Rc:0}function R_(n,e,t){const i=n();if(t==="sapo_doble"||t==="gorko")return null;let r=0;for(const s of Object.keys(Do)){const a=Do[s];if(r+=Math.min(a.chanceTope,a.chanceBase+a.chancePorNivel*(e-1)),i<r)return s}return null}function C_(n,e){if(n.kind==="boss"&&e===Ei)return[{kind:"gorko",x:st/2,y:nt/2-1.5,variant:null}];const t=A_(e,n.kind);if(t<=0)return[];const i=Di(n.seed),s=Xs(n.templateId).spawns.map(([d,h])=>({x:d,y:h}));for(let d=s.length-1;d>0;d--){const h=Math.floor(i()*(d+1));[s[d],s[h]]=[s[h],s[d]]}const a=Object.entries(e_),o=Math.min(...a.map(([,d])=>d)),l=[];let c=t,u=0,f=0;for(;c>=o&&u<24;){const d=a.filter(([p,S])=>S<=c&&(p!=="sapo_doble"||f<n_));if(d.length===0)break;const[h,_]=d[Math.floor(i()*d.length)];h==="sapo_doble"&&f++;const b=s[u%s.length],m=u>=s.length?.6:0;l.push({kind:h,x:b.x+(i()*2-1)*m,y:b.y+(i()*2-1)*m,variant:R_(i,e,h)}),c-=_,u++}return l}function P_(n){const e={},t={};for(const i of n){const r=sn(i);for(const[s,a]of Object.entries(r.stats))e[s]=(e[s]??0)+a;for(const[s,a]of Object.entries(r.mults))t[s]=(t[s]??1)*a}return{flat:e,mult:t}}function Vd(n,e){return Math.min(e.max,Math.max(e.min,n))}function nr(n,e,t,i){return Vd((n+(t.flat[e]??0))*(t.mult[e]??1),i)}function Wr(n){const e=P_(n);return{maxHalfHearts:Vd(vt.maxHalfHearts+(e.flat.corazones??0)*2,_i.halfHearts),damage:nr(vt.damage,"dano",e,_i.damage),fireRate:nr(vt.fireRate,"cadencia",e,_i.fireRate),range:nr(vt.range,"alcance",e,_i.range),shotSpeed:nr(vt.shotSpeed,"velProyectil",e,_i.shotSpeed),moveSpeed:nr(vt.moveSpeed,"velMovimiento",e,_i.moveSpeed),luck:nr(vt.luck,"suerte",e,_i.luck),projectiles:1+(e.flat.proyectiles??0),armorPerRoom:e.flat.armaduraPorSala??0}}function Wd(n,e){return Math.min(n.tope,n.base+e*n.porSuerte)}function Xd(){return{up:!1,down:!1,left:!1,right:!1,fire:!1,dash:!1,use:!1,use2:!1,interact:!1,aimX:0,aimY:0}}function Fo(n){return[...Li.values()].filter(e=>!e.unlockable||n.config.unlockedItems.includes(e.id)).map(e=>e.id)}const Is="0.1.0",pn=1,mn=1,gn=st-1,_n=nt-1;function Dc(n,e){const t=b_(n),i={usableSlots:e?.usableSlots??1,unlockedItems:e?.unlockedItems??[],resume:e?.resume??null},r={version:Is,seed:n,tick:0,status:"playing",config:i,player:{x:3.5,y:nt/2,kx:0,ky:0,halfHearts:vt.maxHalfHearts,maxHalfHearts:vt.maxHalfHearts,armor:0,keys:0,crystals:0,iframes:0,fireCooldown:0,aimX:1,aimY:0,deathTick:0,items:[],usable:null,usable2:null,dashTicks:0,dashCooldown:0,dashDirX:1,dashDirY:0},stats:Wr([]),floor:No(t.mapgen,1),obstacles:[],enemies:[],shots:[],puddles:[],pickups:[],drops:[],chest:null,props:[],events:[],nextId:2},s=i.resume;if(s&&s.nivel>1){const a=Math.min(s.nivel,Ei);for(let l=2;l<=a;l++)r.floor=No(t.mapgen,l);const o=r.player;o.items=[...s.items],r.stats=Wr(o.items),o.maxHalfHearts=r.stats.maxHalfHearts,o.halfHearts=Math.max(1,Math.min(s.halfHearts,o.maxHalfHearts)),o.crystals=Math.min(Gd,Math.max(0,s.crystals)),o.keys=Math.max(0,s.keys);for(const[l,c]of[["usable",s.usable],["usable2",s.usable2]])c&&Li.has(c)&&(o[l]={itemId:c,cooldown:0,activeTicks:0})}return r.obstacles=[...Xs(r.floor.rooms[r.floor.current].templateId).obstacles],{state:r,step(a){O_(r,a??Xd(),t)},hash(){return tx(r)}}}const I_={sapo_escupidor:Vt.hp,renacuajo:Xt.hp,mosca_gorda:ai.hp,babosa_acorazada:li.hp,sapo_doble:ft.hp,gorko:Fe.hp};function Ci(n){return L_(n.kind)*n.sizeMult}function L_(n){switch(n){case"sapo_escupidor":return Vt.radius;case"renacuajo":return Xt.radius;case"mosca_gorda":return ai.radius;case"babosa_acorazada":return li.radius;case"sapo_doble":return ft.radius;case"gorko":return Fe.radius}}function D_(n){switch(n){case"sapo_escupidor":return Vt.contactDamage;case"renacuajo":return Xt.contactDamage;case"mosca_gorda":return ai.contactDamage;case"babosa_acorazada":return li.contactDamage;case"sapo_doble":return ft.contactDamage;case"gorko":return Fe.contactDamage}}function qd(n,e,t,i,r=1,s=null){const a=st/2-t,o=nt/2-i,l=Math.hypot(a,o)||1,c=s?Do[s]:null,u=e==="gorko"?1:r,f=(1+Ra.hpPorNivel*(u-1))*(c?.hpMult??1),d=Math.round(I_[e]*f);return{id:n,kind:e,x:t,y:i,kx:0,ky:0,hp:d,maxHp:d,fsm:"idle",timer:0,targetX:t,targetY:i,wanderX:t,wanderY:i,facingX:a/l,facingY:o/l,swallowTarget:-1,swallowCooldown:0,attackCycle:0,phase2:!1,speedMult:(1+Ra.velPorNivel*(u-1))*(c?.velMult??1),sizeMult:c?.sizeMult??1,dmgPlus:(u>=Ra.danoExtraDesdeNivel?1:0)+(c?.danoPlus??0),variant:s}}const vs=.8;function sl(n,e,t){const i=n.floor.current,r=n.floor.rooms[e];i!==e&&(n.floor.rooms[i].drops=n.drops.map(a=>({kind:a.kind,x:a.x,y:a.y})),n.floor.rooms[i].props=n.props.map(a=>({kind:a.kind,x:a.x,y:a.y,hp:a.hp,loot:a.loot}))),n.floor.current=e,n.obstacles=[...Xs(r.templateId).obstacles],n.shots.length=0,n.puddles.length=0,n.pickups.length=0,n.drops.length=0;for(const a of r.drops)n.drops.push({id:n.nextId++,kind:a.kind,x:a.x,y:a.y});r.drops=[],r.props===null&&(r.props=U_(r)),n.props=r.props.map(a=>({id:n.nextId++,...a}));const s=n.player;if(t==="n"?(s.x=st/2,s.y=nt-1-vs):t==="s"?(s.x=st/2,s.y=1+vs):t==="e"?(s.x=1+vs,s.y=nt/2):t==="w"?(s.x=st-1-vs,s.y=nt/2):(s.x=st/2,s.y=nt/2+1.5),s.kx=s.ky=0,n.enemies.length=0,r.visited=!0,!r.cleared)for(const a of C_(r,n.floor.level))n.enemies.push(qd(n.nextId++,a.kind,a.x,a.y,n.floor.level,a.variant));if(r.kind==="treasure"&&!r.looted){const a=Di(r.seed),o=Fo(n),l=o[Math.floor(a()*o.length)];n.pickups.push({id:n.nextId++,itemId:l,x:st/2,y:nt/2})}r.kind==="shop"&&(w_(r,Fo(n)).filter(o=>!r.sold.includes(o)).forEach((o,l)=>{const[c,u]=Ic[l%Ic.length];n.pickups.push({id:n.nextId++,itemId:o,x:c,y:u,price:sn(o).precio})}),n.obstacles.push({...l_,invisible:!0})),t&&Ze(n,{type:"room_changed",from:i,to:e,dir:t,tick:n.tick})}function U_(n){if(n.kind!=="normal")return[];const e=Di(n.seed^805502);if(e()>ci.chancePerRoom)return[];const t=Xs(n.templateId),i=1+Math.floor(e()*ci.maxPerRoom),r=[];for(let s=0;s<i;s++)for(let a=0;a<10;a++){const o=2+e()*(st-4),l=2+e()*(nt-4),c=Math.abs(o-st/2)<Tn+.8||Math.abs(l-nt/2)<Tn+.8,u=t.obstacles.some(d=>o>d.x-.5&&o<d.x+d.w+.5&&l>d.y-.5&&l<d.y+d.h+.5),f=r.some(d=>Mt(d.x,d.y,o,l)<1.2);if(!(c||u||f)){r.push({kind:"crate",x:o,y:l,hp:ci.hp,loot:e()<ci.lootHeart?"heart":"nada"});break}}return r}function N_(n,e){if(n.floor.level>=Ei){n.status="victory",Ze(n,{type:"victory",tick:n.tick});return}n.floor=No(e.mapgen,n.floor.level+1),sl(n,n.floor.current),Ze(n,{type:"level_started",level:n.floor.level,tick:n.tick})}function al(n,e,t,i){for(const r of i){const s=Pt(n,r.x,r.x+r.w),a=Pt(e,r.y,r.y+r.h),o=n-s,l=e-a,c=o*o+l*l;if(!(c>=t*t))if(c>1e-9){const u=Math.sqrt(c);n=s+o/u*t,e=a+l/u*t}else{const u=n-r.x,f=r.x+r.w-n,d=e-r.y,h=r.y+r.h-e,_=Math.min(u,f,d,h);_===u?n=r.x-t:_===f?n=r.x+r.w+t:_===d?e=r.y-t:e=r.y+r.h+t}}return{x:n,y:e}}function F_(n,e,t){for(const i of t)if(n>=i.x&&n<=i.x+i.w&&e>=i.y&&e<=i.y+i.h)return!0;return!1}function O_(n,e,t){if(n.events=[],n.tick++,n.status!=="playing"){Nc(n),Fc(n);return}k_(n,e,t),H_(n,t),Nc(n),Fc(n),Z_(n,t),j_(n)}function k_(n,e,t){const i=n.player,r=(M,P)=>{if(M&&(M.cooldown>0&&M.cooldown--,M.activeTicks>0&&M.activeTicks--,P&&M.cooldown===0)){const R=sn(M.itemId);M.activeTicks=R.usable.duracionTicks,M.cooldown=R.usable.recargaTicks,Ze(n,{type:"usable_activated",itemId:M.itemId,tick:n.tick})}};r(i.usable,e.use),r(i.usable2,e.use2),i.dashCooldown>0&&i.dashCooldown--;let s=(e.right?1:0)-(e.left?1:0),a=(e.down?1:0)-(e.up?1:0);if(s!==0&&a!==0){const M=1/Math.SQRT2;s*=M,a*=M}if(e.dash&&i.dashTicks===0&&i.dashCooldown===0&&fr(i.items,"dash")){const M=s!==0||a!==0?s:i.aimX,P=s!==0||a!==0?a:i.aimY,R=Math.hypot(M,P)||1;i.dashDirX=M/R,i.dashDirY=P/R,i.dashTicks=Ir.ticks,i.dashCooldown=Ir.cooldownTicks,i.iframes=Math.max(i.iframes,Ir.iframeTicks),Ze(n,{type:"dash_used",tick:n.tick})}const o=i.x,l=i.y;if(i.dashTicks>0)i.dashTicks--,i.x+=(i.dashDirX*Ir.speed+i.kx)*xt,i.y+=(i.dashDirY*Ir.speed+i.ky)*xt;else{const M=n.stats.moveSpeed*(Yd(n,"prisa")?d_:1);i.x+=(s*M+i.kx)*xt,i.y+=(a*M+i.ky)*xt}i.kx*=Bs,i.ky*=Bs,Math.abs(i.kx)<.05&&(i.kx=0),Math.abs(i.ky)<.05&&(i.ky=0);const c=n.floor.rooms[n.floor.current],u=c.cleared,f=M=>!u||M<0?!1:!n.floor.rooms[M].locked||i.keys>0,d=Math.abs(i.x-st/2)<Tn,h=Math.abs(i.y-nt/2)<Tn,_=vt.radius,b=f(c.doors.n)&&d?mn-.5:mn+_,m=f(c.doors.s)&&d?_n+.5:_n-_,p=f(c.doors.w)&&h?pn-.5:pn+_,S=f(c.doors.e)&&h?gn+.5:gn-_;i.x=Pt(i.x,p,S),i.y=Pt(i.y,b,m);const I=al(i.x,i.y,_,n.obstacles);i.x=I.x,i.y=I.y;for(const M of n.props){const P=Mt(i.x,i.y,M.x,M.y),R=_+ci.radius;P<R&&P>1e-4&&(i.x=M.x+(i.x-M.x)/P*R,i.y=M.y+(i.y-M.y)/P*R)}const x=(M,P)=>{const R=n.floor.rooms[M];R.locked&&(R.locked=!1,i.keys--,Ze(n,{type:"door_unlocked",roomId:M,tick:n.tick})),sl(n,M,P)};if(i.y<mn-.25&&c.doors.n>=0){x(c.doors.n,"n");return}if(i.y>_n+.25&&c.doors.s>=0){x(c.doors.s,"s");return}if(i.x<pn-.25&&c.doors.w>=0){x(c.doors.w,"w");return}if(i.x>gn+.25&&c.doors.e>=0){x(c.doors.e,"e");return}if(n.floor.trapdoorOpen&&c.kind==="boss"&&Mt(i.x,i.y,st/2,nt/2)<f_){N_(n,t);return}(i.x!==o||i.y!==l)&&n.tick%J0===0&&fr(i.items,"rastro_charcos")&&n.puddles.push({x:i.x,y:i.y+vt.radius*.6,ttl:Q0});const w=e.aimX-i.x,E=e.aimY-i.y,C=Math.hypot(w,E);C>.001&&(i.aimX=w/C,i.aimY=E/C),i.fireCooldown>0&&i.fireCooldown--,e.fire&&i.fireCooldown===0&&(B_(n,t),i.fireCooldown=Math.round(Ri/n.stats.fireRate),Ze(n,{type:"shot_fired",owner:"player",tick:n.tick}));for(let M=n.pickups.length-1;M>=0;M--){const P=n.pickups[M],R=Mt(i.x,i.y,P.x,P.y);if(!P.price&&R<vt.radius+.35)Uc(n,M);else if(P.price&&e.interact&&R<c_&&i.crystals>=P.price){const U=P.price,H=P.itemId;i.crystals-=U,n.floor.rooms[n.floor.current].sold.push(H),P.price=0,Uc(n,M),Ze(n,{type:"item_bought",itemId:H,price:U,crystalsLeft:i.crystals,tick:n.tick})}}const v=fr(i.items,"iman_monedas")?Cc*2.2:Cc;for(let M=n.drops.length-1;M>=0;M--){const P=n.drops[M];if(P.kind==="heart"&&i.halfHearts>=i.maxHalfHearts)continue;const R=Mt(i.x,i.y,P.x,P.y);if(R<v&&R>1e-6&&(P.x+=(i.x-P.x)/R*Pc*xt,P.y+=(i.y-P.y)/R*Pc*xt),!(R>=a_)){switch(P.kind){case"heart":i.halfHearts=Math.min(i.maxHalfHearts,i.halfHearts+r_),Ze(n,{type:"heart_collected",halfHeartsLeft:i.halfHearts,tick:n.tick});break;case"key":i.keys++,Ze(n,{type:"key_collected",keys:i.keys,tick:n.tick});break;case"crystal":case"crystal_med":case"crystal_big":{const U=s_[P.kind];i.crystals=Math.min(Gd,i.crystals+U),Ze(n,{type:"crystal_collected",value:U,total:i.crystals,tick:n.tick});break}}n.drops.splice(M,1)}}n.chest&&!n.chest.opened&&n.chest.roomId===n.floor.current&&Mt(i.x,i.y,n.chest.x,n.chest.y)<vt.radius+u_&&(n.chest.opened=!0,n.chest.reward==="cristales"&&n.drops.push({id:n.nextId++,kind:"crystal_big",x:n.chest.x,y:n.chest.y+.7}),Ze(n,{type:"chest_opened",reward:n.chest.reward,tick:n.tick})),z_(n)}function B_(n,e){const t=n.player,i=fr(t.items,"burbuja"),r=[];fr(t.items,"divide")&&r.push("divide"),i&&r.push("burbuja");let s=n.stats.projectiles;for(const c of[t.usable,t.usable2])c&&c.activeTicks>0&&sn(c.itemId).usable.efecto==="multidisparo"&&(s+=2);const a=n.stats.shotSpeed*(i?or.speedMult:1),o=$0+(fr(t.items,"empuje")?K0:0),l=Math.atan2(t.aimY,t.aimX);for(let c=0;c<s;c++){const u=l+(c-(s-1)/2)*Z0,f=Math.cos(u),d=Math.sin(u);let h=ur*(i?or.radiusMult:1),_=n.stats.damage;i&&ol(n,e,"burbuja_gigante")&&(h=ur*or.giantRadiusMult,_*=or.giantDamageMult),n.shots.push({id:n.nextId++,owner:"player",x:t.x+f*(vt.radius+h),y:t.y+d*(vt.radius+h),vx:f*a,vy:d*a,damage:_,traveled:0,maxRange:n.stats.range,radius:h,knockback:o,tags:r,fragment:!1})}}function ol(n,e,t){const i=v_(n.player.items).find(a=>a.efecto===t);if(!i)return!1;const r=Wd(i,n.stats.luck),s=e.procs()<r;return s&&Ze(n,{type:"proc_triggered",efecto:t,tick:n.tick}),s}function Uc(n,e){const t=n.player,i=n.pickups[e],r=sn(i.itemId);if(r.categoria==="usable")if(!t.usable)t.usable={itemId:i.itemId,cooldown:0,activeTicks:0},n.pickups.splice(e,1);else if(n.config.usableSlots>=2&&!t.usable2)t.usable2={itemId:i.itemId,cooldown:0,activeTicks:0},n.pickups.splice(e,1);else{const s=t.usable;t.usable={itemId:i.itemId,cooldown:0,activeTicks:0},i.itemId=s.itemId}else{t.items.push(i.itemId),n.pickups.splice(e,1);const s=n.floor.rooms[n.floor.current];s.kind==="treasure"&&(s.looted=!0);const a=n.stats;n.stats=Wr(t.items);const o=n.stats.maxHalfHearts-a.maxHalfHearts;t.maxHalfHearts=n.stats.maxHalfHearts,o>0&&(t.halfHearts+=o),t.halfHearts=Math.min(t.halfHearts,t.maxHalfHearts);const l=n.stats.armorPerRoom-a.armorPerRoom;l>0&&(t.armor=Math.min(Y0,t.armor+l*2))}Ze(n,{type:"item_picked",itemId:r.id,tick:n.tick})}function z_(n){const e=n.player;if(e.iframes>0&&(e.iframes--,e.iframes===0)){let t=!1;for(const i of n.enemies){const r=Mt(e.x,e.y,i.x,i.y),s=vt.radius+Ci(i);if(r<s){const a=r>.001?(e.x-i.x)/r:1,o=r>.001?(e.y-i.y)/r:0;e.x=Pt(i.x+a*(s+.05),pn+vt.radius,gn-vt.radius),e.y=Pt(i.y+o*(s+.05),mn+vt.radius,_n-vt.radius),t=!0}}Ze(n,{type:"iframes_ended",separated:t,tick:n.tick})}}function H_(n,e){const t=[];for(const i of n.enemies){switch(i.x+=i.kx*xt,i.y+=i.ky*xt,i.kx*=Bs,i.ky*=Bs,i.kind){case"sapo_escupidor":G_(n,i,e);break;case"renacuajo":V_(n,i);break;case"mosca_gorda":W_(n,i,e);break;case"babosa_acorazada":X_(n,i);break;case"sapo_doble":q_(n,i,t);break;case"gorko":Y_(n,i,e,t);break}const r=Ci(i);if(i.x=Pt(i.x,pn+r,gn-r),i.y=Pt(i.y,mn+r,_n-r),i.kind!=="mosca_gorda"){const s=al(i.x,i.y,r,n.obstacles);i.x=s.x,i.y=s.y;for(const a of n.props){const o=Mt(i.x,i.y,a.x,a.y),l=r+ci.radius;o<l&&o>1e-4&&(i.x=a.x+(i.x-a.x)/o*l,i.y=a.y+(i.y-a.y)/o*l)}}}K_(n),t.length&&(n.enemies=n.enemies.filter(i=>!t.includes(i.id)))}function G_(n,e,t){const i=n.player,r=Mt(e.x,e.y,i.x,i.y);switch(e.fsm){case"idle":{if(e.timer>0&&e.timer--,r<=Vt.attackRange&&e.timer===0){e.fsm="aim",e.timer=Vt.telegraphTicks,e.targetX=i.x,e.targetY=i.y,Ze(n,{type:"telegraph_started",enemyId:e.id,tick:n.tick});break}n.tick%45===0&&(r<=Vt.aggroRange?(e.wanderX=i.x,e.wanderY=i.y):(e.wanderX=Pt(e.x+_r(t.ai,-2,2),pn+1,gn-1),e.wanderY=Pt(e.y+_r(t.ai,-2,2),mn+1,_n-1)));const s=Mt(e.x,e.y,e.wanderX,e.wanderY);s>.2&&(e.x+=(e.wanderX-e.x)/s*Vt.moveSpeed*e.speedMult*xt,e.y+=(e.wanderY-e.y)/s*Vt.moveSpeed*e.speedMult*xt);break}case"aim":{e.timer--,e.timer<=0&&(e.fsm="shoot");break}case"shoot":{zs(n,e,e.targetX,e.targetY,0,Vt.spitSpeed,Vt.spitDamage),Ze(n,{type:"shot_fired",owner:"enemy",tick:n.tick}),e.fsm="cool",e.timer=Vt.cooldownTicks;break}case"cool":{e.timer--,e.timer<=0&&(e.fsm="idle",e.timer=12);break}default:e.fsm="idle"}}function V_(n,e){const t=n.player;switch(e.fsm){case"idle":{if(e.timer>0&&e.timer--,e.timer===0&&Mt(e.x,e.y,t.x,t.y)<=Xt.aggroRange){e.fsm="windup",e.timer=Xt.windupTicks;const i=t.x-e.x,r=t.y-e.y,s=Math.hypot(i,r)||1;e.facingX=i/s,e.facingY=r/s,Ze(n,{type:"telegraph_started",enemyId:e.id,tick:n.tick})}break}case"windup":{e.timer--,e.timer<=0&&(e.fsm="hop",e.timer=Xt.hopTicks);break}case"hop":{e.x+=e.facingX*Xt.hopSpeed*e.speedMult*xt,e.y+=e.facingY*Xt.hopSpeed*e.speedMult*xt,e.timer--,e.timer<=0&&(e.fsm="idle",e.timer=Xt.pauseTicks);break}default:e.fsm="idle",e.timer=Xt.pauseTicks}}function W_(n,e,t){const i=n.player;n.tick%ai.retargetTicks===0&&(e.wanderX=Pt(i.x+_r(t.ai,-2.2,ai.wobble),pn+.5,gn-.5),e.wanderY=Pt(i.y+_r(t.ai,-2.2,ai.wobble),mn+.5,_n-.5));const r=e.wanderX-e.x,s=e.wanderY-e.y,a=Math.hypot(r,s);a>.15&&(e.x+=r/a*ai.speed*e.speedMult*xt,e.y+=s/a*ai.speed*e.speedMult*xt,e.facingX=r/a,e.facingY=s/a)}function X_(n,e){const t=n.player,i=Math.atan2(t.y-e.y,t.x-e.x),r=Math.atan2(e.facingY,e.facingX);let s=i-r;for(;s>Math.PI;)s-=2*Math.PI;for(;s<-Math.PI;)s+=2*Math.PI;const a=Pt(s,-.02,li.turnRadPerTick),o=r+a;e.facingX=Math.cos(o),e.facingY=Math.sin(o),Mt(e.x,e.y,t.x,t.y)<=li.aggroRange&&(e.x+=e.facingX*li.speed*e.speedMult*xt,e.y+=e.facingY*li.speed*e.speedMult*xt)}function q_(n,e,t){const i=n.player,r=Mt(e.x,e.y,i.x,i.y);switch(e.swallowCooldown>0&&e.swallowCooldown--,e.fsm){case"idle":{e.timer>0&&e.timer--;const s=$_(n,e);if(e.hp<e.maxHp&&e.swallowCooldown===0&&s){const a=Mt(e.x,e.y,s.x,s.y);if(a<=ft.swallowRange){e.fsm="swallow_aim",e.timer=ft.swallowTelegraphTicks,e.swallowTarget=s.id,Ze(n,{type:"telegraph_started",enemyId:e.id,tick:n.tick});break}const o=a||1;e.x+=(s.x-e.x)/o*ft.moveSpeed*e.speedMult*xt,e.y+=(s.y-e.y)/o*ft.moveSpeed*e.speedMult*xt;break}if(r<=ft.attackRange&&e.timer===0){e.fsm="aim",e.timer=ft.telegraphTicks,e.targetX=i.x,e.targetY=i.y,Ze(n,{type:"telegraph_started",enemyId:e.id,tick:n.tick});break}r<=ft.aggroRange&&r>2&&(e.x+=(i.x-e.x)/r*ft.moveSpeed*e.speedMult*xt,e.y+=(i.y-e.y)/r*ft.moveSpeed*e.speedMult*xt);break}case"aim":{e.timer--,e.timer<=0&&(e.fsm="shoot");break}case"shoot":{zs(n,e,e.targetX,e.targetY,-.16,ft.spitSpeed,ft.spitDamage),zs(n,e,e.targetX,e.targetY,ft.spitSpreadRad,ft.spitSpeed,ft.spitDamage),Ze(n,{type:"shot_fired",owner:"enemy",tick:n.tick}),e.fsm="cool",e.timer=ft.cooldownTicks;break}case"swallow_aim":{if(e.timer--,e.timer<=0){const s=n.enemies.find(a=>a.id===e.swallowTarget);if(s&&Mt(e.x,e.y,s.x,s.y)<=ft.swallowRange*1.3){t.push(s.id);const a=Math.min(ft.healPerSwallow,e.maxHp-e.hp);e.hp+=a,Ze(n,{type:"elite_swallowed",enemyId:e.id,victimId:s.id,healed:a,tick:n.tick})}e.swallowTarget=-1,e.swallowCooldown=ft.swallowCooldownTicks,e.fsm="cool",e.timer=24}break}case"cool":{e.timer--,e.timer<=0&&(e.fsm="idle",e.timer=10);break}default:e.fsm="idle"}}function Y_(n,e,t,i){const r=n.player;if(!e.phase2&&e.hp<=e.maxHp/2){e.phase2=!0,e.fsm="cool",e.timer=30,Ze(n,{type:"gorko_phase2",hp:e.hp,tick:n.tick});return}switch(e.fsm){case"idle":{if(e.timer>0){e.timer--;const o=Mt(e.x,e.y,r.x,r.y);o>2.5&&(e.x+=(r.x-e.x)/o*Fe.moveSpeed*xt,e.y+=(r.y-e.y)/o*Fe.moveSpeed*xt);break}const s=e.attackCycle++;if(e.phase2){const o=n.enemies.find(l=>l.kind==="renacuajo");if(s%2===0&&o){i.push(o.id),Ze(n,{type:"elite_swallowed",enemyId:e.id,victimId:o.id,healed:0,tick:n.tick}),e.fsm="volley",e.timer=Fe.volleyAimTicks,e.targetX=r.x,e.targetY=r.y,Ze(n,{type:"telegraph_started",enemyId:e.id,tick:n.tick});break}if(s%2===0){e.fsm="summon",e.timer=Fe.summonTicks,Ze(n,{type:"telegraph_started",enemyId:e.id,tick:n.tick});break}e.fsm="jump_aim",e.timer=Fe.jumpAimTicks,e.targetX=r.x,e.targetY=r.y,Ze(n,{type:"telegraph_started",enemyId:e.id,tick:n.tick});break}const a=s%3;a===0?(e.fsm="jump_aim",e.timer=Fe.jumpAimTicks,e.targetX=r.x,e.targetY=r.y):a===1?(e.fsm="aim",e.timer=Fe.tongueAimTicks,e.targetX=r.x,e.targetY=r.y):(e.fsm="summon",e.timer=Fe.summonTicks),Ze(n,{type:"telegraph_started",enemyId:e.id,tick:n.tick});break}case"jump_aim":{e.timer--,e.timer<=0&&(e.fsm="airborne",e.timer=Fe.airborneTicks);break}case"airborne":{if(e.timer--,e.timer<=0){e.x=Pt(e.targetX,pn+Fe.radius,gn-Fe.radius),e.y=Pt(e.targetY,mn+Fe.radius,_n-Fe.radius);const s=al(e.x,e.y,Fe.radius,n.obstacles);e.x=s.x,e.y=s.y,n.player.iframes===0&&Mt(r.x,r.y,e.x,e.y)<Fe.slamRadius+vt.radius&&Oo(n,Fe.slamDamage,e.x,e.y,"aplastamiento:gorko"),e.fsm="cool",e.timer=Fe.idleTicks}break}case"aim":{e.timer--,e.timer<=0&&(e.fsm="shoot");break}case"shoot":{const s=Math.atan2(e.targetY-e.y,e.targetX-e.x);n.shots.push({id:n.nextId++,owner:"enemy",x:e.x+Math.cos(s)*(Fe.radius+Fe.tongueRadius),y:e.y+Math.sin(s)*(Fe.radius+Fe.tongueRadius),vx:Math.cos(s)*Fe.tongueSpeed,vy:Math.sin(s)*Fe.tongueSpeed,damage:Fe.tongueDamage,traveled:0,maxRange:Fe.tongueRange,radius:Fe.tongueRadius,knockback:0,tags:["lengua"],fragment:!1}),Ze(n,{type:"shot_fired",owner:"enemy",tick:n.tick}),e.fsm="cool",e.timer=Fe.idleTicks;break}case"summon":{if(e.timer--,e.timer<=0){const s=n.enemies.filter(o=>o.kind==="renacuajo").length,a=Math.min(Fe.summonCount,Fe.maxTadpoles-s);for(let o=0;o<a;o++){const l=Pt(e.x+_r(t.ai,-2,2),pn+1,gn-1),c=Pt(e.y+_r(t.ai,-2,2),mn+1,_n-1);n.enemies.push(qd(n.nextId++,"renacuajo",l,c))}e.fsm="cool",e.timer=Fe.idleTicks}break}case"volley":{if(e.timer--,e.timer<=0){const s=Math.atan2(e.targetY-e.y,e.targetX-e.x);for(let a=0;a<Fe.volleyCount;a++){const o=(a-(Fe.volleyCount-1)/2)*(Fe.volleySpreadRad/(Fe.volleyCount-1));zs(n,e,e.x+Math.cos(s+o),e.y+Math.sin(s+o),0,Fe.volleySpitSpeed,Fe.volleyDamage)}Ze(n,{type:"shot_fired",owner:"enemy",tick:n.tick}),e.fsm="belly",e.timer=Fe.bellyTicks}break}case"belly":{e.timer--,e.timer<=0&&(e.fsm="idle",e.timer=Fe.idleTicks);break}case"cool":{e.timer--,e.timer<=0&&(e.fsm="idle",e.timer=Fe.idleTicks);break}default:e.fsm="idle",e.timer=Fe.idleTicks}}function $_(n,e){let t=null,i=ft.swallowSeekRange;for(const r of n.enemies){if(r.id===e.id||r.kind==="sapo_doble")continue;const s=Mt(e.x,e.y,r.x,r.y);s<i&&(i=s,t=r)}return t}function zs(n,e,t,i,r,s,a){const o=Math.atan2(i-e.y,t-e.x)+r,l=Math.cos(o),c=Math.sin(o),u=Ci(e);n.shots.push({id:n.nextId++,owner:"enemy",x:e.x+l*(u+ur),y:e.y+c*(u+ur),vx:l*s,vy:c*s,damage:a,traveled:0,maxRange:12,radius:ur,knockback:0,tags:[],fragment:!1})}function K_(n){for(let e=0;e<n.enemies.length;e++)for(let t=e+1;t<n.enemies.length;t++){const i=n.enemies[e],r=n.enemies[t];if(i.fsm==="airborne"||r.fsm==="airborne")continue;const s=(Ci(i)+Ci(r))*.95,a=r.x-i.x,o=r.y-i.y,l=Math.hypot(a,o);if(l>=s)continue;const c=l>1e-6?a/l:Math.cos(i.id*2.399),u=l>1e-6?o/l:Math.sin(i.id*2.399),f=t_*xt*.5;i.x-=c*f,i.y-=u*f,r.x+=c*f,r.y+=u*f}}function Nc(n){for(let e=n.shots.length-1;e>=0;e--){const t=n.shots[e];if(t.owner==="player"&&t.tags.includes("burbuja")&&n.enemies.length){let s=null,a=or.homingRange;for(const o of n.enemies){const l=Mt(t.x,t.y,o.x,o.y);l<a&&(a=l,s=o)}if(s){const o=Math.atan2(t.vy,t.vx);let c=Math.atan2(s.y-t.y,s.x-t.x)-o;for(;c>Math.PI;)c-=2*Math.PI;for(;c<-Math.PI;)c+=2*Math.PI;const u=Pt(c,-.05,or.turnRadPerTick),f=Math.hypot(t.vx,t.vy);t.vx=Math.cos(o+u)*f,t.vy=Math.sin(o+u)*f}}t.x+=t.vx*xt,t.y+=t.vy*xt,t.traveled+=Math.hypot(t.vx,t.vy)*xt;const i=t.x<pn||t.x>gn||t.y<mn||t.y>_n||F_(t.x,t.y,n.obstacles),r=t.traveled>=t.maxRange;(i||r)&&(t.owner==="player"&&n.puddles.push({x:Pt(t.x,pn+.2,gn-.2),y:Pt(t.y,mn+.2,_n-.2),ttl:Ps}),n.shots.splice(e,1))}}function Fc(n){for(let e=n.puddles.length-1;e>=0;e--)--n.puddles[e].ttl<=0&&n.puddles.splice(e,1)}function Z_(n,e){const t=n.player;for(let i=n.shots.length-1;i>=0;i--){const r=n.shots[i];if(r.owner==="player")for(let s=n.props.length-1;s>=0;s--){const a=n.props[s];if(!(Mt(r.x,r.y,a.x,a.y)>=r.radius+ci.radius)){a.hp-=r.damage,n.puddles.push({x:r.x,y:r.y,ttl:Ps/2}),n.shots.splice(i,1),a.hp<=0&&(a.loot==="heart"&&n.drops.push({id:n.nextId++,kind:"heart",x:a.x,y:a.y}),Ze(n,{type:"prop_broken",kind:a.kind,loot:a.loot,tick:n.tick}),n.props.splice(s,1));break}}}for(let i=n.shots.length-1;i>=0;i--){const r=n.shots[i];if(r.owner==="player"){for(const s of n.enemies)if(!(s.kind==="gorko"&&s.fsm==="airborne")&&Mt(r.x,r.y,s.x,s.y)<r.radius+Ci(s)){if(s.kind==="babosa_acorazada"){const l=Math.hypot(r.vx,r.vy)||1;if(r.vx/l*s.facingX+r.vy/l*s.facingY<li.backDot){n.puddles.push({x:r.x,y:r.y,ttl:Ps/3}),n.shots.splice(i,1),Ze(n,{type:"shot_blocked",enemyId:s.id,tick:n.tick});break}}let a=r.damage;ol(n,e,"critico")&&(a*=2),s.kind==="gorko"&&s.fsm==="belly"&&(a=Math.round(a*Fe.bellyDamageMult)),s.hp-=a;const o=Math.hypot(r.vx,r.vy)||1;s.kx+=r.vx/o*r.knockback,s.ky+=r.vy/o*r.knockback,n.puddles.push({x:r.x,y:r.y,ttl:Ps/2}),r.tags.includes("divide")&&!r.fragment&&Q_(n,r,e),n.shots.splice(i,1),Ze(n,{type:"enemy_hit",enemyId:s.id,damage:a,hpLeft:Math.max(0,s.hp),tick:n.tick});break}}}for(let i=n.enemies.length-1;i>=0;i--){const r=n.enemies[i];r.hp<=0&&(n.enemies.splice(i,1),J_(n,r,e),Ze(n,{type:"enemy_killed",enemyId:r.id,kind:r.kind,tick:n.tick}))}if(t.iframes===0){for(const i of n.enemies)if(!(i.kind==="gorko"&&i.fsm==="airborne")&&Mt(t.x,t.y,i.x,i.y)<vt.radius+Ci(i)){Oo(n,D_(i.kind)+i.dmgPlus,i.x,i.y,"contacto:"+i.kind);break}}if(t.iframes===0)for(let i=n.shots.length-1;i>=0;i--){const r=n.shots[i];if(r.owner==="enemy"&&Mt(r.x,r.y,t.x,t.y)<r.radius+vt.radius){n.shots.splice(i,1),Oo(n,r.damage,r.x,r.y,"escupitajo");break}}}function J_(n,e,t){const i=()=>(t.drops()-.5)*.5;if(e.kind!=="gorko"){if(e.kind==="sapo_doble"){const r=t.drops(),s=r<Ca.big?"crystal_big":r<Ca.big+Ca.med?"crystal_med":"crystal";n.drops.push({id:n.nextId++,kind:s,x:e.x+i(),y:e.y+i()});return}t.drops()<i_.heart&&n.drops.push({id:n.nextId++,kind:"heart",x:e.x+i(),y:e.y+i()})}}function Q_(n,e,t){const r=ol(n,t,"dividir_en_3")?[-.9,0,Pr.angleRad]:[-.9,Pr.angleRad],s=Math.atan2(e.vy,e.vx),a=Math.hypot(e.vx,e.vy)||1;for(const o of r){const l=s+o;n.shots.push({id:n.nextId++,owner:"player",x:e.x,y:e.y,vx:Math.cos(l)*a,vy:Math.sin(l)*a,damage:Math.max(1,Math.round(e.damage*Pr.damageMult)),traveled:0,maxRange:Pr.range,radius:e.radius*Pr.radiusMult,knockback:e.knockback*.5,tags:[],fragment:!0})}Ze(n,{type:"shot_split",count:r.length,tick:n.tick})}function Yd(n,e){for(const t of[n.player.usable,n.player.usable2])if(t&&t.activeTicks>0&&sn(t.itemId).usable.efecto===e)return!0;return!1}function Oo(n,e,t,i,r){const s=n.player;if(Yd(n,"escudo"))return;const a=Math.min(s.armor,e);a>0&&(s.armor-=a,Ze(n,{type:"armor_absorbed",amount:a,armorLeft:s.armor,tick:n.tick}));const o=e-a;s.halfHearts=Math.max(0,s.halfHearts-o),s.iframes=X0;const l=Mt(s.x,s.y,t,i),c=l>.001?(s.x-t)/l:1,u=l>.001?(s.y-i)/l:0;s.kx+=c*Ac,s.ky+=u*Ac,o>0&&Ze(n,{type:"damage_taken",amount:o,halfHeartsLeft:s.halfHearts,source:r,tick:n.tick})}function j_(n){if(n.player.halfHearts<=0&&n.status==="playing"){n.status="dead",n.player.deathTick=n.tick,Ze(n,{type:"player_died",tick:n.tick});return}const e=n.floor.rooms[n.floor.current];if(n.enemies.length===0&&!e.cleared&&n.status==="playing"&&(e.cleared=!0,Ze(n,{type:"room_cleared",tick:n.tick}),e.id===n.floor.keyRoomId&&n.drops.push({id:n.nextId++,kind:"key",x:st/2,y:nt/2}),e.kind==="boss"&&!n.floor.trapdoorOpen&&(n.floor.trapdoorOpen=!0,Ze(n,{type:"trapdoor_opened",tick:n.tick}),n.drops.push({id:n.nextId++,kind:"crystal_med",x:st/2-1,y:nt/2+1.2}),n.drops.push({id:n.nextId++,kind:"heart",x:st/2+1,y:nt/2+1.2}),n.drops.push({id:n.nextId++,kind:"heart",x:st/2,y:nt/2+1.8}),n.floor.level===Ei))){n.drops.push({id:n.nextId++,kind:"crystal_big",x:st/2,y:nt/2-1.4});const t=Fo(n),i=[...Li.values()].filter(a=>t.includes(a.id)&&(a.rareza==="legendaria"||a.slot==="nucleo")),r=Di(e.seed^45141),s=i[Math.floor(r()*i.length)];n.pickups.push({id:n.nextId++,itemId:s.id,x:st/2-1.6,y:nt/2-1.4}),n.chest={roomId:e.id,x:st/2+1.6,y:nt/2-1.4,opened:!1,reward:ex(n,e.seed)}}}function ex(n,e){const t=Di(e^49395),i=[];for(const a of Li.values())a.unlockable&&!n.config.unlockedItems.includes(a.id)&&i.push([a.id,Lc[a.rareza]]);if(n.config.usableSlots<2&&i.push(["slot_usable_2",Lc.legendaria]),i.length===0)return"cristales";const r=i.reduce((a,[,o])=>a+o,0);let s=t()*r;for(const[a,o]of i)if(s-=o,s<=0)return a;return i[i.length-1][0]}function Ze(n,e){n.events.push(e)}function Pt(n,e,t){return n<e?e:n>t?t:n}function Mt(n,e,t,i){return Math.hypot(t-n,i-e)}function tx(n){const e=s=>Math.round(s*1e6)/1e6,t={t:n.tick,st:n.status,p:[e(n.player.x),e(n.player.y),n.player.halfHearts,n.player.iframes],it:n.player.items.join(","),ar:n.player.armor,us:n.player.usable?[n.player.usable.itemId,n.player.usable.cooldown,n.player.usable.activeTicks]:null,us2:n.player.usable2?[n.player.usable2.itemId,n.player.usable2.cooldown,n.player.usable2.activeTicks]:null,cf:[n.config.usableSlots,n.config.unlockedItems.join(","),n.config.resume?[n.config.resume.nivel,n.config.resume.items.join(",")]:null],da:[n.player.dashTicks,n.player.dashCooldown],pk:n.pickups.map(s=>[s.id,s.itemId]),fl:[n.floor.level,n.floor.current,n.floor.trapdoorOpen?1:0,n.floor.rooms.map(s=>(s.cleared?1:0)+(s.visited?2:0)+(s.locked?4:0)).join("")],ec:[n.player.keys,n.player.crystals,n.drops.map(s=>`${s.kind}${e(s.x)}`).join(",")],ch:n.chest?[n.chest.roomId,n.chest.opened?1:0,n.chest.reward]:null,pr:n.props.map(s=>[s.kind,e(s.x),s.hp]),e:n.enemies.map(s=>[s.id,e(s.x),e(s.y),s.hp,s.fsm,s.timer]),sh:n.shots.map(s=>[s.id,s.owner,e(s.x),e(s.y),e(s.traveled)]),pu:n.puddles.length},i=JSON.stringify(t);let r=2166136261;for(let s=0;s<i.length;s++)r^=i.charCodeAt(s),r=Math.imul(r,16777619);return(r>>>0).toString(16).padStart(8,"0")}function nx(n,e){const t={version:e,seed:()=>n.sim.state.seed,state:()=>structuredClone(n.sim.state),hash:()=>n.sim.hash(),press:(i,r)=>n.press(i,r/1e3*Ri),aimAt:(i,r)=>n.aimAt(i,r),clearAim:()=>n.clearAim(),tick:i=>n.tick(i),pause:i=>{n.paused=i},isPaused:()=>n.paused,reset:i=>n.reset(i),telemetry:()=>structuredClone(n.telemetry),clearTelemetry:()=>{n.telemetry.length=0},goto:i=>sl(n.sim.state,i),heal:()=>{const i=n.sim.state.player;i.halfHearts=i.maxHalfHearts},grant:i=>{const r=n.sim.state;r.player.items.push(i),r.stats=Wr(r.player.items),r.player.maxHalfHearts=r.stats.maxHalfHearts},clear:()=>{n.sim.state.enemies.length=0}};return window.__game=t,t}const Pa=1e3/Ri,ix=5;function rx(n,e){let t=e,i=Dc(n,t),r=0,s=0;const a={up:0,down:0,left:0,right:0,fire:0,dash:0,use:0,use2:0,interact:0};let o=null;const l={sim:i,live:Xd(),paused:!1,telemetry:[],frame(f){if(l.paused)return[];if(s>0)return s--,[];r+=Math.min(f,Pa*ix);const d=[];for(;r>=Pa;)r-=Pa,d.push(...u());return d},tick(f){const d=[];for(let h=0;h<f;h++)d.push(...u());return d},press(f,d){a[f]=Math.max(a[f],Math.max(0,Math.round(d)))},aimAt(f,d){o={x:f,y:d}},clearAim(){o=null},freeze(f){s=Math.max(s,f)},reset(f,d){d&&(t=d),i=Dc(f??i.state.seed,t),l.sim=i,r=0,s=0,l.telemetry.length=0,Object.keys(a).forEach(h=>a[h]=0),o=null}};function c(){const f={...l.live};return Object.keys(a).forEach(d=>{a[d]>0&&(f[d]=!0,a[d]--)}),o&&(f.aimX=o.x,f.aimY=o.y),f}function u(){i.step(c());const f=i.state.events;return f.length&&l.telemetry.push(...f),f}return l}const ko=1,Oc="kai_save";function kc(){return{version:ko,cristales:0,desbloqueos:[],slimepedia:[],expedicion:null}}function sx(n){const e=n;return!e||typeof e.seed!="number"||typeof e.nivel!="number"||e.nivel<1||!Array.isArray(e.items)||e.items.some(t=>typeof t!="string")||typeof e.halfHearts!="number"?null:{seed:e.seed>>>0,nivel:Math.floor(e.nivel),items:e.items,usable:typeof e.usable=="string"?e.usable:null,usable2:typeof e.usable2=="string"?e.usable2:null,halfHearts:Math.max(1,Math.floor(e.halfHearts)),crystals:typeof e.crystals=="number"?Math.max(0,Math.floor(e.crystals)):0,keys:typeof e.keys=="number"?Math.max(0,Math.floor(e.keys)):0}}function ax(n){const e=typeof localStorage<"u"?localStorage:(()=>{const r=new Map;return{getItem:s=>r.get(s)??null,setItem:(s,a)=>void r.set(s,a)}})();let t=kc();try{const r=e.getItem(Oc);if(r){const s=JSON.parse(r);s&&s.version===ko&&typeof s.cristales=="number"&&Array.isArray(s.desbloqueos)&&(t={version:ko,cristales:Math.max(0,Math.floor(s.cristales)),desbloqueos:s.desbloqueos.filter(a=>typeof a=="string"),slimepedia:Array.isArray(s.slimepedia)?s.slimepedia.filter(a=>typeof a=="string"):[],expedicion:sx(s.expedicion)})}}catch{t=kc()}const i={data:t,persist(){e.setItem(Oc,JSON.stringify(i.data))},harvest(r){r>0&&(i.data.cristales+=r,i.persist())},unlock(r){return i.has(r)?!1:(i.data.desbloqueos.push(r),i.persist(),!0)},has(r){return i.data.desbloqueos.includes(r)},saveExpedition(r){i.data.expedicion=r,i.persist()}};return i}function Bo(n){return{usableSlots:n.has("slot_usable_2")?2:1,unlockedItems:n.data.desbloqueos.filter(e=>e.startsWith("item_")).map(e=>e.slice(5))}}const $d="kai_audio",Bc={titulo:"assets/music/titulo.ogg",nivel:"assets/music/nivel.ogg",combate:"assets/music/combate.ogg",gorko:"assets/music/gorko.ogg",ambiente:"assets/music/ambiente.ogg"},ox="assets/music/gameover.ogg",zc={dano:["impactPunch_medium_000","impactPunch_medium_001"],dano_fuerte:["impactPunch_heavy_000","impactPunch_heavy_001"],caja:["impactPlank_medium_000","impactPlank_medium_001","impactPlank_medium_002"],roca:["impactMining_000","impactMining_001"],cristal:["impactGlass_light_000","impactGlass_light_001","impactGlass_light_002"],armadura:["impactPlate_light_000","impactPlate_light_001"]};function lx(){try{const n=localStorage.getItem($d);if(n){const e=JSON.parse(n);return{volume:typeof e.volume=="number"?Math.min(1,Math.max(0,e.volume)):.8,muted:!!e.muted}}}catch{}return{volume:.8,muted:!1}}function cx(n){const e=lx(),t=new AudioContext,i=t.createGain();i.gain.value=e.muted?0:e.volume,i.connect(t.destination);const r=()=>{t.state==="suspended"&&t.resume()};window.addEventListener("pointerdown",r),window.addEventListener("keydown",r);const s=new Map;async function a(M,P){try{const U=await(await fetch(P)).arrayBuffer();s.set(M,await t.decodeAudioData(U))}catch{}}for(const[M,P]of Object.entries(Bc))a(`music:${M}`,P);a("music:gameover",ox);for(const[M,P]of Object.entries(zc))P.forEach((R,U)=>void a(`${M}:${U}`,`assets/sfx/${R}.ogg`));const o=new Map,l=new Set;function c(M){const P=s.get(`music:${M}`);if(!P)return null;let R=o.get(M);if(R||(R=t.createGain(),R.gain.value=0,R.connect(i),o.set(M,R)),!l.has(M)&&t.state==="running"){const U=t.createBufferSource();U.buffer=P,U.loop=!0,U.connect(R),U.start(),l.add(M)}return R}function u(M){const P=t.currentTime;for(const R of Object.keys(Bc))c(R)?.gain.setTargetAtTime(M[R]??0,P,.9)}let f=!1;function d(){const M=s.get("music:gameover");if(!M||f)return;f=!0;const P=t.createBufferSource();P.buffer=M;const R=t.createGain();R.gain.value=.4,P.connect(R),R.connect(i),P.start()}function h(M,P){const R=zc[M].length,U=s.get(`${M}:${Math.floor(Math.random()*R)}`);if(!U)return;const H=t.createBufferSource();H.buffer=U,H.playbackRate.value=.92+Math.random()*.16;const Y=t.createGain();Y.gain.value=P,H.connect(Y),Y.connect(i),H.start()}const _=(()=>{const M=t.createBuffer(1,t.sampleRate,t.sampleRate),P=M.getChannelData(0);for(let R=0;R<P.length;R++)P[R]=Math.random()*2-1;return M})();function b(M,P){const R=t.createGain(),U=t.currentTime;return R.gain.setValueAtTime(1e-4,U),R.gain.exponentialRampToValueAtTime(Math.max(2e-4,M),U+.008),R.gain.exponentialRampToValueAtTime(1e-4,U+P),R.connect(i),R}function m(M,P,R,U,H,Y=30){const B=t.createOscillator();B.type=M;const K=t.currentTime;B.frequency.setValueAtTime(P,K),B.frequency.exponentialRampToValueAtTime(Math.max(20,R),K+U),B.detune.value=(Math.random()*2-1)*Y,B.connect(b(H,U)),B.start(K),B.stop(K+U+.02)}function p(M,P,R,U=1){const H=t.createBufferSource();H.buffer=_,H.playbackRate.value=.7+Math.random()*.6;const Y=t.createBiquadFilter();Y.type="bandpass",Y.frequency.value=M,Y.Q.value=U,H.connect(Y),Y.connect(b(R,P)),H.start(),H.stop(t.currentTime+P+.02)}function S(M,P,R){M.forEach((U,H)=>{const Y=t.createOscillator();Y.type="triangle";const B=t.currentTime+H*P*.8;Y.frequency.value=U;const K=t.createGain();K.gain.setValueAtTime(1e-4,B),K.gain.exponentialRampToValueAtTime(R,B+.01),K.gain.exponentialRampToValueAtTime(1e-4,B+P),K.connect(i),Y.connect(K),Y.start(B),Y.stop(B+P+.02)})}const I=new Map;function x(M,P){const R=performance.now();return(I.get(M)??0)+P>R?!1:(I.set(M,R),!0)}function w(M){switch(M.type){case"shot_fired":M.owner==="player"?x("shot",45)&&m("sine",640,220,.09,.1):x("eshot",60)&&m("square",240,140,.12,.05);break;case"enemy_hit":x("hit",40)&&p(900,.07,.12,2);break;case"shot_blocked":x("block",80)&&h("armadura",.14);break;case"enemy_killed":p(500,.18,.16,1.2),m("sine",300,80,.2,.1);break;case"damage_taken":h(M.amount>=2?"dano_fuerte":"dano",.5);break;case"armor_absorbed":h("armadura",.4);break;case"prop_broken":h("caja",.45);break;case"dash_used":p(1600,.14,.09,.6);break;case"telegraph_started":x("tele",150)&&m("sine",880,660,.08,.045);break;case"heart_collected":S([392,523.25],.09,.1);break;case"crystal_collected":x("crystal",70)&&h("cristal",.35);break;case"key_collected":S([659.3,880],.08,.1);break;case"door_unlocked":m("square",220,320,.12,.1,4);break;case"item_picked":case"item_bought":S([523.25,659.3,784,1046.5],.08,.11);break;case"usable_activated":m("triangle",440,880,.14,.11);break;case"proc_triggered":M.efecto==="critico"&&x("crit",90)&&p(2400,.06,.1,3);break;case"room_cleared":S([261.6,392],.12,.09);break;case"trapdoor_opened":m("sine",120,50,.5,.14);break;case"level_started":m("sine",80,45,.8,.16),p(300,.6,.07,.5);break;case"gorko_phase2":m("sawtooth",90,40,.7,.14),p(150,.5,.12,.7);break;case"elite_swallowed":m("sine",500,90,.3,.12);break;case"chest_opened":S([523.25,659.3,784,1046.5,1318.5],.09,.12);break;case"victory":S([392,523.25,659.3,784,1046.5],.14,.13);break;case"player_died":d();break}}const E=document.createElement("button");E.className="audio-toggle";const C=()=>{E.textContent=e.muted?"🔇":"🔊"};C(),E.addEventListener("pointerdown",M=>{M.stopPropagation(),v()}),window.addEventListener("keydown",M=>{M.code==="KeyM"&&v()}),n.appendChild(E);function v(){e.muted=!e.muted,i.gain.linearRampToValueAtTime(e.muted?0:e.volume,t.currentTime+.08),localStorage.setItem($d,JSON.stringify(e)),C()}return{onEvents(M){if(!(e.muted||t.state!=="running"))for(const P of M)w(P)},update(M){if(t.state!=="running")return;if(document.body.classList.contains("at-title")){u({titulo:.32});return}if(M.status==="dead"){u({});return}if(M.status==="victory"){u({ambiente:.12});return}if(f=!1,!(M.tick>0)){u({});return}const U=M.enemies.some(Y=>Y.kind==="gorko"),H=M.enemies.length>0;u({ambiente:.2,gorko:U?.34:0,combate:!U&&H?.28:0,nivel:!U&&!H?.24:0})}}}function dx(n,e,t,i){const r=document.createElement("div");r.className="screens",n.appendChild(r);let s=!1,a=!1,o=!1,l=0,c=null,u=null;function f(){s=!0,e.paused=!0,document.body.classList.add("at-title");const S=t.data.expedicion,I=S?`<button class="title-continue">▶ Continuar expedición — nivel ${S.nivel} de ${Ei}</button>`:"";r.innerHTML=`
      <div class="screen screen-title">
        <div class="title-name">KAI</div>
        <div class="title-sub">un slime contra El Pozo</div>
        ${I}
        <div class="title-row">
          <input class="title-seed" type="text" inputmode="numeric" placeholder="seed (opcional)" />
          <button class="title-play">${S?"Nueva expedición":"Entrar al Pozo"}</button>
        </div>
        <div class="title-hint">WASD mover · ratón apuntar · clic disparar · espacio usable · shift dash</div>
        <div class="title-version">sim v${i} · desbloqueos ${t.data.desbloqueos.length}</div>
      </div>`,r.querySelector(".title-play").addEventListener("click",()=>{const x=r.querySelector(".title-seed").value.trim(),w=x?Number(x)>>>0:Math.floor(Math.random()*4294967295)>>>0;d(w)}),r.querySelector(".title-continue")?.addEventListener("click",()=>{const x=t.data.expedicion;x&&(e.reset(x.seed,{...Bo(t),resume:{...x}}),c=null,l=0,o=!1,h(),e.paused=!1)})}function d(S){e.reset(S,Bo(t)),c=null,l=0,o=!1,h(),e.paused=!1}function h(){s=!1,a=!1,document.body.classList.remove("at-title"),r.innerHTML=""}function _(S){t.saveExpedition({seed:S.seed,nivel:S.floor.level,items:[...S.player.items],usable:S.player.usable?.itemId??null,usable2:S.player.usable2?.itemId??null,halfHearts:S.player.halfHearts,crystals:S.player.crystals,keys:S.player.keys})}function b(S){e.paused=!0;const I=S.floor.level,x=Array.from({length:Ei},(w,E)=>`<div class="level-seg ${E<I-1?"done":E===I-1?"current":""}"></div>`).join("");r.innerHTML=`
      <div class="screen screen-level">
        <div class="level-name">EL POZO</div>
        <div class="level-sub">nivel ${I} de ${Ei}</div>
        <div class="level-bar">${x}</div>
        <div class="level-saved">expedición guardada</div>
        <div class="refuge-actions">
          <button class="level-go">Seguir bajando</button>
          <button class="level-exit">Salir al título</button>
        </div>
      </div>`,r.querySelector(".level-go").addEventListener("click",()=>{h(),e.paused=!1}),r.querySelector(".level-exit").addEventListener("click",()=>{o=!0,f()})}function m(S){return S==="slot_usable_2"?"2º slot de usable (tecla Q)":S==="cristales"?null:sn(S).nombre}function p(S){a=!0;const I=S.status==="victory";let x="";if(S.chest?.opened){const w=m(S.chest.reward);x=w?`<div class="refuge-chest">📦 Cofre del Nido: <b>${w}</b><div class="refuge-desc">desbloqueado PARA SIEMPRE — ya está en el pool</div></div>`:'<div class="refuge-chest">📦 Cofre del Nido: cristales<div class="refuge-desc">ya lo has desbloqueado todo</div></div>'}else I&&(x='<div class="refuge-chest refuge-chest-missed">El cofre del Nido se quedó sin abrir…</div>');r.innerHTML=`
      <div class="screen screen-refuge">
        <div class="refuge-title">${I?"El refugio celebra tu victoria":"El refugio te recoge"}</div>
        ${x}
        <div class="refuge-actions">
          <button class="refuge-again">Nueva run</button>
          <button class="refuge-same">Repetir seed ${S.seed}</button>
        </div>
      </div>`,r.querySelector(".refuge-again").addEventListener("click",()=>{d(Math.floor(Math.random()*4294967295)>>>0)}),r.querySelector(".refuge-same").addEventListener("click",()=>{d(S.seed)})}return f(),{update(S){if(s&&!o&&(S.tick>0||!e.paused)&&h(),S.status==="playing"&&S.floor.level!==l){const x=l;l=S.floor.level,_(S),x>=1&&S.floor.level>x&&b(S)}const I=S.status==="dead"||S.status==="victory";if(I&&c!==e.sim){if(c=e.sim,t.saveExpedition(null),S.chest?.opened&&S.chest.reward!=="cristales"){const x=S.chest.reward;t.unlock(x==="slot_usable_2"?x:`item_${x}`)}u!==null&&clearTimeout(u),u=window.setTimeout(()=>{e.sim===c&&!a&&p(S)},2400)}!I&&a&&h()}}}const Dr=12,Hc=42,Gc=6;function ux(){const n=new URLSearchParams(location.search).get("touch");return n==="1"?!0:n==="0"?!1:window.matchMedia("(pointer: coarse) and (hover: none)").matches}function fx(n,e){const t=e.live,i=document.createElement("div");if(i.className="touch",i.innerHTML=`
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
      </div>`,i.appendChild(x),x.addEventListener("pointerdown",w=>{w.stopPropagation(),localStorage.setItem("kai_touch_help_v1","1"),x.remove()})}const r=i.querySelector(".touch-zone-left"),s=i.querySelector(".touch-zone-right"),a=i.querySelector(".touch-stick-move"),o=i.querySelector(".touch-stick-aim"),l=a.querySelector(".touch-knob"),c=o.querySelector(".touch-knob"),u=i.querySelector(".touch-btn-use2"),f=i.querySelector(".touch-btn-buy");let d=null,h=null,_=null;function b(x,w,E){const C=Math.hypot(w,E),v=C>Hc?Hc/C:1;x.style.transform=`translate(${w*v}px, ${E*v}px)`}function m(x,w){t.left=x<-Dr,t.right=x>Dr,t.up=w<-Dr,t.down=w>Dr}function p(x,w){const E=Math.hypot(x,w);E>Dr?(d={x:x/E,y:w/E},t.fire=!0):t.fire=!1}function S(x,w,E,C,v,M,P){x.addEventListener("pointerdown",U=>{if(C())return;const H=w.getBoundingClientRect(),Y={pointerId:U.pointerId,baseX:H.left+H.width/2,baseY:H.top+H.height/2};v(Y);try{x.setPointerCapture(U.pointerId)}catch{}w.classList.add("active");const B=U.clientX-Y.baseX,K=U.clientY-Y.baseY;b(E,B,K),M(B,K),U.preventDefault()}),x.addEventListener("pointermove",U=>{const H=C();if(!H||U.pointerId!==H.pointerId)return;const Y=U.clientX-H.baseX,B=U.clientY-H.baseY;b(E,Y,B),M(Y,B),U.preventDefault()});const R=U=>{const H=C();!H||U.pointerId!==H.pointerId||(v(null),w.classList.remove("active"),b(E,0,0),P())};x.addEventListener("pointerup",R),x.addEventListener("pointercancel",R)}S(r,a,l,()=>h,x=>h=x,m,()=>{t.left=t.right=t.up=t.down=!1}),S(s,o,c,()=>_,x=>_=x,p,()=>{d=null,t.fire=!1});const I=(x,w)=>{const E=i.querySelector(x);E.addEventListener("pointerdown",C=>{w(!0),C.preventDefault(),C.stopPropagation()});for(const C of["pointerup","pointercancel","pointerleave"])E.addEventListener(C,()=>w(!1))};return I(".touch-btn-dash",x=>t.dash=x),I(".touch-btn-use",x=>t.use=x),I(".touch-btn-use2",x=>t.use2=x),I(".touch-btn-buy",x=>t.interact=x),{update(x){d&&(t.aimX=x.player.x+d.x*Gc,t.aimY=x.player.y+d.y*Gc),u.hidden=!x.player.usable2;const w=x.pickups.some(E=>E.price&&Math.hypot(E.x-x.player.x,E.y-x.player.y)<1.6);f.hidden=!w}}}function hx(n,e){let t=0,i=1,r=0,s=0;const a=340,o={x:0,z:0};function l(c,u){(u>=r||t<=0)&&(t=c,i=c,r=u)}return{onEvents(c){for(const u of c)switch(u.type){case"damage_taken":l(140,.14),n.freeze(3);break;case"enemy_killed":l(90,.08),n.freeze(2);break;case"enemy_hit":l(40,.03);break;case"player_died":l(260,.2);break;case"room_changed":{const f={n:[0,1],s:[0,-1],e:[-1,0],w:[1,0]}[u.dir];o.x=f[0],o.z=f[1],s=a;break}case"level_started":n.freeze(6);break}},update(c,u){if(u.position.copy(e.cameraHome),s>0){s=Math.max(0,s-c);const f=s/a,d=f*f*(3-2*f);u.position.x+=o.x*6*d,u.position.z+=o.z*6*d}if(t>0){t-=c;const f=Math.max(0,t/i),d=r*f;u.position.x+=(Math.random()*2-1)*d,u.position.y+=(Math.random()*2-1)*d*.6,u.position.z+=(Math.random()*2-1)*d*.4,t<=0&&(r=0)}}}}const Be={outline:1916526,body:4033504,bodyHurt:7251933,shine:9426165,core:14677503,torch:15245628,torchBright:16177034,stone:4861726,stoneDark:2759696,floor:2365968,floorAlt:2826260,dungeonBg:1708555,toad:5934138,toadBelly:10339434,toadOutline:3099166,spit:8829247,spitDark:4021278,danger:14830410,eyeWhite:16055295,eyeDark:1320511,white:16777215};function at(n){return"#"+n.toString(16).padStart(6,"0")}function cn(n,e){const t={img:new Image,cell:e,cols:0,rows:0,ready:!1};return t.img.onload=()=>{t.cols=Math.max(1,Math.floor(t.img.width/e)),t.rows=Math.max(1,Math.floor(t.img.height/e)),t.ready=!0},t.img.src=n,t}function px(){return{frog:cn("assets/enemies/frogs/frog_spritesheets/frog_green_spritesheet.png",32),frogPurple:cn("assets/enemies/frogs/frog_spritesheets/frog_purple_spritesheet.png",32),bat:cn("assets/enemies/cave-bat/Bat/Spritesheets/Blue_Flying.png",32),trader:cn("assets/characters/craftpix-slime/Slime1/Idle/Slime1_Idle_body.png",64),babosaWalk:cn("assets/characters/craftpix-slime/Slime3/Walk/Slime3_Walk_body.png",64),babosaIdle:cn("assets/characters/craftpix-slime/Slime3/Idle/Slime3_Idle_body.png",64),babosaHurt:cn("assets/characters/craftpix-slime/Slime3/Hurt/Slime3_Hurt_body.png",64),kaiIdle:cn("assets/characters/craftpix-slime/Slime2/Idle/Slime2_Idle_body.png",64),kaiRun:cn("assets/characters/craftpix-slime/Slime2/Run/Slime2_Run_body.png",64),kaiAttack:cn("assets/characters/craftpix-slime/Slime2/Attack/Slime2_Attack_body.png",64),kaiHurt:cn("assets/characters/craftpix-slime/Slime2/Hurt/Slime2_Hurt_body.png",64)}}function ir(n,e,t,i,r,s,a,o=!1){n.imageSmoothingEnabled=!1;const l=e.cell;if(o){n.save(),n.translate(r,0),n.scale(-1,1),n.drawImage(e.img,t*l,i*l,l,l,-a/2,s-a/2,a,a),n.restore();return}n.drawImage(e.img,t*l,i*l,l,l,r-a/2,s-a/2,a,a)}const mx="assets/tileset/",Kd=["floor_1","floor_2","floor_3","floor_4","floor_5","floor_6","floor_7","floor_8","wall_mid","wall_top_mid","floor_stairs"],Zd=new Map,zo=[];let Ho=Kd.length;for(const n of Kd){const e=new Image;e.src=`${mx}${n}.png`,e.onload=()=>{if(--Ho===0)for(const t of zo)t()},e.onerror=()=>{if(--Ho===0)for(const t of zo)t()},Zd.set(n,e)}function ll(n){Ho===0?n():zo.push(n)}function kr(n){const e=Zd.get(n);return e&&e.complete&&e.naturalWidth>0?e:null}function Ft(n,e){const t=document.createElement("canvas");t.width=n,t.height=e;const i=t.getContext("2d");return[t,i]}function Ot(n){const e=new If(n);return e.magFilter=bt,e.minFilter=bt,e.generateMipmaps=!1,e.colorSpace=Wt,e}function Jd(n,e){let t=n*374761393+e*668265263>>>0;return t=Math.imul(t^t>>>13,1274126177)>>>0,(t^t>>>16)>>>0}function gx(n,e){const[i,r]=Ft(n*16,e*16);for(let s=0;s<e;s++)for(let a=0;a<n;a++){r.fillStyle=(a+s)%2===0?at(Be.floor):at(Be.floorAlt),r.fillRect(a*16,s*16,16,16);const o=Jd(a,s);r.fillStyle="rgba(0,0,0,0.18)",r.fillRect(a*16+o%16,s*16+(o>>5)%16,2,1),r.fillRect(a*16+(o>>10)%16,s*16+(o>>15)%16,1,2),r.strokeStyle="rgba(0,0,0,0.25)",r.lineWidth=1,r.strokeRect(a*16+.5,s*16+.5,15,15)}return Ot(i)}function _x(n,e){const[i,r]=Ft(n*16,e*16),s=Ot(i);let a=1;function o(l){if(a=l,!kr("floor_1")){const f=gx(n,e);r.drawImage(f.image,0,0),s.needsUpdate=!0;return}let c=l>>>0||1;const u=()=>(c^=c<<13,c>>>=0,c^=c>>17,c^=c<<5,c>>>=0,c/4294967295);for(let f=0;f<e;f++)for(let d=0;d<n;d++){const h=u()<.72?"floor_1":`floor_${1+Math.floor(u()*8)}`,_=kr(h)??kr("floor_1");r.drawImage(_,d*16,f*16,16,16)}s.needsUpdate=!0}return o(1),ll(()=>o(a)),{texture:s,repaint:o}}function xx(n,e){const[i,r]=Ft(Math.max(1,n)*16,Math.max(1,e)*16),s=Ot(i),a=()=>{const o=kr("wall_mid");if(o)for(let l=0;l*16<i.height;l++)for(let c=0;c*16<i.width;c++)r.drawImage(o,c*16,l*16,16,16);else{const l=Qd(n,e);r.drawImage(l.image,0,0)}s.needsUpdate=!0};return a(),ll(a),s}function vx(){const[n,e]=Ft(16,16),t=Ot(n),i=()=>{const r=kr("floor_stairs");r?e.drawImage(r,0,0):(e.fillStyle="#030201",e.fillRect(1,1,14,14)),t.needsUpdate=!0};return i(),ll(i),t}function Qd(n,e){const[i,r]=Ft(Math.max(1,n)*16,Math.max(1,e)*16);r.fillStyle=at(Be.stone),r.fillRect(0,0,i.width,i.height);const s=16/2;for(let a=0;a*s<i.height;a++){const o=a%2===0?0:8;for(let l=-1;l*16<i.width;l++){const c=l*16+o,f=(Jd(l,a)%21-10)/100;r.fillStyle=f>=0?`rgba(255,235,200,${f*.5})`:`rgba(0,0,0,${-f})`,r.fillRect(c+1,a*s+1,14,s-2),r.strokeStyle=at(Be.stoneDark),r.lineWidth=1,r.strokeRect(c+.5,a*s+.5,15,s-1)}}return Ot(i)}const Mx={down:0,up:1,left:2,right:3},Ia={idle:6,run:8,hurt:5},yx=13,Sx=4,bx=10,Vc=3,Ex=.24,Tx=[2,1,0,7,6,5,4,3],Wc={sapo_escupidor:{canvas:96,world:3,y:.42,shadow:[.9,.58]},renacuajo:{canvas:64,world:1.5,y:.28,shadow:[.45,.3]},mosca_gorda:{canvas:64,world:1.6,y:.85,shadow:[.42,.27]},babosa_acorazada:{canvas:96,world:2.5,y:.42,shadow:[1.05,.66]},sapo_doble:{canvas:128,world:4.2,y:.56,shadow:[1.3,.82]},gorko:{canvas:192,world:7,y:.95,shadow:[2.3,1.45]}};function wx(n,e){return Math.abs(n)>=Math.abs(e)?n>0?3:2:e>0?0:1}const Ms={col:0,frames:3},rr={col:3,frames:4},ys={col:7,frames:4},La={col:11,frames:5},xi={frames:5,ticksPerFrame:4,rowOffset:8},Da={frames:2,ticksPerFrame:5},Xc=18,qc=.16,Ax=.22,Ss=4;function bs(n,e){const t=Math.round(Math.atan2(e,n)/(Math.PI/4))+8&7;return Tx[t]}const Rx="assets/items/ssugmi-rpg-16x16/Free RPG asset Pack/separate files/",Cx={punos_de_piedra:"glove_01.png",brazos_de_arquero:"bow_01.png",piernas_de_renacuajo:"boots_01.png",botas_de_salto:"boots_02.png",casco_de_lata:"headgear_01.png",ojo_de_cristal:"glasses.png",nucleo_denso:"stone.png",corazon_de_la_gema:"hp_potion.png",chorro_dividido:"arrow.png",burbujas_traviesas:"mana_potion.png",libro_multidisparo:"book.png",trebol_de_alcantarilla:"clover_leaf.png",manos_de_ladron:"glove_02.png",herradura_del_ahogado:"necklace_01.png",punta_de_lanza:"spear_01.png",pulmones_de_buzo:"feather_a.png",caparazon_de_tortuga:"wooden_shield.png",anillo_de_marea:"ring_01.png",chorro_a_presion:"wand_01.png",medalla_oxidada:"necklace_02.png",aletas_de_carpa:"tail.png",silbato_del_pantano:"compass.png",corona_del_rey_sapo:"circlet.png",perla_negra:"glowing_dust.png",escudo_de_caracol:"shield_01.png",guantes_de_rana:"leather_glove.png"};function Ls(n){return Rx+(Cx[n]??"pouch.png")}const Yc=new Map;function $c(n){const e=Ls(n);let t=Yc.get(e);return t||(t=new Pd().load(e),t.magFilter=bt,t.minFilter=bt,t.generateMipmaps=!1,t.colorSpace=Wt,Yc.set(e,t)),t}const Px=24,Ix=64,Lx=vt.radius*Lo+4;function Dx(n,e){const t=Ux(),i=Nx(),r=Fx(),s=Ox(),a=Bx(),o=Gx(),l=new Ut(new qn(1,.62),new Ai({map:kx(),transparent:!0,depthWrite:!1,opacity:.85}));l.rotation.x=-Math.PI/2,l.position.y=.022,l.renderOrder=2,l.visible=!1,n.add(l);function c(N){const L=N.enemies.find(F=>F.kind==="gorko"&&(F.fsm==="jump_aim"||F.fsm==="airborne"));if(l.visible=!!L,!L)return;const A=L.fsm==="jump_aim"?.6+1.6*(1-L.timer/Fe.jumpAimTicks):2.2+.5*(1-L.timer/Fe.airborneTicks)+.12*Math.sin(N.tick*.5);l.scale.set(A*1.6,A,1),l.position.x=L.targetX,l.position.z=L.targetY}const u=Ua(n,64),f=ni(n,t,1,.62),d=new Map,h={prevX:null,prevY:0,lastMoveTick:-99,dist:0,facing:"down",prevFireCooldown:0,prevHalfHearts:-1,attackStart:-1,hurtStart:-1},_=Array.from({length:Px},()=>{const N=new ii(new kn({map:r,depthWrite:!1,transparent:!0}));N.scale.set(.5,.5,1),N.renderOrder=3,N.visible=!1,n.add(N);const L=new ii(new kn({map:o,depthWrite:!1,transparent:!0,opacity:.5}));L.scale.set(.3,.3,1),L.renderOrder=3,L.visible=!1,n.add(L);const A=ni(n,t,.24,.15);return A.visible=!1,{sprite:N,trail:L,shadow:A}}),b=Array.from({length:Ix},(N,L)=>{const A=new Ut(new qn(.55,.32),new Ai({map:i,transparent:!0,depthWrite:!1,opacity:0}));return A.rotation.x=-Math.PI/2,A.position.y=.008+L%8*.0015,A.renderOrder=1,A.visible=!1,n.add(A),A}),m=new Map,p=new Ii(.52,.3,.42),S=new sr({color:Be.stone,roughness:.9});function I(N){for(const L of N.pickups)if(!m.has(L.id)){const A=new Ut(p,S);A.position.set(L.x,.15,L.y),n.add(A);const F=new ii(new kn({map:$c(L.itemId),depthWrite:!1,transparent:!0}));F.scale.set(.55,.55,1),F.renderOrder=3,n.add(F),m.set(L.id,{itemId:L.itemId,icon:F,base:A,shadow:ni(n,t,.5,.32)})}for(const[L,A]of m){const F=N.pickups.find(ne=>ne.id===L);if(!F){n.remove(A.icon),A.icon.material.dispose(),n.remove(A.base),n.remove(A.shadow),m.delete(L);continue}F.itemId!==A.itemId&&(A.itemId=F.itemId,A.icon.material.map=$c(F.itemId)),A.icon.position.set(F.x,.72+.05*Math.sin(N.tick*.07),F.y),A.shadow.position.set(F.x,A.shadow.position.y,F.y)}}const x={heart:zx(),key:Hx(),crystal:Na(4.5),crystal_med:Na(5.5),crystal_big:Na(6.5)},w=new Map;function E(N){for(const L of N.drops)if(!w.has(L.id)){const A=new ii(new kn({map:x[L.kind],depthWrite:!1,transparent:!0}));A.renderOrder=3,n.add(A),w.set(L.id,{sprite:A,shadow:ni(n,t,.28,.18)})}for(const[L,A]of w){const F=N.drops.find(ce=>ce.id===L);if(!F){n.remove(A.sprite),A.sprite.material.dispose(),n.remove(A.shadow),w.delete(L);continue}const ne=Math.abs(Math.sin(N.tick*.09+L)),ie=F.kind==="crystal_big"?.64:F.kind==="crystal_med"?.52:.44;A.sprite.scale.set(ie*(.35+.65*ne),ie,1),A.sprite.position.set(F.x,.34+.05*Math.sin(N.tick*.1+L*2.1),F.y),A.shadow.position.set(F.x,A.shadow.position.y,F.y)}}function C(N){const L=new Pd().load(`assets/tileset/${N}.png`);return L.magFilter=bt,L.minFilter=bt,L.generateMipmaps=!1,L.colorSpace=Wt,L}const v=C("crate"),M=new Map;function P(N){for(const L of N.props)if(!M.has(L.id)){const A=new ii(new kn({map:v,depthWrite:!1,transparent:!0}));A.renderOrder=2,n.add(A),M.set(L.id,{sprite:A,shadow:ni(n,t,.55,.34)})}for(const[L,A]of M){const F=N.props.find(ie=>ie.id===L);if(!F){n.remove(A.sprite),A.sprite.material.dispose(),n.remove(A.shadow),M.delete(L);continue}const ne=F.hp<ci.hp?.88:1;A.sprite.scale.set(.95*ne,.95*ne,1),A.sprite.position.set(F.x,.42,F.y),A.shadow.position.set(F.x,A.shadow.position.y,F.y)}}const R=C("chest_full_open_anim_f0"),U=C("chest_full_open_anim_f2"),H=new ii(new kn({map:R,depthWrite:!1,transparent:!0}));H.renderOrder=3,H.visible=!1,n.add(H);const Y=ni(n,t,.6,.36);Y.visible=!1;function B(N){const L=N.chest,A=!!L&&L.roomId===N.floor.current;if(H.visible=A,Y.visible=A,!L||!A)return;H.material.map=L.opened?U:R;const F=L.opened?0:.04*Math.sin(N.tick*.08);H.scale.set(.95,.85,1),H.position.set(L.x,.42+F,L.y),Y.position.set(L.x,Y.position.y,L.y)}const K=Ua(n,96);K.sprite.visible=!1;const V=ni(n,t,1.2,.75);V.visible=!1;function ee(N){const L=N.floor.rooms[N.floor.current].kind==="shop";if(K.sprite.visible=L,V.visible=L,!L)return;const[A,F]=o_;K.sprite.scale.set(3.4,3.4,1),K.sprite.position.set(A,.62,F),V.position.set(A,V.position.y,F);const{ctx:ne,size:ie}=K,ce=ie/2;ne.clearRect(0,0,ie,ie);const ye=e.trader;if(ye&&ye.ready){const Ae=Math.floor(N.tick/16)%6;ir(ne,ye,Ae,0,ce,ce+4,ie*.8)}else ne.fillStyle=at(Be.toad),lt(ne,ce,ce,ie*.3,!0);const D=3*Math.sin(N.tick*.08),Se=ce-ie*.32+D;ne.fillStyle=at(Be.core),ne.beginPath(),ne.moveTo(ce,Se-6),ne.lineTo(ce+4.5,Se),ne.lineTo(ce,Se+6),ne.lineTo(ce-4.5,Se),ne.closePath(),ne.fill(),ne.strokeStyle=at(Be.shine),ne.lineWidth=1.4,ne.stroke(),K.tex.needsUpdate=!0}function oe(N){Z(N),Oe(N),Ye(N),rt(N),I(N),E(N),P(N),B(N),ee(N),c(N)}function Z(N){const L=N.player,A=N.status==="dead",F=L.iframes>0&&Math.floor(L.iframes/q0)%2===1;u.sprite.material.opacity=F?.35:1;const ie=L.halfHearts<=2&&!A?Math.sin(N.tick*.9)*.025:0;u.sprite.position.set(L.x+ie,.52,L.y),f.position.set(L.x,f.position.y,L.y),de(N);const ce=!!(e.kaiIdle&&e.kaiIdle.ready);if(A)u.sprite.scale.set(2,2,1),ot(u,N);else if(ce)u.sprite.scale.set(2.2,2.2,1),he(u,N);else{const ye=1+.04*Math.sin(N.tick*.12);u.sprite.scale.set(2*ye,2*(2-ye)*.95,1),$e(u,N)}}function de(N){const L=N.player,A=h;if(A.attackStart>N.tick&&(A.attackStart=-1),A.hurtStart>N.tick&&(A.hurtStart=-1),A.prevX!==null){const F=L.x-A.prevX,ne=L.y-A.prevY,ie=Math.hypot(F,ne);ie>1?A.dist=0:ie>5e-4&&(A.dist+=ie,A.lastMoveTick=N.tick,A.facing=Math.abs(F)>=Math.abs(ne)?F>0?"right":"left":ne>0?"down":"up")}A.prevX=L.x,A.prevY=L.y,L.fireCooldown>A.prevFireCooldown&&(A.attackStart=N.tick,A.facing=Math.abs(L.aimX)>=Math.abs(L.aimY)?L.aimX>0?"right":"left":L.aimY>0?"down":"up"),A.prevFireCooldown=L.fireCooldown,A.prevHalfHearts>=0&&L.halfHearts<A.prevHalfHearts&&(A.hurtStart=N.tick),A.prevHalfHearts=L.halfHearts}function he(N,L){const{ctx:A,size:F}=N,ne=F/2;A.clearRect(0,0,F,F);const ie=h,ce=Mx[ie.facing],ye=ie.hurtStart>=0?L.tick-ie.hurtStart:1/0,D=ie.attackStart>=0?L.tick-ie.attackStart:1/0;let Se=e.kaiIdle,Ae;e.kaiHurt?.ready&&ye<Ia.hurt*Vc?(Se=e.kaiHurt,Ae=Math.floor(ye/Vc)):e.kaiAttack?.ready&&D<bx?(Se=e.kaiAttack,Ae=Sx):e.kaiRun?.ready&&L.tick-ie.lastMoveTick<=Ss?(Se=e.kaiRun,Ae=Math.floor(ie.dist/Ex)%Ia.run):Ae=Math.floor(L.tick/yx)%Ia.idle,ir(A,Se,Ae,ce,ne,ne+F*.06,F),N.tex.needsUpdate=!0}function $e(N,L){const{ctx:A,size:F}=N,ne=L.player,ie=F/2,ce=Lx,ye=ne.halfHearts<=2;A.clearRect(0,0,F,F),A.fillStyle=at(ye?Be.bodyHurt:Be.body),A.strokeStyle=at(Be.outline),A.lineWidth=2,dn(A,ie,ie,ce,ce*1.05,!0,!0),A.fillStyle=tn(Be.shine,.85),dn(A,ie-ce*.55,ie-ce*.55,ce*.4,ce*.225,!0,!1);const D=ye?.6+.4*Math.abs(Math.sin(L.tick*.25)):1;A.fillStyle=tn(ye?Be.danger:Be.core,D),lt(A,ie,ie+ce*.35,4.5,!0),A.strokeStyle=tn(Be.shine,.9),A.lineWidth=1,lt(A,ie,ie+ce*.35,4.5,!1,!0);const Se=ne.aimX*1.6,Ae=ne.aimY*1.6;A.fillStyle=at(Be.eyeWhite),dn(A,ie-6,ie-4,3.5,4.5,!0,!1),dn(A,ie+6,ie-4,3.5,4.5,!0,!1),A.fillStyle=at(Be.eyeDark),lt(A,ie-6+Se,ie-4+Ae,2.2,!0),lt(A,ie+6+Se,ie-4+Ae,2.2,!0),A.fillStyle=at(Be.white),lt(A,ie-5+Se,ie-5+Ae,.9,!0),lt(A,ie+7+Se,ie-5+Ae,.9,!0),N.tex.needsUpdate=!0}function ot(N,L){const{ctx:A,size:F}=N,ne=F/2,ie=L.tick-L.player.deathTick;A.clearRect(0,0,F,F);const ce=Math.min(1,ie/40);A.fillStyle=tn(Be.outline,.4),dn(A,ne,ne+6,15+10*ce,6+3*ce,!0,!1),A.fillStyle=tn(Be.body,.55),dn(A,ne,ne+6,13+9*ce,5+2.5*ce,!0,!1);const ye=Math.floor(ie/14)%2===0?1:.25;A.fillStyle=tn(Be.core,ye),lt(A,ne,ne+3,4.5,!0),A.strokeStyle=tn(Be.shine,ye),A.lineWidth=1,lt(A,ne,ne+3,4.5,!1,!0),N.tex.needsUpdate=!0}function Oe(N){for(const L of N.enemies)if(!d.has(L.id)){const A=Wc[L.kind];d.set(L.id,{kind:L.kind,view:Ua(n,A.canvas),shadow:ni(n,t,A.shadow[0],A.shadow[1]),prevX:L.x,prevY:L.y,lastMoveTick:-99,dist:0,prevHp:L.hp,hurtStart:-1,spitStart:-1,prevFsm:L.fsm,dirRow:0})}for(const[L,A]of d){const F=N.enemies.find(g=>g.id===L);if(!F){n.remove(A.view.sprite),A.view.sprite.material.map?.dispose(),A.view.sprite.material.dispose(),n.remove(A.shadow),d.delete(L);continue}A.hurtStart>N.tick&&(A.hurtStart=-1),A.spitStart>N.tick&&(A.spitStart=-1),F.fsm==="shoot"&&A.prevFsm!=="shoot"&&(A.spitStart=N.tick),A.prevFsm=F.fsm;const ne=F.x-A.prevX,ie=F.y-A.prevY,ce=Math.hypot(ne,ie);ce>1?A.dist=0:ce>5e-4&&(A.dist+=ce,A.lastMoveTick=N.tick,A.dirRow=bs(ne,ie)),A.prevX=F.x,A.prevY=F.y,F.hp<A.prevHp&&(A.hurtStart=N.tick),A.prevHp=F.hp,(F.fsm==="aim"||F.fsm==="shoot")&&(A.dirRow=bs(F.targetX-F.x,F.targetY-F.y)),F.kind==="renacuajo"&&(F.fsm==="windup"||F.fsm==="hop")&&(A.dirRow=bs(F.facingX,F.facingY)),F.kind==="gorko"&&(F.fsm==="jump_aim"||F.fsm==="volley")&&(A.dirRow=bs(F.targetX-F.x,F.targetY-F.y));const ye=Wc[F.kind];let D=1+.05*Math.sin(N.tick*.15);const Se=F.kind!=="mosca_gorda"&&F.kind!=="babosa_acorazada";if(Se&&(F.fsm==="aim"||F.fsm==="swallow_aim")){const g=F.kind==="sapo_doble"?ft.telegraphTicks:Vt.telegraphTicks;D=1+.25*(1-F.timer/g)}Se||(D=1);const Ae=ye.world*F.sizeMult;A.view.sprite.scale.set(Ae*D,Ae,1),A.shadow.scale.setScalar(F.sizeMult);const T=(F.kind==="mosca_gorda"?ye.y+.08*Math.sin(N.tick*.13+F.id*1.7):ye.y)*F.sizeMult;A.view.sprite.position.set(F.x,T,F.y),A.shadow.position.set(F.x,A.shadow.position.y,F.y),j(A,F,N)}}function j(N,L,A){const{ctx:F,size:ne}=N.view;switch(F.clearRect(0,0,ne,ne),le(N,L),L.kind){case"sapo_escupidor":ae(N,L,A,e.frog,Vt.telegraphTicks,Vt.aggroRange);break;case"renacuajo":ae(N,L,A,e.frog,Xt.windupTicks,Xt.aggroRange);break;case"sapo_doble":ae(N,L,A,e.frogPurple,ft.telegraphTicks,ft.aggroRange);break;case"mosca_gorda":ke(N,L,A);break;case"babosa_acorazada":Ue(N,L,A);break;case"gorko":Ge(N,L,A);break}if(L.variant&&(F.globalCompositeOperation="source-atop",F.fillStyle=L.variant==="gigante"?"rgba(224, 70, 40, 0.25)":"rgba(90, 205, 255, 0.25)",F.fillRect(0,0,ne,ne),F.globalCompositeOperation="source-over"),L.hp<L.maxHp){const ie=ne/2,ce=ne*.42,ye=ne*.16;F.fillStyle="rgba(0,0,0,0.5)",F.fillRect(ie-ce/2,ye,ce,3),F.fillStyle=at(Be.danger),F.fillRect(ie-ce/2,ye,ce*L.hp/L.maxHp,3)}N.view.tex.needsUpdate=!0}function le(N,L){const F={aim:L.kind==="gorko"?Fe.tongueAimTicks:L.kind==="sapo_doble"?ft.telegraphTicks:Vt.telegraphTicks,swallow_aim:ft.swallowTelegraphTicks,windup:Xt.windupTicks,jump_aim:Fe.jumpAimTicks,summon:Fe.summonTicks,volley:Fe.volleyAimTicks}[L.fsm];if(!F)return;const{ctx:ne,size:ie}=N.view,ce=ie/2,ye=ie*.3,D=1-L.timer/F;ne.strokeStyle=tn(Be.white,.35+.4*D),ne.lineWidth=2,lt(ne,ce,ce,ye+4*(1-D),!1,!0),ne.fillStyle=tn(Be.white,.9),ne.fillRect(ce-1.5,ce-ye-12,3,7),lt(ne,ce,ce-ye-3,1.8,!0)}function ae(N,L,A,F,ne,ie){const{ctx:ce,size:ye}=N.view,D=ye/2;if(!F||!F.ready){mt(ce,D,ye*.28,L,A);return}const Se=N.hurtStart>=0?A.tick-N.hurtStart:1/0,Ae=N.spitStart>=0?A.tick-N.spitStart:1/0;let T,g=N.dirRow;if(Se<xi.frames*xi.ticksPerFrame)g=xi.rowOffset+N.dirRow,T=Math.floor(Se/xi.ticksPerFrame);else if(Ae<Da.frames*Da.ticksPerFrame)g=xi.rowOffset+N.dirRow,T=Math.floor(Ae/Da.ticksPerFrame);else if(L.fsm==="aim"||L.fsm==="swallow_aim"||L.fsm==="windup"){const z=L.fsm==="aim"?ne:L.fsm==="windup"?Xt.windupTicks:ft.swallowTelegraphTicks,W=Math.max(1,Math.floor(z/rr.frames));T=rr.col+Math.min(rr.frames-1,Math.floor((z-L.timer)/W))}else if(L.fsm==="hop"){const z=1-L.timer/Xt.hopTicks;T=ys.col+Math.min(ys.frames-1,Math.floor(z*ys.frames))}else if(A.tick-N.lastMoveTick<=Ss){const z=Math.hypot(A.player.x-L.x,A.player.y-L.y)<=ie,W=z?ys:La,J=z?Ax:qc;T=W.col+Math.floor(N.dist/J)%W.frames}else T=Ms.col+Math.floor(A.tick/Xc)%Ms.frames;ir(ce,F,T,g,D,D,ye*.58)}function ke(N,L,A){const{ctx:F,size:ne}=N.view,ie=ne/2,ce=e.bat;if(!ce||!ce.ready){F.fillStyle=at(Be.spitDark),lt(F,ie,ie,ne*.2,!0);return}const ye=Math.floor(A.tick/5)%6,D=ye%4,Se=Math.floor(ye/4);ir(F,ce,D,Se,ie,ie,ne*.62,L.facingX>0);const Ae=N.hurtStart>=0?A.tick-N.hurtStart:1/0;Ae<8&&(F.fillStyle=`rgba(255,255,255,${.5*(1-Ae/8)})`,lt(F,ie,ie,ne*.2,!0))}function Ge(N,L,A){const{ctx:F,size:ne}=N.view,ie=ne/2;if(L.fsm==="airborne")return;const ce=e.frogPurple;if(!ce||!ce.ready){F.fillStyle="#8a4a9a",lt(F,ie,ie,ne*.28,!0);return}if(L.fsm==="belly"){const Ae=.35+.2*Math.abs(Math.sin(A.tick*.2)),T=F.createRadialGradient(ie,ie,4,ie,ie,ne*.34);T.addColorStop(0,`rgba(246,215,138,${Ae})`),T.addColorStop(1,"rgba(246,215,138,0)"),F.fillStyle=T,lt(F,ie,ie,ne*.34,!0)}const ye=N.hurtStart>=0?A.tick-N.hurtStart:1/0;let D,Se=N.dirRow;if(L.fsm==="belly")Se=xi.rowOffset+N.dirRow,D=2;else if(ye<6)Se=xi.rowOffset+N.dirRow,D=0;else if(L.fsm==="aim"||L.fsm==="jump_aim"||L.fsm==="summon"||L.fsm==="volley"){const T={aim:Fe.tongueAimTicks,jump_aim:Fe.jumpAimTicks,summon:Fe.summonTicks,volley:Fe.volleyAimTicks}[L.fsm],g=Math.max(1,Math.floor(T/rr.frames));D=rr.col+Math.min(rr.frames-1,Math.floor((T-L.timer)/g))}else A.tick-N.lastMoveTick<=Ss?D=La.col+Math.floor(N.dist/qc)%La.frames:D=Ms.col+Math.floor(A.tick/Xc)%Ms.frames;ir(F,ce,D,Se,ie,ie,ne*.6)}function Ue(N,L,A){const{ctx:F,size:ne}=N.view,ie=ne/2,ce=wx(L.facingX,L.facingY),ye=N.hurtStart>=0?A.tick-N.hurtStart:1/0;let D=e.babosaIdle,Se=0;e.babosaHurt?.ready&&ye<5*3?(D=e.babosaHurt,Se=Math.floor(ye/3)):e.babosaWalk?.ready&&A.tick-N.lastMoveTick<=Ss?(D=e.babosaWalk,Se=Math.floor(N.dist/.14)%8):e.babosaIdle?.ready&&(Se=Math.floor(A.tick/16)%6),D&&D.ready?ir(F,D,Se,ce,ie,ie,ne*.72):(F.fillStyle="#7a5b3a",lt(F,ie,ie,ne*.26,!0));const Ae=Math.atan2(L.facingY,L.facingX);F.strokeStyle="rgba(205,218,228,0.9)",F.lineWidth=3.5,F.beginPath(),F.arc(ie,ie,ne*.28,Ae-1.15,Ae+1.15),F.stroke()}function mt(N,L,A,F,ne){N.fillStyle=at(Be.toad),N.strokeStyle=at(Be.toadOutline),N.lineWidth=2,dn(N,L,L,A,A*.85,!0,!0),N.fillStyle=at(Be.toadBelly),dn(N,L,L+A*.35,A*.65,A*.4,!0,!1);const ie=ne.player.x-F.x,ce=ne.player.y-F.y,ye=Math.hypot(ie,ce)||1,D=ie/ye*1.2,Se=ce/ye*1.2;N.fillStyle=at(Be.eyeWhite),lt(N,L-A*.45,L-A*.7,4,!0),lt(N,L+A*.45,L-A*.7,4,!0),N.fillStyle=at(Be.eyeDark),lt(N,L-A*.45+D,L-A*.7+Se,2,!0),lt(N,L+A*.45+D,L-A*.7+Se,2,!0)}function Ye(N){for(let L=0;L<_.length;L++){const A=_[L],F=N.shots[L];if(!F){A.sprite.visible=A.trail.visible=A.shadow.visible=!1;continue}A.sprite.visible=A.shadow.visible=!0,A.sprite.material.map=F.owner==="player"?r:F.tags.includes("lengua")?a:s;const ne=.5*(F.radius/ur);if(A.sprite.scale.set(ne,ne,1),A.sprite.position.set(F.x,.38,F.y),A.shadow.position.set(F.x,A.shadow.position.y,F.y),A.trail.visible=F.owner==="player",A.trail.visible){const ie=Math.hypot(F.vx,F.vy)||1;A.trail.position.set(F.x-F.vx/ie*.28,.38,F.y-F.vy/ie*.28)}}}function rt(N){for(let L=0;L<b.length;L++){const A=b[L],F=N.puddles[L];if(!F){A.visible=!1;continue}A.visible=!0,A.position.x=F.x,A.position.z=F.y,A.material.opacity=Math.min(.5,F.ttl/400)}}return{update:oe}}function Ua(n,e){const[t,i]=Ft(e,e),r=Ot(t),s=new ii(new kn({map:r,depthWrite:!1,transparent:!0}));return s.scale.set(e/Lo,e/Lo,1),s.renderOrder=3,n.add(s),{sprite:s,ctx:i,tex:r,size:e}}function ni(n,e,t,i){const r=new Ut(new qn(t,i),new Ai({map:e,transparent:!0,depthWrite:!1,opacity:.4}));return r.rotation.x=-Math.PI/2,r.position.y=.02,r.renderOrder=2,n.add(r),r}function Ux(){const[n,e]=Ft(32,32),t=e.createRadialGradient(16,16,2,16,16,15);t.addColorStop(0,"rgba(0,0,0,0.85)"),t.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=t,e.fillRect(0,0,32,32);const i=Ot(n);return i.magFilter=Ct,i.minFilter=Ct,i}function Nx(){const[n,e]=Ft(32,20);return e.fillStyle=at(Be.outline),dn(e,16,10,15,8,!0,!1),e.fillStyle=tn(Be.body,.6),dn(e,16,10,9,4.5,!0,!1),e.fillStyle=tn(Be.shine,.35),dn(e,13,8,3.5,1.6,!0,!1),Ot(n)}function Fx(){const[n,e]=Ft(16,16);return e.fillStyle=at(Be.body),lt(e,8,8,6,!0),e.fillStyle=at(Be.core),lt(e,7,7,2.5,!0),Ot(n)}function Ox(){const[n,e]=Ft(16,16);return e.fillStyle=at(Be.spit),lt(e,8,8,5,!0),e.fillStyle=at(Be.spitDark),lt(e,9,9,1.8,!0),Ot(n)}function kx(){const[n,e]=Ft(64,64),t=e.createRadialGradient(32,32,4,32,32,30);t.addColorStop(0,"rgba(0,0,0,0.9)"),t.addColorStop(.75,"rgba(0,0,0,0.75)"),t.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=t,e.fillRect(0,0,64,64),e.strokeStyle="rgba(226,75,74,0.9)",e.lineWidth=2.5,e.beginPath(),e.arc(32,32,27,0,Math.PI*2),e.stroke();const i=Ot(n);return i.magFilter=Ct,i.minFilter=Ct,i}function Bx(){const[n,e]=Ft(16,16);return e.fillStyle="#e07a9a",lt(e,8,8,6.5,!0),e.fillStyle="#b04a6a",lt(e,9,9,2.4,!0),e.strokeStyle="#7a2a44",e.lineWidth=1.2,lt(e,8,8,6.5,!1,!0),Ot(n)}function Na(n){const[e,t]=Ft(16,16),i=8,r=8;return t.fillStyle=at(Be.core),t.beginPath(),t.moveTo(i,r-n),t.lineTo(i+n*.7,r),t.lineTo(i,r+n),t.lineTo(i-n*.7,r),t.closePath(),t.fill(),t.strokeStyle=at(Be.shine),t.lineWidth=1.4,t.stroke(),t.fillStyle="rgba(255,255,255,0.85)",lt(t,i-1.5,r-2,1.1,!0),Ot(e)}function zx(){const[n,e]=Ft(16,16);return e.fillStyle=at(Be.danger),e.beginPath(),e.moveTo(8,14),e.bezierCurveTo(2,9,2,4,5.5,3.5),e.bezierCurveTo(7,3.2,8,4.5,8,5.5),e.bezierCurveTo(8,4.5,9,3.2,10.5,3.5),e.bezierCurveTo(14,4,14,9,8,14),e.fill(),e.fillStyle="rgba(255,255,255,0.6)",lt(e,5.5,5.5,1.2,!0),Ot(n)}function Hx(){const[n,e]=Ft(16,16);return e.strokeStyle="#f2c14e",e.lineWidth=2,lt(e,5.5,5.5,3,!1,!0),e.beginPath(),e.moveTo(7.5,7.5),e.lineTo(12.5,12.5),e.moveTo(10.5,10.5),e.lineTo(12,9),e.moveTo(12.5,12.5),e.lineTo(14,11),e.stroke(),Ot(n)}function Gx(){const[n,e]=Ft(16,16),t=e.createRadialGradient(8,8,1,8,8,7);return t.addColorStop(0,tn(Be.shine,.9)),t.addColorStop(1,"rgba(143,212,245,0)"),e.fillStyle=t,e.fillRect(0,0,16,16),Ot(n)}function dn(n,e,t,i,r,s,a){n.beginPath(),n.ellipse(e,t,i,r,0,0,Math.PI*2),n.fill(),a&&n.stroke()}function lt(n,e,t,i,r,s=!1){n.beginPath(),n.arc(e,t,Math.max(.1,i),0,Math.PI*2),r&&n.fill(),s&&n.stroke()}function tn(n,e){const t=n>>16&255,i=n>>8&255,r=n&255;return`rgba(${t},${i},${r},${e})`}const Kc={dano:"daño",cadencia:"caudal",alcance:"alcance",velProyectil:"presión",velMovimiento:"velocidad",suerte:"suerte",corazones:"vida",proyectiles:"chorro(s)",armaduraPorSala:"armadura/sala"},Zc={empuje:"más empuje al impactar",rastro_charcos:"deja un rastro de charquitos",dash:"dash con i-frames (Shift)",divide:"los disparos se dividen al impactar",burbuja:"disparos flotantes que persiguen",ver_cofres:"ves el contenido de los cofres"},Vx={critico:"crítico ×2",dividir_en_3:"dividirse en 3",burbuja_gigante:"burbuja gigante"},Wx={multidisparo:"+2 chorros",prisa:"sprint ×1.5",escudo:"bloquea TODO el daño"},Xx={comun:"común",rara:"rara",legendaria:"legendaria"};function jd(n,e){const t=[];for(const i of n.tags)Zc[i]&&t.push(Zc[i]);for(const i of n.procs){const r=Math.round(Wd(i,e)*100);t.push(`${Vx[i.efecto]??i.efecto}: ${r}% (con tu suerte)`)}if(n.usable){const i=Math.round(n.usable.duracionTicks/Ri),r=Math.round(n.usable.recargaTicks/Ri),s=Wx[n.usable.efecto]??n.usable.efecto;t.push(`usable: ${s} durante ${i} s, recarga ${r} s`)}return t}function qx(n,e){const t=[];for(const[i,r]of Object.entries(n.stats))t.push(`${r>0?"+":""}${r} ${Kc[i]??i}`);for(const[i,r]of Object.entries(n.mults))t.push(`×${r} ${Kc[i]??i}`);return t.push(...jd(n,e)),t}function On(n){return Number.isInteger(n)?String(n):n.toFixed(1)}function Jc(n,e){const t=[],i=(r,s,a,o=1)=>{const l=(a-s)*o;Math.abs(l)>1e-9&&t.push(`${l>0?"+":"−"}${On(Math.abs(l))} ${r}`)};return i("daño",n.damage,e.damage),i("caudal",n.fireRate,e.fireRate),i("alcance",n.range,e.range),i("presión",n.shotSpeed,e.shotSpeed),i("velocidad",n.moveSpeed,e.moveSpeed),i("suerte",n.luck,e.luck),i("chorro(s)",n.projectiles,e.projectiles),i("vida",n.maxHalfHearts,e.maxHalfHearts,.5),i("armadura/sala",n.armorPerRoom,e.armorPerRoom),t}const Qc="M10 17 C4.5 12.5 1 9 1 5.6 A4.4 4.4 0 0 1 10 4 A4.4 4.4 0 0 1 19 5.6 C19 9 15.5 12.5 10 17 Z";function Yx(n,e,t){const i=document.createElement("div");i.className="hud",i.innerHTML=`
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
  `,n.appendChild(i);const r=i.querySelector(".hud-hearts"),s=i.querySelector(".hud-toasts"),a=i.querySelector(".hud-items"),o=i.querySelector(".hud-stats"),l=i.querySelector(".hud-near"),c=i.querySelector(".hud-minimap"),u=i.querySelector(".hud-wallet"),f=i.querySelector(".hud-boss"),d=[...i.querySelectorAll(".hud-usable")],h=[...i.querySelectorAll(".hud-usable-icon")],_=[...i.querySelectorAll(".hud-usable-cd")],b=i.querySelector(".hud-center"),m=i.querySelector(".hud-msg"),p=i.querySelector(".hud-sub"),S=i.querySelector(".hud-seed");let I=-1,x=-1,w=-1,E="",C=-1;const v=["",""],M=[-1,-1];let P="",R="",U="",H="",Y="",B="",K=null,V=!0;window.addEventListener("keydown",Z=>{Z.code==="Tab"&&(Z.preventDefault(),V=!V,o.hidden=!V)});function ee(Z,de){const he=document.createElement("div");for(he.className="hud-toast"+(de==="delta"?" hud-toast-delta":""),he.textContent=Z,s.appendChild(he);s.children.length>6;)s.firstChild?.remove();setTimeout(()=>he.remove(),2600)}function oe(Z,de="#e24b4a",he="#f6a5a4"){const $e=`<path d="${Qc}" fill="rgba(0,0,0,0.45)" stroke="rgba(0,0,0,0.6)" stroke-width="1"/>`,ot=Z===1?' style="clip-path: inset(0 50% 0 0)"':"",Oe=Z>0?`<path d="${Qc}" fill="${de}"${ot}/><path d="M6 6.2 A2.4 2.4 0 0 1 9 4.8" stroke="${he}" stroke-width="1.4" fill="none"${ot}/>`:"";return`<svg viewBox="0 0 20 18" class="hud-heart">${$e}${Oe}</svg>`}return{update(Z){const de=Z.player.halfHearts,he=Z.player.maxHalfHearts,$e=Z.player.armor;if(de!==I||he!==x||$e!==w){I=de,x=he,w=$e;const N=Math.ceil(he/2);let L="";for(let A=0;A<N;A++)L+=oe(Math.min(2,Math.max(0,de-A*2)));for(let A=0;A<Math.ceil($e/2);A++)L+=oe(Math.min(2,Math.max(0,$e-A*2)),"#9fb8c8","#dfeef7");r.innerHTML=L}if([Z.player.usable,Z.player.usable2].forEach((N,L)=>{const A=N?.itemId??"";if(A!==v[L]&&(v[L]=A,d[L].hidden=!N,N&&(h[L].src=Ls(N.itemId))),N){const F=Math.ceil(N.cooldown/Ri);F!==M[L]&&(M[L]=F,_[L].textContent=F>0?String(F):""),d[L].classList.toggle("ready",N.cooldown===0),d[L].classList.toggle("active",N.activeTicks>0)}}),Z.status!==E)if(E=Z.status,b.classList.toggle("has-msg",Z.status!=="playing"),Z.status==="victory"){const N=t(),L=N.filter(ye=>ye.type==="enemy_killed").length,A=N.filter(ye=>ye.type==="damage_taken").length,F=N.filter(ye=>ye.type==="heart_collected").length,ne=N.filter(ye=>ye.type==="item_bought").length,ie=Math.floor(Z.tick/3600),ce=Math.floor(Z.tick%3600/60);m.textContent="¡El Pozo superado!",p.innerHTML=`<div class="hud-run-summary"><div>tiempo <b>${ie}:${String(ce).padStart(2,"0")}</b></div><div>abatidos <b>${L}</b> · golpes recibidos <b>${A}</b></div><div>items <b>${Z.player.items.length}</b> · compras <b>${ne}</b> · corazones <b>${F}</b></div><div>cristales <b class="hud-wallet-crystal">◆ ${Z.player.crystals}</b></div><div style="margin-top:6px">R para otra run</div></div>`}else Z.status==="dead"?(m.textContent="Kai se derritió…",p.textContent="R para reintentar"):(m.textContent="",p.textContent="");const ot=Z.player.items.join(",");if(ot!==P){const N=Z.player.items.length>P.split(",").filter(Boolean).length;if(P=ot,a.innerHTML=Z.player.items.map(L=>{const A=sn(L),F=`<b>${A.nombre}</b>`+qx(A,Z.stats.luck).map(ne=>`<div>· ${ne}</div>`).join("");return`<div class="hud-item"><img src="${Ls(L)}" alt="${A.nombre}" /><div class="hud-item-tip">${F}</div></div>`}).join(""),N&&K){const L=sn(Z.player.items[Z.player.items.length-1]).nombre;ee(L);for(const A of Jc(K,Z.stats))ee(A,"delta")}}K={...Z.stats};const Oe=Z.stats,j=[Oe.maxHalfHearts,Oe.damage,Oe.fireRate,Oe.range,Oe.shotSpeed,Oe.moveSpeed,Oe.luck,Oe.projectiles].join("|");if(j!==R){R=j;const N=[["❤️","Vida",On(Oe.maxHalfHearts/2),"corazones máximos"],["⚔️","Daño",On(Oe.damage),"daño por proyectil"],["💧","Caudal",`${On(Oe.fireRate)}/s`,"disparos por segundo (cadencia)"],["🏹","Alcance",On(Oe.range),"tiles antes de caer en charco"],["💨","Presión",On(Oe.shotSpeed),"velocidad del proyectil"],["👢","Velocidad",On(Oe.moveSpeed),"velocidad de movimiento"],["🍀","Suerte",On(Oe.luck),"escala los procs y la calidad de drops"],["🔱","Chorros",On(Oe.projectiles),"proyectiles por disparo"]];o.innerHTML='<div class="hud-stats-title">stats · Tab</div>'+N.map(([L,A,F,ne])=>`<div class="hud-stats-row" title="${ne}"><span class="hud-stats-icon">${L}</span><span class="hud-stats-name">${A}</span><span class="hud-stats-value">${F}</span></div>`).join("")}let le=null,ae=1.25;for(const N of Z.pickups){const L=Math.hypot(N.x-Z.player.x,N.y-Z.player.y);L<ae&&(ae=L,le=N)}const ke=le?`${le.id}:${le.itemId}:${le.price?Z.player.crystals>=le.price?"ok":"no":""}`:"";if(ke!==U&&(U=ke,l.hidden=!le,le)){const N=sn(le.itemId),L=jd(N,Z.stats.luck).map(ne=>`<div>· ${ne}</div>`).join("");let A="";if(N.categoria!=="usable"){const ne=Wr([...Z.player.items,le.itemId]),ie=Jc(Z.stats,ne);A=ie.length?ie.map(ce=>`<div class="hud-near-diff">${ce}</div>`).join(""):""}const F=le.price?`<div class="hud-near-price ${Z.player.crystals>=le.price?"ok":"no"}">◆ ${le.price} cristales — ${Z.player.crystals>=le.price?"pulsa E para comprar":"no te alcanza"}</div>`:"";l.innerHTML=`<img src="${Ls(N.id)}" alt="" /><div><b>${N.nombre}</b> <span class="hud-near-rar">${Xx[N.rareza]}</span>${F}${A}${L}<i>«${N.descripcion}»</i></div>`}const Ge=`${Z.player.crystals}:${Z.player.keys}`;Ge!==Y&&(Y=Ge,u.innerHTML=`<span class="hud-wallet-crystal">◆</span> ${Z.player.crystals}`+(Z.player.keys>0?` &nbsp;<span class="hud-wallet-key">⚷</span> ${Z.player.keys}`:""));const Ue=Z.enemies.some(N=>N.kind==="gorko"),mt=`${Z.seed}:${Z.floor.level}`;Ue&&B!==mt&&(B=mt,f.hidden=!1,f.innerHTML='<div class="hud-boss-name">GORKO</div><div class="hud-boss-sub">el Sapo Glotón</div>',setTimeout(()=>{f.hidden=!0},2800));const Ye=`${Z.floor.level}:${Z.floor.current}:`+Z.floor.rooms.map(N=>(N.visited?"v":".")+(N.cleared?"c":".")).join("");if(Ye!==H){H=Ye;const N=Z.floor.rooms.filter(Se=>Se.visited),L=new Set;for(const Se of N){L.add(Se.id);for(const Ae of Object.values(Se.doors))Ae>=0&&L.add(Ae)}const A=Z.floor.rooms.filter(Se=>L.has(Se.id)),F=Math.min(...A.map(Se=>Se.gx)),ne=Math.min(...A.map(Se=>Se.gy)),ie={treasure:"♦",shop:"$",boss:"☠"},ce=14;c.innerHTML=A.map(Se=>{const Ae=["hud-map-cell",Se.id===Z.floor.current?"current":"",Se.visited?"visited":"known",Se.cleared?"cleared":""].filter(Boolean).join(" "),T=Se.visited||Se.kind!=="boss"?ie[Se.kind]??"":ie.boss;return`<div class="${Ae}" style="left:${(Se.gx-F)*ce}px;top:${(Se.gy-ne)*ce}px">${T}</div>`}).join("");const ye=(Math.max(...A.map(Se=>Se.gx))-F+1)*ce,D=(Math.max(...A.map(Se=>Se.gy))-ne+1)*ce;c.style.width=`${ye}px`,c.style.height=`${D}px`}const rt=Z.seed*10+Z.floor.level;rt!==C&&(C=rt,S.textContent=`seed ${Z.seed} · nivel ${Z.floor.level} · sim v${e}`)},onEvents(Z){for(const de of Z)if(de.type==="proc_triggered"&&de.efecto==="critico")ee("¡Crítico!");else if(de.type==="usable_activated"){const he=Li.get(de.itemId);ee(`¡${he?.nombre??"Usable"}!`)}else de.type==="item_bought"?ee(`Comprado: −${de.price} ◆`,"delta"):de.type==="key_collected"?ee("Llave del tesoro","delta"):de.type==="door_unlocked"&&ee("El tesoro se abre…","delta")}}}const jc={KeyW:"up",ArrowUp:"up",KeyS:"down",ArrowDown:"down",KeyA:"left",ArrowLeft:"left",KeyD:"right",ArrowRight:"right"};function $x(n,e,t){const i=n.live,r=new $f,s=new We,a=new ri(new G(0,1,0),0),o=new G;let l=!1,c=!1,u=!1;window.addEventListener("keydown",h=>{const _=jc[h.code];_?(i[_]=!0,h.preventDefault()):h.code==="Space"?(u=!0,i.use=u||c,h.preventDefault()):h.code==="ShiftLeft"||h.code==="ShiftRight"?i.dash=!0:h.code==="KeyE"?i.interact=!0:h.code==="KeyQ"?i.use2=!0:h.code==="KeyR"&&!h.repeat&&n.reset()}),window.addEventListener("keyup",h=>{const _=jc[h.code];_&&(i[_]=!1),h.code==="Space"&&(u=!1,i.use=u||c),(h.code==="ShiftLeft"||h.code==="ShiftRight")&&(i.dash=!1),h.code==="KeyE"&&(i.interact=!1),h.code==="KeyQ"&&(i.use2=!1)}),window.addEventListener("blur",()=>{i.up=i.down=i.left=i.right=!1,l=c=u=!1,i.fire=i.dash=i.use=i.interact=!1}),e.addEventListener("contextmenu",h=>h.preventDefault());function f(h){const _=e.getBoundingClientRect();_.width===0||_.height===0||(s.set((h.clientX-_.left)/_.width*2-1,-((h.clientY-_.top)/_.height)*2+1),r.setFromCamera(s,t),r.ray.intersectPlane(a,o)&&(i.aimX=o.x,i.aimY=o.z))}const d=()=>document.body.classList.contains("touch-mode");window.addEventListener("pointermove",h=>{d()||f(h)}),window.addEventListener("pointerdown",h=>{d()||(h.button===0?(l=!0,i.fire=!0,f(h)):h.button===2&&(c=!0,i.use=u||c))}),window.addEventListener("pointerup",h=>{d()||(h.button===0?(l=!1,i.fire=l):h.button===2&&(c=!1,i.use=u||c))})}const Kx=[[3.5,1],[st-3.5,1]],Fa=1;function Zx(n){n.add(new Xf(16767398,.55));const e=Kx.map(([i,r])=>{const s=new jl(Be.torch,12,11,2);s.position.set(i,Fa,r+.35),n.add(s);const a=new ii(new kn({map:Jx(),blending:ka,depthWrite:!1}));return a.position.set(i,Fa+.08,r+.18),a.scale.set(.32,.5,1),n.add(a),{light:s,flame:a,baseY:Fa}}),t=new jl(Be.shine,3.2,5,2);return t.position.set(3.5,.7,nt/2),n.add(t),{update(i){const r=.8+.2*Math.sin(i.tick*.31)*Math.sin(i.tick*.13);for(const a of e)a.light.intensity=12*r,a.flame.scale.set(.32,.5*(.85+.3*r),1),a.flame.position.y=a.baseY+.08+.02*r;const s=i.player;if(t.position.set(s.x,.7,s.y),i.status==="dead"){const a=i.tick-s.deathTick;t.intensity=Math.floor(a/14)%2===0?1.8:.6}else t.intensity=3.2}}}function Jx(){const[n,e]=Ft(16,24),t=e.createRadialGradient(8,14,1,8,14,10);return t.addColorStop(0,at(Be.torchBright)),t.addColorStop(.45,at(Be.torch)),t.addColorStop(1,"rgba(232,161,60,0)"),e.fillStyle=t,e.fillRect(0,0,16,24),e.fillStyle=at(Be.torch),e.beginPath(),e.moveTo(8,2),e.quadraticCurveTo(12,10,8,16),e.quadraticCurveTo(4,10,8,2),e.fill(),e.fillStyle=at(Be.torchBright),e.beginPath(),e.ellipse(8,13,2.4,4,0,0,Math.PI*2),e.fill(),Ot(n)}const Qx={1:16777215,2:15919832,3:13625544,4:15519936,5:12563672},ed=40,jx=55,Oa=1.15,ev=1.45,tv=1.9,td=.1,nd=.6,nv=1.15,iv=.9,rv=.45;function sv(){const n=new Mf;n.background=new je(Be.dungeonBg);const e=new el(Be.dungeonBg,14,30);n.fog=e;const t=av(n),i=new G(st/2,0,nt/2),r=new Jt(ed,1,.1,100),s=new G,a=Pl.degToRad(jx),o=new G(i.x,0,i.z);let l=20,c=st/2,u=nt/2,f=960,d=576,h=!1;function _(){s.set(o.x,l*Math.sin(a),o.z+l*Math.cos(a)),r.position.copy(s),r.lookAt(o)}function b(S,I){f=S,d=I,r.aspect=S/Math.max(1,I);const x=Math.tan(Pl.degToRad(ed/2)),w=x*r.aspect,E=(st/2+Oa)/w,C=(nt/2+Oa)*Math.sin(a)/x+(nt/2+Oa)*Math.cos(a);h=document.body.classList.contains("touch-mode"),l=Math.max(E,C)/(h?tv:ev),c=w*l,u=x*l/Math.sin(a),e.near=l-2,e.far=l+15,_(),r.updateProjectionMatrix()}function m(S,I,x){const w=I-nd,E=x-I+nd;return w>=E?x/2:Math.min(E,Math.max(w,S))}function p(S){document.body.classList.contains("touch-mode")!==h&&b(f,d);const I=m(S.player.x,c,st),x=m(S.player.y,u,nt);o.x+=(I-o.x)*td,o.z+=(x-o.z)*td,_()}return{scene:n,camera:r,center:i,cameraHome:s,resize:b,updateRoom:S=>{t.update(S),p(S)}}}function av(n){const e=st-2,t=nt-2,i=_x(e,t),r=new sr({map:i.texture,roughness:.92,metalness:0}),s=new Ut(new qn(e,t),r);s.rotation.x=-Math.PI/2,s.position.set(st/2,0,nt/2),n.add(s);const a=new sr({map:xx(15,2),roughness:1,metalness:0}),o=new sr({map:Qd(3,1),roughness:1,metalness:0,color:12167312}),l=new sr({color:1511434,roughness:.6}),c=new sr({color:13211950,roughness:.35,metalness:.4}),u=new Ai({map:vx(),transparent:!0}),f=new Ai({color:Be.torch}),d=new ar;n.add(d);const h=[];let _=null,b="";function m(){for(const x of[...d.children])d.remove(x),x.traverse(w=>{w instanceof Ut&&w.geometry.dispose()});h.length=0,_=null}function p(x,w,E,C,v,M){const P=new Ut(new Ii(x,w,E),M);return P.position.set(C,w/2,v),d.add(P),P}function S(x,w){const E=x==="n"?nv:x==="s"?rv:iv,C=x==="n"||x==="s",v=x==="n"?.5:nt-.5,M=x==="w"?.5:st-.5,P=C?st/2:nt/2,R=C?st:nt-2,U=C?0:1;if(!w){C?p(R,E,1,st/2,v,a):p(1,E,R,M,nt/2,a);return}const H=P-Tn-U,Y=U+R-(P+Tn);C?(p(H,E,1,U+H/2,v,a),p(Y,E,1,P+Tn+Y/2,v,a),h.push({side:x,mesh:p(Tn*2,E*.8,.4,P,v,l)})):(p(1,E,H,M,U+H/2,a),p(1,E,Y,M,P+Tn+Y/2,a),h.push({side:x,mesh:p(.4,E*.8,Tn*2,M,P,l)}))}function I(x){m();const w=x.floor.rooms[x.floor.current],E=Qx[x.floor.level]??16777215;r.color.setHex(E),a.color.setHex(E),i.repaint(w.seed),S("n",w.doors.n>=0),S("s",w.doors.s>=0),S("e",w.doors.e>=0),S("w",w.doors.w>=0);for(const C of x.obstacles)C.invisible||p(C.w,.55,C.h,C.x+C.w/2,C.y+C.h/2,o);if(w.kind==="boss"){const C=new ar,v=new Ut(new qn(1.1,1.1),u);v.rotation.x=-Math.PI/2,v.position.set(st/2,.012,nt/2);const M=new Ut(new il(.62,.72,20),f);M.rotation.x=-Math.PI/2,M.position.set(st/2,.013,nt/2),C.add(v,M),C.visible=!1,d.add(C),_=C}}return{update(x){const w=`${x.seed}:${x.floor.level}:${x.floor.current}`;w!==b&&(b=w,I(x));const E=x.floor.rooms[x.floor.current];for(const C of h){const v=E.doors[C.side],M=v>=0&&x.floor.rooms[v].locked;C.mesh.visible=!E.cleared||M,C.mesh.material=M&&E.cleared?c:l}_&&(_.visible=x.floor.trapdoorOpen)}}}function ov(n,e){const t=ax(),i=rx(e,Bo(t));nx(i,Is);const r=new W0({antialias:!1});r.setPixelRatio(1),n.appendChild(r.domElement);const s=sv(),a=Zx(s.scene),o=Dx(s.scene,px());$x(i,r.domElement,s.camera);const l=Yx(n,Is,()=>i.telemetry),c=hx(i,s),u=cx(n),f=dx(n,i,t,Is);let d=null;function h(p){if(p&&!d&&(d=fx(n,i)),document.body.classList.toggle("touch-mode",p),!p){const S=i.live;S.left=S.right=S.up=S.down=S.fire=!1}}ux()?h(!0):new URLSearchParams(location.search).get("touch")!=="0"&&(window.addEventListener("touchstart",()=>h(!0)),window.addEventListener("pointermove",p=>{p.pointerType==="mouse"&&document.body.classList.contains("touch-mode")&&h(!1)}));function _(){const p=n.clientWidth||960,S=n.clientHeight||576;r.setSize(p,S),s.resize(p,S)}new ResizeObserver(_).observe(n),_();let b=performance.now();function m(p){const S=p-b;b=p;const I=i.frame(S);c.onEvents(I),l.onEvents(I),u.onEvents(I),s.updateRoom(i.sim.state),a.update(i.sim.state),o.update(i.sim.state),l.update(i.sim.state),f.update(i.sim.state),u.update(i.sim.state),d?.update(i.sim.state),c.update(S,s.camera),r.render(s.scene,s.camera),requestAnimationFrame(m)}requestAnimationFrame(m)}const lv=new URLSearchParams(location.search),id=lv.get("seed"),eu=id!==null?Number(id)>>>0:Date.now()>>>0;ov(document.getElementById("game"),eu);console.info(`%cKai · Fase 0.5 · seed=${eu} · API de tester en window.__game`,"color:#e8a13c");
