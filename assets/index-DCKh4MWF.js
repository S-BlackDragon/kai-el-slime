(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Uo="185",Qd=0,_l=1,jd=2,Ms=1,eu=2,Lr=3,ai=0,$t=1,On=2,Bn=0,rr=1,Da=2,xl=3,vl=4,tu=5,xi=100,nu=101,iu=102,ru=103,su=104,au=200,ou=201,lu=202,cu=203,Ua=204,Na=205,du=206,uu=207,fu=208,hu=209,pu=210,mu=211,gu=212,_u=213,xu=214,Fa=0,Oa=1,ka=2,cr=3,Ba=4,za=5,Ha=6,Ga=7,Qc=0,vu=1,Mu=2,wn=0,jc=1,ed=2,td=3,nd=4,id=5,rd=6,sd=7,ad=300,bi=301,dr=302,Vs=303,Ws=304,Os=306,Va=1e3,kn=1001,Wa=1002,At=1003,Su=1004,Wr=1005,Rt=1006,Xs=1007,Si=1008,jt=1009,od=1010,ld=1011,Fr=1012,No=1013,Cn=1014,Tn=1015,Gn=1016,Fo=1017,Oo=1018,Or=1020,cd=35902,dd=35899,ud=1021,fd=1022,hn=1023,Vn=1026,yi=1027,hd=1028,ko=1029,Ei=1030,Bo=1031,zo=1033,Ss=33776,ys=33777,bs=33778,Es=33779,Xa=35840,Ya=35841,qa=35842,$a=35843,Ka=36196,Za=37492,Ja=37496,Qa=37488,ja=37489,Rs=37490,eo=37491,to=37808,no=37809,io=37810,ro=37811,so=37812,ao=37813,oo=37814,lo=37815,co=37816,uo=37817,fo=37818,ho=37819,po=37820,mo=37821,go=36492,_o=36494,xo=36495,vo=36283,Mo=36284,Cs=36285,So=36286,yu=3200,yo=0,bu=1,ti="",qt="srgb",Ps="srgb-linear",Is="linear",dt="srgb",Li=7680,Ml=519,Eu=512,Tu=513,Au=514,Ho=515,wu=516,Ru=517,Go=518,Cu=519,bo=35044,Sl="300 es",An=2e3,kr=2001;function Pu(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Br(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Iu(){const n=Br("canvas");return n.style.display="block",n}const yl={};function Ls(...n){const e="THREE."+n.shift();console.log(e,...n)}function pd(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function He(...n){n=pd(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function nt(...n){n=pd(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function sr(...n){const e=n.join(" ");e in yl||(yl[e]=!0,He(...n))}function Lu(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}const Du={[Fa]:Oa,[ka]:Ha,[Ba]:Ga,[cr]:za,[Oa]:Fa,[Ha]:ka,[Ga]:Ba,[za]:cr};class Ri{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Ot=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let bl=1234567;const Ur=Math.PI/180,zr=180/Math.PI;function zn(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ot[n&255]+Ot[n>>8&255]+Ot[n>>16&255]+Ot[n>>24&255]+"-"+Ot[e&255]+Ot[e>>8&255]+"-"+Ot[e>>16&15|64]+Ot[e>>24&255]+"-"+Ot[t&63|128]+Ot[t>>8&255]+"-"+Ot[t>>16&255]+Ot[t>>24&255]+Ot[i&255]+Ot[i>>8&255]+Ot[i>>16&255]+Ot[i>>24&255]).toLowerCase()}function et(n,e,t){return Math.max(e,Math.min(t,n))}function Vo(n,e){return(n%e+e)%e}function Uu(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function Nu(n,e,t){return n!==e?(t-n)/(e-n):0}function Nr(n,e,t){return(1-t)*n+t*e}function Fu(n,e,t,i){return Nr(n,e,1-Math.exp(-t*i))}function Ou(n,e=1){return e-Math.abs(Vo(n,e*2)-e)}function ku(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Bu(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function zu(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Hu(n,e){return n+Math.random()*(e-n)}function Gu(n){return n*(.5-Math.random())}function Vu(n){n!==void 0&&(bl=n);let e=bl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Wu(n){return n*Ur}function Xu(n){return n*zr}function Yu(n){return(n&n-1)===0&&n!==0}function qu(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function $u(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Ku(n,e,t,i,r){const s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+i)/2),u=a((e+i)/2),f=s((e-i)/2),d=a((e-i)/2),h=s((i-e)/2),_=a((i-e)/2);switch(r){case"XYX":n.set(o*u,l*f,l*d,o*c);break;case"YZY":n.set(l*d,o*u,l*f,o*c);break;case"ZXZ":n.set(l*f,l*d,o*u,o*c);break;case"XZX":n.set(o*u,l*_,l*h,o*c);break;case"YXY":n.set(l*h,o*u,l*_,o*c);break;case"ZYZ":n.set(l*_,l*h,o*u,o*c);break;default:He("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function fn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ut(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const El={DEG2RAD:Ur,RAD2DEG:zr,generateUUID:zn,clamp:et,euclideanModulo:Vo,mapLinear:Uu,inverseLerp:Nu,lerp:Nr,damp:Fu,pingpong:Ou,smoothstep:ku,smootherstep:Bu,randInt:zu,randFloat:Hu,randFloatSpread:Gu,seededRandom:Vu,degToRad:Wu,radToDeg:Xu,isPowerOfTwo:Yu,ceilPowerOfTwo:qu,floorPowerOfTwo:$u,setQuaternionFromProperEuler:Ku,normalize:ut,denormalize:fn},il=class il{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(et(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(et(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};il.prototype.isVector2=!0;let Ye=il;class pr{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3],d=s[a+0],h=s[a+1],_=s[a+2],S=s[a+3];if(f!==S||l!==d||c!==h||u!==_){let m=l*d+c*h+u*_+f*S;m<0&&(d=-d,h=-h,_=-_,S=-S,m=-m);let p=1-o;if(m<.9995){const A=Math.acos(m),w=Math.sin(A);p=Math.sin(p*A)/w,o=Math.sin(o*A)/w,l=l*p+d*o,c=c*p+h*o,u=u*p+_*o,f=f*p+S*o}else{l=l*p+d*o,c=c*p+h*o,u=u*p+_*o,f=f*p+S*o;const A=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=A,c*=A,u*=A,f*=A}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[a],d=s[a+1],h=s[a+2],_=s[a+3];return e[t]=o*_+u*f+l*h-c*d,e[t+1]=l*_+u*d+c*f-o*h,e[t+2]=c*_+u*h+o*d-l*f,e[t+3]=u*_-o*f-l*d-c*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(r/2),f=o(s/2),d=l(i/2),h=l(r/2),_=l(s/2);switch(a){case"XYZ":this._x=d*u*f+c*h*_,this._y=c*h*f-d*u*_,this._z=c*u*_+d*h*f,this._w=c*u*f-d*h*_;break;case"YXZ":this._x=d*u*f+c*h*_,this._y=c*h*f-d*u*_,this._z=c*u*_-d*h*f,this._w=c*u*f+d*h*_;break;case"ZXY":this._x=d*u*f-c*h*_,this._y=c*h*f+d*u*_,this._z=c*u*_+d*h*f,this._w=c*u*f-d*h*_;break;case"ZYX":this._x=d*u*f-c*h*_,this._y=c*h*f+d*u*_,this._z=c*u*_-d*h*f,this._w=c*u*f+d*h*_;break;case"YZX":this._x=d*u*f+c*h*_,this._y=c*h*f+d*u*_,this._z=c*u*_-d*h*f,this._w=c*u*f-d*h*_;break;case"XZY":this._x=d*u*f-c*h*_,this._y=c*h*f-d*u*_,this._z=c*u*_+d*h*f,this._w=c*u*f+d*h*_;break;default:He("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],f=t[10],d=i+o+f;if(d>0){const h=.5/Math.sqrt(d+1);this._w=.25/h,this._x=(u-l)*h,this._y=(s-c)*h,this._z=(a-r)*h}else if(i>o&&i>f){const h=2*Math.sqrt(1+i-o-f);this._w=(u-l)/h,this._x=.25*h,this._y=(r+a)/h,this._z=(s+c)/h}else if(o>f){const h=2*Math.sqrt(1+o-i-f);this._w=(s-c)/h,this._x=(r+a)/h,this._y=.25*h,this._z=(l+u)/h}else{const h=2*Math.sqrt(1+f-i-o);this._w=(a-r)/h,this._x=(s+c)/h,this._y=(l+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(et(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-i*c,this._z=s*u+a*c+i*l-r*o,this._w=a*u-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const rl=class rl{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Tl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Tl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),u=2*(o*t-s*r),f=2*(s*i-a*t);return this.x=t+l*c+a*f-o*u,this.y=i+l*u+o*c-s*f,this.z=r+l*f+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this.z=et(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this.z=et(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(et(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ys.copy(this).projectOnVector(e),this.sub(Ys)}reflect(e){return this.sub(Ys.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(et(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};rl.prototype.isVector3=!0;let z=rl;const Ys=new z,Tl=new pr,sl=class sl{constructor(e,t,i,r,s,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c)}set(e,t,i,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],f=i[7],d=i[2],h=i[5],_=i[8],S=r[0],m=r[3],p=r[6],A=r[1],w=r[4],v=r[7],E=r[2],b=r[5],C=r[8];return s[0]=a*S+o*A+l*E,s[3]=a*m+o*w+l*b,s[6]=a*p+o*v+l*C,s[1]=c*S+u*A+f*E,s[4]=c*m+u*w+f*b,s[7]=c*p+u*v+f*C,s[2]=d*S+h*A+_*E,s[5]=d*m+h*w+_*b,s[8]=d*p+h*v+_*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-i*s*u+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=u*a-o*c,d=o*l-u*s,h=c*s-a*l,_=t*f+i*d+r*h;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/_;return e[0]=f*S,e[1]=(r*c-u*i)*S,e[2]=(o*i-r*a)*S,e[3]=d*S,e[4]=(u*t-r*l)*S,e[5]=(r*s-o*t)*S,e[6]=h*S,e[7]=(i*l-c*t)*S,e[8]=(a*t-i*s)*S,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return sr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(qs.makeScale(e,t)),this}rotate(e){return sr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(qs.makeRotation(-e)),this}translate(e,t){return sr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(qs.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};sl.prototype.isMatrix3=!0;let Xe=sl;const qs=new Xe,Al=new Xe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),wl=new Xe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Zu(){const n={enabled:!0,workingColorSpace:Ps,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===dt&&(r.r=Hn(r.r),r.g=Hn(r.g),r.b=Hn(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===dt&&(r.r=ar(r.r),r.g=ar(r.g),r.b=ar(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===ti?Is:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return sr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return sr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Ps]:{primaries:e,whitePoint:i,transfer:Is,toXYZ:Al,fromXYZ:wl,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:qt},outputColorSpaceConfig:{drawingBufferColorSpace:qt}},[qt]:{primaries:e,whitePoint:i,transfer:dt,toXYZ:Al,fromXYZ:wl,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:qt}}}),n}const it=Zu();function Hn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ar(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Di;class Ju{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Di===void 0&&(Di=Br("canvas")),Di.width=e.width,Di.height=e.height;const r=Di.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Di}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Br("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Hn(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Hn(t[i]/255)*255):t[i]=Hn(t[i]);return{data:t,width:e.width,height:e.height}}else return He("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Qu=0;class Wo{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Qu++}),this.uuid=zn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push($s(r[a].image)):s.push($s(r[a]))}else s=$s(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function $s(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Ju.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(He("Texture: Unable to serialize Texture."),{})}let ju=0;const Ks=new z;class Nt extends Ri{constructor(e=Nt.DEFAULT_IMAGE,t=Nt.DEFAULT_MAPPING,i=kn,r=kn,s=Rt,a=Si,o=hn,l=jt,c=Nt.DEFAULT_ANISOTROPY,u=ti){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ju++}),this.uuid=zn(),this.name="",this.source=new Wo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ye(0,0),this.repeat=new Ye(1,1),this.center=new Ye(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Ks).x}get height(){return this.source.getSize(Ks).y}get depth(){return this.source.getSize(Ks).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){He(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){He(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ad)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Va:e.x=e.x-Math.floor(e.x);break;case kn:e.x=e.x<0?0:1;break;case Wa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Va:e.y=e.y-Math.floor(e.y);break;case kn:e.y=e.y<0?0:1;break;case Wa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Nt.DEFAULT_IMAGE=null;Nt.DEFAULT_MAPPING=ad;Nt.DEFAULT_ANISOTROPY=1;const al=class al{constructor(e=0,t=0,i=0,r=1){this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],d=l[1],h=l[5],_=l[9],S=l[2],m=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-S)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+S)<.1&&Math.abs(_+m)<.1&&Math.abs(c+h+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const w=(c+1)/2,v=(h+1)/2,E=(p+1)/2,b=(u+d)/4,C=(f+S)/4,x=(_+m)/4;return w>v&&w>E?w<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(w),r=b/i,s=C/i):v>E?v<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(v),i=b/r,s=x/r):E<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(E),i=C/s,r=x/s),this.set(i,r,s,t),this}let A=Math.sqrt((m-_)*(m-_)+(f-S)*(f-S)+(d-u)*(d-u));return Math.abs(A)<.001&&(A=1),this.x=(m-_)/A,this.y=(f-S)/A,this.z=(d-u)/A,this.w=Math.acos((c+h+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this.z=et(this.z,e.z,t.z),this.w=et(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this.z=et(this.z,e,t),this.w=et(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(et(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};al.prototype.isVector4=!0;let St=al;class ef extends Ri{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Rt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new St(0,0,e,t),this.scissorTest=!1,this.viewport=new St(0,0,e,t),this.textures=[];const r={width:e,height:t,depth:i.depth},s=new Nt(r),a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Rt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Wo(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Rn extends ef{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class md extends Nt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=At,this.minFilter=At,this.wrapR=kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class tf extends Nt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=At,this.minFilter=At,this.wrapR=kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Fs=class Fs{constructor(e,t,i,r,s,a,o,l,c,u,f,d,h,_,S,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c,u,f,d,h,_,S,m)}set(e,t,i,r,s,a,o,l,c,u,f,d,h,_,S,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=s,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=f,p[14]=d,p[3]=h,p[7]=_,p[11]=S,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Fs().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,i=e.elements,r=1/Ui.setFromMatrixColumn(e,0).length(),s=1/Ui.setFromMatrixColumn(e,1).length(),a=1/Ui.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=a*u,h=a*f,_=o*u,S=o*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=h+_*c,t[5]=d-S*c,t[9]=-o*l,t[2]=S-d*c,t[6]=_+h*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*u,h=l*f,_=c*u,S=c*f;t[0]=d+S*o,t[4]=_*o-h,t[8]=a*c,t[1]=a*f,t[5]=a*u,t[9]=-o,t[2]=h*o-_,t[6]=S+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*u,h=l*f,_=c*u,S=c*f;t[0]=d-S*o,t[4]=-a*f,t[8]=_+h*o,t[1]=h+_*o,t[5]=a*u,t[9]=S-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*u,h=a*f,_=o*u,S=o*f;t[0]=l*u,t[4]=_*c-h,t[8]=d*c+S,t[1]=l*f,t[5]=S*c+d,t[9]=h*c-_,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,h=a*c,_=o*l,S=o*c;t[0]=l*u,t[4]=S-d*f,t[8]=_*f+h,t[1]=f,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=h*f+_,t[10]=d-S*f}else if(e.order==="XZY"){const d=a*l,h=a*c,_=o*l,S=o*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=d*f+S,t[5]=a*u,t[9]=h*f-_,t[2]=_*f-h,t[6]=o*u,t[10]=S*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(nf,e,rf)}lookAt(e,t,i){const r=this.elements;return Zt.subVectors(e,t),Zt.lengthSq()===0&&(Zt.z=1),Zt.normalize(),qn.crossVectors(i,Zt),qn.lengthSq()===0&&(Math.abs(i.z)===1?Zt.x+=1e-4:Zt.z+=1e-4,Zt.normalize(),qn.crossVectors(i,Zt)),qn.normalize(),Xr.crossVectors(Zt,qn),r[0]=qn.x,r[4]=Xr.x,r[8]=Zt.x,r[1]=qn.y,r[5]=Xr.y,r[9]=Zt.y,r[2]=qn.z,r[6]=Xr.z,r[10]=Zt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],f=i[5],d=i[9],h=i[13],_=i[2],S=i[6],m=i[10],p=i[14],A=i[3],w=i[7],v=i[11],E=i[15],b=r[0],C=r[4],x=r[8],y=r[12],I=r[1],P=r[5],F=r[9],$=r[13],ie=r[2],H=r[6],j=r[10],X=r[14],te=r[3],oe=r[7],Z=r[11],de=r[15];return s[0]=a*b+o*I+l*ie+c*te,s[4]=a*C+o*P+l*H+c*oe,s[8]=a*x+o*F+l*j+c*Z,s[12]=a*y+o*$+l*X+c*de,s[1]=u*b+f*I+d*ie+h*te,s[5]=u*C+f*P+d*H+h*oe,s[9]=u*x+f*F+d*j+h*Z,s[13]=u*y+f*$+d*X+h*de,s[2]=_*b+S*I+m*ie+p*te,s[6]=_*C+S*P+m*H+p*oe,s[10]=_*x+S*F+m*j+p*Z,s[14]=_*y+S*$+m*X+p*de,s[3]=A*b+w*I+v*ie+E*te,s[7]=A*C+w*P+v*H+E*oe,s[11]=A*x+w*F+v*j+E*Z,s[15]=A*y+w*$+v*X+E*de,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],f=e[6],d=e[10],h=e[14],_=e[3],S=e[7],m=e[11],p=e[15],A=l*h-c*d,w=o*h-c*f,v=o*d-l*f,E=a*h-c*u,b=a*d-l*u,C=a*f-o*u;return t*(S*A-m*w+p*v)-i*(_*A-m*E+p*b)+r*(_*w-S*E+p*C)-s*(_*v-S*b+m*C)}determinantAffine(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[1],a=e[5],o=e[9],l=e[2],c=e[6],u=e[10];return t*(a*u-o*c)-i*(s*u-o*l)+r*(s*c-a*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=e[9],d=e[10],h=e[11],_=e[12],S=e[13],m=e[14],p=e[15],A=t*o-i*a,w=t*l-r*a,v=t*c-s*a,E=i*l-r*o,b=i*c-s*o,C=r*c-s*l,x=u*S-f*_,y=u*m-d*_,I=u*p-h*_,P=f*m-d*S,F=f*p-h*S,$=d*p-h*m,ie=A*$-w*F+v*P+E*I-b*y+C*x;if(ie===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const H=1/ie;return e[0]=(o*$-l*F+c*P)*H,e[1]=(r*F-i*$-s*P)*H,e[2]=(S*C-m*b+p*E)*H,e[3]=(d*b-f*C-h*E)*H,e[4]=(l*I-a*$-c*y)*H,e[5]=(t*$-r*I+s*y)*H,e[6]=(m*v-_*C-p*w)*H,e[7]=(u*C-d*v+h*w)*H,e[8]=(a*F-o*I+c*x)*H,e[9]=(i*I-t*F-s*x)*H,e[10]=(_*b-S*v+p*A)*H,e[11]=(f*v-u*b-h*A)*H,e[12]=(o*y-a*P-l*x)*H,e[13]=(t*P-i*y+r*x)*H,e[14]=(S*w-_*E-m*A)*H,e[15]=(u*E-f*w+d*A)*H,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+i,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,f=o+o,d=s*c,h=s*u,_=s*f,S=a*u,m=a*f,p=o*f,A=l*c,w=l*u,v=l*f,E=i.x,b=i.y,C=i.z;return r[0]=(1-(S+p))*E,r[1]=(h+v)*E,r[2]=(_-w)*E,r[3]=0,r[4]=(h-v)*b,r[5]=(1-(d+p))*b,r[6]=(m+A)*b,r[7]=0,r[8]=(_+w)*C,r[9]=(m-A)*C,r[10]=(1-(d+S))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinantAffine();if(s===0)return i.set(1,1,1),t.identity(),this;let a=Ui.set(r[0],r[1],r[2]).length();const o=Ui.set(r[4],r[5],r[6]).length(),l=Ui.set(r[8],r[9],r[10]).length();s<0&&(a=-a),on.copy(this);const c=1/a,u=1/o,f=1/l;return on.elements[0]*=c,on.elements[1]*=c,on.elements[2]*=c,on.elements[4]*=u,on.elements[5]*=u,on.elements[6]*=u,on.elements[8]*=f,on.elements[9]*=f,on.elements[10]*=f,t.setFromRotationMatrix(on),i.x=a,i.y=o,i.z=l,this}makePerspective(e,t,i,r,s,a,o=An,l=!1){const c=this.elements,u=2*s/(t-e),f=2*s/(i-r),d=(t+e)/(t-e),h=(i+r)/(i-r);let _,S;if(l)_=s/(a-s),S=a*s/(a-s);else if(o===An)_=-(a+s)/(a-s),S=-2*a*s/(a-s);else if(o===kr)_=-a/(a-s),S=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=f,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=S,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=An,l=!1){const c=this.elements,u=2/(t-e),f=2/(i-r),d=-(t+e)/(t-e),h=-(i+r)/(i-r);let _,S;if(l)_=1/(a-s),S=a/(a-s);else if(o===An)_=-2/(a-s),S=-(a+s)/(a-s);else if(o===kr)_=-1/(a-s),S=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=f,c[9]=0,c[13]=h,c[2]=0,c[6]=0,c[10]=_,c[14]=S,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};Fs.prototype.isMatrix4=!0;let Mt=Fs;const Ui=new z,on=new Mt,nf=new z(0,0,0),rf=new z(1,1,1),qn=new z,Xr=new z,Zt=new z,Rl=new Mt,Cl=new pr;class oi{constructor(e=0,t=0,i=0,r=oi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],f=r[2],d=r[6],h=r[10];switch(t){case"XYZ":this._y=Math.asin(et(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-et(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(et(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,h),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-et(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,h),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(et(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,h));break;case"XZY":this._z=Math.asin(-et(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,h),this._y=0);break;default:He("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Rl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Rl,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Cl.setFromEuler(this),this.setFromQuaternion(Cl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}oi.DEFAULT_ORDER="XYZ";class Xo{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let sf=0;const Pl=new z,Ni=new pr,In=new Mt,Yr=new z,vr=new z,af=new z,of=new pr,Il=new z(1,0,0),Ll=new z(0,1,0),Dl=new z(0,0,1),Ul={type:"added"},lf={type:"removed"},Fi={type:"childadded",child:null},Zs={type:"childremoved",child:null};class Vt extends Ri{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:sf++}),this.uuid=zn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Vt.DEFAULT_UP.clone();const e=new z,t=new oi,i=new pr,r=new z(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Mt},normalMatrix:{value:new Xe}}),this.matrix=new Mt,this.matrixWorld=new Mt,this.matrixAutoUpdate=Vt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Xo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ni.setFromAxisAngle(e,t),this.quaternion.multiply(Ni),this}rotateOnWorldAxis(e,t){return Ni.setFromAxisAngle(e,t),this.quaternion.premultiply(Ni),this}rotateX(e){return this.rotateOnAxis(Il,e)}rotateY(e){return this.rotateOnAxis(Ll,e)}rotateZ(e){return this.rotateOnAxis(Dl,e)}translateOnAxis(e,t){return Pl.copy(e).applyQuaternion(this.quaternion),this.position.add(Pl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Il,e)}translateY(e){return this.translateOnAxis(Ll,e)}translateZ(e){return this.translateOnAxis(Dl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(In.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Yr.copy(e):Yr.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),vr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?In.lookAt(vr,Yr,this.up):In.lookAt(Yr,vr,this.up),this.quaternion.setFromRotationMatrix(In),r&&(In.extractRotation(r.matrixWorld),Ni.setFromRotationMatrix(In),this.quaternion.premultiply(Ni.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(nt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ul),Fi.child=e,this.dispatchEvent(Fi),Fi.child=null):nt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(lf),Zs.child=e,this.dispatchEvent(Zs),Zs.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),In.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),In.multiply(e.parent.matrixWorld)),e.applyMatrix4(In),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ul),Fi.child=e,this.dispatchEvent(Fi),Fi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vr,e,af),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vr,of,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*i-s[8]*r,s[13]+=i-s[1]*t-s[5]*i-s[9]*r,s[14]+=r-s[2]*t-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),f=a(e.shapes),d=a(e.skeletons),h=a(e.animations),_=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),h.length>0&&(i.animations=h),_.length>0&&(i.nodes=_)}return i.object=r,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Vt.DEFAULT_UP=new z(0,1,0);Vt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class nr extends Vt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const cf={type:"move"};class Js{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new nr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new nr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new nr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const S of e.hand.values()){const m=t.getJointPose(S,i),p=this._getHandJoint(c,S);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),h=.02,_=.005;c.inputState.pinching&&d>h+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=h-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(cf)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new nr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const gd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$n={h:0,s:0,l:0},qr={h:0,s:0,l:0};function Qs(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class tt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=qt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,it.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=it.workingColorSpace){return this.r=e,this.g=t,this.b=i,it.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=it.workingColorSpace){if(e=Vo(e,1),t=et(t,0,1),i=et(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=Qs(a,s,e+1/3),this.g=Qs(a,s,e),this.b=Qs(a,s,e-1/3)}return it.colorSpaceToWorking(this,r),this}setStyle(e,t=qt){function i(s){s!==void 0&&parseFloat(s)<1&&He("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:He("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);He("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=qt){const i=gd[e.toLowerCase()];return i!==void 0?this.setHex(i,t):He("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Hn(e.r),this.g=Hn(e.g),this.b=Hn(e.b),this}copyLinearToSRGB(e){return this.r=ar(e.r),this.g=ar(e.g),this.b=ar(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=qt){return it.workingToColorSpace(kt.copy(this),e),Math.round(et(kt.r*255,0,255))*65536+Math.round(et(kt.g*255,0,255))*256+Math.round(et(kt.b*255,0,255))}getHexString(e=qt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=it.workingColorSpace){it.workingToColorSpace(kt.copy(this),t);const i=kt.r,r=kt.g,s=kt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=it.workingColorSpace){return it.workingToColorSpace(kt.copy(this),t),e.r=kt.r,e.g=kt.g,e.b=kt.b,e}getStyle(e=qt){it.workingToColorSpace(kt.copy(this),e);const t=kt.r,i=kt.g,r=kt.b;return e!==qt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL($n),this.setHSL($n.h+e,$n.s+t,$n.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL($n),e.getHSL(qr);const i=Nr($n.h,qr.h,t),r=Nr($n.s,qr.s,t),s=Nr($n.l,qr.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const kt=new tt;tt.NAMES=gd;class Yo{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new tt(e),this.near=t,this.far=i}clone(){return new Yo(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class df extends Vt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new oi,this.environmentIntensity=1,this.environmentRotation=new oi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const ln=new z,Ln=new z,js=new z,Dn=new z,Oi=new z,ki=new z,Nl=new z,ea=new z,ta=new z,na=new z,ia=new St,ra=new St,sa=new St;class rn{constructor(e=new z,t=new z,i=new z){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),ln.subVectors(e,t),r.cross(ln);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){ln.subVectors(r,t),Ln.subVectors(i,t),js.subVectors(e,t);const a=ln.dot(ln),o=ln.dot(Ln),l=ln.dot(js),c=Ln.dot(Ln),u=Ln.dot(js),f=a*c-o*o;if(f===0)return s.set(0,0,0),null;const d=1/f,h=(c*l-o*u)*d,_=(a*u-o*l)*d;return s.set(1-h-_,_,h)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Dn)===null?!1:Dn.x>=0&&Dn.y>=0&&Dn.x+Dn.y<=1}static getInterpolation(e,t,i,r,s,a,o,l){return this.getBarycoord(e,t,i,r,Dn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Dn.x),l.addScaledVector(a,Dn.y),l.addScaledVector(o,Dn.z),l)}static getInterpolatedAttribute(e,t,i,r,s,a){return ia.setScalar(0),ra.setScalar(0),sa.setScalar(0),ia.fromBufferAttribute(e,t),ra.fromBufferAttribute(e,i),sa.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(ia,s.x),a.addScaledVector(ra,s.y),a.addScaledVector(sa,s.z),a}static isFrontFacing(e,t,i,r){return ln.subVectors(i,t),Ln.subVectors(e,t),ln.cross(Ln).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ln.subVectors(this.c,this.b),Ln.subVectors(this.a,this.b),ln.cross(Ln).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return rn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return rn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return rn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return rn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return rn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;Oi.subVectors(r,i),ki.subVectors(s,i),ea.subVectors(e,i);const l=Oi.dot(ea),c=ki.dot(ea);if(l<=0&&c<=0)return t.copy(i);ta.subVectors(e,r);const u=Oi.dot(ta),f=ki.dot(ta);if(u>=0&&f<=u)return t.copy(r);const d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(i).addScaledVector(Oi,a);na.subVectors(e,s);const h=Oi.dot(na),_=ki.dot(na);if(_>=0&&h<=_)return t.copy(s);const S=h*c-l*_;if(S<=0&&c>=0&&_<=0)return o=c/(c-_),t.copy(i).addScaledVector(ki,o);const m=u*_-h*f;if(m<=0&&f-u>=0&&h-_>=0)return Nl.subVectors(s,r),o=(f-u)/(f-u+(h-_)),t.copy(r).addScaledVector(Nl,o);const p=1/(m+S+d);return a=S*p,o=d*p,t.copy(i).addScaledVector(Oi,a).addScaledVector(ki,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Hr{constructor(e=new z(1/0,1/0,1/0),t=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(cn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(cn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=cn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,cn):cn.fromBufferAttribute(s,a),cn.applyMatrix4(e.matrixWorld),this.expandByPoint(cn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),$r.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),$r.copy(i.boundingBox)),$r.applyMatrix4(e.matrixWorld),this.union($r)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,cn),cn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Mr),Kr.subVectors(this.max,Mr),Bi.subVectors(e.a,Mr),zi.subVectors(e.b,Mr),Hi.subVectors(e.c,Mr),Kn.subVectors(zi,Bi),Zn.subVectors(Hi,zi),di.subVectors(Bi,Hi);let t=[0,-Kn.z,Kn.y,0,-Zn.z,Zn.y,0,-di.z,di.y,Kn.z,0,-Kn.x,Zn.z,0,-Zn.x,di.z,0,-di.x,-Kn.y,Kn.x,0,-Zn.y,Zn.x,0,-di.y,di.x,0];return!aa(t,Bi,zi,Hi,Kr)||(t=[1,0,0,0,1,0,0,0,1],!aa(t,Bi,zi,Hi,Kr))?!1:(Zr.crossVectors(Kn,Zn),t=[Zr.x,Zr.y,Zr.z],aa(t,Bi,zi,Hi,Kr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,cn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(cn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Un[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Un[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Un[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Un[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Un[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Un[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Un[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Un[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Un),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Un=[new z,new z,new z,new z,new z,new z,new z,new z],cn=new z,$r=new Hr,Bi=new z,zi=new z,Hi=new z,Kn=new z,Zn=new z,di=new z,Mr=new z,Kr=new z,Zr=new z,ui=new z;function aa(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){ui.fromArray(n,s);const o=r.x*Math.abs(ui.x)+r.y*Math.abs(ui.y)+r.z*Math.abs(ui.z),l=e.dot(ui),c=t.dot(ui),u=i.dot(ui);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const wt=new z,Jr=new Ye;let uf=0;class pn extends Ri{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:uf++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=bo,this.updateRanges=[],this.gpuType=Tn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Jr.fromBufferAttribute(this,t),Jr.applyMatrix3(e),this.setXY(t,Jr.x,Jr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix3(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix4(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.applyNormalMatrix(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.transformDirection(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=fn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=ut(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=fn(t,this.array)),t}setX(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=fn(t,this.array)),t}setY(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=fn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=fn(t,this.array)),t}setW(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=ut(t,this.array),i=ut(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=ut(t,this.array),i=ut(i,this.array),r=ut(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=ut(t,this.array),i=ut(i,this.array),r=ut(r,this.array),s=ut(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==bo&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class _d extends pn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class xd extends pn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Wt extends pn{constructor(e,t,i){super(new Float32Array(e),t,i)}}const ff=new Hr,Sr=new z,oa=new z;class qo{constructor(e=new z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):ff.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Sr.subVectors(e,this.center);const t=Sr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Sr,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(oa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Sr.copy(e.center).add(oa)),this.expandByPoint(Sr.copy(e.center).sub(oa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let hf=0;const tn=new Mt,la=new Vt,Gi=new z,Jt=new Hr,yr=new Hr,Dt=new z;class an extends Ri{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:hf++}),this.uuid=zn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Pu(e)?xd:_d)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Xe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return tn.makeRotationFromQuaternion(e),this.applyMatrix4(tn),this}rotateX(e){return tn.makeRotationX(e),this.applyMatrix4(tn),this}rotateY(e){return tn.makeRotationY(e),this.applyMatrix4(tn),this}rotateZ(e){return tn.makeRotationZ(e),this.applyMatrix4(tn),this}translate(e,t,i){return tn.makeTranslation(e,t,i),this.applyMatrix4(tn),this}scale(e,t,i){return tn.makeScale(e,t,i),this.applyMatrix4(tn),this}lookAt(e){return la.lookAt(e),la.updateMatrix(),this.applyMatrix4(la.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Gi).negate(),this.translate(Gi.x,Gi.y,Gi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Wt(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&He("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Hr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){nt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Jt.setFromBufferAttribute(s),this.morphTargetsRelative?(Dt.addVectors(this.boundingBox.min,Jt.min),this.boundingBox.expandByPoint(Dt),Dt.addVectors(this.boundingBox.max,Jt.max),this.boundingBox.expandByPoint(Dt)):(this.boundingBox.expandByPoint(Jt.min),this.boundingBox.expandByPoint(Jt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&nt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){nt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(e){const i=this.boundingSphere.center;if(Jt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];yr.setFromBufferAttribute(o),this.morphTargetsRelative?(Dt.addVectors(Jt.min,yr.min),Jt.expandByPoint(Dt),Dt.addVectors(Jt.max,yr.max),Jt.expandByPoint(Dt)):(Jt.expandByPoint(yr.min),Jt.expandByPoint(yr.max))}Jt.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Dt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Dt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Dt.fromBufferAttribute(o,c),l&&(Gi.fromBufferAttribute(e,c),Dt.add(Gi)),r=Math.max(r,i.distanceToSquared(Dt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&nt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){nt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new pn(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));const o=[],l=[];for(let x=0;x<i.count;x++)o[x]=new z,l[x]=new z;const c=new z,u=new z,f=new z,d=new Ye,h=new Ye,_=new Ye,S=new z,m=new z;function p(x,y,I){c.fromBufferAttribute(i,x),u.fromBufferAttribute(i,y),f.fromBufferAttribute(i,I),d.fromBufferAttribute(s,x),h.fromBufferAttribute(s,y),_.fromBufferAttribute(s,I),u.sub(c),f.sub(c),h.sub(d),_.sub(d);const P=1/(h.x*_.y-_.x*h.y);isFinite(P)&&(S.copy(u).multiplyScalar(_.y).addScaledVector(f,-h.y).multiplyScalar(P),m.copy(f).multiplyScalar(h.x).addScaledVector(u,-_.x).multiplyScalar(P),o[x].add(S),o[y].add(S),o[I].add(S),l[x].add(m),l[y].add(m),l[I].add(m))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let x=0,y=A.length;x<y;++x){const I=A[x],P=I.start,F=I.count;for(let $=P,ie=P+F;$<ie;$+=3)p(e.getX($+0),e.getX($+1),e.getX($+2))}const w=new z,v=new z,E=new z,b=new z;function C(x){E.fromBufferAttribute(r,x),b.copy(E);const y=o[x];w.copy(y),w.sub(E.multiplyScalar(E.dot(y))).normalize(),v.crossVectors(b,y);const P=v.dot(l[x])<0?-1:1;a.setXYZW(x,w.x,w.y,w.z,P)}for(let x=0,y=A.length;x<y;++x){const I=A[x],P=I.start,F=I.count;for(let $=P,ie=P+F;$<ie;$+=3)C(e.getX($+0)),C(e.getX($+1)),C(e.getX($+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new pn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,h=i.count;d<h;d++)i.setXYZ(d,0,0,0);const r=new z,s=new z,a=new z,o=new z,l=new z,c=new z,u=new z,f=new z;if(e)for(let d=0,h=e.count;d<h;d+=3){const _=e.getX(d+0),S=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,S),a.fromBufferAttribute(t,m),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,S),c.fromBufferAttribute(i,m),o.add(u),l.add(u),c.add(u),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(S,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,h=t.count;d<h;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Dt.fromBufferAttribute(e,t),Dt.normalize(),e.setXYZ(t,Dt.x,Dt.y,Dt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,f=o.normalized,d=new c.constructor(l.length*u);let h=0,_=0;for(let S=0,m=l.length;S<m;S++){o.isInterleavedBufferAttribute?h=l[S]*o.data.stride+o.offset:h=l[S]*u;for(let p=0;p<u;p++)d[_++]=c[h++]}return new pn(d,u,f)}if(this.index===null)return He("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new an,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,f=c.length;u<f;u++){const d=c[u],h=e(d,i);l.push(h)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){const h=c[f];u.push(h.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let d=0,h=f.length;d<h;d++)u.push(f[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class pf{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=bo,this.updateRanges=[],this.version=0,this.uuid=zn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=zn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=zn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Bt=new z;class Ds{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Bt.fromBufferAttribute(this,t),Bt.applyMatrix4(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Bt.fromBufferAttribute(this,t),Bt.applyNormalMatrix(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Bt.fromBufferAttribute(this,t),Bt.transformDirection(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=fn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=ut(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=fn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=fn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=fn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=fn(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=ut(t,this.array),i=ut(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ut(t,this.array),i=ut(i,this.array),r=ut(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=ut(t,this.array),i=ut(i,this.array),r=ut(r,this.array),s=ut(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){Ls("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new pn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Ds(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Ls("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let mf=0;class mr extends Ri{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:mf++}),this.uuid=zn(),this.name="",this.type="Material",this.blending=rr,this.side=ai,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ua,this.blendDst=Na,this.blendEquation=xi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new tt(0,0,0),this.blendAlpha=0,this.depthFunc=cr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ml,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Li,this.stencilZFail=Li,this.stencilZPass=Li,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){He(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){He(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==rr&&(i.blending=this.blending),this.side!==ai&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ua&&(i.blendSrc=this.blendSrc),this.blendDst!==Na&&(i.blendDst=this.blendDst),this.blendEquation!==xi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==cr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ml&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Li&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Li&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Li&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new tt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Ye().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ye().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class ni extends mr{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new tt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Vi;const br=new z,Wi=new z,Xi=new z,Yi=new Ye,Er=new Ye,vd=new Mt,Qr=new z,Tr=new z,jr=new z,Fl=new Ye,ca=new Ye,Ol=new Ye;class vi extends Vt{constructor(e=new ni){if(super(),this.isSprite=!0,this.type="Sprite",Vi===void 0){Vi=new an;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new pf(t,5);Vi.setIndex([0,1,2,0,2,3]),Vi.setAttribute("position",new Ds(i,3,0,!1)),Vi.setAttribute("uv",new Ds(i,2,3,!1))}this.geometry=Vi,this.material=e,this.center=new Ye(.5,.5),this.count=1}raycast(e,t){e.camera===null&&nt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Wi.setFromMatrixScale(this.matrixWorld),vd.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Xi.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Wi.multiplyScalar(-Xi.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const a=this.center;es(Qr.set(-.5,-.5,0),Xi,a,Wi,r,s),es(Tr.set(.5,-.5,0),Xi,a,Wi,r,s),es(jr.set(.5,.5,0),Xi,a,Wi,r,s),Fl.set(0,0),ca.set(1,0),Ol.set(1,1);let o=e.ray.intersectTriangle(Qr,Tr,jr,!1,br);if(o===null&&(es(Tr.set(-.5,.5,0),Xi,a,Wi,r,s),ca.set(0,1),o=e.ray.intersectTriangle(Qr,jr,Tr,!1,br),o===null))return;const l=e.ray.origin.distanceTo(br);l<e.near||l>e.far||t.push({distance:l,point:br.clone(),uv:rn.getInterpolation(br,Qr,Tr,jr,Fl,ca,Ol,new Ye),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function es(n,e,t,i,r,s){Yi.subVectors(n,t).addScalar(.5).multiply(i),r!==void 0?(Er.x=s*Yi.x-r*Yi.y,Er.y=r*Yi.x+s*Yi.y):Er.copy(Yi),n.copy(e),n.x+=Er.x,n.y+=Er.y,n.applyMatrix4(vd)}const Nn=new z,da=new z,ts=new z,Jn=new z,ua=new z,ns=new z,fa=new z;class Md{constructor(e=new z,t=new z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Nn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Nn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Nn.copy(this.origin).addScaledVector(this.direction,t),Nn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){da.copy(e).add(t).multiplyScalar(.5),ts.copy(t).sub(e).normalize(),Jn.copy(this.origin).sub(da);const s=e.distanceTo(t)*.5,a=-this.direction.dot(ts),o=Jn.dot(this.direction),l=-Jn.dot(ts),c=Jn.lengthSq(),u=Math.abs(1-a*a);let f,d,h,_;if(u>0)if(f=a*l-o,d=a*o-l,_=s*u,f>=0)if(d>=-_)if(d<=_){const S=1/u;f*=S,d*=S,h=f*(f+a*d+2*o)+d*(a*f+d+2*l)+c}else d=s,f=Math.max(0,-(a*d+o)),h=-f*f+d*(d+2*l)+c;else d=-s,f=Math.max(0,-(a*d+o)),h=-f*f+d*(d+2*l)+c;else d<=-_?(f=Math.max(0,-(-a*s+o)),d=f>0?-s:Math.min(Math.max(-s,-l),s),h=-f*f+d*(d+2*l)+c):d<=_?(f=0,d=Math.min(Math.max(-s,-l),s),h=d*(d+2*l)+c):(f=Math.max(0,-(a*s+o)),d=f>0?s:Math.min(Math.max(-s,-l),s),h=-f*f+d*(d+2*l)+c);else d=a>0?-s:s,f=Math.max(0,-(a*d+o)),h=-f*f+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(da).addScaledVector(ts,d),h}intersectSphere(e,t){Nn.subVectors(e.center,this.origin);const i=Nn.dot(this.direction),r=Nn.dot(Nn)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(o=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Nn)!==null}intersectTriangle(e,t,i,r,s){ua.subVectors(t,e),ns.subVectors(i,e),fa.crossVectors(ua,ns);let a=this.direction.dot(fa),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Jn.subVectors(this.origin,e);const l=o*this.direction.dot(ns.crossVectors(Jn,ns));if(l<0)return null;const c=o*this.direction.dot(ua.cross(Jn));if(c<0||l+c>a)return null;const u=-o*Jn.dot(fa);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ti extends mr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new oi,this.combine=Qc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const kl=new Mt,fi=new Md,is=new qo,Bl=new z,rs=new z,ss=new z,as=new z,ha=new z,os=new z,zl=new z,ls=new z;class Ut extends Vt{constructor(e=new an,t=new Ti){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){os.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],f=s[l];u!==0&&(ha.fromBufferAttribute(f,e),a?os.addScaledVector(ha,u):os.addScaledVector(ha.sub(t),u))}t.add(os)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),is.copy(i.boundingSphere),is.applyMatrix4(s),fi.copy(e.ray).recast(e.near),!(is.containsPoint(fi.origin)===!1&&(fi.intersectSphere(is,Bl)===null||fi.origin.distanceToSquared(Bl)>(e.far-e.near)**2))&&(kl.copy(s).invert(),fi.copy(e.ray).applyMatrix4(kl),!(i.boundingBox!==null&&fi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,fi)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,d=s.groups,h=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,S=d.length;_<S;_++){const m=d[_],p=a[m.materialIndex],A=Math.max(m.start,h.start),w=Math.min(o.count,Math.min(m.start+m.count,h.start+h.count));for(let v=A,E=w;v<E;v+=3){const b=o.getX(v),C=o.getX(v+1),x=o.getX(v+2);r=cs(this,p,e,i,c,u,f,b,C,x),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const _=Math.max(0,h.start),S=Math.min(o.count,h.start+h.count);for(let m=_,p=S;m<p;m+=3){const A=o.getX(m),w=o.getX(m+1),v=o.getX(m+2);r=cs(this,a,e,i,c,u,f,A,w,v),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,S=d.length;_<S;_++){const m=d[_],p=a[m.materialIndex],A=Math.max(m.start,h.start),w=Math.min(l.count,Math.min(m.start+m.count,h.start+h.count));for(let v=A,E=w;v<E;v+=3){const b=v,C=v+1,x=v+2;r=cs(this,p,e,i,c,u,f,b,C,x),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const _=Math.max(0,h.start),S=Math.min(l.count,h.start+h.count);for(let m=_,p=S;m<p;m+=3){const A=m,w=m+1,v=m+2;r=cs(this,a,e,i,c,u,f,A,w,v),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function gf(n,e,t,i,r,s,a,o){let l;if(e.side===$t?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===ai,o),l===null)return null;ls.copy(o),ls.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(ls);return c<t.near||c>t.far?null:{distance:c,point:ls.clone(),object:n}}function cs(n,e,t,i,r,s,a,o,l,c){n.getVertexPosition(o,rs),n.getVertexPosition(l,ss),n.getVertexPosition(c,as);const u=gf(n,e,t,i,rs,ss,as,zl);if(u){const f=new z;rn.getBarycoord(zl,rs,ss,as,f),r&&(u.uv=rn.getInterpolatedAttribute(r,o,l,c,f,new Ye)),s&&(u.uv1=rn.getInterpolatedAttribute(s,o,l,c,f,new Ye)),a&&(u.normal=rn.getInterpolatedAttribute(a,o,l,c,f,new z),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new z,materialIndex:0};rn.getNormal(rs,ss,as,d.normal),u.face=d,u.barycoord=f}return u}class _f extends Nt{constructor(e=null,t=1,i=1,r,s,a,o,l,c=At,u=At,f,d){super(null,a,o,l,c,u,r,s,f,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const pa=new z,xf=new z,vf=new Xe;class jn{constructor(e=new z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=pa.subVectors(i,t).cross(xf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){const r=e.delta(pa),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||vf.getNormalMatrix(e),r=this.coplanarPoint(pa).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const hi=new qo,Mf=new Ye(.5,.5),ds=new z;class $o{constructor(e=new jn,t=new jn,i=new jn,r=new jn,s=new jn,a=new jn){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=An,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],u=s[4],f=s[5],d=s[6],h=s[7],_=s[8],S=s[9],m=s[10],p=s[11],A=s[12],w=s[13],v=s[14],E=s[15];if(r[0].setComponents(c-a,h-u,p-_,E-A).normalize(),r[1].setComponents(c+a,h+u,p+_,E+A).normalize(),r[2].setComponents(c+o,h+f,p+S,E+w).normalize(),r[3].setComponents(c-o,h-f,p-S,E-w).normalize(),i)r[4].setComponents(l,d,m,v).normalize(),r[5].setComponents(c-l,h-d,p-m,E-v).normalize();else if(r[4].setComponents(c-l,h-d,p-m,E-v).normalize(),t===An)r[5].setComponents(c+l,h+d,p+m,E+v).normalize();else if(t===kr)r[5].setComponents(l,d,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),hi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),hi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(hi)}intersectsSprite(e){hi.center.set(0,0,0);const t=Mf.distanceTo(e.center);return hi.radius=.7071067811865476+t,hi.applyMatrix4(e.matrixWorld),this.intersectsSphere(hi)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(ds.x=r.normal.x>0?e.max.x:e.min.x,ds.y=r.normal.y>0?e.max.y:e.min.y,ds.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ds)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Sd extends Nt{constructor(e=[],t=bi,i,r,s,a,o,l,c,u){super(e,t,i,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Sf extends Nt{constructor(e,t,i,r,s,a,o,l,c){super(e,t,i,r,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ur extends Nt{constructor(e,t,i=Cn,r,s,a,o=At,l=At,c,u=Vn,f=1){if(u!==Vn&&u!==yi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:f};super(d,r,s,a,o,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Wo(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class yf extends ur{constructor(e,t=Cn,i=bi,r,s,a=At,o=At,l,c=Vn){const u={width:e,height:e,depth:1},f=[u,u,u,u,u,u];super(e,e,t,i,r,s,a,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class yd extends Nt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ci extends an{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],f=[];let d=0,h=0;_("z","y","x",-1,-1,i,t,e,a,s,0),_("z","y","x",1,-1,i,t,-e,a,s,1),_("x","z","y",1,1,e,i,t,r,a,2),_("x","z","y",1,-1,e,i,-t,r,a,3),_("x","y","z",1,-1,e,t,i,r,s,4),_("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Wt(c,3)),this.setAttribute("normal",new Wt(u,3)),this.setAttribute("uv",new Wt(f,2));function _(S,m,p,A,w,v,E,b,C,x,y){const I=v/C,P=E/x,F=v/2,$=E/2,ie=b/2,H=C+1,j=x+1;let X=0,te=0;const oe=new z;for(let Z=0;Z<j;Z++){const de=Z*P-$;for(let he=0;he<H;he++){const Ke=he*I-F;oe[S]=Ke*A,oe[m]=de*w,oe[p]=ie,c.push(oe.x,oe.y,oe.z),oe[S]=0,oe[m]=0,oe[p]=b>0?1:-1,u.push(oe.x,oe.y,oe.z),f.push(he/C),f.push(1-Z/x),X+=1}}for(let Z=0;Z<x;Z++)for(let de=0;de<C;de++){const he=d+de+H*Z,Ke=d+de+H*(Z+1),st=d+(de+1)+H*(Z+1),Oe=d+(de+1)+H*Z;l.push(he,Ke,Oe),l.push(Ke,st,Oe),te+=6}o.addGroup(h,te,y),h+=te,d+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ci(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Ko extends an{constructor(e=1,t=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:r},t=Math.max(3,t);const s=[],a=[],o=[],l=[],c=new z,u=new Ye;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let f=0,d=3;f<=t;f++,d+=3){const h=i+f/t*r;c.x=e*Math.cos(h),c.y=e*Math.sin(h),a.push(c.x,c.y,c.z),o.push(0,0,1),u.x=(a[d]/e+1)/2,u.y=(a[d+1]/e+1)/2,l.push(u.x,u.y)}for(let f=1;f<=t;f++)s.push(f,f+1,0);this.setIndex(s),this.setAttribute("position",new Wt(a,3)),this.setAttribute("normal",new Wt(o,3)),this.setAttribute("uv",new Wt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ko(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class li extends an{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(r),c=o+1,u=l+1,f=e/o,d=t/l,h=[],_=[],S=[],m=[];for(let p=0;p<u;p++){const A=p*d-a;for(let w=0;w<c;w++){const v=w*f-s;_.push(v,-A,0),S.push(0,0,1),m.push(w/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let A=0;A<o;A++){const w=A+c*p,v=A+c*(p+1),E=A+1+c*(p+1),b=A+1+c*p;h.push(w,v,b),h.push(v,E,b)}this.setIndex(h),this.setAttribute("position",new Wt(_,3)),this.setAttribute("normal",new Wt(S,3)),this.setAttribute("uv",new Wt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new li(e.width,e.height,e.widthSegments,e.heightSegments)}}class Zo extends an{constructor(e=.5,t=1,i=32,r=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:a},i=Math.max(3,i),r=Math.max(1,r);const o=[],l=[],c=[],u=[];let f=e;const d=(t-e)/r,h=new z,_=new Ye;for(let S=0;S<=r;S++){for(let m=0;m<=i;m++){const p=s+m/i*a;h.x=f*Math.cos(p),h.y=f*Math.sin(p),l.push(h.x,h.y,h.z),c.push(0,0,1),_.x=(h.x/t+1)/2,_.y=(h.y/t+1)/2,u.push(_.x,_.y)}f+=d}for(let S=0;S<r;S++){const m=S*(i+1);for(let p=0;p<i;p++){const A=p+m,w=A,v=A+i+1,E=A+i+2,b=A+1;o.push(w,v,b),o.push(v,E,b)}}this.setIndex(o),this.setAttribute("position",new Wt(l,3)),this.setAttribute("normal",new Wt(c,3)),this.setAttribute("uv",new Wt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zo(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}function fr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];if(Hl(r))r.isRenderTargetTexture?(He("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone();else if(Array.isArray(r))if(Hl(r[0])){const s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[t][i]=s}else e[t][i]=r.slice();else e[t][i]=r}}return e}function zt(n){const e={};for(let t=0;t<n.length;t++){const i=fr(n[t]);for(const r in i)e[r]=i[r]}return e}function Hl(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function bf(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function bd(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:it.workingColorSpace}const Ef={clone:fr,merge:zt};var Tf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Af=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Pn extends mr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Tf,this.fragmentShader=Af,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=fr(e.uniforms),this.uniformsGroups=bf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const i in e.uniforms){const r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=t[r.value]||null;break;case"c":this.uniforms[i].value=new tt().setHex(r.value);break;case"v2":this.uniforms[i].value=new Ye().fromArray(r.value);break;case"v3":this.uniforms[i].value=new z().fromArray(r.value);break;case"v4":this.uniforms[i].value=new St().fromArray(r.value);break;case"m3":this.uniforms[i].value=new Xe().fromArray(r.value);break;case"m4":this.uniforms[i].value=new Mt().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class wf extends Pn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class tr extends mr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new tt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new tt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=yo,this.normalScale=new Ye(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new oi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Rf extends mr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=yu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Cf extends mr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const ma={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(Gl(n)||(this.files[n]=e))},get:function(n){if(this.enabled!==!1&&!Gl(n))return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};function Gl(n){try{const e=n.slice(n.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class Pf{constructor(e,t,i){const r=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(u){o++,s===!1&&r.onStart!==void 0&&r.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,r.onProgress!==void 0&&r.onProgress(u,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,d=c.length;f<d;f+=2){const h=c[f],_=c[f+1];if(h.global&&(h.lastIndex=0),h.test(u))return _}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const If=new Pf;class Jo{constructor(e){this.manager=e!==void 0?e:If,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Jo.DEFAULT_MATERIAL_NAME="__DEFAULT";const qi=new WeakMap;class Lf extends Jo{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=ma.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);else{let f=qi.get(a);f===void 0&&(f=[],qi.set(a,f)),f.push({onLoad:t,onError:r})}return a}const o=Br("img");function l(){u(),t&&t(this);const f=qi.get(this)||[];for(let d=0;d<f.length;d++){const h=f[d];h.onLoad&&h.onLoad(this)}qi.delete(this),s.manager.itemEnd(e)}function c(f){u(),r&&r(f),ma.remove(`image:${e}`);const d=qi.get(this)||[];for(let h=0;h<d.length;h++){const _=d[h];_.onError&&_.onError(f)}qi.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),ma.add(`image:${e}`,o),s.manager.itemStart(e),o.src=e,o}}class Df extends Jo{constructor(e){super(e)}load(e,t,i,r){const s=new Nt,a=new Lf(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}}class Ed extends Vt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new tt(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const ga=new Mt,Vl=new z,Wl=new z;class Uf{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ye(512,512),this.mapType=jt,this.map=null,this.mapPass=null,this.matrix=new Mt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new $o,this._frameExtents=new Ye(1,1),this._viewportCount=1,this._viewports=[new St(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Vl.setFromMatrixPosition(e.matrixWorld),t.position.copy(Vl),Wl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Wl),t.updateMatrixWorld(),ga.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ga,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===kr||t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(ga)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const us=new z,fs=new pr,yn=new z;class Td extends Vt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Mt,this.projectionMatrix=new Mt,this.projectionMatrixInverse=new Mt,this.coordinateSystem=An,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(us,fs,yn),yn.x===1&&yn.y===1&&yn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(us,fs,yn.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(us,fs,yn),yn.x===1&&yn.y===1&&yn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(us,fs,yn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Qn=new z,Xl=new Ye,Yl=new Ye;class Qt extends Td{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=zr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ur*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return zr*2*Math.atan(Math.tan(Ur*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Qn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Qn.x,Qn.y).multiplyScalar(-e/Qn.z),Qn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Qn.x,Qn.y).multiplyScalar(-e/Qn.z)}getViewSize(e,t){return this.getViewBounds(e,Xl,Yl),t.subVectors(Yl,Xl)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ur*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Nf extends Uf{constructor(){super(new Qt(90,1,.5,500)),this.isPointLightShadow=!0}}class ql extends Ed{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new Nf}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class Ad extends Td{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Ff extends Ed{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const $i=-90,Ki=1;class Of extends Vt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Qt($i,Ki,e,t);r.layers=this.layers,this.add(r);const s=new Qt($i,Ki,e,t);s.layers=this.layers,this.add(s);const a=new Qt($i,Ki,e,t);a.layers=this.layers,this.add(a);const o=new Qt($i,Ki,e,t);o.layers=this.layers,this.add(o);const l=new Qt($i,Ki,e,t);l.layers=this.layers,this.add(l);const c=new Qt($i,Ki,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===An)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===kr)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const S=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,1,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.generateMipmaps=S,e.setRenderTarget(i,5,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(f,d,h),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class kf extends Qt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const $l=new Mt;class Bf{constructor(e,t,i=0,r=1/0){this.ray=new Md(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new Xo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):nt("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return $l.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4($l),this}intersectObject(e,t=!0,i=[]){return Eo(e,this,i,t),i.sort(Kl),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)Eo(e[r],this,i,t);return i.sort(Kl),i}}function Kl(n,e){return n.distance-e.distance}function Eo(n,e,t,i){let r=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(r=!1),r===!0&&i===!0){const s=n.children;for(let a=0,o=s.length;a<o;a++)Eo(s[a],e,t,!0)}}const ol=class ol{constructor(e,t,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,r){const s=this.elements;return s[0]=e,s[2]=t,s[1]=i,s[3]=r,this}};ol.prototype.isMatrix2=!0;let Zl=ol;function Jl(n,e,t,i){const r=zf(i);switch(t){case ud:return n*e;case hd:return n*e/r.components*r.byteLength;case ko:return n*e/r.components*r.byteLength;case Ei:return n*e*2/r.components*r.byteLength;case Bo:return n*e*2/r.components*r.byteLength;case fd:return n*e*3/r.components*r.byteLength;case hn:return n*e*4/r.components*r.byteLength;case zo:return n*e*4/r.components*r.byteLength;case Ss:case ys:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case bs:case Es:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ya:case $a:return Math.max(n,16)*Math.max(e,8)/4;case Xa:case qa:return Math.max(n,8)*Math.max(e,8)/2;case Ka:case Za:case Qa:case ja:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ja:case Rs:case eo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case to:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case no:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case io:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case ro:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case so:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case ao:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case oo:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case lo:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case co:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case uo:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case fo:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case ho:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case po:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case mo:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case go:case _o:case xo:return Math.ceil(n/4)*Math.ceil(e/4)*16;case vo:case Mo:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Cs:case So:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function zf(n){switch(n){case jt:case od:return{byteLength:1,components:1};case Fr:case ld:case Gn:return{byteLength:2,components:1};case Fo:case Oo:return{byteLength:2,components:4};case Cn:case No:case Tn:return{byteLength:4,components:1};case cd:case dd:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Uo}}));typeof window<"u"&&(window.__THREE__?He("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Uo);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function wd(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Hf(n){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,f=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,u),o.onUploadCallback();let h;if(c instanceof Float32Array)h=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)h=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?h=n.HALF_FLOAT:h=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)h=n.SHORT;else if(c instanceof Uint32Array)h=n.UNSIGNED_INT;else if(c instanceof Int32Array)h=n.INT;else if(c instanceof Int8Array)h=n.BYTE;else if(c instanceof Uint8Array)h=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)h=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:h,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,l,c){const u=l.array,f=l.updateRanges;if(n.bindBuffer(c,o),f.length===0)n.bufferSubData(c,0,u);else{f.sort((h,_)=>h.start-_.start);let d=0;for(let h=1;h<f.length;h++){const _=f[d],S=f[h];S.start<=_.start+_.count+1?_.count=Math.max(_.count,S.start+S.count-_.start):(++d,f[d]=S)}f.length=d+1;for(let h=0,_=f.length;h<_;h++){const S=f[h];n.bufferSubData(c,S.start*u.BYTES_PER_ELEMENT,u,S.start,S.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var Gf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Vf=`#ifdef USE_ALPHAHASH
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
#endif`,Wf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Xf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Yf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,qf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,$f=`#ifdef USE_AOMAP
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
#endif`,Kf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Zf=`#ifdef USE_BATCHING
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
#endif`,Jf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Qf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,jf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,eh=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,th=`#ifdef USE_IRIDESCENCE
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
#endif`,nh=`#ifdef USE_BUMPMAP
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
#endif`,ih=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,rh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,sh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ah=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,oh=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,lh=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,ch=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,dh=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,uh=`#define PI 3.141592653589793
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
} // validated`,fh=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,hh=`vec3 transformedNormal = objectNormal;
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
#endif`,ph=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,mh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,gh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,_h=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,xh="gl_FragColor = linearToOutputTexel( gl_FragColor );",vh=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Mh=`#ifdef USE_ENVMAP
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
#endif`,Sh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,yh=`#ifdef USE_ENVMAP
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
#endif`,bh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Eh=`#ifdef USE_ENVMAP
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
#endif`,Th=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ah=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,wh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Rh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ch=`#ifdef USE_GRADIENTMAP
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
}`,Ph=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ih=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Lh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Dh=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Uh=`#ifdef USE_ENVMAP
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
#endif`,Nh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Fh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Oh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,kh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Bh=`PhysicalMaterial material;
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
#endif`,zh=`uniform sampler2D dfgLUT;
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
}`,Hh=`
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
#endif`,Gh=`#if defined( RE_IndirectDiffuse )
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
#endif`,Vh=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Wh=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Xh=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Yh=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qh=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$h=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Kh=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Zh=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Jh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Qh=`#if defined( USE_POINTS_UV )
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
#endif`,jh=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ep=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,tp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,np=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ip=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rp=`#ifdef USE_MORPHTARGETS
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
#endif`,sp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ap=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,op=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,lp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,up=`#ifdef USE_NORMALMAP
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
#endif`,fp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,hp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,pp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,mp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,gp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,_p=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,xp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,vp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Mp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Sp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,yp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,bp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ep=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Tp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ap=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,wp=`float getShadowMask() {
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
}`,Rp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Cp=`#ifdef USE_SKINNING
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
#endif`,Pp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ip=`#ifdef USE_SKINNING
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
#endif`,Lp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Dp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Up=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Np=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Fp=`#ifdef USE_TRANSMISSION
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
#endif`,Op=`#ifdef USE_TRANSMISSION
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
#endif`,kp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Bp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Hp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Gp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Vp=`uniform sampler2D t2D;
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
}`,Wp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Yp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$p=`#include <common>
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
}`,Kp=`#if DEPTH_PACKING == 3200
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
}`,Zp=`#define DISTANCE
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
}`,Jp=`#define DISTANCE
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
}`,Qp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,jp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,em=`uniform float scale;
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
}`,tm=`uniform vec3 diffuse;
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
}`,nm=`#include <common>
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
}`,im=`uniform vec3 diffuse;
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
}`,rm=`#define LAMBERT
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
}`,sm=`#define LAMBERT
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
}`,am=`#define MATCAP
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
}`,om=`#define MATCAP
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
}`,lm=`#define NORMAL
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
}`,cm=`#define NORMAL
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
}`,dm=`#define PHONG
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
}`,um=`#define PHONG
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
}`,fm=`#define STANDARD
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
}`,hm=`#define STANDARD
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
}`,pm=`#define TOON
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
}`,mm=`#define TOON
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
}`,gm=`uniform float size;
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
}`,_m=`uniform vec3 diffuse;
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
}`,xm=`#include <common>
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
}`,vm=`uniform vec3 color;
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
}`,Mm=`uniform float rotation;
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
}`,Sm=`uniform vec3 diffuse;
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
}`,Ze={alphahash_fragment:Gf,alphahash_pars_fragment:Vf,alphamap_fragment:Wf,alphamap_pars_fragment:Xf,alphatest_fragment:Yf,alphatest_pars_fragment:qf,aomap_fragment:$f,aomap_pars_fragment:Kf,batching_pars_vertex:Zf,batching_vertex:Jf,begin_vertex:Qf,beginnormal_vertex:jf,bsdfs:eh,iridescence_fragment:th,bumpmap_pars_fragment:nh,clipping_planes_fragment:ih,clipping_planes_pars_fragment:rh,clipping_planes_pars_vertex:sh,clipping_planes_vertex:ah,color_fragment:oh,color_pars_fragment:lh,color_pars_vertex:ch,color_vertex:dh,common:uh,cube_uv_reflection_fragment:fh,defaultnormal_vertex:hh,displacementmap_pars_vertex:ph,displacementmap_vertex:mh,emissivemap_fragment:gh,emissivemap_pars_fragment:_h,colorspace_fragment:xh,colorspace_pars_fragment:vh,envmap_fragment:Mh,envmap_common_pars_fragment:Sh,envmap_pars_fragment:yh,envmap_pars_vertex:bh,envmap_physical_pars_fragment:Uh,envmap_vertex:Eh,fog_vertex:Th,fog_pars_vertex:Ah,fog_fragment:wh,fog_pars_fragment:Rh,gradientmap_pars_fragment:Ch,lightmap_pars_fragment:Ph,lights_lambert_fragment:Ih,lights_lambert_pars_fragment:Lh,lights_pars_begin:Dh,lights_toon_fragment:Nh,lights_toon_pars_fragment:Fh,lights_phong_fragment:Oh,lights_phong_pars_fragment:kh,lights_physical_fragment:Bh,lights_physical_pars_fragment:zh,lights_fragment_begin:Hh,lights_fragment_maps:Gh,lights_fragment_end:Vh,lightprobes_pars_fragment:Wh,logdepthbuf_fragment:Xh,logdepthbuf_pars_fragment:Yh,logdepthbuf_pars_vertex:qh,logdepthbuf_vertex:$h,map_fragment:Kh,map_pars_fragment:Zh,map_particle_fragment:Jh,map_particle_pars_fragment:Qh,metalnessmap_fragment:jh,metalnessmap_pars_fragment:ep,morphinstance_vertex:tp,morphcolor_vertex:np,morphnormal_vertex:ip,morphtarget_pars_vertex:rp,morphtarget_vertex:sp,normal_fragment_begin:ap,normal_fragment_maps:op,normal_pars_fragment:lp,normal_pars_vertex:cp,normal_vertex:dp,normalmap_pars_fragment:up,clearcoat_normal_fragment_begin:fp,clearcoat_normal_fragment_maps:hp,clearcoat_pars_fragment:pp,iridescence_pars_fragment:mp,opaque_fragment:gp,packing:_p,premultiplied_alpha_fragment:xp,project_vertex:vp,dithering_fragment:Mp,dithering_pars_fragment:Sp,roughnessmap_fragment:yp,roughnessmap_pars_fragment:bp,shadowmap_pars_fragment:Ep,shadowmap_pars_vertex:Tp,shadowmap_vertex:Ap,shadowmask_pars_fragment:wp,skinbase_vertex:Rp,skinning_pars_vertex:Cp,skinning_vertex:Pp,skinnormal_vertex:Ip,specularmap_fragment:Lp,specularmap_pars_fragment:Dp,tonemapping_fragment:Up,tonemapping_pars_fragment:Np,transmission_fragment:Fp,transmission_pars_fragment:Op,uv_pars_fragment:kp,uv_pars_vertex:Bp,uv_vertex:zp,worldpos_vertex:Hp,background_vert:Gp,background_frag:Vp,backgroundCube_vert:Wp,backgroundCube_frag:Xp,cube_vert:Yp,cube_frag:qp,depth_vert:$p,depth_frag:Kp,distance_vert:Zp,distance_frag:Jp,equirect_vert:Qp,equirect_frag:jp,linedashed_vert:em,linedashed_frag:tm,meshbasic_vert:nm,meshbasic_frag:im,meshlambert_vert:rm,meshlambert_frag:sm,meshmatcap_vert:am,meshmatcap_frag:om,meshnormal_vert:lm,meshnormal_frag:cm,meshphong_vert:dm,meshphong_frag:um,meshphysical_vert:fm,meshphysical_frag:hm,meshtoon_vert:pm,meshtoon_frag:mm,points_vert:gm,points_frag:_m,shadow_vert:xm,shadow_frag:vm,sprite_vert:Mm,sprite_frag:Sm},Me={common:{diffuse:{value:new tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xe}},envmap:{envMap:{value:null},envMapRotation:{value:new Xe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xe},normalScale:{value:new Ye(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new z},probesMax:{value:new z},probesResolution:{value:new z}},points:{diffuse:{value:new tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0},uvTransform:{value:new Xe}},sprite:{diffuse:{value:new tt(16777215)},opacity:{value:1},center:{value:new Ye(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}}},En={basic:{uniforms:zt([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.fog]),vertexShader:Ze.meshbasic_vert,fragmentShader:Ze.meshbasic_frag},lambert:{uniforms:zt([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new tt(0)},envMapIntensity:{value:1}}]),vertexShader:Ze.meshlambert_vert,fragmentShader:Ze.meshlambert_frag},phong:{uniforms:zt([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new tt(0)},specular:{value:new tt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphong_vert,fragmentShader:Ze.meshphong_frag},standard:{uniforms:zt([Me.common,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.roughnessmap,Me.metalnessmap,Me.fog,Me.lights,{emissive:{value:new tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag},toon:{uniforms:zt([Me.common,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.gradientmap,Me.fog,Me.lights,{emissive:{value:new tt(0)}}]),vertexShader:Ze.meshtoon_vert,fragmentShader:Ze.meshtoon_frag},matcap:{uniforms:zt([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,{matcap:{value:null}}]),vertexShader:Ze.meshmatcap_vert,fragmentShader:Ze.meshmatcap_frag},points:{uniforms:zt([Me.points,Me.fog]),vertexShader:Ze.points_vert,fragmentShader:Ze.points_frag},dashed:{uniforms:zt([Me.common,Me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ze.linedashed_vert,fragmentShader:Ze.linedashed_frag},depth:{uniforms:zt([Me.common,Me.displacementmap]),vertexShader:Ze.depth_vert,fragmentShader:Ze.depth_frag},normal:{uniforms:zt([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,{opacity:{value:1}}]),vertexShader:Ze.meshnormal_vert,fragmentShader:Ze.meshnormal_frag},sprite:{uniforms:zt([Me.sprite,Me.fog]),vertexShader:Ze.sprite_vert,fragmentShader:Ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ze.background_vert,fragmentShader:Ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xe}},vertexShader:Ze.backgroundCube_vert,fragmentShader:Ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ze.cube_vert,fragmentShader:Ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ze.equirect_vert,fragmentShader:Ze.equirect_frag},distance:{uniforms:zt([Me.common,Me.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ze.distance_vert,fragmentShader:Ze.distance_frag},shadow:{uniforms:zt([Me.lights,Me.fog,{color:{value:new tt(0)},opacity:{value:1}}]),vertexShader:Ze.shadow_vert,fragmentShader:Ze.shadow_frag}};En.physical={uniforms:zt([En.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xe},clearcoatNormalScale:{value:new Ye(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xe},sheen:{value:0},sheenColor:{value:new tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xe},transmissionSamplerSize:{value:new Ye},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xe},attenuationDistance:{value:0},attenuationColor:{value:new tt(0)},specularColor:{value:new tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xe},anisotropyVector:{value:new Ye},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xe}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag};const hs={r:0,b:0,g:0},ym=new Mt,Rd=new Xe;Rd.set(-1,0,0,0,1,0,0,0,1);function bm(n,e,t,i,r,s){const a=new tt(0);let o=r===!0?0:1,l,c,u=null,f=0,d=null;function h(A){let w=A.isScene===!0?A.background:null;if(w&&w.isTexture){const v=A.backgroundBlurriness>0;w=e.get(w,v)}return w}function _(A){let w=!1;const v=h(A);v===null?m(a,o):v&&v.isColor&&(m(v,1),w=!0);const E=n.xr.getEnvironmentBlendMode();E==="additive"?t.buffers.color.setClear(0,0,0,1,s):E==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(n.autoClear||w)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function S(A,w){const v=h(w);v&&(v.isCubeTexture||v.mapping===Os)?(c===void 0&&(c=new Ut(new Ci(1,1,1),new Pn({name:"BackgroundCubeMaterial",uniforms:fr(En.backgroundCube.uniforms),vertexShader:En.backgroundCube.vertexShader,fragmentShader:En.backgroundCube.fragmentShader,side:$t,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,b,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(ym.makeRotationFromEuler(w.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Rd),c.material.toneMapped=it.getTransfer(v.colorSpace)!==dt,(u!==v||f!==v.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,u=v,f=v.version,d=n.toneMapping),c.layers.enableAll(),A.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new Ut(new li(2,2),new Pn({name:"BackgroundMaterial",uniforms:fr(En.background.uniforms),vertexShader:En.background.vertexShader,fragmentShader:En.background.fragmentShader,side:ai,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=it.getTransfer(v.colorSpace)!==dt,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||f!==v.version||d!==n.toneMapping)&&(l.material.needsUpdate=!0,u=v,f=v.version,d=n.toneMapping),l.layers.enableAll(),A.unshift(l,l.geometry,l.material,0,0,null))}function m(A,w){A.getRGB(hs,bd(n)),t.buffers.color.setClear(hs.r,hs.g,hs.b,w,s)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(A,w=1){a.set(A),o=w,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(A){o=A,m(a,o)},render:_,addToRenderList:S,dispose:p}}function Em(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,a=!1;function o(P,F,$,ie,H){let j=!1;const X=f(P,ie,$,F);s!==X&&(s=X,c(s.object)),j=h(P,ie,$,H),j&&_(P,ie,$,H),H!==null&&e.update(H,n.ELEMENT_ARRAY_BUFFER),(j||a)&&(a=!1,v(P,F,$,ie),H!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function l(){return n.createVertexArray()}function c(P){return n.bindVertexArray(P)}function u(P){return n.deleteVertexArray(P)}function f(P,F,$,ie){const H=ie.wireframe===!0;let j=i[F.id];j===void 0&&(j={},i[F.id]=j);const X=P.isInstancedMesh===!0?P.id:0;let te=j[X];te===void 0&&(te={},j[X]=te);let oe=te[$.id];oe===void 0&&(oe={},te[$.id]=oe);let Z=oe[H];return Z===void 0&&(Z=d(l()),oe[H]=Z),Z}function d(P){const F=[],$=[],ie=[];for(let H=0;H<t;H++)F[H]=0,$[H]=0,ie[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:$,attributeDivisors:ie,object:P,attributes:{},index:null}}function h(P,F,$,ie){const H=s.attributes,j=F.attributes;let X=0;const te=$.getAttributes();for(const oe in te)if(te[oe].location>=0){const de=H[oe];let he=j[oe];if(he===void 0&&(oe==="instanceMatrix"&&P.instanceMatrix&&(he=P.instanceMatrix),oe==="instanceColor"&&P.instanceColor&&(he=P.instanceColor)),de===void 0||de.attribute!==he||he&&de.data!==he.data)return!0;X++}return s.attributesNum!==X||s.index!==ie}function _(P,F,$,ie){const H={},j=F.attributes;let X=0;const te=$.getAttributes();for(const oe in te)if(te[oe].location>=0){let de=j[oe];de===void 0&&(oe==="instanceMatrix"&&P.instanceMatrix&&(de=P.instanceMatrix),oe==="instanceColor"&&P.instanceColor&&(de=P.instanceColor));const he={};he.attribute=de,de&&de.data&&(he.data=de.data),H[oe]=he,X++}s.attributes=H,s.attributesNum=X,s.index=ie}function S(){const P=s.newAttributes;for(let F=0,$=P.length;F<$;F++)P[F]=0}function m(P){p(P,0)}function p(P,F){const $=s.newAttributes,ie=s.enabledAttributes,H=s.attributeDivisors;$[P]=1,ie[P]===0&&(n.enableVertexAttribArray(P),ie[P]=1),H[P]!==F&&(n.vertexAttribDivisor(P,F),H[P]=F)}function A(){const P=s.newAttributes,F=s.enabledAttributes;for(let $=0,ie=F.length;$<ie;$++)F[$]!==P[$]&&(n.disableVertexAttribArray($),F[$]=0)}function w(P,F,$,ie,H,j,X){X===!0?n.vertexAttribIPointer(P,F,$,H,j):n.vertexAttribPointer(P,F,$,ie,H,j)}function v(P,F,$,ie){S();const H=ie.attributes,j=$.getAttributes(),X=F.defaultAttributeValues;for(const te in j){const oe=j[te];if(oe.location>=0){let Z=H[te];if(Z===void 0&&(te==="instanceMatrix"&&P.instanceMatrix&&(Z=P.instanceMatrix),te==="instanceColor"&&P.instanceColor&&(Z=P.instanceColor)),Z!==void 0){const de=Z.normalized,he=Z.itemSize,Ke=e.get(Z);if(Ke===void 0)continue;const st=Ke.buffer,Oe=Ke.type,ee=Ke.bytesPerElement,le=Oe===n.INT||Oe===n.UNSIGNED_INT||Z.gpuType===No;if(Z.isInterleavedBufferAttribute){const ce=Z.data,ke=ce.stride,Ge=Z.offset;if(ce.isInstancedInterleavedBuffer){for(let O=0;O<oe.locationSize;O++)p(oe.location+O,ce.meshPerAttribute);P.isInstancedMesh!==!0&&ie._maxInstanceCount===void 0&&(ie._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let O=0;O<oe.locationSize;O++)m(oe.location+O);n.bindBuffer(n.ARRAY_BUFFER,st);for(let O=0;O<oe.locationSize;O++)w(oe.location+O,he/oe.locationSize,Oe,de,ke*ee,(Ge+he/oe.locationSize*O)*ee,le)}else{if(Z.isInstancedBufferAttribute){for(let ce=0;ce<oe.locationSize;ce++)p(oe.location+ce,Z.meshPerAttribute);P.isInstancedMesh!==!0&&ie._maxInstanceCount===void 0&&(ie._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let ce=0;ce<oe.locationSize;ce++)m(oe.location+ce);n.bindBuffer(n.ARRAY_BUFFER,st);for(let ce=0;ce<oe.locationSize;ce++)w(oe.location+ce,he/oe.locationSize,Oe,de,he*ee,he/oe.locationSize*ce*ee,le)}}else if(X!==void 0){const de=X[te];if(de!==void 0)switch(de.length){case 2:n.vertexAttrib2fv(oe.location,de);break;case 3:n.vertexAttrib3fv(oe.location,de);break;case 4:n.vertexAttrib4fv(oe.location,de);break;default:n.vertexAttrib1fv(oe.location,de)}}}}A()}function E(){y();for(const P in i){const F=i[P];for(const $ in F){const ie=F[$];for(const H in ie){const j=ie[H];for(const X in j)u(j[X].object),delete j[X];delete ie[H]}}delete i[P]}}function b(P){if(i[P.id]===void 0)return;const F=i[P.id];for(const $ in F){const ie=F[$];for(const H in ie){const j=ie[H];for(const X in j)u(j[X].object),delete j[X];delete ie[H]}}delete i[P.id]}function C(P){for(const F in i){const $=i[F];for(const ie in $){const H=$[ie];if(H[P.id]===void 0)continue;const j=H[P.id];for(const X in j)u(j[X].object),delete j[X];delete H[P.id]}}}function x(P){for(const F in i){const $=i[F],ie=P.isInstancedMesh===!0?P.id:0,H=$[ie];if(H!==void 0){for(const j in H){const X=H[j];for(const te in X)u(X[te].object),delete X[te];delete H[j]}delete $[ie],Object.keys($).length===0&&delete i[F]}}}function y(){I(),a=!0,s!==r&&(s=r,c(s.object))}function I(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:y,resetDefaultState:I,dispose:E,releaseStatesOfGeometry:b,releaseStatesOfObject:x,releaseStatesOfProgram:C,initAttributes:S,enableAttribute:m,disableUnusedAttributes:A}}function Tm(n,e,t){let i;function r(l){i=l}function s(l,c){n.drawArrays(i,l,c),t.update(c,i,1)}function a(l,c,u){u!==0&&(n.drawArraysInstanced(i,l,c,u),t.update(c,i,u))}function o(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,u);let d=0;for(let h=0;h<u;h++)d+=c[h];t.update(d,i,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function Am(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(C){return!(C!==hn&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const x=C===Gn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==jt&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Tn&&!x)}function l(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(He("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&d===!1&&He("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),A=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),w=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),E=n.getParameter(n.MAX_SAMPLES),b=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:h,maxVertexTextures:_,maxTextureSize:S,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:A,maxVaryings:w,maxFragmentUniforms:v,maxSamples:E,samples:b}}function wm(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new jn,o=new Xe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const h=f.length!==0||d||i!==0||r;return r=d,i=f.length,h},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){t=u(f,d,0)},this.setState=function(f,d,h){const _=f.clippingPlanes,S=f.clipIntersection,m=f.clipShadows,p=n.get(f);if(!r||_===null||_.length===0||s&&!m)s?u(null):c();else{const A=s?0:i,w=A*4;let v=p.clippingState||null;l.value=v,v=u(_,d,w,h);for(let E=0;E!==w;++E)v[E]=t[E];p.clippingState=v,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=A}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,d,h,_){const S=f!==null?f.length:0;let m=null;if(S!==0){if(m=l.value,_!==!0||m===null){const p=h+S*4,A=d.matrixWorldInverse;o.getNormalMatrix(A),(m===null||m.length<p)&&(m=new Float32Array(p));for(let w=0,v=h;w!==S;++w,v+=4)a.copy(f[w]).applyMatrix4(A,o),a.normal.toArray(m,v),m[v+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,m}}const ri=4,Ql=[.125,.215,.35,.446,.526,.582],Mi=20,Rm=256,Ar=new Ad,jl=new tt;let _a=null,xa=0,va=0,Ma=!1;const Cm=new z;class ec{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,s={}){const{size:a=256,position:o=Cm}=s;_a=this._renderer.getRenderTarget(),xa=this._renderer.getActiveCubeFace(),va=this._renderer.getActiveMipmapLevel(),Ma=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ic(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=nc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(_a,xa,va),this._renderer.xr.enabled=Ma,e.scissorTest=!1,Zi(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===bi||e.mapping===dr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),_a=this._renderer.getRenderTarget(),xa=this._renderer.getActiveCubeFace(),va=this._renderer.getActiveMipmapLevel(),Ma=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Rt,minFilter:Rt,generateMipmaps:!1,type:Gn,format:hn,colorSpace:Ps,depthBuffer:!1},r=tc(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=tc(e,t,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Pm(s)),this._blurMaterial=Lm(s,e,t),this._ggxMaterial=Im(s,e,t)}return r}_compileMaterial(e){const t=new Ut(new an,e);this._renderer.compile(t,Ar)}_sceneToCubeUV(e,t,i,r,s){const l=new Qt(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,h=f.toneMapping;f.getClearColor(jl),f.toneMapping=wn,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ut(new Ci,new Ti({name:"PMREM.Background",side:$t,depthWrite:!1,depthTest:!1})));const S=this._backgroundBox,m=S.material;let p=!1;const A=e.background;A?A.isColor&&(m.color.copy(A),e.background=null,p=!0):(m.color.copy(jl),p=!0);for(let w=0;w<6;w++){const v=w%3;v===0?(l.up.set(0,c[w],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[w],s.y,s.z)):v===1?(l.up.set(0,0,c[w]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[w],s.z)):(l.up.set(0,c[w],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[w]));const E=this._cubeSize;Zi(r,v*E,w>2?E:0,E,E),f.setRenderTarget(r),p&&f.render(S,l),f.render(e,l)}f.toneMapping=h,f.autoClear=d,e.background=A}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===bi||e.mapping===dr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=ic()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=nc());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Zi(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,Ar)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=i}_applyGGXFilter(e,t,i){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const l=a.uniforms,c=i/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),f=Math.sqrt(c*c-u*u),d=0+c*1.25,h=f*d,{_lodMax:_}=this,S=this._sizeLods[i],m=3*S*(i>_-ri?i-_+ri:0),p=4*(this._cubeSize-S);l.envMap.value=e.texture,l.roughness.value=h,l.mipInt.value=_-t,Zi(s,m,p,3*S,2*S),r.setRenderTarget(s),r.render(o,Ar),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=_-i,Zi(e,m,p,3*S,2*S),r.setRenderTarget(e),r.render(o,Ar)}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&nt("blur direction must be either latitudinal or longitudinal!");const u=3,f=this._lodMeshes[r];f.material=c;const d=c.uniforms,h=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*h):2*Math.PI/(2*Mi-1),S=s/_,m=isFinite(s)?1+Math.floor(u*S):Mi;m>Mi&&He(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Mi}`);const p=[];let A=0;for(let C=0;C<Mi;++C){const x=C/S,y=Math.exp(-x*x/2);p.push(y),C===0?A+=y:C<m&&(A+=2*y)}for(let C=0;C<p.length;C++)p[C]=p[C]/A;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:w}=this;d.dTheta.value=_,d.mipInt.value=w-i;const v=this._sizeLods[r],E=3*v*(r>w-ri?r-w+ri:0),b=4*(this._cubeSize-v);Zi(t,E,b,3*v,2*v),l.setRenderTarget(t),l.render(f,Ar)}}function Pm(n){const e=[],t=[],i=[];let r=n;const s=n-ri+1+Ql.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let l=1/o;a>n-ri?l=Ql[a-n+ri-1]:a===0&&(l=0),t.push(l);const c=1/(o-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],h=6,_=6,S=3,m=2,p=1,A=new Float32Array(S*_*h),w=new Float32Array(m*_*h),v=new Float32Array(p*_*h);for(let b=0;b<h;b++){const C=b%3*2/3-1,x=b>2?0:-1,y=[C,x,0,C+2/3,x,0,C+2/3,x+1,0,C,x,0,C+2/3,x+1,0,C,x+1,0];A.set(y,S*_*b),w.set(d,m*_*b);const I=[b,b,b,b,b,b];v.set(I,p*_*b)}const E=new an;E.setAttribute("position",new pn(A,S)),E.setAttribute("uv",new pn(w,m)),E.setAttribute("faceIndex",new pn(v,p)),i.push(new Ut(E,null)),r>ri&&r--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function tc(n,e,t){const i=new Rn(n,e,t);return i.texture.mapping=Os,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Zi(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function Im(n,e,t){return new Pn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Rm,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ks(),fragmentShader:`

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
		`,blending:Bn,depthTest:!1,depthWrite:!1})}function Lm(n,e,t){const i=new Float32Array(Mi),r=new z(0,1,0);return new Pn({name:"SphericalGaussianBlur",defines:{n:Mi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ks(),fragmentShader:`

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
		`,blending:Bn,depthTest:!1,depthWrite:!1})}function nc(){return new Pn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ks(),fragmentShader:`

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
		`,blending:Bn,depthTest:!1,depthWrite:!1})}function ic(){return new Pn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ks(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Bn,depthTest:!1,depthWrite:!1})}function ks(){return`

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
	`}class Cd extends Rn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Sd(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ci(5,5,5),s=new Pn({name:"CubemapFromEquirect",uniforms:fr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:$t,blending:Bn});s.uniforms.tEquirect.value=t;const a=new Ut(r,s),o=t.minFilter;return t.minFilter===Si&&(t.minFilter=Rt),new Of(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}function Dm(n){let e=new WeakMap,t=new WeakMap,i=null;function r(d,h=!1){return d==null?null:h?a(d):s(d)}function s(d){if(d&&d.isTexture){const h=d.mapping;if(h===Vs||h===Ws)if(e.has(d)){const _=e.get(d).texture;return o(_,d.mapping)}else{const _=d.image;if(_&&_.height>0){const S=new Cd(_.height);return S.fromEquirectangularTexture(n,d),e.set(d,S),d.addEventListener("dispose",c),o(S.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture){const h=d.mapping,_=h===Vs||h===Ws,S=h===bi||h===dr;if(_||S){let m=t.get(d);const p=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==p)return i===null&&(i=new ec(n)),m=_?i.fromEquirectangular(d,m):i.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),m.texture;if(m!==void 0)return m.texture;{const A=d.image;return _&&A&&A.height>0||S&&A&&l(A)?(i===null&&(i=new ec(n)),m=_?i.fromEquirectangular(d):i.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),d.addEventListener("dispose",u),m.texture):null}}}return d}function o(d,h){return h===Vs?d.mapping=bi:h===Ws&&(d.mapping=dr),d}function l(d){let h=0;const _=6;for(let S=0;S<_;S++)d[S]!==void 0&&h++;return h===_}function c(d){const h=d.target;h.removeEventListener("dispose",c);const _=e.get(h);_!==void 0&&(e.delete(h),_.dispose())}function u(d){const h=d.target;h.removeEventListener("dispose",u);const _=t.get(h);_!==void 0&&(t.delete(h),_.dispose())}function f(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:f}}function Um(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const r=n.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&sr("WebGLRenderer: "+i+" extension not supported."),r}}}function Nm(n,e,t,i){const r={},s=new WeakMap;function a(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const _ in d.attributes)e.remove(d.attributes[_]);d.removeEventListener("dispose",a),delete r[d.id];const h=s.get(d);h&&(e.remove(h),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(f,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,t.memory.geometries++),d}function l(f){const d=f.attributes;for(const h in d)e.update(d[h],n.ARRAY_BUFFER)}function c(f){const d=[],h=f.index,_=f.attributes.position;let S=0;if(_===void 0)return;if(h!==null){const A=h.array;S=h.version;for(let w=0,v=A.length;w<v;w+=3){const E=A[w+0],b=A[w+1],C=A[w+2];d.push(E,b,b,C,C,E)}}else{const A=_.array;S=_.version;for(let w=0,v=A.length/3-1;w<v;w+=3){const E=w+0,b=w+1,C=w+2;d.push(E,b,b,C,C,E)}}const m=new(_.count>=65535?xd:_d)(d,1);m.version=S;const p=s.get(f);p&&e.remove(p),s.set(f,m)}function u(f){const d=s.get(f);if(d){const h=f.index;h!==null&&d.version<h.version&&c(f)}else c(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function Fm(n,e,t){let i;function r(f){i=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function l(f,d){n.drawElements(i,d,s,f*a),t.update(d,i,1)}function c(f,d,h){h!==0&&(n.drawElementsInstanced(i,d,s,f*a,h),t.update(d,i,h))}function u(f,d,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,s,f,0,h);let S=0;for(let m=0;m<h;m++)S+=d[m];t.update(S,i,1)}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function Om(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:nt("WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function km(n,e,t){const i=new WeakMap,r=new St;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0;let d=i.get(o);if(d===void 0||d.count!==f){let I=function(){x.dispose(),i.delete(o),o.removeEventListener("dispose",I)};var h=I;d!==void 0&&d.texture.dispose();const _=o.morphAttributes.position!==void 0,S=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],A=o.morphAttributes.normal||[],w=o.morphAttributes.color||[];let v=0;_===!0&&(v=1),S===!0&&(v=2),m===!0&&(v=3);let E=o.attributes.position.count*v,b=1;E>e.maxTextureSize&&(b=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const C=new Float32Array(E*b*4*f),x=new md(C,E,b,f);x.type=Tn,x.needsUpdate=!0;const y=v*4;for(let P=0;P<f;P++){const F=p[P],$=A[P],ie=w[P],H=E*b*4*P;for(let j=0;j<F.count;j++){const X=j*y;_===!0&&(r.fromBufferAttribute(F,j),C[H+X+0]=r.x,C[H+X+1]=r.y,C[H+X+2]=r.z,C[H+X+3]=0),S===!0&&(r.fromBufferAttribute($,j),C[H+X+4]=r.x,C[H+X+5]=r.y,C[H+X+6]=r.z,C[H+X+7]=0),m===!0&&(r.fromBufferAttribute(ie,j),C[H+X+8]=r.x,C[H+X+9]=r.y,C[H+X+10]=r.z,C[H+X+11]=ie.itemSize===4?r.w:1)}}d={count:f,texture:x,size:new Ye(E,b)},i.set(o,d),o.addEventListener("dispose",I)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let _=0;for(let m=0;m<c.length;m++)_+=c[m];const S=o.morphTargetsRelative?1:1-_;l.getUniforms().setValue(n,"morphTargetBaseInfluence",S),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:s}}function Bm(n,e,t,i,r){let s=new WeakMap;function a(c){const u=r.render.frame,f=c.geometry,d=e.get(c,f);if(s.get(d)!==u&&(e.update(d),s.set(d,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==u&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,u))),c.isSkinnedMesh){const h=c.skeleton;s.get(h)!==u&&(h.update(),s.set(h,u))}return d}function o(){s=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}const zm={[jc]:"LINEAR_TONE_MAPPING",[ed]:"REINHARD_TONE_MAPPING",[td]:"CINEON_TONE_MAPPING",[nd]:"ACES_FILMIC_TONE_MAPPING",[rd]:"AGX_TONE_MAPPING",[sd]:"NEUTRAL_TONE_MAPPING",[id]:"CUSTOM_TONE_MAPPING"};function Hm(n,e,t,i,r,s){const a=new Rn(e,t,{type:n,depthBuffer:r,stencilBuffer:s,samples:i?4:0,depthTexture:r?new ur(e,t):void 0}),o=new Rn(e,t,{type:Gn,depthBuffer:!1,stencilBuffer:!1}),l=new an;l.setAttribute("position",new Wt([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new Wt([0,2,0,0,2,0],2));const c=new wf({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new Ut(l,c),f=new Ad(-1,1,1,-1,0,1);let d=null,h=null,_=!1,S,m=null,p=[],A=!1;this.setSize=function(w,v){a.setSize(w,v),o.setSize(w,v);for(let E=0;E<p.length;E++){const b=p[E];b.setSize&&b.setSize(w,v)}},this.setEffects=function(w){p=w,A=p.length>0&&p[0].isRenderPass===!0;const v=a.width,E=a.height;for(let b=0;b<p.length;b++){const C=p[b];C.setSize&&C.setSize(v,E)}},this.begin=function(w,v){if(_||w.toneMapping===wn&&p.length===0)return!1;if(m=v,v!==null){const E=v.width,b=v.height;(a.width!==E||a.height!==b)&&this.setSize(E,b)}return A===!1&&w.setRenderTarget(a),S=w.toneMapping,w.toneMapping=wn,!0},this.hasRenderPass=function(){return A},this.end=function(w,v){w.toneMapping=S,_=!0;let E=a,b=o;for(let C=0;C<p.length;C++){const x=p[C];if(x.enabled!==!1&&(x.render(w,b,E,v),x.needsSwap!==!1)){const y=E;E=b,b=y}}if(d!==w.outputColorSpace||h!==w.toneMapping){d=w.outputColorSpace,h=w.toneMapping,c.defines={},it.getTransfer(d)===dt&&(c.defines.SRGB_TRANSFER="");const C=zm[h];C&&(c.defines[C]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=E.texture,w.setRenderTarget(m),w.render(u,f),m=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){a.depthTexture&&a.depthTexture.dispose(),a.dispose(),o.dispose(),l.dispose(),c.dispose()}}const Pd=new Nt,To=new ur(1,1),Id=new md,Ld=new tf,Dd=new Sd,rc=[],sc=[],ac=new Float32Array(16),oc=new Float32Array(9),lc=new Float32Array(4);function gr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=rc[r];if(s===void 0&&(s=new Float32Array(r),rc[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function It(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Lt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Bs(n,e){let t=sc[e];t===void 0&&(t=new Int32Array(e),sc[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Gm(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Vm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;n.uniform2fv(this.addr,e),Lt(t,e)}}function Wm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(It(t,e))return;n.uniform3fv(this.addr,e),Lt(t,e)}}function Xm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;n.uniform4fv(this.addr,e),Lt(t,e)}}function Ym(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(It(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Lt(t,e)}else{if(It(t,i))return;lc.set(i),n.uniformMatrix2fv(this.addr,!1,lc),Lt(t,i)}}function qm(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(It(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Lt(t,e)}else{if(It(t,i))return;oc.set(i),n.uniformMatrix3fv(this.addr,!1,oc),Lt(t,i)}}function $m(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(It(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Lt(t,e)}else{if(It(t,i))return;ac.set(i),n.uniformMatrix4fv(this.addr,!1,ac),Lt(t,i)}}function Km(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Zm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;n.uniform2iv(this.addr,e),Lt(t,e)}}function Jm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(It(t,e))return;n.uniform3iv(this.addr,e),Lt(t,e)}}function Qm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;n.uniform4iv(this.addr,e),Lt(t,e)}}function jm(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function eg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;n.uniform2uiv(this.addr,e),Lt(t,e)}}function tg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(It(t,e))return;n.uniform3uiv(this.addr,e),Lt(t,e)}}function ng(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;n.uniform4uiv(this.addr,e),Lt(t,e)}}function ig(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(To.compareFunction=t.isReversedDepthBuffer()?Go:Ho,s=To):s=Pd,t.setTexture2D(e||s,r)}function rg(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Ld,r)}function sg(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Dd,r)}function ag(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Id,r)}function og(n){switch(n){case 5126:return Gm;case 35664:return Vm;case 35665:return Wm;case 35666:return Xm;case 35674:return Ym;case 35675:return qm;case 35676:return $m;case 5124:case 35670:return Km;case 35667:case 35671:return Zm;case 35668:case 35672:return Jm;case 35669:case 35673:return Qm;case 5125:return jm;case 36294:return eg;case 36295:return tg;case 36296:return ng;case 35678:case 36198:case 36298:case 36306:case 35682:return ig;case 35679:case 36299:case 36307:return rg;case 35680:case 36300:case 36308:case 36293:return sg;case 36289:case 36303:case 36311:case 36292:return ag}}function lg(n,e){n.uniform1fv(this.addr,e)}function cg(n,e){const t=gr(e,this.size,2);n.uniform2fv(this.addr,t)}function dg(n,e){const t=gr(e,this.size,3);n.uniform3fv(this.addr,t)}function ug(n,e){const t=gr(e,this.size,4);n.uniform4fv(this.addr,t)}function fg(n,e){const t=gr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function hg(n,e){const t=gr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function pg(n,e){const t=gr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function mg(n,e){n.uniform1iv(this.addr,e)}function gg(n,e){n.uniform2iv(this.addr,e)}function _g(n,e){n.uniform3iv(this.addr,e)}function xg(n,e){n.uniform4iv(this.addr,e)}function vg(n,e){n.uniform1uiv(this.addr,e)}function Mg(n,e){n.uniform2uiv(this.addr,e)}function Sg(n,e){n.uniform3uiv(this.addr,e)}function yg(n,e){n.uniform4uiv(this.addr,e)}function bg(n,e,t){const i=this.cache,r=e.length,s=Bs(t,r);It(i,s)||(n.uniform1iv(this.addr,s),Lt(i,s));let a;this.type===n.SAMPLER_2D_SHADOW?a=To:a=Pd;for(let o=0;o!==r;++o)t.setTexture2D(e[o]||a,s[o])}function Eg(n,e,t){const i=this.cache,r=e.length,s=Bs(t,r);It(i,s)||(n.uniform1iv(this.addr,s),Lt(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Ld,s[a])}function Tg(n,e,t){const i=this.cache,r=e.length,s=Bs(t,r);It(i,s)||(n.uniform1iv(this.addr,s),Lt(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Dd,s[a])}function Ag(n,e,t){const i=this.cache,r=e.length,s=Bs(t,r);It(i,s)||(n.uniform1iv(this.addr,s),Lt(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Id,s[a])}function wg(n){switch(n){case 5126:return lg;case 35664:return cg;case 35665:return dg;case 35666:return ug;case 35674:return fg;case 35675:return hg;case 35676:return pg;case 5124:case 35670:return mg;case 35667:case 35671:return gg;case 35668:case 35672:return _g;case 35669:case 35673:return xg;case 5125:return vg;case 36294:return Mg;case 36295:return Sg;case 36296:return yg;case 35678:case 36198:case 36298:case 36306:case 35682:return bg;case 35679:case 36299:case 36307:return Eg;case 35680:case 36300:case 36308:case 36293:return Tg;case 36289:case 36303:case 36311:case 36292:return Ag}}class Rg{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=og(t.type)}}class Cg{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=wg(t.type)}}class Pg{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const Sa=/(\w+)(\])?(\[|\.)?/g;function cc(n,e){n.seq.push(e),n.map[e.id]=e}function Ig(n,e,t){const i=n.name,r=i.length;for(Sa.lastIndex=0;;){const s=Sa.exec(i),a=Sa.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){cc(t,c===void 0?new Rg(o,n,e):new Cg(o,n,e));break}else{let f=t.map[o];f===void 0&&(f=new Pg(o),cc(t,f)),t=f}}}class Ts{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);Ig(o,l,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function dc(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const Lg=37297;let Dg=0;function Ug(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const uc=new Xe;function Ng(n){it._getMatrix(uc,it.workingColorSpace,n);const e=`mat3( ${uc.elements.map(t=>t.toFixed(4))} )`;switch(it.getTransfer(n)){case Is:return[e,"LinearTransferOETF"];case dt:return[e,"sRGBTransferOETF"];default:return He("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function fc(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+Ug(n.getShaderSource(e),o)}else return s}function Fg(n,e){const t=Ng(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const Og={[jc]:"Linear",[ed]:"Reinhard",[td]:"Cineon",[nd]:"ACESFilmic",[rd]:"AgX",[sd]:"Neutral",[id]:"Custom"};function kg(n,e){const t=Og[e];return t===void 0?(He("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ps=new z;function Bg(){it.getLuminanceCoefficients(ps);const n=ps.x.toFixed(4),e=ps.y.toFixed(4),t=ps.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function zg(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Dr).join(`
`)}function Hg(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Gg(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function Dr(n){return n!==""}function hc(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function pc(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Vg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ao(n){return n.replace(Vg,Xg)}const Wg=new Map;function Xg(n,e){let t=Ze[e];if(t===void 0){const i=Wg.get(e);if(i!==void 0)t=Ze[i],He('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Ao(t)}const Yg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function mc(n){return n.replace(Yg,qg)}function qg(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function gc(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}const $g={[Ms]:"SHADOWMAP_TYPE_PCF",[Lr]:"SHADOWMAP_TYPE_VSM"};function Kg(n){return $g[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Zg={[bi]:"ENVMAP_TYPE_CUBE",[dr]:"ENVMAP_TYPE_CUBE",[Os]:"ENVMAP_TYPE_CUBE_UV"};function Jg(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":Zg[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const Qg={[dr]:"ENVMAP_MODE_REFRACTION"};function jg(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":Qg[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const e_={[Qc]:"ENVMAP_BLENDING_MULTIPLY",[vu]:"ENVMAP_BLENDING_MIX",[Mu]:"ENVMAP_BLENDING_ADD"};function t_(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":e_[n.combine]||"ENVMAP_BLENDING_NONE"}function n_(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function i_(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=Kg(t),c=Jg(t),u=jg(t),f=t_(t),d=n_(t),h=zg(t),_=Hg(s),S=r.createProgram();let m,p,A=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Dr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Dr).join(`
`),p.length>0&&(p+=`
`)):(m=[gc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Dr).join(`
`),p=[gc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==wn?"#define TONE_MAPPING":"",t.toneMapping!==wn?Ze.tonemapping_pars_fragment:"",t.toneMapping!==wn?kg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ze.colorspace_pars_fragment,Fg("linearToOutputTexel",t.outputColorSpace),Bg(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Dr).join(`
`)),a=Ao(a),a=hc(a,t),a=pc(a,t),o=Ao(o),o=hc(o,t),o=pc(o,t),a=mc(a),o=mc(o),t.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,m=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Sl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Sl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const w=A+m+a,v=A+p+o,E=dc(r,r.VERTEX_SHADER,w),b=dc(r,r.FRAGMENT_SHADER,v);r.attachShader(S,E),r.attachShader(S,b),t.index0AttributeName!==void 0?r.bindAttribLocation(S,0,t.index0AttributeName):t.hasPositionAttribute===!0&&r.bindAttribLocation(S,0,"position"),r.linkProgram(S);function C(P){if(n.debug.checkShaderErrors){const F=r.getProgramInfoLog(S)||"",$=r.getShaderInfoLog(E)||"",ie=r.getShaderInfoLog(b)||"",H=F.trim(),j=$.trim(),X=ie.trim();let te=!0,oe=!0;if(r.getProgramParameter(S,r.LINK_STATUS)===!1)if(te=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,S,E,b);else{const Z=fc(r,E,"vertex"),de=fc(r,b,"fragment");nt("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(S,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+H+`
`+Z+`
`+de)}else H!==""?He("WebGLProgram: Program Info Log:",H):(j===""||X==="")&&(oe=!1);oe&&(P.diagnostics={runnable:te,programLog:H,vertexShader:{log:j,prefix:m},fragmentShader:{log:X,prefix:p}})}r.deleteShader(E),r.deleteShader(b),x=new Ts(r,S),y=Gg(r,S)}let x;this.getUniforms=function(){return x===void 0&&C(this),x};let y;this.getAttributes=function(){return y===void 0&&C(this),y};let I=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=r.getProgramParameter(S,Lg)),I},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(S),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Dg++,this.cacheKey=e,this.usedTimes=1,this.program=S,this.vertexShader=E,this.fragmentShader=b,this}let r_=0;class s_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){const r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new a_(e),t.set(e,i)),i}}class a_{constructor(e){this.id=r_++,this.code=e,this.usedTimes=0}}function o_(n){return n===Ei||n===Rs||n===Cs}function l_(n,e,t,i,r,s){const a=new Xo,o=new s_,l=new Set,c=[],u=new Map,f=i.logarithmicDepthBuffer;let d=i.precision;const h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(x){return l.add(x),x===0?"uv":`uv${x}`}function S(x,y,I,P,F,$){const ie=P.fog,H=F.geometry,j=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?P.environment:null,X=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,te=e.get(x.envMap||j,X),oe=te&&te.mapping===Os?te.image.height:null,Z=h[x.type];x.precision!==null&&(d=i.getMaxPrecision(x.precision),d!==x.precision&&He("WebGLProgram.getParameters:",x.precision,"not supported, using",d,"instead."));const de=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,he=de!==void 0?de.length:0;let Ke=0;H.morphAttributes.position!==void 0&&(Ke=1),H.morphAttributes.normal!==void 0&&(Ke=2),H.morphAttributes.color!==void 0&&(Ke=3);let st,Oe,ee,le;if(Z){const we=En[Z];st=we.vertexShader,Oe=we.fragmentShader}else{st=x.vertexShader,Oe=x.fragmentShader;const we=o.getVertexShaderStage(x),yt=o.getFragmentShaderStage(x);o.update(x,we,yt),ee=we.id,le=yt.id}const ce=n.getRenderTarget(),ke=n.state.buffers.depth.getReversed(),Ge=F.isInstancedMesh===!0,O=F.isBatchedMesh===!0,U=!!x.map,R=!!x.matcap,N=!!te,Y=!!x.aoMap,G=!!x.lightMap,se=!!x.bumpMap&&x.wireframe===!1,pe=!!x.normalMap,Te=!!x.displacementMap,Re=!!x.emissiveMap,Pe=!!x.metalnessMap,Ve=!!x.roughnessMap,L=x.anisotropy>0,We=x.clearcoat>0,Je=x.dispersion>0,T=x.iridescence>0,g=x.sheen>0,B=x.transmission>0,q=L&&!!x.anisotropyMap,J=We&&!!x.clearcoatMap,ue=We&&!!x.clearcoatNormalMap,me=We&&!!x.clearcoatRoughnessMap,Q=T&&!!x.iridescenceMap,re=T&&!!x.iridescenceThicknessMap,ge=g&&!!x.sheenColorMap,Le=g&&!!x.sheenRoughnessMap,ve=!!x.specularMap,_e=!!x.specularColorMap,Ne=!!x.specularIntensityMap,ze=B&&!!x.transmissionMap,qe=B&&!!x.thicknessMap,D=!!x.gradientMap,fe=!!x.alphaMap,ne=x.alphaTest>0,xe=!!x.alphaHash,be=!!x.extensions;let ae=wn;x.toneMapped&&(ce===null||ce.isXRRenderTarget===!0)&&(ae=n.toneMapping);const Ie={shaderID:Z,shaderType:x.type,shaderName:x.name,vertexShader:st,fragmentShader:Oe,defines:x.defines,customVertexShaderID:ee,customFragmentShaderID:le,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:d,batching:O,batchingColor:O&&F._colorsTexture!==null,instancing:Ge,instancingColor:Ge&&F.instanceColor!==null,instancingMorph:Ge&&F.morphTexture!==null,outputColorSpace:ce===null?n.outputColorSpace:ce.isXRRenderTarget===!0?ce.texture.colorSpace:it.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:U,matcap:R,envMap:N,envMapMode:N&&te.mapping,envMapCubeUVHeight:oe,aoMap:Y,lightMap:G,bumpMap:se,normalMap:pe,displacementMap:Te,emissiveMap:Re,normalMapObjectSpace:pe&&x.normalMapType===bu,normalMapTangentSpace:pe&&x.normalMapType===yo,packedNormalMap:pe&&x.normalMapType===yo&&o_(x.normalMap.format),metalnessMap:Pe,roughnessMap:Ve,anisotropy:L,anisotropyMap:q,clearcoat:We,clearcoatMap:J,clearcoatNormalMap:ue,clearcoatRoughnessMap:me,dispersion:Je,iridescence:T,iridescenceMap:Q,iridescenceThicknessMap:re,sheen:g,sheenColorMap:ge,sheenRoughnessMap:Le,specularMap:ve,specularColorMap:_e,specularIntensityMap:Ne,transmission:B,transmissionMap:ze,thicknessMap:qe,gradientMap:D,opaque:x.transparent===!1&&x.blending===rr&&x.alphaToCoverage===!1,alphaMap:fe,alphaTest:ne,alphaHash:xe,combine:x.combine,mapUv:U&&_(x.map.channel),aoMapUv:Y&&_(x.aoMap.channel),lightMapUv:G&&_(x.lightMap.channel),bumpMapUv:se&&_(x.bumpMap.channel),normalMapUv:pe&&_(x.normalMap.channel),displacementMapUv:Te&&_(x.displacementMap.channel),emissiveMapUv:Re&&_(x.emissiveMap.channel),metalnessMapUv:Pe&&_(x.metalnessMap.channel),roughnessMapUv:Ve&&_(x.roughnessMap.channel),anisotropyMapUv:q&&_(x.anisotropyMap.channel),clearcoatMapUv:J&&_(x.clearcoatMap.channel),clearcoatNormalMapUv:ue&&_(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:me&&_(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Q&&_(x.iridescenceMap.channel),iridescenceThicknessMapUv:re&&_(x.iridescenceThicknessMap.channel),sheenColorMapUv:ge&&_(x.sheenColorMap.channel),sheenRoughnessMapUv:Le&&_(x.sheenRoughnessMap.channel),specularMapUv:ve&&_(x.specularMap.channel),specularColorMapUv:_e&&_(x.specularColorMap.channel),specularIntensityMapUv:Ne&&_(x.specularIntensityMap.channel),transmissionMapUv:ze&&_(x.transmissionMap.channel),thicknessMapUv:qe&&_(x.thicknessMap.channel),alphaMapUv:fe&&_(x.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(pe||L),vertexNormals:!!H.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!H.attributes.uv&&(U||fe),fog:!!ie,useFog:x.fog===!0,fogExp2:!!ie&&ie.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||H.attributes.normal===void 0&&pe===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:ke,skinning:F.isSkinnedMesh===!0,hasPositionAttribute:H.attributes.position!==void 0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:he,morphTextureStride:Ke,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numLightProbeGrids:$.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&I.length>0,shadowMapType:n.shadowMap.type,toneMapping:ae,decodeVideoTexture:U&&x.map.isVideoTexture===!0&&it.getTransfer(x.map.colorSpace)===dt,decodeVideoTextureEmissive:Re&&x.emissiveMap.isVideoTexture===!0&&it.getTransfer(x.emissiveMap.colorSpace)===dt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===On,flipSided:x.side===$t,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:be&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(be&&x.extensions.multiDraw===!0||O)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Ie.vertexUv1s=l.has(1),Ie.vertexUv2s=l.has(2),Ie.vertexUv3s=l.has(3),l.clear(),Ie}function m(x){const y=[];if(x.shaderID?y.push(x.shaderID):(y.push(x.customVertexShaderID),y.push(x.customFragmentShaderID)),x.defines!==void 0)for(const I in x.defines)y.push(I),y.push(x.defines[I]);return x.isRawShaderMaterial===!1&&(p(y,x),A(y,x),y.push(n.outputColorSpace)),y.push(x.customProgramCacheKey),y.join()}function p(x,y){x.push(y.precision),x.push(y.outputColorSpace),x.push(y.envMapMode),x.push(y.envMapCubeUVHeight),x.push(y.mapUv),x.push(y.alphaMapUv),x.push(y.lightMapUv),x.push(y.aoMapUv),x.push(y.bumpMapUv),x.push(y.normalMapUv),x.push(y.displacementMapUv),x.push(y.emissiveMapUv),x.push(y.metalnessMapUv),x.push(y.roughnessMapUv),x.push(y.anisotropyMapUv),x.push(y.clearcoatMapUv),x.push(y.clearcoatNormalMapUv),x.push(y.clearcoatRoughnessMapUv),x.push(y.iridescenceMapUv),x.push(y.iridescenceThicknessMapUv),x.push(y.sheenColorMapUv),x.push(y.sheenRoughnessMapUv),x.push(y.specularMapUv),x.push(y.specularColorMapUv),x.push(y.specularIntensityMapUv),x.push(y.transmissionMapUv),x.push(y.thicknessMapUv),x.push(y.combine),x.push(y.fogExp2),x.push(y.sizeAttenuation),x.push(y.morphTargetsCount),x.push(y.morphAttributeCount),x.push(y.numDirLights),x.push(y.numPointLights),x.push(y.numSpotLights),x.push(y.numSpotLightMaps),x.push(y.numHemiLights),x.push(y.numRectAreaLights),x.push(y.numDirLightShadows),x.push(y.numPointLightShadows),x.push(y.numSpotLightShadows),x.push(y.numSpotLightShadowsWithMaps),x.push(y.numLightProbes),x.push(y.shadowMapType),x.push(y.toneMapping),x.push(y.numClippingPlanes),x.push(y.numClipIntersection),x.push(y.depthPacking)}function A(x,y){a.disableAll(),y.instancing&&a.enable(0),y.instancingColor&&a.enable(1),y.instancingMorph&&a.enable(2),y.matcap&&a.enable(3),y.envMap&&a.enable(4),y.normalMapObjectSpace&&a.enable(5),y.normalMapTangentSpace&&a.enable(6),y.clearcoat&&a.enable(7),y.iridescence&&a.enable(8),y.alphaTest&&a.enable(9),y.vertexColors&&a.enable(10),y.vertexAlphas&&a.enable(11),y.vertexUv1s&&a.enable(12),y.vertexUv2s&&a.enable(13),y.vertexUv3s&&a.enable(14),y.vertexTangents&&a.enable(15),y.anisotropy&&a.enable(16),y.alphaHash&&a.enable(17),y.batching&&a.enable(18),y.dispersion&&a.enable(19),y.batchingColor&&a.enable(20),y.gradientMap&&a.enable(21),y.packedNormalMap&&a.enable(22),y.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reversedDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),y.numLightProbeGrids>0&&a.enable(22),y.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function w(x){const y=h[x.type];let I;if(y){const P=En[y];I=Ef.clone(P.uniforms)}else I=x.uniforms;return I}function v(x,y){let I=u.get(y);return I!==void 0?++I.usedTimes:(I=new i_(n,y,x,r),c.push(I),u.set(y,I)),I}function E(x){if(--x.usedTimes===0){const y=c.indexOf(x);c[y]=c[c.length-1],c.pop(),u.delete(x.cacheKey),x.destroy()}}function b(x){o.remove(x)}function C(){o.dispose()}return{getParameters:S,getProgramCacheKey:m,getUniforms:w,acquireProgram:v,releaseProgram:E,releaseShaderCache:b,programs:c,dispose:C}}function c_(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,l){n.get(a)[o]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function d_(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function _c(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function xc(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(d){let h=0;return d.isInstancedMesh&&(h+=2),d.isSkinnedMesh&&(h+=1),h}function o(d,h,_,S,m,p){let A=n[e];return A===void 0?(A={id:d.id,object:d,geometry:h,material:_,materialVariant:a(d),groupOrder:S,renderOrder:d.renderOrder,z:m,group:p},n[e]=A):(A.id=d.id,A.object=d,A.geometry=h,A.material=_,A.materialVariant=a(d),A.groupOrder=S,A.renderOrder=d.renderOrder,A.z=m,A.group=p),e++,A}function l(d,h,_,S,m,p){const A=o(d,h,_,S,m,p);_.transmission>0?i.push(A):_.transparent===!0?r.push(A):t.push(A)}function c(d,h,_,S,m,p){const A=o(d,h,_,S,m,p);_.transmission>0?i.unshift(A):_.transparent===!0?r.unshift(A):t.unshift(A)}function u(d,h,_){t.length>1&&t.sort(d||d_),i.length>1&&i.sort(h||_c),r.length>1&&r.sort(h||_c),_&&(t.reverse(),i.reverse(),r.reverse())}function f(){for(let d=e,h=n.length;d<h;d++){const _=n[d];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:l,unshift:c,finish:f,sort:u}}function u_(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new xc,n.set(i,[a])):r>=s.length?(a=new xc,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function f_(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new z,color:new tt};break;case"SpotLight":t={position:new z,direction:new z,color:new tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new z,color:new tt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new z,skyColor:new tt,groundColor:new tt};break;case"RectAreaLight":t={color:new tt,position:new z,halfWidth:new z,halfHeight:new z};break}return n[e.id]=t,t}}}function h_(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let p_=0;function m_(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function g_(n){const e=new f_,t=h_(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new z);const r=new z,s=new Mt,a=new Mt;function o(c){let u=0,f=0,d=0;for(let y=0;y<9;y++)i.probe[y].set(0,0,0);let h=0,_=0,S=0,m=0,p=0,A=0,w=0,v=0,E=0,b=0,C=0;c.sort(m_);for(let y=0,I=c.length;y<I;y++){const P=c[y],F=P.color,$=P.intensity,ie=P.distance;let H=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===Ei?H=P.shadow.map.texture:H=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)u+=F.r*$,f+=F.g*$,d+=F.b*$;else if(P.isLightProbe){for(let j=0;j<9;j++)i.probe[j].addScaledVector(P.sh.coefficients[j],$);C++}else if(P.isDirectionalLight){const j=e.get(P);if(j.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const X=P.shadow,te=t.get(P);te.shadowIntensity=X.intensity,te.shadowBias=X.bias,te.shadowNormalBias=X.normalBias,te.shadowRadius=X.radius,te.shadowMapSize=X.mapSize,i.directionalShadow[h]=te,i.directionalShadowMap[h]=H,i.directionalShadowMatrix[h]=P.shadow.matrix,A++}i.directional[h]=j,h++}else if(P.isSpotLight){const j=e.get(P);j.position.setFromMatrixPosition(P.matrixWorld),j.color.copy(F).multiplyScalar($),j.distance=ie,j.coneCos=Math.cos(P.angle),j.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),j.decay=P.decay,i.spot[S]=j;const X=P.shadow;if(P.map&&(i.spotLightMap[E]=P.map,E++,X.updateMatrices(P),P.castShadow&&b++),i.spotLightMatrix[S]=X.matrix,P.castShadow){const te=t.get(P);te.shadowIntensity=X.intensity,te.shadowBias=X.bias,te.shadowNormalBias=X.normalBias,te.shadowRadius=X.radius,te.shadowMapSize=X.mapSize,i.spotShadow[S]=te,i.spotShadowMap[S]=H,v++}S++}else if(P.isRectAreaLight){const j=e.get(P);j.color.copy(F).multiplyScalar($),j.halfWidth.set(P.width*.5,0,0),j.halfHeight.set(0,P.height*.5,0),i.rectArea[m]=j,m++}else if(P.isPointLight){const j=e.get(P);if(j.color.copy(P.color).multiplyScalar(P.intensity),j.distance=P.distance,j.decay=P.decay,P.castShadow){const X=P.shadow,te=t.get(P);te.shadowIntensity=X.intensity,te.shadowBias=X.bias,te.shadowNormalBias=X.normalBias,te.shadowRadius=X.radius,te.shadowMapSize=X.mapSize,te.shadowCameraNear=X.camera.near,te.shadowCameraFar=X.camera.far,i.pointShadow[_]=te,i.pointShadowMap[_]=H,i.pointShadowMatrix[_]=P.shadow.matrix,w++}i.point[_]=j,_++}else if(P.isHemisphereLight){const j=e.get(P);j.skyColor.copy(P.color).multiplyScalar($),j.groundColor.copy(P.groundColor).multiplyScalar($),i.hemi[p]=j,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Me.LTC_FLOAT_1,i.rectAreaLTC2=Me.LTC_FLOAT_2):(i.rectAreaLTC1=Me.LTC_HALF_1,i.rectAreaLTC2=Me.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=d;const x=i.hash;(x.directionalLength!==h||x.pointLength!==_||x.spotLength!==S||x.rectAreaLength!==m||x.hemiLength!==p||x.numDirectionalShadows!==A||x.numPointShadows!==w||x.numSpotShadows!==v||x.numSpotMaps!==E||x.numLightProbes!==C)&&(i.directional.length=h,i.spot.length=S,i.rectArea.length=m,i.point.length=_,i.hemi.length=p,i.directionalShadow.length=A,i.directionalShadowMap.length=A,i.pointShadow.length=w,i.pointShadowMap.length=w,i.spotShadow.length=v,i.spotShadowMap.length=v,i.directionalShadowMatrix.length=A,i.pointShadowMatrix.length=w,i.spotLightMatrix.length=v+E-b,i.spotLightMap.length=E,i.numSpotLightShadowsWithMaps=b,i.numLightProbes=C,x.directionalLength=h,x.pointLength=_,x.spotLength=S,x.rectAreaLength=m,x.hemiLength=p,x.numDirectionalShadows=A,x.numPointShadows=w,x.numSpotShadows=v,x.numSpotMaps=E,x.numLightProbes=C,i.version=p_++)}function l(c,u){let f=0,d=0,h=0,_=0,S=0;const m=u.matrixWorldInverse;for(let p=0,A=c.length;p<A;p++){const w=c[p];if(w.isDirectionalLight){const v=i.directional[f];v.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(m),f++}else if(w.isSpotLight){const v=i.spot[h];v.position.setFromMatrixPosition(w.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(m),h++}else if(w.isRectAreaLight){const v=i.rectArea[_];v.position.setFromMatrixPosition(w.matrixWorld),v.position.applyMatrix4(m),a.identity(),s.copy(w.matrixWorld),s.premultiply(m),a.extractRotation(s),v.halfWidth.set(w.width*.5,0,0),v.halfHeight.set(0,w.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),_++}else if(w.isPointLight){const v=i.point[d];v.position.setFromMatrixPosition(w.matrixWorld),v.position.applyMatrix4(m),d++}else if(w.isHemisphereLight){const v=i.hemi[S];v.direction.setFromMatrixPosition(w.matrixWorld),v.direction.transformDirection(m),S++}}}return{setup:o,setupView:l,state:i}}function vc(n){const e=new g_(n),t=[],i=[],r=[];function s(d){f.camera=d,t.length=0,i.length=0,r.length=0}function a(d){t.push(d)}function o(d){i.push(d)}function l(d){r.push(d)}function c(){e.setup(t)}function u(d){e.setupView(t,d)}const f={lightsArray:t,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:f,setupLights:c,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function __(n){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new vc(n),e.set(r,[o])):s>=a.length?(o=new vc(n),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const x_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,v_=`uniform sampler2D shadow_pass;
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
}`,M_=[new z(1,0,0),new z(-1,0,0),new z(0,1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1)],S_=[new z(0,-1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1),new z(0,-1,0),new z(0,-1,0)],Mc=new Mt,wr=new z,ya=new z;function y_(n,e,t){let i=new $o;const r=new Ye,s=new Ye,a=new St,o=new Rf,l=new Cf,c={},u=t.maxTextureSize,f={[ai]:$t,[$t]:ai,[On]:On},d=new Pn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ye},radius:{value:4}},vertexShader:x_,fragmentShader:v_}),h=d.clone();h.defines.HORIZONTAL_PASS=1;const _=new an;_.setAttribute("position",new pn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new Ut(_,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ms;let p=this.type;this.render=function(b,C,x){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;this.type===eu&&(He("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Ms);const y=n.getRenderTarget(),I=n.getActiveCubeFace(),P=n.getActiveMipmapLevel(),F=n.state;F.setBlending(Bn),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const $=p!==this.type;$&&C.traverse(function(ie){ie.material&&(Array.isArray(ie.material)?ie.material.forEach(H=>H.needsUpdate=!0):ie.material.needsUpdate=!0)});for(let ie=0,H=b.length;ie<H;ie++){const j=b[ie],X=j.shadow;if(X===void 0){He("WebGLShadowMap:",j,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;r.copy(X.mapSize);const te=X.getFrameExtents();r.multiply(te),s.copy(X.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/te.x),r.x=s.x*te.x,X.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/te.y),r.y=s.y*te.y,X.mapSize.y=s.y));const oe=n.state.buffers.depth.getReversed();if(X.camera._reversedDepth=oe,X.map===null||$===!0){if(X.map!==null&&(X.map.depthTexture!==null&&(X.map.depthTexture.dispose(),X.map.depthTexture=null),X.map.dispose()),this.type===Lr){if(j.isPointLight){He("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}X.map=new Rn(r.x,r.y,{format:Ei,type:Gn,minFilter:Rt,magFilter:Rt,generateMipmaps:!1}),X.map.texture.name=j.name+".shadowMap",X.map.depthTexture=new ur(r.x,r.y,Tn),X.map.depthTexture.name=j.name+".shadowMapDepth",X.map.depthTexture.format=Vn,X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=At,X.map.depthTexture.magFilter=At}else j.isPointLight?(X.map=new Cd(r.x),X.map.depthTexture=new yf(r.x,Cn)):(X.map=new Rn(r.x,r.y),X.map.depthTexture=new ur(r.x,r.y,Cn)),X.map.depthTexture.name=j.name+".shadowMap",X.map.depthTexture.format=Vn,this.type===Ms?(X.map.depthTexture.compareFunction=oe?Go:Ho,X.map.depthTexture.minFilter=Rt,X.map.depthTexture.magFilter=Rt):(X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=At,X.map.depthTexture.magFilter=At);X.camera.updateProjectionMatrix()}const Z=X.map.isWebGLCubeRenderTarget?6:1;for(let de=0;de<Z;de++){if(X.map.isWebGLCubeRenderTarget)n.setRenderTarget(X.map,de),n.clear();else{de===0&&(n.setRenderTarget(X.map),n.clear());const he=X.getViewport(de);a.set(s.x*he.x,s.y*he.y,s.x*he.z,s.y*he.w),F.viewport(a)}if(j.isPointLight){const he=X.camera,Ke=X.matrix,st=j.distance||he.far;st!==he.far&&(he.far=st,he.updateProjectionMatrix()),wr.setFromMatrixPosition(j.matrixWorld),he.position.copy(wr),ya.copy(he.position),ya.add(M_[de]),he.up.copy(S_[de]),he.lookAt(ya),he.updateMatrixWorld(),Ke.makeTranslation(-wr.x,-wr.y,-wr.z),Mc.multiplyMatrices(he.projectionMatrix,he.matrixWorldInverse),X._frustum.setFromProjectionMatrix(Mc,he.coordinateSystem,he.reversedDepth)}else X.updateMatrices(j);i=X.getFrustum(),v(C,x,X.camera,j,this.type)}X.isPointLightShadow!==!0&&this.type===Lr&&A(X,x),X.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(y,I,P)};function A(b,C){const x=e.update(S);d.defines.VSM_SAMPLES!==b.blurSamples&&(d.defines.VSM_SAMPLES=b.blurSamples,h.defines.VSM_SAMPLES=b.blurSamples,d.needsUpdate=!0,h.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Rn(r.x,r.y,{format:Ei,type:Gn})),d.uniforms.shadow_pass.value=b.map.depthTexture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,n.setRenderTarget(b.mapPass),n.clear(),n.renderBufferDirect(C,null,x,d,S,null),h.uniforms.shadow_pass.value=b.mapPass.texture,h.uniforms.resolution.value=b.mapSize,h.uniforms.radius.value=b.radius,n.setRenderTarget(b.map),n.clear(),n.renderBufferDirect(C,null,x,h,S,null)}function w(b,C,x,y){let I=null;const P=x.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(P!==void 0)I=P;else if(I=x.isPointLight===!0?l:o,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const F=I.uuid,$=C.uuid;let ie=c[F];ie===void 0&&(ie={},c[F]=ie);let H=ie[$];H===void 0&&(H=I.clone(),ie[$]=H,C.addEventListener("dispose",E)),I=H}if(I.visible=C.visible,I.wireframe=C.wireframe,y===Lr?I.side=C.shadowSide!==null?C.shadowSide:C.side:I.side=C.shadowSide!==null?C.shadowSide:f[C.side],I.alphaMap=C.alphaMap,I.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,I.map=C.map,I.clipShadows=C.clipShadows,I.clippingPlanes=C.clippingPlanes,I.clipIntersection=C.clipIntersection,I.displacementMap=C.displacementMap,I.displacementScale=C.displacementScale,I.displacementBias=C.displacementBias,I.wireframeLinewidth=C.wireframeLinewidth,I.linewidth=C.linewidth,x.isPointLight===!0&&I.isMeshDistanceMaterial===!0){const F=n.properties.get(I);F.light=x}return I}function v(b,C,x,y,I){if(b.visible===!1)return;if(b.layers.test(C.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&I===Lr)&&(!b.frustumCulled||i.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,b.matrixWorld);const $=e.update(b),ie=b.material;if(Array.isArray(ie)){const H=$.groups;for(let j=0,X=H.length;j<X;j++){const te=H[j],oe=ie[te.materialIndex];if(oe&&oe.visible){const Z=w(b,oe,y,I);b.onBeforeShadow(n,b,C,x,$,Z,te),n.renderBufferDirect(x,null,$,Z,b,te),b.onAfterShadow(n,b,C,x,$,Z,te)}}}else if(ie.visible){const H=w(b,ie,y,I);b.onBeforeShadow(n,b,C,x,$,H,null),n.renderBufferDirect(x,null,$,H,b,null),b.onAfterShadow(n,b,C,x,$,H,null)}}const F=b.children;for(let $=0,ie=F.length;$<ie;$++)v(F[$],C,x,y,I)}function E(b){b.target.removeEventListener("dispose",E);for(const x in c){const y=c[x],I=b.target.uuid;I in y&&(y[I].dispose(),delete y[I])}}}function b_(n,e){function t(){let D=!1;const fe=new St;let ne=null;const xe=new St(0,0,0,0);return{setMask:function(be){ne!==be&&!D&&(n.colorMask(be,be,be,be),ne=be)},setLocked:function(be){D=be},setClear:function(be,ae,Ie,we,yt){yt===!0&&(be*=we,ae*=we,Ie*=we),fe.set(be,ae,Ie,we),xe.equals(fe)===!1&&(n.clearColor(be,ae,Ie,we),xe.copy(fe))},reset:function(){D=!1,ne=null,xe.set(-1,0,0,0)}}}function i(){let D=!1,fe=!1,ne=null,xe=null,be=null;return{setReversed:function(ae){if(fe!==ae){const Ie=e.get("EXT_clip_control");ae?Ie.clipControlEXT(Ie.LOWER_LEFT_EXT,Ie.ZERO_TO_ONE_EXT):Ie.clipControlEXT(Ie.LOWER_LEFT_EXT,Ie.NEGATIVE_ONE_TO_ONE_EXT),fe=ae;const we=be;be=null,this.setClear(we)}},getReversed:function(){return fe},setTest:function(ae){ae?ce(n.DEPTH_TEST):ke(n.DEPTH_TEST)},setMask:function(ae){ne!==ae&&!D&&(n.depthMask(ae),ne=ae)},setFunc:function(ae){if(fe&&(ae=Du[ae]),xe!==ae){switch(ae){case Fa:n.depthFunc(n.NEVER);break;case Oa:n.depthFunc(n.ALWAYS);break;case ka:n.depthFunc(n.LESS);break;case cr:n.depthFunc(n.LEQUAL);break;case Ba:n.depthFunc(n.EQUAL);break;case za:n.depthFunc(n.GEQUAL);break;case Ha:n.depthFunc(n.GREATER);break;case Ga:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}xe=ae}},setLocked:function(ae){D=ae},setClear:function(ae){be!==ae&&(be=ae,fe&&(ae=1-ae),n.clearDepth(ae))},reset:function(){D=!1,ne=null,xe=null,be=null,fe=!1}}}function r(){let D=!1,fe=null,ne=null,xe=null,be=null,ae=null,Ie=null,we=null,yt=null;return{setTest:function(gt){D||(gt?ce(n.STENCIL_TEST):ke(n.STENCIL_TEST))},setMask:function(gt){fe!==gt&&!D&&(n.stencilMask(gt),fe=gt)},setFunc:function(gt,vn,Mn){(ne!==gt||xe!==vn||be!==Mn)&&(n.stencilFunc(gt,vn,Mn),ne=gt,xe=vn,be=Mn)},setOp:function(gt,vn,Mn){(ae!==gt||Ie!==vn||we!==Mn)&&(n.stencilOp(gt,vn,Mn),ae=gt,Ie=vn,we=Mn)},setLocked:function(gt){D=gt},setClear:function(gt){yt!==gt&&(n.clearStencil(gt),yt=gt)},reset:function(){D=!1,fe=null,ne=null,xe=null,be=null,ae=null,Ie=null,we=null,yt=null}}}const s=new t,a=new i,o=new r,l=new WeakMap,c=new WeakMap;let u={},f={},d={},h=new WeakMap,_=[],S=null,m=!1,p=null,A=null,w=null,v=null,E=null,b=null,C=null,x=new tt(0,0,0),y=0,I=!1,P=null,F=null,$=null,ie=null,H=null;const j=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,te=0;const oe=n.getParameter(n.VERSION);oe.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(oe)[1]),X=te>=1):oe.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(oe)[1]),X=te>=2);let Z=null,de={};const he=n.getParameter(n.SCISSOR_BOX),Ke=n.getParameter(n.VIEWPORT),st=new St().fromArray(he),Oe=new St().fromArray(Ke);function ee(D,fe,ne,xe){const be=new Uint8Array(4),ae=n.createTexture();n.bindTexture(D,ae),n.texParameteri(D,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(D,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ie=0;Ie<ne;Ie++)D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY?n.texImage3D(fe,0,n.RGBA,1,1,xe,0,n.RGBA,n.UNSIGNED_BYTE,be):n.texImage2D(fe+Ie,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,be);return ae}const le={};le[n.TEXTURE_2D]=ee(n.TEXTURE_2D,n.TEXTURE_2D,1),le[n.TEXTURE_CUBE_MAP]=ee(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),le[n.TEXTURE_2D_ARRAY]=ee(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),le[n.TEXTURE_3D]=ee(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ce(n.DEPTH_TEST),a.setFunc(cr),se(!1),pe(_l),ce(n.CULL_FACE),Y(Bn);function ce(D){u[D]!==!0&&(n.enable(D),u[D]=!0)}function ke(D){u[D]!==!1&&(n.disable(D),u[D]=!1)}function Ge(D,fe){return d[D]!==fe?(n.bindFramebuffer(D,fe),d[D]=fe,D===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=fe),D===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=fe),!0):!1}function O(D,fe){let ne=_,xe=!1;if(D){ne=h.get(fe),ne===void 0&&(ne=[],h.set(fe,ne));const be=D.textures;if(ne.length!==be.length||ne[0]!==n.COLOR_ATTACHMENT0){for(let ae=0,Ie=be.length;ae<Ie;ae++)ne[ae]=n.COLOR_ATTACHMENT0+ae;ne.length=be.length,xe=!0}}else ne[0]!==n.BACK&&(ne[0]=n.BACK,xe=!0);xe&&n.drawBuffers(ne)}function U(D){return S!==D?(n.useProgram(D),S=D,!0):!1}const R={[xi]:n.FUNC_ADD,[nu]:n.FUNC_SUBTRACT,[iu]:n.FUNC_REVERSE_SUBTRACT};R[ru]=n.MIN,R[su]=n.MAX;const N={[au]:n.ZERO,[ou]:n.ONE,[lu]:n.SRC_COLOR,[Ua]:n.SRC_ALPHA,[pu]:n.SRC_ALPHA_SATURATE,[fu]:n.DST_COLOR,[du]:n.DST_ALPHA,[cu]:n.ONE_MINUS_SRC_COLOR,[Na]:n.ONE_MINUS_SRC_ALPHA,[hu]:n.ONE_MINUS_DST_COLOR,[uu]:n.ONE_MINUS_DST_ALPHA,[mu]:n.CONSTANT_COLOR,[gu]:n.ONE_MINUS_CONSTANT_COLOR,[_u]:n.CONSTANT_ALPHA,[xu]:n.ONE_MINUS_CONSTANT_ALPHA};function Y(D,fe,ne,xe,be,ae,Ie,we,yt,gt){if(D===Bn){m===!0&&(ke(n.BLEND),m=!1);return}if(m===!1&&(ce(n.BLEND),m=!0),D!==tu){if(D!==p||gt!==I){if((A!==xi||E!==xi)&&(n.blendEquation(n.FUNC_ADD),A=xi,E=xi),gt)switch(D){case rr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Da:n.blendFunc(n.ONE,n.ONE);break;case xl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case vl:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:nt("WebGLState: Invalid blending: ",D);break}else switch(D){case rr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Da:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case xl:nt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case vl:nt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:nt("WebGLState: Invalid blending: ",D);break}w=null,v=null,b=null,C=null,x.set(0,0,0),y=0,p=D,I=gt}return}be=be||fe,ae=ae||ne,Ie=Ie||xe,(fe!==A||be!==E)&&(n.blendEquationSeparate(R[fe],R[be]),A=fe,E=be),(ne!==w||xe!==v||ae!==b||Ie!==C)&&(n.blendFuncSeparate(N[ne],N[xe],N[ae],N[Ie]),w=ne,v=xe,b=ae,C=Ie),(we.equals(x)===!1||yt!==y)&&(n.blendColor(we.r,we.g,we.b,yt),x.copy(we),y=yt),p=D,I=!1}function G(D,fe){D.side===On?ke(n.CULL_FACE):ce(n.CULL_FACE);let ne=D.side===$t;fe&&(ne=!ne),se(ne),D.blending===rr&&D.transparent===!1?Y(Bn):Y(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),s.setMask(D.colorWrite);const xe=D.stencilWrite;o.setTest(xe),xe&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Re(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?ce(n.SAMPLE_ALPHA_TO_COVERAGE):ke(n.SAMPLE_ALPHA_TO_COVERAGE)}function se(D){P!==D&&(D?n.frontFace(n.CW):n.frontFace(n.CCW),P=D)}function pe(D){D!==Qd?(ce(n.CULL_FACE),D!==F&&(D===_l?n.cullFace(n.BACK):D===jd?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ke(n.CULL_FACE),F=D}function Te(D){D!==$&&(X&&n.lineWidth(D),$=D)}function Re(D,fe,ne){D?(ce(n.POLYGON_OFFSET_FILL),(ie!==fe||H!==ne)&&(ie=fe,H=ne,a.getReversed()&&(fe=-fe),n.polygonOffset(fe,ne))):ke(n.POLYGON_OFFSET_FILL)}function Pe(D){D?ce(n.SCISSOR_TEST):ke(n.SCISSOR_TEST)}function Ve(D){D===void 0&&(D=n.TEXTURE0+j-1),Z!==D&&(n.activeTexture(D),Z=D)}function L(D,fe,ne){ne===void 0&&(Z===null?ne=n.TEXTURE0+j-1:ne=Z);let xe=de[ne];xe===void 0&&(xe={type:void 0,texture:void 0},de[ne]=xe),(xe.type!==D||xe.texture!==fe)&&(Z!==ne&&(n.activeTexture(ne),Z=ne),n.bindTexture(D,fe||le[D]),xe.type=D,xe.texture=fe)}function We(){const D=de[Z];D!==void 0&&D.type!==void 0&&(n.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function Je(){try{n.compressedTexImage2D(...arguments)}catch(D){nt("WebGLState:",D)}}function T(){try{n.compressedTexImage3D(...arguments)}catch(D){nt("WebGLState:",D)}}function g(){try{n.texSubImage2D(...arguments)}catch(D){nt("WebGLState:",D)}}function B(){try{n.texSubImage3D(...arguments)}catch(D){nt("WebGLState:",D)}}function q(){try{n.compressedTexSubImage2D(...arguments)}catch(D){nt("WebGLState:",D)}}function J(){try{n.compressedTexSubImage3D(...arguments)}catch(D){nt("WebGLState:",D)}}function ue(){try{n.texStorage2D(...arguments)}catch(D){nt("WebGLState:",D)}}function me(){try{n.texStorage3D(...arguments)}catch(D){nt("WebGLState:",D)}}function Q(){try{n.texImage2D(...arguments)}catch(D){nt("WebGLState:",D)}}function re(){try{n.texImage3D(...arguments)}catch(D){nt("WebGLState:",D)}}function ge(D){return f[D]!==void 0?f[D]:n.getParameter(D)}function Le(D,fe){f[D]!==fe&&(n.pixelStorei(D,fe),f[D]=fe)}function ve(D){st.equals(D)===!1&&(n.scissor(D.x,D.y,D.z,D.w),st.copy(D))}function _e(D){Oe.equals(D)===!1&&(n.viewport(D.x,D.y,D.z,D.w),Oe.copy(D))}function Ne(D,fe){let ne=c.get(fe);ne===void 0&&(ne=new WeakMap,c.set(fe,ne));let xe=ne.get(D);xe===void 0&&(xe=n.getUniformBlockIndex(fe,D.name),ne.set(D,xe))}function ze(D,fe){const xe=c.get(fe).get(D);l.get(fe)!==xe&&(n.uniformBlockBinding(fe,xe,D.__bindingPointIndex),l.set(fe,xe))}function qe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),u={},f={},Z=null,de={},d={},h=new WeakMap,_=[],S=null,m=!1,p=null,A=null,w=null,v=null,E=null,b=null,C=null,x=new tt(0,0,0),y=0,I=!1,P=null,F=null,$=null,ie=null,H=null,st.set(0,0,n.canvas.width,n.canvas.height),Oe.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:ce,disable:ke,bindFramebuffer:Ge,drawBuffers:O,useProgram:U,setBlending:Y,setMaterial:G,setFlipSided:se,setCullFace:pe,setLineWidth:Te,setPolygonOffset:Re,setScissorTest:Pe,activeTexture:Ve,bindTexture:L,unbindTexture:We,compressedTexImage2D:Je,compressedTexImage3D:T,texImage2D:Q,texImage3D:re,pixelStorei:Le,getParameter:ge,updateUBOMapping:Ne,uniformBlockBinding:ze,texStorage2D:ue,texStorage3D:me,texSubImage2D:g,texSubImage3D:B,compressedTexSubImage2D:q,compressedTexSubImage3D:J,scissor:ve,viewport:_e,reset:qe}}function E_(n,e,t,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ye,u=new WeakMap,f=new Set;let d;const h=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(T,g){return _?new OffscreenCanvas(T,g):Br("canvas")}function m(T,g,B){let q=1;const J=Je(T);if((J.width>B||J.height>B)&&(q=B/Math.max(J.width,J.height)),q<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const ue=Math.floor(q*J.width),me=Math.floor(q*J.height);d===void 0&&(d=S(ue,me));const Q=g?S(ue,me):d;return Q.width=ue,Q.height=me,Q.getContext("2d").drawImage(T,0,0,ue,me),He("WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+ue+"x"+me+")."),Q}else return"data"in T&&He("WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),T;return T}function p(T){return T.generateMipmaps}function A(T){n.generateMipmap(T)}function w(T){return T.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?n.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function v(T,g,B,q,J,ue=!1){if(T!==null){if(n[T]!==void 0)return n[T];He("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let me;q&&(me=e.get("EXT_texture_norm16"),me||He("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Q=g;if(g===n.RED&&(B===n.FLOAT&&(Q=n.R32F),B===n.HALF_FLOAT&&(Q=n.R16F),B===n.UNSIGNED_BYTE&&(Q=n.R8),B===n.UNSIGNED_SHORT&&me&&(Q=me.R16_EXT),B===n.SHORT&&me&&(Q=me.R16_SNORM_EXT)),g===n.RED_INTEGER&&(B===n.UNSIGNED_BYTE&&(Q=n.R8UI),B===n.UNSIGNED_SHORT&&(Q=n.R16UI),B===n.UNSIGNED_INT&&(Q=n.R32UI),B===n.BYTE&&(Q=n.R8I),B===n.SHORT&&(Q=n.R16I),B===n.INT&&(Q=n.R32I)),g===n.RG&&(B===n.FLOAT&&(Q=n.RG32F),B===n.HALF_FLOAT&&(Q=n.RG16F),B===n.UNSIGNED_BYTE&&(Q=n.RG8),B===n.UNSIGNED_SHORT&&me&&(Q=me.RG16_EXT),B===n.SHORT&&me&&(Q=me.RG16_SNORM_EXT)),g===n.RG_INTEGER&&(B===n.UNSIGNED_BYTE&&(Q=n.RG8UI),B===n.UNSIGNED_SHORT&&(Q=n.RG16UI),B===n.UNSIGNED_INT&&(Q=n.RG32UI),B===n.BYTE&&(Q=n.RG8I),B===n.SHORT&&(Q=n.RG16I),B===n.INT&&(Q=n.RG32I)),g===n.RGB_INTEGER&&(B===n.UNSIGNED_BYTE&&(Q=n.RGB8UI),B===n.UNSIGNED_SHORT&&(Q=n.RGB16UI),B===n.UNSIGNED_INT&&(Q=n.RGB32UI),B===n.BYTE&&(Q=n.RGB8I),B===n.SHORT&&(Q=n.RGB16I),B===n.INT&&(Q=n.RGB32I)),g===n.RGBA_INTEGER&&(B===n.UNSIGNED_BYTE&&(Q=n.RGBA8UI),B===n.UNSIGNED_SHORT&&(Q=n.RGBA16UI),B===n.UNSIGNED_INT&&(Q=n.RGBA32UI),B===n.BYTE&&(Q=n.RGBA8I),B===n.SHORT&&(Q=n.RGBA16I),B===n.INT&&(Q=n.RGBA32I)),g===n.RGB&&(B===n.UNSIGNED_SHORT&&me&&(Q=me.RGB16_EXT),B===n.SHORT&&me&&(Q=me.RGB16_SNORM_EXT),B===n.UNSIGNED_INT_5_9_9_9_REV&&(Q=n.RGB9_E5),B===n.UNSIGNED_INT_10F_11F_11F_REV&&(Q=n.R11F_G11F_B10F)),g===n.RGBA){const re=ue?Is:it.getTransfer(J);B===n.FLOAT&&(Q=n.RGBA32F),B===n.HALF_FLOAT&&(Q=n.RGBA16F),B===n.UNSIGNED_BYTE&&(Q=re===dt?n.SRGB8_ALPHA8:n.RGBA8),B===n.UNSIGNED_SHORT&&me&&(Q=me.RGBA16_EXT),B===n.SHORT&&me&&(Q=me.RGBA16_SNORM_EXT),B===n.UNSIGNED_SHORT_4_4_4_4&&(Q=n.RGBA4),B===n.UNSIGNED_SHORT_5_5_5_1&&(Q=n.RGB5_A1)}return(Q===n.R16F||Q===n.R32F||Q===n.RG16F||Q===n.RG32F||Q===n.RGBA16F||Q===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function E(T,g){let B;return T?g===null||g===Cn||g===Or?B=n.DEPTH24_STENCIL8:g===Tn?B=n.DEPTH32F_STENCIL8:g===Fr&&(B=n.DEPTH24_STENCIL8,He("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===Cn||g===Or?B=n.DEPTH_COMPONENT24:g===Tn?B=n.DEPTH_COMPONENT32F:g===Fr&&(B=n.DEPTH_COMPONENT16),B}function b(T,g){return p(T)===!0||T.isFramebufferTexture&&T.minFilter!==At&&T.minFilter!==Rt?Math.log2(Math.max(g.width,g.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?g.mipmaps.length:1}function C(T){const g=T.target;g.removeEventListener("dispose",C),y(g),g.isVideoTexture&&u.delete(g),g.isHTMLTexture&&f.delete(g)}function x(T){const g=T.target;g.removeEventListener("dispose",x),P(g)}function y(T){const g=i.get(T);if(g.__webglInit===void 0)return;const B=T.source,q=h.get(B);if(q){const J=q[g.__cacheKey];J.usedTimes--,J.usedTimes===0&&I(T),Object.keys(q).length===0&&h.delete(B)}i.remove(T)}function I(T){const g=i.get(T);n.deleteTexture(g.__webglTexture);const B=T.source,q=h.get(B);delete q[g.__cacheKey],a.memory.textures--}function P(T){const g=i.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),i.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(g.__webglFramebuffer[q]))for(let J=0;J<g.__webglFramebuffer[q].length;J++)n.deleteFramebuffer(g.__webglFramebuffer[q][J]);else n.deleteFramebuffer(g.__webglFramebuffer[q]);g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer[q])}else{if(Array.isArray(g.__webglFramebuffer))for(let q=0;q<g.__webglFramebuffer.length;q++)n.deleteFramebuffer(g.__webglFramebuffer[q]);else n.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&n.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let q=0;q<g.__webglColorRenderbuffer.length;q++)g.__webglColorRenderbuffer[q]&&n.deleteRenderbuffer(g.__webglColorRenderbuffer[q]);g.__webglDepthRenderbuffer&&n.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const B=T.textures;for(let q=0,J=B.length;q<J;q++){const ue=i.get(B[q]);ue.__webglTexture&&(n.deleteTexture(ue.__webglTexture),a.memory.textures--),i.remove(B[q])}i.remove(T)}let F=0;function $(){F=0}function ie(){return F}function H(T){F=T}function j(){const T=F;return T>=r.maxTextures&&He("WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+r.maxTextures),F+=1,T}function X(T){const g=[];return g.push(T.wrapS),g.push(T.wrapT),g.push(T.wrapR||0),g.push(T.magFilter),g.push(T.minFilter),g.push(T.anisotropy),g.push(T.internalFormat),g.push(T.format),g.push(T.type),g.push(T.generateMipmaps),g.push(T.premultiplyAlpha),g.push(T.flipY),g.push(T.unpackAlignment),g.push(T.colorSpace),g.join()}function te(T,g){const B=i.get(T);if(T.isVideoTexture&&L(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&B.__version!==T.version){const q=T.image;if(q===null)He("WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)He("WebGLRenderer: Texture marked for update but image is incomplete");else{ke(B,T,g);return}}else T.isExternalTexture&&(B.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,B.__webglTexture,n.TEXTURE0+g)}function oe(T,g){const B=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&B.__version!==T.version){ke(B,T,g);return}else T.isExternalTexture&&(B.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,B.__webglTexture,n.TEXTURE0+g)}function Z(T,g){const B=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&B.__version!==T.version){ke(B,T,g);return}t.bindTexture(n.TEXTURE_3D,B.__webglTexture,n.TEXTURE0+g)}function de(T,g){const B=i.get(T);if(T.isCubeDepthTexture!==!0&&T.version>0&&B.__version!==T.version){Ge(B,T,g);return}t.bindTexture(n.TEXTURE_CUBE_MAP,B.__webglTexture,n.TEXTURE0+g)}const he={[Va]:n.REPEAT,[kn]:n.CLAMP_TO_EDGE,[Wa]:n.MIRRORED_REPEAT},Ke={[At]:n.NEAREST,[Su]:n.NEAREST_MIPMAP_NEAREST,[Wr]:n.NEAREST_MIPMAP_LINEAR,[Rt]:n.LINEAR,[Xs]:n.LINEAR_MIPMAP_NEAREST,[Si]:n.LINEAR_MIPMAP_LINEAR},st={[Eu]:n.NEVER,[Cu]:n.ALWAYS,[Tu]:n.LESS,[Ho]:n.LEQUAL,[Au]:n.EQUAL,[Go]:n.GEQUAL,[wu]:n.GREATER,[Ru]:n.NOTEQUAL};function Oe(T,g){if(g.type===Tn&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===Rt||g.magFilter===Xs||g.magFilter===Wr||g.magFilter===Si||g.minFilter===Rt||g.minFilter===Xs||g.minFilter===Wr||g.minFilter===Si)&&He("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(T,n.TEXTURE_WRAP_S,he[g.wrapS]),n.texParameteri(T,n.TEXTURE_WRAP_T,he[g.wrapT]),(T===n.TEXTURE_3D||T===n.TEXTURE_2D_ARRAY)&&n.texParameteri(T,n.TEXTURE_WRAP_R,he[g.wrapR]),n.texParameteri(T,n.TEXTURE_MAG_FILTER,Ke[g.magFilter]),n.texParameteri(T,n.TEXTURE_MIN_FILTER,Ke[g.minFilter]),g.compareFunction&&(n.texParameteri(T,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(T,n.TEXTURE_COMPARE_FUNC,st[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===At||g.minFilter!==Wr&&g.minFilter!==Si||g.type===Tn&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||i.get(g).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");n.texParameterf(T,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,r.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy}}}function ee(T,g){let B=!1;T.__webglInit===void 0&&(T.__webglInit=!0,g.addEventListener("dispose",C));const q=g.source;let J=h.get(q);J===void 0&&(J={},h.set(q,J));const ue=X(g);if(ue!==T.__cacheKey){J[ue]===void 0&&(J[ue]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,B=!0),J[ue].usedTimes++;const me=J[T.__cacheKey];me!==void 0&&(J[T.__cacheKey].usedTimes--,me.usedTimes===0&&I(g)),T.__cacheKey=ue,T.__webglTexture=J[ue].texture}return B}function le(T,g,B){return Math.floor(Math.floor(T/B)/g)}function ce(T,g,B,q){const ue=T.updateRanges;if(ue.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,g.width,g.height,B,q,g.data);else{ue.sort((Le,ve)=>Le.start-ve.start);let me=0;for(let Le=1;Le<ue.length;Le++){const ve=ue[me],_e=ue[Le],Ne=ve.start+ve.count,ze=le(_e.start,g.width,4),qe=le(ve.start,g.width,4);_e.start<=Ne+1&&ze===qe&&le(_e.start+_e.count-1,g.width,4)===ze?ve.count=Math.max(ve.count,_e.start+_e.count-ve.start):(++me,ue[me]=_e)}ue.length=me+1;const Q=t.getParameter(n.UNPACK_ROW_LENGTH),re=t.getParameter(n.UNPACK_SKIP_PIXELS),ge=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,g.width);for(let Le=0,ve=ue.length;Le<ve;Le++){const _e=ue[Le],Ne=Math.floor(_e.start/4),ze=Math.ceil(_e.count/4),qe=Ne%g.width,D=Math.floor(Ne/g.width),fe=ze,ne=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,qe),t.pixelStorei(n.UNPACK_SKIP_ROWS,D),t.texSubImage2D(n.TEXTURE_2D,0,qe,D,fe,ne,B,q,g.data)}T.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,Q),t.pixelStorei(n.UNPACK_SKIP_PIXELS,re),t.pixelStorei(n.UNPACK_SKIP_ROWS,ge)}}function ke(T,g,B){let q=n.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(q=n.TEXTURE_2D_ARRAY),g.isData3DTexture&&(q=n.TEXTURE_3D);const J=ee(T,g),ue=g.source;t.bindTexture(q,T.__webglTexture,n.TEXTURE0+B);const me=i.get(ue);if(ue.version!==me.__version||J===!0){if(t.activeTexture(n.TEXTURE0+B),(typeof ImageBitmap<"u"&&g.image instanceof ImageBitmap)===!1){const ne=it.getPrimaries(it.workingColorSpace),xe=g.colorSpace===ti?null:it.getPrimaries(g.colorSpace),be=g.colorSpace===ti||ne===xe?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,be)}t.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment);let re=m(g.image,!1,r.maxTextureSize);re=We(g,re);const ge=s.convert(g.format,g.colorSpace),Le=s.convert(g.type);let ve=v(g.internalFormat,ge,Le,g.normalized,g.colorSpace,g.isVideoTexture);Oe(q,g);let _e;const Ne=g.mipmaps,ze=g.isVideoTexture!==!0,qe=me.__version===void 0||J===!0,D=ue.dataReady,fe=b(g,re);if(g.isDepthTexture)ve=E(g.format===yi,g.type),qe&&(ze?t.texStorage2D(n.TEXTURE_2D,1,ve,re.width,re.height):t.texImage2D(n.TEXTURE_2D,0,ve,re.width,re.height,0,ge,Le,null));else if(g.isDataTexture)if(Ne.length>0){ze&&qe&&t.texStorage2D(n.TEXTURE_2D,fe,ve,Ne[0].width,Ne[0].height);for(let ne=0,xe=Ne.length;ne<xe;ne++)_e=Ne[ne],ze?D&&t.texSubImage2D(n.TEXTURE_2D,ne,0,0,_e.width,_e.height,ge,Le,_e.data):t.texImage2D(n.TEXTURE_2D,ne,ve,_e.width,_e.height,0,ge,Le,_e.data);g.generateMipmaps=!1}else ze?(qe&&t.texStorage2D(n.TEXTURE_2D,fe,ve,re.width,re.height),D&&ce(g,re,ge,Le)):t.texImage2D(n.TEXTURE_2D,0,ve,re.width,re.height,0,ge,Le,re.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){ze&&qe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,fe,ve,Ne[0].width,Ne[0].height,re.depth);for(let ne=0,xe=Ne.length;ne<xe;ne++)if(_e=Ne[ne],g.format!==hn)if(ge!==null)if(ze){if(D)if(g.layerUpdates.size>0){const be=Jl(_e.width,_e.height,g.format,g.type);for(const ae of g.layerUpdates){const Ie=_e.data.subarray(ae*be/_e.data.BYTES_PER_ELEMENT,(ae+1)*be/_e.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ne,0,0,ae,_e.width,_e.height,1,ge,Ie)}g.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ne,0,0,0,_e.width,_e.height,re.depth,ge,_e.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ne,ve,_e.width,_e.height,re.depth,0,_e.data,0,0);else He("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ze?D&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ne,0,0,0,_e.width,_e.height,re.depth,ge,Le,_e.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ne,ve,_e.width,_e.height,re.depth,0,ge,Le,_e.data)}else{ze&&qe&&t.texStorage2D(n.TEXTURE_2D,fe,ve,Ne[0].width,Ne[0].height);for(let ne=0,xe=Ne.length;ne<xe;ne++)_e=Ne[ne],g.format!==hn?ge!==null?ze?D&&t.compressedTexSubImage2D(n.TEXTURE_2D,ne,0,0,_e.width,_e.height,ge,_e.data):t.compressedTexImage2D(n.TEXTURE_2D,ne,ve,_e.width,_e.height,0,_e.data):He("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ze?D&&t.texSubImage2D(n.TEXTURE_2D,ne,0,0,_e.width,_e.height,ge,Le,_e.data):t.texImage2D(n.TEXTURE_2D,ne,ve,_e.width,_e.height,0,ge,Le,_e.data)}else if(g.isDataArrayTexture)if(ze){if(qe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,fe,ve,re.width,re.height,re.depth),D)if(g.layerUpdates.size>0){const ne=Jl(re.width,re.height,g.format,g.type);for(const xe of g.layerUpdates){const be=re.data.subarray(xe*ne/re.data.BYTES_PER_ELEMENT,(xe+1)*ne/re.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,xe,re.width,re.height,1,ge,Le,be)}g.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,ge,Le,re.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,ve,re.width,re.height,re.depth,0,ge,Le,re.data);else if(g.isData3DTexture)ze?(qe&&t.texStorage3D(n.TEXTURE_3D,fe,ve,re.width,re.height,re.depth),D&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,ge,Le,re.data)):t.texImage3D(n.TEXTURE_3D,0,ve,re.width,re.height,re.depth,0,ge,Le,re.data);else if(g.isFramebufferTexture){if(qe)if(ze)t.texStorage2D(n.TEXTURE_2D,fe,ve,re.width,re.height);else{let ne=re.width,xe=re.height;for(let be=0;be<fe;be++)t.texImage2D(n.TEXTURE_2D,be,ve,ne,xe,0,ge,Le,null),ne>>=1,xe>>=1}}else if(g.isHTMLTexture){if("texElementImage2D"in n){const ne=n.canvas;if(ne.hasAttribute("layoutsubtree")||ne.setAttribute("layoutsubtree","true"),re.parentNode!==ne){ne.appendChild(re),f.add(g),ne.onpaint=xe=>{const be=xe.changedElements;for(const ae of f)be.includes(ae.image)&&(ae.needsUpdate=!0)},ne.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,re);else{const be=n.RGBA,ae=n.RGBA,Ie=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,be,ae,Ie,re)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Ne.length>0){if(ze&&qe){const ne=Je(Ne[0]);t.texStorage2D(n.TEXTURE_2D,fe,ve,ne.width,ne.height)}for(let ne=0,xe=Ne.length;ne<xe;ne++)_e=Ne[ne],ze?D&&t.texSubImage2D(n.TEXTURE_2D,ne,0,0,ge,Le,_e):t.texImage2D(n.TEXTURE_2D,ne,ve,ge,Le,_e);g.generateMipmaps=!1}else if(ze){if(qe){const ne=Je(re);t.texStorage2D(n.TEXTURE_2D,fe,ve,ne.width,ne.height)}D&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ge,Le,re)}else t.texImage2D(n.TEXTURE_2D,0,ve,ge,Le,re);p(g)&&A(q),me.__version=ue.version,g.onUpdate&&g.onUpdate(g)}T.__version=g.version}function Ge(T,g,B){if(g.image.length!==6)return;const q=ee(T,g),J=g.source;t.bindTexture(n.TEXTURE_CUBE_MAP,T.__webglTexture,n.TEXTURE0+B);const ue=i.get(J);if(J.version!==ue.__version||q===!0){t.activeTexture(n.TEXTURE0+B);const me=it.getPrimaries(it.workingColorSpace),Q=g.colorSpace===ti?null:it.getPrimaries(g.colorSpace),re=g.colorSpace===ti||me===Q?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,re);const ge=g.isCompressedTexture||g.image[0].isCompressedTexture,Le=g.image[0]&&g.image[0].isDataTexture,ve=[];for(let ae=0;ae<6;ae++)!ge&&!Le?ve[ae]=m(g.image[ae],!0,r.maxCubemapSize):ve[ae]=Le?g.image[ae].image:g.image[ae],ve[ae]=We(g,ve[ae]);const _e=ve[0],Ne=s.convert(g.format,g.colorSpace),ze=s.convert(g.type),qe=v(g.internalFormat,Ne,ze,g.normalized,g.colorSpace),D=g.isVideoTexture!==!0,fe=ue.__version===void 0||q===!0,ne=J.dataReady;let xe=b(g,_e);Oe(n.TEXTURE_CUBE_MAP,g);let be;if(ge){D&&fe&&t.texStorage2D(n.TEXTURE_CUBE_MAP,xe,qe,_e.width,_e.height);for(let ae=0;ae<6;ae++){be=ve[ae].mipmaps;for(let Ie=0;Ie<be.length;Ie++){const we=be[Ie];g.format!==hn?Ne!==null?D?ne&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ie,0,0,we.width,we.height,Ne,we.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ie,qe,we.width,we.height,0,we.data):He("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?ne&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ie,0,0,we.width,we.height,Ne,ze,we.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ie,qe,we.width,we.height,0,Ne,ze,we.data)}}}else{if(be=g.mipmaps,D&&fe){be.length>0&&xe++;const ae=Je(ve[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,xe,qe,ae.width,ae.height)}for(let ae=0;ae<6;ae++)if(Le){D?ne&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,ve[ae].width,ve[ae].height,Ne,ze,ve[ae].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,qe,ve[ae].width,ve[ae].height,0,Ne,ze,ve[ae].data);for(let Ie=0;Ie<be.length;Ie++){const yt=be[Ie].image[ae].image;D?ne&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ie+1,0,0,yt.width,yt.height,Ne,ze,yt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ie+1,qe,yt.width,yt.height,0,Ne,ze,yt.data)}}else{D?ne&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,Ne,ze,ve[ae]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,qe,Ne,ze,ve[ae]);for(let Ie=0;Ie<be.length;Ie++){const we=be[Ie];D?ne&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ie+1,0,0,Ne,ze,we.image[ae]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ie+1,qe,Ne,ze,we.image[ae])}}}p(g)&&A(n.TEXTURE_CUBE_MAP),ue.__version=J.version,g.onUpdate&&g.onUpdate(g)}T.__version=g.version}function O(T,g,B,q,J,ue){const me=s.convert(B.format,B.colorSpace),Q=s.convert(B.type),re=v(B.internalFormat,me,Q,B.normalized,B.colorSpace),ge=i.get(g),Le=i.get(B);if(Le.__renderTarget=g,!ge.__hasExternalTextures){const ve=Math.max(1,g.width>>ue),_e=Math.max(1,g.height>>ue);J===n.TEXTURE_3D||J===n.TEXTURE_2D_ARRAY?t.texImage3D(J,ue,re,ve,_e,g.depth,0,me,Q,null):t.texImage2D(J,ue,re,ve,_e,0,me,Q,null)}t.bindFramebuffer(n.FRAMEBUFFER,T),Ve(g)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,q,J,Le.__webglTexture,0,Pe(g)):(J===n.TEXTURE_2D||J>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,q,J,Le.__webglTexture,ue),t.bindFramebuffer(n.FRAMEBUFFER,null)}function U(T,g,B){if(n.bindRenderbuffer(n.RENDERBUFFER,T),g.depthBuffer){const q=g.depthTexture,J=q&&q.isDepthTexture?q.type:null,ue=E(g.stencilBuffer,J),me=g.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Ve(g)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Pe(g),ue,g.width,g.height):B?n.renderbufferStorageMultisample(n.RENDERBUFFER,Pe(g),ue,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,ue,g.width,g.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,me,n.RENDERBUFFER,T)}else{const q=g.textures;for(let J=0;J<q.length;J++){const ue=q[J],me=s.convert(ue.format,ue.colorSpace),Q=s.convert(ue.type),re=v(ue.internalFormat,me,Q,ue.normalized,ue.colorSpace);Ve(g)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Pe(g),re,g.width,g.height):B?n.renderbufferStorageMultisample(n.RENDERBUFFER,Pe(g),re,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,re,g.width,g.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function R(T,g,B){const q=g.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,T),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const J=i.get(g.depthTexture);if(J.__renderTarget=g,(!J.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),q){if(J.__webglInit===void 0&&(J.__webglInit=!0,g.depthTexture.addEventListener("dispose",C)),J.__webglTexture===void 0){J.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,J.__webglTexture),Oe(n.TEXTURE_CUBE_MAP,g.depthTexture);const ge=s.convert(g.depthTexture.format),Le=s.convert(g.depthTexture.type);let ve;g.depthTexture.format===Vn?ve=n.DEPTH_COMPONENT24:g.depthTexture.format===yi&&(ve=n.DEPTH24_STENCIL8);for(let _e=0;_e<6;_e++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,ve,g.width,g.height,0,ge,Le,null)}}else te(g.depthTexture,0);const ue=J.__webglTexture,me=Pe(g),Q=q?n.TEXTURE_CUBE_MAP_POSITIVE_X+B:n.TEXTURE_2D,re=g.depthTexture.format===yi?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(g.depthTexture.format===Vn)Ve(g)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,re,Q,ue,0,me):n.framebufferTexture2D(n.FRAMEBUFFER,re,Q,ue,0);else if(g.depthTexture.format===yi)Ve(g)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,re,Q,ue,0,me):n.framebufferTexture2D(n.FRAMEBUFFER,re,Q,ue,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function N(T){const g=i.get(T),B=T.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==T.depthTexture){const q=T.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),q){const J=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,q.removeEventListener("dispose",J)};q.addEventListener("dispose",J),g.__depthDisposeCallback=J}g.__boundDepthTexture=q}if(T.depthTexture&&!g.__autoAllocateDepthBuffer)if(B)for(let q=0;q<6;q++)R(g.__webglFramebuffer[q],T,q);else{const q=T.texture.mipmaps;q&&q.length>0?R(g.__webglFramebuffer[0],T,0):R(g.__webglFramebuffer,T,0)}else if(B){g.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[q]),g.__webglDepthbuffer[q]===void 0)g.__webglDepthbuffer[q]=n.createRenderbuffer(),U(g.__webglDepthbuffer[q],T,!1);else{const J=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ue=g.__webglDepthbuffer[q];n.bindRenderbuffer(n.RENDERBUFFER,ue),n.framebufferRenderbuffer(n.FRAMEBUFFER,J,n.RENDERBUFFER,ue)}}else{const q=T.texture.mipmaps;if(q&&q.length>0?t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=n.createRenderbuffer(),U(g.__webglDepthbuffer,T,!1);else{const J=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ue=g.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ue),n.framebufferRenderbuffer(n.FRAMEBUFFER,J,n.RENDERBUFFER,ue)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Y(T,g,B){const q=i.get(T);g!==void 0&&O(q.__webglFramebuffer,T,T.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),B!==void 0&&N(T)}function G(T){const g=T.texture,B=i.get(T),q=i.get(g);T.addEventListener("dispose",x);const J=T.textures,ue=T.isWebGLCubeRenderTarget===!0,me=J.length>1;if(me||(q.__webglTexture===void 0&&(q.__webglTexture=n.createTexture()),q.__version=g.version,a.memory.textures++),ue){B.__webglFramebuffer=[];for(let Q=0;Q<6;Q++)if(g.mipmaps&&g.mipmaps.length>0){B.__webglFramebuffer[Q]=[];for(let re=0;re<g.mipmaps.length;re++)B.__webglFramebuffer[Q][re]=n.createFramebuffer()}else B.__webglFramebuffer[Q]=n.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){B.__webglFramebuffer=[];for(let Q=0;Q<g.mipmaps.length;Q++)B.__webglFramebuffer[Q]=n.createFramebuffer()}else B.__webglFramebuffer=n.createFramebuffer();if(me)for(let Q=0,re=J.length;Q<re;Q++){const ge=i.get(J[Q]);ge.__webglTexture===void 0&&(ge.__webglTexture=n.createTexture(),a.memory.textures++)}if(T.samples>0&&Ve(T)===!1){B.__webglMultisampledFramebuffer=n.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let Q=0;Q<J.length;Q++){const re=J[Q];B.__webglColorRenderbuffer[Q]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,B.__webglColorRenderbuffer[Q]);const ge=s.convert(re.format,re.colorSpace),Le=s.convert(re.type),ve=v(re.internalFormat,ge,Le,re.normalized,re.colorSpace,T.isXRRenderTarget===!0),_e=Pe(T);n.renderbufferStorageMultisample(n.RENDERBUFFER,_e,ve,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Q,n.RENDERBUFFER,B.__webglColorRenderbuffer[Q])}n.bindRenderbuffer(n.RENDERBUFFER,null),T.depthBuffer&&(B.__webglDepthRenderbuffer=n.createRenderbuffer(),U(B.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ue){t.bindTexture(n.TEXTURE_CUBE_MAP,q.__webglTexture),Oe(n.TEXTURE_CUBE_MAP,g);for(let Q=0;Q<6;Q++)if(g.mipmaps&&g.mipmaps.length>0)for(let re=0;re<g.mipmaps.length;re++)O(B.__webglFramebuffer[Q][re],T,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,re);else O(B.__webglFramebuffer[Q],T,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0);p(g)&&A(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(me){for(let Q=0,re=J.length;Q<re;Q++){const ge=J[Q],Le=i.get(ge);let ve=n.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ve=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ve,Le.__webglTexture),Oe(ve,ge),O(B.__webglFramebuffer,T,ge,n.COLOR_ATTACHMENT0+Q,ve,0),p(ge)&&A(ve)}t.unbindTexture()}else{let Q=n.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(Q=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Q,q.__webglTexture),Oe(Q,g),g.mipmaps&&g.mipmaps.length>0)for(let re=0;re<g.mipmaps.length;re++)O(B.__webglFramebuffer[re],T,g,n.COLOR_ATTACHMENT0,Q,re);else O(B.__webglFramebuffer,T,g,n.COLOR_ATTACHMENT0,Q,0);p(g)&&A(Q),t.unbindTexture()}T.depthBuffer&&N(T)}function se(T){const g=T.textures;for(let B=0,q=g.length;B<q;B++){const J=g[B];if(p(J)){const ue=w(T),me=i.get(J).__webglTexture;t.bindTexture(ue,me),A(ue),t.unbindTexture()}}}const pe=[],Te=[];function Re(T){if(T.samples>0){if(Ve(T)===!1){const g=T.textures,B=T.width,q=T.height;let J=n.COLOR_BUFFER_BIT;const ue=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,me=i.get(T),Q=g.length>1;if(Q)for(let ge=0;ge<g.length;ge++)t.bindFramebuffer(n.FRAMEBUFFER,me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,me.__webglMultisampledFramebuffer);const re=T.texture.mipmaps;re&&re.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,me.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,me.__webglFramebuffer);for(let ge=0;ge<g.length;ge++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(J|=n.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(J|=n.STENCIL_BUFFER_BIT)),Q){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,me.__webglColorRenderbuffer[ge]);const Le=i.get(g[ge]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Le,0)}n.blitFramebuffer(0,0,B,q,0,0,B,q,J,n.NEAREST),l===!0&&(pe.length=0,Te.length=0,pe.push(n.COLOR_ATTACHMENT0+ge),T.depthBuffer&&T.resolveDepthBuffer===!1&&(pe.push(ue),Te.push(ue),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Te)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,pe))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Q)for(let ge=0;ge<g.length;ge++){t.bindFramebuffer(n.FRAMEBUFFER,me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.RENDERBUFFER,me.__webglColorRenderbuffer[ge]);const Le=i.get(g[ge]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.TEXTURE_2D,Le,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,me.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const g=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[g])}}}function Pe(T){return Math.min(r.maxSamples,T.samples)}function Ve(T){const g=i.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function L(T){const g=a.render.frame;u.get(T)!==g&&(u.set(T,g),T.update())}function We(T,g){const B=T.colorSpace,q=T.format,J=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||B!==Ps&&B!==ti&&(it.getTransfer(B)===dt?(q!==hn||J!==jt)&&He("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):nt("WebGLTextures: Unsupported texture color space:",B)),g}function Je(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=j,this.resetTextureUnits=$,this.getTextureUnits=ie,this.setTextureUnits=H,this.setTexture2D=te,this.setTexture2DArray=oe,this.setTexture3D=Z,this.setTextureCube=de,this.rebindTextures=Y,this.setupRenderTarget=G,this.updateRenderTargetMipmap=se,this.updateMultisampleRenderTarget=Re,this.setupDepthRenderbuffer=N,this.setupFrameBufferTexture=O,this.useMultisampledRTT=Ve,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function T_(n,e){function t(i,r=ti){let s;const a=it.getTransfer(r);if(i===jt)return n.UNSIGNED_BYTE;if(i===Fo)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Oo)return n.UNSIGNED_SHORT_5_5_5_1;if(i===cd)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===dd)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===od)return n.BYTE;if(i===ld)return n.SHORT;if(i===Fr)return n.UNSIGNED_SHORT;if(i===No)return n.INT;if(i===Cn)return n.UNSIGNED_INT;if(i===Tn)return n.FLOAT;if(i===Gn)return n.HALF_FLOAT;if(i===ud)return n.ALPHA;if(i===fd)return n.RGB;if(i===hn)return n.RGBA;if(i===Vn)return n.DEPTH_COMPONENT;if(i===yi)return n.DEPTH_STENCIL;if(i===hd)return n.RED;if(i===ko)return n.RED_INTEGER;if(i===Ei)return n.RG;if(i===Bo)return n.RG_INTEGER;if(i===zo)return n.RGBA_INTEGER;if(i===Ss||i===ys||i===bs||i===Es)if(a===dt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Ss)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ys)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===bs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Es)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Ss)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ys)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===bs)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Es)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Xa||i===Ya||i===qa||i===$a)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Xa)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ya)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===qa)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===$a)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ka||i===Za||i===Ja||i===Qa||i===ja||i===Rs||i===eo)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Ka||i===Za)return a===dt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Ja)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Qa)return s.COMPRESSED_R11_EAC;if(i===ja)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Rs)return s.COMPRESSED_RG11_EAC;if(i===eo)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===to||i===no||i===io||i===ro||i===so||i===ao||i===oo||i===lo||i===co||i===uo||i===fo||i===ho||i===po||i===mo)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===to)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===no)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===io)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ro)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===so)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ao)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===oo)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===lo)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===co)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===uo)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===fo)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ho)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===po)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===mo)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===go||i===_o||i===xo)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===go)return a===dt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===_o)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===xo)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===vo||i===Mo||i===Cs||i===So)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===vo)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Mo)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Cs)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===So)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Or?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const A_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,w_=`
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

}`;class R_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new yd(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Pn({vertexShader:A_,fragmentShader:w_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ut(new li(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class C_ extends Ri{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,f=null,d=null,h=null,_=null;const S=typeof XRWebGLBinding<"u",m=new R_,p={},A=t.getContextAttributes();let w=null,v=null;const E=[],b=[],C=new Ye;let x=null;const y=new Qt;y.viewport=new St;const I=new Qt;I.viewport=new St;const P=[y,I],F=new kf;let $=null,ie=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let le=E[ee];return le===void 0&&(le=new Js,E[ee]=le),le.getTargetRaySpace()},this.getControllerGrip=function(ee){let le=E[ee];return le===void 0&&(le=new Js,E[ee]=le),le.getGripSpace()},this.getHand=function(ee){let le=E[ee];return le===void 0&&(le=new Js,E[ee]=le),le.getHandSpace()};function H(ee){const le=b.indexOf(ee.inputSource);if(le===-1)return;const ce=E[le];ce!==void 0&&(ce.update(ee.inputSource,ee.frame,c||a),ce.dispatchEvent({type:ee.type,data:ee.inputSource}))}function j(){r.removeEventListener("select",H),r.removeEventListener("selectstart",H),r.removeEventListener("selectend",H),r.removeEventListener("squeeze",H),r.removeEventListener("squeezestart",H),r.removeEventListener("squeezeend",H),r.removeEventListener("end",j),r.removeEventListener("inputsourceschange",X);for(let ee=0;ee<E.length;ee++){const le=b[ee];le!==null&&(b[ee]=null,E[ee].disconnect(le))}$=null,ie=null,m.reset();for(const ee in p)delete p[ee];e.setRenderTarget(w),h=null,d=null,f=null,r=null,v=null,Oe.stop(),i.isPresenting=!1,e.setPixelRatio(x),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ee){s=ee,i.isPresenting===!0&&He("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){o=ee,i.isPresenting===!0&&He("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(ee){c=ee},this.getBaseLayer=function(){return d!==null?d:h},this.getBinding=function(){return f===null&&S&&(f=new XRWebGLBinding(r,t)),f},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(ee){if(r=ee,r!==null){if(w=e.getRenderTarget(),r.addEventListener("select",H),r.addEventListener("selectstart",H),r.addEventListener("selectend",H),r.addEventListener("squeeze",H),r.addEventListener("squeezestart",H),r.addEventListener("squeezeend",H),r.addEventListener("end",j),r.addEventListener("inputsourceschange",X),A.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(C),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let ce=null,ke=null,Ge=null;A.depth&&(Ge=A.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ce=A.stencil?yi:Vn,ke=A.stencil?Or:Cn);const O={colorFormat:t.RGBA8,depthFormat:Ge,scaleFactor:s};f=this.getBinding(),d=f.createProjectionLayer(O),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),v=new Rn(d.textureWidth,d.textureHeight,{format:hn,type:jt,depthTexture:new ur(d.textureWidth,d.textureHeight,ke,void 0,void 0,void 0,void 0,void 0,void 0,ce),stencilBuffer:A.stencil,colorSpace:e.outputColorSpace,samples:A.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const ce={antialias:A.antialias,alpha:!0,depth:A.depth,stencil:A.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(r,t,ce),r.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),v=new Rn(h.framebufferWidth,h.framebufferHeight,{format:hn,type:jt,colorSpace:e.outputColorSpace,stencilBuffer:A.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),Oe.setContext(r),Oe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function X(ee){for(let le=0;le<ee.removed.length;le++){const ce=ee.removed[le],ke=b.indexOf(ce);ke>=0&&(b[ke]=null,E[ke].disconnect(ce))}for(let le=0;le<ee.added.length;le++){const ce=ee.added[le];let ke=b.indexOf(ce);if(ke===-1){for(let O=0;O<E.length;O++)if(O>=b.length){b.push(ce),ke=O;break}else if(b[O]===null){b[O]=ce,ke=O;break}if(ke===-1)break}const Ge=E[ke];Ge&&Ge.connect(ce)}}const te=new z,oe=new z;function Z(ee,le,ce){te.setFromMatrixPosition(le.matrixWorld),oe.setFromMatrixPosition(ce.matrixWorld);const ke=te.distanceTo(oe),Ge=le.projectionMatrix.elements,O=ce.projectionMatrix.elements,U=Ge[14]/(Ge[10]-1),R=Ge[14]/(Ge[10]+1),N=(Ge[9]+1)/Ge[5],Y=(Ge[9]-1)/Ge[5],G=(Ge[8]-1)/Ge[0],se=(O[8]+1)/O[0],pe=U*G,Te=U*se,Re=ke/(-G+se),Pe=Re*-G;if(le.matrixWorld.decompose(ee.position,ee.quaternion,ee.scale),ee.translateX(Pe),ee.translateZ(Re),ee.matrixWorld.compose(ee.position,ee.quaternion,ee.scale),ee.matrixWorldInverse.copy(ee.matrixWorld).invert(),Ge[10]===-1)ee.projectionMatrix.copy(le.projectionMatrix),ee.projectionMatrixInverse.copy(le.projectionMatrixInverse);else{const Ve=U+Re,L=R+Re,We=pe-Pe,Je=Te+(ke-Pe),T=N*R/L*Ve,g=Y*R/L*Ve;ee.projectionMatrix.makePerspective(We,Je,T,g,Ve,L),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert()}}function de(ee,le){le===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(le.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(r===null)return;let le=ee.near,ce=ee.far;m.texture!==null&&(m.depthNear>0&&(le=m.depthNear),m.depthFar>0&&(ce=m.depthFar)),F.near=I.near=y.near=le,F.far=I.far=y.far=ce,($!==F.near||ie!==F.far)&&(r.updateRenderState({depthNear:F.near,depthFar:F.far}),$=F.near,ie=F.far),F.layers.mask=ee.layers.mask|6,y.layers.mask=F.layers.mask&-5,I.layers.mask=F.layers.mask&-3;const ke=ee.parent,Ge=F.cameras;de(F,ke);for(let O=0;O<Ge.length;O++)de(Ge[O],ke);Ge.length===2?Z(F,y,I):F.projectionMatrix.copy(y.projectionMatrix),he(ee,F,ke)};function he(ee,le,ce){ce===null?ee.matrix.copy(le.matrixWorld):(ee.matrix.copy(ce.matrixWorld),ee.matrix.invert(),ee.matrix.multiply(le.matrixWorld)),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.updateMatrixWorld(!0),ee.projectionMatrix.copy(le.projectionMatrix),ee.projectionMatrixInverse.copy(le.projectionMatrixInverse),ee.isPerspectiveCamera&&(ee.fov=zr*2*Math.atan(1/ee.projectionMatrix.elements[5]),ee.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(d===null&&h===null))return l},this.setFoveation=function(ee){l=ee,d!==null&&(d.fixedFoveation=ee),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=ee)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(F)},this.getCameraTexture=function(ee){return p[ee]};let Ke=null;function st(ee,le){if(u=le.getViewerPose(c||a),_=le,u!==null){const ce=u.views;h!==null&&(e.setRenderTargetFramebuffer(v,h.framebuffer),e.setRenderTarget(v));let ke=!1;ce.length!==F.cameras.length&&(F.cameras.length=0,ke=!0);for(let R=0;R<ce.length;R++){const N=ce[R];let Y=null;if(h!==null)Y=h.getViewport(N);else{const se=f.getViewSubImage(d,N);Y=se.viewport,R===0&&(e.setRenderTargetTextures(v,se.colorTexture,se.depthStencilTexture),e.setRenderTarget(v))}let G=P[R];G===void 0&&(G=new Qt,G.layers.enable(R),G.viewport=new St,P[R]=G),G.matrix.fromArray(N.transform.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale),G.projectionMatrix.fromArray(N.projectionMatrix),G.projectionMatrixInverse.copy(G.projectionMatrix).invert(),G.viewport.set(Y.x,Y.y,Y.width,Y.height),R===0&&(F.matrix.copy(G.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),ke===!0&&F.cameras.push(G)}const Ge=r.enabledFeatures;if(Ge&&Ge.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&S){f=i.getBinding();const R=f.getDepthInformation(ce[0]);R&&R.isValid&&R.texture&&m.init(R,r.renderState)}if(Ge&&Ge.includes("camera-access")&&S){e.state.unbindTexture(),f=i.getBinding();for(let R=0;R<ce.length;R++){const N=ce[R].camera;if(N){let Y=p[N];Y||(Y=new yd,p[N]=Y);const G=f.getCameraImage(N);Y.sourceTexture=G}}}}for(let ce=0;ce<E.length;ce++){const ke=b[ce],Ge=E[ce];ke!==null&&Ge!==void 0&&Ge.update(ke,le,c||a)}Ke&&Ke(ee,le),le.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:le}),_=null}const Oe=new wd;Oe.setAnimationLoop(st),this.setAnimationLoop=function(ee){Ke=ee},this.dispose=function(){}}}const P_=new Mt,Ud=new Xe;Ud.set(-1,0,0,0,1,0,0,0,1);function I_(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,bd(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,A,w,v){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?s(m,p):p.isMeshLambertMaterial?(s(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(s(m,p),f(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(s(m,p),d(m,p),p.isMeshPhysicalMaterial&&h(m,p,v)):p.isMeshMatcapMaterial?(s(m,p),_(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),S(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,A,w):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===$t&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===$t&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const A=e.get(p),w=A.envMap,v=A.envMapRotation;w&&(m.envMap.value=w,m.envMapRotation.value.setFromMatrix4(P_.makeRotationFromEuler(v)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Ud),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,A,w){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*A,m.scale.value=w*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function h(m,p,A){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===$t&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=A.texture,m.transmissionSamplerSize.value.set(A.width,A.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function S(m,p){const A=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(A.matrixWorld),m.nearDistance.value=A.shadow.camera.near,m.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function L_(n,e,t,i){let r={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,E){const b=E.program;i.uniformBlockBinding(v,b)}function c(v,E){let b=r[v.id];b===void 0&&(m(v),b=u(v),r[v.id]=b,v.addEventListener("dispose",A));const C=E.program;i.updateUBOMapping(v,C);const x=e.render.frame;s[v.id]!==x&&(d(v),s[v.id]=x)}function u(v){const E=f();v.__bindingPointIndex=E;const b=n.createBuffer(),C=v.__size,x=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,b),n.bufferData(n.UNIFORM_BUFFER,C,x),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,E,b),b}function f(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return nt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){const E=r[v.id],b=v.uniforms,C=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,E);for(let x=0,y=b.length;x<y;x++){const I=b[x];if(Array.isArray(I))for(let P=0,F=I.length;P<F;P++)h(I[P],x,P,C);else h(I,x,0,C)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(v,E,b,C){if(S(v,E,b,C)===!0){const x=v.__offset,y=v.value;if(Array.isArray(y)){let I=0;for(let P=0;P<y.length;P++){const F=y[P],$=p(F);_(F,v.__data,I),typeof F!="number"&&typeof F!="boolean"&&!F.isMatrix3&&!ArrayBuffer.isView(F)&&(I+=$.storage/Float32Array.BYTES_PER_ELEMENT)}}else _(y,v.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,x,v.__data)}}function _(v,E,b){typeof v=="number"||typeof v=="boolean"?E[0]=v:v.isMatrix3?(E[0]=v.elements[0],E[1]=v.elements[1],E[2]=v.elements[2],E[3]=0,E[4]=v.elements[3],E[5]=v.elements[4],E[6]=v.elements[5],E[7]=0,E[8]=v.elements[6],E[9]=v.elements[7],E[10]=v.elements[8],E[11]=0):ArrayBuffer.isView(v)?E.set(new v.constructor(v.buffer,v.byteOffset,E.length)):v.toArray(E,b)}function S(v,E,b,C){const x=v.value,y=E+"_"+b;if(C[y]===void 0)return typeof x=="number"||typeof x=="boolean"?C[y]=x:ArrayBuffer.isView(x)?C[y]=x.slice():C[y]=x.clone(),!0;{const I=C[y];if(typeof x=="number"||typeof x=="boolean"){if(I!==x)return C[y]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(I.equals(x)===!1)return I.copy(x),!0}}return!1}function m(v){const E=v.uniforms;let b=0;const C=16;for(let y=0,I=E.length;y<I;y++){const P=Array.isArray(E[y])?E[y]:[E[y]];for(let F=0,$=P.length;F<$;F++){const ie=P[F],H=Array.isArray(ie.value)?ie.value:[ie.value];for(let j=0,X=H.length;j<X;j++){const te=H[j],oe=p(te),Z=b%C,de=Z%oe.boundary,he=Z+de;b+=de,he!==0&&C-he<oe.storage&&(b+=C-he),ie.__data=new Float32Array(oe.storage/Float32Array.BYTES_PER_ELEMENT),ie.__offset=b,b+=oe.storage}}}const x=b%C;return x>0&&(b+=C-x),v.__size=b,v.__cache={},this}function p(v){const E={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(E.boundary=4,E.storage=4):v.isVector2?(E.boundary=8,E.storage=8):v.isVector3||v.isColor?(E.boundary=16,E.storage=12):v.isVector4?(E.boundary=16,E.storage=16):v.isMatrix3?(E.boundary=48,E.storage=48):v.isMatrix4?(E.boundary=64,E.storage=64):v.isTexture?He("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(E.boundary=16,E.storage=v.byteLength):He("WebGLRenderer: Unsupported uniform value type.",v),E}function A(v){const E=v.target;E.removeEventListener("dispose",A);const b=a.indexOf(E.__bindingPointIndex);a.splice(b,1),n.deleteBuffer(r[E.id]),delete r[E.id],delete s[E.id]}function w(){for(const v in r)n.deleteBuffer(r[v]);a=[],r={},s={}}return{bind:l,update:c,dispose:w}}const D_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let bn=null;function U_(){return bn===null&&(bn=new _f(D_,16,16,Ei,Gn),bn.name="DFG_LUT",bn.minFilter=Rt,bn.magFilter=Rt,bn.wrapS=kn,bn.wrapT=kn,bn.generateMipmaps=!1,bn.needsUpdate=!0),bn}class N_{constructor(e={}){const{canvas:t=Iu(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1,outputBufferType:h=jt}=e;this.isWebGLRenderer=!0;let _;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=i.getContextAttributes().alpha}else _=a;const S=h,m=new Set([zo,Bo,ko]),p=new Set([jt,Cn,Fr,Or,Fo,Oo]),A=new Uint32Array(4),w=new Int32Array(4),v=new z;let E=null,b=null;const C=[],x=[];let y=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=wn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const I=this;let P=!1,F=null,$=null,ie=null,H=null;this._outputColorSpace=qt;let j=0,X=0,te=null,oe=-1,Z=null;const de=new St,he=new St;let Ke=null;const st=new tt(0);let Oe=0,ee=t.width,le=t.height,ce=1,ke=null,Ge=null;const O=new St(0,0,ee,le),U=new St(0,0,ee,le);let R=!1;const N=new $o;let Y=!1,G=!1;const se=new Mt,pe=new z,Te=new St,Re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Pe=!1;function Ve(){return te===null?ce:1}let L=i;function We(M,k){return t.getContext(M,k)}try{const M={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Uo}`),t.addEventListener("webglcontextlost",yt,!1),t.addEventListener("webglcontextrestored",gt,!1),t.addEventListener("webglcontextcreationerror",vn,!1),L===null){const k="webgl2";if(L=We(k,M),L===null)throw We(k)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(M){throw nt("WebGLRenderer: "+M.message),M}let Je,T,g,B,q,J,ue,me,Q,re,ge,Le,ve,_e,Ne,ze,qe,D,fe,ne,xe,be,ae;function Ie(){Je=new Um(L),Je.init(),xe=new T_(L,Je),T=new Am(L,Je,e,xe),g=new b_(L,Je),T.reversedDepthBuffer&&d&&g.buffers.depth.setReversed(!0),$=L.createFramebuffer(),ie=L.createFramebuffer(),H=L.createFramebuffer(),B=new Om(L),q=new c_,J=new E_(L,Je,g,q,T,xe,B),ue=new Dm(I),me=new Hf(L),be=new Em(L,me),Q=new Nm(L,me,B,be),re=new Bm(L,Q,me,be,B),D=new km(L,T,J),Ne=new wm(q),ge=new l_(I,ue,Je,T,be,Ne),Le=new I_(I,q),ve=new u_,_e=new __(Je),qe=new bm(I,ue,g,re,_,l),ze=new y_(I,re,T),ae=new L_(L,B,T,g),fe=new Tm(L,Je,B),ne=new Fm(L,Je,B),B.programs=ge.programs,I.capabilities=T,I.extensions=Je,I.properties=q,I.renderLists=ve,I.shadowMap=ze,I.state=g,I.info=B}Ie(),S!==jt&&(y=new Hm(S,t.width,t.height,o,r,s));const we=new C_(I,L);this.xr=we,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const M=Je.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=Je.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return ce},this.setPixelRatio=function(M){M!==void 0&&(ce=M,this.setSize(ee,le,!1))},this.getSize=function(M){return M.set(ee,le)},this.setSize=function(M,k,K=!0){if(we.isPresenting){He("WebGLRenderer: Can't change size while VR device is presenting.");return}ee=M,le=k,t.width=Math.floor(M*ce),t.height=Math.floor(k*ce),K===!0&&(t.style.width=M+"px",t.style.height=k+"px"),y!==null&&y.setSize(t.width,t.height),this.setViewport(0,0,M,k)},this.getDrawingBufferSize=function(M){return M.set(ee*ce,le*ce).floor()},this.setDrawingBufferSize=function(M,k,K){ee=M,le=k,ce=K,t.width=Math.floor(M*K),t.height=Math.floor(k*K),this.setViewport(0,0,M,k)},this.setEffects=function(M){if(S===jt){nt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let k=0;k<M.length;k++)if(M[k].isOutputPass===!0){He("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}y.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(de)},this.getViewport=function(M){return M.copy(O)},this.setViewport=function(M,k,K,V){M.isVector4?O.set(M.x,M.y,M.z,M.w):O.set(M,k,K,V),g.viewport(de.copy(O).multiplyScalar(ce).round())},this.getScissor=function(M){return M.copy(U)},this.setScissor=function(M,k,K,V){M.isVector4?U.set(M.x,M.y,M.z,M.w):U.set(M,k,K,V),g.scissor(he.copy(U).multiplyScalar(ce).round())},this.getScissorTest=function(){return R},this.setScissorTest=function(M){g.setScissorTest(R=M)},this.setOpaqueSort=function(M){ke=M},this.setTransparentSort=function(M){Ge=M},this.getClearColor=function(M){return M.copy(qe.getClearColor())},this.setClearColor=function(){qe.setClearColor(...arguments)},this.getClearAlpha=function(){return qe.getClearAlpha()},this.setClearAlpha=function(){qe.setClearAlpha(...arguments)},this.clear=function(M=!0,k=!0,K=!0){let V=0;if(M){let W=!1;if(te!==null){const ye=te.texture.format;W=m.has(ye)}if(W){const ye=te.texture.type,Ae=p.has(ye),Se=qe.getClearColor(),Ce=qe.getClearAlpha(),De=Se.r,$e=Se.g,Qe=Se.b;Ae?(A[0]=De,A[1]=$e,A[2]=Qe,A[3]=Ce,L.clearBufferuiv(L.COLOR,0,A)):(w[0]=De,w[1]=$e,w[2]=Qe,w[3]=Ce,L.clearBufferiv(L.COLOR,0,w))}else V|=L.COLOR_BUFFER_BIT}k&&(V|=L.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),K&&(V|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V!==0&&L.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),F=M},this.dispose=function(){t.removeEventListener("webglcontextlost",yt,!1),t.removeEventListener("webglcontextrestored",gt,!1),t.removeEventListener("webglcontextcreationerror",vn,!1),qe.dispose(),ve.dispose(),_e.dispose(),q.dispose(),ue.dispose(),re.dispose(),be.dispose(),ae.dispose(),ge.dispose(),we.dispose(),we.removeEventListener("sessionstart",cl),we.removeEventListener("sessionend",dl),ci.stop()};function yt(M){M.preventDefault(),Ls("WebGLRenderer: Context Lost."),P=!0}function gt(){Ls("WebGLRenderer: Context Restored."),P=!1;const M=B.autoReset,k=ze.enabled,K=ze.autoUpdate,V=ze.needsUpdate,W=ze.type;Ie(),B.autoReset=M,ze.enabled=k,ze.autoUpdate=K,ze.needsUpdate=V,ze.type=W}function vn(M){nt("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Mn(M){const k=M.target;k.removeEventListener("dispose",Mn),Xd(k)}function Xd(M){Yd(M),q.remove(M)}function Yd(M){const k=q.get(M).programs;k!==void 0&&(k.forEach(function(K){ge.releaseProgram(K)}),M.isShaderMaterial&&ge.releaseShaderCache(M))}this.renderBufferDirect=function(M,k,K,V,W,ye){k===null&&(k=Re);const Ae=W.isMesh&&W.matrixWorld.determinantAffine()<0,Se=Kd(M,k,K,V,W);g.setMaterial(V,Ae);let Ce=K.index,De=1;if(V.wireframe===!0){if(Ce=Q.getWireframeAttribute(K),Ce===void 0)return;De=2}const $e=K.drawRange,Qe=K.attributes.position;let Ue=$e.start*De,ft=($e.start+$e.count)*De;ye!==null&&(Ue=Math.max(Ue,ye.start*De),ft=Math.min(ft,(ye.start+ye.count)*De)),Ce!==null?(Ue=Math.max(Ue,0),ft=Math.min(ft,Ce.count)):Qe!=null&&(Ue=Math.max(Ue,0),ft=Math.min(ft,Qe.count));const Et=ft-Ue;if(Et<0||Et===1/0)return;be.setup(W,V,Se,K,Ce);let bt,pt=fe;if(Ce!==null&&(bt=me.get(Ce),pt=ne,pt.setIndex(bt)),W.isMesh)V.wireframe===!0?(g.setLineWidth(V.wireframeLinewidth*Ve()),pt.setMode(L.LINES)):pt.setMode(L.TRIANGLES);else if(W.isLine){let Ft=V.linewidth;Ft===void 0&&(Ft=1),g.setLineWidth(Ft*Ve()),W.isLineSegments?pt.setMode(L.LINES):W.isLineLoop?pt.setMode(L.LINE_LOOP):pt.setMode(L.LINE_STRIP)}else W.isPoints?pt.setMode(L.POINTS):W.isSprite&&pt.setMode(L.TRIANGLES);if(W.isBatchedMesh)if(Je.get("WEBGL_multi_draw"))pt.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{const Ft=W._multiDrawStarts,Ee=W._multiDrawCounts,Kt=W._multiDrawCount,rt=Ce?me.get(Ce).bytesPerElement:1,en=q.get(V).currentProgram.getUniforms();for(let Sn=0;Sn<Kt;Sn++)en.setValue(L,"_gl_DrawID",Sn),pt.render(Ft[Sn]/rt,Ee[Sn])}else if(W.isInstancedMesh)pt.renderInstances(Ue,Et,W.count);else if(K.isInstancedBufferGeometry){const Ft=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,Ee=Math.min(K.instanceCount,Ft);pt.renderInstances(Ue,Et,Ee)}else pt.render(Ue,Et)};function ll(M,k,K){M.transparent===!0&&M.side===On&&M.forceSinglePass===!1?(M.side=$t,M.needsUpdate=!0,Vr(M,k,K),M.side=ai,M.needsUpdate=!0,Vr(M,k,K),M.side=On):Vr(M,k,K)}this.compile=function(M,k,K=null){K===null&&(K=M),b=_e.get(K),b.init(k),x.push(b),K.traverseVisible(function(W){W.isLight&&W.layers.test(k.layers)&&(b.pushLight(W),W.castShadow&&b.pushShadow(W))}),M!==K&&M.traverseVisible(function(W){W.isLight&&W.layers.test(k.layers)&&(b.pushLight(W),W.castShadow&&b.pushShadow(W))}),b.setupLights();const V=new Set;return M.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;const ye=W.material;if(ye)if(Array.isArray(ye))for(let Ae=0;Ae<ye.length;Ae++){const Se=ye[Ae];ll(Se,K,W),V.add(Se)}else ll(ye,K,W),V.add(ye)}),b=x.pop(),V},this.compileAsync=function(M,k,K=null){const V=this.compile(M,k,K);return new Promise(W=>{function ye(){if(V.forEach(function(Ae){q.get(Ae).currentProgram.isReady()&&V.delete(Ae)}),V.size===0){W(M);return}setTimeout(ye,10)}Je.get("KHR_parallel_shader_compile")!==null?ye():setTimeout(ye,10)})};let Hs=null;function qd(M){Hs&&Hs(M)}function cl(){ci.stop()}function dl(){ci.start()}const ci=new wd;ci.setAnimationLoop(qd),typeof self<"u"&&ci.setContext(self),this.setAnimationLoop=function(M){Hs=M,we.setAnimationLoop(M),M===null?ci.stop():ci.start()},we.addEventListener("sessionstart",cl),we.addEventListener("sessionend",dl),this.render=function(M,k){if(k!==void 0&&k.isCamera!==!0){nt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;F!==null&&F.renderStart(M,k);const K=we.enabled===!0&&we.isPresenting===!0,V=y!==null&&(te===null||K)&&y.begin(I,te);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),we.enabled===!0&&we.isPresenting===!0&&(y===null||y.isCompositing()===!1)&&(we.cameraAutoUpdate===!0&&we.updateCamera(k),k=we.getCamera()),M.isScene===!0&&M.onBeforeRender(I,M,k,te),b=_e.get(M,x.length),b.init(k),b.state.textureUnits=J.getTextureUnits(),x.push(b),se.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),N.setFromProjectionMatrix(se,An,k.reversedDepth),G=this.localClippingEnabled,Y=Ne.init(this.clippingPlanes,G),E=ve.get(M,C.length),E.init(),C.push(E),we.enabled===!0&&we.isPresenting===!0){const Ae=I.xr.getDepthSensingMesh();Ae!==null&&Gs(Ae,k,-1/0,I.sortObjects)}Gs(M,k,0,I.sortObjects),E.finish(),I.sortObjects===!0&&E.sort(ke,Ge,k.reversedDepth),Pe=we.enabled===!1||we.isPresenting===!1||we.hasDepthSensing()===!1,Pe&&qe.addToRenderList(E,M),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Y===!0&&Ne.beginShadows();const W=b.state.shadowsArray;if(ze.render(W,M,k),Y===!0&&Ne.endShadows(),(V&&y.hasRenderPass())===!1){const Ae=E.opaque,Se=E.transmissive;if(b.setupLights(),k.isArrayCamera){const Ce=k.cameras;if(Se.length>0)for(let De=0,$e=Ce.length;De<$e;De++){const Qe=Ce[De];fl(Ae,Se,M,Qe)}Pe&&qe.render(M);for(let De=0,$e=Ce.length;De<$e;De++){const Qe=Ce[De];ul(E,M,Qe,Qe.viewport)}}else Se.length>0&&fl(Ae,Se,M,k),Pe&&qe.render(M),ul(E,M,k)}te!==null&&X===0&&(J.updateMultisampleRenderTarget(te),J.updateRenderTargetMipmap(te)),V&&y.end(I),M.isScene===!0&&M.onAfterRender(I,M,k),be.resetDefaultState(),oe=-1,Z=null,x.pop(),x.length>0?(b=x[x.length-1],J.setTextureUnits(b.state.textureUnits),Y===!0&&Ne.setGlobalState(I.clippingPlanes,b.state.camera)):b=null,C.pop(),C.length>0?E=C[C.length-1]:E=null,F!==null&&F.renderEnd()};function Gs(M,k,K,V){if(M.visible===!1)return;if(M.layers.test(k.layers)){if(M.isGroup)K=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(k);else if(M.isLightProbeGrid)b.pushLightProbeGrid(M);else if(M.isLight)b.pushLight(M),M.castShadow&&b.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||N.intersectsSprite(M)){V&&Te.setFromMatrixPosition(M.matrixWorld).applyMatrix4(se);const Ae=re.update(M),Se=M.material;Se.visible&&E.push(M,Ae,Se,K,Te.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||N.intersectsObject(M))){const Ae=re.update(M),Se=M.material;if(V&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Te.copy(M.boundingSphere.center)):(Ae.boundingSphere===null&&Ae.computeBoundingSphere(),Te.copy(Ae.boundingSphere.center)),Te.applyMatrix4(M.matrixWorld).applyMatrix4(se)),Array.isArray(Se)){const Ce=Ae.groups;for(let De=0,$e=Ce.length;De<$e;De++){const Qe=Ce[De],Ue=Se[Qe.materialIndex];Ue&&Ue.visible&&E.push(M,Ae,Ue,K,Te.z,Qe)}}else Se.visible&&E.push(M,Ae,Se,K,Te.z,null)}}const ye=M.children;for(let Ae=0,Se=ye.length;Ae<Se;Ae++)Gs(ye[Ae],k,K,V)}function ul(M,k,K,V){const{opaque:W,transmissive:ye,transparent:Ae}=M;b.setupLightsView(K),Y===!0&&Ne.setGlobalState(I.clippingPlanes,K),V&&g.viewport(de.copy(V)),W.length>0&&Gr(W,k,K),ye.length>0&&Gr(ye,k,K),Ae.length>0&&Gr(Ae,k,K),g.buffers.depth.setTest(!0),g.buffers.depth.setMask(!0),g.buffers.color.setMask(!0),g.setPolygonOffset(!1)}function fl(M,k,K,V){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[V.id]===void 0){const Ue=Je.has("EXT_color_buffer_half_float")||Je.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[V.id]=new Rn(1,1,{generateMipmaps:!0,type:Ue?Gn:jt,minFilter:Si,samples:Math.max(4,T.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:it.workingColorSpace})}const ye=b.state.transmissionRenderTarget[V.id],Ae=V.viewport||de;ye.setSize(Ae.z*I.transmissionResolutionScale,Ae.w*I.transmissionResolutionScale);const Se=I.getRenderTarget(),Ce=I.getActiveCubeFace(),De=I.getActiveMipmapLevel();I.setRenderTarget(ye),I.getClearColor(st),Oe=I.getClearAlpha(),Oe<1&&I.setClearColor(16777215,.5),I.clear(),Pe&&qe.render(K);const $e=I.toneMapping;I.toneMapping=wn;const Qe=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),b.setupLightsView(V),Y===!0&&Ne.setGlobalState(I.clippingPlanes,V),Gr(M,K,V),J.updateMultisampleRenderTarget(ye),J.updateRenderTargetMipmap(ye),Je.has("WEBGL_multisampled_render_to_texture")===!1){let Ue=!1;for(let ft=0,Et=k.length;ft<Et;ft++){const bt=k[ft],{object:pt,geometry:Ft,material:Ee,group:Kt}=bt;if(Ee.side===On&&pt.layers.test(V.layers)){const rt=Ee.side;Ee.side=$t,Ee.needsUpdate=!0,hl(pt,K,V,Ft,Ee,Kt),Ee.side=rt,Ee.needsUpdate=!0,Ue=!0}}Ue===!0&&(J.updateMultisampleRenderTarget(ye),J.updateRenderTargetMipmap(ye))}I.setRenderTarget(Se,Ce,De),I.setClearColor(st,Oe),Qe!==void 0&&(V.viewport=Qe),I.toneMapping=$e}function Gr(M,k,K){const V=k.isScene===!0?k.overrideMaterial:null;for(let W=0,ye=M.length;W<ye;W++){const Ae=M[W],{object:Se,geometry:Ce,group:De}=Ae;let $e=Ae.material;$e.allowOverride===!0&&V!==null&&($e=V),Se.layers.test(K.layers)&&hl(Se,k,K,Ce,$e,De)}}function hl(M,k,K,V,W,ye){M.onBeforeRender(I,k,K,V,W,ye),M.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),W.onBeforeRender(I,k,K,V,M,ye),W.transparent===!0&&W.side===On&&W.forceSinglePass===!1?(W.side=$t,W.needsUpdate=!0,I.renderBufferDirect(K,k,V,W,M,ye),W.side=ai,W.needsUpdate=!0,I.renderBufferDirect(K,k,V,W,M,ye),W.side=On):I.renderBufferDirect(K,k,V,W,M,ye),M.onAfterRender(I,k,K,V,W,ye)}function Vr(M,k,K){k.isScene!==!0&&(k=Re);const V=q.get(M),W=b.state.lights,ye=b.state.shadowsArray,Ae=W.state.version,Se=ge.getParameters(M,W.state,ye,k,K,b.state.lightProbeGridArray),Ce=ge.getProgramCacheKey(Se);let De=V.programs;V.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?k.environment:null,V.fog=k.fog;const $e=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;V.envMap=ue.get(M.envMap||V.environment,$e),V.envMapRotation=V.environment!==null&&M.envMap===null?k.environmentRotation:M.envMapRotation,De===void 0&&(M.addEventListener("dispose",Mn),De=new Map,V.programs=De);let Qe=De.get(Ce);if(Qe!==void 0){if(V.currentProgram===Qe&&V.lightsStateVersion===Ae)return ml(M,Se),Qe}else Se.uniforms=ge.getUniforms(M),F!==null&&M.isNodeMaterial&&F.build(M,K,Se),M.onBeforeCompile(Se,I),Qe=ge.acquireProgram(Se,Ce),De.set(Ce,Qe),V.uniforms=Se.uniforms;const Ue=V.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Ue.clippingPlanes=Ne.uniform),ml(M,Se),V.needsLights=Jd(M),V.lightsStateVersion=Ae,V.needsLights&&(Ue.ambientLightColor.value=W.state.ambient,Ue.lightProbe.value=W.state.probe,Ue.directionalLights.value=W.state.directional,Ue.directionalLightShadows.value=W.state.directionalShadow,Ue.spotLights.value=W.state.spot,Ue.spotLightShadows.value=W.state.spotShadow,Ue.rectAreaLights.value=W.state.rectArea,Ue.ltc_1.value=W.state.rectAreaLTC1,Ue.ltc_2.value=W.state.rectAreaLTC2,Ue.pointLights.value=W.state.point,Ue.pointLightShadows.value=W.state.pointShadow,Ue.hemisphereLights.value=W.state.hemi,Ue.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Ue.spotLightMatrix.value=W.state.spotLightMatrix,Ue.spotLightMap.value=W.state.spotLightMap,Ue.pointShadowMatrix.value=W.state.pointShadowMatrix),V.lightProbeGrid=b.state.lightProbeGridArray.length>0,V.currentProgram=Qe,V.uniformsList=null,Qe}function pl(M){if(M.uniformsList===null){const k=M.currentProgram.getUniforms();M.uniformsList=Ts.seqWithValue(k.seq,M.uniforms)}return M.uniformsList}function ml(M,k){const K=q.get(M);K.outputColorSpace=k.outputColorSpace,K.batching=k.batching,K.batchingColor=k.batchingColor,K.instancing=k.instancing,K.instancingColor=k.instancingColor,K.instancingMorph=k.instancingMorph,K.skinning=k.skinning,K.morphTargets=k.morphTargets,K.morphNormals=k.morphNormals,K.morphColors=k.morphColors,K.morphTargetsCount=k.morphTargetsCount,K.numClippingPlanes=k.numClippingPlanes,K.numIntersection=k.numClipIntersection,K.vertexAlphas=k.vertexAlphas,K.vertexTangents=k.vertexTangents,K.toneMapping=k.toneMapping}function $d(M,k){if(M.length===0)return null;if(M.length===1)return M[0].texture!==null?M[0]:null;v.setFromMatrixPosition(k.matrixWorld);for(let K=0,V=M.length;K<V;K++){const W=M[K];if(W.texture!==null&&W.boundingBox.containsPoint(v))return W}return null}function Kd(M,k,K,V,W){k.isScene!==!0&&(k=Re),J.resetTextureUnits();const ye=k.fog,Ae=V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial?k.environment:null,Se=te===null?I.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:it.workingColorSpace,Ce=V.isMeshStandardMaterial||V.isMeshLambertMaterial&&!V.envMap||V.isMeshPhongMaterial&&!V.envMap,De=ue.get(V.envMap||Ae,Ce),$e=V.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,Qe=!!K.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Ue=!!K.morphAttributes.position,ft=!!K.morphAttributes.normal,Et=!!K.morphAttributes.color;let bt=wn;V.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(bt=I.toneMapping);const pt=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,Ft=pt!==void 0?pt.length:0,Ee=q.get(V),Kt=b.state.lights;if(Y===!0&&(G===!0||M!==Z)){const _t=M===Z&&V.id===oe;Ne.setState(V,M,_t)}let rt=!1;V.version===Ee.__version?(Ee.needsLights&&Ee.lightsStateVersion!==Kt.state.version||Ee.outputColorSpace!==Se||W.isBatchedMesh&&Ee.batching===!1||!W.isBatchedMesh&&Ee.batching===!0||W.isBatchedMesh&&Ee.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&Ee.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&Ee.instancing===!1||!W.isInstancedMesh&&Ee.instancing===!0||W.isSkinnedMesh&&Ee.skinning===!1||!W.isSkinnedMesh&&Ee.skinning===!0||W.isInstancedMesh&&Ee.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Ee.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Ee.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Ee.instancingMorph===!1&&W.morphTexture!==null||Ee.envMap!==De||V.fog===!0&&Ee.fog!==ye||Ee.numClippingPlanes!==void 0&&(Ee.numClippingPlanes!==Ne.numPlanes||Ee.numIntersection!==Ne.numIntersection)||Ee.vertexAlphas!==$e||Ee.vertexTangents!==Qe||Ee.morphTargets!==Ue||Ee.morphNormals!==ft||Ee.morphColors!==Et||Ee.toneMapping!==bt||Ee.morphTargetsCount!==Ft||!!Ee.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(rt=!0):(rt=!0,Ee.__version=V.version);let en=Ee.currentProgram;rt===!0&&(en=Vr(V,k,W),F&&V.isNodeMaterial&&F.onUpdateProgram(V,en,Ee));let Sn=!1,Wn=!1,Pi=!1;const mt=en.getUniforms(),Tt=Ee.uniforms;if(g.useProgram(en.program)&&(Sn=!0,Wn=!0,Pi=!0),V.id!==oe&&(oe=V.id,Wn=!0),Ee.needsLights){const _t=$d(b.state.lightProbeGridArray,W);Ee.lightProbeGrid!==_t&&(Ee.lightProbeGrid=_t,Wn=!0)}if(Sn||Z!==M){g.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),mt.setValue(L,"projectionMatrix",M.projectionMatrix),mt.setValue(L,"viewMatrix",M.matrixWorldInverse);const Yn=mt.map.cameraPosition;Yn!==void 0&&Yn.setValue(L,pe.setFromMatrixPosition(M.matrixWorld)),T.logarithmicDepthBuffer&&mt.setValue(L,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&mt.setValue(L,"isOrthographic",M.isOrthographicCamera===!0),Z!==M&&(Z=M,Wn=!0,Pi=!0)}if(Ee.needsLights&&(Kt.state.directionalShadowMap.length>0&&mt.setValue(L,"directionalShadowMap",Kt.state.directionalShadowMap,J),Kt.state.spotShadowMap.length>0&&mt.setValue(L,"spotShadowMap",Kt.state.spotShadowMap,J),Kt.state.pointShadowMap.length>0&&mt.setValue(L,"pointShadowMap",Kt.state.pointShadowMap,J)),W.isSkinnedMesh){mt.setOptional(L,W,"bindMatrix"),mt.setOptional(L,W,"bindMatrixInverse");const _t=W.skeleton;_t&&(_t.boneTexture===null&&_t.computeBoneTexture(),mt.setValue(L,"boneTexture",_t.boneTexture,J))}W.isBatchedMesh&&(mt.setOptional(L,W,"batchingTexture"),mt.setValue(L,"batchingTexture",W._matricesTexture,J),mt.setOptional(L,W,"batchingIdTexture"),mt.setValue(L,"batchingIdTexture",W._indirectTexture,J),mt.setOptional(L,W,"batchingColorTexture"),W._colorsTexture!==null&&mt.setValue(L,"batchingColorTexture",W._colorsTexture,J));const Xn=K.morphAttributes;if((Xn.position!==void 0||Xn.normal!==void 0||Xn.color!==void 0)&&D.update(W,K,en),(Wn||Ee.receiveShadow!==W.receiveShadow)&&(Ee.receiveShadow=W.receiveShadow,mt.setValue(L,"receiveShadow",W.receiveShadow)),(V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial)&&V.envMap===null&&k.environment!==null&&(Tt.envMapIntensity.value=k.environmentIntensity),Tt.dfgLUT!==void 0&&(Tt.dfgLUT.value=U_()),Wn){if(mt.setValue(L,"toneMappingExposure",I.toneMappingExposure),Ee.needsLights&&Zd(Tt,Pi),ye&&V.fog===!0&&Le.refreshFogUniforms(Tt,ye),Le.refreshMaterialUniforms(Tt,V,ce,le,b.state.transmissionRenderTarget[M.id]),Ee.needsLights&&Ee.lightProbeGrid){const _t=Ee.lightProbeGrid;Tt.probesSH.value=_t.texture,Tt.probesMin.value.copy(_t.boundingBox.min),Tt.probesMax.value.copy(_t.boundingBox.max),Tt.probesResolution.value.copy(_t.resolution)}Ts.upload(L,pl(Ee),Tt,J)}if(V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Ts.upload(L,pl(Ee),Tt,J),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&mt.setValue(L,"center",W.center),mt.setValue(L,"modelViewMatrix",W.modelViewMatrix),mt.setValue(L,"normalMatrix",W.normalMatrix),mt.setValue(L,"modelMatrix",W.matrixWorld),V.uniformsGroups!==void 0){const _t=V.uniformsGroups;for(let Yn=0,Ii=_t.length;Yn<Ii;Yn++){const gl=_t[Yn];ae.update(gl,en),ae.bind(gl,en)}}return en}function Zd(M,k){M.ambientLightColor.needsUpdate=k,M.lightProbe.needsUpdate=k,M.directionalLights.needsUpdate=k,M.directionalLightShadows.needsUpdate=k,M.pointLights.needsUpdate=k,M.pointLightShadows.needsUpdate=k,M.spotLights.needsUpdate=k,M.spotLightShadows.needsUpdate=k,M.rectAreaLights.needsUpdate=k,M.hemisphereLights.needsUpdate=k}function Jd(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return j},this.getActiveMipmapLevel=function(){return X},this.getRenderTarget=function(){return te},this.setRenderTargetTextures=function(M,k,K){const V=q.get(M);V.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),q.get(M.texture).__webglTexture=k,q.get(M.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:K,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,k){const K=q.get(M);K.__webglFramebuffer=k,K.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(M,k=0,K=0){te=M,j=k,X=K;let V=null,W=!1,ye=!1;if(M){const Se=q.get(M);if(Se.__useDefaultFramebuffer!==void 0){g.bindFramebuffer(L.FRAMEBUFFER,Se.__webglFramebuffer),de.copy(M.viewport),he.copy(M.scissor),Ke=M.scissorTest,g.viewport(de),g.scissor(he),g.setScissorTest(Ke),oe=-1;return}else if(Se.__webglFramebuffer===void 0)J.setupRenderTarget(M);else if(Se.__hasExternalTextures)J.rebindTextures(M,q.get(M.texture).__webglTexture,q.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const $e=M.depthTexture;if(Se.__boundDepthTexture!==$e){if($e!==null&&q.has($e)&&(M.width!==$e.image.width||M.height!==$e.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");J.setupDepthRenderbuffer(M)}}const Ce=M.texture;(Ce.isData3DTexture||Ce.isDataArrayTexture||Ce.isCompressedArrayTexture)&&(ye=!0);const De=q.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(De[k])?V=De[k][K]:V=De[k],W=!0):M.samples>0&&J.useMultisampledRTT(M)===!1?V=q.get(M).__webglMultisampledFramebuffer:Array.isArray(De)?V=De[K]:V=De,de.copy(M.viewport),he.copy(M.scissor),Ke=M.scissorTest}else de.copy(O).multiplyScalar(ce).floor(),he.copy(U).multiplyScalar(ce).floor(),Ke=R;if(K!==0&&(V=$),g.bindFramebuffer(L.FRAMEBUFFER,V)&&g.drawBuffers(M,V),g.viewport(de),g.scissor(he),g.setScissorTest(Ke),W){const Se=q.get(M.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+k,Se.__webglTexture,K)}else if(ye){const Se=k;for(let Ce=0;Ce<M.textures.length;Ce++){const De=q.get(M.textures[Ce]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+Ce,De.__webglTexture,K,Se)}}else if(M!==null&&K!==0){const Se=q.get(M.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Se.__webglTexture,K)}oe=-1},this.readRenderTargetPixels=function(M,k,K,V,W,ye,Ae,Se=0){if(!(M&&M.isWebGLRenderTarget)){nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=q.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Ae!==void 0&&(Ce=Ce[Ae]),Ce){g.bindFramebuffer(L.FRAMEBUFFER,Ce);try{const De=M.textures[Se],$e=De.format,Qe=De.type;if(M.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Se),!T.textureFormatReadable($e)){nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!T.textureTypeReadable(Qe)){nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=M.width-V&&K>=0&&K<=M.height-W&&L.readPixels(k,K,V,W,xe.convert($e),xe.convert(Qe),ye)}finally{const De=te!==null?q.get(te).__webglFramebuffer:null;g.bindFramebuffer(L.FRAMEBUFFER,De)}}},this.readRenderTargetPixelsAsync=async function(M,k,K,V,W,ye,Ae,Se=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ce=q.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Ae!==void 0&&(Ce=Ce[Ae]),Ce)if(k>=0&&k<=M.width-V&&K>=0&&K<=M.height-W){g.bindFramebuffer(L.FRAMEBUFFER,Ce);const De=M.textures[Se],$e=De.format,Qe=De.type;if(M.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Se),!T.textureFormatReadable($e))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!T.textureTypeReadable(Qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ue=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Ue),L.bufferData(L.PIXEL_PACK_BUFFER,ye.byteLength,L.STREAM_READ),L.readPixels(k,K,V,W,xe.convert($e),xe.convert(Qe),0);const ft=te!==null?q.get(te).__webglFramebuffer:null;g.bindFramebuffer(L.FRAMEBUFFER,ft);const Et=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Lu(L,Et,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Ue),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,ye),L.deleteBuffer(Ue),L.deleteSync(Et),ye}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,k=null,K=0){const V=Math.pow(2,-K),W=Math.floor(M.image.width*V),ye=Math.floor(M.image.height*V),Ae=k!==null?k.x:0,Se=k!==null?k.y:0;J.setTexture2D(M,0),L.copyTexSubImage2D(L.TEXTURE_2D,K,0,0,Ae,Se,W,ye),g.unbindTexture()},this.copyTextureToTexture=function(M,k,K=null,V=null,W=0,ye=0){let Ae,Se,Ce,De,$e,Qe,Ue,ft,Et;const bt=M.isCompressedTexture?M.mipmaps[ye]:M.image;if(K!==null)Ae=K.max.x-K.min.x,Se=K.max.y-K.min.y,Ce=K.isBox3?K.max.z-K.min.z:1,De=K.min.x,$e=K.min.y,Qe=K.isBox3?K.min.z:0;else{const Tt=Math.pow(2,-W);Ae=Math.floor(bt.width*Tt),Se=Math.floor(bt.height*Tt),M.isDataArrayTexture?Ce=bt.depth:M.isData3DTexture?Ce=Math.floor(bt.depth*Tt):Ce=1,De=0,$e=0,Qe=0}V!==null?(Ue=V.x,ft=V.y,Et=V.z):(Ue=0,ft=0,Et=0);const pt=xe.convert(k.format),Ft=xe.convert(k.type);let Ee;k.isData3DTexture?(J.setTexture3D(k,0),Ee=L.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(J.setTexture2DArray(k,0),Ee=L.TEXTURE_2D_ARRAY):(J.setTexture2D(k,0),Ee=L.TEXTURE_2D),g.activeTexture(L.TEXTURE0),g.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,k.flipY),g.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),g.pixelStorei(L.UNPACK_ALIGNMENT,k.unpackAlignment);const Kt=g.getParameter(L.UNPACK_ROW_LENGTH),rt=g.getParameter(L.UNPACK_IMAGE_HEIGHT),en=g.getParameter(L.UNPACK_SKIP_PIXELS),Sn=g.getParameter(L.UNPACK_SKIP_ROWS),Wn=g.getParameter(L.UNPACK_SKIP_IMAGES);g.pixelStorei(L.UNPACK_ROW_LENGTH,bt.width),g.pixelStorei(L.UNPACK_IMAGE_HEIGHT,bt.height),g.pixelStorei(L.UNPACK_SKIP_PIXELS,De),g.pixelStorei(L.UNPACK_SKIP_ROWS,$e),g.pixelStorei(L.UNPACK_SKIP_IMAGES,Qe);const Pi=M.isDataArrayTexture||M.isData3DTexture,mt=k.isDataArrayTexture||k.isData3DTexture;if(M.isDepthTexture){const Tt=q.get(M),Xn=q.get(k),_t=q.get(Tt.__renderTarget),Yn=q.get(Xn.__renderTarget);g.bindFramebuffer(L.READ_FRAMEBUFFER,_t.__webglFramebuffer),g.bindFramebuffer(L.DRAW_FRAMEBUFFER,Yn.__webglFramebuffer);for(let Ii=0;Ii<Ce;Ii++)Pi&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,q.get(M).__webglTexture,W,Qe+Ii),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,q.get(k).__webglTexture,ye,Et+Ii)),L.blitFramebuffer(De,$e,Ae,Se,Ue,ft,Ae,Se,L.DEPTH_BUFFER_BIT,L.NEAREST);g.bindFramebuffer(L.READ_FRAMEBUFFER,null),g.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(W!==0||M.isRenderTargetTexture||q.has(M)){const Tt=q.get(M),Xn=q.get(k);g.bindFramebuffer(L.READ_FRAMEBUFFER,ie),g.bindFramebuffer(L.DRAW_FRAMEBUFFER,H);for(let _t=0;_t<Ce;_t++)Pi?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Tt.__webglTexture,W,Qe+_t):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Tt.__webglTexture,W),mt?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Xn.__webglTexture,ye,Et+_t):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Xn.__webglTexture,ye),W!==0?L.blitFramebuffer(De,$e,Ae,Se,Ue,ft,Ae,Se,L.COLOR_BUFFER_BIT,L.NEAREST):mt?L.copyTexSubImage3D(Ee,ye,Ue,ft,Et+_t,De,$e,Ae,Se):L.copyTexSubImage2D(Ee,ye,Ue,ft,De,$e,Ae,Se);g.bindFramebuffer(L.READ_FRAMEBUFFER,null),g.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else mt?M.isDataTexture||M.isData3DTexture?L.texSubImage3D(Ee,ye,Ue,ft,Et,Ae,Se,Ce,pt,Ft,bt.data):k.isCompressedArrayTexture?L.compressedTexSubImage3D(Ee,ye,Ue,ft,Et,Ae,Se,Ce,pt,bt.data):L.texSubImage3D(Ee,ye,Ue,ft,Et,Ae,Se,Ce,pt,Ft,bt):M.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,ye,Ue,ft,Ae,Se,pt,Ft,bt.data):M.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,ye,Ue,ft,bt.width,bt.height,pt,bt.data):L.texSubImage2D(L.TEXTURE_2D,ye,Ue,ft,Ae,Se,pt,Ft,bt);g.pixelStorei(L.UNPACK_ROW_LENGTH,Kt),g.pixelStorei(L.UNPACK_IMAGE_HEIGHT,rt),g.pixelStorei(L.UNPACK_SKIP_PIXELS,en),g.pixelStorei(L.UNPACK_SKIP_ROWS,Sn),g.pixelStorei(L.UNPACK_SKIP_IMAGES,Wn),ye===0&&k.generateMipmaps&&L.generateMipmap(Ee),g.unbindTexture()},this.initRenderTarget=function(M){q.get(M).__webglFramebuffer===void 0&&J.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?J.setTextureCube(M,0):M.isData3DTexture?J.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?J.setTexture2DArray(M,0):J.setTexture2D(M,0),g.unbindTexture()},this.resetState=function(){j=0,X=0,te=null,g.reset(),be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return An}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=it._getDrawingBufferColorSpace(e),t.unpackColorSpace=it._getUnpackColorSpace()}}const Ai=60,xt=1/Ai,wo=32,ct=17,at=10,vt={radius:.35,maxHalfHearts:6,moveSpeed:5,damage:10,fireRate:2,range:6,shotSpeed:9,luck:0},F_=60,O_=7,or=.18,Ro=600,Ht={radius:.42,hp:25,moveSpeed:1.6,aggroRange:7,attackRange:5.5,telegraphTicks:24,cooldownTicks:66,spitSpeed:6,spitDamage:1,contactDamage:1},Sc=3.2,Us=.82,pi={halfHearts:{min:2,max:24},damage:{min:1,max:1/0},fireRate:{min:.5,max:5},range:{min:3,max:12},shotSpeed:{min:5,max:16},moveSpeed:{min:3.5,max:7.5},luck:{min:0,max:10}},k_=6,B_=2.2,z_=1.6,H_=.11,Rr={damageMult:.5,range:2.5,angleRad:.9,radiusMult:.8},ir={speedMult:.5,radiusMult:1.6,homingRange:4.5,turnRadPerTick:.05,giantRadiusMult:2.2,giantDamageMult:2},G_=18,V_=240,Cr={ticks:8,speed:14,iframeTicks:12,cooldownTicks:120},yc=2,W_=3,X_={renacuajo:1,mosca_gorda:1,sapo_escupidor:3,babosa_acorazada:4,sapo_doble:8},Gt={radius:.22,hp:4,contactDamage:1,windupTicks:18,hopTicks:12,hopSpeed:7,pauseTicks:26,aggroRange:9},ii={radius:.28,hp:6,contactDamage:1,speed:1.3,retargetTicks:55,wobble:2.2},si={radius:.45,hp:30,contactDamage:2,speed:.8,aggroRange:10,turnRadPerTick:.02,backDot:.25},ht={radius:.5,hp:50,contactDamage:2,moveSpeed:1.2,aggroRange:9,attackRange:6,telegraphTicks:24,cooldownTicks:80,spitSpeed:6.5,spitDamage:1,spitSpreadRad:.16,swallowSeekRange:5,swallowRange:1.7,swallowTelegraphTicks:24,healPerSwallow:10,swallowCooldownTicks:140},Y_=3,q_=1,ba={hpPorNivel:.15,velPorNivel:.04,danoExtraDesdeNivel:4},Co={gigante:{hpMult:2.2,velMult:.85,sizeMult:1.45,danoPlus:1,chanceBase:.03,chancePorNivel:.05,chanceTope:.25},veloz:{hpMult:1,velMult:1.5,sizeMult:.8,danoPlus:0,chanceBase:.03,chancePorNivel:.04,chanceTope:.2}},$_=99,K_={heart:.06},Z_=2,J_={crystal:1,crystal_med:3,crystal_big:5},Ea={big:.1,med:.3},bc=1.7,Ec=7,Q_=.45,Fe={radius:.95,hp:300,contactDamage:2,moveSpeed:1,idleTicks:45,jumpAimTicks:30,airborneTicks:20,slamRadius:1.7,slamDamage:2,tongueAimTicks:24,tongueSpeed:16,tongueDamage:2,tongueRadius:.32,tongueRange:11,summonTicks:20,summonCount:2,maxTadpoles:4,volleyAimTicks:26,volleyCount:7,volleySpreadRad:1.1,volleySpitSpeed:6.5,volleyDamage:1,bellyTicks:90,bellyDamageMult:1.5},j_=[8.5,4.4],e0={x:7.95,y:4.1,w:1.1,h:.8},Tc=[[6.5,6.4],[8.5,6.4],[10.5,6.4]],t0=1.2,n0=1.5,Ac={comun:60,rara:30,legendaria:10},i0=.75,ei=1,r0=.55,Qo=5,s0=[{id:"punos_de_piedra",nombre:"Puños de Piedra",categoria:"pasivo",slot:"brazos",rareza:"comun",precio:4,stats:{dano:4},mults:{cadencia:.8},tags:["empuje"],procs:[],spriteOverlay:"brazos_piedra",descripcion:"Golpea como montaña, dispara como abuela."},{id:"brazos_de_arquero",nombre:"Brazos de Arquero",categoria:"pasivo",slot:"brazos",rareza:"comun",precio:3,stats:{alcance:3,velProyectil:3},mults:{},tags:[],procs:[],spriteOverlay:"brazos_arquero",descripcion:"Brazos tensos como cuerdas: el chorro vuela lejos y rápido."},{id:"piernas_de_renacuajo",nombre:"Piernas de Renacuajo",categoria:"pasivo",slot:"piernas",rareza:"comun",precio:4,stats:{velMovimiento:1.2},mults:{},tags:["rastro_charcos"],procs:[],spriteOverlay:"piernas_renacuajo",descripcion:"Deja un caminito húmedo de pura prisa."},{id:"botas_de_salto",nombre:"Botas de Salto",categoria:"pasivo",slot:"piernas",rareza:"rara",precio:8,stats:{},mults:{},tags:["dash"],procs:[],spriteOverlay:"piernas_botas",descripcion:"Un brinquito con ventaja injusta (Shift)."},{id:"casco_de_lata",nombre:"Casco de Lata",categoria:"pasivo",slot:"cabeza",rareza:"comun",precio:3,stats:{armaduraPorSala:1},mults:{},tags:[],procs:[],spriteOverlay:"cabeza_casco",descripcion:"Una olla abollada que te para el primer golpe."},{id:"ojo_de_cristal",nombre:"Ojo de Cristal",categoria:"pasivo",slot:"cabeza",rareza:"rara",precio:8,stats:{},mults:{},tags:["ver_cofres"],procs:[{efecto:"critico",base:.1,porSuerte:.015,tope:.25}],spriteOverlay:"cabeza_monoculo",descripcion:"Ve el punto débil. A veces incluso lo acierta."},{id:"nucleo_denso",nombre:"Núcleo Denso",categoria:"pasivo",slot:"nucleo",rareza:"rara",precio:9,stats:{corazones:2,velMovimiento:-.8},mults:{},tags:[],procs:[],spriteOverlay:"nucleo_denso",descripcion:"Un núcleo el doble de pesado: aguanta más, corre menos."},{id:"corazon_de_la_gema",nombre:"Corazón de la Gema",categoria:"pasivo",slot:"nucleo",rareza:"legendaria",precio:15,stats:{proyectiles:1},mults:{dano:.75},tags:[],procs:[],spriteOverlay:"nucleo_gemelo",descripcion:"Dos gotas del mismo corazón."},{id:"chorro_dividido",nombre:"Chorro Dividido",categoria:"modificador",slot:"tragado",rareza:"comun",precio:3,stats:{},mults:{},tags:["divide"],procs:[{efecto:"dividir_en_3",base:.2,porSuerte:.03,tope:.5}],spriteOverlay:"tragado_bifurcador",descripcion:"El chorro se parte en dos al impactar. A veces en tres."},{id:"burbujas_traviesas",nombre:"Burbujas Traviesas",categoria:"modificador",slot:"tragado",rareza:"comun",precio:3,stats:{},mults:{dano:.7},tags:["burbuja"],procs:[{efecto:"burbuja_gigante",base:.05,porSuerte:.02,tope:.25}],spriteOverlay:"tragado_burbujas",descripcion:"Lentas, flotonas y con malas intenciones."},{id:"libro_multidisparo",nombre:"Libro de Multidisparo",categoria:"usable",slot:"usable",rareza:"rara",precio:7,stats:{},mults:{},tags:[],procs:[],usable:{efecto:"multidisparo",recargaTicks:1200,duracionTicks:300},spriteOverlay:"usable_libro",descripcion:"Capítulo 3: cómo disparar tres veces (Espacio)."},{id:"trebol_de_alcantarilla",nombre:"Trébol de Alcantarilla",categoria:"pasivo",slot:"nucleo",rareza:"comun",precio:3,stats:{suerte:2},mults:{},tags:[],procs:[],spriteOverlay:"nucleo_trebol",descripcion:"Creció donde nadie miraba. Da suerte igual."},{id:"manos_de_ladron",nombre:"Manos de Ladrón",categoria:"pasivo",slot:"brazos",rareza:"comun",precio:4,stats:{suerte:1},mults:{},tags:["iman_monedas"],procs:[],unlockable:!0,spriteOverlay:"brazos_ladron",descripcion:"Dedos largos: lo brillante viene solo a ti."},{id:"herradura_del_ahogado",nombre:"Herradura del Ahogado",categoria:"pasivo",slot:"cabeza",rareza:"rara",precio:8,stats:{suerte:3,corazones:-1},mults:{},tags:[],procs:[],unlockable:!0,spriteOverlay:"cabeza_herradura",descripcion:"Da mucha suerte. A su dueño anterior no."},{id:"punta_de_lanza",nombre:"Punta de Lanza",categoria:"pasivo",slot:"brazos",rareza:"comun",precio:4,stats:{dano:2,velProyectil:2},mults:{},tags:[],procs:[],spriteOverlay:"brazos_lanza",descripcion:"Afilada por generaciones de sapos descuidados."},{id:"pulmones_de_buzo",nombre:"Pulmones de Buzo",categoria:"pasivo",slot:"nucleo",rareza:"comun",precio:3,stats:{alcance:-1},mults:{cadencia:1.25},tags:[],procs:[],spriteOverlay:"nucleo_pulmones",descripcion:"Respira hondo, escupe seguido, apunta cerca."},{id:"caparazon_de_tortuga",nombre:"Caparazón de Tortuga",categoria:"pasivo",slot:"cabeza",rareza:"rara",precio:8,stats:{armaduraPorSala:2,velMovimiento:-.5},mults:{},tags:[],procs:[],spriteOverlay:"cabeza_caparazon",descripcion:"Su dueña llegó a los 200 años. Por algo será."},{id:"anillo_de_marea",nombre:"Anillo de Marea",categoria:"pasivo",slot:"nucleo",rareza:"rara",precio:8,stats:{suerte:1},mults:{},tags:[],procs:[{efecto:"critico",base:.05,porSuerte:.02,tope:.2}],spriteOverlay:"nucleo_anillo",descripcion:"Sube y baja con la marea. A veces, arrasa."},{id:"chorro_a_presion",nombre:"Chorro a Presión",categoria:"modificador",slot:"tragado",rareza:"rara",precio:9,stats:{},mults:{velProyectil:1.5,dano:1.2,cadencia:.85},tags:["empuje"],procs:[],spriteOverlay:"tragado_presion",descripcion:"Tragaste una manguera de bombero. Se nota."},{id:"medalla_oxidada",nombre:"Medalla Oxidada",categoria:"pasivo",slot:"nucleo",rareza:"comun",precio:3,stats:{corazones:1},mults:{},tags:[],procs:[],spriteOverlay:"nucleo_medalla",descripcion:"Alguien fue valiente antes que tú. Te presta un poco."},{id:"aletas_de_carpa",nombre:"Aletas de Carpa",categoria:"pasivo",slot:"piernas",rareza:"comun",precio:4,stats:{velMovimiento:.8,velProyectil:1},mults:{},tags:[],procs:[],spriteOverlay:"piernas_aletas",descripcion:"Nadan solas. Tú solo apunta."},{id:"silbato_del_pantano",nombre:"Silbato del Pantano",categoria:"usable",slot:"usable",rareza:"rara",precio:7,stats:{},mults:{},tags:[],procs:[],usable:{efecto:"prisa",recargaTicks:900,duracionTicks:300},spriteOverlay:"usable_silbato",descripcion:"Suena a huida digna. Corres el doble de digno."},{id:"corona_del_rey_sapo",nombre:"Corona del Rey Sapo",categoria:"pasivo",slot:"cabeza",rareza:"legendaria",precio:15,stats:{dano:3,velMovimiento:-.6},mults:{cadencia:1.15},tags:[],procs:[],unlockable:!0,spriteOverlay:"cabeza_corona",descripcion:"Pesa como un reino. Escupe como un rey."},{id:"perla_negra",nombre:"Perla Negra",categoria:"pasivo",slot:"nucleo",rareza:"rara",precio:9,stats:{suerte:2},mults:{},tags:[],procs:[{efecto:"critico",base:.08,porSuerte:.02,tope:.3}],unlockable:!0,spriteOverlay:"nucleo_perla",descripcion:"Creció alrededor de algo que nadie quiere nombrar."},{id:"escudo_de_caracol",nombre:"Escudo de Caracol",categoria:"usable",slot:"usable",rareza:"rara",precio:8,stats:{},mults:{},tags:[],procs:[],usable:{efecto:"escudo",recargaTicks:1200,duracionTicks:150},unlockable:!0,spriteOverlay:"usable_caracol",descripcion:"Préstamo de un caracol generoso. Devuélvelo entero."},{id:"guantes_de_rana",nombre:"Guantes de Rana",categoria:"pasivo",slot:"brazos",rareza:"comun",precio:4,stats:{},mults:{cadencia:1.2},tags:[],procs:[],unlockable:!0,spriteOverlay:"brazos_rana",descripcion:"Pegajosos por fuera, rapidísimos por dentro."}],a0={items:s0},o0=["dano","cadencia","alcance","velProyectil","velMovimiento","suerte","corazones","proyectiles","armaduraPorSala"];function l0(n,e){const t=n,i=r=>{throw new Error(`items.json[${e}] (${String(t?.id??"?")}): ${r}`)};(typeof t.id!="string"||!t.id)&&i("id inválido"),(typeof t.nombre!="string"||!t.nombre)&&i("nombre inválido"),["pasivo","modificador","usable","gema"].includes(t.categoria)||i(`categoria inválida: ${String(t.categoria)}`),["comun","rara","legendaria"].includes(t.rareza)||i(`rareza inválida: ${String(t.rareza)}`),(typeof t.precio!="number"||t.precio<=0)&&i("precio inválido");for(const r of["stats","mults"]){const s=t[r];(typeof s!="object"||s===null)&&i(`${r} debe ser objeto`);for(const[a,o]of Object.entries(s))o0.includes(a)||i(`${r}.${a} no es un stat conocido`),(typeof o!="number"||!Number.isFinite(o))&&i(`${r}.${a} no numérico`),r==="mults"&&o<=0&&i(`mults.${a} debe ser > 0`)}(!Array.isArray(t.tags)||t.tags.some(r=>typeof r!="string"))&&i("tags debe ser string[]"),Array.isArray(t.procs)||i("procs debe ser array");for(const r of t.procs){typeof r.efecto!="string"&&i("proc sin efecto");for(const s of["base","porSuerte","tope"]){const a=r[s];(typeof a!="number"||a<0||a>1)&&i(`proc.${s} fuera de [0,1]`)}r.base>r.tope&&i("proc.base > proc.tope")}if(t.categoria==="usable"){const r=t.usable??{};typeof r.efecto!="string"&&i("usable sin efecto"),(typeof r.recargaTicks!="number"||r.recargaTicks<=0)&&i("usable.recargaTicks inválido"),(typeof r.duracionTicks!="number"||r.duracionTicks<0)&&i("usable.duracionTicks inválido")}return t}function c0(){const n=a0.items;if(!Array.isArray(n)||n.length===0)throw new Error("items.json: lista de items vacía");const e=new Map;return n.forEach((t,i)=>{const r=l0(t,i);if(e.has(r.id))throw new Error(`items.json: id duplicado ${r.id}`);e.set(r.id,r)}),e}const _r=c0(),d0=[..._r.values()].filter(n=>!n.unlockable).map(n=>n.id);function sn(n){const e=_r.get(n);if(!e)throw new Error(`Item desconocido: ${n}`);return e}function lr(n,e){return n.some(t=>sn(t).tags.includes(e))}function u0(n){const e=[];for(const t of n)e.push(...sn(t).procs);return e}const f0=[{id:"vacia",obstacles:[],spawns:[[4,2.5],[11,2.5],[4,6.5],[11,6.5],[7.5,2],[7.5,7]]},{id:"pilares_esquinas",obstacles:[{x:3,y:2,w:1,h:1},{x:11,y:2,w:1,h:1},{x:3,y:6,w:1,h:1},{x:11,y:6,w:1,h:1}],spawns:[[7.5,2],[7.5,7],[2,4.5],[13,4.5],[5.5,4.5],[9.5,4.5]]},{id:"bloque_central",obstacles:[{x:6,y:3.5,w:3,h:2}],spawns:[[3,2.5],[12,2.5],[3,6.5],[12,6.5]]},{id:"columnas_dobles",obstacles:[{x:4,y:3,w:1,h:3},{x:10,y:3,w:1,h:3}],spawns:[[2.5,2],[12.5,2],[2.5,7],[12.5,7],[7.5,4.5]]},{id:"esquinas_diagonales",obstacles:[{x:2.5,y:1.5,w:2,h:1.5},{x:10.5,y:6,w:2,h:1.5}],spawns:[[11.5,2],[3.5,7],[7.5,4.5],[13,4.5]]},{id:"pasillo_partido",obstacles:[{x:2.5,y:4,w:3,h:1},{x:9.5,y:4,w:3,h:1}],spawns:[[3.5,2],[11.5,2],[3.5,7],[11.5,7]]},{id:"celdas_sueltas",obstacles:[{x:4,y:2.5,w:1,h:1},{x:10,y:2.5,w:1,h:1},{x:4,y:5.5,w:1,h:1},{x:10,y:5.5,w:1,h:1}],spawns:[[7.5,2],[7.5,7],[2,4.5],[13,4.5]]},{id:"islas_gemelas",obstacles:[{x:2.5,y:2,w:2,h:2},{x:10.5,y:5,w:2,h:2}],spawns:[[12,2],[3,7],[7.5,4.5],[7.5,7]]},{id:"espina_central",obstacles:[{x:7,y:2.8,w:1,h:3.4}],spawns:[[3.5,2.5],[3.5,6.5],[11.5,2.5],[11.5,6.5]]},{id:"dientes",obstacles:[{x:3,y:3,w:1,h:1},{x:5.5,y:5,w:1,h:1},{x:9,y:2.8,w:1,h:1},{x:11.5,y:5,w:1,h:1}],spawns:[[2,6.5],[13,2],[7.5,7],[10.5,6.5]]},{id:"murallas_laterales",obstacles:[{x:3,y:2,w:1,h:2},{x:3,y:5.5,w:1,h:2},{x:11,y:2,w:1,h:2},{x:11,y:5.5,w:1,h:2}],spawns:[[7.5,2],[7.5,7],[1.8,4.5],[13.2,4.5],[7.5,4.5]]},{id:"anillo_roto",obstacles:[{x:5,y:2.8,w:2,h:1},{x:8.5,y:2.8,w:2,h:1},{x:5,y:5.2,w:2,h:1},{x:8.5,y:5.2,w:2,h:1}],spawns:[[7.5,4.5],[2.5,2],[12.5,2],[2.5,7],[12.5,7]]},{id:"cuello_botella",obstacles:[{x:4.5,y:1,w:1,h:2.2},{x:4.5,y:5.8,w:1,h:2.2},{x:9,y:3.2,w:1,h:2.6}],spawns:[[3,4.5],[12,2.5],[12,6.5],[11,4.5]]},{id:"escombros",obstacles:[{x:2.5,y:5.8,w:1.5,h:1},{x:5.5,y:2.8,w:1,h:1.5},{x:9.5,y:6,w:1.5,h:1},{x:11.5,y:2.2,w:1,h:1}],spawns:[[7.5,4.5],[3.5,2.5],[11.5,4.2],[4.5,6.8]]}],h0={templates:f0};function p0(n){let e=2166136261;for(let t=0;t<n.length;t++)e^=n.charCodeAt(t),e=Math.imul(e,16777619);return e>>>0}function xr(n){let e=n>>>0;return function(){e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function m0(n){const e=t=>xr((n^p0(t))>>>0);return{mapgen:e("mapgen"),ai:e("ai"),drops:e("drops"),procs:e("procs")}}function hr(n,e,t){return e+n()*(t-e)}function g0(){const n=h0.templates;if(!Array.isArray(n)||n.length<12)throw new Error("el_pozo.json: se esperan al menos 12 plantillas (PLAN F1.2)");for(const e of n)if(!e.id||!Array.isArray(e.obstacles)||!Array.isArray(e.spawns))throw new Error(`plantilla malformada: ${e.id??"?"}`);return n}const Po=g0();function jo(n){const e=Po.find(t=>t.id===n);if(!e)throw new Error(`plantilla desconocida: ${n}`);return e}const _i=11,Pr=[{dx:0,dy:-1,door:"n",opp:"s"},{dx:1,dy:0,door:"e",opp:"w"},{dx:0,dy:1,door:"s",opp:"n"},{dx:-1,dy:0,door:"w",opp:"e"}];function Ji(n,e){return e*_i+n}function _0(n){return 4+n}function Nd(n,e){const t=new Map,i=[],r=(d,h,_)=>{const S={id:i.length,gx:d,gy:h,kind:_,doors:{n:-1,e:-1,s:-1,w:-1},templateId:"vacia",seed:Math.floor(n()*4294967295)>>>0,cleared:_==="start"||_==="treasure"||_==="shop",visited:_==="start",looted:!1,locked:_==="treasure",sold:[],drops:[]};return i.push(S),t.set(Ji(d,h),S),S},s=r(Math.floor(_i/2),Math.floor(_i/2),"start"),a=_0(e);let o=0,l=0;for(;o<a&&l++<500;){const d=i[Math.floor(n()*i.length)],h=Pr[Math.floor(n()*4)],_=d.gx+h.dx,S=d.gy+h.dy;if(_<0||S<0||_>=_i||S>=_i||t.has(Ji(_,S)))continue;let m=0;for(const p of Pr)t.has(Ji(_+p.dx,S+p.dy))&&m++;m>1||(r(_,S,"normal"),o++)}const c=["boss","treasure","shop"];for(const d of c){const h=[];for(const S of i)if(!(S.kind!=="normal"&&S.kind!=="start"))for(const m of Pr){const p=S.gx+m.dx,A=S.gy+m.dy;if(p<0||A<0||p>=_i||A>=_i||t.has(Ji(p,A)))continue;let w=0;for(const v of Pr)t.has(Ji(p+v.dx,A+v.dy))&&w++;w===1&&h.push({gx:p,gy:A,host:S})}if(h.length===0)throw new Error(`mapgen: sin hueco para la sala ${d} (nivel ${e})`);let _;if(d==="boss"){let S=-1,m=h[0];for(const p of h){const A=Math.abs(p.gx-s.gx)+Math.abs(p.gy-s.gy);A>S&&(S=A,m=p)}_=m}else _=h[Math.floor(n()*h.length)];r(_.gx,_.gy,d)}for(const d of i)for(const h of Pr){const _=t.get(Ji(d.gx+h.dx,d.gy+h.dy));_&&(d.doors[h.door]=_.id)}for(const d of i)d.kind==="normal"&&(d.templateId=Po[Math.floor(n()*Po.length)].id);const u=i.filter(d=>d.kind==="normal"),f=u[Math.floor(n()*u.length)].id;return{level:e,rooms:i,current:s.id,trapdoorOpen:!1,keyRoomId:f}}function x0(n,e=d0){const t=xr(n.seed^24301),i=[...e],r=[];for(let s=0;s<3&&i.length;s++)r.push(i.splice(Math.floor(t()*i.length),1)[0]);return r}function v0(n,e){return e==="boss"?(n+yc)*W_:e==="normal"?n+yc:0}function M0(n,e,t){const i=n();if(t==="sapo_doble"||t==="gorko")return null;let r=0;for(const s of Object.keys(Co)){const a=Co[s];if(r+=Math.min(a.chanceTope,a.chanceBase+a.chancePorNivel*(e-1)),i<r)return s}return null}function S0(n,e){if(n.kind==="boss"&&e===Qo)return[{kind:"gorko",x:ct/2,y:at/2-1.5,variant:null}];const t=v0(e,n.kind);if(t<=0)return[];const i=xr(n.seed),s=jo(n.templateId).spawns.map(([d,h])=>({x:d,y:h}));for(let d=s.length-1;d>0;d--){const h=Math.floor(i()*(d+1));[s[d],s[h]]=[s[h],s[d]]}const a=Object.entries(X_),o=Math.min(...a.map(([,d])=>d)),l=[];let c=t,u=0,f=0;for(;c>=o&&u<24;){const d=a.filter(([p,A])=>A<=c&&(p!=="sapo_doble"||f<q_));if(d.length===0)break;const[h,_]=d[Math.floor(i()*d.length)];h==="sapo_doble"&&f++;const S=s[u%s.length],m=u>=s.length?.6:0;l.push({kind:h,x:S.x+(i()*2-1)*m,y:S.y+(i()*2-1)*m,variant:M0(i,e,h)}),c-=_,u++}return l}function y0(n){const e={},t={};for(const i of n){const r=sn(i);for(const[s,a]of Object.entries(r.stats))e[s]=(e[s]??0)+a;for(const[s,a]of Object.entries(r.mults))t[s]=(t[s]??1)*a}return{flat:e,mult:t}}function Fd(n,e){return Math.min(e.max,Math.max(e.min,n))}function Qi(n,e,t,i){return Fd((n+(t.flat[e]??0))*(t.mult[e]??1),i)}function zs(n){const e=y0(n);return{maxHalfHearts:Fd(vt.maxHalfHearts+(e.flat.corazones??0)*2,pi.halfHearts),damage:Qi(vt.damage,"dano",e,pi.damage),fireRate:Qi(vt.fireRate,"cadencia",e,pi.fireRate),range:Qi(vt.range,"alcance",e,pi.range),shotSpeed:Qi(vt.shotSpeed,"velProyectil",e,pi.shotSpeed),moveSpeed:Qi(vt.moveSpeed,"velMovimiento",e,pi.moveSpeed),luck:Qi(vt.luck,"suerte",e,pi.luck),projectiles:1+(e.flat.proyectiles??0),armorPerRoom:e.flat.armaduraPorSala??0}}function Od(n,e){return Math.min(n.tope,n.base+e*n.porSuerte)}function kd(){return{up:!1,down:!1,left:!1,right:!1,fire:!1,dash:!1,use:!1,use2:!1,interact:!1,aimX:0,aimY:0}}function Io(n){return[..._r.values()].filter(e=>!e.unlockable||n.config.unlockedItems.includes(e.id)).map(e=>e.id)}const As="0.1.0",mn=1,gn=1,_n=ct-1,xn=at-1;function wc(n,e){const t=m0(n),i={usableSlots:e?.usableSlots??1,unlockedItems:e?.unlockedItems??[]},r={version:As,seed:n,tick:0,status:"playing",config:i,player:{x:3.5,y:at/2,kx:0,ky:0,halfHearts:vt.maxHalfHearts,maxHalfHearts:vt.maxHalfHearts,armor:0,keys:0,crystals:0,iframes:0,fireCooldown:0,aimX:1,aimY:0,deathTick:0,items:[],usable:null,usable2:null,dashTicks:0,dashCooldown:0,dashDirX:1,dashDirY:0},stats:zs([]),floor:Nd(t.mapgen,1),obstacles:[],enemies:[],shots:[],puddles:[],pickups:[],drops:[],chest:null,events:[],nextId:2};return r.obstacles=[...jo(r.floor.rooms[r.floor.current].templateId).obstacles],{state:r,step(s){R0(r,s??kd(),t)},hash(){return Y0(r)}}}const b0={sapo_escupidor:Ht.hp,renacuajo:Gt.hp,mosca_gorda:ii.hp,babosa_acorazada:si.hp,sapo_doble:ht.hp,gorko:Fe.hp};function wi(n){return E0(n.kind)*n.sizeMult}function E0(n){switch(n){case"sapo_escupidor":return Ht.radius;case"renacuajo":return Gt.radius;case"mosca_gorda":return ii.radius;case"babosa_acorazada":return si.radius;case"sapo_doble":return ht.radius;case"gorko":return Fe.radius}}function T0(n){switch(n){case"sapo_escupidor":return Ht.contactDamage;case"renacuajo":return Gt.contactDamage;case"mosca_gorda":return ii.contactDamage;case"babosa_acorazada":return si.contactDamage;case"sapo_doble":return ht.contactDamage;case"gorko":return Fe.contactDamage}}function Bd(n,e,t,i,r=1,s=null){const a=ct/2-t,o=at/2-i,l=Math.hypot(a,o)||1,c=s?Co[s]:null,u=e==="gorko"?1:r,f=(1+ba.hpPorNivel*(u-1))*(c?.hpMult??1),d=Math.round(b0[e]*f);return{id:n,kind:e,x:t,y:i,kx:0,ky:0,hp:d,maxHp:d,fsm:"idle",timer:0,targetX:t,targetY:i,wanderX:t,wanderY:i,facingX:a/l,facingY:o/l,swallowTarget:-1,swallowCooldown:0,attackCycle:0,phase2:!1,speedMult:(1+ba.velPorNivel*(u-1))*(c?.velMult??1),sizeMult:c?.sizeMult??1,dmgPlus:(u>=ba.danoExtraDesdeNivel?1:0)+(c?.danoPlus??0),variant:s}}const ms=.8;function el(n,e,t){const i=n.floor.current,r=n.floor.rooms[e];i!==e&&(n.floor.rooms[i].drops=n.drops.map(a=>({kind:a.kind,x:a.x,y:a.y}))),n.floor.current=e,n.obstacles=[...jo(r.templateId).obstacles],n.shots.length=0,n.puddles.length=0,n.pickups.length=0,n.drops.length=0;for(const a of r.drops)n.drops.push({id:n.nextId++,kind:a.kind,x:a.x,y:a.y});r.drops=[];const s=n.player;if(t==="n"?(s.x=ct/2,s.y=at-1-ms):t==="s"?(s.x=ct/2,s.y=1+ms):t==="e"?(s.x=1+ms,s.y=at/2):t==="w"?(s.x=ct-1-ms,s.y=at/2):(s.x=ct/2,s.y=at/2+1.5),s.kx=s.ky=0,n.enemies.length=0,r.visited=!0,!r.cleared)for(const a of S0(r,n.floor.level))n.enemies.push(Bd(n.nextId++,a.kind,a.x,a.y,n.floor.level,a.variant));if(r.kind==="treasure"&&!r.looted){const a=xr(r.seed),o=Io(n),l=o[Math.floor(a()*o.length)];n.pickups.push({id:n.nextId++,itemId:l,x:ct/2,y:at/2})}r.kind==="shop"&&(x0(r,Io(n)).filter(o=>!r.sold.includes(o)).forEach((o,l)=>{const[c,u]=Tc[l%Tc.length];n.pickups.push({id:n.nextId++,itemId:o,x:c,y:u,price:sn(o).precio})}),n.obstacles.push({...e0,invisible:!0})),t&&je(n,{type:"room_changed",from:i,to:e,dir:t,tick:n.tick})}function A0(n,e){if(n.floor.level>=Qo){n.status="victory",je(n,{type:"victory",tick:n.tick});return}n.floor=Nd(e.mapgen,n.floor.level+1),el(n,n.floor.current),je(n,{type:"level_started",level:n.floor.level,tick:n.tick})}function tl(n,e,t,i){for(const r of i){const s=Ct(n,r.x,r.x+r.w),a=Ct(e,r.y,r.y+r.h),o=n-s,l=e-a,c=o*o+l*l;if(!(c>=t*t))if(c>1e-9){const u=Math.sqrt(c);n=s+o/u*t,e=a+l/u*t}else{const u=n-r.x,f=r.x+r.w-n,d=e-r.y,h=r.y+r.h-e,_=Math.min(u,f,d,h);_===u?n=r.x-t:_===f?n=r.x+r.w+t:_===d?e=r.y-t:e=r.y+r.h+t}}return{x:n,y:e}}function w0(n,e,t){for(const i of t)if(n>=i.x&&n<=i.x+i.w&&e>=i.y&&e<=i.y+i.h)return!0;return!1}function R0(n,e,t){if(n.events=[],n.tick++,n.status!=="playing"){Cc(n),Pc(n);return}C0(n,e,t),L0(n,t),Cc(n),Pc(n),H0(n,t),W0(n)}function C0(n,e,t){const i=n.player,r=(y,I)=>{if(y&&(y.cooldown>0&&y.cooldown--,y.activeTicks>0&&y.activeTicks--,I&&y.cooldown===0)){const P=sn(y.itemId);y.activeTicks=P.usable.duracionTicks,y.cooldown=P.usable.recargaTicks,je(n,{type:"usable_activated",itemId:y.itemId,tick:n.tick})}};r(i.usable,e.use),r(i.usable2,e.use2),i.dashCooldown>0&&i.dashCooldown--;let s=(e.right?1:0)-(e.left?1:0),a=(e.down?1:0)-(e.up?1:0);if(s!==0&&a!==0){const y=1/Math.SQRT2;s*=y,a*=y}if(e.dash&&i.dashTicks===0&&i.dashCooldown===0&&lr(i.items,"dash")){const y=s!==0||a!==0?s:i.aimX,I=s!==0||a!==0?a:i.aimY,P=Math.hypot(y,I)||1;i.dashDirX=y/P,i.dashDirY=I/P,i.dashTicks=Cr.ticks,i.dashCooldown=Cr.cooldownTicks,i.iframes=Math.max(i.iframes,Cr.iframeTicks),je(n,{type:"dash_used",tick:n.tick})}const o=i.x,l=i.y;if(i.dashTicks>0)i.dashTicks--,i.x+=(i.dashDirX*Cr.speed+i.kx)*xt,i.y+=(i.dashDirY*Cr.speed+i.ky)*xt;else{const y=n.stats.moveSpeed*(zd(n,"prisa")?n0:1);i.x+=(s*y+i.kx)*xt,i.y+=(a*y+i.ky)*xt}i.kx*=Us,i.ky*=Us,Math.abs(i.kx)<.05&&(i.kx=0),Math.abs(i.ky)<.05&&(i.ky=0);const c=n.floor.rooms[n.floor.current],u=c.cleared,f=y=>!u||y<0?!1:!n.floor.rooms[y].locked||i.keys>0,d=Math.abs(i.x-ct/2)<ei,h=Math.abs(i.y-at/2)<ei,_=vt.radius,S=f(c.doors.n)&&d?gn-.5:gn+_,m=f(c.doors.s)&&d?xn+.5:xn-_,p=f(c.doors.w)&&h?mn-.5:mn+_,A=f(c.doors.e)&&h?_n+.5:_n-_;i.x=Ct(i.x,p,A),i.y=Ct(i.y,S,m);const w=tl(i.x,i.y,_,n.obstacles);i.x=w.x,i.y=w.y;const v=(y,I)=>{const P=n.floor.rooms[y];P.locked&&(P.locked=!1,i.keys--,je(n,{type:"door_unlocked",roomId:y,tick:n.tick})),el(n,y,I)};if(i.y<gn-.25&&c.doors.n>=0){v(c.doors.n,"n");return}if(i.y>xn+.25&&c.doors.s>=0){v(c.doors.s,"s");return}if(i.x<mn-.25&&c.doors.w>=0){v(c.doors.w,"w");return}if(i.x>_n+.25&&c.doors.e>=0){v(c.doors.e,"e");return}if(n.floor.trapdoorOpen&&c.kind==="boss"&&Pt(i.x,i.y,ct/2,at/2)<r0){A0(n,t);return}(i.x!==o||i.y!==l)&&n.tick%G_===0&&lr(i.items,"rastro_charcos")&&n.puddles.push({x:i.x,y:i.y+vt.radius*.6,ttl:V_});const E=e.aimX-i.x,b=e.aimY-i.y,C=Math.hypot(E,b);C>.001&&(i.aimX=E/C,i.aimY=b/C),i.fireCooldown>0&&i.fireCooldown--,e.fire&&i.fireCooldown===0&&(P0(n,t),i.fireCooldown=Math.round(Ai/n.stats.fireRate),je(n,{type:"shot_fired",owner:"player",tick:n.tick}));for(let y=n.pickups.length-1;y>=0;y--){const I=n.pickups[y],P=Pt(i.x,i.y,I.x,I.y);if(!I.price&&P<vt.radius+.35)Rc(n,y);else if(I.price&&e.interact&&P<t0&&i.crystals>=I.price){const F=I.price,$=I.itemId;i.crystals-=F,n.floor.rooms[n.floor.current].sold.push($),I.price=0,Rc(n,y),je(n,{type:"item_bought",itemId:$,price:F,crystalsLeft:i.crystals,tick:n.tick})}}const x=lr(i.items,"iman_monedas")?bc*2.2:bc;for(let y=n.drops.length-1;y>=0;y--){const I=n.drops[y];if(I.kind==="heart"&&i.halfHearts>=i.maxHalfHearts)continue;const P=Pt(i.x,i.y,I.x,I.y);if(P<x&&P>1e-6&&(I.x+=(i.x-I.x)/P*Ec*xt,I.y+=(i.y-I.y)/P*Ec*xt),!(P>=Q_)){switch(I.kind){case"heart":i.halfHearts=Math.min(i.maxHalfHearts,i.halfHearts+Z_),je(n,{type:"heart_collected",halfHeartsLeft:i.halfHearts,tick:n.tick});break;case"key":i.keys++,je(n,{type:"key_collected",keys:i.keys,tick:n.tick});break;case"crystal":case"crystal_med":case"crystal_big":{const F=J_[I.kind];i.crystals=Math.min($_,i.crystals+F),je(n,{type:"crystal_collected",value:F,total:i.crystals,tick:n.tick});break}}n.drops.splice(y,1)}}n.chest&&!n.chest.opened&&n.chest.roomId===n.floor.current&&Pt(i.x,i.y,n.chest.x,n.chest.y)<vt.radius+i0&&(n.chest.opened=!0,n.chest.reward==="cristales"&&n.drops.push({id:n.nextId++,kind:"crystal_big",x:n.chest.x,y:n.chest.y+.7}),je(n,{type:"chest_opened",reward:n.chest.reward,tick:n.tick})),I0(n)}function P0(n,e){const t=n.player,i=lr(t.items,"burbuja"),r=[];lr(t.items,"divide")&&r.push("divide"),i&&r.push("burbuja");let s=n.stats.projectiles;for(const c of[t.usable,t.usable2])c&&c.activeTicks>0&&sn(c.itemId).usable.efecto==="multidisparo"&&(s+=2);const a=n.stats.shotSpeed*(i?ir.speedMult:1),o=B_+(lr(t.items,"empuje")?z_:0),l=Math.atan2(t.aimY,t.aimX);for(let c=0;c<s;c++){const u=l+(c-(s-1)/2)*H_,f=Math.cos(u),d=Math.sin(u);let h=or*(i?ir.radiusMult:1),_=n.stats.damage;i&&nl(n,e,"burbuja_gigante")&&(h=or*ir.giantRadiusMult,_*=ir.giantDamageMult),n.shots.push({id:n.nextId++,owner:"player",x:t.x+f*(vt.radius+h),y:t.y+d*(vt.radius+h),vx:f*a,vy:d*a,damage:_,traveled:0,maxRange:n.stats.range,radius:h,knockback:o,tags:r,fragment:!1})}}function nl(n,e,t){const i=u0(n.player.items).find(a=>a.efecto===t);if(!i)return!1;const r=Od(i,n.stats.luck),s=e.procs()<r;return s&&je(n,{type:"proc_triggered",efecto:t,tick:n.tick}),s}function Rc(n,e){const t=n.player,i=n.pickups[e],r=sn(i.itemId);if(r.categoria==="usable")if(!t.usable)t.usable={itemId:i.itemId,cooldown:0,activeTicks:0},n.pickups.splice(e,1);else if(n.config.usableSlots>=2&&!t.usable2)t.usable2={itemId:i.itemId,cooldown:0,activeTicks:0},n.pickups.splice(e,1);else{const s=t.usable;t.usable={itemId:i.itemId,cooldown:0,activeTicks:0},i.itemId=s.itemId}else{t.items.push(i.itemId),n.pickups.splice(e,1);const s=n.floor.rooms[n.floor.current];s.kind==="treasure"&&(s.looted=!0);const a=n.stats;n.stats=zs(t.items);const o=n.stats.maxHalfHearts-a.maxHalfHearts;t.maxHalfHearts=n.stats.maxHalfHearts,o>0&&(t.halfHearts+=o),t.halfHearts=Math.min(t.halfHearts,t.maxHalfHearts);const l=n.stats.armorPerRoom-a.armorPerRoom;l>0&&(t.armor=Math.min(k_,t.armor+l*2))}je(n,{type:"item_picked",itemId:r.id,tick:n.tick})}function I0(n){const e=n.player;if(e.iframes>0&&(e.iframes--,e.iframes===0)){let t=!1;for(const i of n.enemies){const r=Pt(e.x,e.y,i.x,i.y),s=vt.radius+wi(i);if(r<s){const a=r>.001?(e.x-i.x)/r:1,o=r>.001?(e.y-i.y)/r:0;e.x=Ct(i.x+a*(s+.05),mn+vt.radius,_n-vt.radius),e.y=Ct(i.y+o*(s+.05),gn+vt.radius,xn-vt.radius),t=!0}}je(n,{type:"iframes_ended",separated:t,tick:n.tick})}}function L0(n,e){const t=[];for(const i of n.enemies){switch(i.x+=i.kx*xt,i.y+=i.ky*xt,i.kx*=Us,i.ky*=Us,i.kind){case"sapo_escupidor":D0(n,i,e);break;case"renacuajo":U0(n,i);break;case"mosca_gorda":N0(n,i,e);break;case"babosa_acorazada":F0(n,i);break;case"sapo_doble":O0(n,i,t);break;case"gorko":k0(n,i,e,t);break}const r=wi(i);if(i.x=Ct(i.x,mn+r,_n-r),i.y=Ct(i.y,gn+r,xn-r),i.kind!=="mosca_gorda"){const s=tl(i.x,i.y,r,n.obstacles);i.x=s.x,i.y=s.y}}z0(n),t.length&&(n.enemies=n.enemies.filter(i=>!t.includes(i.id)))}function D0(n,e,t){const i=n.player,r=Pt(e.x,e.y,i.x,i.y);switch(e.fsm){case"idle":{if(e.timer>0&&e.timer--,r<=Ht.attackRange&&e.timer===0){e.fsm="aim",e.timer=Ht.telegraphTicks,e.targetX=i.x,e.targetY=i.y,je(n,{type:"telegraph_started",enemyId:e.id,tick:n.tick});break}n.tick%45===0&&(r<=Ht.aggroRange?(e.wanderX=i.x,e.wanderY=i.y):(e.wanderX=Ct(e.x+hr(t.ai,-2,2),mn+1,_n-1),e.wanderY=Ct(e.y+hr(t.ai,-2,2),gn+1,xn-1)));const s=Pt(e.x,e.y,e.wanderX,e.wanderY);s>.2&&(e.x+=(e.wanderX-e.x)/s*Ht.moveSpeed*e.speedMult*xt,e.y+=(e.wanderY-e.y)/s*Ht.moveSpeed*e.speedMult*xt);break}case"aim":{e.timer--,e.timer<=0&&(e.fsm="shoot");break}case"shoot":{Ns(n,e,e.targetX,e.targetY,0,Ht.spitSpeed,Ht.spitDamage),je(n,{type:"shot_fired",owner:"enemy",tick:n.tick}),e.fsm="cool",e.timer=Ht.cooldownTicks;break}case"cool":{e.timer--,e.timer<=0&&(e.fsm="idle",e.timer=12);break}default:e.fsm="idle"}}function U0(n,e){const t=n.player;switch(e.fsm){case"idle":{if(e.timer>0&&e.timer--,e.timer===0&&Pt(e.x,e.y,t.x,t.y)<=Gt.aggroRange){e.fsm="windup",e.timer=Gt.windupTicks;const i=t.x-e.x,r=t.y-e.y,s=Math.hypot(i,r)||1;e.facingX=i/s,e.facingY=r/s,je(n,{type:"telegraph_started",enemyId:e.id,tick:n.tick})}break}case"windup":{e.timer--,e.timer<=0&&(e.fsm="hop",e.timer=Gt.hopTicks);break}case"hop":{e.x+=e.facingX*Gt.hopSpeed*e.speedMult*xt,e.y+=e.facingY*Gt.hopSpeed*e.speedMult*xt,e.timer--,e.timer<=0&&(e.fsm="idle",e.timer=Gt.pauseTicks);break}default:e.fsm="idle",e.timer=Gt.pauseTicks}}function N0(n,e,t){const i=n.player;n.tick%ii.retargetTicks===0&&(e.wanderX=Ct(i.x+hr(t.ai,-2.2,ii.wobble),mn+.5,_n-.5),e.wanderY=Ct(i.y+hr(t.ai,-2.2,ii.wobble),gn+.5,xn-.5));const r=e.wanderX-e.x,s=e.wanderY-e.y,a=Math.hypot(r,s);a>.15&&(e.x+=r/a*ii.speed*e.speedMult*xt,e.y+=s/a*ii.speed*e.speedMult*xt,e.facingX=r/a,e.facingY=s/a)}function F0(n,e){const t=n.player,i=Math.atan2(t.y-e.y,t.x-e.x),r=Math.atan2(e.facingY,e.facingX);let s=i-r;for(;s>Math.PI;)s-=2*Math.PI;for(;s<-Math.PI;)s+=2*Math.PI;const a=Ct(s,-.02,si.turnRadPerTick),o=r+a;e.facingX=Math.cos(o),e.facingY=Math.sin(o),Pt(e.x,e.y,t.x,t.y)<=si.aggroRange&&(e.x+=e.facingX*si.speed*e.speedMult*xt,e.y+=e.facingY*si.speed*e.speedMult*xt)}function O0(n,e,t){const i=n.player,r=Pt(e.x,e.y,i.x,i.y);switch(e.swallowCooldown>0&&e.swallowCooldown--,e.fsm){case"idle":{e.timer>0&&e.timer--;const s=B0(n,e);if(e.hp<e.maxHp&&e.swallowCooldown===0&&s){const a=Pt(e.x,e.y,s.x,s.y);if(a<=ht.swallowRange){e.fsm="swallow_aim",e.timer=ht.swallowTelegraphTicks,e.swallowTarget=s.id,je(n,{type:"telegraph_started",enemyId:e.id,tick:n.tick});break}const o=a||1;e.x+=(s.x-e.x)/o*ht.moveSpeed*e.speedMult*xt,e.y+=(s.y-e.y)/o*ht.moveSpeed*e.speedMult*xt;break}if(r<=ht.attackRange&&e.timer===0){e.fsm="aim",e.timer=ht.telegraphTicks,e.targetX=i.x,e.targetY=i.y,je(n,{type:"telegraph_started",enemyId:e.id,tick:n.tick});break}r<=ht.aggroRange&&r>2&&(e.x+=(i.x-e.x)/r*ht.moveSpeed*e.speedMult*xt,e.y+=(i.y-e.y)/r*ht.moveSpeed*e.speedMult*xt);break}case"aim":{e.timer--,e.timer<=0&&(e.fsm="shoot");break}case"shoot":{Ns(n,e,e.targetX,e.targetY,-.16,ht.spitSpeed,ht.spitDamage),Ns(n,e,e.targetX,e.targetY,ht.spitSpreadRad,ht.spitSpeed,ht.spitDamage),je(n,{type:"shot_fired",owner:"enemy",tick:n.tick}),e.fsm="cool",e.timer=ht.cooldownTicks;break}case"swallow_aim":{if(e.timer--,e.timer<=0){const s=n.enemies.find(a=>a.id===e.swallowTarget);if(s&&Pt(e.x,e.y,s.x,s.y)<=ht.swallowRange*1.3){t.push(s.id);const a=Math.min(ht.healPerSwallow,e.maxHp-e.hp);e.hp+=a,je(n,{type:"elite_swallowed",enemyId:e.id,victimId:s.id,healed:a,tick:n.tick})}e.swallowTarget=-1,e.swallowCooldown=ht.swallowCooldownTicks,e.fsm="cool",e.timer=24}break}case"cool":{e.timer--,e.timer<=0&&(e.fsm="idle",e.timer=10);break}default:e.fsm="idle"}}function k0(n,e,t,i){const r=n.player;if(!e.phase2&&e.hp<=e.maxHp/2){e.phase2=!0,e.fsm="cool",e.timer=30,je(n,{type:"gorko_phase2",hp:e.hp,tick:n.tick});return}switch(e.fsm){case"idle":{if(e.timer>0){e.timer--;const o=Pt(e.x,e.y,r.x,r.y);o>2.5&&(e.x+=(r.x-e.x)/o*Fe.moveSpeed*xt,e.y+=(r.y-e.y)/o*Fe.moveSpeed*xt);break}const s=e.attackCycle++;if(e.phase2){const o=n.enemies.find(l=>l.kind==="renacuajo");if(s%2===0&&o){i.push(o.id),je(n,{type:"elite_swallowed",enemyId:e.id,victimId:o.id,healed:0,tick:n.tick}),e.fsm="volley",e.timer=Fe.volleyAimTicks,e.targetX=r.x,e.targetY=r.y,je(n,{type:"telegraph_started",enemyId:e.id,tick:n.tick});break}if(s%2===0){e.fsm="summon",e.timer=Fe.summonTicks,je(n,{type:"telegraph_started",enemyId:e.id,tick:n.tick});break}e.fsm="jump_aim",e.timer=Fe.jumpAimTicks,e.targetX=r.x,e.targetY=r.y,je(n,{type:"telegraph_started",enemyId:e.id,tick:n.tick});break}const a=s%3;a===0?(e.fsm="jump_aim",e.timer=Fe.jumpAimTicks,e.targetX=r.x,e.targetY=r.y):a===1?(e.fsm="aim",e.timer=Fe.tongueAimTicks,e.targetX=r.x,e.targetY=r.y):(e.fsm="summon",e.timer=Fe.summonTicks),je(n,{type:"telegraph_started",enemyId:e.id,tick:n.tick});break}case"jump_aim":{e.timer--,e.timer<=0&&(e.fsm="airborne",e.timer=Fe.airborneTicks);break}case"airborne":{if(e.timer--,e.timer<=0){e.x=Ct(e.targetX,mn+Fe.radius,_n-Fe.radius),e.y=Ct(e.targetY,gn+Fe.radius,xn-Fe.radius);const s=tl(e.x,e.y,Fe.radius,n.obstacles);e.x=s.x,e.y=s.y,n.player.iframes===0&&Pt(r.x,r.y,e.x,e.y)<Fe.slamRadius+vt.radius&&Lo(n,Fe.slamDamage,e.x,e.y,"aplastamiento:gorko"),e.fsm="cool",e.timer=Fe.idleTicks}break}case"aim":{e.timer--,e.timer<=0&&(e.fsm="shoot");break}case"shoot":{const s=Math.atan2(e.targetY-e.y,e.targetX-e.x);n.shots.push({id:n.nextId++,owner:"enemy",x:e.x+Math.cos(s)*(Fe.radius+Fe.tongueRadius),y:e.y+Math.sin(s)*(Fe.radius+Fe.tongueRadius),vx:Math.cos(s)*Fe.tongueSpeed,vy:Math.sin(s)*Fe.tongueSpeed,damage:Fe.tongueDamage,traveled:0,maxRange:Fe.tongueRange,radius:Fe.tongueRadius,knockback:0,tags:["lengua"],fragment:!1}),je(n,{type:"shot_fired",owner:"enemy",tick:n.tick}),e.fsm="cool",e.timer=Fe.idleTicks;break}case"summon":{if(e.timer--,e.timer<=0){const s=n.enemies.filter(o=>o.kind==="renacuajo").length,a=Math.min(Fe.summonCount,Fe.maxTadpoles-s);for(let o=0;o<a;o++){const l=Ct(e.x+hr(t.ai,-2,2),mn+1,_n-1),c=Ct(e.y+hr(t.ai,-2,2),gn+1,xn-1);n.enemies.push(Bd(n.nextId++,"renacuajo",l,c))}e.fsm="cool",e.timer=Fe.idleTicks}break}case"volley":{if(e.timer--,e.timer<=0){const s=Math.atan2(e.targetY-e.y,e.targetX-e.x);for(let a=0;a<Fe.volleyCount;a++){const o=(a-(Fe.volleyCount-1)/2)*(Fe.volleySpreadRad/(Fe.volleyCount-1));Ns(n,e,e.x+Math.cos(s+o),e.y+Math.sin(s+o),0,Fe.volleySpitSpeed,Fe.volleyDamage)}je(n,{type:"shot_fired",owner:"enemy",tick:n.tick}),e.fsm="belly",e.timer=Fe.bellyTicks}break}case"belly":{e.timer--,e.timer<=0&&(e.fsm="idle",e.timer=Fe.idleTicks);break}case"cool":{e.timer--,e.timer<=0&&(e.fsm="idle",e.timer=Fe.idleTicks);break}default:e.fsm="idle",e.timer=Fe.idleTicks}}function B0(n,e){let t=null,i=ht.swallowSeekRange;for(const r of n.enemies){if(r.id===e.id||r.kind==="sapo_doble")continue;const s=Pt(e.x,e.y,r.x,r.y);s<i&&(i=s,t=r)}return t}function Ns(n,e,t,i,r,s,a){const o=Math.atan2(i-e.y,t-e.x)+r,l=Math.cos(o),c=Math.sin(o),u=wi(e);n.shots.push({id:n.nextId++,owner:"enemy",x:e.x+l*(u+or),y:e.y+c*(u+or),vx:l*s,vy:c*s,damage:a,traveled:0,maxRange:12,radius:or,knockback:0,tags:[],fragment:!1})}function z0(n){for(let e=0;e<n.enemies.length;e++)for(let t=e+1;t<n.enemies.length;t++){const i=n.enemies[e],r=n.enemies[t];if(i.fsm==="airborne"||r.fsm==="airborne")continue;const s=(wi(i)+wi(r))*.95,a=r.x-i.x,o=r.y-i.y,l=Math.hypot(a,o);if(l>=s)continue;const c=l>1e-6?a/l:Math.cos(i.id*2.399),u=l>1e-6?o/l:Math.sin(i.id*2.399),f=Y_*xt*.5;i.x-=c*f,i.y-=u*f,r.x+=c*f,r.y+=u*f}}function Cc(n){for(let e=n.shots.length-1;e>=0;e--){const t=n.shots[e];if(t.owner==="player"&&t.tags.includes("burbuja")&&n.enemies.length){let s=null,a=ir.homingRange;for(const o of n.enemies){const l=Pt(t.x,t.y,o.x,o.y);l<a&&(a=l,s=o)}if(s){const o=Math.atan2(t.vy,t.vx);let c=Math.atan2(s.y-t.y,s.x-t.x)-o;for(;c>Math.PI;)c-=2*Math.PI;for(;c<-Math.PI;)c+=2*Math.PI;const u=Ct(c,-.05,ir.turnRadPerTick),f=Math.hypot(t.vx,t.vy);t.vx=Math.cos(o+u)*f,t.vy=Math.sin(o+u)*f}}t.x+=t.vx*xt,t.y+=t.vy*xt,t.traveled+=Math.hypot(t.vx,t.vy)*xt;const i=t.x<mn||t.x>_n||t.y<gn||t.y>xn||w0(t.x,t.y,n.obstacles),r=t.traveled>=t.maxRange;(i||r)&&(t.owner==="player"&&n.puddles.push({x:Ct(t.x,mn+.2,_n-.2),y:Ct(t.y,gn+.2,xn-.2),ttl:Ro}),n.shots.splice(e,1))}}function Pc(n){for(let e=n.puddles.length-1;e>=0;e--)--n.puddles[e].ttl<=0&&n.puddles.splice(e,1)}function H0(n,e){const t=n.player;for(let i=n.shots.length-1;i>=0;i--){const r=n.shots[i];if(r.owner==="player"){for(const s of n.enemies)if(!(s.kind==="gorko"&&s.fsm==="airborne")&&Pt(r.x,r.y,s.x,s.y)<r.radius+wi(s)){if(s.kind==="babosa_acorazada"){const l=Math.hypot(r.vx,r.vy)||1;if(r.vx/l*s.facingX+r.vy/l*s.facingY<si.backDot){n.puddles.push({x:r.x,y:r.y,ttl:Ro/3}),n.shots.splice(i,1),je(n,{type:"shot_blocked",enemyId:s.id,tick:n.tick});break}}let a=r.damage;nl(n,e,"critico")&&(a*=2),s.kind==="gorko"&&s.fsm==="belly"&&(a=Math.round(a*Fe.bellyDamageMult)),s.hp-=a;const o=Math.hypot(r.vx,r.vy)||1;s.kx+=r.vx/o*r.knockback,s.ky+=r.vy/o*r.knockback,n.puddles.push({x:r.x,y:r.y,ttl:Ro/2}),r.tags.includes("divide")&&!r.fragment&&V0(n,r,e),n.shots.splice(i,1),je(n,{type:"enemy_hit",enemyId:s.id,damage:a,hpLeft:Math.max(0,s.hp),tick:n.tick});break}}}for(let i=n.enemies.length-1;i>=0;i--){const r=n.enemies[i];r.hp<=0&&(n.enemies.splice(i,1),G0(n,r,e),je(n,{type:"enemy_killed",enemyId:r.id,kind:r.kind,tick:n.tick}))}if(t.iframes===0){for(const i of n.enemies)if(!(i.kind==="gorko"&&i.fsm==="airborne")&&Pt(t.x,t.y,i.x,i.y)<vt.radius+wi(i)){Lo(n,T0(i.kind)+i.dmgPlus,i.x,i.y,"contacto:"+i.kind);break}}if(t.iframes===0)for(let i=n.shots.length-1;i>=0;i--){const r=n.shots[i];if(r.owner==="enemy"&&Pt(r.x,r.y,t.x,t.y)<r.radius+vt.radius){n.shots.splice(i,1),Lo(n,r.damage,r.x,r.y,"escupitajo");break}}}function G0(n,e,t){const i=()=>(t.drops()-.5)*.5;if(e.kind!=="gorko"){if(e.kind==="sapo_doble"){const r=t.drops(),s=r<Ea.big?"crystal_big":r<Ea.big+Ea.med?"crystal_med":"crystal";n.drops.push({id:n.nextId++,kind:s,x:e.x+i(),y:e.y+i()});return}t.drops()<K_.heart&&n.drops.push({id:n.nextId++,kind:"heart",x:e.x+i(),y:e.y+i()})}}function V0(n,e,t){const r=nl(n,t,"dividir_en_3")?[-.9,0,Rr.angleRad]:[-.9,Rr.angleRad],s=Math.atan2(e.vy,e.vx),a=Math.hypot(e.vx,e.vy)||1;for(const o of r){const l=s+o;n.shots.push({id:n.nextId++,owner:"player",x:e.x,y:e.y,vx:Math.cos(l)*a,vy:Math.sin(l)*a,damage:Math.max(1,Math.round(e.damage*Rr.damageMult)),traveled:0,maxRange:Rr.range,radius:e.radius*Rr.radiusMult,knockback:e.knockback*.5,tags:[],fragment:!0})}je(n,{type:"shot_split",count:r.length,tick:n.tick})}function zd(n,e){for(const t of[n.player.usable,n.player.usable2])if(t&&t.activeTicks>0&&sn(t.itemId).usable.efecto===e)return!0;return!1}function Lo(n,e,t,i,r){const s=n.player;if(zd(n,"escudo"))return;const a=Math.min(s.armor,e);a>0&&(s.armor-=a,je(n,{type:"armor_absorbed",amount:a,armorLeft:s.armor,tick:n.tick}));const o=e-a;s.halfHearts=Math.max(0,s.halfHearts-o),s.iframes=F_;const l=Pt(s.x,s.y,t,i),c=l>.001?(s.x-t)/l:1,u=l>.001?(s.y-i)/l:0;s.kx+=c*Sc,s.ky+=u*Sc,o>0&&je(n,{type:"damage_taken",amount:o,halfHeartsLeft:s.halfHearts,source:r,tick:n.tick})}function W0(n){if(n.player.halfHearts<=0&&n.status==="playing"){n.status="dead",n.player.deathTick=n.tick,je(n,{type:"player_died",tick:n.tick});return}const e=n.floor.rooms[n.floor.current];if(n.enemies.length===0&&!e.cleared&&n.status==="playing"&&(e.cleared=!0,je(n,{type:"room_cleared",tick:n.tick}),e.id===n.floor.keyRoomId&&n.drops.push({id:n.nextId++,kind:"key",x:ct/2,y:at/2}),e.kind==="boss"&&!n.floor.trapdoorOpen&&(n.floor.trapdoorOpen=!0,je(n,{type:"trapdoor_opened",tick:n.tick}),n.drops.push({id:n.nextId++,kind:"crystal_med",x:ct/2-1,y:at/2+1.2}),n.drops.push({id:n.nextId++,kind:"heart",x:ct/2+1,y:at/2+1.2}),n.drops.push({id:n.nextId++,kind:"heart",x:ct/2,y:at/2+1.8}),n.floor.level===Qo))){n.drops.push({id:n.nextId++,kind:"crystal_big",x:ct/2,y:at/2-1.4});const t=Io(n),i=[..._r.values()].filter(a=>t.includes(a.id)&&(a.rareza==="legendaria"||a.slot==="nucleo")),r=xr(e.seed^45141),s=i[Math.floor(r()*i.length)];n.pickups.push({id:n.nextId++,itemId:s.id,x:ct/2-1.6,y:at/2-1.4}),n.chest={roomId:e.id,x:ct/2+1.6,y:at/2-1.4,opened:!1,reward:X0(n,e.seed)}}}function X0(n,e){const t=xr(e^49395),i=[];for(const a of _r.values())a.unlockable&&!n.config.unlockedItems.includes(a.id)&&i.push([a.id,Ac[a.rareza]]);if(n.config.usableSlots<2&&i.push(["slot_usable_2",Ac.legendaria]),i.length===0)return"cristales";const r=i.reduce((a,[,o])=>a+o,0);let s=t()*r;for(const[a,o]of i)if(s-=o,s<=0)return a;return i[i.length-1][0]}function je(n,e){n.events.push(e)}function Ct(n,e,t){return n<e?e:n>t?t:n}function Pt(n,e,t,i){return Math.hypot(t-n,i-e)}function Y0(n){const e=s=>Math.round(s*1e6)/1e6,t={t:n.tick,st:n.status,p:[e(n.player.x),e(n.player.y),n.player.halfHearts,n.player.iframes],it:n.player.items.join(","),ar:n.player.armor,us:n.player.usable?[n.player.usable.itemId,n.player.usable.cooldown,n.player.usable.activeTicks]:null,us2:n.player.usable2?[n.player.usable2.itemId,n.player.usable2.cooldown,n.player.usable2.activeTicks]:null,cf:[n.config.usableSlots,n.config.unlockedItems.join(",")],da:[n.player.dashTicks,n.player.dashCooldown],pk:n.pickups.map(s=>[s.id,s.itemId]),fl:[n.floor.level,n.floor.current,n.floor.trapdoorOpen?1:0,n.floor.rooms.map(s=>(s.cleared?1:0)+(s.visited?2:0)+(s.locked?4:0)).join("")],ec:[n.player.keys,n.player.crystals,n.drops.map(s=>`${s.kind}${e(s.x)}`).join(",")],ch:n.chest?[n.chest.roomId,n.chest.opened?1:0,n.chest.reward]:null,e:n.enemies.map(s=>[s.id,e(s.x),e(s.y),s.hp,s.fsm,s.timer]),sh:n.shots.map(s=>[s.id,s.owner,e(s.x),e(s.y),e(s.traveled)]),pu:n.puddles.length},i=JSON.stringify(t);let r=2166136261;for(let s=0;s<i.length;s++)r^=i.charCodeAt(s),r=Math.imul(r,16777619);return(r>>>0).toString(16).padStart(8,"0")}function q0(n,e){const t={version:e,seed:()=>n.sim.state.seed,state:()=>structuredClone(n.sim.state),hash:()=>n.sim.hash(),press:(i,r)=>n.press(i,r/1e3*Ai),aimAt:(i,r)=>n.aimAt(i,r),clearAim:()=>n.clearAim(),tick:i=>n.tick(i),pause:i=>{n.paused=i},isPaused:()=>n.paused,reset:i=>n.reset(i),telemetry:()=>structuredClone(n.telemetry),clearTelemetry:()=>{n.telemetry.length=0},goto:i=>el(n.sim.state,i),heal:()=>{const i=n.sim.state.player;i.halfHearts=i.maxHalfHearts},grant:i=>{const r=n.sim.state;r.player.items.push(i),r.stats=zs(r.player.items),r.player.maxHalfHearts=r.stats.maxHalfHearts},clear:()=>{n.sim.state.enemies.length=0}};return window.__game=t,t}const Ta=1e3/Ai,$0=5;function K0(n,e){let t=e,i=wc(n,t),r=0,s=0;const a={up:0,down:0,left:0,right:0,fire:0,dash:0,use:0,use2:0,interact:0};let o=null;const l={sim:i,live:kd(),paused:!1,telemetry:[],frame(f){if(l.paused)return[];if(s>0)return s--,[];r+=Math.min(f,Ta*$0);const d=[];for(;r>=Ta;)r-=Ta,d.push(...u());return d},tick(f){const d=[];for(let h=0;h<f;h++)d.push(...u());return d},press(f,d){a[f]=Math.max(a[f],Math.max(0,Math.round(d)))},aimAt(f,d){o={x:f,y:d}},clearAim(){o=null},freeze(f){s=Math.max(s,f)},reset(f,d){d&&(t=d),i=wc(f??i.state.seed,t),l.sim=i,r=0,s=0,l.telemetry.length=0,Object.keys(a).forEach(h=>a[h]=0),o=null}};function c(){const f={...l.live};return Object.keys(a).forEach(d=>{a[d]>0&&(f[d]=!0,a[d]--)}),o&&(f.aimX=o.x,f.aimY=o.y),f}function u(){i.step(c());const f=i.state.events;return f.length&&l.telemetry.push(...f),f}return l}const Do=1,Ic="kai_save";function Lc(){return{version:Do,cristales:0,desbloqueos:[],slimepedia:[]}}function Z0(n){const e=typeof localStorage<"u"?localStorage:(()=>{const r=new Map;return{getItem:s=>r.get(s)??null,setItem:(s,a)=>void r.set(s,a)}})();let t=Lc();try{const r=e.getItem(Ic);if(r){const s=JSON.parse(r);s&&s.version===Do&&typeof s.cristales=="number"&&Array.isArray(s.desbloqueos)&&(t={version:Do,cristales:Math.max(0,Math.floor(s.cristales)),desbloqueos:s.desbloqueos.filter(a=>typeof a=="string"),slimepedia:Array.isArray(s.slimepedia)?s.slimepedia.filter(a=>typeof a=="string"):[]})}}catch{t=Lc()}const i={data:t,persist(){e.setItem(Ic,JSON.stringify(i.data))},harvest(r){r>0&&(i.data.cristales+=r,i.persist())},unlock(r){return i.has(r)?!1:(i.data.desbloqueos.push(r),i.persist(),!0)},has(r){return i.data.desbloqueos.includes(r)}};return i}function Hd(n){return{usableSlots:n.has("slot_usable_2")?2:1,unlockedItems:n.data.desbloqueos.filter(e=>e.startsWith("item_")).map(e=>e.slice(5))}}function J0(n,e,t,i){const r=document.createElement("div");r.className="screens",n.appendChild(r);let s=!1,a=!1,o=null,l=null;function c(){s=!0,e.paused=!0,r.innerHTML=`
      <div class="screen screen-title">
        <div class="title-name">KAI</div>
        <div class="title-sub">un slime contra El Pozo</div>
        <div class="title-row">
          <input class="title-seed" type="text" inputmode="numeric" placeholder="seed (opcional)" />
          <button class="title-play">Entrar al Pozo</button>
        </div>
        <div class="title-hint">WASD mover · ratón apuntar · clic disparar · espacio usable · shift dash</div>
        <div class="title-version">sim v${i} · desbloqueos ${t.data.desbloqueos.length}</div>
      </div>`,r.querySelector(".title-play").addEventListener("click",()=>{const _=r.querySelector(".title-seed").value.trim(),S=_?Number(_)>>>0:Math.floor(Math.random()*4294967295)>>>0;u(S)})}function u(_){e.reset(_,Hd(t)),o=null,f(),e.paused=!1}function f(){s=!1,a=!1,r.innerHTML=""}function d(_){return _==="slot_usable_2"?"2º slot de usable (tecla Q)":_==="cristales"?null:sn(_).nombre}function h(_){a=!0;const S=_.status==="victory";let m="";if(_.chest?.opened){const p=d(_.chest.reward);m=p?`<div class="refuge-chest">📦 Cofre del Nido: <b>${p}</b><div class="refuge-desc">desbloqueado PARA SIEMPRE — ya está en el pool</div></div>`:'<div class="refuge-chest">📦 Cofre del Nido: cristales<div class="refuge-desc">ya lo has desbloqueado todo</div></div>'}else S&&(m='<div class="refuge-chest refuge-chest-missed">El cofre del Nido se quedó sin abrir…</div>');r.innerHTML=`
      <div class="screen screen-refuge">
        <div class="refuge-title">${S?"El refugio celebra tu victoria":"El refugio te recoge"}</div>
        ${m}
        <div class="refuge-actions">
          <button class="refuge-again">Nueva run</button>
          <button class="refuge-same">Repetir seed ${_.seed}</button>
        </div>
      </div>`,r.querySelector(".refuge-again").addEventListener("click",()=>{u(Math.floor(Math.random()*4294967295)>>>0)}),r.querySelector(".refuge-same").addEventListener("click",()=>{u(_.seed)})}return c(),{update(_){s&&(_.tick>0||!e.paused)&&f();const S=_.status==="dead"||_.status==="victory";if(S&&o!==e.sim){if(o=e.sim,_.chest?.opened&&_.chest.reward!=="cristales"){const m=_.chest.reward;t.unlock(m==="slot_usable_2"?m:`item_${m}`)}l!==null&&clearTimeout(l),l=window.setTimeout(()=>{e.sim===o&&!a&&h(_)},2400)}!S&&a&&f()}}}const Ir=12,Dc=42,Uc=6;function Q0(){const n=new URLSearchParams(location.search).get("touch");return n==="1"?!0:n==="0"?!1:window.matchMedia("(pointer: coarse) and (hover: none)").matches}function j0(n,e){const t=e.live,i=document.createElement("div");if(i.className="touch",i.innerHTML=`
    <div class="touch-zone touch-zone-left"></div>
    <div class="touch-zone touch-zone-right"></div>
    <div class="touch-stick touch-stick-move"><div class="touch-knob"></div></div>
    <div class="touch-stick touch-stick-aim"><div class="touch-knob"></div></div>
    <div class="touch-buttons">
      <button class="touch-btn touch-btn-dash">⚡<small>dash</small></button>
      <button class="touch-btn touch-btn-use">◇<small>objeto</small></button>
      <button class="touch-btn touch-btn-use2" hidden>◆<small>obj. 2</small></button>
      <button class="touch-btn touch-btn-buy" hidden>€<small>comprar</small></button>
    </div>`,n.appendChild(i),!localStorage.getItem("kai_touch_help_v1")){const v=document.createElement("div");v.className="touch-help",v.innerHTML=`
      <div class="touch-help-card">
        <div class="touch-help-title">Controles</div>
        <div>🕹️ <b>Pulgar izquierdo</b> — mover a Kai</div>
        <div>🎯 <b>Pulgar derecho</b> — apuntar (dispara solo mientras apuntas)</div>
        <div>⚡ <b>dash</b> — esquiva con invulnerabilidad</div>
        <div>◇ <b>objeto</b> — usa tu objeto activo</div>
        <div>€ <b>comprar</b> — aparece al acercarte a la tienda</div>
        <div class="touch-help-go">toca para jugar</div>
      </div>`,i.appendChild(v),v.addEventListener("pointerdown",E=>{E.stopPropagation(),localStorage.setItem("kai_touch_help_v1","1"),v.remove()})}const r=i.querySelector(".touch-zone-left"),s=i.querySelector(".touch-zone-right"),a=i.querySelector(".touch-stick-move"),o=i.querySelector(".touch-stick-aim"),l=a.querySelector(".touch-knob"),c=o.querySelector(".touch-knob"),u=i.querySelector(".touch-btn-use2"),f=i.querySelector(".touch-btn-buy");let d=null,h=null,_=null;function S(v,E,b){const C=Math.hypot(E,b),x=C>Dc?Dc/C:1;v.style.transform=`translate(${E*x}px, ${b*x}px)`}function m(v,E){t.left=v<-Ir,t.right=v>Ir,t.up=E<-Ir,t.down=E>Ir}function p(v,E){const b=Math.hypot(v,E);b>Ir?(d={x:v/b,y:E/b},t.fire=!0):t.fire=!1}function A(v,E,b,C,x,y,I){v.addEventListener("pointerdown",F=>{if(C())return;const $=E.getBoundingClientRect(),ie={pointerId:F.pointerId,baseX:$.left+$.width/2,baseY:$.top+$.height/2};x(ie);try{v.setPointerCapture(F.pointerId)}catch{}E.classList.add("active");const H=F.clientX-ie.baseX,j=F.clientY-ie.baseY;S(b,H,j),y(H,j),F.preventDefault()}),v.addEventListener("pointermove",F=>{const $=C();if(!$||F.pointerId!==$.pointerId)return;const ie=F.clientX-$.baseX,H=F.clientY-$.baseY;S(b,ie,H),y(ie,H),F.preventDefault()});const P=F=>{const $=C();!$||F.pointerId!==$.pointerId||(x(null),E.classList.remove("active"),S(b,0,0),I())};v.addEventListener("pointerup",P),v.addEventListener("pointercancel",P)}A(r,a,l,()=>h,v=>h=v,m,()=>{t.left=t.right=t.up=t.down=!1}),A(s,o,c,()=>_,v=>_=v,p,()=>{d=null,t.fire=!1});const w=(v,E)=>{const b=i.querySelector(v);b.addEventListener("pointerdown",C=>{E(!0),C.preventDefault(),C.stopPropagation()});for(const C of["pointerup","pointercancel","pointerleave"])b.addEventListener(C,()=>E(!1))};return w(".touch-btn-dash",v=>t.dash=v),w(".touch-btn-use",v=>t.use=v),w(".touch-btn-use2",v=>t.use2=v),w(".touch-btn-buy",v=>t.interact=v),{update(v){d&&(t.aimX=v.player.x+d.x*Uc,t.aimY=v.player.y+d.y*Uc),u.hidden=!v.player.usable2;const E=v.pickups.some(b=>b.price&&Math.hypot(b.x-v.player.x,b.y-v.player.y)<1.6);f.hidden=!E}}}function ex(n,e){let t=0,i=1,r=0,s=0;const a=340,o={x:0,z:0};function l(c,u){(u>=r||t<=0)&&(t=c,i=c,r=u)}return{onEvents(c){for(const u of c)switch(u.type){case"damage_taken":l(140,.14),n.freeze(3);break;case"enemy_killed":l(90,.08),n.freeze(2);break;case"enemy_hit":l(40,.03);break;case"player_died":l(260,.2);break;case"room_changed":{const f={n:[0,1],s:[0,-1],e:[-1,0],w:[1,0]}[u.dir];o.x=f[0],o.z=f[1],s=a;break}case"level_started":n.freeze(6);break}},update(c,u){if(u.position.copy(e.cameraHome),s>0){s=Math.max(0,s-c);const f=s/a,d=f*f*(3-2*f);u.position.x+=o.x*6*d,u.position.z+=o.z*6*d}if(t>0){t-=c;const f=Math.max(0,t/i),d=r*f;u.position.x+=(Math.random()*2-1)*d,u.position.y+=(Math.random()*2-1)*d*.6,u.position.z+=(Math.random()*2-1)*d*.4,t<=0&&(r=0)}}}}const Be={outline:1916526,body:4033504,bodyHurt:7251933,shine:9426165,core:14677503,torch:15245628,torchBright:16177034,stone:4861726,stoneDark:2759696,floor:2365968,floorAlt:2826260,dungeonBg:1708555,toad:5934138,toadBelly:10339434,toadOutline:3099166,spit:8829247,spitDark:4021278,danger:14830410,eyeWhite:16055295,eyeDark:1320511,white:16777215};function ot(n){return"#"+n.toString(16).padStart(6,"0")}function dn(n,e){const t={img:new Image,cell:e,cols:0,rows:0,ready:!1};return t.img.onload=()=>{t.cols=Math.max(1,Math.floor(t.img.width/e)),t.rows=Math.max(1,Math.floor(t.img.height/e)),t.ready=!0},t.img.src=n,t}function tx(){return{frog:dn("assets/enemies/frogs/frog_spritesheets/frog_green_spritesheet.png",32),frogPurple:dn("assets/enemies/frogs/frog_spritesheets/frog_purple_spritesheet.png",32),bat:dn("assets/enemies/cave-bat/Bat/Spritesheets/Blue_Flying.png",32),trader:dn("assets/characters/craftpix-slime/Slime1/Idle/Slime1_Idle_body.png",64),babosaWalk:dn("assets/characters/craftpix-slime/Slime3/Walk/Slime3_Walk_body.png",64),babosaIdle:dn("assets/characters/craftpix-slime/Slime3/Idle/Slime3_Idle_body.png",64),babosaHurt:dn("assets/characters/craftpix-slime/Slime3/Hurt/Slime3_Hurt_body.png",64),kaiIdle:dn("assets/characters/craftpix-slime/Slime2/Idle/Slime2_Idle_body.png",64),kaiRun:dn("assets/characters/craftpix-slime/Slime2/Run/Slime2_Run_body.png",64),kaiAttack:dn("assets/characters/craftpix-slime/Slime2/Attack/Slime2_Attack_body.png",64),kaiHurt:dn("assets/characters/craftpix-slime/Slime2/Hurt/Slime2_Hurt_body.png",64)}}function ji(n,e,t,i,r,s,a,o=!1){n.imageSmoothingEnabled=!1;const l=e.cell;if(o){n.save(),n.translate(r,0),n.scale(-1,1),n.drawImage(e.img,t*l,i*l,l,l,-a/2,s-a/2,a,a),n.restore();return}n.drawImage(e.img,t*l,i*l,l,l,r-a/2,s-a/2,a,a)}function Xt(n,e){const t=document.createElement("canvas");t.width=n,t.height=e;const i=t.getContext("2d");return[t,i]}function Yt(n){const e=new Sf(n);return e.magFilter=At,e.minFilter=At,e.generateMipmaps=!1,e.colorSpace=qt,e}function Gd(n,e){let t=n*374761393+e*668265263>>>0;return t=Math.imul(t^t>>>13,1274126177)>>>0,(t^t>>>16)>>>0}function nx(n,e){const[i,r]=Xt(n*16,e*16);for(let s=0;s<e;s++)for(let a=0;a<n;a++){r.fillStyle=(a+s)%2===0?ot(Be.floor):ot(Be.floorAlt),r.fillRect(a*16,s*16,16,16);const o=Gd(a,s);r.fillStyle="rgba(0,0,0,0.18)",r.fillRect(a*16+o%16,s*16+(o>>5)%16,2,1),r.fillRect(a*16+(o>>10)%16,s*16+(o>>15)%16,1,2),r.strokeStyle="rgba(0,0,0,0.25)",r.lineWidth=1,r.strokeRect(a*16+.5,s*16+.5,15,15)}return Yt(i)}function Nc(n,e){const[i,r]=Xt(Math.max(1,n)*16,Math.max(1,e)*16);r.fillStyle=ot(Be.stone),r.fillRect(0,0,i.width,i.height);const s=16/2;for(let a=0;a*s<i.height;a++){const o=a%2===0?0:8;for(let l=-1;l*16<i.width;l++){const c=l*16+o,f=(Gd(l,a)%21-10)/100;r.fillStyle=f>=0?`rgba(255,235,200,${f*.5})`:`rgba(0,0,0,${-f})`,r.fillRect(c+1,a*s+1,14,s-2),r.strokeStyle=ot(Be.stoneDark),r.lineWidth=1,r.strokeRect(c+.5,a*s+.5,15,s-1)}}return Yt(i)}const ix={down:0,up:1,left:2,right:3},Aa={idle:6,run:8,hurt:5},rx=13,sx=4,ax=10,Fc=3,ox=.24,lx=[2,1,0,7,6,5,4,3],Oc={sapo_escupidor:{canvas:96,world:3,y:.42,shadow:[.9,.58]},renacuajo:{canvas:64,world:1.5,y:.28,shadow:[.45,.3]},mosca_gorda:{canvas:64,world:1.6,y:.85,shadow:[.42,.27]},babosa_acorazada:{canvas:96,world:2.5,y:.42,shadow:[1.05,.66]},sapo_doble:{canvas:128,world:4.2,y:.56,shadow:[1.3,.82]},gorko:{canvas:192,world:7,y:.95,shadow:[2.3,1.45]}};function cx(n,e){return Math.abs(n)>=Math.abs(e)?n>0?3:2:e>0?0:1}const gs={col:0,frames:3},er={col:3,frames:4},_s={col:7,frames:4},wa={col:11,frames:5},mi={frames:5,ticksPerFrame:4,rowOffset:8},Ra={frames:2,ticksPerFrame:5},kc=18,Bc=.16,dx=.22,xs=4;function vs(n,e){const t=Math.round(Math.atan2(e,n)/(Math.PI/4))+8&7;return lx[t]}const ux="assets/items/ssugmi-rpg-16x16/Free RPG asset Pack/separate files/",fx={punos_de_piedra:"glove_01.png",brazos_de_arquero:"bow_01.png",piernas_de_renacuajo:"boots_01.png",botas_de_salto:"boots_02.png",casco_de_lata:"headgear_01.png",ojo_de_cristal:"glasses.png",nucleo_denso:"stone.png",corazon_de_la_gema:"hp_potion.png",chorro_dividido:"arrow.png",burbujas_traviesas:"mana_potion.png",libro_multidisparo:"book.png",trebol_de_alcantarilla:"clover_leaf.png",manos_de_ladron:"glove_02.png",herradura_del_ahogado:"necklace_01.png",punta_de_lanza:"spear_01.png",pulmones_de_buzo:"feather_a.png",caparazon_de_tortuga:"wooden_shield.png",anillo_de_marea:"ring_01.png",chorro_a_presion:"wand_01.png",medalla_oxidada:"necklace_02.png",aletas_de_carpa:"tail.png",silbato_del_pantano:"compass.png",corona_del_rey_sapo:"circlet.png",perla_negra:"glowing_dust.png",escudo_de_caracol:"shield_01.png",guantes_de_rana:"leather_glove.png"};function ws(n){return ux+(fx[n]??"pouch.png")}const zc=new Map;function Hc(n){const e=ws(n);let t=zc.get(e);return t||(t=new Df().load(e),t.magFilter=At,t.minFilter=At,t.generateMipmaps=!1,t.colorSpace=qt,zc.set(e,t)),t}const hx=24,px=64,mx=vt.radius*wo+4;function gx(n,e){const t=_x(),i=xx(),r=vx(),s=Mx(),a=yx(),o=Tx(),l=new Ut(new li(1,.62),new Ti({map:Sx(),transparent:!0,depthWrite:!1,opacity:.85}));l.rotation.x=-Math.PI/2,l.position.y=.022,l.renderOrder=2,l.visible=!1,n.add(l);function c(O){const U=O.enemies.find(N=>N.kind==="gorko"&&(N.fsm==="jump_aim"||N.fsm==="airborne"));if(l.visible=!!U,!U)return;const R=U.fsm==="jump_aim"?.6+1.6*(1-U.timer/Fe.jumpAimTicks):2.2+.5*(1-U.timer/Fe.airborneTicks)+.12*Math.sin(O.tick*.5);l.scale.set(R*1.6,R,1),l.position.x=U.targetX,l.position.z=U.targetY}const u=Ca(n,64),f=gi(n,t,1,.62),d=new Map,h={prevX:null,prevY:0,lastMoveTick:-99,dist:0,facing:"down",prevFireCooldown:0,prevHalfHearts:-1,attackStart:-1,hurtStart:-1},_=Array.from({length:hx},()=>{const O=new vi(new ni({map:r,depthWrite:!1,transparent:!0}));O.scale.set(.5,.5,1),O.renderOrder=3,O.visible=!1,n.add(O);const U=new vi(new ni({map:o,depthWrite:!1,transparent:!0,opacity:.5}));U.scale.set(.3,.3,1),U.renderOrder=3,U.visible=!1,n.add(U);const R=gi(n,t,.24,.15);return R.visible=!1,{sprite:O,trail:U,shadow:R}}),S=Array.from({length:px},(O,U)=>{const R=new Ut(new li(.55,.32),new Ti({map:i,transparent:!0,depthWrite:!1,opacity:0}));return R.rotation.x=-Math.PI/2,R.position.y=.008+U%8*.0015,R.renderOrder=1,R.visible=!1,n.add(R),R}),m=new Map,p=new Ci(.52,.3,.42),A=new tr({color:Be.stone,roughness:.9});function w(O){for(const U of O.pickups)if(!m.has(U.id)){const R=new Ut(p,A);R.position.set(U.x,.15,U.y),n.add(R);const N=new vi(new ni({map:Hc(U.itemId),depthWrite:!1,transparent:!0}));N.scale.set(.55,.55,1),N.renderOrder=3,n.add(N),m.set(U.id,{itemId:U.itemId,icon:N,base:R,shadow:gi(n,t,.5,.32)})}for(const[U,R]of m){const N=O.pickups.find(Y=>Y.id===U);if(!N){n.remove(R.icon),R.icon.material.dispose(),n.remove(R.base),n.remove(R.shadow),m.delete(U);continue}N.itemId!==R.itemId&&(R.itemId=N.itemId,R.icon.material.map=Hc(N.itemId)),R.icon.position.set(N.x,.72+.05*Math.sin(O.tick*.07),N.y),R.shadow.position.set(N.x,R.shadow.position.y,N.y)}}const v={heart:bx(),key:Ex(),crystal:Pa(4.5),crystal_med:Pa(5.5),crystal_big:Pa(6.5)},E=new Map;function b(O){for(const U of O.drops)if(!E.has(U.id)){const R=new vi(new ni({map:v[U.kind],depthWrite:!1,transparent:!0}));R.renderOrder=3,n.add(R),E.set(U.id,{sprite:R,shadow:gi(n,t,.28,.18)})}for(const[U,R]of E){const N=O.drops.find(se=>se.id===U);if(!N){n.remove(R.sprite),R.sprite.material.dispose(),n.remove(R.shadow),E.delete(U);continue}const Y=Math.abs(Math.sin(O.tick*.09+U)),G=N.kind==="crystal_big"?.64:N.kind==="crystal_med"?.52:.44;R.sprite.scale.set(G*(.35+.65*Y),G,1),R.sprite.position.set(N.x,.34+.05*Math.sin(O.tick*.1+U*2.1),N.y),R.shadow.position.set(N.x,R.shadow.position.y,N.y)}}const C=Gc(!1),x=Gc(!0),y=new vi(new ni({map:C,depthWrite:!1,transparent:!0}));y.renderOrder=3,y.visible=!1,n.add(y);const I=gi(n,t,.6,.36);I.visible=!1;function P(O){const U=O.chest,R=!!U&&U.roomId===O.floor.current;if(y.visible=R,I.visible=R,!U||!R)return;y.material.map=U.opened?x:C;const N=U.opened?0:.04*Math.sin(O.tick*.08);y.scale.set(.95,.85,1),y.position.set(U.x,.42+N,U.y),I.position.set(U.x,I.position.y,U.y)}const F=Ca(n,96);F.sprite.visible=!1;const $=gi(n,t,1.2,.75);$.visible=!1;function ie(O){const U=O.floor.rooms[O.floor.current].kind==="shop";if(F.sprite.visible=U,$.visible=U,!U)return;const[R,N]=j_;F.sprite.scale.set(3.4,3.4,1),F.sprite.position.set(R,.62,N),$.position.set(R,$.position.y,N);const{ctx:Y,size:G}=F,se=G/2;Y.clearRect(0,0,G,G);const pe=e.trader;if(pe&&pe.ready){const Pe=Math.floor(O.tick/16)%6;ji(Y,pe,Pe,0,se,se+4,G*.8)}else Y.fillStyle=ot(Be.toad),lt(Y,se,se,G*.3,!0);const Te=3*Math.sin(O.tick*.08),Re=se-G*.32+Te;Y.fillStyle=ot(Be.core),Y.beginPath(),Y.moveTo(se,Re-6),Y.lineTo(se+4.5,Re),Y.lineTo(se,Re+6),Y.lineTo(se-4.5,Re),Y.closePath(),Y.fill(),Y.strokeStyle=ot(Be.shine),Y.lineWidth=1.4,Y.stroke(),F.tex.needsUpdate=!0}function H(O){j(O),de(O),ke(O),Ge(O),w(O),b(O),P(O),ie(O),c(O)}function j(O){const U=O.player,R=O.status==="dead",N=U.iframes>0&&Math.floor(U.iframes/O_)%2===1;u.sprite.material.opacity=N?.35:1;const G=U.halfHearts<=2&&!R?Math.sin(O.tick*.9)*.025:0;u.sprite.position.set(U.x+G,.52,U.y),f.position.set(U.x,f.position.y,U.y),X(O);const se=!!(e.kaiIdle&&e.kaiIdle.ready);if(R)u.sprite.scale.set(2,2,1),Z(u,O);else if(se)u.sprite.scale.set(2.2,2.2,1),te(u,O);else{const pe=1+.04*Math.sin(O.tick*.12);u.sprite.scale.set(2*pe,2*(2-pe)*.95,1),oe(u,O)}}function X(O){const U=O.player,R=h;if(R.attackStart>O.tick&&(R.attackStart=-1),R.hurtStart>O.tick&&(R.hurtStart=-1),R.prevX!==null){const N=U.x-R.prevX,Y=U.y-R.prevY,G=Math.hypot(N,Y);G>1?R.dist=0:G>5e-4&&(R.dist+=G,R.lastMoveTick=O.tick,R.facing=Math.abs(N)>=Math.abs(Y)?N>0?"right":"left":Y>0?"down":"up")}R.prevX=U.x,R.prevY=U.y,U.fireCooldown>R.prevFireCooldown&&(R.attackStart=O.tick,R.facing=Math.abs(U.aimX)>=Math.abs(U.aimY)?U.aimX>0?"right":"left":U.aimY>0?"down":"up"),R.prevFireCooldown=U.fireCooldown,R.prevHalfHearts>=0&&U.halfHearts<R.prevHalfHearts&&(R.hurtStart=O.tick),R.prevHalfHearts=U.halfHearts}function te(O,U){const{ctx:R,size:N}=O,Y=N/2;R.clearRect(0,0,N,N);const G=h,se=ix[G.facing],pe=G.hurtStart>=0?U.tick-G.hurtStart:1/0,Te=G.attackStart>=0?U.tick-G.attackStart:1/0;let Re=e.kaiIdle,Pe;e.kaiHurt?.ready&&pe<Aa.hurt*Fc?(Re=e.kaiHurt,Pe=Math.floor(pe/Fc)):e.kaiAttack?.ready&&Te<ax?(Re=e.kaiAttack,Pe=sx):e.kaiRun?.ready&&U.tick-G.lastMoveTick<=xs?(Re=e.kaiRun,Pe=Math.floor(G.dist/ox)%Aa.run):Pe=Math.floor(U.tick/rx)%Aa.idle,ji(R,Re,Pe,se,Y,Y+N*.06,N),O.tex.needsUpdate=!0}function oe(O,U){const{ctx:R,size:N}=O,Y=U.player,G=N/2,se=mx,pe=Y.halfHearts<=2;R.clearRect(0,0,N,N),R.fillStyle=ot(pe?Be.bodyHurt:Be.body),R.strokeStyle=ot(Be.outline),R.lineWidth=2,un(R,G,G,se,se*1.05,!0,!0),R.fillStyle=nn(Be.shine,.85),un(R,G-se*.55,G-se*.55,se*.4,se*.225,!0,!1);const Te=pe?.6+.4*Math.abs(Math.sin(U.tick*.25)):1;R.fillStyle=nn(pe?Be.danger:Be.core,Te),lt(R,G,G+se*.35,4.5,!0),R.strokeStyle=nn(Be.shine,.9),R.lineWidth=1,lt(R,G,G+se*.35,4.5,!1,!0);const Re=Y.aimX*1.6,Pe=Y.aimY*1.6;R.fillStyle=ot(Be.eyeWhite),un(R,G-6,G-4,3.5,4.5,!0,!1),un(R,G+6,G-4,3.5,4.5,!0,!1),R.fillStyle=ot(Be.eyeDark),lt(R,G-6+Re,G-4+Pe,2.2,!0),lt(R,G+6+Re,G-4+Pe,2.2,!0),R.fillStyle=ot(Be.white),lt(R,G-5+Re,G-5+Pe,.9,!0),lt(R,G+7+Re,G-5+Pe,.9,!0),O.tex.needsUpdate=!0}function Z(O,U){const{ctx:R,size:N}=O,Y=N/2,G=U.tick-U.player.deathTick;R.clearRect(0,0,N,N);const se=Math.min(1,G/40);R.fillStyle=nn(Be.outline,.4),un(R,Y,Y+6,15+10*se,6+3*se,!0,!1),R.fillStyle=nn(Be.body,.55),un(R,Y,Y+6,13+9*se,5+2.5*se,!0,!1);const pe=Math.floor(G/14)%2===0?1:.25;R.fillStyle=nn(Be.core,pe),lt(R,Y,Y+3,4.5,!0),R.strokeStyle=nn(Be.shine,pe),R.lineWidth=1,lt(R,Y,Y+3,4.5,!1,!0),O.tex.needsUpdate=!0}function de(O){for(const U of O.enemies)if(!d.has(U.id)){const R=Oc[U.kind];d.set(U.id,{kind:U.kind,view:Ca(n,R.canvas),shadow:gi(n,t,R.shadow[0],R.shadow[1]),prevX:U.x,prevY:U.y,lastMoveTick:-99,dist:0,prevHp:U.hp,hurtStart:-1,spitStart:-1,prevFsm:U.fsm,dirRow:0})}for(const[U,R]of d){const N=O.enemies.find(L=>L.id===U);if(!N){n.remove(R.view.sprite),R.view.sprite.material.map?.dispose(),R.view.sprite.material.dispose(),n.remove(R.shadow),d.delete(U);continue}R.hurtStart>O.tick&&(R.hurtStart=-1),R.spitStart>O.tick&&(R.spitStart=-1),N.fsm==="shoot"&&R.prevFsm!=="shoot"&&(R.spitStart=O.tick),R.prevFsm=N.fsm;const Y=N.x-R.prevX,G=N.y-R.prevY,se=Math.hypot(Y,G);se>1?R.dist=0:se>5e-4&&(R.dist+=se,R.lastMoveTick=O.tick,R.dirRow=vs(Y,G)),R.prevX=N.x,R.prevY=N.y,N.hp<R.prevHp&&(R.hurtStart=O.tick),R.prevHp=N.hp,(N.fsm==="aim"||N.fsm==="shoot")&&(R.dirRow=vs(N.targetX-N.x,N.targetY-N.y)),N.kind==="renacuajo"&&(N.fsm==="windup"||N.fsm==="hop")&&(R.dirRow=vs(N.facingX,N.facingY)),N.kind==="gorko"&&(N.fsm==="jump_aim"||N.fsm==="volley")&&(R.dirRow=vs(N.targetX-N.x,N.targetY-N.y));const pe=Oc[N.kind];let Te=1+.05*Math.sin(O.tick*.15);const Re=N.kind!=="mosca_gorda"&&N.kind!=="babosa_acorazada";if(Re&&(N.fsm==="aim"||N.fsm==="swallow_aim")){const L=N.kind==="sapo_doble"?ht.telegraphTicks:Ht.telegraphTicks;Te=1+.25*(1-N.timer/L)}Re||(Te=1);const Pe=pe.world*N.sizeMult;R.view.sprite.scale.set(Pe*Te,Pe,1),R.shadow.scale.setScalar(N.sizeMult);const Ve=(N.kind==="mosca_gorda"?pe.y+.08*Math.sin(O.tick*.13+N.id*1.7):pe.y)*N.sizeMult;R.view.sprite.position.set(N.x,Ve,N.y),R.shadow.position.set(N.x,R.shadow.position.y,N.y),he(R,N,O)}}function he(O,U,R){const{ctx:N,size:Y}=O.view;switch(N.clearRect(0,0,Y,Y),Ke(O,U),U.kind){case"sapo_escupidor":st(O,U,R,e.frog,Ht.telegraphTicks,Ht.aggroRange);break;case"renacuajo":st(O,U,R,e.frog,Gt.windupTicks,Gt.aggroRange);break;case"sapo_doble":st(O,U,R,e.frogPurple,ht.telegraphTicks,ht.aggroRange);break;case"mosca_gorda":Oe(O,U,R);break;case"babosa_acorazada":le(O,U,R);break;case"gorko":ee(O,U,R);break}if(U.variant&&(N.globalCompositeOperation="source-atop",N.fillStyle=U.variant==="gigante"?"rgba(224, 70, 40, 0.25)":"rgba(90, 205, 255, 0.25)",N.fillRect(0,0,Y,Y),N.globalCompositeOperation="source-over"),U.hp<U.maxHp){const G=Y/2,se=Y*.42,pe=Y*.16;N.fillStyle="rgba(0,0,0,0.5)",N.fillRect(G-se/2,pe,se,3),N.fillStyle=ot(Be.danger),N.fillRect(G-se/2,pe,se*U.hp/U.maxHp,3)}O.view.tex.needsUpdate=!0}function Ke(O,U){const N={aim:U.kind==="gorko"?Fe.tongueAimTicks:U.kind==="sapo_doble"?ht.telegraphTicks:Ht.telegraphTicks,swallow_aim:ht.swallowTelegraphTicks,windup:Gt.windupTicks,jump_aim:Fe.jumpAimTicks,summon:Fe.summonTicks,volley:Fe.volleyAimTicks}[U.fsm];if(!N)return;const{ctx:Y,size:G}=O.view,se=G/2,pe=G*.3,Te=1-U.timer/N;Y.strokeStyle=nn(Be.white,.35+.4*Te),Y.lineWidth=2,lt(Y,se,se,pe+4*(1-Te),!1,!0),Y.fillStyle=nn(Be.white,.9),Y.fillRect(se-1.5,se-pe-12,3,7),lt(Y,se,se-pe-3,1.8,!0)}function st(O,U,R,N,Y,G){const{ctx:se,size:pe}=O.view,Te=pe/2;if(!N||!N.ready){ce(se,Te,pe*.28,U,R);return}const Re=O.hurtStart>=0?R.tick-O.hurtStart:1/0,Pe=O.spitStart>=0?R.tick-O.spitStart:1/0;let Ve,L=O.dirRow;if(Re<mi.frames*mi.ticksPerFrame)L=mi.rowOffset+O.dirRow,Ve=Math.floor(Re/mi.ticksPerFrame);else if(Pe<Ra.frames*Ra.ticksPerFrame)L=mi.rowOffset+O.dirRow,Ve=Math.floor(Pe/Ra.ticksPerFrame);else if(U.fsm==="aim"||U.fsm==="swallow_aim"||U.fsm==="windup"){const We=U.fsm==="aim"?Y:U.fsm==="windup"?Gt.windupTicks:ht.swallowTelegraphTicks,Je=Math.max(1,Math.floor(We/er.frames));Ve=er.col+Math.min(er.frames-1,Math.floor((We-U.timer)/Je))}else if(U.fsm==="hop"){const We=1-U.timer/Gt.hopTicks;Ve=_s.col+Math.min(_s.frames-1,Math.floor(We*_s.frames))}else if(R.tick-O.lastMoveTick<=xs){const We=Math.hypot(R.player.x-U.x,R.player.y-U.y)<=G,Je=We?_s:wa,T=We?dx:Bc;Ve=Je.col+Math.floor(O.dist/T)%Je.frames}else Ve=gs.col+Math.floor(R.tick/kc)%gs.frames;ji(se,N,Ve,L,Te,Te,pe*.58)}function Oe(O,U,R){const{ctx:N,size:Y}=O.view,G=Y/2,se=e.bat;if(!se||!se.ready){N.fillStyle=ot(Be.spitDark),lt(N,G,G,Y*.2,!0);return}const pe=Math.floor(R.tick/5)%6,Te=pe%4,Re=Math.floor(pe/4);ji(N,se,Te,Re,G,G,Y*.62,U.facingX>0);const Pe=O.hurtStart>=0?R.tick-O.hurtStart:1/0;Pe<8&&(N.fillStyle=`rgba(255,255,255,${.5*(1-Pe/8)})`,lt(N,G,G,Y*.2,!0))}function ee(O,U,R){const{ctx:N,size:Y}=O.view,G=Y/2;if(U.fsm==="airborne")return;const se=e.frogPurple;if(!se||!se.ready){N.fillStyle="#8a4a9a",lt(N,G,G,Y*.28,!0);return}if(U.fsm==="belly"){const Pe=.35+.2*Math.abs(Math.sin(R.tick*.2)),Ve=N.createRadialGradient(G,G,4,G,G,Y*.34);Ve.addColorStop(0,`rgba(246,215,138,${Pe})`),Ve.addColorStop(1,"rgba(246,215,138,0)"),N.fillStyle=Ve,lt(N,G,G,Y*.34,!0)}const pe=O.hurtStart>=0?R.tick-O.hurtStart:1/0;let Te,Re=O.dirRow;if(U.fsm==="belly")Re=mi.rowOffset+O.dirRow,Te=2;else if(pe<6)Re=mi.rowOffset+O.dirRow,Te=0;else if(U.fsm==="aim"||U.fsm==="jump_aim"||U.fsm==="summon"||U.fsm==="volley"){const Ve={aim:Fe.tongueAimTicks,jump_aim:Fe.jumpAimTicks,summon:Fe.summonTicks,volley:Fe.volleyAimTicks}[U.fsm],L=Math.max(1,Math.floor(Ve/er.frames));Te=er.col+Math.min(er.frames-1,Math.floor((Ve-U.timer)/L))}else R.tick-O.lastMoveTick<=xs?Te=wa.col+Math.floor(O.dist/Bc)%wa.frames:Te=gs.col+Math.floor(R.tick/kc)%gs.frames;ji(N,se,Te,Re,G,G,Y*.6)}function le(O,U,R){const{ctx:N,size:Y}=O.view,G=Y/2,se=cx(U.facingX,U.facingY),pe=O.hurtStart>=0?R.tick-O.hurtStart:1/0;let Te=e.babosaIdle,Re=0;e.babosaHurt?.ready&&pe<5*3?(Te=e.babosaHurt,Re=Math.floor(pe/3)):e.babosaWalk?.ready&&R.tick-O.lastMoveTick<=xs?(Te=e.babosaWalk,Re=Math.floor(O.dist/.14)%8):e.babosaIdle?.ready&&(Re=Math.floor(R.tick/16)%6),Te&&Te.ready?ji(N,Te,Re,se,G,G,Y*.72):(N.fillStyle="#7a5b3a",lt(N,G,G,Y*.26,!0));const Pe=Math.atan2(U.facingY,U.facingX);N.strokeStyle="rgba(205,218,228,0.9)",N.lineWidth=3.5,N.beginPath(),N.arc(G,G,Y*.28,Pe-1.15,Pe+1.15),N.stroke()}function ce(O,U,R,N,Y){O.fillStyle=ot(Be.toad),O.strokeStyle=ot(Be.toadOutline),O.lineWidth=2,un(O,U,U,R,R*.85,!0,!0),O.fillStyle=ot(Be.toadBelly),un(O,U,U+R*.35,R*.65,R*.4,!0,!1);const G=Y.player.x-N.x,se=Y.player.y-N.y,pe=Math.hypot(G,se)||1,Te=G/pe*1.2,Re=se/pe*1.2;O.fillStyle=ot(Be.eyeWhite),lt(O,U-R*.45,U-R*.7,4,!0),lt(O,U+R*.45,U-R*.7,4,!0),O.fillStyle=ot(Be.eyeDark),lt(O,U-R*.45+Te,U-R*.7+Re,2,!0),lt(O,U+R*.45+Te,U-R*.7+Re,2,!0)}function ke(O){for(let U=0;U<_.length;U++){const R=_[U],N=O.shots[U];if(!N){R.sprite.visible=R.trail.visible=R.shadow.visible=!1;continue}R.sprite.visible=R.shadow.visible=!0,R.sprite.material.map=N.owner==="player"?r:N.tags.includes("lengua")?a:s;const Y=.5*(N.radius/or);if(R.sprite.scale.set(Y,Y,1),R.sprite.position.set(N.x,.38,N.y),R.shadow.position.set(N.x,R.shadow.position.y,N.y),R.trail.visible=N.owner==="player",R.trail.visible){const G=Math.hypot(N.vx,N.vy)||1;R.trail.position.set(N.x-N.vx/G*.28,.38,N.y-N.vy/G*.28)}}}function Ge(O){for(let U=0;U<S.length;U++){const R=S[U],N=O.puddles[U];if(!N){R.visible=!1;continue}R.visible=!0,R.position.x=N.x,R.position.z=N.y,R.material.opacity=Math.min(.5,N.ttl/400)}}return{update:H}}function Ca(n,e){const[t,i]=Xt(e,e),r=Yt(t),s=new vi(new ni({map:r,depthWrite:!1,transparent:!0}));return s.scale.set(e/wo,e/wo,1),s.renderOrder=3,n.add(s),{sprite:s,ctx:i,tex:r,size:e}}function gi(n,e,t,i){const r=new Ut(new li(t,i),new Ti({map:e,transparent:!0,depthWrite:!1,opacity:.4}));return r.rotation.x=-Math.PI/2,r.position.y=.02,r.renderOrder=2,n.add(r),r}function _x(){const[n,e]=Xt(32,32),t=e.createRadialGradient(16,16,2,16,16,15);t.addColorStop(0,"rgba(0,0,0,0.85)"),t.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=t,e.fillRect(0,0,32,32);const i=Yt(n);return i.magFilter=Rt,i.minFilter=Rt,i}function xx(){const[n,e]=Xt(32,20);return e.fillStyle=ot(Be.outline),un(e,16,10,15,8,!0,!1),e.fillStyle=nn(Be.body,.6),un(e,16,10,9,4.5,!0,!1),e.fillStyle=nn(Be.shine,.35),un(e,13,8,3.5,1.6,!0,!1),Yt(n)}function vx(){const[n,e]=Xt(16,16);return e.fillStyle=ot(Be.body),lt(e,8,8,6,!0),e.fillStyle=ot(Be.core),lt(e,7,7,2.5,!0),Yt(n)}function Mx(){const[n,e]=Xt(16,16);return e.fillStyle=ot(Be.spit),lt(e,8,8,5,!0),e.fillStyle=ot(Be.spitDark),lt(e,9,9,1.8,!0),Yt(n)}function Sx(){const[n,e]=Xt(64,64),t=e.createRadialGradient(32,32,4,32,32,30);t.addColorStop(0,"rgba(0,0,0,0.9)"),t.addColorStop(.75,"rgba(0,0,0,0.75)"),t.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=t,e.fillRect(0,0,64,64),e.strokeStyle="rgba(226,75,74,0.9)",e.lineWidth=2.5,e.beginPath(),e.arc(32,32,27,0,Math.PI*2),e.stroke();const i=Yt(n);return i.magFilter=Rt,i.minFilter=Rt,i}function yx(){const[n,e]=Xt(16,16);return e.fillStyle="#e07a9a",lt(e,8,8,6.5,!0),e.fillStyle="#b04a6a",lt(e,9,9,2.4,!0),e.strokeStyle="#7a2a44",e.lineWidth=1.2,lt(e,8,8,6.5,!1,!0),Yt(n)}function Pa(n){const[e,t]=Xt(16,16),i=8,r=8;return t.fillStyle=ot(Be.core),t.beginPath(),t.moveTo(i,r-n),t.lineTo(i+n*.7,r),t.lineTo(i,r+n),t.lineTo(i-n*.7,r),t.closePath(),t.fill(),t.strokeStyle=ot(Be.shine),t.lineWidth=1.4,t.stroke(),t.fillStyle="rgba(255,255,255,0.85)",lt(t,i-1.5,r-2,1.1,!0),Yt(e)}function Gc(n){const[e,t]=Xt(24,24),i="#6a4423",r="#4a2f1e",s="#c9992e";if(n){t.fillStyle=r,t.fillRect(4,2,16,5);const a=t.createRadialGradient(12,12,1,12,12,8);a.addColorStop(0,"rgba(246, 215, 138, 0.95)"),a.addColorStop(1,"rgba(246, 215, 138, 0)"),t.fillStyle=a,t.fillRect(2,4,20,14),t.fillStyle=i,t.fillRect(4,12,16,9)}else t.fillStyle=i,t.fillRect(4,7,16,14),t.fillStyle=r,t.fillRect(4,7,16,5);return t.fillStyle=s,t.fillRect(11,n?12:7,2,n?9:14),t.fillRect(9,n?13:12,6,3),t.strokeStyle="#2a1a0e",t.lineWidth=1,t.strokeRect(4.5,n?12.5:7.5,15,n?8:13),Yt(e)}function bx(){const[n,e]=Xt(16,16);return e.fillStyle=ot(Be.danger),e.beginPath(),e.moveTo(8,14),e.bezierCurveTo(2,9,2,4,5.5,3.5),e.bezierCurveTo(7,3.2,8,4.5,8,5.5),e.bezierCurveTo(8,4.5,9,3.2,10.5,3.5),e.bezierCurveTo(14,4,14,9,8,14),e.fill(),e.fillStyle="rgba(255,255,255,0.6)",lt(e,5.5,5.5,1.2,!0),Yt(n)}function Ex(){const[n,e]=Xt(16,16);return e.strokeStyle="#f2c14e",e.lineWidth=2,lt(e,5.5,5.5,3,!1,!0),e.beginPath(),e.moveTo(7.5,7.5),e.lineTo(12.5,12.5),e.moveTo(10.5,10.5),e.lineTo(12,9),e.moveTo(12.5,12.5),e.lineTo(14,11),e.stroke(),Yt(n)}function Tx(){const[n,e]=Xt(16,16),t=e.createRadialGradient(8,8,1,8,8,7);return t.addColorStop(0,nn(Be.shine,.9)),t.addColorStop(1,"rgba(143,212,245,0)"),e.fillStyle=t,e.fillRect(0,0,16,16),Yt(n)}function un(n,e,t,i,r,s,a){n.beginPath(),n.ellipse(e,t,i,r,0,0,Math.PI*2),n.fill(),a&&n.stroke()}function lt(n,e,t,i,r,s=!1){n.beginPath(),n.arc(e,t,Math.max(.1,i),0,Math.PI*2),r&&n.fill(),s&&n.stroke()}function nn(n,e){const t=n>>16&255,i=n>>8&255,r=n&255;return`rgba(${t},${i},${r},${e})`}const Vc={dano:"daño",cadencia:"caudal",alcance:"alcance",velProyectil:"presión",velMovimiento:"velocidad",suerte:"suerte",corazones:"vida",proyectiles:"chorro(s)",armaduraPorSala:"armadura/sala"},Wc={empuje:"más empuje al impactar",rastro_charcos:"deja un rastro de charquitos",dash:"dash con i-frames (Shift)",divide:"los disparos se dividen al impactar",burbuja:"disparos flotantes que persiguen",ver_cofres:"ves el contenido de los cofres"},Ax={critico:"crítico ×2",dividir_en_3:"dividirse en 3",burbuja_gigante:"burbuja gigante"},wx={multidisparo:"+2 chorros",prisa:"sprint ×1.5",escudo:"bloquea TODO el daño"},Rx={comun:"común",rara:"rara",legendaria:"legendaria"};function Vd(n,e){const t=[];for(const i of n.tags)Wc[i]&&t.push(Wc[i]);for(const i of n.procs){const r=Math.round(Od(i,e)*100);t.push(`${Ax[i.efecto]??i.efecto}: ${r}% (con tu suerte)`)}if(n.usable){const i=Math.round(n.usable.duracionTicks/Ai),r=Math.round(n.usable.recargaTicks/Ai),s=wx[n.usable.efecto]??n.usable.efecto;t.push(`usable: ${s} durante ${i} s, recarga ${r} s`)}return t}function Cx(n,e){const t=[];for(const[i,r]of Object.entries(n.stats))t.push(`${r>0?"+":""}${r} ${Vc[i]??i}`);for(const[i,r]of Object.entries(n.mults))t.push(`×${r} ${Vc[i]??i}`);return t.push(...Vd(n,e)),t}function Fn(n){return Number.isInteger(n)?String(n):n.toFixed(1)}function Xc(n,e){const t=[],i=(r,s,a,o=1)=>{const l=(a-s)*o;Math.abs(l)>1e-9&&t.push(`${l>0?"+":"−"}${Fn(Math.abs(l))} ${r}`)};return i("daño",n.damage,e.damage),i("caudal",n.fireRate,e.fireRate),i("alcance",n.range,e.range),i("presión",n.shotSpeed,e.shotSpeed),i("velocidad",n.moveSpeed,e.moveSpeed),i("suerte",n.luck,e.luck),i("chorro(s)",n.projectiles,e.projectiles),i("vida",n.maxHalfHearts,e.maxHalfHearts,.5),i("armadura/sala",n.armorPerRoom,e.armorPerRoom),t}const Yc="M10 17 C4.5 12.5 1 9 1 5.6 A4.4 4.4 0 0 1 10 4 A4.4 4.4 0 0 1 19 5.6 C19 9 15.5 12.5 10 17 Z";function Px(n,e,t){const i=document.createElement("div");i.className="hud",i.innerHTML=`
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
  `,n.appendChild(i);const r=i.querySelector(".hud-hearts"),s=i.querySelector(".hud-toasts"),a=i.querySelector(".hud-items"),o=i.querySelector(".hud-stats"),l=i.querySelector(".hud-near"),c=i.querySelector(".hud-minimap"),u=i.querySelector(".hud-wallet"),f=i.querySelector(".hud-boss"),d=[...i.querySelectorAll(".hud-usable")],h=[...i.querySelectorAll(".hud-usable-icon")],_=[...i.querySelectorAll(".hud-usable-cd")],S=i.querySelector(".hud-center"),m=i.querySelector(".hud-msg"),p=i.querySelector(".hud-sub"),A=i.querySelector(".hud-seed");let w=-1,v=-1,E=-1,b="",C=-1;const x=["",""],y=[-1,-1];let I="",P="",F="",$="",ie="",H="",j=null,X=!0;window.addEventListener("keydown",Z=>{Z.code==="Tab"&&(Z.preventDefault(),X=!X,o.hidden=!X)});function te(Z,de){const he=document.createElement("div");for(he.className="hud-toast"+(de==="delta"?" hud-toast-delta":""),he.textContent=Z,s.appendChild(he);s.children.length>6;)s.firstChild?.remove();setTimeout(()=>he.remove(),2600)}function oe(Z,de="#e24b4a",he="#f6a5a4"){const Ke=`<path d="${Yc}" fill="rgba(0,0,0,0.45)" stroke="rgba(0,0,0,0.6)" stroke-width="1"/>`,st=Z===1?' style="clip-path: inset(0 50% 0 0)"':"",Oe=Z>0?`<path d="${Yc}" fill="${de}"${st}/><path d="M6 6.2 A2.4 2.4 0 0 1 9 4.8" stroke="${he}" stroke-width="1.4" fill="none"${st}/>`:"";return`<svg viewBox="0 0 20 18" class="hud-heart">${Ke}${Oe}</svg>`}return{update(Z){const de=Z.player.halfHearts,he=Z.player.maxHalfHearts,Ke=Z.player.armor;if(de!==w||he!==v||Ke!==E){w=de,v=he,E=Ke;const Y=Math.ceil(he/2);let G="";for(let se=0;se<Y;se++)G+=oe(Math.min(2,Math.max(0,de-se*2)));for(let se=0;se<Math.ceil(Ke/2);se++)G+=oe(Math.min(2,Math.max(0,Ke-se*2)),"#9fb8c8","#dfeef7");r.innerHTML=G}if([Z.player.usable,Z.player.usable2].forEach((Y,G)=>{const se=Y?.itemId??"";if(se!==x[G]&&(x[G]=se,d[G].hidden=!Y,Y&&(h[G].src=ws(Y.itemId))),Y){const pe=Math.ceil(Y.cooldown/Ai);pe!==y[G]&&(y[G]=pe,_[G].textContent=pe>0?String(pe):""),d[G].classList.toggle("ready",Y.cooldown===0),d[G].classList.toggle("active",Y.activeTicks>0)}}),Z.status!==b)if(b=Z.status,S.classList.toggle("has-msg",Z.status!=="playing"),Z.status==="victory"){const Y=t(),G=Y.filter(Ve=>Ve.type==="enemy_killed").length,se=Y.filter(Ve=>Ve.type==="damage_taken").length,pe=Y.filter(Ve=>Ve.type==="heart_collected").length,Te=Y.filter(Ve=>Ve.type==="item_bought").length,Re=Math.floor(Z.tick/3600),Pe=Math.floor(Z.tick%3600/60);m.textContent="¡El Pozo superado!",p.innerHTML=`<div class="hud-run-summary"><div>tiempo <b>${Re}:${String(Pe).padStart(2,"0")}</b></div><div>abatidos <b>${G}</b> · golpes recibidos <b>${se}</b></div><div>items <b>${Z.player.items.length}</b> · compras <b>${Te}</b> · corazones <b>${pe}</b></div><div>cristales <b class="hud-wallet-crystal">◆ ${Z.player.crystals}</b></div><div style="margin-top:6px">R para otra run</div></div>`}else Z.status==="dead"?(m.textContent="Kai se derritió…",p.textContent="R para reintentar"):(m.textContent="",p.textContent="");const st=Z.player.items.join(",");if(st!==I){const Y=Z.player.items.length>I.split(",").filter(Boolean).length;if(I=st,a.innerHTML=Z.player.items.map(G=>{const se=sn(G),pe=`<b>${se.nombre}</b>`+Cx(se,Z.stats.luck).map(Te=>`<div>· ${Te}</div>`).join("");return`<div class="hud-item"><img src="${ws(G)}" alt="${se.nombre}" /><div class="hud-item-tip">${pe}</div></div>`}).join(""),Y&&j){const G=sn(Z.player.items[Z.player.items.length-1]).nombre;te(G);for(const se of Xc(j,Z.stats))te(se,"delta")}}j={...Z.stats};const Oe=Z.stats,ee=[Oe.maxHalfHearts,Oe.damage,Oe.fireRate,Oe.range,Oe.shotSpeed,Oe.moveSpeed,Oe.luck,Oe.projectiles].join("|");if(ee!==P){P=ee;const Y=[["❤️","Vida",Fn(Oe.maxHalfHearts/2),"corazones máximos"],["⚔️","Daño",Fn(Oe.damage),"daño por proyectil"],["💧","Caudal",`${Fn(Oe.fireRate)}/s`,"disparos por segundo (cadencia)"],["🏹","Alcance",Fn(Oe.range),"tiles antes de caer en charco"],["💨","Presión",Fn(Oe.shotSpeed),"velocidad del proyectil"],["👢","Velocidad",Fn(Oe.moveSpeed),"velocidad de movimiento"],["🍀","Suerte",Fn(Oe.luck),"escala los procs y la calidad de drops"],["🔱","Chorros",Fn(Oe.projectiles),"proyectiles por disparo"]];o.innerHTML='<div class="hud-stats-title">stats · Tab</div>'+Y.map(([G,se,pe,Te])=>`<div class="hud-stats-row" title="${Te}"><span class="hud-stats-icon">${G}</span><span class="hud-stats-name">${se}</span><span class="hud-stats-value">${pe}</span></div>`).join("")}let le=null,ce=1.25;for(const Y of Z.pickups){const G=Math.hypot(Y.x-Z.player.x,Y.y-Z.player.y);G<ce&&(ce=G,le=Y)}const ke=le?`${le.id}:${le.itemId}:${le.price?Z.player.crystals>=le.price?"ok":"no":""}`:"";if(ke!==F&&(F=ke,l.hidden=!le,le)){const Y=sn(le.itemId),G=Vd(Y,Z.stats.luck).map(Te=>`<div>· ${Te}</div>`).join("");let se="";if(Y.categoria!=="usable"){const Te=zs([...Z.player.items,le.itemId]),Re=Xc(Z.stats,Te);se=Re.length?Re.map(Pe=>`<div class="hud-near-diff">${Pe}</div>`).join(""):""}const pe=le.price?`<div class="hud-near-price ${Z.player.crystals>=le.price?"ok":"no"}">◆ ${le.price} cristales — ${Z.player.crystals>=le.price?"pulsa E para comprar":"no te alcanza"}</div>`:"";l.innerHTML=`<img src="${ws(Y.id)}" alt="" /><div><b>${Y.nombre}</b> <span class="hud-near-rar">${Rx[Y.rareza]}</span>${pe}${se}${G}<i>«${Y.descripcion}»</i></div>`}const Ge=`${Z.player.crystals}:${Z.player.keys}`;Ge!==ie&&(ie=Ge,u.innerHTML=`<span class="hud-wallet-crystal">◆</span> ${Z.player.crystals}`+(Z.player.keys>0?` &nbsp;<span class="hud-wallet-key">⚷</span> ${Z.player.keys}`:""));const O=Z.enemies.some(Y=>Y.kind==="gorko"),U=`${Z.seed}:${Z.floor.level}`;O&&H!==U&&(H=U,f.hidden=!1,f.innerHTML='<div class="hud-boss-name">GORKO</div><div class="hud-boss-sub">el Sapo Glotón</div>',setTimeout(()=>{f.hidden=!0},2800));const R=`${Z.floor.level}:${Z.floor.current}:`+Z.floor.rooms.map(Y=>(Y.visited?"v":".")+(Y.cleared?"c":".")).join("");if(R!==$){$=R;const Y=Z.floor.rooms.filter(We=>We.visited),G=new Set;for(const We of Y){G.add(We.id);for(const Je of Object.values(We.doors))Je>=0&&G.add(Je)}const se=Z.floor.rooms.filter(We=>G.has(We.id)),pe=Math.min(...se.map(We=>We.gx)),Te=Math.min(...se.map(We=>We.gy)),Re={treasure:"♦",shop:"$",boss:"☠"},Pe=14;c.innerHTML=se.map(We=>{const Je=["hud-map-cell",We.id===Z.floor.current?"current":"",We.visited?"visited":"known",We.cleared?"cleared":""].filter(Boolean).join(" "),T=We.visited||We.kind!=="boss"?Re[We.kind]??"":Re.boss;return`<div class="${Je}" style="left:${(We.gx-pe)*Pe}px;top:${(We.gy-Te)*Pe}px">${T}</div>`}).join("");const Ve=(Math.max(...se.map(We=>We.gx))-pe+1)*Pe,L=(Math.max(...se.map(We=>We.gy))-Te+1)*Pe;c.style.width=`${Ve}px`,c.style.height=`${L}px`}const N=Z.seed*10+Z.floor.level;N!==C&&(C=N,A.textContent=`seed ${Z.seed} · nivel ${Z.floor.level} · sim v${e}`)},onEvents(Z){for(const de of Z)if(de.type==="proc_triggered"&&de.efecto==="critico")te("¡Crítico!");else if(de.type==="usable_activated"){const he=_r.get(de.itemId);te(`¡${he?.nombre??"Usable"}!`)}else de.type==="item_bought"?te(`Comprado: −${de.price} ◆`,"delta"):de.type==="key_collected"?te("Llave del tesoro","delta"):de.type==="door_unlocked"&&te("El tesoro se abre…","delta")}}}const qc={KeyW:"up",ArrowUp:"up",KeyS:"down",ArrowDown:"down",KeyA:"left",ArrowLeft:"left",KeyD:"right",ArrowRight:"right"};function Ix(n,e,t){const i=n.live,r=new Bf,s=new Ye,a=new jn(new z(0,1,0),0),o=new z;let l=!1,c=!1,u=!1;window.addEventListener("keydown",h=>{const _=qc[h.code];_?(i[_]=!0,h.preventDefault()):h.code==="Space"?(u=!0,i.use=u||c,h.preventDefault()):h.code==="ShiftLeft"||h.code==="ShiftRight"?i.dash=!0:h.code==="KeyE"?i.interact=!0:h.code==="KeyQ"?i.use2=!0:h.code==="KeyR"&&!h.repeat&&n.reset()}),window.addEventListener("keyup",h=>{const _=qc[h.code];_&&(i[_]=!1),h.code==="Space"&&(u=!1,i.use=u||c),(h.code==="ShiftLeft"||h.code==="ShiftRight")&&(i.dash=!1),h.code==="KeyE"&&(i.interact=!1),h.code==="KeyQ"&&(i.use2=!1)}),window.addEventListener("blur",()=>{i.up=i.down=i.left=i.right=!1,l=c=u=!1,i.fire=i.dash=i.use=i.interact=!1}),e.addEventListener("contextmenu",h=>h.preventDefault());function f(h){const _=e.getBoundingClientRect();_.width===0||_.height===0||(s.set((h.clientX-_.left)/_.width*2-1,-((h.clientY-_.top)/_.height)*2+1),r.setFromCamera(s,t),r.ray.intersectPlane(a,o)&&(i.aimX=o.x,i.aimY=o.z))}const d=()=>document.body.classList.contains("touch-mode");window.addEventListener("pointermove",h=>{d()||f(h)}),window.addEventListener("pointerdown",h=>{d()||(h.button===0?(l=!0,i.fire=!0,f(h)):h.button===2&&(c=!0,i.use=u||c))}),window.addEventListener("pointerup",h=>{d()||(h.button===0?(l=!1,i.fire=l):h.button===2&&(c=!1,i.use=u||c))})}const Lx=[[3.5,1],[ct-3.5,1]],Ia=1;function Dx(n){n.add(new Ff(16767398,.55));const e=Lx.map(([i,r])=>{const s=new ql(Be.torch,12,11,2);s.position.set(i,Ia,r+.35),n.add(s);const a=new vi(new ni({map:Ux(),blending:Da,depthWrite:!1}));return a.position.set(i,Ia+.08,r+.18),a.scale.set(.32,.5,1),n.add(a),{light:s,flame:a,baseY:Ia}}),t=new ql(Be.shine,3.2,5,2);return t.position.set(3.5,.7,at/2),n.add(t),{update(i){const r=.8+.2*Math.sin(i.tick*.31)*Math.sin(i.tick*.13);for(const a of e)a.light.intensity=12*r,a.flame.scale.set(.32,.5*(.85+.3*r),1),a.flame.position.y=a.baseY+.08+.02*r;const s=i.player;if(t.position.set(s.x,.7,s.y),i.status==="dead"){const a=i.tick-s.deathTick;t.intensity=Math.floor(a/14)%2===0?1.8:.6}else t.intensity=3.2}}}function Ux(){const[n,e]=Xt(16,24),t=e.createRadialGradient(8,14,1,8,14,10);return t.addColorStop(0,ot(Be.torchBright)),t.addColorStop(.45,ot(Be.torch)),t.addColorStop(1,"rgba(232,161,60,0)"),e.fillStyle=t,e.fillRect(0,0,16,24),e.fillStyle=ot(Be.torch),e.beginPath(),e.moveTo(8,2),e.quadraticCurveTo(12,10,8,16),e.quadraticCurveTo(4,10,8,2),e.fill(),e.fillStyle=ot(Be.torchBright),e.beginPath(),e.ellipse(8,13,2.4,4,0,0,Math.PI*2),e.fill(),Yt(n)}const Nx={1:16777215,2:15919832,3:13625544,4:15519936,5:12563672},$c=40,Fx=55,La=1.15,Ox=1.45,kx=1.9,Kc=.1,Zc=.6,Bx=1.15,zx=.9,Hx=.45;function Gx(){const n=new df;n.background=new tt(Be.dungeonBg);const e=new Yo(Be.dungeonBg,14,30);n.fog=e;const t=Vx(n),i=new z(ct/2,0,at/2),r=new Qt($c,1,.1,100),s=new z,a=El.degToRad(Fx),o=new z(i.x,0,i.z);let l=20,c=ct/2,u=at/2,f=960,d=576,h=!1;function _(){s.set(o.x,l*Math.sin(a),o.z+l*Math.cos(a)),r.position.copy(s),r.lookAt(o)}function S(A,w){f=A,d=w,r.aspect=A/Math.max(1,w);const v=Math.tan(El.degToRad($c/2)),E=v*r.aspect,b=(ct/2+La)/E,C=(at/2+La)*Math.sin(a)/v+(at/2+La)*Math.cos(a);h=document.body.classList.contains("touch-mode"),l=Math.max(b,C)/(h?kx:Ox),c=E*l,u=v*l/Math.sin(a),e.near=l-2,e.far=l+15,_(),r.updateProjectionMatrix()}function m(A,w,v){const E=w-Zc,b=v-w+Zc;return E>=b?v/2:Math.min(b,Math.max(E,A))}function p(A){document.body.classList.contains("touch-mode")!==h&&S(f,d);const w=m(A.player.x,c,ct),v=m(A.player.y,u,at);o.x+=(w-o.x)*Kc,o.z+=(v-o.z)*Kc,_()}return{scene:n,camera:r,center:i,cameraHome:s,resize:S,updateRoom:A=>{t.update(A),p(A)}}}function Vx(n){const e=ct-2,t=at-2,i=new tr({map:nx(e,t),roughness:.92,metalness:0}),r=new Ut(new li(e,t),i);r.rotation.x=-Math.PI/2,r.position.set(ct/2,0,at/2),n.add(r);const s=new tr({map:Nc(15,2),roughness:1,metalness:0}),a=new tr({map:Nc(3,1),roughness:1,metalness:0,color:12167312}),o=new tr({color:1511434,roughness:.6}),l=new tr({color:13211950,roughness:.35,metalness:.4}),c=new Ti({color:197121}),u=new Ti({color:Be.torch}),f=new nr;n.add(f);const d=[];let h=null,_="";function S(){for(const w of[...f.children])f.remove(w),w.traverse(v=>{v instanceof Ut&&v.geometry.dispose()});d.length=0,h=null}function m(w,v,E,b,C,x){const y=new Ut(new Ci(w,v,E),x);return y.position.set(b,v/2,C),f.add(y),y}function p(w,v){const E=w==="n"?Bx:w==="s"?Hx:zx,b=w==="n"||w==="s",C=w==="n"?.5:at-.5,x=w==="w"?.5:ct-.5,y=b?ct/2:at/2,I=b?ct:at-2,P=b?0:1;if(!v){b?m(I,E,1,ct/2,C,s):m(1,E,I,x,at/2,s);return}const F=y-ei-P,$=P+I-(y+ei);b?(m(F,E,1,P+F/2,C,s),m($,E,1,y+ei+$/2,C,s),d.push({side:w,mesh:m(ei*2,E*.8,.4,y,C,o)})):(m(1,E,F,x,P+F/2,s),m(1,E,$,x,y+ei+$/2,s),d.push({side:w,mesh:m(.4,E*.8,ei*2,x,y,o)}))}function A(w){S();const v=w.floor.rooms[w.floor.current],E=Nx[w.floor.level]??16777215;i.color.setHex(E),s.color.setHex(E),p("n",v.doors.n>=0),p("s",v.doors.s>=0),p("e",v.doors.e>=0),p("w",v.doors.w>=0);for(const b of w.obstacles)b.invisible||m(b.w,.55,b.h,b.x+b.w/2,b.y+b.h/2,a);if(v.kind==="boss"){const b=new nr,C=new Ut(new Ko(.5,20),c);C.rotation.x=-Math.PI/2,C.position.set(ct/2,.012,at/2);const x=new Ut(new Zo(.5,.62,20),u);x.rotation.x=-Math.PI/2,x.position.set(ct/2,.013,at/2),b.add(C,x),b.visible=!1,f.add(b),h=b}}return{update(w){const v=`${w.seed}:${w.floor.level}:${w.floor.current}`;v!==_&&(_=v,A(w));const E=w.floor.rooms[w.floor.current];for(const b of d){const C=E.doors[b.side],x=C>=0&&w.floor.rooms[C].locked;b.mesh.visible=!E.cleared||x,b.mesh.material=x&&E.cleared?l:o}h&&(h.visible=w.floor.trapdoorOpen)}}}function Wx(n,e){const t=Z0(),i=K0(e,Hd(t));q0(i,As);const r=new N_({antialias:!1});r.setPixelRatio(1),n.appendChild(r.domElement);const s=Gx(),a=Dx(s.scene),o=gx(s.scene,tx());Ix(i,r.domElement,s.camera);const l=Px(n,As,()=>i.telemetry),c=ex(i,s),u=J0(n,i,t,As);let f=null;function d(m){if(m&&!f&&(f=j0(n,i)),document.body.classList.toggle("touch-mode",m),!m){const p=i.live;p.left=p.right=p.up=p.down=p.fire=!1}}Q0()?d(!0):new URLSearchParams(location.search).get("touch")!=="0"&&(window.addEventListener("touchstart",()=>d(!0)),window.addEventListener("pointermove",m=>{m.pointerType==="mouse"&&document.body.classList.contains("touch-mode")&&d(!1)}));function h(){const m=n.clientWidth||960,p=n.clientHeight||576;r.setSize(m,p),s.resize(m,p)}new ResizeObserver(h).observe(n),h();let _=performance.now();function S(m){const p=m-_;_=m;const A=i.frame(p);c.onEvents(A),l.onEvents(A),s.updateRoom(i.sim.state),a.update(i.sim.state),o.update(i.sim.state),l.update(i.sim.state),u.update(i.sim.state),f?.update(i.sim.state),c.update(p,s.camera),r.render(s.scene,s.camera),requestAnimationFrame(S)}requestAnimationFrame(S)}const Xx=new URLSearchParams(location.search),Jc=Xx.get("seed"),Wd=Jc!==null?Number(Jc)>>>0:Date.now()>>>0;Wx(document.getElementById("game"),Wd);console.info(`%cKai · Fase 0.5 · seed=${Wd} · API de tester en window.__game`,"color:#e8a13c");
