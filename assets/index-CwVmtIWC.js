(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Lo="185",Kd=0,ml=1,Zd=2,Ms=1,Jd=2,Pr=3,si=0,Yt=1,On=2,Bn=0,rr=1,La=2,gl=3,_l=4,Qd=5,gi=100,jd=101,eu=102,tu=103,nu=104,iu=200,ru=201,su=202,au=203,Da=204,Ua=205,ou=206,lu=207,cu=208,du=209,uu=210,fu=211,hu=212,pu=213,mu=214,Na=0,Fa=1,Oa=2,cr=3,ka=4,Ba=5,za=6,Ha=7,Kc=0,gu=1,_u=2,An=0,Zc=1,Jc=2,Qc=3,jc=4,ed=5,td=6,nd=7,id=300,Si=301,dr=302,Vs=303,Ws=304,Os=306,Ga=1e3,kn=1001,Va=1002,At=1003,xu=1004,Wr=1005,Rt=1006,Xs=1007,xi=1008,jt=1009,rd=1010,sd=1011,Ur=1012,Do=1013,Cn=1014,En=1015,Gn=1016,Uo=1017,No=1018,Nr=1020,ad=35902,od=35899,ld=1021,cd=1022,fn=1023,Vn=1026,vi=1027,dd=1028,Fo=1029,yi=1030,Oo=1031,ko=1033,Ss=33776,ys=33777,bs=33778,Es=33779,Wa=35840,Xa=35841,Ya=35842,qa=35843,$a=36196,Ka=37492,Za=37496,Ja=37488,Qa=37489,Rs=37490,ja=37491,eo=37808,to=37809,no=37810,io=37811,ro=37812,so=37813,ao=37814,oo=37815,lo=37816,co=37817,uo=37818,fo=37819,ho=37820,po=37821,mo=36492,go=36494,_o=36495,xo=36283,vo=36284,Cs=36285,Mo=36286,vu=3200,So=0,Mu=1,ti="",Xt="srgb",Ps="srgb-linear",Is="linear",dt="srgb",Pi=7680,xl=519,Su=512,yu=513,bu=514,Bo=515,Eu=516,Tu=517,zo=518,Au=519,yo=35044,vl="300 es",Tn=2e3,Fr=2001;function wu(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Or(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Ru(){const i=Or("canvas");return i.style.display="block",i}const Ml={};function Ls(...i){const e="THREE."+i.shift();console.log(e,...i)}function ud(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function ke(...i){i=ud(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Qe(...i){i=ud(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function sr(...i){const e=i.join(" ");e in Ml||(Ml[e]=!0,ke(...i))}function Cu(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const Pu={[Na]:Fa,[Oa]:za,[ka]:Ha,[cr]:Ba,[Fa]:Na,[za]:Oa,[Ha]:ka,[Ba]:cr};class Ai{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const r=n[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Ot=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Sl=1234567;const Lr=Math.PI/180,kr=180/Math.PI;function zn(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ot[i&255]+Ot[i>>8&255]+Ot[i>>16&255]+Ot[i>>24&255]+"-"+Ot[e&255]+Ot[e>>8&255]+"-"+Ot[e>>16&15|64]+Ot[e>>24&255]+"-"+Ot[t&63|128]+Ot[t>>8&255]+"-"+Ot[t>>16&255]+Ot[t>>24&255]+Ot[n&255]+Ot[n>>8&255]+Ot[n>>16&255]+Ot[n>>24&255]).toLowerCase()}function Ze(i,e,t){return Math.max(e,Math.min(t,i))}function Ho(i,e){return(i%e+e)%e}function Iu(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function Lu(i,e,t){return i!==e?(t-i)/(e-i):0}function Dr(i,e,t){return(1-t)*i+t*e}function Du(i,e,t,n){return Dr(i,e,1-Math.exp(-t*n))}function Uu(i,e=1){return e-Math.abs(Ho(i,e*2)-e)}function Nu(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Fu(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Ou(i,e){return i+Math.floor(Math.random()*(e-i+1))}function ku(i,e){return i+Math.random()*(e-i)}function Bu(i){return i*(.5-Math.random())}function zu(i){i!==void 0&&(Sl=i);let e=Sl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Hu(i){return i*Lr}function Gu(i){return i*kr}function Vu(i){return(i&i-1)===0&&i!==0}function Wu(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Xu(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Yu(i,e,t,n,r){const s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+n)/2),u=a((e+n)/2),f=s((e-n)/2),d=a((e-n)/2),h=s((n-e)/2),_=a((n-e)/2);switch(r){case"XYX":i.set(o*u,l*f,l*d,o*c);break;case"YZY":i.set(l*d,o*u,l*f,o*c);break;case"ZXZ":i.set(l*f,l*d,o*u,o*c);break;case"XZX":i.set(o*u,l*_,l*h,o*c);break;case"YXY":i.set(l*h,o*u,l*_,o*c);break;case"ZYZ":i.set(l*_,l*h,o*u,o*c);break;default:ke("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function un(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ut(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const yl={DEG2RAD:Lr,RAD2DEG:kr,generateUUID:zn,clamp:Ze,euclideanModulo:Ho,mapLinear:Iu,inverseLerp:Lu,lerp:Dr,damp:Du,pingpong:Uu,smoothstep:Nu,smootherstep:Fu,randInt:Ou,randFloat:ku,randFloatSpread:Bu,seededRandom:zu,degToRad:Hu,radToDeg:Gu,isPowerOfTwo:Vu,ceilPowerOfTwo:Wu,floorPowerOfTwo:Xu,setQuaternionFromProperEuler:Yu,normalize:ut,denormalize:un},tl=class tl{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ze(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ze(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};tl.prototype.isVector2=!0;let ze=tl;class pr{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let l=n[r+0],c=n[r+1],u=n[r+2],f=n[r+3],d=s[a+0],h=s[a+1],_=s[a+2],S=s[a+3];if(f!==S||l!==d||c!==h||u!==_){let m=l*d+c*h+u*_+f*S;m<0&&(d=-d,h=-h,_=-_,S=-S,m=-m);let p=1-o;if(m<.9995){const w=Math.acos(m),R=Math.sin(w);p=Math.sin(p*w)/R,o=Math.sin(o*w)/R,l=l*p+d*o,c=c*p+h*o,u=u*p+_*o,f=f*p+S*o}else{l=l*p+d*o,c=c*p+h*o,u=u*p+_*o,f=f*p+S*o;const w=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=w,c*=w,u*=w,f*=w}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,r,s,a){const o=n[r],l=n[r+1],c=n[r+2],u=n[r+3],f=s[a],d=s[a+1],h=s[a+2],_=s[a+3];return e[t]=o*_+u*f+l*h-c*d,e[t+1]=l*_+u*d+c*f-o*h,e[t+2]=c*_+u*h+o*d-l*f,e[t+3]=u*_-o*f-l*d-c*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(r/2),f=o(s/2),d=l(n/2),h=l(r/2),_=l(s/2);switch(a){case"XYZ":this._x=d*u*f+c*h*_,this._y=c*h*f-d*u*_,this._z=c*u*_+d*h*f,this._w=c*u*f-d*h*_;break;case"YXZ":this._x=d*u*f+c*h*_,this._y=c*h*f-d*u*_,this._z=c*u*_-d*h*f,this._w=c*u*f+d*h*_;break;case"ZXY":this._x=d*u*f-c*h*_,this._y=c*h*f+d*u*_,this._z=c*u*_+d*h*f,this._w=c*u*f-d*h*_;break;case"ZYX":this._x=d*u*f-c*h*_,this._y=c*h*f+d*u*_,this._z=c*u*_-d*h*f,this._w=c*u*f+d*h*_;break;case"YZX":this._x=d*u*f+c*h*_,this._y=c*h*f+d*u*_,this._z=c*u*_-d*h*f,this._w=c*u*f-d*h*_;break;case"XZY":this._x=d*u*f-c*h*_,this._y=c*h*f-d*u*_,this._z=c*u*_+d*h*f,this._w=c*u*f+d*h*_;break;default:ke("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],f=t[10],d=n+o+f;if(d>0){const h=.5/Math.sqrt(d+1);this._w=.25/h,this._x=(u-l)*h,this._y=(s-c)*h,this._z=(a-r)*h}else if(n>o&&n>f){const h=2*Math.sqrt(1+n-o-f);this._w=(u-l)/h,this._x=.25*h,this._y=(r+a)/h,this._z=(s+c)/h}else if(o>f){const h=2*Math.sqrt(1+o-n-f);this._w=(s-c)/h,this._x=(r+a)/h,this._y=.25*h,this._z=(l+u)/h}else{const h=2*Math.sqrt(1+f-n-o);this._w=(a-r)/h,this._x=(s+c)/h,this._y=(l+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ze(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-n*c,this._z=s*u+a*c+n*l-r*o,this._w=a*u-n*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,s=-s,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+n*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const nl=class nl{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(bl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(bl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*n),u=2*(o*t-s*r),f=2*(s*n-a*t);return this.x=t+l*c+a*f-o*u,this.y=n+l*u+o*c-s*f,this.z=r+l*f+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this.z=Ze(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this.z=Ze(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ze(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-n*l,this.z=n*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ys.copy(this).projectOnVector(e),this.sub(Ys)}reflect(e){return this.sub(Ys.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ze(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};nl.prototype.isVector3=!0;let z=nl;const Ys=new z,bl=new pr,il=class il{constructor(e,t,n,r,s,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,c)}set(e,t,n,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],f=n[7],d=n[2],h=n[5],_=n[8],S=r[0],m=r[3],p=r[6],w=r[1],R=r[4],v=r[7],T=r[2],b=r[5],I=r[8];return s[0]=a*S+o*w+l*T,s[3]=a*m+o*R+l*b,s[6]=a*p+o*v+l*I,s[1]=c*S+u*w+f*T,s[4]=c*m+u*R+f*b,s[7]=c*p+u*v+f*I,s[2]=d*S+h*w+_*T,s[5]=d*m+h*R+_*b,s[8]=d*p+h*v+_*I,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*s*u+n*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=u*a-o*c,d=o*l-u*s,h=c*s-a*l,_=t*f+n*d+r*h;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/_;return e[0]=f*S,e[1]=(r*c-u*n)*S,e[2]=(o*n-r*a)*S,e[3]=d*S,e[4]=(u*t-r*l)*S,e[5]=(r*s-o*t)*S,e[6]=h*S,e[7]=(n*l-c*t)*S,e[8]=(a*t-n*s)*S,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return sr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(qs.makeScale(e,t)),this}rotate(e){return sr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(qs.makeRotation(-e)),this}translate(e,t){return sr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(qs.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};il.prototype.isMatrix3=!0;let Be=il;const qs=new Be,El=new Be().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Tl=new Be().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function qu(){const i={enabled:!0,workingColorSpace:Ps,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===dt&&(r.r=Hn(r.r),r.g=Hn(r.g),r.b=Hn(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===dt&&(r.r=ar(r.r),r.g=ar(r.g),r.b=ar(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===ti?Is:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return sr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return sr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Ps]:{primaries:e,whitePoint:n,transfer:Is,toXYZ:El,fromXYZ:Tl,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Xt},outputColorSpaceConfig:{drawingBufferColorSpace:Xt}},[Xt]:{primaries:e,whitePoint:n,transfer:dt,toXYZ:El,fromXYZ:Tl,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Xt}}}),i}const je=qu();function Hn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ar(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Ii;class $u{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ii===void 0&&(Ii=Or("canvas")),Ii.width=e.width,Ii.height=e.height;const r=Ii.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=Ii}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Or("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Hn(s[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Hn(t[n]/255)*255):t[n]=Hn(t[n]);return{data:t,width:e.width,height:e.height}}else return ke("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Ku=0;class Go{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ku++}),this.uuid=zn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push($s(r[a].image)):s.push($s(r[a]))}else s=$s(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function $s(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?$u.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(ke("Texture: Unable to serialize Texture."),{})}let Zu=0;const Ks=new z;class Nt extends Ai{constructor(e=Nt.DEFAULT_IMAGE,t=Nt.DEFAULT_MAPPING,n=kn,r=kn,s=Rt,a=xi,o=fn,l=jt,c=Nt.DEFAULT_ANISOTROPY,u=ti){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Zu++}),this.uuid=zn(),this.name="",this.source=new Go(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ze(0,0),this.repeat=new ze(1,1),this.center=new ze(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Be,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Ks).x}get height(){return this.source.getSize(Ks).y}get depth(){return this.source.getSize(Ks).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){ke(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){ke(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==id)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ga:e.x=e.x-Math.floor(e.x);break;case kn:e.x=e.x<0?0:1;break;case Va:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ga:e.y=e.y-Math.floor(e.y);break;case kn:e.y=e.y<0?0:1;break;case Va:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Nt.DEFAULT_IMAGE=null;Nt.DEFAULT_MAPPING=id;Nt.DEFAULT_ANISOTROPY=1;const rl=class rl{constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],d=l[1],h=l[5],_=l[9],S=l[2],m=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-S)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+S)<.1&&Math.abs(_+m)<.1&&Math.abs(c+h+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const R=(c+1)/2,v=(h+1)/2,T=(p+1)/2,b=(u+d)/4,I=(f+S)/4,x=(_+m)/4;return R>v&&R>T?R<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(R),r=b/n,s=I/n):v>T?v<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(v),n=b/r,s=x/r):T<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(T),n=I/s,r=x/s),this.set(n,r,s,t),this}let w=Math.sqrt((m-_)*(m-_)+(f-S)*(f-S)+(d-u)*(d-u));return Math.abs(w)<.001&&(w=1),this.x=(m-_)/w,this.y=(f-S)/w,this.z=(d-u)/w,this.w=Math.acos((c+h+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this.z=Ze(this.z,e.z,t.z),this.w=Ze(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this.z=Ze(this.z,e,t),this.w=Ze(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ze(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};rl.prototype.isVector4=!0;let St=rl;class Ju extends Ai{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Rt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new St(0,0,e,t),this.scissorTest=!1,this.viewport=new St(0,0,e,t),this.textures=[];const r={width:e,height:t,depth:n.depth},s=new Nt(r),a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Rt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Go(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class wn extends Ju{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class fd extends Nt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=At,this.minFilter=At,this.wrapR=kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Qu extends Nt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=At,this.minFilter=At,this.wrapR=kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Fs=class Fs{constructor(e,t,n,r,s,a,o,l,c,u,f,d,h,_,S,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,c,u,f,d,h,_,S,m)}set(e,t,n,r,s,a,o,l,c,u,f,d,h,_,S,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=r,p[1]=s,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=f,p[14]=d,p[3]=h,p[7]=_,p[11]=S,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Fs().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,r=1/Li.setFromMatrixColumn(e,0).length(),s=1/Li.setFromMatrixColumn(e,1).length(),a=1/Li.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=a*u,h=a*f,_=o*u,S=o*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=h+_*c,t[5]=d-S*c,t[9]=-o*l,t[2]=S-d*c,t[6]=_+h*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*u,h=l*f,_=c*u,S=c*f;t[0]=d+S*o,t[4]=_*o-h,t[8]=a*c,t[1]=a*f,t[5]=a*u,t[9]=-o,t[2]=h*o-_,t[6]=S+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*u,h=l*f,_=c*u,S=c*f;t[0]=d-S*o,t[4]=-a*f,t[8]=_+h*o,t[1]=h+_*o,t[5]=a*u,t[9]=S-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*u,h=a*f,_=o*u,S=o*f;t[0]=l*u,t[4]=_*c-h,t[8]=d*c+S,t[1]=l*f,t[5]=S*c+d,t[9]=h*c-_,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,h=a*c,_=o*l,S=o*c;t[0]=l*u,t[4]=S-d*f,t[8]=_*f+h,t[1]=f,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=h*f+_,t[10]=d-S*f}else if(e.order==="XZY"){const d=a*l,h=a*c,_=o*l,S=o*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=d*f+S,t[5]=a*u,t[9]=h*f-_,t[2]=_*f-h,t[6]=o*u,t[10]=S*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ju,e,ef)}lookAt(e,t,n){const r=this.elements;return Zt.subVectors(e,t),Zt.lengthSq()===0&&(Zt.z=1),Zt.normalize(),qn.crossVectors(n,Zt),qn.lengthSq()===0&&(Math.abs(n.z)===1?Zt.x+=1e-4:Zt.z+=1e-4,Zt.normalize(),qn.crossVectors(n,Zt)),qn.normalize(),Xr.crossVectors(Zt,qn),r[0]=qn.x,r[4]=Xr.x,r[8]=Zt.x,r[1]=qn.y,r[5]=Xr.y,r[9]=Zt.y,r[2]=qn.z,r[6]=Xr.z,r[10]=Zt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],f=n[5],d=n[9],h=n[13],_=n[2],S=n[6],m=n[10],p=n[14],w=n[3],R=n[7],v=n[11],T=n[15],b=r[0],I=r[4],x=r[8],E=r[12],D=r[1],L=r[5],O=r[9],q=r[13],ne=r[2],H=r[6],j=r[10],W=r[14],ee=r[3],ae=r[7],K=r[11],le=r[15];return s[0]=a*b+o*D+l*ne+c*ee,s[4]=a*I+o*L+l*H+c*ae,s[8]=a*x+o*O+l*j+c*K,s[12]=a*E+o*q+l*W+c*le,s[1]=u*b+f*D+d*ne+h*ee,s[5]=u*I+f*L+d*H+h*ae,s[9]=u*x+f*O+d*j+h*K,s[13]=u*E+f*q+d*W+h*le,s[2]=_*b+S*D+m*ne+p*ee,s[6]=_*I+S*L+m*H+p*ae,s[10]=_*x+S*O+m*j+p*K,s[14]=_*E+S*q+m*W+p*le,s[3]=w*b+R*D+v*ne+T*ee,s[7]=w*I+R*L+v*H+T*ae,s[11]=w*x+R*O+v*j+T*K,s[15]=w*E+R*q+v*W+T*le,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],f=e[6],d=e[10],h=e[14],_=e[3],S=e[7],m=e[11],p=e[15],w=l*h-c*d,R=o*h-c*f,v=o*d-l*f,T=a*h-c*u,b=a*d-l*u,I=a*f-o*u;return t*(S*w-m*R+p*v)-n*(_*w-m*T+p*b)+r*(_*R-S*T+p*I)-s*(_*v-S*b+m*I)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[1],a=e[5],o=e[9],l=e[2],c=e[6],u=e[10];return t*(a*u-o*c)-n*(s*u-o*l)+r*(s*c-a*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=e[9],d=e[10],h=e[11],_=e[12],S=e[13],m=e[14],p=e[15],w=t*o-n*a,R=t*l-r*a,v=t*c-s*a,T=n*l-r*o,b=n*c-s*o,I=r*c-s*l,x=u*S-f*_,E=u*m-d*_,D=u*p-h*_,L=f*m-d*S,O=f*p-h*S,q=d*p-h*m,ne=w*q-R*O+v*L+T*D-b*E+I*x;if(ne===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const H=1/ne;return e[0]=(o*q-l*O+c*L)*H,e[1]=(r*O-n*q-s*L)*H,e[2]=(S*I-m*b+p*T)*H,e[3]=(d*b-f*I-h*T)*H,e[4]=(l*D-a*q-c*E)*H,e[5]=(t*q-r*D+s*E)*H,e[6]=(m*v-_*I-p*R)*H,e[7]=(u*I-d*v+h*R)*H,e[8]=(a*O-o*D+c*x)*H,e[9]=(n*D-t*O-s*x)*H,e[10]=(_*b-S*v+p*w)*H,e[11]=(f*v-u*b-h*w)*H,e[12]=(o*E-a*L-l*x)*H,e[13]=(t*L-n*E+r*x)*H,e[14]=(S*R-_*T-m*w)*H,e[15]=(u*T-f*R+d*w)*H,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+n,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+n,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,f=o+o,d=s*c,h=s*u,_=s*f,S=a*u,m=a*f,p=o*f,w=l*c,R=l*u,v=l*f,T=n.x,b=n.y,I=n.z;return r[0]=(1-(S+p))*T,r[1]=(h+v)*T,r[2]=(_-R)*T,r[3]=0,r[4]=(h-v)*b,r[5]=(1-(d+p))*b,r[6]=(m+w)*b,r[7]=0,r[8]=(_+R)*I,r[9]=(m-w)*I,r[10]=(1-(d+S))*I,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinantAffine();if(s===0)return n.set(1,1,1),t.identity(),this;let a=Li.set(r[0],r[1],r[2]).length();const o=Li.set(r[4],r[5],r[6]).length(),l=Li.set(r[8],r[9],r[10]).length();s<0&&(a=-a),an.copy(this);const c=1/a,u=1/o,f=1/l;return an.elements[0]*=c,an.elements[1]*=c,an.elements[2]*=c,an.elements[4]*=u,an.elements[5]*=u,an.elements[6]*=u,an.elements[8]*=f,an.elements[9]*=f,an.elements[10]*=f,t.setFromRotationMatrix(an),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,r,s,a,o=Tn,l=!1){const c=this.elements,u=2*s/(t-e),f=2*s/(n-r),d=(t+e)/(t-e),h=(n+r)/(n-r);let _,S;if(l)_=s/(a-s),S=a*s/(a-s);else if(o===Tn)_=-(a+s)/(a-s),S=-2*a*s/(a-s);else if(o===Fr)_=-a/(a-s),S=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=f,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=S,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,s,a,o=Tn,l=!1){const c=this.elements,u=2/(t-e),f=2/(n-r),d=-(t+e)/(t-e),h=-(n+r)/(n-r);let _,S;if(l)_=1/(a-s),S=a/(a-s);else if(o===Tn)_=-2/(a-s),S=-(a+s)/(a-s);else if(o===Fr)_=-1/(a-s),S=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=f,c[9]=0,c[13]=h,c[2]=0,c[6]=0,c[10]=_,c[14]=S,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Fs.prototype.isMatrix4=!0;let vt=Fs;const Li=new z,an=new vt,ju=new z(0,0,0),ef=new z(1,1,1),qn=new z,Xr=new z,Zt=new z,Al=new vt,wl=new pr;class ai{constructor(e=0,t=0,n=0,r=ai.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],f=r[2],d=r[6],h=r[10];switch(t){case"XYZ":this._y=Math.asin(Ze(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ze(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ze(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,h),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ze(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,h),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ze(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,h));break;case"XZY":this._z=Math.asin(-Ze(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,h),this._y=0);break;default:ke("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Al.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Al,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return wl.setFromEuler(this),this.setFromQuaternion(wl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ai.DEFAULT_ORDER="XYZ";class Vo{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let tf=0;const Rl=new z,Di=new pr,In=new vt,Yr=new z,_r=new z,nf=new z,rf=new pr,Cl=new z(1,0,0),Pl=new z(0,1,0),Il=new z(0,0,1),Ll={type:"added"},sf={type:"removed"},Ui={type:"childadded",child:null},Zs={type:"childremoved",child:null};class Vt extends Ai{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:tf++}),this.uuid=zn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Vt.DEFAULT_UP.clone();const e=new z,t=new ai,n=new pr,r=new z(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new vt},normalMatrix:{value:new Be}}),this.matrix=new vt,this.matrixWorld=new vt,this.matrixAutoUpdate=Vt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Vo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Di.setFromAxisAngle(e,t),this.quaternion.multiply(Di),this}rotateOnWorldAxis(e,t){return Di.setFromAxisAngle(e,t),this.quaternion.premultiply(Di),this}rotateX(e){return this.rotateOnAxis(Cl,e)}rotateY(e){return this.rotateOnAxis(Pl,e)}rotateZ(e){return this.rotateOnAxis(Il,e)}translateOnAxis(e,t){return Rl.copy(e).applyQuaternion(this.quaternion),this.position.add(Rl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Cl,e)}translateY(e){return this.translateOnAxis(Pl,e)}translateZ(e){return this.translateOnAxis(Il,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(In.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Yr.copy(e):Yr.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),_r.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?In.lookAt(_r,Yr,this.up):In.lookAt(Yr,_r,this.up),this.quaternion.setFromRotationMatrix(In),r&&(In.extractRotation(r.matrixWorld),Di.setFromRotationMatrix(In),this.quaternion.premultiply(Di.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Qe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ll),Ui.child=e,this.dispatchEvent(Ui),Ui.child=null):Qe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(sf),Zs.child=e,this.dispatchEvent(Zs),Zs.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),In.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),In.multiply(e.parent.matrixWorld)),e.applyMatrix4(In),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ll),Ui.child=e,this.dispatchEvent(Ui),Ui.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_r,e,nf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_r,rf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*r,s[13]+=n-s[1]*t-s[5]*n-s[9]*r,s[14]+=r-s[2]*t-s[6]*n-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),f=a(e.shapes),d=a(e.skeletons),h=a(e.animations),_=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),h.length>0&&(n.animations=h),_.length>0&&(n.nodes=_)}return n.object=r,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}Vt.DEFAULT_UP=new z(0,1,0);Vt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class tr extends Vt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const af={type:"move"};class Js{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new tr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new tr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new tr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const S of e.hand.values()){const m=t.getJointPose(S,n),p=this._getHandJoint(c,S);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),h=.02,_=.005;c.inputState.pinching&&d>h+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=h-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(af)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new tr;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const hd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$n={h:0,s:0,l:0},qr={h:0,s:0,l:0};function Qs(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Je{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Xt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,je.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=je.workingColorSpace){return this.r=e,this.g=t,this.b=n,je.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=je.workingColorSpace){if(e=Ho(e,1),t=Ze(t,0,1),n=Ze(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=Qs(a,s,e+1/3),this.g=Qs(a,s,e),this.b=Qs(a,s,e-1/3)}return je.colorSpaceToWorking(this,r),this}setStyle(e,t=Xt){function n(s){s!==void 0&&parseFloat(s)<1&&ke("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:ke("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);ke("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Xt){const n=hd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):ke("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Hn(e.r),this.g=Hn(e.g),this.b=Hn(e.b),this}copyLinearToSRGB(e){return this.r=ar(e.r),this.g=ar(e.g),this.b=ar(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Xt){return je.workingToColorSpace(kt.copy(this),e),Math.round(Ze(kt.r*255,0,255))*65536+Math.round(Ze(kt.g*255,0,255))*256+Math.round(Ze(kt.b*255,0,255))}getHexString(e=Xt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=je.workingColorSpace){je.workingToColorSpace(kt.copy(this),t);const n=kt.r,r=kt.g,s=kt.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case n:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-n)/f+2;break;case s:l=(n-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=je.workingColorSpace){return je.workingToColorSpace(kt.copy(this),t),e.r=kt.r,e.g=kt.g,e.b=kt.b,e}getStyle(e=Xt){je.workingToColorSpace(kt.copy(this),e);const t=kt.r,n=kt.g,r=kt.b;return e!==Xt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL($n),this.setHSL($n.h+e,$n.s+t,$n.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL($n),e.getHSL(qr);const n=Dr($n.h,qr.h,t),r=Dr($n.s,qr.s,t),s=Dr($n.l,qr.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const kt=new Je;Je.NAMES=hd;class Wo{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Je(e),this.near=t,this.far=n}clone(){return new Wo(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class of extends Vt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ai,this.environmentIntensity=1,this.environmentRotation=new ai,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const on=new z,Ln=new z,js=new z,Dn=new z,Ni=new z,Fi=new z,Dl=new z,ea=new z,ta=new z,na=new z,ia=new St,ra=new St,sa=new St;class rn{constructor(e=new z,t=new z,n=new z){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),on.subVectors(e,t),r.cross(on);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){on.subVectors(r,t),Ln.subVectors(n,t),js.subVectors(e,t);const a=on.dot(on),o=on.dot(Ln),l=on.dot(js),c=Ln.dot(Ln),u=Ln.dot(js),f=a*c-o*o;if(f===0)return s.set(0,0,0),null;const d=1/f,h=(c*l-o*u)*d,_=(a*u-o*l)*d;return s.set(1-h-_,_,h)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Dn)===null?!1:Dn.x>=0&&Dn.y>=0&&Dn.x+Dn.y<=1}static getInterpolation(e,t,n,r,s,a,o,l){return this.getBarycoord(e,t,n,r,Dn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Dn.x),l.addScaledVector(a,Dn.y),l.addScaledVector(o,Dn.z),l)}static getInterpolatedAttribute(e,t,n,r,s,a){return ia.setScalar(0),ra.setScalar(0),sa.setScalar(0),ia.fromBufferAttribute(e,t),ra.fromBufferAttribute(e,n),sa.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(ia,s.x),a.addScaledVector(ra,s.y),a.addScaledVector(sa,s.z),a}static isFrontFacing(e,t,n,r){return on.subVectors(n,t),Ln.subVectors(e,t),on.cross(Ln).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return on.subVectors(this.c,this.b),Ln.subVectors(this.a,this.b),on.cross(Ln).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return rn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return rn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return rn.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return rn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return rn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let a,o;Ni.subVectors(r,n),Fi.subVectors(s,n),ea.subVectors(e,n);const l=Ni.dot(ea),c=Fi.dot(ea);if(l<=0&&c<=0)return t.copy(n);ta.subVectors(e,r);const u=Ni.dot(ta),f=Fi.dot(ta);if(u>=0&&f<=u)return t.copy(r);const d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(Ni,a);na.subVectors(e,s);const h=Ni.dot(na),_=Fi.dot(na);if(_>=0&&h<=_)return t.copy(s);const S=h*c-l*_;if(S<=0&&c>=0&&_<=0)return o=c/(c-_),t.copy(n).addScaledVector(Fi,o);const m=u*_-h*f;if(m<=0&&f-u>=0&&h-_>=0)return Dl.subVectors(s,r),o=(f-u)/(f-u+(h-_)),t.copy(r).addScaledVector(Dl,o);const p=1/(m+S+d);return a=S*p,o=d*p,t.copy(n).addScaledVector(Ni,a).addScaledVector(Fi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Br{constructor(e=new z(1/0,1/0,1/0),t=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ln.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ln.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=ln.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,ln):ln.fromBufferAttribute(s,a),ln.applyMatrix4(e.matrixWorld),this.expandByPoint(ln);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),$r.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),$r.copy(n.boundingBox)),$r.applyMatrix4(e.matrixWorld),this.union($r)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ln),ln.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(xr),Kr.subVectors(this.max,xr),Oi.subVectors(e.a,xr),ki.subVectors(e.b,xr),Bi.subVectors(e.c,xr),Kn.subVectors(ki,Oi),Zn.subVectors(Bi,ki),ci.subVectors(Oi,Bi);let t=[0,-Kn.z,Kn.y,0,-Zn.z,Zn.y,0,-ci.z,ci.y,Kn.z,0,-Kn.x,Zn.z,0,-Zn.x,ci.z,0,-ci.x,-Kn.y,Kn.x,0,-Zn.y,Zn.x,0,-ci.y,ci.x,0];return!aa(t,Oi,ki,Bi,Kr)||(t=[1,0,0,0,1,0,0,0,1],!aa(t,Oi,ki,Bi,Kr))?!1:(Zr.crossVectors(Kn,Zn),t=[Zr.x,Zr.y,Zr.z],aa(t,Oi,ki,Bi,Kr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ln).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ln).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Un[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Un[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Un[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Un[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Un[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Un[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Un[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Un[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Un),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Un=[new z,new z,new z,new z,new z,new z,new z,new z],ln=new z,$r=new Br,Oi=new z,ki=new z,Bi=new z,Kn=new z,Zn=new z,ci=new z,xr=new z,Kr=new z,Zr=new z,di=new z;function aa(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){di.fromArray(i,s);const o=r.x*Math.abs(di.x)+r.y*Math.abs(di.y)+r.z*Math.abs(di.z),l=e.dot(di),c=t.dot(di),u=n.dot(di);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const wt=new z,Jr=new ze;let lf=0;class hn extends Ai{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:lf++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=yo,this.updateRanges=[],this.gpuType=En,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Jr.fromBufferAttribute(this,t),Jr.applyMatrix3(e),this.setXY(t,Jr.x,Jr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix3(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix4(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.applyNormalMatrix(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.transformDirection(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=un(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ut(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=un(t,this.array)),t}setX(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=un(t,this.array)),t}setY(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=un(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=un(t,this.array)),t}setW(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ut(t,this.array),n=ut(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=ut(t,this.array),n=ut(n,this.array),r=ut(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=ut(t,this.array),n=ut(n,this.array),r=ut(r,this.array),s=ut(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==yo&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class pd extends hn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class md extends hn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Wt extends hn{constructor(e,t,n){super(new Float32Array(e),t,n)}}const cf=new Br,vr=new z,oa=new z;class Xo{constructor(e=new z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):cf.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;vr.subVectors(e,this.center);const t=vr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(vr,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(oa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(vr.copy(e.center).add(oa)),this.expandByPoint(vr.copy(e.center).sub(oa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let df=0;const tn=new vt,la=new Vt,zi=new z,Jt=new Br,Mr=new Br,Dt=new z;class sn extends Ai{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:df++}),this.uuid=zn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(wu(e)?md:pd)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Be().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return tn.makeRotationFromQuaternion(e),this.applyMatrix4(tn),this}rotateX(e){return tn.makeRotationX(e),this.applyMatrix4(tn),this}rotateY(e){return tn.makeRotationY(e),this.applyMatrix4(tn),this}rotateZ(e){return tn.makeRotationZ(e),this.applyMatrix4(tn),this}translate(e,t,n){return tn.makeTranslation(e,t,n),this.applyMatrix4(tn),this}scale(e,t,n){return tn.makeScale(e,t,n),this.applyMatrix4(tn),this}lookAt(e){return la.lookAt(e),la.updateMatrix(),this.applyMatrix4(la.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(zi).negate(),this.translate(zi.x,zi.y,zi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Wt(n,3))}else{const n=Math.min(e.length,t.count);for(let r=0;r<n;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&ke("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Br);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Qe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];Jt.setFromBufferAttribute(s),this.morphTargetsRelative?(Dt.addVectors(this.boundingBox.min,Jt.min),this.boundingBox.expandByPoint(Dt),Dt.addVectors(this.boundingBox.max,Jt.max),this.boundingBox.expandByPoint(Dt)):(this.boundingBox.expandByPoint(Jt.min),this.boundingBox.expandByPoint(Jt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Qe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Qe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(e){const n=this.boundingSphere.center;if(Jt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Mr.setFromBufferAttribute(o),this.morphTargetsRelative?(Dt.addVectors(Jt.min,Mr.min),Jt.expandByPoint(Dt),Dt.addVectors(Jt.max,Mr.max),Jt.expandByPoint(Dt)):(Jt.expandByPoint(Mr.min),Jt.expandByPoint(Mr.max))}Jt.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)Dt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(Dt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Dt.fromBufferAttribute(o,c),l&&(zi.fromBufferAttribute(e,c),Dt.add(zi)),r=Math.max(r,n.distanceToSquared(Dt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Qe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Qe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new hn(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));const o=[],l=[];for(let x=0;x<n.count;x++)o[x]=new z,l[x]=new z;const c=new z,u=new z,f=new z,d=new ze,h=new ze,_=new ze,S=new z,m=new z;function p(x,E,D){c.fromBufferAttribute(n,x),u.fromBufferAttribute(n,E),f.fromBufferAttribute(n,D),d.fromBufferAttribute(s,x),h.fromBufferAttribute(s,E),_.fromBufferAttribute(s,D),u.sub(c),f.sub(c),h.sub(d),_.sub(d);const L=1/(h.x*_.y-_.x*h.y);isFinite(L)&&(S.copy(u).multiplyScalar(_.y).addScaledVector(f,-h.y).multiplyScalar(L),m.copy(f).multiplyScalar(h.x).addScaledVector(u,-_.x).multiplyScalar(L),o[x].add(S),o[E].add(S),o[D].add(S),l[x].add(m),l[E].add(m),l[D].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let x=0,E=w.length;x<E;++x){const D=w[x],L=D.start,O=D.count;for(let q=L,ne=L+O;q<ne;q+=3)p(e.getX(q+0),e.getX(q+1),e.getX(q+2))}const R=new z,v=new z,T=new z,b=new z;function I(x){T.fromBufferAttribute(r,x),b.copy(T);const E=o[x];R.copy(E),R.sub(T.multiplyScalar(T.dot(E))).normalize(),v.crossVectors(b,E);const L=v.dot(l[x])<0?-1:1;a.setXYZW(x,R.x,R.y,R.z,L)}for(let x=0,E=w.length;x<E;++x){const D=w[x],L=D.start,O=D.count;for(let q=L,ne=L+O;q<ne;q+=3)I(e.getX(q+0)),I(e.getX(q+1)),I(e.getX(q+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new hn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,h=n.count;d<h;d++)n.setXYZ(d,0,0,0);const r=new z,s=new z,a=new z,o=new z,l=new z,c=new z,u=new z,f=new z;if(e)for(let d=0,h=e.count;d<h;d+=3){const _=e.getX(d+0),S=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,S),a.fromBufferAttribute(t,m),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,S),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(S,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,h=t.count;d<h;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Dt.fromBufferAttribute(e,t),Dt.normalize(),e.setXYZ(t,Dt.x,Dt.y,Dt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,f=o.normalized,d=new c.constructor(l.length*u);let h=0,_=0;for(let S=0,m=l.length;S<m;S++){o.isInterleavedBufferAttribute?h=l[S]*o.data.stride+o.offset:h=l[S]*u;for(let p=0;p<u;p++)d[_++]=c[h++]}return new hn(d,u,f)}if(this.index===null)return ke("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new sn,n=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,f=c.length;u<f;u++){const d=c[u],h=e(d,n);l.push(h)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){const h=c[f];u.push(h.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let d=0,h=f.length;d<h;d++)u.push(f[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class uf{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=yo,this.updateRanges=[],this.version=0,this.uuid=zn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=zn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=zn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Bt=new z;class Ds{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.applyMatrix4(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.applyNormalMatrix(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.transformDirection(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=un(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ut(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=un(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=un(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=un(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=un(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=ut(t,this.array),n=ut(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ut(t,this.array),n=ut(n,this.array),r=ut(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=ut(t,this.array),n=ut(n,this.array),r=ut(r,this.array),s=ut(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){Ls("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new hn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Ds(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Ls("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let ff=0;class mr extends Ai{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ff++}),this.uuid=zn(),this.name="",this.type="Material",this.blending=rr,this.side=si,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Da,this.blendDst=Ua,this.blendEquation=gi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Je(0,0,0),this.blendAlpha=0,this.depthFunc=cr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=xl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Pi,this.stencilZFail=Pi,this.stencilZPass=Pi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){ke(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){ke(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==rr&&(n.blending=this.blending),this.side!==si&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Da&&(n.blendSrc=this.blendSrc),this.blendDst!==Ua&&(n.blendDst=this.blendDst),this.blendEquation!==gi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==cr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==xl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Pi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Pi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Pi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Je().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new ze().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ze().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Mi extends mr{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Je(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Hi;const Sr=new z,Gi=new z,Vi=new z,Wi=new ze,yr=new ze,gd=new vt,Qr=new z,br=new z,jr=new z,Ul=new ze,ca=new ze,Nl=new ze;class nr extends Vt{constructor(e=new Mi){if(super(),this.isSprite=!0,this.type="Sprite",Hi===void 0){Hi=new sn;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new uf(t,5);Hi.setIndex([0,1,2,0,2,3]),Hi.setAttribute("position",new Ds(n,3,0,!1)),Hi.setAttribute("uv",new Ds(n,2,3,!1))}this.geometry=Hi,this.material=e,this.center=new ze(.5,.5),this.count=1}raycast(e,t){e.camera===null&&Qe('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Gi.setFromMatrixScale(this.matrixWorld),gd.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Vi.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Gi.multiplyScalar(-Vi.z);const n=this.material.rotation;let r,s;n!==0&&(s=Math.cos(n),r=Math.sin(n));const a=this.center;es(Qr.set(-.5,-.5,0),Vi,a,Gi,r,s),es(br.set(.5,-.5,0),Vi,a,Gi,r,s),es(jr.set(.5,.5,0),Vi,a,Gi,r,s),Ul.set(0,0),ca.set(1,0),Nl.set(1,1);let o=e.ray.intersectTriangle(Qr,br,jr,!1,Sr);if(o===null&&(es(br.set(-.5,.5,0),Vi,a,Gi,r,s),ca.set(0,1),o=e.ray.intersectTriangle(Qr,jr,br,!1,Sr),o===null))return;const l=e.ray.origin.distanceTo(Sr);l<e.near||l>e.far||t.push({distance:l,point:Sr.clone(),uv:rn.getInterpolation(Sr,Qr,br,jr,Ul,ca,Nl,new ze),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function es(i,e,t,n,r,s){Wi.subVectors(i,t).addScalar(.5).multiply(n),r!==void 0?(yr.x=s*Wi.x-r*Wi.y,yr.y=r*Wi.x+s*Wi.y):yr.copy(Wi),i.copy(e),i.x+=yr.x,i.y+=yr.y,i.applyMatrix4(gd)}const Nn=new z,da=new z,ts=new z,Jn=new z,ua=new z,ns=new z,fa=new z;class _d{constructor(e=new z,t=new z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Nn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Nn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Nn.copy(this.origin).addScaledVector(this.direction,t),Nn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){da.copy(e).add(t).multiplyScalar(.5),ts.copy(t).sub(e).normalize(),Jn.copy(this.origin).sub(da);const s=e.distanceTo(t)*.5,a=-this.direction.dot(ts),o=Jn.dot(this.direction),l=-Jn.dot(ts),c=Jn.lengthSq(),u=Math.abs(1-a*a);let f,d,h,_;if(u>0)if(f=a*l-o,d=a*o-l,_=s*u,f>=0)if(d>=-_)if(d<=_){const S=1/u;f*=S,d*=S,h=f*(f+a*d+2*o)+d*(a*f+d+2*l)+c}else d=s,f=Math.max(0,-(a*d+o)),h=-f*f+d*(d+2*l)+c;else d=-s,f=Math.max(0,-(a*d+o)),h=-f*f+d*(d+2*l)+c;else d<=-_?(f=Math.max(0,-(-a*s+o)),d=f>0?-s:Math.min(Math.max(-s,-l),s),h=-f*f+d*(d+2*l)+c):d<=_?(f=0,d=Math.min(Math.max(-s,-l),s),h=d*(d+2*l)+c):(f=Math.max(0,-(a*s+o)),d=f>0?s:Math.min(Math.max(-s,-l),s),h=-f*f+d*(d+2*l)+c);else d=a>0?-s:s,f=Math.max(0,-(a*d+o)),h=-f*f+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(da).addScaledVector(ts,d),h}intersectSphere(e,t){Nn.subVectors(e.center,this.origin);const n=Nn.dot(this.direction),r=Nn.dot(Nn)-n*n,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(o=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),n>l||o>r)||((o>n||n!==n)&&(n=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Nn)!==null}intersectTriangle(e,t,n,r,s){ua.subVectors(t,e),ns.subVectors(n,e),fa.crossVectors(ua,ns);let a=this.direction.dot(fa),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Jn.subVectors(this.origin,e);const l=o*this.direction.dot(ns.crossVectors(Jn,ns));if(l<0)return null;const c=o*this.direction.dot(ua.cross(Jn));if(c<0||l+c>a)return null;const u=-o*Jn.dot(fa);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class bi extends mr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ai,this.combine=Kc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Fl=new vt,ui=new _d,is=new Xo,Ol=new z,rs=new z,ss=new z,as=new z,ha=new z,os=new z,kl=new z,ls=new z;class Ut extends Vt{constructor(e=new sn,t=new bi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){os.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],f=s[l];u!==0&&(ha.fromBufferAttribute(f,e),a?os.addScaledVector(ha,u):os.addScaledVector(ha.sub(t),u))}t.add(os)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),is.copy(n.boundingSphere),is.applyMatrix4(s),ui.copy(e.ray).recast(e.near),!(is.containsPoint(ui.origin)===!1&&(ui.intersectSphere(is,Ol)===null||ui.origin.distanceToSquared(Ol)>(e.far-e.near)**2))&&(Fl.copy(s).invert(),ui.copy(e.ray).applyMatrix4(Fl),!(n.boundingBox!==null&&ui.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ui)))}_computeIntersections(e,t,n){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,d=s.groups,h=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,S=d.length;_<S;_++){const m=d[_],p=a[m.materialIndex],w=Math.max(m.start,h.start),R=Math.min(o.count,Math.min(m.start+m.count,h.start+h.count));for(let v=w,T=R;v<T;v+=3){const b=o.getX(v),I=o.getX(v+1),x=o.getX(v+2);r=cs(this,p,e,n,c,u,f,b,I,x),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const _=Math.max(0,h.start),S=Math.min(o.count,h.start+h.count);for(let m=_,p=S;m<p;m+=3){const w=o.getX(m),R=o.getX(m+1),v=o.getX(m+2);r=cs(this,a,e,n,c,u,f,w,R,v),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,S=d.length;_<S;_++){const m=d[_],p=a[m.materialIndex],w=Math.max(m.start,h.start),R=Math.min(l.count,Math.min(m.start+m.count,h.start+h.count));for(let v=w,T=R;v<T;v+=3){const b=v,I=v+1,x=v+2;r=cs(this,p,e,n,c,u,f,b,I,x),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const _=Math.max(0,h.start),S=Math.min(l.count,h.start+h.count);for(let m=_,p=S;m<p;m+=3){const w=m,R=m+1,v=m+2;r=cs(this,a,e,n,c,u,f,w,R,v),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function hf(i,e,t,n,r,s,a,o){let l;if(e.side===Yt?l=n.intersectTriangle(a,s,r,!0,o):l=n.intersectTriangle(r,s,a,e.side===si,o),l===null)return null;ls.copy(o),ls.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(ls);return c<t.near||c>t.far?null:{distance:c,point:ls.clone(),object:i}}function cs(i,e,t,n,r,s,a,o,l,c){i.getVertexPosition(o,rs),i.getVertexPosition(l,ss),i.getVertexPosition(c,as);const u=hf(i,e,t,n,rs,ss,as,kl);if(u){const f=new z;rn.getBarycoord(kl,rs,ss,as,f),r&&(u.uv=rn.getInterpolatedAttribute(r,o,l,c,f,new ze)),s&&(u.uv1=rn.getInterpolatedAttribute(s,o,l,c,f,new ze)),a&&(u.normal=rn.getInterpolatedAttribute(a,o,l,c,f,new z),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new z,materialIndex:0};rn.getNormal(rs,ss,as,d.normal),u.face=d,u.barycoord=f}return u}class pf extends Nt{constructor(e=null,t=1,n=1,r,s,a,o,l,c=At,u=At,f,d){super(null,a,o,l,c,u,r,s,f,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const pa=new z,mf=new z,gf=new Be;class jn{constructor(e=new z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=pa.subVectors(n,t).cross(mf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const r=e.delta(pa),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||gf.getNormalMatrix(e),r=this.coplanarPoint(pa).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const fi=new Xo,_f=new ze(.5,.5),ds=new z;class Yo{constructor(e=new jn,t=new jn,n=new jn,r=new jn,s=new jn,a=new jn){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Tn,n=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],u=s[4],f=s[5],d=s[6],h=s[7],_=s[8],S=s[9],m=s[10],p=s[11],w=s[12],R=s[13],v=s[14],T=s[15];if(r[0].setComponents(c-a,h-u,p-_,T-w).normalize(),r[1].setComponents(c+a,h+u,p+_,T+w).normalize(),r[2].setComponents(c+o,h+f,p+S,T+R).normalize(),r[3].setComponents(c-o,h-f,p-S,T-R).normalize(),n)r[4].setComponents(l,d,m,v).normalize(),r[5].setComponents(c-l,h-d,p-m,T-v).normalize();else if(r[4].setComponents(c-l,h-d,p-m,T-v).normalize(),t===Tn)r[5].setComponents(c+l,h+d,p+m,T+v).normalize();else if(t===Fr)r[5].setComponents(l,d,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),fi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),fi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(fi)}intersectsSprite(e){fi.center.set(0,0,0);const t=_f.distanceTo(e.center);return fi.radius=.7071067811865476+t,fi.applyMatrix4(e.matrixWorld),this.intersectsSphere(fi)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(ds.x=r.normal.x>0?e.max.x:e.min.x,ds.y=r.normal.y>0?e.max.y:e.min.y,ds.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ds)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class xd extends Nt{constructor(e=[],t=Si,n,r,s,a,o,l,c,u){super(e,t,n,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class xf extends Nt{constructor(e,t,n,r,s,a,o,l,c){super(e,t,n,r,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ur extends Nt{constructor(e,t,n=Cn,r,s,a,o=At,l=At,c,u=Vn,f=1){if(u!==Vn&&u!==vi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:f};super(d,r,s,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Go(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class vf extends ur{constructor(e,t=Cn,n=Si,r,s,a=At,o=At,l,c=Vn){const u={width:e,height:e,depth:1},f=[u,u,u,u,u,u];super(e,e,t,n,r,s,a,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class vd extends Nt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class wi extends sn{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],f=[];let d=0,h=0;_("z","y","x",-1,-1,n,t,e,a,s,0),_("z","y","x",1,-1,n,t,-e,a,s,1),_("x","z","y",1,1,e,n,t,r,a,2),_("x","z","y",1,-1,e,n,-t,r,a,3),_("x","y","z",1,-1,e,t,n,r,s,4),_("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new Wt(c,3)),this.setAttribute("normal",new Wt(u,3)),this.setAttribute("uv",new Wt(f,2));function _(S,m,p,w,R,v,T,b,I,x,E){const D=v/I,L=T/x,O=v/2,q=T/2,ne=b/2,H=I+1,j=x+1;let W=0,ee=0;const ae=new z;for(let K=0;K<j;K++){const le=K*L-q;for(let he=0;he<H;he++){const We=he*D-O;ae[S]=We*w,ae[m]=le*R,ae[p]=ne,c.push(ae.x,ae.y,ae.z),ae[S]=0,ae[m]=0,ae[p]=b>0?1:-1,u.push(ae.x,ae.y,ae.z),f.push(he/I),f.push(1-K/x),W+=1}}for(let K=0;K<x;K++)for(let le=0;le<I;le++){const he=d+le+H*K,We=d+le+H*(K+1),st=d+(le+1)+H*(K+1),Ne=d+(le+1)+H*K;l.push(he,We,Ne),l.push(We,st,Ne),ee+=6}o.addGroup(h,ee,E),h+=ee,d+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class qo extends sn{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);const s=[],a=[],o=[],l=[],c=new z,u=new ze;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let f=0,d=3;f<=t;f++,d+=3){const h=n+f/t*r;c.x=e*Math.cos(h),c.y=e*Math.sin(h),a.push(c.x,c.y,c.z),o.push(0,0,1),u.x=(a[d]/e+1)/2,u.y=(a[d+1]/e+1)/2,l.push(u.x,u.y)}for(let f=1;f<=t;f++)s.push(f,f+1,0);this.setIndex(s),this.setAttribute("position",new Wt(a,3)),this.setAttribute("normal",new Wt(o,3)),this.setAttribute("uv",new Wt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qo(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class oi extends sn{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(r),c=o+1,u=l+1,f=e/o,d=t/l,h=[],_=[],S=[],m=[];for(let p=0;p<u;p++){const w=p*d-a;for(let R=0;R<c;R++){const v=R*f-s;_.push(v,-w,0),S.push(0,0,1),m.push(R/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let w=0;w<o;w++){const R=w+c*p,v=w+c*(p+1),T=w+1+c*(p+1),b=w+1+c*p;h.push(R,v,b),h.push(v,T,b)}this.setIndex(h),this.setAttribute("position",new Wt(_,3)),this.setAttribute("normal",new Wt(S,3)),this.setAttribute("uv",new Wt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new oi(e.width,e.height,e.widthSegments,e.heightSegments)}}class $o extends sn{constructor(e=.5,t=1,n=32,r=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:s,thetaLength:a},n=Math.max(3,n),r=Math.max(1,r);const o=[],l=[],c=[],u=[];let f=e;const d=(t-e)/r,h=new z,_=new ze;for(let S=0;S<=r;S++){for(let m=0;m<=n;m++){const p=s+m/n*a;h.x=f*Math.cos(p),h.y=f*Math.sin(p),l.push(h.x,h.y,h.z),c.push(0,0,1),_.x=(h.x/t+1)/2,_.y=(h.y/t+1)/2,u.push(_.x,_.y)}f+=d}for(let S=0;S<r;S++){const m=S*(n+1);for(let p=0;p<n;p++){const w=p+m,R=w,v=w+n+1,T=w+n+2,b=w+1;o.push(R,v,b),o.push(v,T,b)}}this.setIndex(o),this.setAttribute("position",new Wt(l,3)),this.setAttribute("normal",new Wt(c,3)),this.setAttribute("uv",new Wt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $o(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}function fr(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];if(Bl(r))r.isRenderTargetTexture?(ke("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone();else if(Array.isArray(r))if(Bl(r[0])){const s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[t][n]=s}else e[t][n]=r.slice();else e[t][n]=r}}return e}function zt(i){const e={};for(let t=0;t<i.length;t++){const n=fr(i[t]);for(const r in n)e[r]=n[r]}return e}function Bl(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Mf(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Md(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:je.workingColorSpace}const Sf={clone:fr,merge:zt};var yf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,bf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Pn extends mr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=yf,this.fragmentShader=bf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=fr(e.uniforms),this.uniformsGroups=Mf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case"t":this.uniforms[n].value=t[r.value]||null;break;case"c":this.uniforms[n].value=new Je().setHex(r.value);break;case"v2":this.uniforms[n].value=new ze().fromArray(r.value);break;case"v3":this.uniforms[n].value=new z().fromArray(r.value);break;case"v4":this.uniforms[n].value=new St().fromArray(r.value);break;case"m3":this.uniforms[n].value=new Be().fromArray(r.value);break;case"m4":this.uniforms[n].value=new vt().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Ef extends Pn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class er extends mr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Je(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=So,this.normalScale=new ze(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ai,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Tf extends mr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=vu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Af extends mr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const ma={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(zl(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!zl(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function zl(i){try{const e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class wf{constructor(e,t,n){const r=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){o++,s===!1&&r.onStart!==void 0&&r.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,r.onProgress!==void 0&&r.onProgress(u,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,d=c.length;f<d;f+=2){const h=c[f],_=c[f+1];if(h.global&&(h.lastIndex=0),h.test(u))return _}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Rf=new wf;class Ko{constructor(e){this.manager=e!==void 0?e:Rf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Ko.DEFAULT_MATERIAL_NAME="__DEFAULT";const Xi=new WeakMap;class Cf extends Ko{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=ma.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);else{let f=Xi.get(a);f===void 0&&(f=[],Xi.set(a,f)),f.push({onLoad:t,onError:r})}return a}const o=Or("img");function l(){u(),t&&t(this);const f=Xi.get(this)||[];for(let d=0;d<f.length;d++){const h=f[d];h.onLoad&&h.onLoad(this)}Xi.delete(this),s.manager.itemEnd(e)}function c(f){u(),r&&r(f),ma.remove(`image:${e}`);const d=Xi.get(this)||[];for(let h=0;h<d.length;h++){const _=d[h];_.onError&&_.onError(f)}Xi.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),ma.add(`image:${e}`,o),s.manager.itemStart(e),o.src=e,o}}class Pf extends Ko{constructor(e){super(e)}load(e,t,n,r){const s=new Nt,a=new Cf(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}}class Sd extends Vt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Je(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const ga=new vt,Hl=new z,Gl=new z;class If{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ze(512,512),this.mapType=jt,this.map=null,this.mapPass=null,this.matrix=new vt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Yo,this._frameExtents=new ze(1,1),this._viewportCount=1,this._viewports=[new St(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Hl.setFromMatrixPosition(e.matrixWorld),t.position.copy(Hl),Gl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Gl),t.updateMatrixWorld(),ga.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ga,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===Fr||t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ga)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const us=new z,fs=new pr,Sn=new z;class yd extends Vt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new vt,this.projectionMatrix=new vt,this.projectionMatrixInverse=new vt,this.coordinateSystem=Tn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(us,fs,Sn),Sn.x===1&&Sn.y===1&&Sn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(us,fs,Sn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(us,fs,Sn),Sn.x===1&&Sn.y===1&&Sn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(us,fs,Sn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Qn=new z,Vl=new ze,Wl=new ze;class Qt extends yd{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=kr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Lr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return kr*2*Math.atan(Math.tan(Lr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Qn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Qn.x,Qn.y).multiplyScalar(-e/Qn.z),Qn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Qn.x,Qn.y).multiplyScalar(-e/Qn.z)}getViewSize(e,t){return this.getViewBounds(e,Vl,Wl),t.subVectors(Wl,Vl)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Lr*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*n/c,r*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Lf extends If{constructor(){super(new Qt(90,1,.5,500)),this.isPointLightShadow=!0}}class Xl extends Sd{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new Lf}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class bd extends yd{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Df extends Sd{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const Yi=-90,qi=1;class Uf extends Vt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Qt(Yi,qi,e,t);r.layers=this.layers,this.add(r);const s=new Qt(Yi,qi,e,t);s.layers=this.layers,this.add(s);const a=new Qt(Yi,qi,e,t);a.layers=this.layers,this.add(a);const o=new Qt(Yi,qi,e,t);o.layers=this.layers,this.add(o);const l=new Qt(Yi,qi,e,t);l.layers=this.layers,this.add(l);const c=new Qt(Yi,qi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===Tn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Fr)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const S=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=S,e.setRenderTarget(n,5,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(f,d,h),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class Nf extends Qt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Yl=new vt;class Ff{constructor(e,t,n=0,r=1/0){this.ray=new _d(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new Vo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Qe("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Yl.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Yl),this}intersectObject(e,t=!0,n=[]){return bo(e,this,n,t),n.sort(ql),n}intersectObjects(e,t=!0,n=[]){for(let r=0,s=e.length;r<s;r++)bo(e[r],this,n,t);return n.sort(ql),n}}function ql(i,e){return i.distance-e.distance}function bo(i,e,t,n){let r=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(r=!1),r===!0&&n===!0){const s=i.children;for(let a=0,o=s.length;a<o;a++)bo(s[a],e,t,!0)}}const sl=class sl{constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){const s=this.elements;return s[0]=e,s[2]=t,s[1]=n,s[3]=r,this}};sl.prototype.isMatrix2=!0;let $l=sl;function Kl(i,e,t,n){const r=Of(n);switch(t){case ld:return i*e;case dd:return i*e/r.components*r.byteLength;case Fo:return i*e/r.components*r.byteLength;case yi:return i*e*2/r.components*r.byteLength;case Oo:return i*e*2/r.components*r.byteLength;case cd:return i*e*3/r.components*r.byteLength;case fn:return i*e*4/r.components*r.byteLength;case ko:return i*e*4/r.components*r.byteLength;case Ss:case ys:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case bs:case Es:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Xa:case qa:return Math.max(i,16)*Math.max(e,8)/4;case Wa:case Ya:return Math.max(i,8)*Math.max(e,8)/2;case $a:case Ka:case Ja:case Qa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Za:case Rs:case ja:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case eo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case to:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case no:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case io:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case ro:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case so:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case ao:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case oo:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case lo:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case co:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case uo:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case fo:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case ho:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case po:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case mo:case go:case _o:return Math.ceil(i/4)*Math.ceil(e/4)*16;case xo:case vo:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Cs:case Mo:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Of(i){switch(i){case jt:case rd:return{byteLength:1,components:1};case Ur:case sd:case Gn:return{byteLength:2,components:1};case Uo:case No:return{byteLength:2,components:4};case Cn:case Do:case En:return{byteLength:4,components:1};case ad:case od:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Lo}}));typeof window<"u"&&(window.__THREE__?ke("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Lo);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Ed(){let i=null,e=!1,t=null,n=null;function r(s,a){t(s,a),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function kf(i){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,f=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,u),o.onUploadCallback();let h;if(c instanceof Float32Array)h=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)h=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?h=i.HALF_FLOAT:h=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)h=i.SHORT;else if(c instanceof Uint32Array)h=i.UNSIGNED_INT;else if(c instanceof Int32Array)h=i.INT;else if(c instanceof Int8Array)h=i.BYTE;else if(c instanceof Uint8Array)h=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)h=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:h,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,l,c){const u=l.array,f=l.updateRanges;if(i.bindBuffer(c,o),f.length===0)i.bufferSubData(c,0,u);else{f.sort((h,_)=>h.start-_.start);let d=0;for(let h=1;h<f.length;h++){const _=f[d],S=f[h];S.start<=_.start+_.count+1?_.count=Math.max(_.count,S.start+S.count-_.start):(++d,f[d]=S)}f.length=d+1;for(let h=0,_=f.length;h<_;h++){const S=f[h];i.bufferSubData(c,S.start*u.BYTES_PER_ELEMENT,u,S.start,S.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var Bf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,zf=`#ifdef USE_ALPHAHASH
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
#endif`,Hf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Gf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Vf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Wf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Xf=`#ifdef USE_AOMAP
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
#endif`,Yf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,qf=`#ifdef USE_BATCHING
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
#endif`,$f=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Kf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Zf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Jf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Qf=`#ifdef USE_IRIDESCENCE
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
#endif`,jf=`#ifdef USE_BUMPMAP
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
#endif`,eh=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,th=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,nh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ih=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,rh=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,sh=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,ah=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,oh=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,lh=`#define PI 3.141592653589793
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
} // validated`,ch=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,dh=`vec3 transformedNormal = objectNormal;
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
#endif`,uh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,fh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,hh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ph=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,mh="gl_FragColor = linearToOutputTexel( gl_FragColor );",gh=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,_h=`#ifdef USE_ENVMAP
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
#endif`,xh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,vh=`#ifdef USE_ENVMAP
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
#endif`,Mh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Sh=`#ifdef USE_ENVMAP
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
#endif`,yh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,bh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Eh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Th=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ah=`#ifdef USE_GRADIENTMAP
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
}`,wh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Rh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ch=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ph=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Ih=`#ifdef USE_ENVMAP
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
#endif`,Lh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Dh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Uh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Nh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Fh=`PhysicalMaterial material;
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
#endif`,Oh=`uniform sampler2D dfgLUT;
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
}`,kh=`
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
#endif`,Bh=`#if defined( RE_IndirectDiffuse )
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
#endif`,zh=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Hh=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Gh=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Vh=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Wh=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Xh=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Yh=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,qh=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,$h=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Kh=`#if defined( USE_POINTS_UV )
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
#endif`,Zh=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Jh=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Qh=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,jh=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ep=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,tp=`#ifdef USE_MORPHTARGETS
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
#endif`,np=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ip=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,rp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,sp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ap=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,op=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,lp=`#ifdef USE_NORMALMAP
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
#endif`,cp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,dp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,up=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,fp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,hp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,pp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,mp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,gp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,_p=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,xp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,vp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Mp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Sp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,yp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,bp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Ep=`float getShadowMask() {
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
}`,Tp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ap=`#ifdef USE_SKINNING
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
#endif`,wp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Rp=`#ifdef USE_SKINNING
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
#endif`,Cp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Pp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ip=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Lp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Dp=`#ifdef USE_TRANSMISSION
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
#endif`,Up=`#ifdef USE_TRANSMISSION
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
#endif`,Np=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Fp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Op=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,kp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Bp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,zp=`uniform sampler2D t2D;
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
}`,Hp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Vp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Wp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xp=`#include <common>
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
}`,Yp=`#if DEPTH_PACKING == 3200
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
}`,qp=`#define DISTANCE
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
}`,$p=`#define DISTANCE
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
}`,Kp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Zp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jp=`uniform float scale;
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
}`,Qp=`uniform vec3 diffuse;
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
}`,jp=`#include <common>
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
}`,em=`uniform vec3 diffuse;
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
}`,tm=`#define LAMBERT
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
}`,nm=`#define LAMBERT
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
}`,im=`#define MATCAP
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
}`,rm=`#define MATCAP
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
}`,sm=`#define NORMAL
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
}`,am=`#define NORMAL
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
}`,om=`#define PHONG
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
}`,lm=`#define PHONG
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
}`,cm=`#define STANDARD
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
}`,dm=`#define STANDARD
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
}`,um=`#define TOON
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
}`,fm=`#define TOON
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
}`,hm=`uniform float size;
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
}`,pm=`uniform vec3 diffuse;
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
}`,mm=`#include <common>
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
}`,gm=`uniform vec3 color;
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
}`,_m=`uniform float rotation;
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
}`,xm=`uniform vec3 diffuse;
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
}`,Xe={alphahash_fragment:Bf,alphahash_pars_fragment:zf,alphamap_fragment:Hf,alphamap_pars_fragment:Gf,alphatest_fragment:Vf,alphatest_pars_fragment:Wf,aomap_fragment:Xf,aomap_pars_fragment:Yf,batching_pars_vertex:qf,batching_vertex:$f,begin_vertex:Kf,beginnormal_vertex:Zf,bsdfs:Jf,iridescence_fragment:Qf,bumpmap_pars_fragment:jf,clipping_planes_fragment:eh,clipping_planes_pars_fragment:th,clipping_planes_pars_vertex:nh,clipping_planes_vertex:ih,color_fragment:rh,color_pars_fragment:sh,color_pars_vertex:ah,color_vertex:oh,common:lh,cube_uv_reflection_fragment:ch,defaultnormal_vertex:dh,displacementmap_pars_vertex:uh,displacementmap_vertex:fh,emissivemap_fragment:hh,emissivemap_pars_fragment:ph,colorspace_fragment:mh,colorspace_pars_fragment:gh,envmap_fragment:_h,envmap_common_pars_fragment:xh,envmap_pars_fragment:vh,envmap_pars_vertex:Mh,envmap_physical_pars_fragment:Ih,envmap_vertex:Sh,fog_vertex:yh,fog_pars_vertex:bh,fog_fragment:Eh,fog_pars_fragment:Th,gradientmap_pars_fragment:Ah,lightmap_pars_fragment:wh,lights_lambert_fragment:Rh,lights_lambert_pars_fragment:Ch,lights_pars_begin:Ph,lights_toon_fragment:Lh,lights_toon_pars_fragment:Dh,lights_phong_fragment:Uh,lights_phong_pars_fragment:Nh,lights_physical_fragment:Fh,lights_physical_pars_fragment:Oh,lights_fragment_begin:kh,lights_fragment_maps:Bh,lights_fragment_end:zh,lightprobes_pars_fragment:Hh,logdepthbuf_fragment:Gh,logdepthbuf_pars_fragment:Vh,logdepthbuf_pars_vertex:Wh,logdepthbuf_vertex:Xh,map_fragment:Yh,map_pars_fragment:qh,map_particle_fragment:$h,map_particle_pars_fragment:Kh,metalnessmap_fragment:Zh,metalnessmap_pars_fragment:Jh,morphinstance_vertex:Qh,morphcolor_vertex:jh,morphnormal_vertex:ep,morphtarget_pars_vertex:tp,morphtarget_vertex:np,normal_fragment_begin:ip,normal_fragment_maps:rp,normal_pars_fragment:sp,normal_pars_vertex:ap,normal_vertex:op,normalmap_pars_fragment:lp,clearcoat_normal_fragment_begin:cp,clearcoat_normal_fragment_maps:dp,clearcoat_pars_fragment:up,iridescence_pars_fragment:fp,opaque_fragment:hp,packing:pp,premultiplied_alpha_fragment:mp,project_vertex:gp,dithering_fragment:_p,dithering_pars_fragment:xp,roughnessmap_fragment:vp,roughnessmap_pars_fragment:Mp,shadowmap_pars_fragment:Sp,shadowmap_pars_vertex:yp,shadowmap_vertex:bp,shadowmask_pars_fragment:Ep,skinbase_vertex:Tp,skinning_pars_vertex:Ap,skinning_vertex:wp,skinnormal_vertex:Rp,specularmap_fragment:Cp,specularmap_pars_fragment:Pp,tonemapping_fragment:Ip,tonemapping_pars_fragment:Lp,transmission_fragment:Dp,transmission_pars_fragment:Up,uv_pars_fragment:Np,uv_pars_vertex:Fp,uv_vertex:Op,worldpos_vertex:kp,background_vert:Bp,background_frag:zp,backgroundCube_vert:Hp,backgroundCube_frag:Gp,cube_vert:Vp,cube_frag:Wp,depth_vert:Xp,depth_frag:Yp,distance_vert:qp,distance_frag:$p,equirect_vert:Kp,equirect_frag:Zp,linedashed_vert:Jp,linedashed_frag:Qp,meshbasic_vert:jp,meshbasic_frag:em,meshlambert_vert:tm,meshlambert_frag:nm,meshmatcap_vert:im,meshmatcap_frag:rm,meshnormal_vert:sm,meshnormal_frag:am,meshphong_vert:om,meshphong_frag:lm,meshphysical_vert:cm,meshphysical_frag:dm,meshtoon_vert:um,meshtoon_frag:fm,points_vert:hm,points_frag:pm,shadow_vert:mm,shadow_frag:gm,sprite_vert:_m,sprite_frag:xm},ve={common:{diffuse:{value:new Je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Be}},envmap:{envMap:{value:null},envMapRotation:{value:new Be},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Be}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Be}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Be},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Be},normalScale:{value:new ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Be},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Be}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Be}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Be}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new z},probesMax:{value:new z},probesResolution:{value:new z}},points:{diffuse:{value:new Je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0},uvTransform:{value:new Be}},sprite:{diffuse:{value:new Je(16777215)},opacity:{value:1},center:{value:new ze(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}}},bn={basic:{uniforms:zt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.fog]),vertexShader:Xe.meshbasic_vert,fragmentShader:Xe.meshbasic_frag},lambert:{uniforms:zt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new Je(0)},envMapIntensity:{value:1}}]),vertexShader:Xe.meshlambert_vert,fragmentShader:Xe.meshlambert_frag},phong:{uniforms:zt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new Je(0)},specular:{value:new Je(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphong_vert,fragmentShader:Xe.meshphong_frag},standard:{uniforms:zt([ve.common,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.roughnessmap,ve.metalnessmap,ve.fog,ve.lights,{emissive:{value:new Je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag},toon:{uniforms:zt([ve.common,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.gradientmap,ve.fog,ve.lights,{emissive:{value:new Je(0)}}]),vertexShader:Xe.meshtoon_vert,fragmentShader:Xe.meshtoon_frag},matcap:{uniforms:zt([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,{matcap:{value:null}}]),vertexShader:Xe.meshmatcap_vert,fragmentShader:Xe.meshmatcap_frag},points:{uniforms:zt([ve.points,ve.fog]),vertexShader:Xe.points_vert,fragmentShader:Xe.points_frag},dashed:{uniforms:zt([ve.common,ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xe.linedashed_vert,fragmentShader:Xe.linedashed_frag},depth:{uniforms:zt([ve.common,ve.displacementmap]),vertexShader:Xe.depth_vert,fragmentShader:Xe.depth_frag},normal:{uniforms:zt([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,{opacity:{value:1}}]),vertexShader:Xe.meshnormal_vert,fragmentShader:Xe.meshnormal_frag},sprite:{uniforms:zt([ve.sprite,ve.fog]),vertexShader:Xe.sprite_vert,fragmentShader:Xe.sprite_frag},background:{uniforms:{uvTransform:{value:new Be},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xe.background_vert,fragmentShader:Xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Be}},vertexShader:Xe.backgroundCube_vert,fragmentShader:Xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xe.cube_vert,fragmentShader:Xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xe.equirect_vert,fragmentShader:Xe.equirect_frag},distance:{uniforms:zt([ve.common,ve.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xe.distance_vert,fragmentShader:Xe.distance_frag},shadow:{uniforms:zt([ve.lights,ve.fog,{color:{value:new Je(0)},opacity:{value:1}}]),vertexShader:Xe.shadow_vert,fragmentShader:Xe.shadow_frag}};bn.physical={uniforms:zt([bn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Be},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Be},clearcoatNormalScale:{value:new ze(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Be},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Be},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Be},sheen:{value:0},sheenColor:{value:new Je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Be},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Be},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Be},transmissionSamplerSize:{value:new ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Be},attenuationDistance:{value:0},attenuationColor:{value:new Je(0)},specularColor:{value:new Je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Be},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Be},anisotropyVector:{value:new ze},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Be}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag};const hs={r:0,b:0,g:0},vm=new vt,Td=new Be;Td.set(-1,0,0,0,1,0,0,0,1);function Mm(i,e,t,n,r,s){const a=new Je(0);let o=r===!0?0:1,l,c,u=null,f=0,d=null;function h(w){let R=w.isScene===!0?w.background:null;if(R&&R.isTexture){const v=w.backgroundBlurriness>0;R=e.get(R,v)}return R}function _(w){let R=!1;const v=h(w);v===null?m(a,o):v&&v.isColor&&(m(v,1),R=!0);const T=i.xr.getEnvironmentBlendMode();T==="additive"?t.buffers.color.setClear(0,0,0,1,s):T==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(i.autoClear||R)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function S(w,R){const v=h(R);v&&(v.isCubeTexture||v.mapping===Os)?(c===void 0&&(c=new Ut(new wi(1,1,1),new Pn({name:"BackgroundCubeMaterial",uniforms:fr(bn.backgroundCube.uniforms),vertexShader:bn.backgroundCube.vertexShader,fragmentShader:bn.backgroundCube.fragmentShader,side:Yt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,b,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(vm.makeRotationFromEuler(R.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Td),c.material.toneMapped=je.getTransfer(v.colorSpace)!==dt,(u!==v||f!==v.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,u=v,f=v.version,d=i.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new Ut(new oi(2,2),new Pn({name:"BackgroundMaterial",uniforms:fr(bn.background.uniforms),vertexShader:bn.background.vertexShader,fragmentShader:bn.background.fragmentShader,side:si,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,l.material.toneMapped=je.getTransfer(v.colorSpace)!==dt,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||f!==v.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,u=v,f=v.version,d=i.toneMapping),l.layers.enableAll(),w.unshift(l,l.geometry,l.material,0,0,null))}function m(w,R){w.getRGB(hs,Md(i)),t.buffers.color.setClear(hs.r,hs.g,hs.b,R,s)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(w,R=1){a.set(w),o=R,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(w){o=w,m(a,o)},render:_,addToRenderList:S,dispose:p}}function Sm(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=d(null);let s=r,a=!1;function o(L,O,q,ne,H){let j=!1;const W=f(L,ne,q,O);s!==W&&(s=W,c(s.object)),j=h(L,ne,q,H),j&&_(L,ne,q,H),H!==null&&e.update(H,i.ELEMENT_ARRAY_BUFFER),(j||a)&&(a=!1,v(L,O,q,ne),H!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function l(){return i.createVertexArray()}function c(L){return i.bindVertexArray(L)}function u(L){return i.deleteVertexArray(L)}function f(L,O,q,ne){const H=ne.wireframe===!0;let j=n[O.id];j===void 0&&(j={},n[O.id]=j);const W=L.isInstancedMesh===!0?L.id:0;let ee=j[W];ee===void 0&&(ee={},j[W]=ee);let ae=ee[q.id];ae===void 0&&(ae={},ee[q.id]=ae);let K=ae[H];return K===void 0&&(K=d(l()),ae[H]=K),K}function d(L){const O=[],q=[],ne=[];for(let H=0;H<t;H++)O[H]=0,q[H]=0,ne[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:q,attributeDivisors:ne,object:L,attributes:{},index:null}}function h(L,O,q,ne){const H=s.attributes,j=O.attributes;let W=0;const ee=q.getAttributes();for(const ae in ee)if(ee[ae].location>=0){const le=H[ae];let he=j[ae];if(he===void 0&&(ae==="instanceMatrix"&&L.instanceMatrix&&(he=L.instanceMatrix),ae==="instanceColor"&&L.instanceColor&&(he=L.instanceColor)),le===void 0||le.attribute!==he||he&&le.data!==he.data)return!0;W++}return s.attributesNum!==W||s.index!==ne}function _(L,O,q,ne){const H={},j=O.attributes;let W=0;const ee=q.getAttributes();for(const ae in ee)if(ee[ae].location>=0){let le=j[ae];le===void 0&&(ae==="instanceMatrix"&&L.instanceMatrix&&(le=L.instanceMatrix),ae==="instanceColor"&&L.instanceColor&&(le=L.instanceColor));const he={};he.attribute=le,le&&le.data&&(he.data=le.data),H[ae]=he,W++}s.attributes=H,s.attributesNum=W,s.index=ne}function S(){const L=s.newAttributes;for(let O=0,q=L.length;O<q;O++)L[O]=0}function m(L){p(L,0)}function p(L,O){const q=s.newAttributes,ne=s.enabledAttributes,H=s.attributeDivisors;q[L]=1,ne[L]===0&&(i.enableVertexAttribArray(L),ne[L]=1),H[L]!==O&&(i.vertexAttribDivisor(L,O),H[L]=O)}function w(){const L=s.newAttributes,O=s.enabledAttributes;for(let q=0,ne=O.length;q<ne;q++)O[q]!==L[q]&&(i.disableVertexAttribArray(q),O[q]=0)}function R(L,O,q,ne,H,j,W){W===!0?i.vertexAttribIPointer(L,O,q,H,j):i.vertexAttribPointer(L,O,q,ne,H,j)}function v(L,O,q,ne){S();const H=ne.attributes,j=q.getAttributes(),W=O.defaultAttributeValues;for(const ee in j){const ae=j[ee];if(ae.location>=0){let K=H[ee];if(K===void 0&&(ee==="instanceMatrix"&&L.instanceMatrix&&(K=L.instanceMatrix),ee==="instanceColor"&&L.instanceColor&&(K=L.instanceColor)),K!==void 0){const le=K.normalized,he=K.itemSize,We=e.get(K);if(We===void 0)continue;const st=We.buffer,Ne=We.type,C=We.bytesPerElement,P=Ne===i.INT||Ne===i.UNSIGNED_INT||K.gpuType===Do;if(K.isInterleavedBufferAttribute){const y=K.data,U=y.stride,Q=K.offset;if(y.isInstancedInterleavedBuffer){for(let $=0;$<ae.locationSize;$++)p(ae.location+$,y.meshPerAttribute);L.isInstancedMesh!==!0&&ne._maxInstanceCount===void 0&&(ne._maxInstanceCount=y.meshPerAttribute*y.count)}else for(let $=0;$<ae.locationSize;$++)m(ae.location+$);i.bindBuffer(i.ARRAY_BUFFER,st);for(let $=0;$<ae.locationSize;$++)R(ae.location+$,he/ae.locationSize,Ne,le,U*C,(Q+he/ae.locationSize*$)*C,P)}else{if(K.isInstancedBufferAttribute){for(let y=0;y<ae.locationSize;y++)p(ae.location+y,K.meshPerAttribute);L.isInstancedMesh!==!0&&ne._maxInstanceCount===void 0&&(ne._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let y=0;y<ae.locationSize;y++)m(ae.location+y);i.bindBuffer(i.ARRAY_BUFFER,st);for(let y=0;y<ae.locationSize;y++)R(ae.location+y,he/ae.locationSize,Ne,le,he*C,he/ae.locationSize*y*C,P)}}else if(W!==void 0){const le=W[ee];if(le!==void 0)switch(le.length){case 2:i.vertexAttrib2fv(ae.location,le);break;case 3:i.vertexAttrib3fv(ae.location,le);break;case 4:i.vertexAttrib4fv(ae.location,le);break;default:i.vertexAttrib1fv(ae.location,le)}}}}w()}function T(){E();for(const L in n){const O=n[L];for(const q in O){const ne=O[q];for(const H in ne){const j=ne[H];for(const W in j)u(j[W].object),delete j[W];delete ne[H]}}delete n[L]}}function b(L){if(n[L.id]===void 0)return;const O=n[L.id];for(const q in O){const ne=O[q];for(const H in ne){const j=ne[H];for(const W in j)u(j[W].object),delete j[W];delete ne[H]}}delete n[L.id]}function I(L){for(const O in n){const q=n[O];for(const ne in q){const H=q[ne];if(H[L.id]===void 0)continue;const j=H[L.id];for(const W in j)u(j[W].object),delete j[W];delete H[L.id]}}}function x(L){for(const O in n){const q=n[O],ne=L.isInstancedMesh===!0?L.id:0,H=q[ne];if(H!==void 0){for(const j in H){const W=H[j];for(const ee in W)u(W[ee].object),delete W[ee];delete H[j]}delete q[ne],Object.keys(q).length===0&&delete n[O]}}}function E(){D(),a=!0,s!==r&&(s=r,c(s.object))}function D(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:E,resetDefaultState:D,dispose:T,releaseStatesOfGeometry:b,releaseStatesOfObject:x,releaseStatesOfProgram:I,initAttributes:S,enableAttribute:m,disableUnusedAttributes:w}}function ym(i,e,t){let n;function r(l){n=l}function s(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,u){u!==0&&(i.drawArraysInstanced(n,l,c,u),t.update(c,n,u))}function o(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let d=0;for(let h=0;h<u;h++)d+=c[h];t.update(d,n,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function bm(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(I){return!(I!==fn&&n.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(I){const x=I===Gn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==jt&&n.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==En&&!x)}function l(I){if(I==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(ke("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&d===!1&&ke("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const h=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),w=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),R=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=i.getParameter(i.MAX_SAMPLES),b=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:h,maxVertexTextures:_,maxTextureSize:S,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:w,maxVaryings:R,maxFragmentUniforms:v,maxSamples:T,samples:b}}function Em(i){const e=this;let t=null,n=0,r=!1,s=!1;const a=new jn,o=new Be,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const h=f.length!==0||d||n!==0||r;return r=d,n=f.length,h},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){t=u(f,d,0)},this.setState=function(f,d,h){const _=f.clippingPlanes,S=f.clipIntersection,m=f.clipShadows,p=i.get(f);if(!r||_===null||_.length===0||s&&!m)s?u(null):c();else{const w=s?0:n,R=w*4;let v=p.clippingState||null;l.value=v,v=u(_,d,R,h);for(let T=0;T!==R;++T)v[T]=t[T];p.clippingState=v,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(f,d,h,_){const S=f!==null?f.length:0;let m=null;if(S!==0){if(m=l.value,_!==!0||m===null){const p=h+S*4,w=d.matrixWorldInverse;o.getNormalMatrix(w),(m===null||m.length<p)&&(m=new Float32Array(p));for(let R=0,v=h;R!==S;++R,v+=4)a.copy(f[R]).applyMatrix4(w,o),a.normal.toArray(m,v),m[v+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,m}}const ii=4,Zl=[.125,.215,.35,.446,.526,.582],_i=20,Tm=256,Er=new bd,Jl=new Je;let _a=null,xa=0,va=0,Ma=!1;const Am=new z;class Ql{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,s={}){const{size:a=256,position:o=Am}=s;_a=this._renderer.getRenderTarget(),xa=this._renderer.getActiveCubeFace(),va=this._renderer.getActiveMipmapLevel(),Ma=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,r,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=tc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ec(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(_a,xa,va),this._renderer.xr.enabled=Ma,e.scissorTest=!1,$i(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Si||e.mapping===dr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),_a=this._renderer.getRenderTarget(),xa=this._renderer.getActiveCubeFace(),va=this._renderer.getActiveMipmapLevel(),Ma=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Rt,minFilter:Rt,generateMipmaps:!1,type:Gn,format:fn,colorSpace:Ps,depthBuffer:!1},r=jl(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=jl(e,t,n);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=wm(s)),this._blurMaterial=Cm(s,e,t),this._ggxMaterial=Rm(s,e,t)}return r}_compileMaterial(e){const t=new Ut(new sn,e);this._renderer.compile(t,Er)}_sceneToCubeUV(e,t,n,r,s){const l=new Qt(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,h=f.toneMapping;f.getClearColor(Jl),f.toneMapping=An,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ut(new wi,new bi({name:"PMREM.Background",side:Yt,depthWrite:!1,depthTest:!1})));const S=this._backgroundBox,m=S.material;let p=!1;const w=e.background;w?w.isColor&&(m.color.copy(w),e.background=null,p=!0):(m.color.copy(Jl),p=!0);for(let R=0;R<6;R++){const v=R%3;v===0?(l.up.set(0,c[R],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[R],s.y,s.z)):v===1?(l.up.set(0,0,c[R]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[R],s.z)):(l.up.set(0,c[R],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[R]));const T=this._cubeSize;$i(r,v*T,R>2?T:0,T,T),f.setRenderTarget(r),p&&f.render(S,l),f.render(e,l)}f.toneMapping=h,f.autoClear=d,e.background=w}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===Si||e.mapping===dr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=tc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ec());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;$i(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Er)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const l=a.uniforms,c=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),f=Math.sqrt(c*c-u*u),d=0+c*1.25,h=f*d,{_lodMax:_}=this,S=this._sizeLods[n],m=3*S*(n>_-ii?n-_+ii:0),p=4*(this._cubeSize-S);l.envMap.value=e.texture,l.roughness.value=h,l.mipInt.value=_-t,$i(s,m,p,3*S,2*S),r.setRenderTarget(s),r.render(o,Er),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=_-n,$i(e,m,p,3*S,2*S),r.setRenderTarget(e),r.render(o,Er)}_blur(e,t,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,"latitudinal",s),this._halfBlur(a,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Qe("blur direction must be either latitudinal or longitudinal!");const u=3,f=this._lodMeshes[r];f.material=c;const d=c.uniforms,h=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*h):2*Math.PI/(2*_i-1),S=s/_,m=isFinite(s)?1+Math.floor(u*S):_i;m>_i&&ke(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${_i}`);const p=[];let w=0;for(let I=0;I<_i;++I){const x=I/S,E=Math.exp(-x*x/2);p.push(E),I===0?w+=E:I<m&&(w+=2*E)}for(let I=0;I<p.length;I++)p[I]=p[I]/w;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:R}=this;d.dTheta.value=_,d.mipInt.value=R-n;const v=this._sizeLods[r],T=3*v*(r>R-ii?r-R+ii:0),b=4*(this._cubeSize-v);$i(t,T,b,3*v,2*v),l.setRenderTarget(t),l.render(f,Er)}}function wm(i){const e=[],t=[],n=[];let r=i;const s=i-ii+1+Zl.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let l=1/o;a>i-ii?l=Zl[a-i+ii-1]:a===0&&(l=0),t.push(l);const c=1/(o-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],h=6,_=6,S=3,m=2,p=1,w=new Float32Array(S*_*h),R=new Float32Array(m*_*h),v=new Float32Array(p*_*h);for(let b=0;b<h;b++){const I=b%3*2/3-1,x=b>2?0:-1,E=[I,x,0,I+2/3,x,0,I+2/3,x+1,0,I,x,0,I+2/3,x+1,0,I,x+1,0];w.set(E,S*_*b),R.set(d,m*_*b);const D=[b,b,b,b,b,b];v.set(D,p*_*b)}const T=new sn;T.setAttribute("position",new hn(w,S)),T.setAttribute("uv",new hn(R,m)),T.setAttribute("faceIndex",new hn(v,p)),n.push(new Ut(T,null)),r>ii&&r--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function jl(i,e,t){const n=new wn(i,e,t);return n.texture.mapping=Os,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function $i(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function Rm(i,e,t){return new Pn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Tm,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ks(),fragmentShader:`

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
		`,blending:Bn,depthTest:!1,depthWrite:!1})}function Cm(i,e,t){const n=new Float32Array(_i),r=new z(0,1,0);return new Pn({name:"SphericalGaussianBlur",defines:{n:_i,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ks(),fragmentShader:`

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
		`,blending:Bn,depthTest:!1,depthWrite:!1})}function ec(){return new Pn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ks(),fragmentShader:`

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
		`,blending:Bn,depthTest:!1,depthWrite:!1})}function tc(){return new Pn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ks(),fragmentShader:`

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
	`}class Ad extends wn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new xd(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new wi(5,5,5),s=new Pn({name:"CubemapFromEquirect",uniforms:fr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Yt,blending:Bn});s.uniforms.tEquirect.value=t;const a=new Ut(r,s),o=t.minFilter;return t.minFilter===xi&&(t.minFilter=Rt),new Uf(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}}function Pm(i){let e=new WeakMap,t=new WeakMap,n=null;function r(d,h=!1){return d==null?null:h?a(d):s(d)}function s(d){if(d&&d.isTexture){const h=d.mapping;if(h===Vs||h===Ws)if(e.has(d)){const _=e.get(d).texture;return o(_,d.mapping)}else{const _=d.image;if(_&&_.height>0){const S=new Ad(_.height);return S.fromEquirectangularTexture(i,d),e.set(d,S),d.addEventListener("dispose",c),o(S.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture){const h=d.mapping,_=h===Vs||h===Ws,S=h===Si||h===dr;if(_||S){let m=t.get(d);const p=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==p)return n===null&&(n=new Ql(i)),m=_?n.fromEquirectangular(d,m):n.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),m.texture;if(m!==void 0)return m.texture;{const w=d.image;return _&&w&&w.height>0||S&&w&&l(w)?(n===null&&(n=new Ql(i)),m=_?n.fromEquirectangular(d):n.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),d.addEventListener("dispose",u),m.texture):null}}}return d}function o(d,h){return h===Vs?d.mapping=Si:h===Ws&&(d.mapping=dr),d}function l(d){let h=0;const _=6;for(let S=0;S<_;S++)d[S]!==void 0&&h++;return h===_}function c(d){const h=d.target;h.removeEventListener("dispose",c);const _=e.get(h);_!==void 0&&(e.delete(h),_.dispose())}function u(d){const h=d.target;h.removeEventListener("dispose",u);const _=t.get(h);_!==void 0&&(t.delete(h),_.dispose())}function f(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:f}}function Im(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const r=i.getExtension(n);return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&sr("WebGLRenderer: "+n+" extension not supported."),r}}}function Lm(i,e,t,n){const r={},s=new WeakMap;function a(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const _ in d.attributes)e.remove(d.attributes[_]);d.removeEventListener("dispose",a),delete r[d.id];const h=s.get(d);h&&(e.remove(h),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(f,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,t.memory.geometries++),d}function l(f){const d=f.attributes;for(const h in d)e.update(d[h],i.ARRAY_BUFFER)}function c(f){const d=[],h=f.index,_=f.attributes.position;let S=0;if(_===void 0)return;if(h!==null){const w=h.array;S=h.version;for(let R=0,v=w.length;R<v;R+=3){const T=w[R+0],b=w[R+1],I=w[R+2];d.push(T,b,b,I,I,T)}}else{const w=_.array;S=_.version;for(let R=0,v=w.length/3-1;R<v;R+=3){const T=R+0,b=R+1,I=R+2;d.push(T,b,b,I,I,T)}}const m=new(_.count>=65535?md:pd)(d,1);m.version=S;const p=s.get(f);p&&e.remove(p),s.set(f,m)}function u(f){const d=s.get(f);if(d){const h=f.index;h!==null&&d.version<h.version&&c(f)}else c(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function Dm(i,e,t){let n;function r(f){n=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function l(f,d){i.drawElements(n,d,s,f*a),t.update(d,n,1)}function c(f,d,h){h!==0&&(i.drawElementsInstanced(n,d,s,f*a,h),t.update(d,n,h))}function u(f,d,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,s,f,0,h);let S=0;for(let m=0;m<h;m++)S+=d[m];t.update(S,n,1)}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function Um(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(s/3);break;case i.LINES:t.lines+=o*(s/2);break;case i.LINE_STRIP:t.lines+=o*(s-1);break;case i.LINE_LOOP:t.lines+=o*s;break;case i.POINTS:t.points+=o*s;break;default:Qe("WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function Nm(i,e,t){const n=new WeakMap,r=new St;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0;let d=n.get(o);if(d===void 0||d.count!==f){let D=function(){x.dispose(),n.delete(o),o.removeEventListener("dispose",D)};var h=D;d!==void 0&&d.texture.dispose();const _=o.morphAttributes.position!==void 0,S=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],w=o.morphAttributes.normal||[],R=o.morphAttributes.color||[];let v=0;_===!0&&(v=1),S===!0&&(v=2),m===!0&&(v=3);let T=o.attributes.position.count*v,b=1;T>e.maxTextureSize&&(b=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const I=new Float32Array(T*b*4*f),x=new fd(I,T,b,f);x.type=En,x.needsUpdate=!0;const E=v*4;for(let L=0;L<f;L++){const O=p[L],q=w[L],ne=R[L],H=T*b*4*L;for(let j=0;j<O.count;j++){const W=j*E;_===!0&&(r.fromBufferAttribute(O,j),I[H+W+0]=r.x,I[H+W+1]=r.y,I[H+W+2]=r.z,I[H+W+3]=0),S===!0&&(r.fromBufferAttribute(q,j),I[H+W+4]=r.x,I[H+W+5]=r.y,I[H+W+6]=r.z,I[H+W+7]=0),m===!0&&(r.fromBufferAttribute(ne,j),I[H+W+8]=r.x,I[H+W+9]=r.y,I[H+W+10]=r.z,I[H+W+11]=ne.itemSize===4?r.w:1)}}d={count:f,texture:x,size:new ze(T,b)},n.set(o,d),o.addEventListener("dispose",D)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let _=0;for(let m=0;m<c.length;m++)_+=c[m];const S=o.morphTargetsRelative?1:1-_;l.getUniforms().setValue(i,"morphTargetBaseInfluence",S),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:s}}function Fm(i,e,t,n,r){let s=new WeakMap;function a(c){const u=r.render.frame,f=c.geometry,d=e.get(c,f);if(s.get(d)!==u&&(e.update(d),s.set(d,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==u&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,u))),c.isSkinnedMesh){const h=c.skeleton;s.get(h)!==u&&(h.update(),s.set(h,u))}return d}function o(){s=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}const Om={[Zc]:"LINEAR_TONE_MAPPING",[Jc]:"REINHARD_TONE_MAPPING",[Qc]:"CINEON_TONE_MAPPING",[jc]:"ACES_FILMIC_TONE_MAPPING",[td]:"AGX_TONE_MAPPING",[nd]:"NEUTRAL_TONE_MAPPING",[ed]:"CUSTOM_TONE_MAPPING"};function km(i,e,t,n,r,s){const a=new wn(e,t,{type:i,depthBuffer:r,stencilBuffer:s,samples:n?4:0,depthTexture:r?new ur(e,t):void 0}),o=new wn(e,t,{type:Gn,depthBuffer:!1,stencilBuffer:!1}),l=new sn;l.setAttribute("position",new Wt([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new Wt([0,2,0,0,2,0],2));const c=new Ef({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new Ut(l,c),f=new bd(-1,1,1,-1,0,1);let d=null,h=null,_=!1,S,m=null,p=[],w=!1;this.setSize=function(R,v){a.setSize(R,v),o.setSize(R,v);for(let T=0;T<p.length;T++){const b=p[T];b.setSize&&b.setSize(R,v)}},this.setEffects=function(R){p=R,w=p.length>0&&p[0].isRenderPass===!0;const v=a.width,T=a.height;for(let b=0;b<p.length;b++){const I=p[b];I.setSize&&I.setSize(v,T)}},this.begin=function(R,v){if(_||R.toneMapping===An&&p.length===0)return!1;if(m=v,v!==null){const T=v.width,b=v.height;(a.width!==T||a.height!==b)&&this.setSize(T,b)}return w===!1&&R.setRenderTarget(a),S=R.toneMapping,R.toneMapping=An,!0},this.hasRenderPass=function(){return w},this.end=function(R,v){R.toneMapping=S,_=!0;let T=a,b=o;for(let I=0;I<p.length;I++){const x=p[I];if(x.enabled!==!1&&(x.render(R,b,T,v),x.needsSwap!==!1)){const E=T;T=b,b=E}}if(d!==R.outputColorSpace||h!==R.toneMapping){d=R.outputColorSpace,h=R.toneMapping,c.defines={},je.getTransfer(d)===dt&&(c.defines.SRGB_TRANSFER="");const I=Om[h];I&&(c.defines[I]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=T.texture,R.setRenderTarget(m),R.render(u,f),m=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){a.depthTexture&&a.depthTexture.dispose(),a.dispose(),o.dispose(),l.dispose(),c.dispose()}}const wd=new Nt,Eo=new ur(1,1),Rd=new fd,Cd=new Qu,Pd=new xd,nc=[],ic=[],rc=new Float32Array(16),sc=new Float32Array(9),ac=new Float32Array(4);function gr(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=nc[r];if(s===void 0&&(s=new Float32Array(r),nc[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}function It(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Lt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Bs(i,e){let t=ic[e];t===void 0&&(t=new Int32Array(e),ic[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Bm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function zm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;i.uniform2fv(this.addr,e),Lt(t,e)}}function Hm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(It(t,e))return;i.uniform3fv(this.addr,e),Lt(t,e)}}function Gm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;i.uniform4fv(this.addr,e),Lt(t,e)}}function Vm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Lt(t,e)}else{if(It(t,n))return;ac.set(n),i.uniformMatrix2fv(this.addr,!1,ac),Lt(t,n)}}function Wm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Lt(t,e)}else{if(It(t,n))return;sc.set(n),i.uniformMatrix3fv(this.addr,!1,sc),Lt(t,n)}}function Xm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Lt(t,e)}else{if(It(t,n))return;rc.set(n),i.uniformMatrix4fv(this.addr,!1,rc),Lt(t,n)}}function Ym(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function qm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;i.uniform2iv(this.addr,e),Lt(t,e)}}function $m(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(It(t,e))return;i.uniform3iv(this.addr,e),Lt(t,e)}}function Km(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;i.uniform4iv(this.addr,e),Lt(t,e)}}function Zm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Jm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;i.uniform2uiv(this.addr,e),Lt(t,e)}}function Qm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(It(t,e))return;i.uniform3uiv(this.addr,e),Lt(t,e)}}function jm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;i.uniform4uiv(this.addr,e),Lt(t,e)}}function eg(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(Eo.compareFunction=t.isReversedDepthBuffer()?zo:Bo,s=Eo):s=wd,t.setTexture2D(e||s,r)}function tg(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Cd,r)}function ng(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Pd,r)}function ig(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Rd,r)}function rg(i){switch(i){case 5126:return Bm;case 35664:return zm;case 35665:return Hm;case 35666:return Gm;case 35674:return Vm;case 35675:return Wm;case 35676:return Xm;case 5124:case 35670:return Ym;case 35667:case 35671:return qm;case 35668:case 35672:return $m;case 35669:case 35673:return Km;case 5125:return Zm;case 36294:return Jm;case 36295:return Qm;case 36296:return jm;case 35678:case 36198:case 36298:case 36306:case 35682:return eg;case 35679:case 36299:case 36307:return tg;case 35680:case 36300:case 36308:case 36293:return ng;case 36289:case 36303:case 36311:case 36292:return ig}}function sg(i,e){i.uniform1fv(this.addr,e)}function ag(i,e){const t=gr(e,this.size,2);i.uniform2fv(this.addr,t)}function og(i,e){const t=gr(e,this.size,3);i.uniform3fv(this.addr,t)}function lg(i,e){const t=gr(e,this.size,4);i.uniform4fv(this.addr,t)}function cg(i,e){const t=gr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function dg(i,e){const t=gr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function ug(i,e){const t=gr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function fg(i,e){i.uniform1iv(this.addr,e)}function hg(i,e){i.uniform2iv(this.addr,e)}function pg(i,e){i.uniform3iv(this.addr,e)}function mg(i,e){i.uniform4iv(this.addr,e)}function gg(i,e){i.uniform1uiv(this.addr,e)}function _g(i,e){i.uniform2uiv(this.addr,e)}function xg(i,e){i.uniform3uiv(this.addr,e)}function vg(i,e){i.uniform4uiv(this.addr,e)}function Mg(i,e,t){const n=this.cache,r=e.length,s=Bs(t,r);It(n,s)||(i.uniform1iv(this.addr,s),Lt(n,s));let a;this.type===i.SAMPLER_2D_SHADOW?a=Eo:a=wd;for(let o=0;o!==r;++o)t.setTexture2D(e[o]||a,s[o])}function Sg(i,e,t){const n=this.cache,r=e.length,s=Bs(t,r);It(n,s)||(i.uniform1iv(this.addr,s),Lt(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Cd,s[a])}function yg(i,e,t){const n=this.cache,r=e.length,s=Bs(t,r);It(n,s)||(i.uniform1iv(this.addr,s),Lt(n,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Pd,s[a])}function bg(i,e,t){const n=this.cache,r=e.length,s=Bs(t,r);It(n,s)||(i.uniform1iv(this.addr,s),Lt(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Rd,s[a])}function Eg(i){switch(i){case 5126:return sg;case 35664:return ag;case 35665:return og;case 35666:return lg;case 35674:return cg;case 35675:return dg;case 35676:return ug;case 5124:case 35670:return fg;case 35667:case 35671:return hg;case 35668:case 35672:return pg;case 35669:case 35673:return mg;case 5125:return gg;case 36294:return _g;case 36295:return xg;case 36296:return vg;case 35678:case 36198:case 36298:case 36306:case 35682:return Mg;case 35679:case 36299:case 36307:return Sg;case 35680:case 36300:case 36308:case 36293:return yg;case 36289:case 36303:case 36311:case 36292:return bg}}class Tg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=rg(t.type)}}class Ag{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Eg(t.type)}}class wg{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],n)}}}const Sa=/(\w+)(\])?(\[|\.)?/g;function oc(i,e){i.seq.push(e),i.map[e.id]=e}function Rg(i,e,t){const n=i.name,r=n.length;for(Sa.lastIndex=0;;){const s=Sa.exec(n),a=Sa.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){oc(t,c===void 0?new Tg(o,i,e):new Ag(o,i,e));break}else{let f=t.map[o];f===void 0&&(f=new wg(o),oc(t,f)),t=f}}}class Ts{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);Rg(o,l,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&n.push(a)}return n}}function lc(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Cg=37297;let Pg=0;function Ig(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const cc=new Be;function Lg(i){je._getMatrix(cc,je.workingColorSpace,i);const e=`mat3( ${cc.elements.map(t=>t.toFixed(4))} )`;switch(je.getTransfer(i)){case Is:return[e,"LinearTransferOETF"];case dt:return[e,"sRGBTransferOETF"];default:return ke("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function dc(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=(i.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+Ig(i.getShaderSource(e),o)}else return s}function Dg(i,e){const t=Lg(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const Ug={[Zc]:"Linear",[Jc]:"Reinhard",[Qc]:"Cineon",[jc]:"ACESFilmic",[td]:"AgX",[nd]:"Neutral",[ed]:"Custom"};function Ng(i,e){const t=Ug[e];return t===void 0?(ke("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ps=new z;function Fg(){je.getLuminanceCoefficients(ps);const i=ps.x.toFixed(4),e=ps.y.toFixed(4),t=ps.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Og(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ir).join(`
`)}function kg(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Bg(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Ir(i){return i!==""}function uc(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function fc(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const zg=/^[ \t]*#include +<([\w\d./]+)>/gm;function To(i){return i.replace(zg,Gg)}const Hg=new Map;function Gg(i,e){let t=Xe[e];if(t===void 0){const n=Hg.get(e);if(n!==void 0)t=Xe[n],ke('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return To(t)}const Vg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function hc(i){return i.replace(Vg,Wg)}function Wg(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function pc(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}const Xg={[Ms]:"SHADOWMAP_TYPE_PCF",[Pr]:"SHADOWMAP_TYPE_VSM"};function Yg(i){return Xg[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const qg={[Si]:"ENVMAP_TYPE_CUBE",[dr]:"ENVMAP_TYPE_CUBE",[Os]:"ENVMAP_TYPE_CUBE_UV"};function $g(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":qg[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const Kg={[dr]:"ENVMAP_MODE_REFRACTION"};function Zg(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Kg[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Jg={[Kc]:"ENVMAP_BLENDING_MULTIPLY",[gu]:"ENVMAP_BLENDING_MIX",[_u]:"ENVMAP_BLENDING_ADD"};function Qg(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Jg[i.combine]||"ENVMAP_BLENDING_NONE"}function jg(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function e_(i,e,t,n){const r=i.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=Yg(t),c=$g(t),u=Zg(t),f=Qg(t),d=jg(t),h=Og(t),_=kg(s),S=r.createProgram();let m,p,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Ir).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Ir).join(`
`),p.length>0&&(p+=`
`)):(m=[pc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ir).join(`
`),p=[pc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==An?"#define TONE_MAPPING":"",t.toneMapping!==An?Xe.tonemapping_pars_fragment:"",t.toneMapping!==An?Ng("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Xe.colorspace_pars_fragment,Dg("linearToOutputTexel",t.outputColorSpace),Fg(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ir).join(`
`)),a=To(a),a=uc(a,t),a=fc(a,t),o=To(o),o=uc(o,t),o=fc(o,t),a=hc(a),o=hc(o),t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,m=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===vl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===vl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const R=w+m+a,v=w+p+o,T=lc(r,r.VERTEX_SHADER,R),b=lc(r,r.FRAGMENT_SHADER,v);r.attachShader(S,T),r.attachShader(S,b),t.index0AttributeName!==void 0?r.bindAttribLocation(S,0,t.index0AttributeName):t.hasPositionAttribute===!0&&r.bindAttribLocation(S,0,"position"),r.linkProgram(S);function I(L){if(i.debug.checkShaderErrors){const O=r.getProgramInfoLog(S)||"",q=r.getShaderInfoLog(T)||"",ne=r.getShaderInfoLog(b)||"",H=O.trim(),j=q.trim(),W=ne.trim();let ee=!0,ae=!0;if(r.getProgramParameter(S,r.LINK_STATUS)===!1)if(ee=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,S,T,b);else{const K=dc(r,T,"vertex"),le=dc(r,b,"fragment");Qe("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(S,r.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+H+`
`+K+`
`+le)}else H!==""?ke("WebGLProgram: Program Info Log:",H):(j===""||W==="")&&(ae=!1);ae&&(L.diagnostics={runnable:ee,programLog:H,vertexShader:{log:j,prefix:m},fragmentShader:{log:W,prefix:p}})}r.deleteShader(T),r.deleteShader(b),x=new Ts(r,S),E=Bg(r,S)}let x;this.getUniforms=function(){return x===void 0&&I(this),x};let E;this.getAttributes=function(){return E===void 0&&I(this),E};let D=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=r.getProgramParameter(S,Cg)),D},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(S),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Pg++,this.cacheKey=e,this.usedTimes=1,this.program=S,this.vertexShader=T,this.fragmentShader=b,this}let t_=0;class n_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new i_(e),t.set(e,n)),n}}class i_{constructor(e){this.id=t_++,this.code=e,this.usedTimes=0}}function r_(i){return i===yi||i===Rs||i===Cs}function s_(i,e,t,n,r,s){const a=new Vo,o=new n_,l=new Set,c=[],u=new Map,f=n.logarithmicDepthBuffer;let d=n.precision;const h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(x){return l.add(x),x===0?"uv":`uv${x}`}function S(x,E,D,L,O,q){const ne=L.fog,H=O.geometry,j=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?L.environment:null,W=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,ee=e.get(x.envMap||j,W),ae=ee&&ee.mapping===Os?ee.image.height:null,K=h[x.type];x.precision!==null&&(d=n.getMaxPrecision(x.precision),d!==x.precision&&ke("WebGLProgram.getParameters:",x.precision,"not supported, using",d,"instead."));const le=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,he=le!==void 0?le.length:0;let We=0;H.morphAttributes.position!==void 0&&(We=1),H.morphAttributes.normal!==void 0&&(We=2),H.morphAttributes.color!==void 0&&(We=3);let st,Ne,C,P;if(K){const we=bn[K];st=we.vertexShader,Ne=we.fragmentShader}else{st=x.vertexShader,Ne=x.fragmentShader;const we=o.getVertexShaderStage(x),yt=o.getFragmentShaderStage(x);o.update(x,we,yt),C=we.id,P=yt.id}const y=i.getRenderTarget(),U=i.state.buffers.depth.getReversed(),Q=O.isInstancedMesh===!0,$=O.isBatchedMesh===!0,ce=!!x.map,ue=!!x.matcap,Ae=!!ee,se=!!x.aoMap,oe=!!x.lightMap,be=!!x.bumpMap&&x.wireframe===!1,Ve=!!x.normalMap,Ye=!!x.displacementMap,at=!!x.emissiveMap,tt=!!x.metalnessMap,ot=!!x.roughnessMap,F=x.anisotropy>0,$e=x.clearcoat>0,et=x.dispersion>0,A=x.iridescence>0,g=x.sheen>0,B=x.transmission>0,X=F&&!!x.anisotropyMap,Z=$e&&!!x.clearcoatMap,de=$e&&!!x.clearcoatNormalMap,pe=$e&&!!x.clearcoatRoughnessMap,J=A&&!!x.iridescenceMap,ie=A&&!!x.iridescenceThicknessMap,me=g&&!!x.sheenColorMap,Pe=g&&!!x.sheenRoughnessMap,xe=!!x.specularMap,ge=!!x.specularColorMap,De=!!x.specularIntensityMap,Oe=B&&!!x.transmissionMap,He=B&&!!x.thicknessMap,N=!!x.gradientMap,fe=!!x.alphaMap,te=x.alphaTest>0,_e=!!x.alphaHash,ye=!!x.extensions;let re=An;x.toneMapped&&(y===null||y.isXRRenderTarget===!0)&&(re=i.toneMapping);const Ce={shaderID:K,shaderType:x.type,shaderName:x.name,vertexShader:st,fragmentShader:Ne,defines:x.defines,customVertexShaderID:C,customFragmentShaderID:P,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:d,batching:$,batchingColor:$&&O._colorsTexture!==null,instancing:Q,instancingColor:Q&&O.instanceColor!==null,instancingMorph:Q&&O.morphTexture!==null,outputColorSpace:y===null?i.outputColorSpace:y.isXRRenderTarget===!0?y.texture.colorSpace:je.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:ce,matcap:ue,envMap:Ae,envMapMode:Ae&&ee.mapping,envMapCubeUVHeight:ae,aoMap:se,lightMap:oe,bumpMap:be,normalMap:Ve,displacementMap:Ye,emissiveMap:at,normalMapObjectSpace:Ve&&x.normalMapType===Mu,normalMapTangentSpace:Ve&&x.normalMapType===So,packedNormalMap:Ve&&x.normalMapType===So&&r_(x.normalMap.format),metalnessMap:tt,roughnessMap:ot,anisotropy:F,anisotropyMap:X,clearcoat:$e,clearcoatMap:Z,clearcoatNormalMap:de,clearcoatRoughnessMap:pe,dispersion:et,iridescence:A,iridescenceMap:J,iridescenceThicknessMap:ie,sheen:g,sheenColorMap:me,sheenRoughnessMap:Pe,specularMap:xe,specularColorMap:ge,specularIntensityMap:De,transmission:B,transmissionMap:Oe,thicknessMap:He,gradientMap:N,opaque:x.transparent===!1&&x.blending===rr&&x.alphaToCoverage===!1,alphaMap:fe,alphaTest:te,alphaHash:_e,combine:x.combine,mapUv:ce&&_(x.map.channel),aoMapUv:se&&_(x.aoMap.channel),lightMapUv:oe&&_(x.lightMap.channel),bumpMapUv:be&&_(x.bumpMap.channel),normalMapUv:Ve&&_(x.normalMap.channel),displacementMapUv:Ye&&_(x.displacementMap.channel),emissiveMapUv:at&&_(x.emissiveMap.channel),metalnessMapUv:tt&&_(x.metalnessMap.channel),roughnessMapUv:ot&&_(x.roughnessMap.channel),anisotropyMapUv:X&&_(x.anisotropyMap.channel),clearcoatMapUv:Z&&_(x.clearcoatMap.channel),clearcoatNormalMapUv:de&&_(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:pe&&_(x.clearcoatRoughnessMap.channel),iridescenceMapUv:J&&_(x.iridescenceMap.channel),iridescenceThicknessMapUv:ie&&_(x.iridescenceThicknessMap.channel),sheenColorMapUv:me&&_(x.sheenColorMap.channel),sheenRoughnessMapUv:Pe&&_(x.sheenRoughnessMap.channel),specularMapUv:xe&&_(x.specularMap.channel),specularColorMapUv:ge&&_(x.specularColorMap.channel),specularIntensityMapUv:De&&_(x.specularIntensityMap.channel),transmissionMapUv:Oe&&_(x.transmissionMap.channel),thicknessMapUv:He&&_(x.thicknessMap.channel),alphaMapUv:fe&&_(x.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(Ve||F),vertexNormals:!!H.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!H.attributes.uv&&(ce||fe),fog:!!ne,useFog:x.fog===!0,fogExp2:!!ne&&ne.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||H.attributes.normal===void 0&&Ve===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:U,skinning:O.isSkinnedMesh===!0,hasPositionAttribute:H.attributes.position!==void 0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:he,morphTextureStride:We,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:q.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:re,decodeVideoTexture:ce&&x.map.isVideoTexture===!0&&je.getTransfer(x.map.colorSpace)===dt,decodeVideoTextureEmissive:at&&x.emissiveMap.isVideoTexture===!0&&je.getTransfer(x.emissiveMap.colorSpace)===dt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===On,flipSided:x.side===Yt,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:ye&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ye&&x.extensions.multiDraw===!0||$)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Ce.vertexUv1s=l.has(1),Ce.vertexUv2s=l.has(2),Ce.vertexUv3s=l.has(3),l.clear(),Ce}function m(x){const E=[];if(x.shaderID?E.push(x.shaderID):(E.push(x.customVertexShaderID),E.push(x.customFragmentShaderID)),x.defines!==void 0)for(const D in x.defines)E.push(D),E.push(x.defines[D]);return x.isRawShaderMaterial===!1&&(p(E,x),w(E,x),E.push(i.outputColorSpace)),E.push(x.customProgramCacheKey),E.join()}function p(x,E){x.push(E.precision),x.push(E.outputColorSpace),x.push(E.envMapMode),x.push(E.envMapCubeUVHeight),x.push(E.mapUv),x.push(E.alphaMapUv),x.push(E.lightMapUv),x.push(E.aoMapUv),x.push(E.bumpMapUv),x.push(E.normalMapUv),x.push(E.displacementMapUv),x.push(E.emissiveMapUv),x.push(E.metalnessMapUv),x.push(E.roughnessMapUv),x.push(E.anisotropyMapUv),x.push(E.clearcoatMapUv),x.push(E.clearcoatNormalMapUv),x.push(E.clearcoatRoughnessMapUv),x.push(E.iridescenceMapUv),x.push(E.iridescenceThicknessMapUv),x.push(E.sheenColorMapUv),x.push(E.sheenRoughnessMapUv),x.push(E.specularMapUv),x.push(E.specularColorMapUv),x.push(E.specularIntensityMapUv),x.push(E.transmissionMapUv),x.push(E.thicknessMapUv),x.push(E.combine),x.push(E.fogExp2),x.push(E.sizeAttenuation),x.push(E.morphTargetsCount),x.push(E.morphAttributeCount),x.push(E.numDirLights),x.push(E.numPointLights),x.push(E.numSpotLights),x.push(E.numSpotLightMaps),x.push(E.numHemiLights),x.push(E.numRectAreaLights),x.push(E.numDirLightShadows),x.push(E.numPointLightShadows),x.push(E.numSpotLightShadows),x.push(E.numSpotLightShadowsWithMaps),x.push(E.numLightProbes),x.push(E.shadowMapType),x.push(E.toneMapping),x.push(E.numClippingPlanes),x.push(E.numClipIntersection),x.push(E.depthPacking)}function w(x,E){a.disableAll(),E.instancing&&a.enable(0),E.instancingColor&&a.enable(1),E.instancingMorph&&a.enable(2),E.matcap&&a.enable(3),E.envMap&&a.enable(4),E.normalMapObjectSpace&&a.enable(5),E.normalMapTangentSpace&&a.enable(6),E.clearcoat&&a.enable(7),E.iridescence&&a.enable(8),E.alphaTest&&a.enable(9),E.vertexColors&&a.enable(10),E.vertexAlphas&&a.enable(11),E.vertexUv1s&&a.enable(12),E.vertexUv2s&&a.enable(13),E.vertexUv3s&&a.enable(14),E.vertexTangents&&a.enable(15),E.anisotropy&&a.enable(16),E.alphaHash&&a.enable(17),E.batching&&a.enable(18),E.dispersion&&a.enable(19),E.batchingColor&&a.enable(20),E.gradientMap&&a.enable(21),E.packedNormalMap&&a.enable(22),E.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),E.numLightProbeGrids>0&&a.enable(22),E.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function R(x){const E=h[x.type];let D;if(E){const L=bn[E];D=Sf.clone(L.uniforms)}else D=x.uniforms;return D}function v(x,E){let D=u.get(E);return D!==void 0?++D.usedTimes:(D=new e_(i,E,x,r),c.push(D),u.set(E,D)),D}function T(x){if(--x.usedTimes===0){const E=c.indexOf(x);c[E]=c[c.length-1],c.pop(),u.delete(x.cacheKey),x.destroy()}}function b(x){o.remove(x)}function I(){o.dispose()}return{getParameters:S,getProgramCacheKey:m,getUniforms:R,acquireProgram:v,releaseProgram:T,releaseShaderCache:b,programs:c,dispose:I}}function a_(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function r(a,o,l){i.get(a)[o]=l}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function o_(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function mc(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function gc(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function a(d){let h=0;return d.isInstancedMesh&&(h+=2),d.isSkinnedMesh&&(h+=1),h}function o(d,h,_,S,m,p){let w=i[e];return w===void 0?(w={id:d.id,object:d,geometry:h,material:_,materialVariant:a(d),groupOrder:S,renderOrder:d.renderOrder,z:m,group:p},i[e]=w):(w.id=d.id,w.object=d,w.geometry=h,w.material=_,w.materialVariant=a(d),w.groupOrder=S,w.renderOrder=d.renderOrder,w.z=m,w.group=p),e++,w}function l(d,h,_,S,m,p){const w=o(d,h,_,S,m,p);_.transmission>0?n.push(w):_.transparent===!0?r.push(w):t.push(w)}function c(d,h,_,S,m,p){const w=o(d,h,_,S,m,p);_.transmission>0?n.unshift(w):_.transparent===!0?r.unshift(w):t.unshift(w)}function u(d,h,_){t.length>1&&t.sort(d||o_),n.length>1&&n.sort(h||mc),r.length>1&&r.sort(h||mc),_&&(t.reverse(),n.reverse(),r.reverse())}function f(){for(let d=e,h=i.length;d<h;d++){const _=i[d];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:l,unshift:c,finish:f,sort:u}}function l_(){let i=new WeakMap;function e(n,r){const s=i.get(n);let a;return s===void 0?(a=new gc,i.set(n,[a])):r>=s.length?(a=new gc,s.push(a)):a=s[r],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function c_(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new z,color:new Je};break;case"SpotLight":t={position:new z,direction:new z,color:new Je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new z,color:new Je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new z,skyColor:new Je,groundColor:new Je};break;case"RectAreaLight":t={color:new Je,position:new z,halfWidth:new z,halfHeight:new z};break}return i[e.id]=t,t}}}function d_(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let u_=0;function f_(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function h_(i){const e=new c_,t=d_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new z);const r=new z,s=new vt,a=new vt;function o(c){let u=0,f=0,d=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let h=0,_=0,S=0,m=0,p=0,w=0,R=0,v=0,T=0,b=0,I=0;c.sort(f_);for(let E=0,D=c.length;E<D;E++){const L=c[E],O=L.color,q=L.intensity,ne=L.distance;let H=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===yi?H=L.shadow.map.texture:H=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)u+=O.r*q,f+=O.g*q,d+=O.b*q;else if(L.isLightProbe){for(let j=0;j<9;j++)n.probe[j].addScaledVector(L.sh.coefficients[j],q);I++}else if(L.isDirectionalLight){const j=e.get(L);if(j.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const W=L.shadow,ee=t.get(L);ee.shadowIntensity=W.intensity,ee.shadowBias=W.bias,ee.shadowNormalBias=W.normalBias,ee.shadowRadius=W.radius,ee.shadowMapSize=W.mapSize,n.directionalShadow[h]=ee,n.directionalShadowMap[h]=H,n.directionalShadowMatrix[h]=L.shadow.matrix,w++}n.directional[h]=j,h++}else if(L.isSpotLight){const j=e.get(L);j.position.setFromMatrixPosition(L.matrixWorld),j.color.copy(O).multiplyScalar(q),j.distance=ne,j.coneCos=Math.cos(L.angle),j.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),j.decay=L.decay,n.spot[S]=j;const W=L.shadow;if(L.map&&(n.spotLightMap[T]=L.map,T++,W.updateMatrices(L),L.castShadow&&b++),n.spotLightMatrix[S]=W.matrix,L.castShadow){const ee=t.get(L);ee.shadowIntensity=W.intensity,ee.shadowBias=W.bias,ee.shadowNormalBias=W.normalBias,ee.shadowRadius=W.radius,ee.shadowMapSize=W.mapSize,n.spotShadow[S]=ee,n.spotShadowMap[S]=H,v++}S++}else if(L.isRectAreaLight){const j=e.get(L);j.color.copy(O).multiplyScalar(q),j.halfWidth.set(L.width*.5,0,0),j.halfHeight.set(0,L.height*.5,0),n.rectArea[m]=j,m++}else if(L.isPointLight){const j=e.get(L);if(j.color.copy(L.color).multiplyScalar(L.intensity),j.distance=L.distance,j.decay=L.decay,L.castShadow){const W=L.shadow,ee=t.get(L);ee.shadowIntensity=W.intensity,ee.shadowBias=W.bias,ee.shadowNormalBias=W.normalBias,ee.shadowRadius=W.radius,ee.shadowMapSize=W.mapSize,ee.shadowCameraNear=W.camera.near,ee.shadowCameraFar=W.camera.far,n.pointShadow[_]=ee,n.pointShadowMap[_]=H,n.pointShadowMatrix[_]=L.shadow.matrix,R++}n.point[_]=j,_++}else if(L.isHemisphereLight){const j=e.get(L);j.skyColor.copy(L.color).multiplyScalar(q),j.groundColor.copy(L.groundColor).multiplyScalar(q),n.hemi[p]=j,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ve.LTC_FLOAT_1,n.rectAreaLTC2=ve.LTC_FLOAT_2):(n.rectAreaLTC1=ve.LTC_HALF_1,n.rectAreaLTC2=ve.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=d;const x=n.hash;(x.directionalLength!==h||x.pointLength!==_||x.spotLength!==S||x.rectAreaLength!==m||x.hemiLength!==p||x.numDirectionalShadows!==w||x.numPointShadows!==R||x.numSpotShadows!==v||x.numSpotMaps!==T||x.numLightProbes!==I)&&(n.directional.length=h,n.spot.length=S,n.rectArea.length=m,n.point.length=_,n.hemi.length=p,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.pointShadow.length=R,n.pointShadowMap.length=R,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=w,n.pointShadowMatrix.length=R,n.spotLightMatrix.length=v+T-b,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=I,x.directionalLength=h,x.pointLength=_,x.spotLength=S,x.rectAreaLength=m,x.hemiLength=p,x.numDirectionalShadows=w,x.numPointShadows=R,x.numSpotShadows=v,x.numSpotMaps=T,x.numLightProbes=I,n.version=u_++)}function l(c,u){let f=0,d=0,h=0,_=0,S=0;const m=u.matrixWorldInverse;for(let p=0,w=c.length;p<w;p++){const R=c[p];if(R.isDirectionalLight){const v=n.directional[f];v.direction.setFromMatrixPosition(R.matrixWorld),r.setFromMatrixPosition(R.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(m),f++}else if(R.isSpotLight){const v=n.spot[h];v.position.setFromMatrixPosition(R.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(R.matrixWorld),r.setFromMatrixPosition(R.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(m),h++}else if(R.isRectAreaLight){const v=n.rectArea[_];v.position.setFromMatrixPosition(R.matrixWorld),v.position.applyMatrix4(m),a.identity(),s.copy(R.matrixWorld),s.premultiply(m),a.extractRotation(s),v.halfWidth.set(R.width*.5,0,0),v.halfHeight.set(0,R.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),_++}else if(R.isPointLight){const v=n.point[d];v.position.setFromMatrixPosition(R.matrixWorld),v.position.applyMatrix4(m),d++}else if(R.isHemisphereLight){const v=n.hemi[S];v.direction.setFromMatrixPosition(R.matrixWorld),v.direction.transformDirection(m),S++}}}return{setup:o,setupView:l,state:n}}function _c(i){const e=new h_(i),t=[],n=[],r=[];function s(d){f.camera=d,t.length=0,n.length=0,r.length=0}function a(d){t.push(d)}function o(d){n.push(d)}function l(d){r.push(d)}function c(){e.setup(t)}function u(d){e.setupView(t,d)}const f={lightsArray:t,shadowsArray:n,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:f,setupLights:c,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function p_(i){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new _c(i),e.set(r,[o])):s>=a.length?(o=new _c(i),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const m_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,g_=`uniform sampler2D shadow_pass;
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
}`,__=[new z(1,0,0),new z(-1,0,0),new z(0,1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1)],x_=[new z(0,-1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1),new z(0,-1,0),new z(0,-1,0)],xc=new vt,Tr=new z,ya=new z;function v_(i,e,t){let n=new Yo;const r=new ze,s=new ze,a=new St,o=new Tf,l=new Af,c={},u=t.maxTextureSize,f={[si]:Yt,[Yt]:si,[On]:On},d=new Pn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ze},radius:{value:4}},vertexShader:m_,fragmentShader:g_}),h=d.clone();h.defines.HORIZONTAL_PASS=1;const _=new sn;_.setAttribute("position",new hn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new Ut(_,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ms;let p=this.type;this.render=function(b,I,x){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;this.type===Jd&&(ke("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Ms);const E=i.getRenderTarget(),D=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),O=i.state;O.setBlending(Bn),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const q=p!==this.type;q&&I.traverse(function(ne){ne.material&&(Array.isArray(ne.material)?ne.material.forEach(H=>H.needsUpdate=!0):ne.material.needsUpdate=!0)});for(let ne=0,H=b.length;ne<H;ne++){const j=b[ne],W=j.shadow;if(W===void 0){ke("WebGLShadowMap:",j,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;r.copy(W.mapSize);const ee=W.getFrameExtents();r.multiply(ee),s.copy(W.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/ee.x),r.x=s.x*ee.x,W.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/ee.y),r.y=s.y*ee.y,W.mapSize.y=s.y));const ae=i.state.buffers.depth.getReversed();if(W.camera._reversedDepth=ae,W.map===null||q===!0){if(W.map!==null&&(W.map.depthTexture!==null&&(W.map.depthTexture.dispose(),W.map.depthTexture=null),W.map.dispose()),this.type===Pr){if(j.isPointLight){ke("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}W.map=new wn(r.x,r.y,{format:yi,type:Gn,minFilter:Rt,magFilter:Rt,generateMipmaps:!1}),W.map.texture.name=j.name+".shadowMap",W.map.depthTexture=new ur(r.x,r.y,En),W.map.depthTexture.name=j.name+".shadowMapDepth",W.map.depthTexture.format=Vn,W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=At,W.map.depthTexture.magFilter=At}else j.isPointLight?(W.map=new Ad(r.x),W.map.depthTexture=new vf(r.x,Cn)):(W.map=new wn(r.x,r.y),W.map.depthTexture=new ur(r.x,r.y,Cn)),W.map.depthTexture.name=j.name+".shadowMap",W.map.depthTexture.format=Vn,this.type===Ms?(W.map.depthTexture.compareFunction=ae?zo:Bo,W.map.depthTexture.minFilter=Rt,W.map.depthTexture.magFilter=Rt):(W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=At,W.map.depthTexture.magFilter=At);W.camera.updateProjectionMatrix()}const K=W.map.isWebGLCubeRenderTarget?6:1;for(let le=0;le<K;le++){if(W.map.isWebGLCubeRenderTarget)i.setRenderTarget(W.map,le),i.clear();else{le===0&&(i.setRenderTarget(W.map),i.clear());const he=W.getViewport(le);a.set(s.x*he.x,s.y*he.y,s.x*he.z,s.y*he.w),O.viewport(a)}if(j.isPointLight){const he=W.camera,We=W.matrix,st=j.distance||he.far;st!==he.far&&(he.far=st,he.updateProjectionMatrix()),Tr.setFromMatrixPosition(j.matrixWorld),he.position.copy(Tr),ya.copy(he.position),ya.add(__[le]),he.up.copy(x_[le]),he.lookAt(ya),he.updateMatrixWorld(),We.makeTranslation(-Tr.x,-Tr.y,-Tr.z),xc.multiplyMatrices(he.projectionMatrix,he.matrixWorldInverse),W._frustum.setFromProjectionMatrix(xc,he.coordinateSystem,he.reversedDepth)}else W.updateMatrices(j);n=W.getFrustum(),v(I,x,W.camera,j,this.type)}W.isPointLightShadow!==!0&&this.type===Pr&&w(W,x),W.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(E,D,L)};function w(b,I){const x=e.update(S);d.defines.VSM_SAMPLES!==b.blurSamples&&(d.defines.VSM_SAMPLES=b.blurSamples,h.defines.VSM_SAMPLES=b.blurSamples,d.needsUpdate=!0,h.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new wn(r.x,r.y,{format:yi,type:Gn})),d.uniforms.shadow_pass.value=b.map.depthTexture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(I,null,x,d,S,null),h.uniforms.shadow_pass.value=b.mapPass.texture,h.uniforms.resolution.value=b.mapSize,h.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(I,null,x,h,S,null)}function R(b,I,x,E){let D=null;const L=x.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(L!==void 0)D=L;else if(D=x.isPointLight===!0?l:o,i.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){const O=D.uuid,q=I.uuid;let ne=c[O];ne===void 0&&(ne={},c[O]=ne);let H=ne[q];H===void 0&&(H=D.clone(),ne[q]=H,I.addEventListener("dispose",T)),D=H}if(D.visible=I.visible,D.wireframe=I.wireframe,E===Pr?D.side=I.shadowSide!==null?I.shadowSide:I.side:D.side=I.shadowSide!==null?I.shadowSide:f[I.side],D.alphaMap=I.alphaMap,D.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,D.map=I.map,D.clipShadows=I.clipShadows,D.clippingPlanes=I.clippingPlanes,D.clipIntersection=I.clipIntersection,D.displacementMap=I.displacementMap,D.displacementScale=I.displacementScale,D.displacementBias=I.displacementBias,D.wireframeLinewidth=I.wireframeLinewidth,D.linewidth=I.linewidth,x.isPointLight===!0&&D.isMeshDistanceMaterial===!0){const O=i.properties.get(D);O.light=x}return D}function v(b,I,x,E,D){if(b.visible===!1)return;if(b.layers.test(I.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&D===Pr)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,b.matrixWorld);const q=e.update(b),ne=b.material;if(Array.isArray(ne)){const H=q.groups;for(let j=0,W=H.length;j<W;j++){const ee=H[j],ae=ne[ee.materialIndex];if(ae&&ae.visible){const K=R(b,ae,E,D);b.onBeforeShadow(i,b,I,x,q,K,ee),i.renderBufferDirect(x,null,q,K,b,ee),b.onAfterShadow(i,b,I,x,q,K,ee)}}}else if(ne.visible){const H=R(b,ne,E,D);b.onBeforeShadow(i,b,I,x,q,H,null),i.renderBufferDirect(x,null,q,H,b,null),b.onAfterShadow(i,b,I,x,q,H,null)}}const O=b.children;for(let q=0,ne=O.length;q<ne;q++)v(O[q],I,x,E,D)}function T(b){b.target.removeEventListener("dispose",T);for(const x in c){const E=c[x],D=b.target.uuid;D in E&&(E[D].dispose(),delete E[D])}}}function M_(i,e){function t(){let N=!1;const fe=new St;let te=null;const _e=new St(0,0,0,0);return{setMask:function(ye){te!==ye&&!N&&(i.colorMask(ye,ye,ye,ye),te=ye)},setLocked:function(ye){N=ye},setClear:function(ye,re,Ce,we,yt){yt===!0&&(ye*=we,re*=we,Ce*=we),fe.set(ye,re,Ce,we),_e.equals(fe)===!1&&(i.clearColor(ye,re,Ce,we),_e.copy(fe))},reset:function(){N=!1,te=null,_e.set(-1,0,0,0)}}}function n(){let N=!1,fe=!1,te=null,_e=null,ye=null;return{setReversed:function(re){if(fe!==re){const Ce=e.get("EXT_clip_control");re?Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.ZERO_TO_ONE_EXT):Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.NEGATIVE_ONE_TO_ONE_EXT),fe=re;const we=ye;ye=null,this.setClear(we)}},getReversed:function(){return fe},setTest:function(re){re?y(i.DEPTH_TEST):U(i.DEPTH_TEST)},setMask:function(re){te!==re&&!N&&(i.depthMask(re),te=re)},setFunc:function(re){if(fe&&(re=Pu[re]),_e!==re){switch(re){case Na:i.depthFunc(i.NEVER);break;case Fa:i.depthFunc(i.ALWAYS);break;case Oa:i.depthFunc(i.LESS);break;case cr:i.depthFunc(i.LEQUAL);break;case ka:i.depthFunc(i.EQUAL);break;case Ba:i.depthFunc(i.GEQUAL);break;case za:i.depthFunc(i.GREATER);break;case Ha:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}_e=re}},setLocked:function(re){N=re},setClear:function(re){ye!==re&&(ye=re,fe&&(re=1-re),i.clearDepth(re))},reset:function(){N=!1,te=null,_e=null,ye=null,fe=!1}}}function r(){let N=!1,fe=null,te=null,_e=null,ye=null,re=null,Ce=null,we=null,yt=null;return{setTest:function(gt){N||(gt?y(i.STENCIL_TEST):U(i.STENCIL_TEST))},setMask:function(gt){fe!==gt&&!N&&(i.stencilMask(gt),fe=gt)},setFunc:function(gt,xn,vn){(te!==gt||_e!==xn||ye!==vn)&&(i.stencilFunc(gt,xn,vn),te=gt,_e=xn,ye=vn)},setOp:function(gt,xn,vn){(re!==gt||Ce!==xn||we!==vn)&&(i.stencilOp(gt,xn,vn),re=gt,Ce=xn,we=vn)},setLocked:function(gt){N=gt},setClear:function(gt){yt!==gt&&(i.clearStencil(gt),yt=gt)},reset:function(){N=!1,fe=null,te=null,_e=null,ye=null,re=null,Ce=null,we=null,yt=null}}}const s=new t,a=new n,o=new r,l=new WeakMap,c=new WeakMap;let u={},f={},d={},h=new WeakMap,_=[],S=null,m=!1,p=null,w=null,R=null,v=null,T=null,b=null,I=null,x=new Je(0,0,0),E=0,D=!1,L=null,O=null,q=null,ne=null,H=null;const j=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,ee=0;const ae=i.getParameter(i.VERSION);ae.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(ae)[1]),W=ee>=1):ae.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(ae)[1]),W=ee>=2);let K=null,le={};const he=i.getParameter(i.SCISSOR_BOX),We=i.getParameter(i.VIEWPORT),st=new St().fromArray(he),Ne=new St().fromArray(We);function C(N,fe,te,_e){const ye=new Uint8Array(4),re=i.createTexture();i.bindTexture(N,re),i.texParameteri(N,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(N,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ce=0;Ce<te;Ce++)N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY?i.texImage3D(fe,0,i.RGBA,1,1,_e,0,i.RGBA,i.UNSIGNED_BYTE,ye):i.texImage2D(fe+Ce,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ye);return re}const P={};P[i.TEXTURE_2D]=C(i.TEXTURE_2D,i.TEXTURE_2D,1),P[i.TEXTURE_CUBE_MAP]=C(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),P[i.TEXTURE_2D_ARRAY]=C(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),P[i.TEXTURE_3D]=C(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),y(i.DEPTH_TEST),a.setFunc(cr),be(!1),Ve(ml),y(i.CULL_FACE),se(Bn);function y(N){u[N]!==!0&&(i.enable(N),u[N]=!0)}function U(N){u[N]!==!1&&(i.disable(N),u[N]=!1)}function Q(N,fe){return d[N]!==fe?(i.bindFramebuffer(N,fe),d[N]=fe,N===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=fe),N===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=fe),!0):!1}function $(N,fe){let te=_,_e=!1;if(N){te=h.get(fe),te===void 0&&(te=[],h.set(fe,te));const ye=N.textures;if(te.length!==ye.length||te[0]!==i.COLOR_ATTACHMENT0){for(let re=0,Ce=ye.length;re<Ce;re++)te[re]=i.COLOR_ATTACHMENT0+re;te.length=ye.length,_e=!0}}else te[0]!==i.BACK&&(te[0]=i.BACK,_e=!0);_e&&i.drawBuffers(te)}function ce(N){return S!==N?(i.useProgram(N),S=N,!0):!1}const ue={[gi]:i.FUNC_ADD,[jd]:i.FUNC_SUBTRACT,[eu]:i.FUNC_REVERSE_SUBTRACT};ue[tu]=i.MIN,ue[nu]=i.MAX;const Ae={[iu]:i.ZERO,[ru]:i.ONE,[su]:i.SRC_COLOR,[Da]:i.SRC_ALPHA,[uu]:i.SRC_ALPHA_SATURATE,[cu]:i.DST_COLOR,[ou]:i.DST_ALPHA,[au]:i.ONE_MINUS_SRC_COLOR,[Ua]:i.ONE_MINUS_SRC_ALPHA,[du]:i.ONE_MINUS_DST_COLOR,[lu]:i.ONE_MINUS_DST_ALPHA,[fu]:i.CONSTANT_COLOR,[hu]:i.ONE_MINUS_CONSTANT_COLOR,[pu]:i.CONSTANT_ALPHA,[mu]:i.ONE_MINUS_CONSTANT_ALPHA};function se(N,fe,te,_e,ye,re,Ce,we,yt,gt){if(N===Bn){m===!0&&(U(i.BLEND),m=!1);return}if(m===!1&&(y(i.BLEND),m=!0),N!==Qd){if(N!==p||gt!==D){if((w!==gi||T!==gi)&&(i.blendEquation(i.FUNC_ADD),w=gi,T=gi),gt)switch(N){case rr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case La:i.blendFunc(i.ONE,i.ONE);break;case gl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case _l:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Qe("WebGLState: Invalid blending: ",N);break}else switch(N){case rr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case La:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case gl:Qe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case _l:Qe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Qe("WebGLState: Invalid blending: ",N);break}R=null,v=null,b=null,I=null,x.set(0,0,0),E=0,p=N,D=gt}return}ye=ye||fe,re=re||te,Ce=Ce||_e,(fe!==w||ye!==T)&&(i.blendEquationSeparate(ue[fe],ue[ye]),w=fe,T=ye),(te!==R||_e!==v||re!==b||Ce!==I)&&(i.blendFuncSeparate(Ae[te],Ae[_e],Ae[re],Ae[Ce]),R=te,v=_e,b=re,I=Ce),(we.equals(x)===!1||yt!==E)&&(i.blendColor(we.r,we.g,we.b,yt),x.copy(we),E=yt),p=N,D=!1}function oe(N,fe){N.side===On?U(i.CULL_FACE):y(i.CULL_FACE);let te=N.side===Yt;fe&&(te=!te),be(te),N.blending===rr&&N.transparent===!1?se(Bn):se(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),a.setFunc(N.depthFunc),a.setTest(N.depthTest),a.setMask(N.depthWrite),s.setMask(N.colorWrite);const _e=N.stencilWrite;o.setTest(_e),_e&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),at(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?y(i.SAMPLE_ALPHA_TO_COVERAGE):U(i.SAMPLE_ALPHA_TO_COVERAGE)}function be(N){L!==N&&(N?i.frontFace(i.CW):i.frontFace(i.CCW),L=N)}function Ve(N){N!==Kd?(y(i.CULL_FACE),N!==O&&(N===ml?i.cullFace(i.BACK):N===Zd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):U(i.CULL_FACE),O=N}function Ye(N){N!==q&&(W&&i.lineWidth(N),q=N)}function at(N,fe,te){N?(y(i.POLYGON_OFFSET_FILL),(ne!==fe||H!==te)&&(ne=fe,H=te,a.getReversed()&&(fe=-fe),i.polygonOffset(fe,te))):U(i.POLYGON_OFFSET_FILL)}function tt(N){N?y(i.SCISSOR_TEST):U(i.SCISSOR_TEST)}function ot(N){N===void 0&&(N=i.TEXTURE0+j-1),K!==N&&(i.activeTexture(N),K=N)}function F(N,fe,te){te===void 0&&(K===null?te=i.TEXTURE0+j-1:te=K);let _e=le[te];_e===void 0&&(_e={type:void 0,texture:void 0},le[te]=_e),(_e.type!==N||_e.texture!==fe)&&(K!==te&&(i.activeTexture(te),K=te),i.bindTexture(N,fe||P[N]),_e.type=N,_e.texture=fe)}function $e(){const N=le[K];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function et(){try{i.compressedTexImage2D(...arguments)}catch(N){Qe("WebGLState:",N)}}function A(){try{i.compressedTexImage3D(...arguments)}catch(N){Qe("WebGLState:",N)}}function g(){try{i.texSubImage2D(...arguments)}catch(N){Qe("WebGLState:",N)}}function B(){try{i.texSubImage3D(...arguments)}catch(N){Qe("WebGLState:",N)}}function X(){try{i.compressedTexSubImage2D(...arguments)}catch(N){Qe("WebGLState:",N)}}function Z(){try{i.compressedTexSubImage3D(...arguments)}catch(N){Qe("WebGLState:",N)}}function de(){try{i.texStorage2D(...arguments)}catch(N){Qe("WebGLState:",N)}}function pe(){try{i.texStorage3D(...arguments)}catch(N){Qe("WebGLState:",N)}}function J(){try{i.texImage2D(...arguments)}catch(N){Qe("WebGLState:",N)}}function ie(){try{i.texImage3D(...arguments)}catch(N){Qe("WebGLState:",N)}}function me(N){return f[N]!==void 0?f[N]:i.getParameter(N)}function Pe(N,fe){f[N]!==fe&&(i.pixelStorei(N,fe),f[N]=fe)}function xe(N){st.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),st.copy(N))}function ge(N){Ne.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),Ne.copy(N))}function De(N,fe){let te=c.get(fe);te===void 0&&(te=new WeakMap,c.set(fe,te));let _e=te.get(N);_e===void 0&&(_e=i.getUniformBlockIndex(fe,N.name),te.set(N,_e))}function Oe(N,fe){const _e=c.get(fe).get(N);l.get(fe)!==_e&&(i.uniformBlockBinding(fe,_e,N.__bindingPointIndex),l.set(fe,_e))}function He(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},f={},K=null,le={},d={},h=new WeakMap,_=[],S=null,m=!1,p=null,w=null,R=null,v=null,T=null,b=null,I=null,x=new Je(0,0,0),E=0,D=!1,L=null,O=null,q=null,ne=null,H=null,st.set(0,0,i.canvas.width,i.canvas.height),Ne.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:y,disable:U,bindFramebuffer:Q,drawBuffers:$,useProgram:ce,setBlending:se,setMaterial:oe,setFlipSided:be,setCullFace:Ve,setLineWidth:Ye,setPolygonOffset:at,setScissorTest:tt,activeTexture:ot,bindTexture:F,unbindTexture:$e,compressedTexImage2D:et,compressedTexImage3D:A,texImage2D:J,texImage3D:ie,pixelStorei:Pe,getParameter:me,updateUBOMapping:De,uniformBlockBinding:Oe,texStorage2D:de,texStorage3D:pe,texSubImage2D:g,texSubImage3D:B,compressedTexSubImage2D:X,compressedTexSubImage3D:Z,scissor:xe,viewport:ge,reset:He}}function S_(i,e,t,n,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ze,u=new WeakMap,f=new Set;let d;const h=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(A,g){return _?new OffscreenCanvas(A,g):Or("canvas")}function m(A,g,B){let X=1;const Z=et(A);if((Z.width>B||Z.height>B)&&(X=B/Math.max(Z.width,Z.height)),X<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const de=Math.floor(X*Z.width),pe=Math.floor(X*Z.height);d===void 0&&(d=S(de,pe));const J=g?S(de,pe):d;return J.width=de,J.height=pe,J.getContext("2d").drawImage(A,0,0,de,pe),ke("WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+de+"x"+pe+")."),J}else return"data"in A&&ke("WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),A;return A}function p(A){return A.generateMipmaps}function w(A){i.generateMipmap(A)}function R(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function v(A,g,B,X,Z,de=!1){if(A!==null){if(i[A]!==void 0)return i[A];ke("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let pe;X&&(pe=e.get("EXT_texture_norm16"),pe||ke("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let J=g;if(g===i.RED&&(B===i.FLOAT&&(J=i.R32F),B===i.HALF_FLOAT&&(J=i.R16F),B===i.UNSIGNED_BYTE&&(J=i.R8),B===i.UNSIGNED_SHORT&&pe&&(J=pe.R16_EXT),B===i.SHORT&&pe&&(J=pe.R16_SNORM_EXT)),g===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(J=i.R8UI),B===i.UNSIGNED_SHORT&&(J=i.R16UI),B===i.UNSIGNED_INT&&(J=i.R32UI),B===i.BYTE&&(J=i.R8I),B===i.SHORT&&(J=i.R16I),B===i.INT&&(J=i.R32I)),g===i.RG&&(B===i.FLOAT&&(J=i.RG32F),B===i.HALF_FLOAT&&(J=i.RG16F),B===i.UNSIGNED_BYTE&&(J=i.RG8),B===i.UNSIGNED_SHORT&&pe&&(J=pe.RG16_EXT),B===i.SHORT&&pe&&(J=pe.RG16_SNORM_EXT)),g===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&(J=i.RG8UI),B===i.UNSIGNED_SHORT&&(J=i.RG16UI),B===i.UNSIGNED_INT&&(J=i.RG32UI),B===i.BYTE&&(J=i.RG8I),B===i.SHORT&&(J=i.RG16I),B===i.INT&&(J=i.RG32I)),g===i.RGB_INTEGER&&(B===i.UNSIGNED_BYTE&&(J=i.RGB8UI),B===i.UNSIGNED_SHORT&&(J=i.RGB16UI),B===i.UNSIGNED_INT&&(J=i.RGB32UI),B===i.BYTE&&(J=i.RGB8I),B===i.SHORT&&(J=i.RGB16I),B===i.INT&&(J=i.RGB32I)),g===i.RGBA_INTEGER&&(B===i.UNSIGNED_BYTE&&(J=i.RGBA8UI),B===i.UNSIGNED_SHORT&&(J=i.RGBA16UI),B===i.UNSIGNED_INT&&(J=i.RGBA32UI),B===i.BYTE&&(J=i.RGBA8I),B===i.SHORT&&(J=i.RGBA16I),B===i.INT&&(J=i.RGBA32I)),g===i.RGB&&(B===i.UNSIGNED_SHORT&&pe&&(J=pe.RGB16_EXT),B===i.SHORT&&pe&&(J=pe.RGB16_SNORM_EXT),B===i.UNSIGNED_INT_5_9_9_9_REV&&(J=i.RGB9_E5),B===i.UNSIGNED_INT_10F_11F_11F_REV&&(J=i.R11F_G11F_B10F)),g===i.RGBA){const ie=de?Is:je.getTransfer(Z);B===i.FLOAT&&(J=i.RGBA32F),B===i.HALF_FLOAT&&(J=i.RGBA16F),B===i.UNSIGNED_BYTE&&(J=ie===dt?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT&&pe&&(J=pe.RGBA16_EXT),B===i.SHORT&&pe&&(J=pe.RGBA16_SNORM_EXT),B===i.UNSIGNED_SHORT_4_4_4_4&&(J=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(J=i.RGB5_A1)}return(J===i.R16F||J===i.R32F||J===i.RG16F||J===i.RG32F||J===i.RGBA16F||J===i.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function T(A,g){let B;return A?g===null||g===Cn||g===Nr?B=i.DEPTH24_STENCIL8:g===En?B=i.DEPTH32F_STENCIL8:g===Ur&&(B=i.DEPTH24_STENCIL8,ke("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===Cn||g===Nr?B=i.DEPTH_COMPONENT24:g===En?B=i.DEPTH_COMPONENT32F:g===Ur&&(B=i.DEPTH_COMPONENT16),B}function b(A,g){return p(A)===!0||A.isFramebufferTexture&&A.minFilter!==At&&A.minFilter!==Rt?Math.log2(Math.max(g.width,g.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?g.mipmaps.length:1}function I(A){const g=A.target;g.removeEventListener("dispose",I),E(g),g.isVideoTexture&&u.delete(g),g.isHTMLTexture&&f.delete(g)}function x(A){const g=A.target;g.removeEventListener("dispose",x),L(g)}function E(A){const g=n.get(A);if(g.__webglInit===void 0)return;const B=A.source,X=h.get(B);if(X){const Z=X[g.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&D(A),Object.keys(X).length===0&&h.delete(B)}n.remove(A)}function D(A){const g=n.get(A);i.deleteTexture(g.__webglTexture);const B=A.source,X=h.get(B);delete X[g.__cacheKey],a.memory.textures--}function L(A){const g=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(g.__webglFramebuffer[X]))for(let Z=0;Z<g.__webglFramebuffer[X].length;Z++)i.deleteFramebuffer(g.__webglFramebuffer[X][Z]);else i.deleteFramebuffer(g.__webglFramebuffer[X]);g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer[X])}else{if(Array.isArray(g.__webglFramebuffer))for(let X=0;X<g.__webglFramebuffer.length;X++)i.deleteFramebuffer(g.__webglFramebuffer[X]);else i.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&i.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let X=0;X<g.__webglColorRenderbuffer.length;X++)g.__webglColorRenderbuffer[X]&&i.deleteRenderbuffer(g.__webglColorRenderbuffer[X]);g.__webglDepthRenderbuffer&&i.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const B=A.textures;for(let X=0,Z=B.length;X<Z;X++){const de=n.get(B[X]);de.__webglTexture&&(i.deleteTexture(de.__webglTexture),a.memory.textures--),n.remove(B[X])}n.remove(A)}let O=0;function q(){O=0}function ne(){return O}function H(A){O=A}function j(){const A=O;return A>=r.maxTextures&&ke("WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+r.maxTextures),O+=1,A}function W(A){const g=[];return g.push(A.wrapS),g.push(A.wrapT),g.push(A.wrapR||0),g.push(A.magFilter),g.push(A.minFilter),g.push(A.anisotropy),g.push(A.internalFormat),g.push(A.format),g.push(A.type),g.push(A.generateMipmaps),g.push(A.premultiplyAlpha),g.push(A.flipY),g.push(A.unpackAlignment),g.push(A.colorSpace),g.join()}function ee(A,g){const B=n.get(A);if(A.isVideoTexture&&F(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&B.__version!==A.version){const X=A.image;if(X===null)ke("WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)ke("WebGLRenderer: Texture marked for update but image is incomplete");else{U(B,A,g);return}}else A.isExternalTexture&&(B.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+g)}function ae(A,g){const B=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&B.__version!==A.version){U(B,A,g);return}else A.isExternalTexture&&(B.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+g)}function K(A,g){const B=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&B.__version!==A.version){U(B,A,g);return}t.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+g)}function le(A,g){const B=n.get(A);if(A.isCubeDepthTexture!==!0&&A.version>0&&B.__version!==A.version){Q(B,A,g);return}t.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+g)}const he={[Ga]:i.REPEAT,[kn]:i.CLAMP_TO_EDGE,[Va]:i.MIRRORED_REPEAT},We={[At]:i.NEAREST,[xu]:i.NEAREST_MIPMAP_NEAREST,[Wr]:i.NEAREST_MIPMAP_LINEAR,[Rt]:i.LINEAR,[Xs]:i.LINEAR_MIPMAP_NEAREST,[xi]:i.LINEAR_MIPMAP_LINEAR},st={[Su]:i.NEVER,[Au]:i.ALWAYS,[yu]:i.LESS,[Bo]:i.LEQUAL,[bu]:i.EQUAL,[zo]:i.GEQUAL,[Eu]:i.GREATER,[Tu]:i.NOTEQUAL};function Ne(A,g){if(g.type===En&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===Rt||g.magFilter===Xs||g.magFilter===Wr||g.magFilter===xi||g.minFilter===Rt||g.minFilter===Xs||g.minFilter===Wr||g.minFilter===xi)&&ke("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,he[g.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,he[g.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,he[g.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,We[g.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,We[g.minFilter]),g.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,st[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===At||g.minFilter!==Wr&&g.minFilter!==xi||g.type===En&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||n.get(g).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");i.texParameterf(A,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,r.getMaxAnisotropy())),n.get(g).__currentAnisotropy=g.anisotropy}}}function C(A,g){let B=!1;A.__webglInit===void 0&&(A.__webglInit=!0,g.addEventListener("dispose",I));const X=g.source;let Z=h.get(X);Z===void 0&&(Z={},h.set(X,Z));const de=W(g);if(de!==A.__cacheKey){Z[de]===void 0&&(Z[de]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,B=!0),Z[de].usedTimes++;const pe=Z[A.__cacheKey];pe!==void 0&&(Z[A.__cacheKey].usedTimes--,pe.usedTimes===0&&D(g)),A.__cacheKey=de,A.__webglTexture=Z[de].texture}return B}function P(A,g,B){return Math.floor(Math.floor(A/B)/g)}function y(A,g,B,X){const de=A.updateRanges;if(de.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,g.width,g.height,B,X,g.data);else{de.sort((Pe,xe)=>Pe.start-xe.start);let pe=0;for(let Pe=1;Pe<de.length;Pe++){const xe=de[pe],ge=de[Pe],De=xe.start+xe.count,Oe=P(ge.start,g.width,4),He=P(xe.start,g.width,4);ge.start<=De+1&&Oe===He&&P(ge.start+ge.count-1,g.width,4)===Oe?xe.count=Math.max(xe.count,ge.start+ge.count-xe.start):(++pe,de[pe]=ge)}de.length=pe+1;const J=t.getParameter(i.UNPACK_ROW_LENGTH),ie=t.getParameter(i.UNPACK_SKIP_PIXELS),me=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,g.width);for(let Pe=0,xe=de.length;Pe<xe;Pe++){const ge=de[Pe],De=Math.floor(ge.start/4),Oe=Math.ceil(ge.count/4),He=De%g.width,N=Math.floor(De/g.width),fe=Oe,te=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,He),t.pixelStorei(i.UNPACK_SKIP_ROWS,N),t.texSubImage2D(i.TEXTURE_2D,0,He,N,fe,te,B,X,g.data)}A.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,J),t.pixelStorei(i.UNPACK_SKIP_PIXELS,ie),t.pixelStorei(i.UNPACK_SKIP_ROWS,me)}}function U(A,g,B){let X=i.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(X=i.TEXTURE_2D_ARRAY),g.isData3DTexture&&(X=i.TEXTURE_3D);const Z=C(A,g),de=g.source;t.bindTexture(X,A.__webglTexture,i.TEXTURE0+B);const pe=n.get(de);if(de.version!==pe.__version||Z===!0){if(t.activeTexture(i.TEXTURE0+B),(typeof ImageBitmap<"u"&&g.image instanceof ImageBitmap)===!1){const te=je.getPrimaries(je.workingColorSpace),_e=g.colorSpace===ti?null:je.getPrimaries(g.colorSpace),ye=g.colorSpace===ti||te===_e?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye)}t.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment);let ie=m(g.image,!1,r.maxTextureSize);ie=$e(g,ie);const me=s.convert(g.format,g.colorSpace),Pe=s.convert(g.type);let xe=v(g.internalFormat,me,Pe,g.normalized,g.colorSpace,g.isVideoTexture);Ne(X,g);let ge;const De=g.mipmaps,Oe=g.isVideoTexture!==!0,He=pe.__version===void 0||Z===!0,N=de.dataReady,fe=b(g,ie);if(g.isDepthTexture)xe=T(g.format===vi,g.type),He&&(Oe?t.texStorage2D(i.TEXTURE_2D,1,xe,ie.width,ie.height):t.texImage2D(i.TEXTURE_2D,0,xe,ie.width,ie.height,0,me,Pe,null));else if(g.isDataTexture)if(De.length>0){Oe&&He&&t.texStorage2D(i.TEXTURE_2D,fe,xe,De[0].width,De[0].height);for(let te=0,_e=De.length;te<_e;te++)ge=De[te],Oe?N&&t.texSubImage2D(i.TEXTURE_2D,te,0,0,ge.width,ge.height,me,Pe,ge.data):t.texImage2D(i.TEXTURE_2D,te,xe,ge.width,ge.height,0,me,Pe,ge.data);g.generateMipmaps=!1}else Oe?(He&&t.texStorage2D(i.TEXTURE_2D,fe,xe,ie.width,ie.height),N&&y(g,ie,me,Pe)):t.texImage2D(i.TEXTURE_2D,0,xe,ie.width,ie.height,0,me,Pe,ie.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){Oe&&He&&t.texStorage3D(i.TEXTURE_2D_ARRAY,fe,xe,De[0].width,De[0].height,ie.depth);for(let te=0,_e=De.length;te<_e;te++)if(ge=De[te],g.format!==fn)if(me!==null)if(Oe){if(N)if(g.layerUpdates.size>0){const ye=Kl(ge.width,ge.height,g.format,g.type);for(const re of g.layerUpdates){const Ce=ge.data.subarray(re*ye/ge.data.BYTES_PER_ELEMENT,(re+1)*ye/ge.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,te,0,0,re,ge.width,ge.height,1,me,Ce)}g.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,te,0,0,0,ge.width,ge.height,ie.depth,me,ge.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,te,xe,ge.width,ge.height,ie.depth,0,ge.data,0,0);else ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Oe?N&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,te,0,0,0,ge.width,ge.height,ie.depth,me,Pe,ge.data):t.texImage3D(i.TEXTURE_2D_ARRAY,te,xe,ge.width,ge.height,ie.depth,0,me,Pe,ge.data)}else{Oe&&He&&t.texStorage2D(i.TEXTURE_2D,fe,xe,De[0].width,De[0].height);for(let te=0,_e=De.length;te<_e;te++)ge=De[te],g.format!==fn?me!==null?Oe?N&&t.compressedTexSubImage2D(i.TEXTURE_2D,te,0,0,ge.width,ge.height,me,ge.data):t.compressedTexImage2D(i.TEXTURE_2D,te,xe,ge.width,ge.height,0,ge.data):ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Oe?N&&t.texSubImage2D(i.TEXTURE_2D,te,0,0,ge.width,ge.height,me,Pe,ge.data):t.texImage2D(i.TEXTURE_2D,te,xe,ge.width,ge.height,0,me,Pe,ge.data)}else if(g.isDataArrayTexture)if(Oe){if(He&&t.texStorage3D(i.TEXTURE_2D_ARRAY,fe,xe,ie.width,ie.height,ie.depth),N)if(g.layerUpdates.size>0){const te=Kl(ie.width,ie.height,g.format,g.type);for(const _e of g.layerUpdates){const ye=ie.data.subarray(_e*te/ie.data.BYTES_PER_ELEMENT,(_e+1)*te/ie.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,_e,ie.width,ie.height,1,me,Pe,ye)}g.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,me,Pe,ie.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,xe,ie.width,ie.height,ie.depth,0,me,Pe,ie.data);else if(g.isData3DTexture)Oe?(He&&t.texStorage3D(i.TEXTURE_3D,fe,xe,ie.width,ie.height,ie.depth),N&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,me,Pe,ie.data)):t.texImage3D(i.TEXTURE_3D,0,xe,ie.width,ie.height,ie.depth,0,me,Pe,ie.data);else if(g.isFramebufferTexture){if(He)if(Oe)t.texStorage2D(i.TEXTURE_2D,fe,xe,ie.width,ie.height);else{let te=ie.width,_e=ie.height;for(let ye=0;ye<fe;ye++)t.texImage2D(i.TEXTURE_2D,ye,xe,te,_e,0,me,Pe,null),te>>=1,_e>>=1}}else if(g.isHTMLTexture){if("texElementImage2D"in i){const te=i.canvas;if(te.hasAttribute("layoutsubtree")||te.setAttribute("layoutsubtree","true"),ie.parentNode!==te){te.appendChild(ie),f.add(g),te.onpaint=_e=>{const ye=_e.changedElements;for(const re of f)ye.includes(re.image)&&(re.needsUpdate=!0)},te.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,ie);else{const ye=i.RGBA,re=i.RGBA,Ce=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,ye,re,Ce,ie)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(De.length>0){if(Oe&&He){const te=et(De[0]);t.texStorage2D(i.TEXTURE_2D,fe,xe,te.width,te.height)}for(let te=0,_e=De.length;te<_e;te++)ge=De[te],Oe?N&&t.texSubImage2D(i.TEXTURE_2D,te,0,0,me,Pe,ge):t.texImage2D(i.TEXTURE_2D,te,xe,me,Pe,ge);g.generateMipmaps=!1}else if(Oe){if(He){const te=et(ie);t.texStorage2D(i.TEXTURE_2D,fe,xe,te.width,te.height)}N&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,me,Pe,ie)}else t.texImage2D(i.TEXTURE_2D,0,xe,me,Pe,ie);p(g)&&w(X),pe.__version=de.version,g.onUpdate&&g.onUpdate(g)}A.__version=g.version}function Q(A,g,B){if(g.image.length!==6)return;const X=C(A,g),Z=g.source;t.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+B);const de=n.get(Z);if(Z.version!==de.__version||X===!0){t.activeTexture(i.TEXTURE0+B);const pe=je.getPrimaries(je.workingColorSpace),J=g.colorSpace===ti?null:je.getPrimaries(g.colorSpace),ie=g.colorSpace===ti||pe===J?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ie);const me=g.isCompressedTexture||g.image[0].isCompressedTexture,Pe=g.image[0]&&g.image[0].isDataTexture,xe=[];for(let re=0;re<6;re++)!me&&!Pe?xe[re]=m(g.image[re],!0,r.maxCubemapSize):xe[re]=Pe?g.image[re].image:g.image[re],xe[re]=$e(g,xe[re]);const ge=xe[0],De=s.convert(g.format,g.colorSpace),Oe=s.convert(g.type),He=v(g.internalFormat,De,Oe,g.normalized,g.colorSpace),N=g.isVideoTexture!==!0,fe=de.__version===void 0||X===!0,te=Z.dataReady;let _e=b(g,ge);Ne(i.TEXTURE_CUBE_MAP,g);let ye;if(me){N&&fe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,_e,He,ge.width,ge.height);for(let re=0;re<6;re++){ye=xe[re].mipmaps;for(let Ce=0;Ce<ye.length;Ce++){const we=ye[Ce];g.format!==fn?De!==null?N?te&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ce,0,0,we.width,we.height,De,we.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ce,He,we.width,we.height,0,we.data):ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ce,0,0,we.width,we.height,De,Oe,we.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ce,He,we.width,we.height,0,De,Oe,we.data)}}}else{if(ye=g.mipmaps,N&&fe){ye.length>0&&_e++;const re=et(xe[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,_e,He,re.width,re.height)}for(let re=0;re<6;re++)if(Pe){N?te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,xe[re].width,xe[re].height,De,Oe,xe[re].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,He,xe[re].width,xe[re].height,0,De,Oe,xe[re].data);for(let Ce=0;Ce<ye.length;Ce++){const yt=ye[Ce].image[re].image;N?te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ce+1,0,0,yt.width,yt.height,De,Oe,yt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ce+1,He,yt.width,yt.height,0,De,Oe,yt.data)}}else{N?te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,De,Oe,xe[re]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,He,De,Oe,xe[re]);for(let Ce=0;Ce<ye.length;Ce++){const we=ye[Ce];N?te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ce+1,0,0,De,Oe,we.image[re]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ce+1,He,De,Oe,we.image[re])}}}p(g)&&w(i.TEXTURE_CUBE_MAP),de.__version=Z.version,g.onUpdate&&g.onUpdate(g)}A.__version=g.version}function $(A,g,B,X,Z,de){const pe=s.convert(B.format,B.colorSpace),J=s.convert(B.type),ie=v(B.internalFormat,pe,J,B.normalized,B.colorSpace),me=n.get(g),Pe=n.get(B);if(Pe.__renderTarget=g,!me.__hasExternalTextures){const xe=Math.max(1,g.width>>de),ge=Math.max(1,g.height>>de);Z===i.TEXTURE_3D||Z===i.TEXTURE_2D_ARRAY?t.texImage3D(Z,de,ie,xe,ge,g.depth,0,pe,J,null):t.texImage2D(Z,de,ie,xe,ge,0,pe,J,null)}t.bindFramebuffer(i.FRAMEBUFFER,A),ot(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,X,Z,Pe.__webglTexture,0,tt(g)):(Z===i.TEXTURE_2D||Z>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,X,Z,Pe.__webglTexture,de),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ce(A,g,B){if(i.bindRenderbuffer(i.RENDERBUFFER,A),g.depthBuffer){const X=g.depthTexture,Z=X&&X.isDepthTexture?X.type:null,de=T(g.stencilBuffer,Z),pe=g.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;ot(g)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,tt(g),de,g.width,g.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,tt(g),de,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,de,g.width,g.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,pe,i.RENDERBUFFER,A)}else{const X=g.textures;for(let Z=0;Z<X.length;Z++){const de=X[Z],pe=s.convert(de.format,de.colorSpace),J=s.convert(de.type),ie=v(de.internalFormat,pe,J,de.normalized,de.colorSpace);ot(g)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,tt(g),ie,g.width,g.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,tt(g),ie,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,ie,g.width,g.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ue(A,g,B){const X=g.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,A),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const Z=n.get(g.depthTexture);if(Z.__renderTarget=g,(!Z.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),X){if(Z.__webglInit===void 0&&(Z.__webglInit=!0,g.depthTexture.addEventListener("dispose",I)),Z.__webglTexture===void 0){Z.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),Ne(i.TEXTURE_CUBE_MAP,g.depthTexture);const me=s.convert(g.depthTexture.format),Pe=s.convert(g.depthTexture.type);let xe;g.depthTexture.format===Vn?xe=i.DEPTH_COMPONENT24:g.depthTexture.format===vi&&(xe=i.DEPTH24_STENCIL8);for(let ge=0;ge<6;ge++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,xe,g.width,g.height,0,me,Pe,null)}}else ee(g.depthTexture,0);const de=Z.__webglTexture,pe=tt(g),J=X?i.TEXTURE_CUBE_MAP_POSITIVE_X+B:i.TEXTURE_2D,ie=g.depthTexture.format===vi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(g.depthTexture.format===Vn)ot(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ie,J,de,0,pe):i.framebufferTexture2D(i.FRAMEBUFFER,ie,J,de,0);else if(g.depthTexture.format===vi)ot(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ie,J,de,0,pe):i.framebufferTexture2D(i.FRAMEBUFFER,ie,J,de,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ae(A){const g=n.get(A),B=A.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==A.depthTexture){const X=A.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),X){const Z=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,X.removeEventListener("dispose",Z)};X.addEventListener("dispose",Z),g.__depthDisposeCallback=Z}g.__boundDepthTexture=X}if(A.depthTexture&&!g.__autoAllocateDepthBuffer)if(B)for(let X=0;X<6;X++)ue(g.__webglFramebuffer[X],A,X);else{const X=A.texture.mipmaps;X&&X.length>0?ue(g.__webglFramebuffer[0],A,0):ue(g.__webglFramebuffer,A,0)}else if(B){g.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[X]),g.__webglDepthbuffer[X]===void 0)g.__webglDepthbuffer[X]=i.createRenderbuffer(),ce(g.__webglDepthbuffer[X],A,!1);else{const Z=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,de=g.__webglDepthbuffer[X];i.bindRenderbuffer(i.RENDERBUFFER,de),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,de)}}else{const X=A.texture.mipmaps;if(X&&X.length>0?t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=i.createRenderbuffer(),ce(g.__webglDepthbuffer,A,!1);else{const Z=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,de=g.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,de),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,de)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function se(A,g,B){const X=n.get(A);g!==void 0&&$(X.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&Ae(A)}function oe(A){const g=A.texture,B=n.get(A),X=n.get(g);A.addEventListener("dispose",x);const Z=A.textures,de=A.isWebGLCubeRenderTarget===!0,pe=Z.length>1;if(pe||(X.__webglTexture===void 0&&(X.__webglTexture=i.createTexture()),X.__version=g.version,a.memory.textures++),de){B.__webglFramebuffer=[];for(let J=0;J<6;J++)if(g.mipmaps&&g.mipmaps.length>0){B.__webglFramebuffer[J]=[];for(let ie=0;ie<g.mipmaps.length;ie++)B.__webglFramebuffer[J][ie]=i.createFramebuffer()}else B.__webglFramebuffer[J]=i.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){B.__webglFramebuffer=[];for(let J=0;J<g.mipmaps.length;J++)B.__webglFramebuffer[J]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(pe)for(let J=0,ie=Z.length;J<ie;J++){const me=n.get(Z[J]);me.__webglTexture===void 0&&(me.__webglTexture=i.createTexture(),a.memory.textures++)}if(A.samples>0&&ot(A)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let J=0;J<Z.length;J++){const ie=Z[J];B.__webglColorRenderbuffer[J]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[J]);const me=s.convert(ie.format,ie.colorSpace),Pe=s.convert(ie.type),xe=v(ie.internalFormat,me,Pe,ie.normalized,ie.colorSpace,A.isXRRenderTarget===!0),ge=tt(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,ge,xe,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+J,i.RENDERBUFFER,B.__webglColorRenderbuffer[J])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),ce(B.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(de){t.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture),Ne(i.TEXTURE_CUBE_MAP,g);for(let J=0;J<6;J++)if(g.mipmaps&&g.mipmaps.length>0)for(let ie=0;ie<g.mipmaps.length;ie++)$(B.__webglFramebuffer[J][ie],A,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ie);else $(B.__webglFramebuffer[J],A,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0);p(g)&&w(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(pe){for(let J=0,ie=Z.length;J<ie;J++){const me=Z[J],Pe=n.get(me);let xe=i.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(xe=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(xe,Pe.__webglTexture),Ne(xe,me),$(B.__webglFramebuffer,A,me,i.COLOR_ATTACHMENT0+J,xe,0),p(me)&&w(xe)}t.unbindTexture()}else{let J=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(J=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(J,X.__webglTexture),Ne(J,g),g.mipmaps&&g.mipmaps.length>0)for(let ie=0;ie<g.mipmaps.length;ie++)$(B.__webglFramebuffer[ie],A,g,i.COLOR_ATTACHMENT0,J,ie);else $(B.__webglFramebuffer,A,g,i.COLOR_ATTACHMENT0,J,0);p(g)&&w(J),t.unbindTexture()}A.depthBuffer&&Ae(A)}function be(A){const g=A.textures;for(let B=0,X=g.length;B<X;B++){const Z=g[B];if(p(Z)){const de=R(A),pe=n.get(Z).__webglTexture;t.bindTexture(de,pe),w(de),t.unbindTexture()}}}const Ve=[],Ye=[];function at(A){if(A.samples>0){if(ot(A)===!1){const g=A.textures,B=A.width,X=A.height;let Z=i.COLOR_BUFFER_BIT;const de=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pe=n.get(A),J=g.length>1;if(J)for(let me=0;me<g.length;me++)t.bindFramebuffer(i.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,pe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,pe.__webglMultisampledFramebuffer);const ie=A.texture.mipmaps;ie&&ie.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,pe.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,pe.__webglFramebuffer);for(let me=0;me<g.length;me++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(Z|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(Z|=i.STENCIL_BUFFER_BIT)),J){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,pe.__webglColorRenderbuffer[me]);const Pe=n.get(g[me]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Pe,0)}i.blitFramebuffer(0,0,B,X,0,0,B,X,Z,i.NEAREST),l===!0&&(Ve.length=0,Ye.length=0,Ve.push(i.COLOR_ATTACHMENT0+me),A.depthBuffer&&A.resolveDepthBuffer===!1&&(Ve.push(de),Ye.push(de),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Ye)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ve))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),J)for(let me=0;me<g.length;me++){t.bindFramebuffer(i.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.RENDERBUFFER,pe.__webglColorRenderbuffer[me]);const Pe=n.get(g[me]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,pe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.TEXTURE_2D,Pe,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,pe.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const g=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[g])}}}function tt(A){return Math.min(r.maxSamples,A.samples)}function ot(A){const g=n.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function F(A){const g=a.render.frame;u.get(A)!==g&&(u.set(A,g),A.update())}function $e(A,g){const B=A.colorSpace,X=A.format,Z=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||B!==Ps&&B!==ti&&(je.getTransfer(B)===dt?(X!==fn||Z!==jt)&&ke("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Qe("WebGLTextures: Unsupported texture color space:",B)),g}function et(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=j,this.resetTextureUnits=q,this.getTextureUnits=ne,this.setTextureUnits=H,this.setTexture2D=ee,this.setTexture2DArray=ae,this.setTexture3D=K,this.setTextureCube=le,this.rebindTextures=se,this.setupRenderTarget=oe,this.updateRenderTargetMipmap=be,this.updateMultisampleRenderTarget=at,this.setupDepthRenderbuffer=Ae,this.setupFrameBufferTexture=$,this.useMultisampledRTT=ot,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function y_(i,e){function t(n,r=ti){let s;const a=je.getTransfer(r);if(n===jt)return i.UNSIGNED_BYTE;if(n===Uo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===No)return i.UNSIGNED_SHORT_5_5_5_1;if(n===ad)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===od)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===rd)return i.BYTE;if(n===sd)return i.SHORT;if(n===Ur)return i.UNSIGNED_SHORT;if(n===Do)return i.INT;if(n===Cn)return i.UNSIGNED_INT;if(n===En)return i.FLOAT;if(n===Gn)return i.HALF_FLOAT;if(n===ld)return i.ALPHA;if(n===cd)return i.RGB;if(n===fn)return i.RGBA;if(n===Vn)return i.DEPTH_COMPONENT;if(n===vi)return i.DEPTH_STENCIL;if(n===dd)return i.RED;if(n===Fo)return i.RED_INTEGER;if(n===yi)return i.RG;if(n===Oo)return i.RG_INTEGER;if(n===ko)return i.RGBA_INTEGER;if(n===Ss||n===ys||n===bs||n===Es)if(a===dt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Ss)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ys)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===bs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Es)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Ss)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ys)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===bs)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Es)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Wa||n===Xa||n===Ya||n===qa)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Wa)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Xa)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ya)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===qa)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===$a||n===Ka||n===Za||n===Ja||n===Qa||n===Rs||n===ja)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===$a||n===Ka)return a===dt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Za)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===Ja)return s.COMPRESSED_R11_EAC;if(n===Qa)return s.COMPRESSED_SIGNED_R11_EAC;if(n===Rs)return s.COMPRESSED_RG11_EAC;if(n===ja)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===eo||n===to||n===no||n===io||n===ro||n===so||n===ao||n===oo||n===lo||n===co||n===uo||n===fo||n===ho||n===po)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===eo)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===to)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===no)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===io)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ro)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===so)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ao)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===oo)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===lo)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===co)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===uo)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===fo)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ho)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===po)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===mo||n===go||n===_o)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===mo)return a===dt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===go)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===_o)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===xo||n===vo||n===Cs||n===Mo)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===xo)return s.COMPRESSED_RED_RGTC1_EXT;if(n===vo)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Cs)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Mo)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Nr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const b_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,E_=`
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

}`;class T_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new vd(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Pn({vertexShader:b_,fragmentShader:E_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ut(new oi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class A_ extends Ai{constructor(e,t){super();const n=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,f=null,d=null,h=null,_=null;const S=typeof XRWebGLBinding<"u",m=new T_,p={},w=t.getContextAttributes();let R=null,v=null;const T=[],b=[],I=new ze;let x=null;const E=new Qt;E.viewport=new St;const D=new Qt;D.viewport=new St;const L=[E,D],O=new Nf;let q=null,ne=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(C){let P=T[C];return P===void 0&&(P=new Js,T[C]=P),P.getTargetRaySpace()},this.getControllerGrip=function(C){let P=T[C];return P===void 0&&(P=new Js,T[C]=P),P.getGripSpace()},this.getHand=function(C){let P=T[C];return P===void 0&&(P=new Js,T[C]=P),P.getHandSpace()};function H(C){const P=b.indexOf(C.inputSource);if(P===-1)return;const y=T[P];y!==void 0&&(y.update(C.inputSource,C.frame,c||a),y.dispatchEvent({type:C.type,data:C.inputSource}))}function j(){r.removeEventListener("select",H),r.removeEventListener("selectstart",H),r.removeEventListener("selectend",H),r.removeEventListener("squeeze",H),r.removeEventListener("squeezestart",H),r.removeEventListener("squeezeend",H),r.removeEventListener("end",j),r.removeEventListener("inputsourceschange",W);for(let C=0;C<T.length;C++){const P=b[C];P!==null&&(b[C]=null,T[C].disconnect(P))}q=null,ne=null,m.reset();for(const C in p)delete p[C];e.setRenderTarget(R),h=null,d=null,f=null,r=null,v=null,Ne.stop(),n.isPresenting=!1,e.setPixelRatio(x),e.setSize(I.width,I.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(C){s=C,n.isPresenting===!0&&ke("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(C){o=C,n.isPresenting===!0&&ke("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(C){c=C},this.getBaseLayer=function(){return d!==null?d:h},this.getBinding=function(){return f===null&&S&&(f=new XRWebGLBinding(r,t)),f},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(C){if(r=C,r!==null){if(R=e.getRenderTarget(),r.addEventListener("select",H),r.addEventListener("selectstart",H),r.addEventListener("selectend",H),r.addEventListener("squeeze",H),r.addEventListener("squeezestart",H),r.addEventListener("squeezeend",H),r.addEventListener("end",j),r.addEventListener("inputsourceschange",W),w.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(I),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let y=null,U=null,Q=null;w.depth&&(Q=w.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,y=w.stencil?vi:Vn,U=w.stencil?Nr:Cn);const $={colorFormat:t.RGBA8,depthFormat:Q,scaleFactor:s};f=this.getBinding(),d=f.createProjectionLayer($),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),v=new wn(d.textureWidth,d.textureHeight,{format:fn,type:jt,depthTexture:new ur(d.textureWidth,d.textureHeight,U,void 0,void 0,void 0,void 0,void 0,void 0,y),stencilBuffer:w.stencil,colorSpace:e.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const y={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(r,t,y),r.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),v=new wn(h.framebufferWidth,h.framebufferHeight,{format:fn,type:jt,colorSpace:e.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),Ne.setContext(r),Ne.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function W(C){for(let P=0;P<C.removed.length;P++){const y=C.removed[P],U=b.indexOf(y);U>=0&&(b[U]=null,T[U].disconnect(y))}for(let P=0;P<C.added.length;P++){const y=C.added[P];let U=b.indexOf(y);if(U===-1){for(let $=0;$<T.length;$++)if($>=b.length){b.push(y),U=$;break}else if(b[$]===null){b[$]=y,U=$;break}if(U===-1)break}const Q=T[U];Q&&Q.connect(y)}}const ee=new z,ae=new z;function K(C,P,y){ee.setFromMatrixPosition(P.matrixWorld),ae.setFromMatrixPosition(y.matrixWorld);const U=ee.distanceTo(ae),Q=P.projectionMatrix.elements,$=y.projectionMatrix.elements,ce=Q[14]/(Q[10]-1),ue=Q[14]/(Q[10]+1),Ae=(Q[9]+1)/Q[5],se=(Q[9]-1)/Q[5],oe=(Q[8]-1)/Q[0],be=($[8]+1)/$[0],Ve=ce*oe,Ye=ce*be,at=U/(-oe+be),tt=at*-oe;if(P.matrixWorld.decompose(C.position,C.quaternion,C.scale),C.translateX(tt),C.translateZ(at),C.matrixWorld.compose(C.position,C.quaternion,C.scale),C.matrixWorldInverse.copy(C.matrixWorld).invert(),Q[10]===-1)C.projectionMatrix.copy(P.projectionMatrix),C.projectionMatrixInverse.copy(P.projectionMatrixInverse);else{const ot=ce+at,F=ue+at,$e=Ve-tt,et=Ye+(U-tt),A=Ae*ue/F*ot,g=se*ue/F*ot;C.projectionMatrix.makePerspective($e,et,A,g,ot,F),C.projectionMatrixInverse.copy(C.projectionMatrix).invert()}}function le(C,P){P===null?C.matrixWorld.copy(C.matrix):C.matrixWorld.multiplyMatrices(P.matrixWorld,C.matrix),C.matrixWorldInverse.copy(C.matrixWorld).invert()}this.updateCamera=function(C){if(r===null)return;let P=C.near,y=C.far;m.texture!==null&&(m.depthNear>0&&(P=m.depthNear),m.depthFar>0&&(y=m.depthFar)),O.near=D.near=E.near=P,O.far=D.far=E.far=y,(q!==O.near||ne!==O.far)&&(r.updateRenderState({depthNear:O.near,depthFar:O.far}),q=O.near,ne=O.far),O.layers.mask=C.layers.mask|6,E.layers.mask=O.layers.mask&-5,D.layers.mask=O.layers.mask&-3;const U=C.parent,Q=O.cameras;le(O,U);for(let $=0;$<Q.length;$++)le(Q[$],U);Q.length===2?K(O,E,D):O.projectionMatrix.copy(E.projectionMatrix),he(C,O,U)};function he(C,P,y){y===null?C.matrix.copy(P.matrixWorld):(C.matrix.copy(y.matrixWorld),C.matrix.invert(),C.matrix.multiply(P.matrixWorld)),C.matrix.decompose(C.position,C.quaternion,C.scale),C.updateMatrixWorld(!0),C.projectionMatrix.copy(P.projectionMatrix),C.projectionMatrixInverse.copy(P.projectionMatrixInverse),C.isPerspectiveCamera&&(C.fov=kr*2*Math.atan(1/C.projectionMatrix.elements[5]),C.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(d===null&&h===null))return l},this.setFoveation=function(C){l=C,d!==null&&(d.fixedFoveation=C),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=C)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(O)},this.getCameraTexture=function(C){return p[C]};let We=null;function st(C,P){if(u=P.getViewerPose(c||a),_=P,u!==null){const y=u.views;h!==null&&(e.setRenderTargetFramebuffer(v,h.framebuffer),e.setRenderTarget(v));let U=!1;y.length!==O.cameras.length&&(O.cameras.length=0,U=!0);for(let ue=0;ue<y.length;ue++){const Ae=y[ue];let se=null;if(h!==null)se=h.getViewport(Ae);else{const be=f.getViewSubImage(d,Ae);se=be.viewport,ue===0&&(e.setRenderTargetTextures(v,be.colorTexture,be.depthStencilTexture),e.setRenderTarget(v))}let oe=L[ue];oe===void 0&&(oe=new Qt,oe.layers.enable(ue),oe.viewport=new St,L[ue]=oe),oe.matrix.fromArray(Ae.transform.matrix),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale),oe.projectionMatrix.fromArray(Ae.projectionMatrix),oe.projectionMatrixInverse.copy(oe.projectionMatrix).invert(),oe.viewport.set(se.x,se.y,se.width,se.height),ue===0&&(O.matrix.copy(oe.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),U===!0&&O.cameras.push(oe)}const Q=r.enabledFeatures;if(Q&&Q.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&S){f=n.getBinding();const ue=f.getDepthInformation(y[0]);ue&&ue.isValid&&ue.texture&&m.init(ue,r.renderState)}if(Q&&Q.includes("camera-access")&&S){e.state.unbindTexture(),f=n.getBinding();for(let ue=0;ue<y.length;ue++){const Ae=y[ue].camera;if(Ae){let se=p[Ae];se||(se=new vd,p[Ae]=se);const oe=f.getCameraImage(Ae);se.sourceTexture=oe}}}}for(let y=0;y<T.length;y++){const U=b[y],Q=T[y];U!==null&&Q!==void 0&&Q.update(U,P,c||a)}We&&We(C,P),P.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:P}),_=null}const Ne=new Ed;Ne.setAnimationLoop(st),this.setAnimationLoop=function(C){We=C},this.dispose=function(){}}}const w_=new vt,Id=new Be;Id.set(-1,0,0,0,1,0,0,0,1);function R_(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Md(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,w,R,v){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?s(m,p):p.isMeshLambertMaterial?(s(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(s(m,p),f(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(s(m,p),d(m,p),p.isMeshPhysicalMaterial&&h(m,p,v)):p.isMeshMatcapMaterial?(s(m,p),_(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),S(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,w,R):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Yt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Yt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const w=e.get(p),R=w.envMap,v=w.envMapRotation;R&&(m.envMap.value=R,m.envMapRotation.value.setFromMatrix4(w_.makeRotationFromEuler(v)).transpose(),R.isCubeTexture&&R.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Id),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,w,R){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*w,m.scale.value=R*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function h(m,p,w){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Yt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function S(m,p){const w=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function C_(i,e,t,n){let r={},s={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,T){const b=T.program;n.uniformBlockBinding(v,b)}function c(v,T){let b=r[v.id];b===void 0&&(m(v),b=u(v),r[v.id]=b,v.addEventListener("dispose",w));const I=T.program;n.updateUBOMapping(v,I);const x=e.render.frame;s[v.id]!==x&&(d(v),s[v.id]=x)}function u(v){const T=f();v.__bindingPointIndex=T;const b=i.createBuffer(),I=v.__size,x=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,I,x),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,T,b),b}function f(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return Qe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){const T=r[v.id],b=v.uniforms,I=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,T);for(let x=0,E=b.length;x<E;x++){const D=b[x];if(Array.isArray(D))for(let L=0,O=D.length;L<O;L++)h(D[L],x,L,I);else h(D,x,0,I)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(v,T,b,I){if(S(v,T,b,I)===!0){const x=v.__offset,E=v.value;if(Array.isArray(E)){let D=0;for(let L=0;L<E.length;L++){const O=E[L],q=p(O);_(O,v.__data,D),typeof O!="number"&&typeof O!="boolean"&&!O.isMatrix3&&!ArrayBuffer.isView(O)&&(D+=q.storage/Float32Array.BYTES_PER_ELEMENT)}}else _(E,v.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,x,v.__data)}}function _(v,T,b){typeof v=="number"||typeof v=="boolean"?T[0]=v:v.isMatrix3?(T[0]=v.elements[0],T[1]=v.elements[1],T[2]=v.elements[2],T[3]=0,T[4]=v.elements[3],T[5]=v.elements[4],T[6]=v.elements[5],T[7]=0,T[8]=v.elements[6],T[9]=v.elements[7],T[10]=v.elements[8],T[11]=0):ArrayBuffer.isView(v)?T.set(new v.constructor(v.buffer,v.byteOffset,T.length)):v.toArray(T,b)}function S(v,T,b,I){const x=v.value,E=T+"_"+b;if(I[E]===void 0)return typeof x=="number"||typeof x=="boolean"?I[E]=x:ArrayBuffer.isView(x)?I[E]=x.slice():I[E]=x.clone(),!0;{const D=I[E];if(typeof x=="number"||typeof x=="boolean"){if(D!==x)return I[E]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(D.equals(x)===!1)return D.copy(x),!0}}return!1}function m(v){const T=v.uniforms;let b=0;const I=16;for(let E=0,D=T.length;E<D;E++){const L=Array.isArray(T[E])?T[E]:[T[E]];for(let O=0,q=L.length;O<q;O++){const ne=L[O],H=Array.isArray(ne.value)?ne.value:[ne.value];for(let j=0,W=H.length;j<W;j++){const ee=H[j],ae=p(ee),K=b%I,le=K%ae.boundary,he=K+le;b+=le,he!==0&&I-he<ae.storage&&(b+=I-he),ne.__data=new Float32Array(ae.storage/Float32Array.BYTES_PER_ELEMENT),ne.__offset=b,b+=ae.storage}}}const x=b%I;return x>0&&(b+=I-x),v.__size=b,v.__cache={},this}function p(v){const T={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(T.boundary=4,T.storage=4):v.isVector2?(T.boundary=8,T.storage=8):v.isVector3||v.isColor?(T.boundary=16,T.storage=12):v.isVector4?(T.boundary=16,T.storage=16):v.isMatrix3?(T.boundary=48,T.storage=48):v.isMatrix4?(T.boundary=64,T.storage=64):v.isTexture?ke("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(T.boundary=16,T.storage=v.byteLength):ke("WebGLRenderer: Unsupported uniform value type.",v),T}function w(v){const T=v.target;T.removeEventListener("dispose",w);const b=a.indexOf(T.__bindingPointIndex);a.splice(b,1),i.deleteBuffer(r[T.id]),delete r[T.id],delete s[T.id]}function R(){for(const v in r)i.deleteBuffer(r[v]);a=[],r={},s={}}return{bind:l,update:c,dispose:R}}const P_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let yn=null;function I_(){return yn===null&&(yn=new pf(P_,16,16,yi,Gn),yn.name="DFG_LUT",yn.minFilter=Rt,yn.magFilter=Rt,yn.wrapS=kn,yn.wrapT=kn,yn.generateMipmaps=!1,yn.needsUpdate=!0),yn}class L_{constructor(e={}){const{canvas:t=Ru(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1,outputBufferType:h=jt}=e;this.isWebGLRenderer=!0;let _;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=n.getContextAttributes().alpha}else _=a;const S=h,m=new Set([ko,Oo,Fo]),p=new Set([jt,Cn,Ur,Nr,Uo,No]),w=new Uint32Array(4),R=new Int32Array(4),v=new z;let T=null,b=null;const I=[],x=[];let E=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=An,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const D=this;let L=!1,O=null,q=null,ne=null,H=null;this._outputColorSpace=Xt;let j=0,W=0,ee=null,ae=-1,K=null;const le=new St,he=new St;let We=null;const st=new Je(0);let Ne=0,C=t.width,P=t.height,y=1,U=null,Q=null;const $=new St(0,0,C,P),ce=new St(0,0,C,P);let ue=!1;const Ae=new Yo;let se=!1,oe=!1;const be=new vt,Ve=new z,Ye=new St,at={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let tt=!1;function ot(){return ee===null?y:1}let F=n;function $e(M,k){return t.getContext(M,k)}try{const M={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Lo}`),t.addEventListener("webglcontextlost",yt,!1),t.addEventListener("webglcontextrestored",gt,!1),t.addEventListener("webglcontextcreationerror",xn,!1),F===null){const k="webgl2";if(F=$e(k,M),F===null)throw $e(k)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(M){throw Qe("WebGLRenderer: "+M.message),M}let et,A,g,B,X,Z,de,pe,J,ie,me,Pe,xe,ge,De,Oe,He,N,fe,te,_e,ye,re;function Ce(){et=new Im(F),et.init(),_e=new y_(F,et),A=new bm(F,et,e,_e),g=new M_(F,et),A.reversedDepthBuffer&&d&&g.buffers.depth.setReversed(!0),q=F.createFramebuffer(),ne=F.createFramebuffer(),H=F.createFramebuffer(),B=new Um(F),X=new a_,Z=new S_(F,et,g,X,A,_e,B),de=new Pm(D),pe=new kf(F),ye=new Sm(F,pe),J=new Lm(F,pe,B,ye),ie=new Fm(F,J,pe,ye,B),N=new Nm(F,A,Z),De=new Em(X),me=new s_(D,de,et,A,ye,De),Pe=new R_(D,X),xe=new l_,ge=new p_(et),He=new Mm(D,de,g,ie,_,l),Oe=new v_(D,ie,A),re=new C_(F,B,A,g),fe=new ym(F,et,B),te=new Dm(F,et,B),B.programs=me.programs,D.capabilities=A,D.extensions=et,D.properties=X,D.renderLists=xe,D.shadowMap=Oe,D.state=g,D.info=B}Ce(),S!==jt&&(E=new km(S,t.width,t.height,o,r,s));const we=new A_(D,F);this.xr=we,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const M=et.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=et.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return y},this.setPixelRatio=function(M){M!==void 0&&(y=M,this.setSize(C,P,!1))},this.getSize=function(M){return M.set(C,P)},this.setSize=function(M,k,Y=!0){if(we.isPresenting){ke("WebGLRenderer: Can't change size while VR device is presenting.");return}C=M,P=k,t.width=Math.floor(M*y),t.height=Math.floor(k*y),Y===!0&&(t.style.width=M+"px",t.style.height=k+"px"),E!==null&&E.setSize(t.width,t.height),this.setViewport(0,0,M,k)},this.getDrawingBufferSize=function(M){return M.set(C*y,P*y).floor()},this.setDrawingBufferSize=function(M,k,Y){C=M,P=k,y=Y,t.width=Math.floor(M*Y),t.height=Math.floor(k*Y),this.setViewport(0,0,M,k)},this.setEffects=function(M){if(S===jt){Qe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let k=0;k<M.length;k++)if(M[k].isOutputPass===!0){ke("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(le)},this.getViewport=function(M){return M.copy($)},this.setViewport=function(M,k,Y,G){M.isVector4?$.set(M.x,M.y,M.z,M.w):$.set(M,k,Y,G),g.viewport(le.copy($).multiplyScalar(y).round())},this.getScissor=function(M){return M.copy(ce)},this.setScissor=function(M,k,Y,G){M.isVector4?ce.set(M.x,M.y,M.z,M.w):ce.set(M,k,Y,G),g.scissor(he.copy(ce).multiplyScalar(y).round())},this.getScissorTest=function(){return ue},this.setScissorTest=function(M){g.setScissorTest(ue=M)},this.setOpaqueSort=function(M){U=M},this.setTransparentSort=function(M){Q=M},this.getClearColor=function(M){return M.copy(He.getClearColor())},this.setClearColor=function(){He.setClearColor(...arguments)},this.getClearAlpha=function(){return He.getClearAlpha()},this.setClearAlpha=function(){He.setClearAlpha(...arguments)},this.clear=function(M=!0,k=!0,Y=!0){let G=0;if(M){let V=!1;if(ee!==null){const Se=ee.texture.format;V=m.has(Se)}if(V){const Se=ee.texture.type,Te=p.has(Se),Me=He.getClearColor(),Re=He.getClearAlpha(),Ie=Me.r,Ge=Me.g,qe=Me.b;Te?(w[0]=Ie,w[1]=Ge,w[2]=qe,w[3]=Re,F.clearBufferuiv(F.COLOR,0,w)):(R[0]=Ie,R[1]=Ge,R[2]=qe,R[3]=Re,F.clearBufferiv(F.COLOR,0,R))}else G|=F.COLOR_BUFFER_BIT}k&&(G|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Y&&(G|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G!==0&&F.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),O=M},this.dispose=function(){t.removeEventListener("webglcontextlost",yt,!1),t.removeEventListener("webglcontextrestored",gt,!1),t.removeEventListener("webglcontextcreationerror",xn,!1),He.dispose(),xe.dispose(),ge.dispose(),X.dispose(),de.dispose(),ie.dispose(),ye.dispose(),re.dispose(),me.dispose(),we.dispose(),we.removeEventListener("sessionstart",ol),we.removeEventListener("sessionend",ll),li.stop()};function yt(M){M.preventDefault(),Ls("WebGLRenderer: Context Lost."),L=!0}function gt(){Ls("WebGLRenderer: Context Restored."),L=!1;const M=B.autoReset,k=Oe.enabled,Y=Oe.autoUpdate,G=Oe.needsUpdate,V=Oe.type;Ce(),B.autoReset=M,Oe.enabled=k,Oe.autoUpdate=Y,Oe.needsUpdate=G,Oe.type=V}function xn(M){Qe("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function vn(M){const k=M.target;k.removeEventListener("dispose",vn),Gd(k)}function Gd(M){Vd(M),X.remove(M)}function Vd(M){const k=X.get(M).programs;k!==void 0&&(k.forEach(function(Y){me.releaseProgram(Y)}),M.isShaderMaterial&&me.releaseShaderCache(M))}this.renderBufferDirect=function(M,k,Y,G,V,Se){k===null&&(k=at);const Te=V.isMesh&&V.matrixWorld.determinantAffine()<0,Me=Yd(M,k,Y,G,V);g.setMaterial(G,Te);let Re=Y.index,Ie=1;if(G.wireframe===!0){if(Re=J.getWireframeAttribute(Y),Re===void 0)return;Ie=2}const Ge=Y.drawRange,qe=Y.attributes.position;let Le=Ge.start*Ie,ft=(Ge.start+Ge.count)*Ie;Se!==null&&(Le=Math.max(Le,Se.start*Ie),ft=Math.min(ft,(Se.start+Se.count)*Ie)),Re!==null?(Le=Math.max(Le,0),ft=Math.min(ft,Re.count)):qe!=null&&(Le=Math.max(Le,0),ft=Math.min(ft,qe.count));const Et=ft-Le;if(Et<0||Et===1/0)return;ye.setup(V,G,Me,Y,Re);let bt,pt=fe;if(Re!==null&&(bt=pe.get(Re),pt=te,pt.setIndex(bt)),V.isMesh)G.wireframe===!0?(g.setLineWidth(G.wireframeLinewidth*ot()),pt.setMode(F.LINES)):pt.setMode(F.TRIANGLES);else if(V.isLine){let Ft=G.linewidth;Ft===void 0&&(Ft=1),g.setLineWidth(Ft*ot()),V.isLineSegments?pt.setMode(F.LINES):V.isLineLoop?pt.setMode(F.LINE_LOOP):pt.setMode(F.LINE_STRIP)}else V.isPoints?pt.setMode(F.POINTS):V.isSprite&&pt.setMode(F.TRIANGLES);if(V.isBatchedMesh)if(et.get("WEBGL_multi_draw"))pt.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const Ft=V._multiDrawStarts,Ee=V._multiDrawCounts,Kt=V._multiDrawCount,nt=Re?pe.get(Re).bytesPerElement:1,en=X.get(G).currentProgram.getUniforms();for(let Mn=0;Mn<Kt;Mn++)en.setValue(F,"_gl_DrawID",Mn),pt.render(Ft[Mn]/nt,Ee[Mn])}else if(V.isInstancedMesh)pt.renderInstances(Le,Et,V.count);else if(Y.isInstancedBufferGeometry){const Ft=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,Ee=Math.min(Y.instanceCount,Ft);pt.renderInstances(Le,Et,Ee)}else pt.render(Le,Et)};function al(M,k,Y){M.transparent===!0&&M.side===On&&M.forceSinglePass===!1?(M.side=Yt,M.needsUpdate=!0,Vr(M,k,Y),M.side=si,M.needsUpdate=!0,Vr(M,k,Y),M.side=On):Vr(M,k,Y)}this.compile=function(M,k,Y=null){Y===null&&(Y=M),b=ge.get(Y),b.init(k),x.push(b),Y.traverseVisible(function(V){V.isLight&&V.layers.test(k.layers)&&(b.pushLight(V),V.castShadow&&b.pushShadow(V))}),M!==Y&&M.traverseVisible(function(V){V.isLight&&V.layers.test(k.layers)&&(b.pushLight(V),V.castShadow&&b.pushShadow(V))}),b.setupLights();const G=new Set;return M.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;const Se=V.material;if(Se)if(Array.isArray(Se))for(let Te=0;Te<Se.length;Te++){const Me=Se[Te];al(Me,Y,V),G.add(Me)}else al(Se,Y,V),G.add(Se)}),b=x.pop(),G},this.compileAsync=function(M,k,Y=null){const G=this.compile(M,k,Y);return new Promise(V=>{function Se(){if(G.forEach(function(Te){X.get(Te).currentProgram.isReady()&&G.delete(Te)}),G.size===0){V(M);return}setTimeout(Se,10)}et.get("KHR_parallel_shader_compile")!==null?Se():setTimeout(Se,10)})};let Hs=null;function Wd(M){Hs&&Hs(M)}function ol(){li.stop()}function ll(){li.start()}const li=new Ed;li.setAnimationLoop(Wd),typeof self<"u"&&li.setContext(self),this.setAnimationLoop=function(M){Hs=M,we.setAnimationLoop(M),M===null?li.stop():li.start()},we.addEventListener("sessionstart",ol),we.addEventListener("sessionend",ll),this.render=function(M,k){if(k!==void 0&&k.isCamera!==!0){Qe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;O!==null&&O.renderStart(M,k);const Y=we.enabled===!0&&we.isPresenting===!0,G=E!==null&&(ee===null||Y)&&E.begin(D,ee);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),we.enabled===!0&&we.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(we.cameraAutoUpdate===!0&&we.updateCamera(k),k=we.getCamera()),M.isScene===!0&&M.onBeforeRender(D,M,k,ee),b=ge.get(M,x.length),b.init(k),b.state.textureUnits=Z.getTextureUnits(),x.push(b),be.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),Ae.setFromProjectionMatrix(be,Tn,k.reversedDepth),oe=this.localClippingEnabled,se=De.init(this.clippingPlanes,oe),T=xe.get(M,I.length),T.init(),I.push(T),we.enabled===!0&&we.isPresenting===!0){const Te=D.xr.getDepthSensingMesh();Te!==null&&Gs(Te,k,-1/0,D.sortObjects)}Gs(M,k,0,D.sortObjects),T.finish(),D.sortObjects===!0&&T.sort(U,Q,k.reversedDepth),tt=we.enabled===!1||we.isPresenting===!1||we.hasDepthSensing()===!1,tt&&He.addToRenderList(T,M),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),se===!0&&De.beginShadows();const V=b.state.shadowsArray;if(Oe.render(V,M,k),se===!0&&De.endShadows(),(G&&E.hasRenderPass())===!1){const Te=T.opaque,Me=T.transmissive;if(b.setupLights(),k.isArrayCamera){const Re=k.cameras;if(Me.length>0)for(let Ie=0,Ge=Re.length;Ie<Ge;Ie++){const qe=Re[Ie];dl(Te,Me,M,qe)}tt&&He.render(M);for(let Ie=0,Ge=Re.length;Ie<Ge;Ie++){const qe=Re[Ie];cl(T,M,qe,qe.viewport)}}else Me.length>0&&dl(Te,Me,M,k),tt&&He.render(M),cl(T,M,k)}ee!==null&&W===0&&(Z.updateMultisampleRenderTarget(ee),Z.updateRenderTargetMipmap(ee)),G&&E.end(D),M.isScene===!0&&M.onAfterRender(D,M,k),ye.resetDefaultState(),ae=-1,K=null,x.pop(),x.length>0?(b=x[x.length-1],Z.setTextureUnits(b.state.textureUnits),se===!0&&De.setGlobalState(D.clippingPlanes,b.state.camera)):b=null,I.pop(),I.length>0?T=I[I.length-1]:T=null,O!==null&&O.renderEnd()};function Gs(M,k,Y,G){if(M.visible===!1)return;if(M.layers.test(k.layers)){if(M.isGroup)Y=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(k);else if(M.isLightProbeGrid)b.pushLightProbeGrid(M);else if(M.isLight)b.pushLight(M),M.castShadow&&b.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||Ae.intersectsSprite(M)){G&&Ye.setFromMatrixPosition(M.matrixWorld).applyMatrix4(be);const Te=ie.update(M),Me=M.material;Me.visible&&T.push(M,Te,Me,Y,Ye.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||Ae.intersectsObject(M))){const Te=ie.update(M),Me=M.material;if(G&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Ye.copy(M.boundingSphere.center)):(Te.boundingSphere===null&&Te.computeBoundingSphere(),Ye.copy(Te.boundingSphere.center)),Ye.applyMatrix4(M.matrixWorld).applyMatrix4(be)),Array.isArray(Me)){const Re=Te.groups;for(let Ie=0,Ge=Re.length;Ie<Ge;Ie++){const qe=Re[Ie],Le=Me[qe.materialIndex];Le&&Le.visible&&T.push(M,Te,Le,Y,Ye.z,qe)}}else Me.visible&&T.push(M,Te,Me,Y,Ye.z,null)}}const Se=M.children;for(let Te=0,Me=Se.length;Te<Me;Te++)Gs(Se[Te],k,Y,G)}function cl(M,k,Y,G){const{opaque:V,transmissive:Se,transparent:Te}=M;b.setupLightsView(Y),se===!0&&De.setGlobalState(D.clippingPlanes,Y),G&&g.viewport(le.copy(G)),V.length>0&&Gr(V,k,Y),Se.length>0&&Gr(Se,k,Y),Te.length>0&&Gr(Te,k,Y),g.buffers.depth.setTest(!0),g.buffers.depth.setMask(!0),g.buffers.color.setMask(!0),g.setPolygonOffset(!1)}function dl(M,k,Y,G){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[G.id]===void 0){const Le=et.has("EXT_color_buffer_half_float")||et.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[G.id]=new wn(1,1,{generateMipmaps:!0,type:Le?Gn:jt,minFilter:xi,samples:Math.max(4,A.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:je.workingColorSpace})}const Se=b.state.transmissionRenderTarget[G.id],Te=G.viewport||le;Se.setSize(Te.z*D.transmissionResolutionScale,Te.w*D.transmissionResolutionScale);const Me=D.getRenderTarget(),Re=D.getActiveCubeFace(),Ie=D.getActiveMipmapLevel();D.setRenderTarget(Se),D.getClearColor(st),Ne=D.getClearAlpha(),Ne<1&&D.setClearColor(16777215,.5),D.clear(),tt&&He.render(Y);const Ge=D.toneMapping;D.toneMapping=An;const qe=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),b.setupLightsView(G),se===!0&&De.setGlobalState(D.clippingPlanes,G),Gr(M,Y,G),Z.updateMultisampleRenderTarget(Se),Z.updateRenderTargetMipmap(Se),et.has("WEBGL_multisampled_render_to_texture")===!1){let Le=!1;for(let ft=0,Et=k.length;ft<Et;ft++){const bt=k[ft],{object:pt,geometry:Ft,material:Ee,group:Kt}=bt;if(Ee.side===On&&pt.layers.test(G.layers)){const nt=Ee.side;Ee.side=Yt,Ee.needsUpdate=!0,ul(pt,Y,G,Ft,Ee,Kt),Ee.side=nt,Ee.needsUpdate=!0,Le=!0}}Le===!0&&(Z.updateMultisampleRenderTarget(Se),Z.updateRenderTargetMipmap(Se))}D.setRenderTarget(Me,Re,Ie),D.setClearColor(st,Ne),qe!==void 0&&(G.viewport=qe),D.toneMapping=Ge}function Gr(M,k,Y){const G=k.isScene===!0?k.overrideMaterial:null;for(let V=0,Se=M.length;V<Se;V++){const Te=M[V],{object:Me,geometry:Re,group:Ie}=Te;let Ge=Te.material;Ge.allowOverride===!0&&G!==null&&(Ge=G),Me.layers.test(Y.layers)&&ul(Me,k,Y,Re,Ge,Ie)}}function ul(M,k,Y,G,V,Se){M.onBeforeRender(D,k,Y,G,V,Se),M.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),V.onBeforeRender(D,k,Y,G,M,Se),V.transparent===!0&&V.side===On&&V.forceSinglePass===!1?(V.side=Yt,V.needsUpdate=!0,D.renderBufferDirect(Y,k,G,V,M,Se),V.side=si,V.needsUpdate=!0,D.renderBufferDirect(Y,k,G,V,M,Se),V.side=On):D.renderBufferDirect(Y,k,G,V,M,Se),M.onAfterRender(D,k,Y,G,V,Se)}function Vr(M,k,Y){k.isScene!==!0&&(k=at);const G=X.get(M),V=b.state.lights,Se=b.state.shadowsArray,Te=V.state.version,Me=me.getParameters(M,V.state,Se,k,Y,b.state.lightProbeGridArray),Re=me.getProgramCacheKey(Me);let Ie=G.programs;G.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?k.environment:null,G.fog=k.fog;const Ge=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;G.envMap=de.get(M.envMap||G.environment,Ge),G.envMapRotation=G.environment!==null&&M.envMap===null?k.environmentRotation:M.envMapRotation,Ie===void 0&&(M.addEventListener("dispose",vn),Ie=new Map,G.programs=Ie);let qe=Ie.get(Re);if(qe!==void 0){if(G.currentProgram===qe&&G.lightsStateVersion===Te)return hl(M,Me),qe}else Me.uniforms=me.getUniforms(M),O!==null&&M.isNodeMaterial&&O.build(M,Y,Me),M.onBeforeCompile(Me,D),qe=me.acquireProgram(Me,Re),Ie.set(Re,qe),G.uniforms=Me.uniforms;const Le=G.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Le.clippingPlanes=De.uniform),hl(M,Me),G.needsLights=$d(M),G.lightsStateVersion=Te,G.needsLights&&(Le.ambientLightColor.value=V.state.ambient,Le.lightProbe.value=V.state.probe,Le.directionalLights.value=V.state.directional,Le.directionalLightShadows.value=V.state.directionalShadow,Le.spotLights.value=V.state.spot,Le.spotLightShadows.value=V.state.spotShadow,Le.rectAreaLights.value=V.state.rectArea,Le.ltc_1.value=V.state.rectAreaLTC1,Le.ltc_2.value=V.state.rectAreaLTC2,Le.pointLights.value=V.state.point,Le.pointLightShadows.value=V.state.pointShadow,Le.hemisphereLights.value=V.state.hemi,Le.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Le.spotLightMatrix.value=V.state.spotLightMatrix,Le.spotLightMap.value=V.state.spotLightMap,Le.pointShadowMatrix.value=V.state.pointShadowMatrix),G.lightProbeGrid=b.state.lightProbeGridArray.length>0,G.currentProgram=qe,G.uniformsList=null,qe}function fl(M){if(M.uniformsList===null){const k=M.currentProgram.getUniforms();M.uniformsList=Ts.seqWithValue(k.seq,M.uniforms)}return M.uniformsList}function hl(M,k){const Y=X.get(M);Y.outputColorSpace=k.outputColorSpace,Y.batching=k.batching,Y.batchingColor=k.batchingColor,Y.instancing=k.instancing,Y.instancingColor=k.instancingColor,Y.instancingMorph=k.instancingMorph,Y.skinning=k.skinning,Y.morphTargets=k.morphTargets,Y.morphNormals=k.morphNormals,Y.morphColors=k.morphColors,Y.morphTargetsCount=k.morphTargetsCount,Y.numClippingPlanes=k.numClippingPlanes,Y.numIntersection=k.numClipIntersection,Y.vertexAlphas=k.vertexAlphas,Y.vertexTangents=k.vertexTangents,Y.toneMapping=k.toneMapping}function Xd(M,k){if(M.length===0)return null;if(M.length===1)return M[0].texture!==null?M[0]:null;v.setFromMatrixPosition(k.matrixWorld);for(let Y=0,G=M.length;Y<G;Y++){const V=M[Y];if(V.texture!==null&&V.boundingBox.containsPoint(v))return V}return null}function Yd(M,k,Y,G,V){k.isScene!==!0&&(k=at),Z.resetTextureUnits();const Se=k.fog,Te=G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial?k.environment:null,Me=ee===null?D.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:je.workingColorSpace,Re=G.isMeshStandardMaterial||G.isMeshLambertMaterial&&!G.envMap||G.isMeshPhongMaterial&&!G.envMap,Ie=de.get(G.envMap||Te,Re),Ge=G.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,qe=!!Y.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Le=!!Y.morphAttributes.position,ft=!!Y.morphAttributes.normal,Et=!!Y.morphAttributes.color;let bt=An;G.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(bt=D.toneMapping);const pt=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,Ft=pt!==void 0?pt.length:0,Ee=X.get(G),Kt=b.state.lights;if(se===!0&&(oe===!0||M!==K)){const _t=M===K&&G.id===ae;De.setState(G,M,_t)}let nt=!1;G.version===Ee.__version?(Ee.needsLights&&Ee.lightsStateVersion!==Kt.state.version||Ee.outputColorSpace!==Me||V.isBatchedMesh&&Ee.batching===!1||!V.isBatchedMesh&&Ee.batching===!0||V.isBatchedMesh&&Ee.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&Ee.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&Ee.instancing===!1||!V.isInstancedMesh&&Ee.instancing===!0||V.isSkinnedMesh&&Ee.skinning===!1||!V.isSkinnedMesh&&Ee.skinning===!0||V.isInstancedMesh&&Ee.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Ee.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Ee.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Ee.instancingMorph===!1&&V.morphTexture!==null||Ee.envMap!==Ie||G.fog===!0&&Ee.fog!==Se||Ee.numClippingPlanes!==void 0&&(Ee.numClippingPlanes!==De.numPlanes||Ee.numIntersection!==De.numIntersection)||Ee.vertexAlphas!==Ge||Ee.vertexTangents!==qe||Ee.morphTargets!==Le||Ee.morphNormals!==ft||Ee.morphColors!==Et||Ee.toneMapping!==bt||Ee.morphTargetsCount!==Ft||!!Ee.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(nt=!0):(nt=!0,Ee.__version=G.version);let en=Ee.currentProgram;nt===!0&&(en=Vr(G,k,V),O&&G.isNodeMaterial&&O.onUpdateProgram(G,en,Ee));let Mn=!1,Wn=!1,Ri=!1;const mt=en.getUniforms(),Tt=Ee.uniforms;if(g.useProgram(en.program)&&(Mn=!0,Wn=!0,Ri=!0),G.id!==ae&&(ae=G.id,Wn=!0),Ee.needsLights){const _t=Xd(b.state.lightProbeGridArray,V);Ee.lightProbeGrid!==_t&&(Ee.lightProbeGrid=_t,Wn=!0)}if(Mn||K!==M){g.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),mt.setValue(F,"projectionMatrix",M.projectionMatrix),mt.setValue(F,"viewMatrix",M.matrixWorldInverse);const Yn=mt.map.cameraPosition;Yn!==void 0&&Yn.setValue(F,Ve.setFromMatrixPosition(M.matrixWorld)),A.logarithmicDepthBuffer&&mt.setValue(F,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&mt.setValue(F,"isOrthographic",M.isOrthographicCamera===!0),K!==M&&(K=M,Wn=!0,Ri=!0)}if(Ee.needsLights&&(Kt.state.directionalShadowMap.length>0&&mt.setValue(F,"directionalShadowMap",Kt.state.directionalShadowMap,Z),Kt.state.spotShadowMap.length>0&&mt.setValue(F,"spotShadowMap",Kt.state.spotShadowMap,Z),Kt.state.pointShadowMap.length>0&&mt.setValue(F,"pointShadowMap",Kt.state.pointShadowMap,Z)),V.isSkinnedMesh){mt.setOptional(F,V,"bindMatrix"),mt.setOptional(F,V,"bindMatrixInverse");const _t=V.skeleton;_t&&(_t.boneTexture===null&&_t.computeBoneTexture(),mt.setValue(F,"boneTexture",_t.boneTexture,Z))}V.isBatchedMesh&&(mt.setOptional(F,V,"batchingTexture"),mt.setValue(F,"batchingTexture",V._matricesTexture,Z),mt.setOptional(F,V,"batchingIdTexture"),mt.setValue(F,"batchingIdTexture",V._indirectTexture,Z),mt.setOptional(F,V,"batchingColorTexture"),V._colorsTexture!==null&&mt.setValue(F,"batchingColorTexture",V._colorsTexture,Z));const Xn=Y.morphAttributes;if((Xn.position!==void 0||Xn.normal!==void 0||Xn.color!==void 0)&&N.update(V,Y,en),(Wn||Ee.receiveShadow!==V.receiveShadow)&&(Ee.receiveShadow=V.receiveShadow,mt.setValue(F,"receiveShadow",V.receiveShadow)),(G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial)&&G.envMap===null&&k.environment!==null&&(Tt.envMapIntensity.value=k.environmentIntensity),Tt.dfgLUT!==void 0&&(Tt.dfgLUT.value=I_()),Wn){if(mt.setValue(F,"toneMappingExposure",D.toneMappingExposure),Ee.needsLights&&qd(Tt,Ri),Se&&G.fog===!0&&Pe.refreshFogUniforms(Tt,Se),Pe.refreshMaterialUniforms(Tt,G,y,P,b.state.transmissionRenderTarget[M.id]),Ee.needsLights&&Ee.lightProbeGrid){const _t=Ee.lightProbeGrid;Tt.probesSH.value=_t.texture,Tt.probesMin.value.copy(_t.boundingBox.min),Tt.probesMax.value.copy(_t.boundingBox.max),Tt.probesResolution.value.copy(_t.resolution)}Ts.upload(F,fl(Ee),Tt,Z)}if(G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Ts.upload(F,fl(Ee),Tt,Z),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&mt.setValue(F,"center",V.center),mt.setValue(F,"modelViewMatrix",V.modelViewMatrix),mt.setValue(F,"normalMatrix",V.normalMatrix),mt.setValue(F,"modelMatrix",V.matrixWorld),G.uniformsGroups!==void 0){const _t=G.uniformsGroups;for(let Yn=0,Ci=_t.length;Yn<Ci;Yn++){const pl=_t[Yn];re.update(pl,en),re.bind(pl,en)}}return en}function qd(M,k){M.ambientLightColor.needsUpdate=k,M.lightProbe.needsUpdate=k,M.directionalLights.needsUpdate=k,M.directionalLightShadows.needsUpdate=k,M.pointLights.needsUpdate=k,M.pointLightShadows.needsUpdate=k,M.spotLights.needsUpdate=k,M.spotLightShadows.needsUpdate=k,M.rectAreaLights.needsUpdate=k,M.hemisphereLights.needsUpdate=k}function $d(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return j},this.getActiveMipmapLevel=function(){return W},this.getRenderTarget=function(){return ee},this.setRenderTargetTextures=function(M,k,Y){const G=X.get(M);G.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),X.get(M.texture).__webglTexture=k,X.get(M.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:Y,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,k){const Y=X.get(M);Y.__webglFramebuffer=k,Y.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(M,k=0,Y=0){ee=M,j=k,W=Y;let G=null,V=!1,Se=!1;if(M){const Me=X.get(M);if(Me.__useDefaultFramebuffer!==void 0){g.bindFramebuffer(F.FRAMEBUFFER,Me.__webglFramebuffer),le.copy(M.viewport),he.copy(M.scissor),We=M.scissorTest,g.viewport(le),g.scissor(he),g.setScissorTest(We),ae=-1;return}else if(Me.__webglFramebuffer===void 0)Z.setupRenderTarget(M);else if(Me.__hasExternalTextures)Z.rebindTextures(M,X.get(M.texture).__webglTexture,X.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const Ge=M.depthTexture;if(Me.__boundDepthTexture!==Ge){if(Ge!==null&&X.has(Ge)&&(M.width!==Ge.image.width||M.height!==Ge.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Z.setupDepthRenderbuffer(M)}}const Re=M.texture;(Re.isData3DTexture||Re.isDataArrayTexture||Re.isCompressedArrayTexture)&&(Se=!0);const Ie=X.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Ie[k])?G=Ie[k][Y]:G=Ie[k],V=!0):M.samples>0&&Z.useMultisampledRTT(M)===!1?G=X.get(M).__webglMultisampledFramebuffer:Array.isArray(Ie)?G=Ie[Y]:G=Ie,le.copy(M.viewport),he.copy(M.scissor),We=M.scissorTest}else le.copy($).multiplyScalar(y).floor(),he.copy(ce).multiplyScalar(y).floor(),We=ue;if(Y!==0&&(G=q),g.bindFramebuffer(F.FRAMEBUFFER,G)&&g.drawBuffers(M,G),g.viewport(le),g.scissor(he),g.setScissorTest(We),V){const Me=X.get(M.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+k,Me.__webglTexture,Y)}else if(Se){const Me=k;for(let Re=0;Re<M.textures.length;Re++){const Ie=X.get(M.textures[Re]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+Re,Ie.__webglTexture,Y,Me)}}else if(M!==null&&Y!==0){const Me=X.get(M.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Me.__webglTexture,Y)}ae=-1},this.readRenderTargetPixels=function(M,k,Y,G,V,Se,Te,Me=0){if(!(M&&M.isWebGLRenderTarget)){Qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Re=X.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Te!==void 0&&(Re=Re[Te]),Re){g.bindFramebuffer(F.FRAMEBUFFER,Re);try{const Ie=M.textures[Me],Ge=Ie.format,qe=Ie.type;if(M.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Me),!A.textureFormatReadable(Ge)){Qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!A.textureTypeReadable(qe)){Qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=M.width-G&&Y>=0&&Y<=M.height-V&&F.readPixels(k,Y,G,V,_e.convert(Ge),_e.convert(qe),Se)}finally{const Ie=ee!==null?X.get(ee).__webglFramebuffer:null;g.bindFramebuffer(F.FRAMEBUFFER,Ie)}}},this.readRenderTargetPixelsAsync=async function(M,k,Y,G,V,Se,Te,Me=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Re=X.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Te!==void 0&&(Re=Re[Te]),Re)if(k>=0&&k<=M.width-G&&Y>=0&&Y<=M.height-V){g.bindFramebuffer(F.FRAMEBUFFER,Re);const Ie=M.textures[Me],Ge=Ie.format,qe=Ie.type;if(M.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Me),!A.textureFormatReadable(Ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!A.textureTypeReadable(qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Le=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,Le),F.bufferData(F.PIXEL_PACK_BUFFER,Se.byteLength,F.STREAM_READ),F.readPixels(k,Y,G,V,_e.convert(Ge),_e.convert(qe),0);const ft=ee!==null?X.get(ee).__webglFramebuffer:null;g.bindFramebuffer(F.FRAMEBUFFER,ft);const Et=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await Cu(F,Et,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,Le),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,Se),F.deleteBuffer(Le),F.deleteSync(Et),Se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,k=null,Y=0){const G=Math.pow(2,-Y),V=Math.floor(M.image.width*G),Se=Math.floor(M.image.height*G),Te=k!==null?k.x:0,Me=k!==null?k.y:0;Z.setTexture2D(M,0),F.copyTexSubImage2D(F.TEXTURE_2D,Y,0,0,Te,Me,V,Se),g.unbindTexture()},this.copyTextureToTexture=function(M,k,Y=null,G=null,V=0,Se=0){let Te,Me,Re,Ie,Ge,qe,Le,ft,Et;const bt=M.isCompressedTexture?M.mipmaps[Se]:M.image;if(Y!==null)Te=Y.max.x-Y.min.x,Me=Y.max.y-Y.min.y,Re=Y.isBox3?Y.max.z-Y.min.z:1,Ie=Y.min.x,Ge=Y.min.y,qe=Y.isBox3?Y.min.z:0;else{const Tt=Math.pow(2,-V);Te=Math.floor(bt.width*Tt),Me=Math.floor(bt.height*Tt),M.isDataArrayTexture?Re=bt.depth:M.isData3DTexture?Re=Math.floor(bt.depth*Tt):Re=1,Ie=0,Ge=0,qe=0}G!==null?(Le=G.x,ft=G.y,Et=G.z):(Le=0,ft=0,Et=0);const pt=_e.convert(k.format),Ft=_e.convert(k.type);let Ee;k.isData3DTexture?(Z.setTexture3D(k,0),Ee=F.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(Z.setTexture2DArray(k,0),Ee=F.TEXTURE_2D_ARRAY):(Z.setTexture2D(k,0),Ee=F.TEXTURE_2D),g.activeTexture(F.TEXTURE0),g.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,k.flipY),g.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),g.pixelStorei(F.UNPACK_ALIGNMENT,k.unpackAlignment);const Kt=g.getParameter(F.UNPACK_ROW_LENGTH),nt=g.getParameter(F.UNPACK_IMAGE_HEIGHT),en=g.getParameter(F.UNPACK_SKIP_PIXELS),Mn=g.getParameter(F.UNPACK_SKIP_ROWS),Wn=g.getParameter(F.UNPACK_SKIP_IMAGES);g.pixelStorei(F.UNPACK_ROW_LENGTH,bt.width),g.pixelStorei(F.UNPACK_IMAGE_HEIGHT,bt.height),g.pixelStorei(F.UNPACK_SKIP_PIXELS,Ie),g.pixelStorei(F.UNPACK_SKIP_ROWS,Ge),g.pixelStorei(F.UNPACK_SKIP_IMAGES,qe);const Ri=M.isDataArrayTexture||M.isData3DTexture,mt=k.isDataArrayTexture||k.isData3DTexture;if(M.isDepthTexture){const Tt=X.get(M),Xn=X.get(k),_t=X.get(Tt.__renderTarget),Yn=X.get(Xn.__renderTarget);g.bindFramebuffer(F.READ_FRAMEBUFFER,_t.__webglFramebuffer),g.bindFramebuffer(F.DRAW_FRAMEBUFFER,Yn.__webglFramebuffer);for(let Ci=0;Ci<Re;Ci++)Ri&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,X.get(M).__webglTexture,V,qe+Ci),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,X.get(k).__webglTexture,Se,Et+Ci)),F.blitFramebuffer(Ie,Ge,Te,Me,Le,ft,Te,Me,F.DEPTH_BUFFER_BIT,F.NEAREST);g.bindFramebuffer(F.READ_FRAMEBUFFER,null),g.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(V!==0||M.isRenderTargetTexture||X.has(M)){const Tt=X.get(M),Xn=X.get(k);g.bindFramebuffer(F.READ_FRAMEBUFFER,ne),g.bindFramebuffer(F.DRAW_FRAMEBUFFER,H);for(let _t=0;_t<Re;_t++)Ri?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Tt.__webglTexture,V,qe+_t):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Tt.__webglTexture,V),mt?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Xn.__webglTexture,Se,Et+_t):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Xn.__webglTexture,Se),V!==0?F.blitFramebuffer(Ie,Ge,Te,Me,Le,ft,Te,Me,F.COLOR_BUFFER_BIT,F.NEAREST):mt?F.copyTexSubImage3D(Ee,Se,Le,ft,Et+_t,Ie,Ge,Te,Me):F.copyTexSubImage2D(Ee,Se,Le,ft,Ie,Ge,Te,Me);g.bindFramebuffer(F.READ_FRAMEBUFFER,null),g.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else mt?M.isDataTexture||M.isData3DTexture?F.texSubImage3D(Ee,Se,Le,ft,Et,Te,Me,Re,pt,Ft,bt.data):k.isCompressedArrayTexture?F.compressedTexSubImage3D(Ee,Se,Le,ft,Et,Te,Me,Re,pt,bt.data):F.texSubImage3D(Ee,Se,Le,ft,Et,Te,Me,Re,pt,Ft,bt):M.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,Se,Le,ft,Te,Me,pt,Ft,bt.data):M.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,Se,Le,ft,bt.width,bt.height,pt,bt.data):F.texSubImage2D(F.TEXTURE_2D,Se,Le,ft,Te,Me,pt,Ft,bt);g.pixelStorei(F.UNPACK_ROW_LENGTH,Kt),g.pixelStorei(F.UNPACK_IMAGE_HEIGHT,nt),g.pixelStorei(F.UNPACK_SKIP_PIXELS,en),g.pixelStorei(F.UNPACK_SKIP_ROWS,Mn),g.pixelStorei(F.UNPACK_SKIP_IMAGES,Wn),Se===0&&k.generateMipmaps&&F.generateMipmap(Ee),g.unbindTexture()},this.initRenderTarget=function(M){X.get(M).__webglFramebuffer===void 0&&Z.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?Z.setTextureCube(M,0):M.isData3DTexture?Z.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?Z.setTexture2DArray(M,0):Z.setTexture2D(M,0),g.unbindTexture()},this.resetState=function(){j=0,W=0,ee=null,g.reset(),ye.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Tn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=je._getDrawingBufferColorSpace(e),t.unpackColorSpace=je._getUnpackColorSpace()}}const Ei=60,xt=1/Ei,Ao=32,ct=17,rt=10,Mt={radius:.35,maxHalfHearts:6,moveSpeed:5,damage:10,fireRate:2,range:6,shotSpeed:9,luck:0},D_=60,U_=7,or=.18,wo=600,Ht={radius:.42,hp:25,moveSpeed:1.6,aggroRange:7,attackRange:5.5,telegraphTicks:24,cooldownTicks:66,spitSpeed:6,spitDamage:1,contactDamage:1},vc=3.2,Us=.82,hi={halfHearts:{min:2,max:24},damage:{min:1,max:1/0},fireRate:{min:.5,max:5},range:{min:3,max:12},shotSpeed:{min:5,max:16},moveSpeed:{min:3.5,max:7.5},luck:{min:0,max:10}},N_=6,F_=2.2,O_=1.6,k_=.11,Ar={damageMult:.5,range:2.5,angleRad:.9,radiusMult:.8},ir={speedMult:.5,radiusMult:1.6,homingRange:4.5,turnRadPerTick:.05,giantRadiusMult:2.2,giantDamageMult:2},B_=18,z_=240,wr={ticks:8,speed:14,iframeTicks:12,cooldownTicks:120},Mc=2,H_=3,G_={renacuajo:1,mosca_gorda:1,sapo_escupidor:3,babosa_acorazada:4,sapo_doble:8},Gt={radius:.22,hp:4,contactDamage:1,windupTicks:18,hopTicks:12,hopSpeed:7,pauseTicks:26,aggroRange:9},ni={radius:.28,hp:6,contactDamage:1,speed:1.3,retargetTicks:55,wobble:2.2},ri={radius:.45,hp:30,contactDamage:2,speed:.8,aggroRange:10,turnRadPerTick:.02,backDot:.25},ht={radius:.5,hp:50,contactDamage:2,moveSpeed:1.2,aggroRange:9,attackRange:6,telegraphTicks:24,cooldownTicks:80,spitSpeed:6.5,spitDamage:1,spitSpreadRad:.16,swallowSeekRange:5,swallowRange:1.7,swallowTelegraphTicks:24,healPerSwallow:10,swallowCooldownTicks:140},V_=3,W_=1,X_=99,Y_={heart:.06},q_=2,$_={crystal:1,crystal_med:3,crystal_big:5},ba={big:.1,med:.3},Sc=1.7,yc=7,K_=.45,Ue={radius:.95,hp:300,contactDamage:2,moveSpeed:1,idleTicks:45,jumpAimTicks:30,airborneTicks:20,slamRadius:1.7,slamDamage:2,tongueAimTicks:24,tongueSpeed:16,tongueDamage:2,tongueRadius:.32,tongueRange:11,summonTicks:20,summonCount:2,maxTadpoles:4,volleyAimTicks:26,volleyCount:7,volleySpreadRad:1.1,volleySpitSpeed:6.5,volleyDamage:1,bellyTicks:90,bellyDamageMult:1.5},bc=[[6.5,4.5],[8.5,4.5],[10.5,4.5]],Z_=1.2,J_={x:7.75,y:1.5,w:1.5,h:1.2},ei=1,Q_=.55,Zo=5,j_=[{id:"punos_de_piedra",nombre:"Puños de Piedra",categoria:"pasivo",slot:"brazos",rareza:"comun",precio:4,stats:{dano:4},mults:{cadencia:.8},tags:["empuje"],procs:[],spriteOverlay:"brazos_piedra",descripcion:"Golpea como montaña, dispara como abuela."},{id:"brazos_de_arquero",nombre:"Brazos de Arquero",categoria:"pasivo",slot:"brazos",rareza:"comun",precio:3,stats:{alcance:3,velProyectil:3},mults:{},tags:[],procs:[],spriteOverlay:"brazos_arquero",descripcion:"Brazos tensos como cuerdas: el chorro vuela lejos y rápido."},{id:"piernas_de_renacuajo",nombre:"Piernas de Renacuajo",categoria:"pasivo",slot:"piernas",rareza:"comun",precio:4,stats:{velMovimiento:1.2},mults:{},tags:["rastro_charcos"],procs:[],spriteOverlay:"piernas_renacuajo",descripcion:"Deja un caminito húmedo de pura prisa."},{id:"botas_de_salto",nombre:"Botas de Salto",categoria:"pasivo",slot:"piernas",rareza:"rara",precio:8,stats:{},mults:{},tags:["dash"],procs:[],spriteOverlay:"piernas_botas",descripcion:"Un brinquito con ventaja injusta (Shift)."},{id:"casco_de_lata",nombre:"Casco de Lata",categoria:"pasivo",slot:"cabeza",rareza:"comun",precio:3,stats:{armaduraPorSala:1},mults:{},tags:[],procs:[],spriteOverlay:"cabeza_casco",descripcion:"Una olla abollada que te para el primer golpe."},{id:"ojo_de_cristal",nombre:"Ojo de Cristal",categoria:"pasivo",slot:"cabeza",rareza:"rara",precio:8,stats:{},mults:{},tags:["ver_cofres"],procs:[{efecto:"critico",base:.1,porSuerte:.015,tope:.25}],spriteOverlay:"cabeza_monoculo",descripcion:"Ve el punto débil. A veces incluso lo acierta."},{id:"nucleo_denso",nombre:"Núcleo Denso",categoria:"pasivo",slot:"nucleo",rareza:"rara",precio:9,stats:{corazones:2,velMovimiento:-.8},mults:{},tags:[],procs:[],spriteOverlay:"nucleo_denso",descripcion:"Un núcleo el doble de pesado: aguanta más, corre menos."},{id:"corazon_de_la_gema",nombre:"Corazón de la Gema",categoria:"pasivo",slot:"nucleo",rareza:"legendaria",precio:15,stats:{proyectiles:1},mults:{dano:.75},tags:[],procs:[],spriteOverlay:"nucleo_gemelo",descripcion:"Dos gotas del mismo corazón."},{id:"chorro_dividido",nombre:"Chorro Dividido",categoria:"modificador",slot:"tragado",rareza:"comun",precio:3,stats:{},mults:{},tags:["divide"],procs:[{efecto:"dividir_en_3",base:.2,porSuerte:.03,tope:.5}],spriteOverlay:"tragado_bifurcador",descripcion:"El chorro se parte en dos al impactar. A veces en tres."},{id:"burbujas_traviesas",nombre:"Burbujas Traviesas",categoria:"modificador",slot:"tragado",rareza:"comun",precio:3,stats:{},mults:{dano:.7},tags:["burbuja"],procs:[{efecto:"burbuja_gigante",base:.05,porSuerte:.02,tope:.25}],spriteOverlay:"tragado_burbujas",descripcion:"Lentas, flotonas y con malas intenciones."},{id:"libro_multidisparo",nombre:"Libro de Multidisparo",categoria:"usable",slot:"usable",rareza:"rara",precio:7,stats:{},mults:{},tags:[],procs:[],usable:{efecto:"multidisparo",recargaTicks:1200,duracionTicks:300},spriteOverlay:"usable_libro",descripcion:"Capítulo 3: cómo disparar tres veces (Espacio)."},{id:"trebol_de_alcantarilla",nombre:"Trébol de Alcantarilla",categoria:"pasivo",slot:"nucleo",rareza:"comun",precio:3,stats:{suerte:2},mults:{},tags:[],procs:[],spriteOverlay:"nucleo_trebol",descripcion:"Creció donde nadie miraba. Da suerte igual."},{id:"manos_de_ladron",nombre:"Manos de Ladrón",categoria:"pasivo",slot:"brazos",rareza:"comun",precio:4,stats:{suerte:1},mults:{},tags:["iman_monedas"],procs:[],unlockable:!0,spriteOverlay:"brazos_ladron",descripcion:"Dedos largos: lo brillante viene solo a ti."},{id:"herradura_del_ahogado",nombre:"Herradura del Ahogado",categoria:"pasivo",slot:"cabeza",rareza:"rara",precio:8,stats:{suerte:3,corazones:-1},mults:{},tags:[],procs:[],unlockable:!0,spriteOverlay:"cabeza_herradura",descripcion:"Da mucha suerte. A su dueño anterior no."}],e0={items:j_},t0=["dano","cadencia","alcance","velProyectil","velMovimiento","suerte","corazones","proyectiles","armaduraPorSala"];function n0(i,e){const t=i,n=r=>{throw new Error(`items.json[${e}] (${String(t?.id??"?")}): ${r}`)};(typeof t.id!="string"||!t.id)&&n("id inválido"),(typeof t.nombre!="string"||!t.nombre)&&n("nombre inválido"),["pasivo","modificador","usable","gema"].includes(t.categoria)||n(`categoria inválida: ${String(t.categoria)}`),["comun","rara","legendaria"].includes(t.rareza)||n(`rareza inválida: ${String(t.rareza)}`),(typeof t.precio!="number"||t.precio<=0)&&n("precio inválido");for(const r of["stats","mults"]){const s=t[r];(typeof s!="object"||s===null)&&n(`${r} debe ser objeto`);for(const[a,o]of Object.entries(s))t0.includes(a)||n(`${r}.${a} no es un stat conocido`),(typeof o!="number"||!Number.isFinite(o))&&n(`${r}.${a} no numérico`),r==="mults"&&o<=0&&n(`mults.${a} debe ser > 0`)}(!Array.isArray(t.tags)||t.tags.some(r=>typeof r!="string"))&&n("tags debe ser string[]"),Array.isArray(t.procs)||n("procs debe ser array");for(const r of t.procs){typeof r.efecto!="string"&&n("proc sin efecto");for(const s of["base","porSuerte","tope"]){const a=r[s];(typeof a!="number"||a<0||a>1)&&n(`proc.${s} fuera de [0,1]`)}r.base>r.tope&&n("proc.base > proc.tope")}if(t.categoria==="usable"){const r=t.usable??{};typeof r.efecto!="string"&&n("usable sin efecto"),(typeof r.recargaTicks!="number"||r.recargaTicks<=0)&&n("usable.recargaTicks inválido"),(typeof r.duracionTicks!="number"||r.duracionTicks<0)&&n("usable.duracionTicks inválido")}return t}function i0(){const i=e0.items;if(!Array.isArray(i)||i.length===0)throw new Error("items.json: lista de items vacía");const e=new Map;return i.forEach((t,n)=>{const r=n0(t,n);if(e.has(r.id))throw new Error(`items.json: id duplicado ${r.id}`);e.set(r.id,r)}),e}const zr=i0(),r0=[...zr.values()].filter(i=>!i.unlockable).map(i=>i.id);function Rn(i){const e=zr.get(i);if(!e)throw new Error(`Item desconocido: ${i}`);return e}function lr(i,e){return i.some(t=>Rn(t).tags.includes(e))}function s0(i){const e=[];for(const t of i)e.push(...Rn(t).procs);return e}const a0=[{id:"vacia",obstacles:[],spawns:[[4,2.5],[11,2.5],[4,6.5],[11,6.5],[7.5,2],[7.5,7]]},{id:"pilares_esquinas",obstacles:[{x:3,y:2,w:1,h:1},{x:11,y:2,w:1,h:1},{x:3,y:6,w:1,h:1},{x:11,y:6,w:1,h:1}],spawns:[[7.5,2],[7.5,7],[2,4.5],[13,4.5],[5.5,4.5],[9.5,4.5]]},{id:"bloque_central",obstacles:[{x:6,y:3.5,w:3,h:2}],spawns:[[3,2.5],[12,2.5],[3,6.5],[12,6.5]]},{id:"columnas_dobles",obstacles:[{x:4,y:3,w:1,h:3},{x:10,y:3,w:1,h:3}],spawns:[[2.5,2],[12.5,2],[2.5,7],[12.5,7],[7.5,4.5]]},{id:"esquinas_diagonales",obstacles:[{x:2.5,y:1.5,w:2,h:1.5},{x:10.5,y:6,w:2,h:1.5}],spawns:[[11.5,2],[3.5,7],[7.5,4.5],[13,4.5]]},{id:"pasillo_partido",obstacles:[{x:2.5,y:4,w:3,h:1},{x:9.5,y:4,w:3,h:1}],spawns:[[3.5,2],[11.5,2],[3.5,7],[11.5,7]]},{id:"celdas_sueltas",obstacles:[{x:4,y:2.5,w:1,h:1},{x:10,y:2.5,w:1,h:1},{x:4,y:5.5,w:1,h:1},{x:10,y:5.5,w:1,h:1}],spawns:[[7.5,2],[7.5,7],[2,4.5],[13,4.5]]},{id:"islas_gemelas",obstacles:[{x:2.5,y:2,w:2,h:2},{x:10.5,y:5,w:2,h:2}],spawns:[[12,2],[3,7],[7.5,4.5],[7.5,7]]},{id:"espina_central",obstacles:[{x:7,y:2.8,w:1,h:3.4}],spawns:[[3.5,2.5],[3.5,6.5],[11.5,2.5],[11.5,6.5]]},{id:"dientes",obstacles:[{x:3,y:3,w:1,h:1},{x:5.5,y:5,w:1,h:1},{x:9,y:2.8,w:1,h:1},{x:11.5,y:5,w:1,h:1}],spawns:[[2,6.5],[13,2],[7.5,7],[10.5,6.5]]},{id:"murallas_laterales",obstacles:[{x:3,y:2,w:1,h:2},{x:3,y:5.5,w:1,h:2},{x:11,y:2,w:1,h:2},{x:11,y:5.5,w:1,h:2}],spawns:[[7.5,2],[7.5,7],[1.8,4.5],[13.2,4.5],[7.5,4.5]]},{id:"anillo_roto",obstacles:[{x:5,y:2.8,w:2,h:1},{x:8.5,y:2.8,w:2,h:1},{x:5,y:5.2,w:2,h:1},{x:8.5,y:5.2,w:2,h:1}],spawns:[[7.5,4.5],[2.5,2],[12.5,2],[2.5,7],[12.5,7]]},{id:"cuello_botella",obstacles:[{x:4.5,y:1,w:1,h:2.2},{x:4.5,y:5.8,w:1,h:2.2},{x:9,y:3.2,w:1,h:2.6}],spawns:[[3,4.5],[12,2.5],[12,6.5],[11,4.5]]},{id:"escombros",obstacles:[{x:2.5,y:5.8,w:1.5,h:1},{x:5.5,y:2.8,w:1,h:1.5},{x:9.5,y:6,w:1.5,h:1},{x:11.5,y:2.2,w:1,h:1}],spawns:[[7.5,4.5],[3.5,2.5],[11.5,4.2],[4.5,6.8]]}],o0={templates:a0};function l0(i){let e=2166136261;for(let t=0;t<i.length;t++)e^=i.charCodeAt(t),e=Math.imul(e,16777619);return e>>>0}function Hr(i){let e=i>>>0;return function(){e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function c0(i){const e=t=>Hr((i^l0(t))>>>0);return{mapgen:e("mapgen"),ai:e("ai"),drops:e("drops"),procs:e("procs")}}function hr(i,e,t){return e+i()*(t-e)}function d0(){const i=o0.templates;if(!Array.isArray(i)||i.length<12)throw new Error("el_pozo.json: se esperan al menos 12 plantillas (PLAN F1.2)");for(const e of i)if(!e.id||!Array.isArray(e.obstacles)||!Array.isArray(e.spawns))throw new Error(`plantilla malformada: ${e.id??"?"}`);return i}const Ro=d0();function Jo(i){const e=Ro.find(t=>t.id===i);if(!e)throw new Error(`plantilla desconocida: ${i}`);return e}const mi=11,Rr=[{dx:0,dy:-1,door:"n",opp:"s"},{dx:1,dy:0,door:"e",opp:"w"},{dx:0,dy:1,door:"s",opp:"n"},{dx:-1,dy:0,door:"w",opp:"e"}];function Ki(i,e){return e*mi+i}function u0(i){return 4+i}function Ld(i,e){const t=new Map,n=[],r=(d,h,_)=>{const S={id:n.length,gx:d,gy:h,kind:_,doors:{n:-1,e:-1,s:-1,w:-1},templateId:"vacia",seed:Math.floor(i()*4294967295)>>>0,cleared:_==="start"||_==="treasure"||_==="shop",visited:_==="start",looted:!1,locked:_==="treasure",sold:[],drops:[]};return n.push(S),t.set(Ki(d,h),S),S},s=r(Math.floor(mi/2),Math.floor(mi/2),"start"),a=u0(e);let o=0,l=0;for(;o<a&&l++<500;){const d=n[Math.floor(i()*n.length)],h=Rr[Math.floor(i()*4)],_=d.gx+h.dx,S=d.gy+h.dy;if(_<0||S<0||_>=mi||S>=mi||t.has(Ki(_,S)))continue;let m=0;for(const p of Rr)t.has(Ki(_+p.dx,S+p.dy))&&m++;m>1||(r(_,S,"normal"),o++)}const c=["boss","treasure","shop"];for(const d of c){const h=[];for(const S of n)if(!(S.kind!=="normal"&&S.kind!=="start"))for(const m of Rr){const p=S.gx+m.dx,w=S.gy+m.dy;if(p<0||w<0||p>=mi||w>=mi||t.has(Ki(p,w)))continue;let R=0;for(const v of Rr)t.has(Ki(p+v.dx,w+v.dy))&&R++;R===1&&h.push({gx:p,gy:w,host:S})}if(h.length===0)throw new Error(`mapgen: sin hueco para la sala ${d} (nivel ${e})`);let _;if(d==="boss"){let S=-1,m=h[0];for(const p of h){const w=Math.abs(p.gx-s.gx)+Math.abs(p.gy-s.gy);w>S&&(S=w,m=p)}_=m}else _=h[Math.floor(i()*h.length)];r(_.gx,_.gy,d)}for(const d of n)for(const h of Rr){const _=t.get(Ki(d.gx+h.dx,d.gy+h.dy));_&&(d.doors[h.door]=_.id)}for(const d of n)d.kind==="normal"&&(d.templateId=Ro[Math.floor(i()*Ro.length)].id);const u=n.filter(d=>d.kind==="normal"),f=u[Math.floor(i()*u.length)].id;return{level:e,rooms:n,current:s.id,trapdoorOpen:!1,keyRoomId:f}}function f0(i,e=r0){const t=Hr(i.seed^24301),n=[...e],r=[];for(let s=0;s<3&&n.length;s++)r.push(n.splice(Math.floor(t()*n.length),1)[0]);return r}function h0(i,e){return e==="boss"?(i+Mc)*H_:e==="normal"?i+Mc:0}function p0(i,e){if(i.kind==="boss"&&e===Zo)return[{kind:"gorko",x:ct/2,y:rt/2-1.5}];const t=h0(e,i.kind);if(t<=0)return[];const n=Hr(i.seed),s=Jo(i.templateId).spawns.map(([d,h])=>({x:d,y:h}));for(let d=s.length-1;d>0;d--){const h=Math.floor(n()*(d+1));[s[d],s[h]]=[s[h],s[d]]}const a=Object.entries(G_),o=Math.min(...a.map(([,d])=>d)),l=[];let c=t,u=0,f=0;for(;c>=o&&u<24;){const d=a.filter(([p,w])=>w<=c&&(p!=="sapo_doble"||f<W_));if(d.length===0)break;const[h,_]=d[Math.floor(n()*d.length)];h==="sapo_doble"&&f++;const S=s[u%s.length],m=u>=s.length?.6:0;l.push({kind:h,x:S.x+(n()*2-1)*m,y:S.y+(n()*2-1)*m}),c-=_,u++}return l}function m0(i){const e={},t={};for(const n of i){const r=Rn(n);for(const[s,a]of Object.entries(r.stats))e[s]=(e[s]??0)+a;for(const[s,a]of Object.entries(r.mults))t[s]=(t[s]??1)*a}return{flat:e,mult:t}}function Dd(i,e){return Math.min(e.max,Math.max(e.min,i))}function Zi(i,e,t,n){return Dd((i+(t.flat[e]??0))*(t.mult[e]??1),n)}function zs(i){const e=m0(i);return{maxHalfHearts:Dd(Mt.maxHalfHearts+(e.flat.corazones??0)*2,hi.halfHearts),damage:Zi(Mt.damage,"dano",e,hi.damage),fireRate:Zi(Mt.fireRate,"cadencia",e,hi.fireRate),range:Zi(Mt.range,"alcance",e,hi.range),shotSpeed:Zi(Mt.shotSpeed,"velProyectil",e,hi.shotSpeed),moveSpeed:Zi(Mt.moveSpeed,"velMovimiento",e,hi.moveSpeed),luck:Zi(Mt.luck,"suerte",e,hi.luck),projectiles:1+(e.flat.proyectiles??0),armorPerRoom:e.flat.armaduraPorSala??0}}function Ud(i,e){return Math.min(i.tope,i.base+e*i.porSuerte)}function Nd(){return{up:!1,down:!1,left:!1,right:!1,fire:!1,dash:!1,use:!1,use2:!1,interact:!1,aimX:0,aimY:0}}function Co(i){return[...zr.values()].filter(e=>!e.unlockable||i.config.unlockedItems.includes(e.id)).map(e=>e.id)}const As="0.1.0",pn=1,mn=1,gn=ct-1,_n=rt-1;function Ec(i,e){const t=c0(i),n={usableSlots:e?.usableSlots??1,unlockedItems:e?.unlockedItems??[]},r={version:As,seed:i,tick:0,status:"playing",config:n,player:{x:3.5,y:rt/2,kx:0,ky:0,halfHearts:Mt.maxHalfHearts,maxHalfHearts:Mt.maxHalfHearts,armor:0,keys:0,crystals:0,iframes:0,fireCooldown:0,aimX:1,aimY:0,deathTick:0,items:[],usable:null,usable2:null,dashTicks:0,dashCooldown:0,dashDirX:1,dashDirY:0},stats:zs([]),floor:Ld(t.mapgen,1),obstacles:[],enemies:[],shots:[],puddles:[],pickups:[],drops:[],events:[],nextId:2};return r.obstacles=[...Jo(r.floor.rooms[r.floor.current].templateId).obstacles],{state:r,step(s){v0(r,s??Nd(),t)},hash(){return F0(r)}}}const Tc={sapo_escupidor:Ht.hp,renacuajo:Gt.hp,mosca_gorda:ni.hp,babosa_acorazada:ri.hp,sapo_doble:ht.hp,gorko:Ue.hp};function Ti(i){switch(i){case"sapo_escupidor":return Ht.radius;case"renacuajo":return Gt.radius;case"mosca_gorda":return ni.radius;case"babosa_acorazada":return ri.radius;case"sapo_doble":return ht.radius;case"gorko":return Ue.radius}}function g0(i){switch(i){case"sapo_escupidor":return Ht.contactDamage;case"renacuajo":return Gt.contactDamage;case"mosca_gorda":return ni.contactDamage;case"babosa_acorazada":return ri.contactDamage;case"sapo_doble":return ht.contactDamage;case"gorko":return Ue.contactDamage}}function Fd(i,e,t,n){const r=ct/2-t,s=rt/2-n,a=Math.hypot(r,s)||1;return{id:i,kind:e,x:t,y:n,kx:0,ky:0,hp:Tc[e],maxHp:Tc[e],fsm:"idle",timer:0,targetX:t,targetY:n,wanderX:t,wanderY:n,facingX:r/a,facingY:s/a,swallowTarget:-1,swallowCooldown:0,attackCycle:0,phase2:!1}}const ms=.8;function Qo(i,e,t){const n=i.floor.current,r=i.floor.rooms[e];n!==e&&(i.floor.rooms[n].drops=i.drops.map(a=>({kind:a.kind,x:a.x,y:a.y}))),i.floor.current=e,i.obstacles=[...Jo(r.templateId).obstacles],i.shots.length=0,i.puddles.length=0,i.pickups.length=0,i.drops.length=0;for(const a of r.drops)i.drops.push({id:i.nextId++,kind:a.kind,x:a.x,y:a.y});r.drops=[];const s=i.player;if(t==="n"?(s.x=ct/2,s.y=rt-1-ms):t==="s"?(s.x=ct/2,s.y=1+ms):t==="e"?(s.x=1+ms,s.y=rt/2):t==="w"?(s.x=ct-1-ms,s.y=rt/2):(s.x=ct/2,s.y=rt/2+1.5),s.kx=s.ky=0,i.enemies.length=0,r.visited=!0,!r.cleared)for(const a of p0(r,i.floor.level))i.enemies.push(Fd(i.nextId++,a.kind,a.x,a.y));if(r.kind==="treasure"&&!r.looted){const a=Hr(r.seed),o=Co(i),l=o[Math.floor(a()*o.length)];i.pickups.push({id:i.nextId++,itemId:l,x:ct/2,y:rt/2})}r.kind==="shop"&&(f0(r,Co(i)).filter(o=>!r.sold.includes(o)).forEach((o,l)=>{const[c,u]=bc[l%bc.length];i.pickups.push({id:i.nextId++,itemId:o,x:c,y:u,price:Rn(o).precio})}),i.obstacles.push({...J_,invisible:!0})),t&&Ke(i,{type:"room_changed",from:n,to:e,dir:t,tick:i.tick})}function _0(i,e){if(i.floor.level>=Zo){i.status="victory",Ke(i,{type:"victory",tick:i.tick});return}i.floor=Ld(e.mapgen,i.floor.level+1),Qo(i,i.floor.current),Ke(i,{type:"level_started",level:i.floor.level,tick:i.tick})}function jo(i,e,t,n){for(const r of n){const s=Ct(i,r.x,r.x+r.w),a=Ct(e,r.y,r.y+r.h),o=i-s,l=e-a,c=o*o+l*l;if(!(c>=t*t))if(c>1e-9){const u=Math.sqrt(c);i=s+o/u*t,e=a+l/u*t}else{const u=i-r.x,f=r.x+r.w-i,d=e-r.y,h=r.y+r.h-e,_=Math.min(u,f,d,h);_===u?i=r.x-t:_===f?i=r.x+r.w+t:_===d?e=r.y-t:e=r.y+r.h+t}}return{x:i,y:e}}function x0(i,e,t){for(const n of t)if(i>=n.x&&i<=n.x+n.w&&e>=n.y&&e<=n.y+n.h)return!0;return!1}function v0(i,e,t){if(i.events=[],i.tick++,i.status!=="playing"){wc(i),Rc(i);return}M0(i,e,t),b0(i,t),wc(i),Rc(i),L0(i,t),N0(i)}function M0(i,e,t){const n=i.player,r=(E,D)=>{if(E&&(E.cooldown>0&&E.cooldown--,E.activeTicks>0&&E.activeTicks--,D&&E.cooldown===0)){const L=Rn(E.itemId);E.activeTicks=L.usable.duracionTicks,E.cooldown=L.usable.recargaTicks,Ke(i,{type:"usable_activated",itemId:E.itemId,tick:i.tick})}};r(n.usable,e.use),r(n.usable2,e.use2),n.dashCooldown>0&&n.dashCooldown--;let s=(e.right?1:0)-(e.left?1:0),a=(e.down?1:0)-(e.up?1:0);if(s!==0&&a!==0){const E=1/Math.SQRT2;s*=E,a*=E}if(e.dash&&n.dashTicks===0&&n.dashCooldown===0&&lr(n.items,"dash")){const E=s!==0||a!==0?s:n.aimX,D=s!==0||a!==0?a:n.aimY,L=Math.hypot(E,D)||1;n.dashDirX=E/L,n.dashDirY=D/L,n.dashTicks=wr.ticks,n.dashCooldown=wr.cooldownTicks,n.iframes=Math.max(n.iframes,wr.iframeTicks),Ke(i,{type:"dash_used",tick:i.tick})}const o=n.x,l=n.y;n.dashTicks>0?(n.dashTicks--,n.x+=(n.dashDirX*wr.speed+n.kx)*xt,n.y+=(n.dashDirY*wr.speed+n.ky)*xt):(n.x+=(s*i.stats.moveSpeed+n.kx)*xt,n.y+=(a*i.stats.moveSpeed+n.ky)*xt),n.kx*=Us,n.ky*=Us,Math.abs(n.kx)<.05&&(n.kx=0),Math.abs(n.ky)<.05&&(n.ky=0);const c=i.floor.rooms[i.floor.current],u=c.cleared,f=E=>!u||E<0?!1:!i.floor.rooms[E].locked||n.keys>0,d=Math.abs(n.x-ct/2)<ei,h=Math.abs(n.y-rt/2)<ei,_=Mt.radius,S=f(c.doors.n)&&d?mn-.5:mn+_,m=f(c.doors.s)&&d?_n+.5:_n-_,p=f(c.doors.w)&&h?pn-.5:pn+_,w=f(c.doors.e)&&h?gn+.5:gn-_;n.x=Ct(n.x,p,w),n.y=Ct(n.y,S,m);const R=jo(n.x,n.y,_,i.obstacles);n.x=R.x,n.y=R.y;const v=(E,D)=>{const L=i.floor.rooms[E];L.locked&&(L.locked=!1,n.keys--,Ke(i,{type:"door_unlocked",roomId:E,tick:i.tick})),Qo(i,E,D)};if(n.y<mn-.25&&c.doors.n>=0){v(c.doors.n,"n");return}if(n.y>_n+.25&&c.doors.s>=0){v(c.doors.s,"s");return}if(n.x<pn-.25&&c.doors.w>=0){v(c.doors.w,"w");return}if(n.x>gn+.25&&c.doors.e>=0){v(c.doors.e,"e");return}if(i.floor.trapdoorOpen&&c.kind==="boss"&&Pt(n.x,n.y,ct/2,rt/2)<Q_){_0(i,t);return}(n.x!==o||n.y!==l)&&i.tick%B_===0&&lr(n.items,"rastro_charcos")&&i.puddles.push({x:n.x,y:n.y+Mt.radius*.6,ttl:z_});const T=e.aimX-n.x,b=e.aimY-n.y,I=Math.hypot(T,b);I>.001&&(n.aimX=T/I,n.aimY=b/I),n.fireCooldown>0&&n.fireCooldown--,e.fire&&n.fireCooldown===0&&(S0(i,t),n.fireCooldown=Math.round(Ei/i.stats.fireRate),Ke(i,{type:"shot_fired",owner:"player",tick:i.tick}));for(let E=i.pickups.length-1;E>=0;E--){const D=i.pickups[E],L=Pt(n.x,n.y,D.x,D.y);if(!D.price&&L<Mt.radius+.35)Ac(i,E);else if(D.price&&e.interact&&L<Z_&&n.crystals>=D.price){const O=D.price,q=D.itemId;n.crystals-=O,i.floor.rooms[i.floor.current].sold.push(q),D.price=0,Ac(i,E),Ke(i,{type:"item_bought",itemId:q,price:O,crystalsLeft:n.crystals,tick:i.tick})}}const x=lr(n.items,"iman_monedas")?Sc*2.2:Sc;for(let E=i.drops.length-1;E>=0;E--){const D=i.drops[E];if(D.kind==="heart"&&n.halfHearts>=n.maxHalfHearts)continue;const L=Pt(n.x,n.y,D.x,D.y);if(L<x&&L>1e-6&&(D.x+=(n.x-D.x)/L*yc*xt,D.y+=(n.y-D.y)/L*yc*xt),!(L>=K_)){switch(D.kind){case"heart":n.halfHearts=Math.min(n.maxHalfHearts,n.halfHearts+q_),Ke(i,{type:"heart_collected",halfHeartsLeft:n.halfHearts,tick:i.tick});break;case"key":n.keys++,Ke(i,{type:"key_collected",keys:n.keys,tick:i.tick});break;case"crystal":case"crystal_med":case"crystal_big":{const O=$_[D.kind];n.crystals=Math.min(X_,n.crystals+O),Ke(i,{type:"crystal_collected",value:O,total:n.crystals,tick:i.tick});break}}i.drops.splice(E,1)}}y0(i)}function S0(i,e){const t=i.player,n=lr(t.items,"burbuja"),r=[];lr(t.items,"divide")&&r.push("divide"),n&&r.push("burbuja");let s=i.stats.projectiles;for(const c of[t.usable,t.usable2])c&&c.activeTicks>0&&Rn(c.itemId).usable.efecto==="multidisparo"&&(s+=2);const a=i.stats.shotSpeed*(n?ir.speedMult:1),o=F_+(lr(t.items,"empuje")?O_:0),l=Math.atan2(t.aimY,t.aimX);for(let c=0;c<s;c++){const u=l+(c-(s-1)/2)*k_,f=Math.cos(u),d=Math.sin(u);let h=or*(n?ir.radiusMult:1),_=i.stats.damage;n&&el(i,e,"burbuja_gigante")&&(h=or*ir.giantRadiusMult,_*=ir.giantDamageMult),i.shots.push({id:i.nextId++,owner:"player",x:t.x+f*(Mt.radius+h),y:t.y+d*(Mt.radius+h),vx:f*a,vy:d*a,damage:_,traveled:0,maxRange:i.stats.range,radius:h,knockback:o,tags:r,fragment:!1})}}function el(i,e,t){const n=s0(i.player.items).find(a=>a.efecto===t);if(!n)return!1;const r=Ud(n,i.stats.luck),s=e.procs()<r;return s&&Ke(i,{type:"proc_triggered",efecto:t,tick:i.tick}),s}function Ac(i,e){const t=i.player,n=i.pickups[e],r=Rn(n.itemId);if(r.categoria==="usable")if(!t.usable)t.usable={itemId:n.itemId,cooldown:0,activeTicks:0},i.pickups.splice(e,1);else if(i.config.usableSlots>=2&&!t.usable2)t.usable2={itemId:n.itemId,cooldown:0,activeTicks:0},i.pickups.splice(e,1);else{const s=t.usable;t.usable={itemId:n.itemId,cooldown:0,activeTicks:0},n.itemId=s.itemId}else{t.items.push(n.itemId),i.pickups.splice(e,1);const s=i.floor.rooms[i.floor.current];s.kind==="treasure"&&(s.looted=!0);const a=i.stats;i.stats=zs(t.items);const o=i.stats.maxHalfHearts-a.maxHalfHearts;t.maxHalfHearts=i.stats.maxHalfHearts,o>0&&(t.halfHearts+=o),t.halfHearts=Math.min(t.halfHearts,t.maxHalfHearts);const l=i.stats.armorPerRoom-a.armorPerRoom;l>0&&(t.armor=Math.min(N_,t.armor+l*2))}Ke(i,{type:"item_picked",itemId:r.id,tick:i.tick})}function y0(i){const e=i.player;if(e.iframes>0&&(e.iframes--,e.iframes===0)){let t=!1;for(const n of i.enemies){const r=Pt(e.x,e.y,n.x,n.y),s=Mt.radius+Ti(n.kind);if(r<s){const a=r>.001?(e.x-n.x)/r:1,o=r>.001?(e.y-n.y)/r:0;e.x=Ct(n.x+a*(s+.05),pn+Mt.radius,gn-Mt.radius),e.y=Ct(n.y+o*(s+.05),mn+Mt.radius,_n-Mt.radius),t=!0}}Ke(i,{type:"iframes_ended",separated:t,tick:i.tick})}}function b0(i,e){const t=[];for(const n of i.enemies){switch(n.x+=n.kx*xt,n.y+=n.ky*xt,n.kx*=Us,n.ky*=Us,n.kind){case"sapo_escupidor":E0(i,n,e);break;case"renacuajo":T0(i,n);break;case"mosca_gorda":A0(i,n,e);break;case"babosa_acorazada":w0(i,n);break;case"sapo_doble":R0(i,n,t);break;case"gorko":C0(i,n,e,t);break}const r=Ti(n.kind);if(n.x=Ct(n.x,pn+r,gn-r),n.y=Ct(n.y,mn+r,_n-r),n.kind!=="mosca_gorda"){const s=jo(n.x,n.y,r,i.obstacles);n.x=s.x,n.y=s.y}}I0(i),t.length&&(i.enemies=i.enemies.filter(n=>!t.includes(n.id)))}function E0(i,e,t){const n=i.player,r=Pt(e.x,e.y,n.x,n.y);switch(e.fsm){case"idle":{if(e.timer>0&&e.timer--,r<=Ht.attackRange&&e.timer===0){e.fsm="aim",e.timer=Ht.telegraphTicks,e.targetX=n.x,e.targetY=n.y,Ke(i,{type:"telegraph_started",enemyId:e.id,tick:i.tick});break}i.tick%45===0&&(r<=Ht.aggroRange?(e.wanderX=n.x,e.wanderY=n.y):(e.wanderX=Ct(e.x+hr(t.ai,-2,2),pn+1,gn-1),e.wanderY=Ct(e.y+hr(t.ai,-2,2),mn+1,_n-1)));const s=Pt(e.x,e.y,e.wanderX,e.wanderY);s>.2&&(e.x+=(e.wanderX-e.x)/s*Ht.moveSpeed*xt,e.y+=(e.wanderY-e.y)/s*Ht.moveSpeed*xt);break}case"aim":{e.timer--,e.timer<=0&&(e.fsm="shoot");break}case"shoot":{Ns(i,e,e.targetX,e.targetY,0,Ht.spitSpeed,Ht.spitDamage),Ke(i,{type:"shot_fired",owner:"enemy",tick:i.tick}),e.fsm="cool",e.timer=Ht.cooldownTicks;break}case"cool":{e.timer--,e.timer<=0&&(e.fsm="idle",e.timer=12);break}default:e.fsm="idle"}}function T0(i,e){const t=i.player;switch(e.fsm){case"idle":{if(e.timer>0&&e.timer--,e.timer===0&&Pt(e.x,e.y,t.x,t.y)<=Gt.aggroRange){e.fsm="windup",e.timer=Gt.windupTicks;const n=t.x-e.x,r=t.y-e.y,s=Math.hypot(n,r)||1;e.facingX=n/s,e.facingY=r/s,Ke(i,{type:"telegraph_started",enemyId:e.id,tick:i.tick})}break}case"windup":{e.timer--,e.timer<=0&&(e.fsm="hop",e.timer=Gt.hopTicks);break}case"hop":{e.x+=e.facingX*Gt.hopSpeed*xt,e.y+=e.facingY*Gt.hopSpeed*xt,e.timer--,e.timer<=0&&(e.fsm="idle",e.timer=Gt.pauseTicks);break}default:e.fsm="idle",e.timer=Gt.pauseTicks}}function A0(i,e,t){const n=i.player;i.tick%ni.retargetTicks===0&&(e.wanderX=Ct(n.x+hr(t.ai,-2.2,ni.wobble),pn+.5,gn-.5),e.wanderY=Ct(n.y+hr(t.ai,-2.2,ni.wobble),mn+.5,_n-.5));const r=e.wanderX-e.x,s=e.wanderY-e.y,a=Math.hypot(r,s);a>.15&&(e.x+=r/a*ni.speed*xt,e.y+=s/a*ni.speed*xt,e.facingX=r/a,e.facingY=s/a)}function w0(i,e){const t=i.player,n=Math.atan2(t.y-e.y,t.x-e.x),r=Math.atan2(e.facingY,e.facingX);let s=n-r;for(;s>Math.PI;)s-=2*Math.PI;for(;s<-Math.PI;)s+=2*Math.PI;const a=Ct(s,-.02,ri.turnRadPerTick),o=r+a;e.facingX=Math.cos(o),e.facingY=Math.sin(o),Pt(e.x,e.y,t.x,t.y)<=ri.aggroRange&&(e.x+=e.facingX*ri.speed*xt,e.y+=e.facingY*ri.speed*xt)}function R0(i,e,t){const n=i.player,r=Pt(e.x,e.y,n.x,n.y);switch(e.swallowCooldown>0&&e.swallowCooldown--,e.fsm){case"idle":{e.timer>0&&e.timer--;const s=P0(i,e);if(e.hp<e.maxHp&&e.swallowCooldown===0&&s){const a=Pt(e.x,e.y,s.x,s.y);if(a<=ht.swallowRange){e.fsm="swallow_aim",e.timer=ht.swallowTelegraphTicks,e.swallowTarget=s.id,Ke(i,{type:"telegraph_started",enemyId:e.id,tick:i.tick});break}const o=a||1;e.x+=(s.x-e.x)/o*ht.moveSpeed*xt,e.y+=(s.y-e.y)/o*ht.moveSpeed*xt;break}if(r<=ht.attackRange&&e.timer===0){e.fsm="aim",e.timer=ht.telegraphTicks,e.targetX=n.x,e.targetY=n.y,Ke(i,{type:"telegraph_started",enemyId:e.id,tick:i.tick});break}r<=ht.aggroRange&&r>2&&(e.x+=(n.x-e.x)/r*ht.moveSpeed*xt,e.y+=(n.y-e.y)/r*ht.moveSpeed*xt);break}case"aim":{e.timer--,e.timer<=0&&(e.fsm="shoot");break}case"shoot":{Ns(i,e,e.targetX,e.targetY,-.16,ht.spitSpeed,ht.spitDamage),Ns(i,e,e.targetX,e.targetY,ht.spitSpreadRad,ht.spitSpeed,ht.spitDamage),Ke(i,{type:"shot_fired",owner:"enemy",tick:i.tick}),e.fsm="cool",e.timer=ht.cooldownTicks;break}case"swallow_aim":{if(e.timer--,e.timer<=0){const s=i.enemies.find(a=>a.id===e.swallowTarget);if(s&&Pt(e.x,e.y,s.x,s.y)<=ht.swallowRange*1.3){t.push(s.id);const a=Math.min(ht.healPerSwallow,e.maxHp-e.hp);e.hp+=a,Ke(i,{type:"elite_swallowed",enemyId:e.id,victimId:s.id,healed:a,tick:i.tick})}e.swallowTarget=-1,e.swallowCooldown=ht.swallowCooldownTicks,e.fsm="cool",e.timer=24}break}case"cool":{e.timer--,e.timer<=0&&(e.fsm="idle",e.timer=10);break}default:e.fsm="idle"}}function C0(i,e,t,n){const r=i.player;if(!e.phase2&&e.hp<=e.maxHp/2){e.phase2=!0,e.fsm="cool",e.timer=30,Ke(i,{type:"gorko_phase2",hp:e.hp,tick:i.tick});return}switch(e.fsm){case"idle":{if(e.timer>0){e.timer--;const o=Pt(e.x,e.y,r.x,r.y);o>2.5&&(e.x+=(r.x-e.x)/o*Ue.moveSpeed*xt,e.y+=(r.y-e.y)/o*Ue.moveSpeed*xt);break}const s=e.attackCycle++;if(e.phase2){const o=i.enemies.find(l=>l.kind==="renacuajo");if(s%2===0&&o){n.push(o.id),Ke(i,{type:"elite_swallowed",enemyId:e.id,victimId:o.id,healed:0,tick:i.tick}),e.fsm="volley",e.timer=Ue.volleyAimTicks,e.targetX=r.x,e.targetY=r.y,Ke(i,{type:"telegraph_started",enemyId:e.id,tick:i.tick});break}if(s%2===0){e.fsm="summon",e.timer=Ue.summonTicks,Ke(i,{type:"telegraph_started",enemyId:e.id,tick:i.tick});break}e.fsm="jump_aim",e.timer=Ue.jumpAimTicks,e.targetX=r.x,e.targetY=r.y,Ke(i,{type:"telegraph_started",enemyId:e.id,tick:i.tick});break}const a=s%3;a===0?(e.fsm="jump_aim",e.timer=Ue.jumpAimTicks,e.targetX=r.x,e.targetY=r.y):a===1?(e.fsm="aim",e.timer=Ue.tongueAimTicks,e.targetX=r.x,e.targetY=r.y):(e.fsm="summon",e.timer=Ue.summonTicks),Ke(i,{type:"telegraph_started",enemyId:e.id,tick:i.tick});break}case"jump_aim":{e.timer--,e.timer<=0&&(e.fsm="airborne",e.timer=Ue.airborneTicks);break}case"airborne":{if(e.timer--,e.timer<=0){e.x=Ct(e.targetX,pn+Ue.radius,gn-Ue.radius),e.y=Ct(e.targetY,mn+Ue.radius,_n-Ue.radius);const s=jo(e.x,e.y,Ue.radius,i.obstacles);e.x=s.x,e.y=s.y,i.player.iframes===0&&Pt(r.x,r.y,e.x,e.y)<Ue.slamRadius+Mt.radius&&Po(i,Ue.slamDamage,e.x,e.y,"aplastamiento:gorko"),e.fsm="cool",e.timer=Ue.idleTicks}break}case"aim":{e.timer--,e.timer<=0&&(e.fsm="shoot");break}case"shoot":{const s=Math.atan2(e.targetY-e.y,e.targetX-e.x);i.shots.push({id:i.nextId++,owner:"enemy",x:e.x+Math.cos(s)*(Ue.radius+Ue.tongueRadius),y:e.y+Math.sin(s)*(Ue.radius+Ue.tongueRadius),vx:Math.cos(s)*Ue.tongueSpeed,vy:Math.sin(s)*Ue.tongueSpeed,damage:Ue.tongueDamage,traveled:0,maxRange:Ue.tongueRange,radius:Ue.tongueRadius,knockback:0,tags:["lengua"],fragment:!1}),Ke(i,{type:"shot_fired",owner:"enemy",tick:i.tick}),e.fsm="cool",e.timer=Ue.idleTicks;break}case"summon":{if(e.timer--,e.timer<=0){const s=i.enemies.filter(o=>o.kind==="renacuajo").length,a=Math.min(Ue.summonCount,Ue.maxTadpoles-s);for(let o=0;o<a;o++){const l=Ct(e.x+hr(t.ai,-2,2),pn+1,gn-1),c=Ct(e.y+hr(t.ai,-2,2),mn+1,_n-1);i.enemies.push(Fd(i.nextId++,"renacuajo",l,c))}e.fsm="cool",e.timer=Ue.idleTicks}break}case"volley":{if(e.timer--,e.timer<=0){const s=Math.atan2(e.targetY-e.y,e.targetX-e.x);for(let a=0;a<Ue.volleyCount;a++){const o=(a-(Ue.volleyCount-1)/2)*(Ue.volleySpreadRad/(Ue.volleyCount-1));Ns(i,e,e.x+Math.cos(s+o),e.y+Math.sin(s+o),0,Ue.volleySpitSpeed,Ue.volleyDamage)}Ke(i,{type:"shot_fired",owner:"enemy",tick:i.tick}),e.fsm="belly",e.timer=Ue.bellyTicks}break}case"belly":{e.timer--,e.timer<=0&&(e.fsm="idle",e.timer=Ue.idleTicks);break}case"cool":{e.timer--,e.timer<=0&&(e.fsm="idle",e.timer=Ue.idleTicks);break}default:e.fsm="idle",e.timer=Ue.idleTicks}}function P0(i,e){let t=null,n=ht.swallowSeekRange;for(const r of i.enemies){if(r.id===e.id||r.kind==="sapo_doble")continue;const s=Pt(e.x,e.y,r.x,r.y);s<n&&(n=s,t=r)}return t}function Ns(i,e,t,n,r,s,a){const o=Math.atan2(n-e.y,t-e.x)+r,l=Math.cos(o),c=Math.sin(o),u=Ti(e.kind);i.shots.push({id:i.nextId++,owner:"enemy",x:e.x+l*(u+or),y:e.y+c*(u+or),vx:l*s,vy:c*s,damage:a,traveled:0,maxRange:12,radius:or,knockback:0,tags:[],fragment:!1})}function I0(i){for(let e=0;e<i.enemies.length;e++)for(let t=e+1;t<i.enemies.length;t++){const n=i.enemies[e],r=i.enemies[t];if(n.fsm==="airborne"||r.fsm==="airborne")continue;const s=(Ti(n.kind)+Ti(r.kind))*.95,a=r.x-n.x,o=r.y-n.y,l=Math.hypot(a,o);if(l>=s)continue;const c=l>1e-6?a/l:Math.cos(n.id*2.399),u=l>1e-6?o/l:Math.sin(n.id*2.399),f=V_*xt*.5;n.x-=c*f,n.y-=u*f,r.x+=c*f,r.y+=u*f}}function wc(i){for(let e=i.shots.length-1;e>=0;e--){const t=i.shots[e];if(t.owner==="player"&&t.tags.includes("burbuja")&&i.enemies.length){let s=null,a=ir.homingRange;for(const o of i.enemies){const l=Pt(t.x,t.y,o.x,o.y);l<a&&(a=l,s=o)}if(s){const o=Math.atan2(t.vy,t.vx);let c=Math.atan2(s.y-t.y,s.x-t.x)-o;for(;c>Math.PI;)c-=2*Math.PI;for(;c<-Math.PI;)c+=2*Math.PI;const u=Ct(c,-.05,ir.turnRadPerTick),f=Math.hypot(t.vx,t.vy);t.vx=Math.cos(o+u)*f,t.vy=Math.sin(o+u)*f}}t.x+=t.vx*xt,t.y+=t.vy*xt,t.traveled+=Math.hypot(t.vx,t.vy)*xt;const n=t.x<pn||t.x>gn||t.y<mn||t.y>_n||x0(t.x,t.y,i.obstacles),r=t.traveled>=t.maxRange;(n||r)&&(t.owner==="player"&&i.puddles.push({x:Ct(t.x,pn+.2,gn-.2),y:Ct(t.y,mn+.2,_n-.2),ttl:wo}),i.shots.splice(e,1))}}function Rc(i){for(let e=i.puddles.length-1;e>=0;e--)--i.puddles[e].ttl<=0&&i.puddles.splice(e,1)}function L0(i,e){const t=i.player;for(let n=i.shots.length-1;n>=0;n--){const r=i.shots[n];if(r.owner==="player"){for(const s of i.enemies)if(!(s.kind==="gorko"&&s.fsm==="airborne")&&Pt(r.x,r.y,s.x,s.y)<r.radius+Ti(s.kind)){if(s.kind==="babosa_acorazada"){const l=Math.hypot(r.vx,r.vy)||1;if(r.vx/l*s.facingX+r.vy/l*s.facingY<ri.backDot){i.puddles.push({x:r.x,y:r.y,ttl:wo/3}),i.shots.splice(n,1),Ke(i,{type:"shot_blocked",enemyId:s.id,tick:i.tick});break}}let a=r.damage;el(i,e,"critico")&&(a*=2),s.kind==="gorko"&&s.fsm==="belly"&&(a=Math.round(a*Ue.bellyDamageMult)),s.hp-=a;const o=Math.hypot(r.vx,r.vy)||1;s.kx+=r.vx/o*r.knockback,s.ky+=r.vy/o*r.knockback,i.puddles.push({x:r.x,y:r.y,ttl:wo/2}),r.tags.includes("divide")&&!r.fragment&&U0(i,r,e),i.shots.splice(n,1),Ke(i,{type:"enemy_hit",enemyId:s.id,damage:a,hpLeft:Math.max(0,s.hp),tick:i.tick});break}}}for(let n=i.enemies.length-1;n>=0;n--){const r=i.enemies[n];r.hp<=0&&(i.enemies.splice(n,1),D0(i,r,e),Ke(i,{type:"enemy_killed",enemyId:r.id,kind:r.kind,tick:i.tick}))}if(t.iframes===0){for(const n of i.enemies)if(!(n.kind==="gorko"&&n.fsm==="airborne")&&Pt(t.x,t.y,n.x,n.y)<Mt.radius+Ti(n.kind)){Po(i,g0(n.kind),n.x,n.y,"contacto:"+n.kind);break}}if(t.iframes===0)for(let n=i.shots.length-1;n>=0;n--){const r=i.shots[n];if(r.owner==="enemy"&&Pt(r.x,r.y,t.x,t.y)<r.radius+Mt.radius){i.shots.splice(n,1),Po(i,r.damage,r.x,r.y,"escupitajo");break}}}function D0(i,e,t){const n=()=>(t.drops()-.5)*.5;if(e.kind!=="gorko"){if(e.kind==="sapo_doble"){const r=t.drops(),s=r<ba.big?"crystal_big":r<ba.big+ba.med?"crystal_med":"crystal";i.drops.push({id:i.nextId++,kind:s,x:e.x+n(),y:e.y+n()});return}t.drops()<Y_.heart&&i.drops.push({id:i.nextId++,kind:"heart",x:e.x+n(),y:e.y+n()})}}function U0(i,e,t){const r=el(i,t,"dividir_en_3")?[-.9,0,Ar.angleRad]:[-.9,Ar.angleRad],s=Math.atan2(e.vy,e.vx),a=Math.hypot(e.vx,e.vy)||1;for(const o of r){const l=s+o;i.shots.push({id:i.nextId++,owner:"player",x:e.x,y:e.y,vx:Math.cos(l)*a,vy:Math.sin(l)*a,damage:Math.max(1,Math.round(e.damage*Ar.damageMult)),traveled:0,maxRange:Ar.range,radius:e.radius*Ar.radiusMult,knockback:e.knockback*.5,tags:[],fragment:!0})}Ke(i,{type:"shot_split",count:r.length,tick:i.tick})}function Po(i,e,t,n,r){const s=i.player,a=Math.min(s.armor,e);a>0&&(s.armor-=a,Ke(i,{type:"armor_absorbed",amount:a,armorLeft:s.armor,tick:i.tick}));const o=e-a;s.halfHearts=Math.max(0,s.halfHearts-o),s.iframes=D_;const l=Pt(s.x,s.y,t,n),c=l>.001?(s.x-t)/l:1,u=l>.001?(s.y-n)/l:0;s.kx+=c*vc,s.ky+=u*vc,o>0&&Ke(i,{type:"damage_taken",amount:o,halfHeartsLeft:s.halfHearts,source:r,tick:i.tick})}function N0(i){if(i.player.halfHearts<=0&&i.status==="playing"){i.status="dead",i.player.deathTick=i.tick,Ke(i,{type:"player_died",tick:i.tick});return}const e=i.floor.rooms[i.floor.current];if(i.enemies.length===0&&!e.cleared&&i.status==="playing"&&(e.cleared=!0,Ke(i,{type:"room_cleared",tick:i.tick}),e.id===i.floor.keyRoomId&&i.drops.push({id:i.nextId++,kind:"key",x:ct/2,y:rt/2}),e.kind==="boss"&&!i.floor.trapdoorOpen&&(i.floor.trapdoorOpen=!0,Ke(i,{type:"trapdoor_opened",tick:i.tick}),i.drops.push({id:i.nextId++,kind:"crystal_med",x:ct/2-1,y:rt/2+1.2}),i.drops.push({id:i.nextId++,kind:"heart",x:ct/2+1,y:rt/2+1.2}),i.drops.push({id:i.nextId++,kind:"heart",x:ct/2,y:rt/2+1.8}),i.floor.level===Zo))){i.drops.push({id:i.nextId++,kind:"crystal_big",x:ct/2,y:rt/2-1.4});const t=Co(i),n=[...zr.values()].filter(a=>t.includes(a.id)&&(a.rareza==="legendaria"||a.slot==="nucleo")),r=Hr(e.seed^45141),s=n[Math.floor(r()*n.length)];i.pickups.push({id:i.nextId++,itemId:s.id,x:ct/2-1.6,y:rt/2-1.4})}}function Ke(i,e){i.events.push(e)}function Ct(i,e,t){return i<e?e:i>t?t:i}function Pt(i,e,t,n){return Math.hypot(t-i,n-e)}function F0(i){const e=s=>Math.round(s*1e6)/1e6,t={t:i.tick,st:i.status,p:[e(i.player.x),e(i.player.y),i.player.halfHearts,i.player.iframes],it:i.player.items.join(","),ar:i.player.armor,us:i.player.usable?[i.player.usable.itemId,i.player.usable.cooldown,i.player.usable.activeTicks]:null,us2:i.player.usable2?[i.player.usable2.itemId,i.player.usable2.cooldown,i.player.usable2.activeTicks]:null,cf:[i.config.usableSlots,i.config.unlockedItems.join(",")],da:[i.player.dashTicks,i.player.dashCooldown],pk:i.pickups.map(s=>[s.id,s.itemId]),fl:[i.floor.level,i.floor.current,i.floor.trapdoorOpen?1:0,i.floor.rooms.map(s=>(s.cleared?1:0)+(s.visited?2:0)+(s.locked?4:0)).join("")],ec:[i.player.keys,i.player.crystals,i.drops.map(s=>`${s.kind}${e(s.x)}`).join(",")],e:i.enemies.map(s=>[s.id,e(s.x),e(s.y),s.hp,s.fsm,s.timer]),sh:i.shots.map(s=>[s.id,s.owner,e(s.x),e(s.y),e(s.traveled)]),pu:i.puddles.length},n=JSON.stringify(t);let r=2166136261;for(let s=0;s<n.length;s++)r^=n.charCodeAt(s),r=Math.imul(r,16777619);return(r>>>0).toString(16).padStart(8,"0")}function O0(i,e){const t={version:e,seed:()=>i.sim.state.seed,state:()=>structuredClone(i.sim.state),hash:()=>i.sim.hash(),press:(n,r)=>i.press(n,r/1e3*Ei),aimAt:(n,r)=>i.aimAt(n,r),clearAim:()=>i.clearAim(),tick:n=>i.tick(n),pause:n=>{i.paused=n},isPaused:()=>i.paused,reset:n=>i.reset(n),telemetry:()=>structuredClone(i.telemetry),clearTelemetry:()=>{i.telemetry.length=0},goto:n=>Qo(i.sim.state,n),heal:()=>{const n=i.sim.state.player;n.halfHearts=n.maxHalfHearts},grant:n=>{const r=i.sim.state;r.player.items.push(n),r.stats=zs(r.player.items),r.player.maxHalfHearts=r.stats.maxHalfHearts}};return window.__game=t,t}const Ea=1e3/Ei,k0=5;function B0(i,e){let t=e,n=Ec(i,t),r=0,s=0;const a={up:0,down:0,left:0,right:0,fire:0,dash:0,use:0,use2:0,interact:0};let o=null;const l={sim:n,live:Nd(),paused:!1,telemetry:[],frame(f){if(l.paused)return[];if(s>0)return s--,[];r+=Math.min(f,Ea*k0);const d=[];for(;r>=Ea;)r-=Ea,d.push(...u());return d},tick(f){const d=[];for(let h=0;h<f;h++)d.push(...u());return d},press(f,d){a[f]=Math.max(a[f],Math.max(0,Math.round(d)))},aimAt(f,d){o={x:f,y:d}},clearAim(){o=null},freeze(f){s=Math.max(s,f)},reset(f,d){d&&(t=d),n=Ec(f??n.state.seed,t),l.sim=n,r=0,s=0,l.telemetry.length=0,Object.keys(a).forEach(h=>a[h]=0),o=null}};function c(){const f={...l.live};return Object.keys(a).forEach(d=>{a[d]>0&&(f[d]=!0,a[d]--)}),o&&(f.aimX=o.x,f.aimY=o.y),f}function u(){n.step(c());const f=n.state.events;return f.length&&l.telemetry.push(...f),f}return l}const Io=1,Cc="kai_save",Od=[{id:"slot_usable_2",nombre:"2º slot de usable",descripcion:"Lleva un segundo usable (tecla Q). El desbloqueo estrella.",coste:8},{id:"item_manos_de_ladron",nombre:"Manos de Ladrón",descripcion:"Entra al pool de la run: +1 suerte e imán de monedas.",coste:4},{id:"item_herradura_del_ahogado",nombre:"Herradura del Ahogado",descripcion:"Entra al pool: +3 suerte, −1 corazón. Era del mago…",coste:4}],z0={item_manos_de_ladron:"manos_de_ladron",item_herradura_del_ahogado:"herradura_del_ahogado"};function Pc(){return{version:Io,cristales:0,desbloqueos:[],slimepedia:[]}}function H0(i){const e=typeof localStorage<"u"?localStorage:(()=>{const r=new Map;return{getItem:s=>r.get(s)??null,setItem:(s,a)=>void r.set(s,a)}})();let t=Pc();try{const r=e.getItem(Cc);if(r){const s=JSON.parse(r);s&&s.version===Io&&typeof s.cristales=="number"&&Array.isArray(s.desbloqueos)&&(t={version:Io,cristales:Math.max(0,Math.floor(s.cristales)),desbloqueos:s.desbloqueos.filter(a=>typeof a=="string"),slimepedia:Array.isArray(s.slimepedia)?s.slimepedia.filter(a=>typeof a=="string"):[]})}}catch{t=Pc()}const n={data:t,persist(){e.setItem(Cc,JSON.stringify(n.data))},harvest(r){r>0&&(n.data.cristales+=r,n.persist())},redeem(r){const s=Od.find(a=>a.id===r);return!s||n.has(r)||n.data.cristales<s.coste?!1:(n.data.cristales-=s.coste,n.data.desbloqueos.push(r),n.persist(),!0)},has(r){return n.data.desbloqueos.includes(r)}};return n}function kd(i){return{usableSlots:i.has("slot_usable_2")?2:1,unlockedItems:i.data.desbloqueos.map(e=>z0[e]).filter(e=>!!e)}}function G0(i,e,t,n){const r=document.createElement("div");r.className="screens",i.appendChild(r);let s=!1,a=!1,o=null,l=null;function c(){s=!0,e.paused=!0,r.innerHTML=`
      <div class="screen screen-title">
        <div class="title-name">KAI</div>
        <div class="title-sub">un slime contra El Pozo</div>
        <div class="title-row">
          <input class="title-seed" type="text" inputmode="numeric" placeholder="seed (opcional)" />
          <button class="title-play">Entrar al Pozo</button>
        </div>
        <div class="title-hint">WASD mover · ratón apuntar · clic disparar · espacio usable · shift dash</div>
        <div class="title-version">sim v${n} · cristales ◆ ${t.data.cristales}</div>
      </div>`,r.querySelector(".title-play").addEventListener("click",()=>{const h=r.querySelector(".title-seed").value.trim(),_=h?Number(h)>>>0:Math.floor(Math.random()*4294967295)>>>0;u(_)})}function u(h){e.reset(h,kd(t)),o=null,f(),e.paused=!1}function f(){s=!1,a=!1,r.innerHTML=""}function d(h){a=!0;const _=h.status==="victory",S=Od.map(m=>{const p=t.has(m.id),w=t.data.cristales>=m.coste,R=p?"owned":w?"can":"cant",v=p?"canjeado":`◆ ${m.coste}`;return`<div class="refuge-unlock ${R}" data-id="${m.id}"><div><b>${m.nombre}</b><div class="refuge-desc">${m.descripcion}</div></div><button class="refuge-buy" ${p||!w?"disabled":""}>${v}</button></div>`}).join("");r.innerHTML=`
      <div class="screen screen-refuge">
        <div class="refuge-title">${_?"El refugio celebra tu victoria":"El refugio te recoge"}</div>
        <div class="refuge-crystals">cristales ◆ <b>${t.data.cristales}</b></div>
        <div class="refuge-list">${S}</div>
        <div class="refuge-actions">
          <button class="refuge-again">Nueva run</button>
          <button class="refuge-same">Repetir seed ${h.seed}</button>
        </div>
      </div>`;for(const m of r.querySelectorAll(".refuge-buy"))m.addEventListener("click",()=>{const p=m.parentElement.dataset.id;t.redeem(p)&&d(h)});r.querySelector(".refuge-again").addEventListener("click",()=>{u(Math.floor(Math.random()*4294967295)>>>0)}),r.querySelector(".refuge-same").addEventListener("click",()=>{u(h.seed)})}return c(),{update(h){s&&(h.tick>0||!e.paused)&&f();const _=h.status==="dead"||h.status==="victory";_&&o!==e.sim&&(o=e.sim,t.harvest(h.player.crystals),l!==null&&clearTimeout(l),l=window.setTimeout(()=>{e.sim===o&&!a&&d(h)},2400)),!_&&a&&f()}}}const Cr=12,Ic=42,Lc=6;function V0(){const i=new URLSearchParams(location.search).get("touch");return i==="1"?!0:i==="0"?!1:window.matchMedia("(pointer: coarse) and (hover: none)").matches}function W0(i,e){const t=e.live,n=document.createElement("div");if(n.className="touch",n.innerHTML=`
    <div class="touch-zone touch-zone-left"></div>
    <div class="touch-zone touch-zone-right"></div>
    <div class="touch-stick touch-stick-move"><div class="touch-knob"></div></div>
    <div class="touch-stick touch-stick-aim"><div class="touch-knob"></div></div>
    <div class="touch-buttons">
      <button class="touch-btn touch-btn-dash">⚡<small>dash</small></button>
      <button class="touch-btn touch-btn-use">◇<small>objeto</small></button>
      <button class="touch-btn touch-btn-use2" hidden>◆<small>obj. 2</small></button>
      <button class="touch-btn touch-btn-buy" hidden>€<small>comprar</small></button>
    </div>`,i.appendChild(n),!localStorage.getItem("kai_touch_help_v1")){const v=document.createElement("div");v.className="touch-help",v.innerHTML=`
      <div class="touch-help-card">
        <div class="touch-help-title">Controles</div>
        <div>🕹️ <b>Pulgar izquierdo</b> — mover a Kai</div>
        <div>🎯 <b>Pulgar derecho</b> — apuntar (dispara solo mientras apuntas)</div>
        <div>⚡ <b>dash</b> — esquiva con invulnerabilidad</div>
        <div>◇ <b>objeto</b> — usa tu objeto activo</div>
        <div>€ <b>comprar</b> — aparece al acercarte a la tienda</div>
        <div class="touch-help-go">toca para jugar</div>
      </div>`,n.appendChild(v),v.addEventListener("pointerdown",T=>{T.stopPropagation(),localStorage.setItem("kai_touch_help_v1","1"),v.remove()})}const r=n.querySelector(".touch-zone-left"),s=n.querySelector(".touch-zone-right"),a=n.querySelector(".touch-stick-move"),o=n.querySelector(".touch-stick-aim"),l=a.querySelector(".touch-knob"),c=o.querySelector(".touch-knob"),u=n.querySelector(".touch-btn-use2"),f=n.querySelector(".touch-btn-buy");let d=null,h=null,_=null;function S(v,T,b){const I=Math.hypot(T,b),x=I>Ic?Ic/I:1;v.style.transform=`translate(${T*x}px, ${b*x}px)`}function m(v,T){t.left=v<-Cr,t.right=v>Cr,t.up=T<-Cr,t.down=T>Cr}function p(v,T){const b=Math.hypot(v,T);b>Cr?(d={x:v/b,y:T/b},t.fire=!0):t.fire=!1}function w(v,T,b,I,x,E,D){v.addEventListener("pointerdown",O=>{if(I())return;const q=T.getBoundingClientRect(),ne={pointerId:O.pointerId,baseX:q.left+q.width/2,baseY:q.top+q.height/2};x(ne);try{v.setPointerCapture(O.pointerId)}catch{}T.classList.add("active");const H=O.clientX-ne.baseX,j=O.clientY-ne.baseY;S(b,H,j),E(H,j),O.preventDefault()}),v.addEventListener("pointermove",O=>{const q=I();if(!q||O.pointerId!==q.pointerId)return;const ne=O.clientX-q.baseX,H=O.clientY-q.baseY;S(b,ne,H),E(ne,H),O.preventDefault()});const L=O=>{const q=I();!q||O.pointerId!==q.pointerId||(x(null),T.classList.remove("active"),S(b,0,0),D())};v.addEventListener("pointerup",L),v.addEventListener("pointercancel",L)}w(r,a,l,()=>h,v=>h=v,m,()=>{t.left=t.right=t.up=t.down=!1}),w(s,o,c,()=>_,v=>_=v,p,()=>{d=null,t.fire=!1});const R=(v,T)=>{const b=n.querySelector(v);b.addEventListener("pointerdown",I=>{T(!0),I.preventDefault(),I.stopPropagation()});for(const I of["pointerup","pointercancel","pointerleave"])b.addEventListener(I,()=>T(!1))};return R(".touch-btn-dash",v=>t.dash=v),R(".touch-btn-use",v=>t.use=v),R(".touch-btn-use2",v=>t.use2=v),R(".touch-btn-buy",v=>t.interact=v),{update(v){d&&(t.aimX=v.player.x+d.x*Lc,t.aimY=v.player.y+d.y*Lc),u.hidden=!v.player.usable2;const T=v.pickups.some(b=>b.price&&Math.hypot(b.x-v.player.x,b.y-v.player.y)<1.6);f.hidden=!T}}}function X0(i,e){let t=0,n=1,r=0,s=0;const a=340,o={x:0,z:0};function l(c,u){(u>=r||t<=0)&&(t=c,n=c,r=u)}return{onEvents(c){for(const u of c)switch(u.type){case"damage_taken":l(140,.14),i.freeze(3);break;case"enemy_killed":l(90,.08),i.freeze(2);break;case"enemy_hit":l(40,.03);break;case"player_died":l(260,.2);break;case"room_changed":{const f={n:[0,1],s:[0,-1],e:[-1,0],w:[1,0]}[u.dir];o.x=f[0],o.z=f[1],s=a;break}case"level_started":i.freeze(6);break}},update(c,u){if(u.position.copy(e.cameraHome),s>0){s=Math.max(0,s-c);const f=s/a,d=f*f*(3-2*f);u.position.x+=o.x*6*d,u.position.z+=o.z*6*d}if(t>0){t-=c;const f=Math.max(0,t/n),d=r*f;u.position.x+=(Math.random()*2-1)*d,u.position.y+=(Math.random()*2-1)*d*.6,u.position.z+=(Math.random()*2-1)*d*.4,t<=0&&(r=0)}}}}const Fe={outline:1916526,body:4033504,bodyHurt:7251933,shine:9426165,core:14677503,torch:15245628,torchBright:16177034,stone:4861726,stoneDark:2759696,floor:2365968,floorAlt:2826260,dungeonBg:1708555,toad:5934138,toadBelly:10339434,toadOutline:3099166,spit:8829247,spitDark:4021278,danger:14830410,eyeWhite:16055295,eyeDark:1320511,white:16777215};function it(i){return"#"+i.toString(16).padStart(6,"0")}function cn(i,e){const t={img:new Image,cell:e,cols:0,rows:0,ready:!1};return t.img.onload=()=>{t.cols=Math.max(1,Math.floor(t.img.width/e)),t.rows=Math.max(1,Math.floor(t.img.height/e)),t.ready=!0},t.img.src=i,t}function Y0(){return{frog:cn("assets/enemies/frogs/frog_spritesheets/frog_green_spritesheet.png",32),frogPurple:cn("assets/enemies/frogs/frog_spritesheets/frog_purple_spritesheet.png",32),bat:cn("assets/enemies/cave-bat/Bat/Spritesheets/Blue_Flying.png",32),trader:cn("assets/characters/craftpix-slime/Slime1/Idle/Slime1_Idle_body.png",64),babosaWalk:cn("assets/characters/craftpix-slime/Slime3/Walk/Slime3_Walk_body.png",64),babosaIdle:cn("assets/characters/craftpix-slime/Slime3/Idle/Slime3_Idle_body.png",64),babosaHurt:cn("assets/characters/craftpix-slime/Slime3/Hurt/Slime3_Hurt_body.png",64),kaiIdle:cn("assets/characters/craftpix-slime/Slime2/Idle/Slime2_Idle_body.png",64),kaiRun:cn("assets/characters/craftpix-slime/Slime2/Run/Slime2_Run_body.png",64),kaiAttack:cn("assets/characters/craftpix-slime/Slime2/Attack/Slime2_Attack_body.png",64),kaiHurt:cn("assets/characters/craftpix-slime/Slime2/Hurt/Slime2_Hurt_body.png",64)}}function Ji(i,e,t,n,r,s,a,o=!1){i.imageSmoothingEnabled=!1;const l=e.cell;if(o){i.save(),i.translate(r,0),i.scale(-1,1),i.drawImage(e.img,t*l,n*l,l,l,-a/2,s-a/2,a,a),i.restore();return}i.drawImage(e.img,t*l,n*l,l,l,r-a/2,s-a/2,a,a)}function qt(i,e){const t=document.createElement("canvas");t.width=i,t.height=e;const n=t.getContext("2d");return[t,n]}function $t(i){const e=new xf(i);return e.magFilter=At,e.minFilter=At,e.generateMipmaps=!1,e.colorSpace=Xt,e}function Bd(i,e){let t=i*374761393+e*668265263>>>0;return t=Math.imul(t^t>>>13,1274126177)>>>0,(t^t>>>16)>>>0}function q0(i,e){const[n,r]=qt(i*16,e*16);for(let s=0;s<e;s++)for(let a=0;a<i;a++){r.fillStyle=(a+s)%2===0?it(Fe.floor):it(Fe.floorAlt),r.fillRect(a*16,s*16,16,16);const o=Bd(a,s);r.fillStyle="rgba(0,0,0,0.18)",r.fillRect(a*16+o%16,s*16+(o>>5)%16,2,1),r.fillRect(a*16+(o>>10)%16,s*16+(o>>15)%16,1,2),r.strokeStyle="rgba(0,0,0,0.25)",r.lineWidth=1,r.strokeRect(a*16+.5,s*16+.5,15,15)}return $t(n)}function Dc(i,e){const[n,r]=qt(Math.max(1,i)*16,Math.max(1,e)*16);r.fillStyle=it(Fe.stone),r.fillRect(0,0,n.width,n.height);const s=16/2;for(let a=0;a*s<n.height;a++){const o=a%2===0?0:8;for(let l=-1;l*16<n.width;l++){const c=l*16+o,f=(Bd(l,a)%21-10)/100;r.fillStyle=f>=0?`rgba(255,235,200,${f*.5})`:`rgba(0,0,0,${-f})`,r.fillRect(c+1,a*s+1,14,s-2),r.strokeStyle=it(Fe.stoneDark),r.lineWidth=1,r.strokeRect(c+.5,a*s+.5,15,s-1)}}return $t(n)}const $0={down:0,up:1,left:2,right:3},Ta={idle:6,run:8,hurt:5},K0=13,Z0=4,J0=10,Uc=3,Q0=.24,j0=[2,1,0,7,6,5,4,3],Nc={sapo_escupidor:{canvas:96,world:3,y:.42,shadow:[.9,.58]},renacuajo:{canvas:64,world:1.5,y:.28,shadow:[.45,.3]},mosca_gorda:{canvas:64,world:1.6,y:.85,shadow:[.42,.27]},babosa_acorazada:{canvas:96,world:2.5,y:.42,shadow:[1.05,.66]},sapo_doble:{canvas:128,world:4.2,y:.56,shadow:[1.3,.82]},gorko:{canvas:192,world:7,y:.95,shadow:[2.3,1.45]}};function ex(i,e){return Math.abs(i)>=Math.abs(e)?i>0?3:2:e>0?0:1}const gs={col:0,frames:3},Qi={col:3,frames:4},_s={col:7,frames:4},Aa={col:11,frames:5},pi={frames:5,ticksPerFrame:4,rowOffset:8},wa={frames:2,ticksPerFrame:5},Fc=18,Oc=.16,tx=.22,xs=4;function vs(i,e){const t=Math.round(Math.atan2(e,i)/(Math.PI/4))+8&7;return j0[t]}const nx="assets/items/ssugmi-rpg-16x16/Free RPG asset Pack/separate files/",ix={punos_de_piedra:"glove_01.png",brazos_de_arquero:"bow_01.png",piernas_de_renacuajo:"boots_01.png",botas_de_salto:"boots_02.png",casco_de_lata:"headgear_01.png",ojo_de_cristal:"glasses.png",nucleo_denso:"stone.png",corazon_de_la_gema:"hp_potion.png",chorro_dividido:"arrow.png",burbujas_traviesas:"mana_potion.png",libro_multidisparo:"book.png",trebol_de_alcantarilla:"clover_leaf.png"};function ws(i){return nx+(ix[i]??"pouch.png")}const kc=new Map;function Bc(i){const e=ws(i);let t=kc.get(e);return t||(t=new Pf().load(e),t.magFilter=At,t.minFilter=At,t.generateMipmaps=!1,t.colorSpace=Xt,kc.set(e,t)),t}const rx=24,sx=64,ax=Mt.radius*Ao+4;function ox(i,e){const t=lx(),n=cx(),r=dx(),s=ux(),a=hx(),o=gx(),l=new Ut(new oi(1,.62),new bi({map:fx(),transparent:!0,depthWrite:!1,opacity:.85}));l.rotation.x=-Math.PI/2,l.position.y=.022,l.renderOrder=2,l.visible=!1,i.add(l);function c(C){const P=C.enemies.find(U=>U.kind==="gorko"&&(U.fsm==="jump_aim"||U.fsm==="airborne"));if(l.visible=!!P,!P)return;const y=P.fsm==="jump_aim"?.6+1.6*(1-P.timer/Ue.jumpAimTicks):2.2+.5*(1-P.timer/Ue.airborneTicks)+.12*Math.sin(C.tick*.5);l.scale.set(y*1.6,y,1),l.position.x=P.targetX,l.position.z=P.targetY}const u=Ra(i,64),f=ji(i,t,1,.62),d=new Map,h={prevX:null,prevY:0,lastMoveTick:-99,dist:0,facing:"down",prevFireCooldown:0,prevHalfHearts:-1,attackStart:-1,hurtStart:-1},_=Array.from({length:rx},()=>{const C=new nr(new Mi({map:r,depthWrite:!1,transparent:!0}));C.scale.set(.5,.5,1),C.renderOrder=3,C.visible=!1,i.add(C);const P=new nr(new Mi({map:o,depthWrite:!1,transparent:!0,opacity:.5}));P.scale.set(.3,.3,1),P.renderOrder=3,P.visible=!1,i.add(P);const y=ji(i,t,.24,.15);return y.visible=!1,{sprite:C,trail:P,shadow:y}}),S=Array.from({length:sx},(C,P)=>{const y=new Ut(new oi(.55,.32),new bi({map:n,transparent:!0,depthWrite:!1,opacity:0}));return y.rotation.x=-Math.PI/2,y.position.y=.008+P%8*.0015,y.renderOrder=1,y.visible=!1,i.add(y),y}),m=new Map,p=new wi(.52,.3,.42),w=new er({color:Fe.stone,roughness:.9});function R(C){for(const P of C.pickups)if(!m.has(P.id)){const y=new Ut(p,w);y.position.set(P.x,.15,P.y),i.add(y);const U=new nr(new Mi({map:Bc(P.itemId),depthWrite:!1,transparent:!0}));U.scale.set(.55,.55,1),U.renderOrder=3,i.add(U),m.set(P.id,{itemId:P.itemId,icon:U,base:y,shadow:ji(i,t,.5,.32)})}for(const[P,y]of m){const U=C.pickups.find(Q=>Q.id===P);if(!U){i.remove(y.icon),y.icon.material.dispose(),i.remove(y.base),i.remove(y.shadow),m.delete(P);continue}U.itemId!==y.itemId&&(y.itemId=U.itemId,y.icon.material.map=Bc(U.itemId)),y.icon.position.set(U.x,.72+.05*Math.sin(C.tick*.07),U.y),y.shadow.position.set(U.x,y.shadow.position.y,U.y)}}const v={heart:px(),key:mx(),crystal:Ca(4.5),crystal_med:Ca(5.5),crystal_big:Ca(6.5)},T=new Map;function b(C){for(const P of C.drops)if(!T.has(P.id)){const y=new nr(new Mi({map:v[P.kind],depthWrite:!1,transparent:!0}));y.renderOrder=3,i.add(y),T.set(P.id,{sprite:y,shadow:ji(i,t,.28,.18)})}for(const[P,y]of T){const U=C.drops.find(ce=>ce.id===P);if(!U){i.remove(y.sprite),y.sprite.material.dispose(),i.remove(y.shadow),T.delete(P);continue}const Q=Math.abs(Math.sin(C.tick*.09+P)),$=U.kind==="crystal_big"?.64:U.kind==="crystal_med"?.52:.44;y.sprite.scale.set($*(.35+.65*Q),$,1),y.sprite.position.set(U.x,.34+.05*Math.sin(C.tick*.1+P*2.1),U.y),y.shadow.position.set(U.x,y.shadow.position.y,U.y)}}const I=Ra(i,96);I.sprite.visible=!1;const x=ji(i,t,1.2,.75);x.visible=!1;function E(C){const P=C.floor.rooms[C.floor.current].kind==="shop";if(I.sprite.visible=P,x.visible=P,!P)return;const y=ct/2,U=2.1;I.sprite.scale.set(3.4,3.4,1),I.sprite.position.set(y,.62,U),x.position.set(y,x.position.y,U);const{ctx:Q,size:$}=I,ce=$/2;Q.clearRect(0,0,$,$);const ue=e.trader;if(ue&&ue.ready){const oe=Math.floor(C.tick/16)%6;Ji(Q,ue,oe,0,ce,ce+4,$*.8)}else Q.fillStyle=it(Fe.toad),lt(Q,ce,ce,$*.3,!0);const Ae=3*Math.sin(C.tick*.08),se=ce-$*.32+Ae;Q.fillStyle=it(Fe.core),Q.beginPath(),Q.moveTo(ce,se-6),Q.lineTo(ce+4.5,se),Q.lineTo(ce,se+6),Q.lineTo(ce-4.5,se),Q.closePath(),Q.fill(),Q.strokeStyle=it(Fe.shine),Q.lineWidth=1.4,Q.stroke(),I.tex.needsUpdate=!0}function D(C){L(C),j(C),st(C),Ne(C),R(C),b(C),E(C),c(C)}function L(C){const P=C.player,y=C.status==="dead",U=P.iframes>0&&Math.floor(P.iframes/U_)%2===1;u.sprite.material.opacity=U?.35:1;const $=P.halfHearts<=2&&!y?Math.sin(C.tick*.9)*.025:0;u.sprite.position.set(P.x+$,.52,P.y),f.position.set(P.x,f.position.y,P.y),O(C);const ce=!!(e.kaiIdle&&e.kaiIdle.ready);if(y)u.sprite.scale.set(2,2,1),H(u,C);else if(ce)u.sprite.scale.set(2.2,2.2,1),q(u,C);else{const ue=1+.04*Math.sin(C.tick*.12);u.sprite.scale.set(2*ue,2*(2-ue)*.95,1),ne(u,C)}}function O(C){const P=C.player,y=h;if(y.attackStart>C.tick&&(y.attackStart=-1),y.hurtStart>C.tick&&(y.hurtStart=-1),y.prevX!==null){const U=P.x-y.prevX,Q=P.y-y.prevY,$=Math.hypot(U,Q);$>1?y.dist=0:$>5e-4&&(y.dist+=$,y.lastMoveTick=C.tick,y.facing=Math.abs(U)>=Math.abs(Q)?U>0?"right":"left":Q>0?"down":"up")}y.prevX=P.x,y.prevY=P.y,P.fireCooldown>y.prevFireCooldown&&(y.attackStart=C.tick,y.facing=Math.abs(P.aimX)>=Math.abs(P.aimY)?P.aimX>0?"right":"left":P.aimY>0?"down":"up"),y.prevFireCooldown=P.fireCooldown,y.prevHalfHearts>=0&&P.halfHearts<y.prevHalfHearts&&(y.hurtStart=C.tick),y.prevHalfHearts=P.halfHearts}function q(C,P){const{ctx:y,size:U}=C,Q=U/2;y.clearRect(0,0,U,U);const $=h,ce=$0[$.facing],ue=$.hurtStart>=0?P.tick-$.hurtStart:1/0,Ae=$.attackStart>=0?P.tick-$.attackStart:1/0;let se=e.kaiIdle,oe;e.kaiHurt?.ready&&ue<Ta.hurt*Uc?(se=e.kaiHurt,oe=Math.floor(ue/Uc)):e.kaiAttack?.ready&&Ae<J0?(se=e.kaiAttack,oe=Z0):e.kaiRun?.ready&&P.tick-$.lastMoveTick<=xs?(se=e.kaiRun,oe=Math.floor($.dist/Q0)%Ta.run):oe=Math.floor(P.tick/K0)%Ta.idle,Ji(y,se,oe,ce,Q,Q+U*.06,U),C.tex.needsUpdate=!0}function ne(C,P){const{ctx:y,size:U}=C,Q=P.player,$=U/2,ce=ax,ue=Q.halfHearts<=2;y.clearRect(0,0,U,U),y.fillStyle=it(ue?Fe.bodyHurt:Fe.body),y.strokeStyle=it(Fe.outline),y.lineWidth=2,dn(y,$,$,ce,ce*1.05,!0,!0),y.fillStyle=nn(Fe.shine,.85),dn(y,$-ce*.55,$-ce*.55,ce*.4,ce*.225,!0,!1);const Ae=ue?.6+.4*Math.abs(Math.sin(P.tick*.25)):1;y.fillStyle=nn(ue?Fe.danger:Fe.core,Ae),lt(y,$,$+ce*.35,4.5,!0),y.strokeStyle=nn(Fe.shine,.9),y.lineWidth=1,lt(y,$,$+ce*.35,4.5,!1,!0);const se=Q.aimX*1.6,oe=Q.aimY*1.6;y.fillStyle=it(Fe.eyeWhite),dn(y,$-6,$-4,3.5,4.5,!0,!1),dn(y,$+6,$-4,3.5,4.5,!0,!1),y.fillStyle=it(Fe.eyeDark),lt(y,$-6+se,$-4+oe,2.2,!0),lt(y,$+6+se,$-4+oe,2.2,!0),y.fillStyle=it(Fe.white),lt(y,$-5+se,$-5+oe,.9,!0),lt(y,$+7+se,$-5+oe,.9,!0),C.tex.needsUpdate=!0}function H(C,P){const{ctx:y,size:U}=C,Q=U/2,$=P.tick-P.player.deathTick;y.clearRect(0,0,U,U);const ce=Math.min(1,$/40);y.fillStyle=nn(Fe.outline,.4),dn(y,Q,Q+6,15+10*ce,6+3*ce,!0,!1),y.fillStyle=nn(Fe.body,.55),dn(y,Q,Q+6,13+9*ce,5+2.5*ce,!0,!1);const ue=Math.floor($/14)%2===0?1:.25;y.fillStyle=nn(Fe.core,ue),lt(y,Q,Q+3,4.5,!0),y.strokeStyle=nn(Fe.shine,ue),y.lineWidth=1,lt(y,Q,Q+3,4.5,!1,!0),C.tex.needsUpdate=!0}function j(C){for(const P of C.enemies)if(!d.has(P.id)){const y=Nc[P.kind];d.set(P.id,{kind:P.kind,view:Ra(i,y.canvas),shadow:ji(i,t,y.shadow[0],y.shadow[1]),prevX:P.x,prevY:P.y,lastMoveTick:-99,dist:0,prevHp:P.hp,hurtStart:-1,spitStart:-1,prevFsm:P.fsm,dirRow:0})}for(const[P,y]of d){const U=C.enemies.find(be=>be.id===P);if(!U){i.remove(y.view.sprite),y.view.sprite.material.map?.dispose(),y.view.sprite.material.dispose(),i.remove(y.shadow),d.delete(P);continue}y.hurtStart>C.tick&&(y.hurtStart=-1),y.spitStart>C.tick&&(y.spitStart=-1),U.fsm==="shoot"&&y.prevFsm!=="shoot"&&(y.spitStart=C.tick),y.prevFsm=U.fsm;const Q=U.x-y.prevX,$=U.y-y.prevY,ce=Math.hypot(Q,$);ce>1?y.dist=0:ce>5e-4&&(y.dist+=ce,y.lastMoveTick=C.tick,y.dirRow=vs(Q,$)),y.prevX=U.x,y.prevY=U.y,U.hp<y.prevHp&&(y.hurtStart=C.tick),y.prevHp=U.hp,(U.fsm==="aim"||U.fsm==="shoot")&&(y.dirRow=vs(U.targetX-U.x,U.targetY-U.y)),U.kind==="renacuajo"&&(U.fsm==="windup"||U.fsm==="hop")&&(y.dirRow=vs(U.facingX,U.facingY)),U.kind==="gorko"&&(U.fsm==="jump_aim"||U.fsm==="volley")&&(y.dirRow=vs(U.targetX-U.x,U.targetY-U.y));const ue=Nc[U.kind];let Ae=1+.05*Math.sin(C.tick*.15);const se=U.kind!=="mosca_gorda"&&U.kind!=="babosa_acorazada";if(se&&(U.fsm==="aim"||U.fsm==="swallow_aim")){const be=U.kind==="sapo_doble"?ht.telegraphTicks:Ht.telegraphTicks;Ae=1+.25*(1-U.timer/be)}se||(Ae=1),y.view.sprite.scale.set(ue.world*Ae,ue.world,1);const oe=U.kind==="mosca_gorda"?ue.y+.08*Math.sin(C.tick*.13+U.id*1.7):ue.y;y.view.sprite.position.set(U.x,oe,U.y),y.shadow.position.set(U.x,y.shadow.position.y,U.y),W(y,U,C)}}function W(C,P,y){const{ctx:U,size:Q}=C.view;switch(U.clearRect(0,0,Q,Q),ee(C,P),P.kind){case"sapo_escupidor":ae(C,P,y,e.frog,Ht.telegraphTicks,Ht.aggroRange);break;case"renacuajo":ae(C,P,y,e.frog,Gt.windupTicks,Gt.aggroRange);break;case"sapo_doble":ae(C,P,y,e.frogPurple,ht.telegraphTicks,ht.aggroRange);break;case"mosca_gorda":K(C,P,y);break;case"babosa_acorazada":he(C,P,y);break;case"gorko":le(C,P,y);break}if(P.hp<P.maxHp){const $=Q/2,ce=Q*.42,ue=Q*.16;U.fillStyle="rgba(0,0,0,0.5)",U.fillRect($-ce/2,ue,ce,3),U.fillStyle=it(Fe.danger),U.fillRect($-ce/2,ue,ce*P.hp/P.maxHp,3)}C.view.tex.needsUpdate=!0}function ee(C,P){const U={aim:P.kind==="gorko"?Ue.tongueAimTicks:P.kind==="sapo_doble"?ht.telegraphTicks:Ht.telegraphTicks,swallow_aim:ht.swallowTelegraphTicks,windup:Gt.windupTicks,jump_aim:Ue.jumpAimTicks,summon:Ue.summonTicks,volley:Ue.volleyAimTicks}[P.fsm];if(!U)return;const{ctx:Q,size:$}=C.view,ce=$/2,ue=$*.3,Ae=1-P.timer/U;Q.strokeStyle=nn(Fe.white,.35+.4*Ae),Q.lineWidth=2,lt(Q,ce,ce,ue+4*(1-Ae),!1,!0),Q.fillStyle=nn(Fe.white,.9),Q.fillRect(ce-1.5,ce-ue-12,3,7),lt(Q,ce,ce-ue-3,1.8,!0)}function ae(C,P,y,U,Q,$){const{ctx:ce,size:ue}=C.view,Ae=ue/2;if(!U||!U.ready){We(ce,Ae,ue*.28,P,y);return}const se=C.hurtStart>=0?y.tick-C.hurtStart:1/0,oe=C.spitStart>=0?y.tick-C.spitStart:1/0;let be,Ve=C.dirRow;if(se<pi.frames*pi.ticksPerFrame)Ve=pi.rowOffset+C.dirRow,be=Math.floor(se/pi.ticksPerFrame);else if(oe<wa.frames*wa.ticksPerFrame)Ve=pi.rowOffset+C.dirRow,be=Math.floor(oe/wa.ticksPerFrame);else if(P.fsm==="aim"||P.fsm==="swallow_aim"||P.fsm==="windup"){const Ye=P.fsm==="aim"?Q:P.fsm==="windup"?Gt.windupTicks:ht.swallowTelegraphTicks,at=Math.max(1,Math.floor(Ye/Qi.frames));be=Qi.col+Math.min(Qi.frames-1,Math.floor((Ye-P.timer)/at))}else if(P.fsm==="hop"){const Ye=1-P.timer/Gt.hopTicks;be=_s.col+Math.min(_s.frames-1,Math.floor(Ye*_s.frames))}else if(y.tick-C.lastMoveTick<=xs){const Ye=Math.hypot(y.player.x-P.x,y.player.y-P.y)<=$,at=Ye?_s:Aa,tt=Ye?tx:Oc;be=at.col+Math.floor(C.dist/tt)%at.frames}else be=gs.col+Math.floor(y.tick/Fc)%gs.frames;Ji(ce,U,be,Ve,Ae,Ae,ue*.58)}function K(C,P,y){const{ctx:U,size:Q}=C.view,$=Q/2,ce=e.bat;if(!ce||!ce.ready){U.fillStyle=it(Fe.spitDark),lt(U,$,$,Q*.2,!0);return}const ue=Math.floor(y.tick/5)%6,Ae=ue%4,se=Math.floor(ue/4);Ji(U,ce,Ae,se,$,$,Q*.62,P.facingX>0);const oe=C.hurtStart>=0?y.tick-C.hurtStart:1/0;oe<8&&(U.fillStyle=`rgba(255,255,255,${.5*(1-oe/8)})`,lt(U,$,$,Q*.2,!0))}function le(C,P,y){const{ctx:U,size:Q}=C.view,$=Q/2;if(P.fsm==="airborne")return;const ce=e.frogPurple;if(!ce||!ce.ready){U.fillStyle="#8a4a9a",lt(U,$,$,Q*.28,!0);return}if(P.fsm==="belly"){const oe=.35+.2*Math.abs(Math.sin(y.tick*.2)),be=U.createRadialGradient($,$,4,$,$,Q*.34);be.addColorStop(0,`rgba(246,215,138,${oe})`),be.addColorStop(1,"rgba(246,215,138,0)"),U.fillStyle=be,lt(U,$,$,Q*.34,!0)}const ue=C.hurtStart>=0?y.tick-C.hurtStart:1/0;let Ae,se=C.dirRow;if(P.fsm==="belly")se=pi.rowOffset+C.dirRow,Ae=2;else if(ue<6)se=pi.rowOffset+C.dirRow,Ae=0;else if(P.fsm==="aim"||P.fsm==="jump_aim"||P.fsm==="summon"||P.fsm==="volley"){const be={aim:Ue.tongueAimTicks,jump_aim:Ue.jumpAimTicks,summon:Ue.summonTicks,volley:Ue.volleyAimTicks}[P.fsm],Ve=Math.max(1,Math.floor(be/Qi.frames));Ae=Qi.col+Math.min(Qi.frames-1,Math.floor((be-P.timer)/Ve))}else y.tick-C.lastMoveTick<=xs?Ae=Aa.col+Math.floor(C.dist/Oc)%Aa.frames:Ae=gs.col+Math.floor(y.tick/Fc)%gs.frames;Ji(U,ce,Ae,se,$,$,Q*.6)}function he(C,P,y){const{ctx:U,size:Q}=C.view,$=Q/2,ce=ex(P.facingX,P.facingY),ue=C.hurtStart>=0?y.tick-C.hurtStart:1/0;let Ae=e.babosaIdle,se=0;e.babosaHurt?.ready&&ue<5*3?(Ae=e.babosaHurt,se=Math.floor(ue/3)):e.babosaWalk?.ready&&y.tick-C.lastMoveTick<=xs?(Ae=e.babosaWalk,se=Math.floor(C.dist/.14)%8):e.babosaIdle?.ready&&(se=Math.floor(y.tick/16)%6),Ae&&Ae.ready?Ji(U,Ae,se,ce,$,$,Q*.72):(U.fillStyle="#7a5b3a",lt(U,$,$,Q*.26,!0));const oe=Math.atan2(P.facingY,P.facingX);U.strokeStyle="rgba(205,218,228,0.9)",U.lineWidth=3.5,U.beginPath(),U.arc($,$,Q*.28,oe-1.15,oe+1.15),U.stroke()}function We(C,P,y,U,Q){C.fillStyle=it(Fe.toad),C.strokeStyle=it(Fe.toadOutline),C.lineWidth=2,dn(C,P,P,y,y*.85,!0,!0),C.fillStyle=it(Fe.toadBelly),dn(C,P,P+y*.35,y*.65,y*.4,!0,!1);const $=Q.player.x-U.x,ce=Q.player.y-U.y,ue=Math.hypot($,ce)||1,Ae=$/ue*1.2,se=ce/ue*1.2;C.fillStyle=it(Fe.eyeWhite),lt(C,P-y*.45,P-y*.7,4,!0),lt(C,P+y*.45,P-y*.7,4,!0),C.fillStyle=it(Fe.eyeDark),lt(C,P-y*.45+Ae,P-y*.7+se,2,!0),lt(C,P+y*.45+Ae,P-y*.7+se,2,!0)}function st(C){for(let P=0;P<_.length;P++){const y=_[P],U=C.shots[P];if(!U){y.sprite.visible=y.trail.visible=y.shadow.visible=!1;continue}y.sprite.visible=y.shadow.visible=!0,y.sprite.material.map=U.owner==="player"?r:U.tags.includes("lengua")?a:s;const Q=.5*(U.radius/or);if(y.sprite.scale.set(Q,Q,1),y.sprite.position.set(U.x,.38,U.y),y.shadow.position.set(U.x,y.shadow.position.y,U.y),y.trail.visible=U.owner==="player",y.trail.visible){const $=Math.hypot(U.vx,U.vy)||1;y.trail.position.set(U.x-U.vx/$*.28,.38,U.y-U.vy/$*.28)}}}function Ne(C){for(let P=0;P<S.length;P++){const y=S[P],U=C.puddles[P];if(!U){y.visible=!1;continue}y.visible=!0,y.position.x=U.x,y.position.z=U.y,y.material.opacity=Math.min(.5,U.ttl/400)}}return{update:D}}function Ra(i,e){const[t,n]=qt(e,e),r=$t(t),s=new nr(new Mi({map:r,depthWrite:!1,transparent:!0}));return s.scale.set(e/Ao,e/Ao,1),s.renderOrder=3,i.add(s),{sprite:s,ctx:n,tex:r,size:e}}function ji(i,e,t,n){const r=new Ut(new oi(t,n),new bi({map:e,transparent:!0,depthWrite:!1,opacity:.4}));return r.rotation.x=-Math.PI/2,r.position.y=.02,r.renderOrder=2,i.add(r),r}function lx(){const[i,e]=qt(32,32),t=e.createRadialGradient(16,16,2,16,16,15);t.addColorStop(0,"rgba(0,0,0,0.85)"),t.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=t,e.fillRect(0,0,32,32);const n=$t(i);return n.magFilter=Rt,n.minFilter=Rt,n}function cx(){const[i,e]=qt(32,20);return e.fillStyle=it(Fe.outline),dn(e,16,10,15,8,!0,!1),e.fillStyle=nn(Fe.body,.6),dn(e,16,10,9,4.5,!0,!1),e.fillStyle=nn(Fe.shine,.35),dn(e,13,8,3.5,1.6,!0,!1),$t(i)}function dx(){const[i,e]=qt(16,16);return e.fillStyle=it(Fe.body),lt(e,8,8,6,!0),e.fillStyle=it(Fe.core),lt(e,7,7,2.5,!0),$t(i)}function ux(){const[i,e]=qt(16,16);return e.fillStyle=it(Fe.spit),lt(e,8,8,5,!0),e.fillStyle=it(Fe.spitDark),lt(e,9,9,1.8,!0),$t(i)}function fx(){const[i,e]=qt(64,64),t=e.createRadialGradient(32,32,4,32,32,30);t.addColorStop(0,"rgba(0,0,0,0.9)"),t.addColorStop(.75,"rgba(0,0,0,0.75)"),t.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=t,e.fillRect(0,0,64,64),e.strokeStyle="rgba(226,75,74,0.9)",e.lineWidth=2.5,e.beginPath(),e.arc(32,32,27,0,Math.PI*2),e.stroke();const n=$t(i);return n.magFilter=Rt,n.minFilter=Rt,n}function hx(){const[i,e]=qt(16,16);return e.fillStyle="#e07a9a",lt(e,8,8,6.5,!0),e.fillStyle="#b04a6a",lt(e,9,9,2.4,!0),e.strokeStyle="#7a2a44",e.lineWidth=1.2,lt(e,8,8,6.5,!1,!0),$t(i)}function Ca(i){const[e,t]=qt(16,16),n=8,r=8;return t.fillStyle=it(Fe.core),t.beginPath(),t.moveTo(n,r-i),t.lineTo(n+i*.7,r),t.lineTo(n,r+i),t.lineTo(n-i*.7,r),t.closePath(),t.fill(),t.strokeStyle=it(Fe.shine),t.lineWidth=1.4,t.stroke(),t.fillStyle="rgba(255,255,255,0.85)",lt(t,n-1.5,r-2,1.1,!0),$t(e)}function px(){const[i,e]=qt(16,16);return e.fillStyle=it(Fe.danger),e.beginPath(),e.moveTo(8,14),e.bezierCurveTo(2,9,2,4,5.5,3.5),e.bezierCurveTo(7,3.2,8,4.5,8,5.5),e.bezierCurveTo(8,4.5,9,3.2,10.5,3.5),e.bezierCurveTo(14,4,14,9,8,14),e.fill(),e.fillStyle="rgba(255,255,255,0.6)",lt(e,5.5,5.5,1.2,!0),$t(i)}function mx(){const[i,e]=qt(16,16);return e.strokeStyle="#f2c14e",e.lineWidth=2,lt(e,5.5,5.5,3,!1,!0),e.beginPath(),e.moveTo(7.5,7.5),e.lineTo(12.5,12.5),e.moveTo(10.5,10.5),e.lineTo(12,9),e.moveTo(12.5,12.5),e.lineTo(14,11),e.stroke(),$t(i)}function gx(){const[i,e]=qt(16,16),t=e.createRadialGradient(8,8,1,8,8,7);return t.addColorStop(0,nn(Fe.shine,.9)),t.addColorStop(1,"rgba(143,212,245,0)"),e.fillStyle=t,e.fillRect(0,0,16,16),$t(i)}function dn(i,e,t,n,r,s,a){i.beginPath(),i.ellipse(e,t,n,r,0,0,Math.PI*2),i.fill(),a&&i.stroke()}function lt(i,e,t,n,r,s=!1){i.beginPath(),i.arc(e,t,Math.max(.1,n),0,Math.PI*2),r&&i.fill(),s&&i.stroke()}function nn(i,e){const t=i>>16&255,n=i>>8&255,r=i&255;return`rgba(${t},${n},${r},${e})`}const zc={dano:"daño",cadencia:"caudal",alcance:"alcance",velProyectil:"presión",velMovimiento:"velocidad",suerte:"suerte",corazones:"vida",proyectiles:"chorro(s)",armaduraPorSala:"armadura/sala"},Hc={empuje:"más empuje al impactar",rastro_charcos:"deja un rastro de charquitos",dash:"dash con i-frames (Shift)",divide:"los disparos se dividen al impactar",burbuja:"disparos flotantes que persiguen",ver_cofres:"ves el contenido de los cofres"},_x={critico:"crítico ×2",dividir_en_3:"dividirse en 3",burbuja_gigante:"burbuja gigante"},xx={comun:"común",rara:"rara",legendaria:"legendaria"};function zd(i,e){const t=[];for(const n of i.tags)Hc[n]&&t.push(Hc[n]);for(const n of i.procs){const r=Math.round(Ud(n,e)*100);t.push(`${_x[n.efecto]??n.efecto}: ${r}% (con tu suerte)`)}if(i.usable){const n=Math.round(i.usable.duracionTicks/Ei),r=Math.round(i.usable.recargaTicks/Ei);t.push(`usable: ${n} s de efecto, recarga ${r} s`)}return t}function vx(i,e){const t=[];for(const[n,r]of Object.entries(i.stats))t.push(`${r>0?"+":""}${r} ${zc[n]??n}`);for(const[n,r]of Object.entries(i.mults))t.push(`×${r} ${zc[n]??n}`);return t.push(...zd(i,e)),t}function Fn(i){return Number.isInteger(i)?String(i):i.toFixed(1)}function Gc(i,e){const t=[],n=(r,s,a,o=1)=>{const l=(a-s)*o;Math.abs(l)>1e-9&&t.push(`${l>0?"+":"−"}${Fn(Math.abs(l))} ${r}`)};return n("daño",i.damage,e.damage),n("caudal",i.fireRate,e.fireRate),n("alcance",i.range,e.range),n("presión",i.shotSpeed,e.shotSpeed),n("velocidad",i.moveSpeed,e.moveSpeed),n("suerte",i.luck,e.luck),n("chorro(s)",i.projectiles,e.projectiles),n("vida",i.maxHalfHearts,e.maxHalfHearts,.5),n("armadura/sala",i.armorPerRoom,e.armorPerRoom),t}const Vc="M10 17 C4.5 12.5 1 9 1 5.6 A4.4 4.4 0 0 1 10 4 A4.4 4.4 0 0 1 19 5.6 C19 9 15.5 12.5 10 17 Z";function Mx(i,e,t){const n=document.createElement("div");n.className="hud",n.innerHTML=`
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
  `,i.appendChild(n);const r=n.querySelector(".hud-hearts"),s=n.querySelector(".hud-toasts"),a=n.querySelector(".hud-items"),o=n.querySelector(".hud-stats"),l=n.querySelector(".hud-near"),c=n.querySelector(".hud-minimap"),u=n.querySelector(".hud-wallet"),f=n.querySelector(".hud-boss"),d=[...n.querySelectorAll(".hud-usable")],h=[...n.querySelectorAll(".hud-usable-icon")],_=[...n.querySelectorAll(".hud-usable-cd")],S=n.querySelector(".hud-center"),m=n.querySelector(".hud-msg"),p=n.querySelector(".hud-sub"),w=n.querySelector(".hud-seed");let R=-1,v=-1,T=-1,b="",I=-1;const x=["",""],E=[-1,-1];let D="",L="",O="",q="",ne="",H="",j=null,W=!0;window.addEventListener("keydown",K=>{K.code==="Tab"&&(K.preventDefault(),W=!W,o.hidden=!W)});function ee(K,le){const he=document.createElement("div");for(he.className="hud-toast"+(le==="delta"?" hud-toast-delta":""),he.textContent=K,s.appendChild(he);s.children.length>6;)s.firstChild?.remove();setTimeout(()=>he.remove(),2600)}function ae(K,le="#e24b4a",he="#f6a5a4"){const We=`<path d="${Vc}" fill="rgba(0,0,0,0.45)" stroke="rgba(0,0,0,0.6)" stroke-width="1"/>`,st=K===1?' style="clip-path: inset(0 50% 0 0)"':"",Ne=K>0?`<path d="${Vc}" fill="${le}"${st}/><path d="M6 6.2 A2.4 2.4 0 0 1 9 4.8" stroke="${he}" stroke-width="1.4" fill="none"${st}/>`:"";return`<svg viewBox="0 0 20 18" class="hud-heart">${We}${Ne}</svg>`}return{update(K){const le=K.player.halfHearts,he=K.player.maxHalfHearts,We=K.player.armor;if(le!==R||he!==v||We!==T){R=le,v=he,T=We;const se=Math.ceil(he/2);let oe="";for(let be=0;be<se;be++)oe+=ae(Math.min(2,Math.max(0,le-be*2)));for(let be=0;be<Math.ceil(We/2);be++)oe+=ae(Math.min(2,Math.max(0,We-be*2)),"#9fb8c8","#dfeef7");r.innerHTML=oe}if([K.player.usable,K.player.usable2].forEach((se,oe)=>{const be=se?.itemId??"";if(be!==x[oe]&&(x[oe]=be,d[oe].hidden=!se,se&&(h[oe].src=ws(se.itemId))),se){const Ve=Math.ceil(se.cooldown/Ei);Ve!==E[oe]&&(E[oe]=Ve,_[oe].textContent=Ve>0?String(Ve):""),d[oe].classList.toggle("ready",se.cooldown===0),d[oe].classList.toggle("active",se.activeTicks>0)}}),K.status!==b)if(b=K.status,S.classList.toggle("has-msg",K.status!=="playing"),K.status==="victory"){const se=t(),oe=se.filter(ot=>ot.type==="enemy_killed").length,be=se.filter(ot=>ot.type==="damage_taken").length,Ve=se.filter(ot=>ot.type==="heart_collected").length,Ye=se.filter(ot=>ot.type==="item_bought").length,at=Math.floor(K.tick/3600),tt=Math.floor(K.tick%3600/60);m.textContent="¡El Pozo superado!",p.innerHTML=`<div class="hud-run-summary"><div>tiempo <b>${at}:${String(tt).padStart(2,"0")}</b></div><div>abatidos <b>${oe}</b> · golpes recibidos <b>${be}</b></div><div>items <b>${K.player.items.length}</b> · compras <b>${Ye}</b> · corazones <b>${Ve}</b></div><div>cristales <b class="hud-wallet-crystal">◆ ${K.player.crystals}</b></div><div style="margin-top:6px">R para otra run</div></div>`}else K.status==="dead"?(m.textContent="Kai se derritió…",p.textContent="R para reintentar"):(m.textContent="",p.textContent="");const st=K.player.items.join(",");if(st!==D){const se=K.player.items.length>D.split(",").filter(Boolean).length;if(D=st,a.innerHTML=K.player.items.map(oe=>{const be=Rn(oe),Ve=`<b>${be.nombre}</b>`+vx(be,K.stats.luck).map(Ye=>`<div>· ${Ye}</div>`).join("");return`<div class="hud-item"><img src="${ws(oe)}" alt="${be.nombre}" /><div class="hud-item-tip">${Ve}</div></div>`}).join(""),se&&j){const oe=Rn(K.player.items[K.player.items.length-1]).nombre;ee(oe);for(const be of Gc(j,K.stats))ee(be,"delta")}}j={...K.stats};const Ne=K.stats,C=[Ne.maxHalfHearts,Ne.damage,Ne.fireRate,Ne.range,Ne.shotSpeed,Ne.moveSpeed,Ne.luck,Ne.projectiles].join("|");if(C!==L){L=C;const se=[["❤️","Vida",Fn(Ne.maxHalfHearts/2),"corazones máximos"],["⚔️","Daño",Fn(Ne.damage),"daño por proyectil"],["💧","Caudal",`${Fn(Ne.fireRate)}/s`,"disparos por segundo (cadencia)"],["🏹","Alcance",Fn(Ne.range),"tiles antes de caer en charco"],["💨","Presión",Fn(Ne.shotSpeed),"velocidad del proyectil"],["👢","Velocidad",Fn(Ne.moveSpeed),"velocidad de movimiento"],["🍀","Suerte",Fn(Ne.luck),"escala los procs y la calidad de drops"],["🔱","Chorros",Fn(Ne.projectiles),"proyectiles por disparo"]];o.innerHTML='<div class="hud-stats-title">stats · Tab</div>'+se.map(([oe,be,Ve,Ye])=>`<div class="hud-stats-row" title="${Ye}"><span class="hud-stats-icon">${oe}</span><span class="hud-stats-name">${be}</span><span class="hud-stats-value">${Ve}</span></div>`).join("")}let P=null,y=1.25;for(const se of K.pickups){const oe=Math.hypot(se.x-K.player.x,se.y-K.player.y);oe<y&&(y=oe,P=se)}const U=P?`${P.id}:${P.itemId}:${P.price?K.player.crystals>=P.price?"ok":"no":""}`:"";if(U!==O&&(O=U,l.hidden=!P,P)){const se=Rn(P.itemId),oe=zd(se,K.stats.luck).map(Ye=>`<div>· ${Ye}</div>`).join("");let be="";if(se.categoria!=="usable"){const Ye=zs([...K.player.items,P.itemId]),at=Gc(K.stats,Ye);be=at.length?at.map(tt=>`<div class="hud-near-diff">${tt}</div>`).join(""):""}const Ve=P.price?`<div class="hud-near-price ${K.player.crystals>=P.price?"ok":"no"}">◆ ${P.price} cristales — ${K.player.crystals>=P.price?"pulsa E para comprar":"no te alcanza"}</div>`:"";l.innerHTML=`<img src="${ws(se.id)}" alt="" /><div><b>${se.nombre}</b> <span class="hud-near-rar">${xx[se.rareza]}</span>${Ve}${be}${oe}<i>«${se.descripcion}»</i></div>`}const Q=`${K.player.crystals}:${K.player.keys}`;Q!==ne&&(ne=Q,u.innerHTML=`<span class="hud-wallet-crystal">◆</span> ${K.player.crystals}`+(K.player.keys>0?` &nbsp;<span class="hud-wallet-key">⚷</span> ${K.player.keys}`:""));const $=K.enemies.some(se=>se.kind==="gorko"),ce=`${K.seed}:${K.floor.level}`;$&&H!==ce&&(H=ce,f.hidden=!1,f.innerHTML='<div class="hud-boss-name">GORKO</div><div class="hud-boss-sub">el Sapo Glotón</div>',setTimeout(()=>{f.hidden=!0},2800));const ue=`${K.floor.level}:${K.floor.current}:`+K.floor.rooms.map(se=>(se.visited?"v":".")+(se.cleared?"c":".")).join("");if(ue!==q){q=ue;const se=K.floor.rooms.filter($e=>$e.visited),oe=new Set;for(const $e of se){oe.add($e.id);for(const et of Object.values($e.doors))et>=0&&oe.add(et)}const be=K.floor.rooms.filter($e=>oe.has($e.id)),Ve=Math.min(...be.map($e=>$e.gx)),Ye=Math.min(...be.map($e=>$e.gy)),at={treasure:"♦",shop:"$",boss:"☠"},tt=14;c.innerHTML=be.map($e=>{const et=["hud-map-cell",$e.id===K.floor.current?"current":"",$e.visited?"visited":"known",$e.cleared?"cleared":""].filter(Boolean).join(" "),A=$e.visited||$e.kind!=="boss"?at[$e.kind]??"":at.boss;return`<div class="${et}" style="left:${($e.gx-Ve)*tt}px;top:${($e.gy-Ye)*tt}px">${A}</div>`}).join("");const ot=(Math.max(...be.map($e=>$e.gx))-Ve+1)*tt,F=(Math.max(...be.map($e=>$e.gy))-Ye+1)*tt;c.style.width=`${ot}px`,c.style.height=`${F}px`}const Ae=K.seed*10+K.floor.level;Ae!==I&&(I=Ae,w.textContent=`seed ${K.seed} · nivel ${K.floor.level} · sim v${e}`)},onEvents(K){for(const le of K)if(le.type==="proc_triggered"&&le.efecto==="critico")ee("¡Crítico!");else if(le.type==="usable_activated"){const he=zr.get(le.itemId);ee(`¡${he?.nombre??"Usable"}!`)}else le.type==="item_bought"?ee(`Comprado: −${le.price} ◆`,"delta"):le.type==="key_collected"?ee("Llave del tesoro","delta"):le.type==="door_unlocked"&&ee("El tesoro se abre…","delta")}}}const Wc={KeyW:"up",ArrowUp:"up",KeyS:"down",ArrowDown:"down",KeyA:"left",ArrowLeft:"left",KeyD:"right",ArrowRight:"right"};function Sx(i,e,t){const n=i.live,r=new Ff,s=new ze,a=new jn(new z(0,1,0),0),o=new z;let l=!1,c=!1,u=!1;window.addEventListener("keydown",h=>{const _=Wc[h.code];_?(n[_]=!0,h.preventDefault()):h.code==="Space"?(u=!0,n.use=u||c,h.preventDefault()):h.code==="ShiftLeft"||h.code==="ShiftRight"?n.dash=!0:h.code==="KeyE"?n.interact=!0:h.code==="KeyQ"?n.use2=!0:h.code==="KeyR"&&!h.repeat&&i.reset()}),window.addEventListener("keyup",h=>{const _=Wc[h.code];_&&(n[_]=!1),h.code==="Space"&&(u=!1,n.use=u||c),(h.code==="ShiftLeft"||h.code==="ShiftRight")&&(n.dash=!1),h.code==="KeyE"&&(n.interact=!1),h.code==="KeyQ"&&(n.use2=!1)}),window.addEventListener("blur",()=>{n.up=n.down=n.left=n.right=!1,l=c=u=!1,n.fire=n.dash=n.use=n.interact=!1}),e.addEventListener("contextmenu",h=>h.preventDefault());function f(h){const _=e.getBoundingClientRect();_.width===0||_.height===0||(s.set((h.clientX-_.left)/_.width*2-1,-((h.clientY-_.top)/_.height)*2+1),r.setFromCamera(s,t),r.ray.intersectPlane(a,o)&&(n.aimX=o.x,n.aimY=o.z))}const d=()=>document.body.classList.contains("touch-mode");window.addEventListener("pointermove",h=>{d()||f(h)}),window.addEventListener("pointerdown",h=>{d()||(h.button===0?(l=!0,n.fire=!0,f(h)):h.button===2&&(c=!0,n.use=u||c))}),window.addEventListener("pointerup",h=>{d()||(h.button===0?(l=!1,n.fire=l):h.button===2&&(c=!1,n.use=u||c))})}const yx=[[3.5,1],[ct-3.5,1]],Pa=1;function bx(i){i.add(new Df(16767398,.55));const e=yx.map(([n,r])=>{const s=new Xl(Fe.torch,12,11,2);s.position.set(n,Pa,r+.35),i.add(s);const a=new nr(new Mi({map:Ex(),blending:La,depthWrite:!1}));return a.position.set(n,Pa+.08,r+.18),a.scale.set(.32,.5,1),i.add(a),{light:s,flame:a,baseY:Pa}}),t=new Xl(Fe.shine,3.2,5,2);return t.position.set(3.5,.7,rt/2),i.add(t),{update(n){const r=.8+.2*Math.sin(n.tick*.31)*Math.sin(n.tick*.13);for(const a of e)a.light.intensity=12*r,a.flame.scale.set(.32,.5*(.85+.3*r),1),a.flame.position.y=a.baseY+.08+.02*r;const s=n.player;if(t.position.set(s.x,.7,s.y),n.status==="dead"){const a=n.tick-s.deathTick;t.intensity=Math.floor(a/14)%2===0?1.8:.6}else t.intensity=3.2}}}function Ex(){const[i,e]=qt(16,24),t=e.createRadialGradient(8,14,1,8,14,10);return t.addColorStop(0,it(Fe.torchBright)),t.addColorStop(.45,it(Fe.torch)),t.addColorStop(1,"rgba(232,161,60,0)"),e.fillStyle=t,e.fillRect(0,0,16,24),e.fillStyle=it(Fe.torch),e.beginPath(),e.moveTo(8,2),e.quadraticCurveTo(12,10,8,16),e.quadraticCurveTo(4,10,8,2),e.fill(),e.fillStyle=it(Fe.torchBright),e.beginPath(),e.ellipse(8,13,2.4,4,0,0,Math.PI*2),e.fill(),$t(i)}const Tx={1:16777215,2:15919832,3:13625544,4:15519936,5:12563672},Xc=40,Ax=55,Ia=1.15,wx=1.45,Rx=1.9,Yc=.1,qc=.6,Cx=1.15,Px=.9,Ix=.45;function Lx(){const i=new of;i.background=new Je(Fe.dungeonBg);const e=new Wo(Fe.dungeonBg,14,30);i.fog=e;const t=Dx(i),n=new z(ct/2,0,rt/2),r=new Qt(Xc,1,.1,100),s=new z,a=yl.degToRad(Ax),o=new z(n.x,0,n.z);let l=20,c=ct/2,u=rt/2,f=960,d=576,h=!1;function _(){s.set(o.x,l*Math.sin(a),o.z+l*Math.cos(a)),r.position.copy(s),r.lookAt(o)}function S(w,R){f=w,d=R,r.aspect=w/Math.max(1,R);const v=Math.tan(yl.degToRad(Xc/2)),T=v*r.aspect,b=(ct/2+Ia)/T,I=(rt/2+Ia)*Math.sin(a)/v+(rt/2+Ia)*Math.cos(a);h=document.body.classList.contains("touch-mode"),l=Math.max(b,I)/(h?Rx:wx),c=T*l,u=v*l/Math.sin(a),e.near=l-2,e.far=l+15,_(),r.updateProjectionMatrix()}function m(w,R,v){const T=R-qc,b=v-R+qc;return T>=b?v/2:Math.min(b,Math.max(T,w))}function p(w){document.body.classList.contains("touch-mode")!==h&&S(f,d);const R=m(w.player.x,c,ct),v=m(w.player.y,u,rt);o.x+=(R-o.x)*Yc,o.z+=(v-o.z)*Yc,_()}return{scene:i,camera:r,center:n,cameraHome:s,resize:S,updateRoom:w=>{t.update(w),p(w)}}}function Dx(i){const e=ct-2,t=rt-2,n=new er({map:q0(e,t),roughness:.92,metalness:0}),r=new Ut(new oi(e,t),n);r.rotation.x=-Math.PI/2,r.position.set(ct/2,0,rt/2),i.add(r);const s=new er({map:Dc(15,2),roughness:1,metalness:0}),a=new er({map:Dc(3,1),roughness:1,metalness:0,color:12167312}),o=new er({color:1511434,roughness:.6}),l=new er({color:13211950,roughness:.35,metalness:.4}),c=new bi({color:197121}),u=new bi({color:Fe.torch}),f=new tr;i.add(f);const d=[];let h=null,_="";function S(){for(const R of[...f.children])f.remove(R),R.traverse(v=>{v instanceof Ut&&v.geometry.dispose()});d.length=0,h=null}function m(R,v,T,b,I,x){const E=new Ut(new wi(R,v,T),x);return E.position.set(b,v/2,I),f.add(E),E}function p(R,v){const T=R==="n"?Cx:R==="s"?Ix:Px,b=R==="n"||R==="s",I=R==="n"?.5:rt-.5,x=R==="w"?.5:ct-.5,E=b?ct/2:rt/2,D=b?ct:rt-2,L=b?0:1;if(!v){b?m(D,T,1,ct/2,I,s):m(1,T,D,x,rt/2,s);return}const O=E-ei-L,q=L+D-(E+ei);b?(m(O,T,1,L+O/2,I,s),m(q,T,1,E+ei+q/2,I,s),d.push({side:R,mesh:m(ei*2,T*.8,.4,E,I,o)})):(m(1,T,O,x,L+O/2,s),m(1,T,q,x,E+ei+q/2,s),d.push({side:R,mesh:m(.4,T*.8,ei*2,x,E,o)}))}function w(R){S();const v=R.floor.rooms[R.floor.current],T=Tx[R.floor.level]??16777215;n.color.setHex(T),s.color.setHex(T),p("n",v.doors.n>=0),p("s",v.doors.s>=0),p("e",v.doors.e>=0),p("w",v.doors.w>=0);for(const b of R.obstacles)b.invisible||m(b.w,.55,b.h,b.x+b.w/2,b.y+b.h/2,a);if(v.kind==="boss"){const b=new tr,I=new Ut(new qo(.5,20),c);I.rotation.x=-Math.PI/2,I.position.set(ct/2,.012,rt/2);const x=new Ut(new $o(.5,.62,20),u);x.rotation.x=-Math.PI/2,x.position.set(ct/2,.013,rt/2),b.add(I,x),b.visible=!1,f.add(b),h=b}}return{update(R){const v=`${R.seed}:${R.floor.level}:${R.floor.current}`;v!==_&&(_=v,w(R));const T=R.floor.rooms[R.floor.current];for(const b of d){const I=T.doors[b.side],x=I>=0&&R.floor.rooms[I].locked;b.mesh.visible=!T.cleared||x,b.mesh.material=x&&T.cleared?l:o}h&&(h.visible=R.floor.trapdoorOpen)}}}function Ux(i,e){const t=H0(),n=B0(e,kd(t));O0(n,As);const r=new L_({antialias:!1});r.setPixelRatio(1),i.appendChild(r.domElement);const s=Lx(),a=bx(s.scene),o=ox(s.scene,Y0());Sx(n,r.domElement,s.camera);const l=Mx(i,As,()=>n.telemetry),c=X0(n,s),u=G0(i,n,t,As);let f=null;function d(m){if(m&&!f&&(f=W0(i,n)),document.body.classList.toggle("touch-mode",m),!m){const p=n.live;p.left=p.right=p.up=p.down=p.fire=!1}}V0()?d(!0):new URLSearchParams(location.search).get("touch")!=="0"&&(window.addEventListener("touchstart",()=>d(!0)),window.addEventListener("pointermove",m=>{m.pointerType==="mouse"&&document.body.classList.contains("touch-mode")&&d(!1)}));function h(){const m=i.clientWidth||960,p=i.clientHeight||576;r.setSize(m,p),s.resize(m,p)}new ResizeObserver(h).observe(i),h();let _=performance.now();function S(m){const p=m-_;_=m;const w=n.frame(p);c.onEvents(w),l.onEvents(w),s.updateRoom(n.sim.state),a.update(n.sim.state),o.update(n.sim.state),l.update(n.sim.state),u.update(n.sim.state),f?.update(n.sim.state),c.update(p,s.camera),r.render(s.scene,s.camera),requestAnimationFrame(S)}requestAnimationFrame(S)}const Nx=new URLSearchParams(location.search),$c=Nx.get("seed"),Hd=$c!==null?Number($c)>>>0:Date.now()>>>0;Ux(document.getElementById("game"),Hd);console.info(`%cKai · Fase 0.5 · seed=${Hd} · API de tester en window.__game`,"color:#e8a13c");
