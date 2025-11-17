(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();/**
* @vue/shared v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Aa(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Ae={},gs=[],Ht=()=>{},lh=()=>!1,Li=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Ra=t=>t.startsWith("onUpdate:"),Qe=Object.assign,Ca=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},yp=Object.prototype.hasOwnProperty,we=(t,e)=>yp.call(t,e),ne=Array.isArray,ms=t=>Mi(t)==="[object Map]",uh=t=>Mi(t)==="[object Set]",se=t=>typeof t=="function",Me=t=>typeof t=="string",On=t=>typeof t=="symbol",Pe=t=>t!==null&&typeof t=="object",hh=t=>(Pe(t)||se(t))&&se(t.then)&&se(t.catch),fh=Object.prototype.toString,Mi=t=>fh.call(t),_p=t=>Mi(t).slice(8,-1),dh=t=>Mi(t)==="[object Object]",Pa=t=>Me(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,rr=Aa(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ui=t=>{const e=Object.create(null);return(n=>e[n]||(e[n]=t(n)))},wp=/-\w/g,vt=Ui(t=>t.replace(wp,e=>e.slice(1).toUpperCase())),Ep=/\B([A-Z])/g,es=Ui(t=>t.replace(Ep,"-$1").toLowerCase()),Fi=Ui(t=>t.charAt(0).toUpperCase()+t.slice(1)),So=Ui(t=>t?`on${Fi(t)}`:""),bn=(t,e)=>!Object.is(t,e),ti=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},ph=(t,e,n,s=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:s,value:n})},Qo=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let sl;const ji=()=>sl||(sl=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Oa(t){if(ne(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],r=Me(s)?Tp(s):Oa(s);if(r)for(const o in r)e[o]=r[o]}return e}else if(Me(t)||Pe(t))return t}const vp=/;(?![^(]*\))/g,bp=/:([^]+)/,Sp=/\/\*[^]*?\*\//g;function Tp(t){const e={};return t.replace(Sp,"").split(vp).forEach(n=>{if(n){const s=n.split(bp);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function Vi(t){let e="";if(Me(t))e=t;else if(ne(t))for(let n=0;n<t.length;n++){const s=Vi(t[n]);s&&(e+=s+" ")}else if(Pe(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Ip="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ap=Aa(Ip);function gh(t){return!!t||t===""}const mh=t=>!!(t&&t.__v_isRef===!0),wt=t=>Me(t)?t:t==null?"":ne(t)||Pe(t)&&(t.toString===fh||!se(t.toString))?mh(t)?wt(t.value):JSON.stringify(t,yh,2):String(t),yh=(t,e)=>mh(e)?yh(t,e.value):ms(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,r],o)=>(n[To(s,o)+" =>"]=r,n),{})}:uh(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>To(n))}:On(e)?To(e):Pe(e)&&!ne(e)&&!dh(e)?String(e):e,To=(t,e="")=>{var n;return On(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let it;class Rp{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=it,!e&&it&&(this.index=(it.scopes||(it.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=it;try{return it=this,e()}finally{it=n}}}on(){++this._on===1&&(this.prevScope=it,it=this)}off(){this._on>0&&--this._on===0&&(it=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(this.effects.length=0,n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function Cp(){return it}let Re;const Io=new WeakSet;class _h{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,it&&it.active&&it.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Io.has(this)&&(Io.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Eh(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,rl(this),vh(this);const e=Re,n=Ct;Re=this,Ct=!0;try{return this.fn()}finally{bh(this),Re=e,Ct=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)xa(e);this.deps=this.depsTail=void 0,rl(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Io.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Zo(this)&&this.run()}get dirty(){return Zo(this)}}let wh=0,ir,or;function Eh(t,e=!1){if(t.flags|=8,e){t.next=or,or=t;return}t.next=ir,ir=t}function ka(){wh++}function Na(){if(--wh>0)return;if(or){let e=or;for(or=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;ir;){let e=ir;for(ir=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(s){t||(t=s)}e=n}}if(t)throw t}function vh(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function bh(t){let e,n=t.depsTail,s=n;for(;s;){const r=s.prevDep;s.version===-1?(s===n&&(n=r),xa(s),Pp(s)):e=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=r}t.deps=e,t.depsTail=n}function Zo(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Sh(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Sh(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===_r)||(t.globalVersion=_r,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!Zo(t))))return;t.flags|=2;const e=t.dep,n=Re,s=Ct;Re=t,Ct=!0;try{vh(t);const r=t.fn(t._value);(e.version===0||bn(r,t._value))&&(t.flags|=128,t._value=r,e.version++)}catch(r){throw e.version++,r}finally{Re=n,Ct=s,bh(t),t.flags&=-3}}function xa(t,e=!1){const{dep:n,prevSub:s,nextSub:r}=t;if(s&&(s.nextSub=r,t.prevSub=void 0),r&&(r.prevSub=s,t.nextSub=void 0),n.subs===t&&(n.subs=s,!s&&n.computed)){n.computed.flags&=-5;for(let o=n.computed.deps;o;o=o.nextDep)xa(o,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function Pp(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Ct=!0;const Th=[];function en(){Th.push(Ct),Ct=!1}function tn(){const t=Th.pop();Ct=t===void 0?!0:t}function rl(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Re;Re=void 0;try{e()}finally{Re=n}}}let _r=0;class Op{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Da{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Re||!Ct||Re===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Re)n=this.activeLink=new Op(Re,this),Re.deps?(n.prevDep=Re.depsTail,Re.depsTail.nextDep=n,Re.depsTail=n):Re.deps=Re.depsTail=n,Ih(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const s=n.nextDep;s.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=s),n.prevDep=Re.depsTail,n.nextDep=void 0,Re.depsTail.nextDep=n,Re.depsTail=n,Re.deps===n&&(Re.deps=s)}return n}trigger(e){this.version++,_r++,this.notify(e)}notify(e){ka();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Na()}}}function Ih(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let s=e.deps;s;s=s.nextDep)Ih(s)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const ea=new WeakMap,zn=Symbol(""),ta=Symbol(""),wr=Symbol("");function Ge(t,e,n){if(Ct&&Re){let s=ea.get(t);s||ea.set(t,s=new Map);let r=s.get(n);r||(s.set(n,r=new Da),r.map=s,r.key=n),r.track()}}function Jt(t,e,n,s,r,o){const a=ea.get(t);if(!a){_r++;return}const l=u=>{u&&u.trigger()};if(ka(),e==="clear")a.forEach(l);else{const u=ne(t),f=u&&Pa(n);if(u&&n==="length"){const d=Number(s);a.forEach((g,y)=>{(y==="length"||y===wr||!On(y)&&y>=d)&&l(g)})}else switch((n!==void 0||a.has(void 0))&&l(a.get(n)),f&&l(a.get(wr)),e){case"add":u?f&&l(a.get("length")):(l(a.get(zn)),ms(t)&&l(a.get(ta)));break;case"delete":u||(l(a.get(zn)),ms(t)&&l(a.get(ta)));break;case"set":ms(t)&&l(a.get(zn));break}}Na()}function as(t){const e=_e(t);return e===t?e:(Ge(e,"iterate",wr),Et(t)?e:e.map(We))}function Bi(t){return Ge(t=_e(t),"iterate",wr),t}const kp={__proto__:null,[Symbol.iterator](){return Ao(this,Symbol.iterator,We)},concat(...t){return as(this).concat(...t.map(e=>ne(e)?as(e):e))},entries(){return Ao(this,"entries",t=>(t[1]=We(t[1]),t))},every(t,e){return zt(this,"every",t,e,void 0,arguments)},filter(t,e){return zt(this,"filter",t,e,n=>n.map(We),arguments)},find(t,e){return zt(this,"find",t,e,We,arguments)},findIndex(t,e){return zt(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return zt(this,"findLast",t,e,We,arguments)},findLastIndex(t,e){return zt(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return zt(this,"forEach",t,e,void 0,arguments)},includes(...t){return Ro(this,"includes",t)},indexOf(...t){return Ro(this,"indexOf",t)},join(t){return as(this).join(t)},lastIndexOf(...t){return Ro(this,"lastIndexOf",t)},map(t,e){return zt(this,"map",t,e,void 0,arguments)},pop(){return Ys(this,"pop")},push(...t){return Ys(this,"push",t)},reduce(t,...e){return il(this,"reduce",t,e)},reduceRight(t,...e){return il(this,"reduceRight",t,e)},shift(){return Ys(this,"shift")},some(t,e){return zt(this,"some",t,e,void 0,arguments)},splice(...t){return Ys(this,"splice",t)},toReversed(){return as(this).toReversed()},toSorted(t){return as(this).toSorted(t)},toSpliced(...t){return as(this).toSpliced(...t)},unshift(...t){return Ys(this,"unshift",t)},values(){return Ao(this,"values",We)}};function Ao(t,e,n){const s=Bi(t),r=s[e]();return s!==t&&!Et(t)&&(r._next=r.next,r.next=()=>{const o=r._next();return o.done||(o.value=n(o.value)),o}),r}const Np=Array.prototype;function zt(t,e,n,s,r,o){const a=Bi(t),l=a!==t&&!Et(t),u=a[e];if(u!==Np[e]){const g=u.apply(t,o);return l?We(g):g}let f=n;a!==t&&(l?f=function(g,y){return n.call(this,We(g),y,t)}:n.length>2&&(f=function(g,y){return n.call(this,g,y,t)}));const d=u.call(a,f,s);return l&&r?r(d):d}function il(t,e,n,s){const r=Bi(t);let o=n;return r!==t&&(Et(t)?n.length>3&&(o=function(a,l,u){return n.call(this,a,l,u,t)}):o=function(a,l,u){return n.call(this,a,We(l),u,t)}),r[e](o,...s)}function Ro(t,e,n){const s=_e(t);Ge(s,"iterate",wr);const r=s[e](...n);return(r===-1||r===!1)&&Ua(n[0])?(n[0]=_e(n[0]),s[e](...n)):r}function Ys(t,e,n=[]){en(),ka();const s=_e(t)[e].apply(t,n);return Na(),tn(),s}const xp=Aa("__proto__,__v_isRef,__isVue"),Ah=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(On));function Dp(t){On(t)||(t=String(t));const e=_e(this);return Ge(e,"has",t),e.hasOwnProperty(t)}class Rh{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,s){if(n==="__v_skip")return e.__v_skip;const r=this._isReadonly,o=this._isShallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return o;if(n==="__v_raw")return s===(r?o?Wp:kh:o?Oh:Ph).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const a=ne(e);if(!r){let u;if(a&&(u=kp[n]))return u;if(n==="hasOwnProperty")return Dp}const l=Reflect.get(e,n,Ye(e)?e:s);if((On(n)?Ah.has(n):xp(n))||(r||Ge(e,"get",n),o))return l;if(Ye(l)){const u=a&&Pa(n)?l:l.value;return r&&Pe(u)?sa(u):u}return Pe(l)?r?sa(l):Rr(l):l}}class Ch extends Rh{constructor(e=!1){super(!1,e)}set(e,n,s,r){let o=e[n];if(!this._isShallow){const u=Rn(o);if(!Et(s)&&!Rn(s)&&(o=_e(o),s=_e(s)),!ne(e)&&Ye(o)&&!Ye(s))return u||(o.value=s),!0}const a=ne(e)&&Pa(n)?Number(n)<e.length:we(e,n),l=Reflect.set(e,n,s,Ye(e)?e:r);return e===_e(r)&&(a?bn(s,o)&&Jt(e,"set",n,s):Jt(e,"add",n,s)),l}deleteProperty(e,n){const s=we(e,n);e[n];const r=Reflect.deleteProperty(e,n);return r&&s&&Jt(e,"delete",n,void 0),r}has(e,n){const s=Reflect.has(e,n);return(!On(n)||!Ah.has(n))&&Ge(e,"has",n),s}ownKeys(e){return Ge(e,"iterate",ne(e)?"length":zn),Reflect.ownKeys(e)}}class Lp extends Rh{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Mp=new Ch,Up=new Lp,Fp=new Ch(!0);const na=t=>t,Gr=t=>Reflect.getPrototypeOf(t);function jp(t,e,n){return function(...s){const r=this.__v_raw,o=_e(r),a=ms(o),l=t==="entries"||t===Symbol.iterator&&a,u=t==="keys"&&a,f=r[t](...s),d=n?na:e?pi:We;return!e&&Ge(o,"iterate",u?ta:zn),{next(){const{value:g,done:y}=f.next();return y?{value:g,done:y}:{value:l?[d(g[0]),d(g[1])]:d(g),done:y}},[Symbol.iterator](){return this}}}}function Jr(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Vp(t,e){const n={get(r){const o=this.__v_raw,a=_e(o),l=_e(r);t||(bn(r,l)&&Ge(a,"get",r),Ge(a,"get",l));const{has:u}=Gr(a),f=e?na:t?pi:We;if(u.call(a,r))return f(o.get(r));if(u.call(a,l))return f(o.get(l));o!==a&&o.get(r)},get size(){const r=this.__v_raw;return!t&&Ge(_e(r),"iterate",zn),r.size},has(r){const o=this.__v_raw,a=_e(o),l=_e(r);return t||(bn(r,l)&&Ge(a,"has",r),Ge(a,"has",l)),r===l?o.has(r):o.has(r)||o.has(l)},forEach(r,o){const a=this,l=a.__v_raw,u=_e(l),f=e?na:t?pi:We;return!t&&Ge(u,"iterate",zn),l.forEach((d,g)=>r.call(o,f(d),f(g),a))}};return Qe(n,t?{add:Jr("add"),set:Jr("set"),delete:Jr("delete"),clear:Jr("clear")}:{add(r){!e&&!Et(r)&&!Rn(r)&&(r=_e(r));const o=_e(this);return Gr(o).has.call(o,r)||(o.add(r),Jt(o,"add",r,r)),this},set(r,o){!e&&!Et(o)&&!Rn(o)&&(o=_e(o));const a=_e(this),{has:l,get:u}=Gr(a);let f=l.call(a,r);f||(r=_e(r),f=l.call(a,r));const d=u.call(a,r);return a.set(r,o),f?bn(o,d)&&Jt(a,"set",r,o):Jt(a,"add",r,o),this},delete(r){const o=_e(this),{has:a,get:l}=Gr(o);let u=a.call(o,r);u||(r=_e(r),u=a.call(o,r)),l&&l.call(o,r);const f=o.delete(r);return u&&Jt(o,"delete",r,void 0),f},clear(){const r=_e(this),o=r.size!==0,a=r.clear();return o&&Jt(r,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=jp(r,t,e)}),n}function La(t,e){const n=Vp(t,e);return(s,r,o)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?s:Reflect.get(we(n,r)&&r in s?n:s,r,o)}const Bp={get:La(!1,!1)},Hp={get:La(!1,!0)},$p={get:La(!0,!1)};const Ph=new WeakMap,Oh=new WeakMap,kh=new WeakMap,Wp=new WeakMap;function qp(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function zp(t){return t.__v_skip||!Object.isExtensible(t)?0:qp(_p(t))}function Rr(t){return Rn(t)?t:Ma(t,!1,Mp,Bp,Ph)}function Kp(t){return Ma(t,!1,Fp,Hp,Oh)}function sa(t){return Ma(t,!0,Up,$p,kh)}function Ma(t,e,n,s,r){if(!Pe(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const o=zp(t);if(o===0)return t;const a=r.get(t);if(a)return a;const l=new Proxy(t,o===2?s:n);return r.set(t,l),l}function ys(t){return Rn(t)?ys(t.__v_raw):!!(t&&t.__v_isReactive)}function Rn(t){return!!(t&&t.__v_isReadonly)}function Et(t){return!!(t&&t.__v_isShallow)}function Ua(t){return t?!!t.__v_raw:!1}function _e(t){const e=t&&t.__v_raw;return e?_e(e):t}function Gp(t){return!we(t,"__v_skip")&&Object.isExtensible(t)&&ph(t,"__v_skip",!0),t}const We=t=>Pe(t)?Rr(t):t,pi=t=>Pe(t)?sa(t):t;function Ye(t){return t?t.__v_isRef===!0:!1}function ot(t){return Nh(t,!1)}function Jp(t){return Nh(t,!0)}function Nh(t,e){return Ye(t)?t:new Xp(t,e)}class Xp{constructor(e,n){this.dep=new Da,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:_e(e),this._value=n?e:We(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,s=this.__v_isShallow||Et(e)||Rn(e);e=s?e:_e(e),bn(e,n)&&(this._rawValue=e,this._value=s?e:We(e),this.dep.trigger())}}function Ve(t){return Ye(t)?t.value:t}const Yp={get:(t,e,n)=>e==="__v_raw"?t:Ve(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const r=t[e];return Ye(r)&&!Ye(n)?(r.value=n,!0):Reflect.set(t,e,n,s)}};function xh(t){return ys(t)?t:new Proxy(t,Yp)}class Qp{constructor(e,n,s){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Da(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=_r-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&Re!==this)return Eh(this,!0),!0}get value(){const e=this.dep.track();return Sh(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Zp(t,e,n=!1){let s,r;return se(t)?s=t:(s=t.get,r=t.set),new Qp(s,r,n)}const Xr={},gi=new WeakMap;let jn;function eg(t,e=!1,n=jn){if(n){let s=gi.get(n);s||gi.set(n,s=[]),s.push(t)}}function tg(t,e,n=Ae){const{immediate:s,deep:r,once:o,scheduler:a,augmentJob:l,call:u}=n,f=$=>r?$:Et($)||r===!1||r===0?Xt($,1):Xt($);let d,g,y,C,I=!1,x=!1;if(Ye(t)?(g=()=>t.value,I=Et(t)):ys(t)?(g=()=>f(t),I=!0):ne(t)?(x=!0,I=t.some($=>ys($)||Et($)),g=()=>t.map($=>{if(Ye($))return $.value;if(ys($))return f($);if(se($))return u?u($,2):$()})):se(t)?e?g=u?()=>u(t,2):t:g=()=>{if(y){en();try{y()}finally{tn()}}const $=jn;jn=d;try{return u?u(t,3,[C]):t(C)}finally{jn=$}}:g=Ht,e&&r){const $=g,te=r===!0?1/0:r;g=()=>Xt($(),te)}const N=Cp(),F=()=>{d.stop(),N&&N.active&&Ca(N.effects,d)};if(o&&e){const $=e;e=(...te)=>{$(...te),F()}}let H=x?new Array(t.length).fill(Xr):Xr;const G=$=>{if(!(!(d.flags&1)||!d.dirty&&!$))if(e){const te=d.run();if(r||I||(x?te.some((ae,v)=>bn(ae,H[v])):bn(te,H))){y&&y();const ae=jn;jn=d;try{const v=[te,H===Xr?void 0:x&&H[0]===Xr?[]:H,C];H=te,u?u(e,3,v):e(...v)}finally{jn=ae}}}else d.run()};return l&&l(G),d=new _h(g),d.scheduler=a?()=>a(G,!1):G,C=$=>eg($,!1,d),y=d.onStop=()=>{const $=gi.get(d);if($){if(u)u($,4);else for(const te of $)te();gi.delete(d)}},e?s?G(!0):H=d.run():a?a(G.bind(null,!0),!0):d.run(),F.pause=d.pause.bind(d),F.resume=d.resume.bind(d),F.stop=F,F}function Xt(t,e=1/0,n){if(e<=0||!Pe(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,Ye(t))Xt(t.value,e,n);else if(ne(t))for(let s=0;s<t.length;s++)Xt(t[s],e,n);else if(uh(t)||ms(t))t.forEach(s=>{Xt(s,e,n)});else if(dh(t)){for(const s in t)Xt(t[s],e,n);for(const s of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,s)&&Xt(t[s],e,n)}return t}/**
* @vue/runtime-core v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Cr(t,e,n,s){try{return s?t(...s):t()}catch(r){Hi(r,e,n)}}function qt(t,e,n,s){if(se(t)){const r=Cr(t,e,n,s);return r&&hh(r)&&r.catch(o=>{Hi(o,e,n)}),r}if(ne(t)){const r=[];for(let o=0;o<t.length;o++)r.push(qt(t[o],e,n,s));return r}}function Hi(t,e,n,s=!0){const r=e?e.vnode:null,{errorHandler:o,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||Ae;if(e){let l=e.parent;const u=e.proxy,f=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const d=l.ec;if(d){for(let g=0;g<d.length;g++)if(d[g](t,u,f)===!1)return}l=l.parent}if(o){en(),Cr(o,null,10,[t,u,f]),tn();return}}ng(t,n,r,s,a)}function ng(t,e,n,s=!0,r=!1){if(r)throw t;console.error(t)}const tt=[];let Ut=-1;const _s=[];let gn=null,ls=0;const Dh=Promise.resolve();let mi=null;function Lh(t){const e=mi||Dh;return t?e.then(this?t.bind(this):t):e}function sg(t){let e=Ut+1,n=tt.length;for(;e<n;){const s=e+n>>>1,r=tt[s],o=Er(r);o<t||o===t&&r.flags&2?e=s+1:n=s}return e}function Fa(t){if(!(t.flags&1)){const e=Er(t),n=tt[tt.length-1];!n||!(t.flags&2)&&e>=Er(n)?tt.push(t):tt.splice(sg(e),0,t),t.flags|=1,Mh()}}function Mh(){mi||(mi=Dh.then(Fh))}function rg(t){ne(t)?_s.push(...t):gn&&t.id===-1?gn.splice(ls+1,0,t):t.flags&1||(_s.push(t),t.flags|=1),Mh()}function ol(t,e,n=Ut+1){for(;n<tt.length;n++){const s=tt[n];if(s&&s.flags&2){if(t&&s.id!==t.uid)continue;tt.splice(n,1),n--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function Uh(t){if(_s.length){const e=[...new Set(_s)].sort((n,s)=>Er(n)-Er(s));if(_s.length=0,gn){gn.push(...e);return}for(gn=e,ls=0;ls<gn.length;ls++){const n=gn[ls];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}gn=null,ls=0}}const Er=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Fh(t){try{for(Ut=0;Ut<tt.length;Ut++){const e=tt[Ut];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Cr(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Ut<tt.length;Ut++){const e=tt[Ut];e&&(e.flags&=-2)}Ut=-1,tt.length=0,Uh(),mi=null,(tt.length||_s.length)&&Fh()}}let pt=null,jh=null;function yi(t){const e=pt;return pt=t,jh=t&&t.type.__scopeId||null,e}function ds(t,e=pt,n){if(!e||t._n)return t;const s=(...r)=>{s._d&&Ei(-1);const o=yi(e);let a;try{a=t(...r)}finally{yi(o),s._d&&Ei(1)}return a};return s._n=!0,s._c=!0,s._d=!0,s}function Bn(t,e){if(pt===null)return t;const n=zi(pt),s=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[o,a,l,u=Ae]=e[r];o&&(se(o)&&(o={mounted:o,updated:o}),o.deep&&Xt(a),s.push({dir:o,instance:n,value:a,oldValue:void 0,arg:l,modifiers:u}))}return t}function Un(t,e,n,s){const r=t.dirs,o=e&&e.dirs;for(let a=0;a<r.length;a++){const l=r[a];o&&(l.oldValue=o[a].value);let u=l.dir[s];u&&(en(),qt(u,n,8,[t.el,l,t,e]),tn())}}const ig=Symbol("_vte"),og=t=>t.__isTeleport,ag=Symbol("_leaveCb");function ja(t,e){t.shapeFlag&6&&t.component?(t.transition=e,ja(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Vh(t,e){return se(t)?Qe({name:t.name},e,{setup:t}):t}function Bh(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}const _i=new WeakMap;function ar(t,e,n,s,r=!1){if(ne(t)){t.forEach((I,x)=>ar(I,e&&(ne(e)?e[x]:e),n,s,r));return}if(cr(s)&&!r){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&ar(t,e,n,s.component.subTree);return}const o=s.shapeFlag&4?zi(s.component):s.el,a=r?null:o,{i:l,r:u}=t,f=e&&e.r,d=l.refs===Ae?l.refs={}:l.refs,g=l.setupState,y=_e(g),C=g===Ae?lh:I=>we(y,I);if(f!=null&&f!==u){if(al(e),Me(f))d[f]=null,C(f)&&(g[f]=null);else if(Ye(f)){f.value=null;const I=e;I.k&&(d[I.k]=null)}}if(se(u))Cr(u,l,12,[a,d]);else{const I=Me(u),x=Ye(u);if(I||x){const N=()=>{if(t.f){const F=I?C(u)?g[u]:d[u]:u.value;if(r)ne(F)&&Ca(F,o);else if(ne(F))F.includes(o)||F.push(o);else if(I)d[u]=[o],C(u)&&(g[u]=d[u]);else{const H=[o];u.value=H,t.k&&(d[t.k]=H)}}else I?(d[u]=a,C(u)&&(g[u]=a)):x&&(u.value=a,t.k&&(d[t.k]=a))};if(a){const F=()=>{N(),_i.delete(t)};F.id=-1,_i.set(t,F),ht(F,n)}else al(t),N()}}}function al(t){const e=_i.get(t);e&&(e.flags|=8,_i.delete(t))}ji().requestIdleCallback;ji().cancelIdleCallback;const cr=t=>!!t.type.__asyncLoader,Hh=t=>t.type.__isKeepAlive;function cg(t,e){$h(t,"a",e)}function lg(t,e){$h(t,"da",e)}function $h(t,e,n=Je){const s=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if($i(e,s,n),n){let r=n.parent;for(;r&&r.parent;)Hh(r.parent.vnode)&&ug(s,e,n,r),r=r.parent}}function ug(t,e,n,s){const r=$i(e,t,s,!0);Ba(()=>{Ca(s[e],r)},n)}function $i(t,e,n=Je,s=!1){if(n){const r=n[t]||(n[t]=[]),o=e.__weh||(e.__weh=(...a)=>{en();const l=Pr(n),u=qt(e,n,t,a);return l(),tn(),u});return s?r.unshift(o):r.push(o),o}}const rn=t=>(e,n=Je)=>{(!br||t==="sp")&&$i(t,(...s)=>e(...s),n)},hg=rn("bm"),Va=rn("m"),fg=rn("bu"),dg=rn("u"),pg=rn("bum"),Ba=rn("um"),gg=rn("sp"),mg=rn("rtg"),yg=rn("rtc");function _g(t,e=Je){$i("ec",t,e)}const wg="components";function Ha(t,e){return vg(wg,t,!0,e)||t}const Eg=Symbol.for("v-ndc");function vg(t,e,n=!0,s=!1){const r=pt||Je;if(r){const o=r.type;{const l=um(o,!1);if(l&&(l===e||l===vt(e)||l===Fi(vt(e))))return o}const a=cl(r[t]||o[t],e)||cl(r.appContext[t],e);return!a&&s?o:a}}function cl(t,e){return t&&(t[e]||t[vt(e)]||t[Fi(vt(e))])}function Wh(t,e,n,s){let r;const o=n,a=ne(t);if(a||Me(t)){const l=a&&ys(t);let u=!1,f=!1;l&&(u=!Et(t),f=Rn(t),t=Bi(t)),r=new Array(t.length);for(let d=0,g=t.length;d<g;d++)r[d]=e(u?f?pi(We(t[d])):We(t[d]):t[d],d,void 0,o)}else if(typeof t=="number"){r=new Array(t);for(let l=0;l<t;l++)r[l]=e(l+1,l,void 0,o)}else if(Pe(t))if(t[Symbol.iterator])r=Array.from(t,(l,u)=>e(l,u,void 0,o));else{const l=Object.keys(t);r=new Array(l.length);for(let u=0,f=l.length;u<f;u++){const d=l[u];r[u]=e(t[d],d,u,o)}}else r=[];return r}const ra=t=>t?hf(t)?zi(t):ra(t.parent):null,lr=Qe(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>ra(t.parent),$root:t=>ra(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>zh(t),$forceUpdate:t=>t.f||(t.f=()=>{Fa(t.update)}),$nextTick:t=>t.n||(t.n=Lh.bind(t.proxy)),$watch:t=>Hg.bind(t)}),Co=(t,e)=>t!==Ae&&!t.__isScriptSetup&&we(t,e),bg={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:s,data:r,props:o,accessCache:a,type:l,appContext:u}=t;let f;if(e[0]!=="$"){const C=a[e];if(C!==void 0)switch(C){case 1:return s[e];case 2:return r[e];case 4:return n[e];case 3:return o[e]}else{if(Co(s,e))return a[e]=1,s[e];if(r!==Ae&&we(r,e))return a[e]=2,r[e];if((f=t.propsOptions[0])&&we(f,e))return a[e]=3,o[e];if(n!==Ae&&we(n,e))return a[e]=4,n[e];ia&&(a[e]=0)}}const d=lr[e];let g,y;if(d)return e==="$attrs"&&Ge(t.attrs,"get",""),d(t);if((g=l.__cssModules)&&(g=g[e]))return g;if(n!==Ae&&we(n,e))return a[e]=4,n[e];if(y=u.config.globalProperties,we(y,e))return y[e]},set({_:t},e,n){const{data:s,setupState:r,ctx:o}=t;return Co(r,e)?(r[e]=n,!0):s!==Ae&&we(s,e)?(s[e]=n,!0):we(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(o[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:r,propsOptions:o,type:a}},l){let u,f;return!!(n[l]||t!==Ae&&l[0]!=="$"&&we(t,l)||Co(e,l)||(u=o[0])&&we(u,l)||we(s,l)||we(lr,l)||we(r.config.globalProperties,l)||(f=a.__cssModules)&&f[l])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:we(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function ll(t){return ne(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let ia=!0;function Sg(t){const e=zh(t),n=t.proxy,s=t.ctx;ia=!1,e.beforeCreate&&ul(e.beforeCreate,t,"bc");const{data:r,computed:o,methods:a,watch:l,provide:u,inject:f,created:d,beforeMount:g,mounted:y,beforeUpdate:C,updated:I,activated:x,deactivated:N,beforeDestroy:F,beforeUnmount:H,destroyed:G,unmounted:$,render:te,renderTracked:ae,renderTriggered:v,errorCaptured:_,serverPrefetch:E,expose:T,inheritAttrs:S,components:A,directives:w,filters:ye}=e;if(f&&Tg(f,s,null),a)for(const de in a){const re=a[de];se(re)&&(s[de]=re.bind(n))}if(r){const de=r.call(n,n);Pe(de)&&(t.data=Rr(de))}if(ia=!0,o)for(const de in o){const re=o[de],Ue=se(re)?re.bind(n,n):se(re.get)?re.get.bind(n,n):Ht,bt=!se(re)&&se(re.set)?re.set.bind(n):Ht,ke=dt({get:Ue,set:bt});Object.defineProperty(s,de,{enumerable:!0,configurable:!0,get:()=>ke.value,set:Oe=>ke.value=Oe})}if(l)for(const de in l)qh(l[de],s,n,de);if(u){const de=se(u)?u.call(n):u;Reflect.ownKeys(de).forEach(re=>{ni(re,de[re])})}d&&ul(d,t,"c");function he(de,re){ne(re)?re.forEach(Ue=>de(Ue.bind(n))):re&&de(re.bind(n))}if(he(hg,g),he(Va,y),he(fg,C),he(dg,I),he(cg,x),he(lg,N),he(_g,_),he(yg,ae),he(mg,v),he(pg,H),he(Ba,$),he(gg,E),ne(T))if(T.length){const de=t.exposed||(t.exposed={});T.forEach(re=>{Object.defineProperty(de,re,{get:()=>n[re],set:Ue=>n[re]=Ue,enumerable:!0})})}else t.exposed||(t.exposed={});te&&t.render===Ht&&(t.render=te),S!=null&&(t.inheritAttrs=S),A&&(t.components=A),w&&(t.directives=w),E&&Bh(t)}function Tg(t,e,n=Ht){ne(t)&&(t=oa(t));for(const s in t){const r=t[s];let o;Pe(r)?"default"in r?o=Pt(r.from||s,r.default,!0):o=Pt(r.from||s):o=Pt(r),Ye(o)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[s]=o}}function ul(t,e,n){qt(ne(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function qh(t,e,n,s){let r=s.includes(".")?of(n,s):()=>n[s];if(Me(t)){const o=e[t];se(o)&&si(r,o)}else if(se(t))si(r,t.bind(n));else if(Pe(t))if(ne(t))t.forEach(o=>qh(o,e,n,s));else{const o=se(t.handler)?t.handler.bind(n):e[t.handler];se(o)&&si(r,o,t)}}function zh(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:r,optionsCache:o,config:{optionMergeStrategies:a}}=t.appContext,l=o.get(e);let u;return l?u=l:!r.length&&!n&&!s?u=e:(u={},r.length&&r.forEach(f=>wi(u,f,a,!0)),wi(u,e,a)),Pe(e)&&o.set(e,u),u}function wi(t,e,n,s=!1){const{mixins:r,extends:o}=e;o&&wi(t,o,n,!0),r&&r.forEach(a=>wi(t,a,n,!0));for(const a in e)if(!(s&&a==="expose")){const l=Ig[a]||n&&n[a];t[a]=l?l(t[a],e[a]):e[a]}return t}const Ig={data:hl,props:fl,emits:fl,methods:tr,computed:tr,beforeCreate:et,created:et,beforeMount:et,mounted:et,beforeUpdate:et,updated:et,beforeDestroy:et,beforeUnmount:et,destroyed:et,unmounted:et,activated:et,deactivated:et,errorCaptured:et,serverPrefetch:et,components:tr,directives:tr,watch:Rg,provide:hl,inject:Ag};function hl(t,e){return e?t?function(){return Qe(se(t)?t.call(this,this):t,se(e)?e.call(this,this):e)}:e:t}function Ag(t,e){return tr(oa(t),oa(e))}function oa(t){if(ne(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function et(t,e){return t?[...new Set([].concat(t,e))]:e}function tr(t,e){return t?Qe(Object.create(null),t,e):e}function fl(t,e){return t?ne(t)&&ne(e)?[...new Set([...t,...e])]:Qe(Object.create(null),ll(t),ll(e??{})):e}function Rg(t,e){if(!t)return e;if(!e)return t;const n=Qe(Object.create(null),t);for(const s in e)n[s]=et(t[s],e[s]);return n}function Kh(){return{app:null,config:{isNativeTag:lh,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Cg=0;function Pg(t,e){return function(s,r=null){se(s)||(s=Qe({},s)),r!=null&&!Pe(r)&&(r=null);const o=Kh(),a=new WeakSet,l=[];let u=!1;const f=o.app={_uid:Cg++,_component:s,_props:r,_container:null,_context:o,_instance:null,version:fm,get config(){return o.config},set config(d){},use(d,...g){return a.has(d)||(d&&se(d.install)?(a.add(d),d.install(f,...g)):se(d)&&(a.add(d),d(f,...g))),f},mixin(d){return o.mixins.includes(d)||o.mixins.push(d),f},component(d,g){return g?(o.components[d]=g,f):o.components[d]},directive(d,g){return g?(o.directives[d]=g,f):o.directives[d]},mount(d,g,y){if(!u){const C=f._ceVNode||xe(s,r);return C.appContext=o,y===!0?y="svg":y===!1&&(y=void 0),t(C,d,y),u=!0,f._container=d,d.__vue_app__=f,zi(C.component)}},onUnmount(d){l.push(d)},unmount(){u&&(qt(l,f._instance,16),t(null,f._container),delete f._container.__vue_app__)},provide(d,g){return o.provides[d]=g,f},runWithContext(d){const g=ws;ws=f;try{return d()}finally{ws=g}}};return f}}let ws=null;function ni(t,e){if(Je){let n=Je.provides;const s=Je.parent&&Je.parent.provides;s===n&&(n=Je.provides=Object.create(s)),n[t]=e}}function Pt(t,e,n=!1){const s=im();if(s||ws){let r=ws?ws._context.provides:s?s.parent==null||s.ce?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(r&&t in r)return r[t];if(arguments.length>1)return n&&se(e)?e.call(s&&s.proxy):e}}const Gh={},Jh=()=>Object.create(Gh),Xh=t=>Object.getPrototypeOf(t)===Gh;function Og(t,e,n,s=!1){const r={},o=Jh();t.propsDefaults=Object.create(null),Yh(t,e,r,o);for(const a in t.propsOptions[0])a in r||(r[a]=void 0);n?t.props=s?r:Kp(r):t.type.props?t.props=r:t.props=o,t.attrs=o}function kg(t,e,n,s){const{props:r,attrs:o,vnode:{patchFlag:a}}=t,l=_e(r),[u]=t.propsOptions;let f=!1;if((s||a>0)&&!(a&16)){if(a&8){const d=t.vnode.dynamicProps;for(let g=0;g<d.length;g++){let y=d[g];if(Wi(t.emitsOptions,y))continue;const C=e[y];if(u)if(we(o,y))C!==o[y]&&(o[y]=C,f=!0);else{const I=vt(y);r[I]=aa(u,l,I,C,t,!1)}else C!==o[y]&&(o[y]=C,f=!0)}}}else{Yh(t,e,r,o)&&(f=!0);let d;for(const g in l)(!e||!we(e,g)&&((d=es(g))===g||!we(e,d)))&&(u?n&&(n[g]!==void 0||n[d]!==void 0)&&(r[g]=aa(u,l,g,void 0,t,!0)):delete r[g]);if(o!==l)for(const g in o)(!e||!we(e,g))&&(delete o[g],f=!0)}f&&Jt(t.attrs,"set","")}function Yh(t,e,n,s){const[r,o]=t.propsOptions;let a=!1,l;if(e)for(let u in e){if(rr(u))continue;const f=e[u];let d;r&&we(r,d=vt(u))?!o||!o.includes(d)?n[d]=f:(l||(l={}))[d]=f:Wi(t.emitsOptions,u)||(!(u in s)||f!==s[u])&&(s[u]=f,a=!0)}if(o){const u=_e(n),f=l||Ae;for(let d=0;d<o.length;d++){const g=o[d];n[g]=aa(r,u,g,f[g],t,!we(f,g))}}return a}function aa(t,e,n,s,r,o){const a=t[n];if(a!=null){const l=we(a,"default");if(l&&s===void 0){const u=a.default;if(a.type!==Function&&!a.skipFactory&&se(u)){const{propsDefaults:f}=r;if(n in f)s=f[n];else{const d=Pr(r);s=f[n]=u.call(null,e),d()}}else s=u;r.ce&&r.ce._setProp(n,s)}a[0]&&(o&&!l?s=!1:a[1]&&(s===""||s===es(n))&&(s=!0))}return s}const Ng=new WeakMap;function Qh(t,e,n=!1){const s=n?Ng:e.propsCache,r=s.get(t);if(r)return r;const o=t.props,a={},l=[];let u=!1;if(!se(t)){const d=g=>{u=!0;const[y,C]=Qh(g,e,!0);Qe(a,y),C&&l.push(...C)};!n&&e.mixins.length&&e.mixins.forEach(d),t.extends&&d(t.extends),t.mixins&&t.mixins.forEach(d)}if(!o&&!u)return Pe(t)&&s.set(t,gs),gs;if(ne(o))for(let d=0;d<o.length;d++){const g=vt(o[d]);dl(g)&&(a[g]=Ae)}else if(o)for(const d in o){const g=vt(d);if(dl(g)){const y=o[d],C=a[g]=ne(y)||se(y)?{type:y}:Qe({},y),I=C.type;let x=!1,N=!0;if(ne(I))for(let F=0;F<I.length;++F){const H=I[F],G=se(H)&&H.name;if(G==="Boolean"){x=!0;break}else G==="String"&&(N=!1)}else x=se(I)&&I.name==="Boolean";C[0]=x,C[1]=N,(x||we(C,"default"))&&l.push(g)}}const f=[a,l];return Pe(t)&&s.set(t,f),f}function dl(t){return t[0]!=="$"&&!rr(t)}const $a=t=>t==="_"||t==="_ctx"||t==="$stable",Wa=t=>ne(t)?t.map(jt):[jt(t)],xg=(t,e,n)=>{if(e._n)return e;const s=ds((...r)=>Wa(e(...r)),n);return s._c=!1,s},Zh=(t,e,n)=>{const s=t._ctx;for(const r in t){if($a(r))continue;const o=t[r];if(se(o))e[r]=xg(r,o,s);else if(o!=null){const a=Wa(o);e[r]=()=>a}}},ef=(t,e)=>{const n=Wa(e);t.slots.default=()=>n},tf=(t,e,n)=>{for(const s in e)(n||!$a(s))&&(t[s]=e[s])},Dg=(t,e,n)=>{const s=t.slots=Jh();if(t.vnode.shapeFlag&32){const r=e._;r?(tf(s,e,n),n&&ph(s,"_",r,!0)):Zh(e,s)}else e&&ef(t,e)},Lg=(t,e,n)=>{const{vnode:s,slots:r}=t;let o=!0,a=Ae;if(s.shapeFlag&32){const l=e._;l?n&&l===1?o=!1:tf(r,e,n):(o=!e.$stable,Zh(e,r)),a=e}else e&&(ef(t,e),a={default:1});if(o)for(const l in r)!$a(l)&&a[l]==null&&delete r[l]},ht=Xg;function Mg(t){return Ug(t)}function Ug(t,e){const n=ji();n.__VUE__=!0;const{insert:s,remove:r,patchProp:o,createElement:a,createText:l,createComment:u,setText:f,setElementText:d,parentNode:g,nextSibling:y,setScopeId:C=Ht,insertStaticContent:I}=t,x=(m,b,k,L=null,M=null,U=null,z=void 0,B=null,j=!!b.dynamicChildren)=>{if(m===b)return;m&&!Qs(m,b)&&(L=q(m),Oe(m,M,U,!0),m=null),b.patchFlag===-2&&(j=!1,b.dynamicChildren=null);const{type:V,ref:Q,shapeFlag:K}=b;switch(V){case qi:N(m,b,k,L);break;case Cn:F(m,b,k,L);break;case Oo:m==null&&H(b,k,L,z);break;case _t:A(m,b,k,L,M,U,z,B,j);break;default:K&1?te(m,b,k,L,M,U,z,B,j):K&6?w(m,b,k,L,M,U,z,B,j):(K&64||K&128)&&V.process(m,b,k,L,M,U,z,B,j,Te)}Q!=null&&M?ar(Q,m&&m.ref,U,b||m,!b):Q==null&&m&&m.ref!=null&&ar(m.ref,null,U,m,!0)},N=(m,b,k,L)=>{if(m==null)s(b.el=l(b.children),k,L);else{const M=b.el=m.el;b.children!==m.children&&f(M,b.children)}},F=(m,b,k,L)=>{m==null?s(b.el=u(b.children||""),k,L):b.el=m.el},H=(m,b,k,L)=>{[m.el,m.anchor]=I(m.children,b,k,L,m.el,m.anchor)},G=({el:m,anchor:b},k,L)=>{let M;for(;m&&m!==b;)M=y(m),s(m,k,L),m=M;s(b,k,L)},$=({el:m,anchor:b})=>{let k;for(;m&&m!==b;)k=y(m),r(m),m=k;r(b)},te=(m,b,k,L,M,U,z,B,j)=>{b.type==="svg"?z="svg":b.type==="math"&&(z="mathml"),m==null?ae(b,k,L,M,U,z,B,j):E(m,b,M,U,z,B,j)},ae=(m,b,k,L,M,U,z,B)=>{let j,V;const{props:Q,shapeFlag:K,transition:Y,dirs:Z}=m;if(j=m.el=a(m.type,U,Q&&Q.is,Q),K&8?d(j,m.children):K&16&&_(m.children,j,null,L,M,Po(m,U),z,B),Z&&Un(m,null,L,"created"),v(j,m,m.scopeId,z,L),Q){for(const Ee in Q)Ee!=="value"&&!rr(Ee)&&o(j,Ee,null,Q[Ee],U,L);"value"in Q&&o(j,"value",null,Q.value,U),(V=Q.onVnodeBeforeMount)&&Lt(V,L,m)}Z&&Un(m,null,L,"beforeMount");const le=Fg(M,Y);le&&Y.beforeEnter(j),s(j,b,k),((V=Q&&Q.onVnodeMounted)||le||Z)&&ht(()=>{V&&Lt(V,L,m),le&&Y.enter(j),Z&&Un(m,null,L,"mounted")},M)},v=(m,b,k,L,M)=>{if(k&&C(m,k),L)for(let U=0;U<L.length;U++)C(m,L[U]);if(M){let U=M.subTree;if(b===U||cf(U.type)&&(U.ssContent===b||U.ssFallback===b)){const z=M.vnode;v(m,z,z.scopeId,z.slotScopeIds,M.parent)}}},_=(m,b,k,L,M,U,z,B,j=0)=>{for(let V=j;V<m.length;V++){const Q=m[V]=B?mn(m[V]):jt(m[V]);x(null,Q,b,k,L,M,U,z,B)}},E=(m,b,k,L,M,U,z)=>{const B=b.el=m.el;let{patchFlag:j,dynamicChildren:V,dirs:Q}=b;j|=m.patchFlag&16;const K=m.props||Ae,Y=b.props||Ae;let Z;if(k&&Fn(k,!1),(Z=Y.onVnodeBeforeUpdate)&&Lt(Z,k,b,m),Q&&Un(b,m,k,"beforeUpdate"),k&&Fn(k,!0),(K.innerHTML&&Y.innerHTML==null||K.textContent&&Y.textContent==null)&&d(B,""),V?T(m.dynamicChildren,V,B,k,L,Po(b,M),U):z||re(m,b,B,null,k,L,Po(b,M),U,!1),j>0){if(j&16)S(B,K,Y,k,M);else if(j&2&&K.class!==Y.class&&o(B,"class",null,Y.class,M),j&4&&o(B,"style",K.style,Y.style,M),j&8){const le=b.dynamicProps;for(let Ee=0;Ee<le.length;Ee++){const fe=le[Ee],ze=K[fe],Ke=Y[fe];(Ke!==ze||fe==="value")&&o(B,fe,ze,Ke,M,k)}}j&1&&m.children!==b.children&&d(B,b.children)}else!z&&V==null&&S(B,K,Y,k,M);((Z=Y.onVnodeUpdated)||Q)&&ht(()=>{Z&&Lt(Z,k,b,m),Q&&Un(b,m,k,"updated")},L)},T=(m,b,k,L,M,U,z)=>{for(let B=0;B<b.length;B++){const j=m[B],V=b[B],Q=j.el&&(j.type===_t||!Qs(j,V)||j.shapeFlag&198)?g(j.el):k;x(j,V,Q,null,L,M,U,z,!0)}},S=(m,b,k,L,M)=>{if(b!==k){if(b!==Ae)for(const U in b)!rr(U)&&!(U in k)&&o(m,U,b[U],null,M,L);for(const U in k){if(rr(U))continue;const z=k[U],B=b[U];z!==B&&U!=="value"&&o(m,U,B,z,M,L)}"value"in k&&o(m,"value",b.value,k.value,M)}},A=(m,b,k,L,M,U,z,B,j)=>{const V=b.el=m?m.el:l(""),Q=b.anchor=m?m.anchor:l("");let{patchFlag:K,dynamicChildren:Y,slotScopeIds:Z}=b;Z&&(B=B?B.concat(Z):Z),m==null?(s(V,k,L),s(Q,k,L),_(b.children||[],k,Q,M,U,z,B,j)):K>0&&K&64&&Y&&m.dynamicChildren?(T(m.dynamicChildren,Y,k,M,U,z,B),(b.key!=null||M&&b===M.subTree)&&nf(m,b,!0)):re(m,b,k,Q,M,U,z,B,j)},w=(m,b,k,L,M,U,z,B,j)=>{b.slotScopeIds=B,m==null?b.shapeFlag&512?M.ctx.activate(b,k,L,z,j):ye(b,k,L,M,U,z,j):qe(m,b,j)},ye=(m,b,k,L,M,U,z)=>{const B=m.component=rm(m,L,M);if(Hh(m)&&(B.ctx.renderer=Te),om(B,!1,z),B.asyncDep){if(M&&M.registerDep(B,he,z),!m.el){const j=B.subTree=xe(Cn);F(null,j,b,k),m.placeholder=j.el}}else he(B,m,b,k,M,U,z)},qe=(m,b,k)=>{const L=b.component=m.component;if(Gg(m,b,k))if(L.asyncDep&&!L.asyncResolved){de(L,b,k);return}else L.next=b,L.update();else b.el=m.el,L.vnode=b},he=(m,b,k,L,M,U,z)=>{const B=()=>{if(m.isMounted){let{next:K,bu:Y,u:Z,parent:le,vnode:Ee}=m;{const mt=sf(m);if(mt){K&&(K.el=Ee.el,de(m,K,z)),mt.asyncDep.then(()=>{m.isUnmounted||B()});return}}let fe=K,ze;Fn(m,!1),K?(K.el=Ee.el,de(m,K,z)):K=Ee,Y&&ti(Y),(ze=K.props&&K.props.onVnodeBeforeUpdate)&&Lt(ze,le,K,Ee),Fn(m,!0);const Ke=gl(m),ut=m.subTree;m.subTree=Ke,x(ut,Ke,g(ut.el),q(ut),m,M,U),K.el=Ke.el,fe===null&&Jg(m,Ke.el),Z&&ht(Z,M),(ze=K.props&&K.props.onVnodeUpdated)&&ht(()=>Lt(ze,le,K,Ee),M)}else{let K;const{el:Y,props:Z}=b,{bm:le,m:Ee,parent:fe,root:ze,type:Ke}=m,ut=cr(b);Fn(m,!1),le&&ti(le),!ut&&(K=Z&&Z.onVnodeBeforeMount)&&Lt(K,fe,b),Fn(m,!0);{ze.ce&&ze.ce._def.shadowRoot!==!1&&ze.ce._injectChildStyle(Ke);const mt=m.subTree=gl(m);x(null,mt,k,L,m,M,U),b.el=mt.el}if(Ee&&ht(Ee,M),!ut&&(K=Z&&Z.onVnodeMounted)){const mt=b;ht(()=>Lt(K,fe,mt),M)}(b.shapeFlag&256||fe&&cr(fe.vnode)&&fe.vnode.shapeFlag&256)&&m.a&&ht(m.a,M),m.isMounted=!0,b=k=L=null}};m.scope.on();const j=m.effect=new _h(B);m.scope.off();const V=m.update=j.run.bind(j),Q=m.job=j.runIfDirty.bind(j);Q.i=m,Q.id=m.uid,j.scheduler=()=>Fa(Q),Fn(m,!0),V()},de=(m,b,k)=>{b.component=m;const L=m.vnode.props;m.vnode=b,m.next=null,kg(m,b.props,L,k),Lg(m,b.children,k),en(),ol(m),tn()},re=(m,b,k,L,M,U,z,B,j=!1)=>{const V=m&&m.children,Q=m?m.shapeFlag:0,K=b.children,{patchFlag:Y,shapeFlag:Z}=b;if(Y>0){if(Y&128){bt(V,K,k,L,M,U,z,B,j);return}else if(Y&256){Ue(V,K,k,L,M,U,z,B,j);return}}Z&8?(Q&16&&J(V,M,U),K!==V&&d(k,K)):Q&16?Z&16?bt(V,K,k,L,M,U,z,B,j):J(V,M,U,!0):(Q&8&&d(k,""),Z&16&&_(K,k,L,M,U,z,B,j))},Ue=(m,b,k,L,M,U,z,B,j)=>{m=m||gs,b=b||gs;const V=m.length,Q=b.length,K=Math.min(V,Q);let Y;for(Y=0;Y<K;Y++){const Z=b[Y]=j?mn(b[Y]):jt(b[Y]);x(m[Y],Z,k,null,M,U,z,B,j)}V>Q?J(m,M,U,!0,!1,K):_(b,k,L,M,U,z,B,j,K)},bt=(m,b,k,L,M,U,z,B,j)=>{let V=0;const Q=b.length;let K=m.length-1,Y=Q-1;for(;V<=K&&V<=Y;){const Z=m[V],le=b[V]=j?mn(b[V]):jt(b[V]);if(Qs(Z,le))x(Z,le,k,null,M,U,z,B,j);else break;V++}for(;V<=K&&V<=Y;){const Z=m[K],le=b[Y]=j?mn(b[Y]):jt(b[Y]);if(Qs(Z,le))x(Z,le,k,null,M,U,z,B,j);else break;K--,Y--}if(V>K){if(V<=Y){const Z=Y+1,le=Z<Q?b[Z].el:L;for(;V<=Y;)x(null,b[V]=j?mn(b[V]):jt(b[V]),k,le,M,U,z,B,j),V++}}else if(V>Y)for(;V<=K;)Oe(m[V],M,U,!0),V++;else{const Z=V,le=V,Ee=new Map;for(V=le;V<=Y;V++){const He=b[V]=j?mn(b[V]):jt(b[V]);He.key!=null&&Ee.set(He.key,V)}let fe,ze=0;const Ke=Y-le+1;let ut=!1,mt=0;const St=new Array(Ke);for(V=0;V<Ke;V++)St[V]=0;for(V=Z;V<=K;V++){const He=m[V];if(ze>=Ke){Oe(He,M,U,!0);continue}let $e;if(He.key!=null)$e=Ee.get(He.key);else for(fe=le;fe<=Y;fe++)if(St[fe-le]===0&&Qs(He,b[fe])){$e=fe;break}$e===void 0?Oe(He,M,U,!0):(St[$e-le]=V+1,$e>=mt?mt=$e:ut=!0,x(He,b[$e],k,null,M,U,z,B,j),ze++)}const ns=ut?jg(St):gs;for(fe=ns.length-1,V=Ke-1;V>=0;V--){const He=le+V,$e=b[He],Ms=b[He+1],ss=He+1<Q?Ms.el||Ms.placeholder:L;St[V]===0?x(null,$e,k,ss,M,U,z,B,j):ut&&(fe<0||V!==ns[fe]?ke($e,k,ss,2):fe--)}}},ke=(m,b,k,L,M=null)=>{const{el:U,type:z,transition:B,children:j,shapeFlag:V}=m;if(V&6){ke(m.component.subTree,b,k,L);return}if(V&128){m.suspense.move(b,k,L);return}if(V&64){z.move(m,b,k,Te);return}if(z===_t){s(U,b,k);for(let K=0;K<j.length;K++)ke(j[K],b,k,L);s(m.anchor,b,k);return}if(z===Oo){G(m,b,k);return}if(L!==2&&V&1&&B)if(L===0)B.beforeEnter(U),s(U,b,k),ht(()=>B.enter(U),M);else{const{leave:K,delayLeave:Y,afterLeave:Z}=B,le=()=>{m.ctx.isUnmounted?r(U):s(U,b,k)},Ee=()=>{U._isLeaving&&U[ag](!0),K(U,()=>{le(),Z&&Z()})};Y?Y(U,le,Ee):Ee()}else s(U,b,k)},Oe=(m,b,k,L=!1,M=!1)=>{const{type:U,props:z,ref:B,children:j,dynamicChildren:V,shapeFlag:Q,patchFlag:K,dirs:Y,cacheIndex:Z}=m;if(K===-2&&(M=!1),B!=null&&(en(),ar(B,null,k,m,!0),tn()),Z!=null&&(b.renderCache[Z]=void 0),Q&256){b.ctx.deactivate(m);return}const le=Q&1&&Y,Ee=!cr(m);let fe;if(Ee&&(fe=z&&z.onVnodeBeforeUnmount)&&Lt(fe,b,m),Q&6)D(m.component,k,L);else{if(Q&128){m.suspense.unmount(k,L);return}le&&Un(m,null,b,"beforeUnmount"),Q&64?m.type.remove(m,b,k,Te,L):V&&!V.hasOnce&&(U!==_t||K>0&&K&64)?J(V,b,k,!1,!0):(U===_t&&K&384||!M&&Q&16)&&J(j,b,k),L&&lt(m)}(Ee&&(fe=z&&z.onVnodeUnmounted)||le)&&ht(()=>{fe&&Lt(fe,b,m),le&&Un(m,null,b,"unmounted")},k)},lt=m=>{const{type:b,el:k,anchor:L,transition:M}=m;if(b===_t){rt(k,L);return}if(b===Oo){$(m);return}const U=()=>{r(k),M&&!M.persisted&&M.afterLeave&&M.afterLeave()};if(m.shapeFlag&1&&M&&!M.persisted){const{leave:z,delayLeave:B}=M,j=()=>z(k,U);B?B(m.el,U,j):j()}else U()},rt=(m,b)=>{let k;for(;m!==b;)k=y(m),r(m),m=k;r(b)},D=(m,b,k)=>{const{bum:L,scope:M,job:U,subTree:z,um:B,m:j,a:V}=m;pl(j),pl(V),L&&ti(L),M.stop(),U&&(U.flags|=8,Oe(z,m,b,k)),B&&ht(B,b),ht(()=>{m.isUnmounted=!0},b)},J=(m,b,k,L=!1,M=!1,U=0)=>{for(let z=U;z<m.length;z++)Oe(m[z],b,k,L,M)},q=m=>{if(m.shapeFlag&6)return q(m.component.subTree);if(m.shapeFlag&128)return m.suspense.next();const b=y(m.anchor||m.el),k=b&&b[ig];return k?y(k):b};let X=!1;const pe=(m,b,k)=>{m==null?b._vnode&&Oe(b._vnode,null,null,!0):x(b._vnode||null,m,b,null,null,null,k),b._vnode=m,X||(X=!0,ol(),Uh(),X=!1)},Te={p:x,um:Oe,m:ke,r:lt,mt:ye,mc:_,pc:re,pbc:T,n:q,o:t};return{render:pe,hydrate:void 0,createApp:Pg(pe)}}function Po({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Fn({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function Fg(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function nf(t,e,n=!1){const s=t.children,r=e.children;if(ne(s)&&ne(r))for(let o=0;o<s.length;o++){const a=s[o];let l=r[o];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=r[o]=mn(r[o]),l.el=a.el),!n&&l.patchFlag!==-2&&nf(a,l)),l.type===qi&&l.patchFlag!==-1&&(l.el=a.el),l.type===Cn&&!l.el&&(l.el=a.el)}}function jg(t){const e=t.slice(),n=[0];let s,r,o,a,l;const u=t.length;for(s=0;s<u;s++){const f=t[s];if(f!==0){if(r=n[n.length-1],t[r]<f){e[s]=r,n.push(s);continue}for(o=0,a=n.length-1;o<a;)l=o+a>>1,t[n[l]]<f?o=l+1:a=l;f<t[n[o]]&&(o>0&&(e[s]=n[o-1]),n[o]=s)}}for(o=n.length,a=n[o-1];o-- >0;)n[o]=a,a=e[a];return n}function sf(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:sf(e)}function pl(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const Vg=Symbol.for("v-scx"),Bg=()=>Pt(Vg);function si(t,e,n){return rf(t,e,n)}function rf(t,e,n=Ae){const{immediate:s,deep:r,flush:o,once:a}=n,l=Qe({},n),u=e&&s||!e&&o!=="post";let f;if(br){if(o==="sync"){const C=Bg();f=C.__watcherHandles||(C.__watcherHandles=[])}else if(!u){const C=()=>{};return C.stop=Ht,C.resume=Ht,C.pause=Ht,C}}const d=Je;l.call=(C,I,x)=>qt(C,d,I,x);let g=!1;o==="post"?l.scheduler=C=>{ht(C,d&&d.suspense)}:o!=="sync"&&(g=!0,l.scheduler=(C,I)=>{I?C():Fa(C)}),l.augmentJob=C=>{e&&(C.flags|=4),g&&(C.flags|=2,d&&(C.id=d.uid,C.i=d))};const y=tg(t,e,l);return br&&(f?f.push(y):u&&y()),y}function Hg(t,e,n){const s=this.proxy,r=Me(t)?t.includes(".")?of(s,t):()=>s[t]:t.bind(s,s);let o;se(e)?o=e:(o=e.handler,n=e);const a=Pr(this),l=rf(r,o.bind(s),n);return a(),l}function of(t,e){const n=e.split(".");return()=>{let s=t;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}const $g=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${vt(e)}Modifiers`]||t[`${es(e)}Modifiers`];function Wg(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||Ae;let r=n;const o=e.startsWith("update:"),a=o&&$g(s,e.slice(7));a&&(a.trim&&(r=n.map(d=>Me(d)?d.trim():d)),a.number&&(r=n.map(Qo)));let l,u=s[l=So(e)]||s[l=So(vt(e))];!u&&o&&(u=s[l=So(es(e))]),u&&qt(u,t,6,r);const f=s[l+"Once"];if(f){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,qt(f,t,6,r)}}const qg=new WeakMap;function af(t,e,n=!1){const s=n?qg:e.emitsCache,r=s.get(t);if(r!==void 0)return r;const o=t.emits;let a={},l=!1;if(!se(t)){const u=f=>{const d=af(f,e,!0);d&&(l=!0,Qe(a,d))};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}return!o&&!l?(Pe(t)&&s.set(t,null),null):(ne(o)?o.forEach(u=>a[u]=null):Qe(a,o),Pe(t)&&s.set(t,a),a)}function Wi(t,e){return!t||!Li(e)?!1:(e=e.slice(2).replace(/Once$/,""),we(t,e[0].toLowerCase()+e.slice(1))||we(t,es(e))||we(t,e))}function gl(t){const{type:e,vnode:n,proxy:s,withProxy:r,propsOptions:[o],slots:a,attrs:l,emit:u,render:f,renderCache:d,props:g,data:y,setupState:C,ctx:I,inheritAttrs:x}=t,N=yi(t);let F,H;try{if(n.shapeFlag&4){const $=r||s,te=$;F=jt(f.call(te,$,d,g,C,y,I)),H=l}else{const $=e;F=jt($.length>1?$(g,{attrs:l,slots:a,emit:u}):$(g,null)),H=e.props?l:zg(l)}}catch($){ur.length=0,Hi($,t,1),F=xe(Cn)}let G=F;if(H&&x!==!1){const $=Object.keys(H),{shapeFlag:te}=G;$.length&&te&7&&(o&&$.some(Ra)&&(H=Kg(H,o)),G=Ts(G,H,!1,!0))}return n.dirs&&(G=Ts(G,null,!1,!0),G.dirs=G.dirs?G.dirs.concat(n.dirs):n.dirs),n.transition&&ja(G,n.transition),F=G,yi(N),F}const zg=t=>{let e;for(const n in t)(n==="class"||n==="style"||Li(n))&&((e||(e={}))[n]=t[n]);return e},Kg=(t,e)=>{const n={};for(const s in t)(!Ra(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function Gg(t,e,n){const{props:s,children:r,component:o}=t,{props:a,children:l,patchFlag:u}=e,f=o.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&u>=0){if(u&1024)return!0;if(u&16)return s?ml(s,a,f):!!a;if(u&8){const d=e.dynamicProps;for(let g=0;g<d.length;g++){const y=d[g];if(a[y]!==s[y]&&!Wi(f,y))return!0}}}else return(r||l)&&(!l||!l.$stable)?!0:s===a?!1:s?a?ml(s,a,f):!0:!!a;return!1}function ml(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let r=0;r<s.length;r++){const o=s[r];if(e[o]!==t[o]&&!Wi(n,o))return!0}return!1}function Jg({vnode:t,parent:e},n){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.el=t.el),s===t)(t=e.vnode).el=n,e=e.parent;else break}}const cf=t=>t.__isSuspense;function Xg(t,e){e&&e.pendingBranch?ne(t)?e.effects.push(...t):e.effects.push(t):rg(t)}const _t=Symbol.for("v-fgt"),qi=Symbol.for("v-txt"),Cn=Symbol.for("v-cmt"),Oo=Symbol.for("v-stc"),ur=[];let gt=null;function Be(t=!1){ur.push(gt=t?null:[])}function Yg(){ur.pop(),gt=ur[ur.length-1]||null}let vr=1;function Ei(t,e=!1){vr+=t,t<0&&gt&&e&&(gt.hasOnce=!0)}function lf(t){return t.dynamicChildren=vr>0?gt||gs:null,Yg(),vr>0&&gt&&gt.push(t),t}function nt(t,e,n,s,r,o){return lf(Se(t,e,n,s,r,o,!0))}function qa(t,e,n,s,r){return lf(xe(t,e,n,s,r,!0))}function vi(t){return t?t.__v_isVNode===!0:!1}function Qs(t,e){return t.type===e.type&&t.key===e.key}const uf=({key:t})=>t??null,ri=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Me(t)||Ye(t)||se(t)?{i:pt,r:t,k:e,f:!!n}:t:null);function Se(t,e=null,n=null,s=0,r=null,o=t===_t?0:1,a=!1,l=!1){const u={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&uf(e),ref:e&&ri(e),scopeId:jh,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:pt};return l?(za(u,n),o&128&&t.normalize(u)):n&&(u.shapeFlag|=Me(n)?8:16),vr>0&&!a&&gt&&(u.patchFlag>0||o&6)&&u.patchFlag!==32&&gt.push(u),u}const xe=Qg;function Qg(t,e=null,n=null,s=0,r=null,o=!1){if((!t||t===Eg)&&(t=Cn),vi(t)){const l=Ts(t,e,!0);return n&&za(l,n),vr>0&&!o&&gt&&(l.shapeFlag&6?gt[gt.indexOf(t)]=l:gt.push(l)),l.patchFlag=-2,l}if(hm(t)&&(t=t.__vccOpts),e){e=Zg(e);let{class:l,style:u}=e;l&&!Me(l)&&(e.class=Vi(l)),Pe(u)&&(Ua(u)&&!ne(u)&&(u=Qe({},u)),e.style=Oa(u))}const a=Me(t)?1:cf(t)?128:og(t)?64:Pe(t)?4:se(t)?2:0;return Se(t,e,n,s,r,a,o,!0)}function Zg(t){return t?Ua(t)||Xh(t)?Qe({},t):t:null}function Ts(t,e,n=!1,s=!1){const{props:r,ref:o,patchFlag:a,children:l,transition:u}=t,f=e?tm(r||{},e):r,d={__v_isVNode:!0,__v_skip:!0,type:t.type,props:f,key:f&&uf(f),ref:e&&e.ref?n&&o?ne(o)?o.concat(ri(e)):[o,ri(e)]:ri(e):o,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==_t?a===-1?16:a|16:a,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:u,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Ts(t.ssContent),ssFallback:t.ssFallback&&Ts(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return u&&s&&ja(d,u.clone(d)),d}function us(t=" ",e=0){return xe(qi,null,t,e)}function em(t="",e=!1){return e?(Be(),qa(Cn,null,t)):xe(Cn,null,t)}function jt(t){return t==null||typeof t=="boolean"?xe(Cn):ne(t)?xe(_t,null,t.slice()):vi(t)?mn(t):xe(qi,null,String(t))}function mn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Ts(t)}function za(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(ne(e))n=16;else if(typeof e=="object")if(s&65){const r=e.default;r&&(r._c&&(r._d=!1),za(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!Xh(e)?e._ctx=pt:r===3&&pt&&(pt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else se(e)?(e={default:e,_ctx:pt},n=32):(e=String(e),s&64?(n=16,e=[us(e)]):n=8);t.children=e,t.shapeFlag|=n}function tm(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const r in s)if(r==="class")e.class!==s.class&&(e.class=Vi([e.class,s.class]));else if(r==="style")e.style=Oa([e.style,s.style]);else if(Li(r)){const o=e[r],a=s[r];a&&o!==a&&!(ne(o)&&o.includes(a))&&(e[r]=o?[].concat(o,a):a)}else r!==""&&(e[r]=s[r])}return e}function Lt(t,e,n,s=null){qt(t,e,7,[n,s])}const nm=Kh();let sm=0;function rm(t,e,n){const s=t.type,r=(e?e.appContext:t.appContext)||nm,o={uid:sm++,vnode:t,type:s,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Rp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Qh(s,r),emitsOptions:af(s,r),emit:null,emitted:null,propsDefaults:Ae,inheritAttrs:s.inheritAttrs,ctx:Ae,data:Ae,props:Ae,attrs:Ae,slots:Ae,refs:Ae,setupState:Ae,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=e?e.root:o,o.emit=Wg.bind(null,o),t.ce&&t.ce(o),o}let Je=null;const im=()=>Je||pt;let bi,ca;{const t=ji(),e=(n,s)=>{let r;return(r=t[n])||(r=t[n]=[]),r.push(s),o=>{r.length>1?r.forEach(a=>a(o)):r[0](o)}};bi=e("__VUE_INSTANCE_SETTERS__",n=>Je=n),ca=e("__VUE_SSR_SETTERS__",n=>br=n)}const Pr=t=>{const e=Je;return bi(t),t.scope.on(),()=>{t.scope.off(),bi(e)}},yl=()=>{Je&&Je.scope.off(),bi(null)};function hf(t){return t.vnode.shapeFlag&4}let br=!1;function om(t,e=!1,n=!1){e&&ca(e);const{props:s,children:r}=t.vnode,o=hf(t);Og(t,s,o,e),Dg(t,r,n||e);const a=o?am(t,e):void 0;return e&&ca(!1),a}function am(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,bg);const{setup:s}=n;if(s){en();const r=t.setupContext=s.length>1?lm(t):null,o=Pr(t),a=Cr(s,t,0,[t.props,r]),l=hh(a);if(tn(),o(),(l||t.sp)&&!cr(t)&&Bh(t),l){if(a.then(yl,yl),e)return a.then(u=>{_l(t,u)}).catch(u=>{Hi(u,t,0)});t.asyncDep=a}else _l(t,a)}else ff(t)}function _l(t,e,n){se(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Pe(e)&&(t.setupState=xh(e)),ff(t)}function ff(t,e,n){const s=t.type;t.render||(t.render=s.render||Ht);{const r=Pr(t);en();try{Sg(t)}finally{tn(),r()}}}const cm={get(t,e){return Ge(t,"get",""),t[e]}};function lm(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,cm),slots:t.slots,emit:t.emit,expose:e}}function zi(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(xh(Gp(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in lr)return lr[n](t)},has(e,n){return n in e||n in lr}})):t.proxy}function um(t,e=!0){return se(t)?t.displayName||t.name:t.name||e&&t.__name}function hm(t){return se(t)&&"__vccOpts"in t}const dt=(t,e)=>Zp(t,e,br);function df(t,e,n){try{Ei(-1);const s=arguments.length;return s===2?Pe(e)&&!ne(e)?vi(e)?xe(t,null,[e]):xe(t,e):xe(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&vi(n)&&(n=[n]),xe(t,e,n))}finally{Ei(1)}}const fm="3.5.22";/**
* @vue/runtime-dom v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let la;const wl=typeof window<"u"&&window.trustedTypes;if(wl)try{la=wl.createPolicy("vue",{createHTML:t=>t})}catch{}const pf=la?t=>la.createHTML(t):t=>t,dm="http://www.w3.org/2000/svg",pm="http://www.w3.org/1998/Math/MathML",Gt=typeof document<"u"?document:null,El=Gt&&Gt.createElement("template"),gm={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const r=e==="svg"?Gt.createElementNS(dm,t):e==="mathml"?Gt.createElementNS(pm,t):n?Gt.createElement(t,{is:n}):Gt.createElement(t);return t==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:t=>Gt.createTextNode(t),createComment:t=>Gt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Gt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,r,o){const a=n?n.previousSibling:e.lastChild;if(r&&(r===o||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===o||!(r=r.nextSibling)););else{El.innerHTML=pf(s==="svg"?`<svg>${t}</svg>`:s==="mathml"?`<math>${t}</math>`:t);const l=El.content;if(s==="svg"||s==="mathml"){const u=l.firstChild;for(;u.firstChild;)l.appendChild(u.firstChild);l.removeChild(u)}e.insertBefore(l,n)}return[a?a.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},mm=Symbol("_vtc");function ym(t,e,n){const s=t[mm];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const vl=Symbol("_vod"),_m=Symbol("_vsh"),wm=Symbol(""),Em=/(?:^|;)\s*display\s*:/;function vm(t,e,n){const s=t.style,r=Me(n);let o=!1;if(n&&!r){if(e)if(Me(e))for(const a of e.split(";")){const l=a.slice(0,a.indexOf(":")).trim();n[l]==null&&ii(s,l,"")}else for(const a in e)n[a]==null&&ii(s,a,"");for(const a in n)a==="display"&&(o=!0),ii(s,a,n[a])}else if(r){if(e!==n){const a=s[wm];a&&(n+=";"+a),s.cssText=n,o=Em.test(n)}}else e&&t.removeAttribute("style");vl in t&&(t[vl]=o?s.display:"",t[_m]&&(s.display="none"))}const bl=/\s*!important$/;function ii(t,e,n){if(ne(n))n.forEach(s=>ii(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=bm(t,e);bl.test(n)?t.setProperty(es(s),n.replace(bl,""),"important"):t[s]=n}}const Sl=["Webkit","Moz","ms"],ko={};function bm(t,e){const n=ko[e];if(n)return n;let s=vt(e);if(s!=="filter"&&s in t)return ko[e]=s;s=Fi(s);for(let r=0;r<Sl.length;r++){const o=Sl[r]+s;if(o in t)return ko[e]=o}return e}const Tl="http://www.w3.org/1999/xlink";function Il(t,e,n,s,r,o=Ap(e)){s&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Tl,e.slice(6,e.length)):t.setAttributeNS(Tl,e,n):n==null||o&&!gh(n)?t.removeAttribute(e):t.setAttribute(e,o?"":On(n)?String(n):n)}function Al(t,e,n,s,r){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?pf(n):n);return}const o=t.tagName;if(e==="value"&&o!=="PROGRESS"&&!o.includes("-")){const l=o==="OPTION"?t.getAttribute("value")||"":t.value,u=n==null?t.type==="checkbox"?"on":"":String(n);(l!==u||!("_value"in t))&&(t.value=u),n==null&&t.removeAttribute(e),t._value=n;return}let a=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=gh(n):n==null&&l==="string"?(n="",a=!0):l==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(r||e)}function hs(t,e,n,s){t.addEventListener(e,n,s)}function Sm(t,e,n,s){t.removeEventListener(e,n,s)}const Rl=Symbol("_vei");function Tm(t,e,n,s,r=null){const o=t[Rl]||(t[Rl]={}),a=o[e];if(s&&a)a.value=s;else{const[l,u]=Im(e);if(s){const f=o[e]=Cm(s,r);hs(t,l,f,u)}else a&&(Sm(t,l,a,u),o[e]=void 0)}}const Cl=/(?:Once|Passive|Capture)$/;function Im(t){let e;if(Cl.test(t)){e={};let s;for(;s=t.match(Cl);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):es(t.slice(2)),e]}let No=0;const Am=Promise.resolve(),Rm=()=>No||(Am.then(()=>No=0),No=Date.now());function Cm(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;qt(Pm(s,n.value),e,5,[s])};return n.value=t,n.attached=Rm(),n}function Pm(t,e){if(ne(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>r=>!r._stopped&&s&&s(r))}else return e}const Pl=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Om=(t,e,n,s,r,o)=>{const a=r==="svg";e==="class"?ym(t,s,a):e==="style"?vm(t,n,s):Li(e)?Ra(e)||Tm(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):km(t,e,s,a))?(Al(t,e,s),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Il(t,e,s,a,o,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!Me(s))?Al(t,vt(e),s,o,e):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),Il(t,e,s,a))};function km(t,e,n,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in t&&Pl(e)&&se(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=t.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Pl(e)&&Me(n)?!1:e in t}const Ol=t=>{const e=t.props["onUpdate:modelValue"]||!1;return ne(e)?n=>ti(e,n):e};function Nm(t){t.target.composing=!0}function kl(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const xo=Symbol("_assign"),Hn={created(t,{modifiers:{lazy:e,trim:n,number:s}},r){t[xo]=Ol(r);const o=s||r.props&&r.props.type==="number";hs(t,e?"change":"input",a=>{if(a.target.composing)return;let l=t.value;n&&(l=l.trim()),o&&(l=Qo(l)),t[xo](l)}),n&&hs(t,"change",()=>{t.value=t.value.trim()}),e||(hs(t,"compositionstart",Nm),hs(t,"compositionend",kl),hs(t,"change",kl))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:s,trim:r,number:o}},a){if(t[xo]=Ol(a),t.composing)return;const l=(o||t.type==="number")&&!/^0\d/.test(t.value)?Qo(t.value):t.value,u=e??"";l!==u&&(document.activeElement===t&&t.type!=="range"&&(s&&e===n||r&&t.value.trim()===u)||(t.value=u))}},xm=["ctrl","shift","alt","meta"],Dm={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>xm.some(n=>t[`${n}Key`]&&!e.includes(n))},gf=(t,e)=>{const n=t._withMods||(t._withMods={}),s=e.join(".");return n[s]||(n[s]=((r,...o)=>{for(let a=0;a<e.length;a++){const l=Dm[e[a]];if(l&&l(r,e))return}return t(r,...o)}))},Lm=Qe({patchProp:Om},gm);let Nl;function Mm(){return Nl||(Nl=Mg(Lm))}const Um=((...t)=>{const e=Mm().createApp(...t),{mount:n}=e;return e.mount=s=>{const r=jm(s);if(!r)return;const o=e._component;!se(o)&&!o.render&&!o.template&&(o.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const a=n(r,!1,Fm(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),a},e});function Fm(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function jm(t){return Me(t)?document.querySelector(t):t}const Vm="modulepreload",Bm=function(t){return"/company-directory-api/"+t},xl={},Hm=function(e,n,s){let r=Promise.resolve();if(n&&n.length>0){let u=function(f){return Promise.all(f.map(d=>Promise.resolve(d).then(g=>({status:"fulfilled",value:g}),g=>({status:"rejected",reason:g}))))};document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),l=a?.nonce||a?.getAttribute("nonce");r=u(n.map(f=>{if(f=Bm(f),f in xl)return;xl[f]=!0;const d=f.endsWith(".css"),g=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${f}"]${g}`))return;const y=document.createElement("link");if(y.rel=d?"stylesheet":Vm,d||(y.as="script"),y.crossOrigin="",y.href=f,l&&y.setAttribute("nonce",l),document.head.appendChild(y),d)return new Promise((C,I)=>{y.addEventListener("load",C),y.addEventListener("error",()=>I(new Error(`Unable to preload CSS for ${f}`)))})}))}function o(a){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=a,window.dispatchEvent(l),!l.defaultPrevented)throw a}return r.then(a=>{for(const l of a||[])l.status==="rejected"&&o(l.reason);return e().catch(o)})};/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const fs=typeof window<"u";function $m(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const ve=Object.assign;function Do(t,e){const n={};for(const s in e){const r=e[s];n[s]=Ot(r)?r.map(t):t(r)}return n}const hr=()=>{},Ot=Array.isArray,Wm=/\/$/,qm=t=>t.replace(Wm,"");function Lo(t,e,n="/"){let s,r={},o="",a="";const l=e.indexOf("#");let u=e.indexOf("?");return l<u&&l>=0&&(u=-1),u>-1&&(s=e.slice(0,u),o=e.slice(u+1,l>-1?l:e.length),r=t(o)),l>-1&&(s=s||e.slice(0,l),a=e.slice(l,e.length)),s=Jm(s??e,n),{fullPath:s+(o&&"?")+o+a,path:s,query:r,hash:a}}function zm(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Dl(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Km(t,e,n){const s=e.matched.length-1,r=n.matched.length-1;return s>-1&&s===r&&Is(e.matched[s],n.matched[r])&&mf(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Is(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function mf(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Gm(t[n],e[n]))return!1;return!0}function Gm(t,e){return Ot(t)?Ll(t,e):Ot(e)?Ll(e,t):t===e}function Ll(t,e){return Ot(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function Jm(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/");let r=n.length-1,o,a;for(o=0;o<s.length;o++)if(a=s[o],a!==".")if(a==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(o-(o===s.length?1:0)).join("/")}var Sr;(function(t){t.pop="pop",t.push="push"})(Sr||(Sr={}));var fr;(function(t){t.back="back",t.forward="forward",t.unknown=""})(fr||(fr={}));function Xm(t){if(!t)if(fs){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),qm(t)}const Ym=/^[^#]+#/;function Qm(t,e){return t.replace(Ym,"#")+e}function Zm(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const Ki=()=>({left:window.pageXOffset,top:window.pageYOffset});function ey(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=Zm(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Ml(t,e){return(history.state?history.state.position-e:-1)+t}const ua=new Map;function ty(t,e){ua.set(t,e)}function ny(t){const e=ua.get(t);return ua.delete(t),e}let sy=()=>location.protocol+"//"+location.host;function yf(t,e){const{pathname:n,search:s,hash:r}=e,o=t.indexOf("#");if(o>-1){let l=r.includes(t.slice(o))?t.slice(o).length:1,u=r.slice(l);return u[0]!=="/"&&(u="/"+u),Dl(u,"")}return Dl(n,t)+s+r}function ry(t,e,n,s){let r=[],o=[],a=null;const l=({state:y})=>{const C=yf(t,location),I=n.value,x=e.value;let N=0;if(y){if(n.value=C,e.value=y,a&&a===I){a=null;return}N=x?y.position-x.position:0}else s(C);r.forEach(F=>{F(n.value,I,{delta:N,type:Sr.pop,direction:N?N>0?fr.forward:fr.back:fr.unknown})})};function u(){a=n.value}function f(y){r.push(y);const C=()=>{const I=r.indexOf(y);I>-1&&r.splice(I,1)};return o.push(C),C}function d(){const{history:y}=window;y.state&&y.replaceState(ve({},y.state,{scroll:Ki()}),"")}function g(){for(const y of o)y();o=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",d),{pauseListeners:u,listen:f,destroy:g}}function Ul(t,e,n,s=!1,r=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:r?Ki():null}}function iy(t){const{history:e,location:n}=window,s={value:yf(t,n)},r={value:e.state};r.value||o(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function o(u,f,d){const g=t.indexOf("#"),y=g>-1?(n.host&&document.querySelector("base")?t:t.slice(g))+u:sy()+t+u;try{e[d?"replaceState":"pushState"](f,"",y),r.value=f}catch(C){console.error(C),n[d?"replace":"assign"](y)}}function a(u,f){const d=ve({},e.state,Ul(r.value.back,u,r.value.forward,!0),f,{position:r.value.position});o(u,d,!0),s.value=u}function l(u,f){const d=ve({},r.value,e.state,{forward:u,scroll:Ki()});o(d.current,d,!0);const g=ve({},Ul(s.value,u,null),{position:d.position+1},f);o(u,g,!1),s.value=u}return{location:s,state:r,push:l,replace:a}}function oy(t){t=Xm(t);const e=iy(t),n=ry(t,e.state,e.location,e.replace);function s(o,a=!0){a||n.pauseListeners(),history.go(o)}const r=ve({location:"",base:t,go:s,createHref:Qm.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function ay(t){return typeof t=="string"||t&&typeof t=="object"}function _f(t){return typeof t=="string"||typeof t=="symbol"}const dn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},wf=Symbol("");var Fl;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Fl||(Fl={}));function As(t,e){return ve(new Error,{type:t,[wf]:!0},e)}function Kt(t,e){return t instanceof Error&&wf in t&&(e==null||!!(t.type&e))}const jl="[^/]+?",cy={sensitive:!1,strict:!1,start:!0,end:!0},ly=/[.+*?^${}()[\]/\\]/g;function uy(t,e){const n=ve({},cy,e),s=[];let r=n.start?"^":"";const o=[];for(const f of t){const d=f.length?[]:[90];n.strict&&!f.length&&(r+="/");for(let g=0;g<f.length;g++){const y=f[g];let C=40+(n.sensitive?.25:0);if(y.type===0)g||(r+="/"),r+=y.value.replace(ly,"\\$&"),C+=40;else if(y.type===1){const{value:I,repeatable:x,optional:N,regexp:F}=y;o.push({name:I,repeatable:x,optional:N});const H=F||jl;if(H!==jl){C+=10;try{new RegExp(`(${H})`)}catch($){throw new Error(`Invalid custom RegExp for param "${I}" (${H}): `+$.message)}}let G=x?`((?:${H})(?:/(?:${H}))*)`:`(${H})`;g||(G=N&&f.length<2?`(?:/${G})`:"/"+G),N&&(G+="?"),r+=G,C+=20,N&&(C+=-8),x&&(C+=-20),H===".*"&&(C+=-50)}d.push(C)}s.push(d)}if(n.strict&&n.end){const f=s.length-1;s[f][s[f].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const a=new RegExp(r,n.sensitive?"":"i");function l(f){const d=f.match(a),g={};if(!d)return null;for(let y=1;y<d.length;y++){const C=d[y]||"",I=o[y-1];g[I.name]=C&&I.repeatable?C.split("/"):C}return g}function u(f){let d="",g=!1;for(const y of t){(!g||!d.endsWith("/"))&&(d+="/"),g=!1;for(const C of y)if(C.type===0)d+=C.value;else if(C.type===1){const{value:I,repeatable:x,optional:N}=C,F=I in f?f[I]:"";if(Ot(F)&&!x)throw new Error(`Provided param "${I}" is an array but it is not repeatable (* or + modifiers)`);const H=Ot(F)?F.join("/"):F;if(!H)if(N)y.length<2&&(d.endsWith("/")?d=d.slice(0,-1):g=!0);else throw new Error(`Missing required param "${I}"`);d+=H}}return d||"/"}return{re:a,score:s,keys:o,parse:l,stringify:u}}function hy(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function fy(t,e){let n=0;const s=t.score,r=e.score;for(;n<s.length&&n<r.length;){const o=hy(s[n],r[n]);if(o)return o;n++}if(Math.abs(r.length-s.length)===1){if(Vl(s))return 1;if(Vl(r))return-1}return r.length-s.length}function Vl(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const dy={type:0,value:""},py=/[a-zA-Z0-9_]/;function gy(t){if(!t)return[[]];if(t==="/")return[[dy]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(C){throw new Error(`ERR (${n})/"${f}": ${C}`)}let n=0,s=n;const r=[];let o;function a(){o&&r.push(o),o=[]}let l=0,u,f="",d="";function g(){f&&(n===0?o.push({type:0,value:f}):n===1||n===2||n===3?(o.length>1&&(u==="*"||u==="+")&&e(`A repeatable param (${f}) must be alone in its segment. eg: '/:ids+.`),o.push({type:1,value:f,regexp:d,repeatable:u==="*"||u==="+",optional:u==="*"||u==="?"})):e("Invalid state to consume buffer"),f="")}function y(){f+=u}for(;l<t.length;){if(u=t[l++],u==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:u==="/"?(f&&g(),a()):u===":"?(g(),n=1):y();break;case 4:y(),n=s;break;case 1:u==="("?n=2:py.test(u)?y():(g(),n=0,u!=="*"&&u!=="?"&&u!=="+"&&l--);break;case 2:u===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+u:n=3:d+=u;break;case 3:g(),n=0,u!=="*"&&u!=="?"&&u!=="+"&&l--,d="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${f}"`),g(),a(),r}function my(t,e,n){const s=uy(gy(t.path),n),r=ve(s,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function yy(t,e){const n=[],s=new Map;e=$l({strict:!1,end:!0,sensitive:!1},e);function r(d){return s.get(d)}function o(d,g,y){const C=!y,I=_y(d);I.aliasOf=y&&y.record;const x=$l(e,d),N=[I];if("alias"in d){const G=typeof d.alias=="string"?[d.alias]:d.alias;for(const $ of G)N.push(ve({},I,{components:y?y.record.components:I.components,path:$,aliasOf:y?y.record:I}))}let F,H;for(const G of N){const{path:$}=G;if(g&&$[0]!=="/"){const te=g.record.path,ae=te[te.length-1]==="/"?"":"/";G.path=g.record.path+($&&ae+$)}if(F=my(G,g,x),y?y.alias.push(F):(H=H||F,H!==F&&H.alias.push(F),C&&d.name&&!Hl(F)&&a(d.name)),I.children){const te=I.children;for(let ae=0;ae<te.length;ae++)o(te[ae],F,y&&y.children[ae])}y=y||F,(F.record.components&&Object.keys(F.record.components).length||F.record.name||F.record.redirect)&&u(F)}return H?()=>{a(H)}:hr}function a(d){if(_f(d)){const g=s.get(d);g&&(s.delete(d),n.splice(n.indexOf(g),1),g.children.forEach(a),g.alias.forEach(a))}else{const g=n.indexOf(d);g>-1&&(n.splice(g,1),d.record.name&&s.delete(d.record.name),d.children.forEach(a),d.alias.forEach(a))}}function l(){return n}function u(d){let g=0;for(;g<n.length&&fy(d,n[g])>=0&&(d.record.path!==n[g].record.path||!Ef(d,n[g]));)g++;n.splice(g,0,d),d.record.name&&!Hl(d)&&s.set(d.record.name,d)}function f(d,g){let y,C={},I,x;if("name"in d&&d.name){if(y=s.get(d.name),!y)throw As(1,{location:d});x=y.record.name,C=ve(Bl(g.params,y.keys.filter(H=>!H.optional).map(H=>H.name)),d.params&&Bl(d.params,y.keys.map(H=>H.name))),I=y.stringify(C)}else if("path"in d)I=d.path,y=n.find(H=>H.re.test(I)),y&&(C=y.parse(I),x=y.record.name);else{if(y=g.name?s.get(g.name):n.find(H=>H.re.test(g.path)),!y)throw As(1,{location:d,currentLocation:g});x=y.record.name,C=ve({},g.params,d.params),I=y.stringify(C)}const N=[];let F=y;for(;F;)N.unshift(F.record),F=F.parent;return{name:x,path:I,params:C,matched:N,meta:Ey(N)}}return t.forEach(d=>o(d)),{addRoute:o,resolve:f,removeRoute:a,getRoutes:l,getRecordMatcher:r}}function Bl(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function _y(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:wy(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function wy(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="boolean"?n:n[s];return e}function Hl(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Ey(t){return t.reduce((e,n)=>ve(e,n.meta),{})}function $l(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function Ef(t,e){return e.children.some(n=>n===t||Ef(t,n))}const vf=/#/g,vy=/&/g,by=/\//g,Sy=/=/g,Ty=/\?/g,bf=/\+/g,Iy=/%5B/g,Ay=/%5D/g,Sf=/%5E/g,Ry=/%60/g,Tf=/%7B/g,Cy=/%7C/g,If=/%7D/g,Py=/%20/g;function Ka(t){return encodeURI(""+t).replace(Cy,"|").replace(Iy,"[").replace(Ay,"]")}function Oy(t){return Ka(t).replace(Tf,"{").replace(If,"}").replace(Sf,"^")}function ha(t){return Ka(t).replace(bf,"%2B").replace(Py,"+").replace(vf,"%23").replace(vy,"%26").replace(Ry,"`").replace(Tf,"{").replace(If,"}").replace(Sf,"^")}function ky(t){return ha(t).replace(Sy,"%3D")}function Ny(t){return Ka(t).replace(vf,"%23").replace(Ty,"%3F")}function xy(t){return t==null?"":Ny(t).replace(by,"%2F")}function Si(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function Dy(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<s.length;++r){const o=s[r].replace(bf," "),a=o.indexOf("="),l=Si(a<0?o:o.slice(0,a)),u=a<0?null:Si(o.slice(a+1));if(l in e){let f=e[l];Ot(f)||(f=e[l]=[f]),f.push(u)}else e[l]=u}return e}function Wl(t){let e="";for(let n in t){const s=t[n];if(n=ky(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(Ot(s)?s.map(o=>o&&ha(o)):[s&&ha(s)]).forEach(o=>{o!==void 0&&(e+=(e.length?"&":"")+n,o!=null&&(e+="="+o))})}return e}function Ly(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=Ot(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return e}const My=Symbol(""),ql=Symbol(""),Gi=Symbol(""),Ga=Symbol(""),fa=Symbol("");function Zs(){let t=[];function e(s){return t.push(s),()=>{const r=t.indexOf(s);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function yn(t,e,n,s,r){const o=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((a,l)=>{const u=g=>{g===!1?l(As(4,{from:n,to:e})):g instanceof Error?l(g):ay(g)?l(As(2,{from:e,to:g})):(o&&s.enterCallbacks[r]===o&&typeof g=="function"&&o.push(g),a())},f=t.call(s&&s.instances[r],e,n,u);let d=Promise.resolve(f);t.length<3&&(d=d.then(u)),d.catch(g=>l(g))})}function Mo(t,e,n,s){const r=[];for(const o of t)for(const a in o.components){let l=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(Uy(l)){const f=(l.__vccOpts||l)[e];f&&r.push(yn(f,n,s,o,a))}else{let u=l();r.push(()=>u.then(f=>{if(!f)return Promise.reject(new Error(`Couldn't resolve component "${a}" at "${o.path}"`));const d=$m(f)?f.default:f;o.components[a]=d;const y=(d.__vccOpts||d)[e];return y&&yn(y,n,s,o,a)()}))}}return r}function Uy(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function zl(t){const e=Pt(Gi),n=Pt(Ga),s=dt(()=>e.resolve(Ve(t.to))),r=dt(()=>{const{matched:u}=s.value,{length:f}=u,d=u[f-1],g=n.matched;if(!d||!g.length)return-1;const y=g.findIndex(Is.bind(null,d));if(y>-1)return y;const C=Kl(u[f-2]);return f>1&&Kl(d)===C&&g[g.length-1].path!==C?g.findIndex(Is.bind(null,u[f-2])):y}),o=dt(()=>r.value>-1&&By(n.params,s.value.params)),a=dt(()=>r.value>-1&&r.value===n.matched.length-1&&mf(n.params,s.value.params));function l(u={}){return Vy(u)?e[Ve(t.replace)?"replace":"push"](Ve(t.to)).catch(hr):Promise.resolve()}return{route:s,href:dt(()=>s.value.href),isActive:o,isExactActive:a,navigate:l}}const Fy=Vh({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:zl,setup(t,{slots:e}){const n=Rr(zl(t)),{options:s}=Pt(Gi),r=dt(()=>({[Gl(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Gl(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const o=e.default&&e.default(n);return t.custom?o:df("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},o)}}}),jy=Fy;function Vy(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function By(t,e){for(const n in e){const s=e[n],r=t[n];if(typeof s=="string"){if(s!==r)return!1}else if(!Ot(r)||r.length!==s.length||s.some((o,a)=>o!==r[a]))return!1}return!0}function Kl(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Gl=(t,e,n)=>t??e??n,Hy=Vh({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=Pt(fa),r=dt(()=>t.route||s.value),o=Pt(ql,0),a=dt(()=>{let f=Ve(o);const{matched:d}=r.value;let g;for(;(g=d[f])&&!g.components;)f++;return f}),l=dt(()=>r.value.matched[a.value]);ni(ql,dt(()=>a.value+1)),ni(My,l),ni(fa,r);const u=ot();return si(()=>[u.value,l.value,t.name],([f,d,g],[y,C,I])=>{d&&(d.instances[g]=f,C&&C!==d&&f&&f===y&&(d.leaveGuards.size||(d.leaveGuards=C.leaveGuards),d.updateGuards.size||(d.updateGuards=C.updateGuards))),f&&d&&(!C||!Is(d,C)||!y)&&(d.enterCallbacks[g]||[]).forEach(x=>x(f))},{flush:"post"}),()=>{const f=r.value,d=t.name,g=l.value,y=g&&g.components[d];if(!y)return Jl(n.default,{Component:y,route:f});const C=g.props[d],I=C?C===!0?f.params:typeof C=="function"?C(f):C:null,N=df(y,ve({},I,e,{onVnodeUnmounted:F=>{F.component.isUnmounted&&(g.instances[d]=null)},ref:u}));return Jl(n.default,{Component:N,route:f})||N}}});function Jl(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const $y=Hy;function Wy(t){const e=yy(t.routes,t),n=t.parseQuery||Dy,s=t.stringifyQuery||Wl,r=t.history,o=Zs(),a=Zs(),l=Zs(),u=Jp(dn);let f=dn;fs&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=Do.bind(null,D=>""+D),g=Do.bind(null,xy),y=Do.bind(null,Si);function C(D,J){let q,X;return _f(D)?(q=e.getRecordMatcher(D),X=J):X=D,e.addRoute(X,q)}function I(D){const J=e.getRecordMatcher(D);J&&e.removeRoute(J)}function x(){return e.getRoutes().map(D=>D.record)}function N(D){return!!e.getRecordMatcher(D)}function F(D,J){if(J=ve({},J||u.value),typeof D=="string"){const m=Lo(n,D,J.path),b=e.resolve({path:m.path},J),k=r.createHref(m.fullPath);return ve(m,b,{params:y(b.params),hash:Si(m.hash),redirectedFrom:void 0,href:k})}let q;if("path"in D)q=ve({},D,{path:Lo(n,D.path,J.path).path});else{const m=ve({},D.params);for(const b in m)m[b]==null&&delete m[b];q=ve({},D,{params:g(D.params)}),J.params=g(J.params)}const X=e.resolve(q,J),pe=D.hash||"";X.params=d(y(X.params));const Te=zm(s,ve({},D,{hash:Oy(pe),path:X.path})),ce=r.createHref(Te);return ve({fullPath:Te,hash:pe,query:s===Wl?Ly(D.query):D.query||{}},X,{redirectedFrom:void 0,href:ce})}function H(D){return typeof D=="string"?Lo(n,D,u.value.path):ve({},D)}function G(D,J){if(f!==D)return As(8,{from:J,to:D})}function $(D){return v(D)}function te(D){return $(ve(H(D),{replace:!0}))}function ae(D){const J=D.matched[D.matched.length-1];if(J&&J.redirect){const{redirect:q}=J;let X=typeof q=="function"?q(D):q;return typeof X=="string"&&(X=X.includes("?")||X.includes("#")?X=H(X):{path:X},X.params={}),ve({query:D.query,hash:D.hash,params:"path"in X?{}:D.params},X)}}function v(D,J){const q=f=F(D),X=u.value,pe=D.state,Te=D.force,ce=D.replace===!0,m=ae(q);if(m)return v(ve(H(m),{state:typeof m=="object"?ve({},pe,m.state):pe,force:Te,replace:ce}),J||q);const b=q;b.redirectedFrom=J;let k;return!Te&&Km(s,X,q)&&(k=As(16,{to:b,from:X}),bt(X,X,!0,!1)),(k?Promise.resolve(k):E(b,X)).catch(L=>Kt(L)?Kt(L,2)?L:Ue(L):de(L,b,X)).then(L=>{if(L){if(Kt(L,2))return v(ve({replace:ce},H(L.to),{state:typeof L.to=="object"?ve({},pe,L.to.state):pe,force:Te}),J||b)}else L=S(b,X,!0,ce,pe);return T(b,X,L),L})}function _(D,J){const q=G(D,J);return q?Promise.reject(q):Promise.resolve()}function E(D,J){let q;const[X,pe,Te]=qy(D,J);q=Mo(X.reverse(),"beforeRouteLeave",D,J);for(const m of X)m.leaveGuards.forEach(b=>{q.push(yn(b,D,J))});const ce=_.bind(null,D,J);return q.push(ce),cs(q).then(()=>{q=[];for(const m of o.list())q.push(yn(m,D,J));return q.push(ce),cs(q)}).then(()=>{q=Mo(pe,"beforeRouteUpdate",D,J);for(const m of pe)m.updateGuards.forEach(b=>{q.push(yn(b,D,J))});return q.push(ce),cs(q)}).then(()=>{q=[];for(const m of D.matched)if(m.beforeEnter&&!J.matched.includes(m))if(Ot(m.beforeEnter))for(const b of m.beforeEnter)q.push(yn(b,D,J));else q.push(yn(m.beforeEnter,D,J));return q.push(ce),cs(q)}).then(()=>(D.matched.forEach(m=>m.enterCallbacks={}),q=Mo(Te,"beforeRouteEnter",D,J),q.push(ce),cs(q))).then(()=>{q=[];for(const m of a.list())q.push(yn(m,D,J));return q.push(ce),cs(q)}).catch(m=>Kt(m,8)?m:Promise.reject(m))}function T(D,J,q){for(const X of l.list())X(D,J,q)}function S(D,J,q,X,pe){const Te=G(D,J);if(Te)return Te;const ce=J===dn,m=fs?history.state:{};q&&(X||ce?r.replace(D.fullPath,ve({scroll:ce&&m&&m.scroll},pe)):r.push(D.fullPath,pe)),u.value=D,bt(D,J,q,ce),Ue()}let A;function w(){A||(A=r.listen((D,J,q)=>{if(!rt.listening)return;const X=F(D),pe=ae(X);if(pe){v(ve(pe,{replace:!0}),X).catch(hr);return}f=X;const Te=u.value;fs&&ty(Ml(Te.fullPath,q.delta),Ki()),E(X,Te).catch(ce=>Kt(ce,12)?ce:Kt(ce,2)?(v(ce.to,X).then(m=>{Kt(m,20)&&!q.delta&&q.type===Sr.pop&&r.go(-1,!1)}).catch(hr),Promise.reject()):(q.delta&&r.go(-q.delta,!1),de(ce,X,Te))).then(ce=>{ce=ce||S(X,Te,!1),ce&&(q.delta&&!Kt(ce,8)?r.go(-q.delta,!1):q.type===Sr.pop&&Kt(ce,20)&&r.go(-1,!1)),T(X,Te,ce)}).catch(hr)}))}let ye=Zs(),qe=Zs(),he;function de(D,J,q){Ue(D);const X=qe.list();return X.length?X.forEach(pe=>pe(D,J,q)):console.error(D),Promise.reject(D)}function re(){return he&&u.value!==dn?Promise.resolve():new Promise((D,J)=>{ye.add([D,J])})}function Ue(D){return he||(he=!D,w(),ye.list().forEach(([J,q])=>D?q(D):J()),ye.reset()),D}function bt(D,J,q,X){const{scrollBehavior:pe}=t;if(!fs||!pe)return Promise.resolve();const Te=!q&&ny(Ml(D.fullPath,0))||(X||!q)&&history.state&&history.state.scroll||null;return Lh().then(()=>pe(D,J,Te)).then(ce=>ce&&ey(ce)).catch(ce=>de(ce,D,J))}const ke=D=>r.go(D);let Oe;const lt=new Set,rt={currentRoute:u,listening:!0,addRoute:C,removeRoute:I,hasRoute:N,getRoutes:x,resolve:F,options:t,push:$,replace:te,go:ke,back:()=>ke(-1),forward:()=>ke(1),beforeEach:o.add,beforeResolve:a.add,afterEach:l.add,onError:qe.add,isReady:re,install(D){const J=this;D.component("RouterLink",jy),D.component("RouterView",$y),D.config.globalProperties.$router=J,Object.defineProperty(D.config.globalProperties,"$route",{enumerable:!0,get:()=>Ve(u)}),fs&&!Oe&&u.value===dn&&(Oe=!0,$(r.location).catch(pe=>{}));const q={};for(const pe in dn)q[pe]=dt(()=>u.value[pe]);D.provide(Gi,J),D.provide(Ga,Rr(q)),D.provide(fa,u);const X=D.unmount;lt.add(D),D.unmount=function(){lt.delete(D),lt.size<1&&(f=dn,A&&A(),A=null,u.value=dn,Oe=!1,he=!1),X()}}};return rt}function cs(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function qy(t,e){const n=[],s=[],r=[],o=Math.max(e.matched.length,t.matched.length);for(let a=0;a<o;a++){const l=e.matched[a];l&&(t.matched.find(f=>Is(f,l))?s.push(l):n.push(l));const u=t.matched[a];u&&(e.matched.find(f=>Is(f,u))||r.push(u))}return[n,s,r]}function zy(){return Pt(Gi)}function Af(){return Pt(Ga)}const Ky={class:"border border-gray-400 rounded-xl shadow bg-gray-200 h-full"},Gy=["src"],Jy={class:"p-4"},Xy={class:"mb-2 text-2xl font-bold"},Yy={class:"mb-3 font-normal text-gray-700"},Qy={class:"mb-3 font-normal text-gray-700"},Zy={__name:"MainCardSingle",props:{employee:{type:Object,required:!0,default:()=>({_id:"690fe18420cd14a769438b23",userName:"RIbarra",firstName:"Reynaldo",lastName:"Ibarra",title:"User",quote:"Belive in the you that belives in you",__v:0})}},setup(t){const e=t;return(n,s)=>{const r=Ha("RouterLink");return Be(),qa(r,{to:{name:"CardDetails",params:{id:e.employee._id}}},{default:ds(()=>[Se("div",Ky,[Se("img",{class:"object-fill h-480 w-960 rounded-t-xl",src:`https://picsum.photos/seed/${n.username}/960/480`},null,8,Gy),Se("div",Jy,[Se("p",Xy,wt(e.employee.firstName)+" "+wt(e.employee.lastName),1),Se("p",Yy,wt(e.employee.title),1),Se("p",Qy,wt(e.employee.quote),1)])])]),_:1},8,["to"])}}};function Rf(t,e){return function(){return t.apply(e,arguments)}}const{toString:e_}=Object.prototype,{getPrototypeOf:Ja}=Object,{iterator:Ji,toStringTag:Cf}=Symbol,Xi=(t=>e=>{const n=e_.call(e);return t[n]||(t[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),Nt=t=>(t=t.toLowerCase(),e=>Xi(e)===t),Yi=t=>e=>typeof e===t,{isArray:ks}=Array,Rs=Yi("undefined");function Or(t){return t!==null&&!Rs(t)&&t.constructor!==null&&!Rs(t.constructor)&&at(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const Pf=Nt("ArrayBuffer");function t_(t){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&Pf(t.buffer),e}const n_=Yi("string"),at=Yi("function"),Of=Yi("number"),kr=t=>t!==null&&typeof t=="object",s_=t=>t===!0||t===!1,oi=t=>{if(Xi(t)!=="object")return!1;const e=Ja(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Cf in t)&&!(Ji in t)},r_=t=>{if(!kr(t)||Or(t))return!1;try{return Object.keys(t).length===0&&Object.getPrototypeOf(t)===Object.prototype}catch{return!1}},i_=Nt("Date"),o_=Nt("File"),a_=Nt("Blob"),c_=Nt("FileList"),l_=t=>kr(t)&&at(t.pipe),u_=t=>{let e;return t&&(typeof FormData=="function"&&t instanceof FormData||at(t.append)&&((e=Xi(t))==="formdata"||e==="object"&&at(t.toString)&&t.toString()==="[object FormData]"))},h_=Nt("URLSearchParams"),[f_,d_,p_,g_]=["ReadableStream","Request","Response","Headers"].map(Nt),m_=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Nr(t,e,{allOwnKeys:n=!1}={}){if(t===null||typeof t>"u")return;let s,r;if(typeof t!="object"&&(t=[t]),ks(t))for(s=0,r=t.length;s<r;s++)e.call(null,t[s],s,t);else{if(Or(t))return;const o=n?Object.getOwnPropertyNames(t):Object.keys(t),a=o.length;let l;for(s=0;s<a;s++)l=o[s],e.call(null,t[l],l,t)}}function kf(t,e){if(Or(t))return null;e=e.toLowerCase();const n=Object.keys(t);let s=n.length,r;for(;s-- >0;)if(r=n[s],e===r.toLowerCase())return r;return null}const Wn=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,Nf=t=>!Rs(t)&&t!==Wn;function da(){const{caseless:t,skipUndefined:e}=Nf(this)&&this||{},n={},s=(r,o)=>{const a=t&&kf(n,o)||o;oi(n[a])&&oi(r)?n[a]=da(n[a],r):oi(r)?n[a]=da({},r):ks(r)?n[a]=r.slice():(!e||!Rs(r))&&(n[a]=r)};for(let r=0,o=arguments.length;r<o;r++)arguments[r]&&Nr(arguments[r],s);return n}const y_=(t,e,n,{allOwnKeys:s}={})=>(Nr(e,(r,o)=>{n&&at(r)?t[o]=Rf(r,n):t[o]=r},{allOwnKeys:s}),t),__=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),w_=(t,e,n,s)=>{t.prototype=Object.create(e.prototype,s),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:e.prototype}),n&&Object.assign(t.prototype,n)},E_=(t,e,n,s)=>{let r,o,a;const l={};if(e=e||{},t==null)return e;do{for(r=Object.getOwnPropertyNames(t),o=r.length;o-- >0;)a=r[o],(!s||s(a,t,e))&&!l[a]&&(e[a]=t[a],l[a]=!0);t=n!==!1&&Ja(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},v_=(t,e,n)=>{t=String(t),(n===void 0||n>t.length)&&(n=t.length),n-=e.length;const s=t.indexOf(e,n);return s!==-1&&s===n},b_=t=>{if(!t)return null;if(ks(t))return t;let e=t.length;if(!Of(e))return null;const n=new Array(e);for(;e-- >0;)n[e]=t[e];return n},S_=(t=>e=>t&&e instanceof t)(typeof Uint8Array<"u"&&Ja(Uint8Array)),T_=(t,e)=>{const s=(t&&t[Ji]).call(t);let r;for(;(r=s.next())&&!r.done;){const o=r.value;e.call(t,o[0],o[1])}},I_=(t,e)=>{let n;const s=[];for(;(n=t.exec(e))!==null;)s.push(n);return s},A_=Nt("HTMLFormElement"),R_=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,s,r){return s.toUpperCase()+r}),Xl=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),C_=Nt("RegExp"),xf=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),s={};Nr(n,(r,o)=>{let a;(a=e(r,o,t))!==!1&&(s[o]=a||r)}),Object.defineProperties(t,s)},P_=t=>{xf(t,(e,n)=>{if(at(t)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const s=t[n];if(at(s)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},O_=(t,e)=>{const n={},s=r=>{r.forEach(o=>{n[o]=!0})};return ks(t)?s(t):s(String(t).split(e)),n},k_=()=>{},N_=(t,e)=>t!=null&&Number.isFinite(t=+t)?t:e;function x_(t){return!!(t&&at(t.append)&&t[Cf]==="FormData"&&t[Ji])}const D_=t=>{const e=new Array(10),n=(s,r)=>{if(kr(s)){if(e.indexOf(s)>=0)return;if(Or(s))return s;if(!("toJSON"in s)){e[r]=s;const o=ks(s)?[]:{};return Nr(s,(a,l)=>{const u=n(a,r+1);!Rs(u)&&(o[l]=u)}),e[r]=void 0,o}}return s};return n(t,0)},L_=Nt("AsyncFunction"),M_=t=>t&&(kr(t)||at(t))&&at(t.then)&&at(t.catch),Df=((t,e)=>t?setImmediate:e?((n,s)=>(Wn.addEventListener("message",({source:r,data:o})=>{r===Wn&&o===n&&s.length&&s.shift()()},!1),r=>{s.push(r),Wn.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",at(Wn.postMessage)),U_=typeof queueMicrotask<"u"?queueMicrotask.bind(Wn):typeof process<"u"&&process.nextTick||Df,F_=t=>t!=null&&at(t[Ji]),P={isArray:ks,isArrayBuffer:Pf,isBuffer:Or,isFormData:u_,isArrayBufferView:t_,isString:n_,isNumber:Of,isBoolean:s_,isObject:kr,isPlainObject:oi,isEmptyObject:r_,isReadableStream:f_,isRequest:d_,isResponse:p_,isHeaders:g_,isUndefined:Rs,isDate:i_,isFile:o_,isBlob:a_,isRegExp:C_,isFunction:at,isStream:l_,isURLSearchParams:h_,isTypedArray:S_,isFileList:c_,forEach:Nr,merge:da,extend:y_,trim:m_,stripBOM:__,inherits:w_,toFlatObject:E_,kindOf:Xi,kindOfTest:Nt,endsWith:v_,toArray:b_,forEachEntry:T_,matchAll:I_,isHTMLForm:A_,hasOwnProperty:Xl,hasOwnProp:Xl,reduceDescriptors:xf,freezeMethods:P_,toObjectSet:O_,toCamelCase:R_,noop:k_,toFiniteNumber:N_,findKey:kf,global:Wn,isContextDefined:Nf,isSpecCompliantForm:x_,toJSONObject:D_,isAsyncFn:L_,isThenable:M_,setImmediate:Df,asap:U_,isIterable:F_};function ie(t,e,n,s,r){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=t,this.name="AxiosError",e&&(this.code=e),n&&(this.config=n),s&&(this.request=s),r&&(this.response=r,this.status=r.status?r.status:null)}P.inherits(ie,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:P.toJSONObject(this.config),code:this.code,status:this.status}}});const Lf=ie.prototype,Mf={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(t=>{Mf[t]={value:t}});Object.defineProperties(ie,Mf);Object.defineProperty(Lf,"isAxiosError",{value:!0});ie.from=(t,e,n,s,r,o)=>{const a=Object.create(Lf);P.toFlatObject(t,a,function(d){return d!==Error.prototype},f=>f!=="isAxiosError");const l=t&&t.message?t.message:"Error",u=e==null&&t?t.code:e;return ie.call(a,l,u,n,s,r),t&&a.cause==null&&Object.defineProperty(a,"cause",{value:t,configurable:!0}),a.name=t&&t.name||"Error",o&&Object.assign(a,o),a};const j_=null;function pa(t){return P.isPlainObject(t)||P.isArray(t)}function Uf(t){return P.endsWith(t,"[]")?t.slice(0,-2):t}function Yl(t,e,n){return t?t.concat(e).map(function(r,o){return r=Uf(r),!n&&o?"["+r+"]":r}).join(n?".":""):e}function V_(t){return P.isArray(t)&&!t.some(pa)}const B_=P.toFlatObject(P,{},null,function(e){return/^is[A-Z]/.test(e)});function Qi(t,e,n){if(!P.isObject(t))throw new TypeError("target must be an object");e=e||new FormData,n=P.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(x,N){return!P.isUndefined(N[x])});const s=n.metaTokens,r=n.visitor||d,o=n.dots,a=n.indexes,u=(n.Blob||typeof Blob<"u"&&Blob)&&P.isSpecCompliantForm(e);if(!P.isFunction(r))throw new TypeError("visitor must be a function");function f(I){if(I===null)return"";if(P.isDate(I))return I.toISOString();if(P.isBoolean(I))return I.toString();if(!u&&P.isBlob(I))throw new ie("Blob is not supported. Use a Buffer instead.");return P.isArrayBuffer(I)||P.isTypedArray(I)?u&&typeof Blob=="function"?new Blob([I]):Buffer.from(I):I}function d(I,x,N){let F=I;if(I&&!N&&typeof I=="object"){if(P.endsWith(x,"{}"))x=s?x:x.slice(0,-2),I=JSON.stringify(I);else if(P.isArray(I)&&V_(I)||(P.isFileList(I)||P.endsWith(x,"[]"))&&(F=P.toArray(I)))return x=Uf(x),F.forEach(function(G,$){!(P.isUndefined(G)||G===null)&&e.append(a===!0?Yl([x],$,o):a===null?x:x+"[]",f(G))}),!1}return pa(I)?!0:(e.append(Yl(N,x,o),f(I)),!1)}const g=[],y=Object.assign(B_,{defaultVisitor:d,convertValue:f,isVisitable:pa});function C(I,x){if(!P.isUndefined(I)){if(g.indexOf(I)!==-1)throw Error("Circular reference detected in "+x.join("."));g.push(I),P.forEach(I,function(F,H){(!(P.isUndefined(F)||F===null)&&r.call(e,F,P.isString(H)?H.trim():H,x,y))===!0&&C(F,x?x.concat(H):[H])}),g.pop()}}if(!P.isObject(t))throw new TypeError("data must be an object");return C(t),e}function Ql(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,function(s){return e[s]})}function Xa(t,e){this._pairs=[],t&&Qi(t,this,e)}const Ff=Xa.prototype;Ff.append=function(e,n){this._pairs.push([e,n])};Ff.toString=function(e){const n=e?function(s){return e.call(this,s,Ql)}:Ql;return this._pairs.map(function(r){return n(r[0])+"="+n(r[1])},"").join("&")};function H_(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function jf(t,e,n){if(!e)return t;const s=n&&n.encode||H_;P.isFunction(n)&&(n={serialize:n});const r=n&&n.serialize;let o;if(r?o=r(e,n):o=P.isURLSearchParams(e)?e.toString():new Xa(e,n).toString(s),o){const a=t.indexOf("#");a!==-1&&(t=t.slice(0,a)),t+=(t.indexOf("?")===-1?"?":"&")+o}return t}class Zl{constructor(){this.handlers=[]}use(e,n,s){return this.handlers.push({fulfilled:e,rejected:n,synchronous:s?s.synchronous:!1,runWhen:s?s.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){P.forEach(this.handlers,function(s){s!==null&&e(s)})}}const Vf={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},$_=typeof URLSearchParams<"u"?URLSearchParams:Xa,W_=typeof FormData<"u"?FormData:null,q_=typeof Blob<"u"?Blob:null,z_={isBrowser:!0,classes:{URLSearchParams:$_,FormData:W_,Blob:q_},protocols:["http","https","file","blob","url","data"]},Ya=typeof window<"u"&&typeof document<"u",ga=typeof navigator=="object"&&navigator||void 0,K_=Ya&&(!ga||["ReactNative","NativeScript","NS"].indexOf(ga.product)<0),G_=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",J_=Ya&&window.location.href||"http://localhost",X_=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Ya,hasStandardBrowserEnv:K_,hasStandardBrowserWebWorkerEnv:G_,navigator:ga,origin:J_},Symbol.toStringTag,{value:"Module"})),Xe={...X_,...z_};function Y_(t,e){return Qi(t,new Xe.classes.URLSearchParams,{visitor:function(n,s,r,o){return Xe.isNode&&P.isBuffer(n)?(this.append(s,n.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)},...e})}function Q_(t){return P.matchAll(/\w+|\[(\w*)]/g,t).map(e=>e[0]==="[]"?"":e[1]||e[0])}function Z_(t){const e={},n=Object.keys(t);let s;const r=n.length;let o;for(s=0;s<r;s++)o=n[s],e[o]=t[o];return e}function Bf(t){function e(n,s,r,o){let a=n[o++];if(a==="__proto__")return!0;const l=Number.isFinite(+a),u=o>=n.length;return a=!a&&P.isArray(r)?r.length:a,u?(P.hasOwnProp(r,a)?r[a]=[r[a],s]:r[a]=s,!l):((!r[a]||!P.isObject(r[a]))&&(r[a]=[]),e(n,s,r[a],o)&&P.isArray(r[a])&&(r[a]=Z_(r[a])),!l)}if(P.isFormData(t)&&P.isFunction(t.entries)){const n={};return P.forEachEntry(t,(s,r)=>{e(Q_(s),r,n,0)}),n}return null}function ew(t,e,n){if(P.isString(t))try{return(e||JSON.parse)(t),P.trim(t)}catch(s){if(s.name!=="SyntaxError")throw s}return(n||JSON.stringify)(t)}const xr={transitional:Vf,adapter:["xhr","http","fetch"],transformRequest:[function(e,n){const s=n.getContentType()||"",r=s.indexOf("application/json")>-1,o=P.isObject(e);if(o&&P.isHTMLForm(e)&&(e=new FormData(e)),P.isFormData(e))return r?JSON.stringify(Bf(e)):e;if(P.isArrayBuffer(e)||P.isBuffer(e)||P.isStream(e)||P.isFile(e)||P.isBlob(e)||P.isReadableStream(e))return e;if(P.isArrayBufferView(e))return e.buffer;if(P.isURLSearchParams(e))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let l;if(o){if(s.indexOf("application/x-www-form-urlencoded")>-1)return Y_(e,this.formSerializer).toString();if((l=P.isFileList(e))||s.indexOf("multipart/form-data")>-1){const u=this.env&&this.env.FormData;return Qi(l?{"files[]":e}:e,u&&new u,this.formSerializer)}}return o||r?(n.setContentType("application/json",!1),ew(e)):e}],transformResponse:[function(e){const n=this.transitional||xr.transitional,s=n&&n.forcedJSONParsing,r=this.responseType==="json";if(P.isResponse(e)||P.isReadableStream(e))return e;if(e&&P.isString(e)&&(s&&!this.responseType||r)){const a=!(n&&n.silentJSONParsing)&&r;try{return JSON.parse(e,this.parseReviver)}catch(l){if(a)throw l.name==="SyntaxError"?ie.from(l,ie.ERR_BAD_RESPONSE,this,null,this.response):l}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Xe.classes.FormData,Blob:Xe.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};P.forEach(["delete","get","head","post","put","patch"],t=>{xr.headers[t]={}});const tw=P.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),nw=t=>{const e={};let n,s,r;return t&&t.split(`
`).forEach(function(a){r=a.indexOf(":"),n=a.substring(0,r).trim().toLowerCase(),s=a.substring(r+1).trim(),!(!n||e[n]&&tw[n])&&(n==="set-cookie"?e[n]?e[n].push(s):e[n]=[s]:e[n]=e[n]?e[n]+", "+s:s)}),e},eu=Symbol("internals");function er(t){return t&&String(t).trim().toLowerCase()}function ai(t){return t===!1||t==null?t:P.isArray(t)?t.map(ai):String(t)}function sw(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let s;for(;s=n.exec(t);)e[s[1]]=s[2];return e}const rw=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function Uo(t,e,n,s,r){if(P.isFunction(s))return s.call(this,e,n);if(r&&(e=n),!!P.isString(e)){if(P.isString(s))return e.indexOf(s)!==-1;if(P.isRegExp(s))return s.test(e)}}function iw(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,n,s)=>n.toUpperCase()+s)}function ow(t,e){const n=P.toCamelCase(" "+e);["get","set","has"].forEach(s=>{Object.defineProperty(t,s+n,{value:function(r,o,a){return this[s].call(this,e,r,o,a)},configurable:!0})})}let ct=class{constructor(e){e&&this.set(e)}set(e,n,s){const r=this;function o(l,u,f){const d=er(u);if(!d)throw new Error("header name must be a non-empty string");const g=P.findKey(r,d);(!g||r[g]===void 0||f===!0||f===void 0&&r[g]!==!1)&&(r[g||u]=ai(l))}const a=(l,u)=>P.forEach(l,(f,d)=>o(f,d,u));if(P.isPlainObject(e)||e instanceof this.constructor)a(e,n);else if(P.isString(e)&&(e=e.trim())&&!rw(e))a(nw(e),n);else if(P.isObject(e)&&P.isIterable(e)){let l={},u,f;for(const d of e){if(!P.isArray(d))throw TypeError("Object iterator must return a key-value pair");l[f=d[0]]=(u=l[f])?P.isArray(u)?[...u,d[1]]:[u,d[1]]:d[1]}a(l,n)}else e!=null&&o(n,e,s);return this}get(e,n){if(e=er(e),e){const s=P.findKey(this,e);if(s){const r=this[s];if(!n)return r;if(n===!0)return sw(r);if(P.isFunction(n))return n.call(this,r,s);if(P.isRegExp(n))return n.exec(r);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,n){if(e=er(e),e){const s=P.findKey(this,e);return!!(s&&this[s]!==void 0&&(!n||Uo(this,this[s],s,n)))}return!1}delete(e,n){const s=this;let r=!1;function o(a){if(a=er(a),a){const l=P.findKey(s,a);l&&(!n||Uo(s,s[l],l,n))&&(delete s[l],r=!0)}}return P.isArray(e)?e.forEach(o):o(e),r}clear(e){const n=Object.keys(this);let s=n.length,r=!1;for(;s--;){const o=n[s];(!e||Uo(this,this[o],o,e,!0))&&(delete this[o],r=!0)}return r}normalize(e){const n=this,s={};return P.forEach(this,(r,o)=>{const a=P.findKey(s,o);if(a){n[a]=ai(r),delete n[o];return}const l=e?iw(o):String(o).trim();l!==o&&delete n[o],n[l]=ai(r),s[l]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const n=Object.create(null);return P.forEach(this,(s,r)=>{s!=null&&s!==!1&&(n[r]=e&&P.isArray(s)?s.join(", "):s)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,n])=>e+": "+n).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...n){const s=new this(e);return n.forEach(r=>s.set(r)),s}static accessor(e){const s=(this[eu]=this[eu]={accessors:{}}).accessors,r=this.prototype;function o(a){const l=er(a);s[l]||(ow(r,a),s[l]=!0)}return P.isArray(e)?e.forEach(o):o(e),this}};ct.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);P.reduceDescriptors(ct.prototype,({value:t},e)=>{let n=e[0].toUpperCase()+e.slice(1);return{get:()=>t,set(s){this[n]=s}}});P.freezeMethods(ct);function Fo(t,e){const n=this||xr,s=e||n,r=ct.from(s.headers);let o=s.data;return P.forEach(t,function(l){o=l.call(n,o,r.normalize(),e?e.status:void 0)}),r.normalize(),o}function Hf(t){return!!(t&&t.__CANCEL__)}function Ns(t,e,n){ie.call(this,t??"canceled",ie.ERR_CANCELED,e,n),this.name="CanceledError"}P.inherits(Ns,ie,{__CANCEL__:!0});function $f(t,e,n){const s=n.config.validateStatus;!n.status||!s||s(n.status)?t(n):e(new ie("Request failed with status code "+n.status,[ie.ERR_BAD_REQUEST,ie.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function aw(t){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}function cw(t,e){t=t||10;const n=new Array(t),s=new Array(t);let r=0,o=0,a;return e=e!==void 0?e:1e3,function(u){const f=Date.now(),d=s[o];a||(a=f),n[r]=u,s[r]=f;let g=o,y=0;for(;g!==r;)y+=n[g++],g=g%t;if(r=(r+1)%t,r===o&&(o=(o+1)%t),f-a<e)return;const C=d&&f-d;return C?Math.round(y*1e3/C):void 0}}function lw(t,e){let n=0,s=1e3/e,r,o;const a=(f,d=Date.now())=>{n=d,r=null,o&&(clearTimeout(o),o=null),t(...f)};return[(...f)=>{const d=Date.now(),g=d-n;g>=s?a(f,d):(r=f,o||(o=setTimeout(()=>{o=null,a(r)},s-g)))},()=>r&&a(r)]}const Ti=(t,e,n=3)=>{let s=0;const r=cw(50,250);return lw(o=>{const a=o.loaded,l=o.lengthComputable?o.total:void 0,u=a-s,f=r(u),d=a<=l;s=a;const g={loaded:a,total:l,progress:l?a/l:void 0,bytes:u,rate:f||void 0,estimated:f&&l&&d?(l-a)/f:void 0,event:o,lengthComputable:l!=null,[e?"download":"upload"]:!0};t(g)},n)},tu=(t,e)=>{const n=t!=null;return[s=>e[0]({lengthComputable:n,total:t,loaded:s}),e[1]]},nu=t=>(...e)=>P.asap(()=>t(...e)),uw=Xe.hasStandardBrowserEnv?((t,e)=>n=>(n=new URL(n,Xe.origin),t.protocol===n.protocol&&t.host===n.host&&(e||t.port===n.port)))(new URL(Xe.origin),Xe.navigator&&/(msie|trident)/i.test(Xe.navigator.userAgent)):()=>!0,hw=Xe.hasStandardBrowserEnv?{write(t,e,n,s,r,o,a){if(typeof document>"u")return;const l=[`${t}=${encodeURIComponent(e)}`];P.isNumber(n)&&l.push(`expires=${new Date(n).toUTCString()}`),P.isString(s)&&l.push(`path=${s}`),P.isString(r)&&l.push(`domain=${r}`),o===!0&&l.push("secure"),P.isString(a)&&l.push(`SameSite=${a}`),document.cookie=l.join("; ")},read(t){if(typeof document>"u")return null;const e=document.cookie.match(new RegExp("(?:^|; )"+t+"=([^;]*)"));return e?decodeURIComponent(e[1]):null},remove(t){this.write(t,"",Date.now()-864e5,"/")}}:{write(){},read(){return null},remove(){}};function fw(t){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function dw(t,e){return e?t.replace(/\/?\/$/,"")+"/"+e.replace(/^\/+/,""):t}function Wf(t,e,n){let s=!fw(e);return t&&(s||n==!1)?dw(t,e):e}const su=t=>t instanceof ct?{...t}:t;function Xn(t,e){e=e||{};const n={};function s(f,d,g,y){return P.isPlainObject(f)&&P.isPlainObject(d)?P.merge.call({caseless:y},f,d):P.isPlainObject(d)?P.merge({},d):P.isArray(d)?d.slice():d}function r(f,d,g,y){if(P.isUndefined(d)){if(!P.isUndefined(f))return s(void 0,f,g,y)}else return s(f,d,g,y)}function o(f,d){if(!P.isUndefined(d))return s(void 0,d)}function a(f,d){if(P.isUndefined(d)){if(!P.isUndefined(f))return s(void 0,f)}else return s(void 0,d)}function l(f,d,g){if(g in e)return s(f,d);if(g in t)return s(void 0,f)}const u={url:o,method:o,data:o,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,withXSRFToken:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,beforeRedirect:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:l,headers:(f,d,g)=>r(su(f),su(d),g,!0)};return P.forEach(Object.keys({...t,...e}),function(d){const g=u[d]||r,y=g(t[d],e[d],d);P.isUndefined(y)&&g!==l||(n[d]=y)}),n}const qf=t=>{const e=Xn({},t);let{data:n,withXSRFToken:s,xsrfHeaderName:r,xsrfCookieName:o,headers:a,auth:l}=e;if(e.headers=a=ct.from(a),e.url=jf(Wf(e.baseURL,e.url,e.allowAbsoluteUrls),t.params,t.paramsSerializer),l&&a.set("Authorization","Basic "+btoa((l.username||"")+":"+(l.password?unescape(encodeURIComponent(l.password)):""))),P.isFormData(n)){if(Xe.hasStandardBrowserEnv||Xe.hasStandardBrowserWebWorkerEnv)a.setContentType(void 0);else if(P.isFunction(n.getHeaders)){const u=n.getHeaders(),f=["content-type","content-length"];Object.entries(u).forEach(([d,g])=>{f.includes(d.toLowerCase())&&a.set(d,g)})}}if(Xe.hasStandardBrowserEnv&&(s&&P.isFunction(s)&&(s=s(e)),s||s!==!1&&uw(e.url))){const u=r&&o&&hw.read(o);u&&a.set(r,u)}return e},pw=typeof XMLHttpRequest<"u",gw=pw&&function(t){return new Promise(function(n,s){const r=qf(t);let o=r.data;const a=ct.from(r.headers).normalize();let{responseType:l,onUploadProgress:u,onDownloadProgress:f}=r,d,g,y,C,I;function x(){C&&C(),I&&I(),r.cancelToken&&r.cancelToken.unsubscribe(d),r.signal&&r.signal.removeEventListener("abort",d)}let N=new XMLHttpRequest;N.open(r.method.toUpperCase(),r.url,!0),N.timeout=r.timeout;function F(){if(!N)return;const G=ct.from("getAllResponseHeaders"in N&&N.getAllResponseHeaders()),te={data:!l||l==="text"||l==="json"?N.responseText:N.response,status:N.status,statusText:N.statusText,headers:G,config:t,request:N};$f(function(v){n(v),x()},function(v){s(v),x()},te),N=null}"onloadend"in N?N.onloadend=F:N.onreadystatechange=function(){!N||N.readyState!==4||N.status===0&&!(N.responseURL&&N.responseURL.indexOf("file:")===0)||setTimeout(F)},N.onabort=function(){N&&(s(new ie("Request aborted",ie.ECONNABORTED,t,N)),N=null)},N.onerror=function($){const te=$&&$.message?$.message:"Network Error",ae=new ie(te,ie.ERR_NETWORK,t,N);ae.event=$||null,s(ae),N=null},N.ontimeout=function(){let $=r.timeout?"timeout of "+r.timeout+"ms exceeded":"timeout exceeded";const te=r.transitional||Vf;r.timeoutErrorMessage&&($=r.timeoutErrorMessage),s(new ie($,te.clarifyTimeoutError?ie.ETIMEDOUT:ie.ECONNABORTED,t,N)),N=null},o===void 0&&a.setContentType(null),"setRequestHeader"in N&&P.forEach(a.toJSON(),function($,te){N.setRequestHeader(te,$)}),P.isUndefined(r.withCredentials)||(N.withCredentials=!!r.withCredentials),l&&l!=="json"&&(N.responseType=r.responseType),f&&([y,I]=Ti(f,!0),N.addEventListener("progress",y)),u&&N.upload&&([g,C]=Ti(u),N.upload.addEventListener("progress",g),N.upload.addEventListener("loadend",C)),(r.cancelToken||r.signal)&&(d=G=>{N&&(s(!G||G.type?new Ns(null,t,N):G),N.abort(),N=null)},r.cancelToken&&r.cancelToken.subscribe(d),r.signal&&(r.signal.aborted?d():r.signal.addEventListener("abort",d)));const H=aw(r.url);if(H&&Xe.protocols.indexOf(H)===-1){s(new ie("Unsupported protocol "+H+":",ie.ERR_BAD_REQUEST,t));return}N.send(o||null)})},mw=(t,e)=>{const{length:n}=t=t?t.filter(Boolean):[];if(e||n){let s=new AbortController,r;const o=function(f){if(!r){r=!0,l();const d=f instanceof Error?f:this.reason;s.abort(d instanceof ie?d:new Ns(d instanceof Error?d.message:d))}};let a=e&&setTimeout(()=>{a=null,o(new ie(`timeout ${e} of ms exceeded`,ie.ETIMEDOUT))},e);const l=()=>{t&&(a&&clearTimeout(a),a=null,t.forEach(f=>{f.unsubscribe?f.unsubscribe(o):f.removeEventListener("abort",o)}),t=null)};t.forEach(f=>f.addEventListener("abort",o));const{signal:u}=s;return u.unsubscribe=()=>P.asap(l),u}},yw=function*(t,e){let n=t.byteLength;if(n<e){yield t;return}let s=0,r;for(;s<n;)r=s+e,yield t.slice(s,r),s=r},_w=async function*(t,e){for await(const n of ww(t))yield*yw(n,e)},ww=async function*(t){if(t[Symbol.asyncIterator]){yield*t;return}const e=t.getReader();try{for(;;){const{done:n,value:s}=await e.read();if(n)break;yield s}}finally{await e.cancel()}},ru=(t,e,n,s)=>{const r=_w(t,e);let o=0,a,l=u=>{a||(a=!0,s&&s(u))};return new ReadableStream({async pull(u){try{const{done:f,value:d}=await r.next();if(f){l(),u.close();return}let g=d.byteLength;if(n){let y=o+=g;n(y)}u.enqueue(new Uint8Array(d))}catch(f){throw l(f),f}},cancel(u){return l(u),r.return()}},{highWaterMark:2})},iu=64*1024,{isFunction:Yr}=P,Ew=(({Request:t,Response:e})=>({Request:t,Response:e}))(P.global),{ReadableStream:ou,TextEncoder:au}=P.global,cu=(t,...e)=>{try{return!!t(...e)}catch{return!1}},vw=t=>{t=P.merge.call({skipUndefined:!0},Ew,t);const{fetch:e,Request:n,Response:s}=t,r=e?Yr(e):typeof fetch=="function",o=Yr(n),a=Yr(s);if(!r)return!1;const l=r&&Yr(ou),u=r&&(typeof au=="function"?(I=>x=>I.encode(x))(new au):async I=>new Uint8Array(await new n(I).arrayBuffer())),f=o&&l&&cu(()=>{let I=!1;const x=new n(Xe.origin,{body:new ou,method:"POST",get duplex(){return I=!0,"half"}}).headers.has("Content-Type");return I&&!x}),d=a&&l&&cu(()=>P.isReadableStream(new s("").body)),g={stream:d&&(I=>I.body)};r&&["text","arrayBuffer","blob","formData","stream"].forEach(I=>{!g[I]&&(g[I]=(x,N)=>{let F=x&&x[I];if(F)return F.call(x);throw new ie(`Response type '${I}' is not supported`,ie.ERR_NOT_SUPPORT,N)})});const y=async I=>{if(I==null)return 0;if(P.isBlob(I))return I.size;if(P.isSpecCompliantForm(I))return(await new n(Xe.origin,{method:"POST",body:I}).arrayBuffer()).byteLength;if(P.isArrayBufferView(I)||P.isArrayBuffer(I))return I.byteLength;if(P.isURLSearchParams(I)&&(I=I+""),P.isString(I))return(await u(I)).byteLength},C=async(I,x)=>{const N=P.toFiniteNumber(I.getContentLength());return N??y(x)};return async I=>{let{url:x,method:N,data:F,signal:H,cancelToken:G,timeout:$,onDownloadProgress:te,onUploadProgress:ae,responseType:v,headers:_,withCredentials:E="same-origin",fetchOptions:T}=qf(I),S=e||fetch;v=v?(v+"").toLowerCase():"text";let A=mw([H,G&&G.toAbortSignal()],$),w=null;const ye=A&&A.unsubscribe&&(()=>{A.unsubscribe()});let qe;try{if(ae&&f&&N!=="get"&&N!=="head"&&(qe=await C(_,F))!==0){let ke=new n(x,{method:"POST",body:F,duplex:"half"}),Oe;if(P.isFormData(F)&&(Oe=ke.headers.get("content-type"))&&_.setContentType(Oe),ke.body){const[lt,rt]=tu(qe,Ti(nu(ae)));F=ru(ke.body,iu,lt,rt)}}P.isString(E)||(E=E?"include":"omit");const he=o&&"credentials"in n.prototype,de={...T,signal:A,method:N.toUpperCase(),headers:_.normalize().toJSON(),body:F,duplex:"half",credentials:he?E:void 0};w=o&&new n(x,de);let re=await(o?S(w,T):S(x,de));const Ue=d&&(v==="stream"||v==="response");if(d&&(te||Ue&&ye)){const ke={};["status","statusText","headers"].forEach(D=>{ke[D]=re[D]});const Oe=P.toFiniteNumber(re.headers.get("content-length")),[lt,rt]=te&&tu(Oe,Ti(nu(te),!0))||[];re=new s(ru(re.body,iu,lt,()=>{rt&&rt(),ye&&ye()}),ke)}v=v||"text";let bt=await g[P.findKey(g,v)||"text"](re,I);return!Ue&&ye&&ye(),await new Promise((ke,Oe)=>{$f(ke,Oe,{data:bt,headers:ct.from(re.headers),status:re.status,statusText:re.statusText,config:I,request:w})})}catch(he){throw ye&&ye(),he&&he.name==="TypeError"&&/Load failed|fetch/i.test(he.message)?Object.assign(new ie("Network Error",ie.ERR_NETWORK,I,w),{cause:he.cause||he}):ie.from(he,he&&he.code,I,w)}}},bw=new Map,zf=t=>{let e=t&&t.env||{};const{fetch:n,Request:s,Response:r}=e,o=[s,r,n];let a=o.length,l=a,u,f,d=bw;for(;l--;)u=o[l],f=d.get(u),f===void 0&&d.set(u,f=l?new Map:vw(e)),d=f;return f};zf();const Qa={http:j_,xhr:gw,fetch:{get:zf}};P.forEach(Qa,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch{}Object.defineProperty(t,"adapterName",{value:e})}});const lu=t=>`- ${t}`,Sw=t=>P.isFunction(t)||t===null||t===!1;function Tw(t,e){t=P.isArray(t)?t:[t];const{length:n}=t;let s,r;const o={};for(let a=0;a<n;a++){s=t[a];let l;if(r=s,!Sw(s)&&(r=Qa[(l=String(s)).toLowerCase()],r===void 0))throw new ie(`Unknown adapter '${l}'`);if(r&&(P.isFunction(r)||(r=r.get(e))))break;o[l||"#"+a]=r}if(!r){const a=Object.entries(o).map(([u,f])=>`adapter ${u} `+(f===!1?"is not supported by the environment":"is not available in the build"));let l=n?a.length>1?`since :
`+a.map(lu).join(`
`):" "+lu(a[0]):"as no adapter specified";throw new ie("There is no suitable adapter to dispatch the request "+l,"ERR_NOT_SUPPORT")}return r}const Kf={getAdapter:Tw,adapters:Qa};function jo(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new Ns(null,t)}function uu(t){return jo(t),t.headers=ct.from(t.headers),t.data=Fo.call(t,t.transformRequest),["post","put","patch"].indexOf(t.method)!==-1&&t.headers.setContentType("application/x-www-form-urlencoded",!1),Kf.getAdapter(t.adapter||xr.adapter,t)(t).then(function(s){return jo(t),s.data=Fo.call(t,t.transformResponse,s),s.headers=ct.from(s.headers),s},function(s){return Hf(s)||(jo(t),s&&s.response&&(s.response.data=Fo.call(t,t.transformResponse,s.response),s.response.headers=ct.from(s.response.headers))),Promise.reject(s)})}const Gf="1.13.2",Zi={};["object","boolean","number","function","string","symbol"].forEach((t,e)=>{Zi[t]=function(s){return typeof s===t||"a"+(e<1?"n ":" ")+t}});const hu={};Zi.transitional=function(e,n,s){function r(o,a){return"[Axios v"+Gf+"] Transitional option '"+o+"'"+a+(s?". "+s:"")}return(o,a,l)=>{if(e===!1)throw new ie(r(a," has been removed"+(n?" in "+n:"")),ie.ERR_DEPRECATED);return n&&!hu[a]&&(hu[a]=!0,console.warn(r(a," has been deprecated since v"+n+" and will be removed in the near future"))),e?e(o,a,l):!0}};Zi.spelling=function(e){return(n,s)=>(console.warn(`${s} is likely a misspelling of ${e}`),!0)};function Iw(t,e,n){if(typeof t!="object")throw new ie("options must be an object",ie.ERR_BAD_OPTION_VALUE);const s=Object.keys(t);let r=s.length;for(;r-- >0;){const o=s[r],a=e[o];if(a){const l=t[o],u=l===void 0||a(l,o,t);if(u!==!0)throw new ie("option "+o+" must be "+u,ie.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new ie("Unknown option "+o,ie.ERR_BAD_OPTION)}}const ci={assertOptions:Iw,validators:Zi},Mt=ci.validators;let Kn=class{constructor(e){this.defaults=e||{},this.interceptors={request:new Zl,response:new Zl}}async request(e,n){try{return await this._request(e,n)}catch(s){if(s instanceof Error){let r={};Error.captureStackTrace?Error.captureStackTrace(r):r=new Error;const o=r.stack?r.stack.replace(/^.+\n/,""):"";try{s.stack?o&&!String(s.stack).endsWith(o.replace(/^.+\n.+\n/,""))&&(s.stack+=`
`+o):s.stack=o}catch{}}throw s}}_request(e,n){typeof e=="string"?(n=n||{},n.url=e):n=e||{},n=Xn(this.defaults,n);const{transitional:s,paramsSerializer:r,headers:o}=n;s!==void 0&&ci.assertOptions(s,{silentJSONParsing:Mt.transitional(Mt.boolean),forcedJSONParsing:Mt.transitional(Mt.boolean),clarifyTimeoutError:Mt.transitional(Mt.boolean)},!1),r!=null&&(P.isFunction(r)?n.paramsSerializer={serialize:r}:ci.assertOptions(r,{encode:Mt.function,serialize:Mt.function},!0)),n.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?n.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:n.allowAbsoluteUrls=!0),ci.assertOptions(n,{baseUrl:Mt.spelling("baseURL"),withXsrfToken:Mt.spelling("withXSRFToken")},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let a=o&&P.merge(o.common,o[n.method]);o&&P.forEach(["delete","get","head","post","put","patch","common"],I=>{delete o[I]}),n.headers=ct.concat(a,o);const l=[];let u=!0;this.interceptors.request.forEach(function(x){typeof x.runWhen=="function"&&x.runWhen(n)===!1||(u=u&&x.synchronous,l.unshift(x.fulfilled,x.rejected))});const f=[];this.interceptors.response.forEach(function(x){f.push(x.fulfilled,x.rejected)});let d,g=0,y;if(!u){const I=[uu.bind(this),void 0];for(I.unshift(...l),I.push(...f),y=I.length,d=Promise.resolve(n);g<y;)d=d.then(I[g++],I[g++]);return d}y=l.length;let C=n;for(;g<y;){const I=l[g++],x=l[g++];try{C=I(C)}catch(N){x.call(this,N);break}}try{d=uu.call(this,C)}catch(I){return Promise.reject(I)}for(g=0,y=f.length;g<y;)d=d.then(f[g++],f[g++]);return d}getUri(e){e=Xn(this.defaults,e);const n=Wf(e.baseURL,e.url,e.allowAbsoluteUrls);return jf(n,e.params,e.paramsSerializer)}};P.forEach(["delete","get","head","options"],function(e){Kn.prototype[e]=function(n,s){return this.request(Xn(s||{},{method:e,url:n,data:(s||{}).data}))}});P.forEach(["post","put","patch"],function(e){function n(s){return function(o,a,l){return this.request(Xn(l||{},{method:e,headers:s?{"Content-Type":"multipart/form-data"}:{},url:o,data:a}))}}Kn.prototype[e]=n(),Kn.prototype[e+"Form"]=n(!0)});let Aw=class Jf{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(o){n=o});const s=this;this.promise.then(r=>{if(!s._listeners)return;let o=s._listeners.length;for(;o-- >0;)s._listeners[o](r);s._listeners=null}),this.promise.then=r=>{let o;const a=new Promise(l=>{s.subscribe(l),o=l}).then(r);return a.cancel=function(){s.unsubscribe(o)},a},e(function(o,a,l){s.reason||(s.reason=new Ns(o,a,l),n(s.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const n=this._listeners.indexOf(e);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const e=new AbortController,n=s=>{e.abort(s)};return this.subscribe(n),e.signal.unsubscribe=()=>this.unsubscribe(n),e.signal}static source(){let e;return{token:new Jf(function(r){e=r}),cancel:e}}};function Rw(t){return function(n){return t.apply(null,n)}}function Cw(t){return P.isObject(t)&&t.isAxiosError===!0}const ma={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(ma).forEach(([t,e])=>{ma[e]=t});function Xf(t){const e=new Kn(t),n=Rf(Kn.prototype.request,e);return P.extend(n,Kn.prototype,e,{allOwnKeys:!0}),P.extend(n,e,null,{allOwnKeys:!0}),n.create=function(r){return Xf(Xn(t,r))},n}const De=Xf(xr);De.Axios=Kn;De.CanceledError=Ns;De.CancelToken=Aw;De.isCancel=Hf;De.VERSION=Gf;De.toFormData=Qi;De.AxiosError=ie;De.Cancel=De.CanceledError;De.all=function(e){return Promise.all(e)};De.spread=Rw;De.isAxiosError=Cw;De.mergeConfig=Xn;De.AxiosHeaders=ct;De.formToJSON=t=>Bf(P.isHTMLForm(t)?new FormData(t):t);De.getAdapter=Kf.getAdapter;De.HttpStatusCode=ma;De.default=De;const{Axios:N0,AxiosError:x0,CanceledError:D0,isCancel:L0,CancelToken:M0,VERSION:U0,all:F0,Cancel:j0,isAxiosError:V0,spread:B0,toFormData:H0,AxiosHeaders:$0,HttpStatusCode:W0,formToJSON:q0,getAdapter:z0,mergeConfig:K0}=De,Vo=De.create({baseURL:"https://node-app-2-a7jo.onrender.com/"}),Bo=ot([]),Ho=ot(!1),fu=ot(null);function eo(){return{instance:Vo,employees:Bo,loading:Ho,getEmployees:async()=>{if(Ho.value=!0,Bo.value.length===0){const n=await Vo.get("api/employee/fetch");Bo.value=n.data}Ho.value=!1},currentEmployee:fu,fetchEmployee:async n=>{const s=await Vo.get(`api/employee/fetch/${n}`);fu.value=s.data}}}const Pw={class:"grid grid-cols-5 gap-10 p-10"},Ow={__name:"MainCards",setup(t){const{employees:e}=eo();return(n,s)=>(Be(),nt("div",Pw,[(Be(!0),nt(_t,null,Wh(Ve(e),r=>(Be(),qa(Zy,{key:r._id,employee:r},null,8,["employee"]))),128))]))}},kw={class:"flex justify-center gap-4 p-4"},Nw=["disable"],xw=["disabled"],Dw={__name:"MainPagination",setup(t){const e=ot(10),n=ot(2),s=()=>{n.value>1&&n.value--,console.log(n.value)},r=()=>{n.value<e.value&&n.value++,console.log(n.value)};return(o,a)=>(Be(),nt("div",kw,[Se("button",{onClick:s,disable:n.value===1,class:"rounded-md bg-slate-100 p-2 font-medium text-slate-700 shadow-md"},"PREV",8,Nw),(Be(!0),nt(_t,null,Wh(e.value,l=>(Be(),nt("button",{key:l,class:Vi(["rounded-md bg-slate-100 p-2 font-medium text-slate-700 shadow-md",l===n.value?"bg-yellow-700 text-slate-100":""])},wt(l),3))),128)),Se("button",{onClick:r,disabled:n.value===e.value,class:"rounded-md bg-slate-100 p-2 font-medium text-slate-700 shadow-md"},"NEXT",8,xw)]))}},Lw={key:0},Mw={key:1},Uw={__name:"HomePage",setup(t){const{getEmployees:e,loading:n}=eo();return Va(async()=>{await e()}),(s,r)=>Ve(n)?(Be(),nt("p",Lw,"Loading...")):(Be(),nt("div",Mw,[xe(Ow),xe(Dw)]))}},Fw={key:0,class:"flex flex-col items-center justify-center gap-6"},jw={class:"text-6xl font-bold p-5"},Vw={class:"text-3xl p-5"},Bw={class:"text-2xl p-5"},Hw={class:"text-2xl p-5"},$w={__name:"CardDetails",setup(t){const{fetchEmployee:e,currentEmployee:n}=eo();Va(async()=>{await e(s.params.id)}),Ba(()=>{n.value=null});const s=Af();return(r,o)=>(Be(),nt("main",null,[Ve(n)?(Be(),nt("div",Fw,[Se("h1",jw,wt(Ve(n).firstName)+" "+wt(Ve(n).lastName),1),Se("h1",Vw,wt(Ve(n).title),1),Se("h1",Bw,wt(Ve(n).userName),1),Se("h1",Hw,wt(Ve(n).quote),1),o[0]||(o[0]=Se("img",{class:"p-8",src:"https://picsum.photos/seed//960/480"},null,-1))])):em("",!0)]))}},Ww=()=>{};var du={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yf=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},qw=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const o=t[n++];e[s++]=String.fromCharCode((r&31)<<6|o&63)}else if(r>239&&r<365){const o=t[n++],a=t[n++],l=t[n++],u=((r&7)<<18|(o&63)<<12|(a&63)<<6|l&63)-65536;e[s++]=String.fromCharCode(55296+(u>>10)),e[s++]=String.fromCharCode(56320+(u&1023))}else{const o=t[n++],a=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(o&63)<<6|a&63)}}return e.join("")},Qf={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const o=t[r],a=r+1<t.length,l=a?t[r+1]:0,u=r+2<t.length,f=u?t[r+2]:0,d=o>>2,g=(o&3)<<4|l>>4;let y=(l&15)<<2|f>>6,C=f&63;u||(C=64,a||(y=64)),s.push(n[d],n[g],n[y],n[C])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Yf(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):qw(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const o=n[t.charAt(r++)],l=r<t.length?n[t.charAt(r)]:0;++r;const f=r<t.length?n[t.charAt(r)]:64;++r;const g=r<t.length?n[t.charAt(r)]:64;if(++r,o==null||l==null||f==null||g==null)throw new zw;const y=o<<2|l>>4;if(s.push(y),f!==64){const C=l<<4&240|f>>2;if(s.push(C),g!==64){const I=f<<6&192|g;s.push(I)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class zw extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Kw=function(t){const e=Yf(t);return Qf.encodeByteArray(e,!0)},Zf=function(t){return Kw(t).replace(/\./g,"")},ed=function(t){try{return Qf.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gw(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jw=()=>Gw().__FIREBASE_DEFAULTS__,Xw=()=>{if(typeof process>"u"||typeof du>"u")return;const t=du.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Yw=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&ed(t[1]);return e&&JSON.parse(e)},Za=()=>{try{return Ww()||Jw()||Xw()||Yw()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Qw=t=>Za()?.emulatorHosts?.[t],td=()=>Za()?.config,nd=t=>Za()?.[`_${t}`];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zw{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function to(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function eE(t){return(await fetch(t,{credentials:"include"})).ok}const dr={};function tE(){const t={prod:[],emulator:[]};for(const e of Object.keys(dr))dr[e]?t.emulator.push(e):t.prod.push(e);return t}function nE(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let pu=!1;function sE(t,e){if(typeof window>"u"||typeof document>"u"||!to(window.location.host)||dr[t]===e||dr[t]||pu)return;dr[t]=e;function n(y){return`__firebase__banner__${y}`}const s="__firebase__banner",o=tE().prod.length>0;function a(){const y=document.getElementById(s);y&&y.remove()}function l(y){y.style.display="flex",y.style.background="#7faaf0",y.style.position="fixed",y.style.bottom="5px",y.style.left="5px",y.style.padding=".5em",y.style.borderRadius="5px",y.style.alignItems="center"}function u(y,C){y.setAttribute("width","24"),y.setAttribute("id",C),y.setAttribute("height","24"),y.setAttribute("viewBox","0 0 24 24"),y.setAttribute("fill","none"),y.style.marginLeft="-6px"}function f(){const y=document.createElement("span");return y.style.cursor="pointer",y.style.marginLeft="16px",y.style.fontSize="24px",y.innerHTML=" &times;",y.onclick=()=>{pu=!0,a()},y}function d(y,C){y.setAttribute("id",C),y.innerText="Learn more",y.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",y.setAttribute("target","__blank"),y.style.paddingLeft="5px",y.style.textDecoration="underline"}function g(){const y=nE(s),C=n("text"),I=document.getElementById(C)||document.createElement("span"),x=n("learnmore"),N=document.getElementById(x)||document.createElement("a"),F=n("preprendIcon"),H=document.getElementById(F)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(y.created){const G=y.element;l(G),d(N,x);const $=f();u(H,F),G.append(H,I,N,$),document.body.appendChild(G)}o?(I.innerText="Preview backend disconnected.",H.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(H.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,I.innerText="Preview backend running in this workspace."),I.setAttribute("id",C)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",g):g()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function st(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function rE(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(st())}function iE(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function oE(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function aE(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function cE(){const t=st();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function lE(){try{return typeof indexedDB=="object"}catch{return!1}}function uE(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{e(r.error?.message||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hE="FirebaseError";class on extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=hE,Object.setPrototypeOf(this,on.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Dr.prototype.create)}}class Dr{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,o=this.errors[e],a=o?fE(o,s):"Error",l=`${this.serviceName}: ${a} (${r}).`;return new on(r,l,s)}}function fE(t,e){return t.replace(dE,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const dE=/\{\$([^}]+)}/g;function pE(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Cs(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const o=t[r],a=e[r];if(gu(o)&&gu(a)){if(!Cs(o,a))return!1}else if(o!==a)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function gu(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lr(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function nr(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[r,o]=s.split("=");e[decodeURIComponent(r)]=decodeURIComponent(o)}}),e}function sr(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function gE(t,e){const n=new mE(t,e);return n.subscribe.bind(n)}class mE{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let r;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");yE(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:s},r.next===void 0&&(r.next=$o),r.error===void 0&&(r.error=$o),r.complete===void 0&&(r.complete=$o);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),o}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function yE(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function $o(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kn(t){return t&&t._delegate?t._delegate:t}class Yn{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _E{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Zw;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e?.identifier),s=e?.optional??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(EE(e))try{this.getOrInitializeService({instanceIdentifier:Vn})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:r});s.resolve(o)}catch{}}}}clearInstance(e=Vn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Vn){return this.instances.has(e)}getOptions(e=Vn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[o,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(o);s===l&&a.resolve(r)}return r}onInit(e,n){const s=this.normalizeInstanceIdentifier(n),r=this.onInitCallbacks.get(s)??new Set;r.add(e),this.onInitCallbacks.set(s,r);const o=this.instances.get(s);return o&&e(o,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:wE(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Vn){return this.component?this.component.multipleInstances?e:Vn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function wE(t){return t===Vn?void 0:t}function EE(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vE{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new _E(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var be;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(be||(be={}));const bE={debug:be.DEBUG,verbose:be.VERBOSE,info:be.INFO,warn:be.WARN,error:be.ERROR,silent:be.SILENT},SE=be.INFO,TE={[be.DEBUG]:"log",[be.VERBOSE]:"log",[be.INFO]:"info",[be.WARN]:"warn",[be.ERROR]:"error"},IE=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=TE[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ec{constructor(e){this.name=e,this._logLevel=SE,this._logHandler=IE,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in be))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?bE[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,be.DEBUG,...e),this._logHandler(this,be.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,be.VERBOSE,...e),this._logHandler(this,be.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,be.INFO,...e),this._logHandler(this,be.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,be.WARN,...e),this._logHandler(this,be.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,be.ERROR,...e),this._logHandler(this,be.ERROR,...e)}}const AE=(t,e)=>e.some(n=>t instanceof n);let mu,yu;function RE(){return mu||(mu=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function CE(){return yu||(yu=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const sd=new WeakMap,ya=new WeakMap,rd=new WeakMap,Wo=new WeakMap,tc=new WeakMap;function PE(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",o),t.removeEventListener("error",a)},o=()=>{n(Sn(t.result)),r()},a=()=>{s(t.error),r()};t.addEventListener("success",o),t.addEventListener("error",a)});return e.then(n=>{n instanceof IDBCursor&&sd.set(n,t)}).catch(()=>{}),tc.set(e,t),e}function OE(t){if(ya.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",o),t.removeEventListener("error",a),t.removeEventListener("abort",a)},o=()=>{n(),r()},a=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",o),t.addEventListener("error",a),t.addEventListener("abort",a)});ya.set(t,e)}let _a={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ya.get(t);if(e==="objectStoreNames")return t.objectStoreNames||rd.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Sn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function kE(t){_a=t(_a)}function NE(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(qo(this),e,...n);return rd.set(s,e.sort?e.sort():[e]),Sn(s)}:CE().includes(t)?function(...e){return t.apply(qo(this),e),Sn(sd.get(this))}:function(...e){return Sn(t.apply(qo(this),e))}}function xE(t){return typeof t=="function"?NE(t):(t instanceof IDBTransaction&&OE(t),AE(t,RE())?new Proxy(t,_a):t)}function Sn(t){if(t instanceof IDBRequest)return PE(t);if(Wo.has(t))return Wo.get(t);const e=xE(t);return e!==t&&(Wo.set(t,e),tc.set(e,t)),e}const qo=t=>tc.get(t);function DE(t,e,{blocked:n,upgrade:s,blocking:r,terminated:o}={}){const a=indexedDB.open(t,e),l=Sn(a);return s&&a.addEventListener("upgradeneeded",u=>{s(Sn(a.result),u.oldVersion,u.newVersion,Sn(a.transaction),u)}),n&&a.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{o&&u.addEventListener("close",()=>o()),r&&u.addEventListener("versionchange",f=>r(f.oldVersion,f.newVersion,f))}).catch(()=>{}),l}const LE=["get","getKey","getAll","getAllKeys","count"],ME=["put","add","delete","clear"],zo=new Map;function _u(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(zo.get(e))return zo.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=ME.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||LE.includes(n)))return;const o=async function(a,...l){const u=this.transaction(a,r?"readwrite":"readonly");let f=u.store;return s&&(f=f.index(l.shift())),(await Promise.all([f[n](...l),r&&u.done]))[0]};return zo.set(e,o),o}kE(t=>({...t,get:(e,n,s)=>_u(e,n)||t.get(e,n,s),has:(e,n)=>!!_u(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UE{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(FE(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function FE(t){return t.getComponent()?.type==="VERSION"}const wa="@firebase/app",wu="0.14.3";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nn=new ec("@firebase/app"),jE="@firebase/app-compat",VE="@firebase/analytics-compat",BE="@firebase/analytics",HE="@firebase/app-check-compat",$E="@firebase/app-check",WE="@firebase/auth",qE="@firebase/auth-compat",zE="@firebase/database",KE="@firebase/data-connect",GE="@firebase/database-compat",JE="@firebase/functions",XE="@firebase/functions-compat",YE="@firebase/installations",QE="@firebase/installations-compat",ZE="@firebase/messaging",ev="@firebase/messaging-compat",tv="@firebase/performance",nv="@firebase/performance-compat",sv="@firebase/remote-config",rv="@firebase/remote-config-compat",iv="@firebase/storage",ov="@firebase/storage-compat",av="@firebase/firestore",cv="@firebase/ai",lv="@firebase/firestore-compat",uv="firebase",hv="12.3.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ea="[DEFAULT]",fv={[wa]:"fire-core",[jE]:"fire-core-compat",[BE]:"fire-analytics",[VE]:"fire-analytics-compat",[$E]:"fire-app-check",[HE]:"fire-app-check-compat",[WE]:"fire-auth",[qE]:"fire-auth-compat",[zE]:"fire-rtdb",[KE]:"fire-data-connect",[GE]:"fire-rtdb-compat",[JE]:"fire-fn",[XE]:"fire-fn-compat",[YE]:"fire-iid",[QE]:"fire-iid-compat",[ZE]:"fire-fcm",[ev]:"fire-fcm-compat",[tv]:"fire-perf",[nv]:"fire-perf-compat",[sv]:"fire-rc",[rv]:"fire-rc-compat",[iv]:"fire-gcs",[ov]:"fire-gcs-compat",[av]:"fire-fst",[lv]:"fire-fst-compat",[cv]:"fire-vertex","fire-js":"fire-js",[uv]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ii=new Map,dv=new Map,va=new Map;function Eu(t,e){try{t.container.addComponent(e)}catch(n){nn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ps(t){const e=t.name;if(va.has(e))return nn.debug(`There were multiple attempts to register component ${e}.`),!1;va.set(e,t);for(const n of Ii.values())Eu(n,t);for(const n of dv.values())Eu(n,t);return!0}function id(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function It(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pv={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Tn=new Dr("app","Firebase",pv);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gv{constructor(e,n,s){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Yn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Tn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xs=hv;function od(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s={name:Ea,automaticDataCollectionEnabled:!0,...e},r=s.name;if(typeof r!="string"||!r)throw Tn.create("bad-app-name",{appName:String(r)});if(n||(n=td()),!n)throw Tn.create("no-options");const o=Ii.get(r);if(o){if(Cs(n,o.options)&&Cs(s,o.config))return o;throw Tn.create("duplicate-app",{appName:r})}const a=new vE(r);for(const u of va.values())a.addComponent(u);const l=new gv(n,s,a);return Ii.set(r,l),l}function mv(t=Ea){const e=Ii.get(t);if(!e&&t===Ea&&td())return od();if(!e)throw Tn.create("no-app",{appName:t});return e}function In(t,e,n){let s=fv[t]??t;n&&(s+=`-${n}`);const r=s.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${s}" with version "${e}":`];r&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),nn.warn(a.join(" "));return}Ps(new Yn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yv="firebase-heartbeat-database",_v=1,Tr="firebase-heartbeat-store";let Ko=null;function ad(){return Ko||(Ko=DE(yv,_v,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Tr)}catch(n){console.warn(n)}}}}).catch(t=>{throw Tn.create("idb-open",{originalErrorMessage:t.message})})),Ko}async function wv(t){try{const n=(await ad()).transaction(Tr),s=await n.objectStore(Tr).get(cd(t));return await n.done,s}catch(e){if(e instanceof on)nn.warn(e.message);else{const n=Tn.create("idb-get",{originalErrorMessage:e?.message});nn.warn(n.message)}}}async function vu(t,e){try{const s=(await ad()).transaction(Tr,"readwrite");await s.objectStore(Tr).put(e,cd(t)),await s.done}catch(n){if(n instanceof on)nn.warn(n.message);else{const s=Tn.create("idb-set",{originalErrorMessage:n?.message});nn.warn(s.message)}}}function cd(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ev=1024,vv=30;class bv{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Tv(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){try{const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=bu();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats.length>vv){const r=Iv(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(r,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){nn.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=bu(),{heartbeatsToSend:n,unsentEntries:s}=Sv(this._heartbeatsCache.heartbeats),r=Zf(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(e){return nn.warn(e),""}}}function bu(){return new Date().toISOString().substring(0,10)}function Sv(t,e=Ev){const n=[];let s=t.slice();for(const r of t){const o=n.find(a=>a.agent===r.agent);if(o){if(o.dates.push(r.date),Su(n)>e){o.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Su(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Tv{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return lE()?uE().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await wv(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return vu(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return vu(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Su(t){return Zf(JSON.stringify({version:2,heartbeats:t})).length}function Iv(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let s=1;s<t.length;s++)t[s].date<n&&(n=t[s].date,e=s);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Av(t){Ps(new Yn("platform-logger",e=>new UE(e),"PRIVATE")),Ps(new Yn("heartbeat",e=>new bv(e),"PRIVATE")),In(wa,wu,t),In(wa,wu,"esm2020"),In("fire-js","")}Av("");var Rv="firebase",Cv="12.3.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */In(Rv,Cv,"app");const Pv={apiKey:"AIzaSyCrwLAGBVQWex8CgnvcuH0WsMunqhe61kY",authDomain:"homework5-52829.firebaseapp.com",projectId:"homework5-52829",storageBucket:"homework5-52829.firebasestorage.app",messagingSenderId:"79475288081",appId:"1:79475288081:web:a96fabf74cc51140fc29b0"},Ov=od(Pv);function ld(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const kv=ld,ud=new Dr("auth","Firebase",ld());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ai=new ec("@firebase/auth");function Nv(t,...e){Ai.logLevel<=be.WARN&&Ai.warn(`Auth (${xs}): ${t}`,...e)}function li(t,...e){Ai.logLevel<=be.ERROR&&Ai.error(`Auth (${xs}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kt(t,...e){throw nc(t,...e)}function $t(t,...e){return nc(t,...e)}function hd(t,e,n){const s={...kv(),[e]:n};return new Dr("auth","Firebase",s).create(e,{appName:t.name})}function An(t){return hd(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function nc(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return ud.create(t,...e)}function ee(t,e,...n){if(!t)throw nc(e,...n)}function Qt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw li(e),new Error(e)}function sn(t,e){t||Qt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ba(){return typeof self<"u"&&self.location?.href||""}function xv(){return Tu()==="http:"||Tu()==="https:"}function Tu(){return typeof self<"u"&&self.location?.protocol||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dv(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(xv()||oE()||"connection"in navigator)?navigator.onLine:!0}function Lv(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr{constructor(e,n){this.shortDelay=e,this.longDelay=n,sn(n>e,"Short delay should be less than long delay!"),this.isMobile=rE()||aE()}get(){return Dv()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sc(t,e){sn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fd{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Qt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Qt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Qt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mv={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uv=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Fv=new Mr(3e4,6e4);function ts(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function Nn(t,e,n,s,r={}){return dd(t,r,async()=>{let o={},a={};s&&(e==="GET"?a=s:o={body:JSON.stringify(s)});const l=Lr({key:t.config.apiKey,...a}).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const f={method:e,headers:u,...o};return iE()||(f.referrerPolicy="no-referrer"),t.emulatorConfig&&to(t.emulatorConfig.host)&&(f.credentials="include"),fd.fetch()(await pd(t,t.config.apiHost,n,l),f)})}async function dd(t,e,n){t._canInitEmulator=!1;const s={...Mv,...e};try{const r=new Vv(t),o=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const a=await o.json();if("needConfirmation"in a)throw Qr(t,"account-exists-with-different-credential",a);if(o.ok&&!("errorMessage"in a))return a;{const l=o.ok?a.errorMessage:a.error.message,[u,f]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Qr(t,"credential-already-in-use",a);if(u==="EMAIL_EXISTS")throw Qr(t,"email-already-in-use",a);if(u==="USER_DISABLED")throw Qr(t,"user-disabled",a);const d=s[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(f)throw hd(t,d,f);kt(t,d)}}catch(r){if(r instanceof on)throw r;kt(t,"network-request-failed",{message:String(r)})}}async function no(t,e,n,s,r={}){const o=await Nn(t,e,n,s,r);return"mfaPendingCredential"in o&&kt(t,"multi-factor-auth-required",{_serverResponse:o}),o}async function pd(t,e,n,s){const r=`${e}${n}?${s}`,o=t,a=o.config.emulator?sc(t.config,r):`${t.config.apiScheme}://${r}`;return Uv.includes(n)&&(await o._persistenceManagerAvailable,o._getPersistenceType()==="COOKIE")?o._getPersistence()._getFinalTarget(a).toString():a}function jv(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Vv{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s($t(this.auth,"network-request-failed")),Fv.get())})}}function Qr(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=$t(t,e,s);return r.customData._tokenResponse=n,r}function Iu(t){return t!==void 0&&t.enterprise!==void 0}class Bv{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return jv(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Hv(t,e){return Nn(t,"GET","/v2/recaptchaConfig",ts(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $v(t,e){return Nn(t,"POST","/v1/accounts:delete",e)}async function Ri(t,e){return Nn(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pr(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Wv(t,e=!1){const n=kn(t),s=await n.getIdToken(e),r=rc(s);ee(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const o=typeof r.firebase=="object"?r.firebase:void 0,a=o?.sign_in_provider;return{claims:r,token:s,authTime:pr(Go(r.auth_time)),issuedAtTime:pr(Go(r.iat)),expirationTime:pr(Go(r.exp)),signInProvider:a||null,signInSecondFactor:o?.sign_in_second_factor||null}}function Go(t){return Number(t)*1e3}function rc(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return li("JWT malformed, contained fewer than 3 sections"),null;try{const r=ed(n);return r?JSON.parse(r):(li("Failed to decode base64 JWT payload"),null)}catch(r){return li("Caught error parsing JWT payload as JSON",r?.toString()),null}}function Au(t){const e=rc(t);return ee(e,"internal-error"),ee(typeof e.exp<"u","internal-error"),ee(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ir(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof on&&qv(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function qv({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zv{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sa{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=pr(this.lastLoginAt),this.creationTime=pr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ci(t){const e=t.auth,n=await t.getIdToken(),s=await Ir(t,Ri(e,{idToken:n}));ee(s?.users.length,e,"internal-error");const r=s.users[0];t._notifyReloadListener(r);const o=r.providerUserInfo?.length?gd(r.providerUserInfo):[],a=Gv(t.providerData,o),l=t.isAnonymous,u=!(t.email&&r.passwordHash)&&!a?.length,f=l?u:!1,d={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new Sa(r.createdAt,r.lastLoginAt),isAnonymous:f};Object.assign(t,d)}async function Kv(t){const e=kn(t);await Ci(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Gv(t,e){return[...t.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function gd(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jv(t,e){const n=await dd(t,{},async()=>{const s=Lr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:o}=t.config,a=await pd(t,r,"/v1/token",`key=${o}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:l,body:s};return t.emulatorConfig&&to(t.emulatorConfig.host)&&(u.credentials="include"),fd.fetch()(a,u)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Xv(t,e){return Nn(t,"POST","/v2/accounts:revokeToken",ts(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Es{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ee(e.idToken,"internal-error"),ee(typeof e.idToken<"u","internal-error"),ee(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Au(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ee(e.length!==0,"internal-error");const n=Au(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ee(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:r,expiresIn:o}=await Jv(e,n);this.updateTokensAndExpiration(s,r,Number(o))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:r,expirationTime:o}=n,a=new Es;return s&&(ee(typeof s=="string","internal-error",{appName:e}),a.refreshToken=s),r&&(ee(typeof r=="string","internal-error",{appName:e}),a.accessToken=r),o&&(ee(typeof o=="number","internal-error",{appName:e}),a.expirationTime=o),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Es,this.toJSON())}_performRefresh(){return Qt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pn(t,e){ee(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class At{constructor({uid:e,auth:n,stsTokenManager:s,...r}){this.providerId="firebase",this.proactiveRefresh=new zv(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Sa(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await Ir(this,this.stsTokenManager.getToken(this.auth,e));return ee(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Wv(this,e)}reload(){return Kv(this)}_assign(e){this!==e&&(ee(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new At({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){ee(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Ci(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(It(this.auth.app))return Promise.reject(An(this.auth));const e=await this.getIdToken();return await Ir(this,$v(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const s=n.displayName??void 0,r=n.email??void 0,o=n.phoneNumber??void 0,a=n.photoURL??void 0,l=n.tenantId??void 0,u=n._redirectEventId??void 0,f=n.createdAt??void 0,d=n.lastLoginAt??void 0,{uid:g,emailVerified:y,isAnonymous:C,providerData:I,stsTokenManager:x}=n;ee(g&&x,e,"internal-error");const N=Es.fromJSON(this.name,x);ee(typeof g=="string",e,"internal-error"),pn(s,e.name),pn(r,e.name),ee(typeof y=="boolean",e,"internal-error"),ee(typeof C=="boolean",e,"internal-error"),pn(o,e.name),pn(a,e.name),pn(l,e.name),pn(u,e.name),pn(f,e.name),pn(d,e.name);const F=new At({uid:g,auth:e,email:r,emailVerified:y,displayName:s,isAnonymous:C,photoURL:a,phoneNumber:o,tenantId:l,stsTokenManager:N,createdAt:f,lastLoginAt:d});return I&&Array.isArray(I)&&(F.providerData=I.map(H=>({...H}))),u&&(F._redirectEventId=u),F}static async _fromIdTokenResponse(e,n,s=!1){const r=new Es;r.updateFromServerResponse(n);const o=new At({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await Ci(o),o}static async _fromGetAccountInfoResponse(e,n,s){const r=n.users[0];ee(r.localId!==void 0,"internal-error");const o=r.providerUserInfo!==void 0?gd(r.providerUserInfo):[],a=!(r.email&&r.passwordHash)&&!o?.length,l=new Es;l.updateFromIdToken(s);const u=new At({uid:r.localId,auth:e,stsTokenManager:l,isAnonymous:a}),f={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:o,metadata:new Sa(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!o?.length};return Object.assign(u,f),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ru=new Map;function Zt(t){sn(t instanceof Function,"Expected a class definition");let e=Ru.get(t);return e?(sn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Ru.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class md{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}md.type="NONE";const Cu=md;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ui(t,e,n){return`firebase:${t}:${e}:${n}`}class vs{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:r,name:o}=this.auth;this.fullUserKey=ui(this.userKey,r.apiKey,o),this.fullPersistenceKey=ui("persistence",r.apiKey,o),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Ri(this.auth,{idToken:e}).catch(()=>{});return n?At._fromGetAccountInfoResponse(this.auth,n,e):null}return At._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new vs(Zt(Cu),e,s);const r=(await Promise.all(n.map(async f=>{if(await f._isAvailable())return f}))).filter(f=>f);let o=r[0]||Zt(Cu);const a=ui(s,e.config.apiKey,e.name);let l=null;for(const f of n)try{const d=await f._get(a);if(d){let g;if(typeof d=="string"){const y=await Ri(e,{idToken:d}).catch(()=>{});if(!y)break;g=await At._fromGetAccountInfoResponse(e,y,d)}else g=At._fromJSON(e,d);f!==o&&(l=g),o=f;break}}catch{}const u=r.filter(f=>f._shouldAllowMigration);return!o._shouldAllowMigration||!u.length?new vs(o,e,s):(o=u[0],l&&await o._set(a,l.toJSON()),await Promise.all(n.map(async f=>{if(f!==o)try{await f._remove(a)}catch{}})),new vs(o,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pu(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Ed(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(yd(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(bd(e))return"Blackberry";if(Sd(e))return"Webos";if(_d(e))return"Safari";if((e.includes("chrome/")||wd(e))&&!e.includes("edge/"))return"Chrome";if(vd(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if(s?.length===2)return s[1]}return"Other"}function yd(t=st()){return/firefox\//i.test(t)}function _d(t=st()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function wd(t=st()){return/crios\//i.test(t)}function Ed(t=st()){return/iemobile/i.test(t)}function vd(t=st()){return/android/i.test(t)}function bd(t=st()){return/blackberry/i.test(t)}function Sd(t=st()){return/webos/i.test(t)}function ic(t=st()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Yv(t=st()){return ic(t)&&!!window.navigator?.standalone}function Qv(){return cE()&&document.documentMode===10}function Td(t=st()){return ic(t)||vd(t)||Sd(t)||bd(t)||/windows phone/i.test(t)||Ed(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Id(t,e=[]){let n;switch(t){case"Browser":n=Pu(st());break;case"Worker":n=`${Pu(st())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${xs}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zv{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=o=>new Promise((a,l)=>{try{const u=e(o);a(u)}catch(u){l(u)}});s.onAbort=n,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s?.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eb(t,e={}){return Nn(t,"GET","/v2/passwordPolicy",ts(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tb=6;class nb{constructor(e){const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??tb,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),r&&(n.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let r=0;r<e.length;r++)s=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,r,o){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sb{constructor(e,n,s,r){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ou(this),this.idTokenSubscription=new Ou(this),this.beforeStateQueue=new Zv(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ud,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion,this._persistenceManagerAvailable=new Promise(o=>this._resolvePersistenceManagerAvailable=o)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Zt(n)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await vs.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Ri(this,{idToken:e}),s=await At._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(It(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let s=n,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=this.redirectUser?._redirectEventId,a=s?._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&l?.user&&(s=l.user,r=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return ee(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ci(e)}catch(n){if(n?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Lv()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(It(this.app))return Promise.reject(An(this));const n=e?kn(e):null;return n&&ee(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ee(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return It(this.app)?Promise.reject(An(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return It(this.app)?Promise.reject(An(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Zt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await eb(this),n=new nb(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Dr("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await Xv(this,s)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Zt(e)||this._popupRedirectResolver;ee(n,this,"argument-error"),this.redirectPersistenceManager=await vs.create(this,[Zt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,r){if(this._deleted)return()=>{};const o=typeof n=="function"?n:n.next.bind(n);let a=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(ee(l,this,"internal-error"),l.then(()=>{a||o(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,s,r);return()=>{a=!0,u()}}else{const u=e.addObserver(n);return()=>{a=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ee(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Id(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();n&&(e["X-Firebase-Client"]=n);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){if(It(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&Nv(`Error while retrieving App Check token: ${e.error}`),e?.token}}function Ds(t){return kn(t)}class Ou{constructor(e){this.auth=e,this.observer=null,this.addObserver=gE(n=>this.observer=n)}get next(){return ee(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let so={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function rb(t){so=t}function Ad(t){return so.loadJS(t)}function ib(){return so.recaptchaEnterpriseScript}function ob(){return so.gapiScript}function ab(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class cb{constructor(){this.enterprise=new lb}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class lb{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const ub="recaptcha-enterprise",Rd="NO_RECAPTCHA";class hb{constructor(e){this.type=ub,this.auth=Ds(e)}async verify(e="verify",n=!1){async function s(o){if(!n){if(o.tenantId==null&&o._agentRecaptchaConfig!=null)return o._agentRecaptchaConfig.siteKey;if(o.tenantId!=null&&o._tenantRecaptchaConfigs[o.tenantId]!==void 0)return o._tenantRecaptchaConfigs[o.tenantId].siteKey}return new Promise(async(a,l)=>{Hv(o,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const f=new Bv(u);return o.tenantId==null?o._agentRecaptchaConfig=f:o._tenantRecaptchaConfigs[o.tenantId]=f,a(f.siteKey)}}).catch(u=>{l(u)})})}function r(o,a,l){const u=window.grecaptcha;Iu(u)?u.enterprise.ready(()=>{u.enterprise.execute(o,{action:e}).then(f=>{a(f)}).catch(()=>{a(Rd)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new cb().execute("siteKey",{action:"verify"}):new Promise((o,a)=>{s(this.auth).then(l=>{if(!n&&Iu(window.grecaptcha))r(l,o,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let u=ib();u.length!==0&&(u+=l),Ad(u).then(()=>{r(l,o,a)}).catch(f=>{a(f)})}}).catch(l=>{a(l)})})}}async function ku(t,e,n,s=!1,r=!1){const o=new hb(t);let a;if(r)a=Rd;else try{a=await o.verify(n)}catch{a=await o.verify(n,!0)}const l={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const u=l.phoneEnrollmentInfo.phoneNumber,f=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:u,recaptchaToken:f,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const u=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:u,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return s?Object.assign(l,{captchaResp:a}):Object.assign(l,{captchaResponse:a}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function Nu(t,e,n,s,r){if(t._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await ku(t,e,n,n==="getOobCode");return s(t,o)}else return s(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await ku(t,e,n,n==="getOobCode");return s(t,a)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fb(t,e){const n=id(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),o=n.getOptions();if(Cs(o,e??{}))return r;kt(r,"already-initialized")}return n.initialize({options:e})}function db(t,e){const n=e?.persistence||[],s=(Array.isArray(n)?n:[n]).map(Zt);e?.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e?.popupRedirectResolver)}function pb(t,e,n){const s=Ds(t);ee(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!1,o=Cd(e),{host:a,port:l}=gb(e),u=l===null?"":`:${l}`,f={url:`${o}//${a}${u}/`},d=Object.freeze({host:a,port:l,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:r})});if(!s._canInitEmulator){ee(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),ee(Cs(f,s.config.emulator)&&Cs(d,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=f,s.emulatorConfig=d,s.settings.appVerificationDisabledForTesting=!0,to(a)?(eE(`${o}//${a}${u}`),sE("Auth",!0)):mb()}function Cd(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function gb(t){const e=Cd(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const o=r[1];return{host:o,port:xu(s.substr(o.length+1))}}else{const[o,a]=s.split(":");return{host:o,port:xu(a)}}}function xu(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function mb(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oc{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Qt("not implemented")}_getIdTokenResponse(e){return Qt("not implemented")}_linkToIdToken(e,n){return Qt("not implemented")}_getReauthenticationResolver(e){return Qt("not implemented")}}async function yb(t,e){return Nn(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _b(t,e){return no(t,"POST","/v1/accounts:signInWithPassword",ts(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wb(t,e){return no(t,"POST","/v1/accounts:signInWithEmailLink",ts(t,e))}async function Eb(t,e){return no(t,"POST","/v1/accounts:signInWithEmailLink",ts(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ar extends oc{constructor(e,n,s,r=null){super("password",s),this._email=e,this._password=n,this._tenantId=r}static _fromEmailAndPassword(e,n){return new Ar(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new Ar(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n?.email&&n?.password){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Nu(e,n,"signInWithPassword",_b);case"emailLink":return wb(e,{email:this._email,oobCode:this._password});default:kt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const s={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Nu(e,s,"signUpPassword",yb);case"emailLink":return Eb(e,{idToken:n,email:this._email,oobCode:this._password});default:kt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bs(t,e){return no(t,"POST","/v1/accounts:signInWithIdp",ts(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vb="http://localhost";class Qn extends oc{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Qn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):kt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r,...o}=n;if(!s||!r)return null;const a=new Qn(s,r);return a.idToken=o.idToken||void 0,a.accessToken=o.accessToken||void 0,a.secret=o.secret,a.nonce=o.nonce,a.pendingToken=o.pendingToken||null,a}_getIdTokenResponse(e){const n=this.buildRequest();return bs(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,bs(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,bs(e,n)}buildRequest(){const e={requestUri:vb,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Lr(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bb(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Sb(t){const e=nr(sr(t)).link,n=e?nr(sr(e)).deep_link_id:null,s=nr(sr(t)).deep_link_id;return(s?nr(sr(s)).link:null)||s||n||e||t}class ac{constructor(e){const n=nr(sr(e)),s=n.apiKey??null,r=n.oobCode??null,o=bb(n.mode??null);ee(s&&r&&o,"argument-error"),this.apiKey=s,this.operation=o,this.code=r,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=Sb(e);try{return new ac(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ls{constructor(){this.providerId=Ls.PROVIDER_ID}static credential(e,n){return Ar._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=ac.parseLink(n);return ee(s,"argument-error"),Ar._fromEmailAndCode(e,s.code,s.tenantId)}}Ls.PROVIDER_ID="password";Ls.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ls.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pd{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur extends Pd{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n extends Ur{constructor(){super("facebook.com")}static credential(e){return Qn._fromParams({providerId:_n.PROVIDER_ID,signInMethod:_n.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return _n.credentialFromTaggedObject(e)}static credentialFromError(e){return _n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return _n.credential(e.oauthAccessToken)}catch{return null}}}_n.FACEBOOK_SIGN_IN_METHOD="facebook.com";_n.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn extends Ur{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Qn._fromParams({providerId:wn.PROVIDER_ID,signInMethod:wn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return wn.credentialFromTaggedObject(e)}static credentialFromError(e){return wn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return wn.credential(n,s)}catch{return null}}}wn.GOOGLE_SIGN_IN_METHOD="google.com";wn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En extends Ur{constructor(){super("github.com")}static credential(e){return Qn._fromParams({providerId:En.PROVIDER_ID,signInMethod:En.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return En.credentialFromTaggedObject(e)}static credentialFromError(e){return En.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return En.credential(e.oauthAccessToken)}catch{return null}}}En.GITHUB_SIGN_IN_METHOD="github.com";En.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn extends Ur{constructor(){super("twitter.com")}static credential(e,n){return Qn._fromParams({providerId:vn.PROVIDER_ID,signInMethod:vn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return vn.credentialFromTaggedObject(e)}static credentialFromError(e){return vn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return vn.credential(n,s)}catch{return null}}}vn.TWITTER_SIGN_IN_METHOD="twitter.com";vn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Os{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,r=!1){const o=await At._fromIdTokenResponse(e,s,r),a=Du(s);return new Os({user:o,providerId:a,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const r=Du(s);return new Os({user:e,providerId:r,_tokenResponse:s,operationType:n})}}function Du(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pi extends on{constructor(e,n,s,r){super(n.code,n.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,Pi.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,r){return new Pi(e,n,s,r)}}function Od(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?Pi._fromErrorAndOperation(t,o,e,s):o})}async function Tb(t,e,n=!1){const s=await Ir(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Os._forOperation(t,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ib(t,e,n=!1){const{auth:s}=t;if(It(s.app))return Promise.reject(An(s));const r="reauthenticate";try{const o=await Ir(t,Od(s,r,e,t),n);ee(o.idToken,s,"internal-error");const a=rc(o.idToken);ee(a,s,"internal-error");const{sub:l}=a;return ee(t.uid===l,s,"user-mismatch"),Os._forOperation(t,r,o)}catch(o){throw o?.code==="auth/user-not-found"&&kt(s,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kd(t,e,n=!1){if(It(t.app))return Promise.reject(An(t));const s="signIn",r=await Od(t,s,e),o=await Os._fromIdTokenResponse(t,s,r);return n||await t._updateCurrentUser(o.user),o}async function Ab(t,e){return kd(Ds(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rb(t){const e=Ds(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function Cb(t,e,n){return It(t.app)?Promise.reject(An(t)):Ab(kn(t),Ls.credential(e,n)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&Rb(t),s})}function Pb(t,e,n,s){return kn(t).onIdTokenChanged(e,n,s)}function Ob(t,e,n){return kn(t).beforeAuthStateChanged(e,n)}function kb(t){return kn(t).signOut()}const Oi="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nd{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Oi,"1"),this.storage.removeItem(Oi),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nb=1e3,xb=10;class xd extends Nd{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Td(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),r=this.localCache[n];s!==r&&e(n,r,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((a,l,u)=>{this.notifyListeners(a,u)});return}const s=e.key;n?this.detachListener():this.stopPolling();const r=()=>{const a=this.storage.getItem(s);!n&&this.localCache[s]===a||this.notifyListeners(s,a)},o=this.storage.getItem(s);Qv()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,xb):r()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},Nb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}xd.type="LOCAL";const Db=xd;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dd extends Nd{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Dd.type="SESSION";const Ld=Dd;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lb(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ro{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const s=new ro(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:r,data:o}=n.data,a=this.handlersMap[r];if(!a?.size)return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const l=Array.from(a).map(async f=>f(n.origin,o)),u=await Lb(l);n.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ro.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cc(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mb{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let o,a;return new Promise((l,u)=>{const f=cc("",20);r.port1.start();const d=setTimeout(()=>{u(new Error("unsupported_event"))},s);a={messageChannel:r,onMessage(g){const y=g;if(y.data.eventId===f)switch(y.data.status){case"ack":clearTimeout(d),o=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),l(y.data.response);break;default:clearTimeout(d),clearTimeout(o),u(new Error("invalid_response"));break}}},this.handlers.add(a),r.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:f,data:n},[r.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wt(){return window}function Ub(t){Wt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Md(){return typeof Wt().WorkerGlobalScope<"u"&&typeof Wt().importScripts=="function"}async function Fb(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function jb(){return navigator?.serviceWorker?.controller||null}function Vb(){return Md()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ud="firebaseLocalStorageDb",Bb=1,ki="firebaseLocalStorage",Fd="fbase_key";class Fr{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function io(t,e){return t.transaction([ki],e?"readwrite":"readonly").objectStore(ki)}function Hb(){const t=indexedDB.deleteDatabase(Ud);return new Fr(t).toPromise()}function Ta(){const t=indexedDB.open(Ud,Bb);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(ki,{keyPath:Fd})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(ki)?e(s):(s.close(),await Hb(),e(await Ta()))})})}async function Lu(t,e,n){const s=io(t,!0).put({[Fd]:e,value:n});return new Fr(s).toPromise()}async function $b(t,e){const n=io(t,!1).get(e),s=await new Fr(n).toPromise();return s===void 0?null:s.value}function Mu(t,e){const n=io(t,!0).delete(e);return new Fr(n).toPromise()}const Wb=800,qb=3;class jd{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ta(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>qb)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Md()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ro._getInstance(Vb()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await Fb(),!this.activeServiceWorker)return;this.sender=new Mb(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||jb()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ta();return await Lu(e,Oi,"1"),await Mu(e,Oi),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Lu(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>$b(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Mu(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const o=io(r,!1).getAll();return new Fr(o).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:r,value:o}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(o)&&(this.notifyListeners(r,o),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Wb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}jd.type="LOCAL";const zb=jd;new Mr(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kb(t,e){return e?Zt(e):(ee(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lc extends oc{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return bs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return bs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return bs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Gb(t){return kd(t.auth,new lc(t),t.bypassAuthState)}function Jb(t){const{auth:e,user:n}=t;return ee(n,e,"internal-error"),Ib(n,new lc(t),t.bypassAuthState)}async function Xb(t){const{auth:e,user:n}=t;return ee(n,e,"internal-error"),Tb(n,new lc(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vd{constructor(e,n,s,r,o=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:r,tenantId:o,error:a,type:l}=e;if(a){this.reject(a);return}const u={auth:this.auth,requestUri:n,sessionId:s,tenantId:o||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(f){this.reject(f)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Gb;case"linkViaPopup":case"linkViaRedirect":return Xb;case"reauthViaPopup":case"reauthViaRedirect":return Jb;default:kt(this.auth,"internal-error")}}resolve(e){sn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){sn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yb=new Mr(2e3,1e4);class ps extends Vd{constructor(e,n,s,r,o){super(e,n,r,o),this.provider=s,this.authWindow=null,this.pollId=null,ps.currentPopupAction&&ps.currentPopupAction.cancel(),ps.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ee(e,this.auth,"internal-error"),e}async onExecution(){sn(this.filter.length===1,"Popup operations only handle one event");const e=cc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject($t(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject($t(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ps.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject($t(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Yb.get())};e()}}ps.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qb="pendingRedirect",hi=new Map;class Zb extends Vd{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=hi.get(this.auth._key());if(!e){try{const s=await eS(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}hi.set(this.auth._key(),e)}return this.bypassAuthState||hi.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function eS(t,e){const n=sS(e),s=nS(t);if(!await s._isAvailable())return!1;const r=await s._get(n)==="true";return await s._remove(n),r}function tS(t,e){hi.set(t._key(),e)}function nS(t){return Zt(t._redirectPersistence)}function sS(t){return ui(Qb,t.config.apiKey,t.name)}async function rS(t,e,n=!1){if(It(t.app))return Promise.reject(An(t));const s=Ds(t),r=Kb(s,e),a=await new Zb(s,r,n).execute();return a&&!n&&(delete a.user._redirectEventId,await s._persistUserIfCurrent(a.user),await s._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iS=600*1e3;class oS{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!aS(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){if(e.error&&!Bd(e)){const s=e.error.code?.split("auth/")[1]||"internal-error";n.onError($t(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=iS&&this.cachedEventUids.clear(),this.cachedEventUids.has(Uu(e))}saveEventToCache(e){this.cachedEventUids.add(Uu(e)),this.lastProcessedEventTime=Date.now()}}function Uu(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Bd({type:t,error:e}){return t==="unknown"&&e?.code==="auth/no-auth-event"}function aS(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Bd(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cS(t,e={}){return Nn(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lS=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,uS=/^https?/;async function hS(t){if(t.config.emulator)return;const{authorizedDomains:e}=await cS(t);for(const n of e)try{if(fS(n))return}catch{}kt(t,"unauthorized-domain")}function fS(t){const e=ba(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const a=new URL(t);return a.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&a.hostname===s}if(!uS.test(n))return!1;if(lS.test(t))return s===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dS=new Mr(3e4,6e4);function Fu(){const t=Wt().___jsl;if(t?.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function pS(t){return new Promise((e,n)=>{function s(){Fu(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Fu(),n($t(t,"network-request-failed"))},timeout:dS.get()})}if(Wt().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(Wt().gapi?.load)s();else{const r=ab("iframefcb");return Wt()[r]=()=>{gapi.load?s():n($t(t,"network-request-failed"))},Ad(`${ob()}?onload=${r}`).catch(o=>n(o))}}).catch(e=>{throw fi=null,e})}let fi=null;function gS(t){return fi=fi||pS(t),fi}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mS=new Mr(5e3,15e3),yS="__/auth/iframe",_S="emulator/auth/iframe",wS={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ES=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function vS(t){const e=t.config;ee(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?sc(e,_S):`https://${t.config.authDomain}/${yS}`,s={apiKey:e.apiKey,appName:t.name,v:xs},r=ES.get(t.config.apiHost);r&&(s.eid=r);const o=t._getFrameworks();return o.length&&(s.fw=o.join(",")),`${n}?${Lr(s).slice(1)}`}async function bS(t){const e=await gS(t),n=Wt().gapi;return ee(n,t,"internal-error"),e.open({where:document.body,url:vS(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:wS,dontclear:!0},s=>new Promise(async(r,o)=>{await s.restyle({setHideOnLeave:!1});const a=$t(t,"network-request-failed"),l=Wt().setTimeout(()=>{o(a)},mS.get());function u(){Wt().clearTimeout(l),r(s)}s.ping(u).then(u,()=>{o(a)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SS={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},TS=500,IS=600,AS="_blank",RS="http://localhost";class ju{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function CS(t,e,n,s=TS,r=IS){const o=Math.max((window.screen.availHeight-r)/2,0).toString(),a=Math.max((window.screen.availWidth-s)/2,0).toString();let l="";const u={...SS,width:s.toString(),height:r.toString(),top:o,left:a},f=st().toLowerCase();n&&(l=wd(f)?AS:n),yd(f)&&(e=e||RS,u.scrollbars="yes");const d=Object.entries(u).reduce((y,[C,I])=>`${y}${C}=${I},`,"");if(Yv(f)&&l!=="_self")return PS(e||"",l),new ju(null);const g=window.open(e||"",l,d);ee(g,t,"popup-blocked");try{g.focus()}catch{}return new ju(g)}function PS(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OS="__/auth/handler",kS="emulator/auth/handler",NS=encodeURIComponent("fac");async function Vu(t,e,n,s,r,o){ee(t.config.authDomain,t,"auth-domain-config-required"),ee(t.config.apiKey,t,"invalid-api-key");const a={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:xs,eventId:r};if(e instanceof Pd){e.setDefaultLanguage(t.languageCode),a.providerId=e.providerId||"",pE(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,g]of Object.entries({}))a[d]=g}if(e instanceof Ur){const d=e.getScopes().filter(g=>g!=="");d.length>0&&(a.scopes=d.join(","))}t.tenantId&&(a.tid=t.tenantId);const l=a;for(const d of Object.keys(l))l[d]===void 0&&delete l[d];const u=await t._getAppCheckToken(),f=u?`#${NS}=${encodeURIComponent(u)}`:"";return`${xS(t)}?${Lr(l).slice(1)}${f}`}function xS({config:t}){return t.emulator?sc(t,kS):`https://${t.authDomain}/${OS}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jo="webStorageSupport";class DS{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ld,this._completeRedirectFn=rS,this._overrideRedirectResult=tS}async _openPopup(e,n,s,r){sn(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const o=await Vu(e,n,s,ba(),r);return CS(e,o,cc())}async _openRedirect(e,n,s,r){await this._originValidation(e);const o=await Vu(e,n,s,ba(),r);return Ub(o),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:o}=this.eventManagers[n];return r?Promise.resolve(r):(sn(o,"If manager is not set, promise should be"),o)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await bS(e),s=new oS(e);return n.register("authEvent",r=>(ee(r?.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Jo,{type:Jo},r=>{const o=r?.[0]?.[Jo];o!==void 0&&n(!!o),kt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=hS(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Td()||_d()||ic()}}const LS=DS;var Bu="@firebase/auth",Hu="1.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MS{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e(s?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ee(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function US(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function FS(t){Ps(new Yn("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),o=e.getProvider("app-check-internal"),{apiKey:a,authDomain:l}=s.options;ee(a&&!a.includes(":"),"invalid-api-key",{appName:s.name});const u={apiKey:a,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Id(t)},f=new sb(s,r,o,u);return db(f,n),f},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),Ps(new Yn("auth-internal",e=>{const n=Ds(e.getProvider("auth").getImmediate());return(s=>new MS(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),In(Bu,Hu,US(t)),In(Bu,Hu,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jS=300,VS=nd("authIdTokenMaxAge")||jS;let $u=null;const BS=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>VS)return;const r=n?.token;$u!==r&&($u=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function HS(t=mv()){const e=id(t,"auth");if(e.isInitialized())return e.getImmediate();const n=fb(t,{popupRedirectResolver:LS,persistence:[zb,Db,Ld]}),s=nd("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const o=new URL(s,location.origin);if(location.origin===o.origin){const a=BS(o.toString());Ob(n,a,()=>a(n.currentUser)),Pb(n,l=>a(l))}}const r=Qw("auth");return r&&pb(n,`http://${r}`),n}function $S(){return document.getElementsByTagName("head")?.[0]??document}rb({loadJS(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=r=>{const o=$t("internal-error");o.customData=r,n(o)},s.type="text/javascript",s.charset="UTF-8",$S().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});FS("Browser");function WS(t){const e=ot(t.currentUser),n=dt(()=>!!e.value);return t.onIdTokenChanged(s=>e.value=s),{isAuthenticated:n,user:e}}const Ia=HS(Ov),{isAuthenticated:Wu,user:qS}=WS(Ia),uc=()=>({isAuthenticated:Wu,user:qS,login:async(n,s)=>(await Cb(Ia,n,s),Wu.value),logout:async()=>{await kb(Ia),gc.push({name:"Home"})}}),zS={__name:"LoginPage",setup(t){const{login:e,logout:n}=uc(),s=zy(),r=Af(),o=ot(""),a=ot(""),l=async()=>{await e(o.value,a.value)?r.query.redirect?s.push(r.query.redirect):s.push({name:"SettingsPage"}):n()};return(u,f)=>(Be(),nt("form",{class:"m-10",onSubmit:f[2]||(f[2]=gf(()=>{},["prevent"]))},[Se("div",null,[f[3]||(f[3]=Se("label",{for:"username",class:"block mb-2 font-bold"},"Username",-1)),Bn(Se("input",{id:"username","onUpdate:modelValue":f[0]||(f[0]=d=>o.value=d),type:"text",placeholder:"username"},null,512),[[Hn,o.value]])]),Se("div",null,[f[4]||(f[4]=Se("label",{for:"Password",class:"block mb-2 font-bold"},"Password",-1)),Bn(Se("input",{id:"password","onUpdate:modelValue":f[1]||(f[1]=d=>a.value=d),type:"password",placeholder:"password"},null,512),[[Hn,a.value]])]),Se("button",{onClick:l,class:"bg-green-500 mt-4 px-4 py-2 hover:bg-green-800 hover:text-white"},"LOGIN")],32))}};var qu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var hc;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(v,_){function E(){}E.prototype=_.prototype,v.F=_.prototype,v.prototype=new E,v.prototype.constructor=v,v.D=function(T,S,A){for(var w=Array(arguments.length-2),ye=2;ye<arguments.length;ye++)w[ye-2]=arguments[ye];return _.prototype[S].apply(T,w)}}function n(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(s,n),s.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function r(v,_,E){E||(E=0);const T=Array(16);if(typeof _=="string")for(var S=0;S<16;++S)T[S]=_.charCodeAt(E++)|_.charCodeAt(E++)<<8|_.charCodeAt(E++)<<16|_.charCodeAt(E++)<<24;else for(S=0;S<16;++S)T[S]=_[E++]|_[E++]<<8|_[E++]<<16|_[E++]<<24;_=v.g[0],E=v.g[1],S=v.g[2];let A=v.g[3],w;w=_+(A^E&(S^A))+T[0]+3614090360&4294967295,_=E+(w<<7&4294967295|w>>>25),w=A+(S^_&(E^S))+T[1]+3905402710&4294967295,A=_+(w<<12&4294967295|w>>>20),w=S+(E^A&(_^E))+T[2]+606105819&4294967295,S=A+(w<<17&4294967295|w>>>15),w=E+(_^S&(A^_))+T[3]+3250441966&4294967295,E=S+(w<<22&4294967295|w>>>10),w=_+(A^E&(S^A))+T[4]+4118548399&4294967295,_=E+(w<<7&4294967295|w>>>25),w=A+(S^_&(E^S))+T[5]+1200080426&4294967295,A=_+(w<<12&4294967295|w>>>20),w=S+(E^A&(_^E))+T[6]+2821735955&4294967295,S=A+(w<<17&4294967295|w>>>15),w=E+(_^S&(A^_))+T[7]+4249261313&4294967295,E=S+(w<<22&4294967295|w>>>10),w=_+(A^E&(S^A))+T[8]+1770035416&4294967295,_=E+(w<<7&4294967295|w>>>25),w=A+(S^_&(E^S))+T[9]+2336552879&4294967295,A=_+(w<<12&4294967295|w>>>20),w=S+(E^A&(_^E))+T[10]+4294925233&4294967295,S=A+(w<<17&4294967295|w>>>15),w=E+(_^S&(A^_))+T[11]+2304563134&4294967295,E=S+(w<<22&4294967295|w>>>10),w=_+(A^E&(S^A))+T[12]+1804603682&4294967295,_=E+(w<<7&4294967295|w>>>25),w=A+(S^_&(E^S))+T[13]+4254626195&4294967295,A=_+(w<<12&4294967295|w>>>20),w=S+(E^A&(_^E))+T[14]+2792965006&4294967295,S=A+(w<<17&4294967295|w>>>15),w=E+(_^S&(A^_))+T[15]+1236535329&4294967295,E=S+(w<<22&4294967295|w>>>10),w=_+(S^A&(E^S))+T[1]+4129170786&4294967295,_=E+(w<<5&4294967295|w>>>27),w=A+(E^S&(_^E))+T[6]+3225465664&4294967295,A=_+(w<<9&4294967295|w>>>23),w=S+(_^E&(A^_))+T[11]+643717713&4294967295,S=A+(w<<14&4294967295|w>>>18),w=E+(A^_&(S^A))+T[0]+3921069994&4294967295,E=S+(w<<20&4294967295|w>>>12),w=_+(S^A&(E^S))+T[5]+3593408605&4294967295,_=E+(w<<5&4294967295|w>>>27),w=A+(E^S&(_^E))+T[10]+38016083&4294967295,A=_+(w<<9&4294967295|w>>>23),w=S+(_^E&(A^_))+T[15]+3634488961&4294967295,S=A+(w<<14&4294967295|w>>>18),w=E+(A^_&(S^A))+T[4]+3889429448&4294967295,E=S+(w<<20&4294967295|w>>>12),w=_+(S^A&(E^S))+T[9]+568446438&4294967295,_=E+(w<<5&4294967295|w>>>27),w=A+(E^S&(_^E))+T[14]+3275163606&4294967295,A=_+(w<<9&4294967295|w>>>23),w=S+(_^E&(A^_))+T[3]+4107603335&4294967295,S=A+(w<<14&4294967295|w>>>18),w=E+(A^_&(S^A))+T[8]+1163531501&4294967295,E=S+(w<<20&4294967295|w>>>12),w=_+(S^A&(E^S))+T[13]+2850285829&4294967295,_=E+(w<<5&4294967295|w>>>27),w=A+(E^S&(_^E))+T[2]+4243563512&4294967295,A=_+(w<<9&4294967295|w>>>23),w=S+(_^E&(A^_))+T[7]+1735328473&4294967295,S=A+(w<<14&4294967295|w>>>18),w=E+(A^_&(S^A))+T[12]+2368359562&4294967295,E=S+(w<<20&4294967295|w>>>12),w=_+(E^S^A)+T[5]+4294588738&4294967295,_=E+(w<<4&4294967295|w>>>28),w=A+(_^E^S)+T[8]+2272392833&4294967295,A=_+(w<<11&4294967295|w>>>21),w=S+(A^_^E)+T[11]+1839030562&4294967295,S=A+(w<<16&4294967295|w>>>16),w=E+(S^A^_)+T[14]+4259657740&4294967295,E=S+(w<<23&4294967295|w>>>9),w=_+(E^S^A)+T[1]+2763975236&4294967295,_=E+(w<<4&4294967295|w>>>28),w=A+(_^E^S)+T[4]+1272893353&4294967295,A=_+(w<<11&4294967295|w>>>21),w=S+(A^_^E)+T[7]+4139469664&4294967295,S=A+(w<<16&4294967295|w>>>16),w=E+(S^A^_)+T[10]+3200236656&4294967295,E=S+(w<<23&4294967295|w>>>9),w=_+(E^S^A)+T[13]+681279174&4294967295,_=E+(w<<4&4294967295|w>>>28),w=A+(_^E^S)+T[0]+3936430074&4294967295,A=_+(w<<11&4294967295|w>>>21),w=S+(A^_^E)+T[3]+3572445317&4294967295,S=A+(w<<16&4294967295|w>>>16),w=E+(S^A^_)+T[6]+76029189&4294967295,E=S+(w<<23&4294967295|w>>>9),w=_+(E^S^A)+T[9]+3654602809&4294967295,_=E+(w<<4&4294967295|w>>>28),w=A+(_^E^S)+T[12]+3873151461&4294967295,A=_+(w<<11&4294967295|w>>>21),w=S+(A^_^E)+T[15]+530742520&4294967295,S=A+(w<<16&4294967295|w>>>16),w=E+(S^A^_)+T[2]+3299628645&4294967295,E=S+(w<<23&4294967295|w>>>9),w=_+(S^(E|~A))+T[0]+4096336452&4294967295,_=E+(w<<6&4294967295|w>>>26),w=A+(E^(_|~S))+T[7]+1126891415&4294967295,A=_+(w<<10&4294967295|w>>>22),w=S+(_^(A|~E))+T[14]+2878612391&4294967295,S=A+(w<<15&4294967295|w>>>17),w=E+(A^(S|~_))+T[5]+4237533241&4294967295,E=S+(w<<21&4294967295|w>>>11),w=_+(S^(E|~A))+T[12]+1700485571&4294967295,_=E+(w<<6&4294967295|w>>>26),w=A+(E^(_|~S))+T[3]+2399980690&4294967295,A=_+(w<<10&4294967295|w>>>22),w=S+(_^(A|~E))+T[10]+4293915773&4294967295,S=A+(w<<15&4294967295|w>>>17),w=E+(A^(S|~_))+T[1]+2240044497&4294967295,E=S+(w<<21&4294967295|w>>>11),w=_+(S^(E|~A))+T[8]+1873313359&4294967295,_=E+(w<<6&4294967295|w>>>26),w=A+(E^(_|~S))+T[15]+4264355552&4294967295,A=_+(w<<10&4294967295|w>>>22),w=S+(_^(A|~E))+T[6]+2734768916&4294967295,S=A+(w<<15&4294967295|w>>>17),w=E+(A^(S|~_))+T[13]+1309151649&4294967295,E=S+(w<<21&4294967295|w>>>11),w=_+(S^(E|~A))+T[4]+4149444226&4294967295,_=E+(w<<6&4294967295|w>>>26),w=A+(E^(_|~S))+T[11]+3174756917&4294967295,A=_+(w<<10&4294967295|w>>>22),w=S+(_^(A|~E))+T[2]+718787259&4294967295,S=A+(w<<15&4294967295|w>>>17),w=E+(A^(S|~_))+T[9]+3951481745&4294967295,v.g[0]=v.g[0]+_&4294967295,v.g[1]=v.g[1]+(S+(w<<21&4294967295|w>>>11))&4294967295,v.g[2]=v.g[2]+S&4294967295,v.g[3]=v.g[3]+A&4294967295}s.prototype.v=function(v,_){_===void 0&&(_=v.length);const E=_-this.blockSize,T=this.C;let S=this.h,A=0;for(;A<_;){if(S==0)for(;A<=E;)r(this,v,A),A+=this.blockSize;if(typeof v=="string"){for(;A<_;)if(T[S++]=v.charCodeAt(A++),S==this.blockSize){r(this,T),S=0;break}}else for(;A<_;)if(T[S++]=v[A++],S==this.blockSize){r(this,T),S=0;break}}this.h=S,this.o+=_},s.prototype.A=function(){var v=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);v[0]=128;for(var _=1;_<v.length-8;++_)v[_]=0;_=this.o*8;for(var E=v.length-8;E<v.length;++E)v[E]=_&255,_/=256;for(this.v(v),v=Array(16),_=0,E=0;E<4;++E)for(let T=0;T<32;T+=8)v[_++]=this.g[E]>>>T&255;return v};function o(v,_){var E=l;return Object.prototype.hasOwnProperty.call(E,v)?E[v]:E[v]=_(v)}function a(v,_){this.h=_;const E=[];let T=!0;for(let S=v.length-1;S>=0;S--){const A=v[S]|0;T&&A==_||(E[S]=A,T=!1)}this.g=E}var l={};function u(v){return-128<=v&&v<128?o(v,function(_){return new a([_|0],_<0?-1:0)}):new a([v|0],v<0?-1:0)}function f(v){if(isNaN(v)||!isFinite(v))return g;if(v<0)return N(f(-v));const _=[];let E=1;for(let T=0;v>=E;T++)_[T]=v/E|0,E*=4294967296;return new a(_,0)}function d(v,_){if(v.length==0)throw Error("number format error: empty string");if(_=_||10,_<2||36<_)throw Error("radix out of range: "+_);if(v.charAt(0)=="-")return N(d(v.substring(1),_));if(v.indexOf("-")>=0)throw Error('number format error: interior "-" character');const E=f(Math.pow(_,8));let T=g;for(let A=0;A<v.length;A+=8){var S=Math.min(8,v.length-A);const w=parseInt(v.substring(A,A+S),_);S<8?(S=f(Math.pow(_,S)),T=T.j(S).add(f(w))):(T=T.j(E),T=T.add(f(w)))}return T}var g=u(0),y=u(1),C=u(16777216);t=a.prototype,t.m=function(){if(x(this))return-N(this).m();let v=0,_=1;for(let E=0;E<this.g.length;E++){const T=this.i(E);v+=(T>=0?T:4294967296+T)*_,_*=4294967296}return v},t.toString=function(v){if(v=v||10,v<2||36<v)throw Error("radix out of range: "+v);if(I(this))return"0";if(x(this))return"-"+N(this).toString(v);const _=f(Math.pow(v,6));var E=this;let T="";for(;;){const S=$(E,_).g;E=F(E,S.j(_));let A=((E.g.length>0?E.g[0]:E.h)>>>0).toString(v);if(E=S,I(E))return A+T;for(;A.length<6;)A="0"+A;T=A+T}},t.i=function(v){return v<0?0:v<this.g.length?this.g[v]:this.h};function I(v){if(v.h!=0)return!1;for(let _=0;_<v.g.length;_++)if(v.g[_]!=0)return!1;return!0}function x(v){return v.h==-1}t.l=function(v){return v=F(this,v),x(v)?-1:I(v)?0:1};function N(v){const _=v.g.length,E=[];for(let T=0;T<_;T++)E[T]=~v.g[T];return new a(E,~v.h).add(y)}t.abs=function(){return x(this)?N(this):this},t.add=function(v){const _=Math.max(this.g.length,v.g.length),E=[];let T=0;for(let S=0;S<=_;S++){let A=T+(this.i(S)&65535)+(v.i(S)&65535),w=(A>>>16)+(this.i(S)>>>16)+(v.i(S)>>>16);T=w>>>16,A&=65535,w&=65535,E[S]=w<<16|A}return new a(E,E[E.length-1]&-2147483648?-1:0)};function F(v,_){return v.add(N(_))}t.j=function(v){if(I(this)||I(v))return g;if(x(this))return x(v)?N(this).j(N(v)):N(N(this).j(v));if(x(v))return N(this.j(N(v)));if(this.l(C)<0&&v.l(C)<0)return f(this.m()*v.m());const _=this.g.length+v.g.length,E=[];for(var T=0;T<2*_;T++)E[T]=0;for(T=0;T<this.g.length;T++)for(let S=0;S<v.g.length;S++){const A=this.i(T)>>>16,w=this.i(T)&65535,ye=v.i(S)>>>16,qe=v.i(S)&65535;E[2*T+2*S]+=w*qe,H(E,2*T+2*S),E[2*T+2*S+1]+=A*qe,H(E,2*T+2*S+1),E[2*T+2*S+1]+=w*ye,H(E,2*T+2*S+1),E[2*T+2*S+2]+=A*ye,H(E,2*T+2*S+2)}for(v=0;v<_;v++)E[v]=E[2*v+1]<<16|E[2*v];for(v=_;v<2*_;v++)E[v]=0;return new a(E,0)};function H(v,_){for(;(v[_]&65535)!=v[_];)v[_+1]+=v[_]>>>16,v[_]&=65535,_++}function G(v,_){this.g=v,this.h=_}function $(v,_){if(I(_))throw Error("division by zero");if(I(v))return new G(g,g);if(x(v))return _=$(N(v),_),new G(N(_.g),N(_.h));if(x(_))return _=$(v,N(_)),new G(N(_.g),_.h);if(v.g.length>30){if(x(v)||x(_))throw Error("slowDivide_ only works with positive integers.");for(var E=y,T=_;T.l(v)<=0;)E=te(E),T=te(T);var S=ae(E,1),A=ae(T,1);for(T=ae(T,2),E=ae(E,2);!I(T);){var w=A.add(T);w.l(v)<=0&&(S=S.add(E),A=w),T=ae(T,1),E=ae(E,1)}return _=F(v,S.j(_)),new G(S,_)}for(S=g;v.l(_)>=0;){for(E=Math.max(1,Math.floor(v.m()/_.m())),T=Math.ceil(Math.log(E)/Math.LN2),T=T<=48?1:Math.pow(2,T-48),A=f(E),w=A.j(_);x(w)||w.l(v)>0;)E-=T,A=f(E),w=A.j(_);I(A)&&(A=y),S=S.add(A),v=F(v,w)}return new G(S,v)}t.B=function(v){return $(this,v).h},t.and=function(v){const _=Math.max(this.g.length,v.g.length),E=[];for(let T=0;T<_;T++)E[T]=this.i(T)&v.i(T);return new a(E,this.h&v.h)},t.or=function(v){const _=Math.max(this.g.length,v.g.length),E=[];for(let T=0;T<_;T++)E[T]=this.i(T)|v.i(T);return new a(E,this.h|v.h)},t.xor=function(v){const _=Math.max(this.g.length,v.g.length),E=[];for(let T=0;T<_;T++)E[T]=this.i(T)^v.i(T);return new a(E,this.h^v.h)};function te(v){const _=v.g.length+1,E=[];for(let T=0;T<_;T++)E[T]=v.i(T)<<1|v.i(T-1)>>>31;return new a(E,v.h)}function ae(v,_){const E=_>>5;_%=32;const T=v.g.length-E,S=[];for(let A=0;A<T;A++)S[A]=_>0?v.i(A+E)>>>_|v.i(A+E+1)<<32-_:v.i(A+E);return new a(S,v.h)}s.prototype.digest=s.prototype.A,s.prototype.reset=s.prototype.u,s.prototype.update=s.prototype.v,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.B,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=f,a.fromString=d,hc=a}).apply(typeof qu<"u"?qu:typeof self<"u"?self:typeof window<"u"?window:{});var Zr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};(function(){var t,e=Object.defineProperty;function n(i){i=[typeof globalThis=="object"&&globalThis,i,typeof window=="object"&&window,typeof self=="object"&&self,typeof Zr=="object"&&Zr];for(var c=0;c<i.length;++c){var h=i[c];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var s=n(this);function r(i,c){if(c)e:{var h=s;i=i.split(".");for(var p=0;p<i.length-1;p++){var R=i[p];if(!(R in h))break e;h=h[R]}i=i[i.length-1],p=h[i],c=c(p),c!=p&&c!=null&&e(h,i,{configurable:!0,writable:!0,value:c})}}r("Symbol.dispose",function(i){return i||Symbol("Symbol.dispose")}),r("Array.prototype.values",function(i){return i||function(){return this[Symbol.iterator]()}}),r("Object.entries",function(i){return i||function(c){var h=[],p;for(p in c)Object.prototype.hasOwnProperty.call(c,p)&&h.push([p,c[p]]);return h}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function l(i){var c=typeof i;return c=="object"&&i!=null||c=="function"}function u(i,c,h){return i.call.apply(i.bind,arguments)}function f(i,c,h){return f=u,f.apply(null,arguments)}function d(i,c){var h=Array.prototype.slice.call(arguments,1);return function(){var p=h.slice();return p.push.apply(p,arguments),i.apply(this,p)}}function g(i,c){function h(){}h.prototype=c.prototype,i.Z=c.prototype,i.prototype=new h,i.prototype.constructor=i,i.Ob=function(p,R,O){for(var W=Array(arguments.length-2),oe=2;oe<arguments.length;oe++)W[oe-2]=arguments[oe];return c.prototype[R].apply(p,W)}}var y=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?i=>i&&AsyncContext.Snapshot.wrap(i):i=>i;function C(i){const c=i.length;if(c>0){const h=Array(c);for(let p=0;p<c;p++)h[p]=i[p];return h}return[]}function I(i,c){for(let p=1;p<arguments.length;p++){const R=arguments[p];var h=typeof R;if(h=h!="object"?h:R?Array.isArray(R)?"array":h:"null",h=="array"||h=="object"&&typeof R.length=="number"){h=i.length||0;const O=R.length||0;i.length=h+O;for(let W=0;W<O;W++)i[h+W]=R[W]}else i.push(R)}}class x{constructor(c,h){this.i=c,this.j=h,this.h=0,this.g=null}get(){let c;return this.h>0?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function N(i){a.setTimeout(()=>{throw i},0)}function F(){var i=v;let c=null;return i.g&&(c=i.g,i.g=i.g.next,i.g||(i.h=null),c.next=null),c}class H{constructor(){this.h=this.g=null}add(c,h){const p=G.get();p.set(c,h),this.h?this.h.next=p:this.g=p,this.h=p}}var G=new x(()=>new $,i=>i.reset());class ${constructor(){this.next=this.g=this.h=null}set(c,h){this.h=c,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let te,ae=!1,v=new H,_=()=>{const i=Promise.resolve(void 0);te=()=>{i.then(E)}};function E(){for(var i;i=F();){try{i.h.call(i.g)}catch(h){N(h)}var c=G;c.j(i),c.h<100&&(c.h++,i.next=c.g,c.g=i)}ae=!1}function T(){this.u=this.u,this.C=this.C}T.prototype.u=!1,T.prototype.dispose=function(){this.u||(this.u=!0,this.N())},T.prototype[Symbol.dispose]=function(){this.dispose()},T.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function S(i,c){this.type=i,this.g=this.target=c,this.defaultPrevented=!1}S.prototype.h=function(){this.defaultPrevented=!0};var A=(function(){if(!a.addEventListener||!Object.defineProperty)return!1;var i=!1,c=Object.defineProperty({},"passive",{get:function(){i=!0}});try{const h=()=>{};a.addEventListener("test",h,c),a.removeEventListener("test",h,c)}catch{}return i})();function w(i){return/^[\s\xa0]*$/.test(i)}function ye(i,c){S.call(this,i?i.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,i&&this.init(i,c)}g(ye,S),ye.prototype.init=function(i,c){const h=this.type=i.type,p=i.changedTouches&&i.changedTouches.length?i.changedTouches[0]:null;this.target=i.target||i.srcElement,this.g=c,c=i.relatedTarget,c||(h=="mouseover"?c=i.fromElement:h=="mouseout"&&(c=i.toElement)),this.relatedTarget=c,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0),this.button=i.button,this.key=i.key||"",this.ctrlKey=i.ctrlKey,this.altKey=i.altKey,this.shiftKey=i.shiftKey,this.metaKey=i.metaKey,this.pointerId=i.pointerId||0,this.pointerType=i.pointerType,this.state=i.state,this.i=i,i.defaultPrevented&&ye.Z.h.call(this)},ye.prototype.h=function(){ye.Z.h.call(this);const i=this.i;i.preventDefault?i.preventDefault():i.returnValue=!1};var qe="closure_listenable_"+(Math.random()*1e6|0),he=0;function de(i,c,h,p,R){this.listener=i,this.proxy=null,this.src=c,this.type=h,this.capture=!!p,this.ha=R,this.key=++he,this.da=this.fa=!1}function re(i){i.da=!0,i.listener=null,i.proxy=null,i.src=null,i.ha=null}function Ue(i,c,h){for(const p in i)c.call(h,i[p],p,i)}function bt(i,c){for(const h in i)c.call(void 0,i[h],h,i)}function ke(i){const c={};for(const h in i)c[h]=i[h];return c}const Oe="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function lt(i,c){let h,p;for(let R=1;R<arguments.length;R++){p=arguments[R];for(h in p)i[h]=p[h];for(let O=0;O<Oe.length;O++)h=Oe[O],Object.prototype.hasOwnProperty.call(p,h)&&(i[h]=p[h])}}function rt(i){this.src=i,this.g={},this.h=0}rt.prototype.add=function(i,c,h,p,R){const O=i.toString();i=this.g[O],i||(i=this.g[O]=[],this.h++);const W=J(i,c,p,R);return W>-1?(c=i[W],h||(c.fa=!1)):(c=new de(c,this.src,O,!!p,R),c.fa=h,i.push(c)),c};function D(i,c){const h=c.type;if(h in i.g){var p=i.g[h],R=Array.prototype.indexOf.call(p,c,void 0),O;(O=R>=0)&&Array.prototype.splice.call(p,R,1),O&&(re(c),i.g[h].length==0&&(delete i.g[h],i.h--))}}function J(i,c,h,p){for(let R=0;R<i.length;++R){const O=i[R];if(!O.da&&O.listener==c&&O.capture==!!h&&O.ha==p)return R}return-1}var q="closure_lm_"+(Math.random()*1e6|0),X={};function pe(i,c,h,p,R){if(Array.isArray(c)){for(let O=0;O<c.length;O++)pe(i,c[O],h,p,R);return null}return h=z(h),i&&i[qe]?i.J(c,h,l(p)?!!p.capture:!1,R):Te(i,c,h,!1,p,R)}function Te(i,c,h,p,R,O){if(!c)throw Error("Invalid event type");const W=l(R)?!!R.capture:!!R;let oe=M(i);if(oe||(i[q]=oe=new rt(i)),h=oe.add(c,h,p,W,O),h.proxy)return h;if(p=ce(),h.proxy=p,p.src=i,p.listener=h,i.addEventListener)A||(R=W),R===void 0&&(R=!1),i.addEventListener(c.toString(),p,R);else if(i.attachEvent)i.attachEvent(k(c.toString()),p);else if(i.addListener&&i.removeListener)i.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return h}function ce(){function i(h){return c.call(i.src,i.listener,h)}const c=L;return i}function m(i,c,h,p,R){if(Array.isArray(c))for(var O=0;O<c.length;O++)m(i,c[O],h,p,R);else p=l(p)?!!p.capture:!!p,h=z(h),i&&i[qe]?(i=i.i,O=String(c).toString(),O in i.g&&(c=i.g[O],h=J(c,h,p,R),h>-1&&(re(c[h]),Array.prototype.splice.call(c,h,1),c.length==0&&(delete i.g[O],i.h--)))):i&&(i=M(i))&&(c=i.g[c.toString()],i=-1,c&&(i=J(c,h,p,R)),(h=i>-1?c[i]:null)&&b(h))}function b(i){if(typeof i!="number"&&i&&!i.da){var c=i.src;if(c&&c[qe])D(c.i,i);else{var h=i.type,p=i.proxy;c.removeEventListener?c.removeEventListener(h,p,i.capture):c.detachEvent?c.detachEvent(k(h),p):c.addListener&&c.removeListener&&c.removeListener(p),(h=M(c))?(D(h,i),h.h==0&&(h.src=null,c[q]=null)):re(i)}}}function k(i){return i in X?X[i]:X[i]="on"+i}function L(i,c){if(i.da)i=!0;else{c=new ye(c,this);const h=i.listener,p=i.ha||i.src;i.fa&&b(i),i=h.call(p,c)}return i}function M(i){return i=i[q],i instanceof rt?i:null}var U="__closure_events_fn_"+(Math.random()*1e9>>>0);function z(i){return typeof i=="function"?i:(i[U]||(i[U]=function(c){return i.handleEvent(c)}),i[U])}function B(){T.call(this),this.i=new rt(this),this.M=this,this.G=null}g(B,T),B.prototype[qe]=!0,B.prototype.removeEventListener=function(i,c,h,p){m(this,i,c,h,p)};function j(i,c){var h,p=i.G;if(p)for(h=[];p;p=p.G)h.push(p);if(i=i.M,p=c.type||c,typeof c=="string")c=new S(c,i);else if(c instanceof S)c.target=c.target||i;else{var R=c;c=new S(p,i),lt(c,R)}R=!0;let O,W;if(h)for(W=h.length-1;W>=0;W--)O=c.g=h[W],R=V(O,p,!0,c)&&R;if(O=c.g=i,R=V(O,p,!0,c)&&R,R=V(O,p,!1,c)&&R,h)for(W=0;W<h.length;W++)O=c.g=h[W],R=V(O,p,!1,c)&&R}B.prototype.N=function(){if(B.Z.N.call(this),this.i){var i=this.i;for(const c in i.g){const h=i.g[c];for(let p=0;p<h.length;p++)re(h[p]);delete i.g[c],i.h--}}this.G=null},B.prototype.J=function(i,c,h,p){return this.i.add(String(i),c,!1,h,p)},B.prototype.K=function(i,c,h,p){return this.i.add(String(i),c,!0,h,p)};function V(i,c,h,p){if(c=i.i.g[String(c)],!c)return!0;c=c.concat();let R=!0;for(let O=0;O<c.length;++O){const W=c[O];if(W&&!W.da&&W.capture==h){const oe=W.listener,Fe=W.ha||W.src;W.fa&&D(i.i,W),R=oe.call(Fe,p)!==!1&&R}}return R&&!p.defaultPrevented}function Q(i,c){if(typeof i!="function")if(i&&typeof i.handleEvent=="function")i=f(i.handleEvent,i);else throw Error("Invalid listener argument");return Number(c)>2147483647?-1:a.setTimeout(i,c||0)}function K(i){i.g=Q(()=>{i.g=null,i.i&&(i.i=!1,K(i))},i.l);const c=i.h;i.h=null,i.m.apply(null,c)}class Y extends T{constructor(c,h){super(),this.m=c,this.l=h,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:K(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Z(i){T.call(this),this.h=i,this.g={}}g(Z,T);var le=[];function Ee(i){Ue(i.g,function(c,h){this.g.hasOwnProperty(h)&&b(c)},i),i.g={}}Z.prototype.N=function(){Z.Z.N.call(this),Ee(this)},Z.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var fe=a.JSON.stringify,ze=a.JSON.parse,Ke=class{stringify(i){return a.JSON.stringify(i,void 0)}parse(i){return a.JSON.parse(i,void 0)}};function ut(){}function mt(){}var St={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function ns(){S.call(this,"d")}g(ns,S);function He(){S.call(this,"c")}g(He,S);var $e={},Ms=null;function ss(){return Ms=Ms||new B}$e.Ia="serverreachability";function mc(i){S.call(this,$e.Ia,i)}g(mc,S);function Us(i){const c=ss();j(c,new mc(c))}$e.STAT_EVENT="statevent";function yc(i,c){S.call(this,$e.STAT_EVENT,i),this.stat=c}g(yc,S);function Ze(i){const c=ss();j(c,new yc(c,i))}$e.Ja="timingevent";function _c(i,c){S.call(this,$e.Ja,i),this.size=c}g(_c,S);function Fs(i,c){if(typeof i!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){i()},c)}function js(){this.g=!0}js.prototype.ua=function(){this.g=!1};function Gd(i,c,h,p,R,O){i.info(function(){if(i.g)if(O){var W="",oe=O.split("&");for(let Ie=0;Ie<oe.length;Ie++){var Fe=oe[Ie].split("=");if(Fe.length>1){const je=Fe[0];Fe=Fe[1];const Dt=je.split("_");W=Dt.length>=2&&Dt[1]=="type"?W+(je+"="+Fe+"&"):W+(je+"=redacted&")}}}else W=null;else W=O;return"XMLHTTP REQ ("+p+") [attempt "+R+"]: "+c+`
`+h+`
`+W})}function Jd(i,c,h,p,R,O,W){i.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+R+"]: "+c+`
`+h+`
`+O+" "+W})}function rs(i,c,h,p){i.info(function(){return"XMLHTTP TEXT ("+c+"): "+Yd(i,h)+(p?" "+p:"")})}function Xd(i,c){i.info(function(){return"TIMEOUT: "+c})}js.prototype.info=function(){};function Yd(i,c){if(!i.g)return c;if(!c)return null;try{const O=JSON.parse(c);if(O){for(i=0;i<O.length;i++)if(Array.isArray(O[i])){var h=O[i];if(!(h.length<2)){var p=h[1];if(Array.isArray(p)&&!(p.length<1)){var R=p[0];if(R!="noop"&&R!="stop"&&R!="close")for(let W=1;W<p.length;W++)p[W]=""}}}}return fe(O)}catch{return c}}var ao={NO_ERROR:0,TIMEOUT:8},Qd={},wc;function co(){}g(co,ut),co.prototype.g=function(){return new XMLHttpRequest},wc=new co;function Vs(i){return encodeURIComponent(String(i))}function Zd(i){var c=1;i=i.split(":");const h=[];for(;c>0&&i.length;)h.push(i.shift()),c--;return i.length&&h.push(i.join(":")),h}function an(i,c,h,p){this.j=i,this.i=c,this.l=h,this.S=p||1,this.V=new Z(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Ec}function Ec(){this.i=null,this.g="",this.h=!1}var vc={},lo={};function uo(i,c,h){i.M=1,i.A=Br(xt(c)),i.u=h,i.R=!0,bc(i,null)}function bc(i,c){i.F=Date.now(),Vr(i),i.B=xt(i.A);var h=i.B,p=i.S;Array.isArray(p)||(p=[String(p)]),Lc(h.i,"t",p),i.C=0,h=i.j.L,i.h=new Ec,i.g=Zc(i.j,h?c:null,!i.u),i.P>0&&(i.O=new Y(f(i.Y,i,i.g),i.P)),c=i.V,h=i.g,p=i.ba;var R="readystatechange";Array.isArray(R)||(R&&(le[0]=R.toString()),R=le);for(let O=0;O<R.length;O++){const W=pe(h,R[O],p||c.handleEvent,!1,c.h||c);if(!W)break;c.g[W.key]=W}c=i.J?ke(i.J):{},i.u?(i.v||(i.v="POST"),c["Content-Type"]="application/x-www-form-urlencoded",i.g.ea(i.B,i.v,i.u,c)):(i.v="GET",i.g.ea(i.B,i.v,null,c)),Us(),Gd(i.i,i.v,i.B,i.l,i.S,i.u)}an.prototype.ba=function(i){i=i.target;const c=this.O;c&&un(i)==3?c.j():this.Y(i)},an.prototype.Y=function(i){try{if(i==this.g)e:{const oe=un(this.g),Fe=this.g.ya(),Ie=this.g.ca();if(!(oe<3)&&(oe!=3||this.g&&(this.h.h||this.g.la()||Hc(this.g)))){this.K||oe!=4||Fe==7||(Fe==8||Ie<=0?Us(3):Us(2)),ho(this);var c=this.g.ca();this.X=c;var h=ep(this);if(this.o=c==200,Jd(this.i,this.v,this.B,this.l,this.S,oe,c),this.o){if(this.U&&!this.L){t:{if(this.g){var p,R=this.g;if((p=R.g?R.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!w(p)){var O=p;break t}}O=null}if(i=O)rs(this.i,this.l,i,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,fo(this,i);else{this.o=!1,this.m=3,Ze(12),xn(this),Bs(this);break e}}if(this.R){i=!0;let je;for(;!this.K&&this.C<h.length;)if(je=tp(this,h),je==lo){oe==4&&(this.m=4,Ze(14),i=!1),rs(this.i,this.l,null,"[Incomplete Response]");break}else if(je==vc){this.m=4,Ze(15),rs(this.i,this.l,h,"[Invalid Chunk]"),i=!1;break}else rs(this.i,this.l,je,null),fo(this,je);if(Sc(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),oe!=4||h.length!=0||this.h.h||(this.m=1,Ze(16),i=!1),this.o=this.o&&i,!i)rs(this.i,this.l,h,"[Invalid Chunked Response]"),xn(this),Bs(this);else if(h.length>0&&!this.W){this.W=!0;var W=this.j;W.g==this&&W.aa&&!W.P&&(W.j.info("Great, no buffering proxy detected. Bytes received: "+h.length),vo(W),W.P=!0,Ze(11))}}else rs(this.i,this.l,h,null),fo(this,h);oe==4&&xn(this),this.o&&!this.K&&(oe==4?Jc(this.j,this):(this.o=!1,Vr(this)))}else gp(this.g),c==400&&h.indexOf("Unknown SID")>0?(this.m=3,Ze(12)):(this.m=0,Ze(13)),xn(this),Bs(this)}}}catch{}finally{}};function ep(i){if(!Sc(i))return i.g.la();const c=Hc(i.g);if(c==="")return"";let h="";const p=c.length,R=un(i.g)==4;if(!i.h.i){if(typeof TextDecoder>"u")return xn(i),Bs(i),"";i.h.i=new a.TextDecoder}for(let O=0;O<p;O++)i.h.h=!0,h+=i.h.i.decode(c[O],{stream:!(R&&O==p-1)});return c.length=0,i.h.g+=h,i.C=0,i.h.g}function Sc(i){return i.g?i.v=="GET"&&i.M!=2&&i.j.Aa:!1}function tp(i,c){var h=i.C,p=c.indexOf(`
`,h);return p==-1?lo:(h=Number(c.substring(h,p)),isNaN(h)?vc:(p+=1,p+h>c.length?lo:(c=c.slice(p,p+h),i.C=p+h,c)))}an.prototype.cancel=function(){this.K=!0,xn(this)};function Vr(i){i.T=Date.now()+i.H,Tc(i,i.H)}function Tc(i,c){if(i.D!=null)throw Error("WatchDog timer not null");i.D=Fs(f(i.aa,i),c)}function ho(i){i.D&&(a.clearTimeout(i.D),i.D=null)}an.prototype.aa=function(){this.D=null;const i=Date.now();i-this.T>=0?(Xd(this.i,this.B),this.M!=2&&(Us(),Ze(17)),xn(this),this.m=2,Bs(this)):Tc(this,this.T-i)};function Bs(i){i.j.I==0||i.K||Jc(i.j,i)}function xn(i){ho(i);var c=i.O;c&&typeof c.dispose=="function"&&c.dispose(),i.O=null,Ee(i.V),i.g&&(c=i.g,i.g=null,c.abort(),c.dispose())}function fo(i,c){try{var h=i.j;if(h.I!=0&&(h.g==i||po(h.h,i))){if(!i.L&&po(h.h,i)&&h.I==3){try{var p=h.Ba.g.parse(c)}catch{p=null}if(Array.isArray(p)&&p.length==3){var R=p;if(R[0]==0){e:if(!h.v){if(h.g)if(h.g.F+3e3<i.F)zr(h),Wr(h);else break e;Eo(h),Ze(18)}}else h.xa=R[1],0<h.xa-h.K&&R[2]<37500&&h.F&&h.A==0&&!h.C&&(h.C=Fs(f(h.Va,h),6e3));Rc(h.h)<=1&&h.ta&&(h.ta=void 0)}else Ln(h,11)}else if((i.L||h.g==i)&&zr(h),!w(c))for(R=h.Ba.g.parse(c),c=0;c<R.length;c++){let Ie=R[c];const je=Ie[0];if(!(je<=h.K))if(h.K=je,Ie=Ie[1],h.I==2)if(Ie[0]=="c"){h.M=Ie[1],h.ba=Ie[2];const Dt=Ie[3];Dt!=null&&(h.ka=Dt,h.j.info("VER="+h.ka));const Mn=Ie[4];Mn!=null&&(h.za=Mn,h.j.info("SVER="+h.za));const hn=Ie[5];hn!=null&&typeof hn=="number"&&hn>0&&(p=1.5*hn,h.O=p,h.j.info("backChannelRequestTimeoutMs_="+p)),p=h;const fn=i.g;if(fn){const Kr=fn.g?fn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Kr){var O=p.h;O.g||Kr.indexOf("spdy")==-1&&Kr.indexOf("quic")==-1&&Kr.indexOf("h2")==-1||(O.j=O.l,O.g=new Set,O.h&&(go(O,O.h),O.h=null))}if(p.G){const bo=fn.g?fn.g.getResponseHeader("X-HTTP-Session-Id"):null;bo&&(p.wa=bo,Ce(p.J,p.G,bo))}}h.I=3,h.l&&h.l.ra(),h.aa&&(h.T=Date.now()-i.F,h.j.info("Handshake RTT: "+h.T+"ms")),p=h;var W=i;if(p.na=Qc(p,p.L?p.ba:null,p.W),W.L){Cc(p.h,W);var oe=W,Fe=p.O;Fe&&(oe.H=Fe),oe.D&&(ho(oe),Vr(oe)),p.g=W}else Kc(p);h.i.length>0&&qr(h)}else Ie[0]!="stop"&&Ie[0]!="close"||Ln(h,7);else h.I==3&&(Ie[0]=="stop"||Ie[0]=="close"?Ie[0]=="stop"?Ln(h,7):wo(h):Ie[0]!="noop"&&h.l&&h.l.qa(Ie),h.A=0)}}Us(4)}catch{}}var np=class{constructor(i,c){this.g=i,this.map=c}};function Ic(i){this.l=i||10,a.PerformanceNavigationTiming?(i=a.performance.getEntriesByType("navigation"),i=i.length>0&&(i[0].nextHopProtocol=="hq"||i[0].nextHopProtocol=="h2")):i=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=i?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Ac(i){return i.h?!0:i.g?i.g.size>=i.j:!1}function Rc(i){return i.h?1:i.g?i.g.size:0}function po(i,c){return i.h?i.h==c:i.g?i.g.has(c):!1}function go(i,c){i.g?i.g.add(c):i.h=c}function Cc(i,c){i.h&&i.h==c?i.h=null:i.g&&i.g.has(c)&&i.g.delete(c)}Ic.prototype.cancel=function(){if(this.i=Pc(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const i of this.g.values())i.cancel();this.g.clear()}};function Pc(i){if(i.h!=null)return i.i.concat(i.h.G);if(i.g!=null&&i.g.size!==0){let c=i.i;for(const h of i.g.values())c=c.concat(h.G);return c}return C(i.i)}var Oc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function sp(i,c){if(i){i=i.split("&");for(let h=0;h<i.length;h++){const p=i[h].indexOf("=");let R,O=null;p>=0?(R=i[h].substring(0,p),O=i[h].substring(p+1)):R=i[h],c(R,O?decodeURIComponent(O.replace(/\+/g," ")):"")}}}function cn(i){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let c;i instanceof cn?(this.l=i.l,Hs(this,i.j),this.o=i.o,this.g=i.g,$s(this,i.u),this.h=i.h,mo(this,Mc(i.i)),this.m=i.m):i&&(c=String(i).match(Oc))?(this.l=!1,Hs(this,c[1]||"",!0),this.o=Ws(c[2]||""),this.g=Ws(c[3]||"",!0),$s(this,c[4]),this.h=Ws(c[5]||"",!0),mo(this,c[6]||"",!0),this.m=Ws(c[7]||"")):(this.l=!1,this.i=new zs(null,this.l))}cn.prototype.toString=function(){const i=[];var c=this.j;c&&i.push(qs(c,kc,!0),":");var h=this.g;return(h||c=="file")&&(i.push("//"),(c=this.o)&&i.push(qs(c,kc,!0),"@"),i.push(Vs(h).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.u,h!=null&&i.push(":",String(h))),(h=this.h)&&(this.g&&h.charAt(0)!="/"&&i.push("/"),i.push(qs(h,h.charAt(0)=="/"?op:ip,!0))),(h=this.i.toString())&&i.push("?",h),(h=this.m)&&i.push("#",qs(h,cp)),i.join("")},cn.prototype.resolve=function(i){const c=xt(this);let h=!!i.j;h?Hs(c,i.j):h=!!i.o,h?c.o=i.o:h=!!i.g,h?c.g=i.g:h=i.u!=null;var p=i.h;if(h)$s(c,i.u);else if(h=!!i.h){if(p.charAt(0)!="/")if(this.g&&!this.h)p="/"+p;else{var R=c.h.lastIndexOf("/");R!=-1&&(p=c.h.slice(0,R+1)+p)}if(R=p,R==".."||R==".")p="";else if(R.indexOf("./")!=-1||R.indexOf("/.")!=-1){p=R.lastIndexOf("/",0)==0,R=R.split("/");const O=[];for(let W=0;W<R.length;){const oe=R[W++];oe=="."?p&&W==R.length&&O.push(""):oe==".."?((O.length>1||O.length==1&&O[0]!="")&&O.pop(),p&&W==R.length&&O.push("")):(O.push(oe),p=!0)}p=O.join("/")}else p=R}return h?c.h=p:h=i.i.toString()!=="",h?mo(c,Mc(i.i)):h=!!i.m,h&&(c.m=i.m),c};function xt(i){return new cn(i)}function Hs(i,c,h){i.j=h?Ws(c,!0):c,i.j&&(i.j=i.j.replace(/:$/,""))}function $s(i,c){if(c){if(c=Number(c),isNaN(c)||c<0)throw Error("Bad port number "+c);i.u=c}else i.u=null}function mo(i,c,h){c instanceof zs?(i.i=c,lp(i.i,i.l)):(h||(c=qs(c,ap)),i.i=new zs(c,i.l))}function Ce(i,c,h){i.i.set(c,h)}function Br(i){return Ce(i,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),i}function Ws(i,c){return i?c?decodeURI(i.replace(/%25/g,"%2525")):decodeURIComponent(i):""}function qs(i,c,h){return typeof i=="string"?(i=encodeURI(i).replace(c,rp),h&&(i=i.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),i):null}function rp(i){return i=i.charCodeAt(0),"%"+(i>>4&15).toString(16)+(i&15).toString(16)}var kc=/[#\/\?@]/g,ip=/[#\?:]/g,op=/[#\?]/g,ap=/[#\?@]/g,cp=/#/g;function zs(i,c){this.h=this.g=null,this.i=i||null,this.j=!!c}function Dn(i){i.g||(i.g=new Map,i.h=0,i.i&&sp(i.i,function(c,h){i.add(decodeURIComponent(c.replace(/\+/g," ")),h)}))}t=zs.prototype,t.add=function(i,c){Dn(this),this.i=null,i=is(this,i);let h=this.g.get(i);return h||this.g.set(i,h=[]),h.push(c),this.h+=1,this};function Nc(i,c){Dn(i),c=is(i,c),i.g.has(c)&&(i.i=null,i.h-=i.g.get(c).length,i.g.delete(c))}function xc(i,c){return Dn(i),c=is(i,c),i.g.has(c)}t.forEach=function(i,c){Dn(this),this.g.forEach(function(h,p){h.forEach(function(R){i.call(c,R,p,this)},this)},this)};function Dc(i,c){Dn(i);let h=[];if(typeof c=="string")xc(i,c)&&(h=h.concat(i.g.get(is(i,c))));else for(i=Array.from(i.g.values()),c=0;c<i.length;c++)h=h.concat(i[c]);return h}t.set=function(i,c){return Dn(this),this.i=null,i=is(this,i),xc(this,i)&&(this.h-=this.g.get(i).length),this.g.set(i,[c]),this.h+=1,this},t.get=function(i,c){return i?(i=Dc(this,i),i.length>0?String(i[0]):c):c};function Lc(i,c,h){Nc(i,c),h.length>0&&(i.i=null,i.g.set(is(i,c),C(h)),i.h+=h.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const i=[],c=Array.from(this.g.keys());for(let p=0;p<c.length;p++){var h=c[p];const R=Vs(h);h=Dc(this,h);for(let O=0;O<h.length;O++){let W=R;h[O]!==""&&(W+="="+Vs(h[O])),i.push(W)}}return this.i=i.join("&")};function Mc(i){const c=new zs;return c.i=i.i,i.g&&(c.g=new Map(i.g),c.h=i.h),c}function is(i,c){return c=String(c),i.j&&(c=c.toLowerCase()),c}function lp(i,c){c&&!i.j&&(Dn(i),i.i=null,i.g.forEach(function(h,p){const R=p.toLowerCase();p!=R&&(Nc(this,p),Lc(this,R,h))},i)),i.j=c}function up(i,c){const h=new js;if(a.Image){const p=new Image;p.onload=d(ln,h,"TestLoadImage: loaded",!0,c,p),p.onerror=d(ln,h,"TestLoadImage: error",!1,c,p),p.onabort=d(ln,h,"TestLoadImage: abort",!1,c,p),p.ontimeout=d(ln,h,"TestLoadImage: timeout",!1,c,p),a.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=i}else c(!1)}function hp(i,c){const h=new js,p=new AbortController,R=setTimeout(()=>{p.abort(),ln(h,"TestPingServer: timeout",!1,c)},1e4);fetch(i,{signal:p.signal}).then(O=>{clearTimeout(R),O.ok?ln(h,"TestPingServer: ok",!0,c):ln(h,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(R),ln(h,"TestPingServer: error",!1,c)})}function ln(i,c,h,p,R){try{R&&(R.onload=null,R.onerror=null,R.onabort=null,R.ontimeout=null),p(h)}catch{}}function fp(){this.g=new Ke}function yo(i){this.i=i.Sb||null,this.h=i.ab||!1}g(yo,ut),yo.prototype.g=function(){return new Hr(this.i,this.h)};function Hr(i,c){B.call(this),this.H=i,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}g(Hr,B),t=Hr.prototype,t.open=function(i,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=i,this.D=c,this.readyState=1,Gs(this)},t.send=function(i){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const c={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};i&&(c.body=i),(this.H||a).fetch(new Request(this.D,c)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Ks(this)),this.readyState=0},t.Pa=function(i){if(this.g&&(this.l=i,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=i.headers,this.readyState=2,Gs(this)),this.g&&(this.readyState=3,Gs(this),this.g)))if(this.responseType==="arraybuffer")i.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in i){if(this.j=i.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Uc(this)}else i.text().then(this.Oa.bind(this),this.ga.bind(this))};function Uc(i){i.j.read().then(i.Ma.bind(i)).catch(i.ga.bind(i))}t.Ma=function(i){if(this.g){if(this.o&&i.value)this.response.push(i.value);else if(!this.o){var c=i.value?i.value:new Uint8Array(0);(c=this.B.decode(c,{stream:!i.done}))&&(this.response=this.responseText+=c)}i.done?Ks(this):Gs(this),this.readyState==3&&Uc(this)}},t.Oa=function(i){this.g&&(this.response=this.responseText=i,Ks(this))},t.Na=function(i){this.g&&(this.response=i,Ks(this))},t.ga=function(){this.g&&Ks(this)};function Ks(i){i.readyState=4,i.l=null,i.j=null,i.B=null,Gs(i)}t.setRequestHeader=function(i,c){this.A.append(i,c)},t.getResponseHeader=function(i){return this.h&&this.h.get(i.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const i=[],c=this.h.entries();for(var h=c.next();!h.done;)h=h.value,i.push(h[0]+": "+h[1]),h=c.next();return i.join(`\r
`)};function Gs(i){i.onreadystatechange&&i.onreadystatechange.call(i)}Object.defineProperty(Hr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(i){this.m=i?"include":"same-origin"}});function Fc(i){let c="";return Ue(i,function(h,p){c+=p,c+=":",c+=h,c+=`\r
`}),c}function _o(i,c,h){e:{for(p in h){var p=!1;break e}p=!0}p||(h=Fc(h),typeof i=="string"?h!=null&&Vs(h):Ce(i,c,h))}function Ne(i){B.call(this),this.headers=new Map,this.L=i||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}g(Ne,B);var dp=/^https?$/i,pp=["POST","PUT"];t=Ne.prototype,t.Fa=function(i){this.H=i},t.ea=function(i,c,h,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+i);c=c?c.toUpperCase():"GET",this.D=i,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():wc.g(),this.g.onreadystatechange=y(f(this.Ca,this));try{this.B=!0,this.g.open(c,String(i),!0),this.B=!1}catch(O){jc(this,O);return}if(i=h||"",h=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var R in p)h.set(R,p[R]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const O of p.keys())h.set(O,p.get(O));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(h.keys()).find(O=>O.toLowerCase()=="content-type"),R=a.FormData&&i instanceof a.FormData,!(Array.prototype.indexOf.call(pp,c,void 0)>=0)||p||R||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[O,W]of h)this.g.setRequestHeader(O,W);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(i),this.v=!1}catch(O){jc(this,O)}};function jc(i,c){i.h=!1,i.g&&(i.j=!0,i.g.abort(),i.j=!1),i.l=c,i.o=5,Vc(i),$r(i)}function Vc(i){i.A||(i.A=!0,j(i,"complete"),j(i,"error"))}t.abort=function(i){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=i||7,j(this,"complete"),j(this,"abort"),$r(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),$r(this,!0)),Ne.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?Bc(this):this.Xa())},t.Xa=function(){Bc(this)};function Bc(i){if(i.h&&typeof o<"u"){if(i.v&&un(i)==4)setTimeout(i.Ca.bind(i),0);else if(j(i,"readystatechange"),un(i)==4){i.h=!1;try{const O=i.ca();e:switch(O){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var h;if(!(h=c)){var p;if(p=O===0){let W=String(i.D).match(Oc)[1]||null;!W&&a.self&&a.self.location&&(W=a.self.location.protocol.slice(0,-1)),p=!dp.test(W?W.toLowerCase():"")}h=p}if(h)j(i,"complete"),j(i,"success");else{i.o=6;try{var R=un(i)>2?i.g.statusText:""}catch{R=""}i.l=R+" ["+i.ca()+"]",Vc(i)}}finally{$r(i)}}}}function $r(i,c){if(i.g){i.m&&(clearTimeout(i.m),i.m=null);const h=i.g;i.g=null,c||j(i,"ready");try{h.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function un(i){return i.g?i.g.readyState:0}t.ca=function(){try{return un(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(i){if(this.g){var c=this.g.responseText;return i&&c.indexOf(i)==0&&(c=c.substring(i.length)),ze(c)}};function Hc(i){try{if(!i.g)return null;if("response"in i.g)return i.g.response;switch(i.F){case"":case"text":return i.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in i.g)return i.g.mozResponseArrayBuffer}return null}catch{return null}}function gp(i){const c={};i=(i.g&&un(i)>=2&&i.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<i.length;p++){if(w(i[p]))continue;var h=Zd(i[p]);const R=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const O=c[R]||[];c[R]=O,O.push(h)}bt(c,function(p){return p.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Js(i,c,h){return h&&h.internalChannelParams&&h.internalChannelParams[i]||c}function $c(i){this.za=0,this.i=[],this.j=new js,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Js("failFast",!1,i),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Js("baseRetryDelayMs",5e3,i),this.Za=Js("retryDelaySeedMs",1e4,i),this.Ta=Js("forwardChannelMaxRetries",2,i),this.va=Js("forwardChannelRequestTimeoutMs",2e4,i),this.ma=i&&i.xmlHttpFactory||void 0,this.Ua=i&&i.Rb||void 0,this.Aa=i&&i.useFetchStreams||!1,this.O=void 0,this.L=i&&i.supportsCrossDomainXhr||!1,this.M="",this.h=new Ic(i&&i.concurrentRequestLimit),this.Ba=new fp,this.S=i&&i.fastHandshake||!1,this.R=i&&i.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=i&&i.Pb||!1,i&&i.ua&&this.j.ua(),i&&i.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&i&&i.detectBufferingProxy||!1,this.ia=void 0,i&&i.longPollingTimeout&&i.longPollingTimeout>0&&(this.ia=i.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=$c.prototype,t.ka=8,t.I=1,t.connect=function(i,c,h,p){Ze(0),this.W=i,this.H=c||{},h&&p!==void 0&&(this.H.OSID=h,this.H.OAID=p),this.F=this.X,this.J=Qc(this,null,this.W),qr(this)};function wo(i){if(Wc(i),i.I==3){var c=i.V++,h=xt(i.J);if(Ce(h,"SID",i.M),Ce(h,"RID",c),Ce(h,"TYPE","terminate"),Xs(i,h),c=new an(i,i.j,c),c.M=2,c.A=Br(xt(h)),h=!1,a.navigator&&a.navigator.sendBeacon)try{h=a.navigator.sendBeacon(c.A.toString(),"")}catch{}!h&&a.Image&&(new Image().src=c.A,h=!0),h||(c.g=Zc(c.j,null),c.g.ea(c.A)),c.F=Date.now(),Vr(c)}Yc(i)}function Wr(i){i.g&&(vo(i),i.g.cancel(),i.g=null)}function Wc(i){Wr(i),i.v&&(a.clearTimeout(i.v),i.v=null),zr(i),i.h.cancel(),i.m&&(typeof i.m=="number"&&a.clearTimeout(i.m),i.m=null)}function qr(i){if(!Ac(i.h)&&!i.m){i.m=!0;var c=i.Ea;te||_(),ae||(te(),ae=!0),v.add(c,i),i.D=0}}function mp(i,c){return Rc(i.h)>=i.h.j-(i.m?1:0)?!1:i.m?(i.i=c.G.concat(i.i),!0):i.I==1||i.I==2||i.D>=(i.Sa?0:i.Ta)?!1:(i.m=Fs(f(i.Ea,i,c),Xc(i,i.D)),i.D++,!0)}t.Ea=function(i){if(this.m)if(this.m=null,this.I==1){if(!i){this.V=Math.floor(Math.random()*1e5),i=this.V++;const R=new an(this,this.j,i);let O=this.o;if(this.U&&(O?(O=ke(O),lt(O,this.U)):O=this.U),this.u!==null||this.R||(R.J=O,O=null),this.S)e:{for(var c=0,h=0;h<this.i.length;h++){t:{var p=this.i[h];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break t}p=void 0}if(p===void 0)break;if(c+=p,c>4096){c=h;break e}if(c===4096||h===this.i.length-1){c=h+1;break e}}c=1e3}else c=1e3;c=zc(this,R,c),h=xt(this.J),Ce(h,"RID",i),Ce(h,"CVER",22),this.G&&Ce(h,"X-HTTP-Session-Id",this.G),Xs(this,h),O&&(this.R?c="headers="+Vs(Fc(O))+"&"+c:this.u&&_o(h,this.u,O)),go(this.h,R),this.Ra&&Ce(h,"TYPE","init"),this.S?(Ce(h,"$req",c),Ce(h,"SID","null"),R.U=!0,uo(R,h,null)):uo(R,h,c),this.I=2}}else this.I==3&&(i?qc(this,i):this.i.length==0||Ac(this.h)||qc(this))};function qc(i,c){var h;c?h=c.l:h=i.V++;const p=xt(i.J);Ce(p,"SID",i.M),Ce(p,"RID",h),Ce(p,"AID",i.K),Xs(i,p),i.u&&i.o&&_o(p,i.u,i.o),h=new an(i,i.j,h,i.D+1),i.u===null&&(h.J=i.o),c&&(i.i=c.G.concat(i.i)),c=zc(i,h,1e3),h.H=Math.round(i.va*.5)+Math.round(i.va*.5*Math.random()),go(i.h,h),uo(h,p,c)}function Xs(i,c){i.H&&Ue(i.H,function(h,p){Ce(c,p,h)}),i.l&&Ue({},function(h,p){Ce(c,p,h)})}function zc(i,c,h){h=Math.min(i.i.length,h);const p=i.l?f(i.l.Ka,i.l,i):null;e:{var R=i.i;let oe=-1;for(;;){const Fe=["count="+h];oe==-1?h>0?(oe=R[0].g,Fe.push("ofs="+oe)):oe=0:Fe.push("ofs="+oe);let Ie=!0;for(let je=0;je<h;je++){var O=R[je].g;const Dt=R[je].map;if(O-=oe,O<0)oe=Math.max(0,R[je].g-100),Ie=!1;else try{O="req"+O+"_"||"";try{var W=Dt instanceof Map?Dt:Object.entries(Dt);for(const[Mn,hn]of W){let fn=hn;l(hn)&&(fn=fe(hn)),Fe.push(O+Mn+"="+encodeURIComponent(fn))}}catch(Mn){throw Fe.push(O+"type="+encodeURIComponent("_badmap")),Mn}}catch{p&&p(Dt)}}if(Ie){W=Fe.join("&");break e}}W=void 0}return i=i.i.splice(0,h),c.G=i,W}function Kc(i){if(!i.g&&!i.v){i.Y=1;var c=i.Da;te||_(),ae||(te(),ae=!0),v.add(c,i),i.A=0}}function Eo(i){return i.g||i.v||i.A>=3?!1:(i.Y++,i.v=Fs(f(i.Da,i),Xc(i,i.A)),i.A++,!0)}t.Da=function(){if(this.v=null,Gc(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var i=4*this.T;this.j.info("BP detection timer enabled: "+i),this.B=Fs(f(this.Wa,this),i)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Ze(10),Wr(this),Gc(this))};function vo(i){i.B!=null&&(a.clearTimeout(i.B),i.B=null)}function Gc(i){i.g=new an(i,i.j,"rpc",i.Y),i.u===null&&(i.g.J=i.o),i.g.P=0;var c=xt(i.na);Ce(c,"RID","rpc"),Ce(c,"SID",i.M),Ce(c,"AID",i.K),Ce(c,"CI",i.F?"0":"1"),!i.F&&i.ia&&Ce(c,"TO",i.ia),Ce(c,"TYPE","xmlhttp"),Xs(i,c),i.u&&i.o&&_o(c,i.u,i.o),i.O&&(i.g.H=i.O);var h=i.g;i=i.ba,h.M=1,h.A=Br(xt(c)),h.u=null,h.R=!0,bc(h,i)}t.Va=function(){this.C!=null&&(this.C=null,Wr(this),Eo(this),Ze(19))};function zr(i){i.C!=null&&(a.clearTimeout(i.C),i.C=null)}function Jc(i,c){var h=null;if(i.g==c){zr(i),vo(i),i.g=null;var p=2}else if(po(i.h,c))h=c.G,Cc(i.h,c),p=1;else return;if(i.I!=0){if(c.o)if(p==1){h=c.u?c.u.length:0,c=Date.now()-c.F;var R=i.D;p=ss(),j(p,new _c(p,h)),qr(i)}else Kc(i);else if(R=c.m,R==3||R==0&&c.X>0||!(p==1&&mp(i,c)||p==2&&Eo(i)))switch(h&&h.length>0&&(c=i.h,c.i=c.i.concat(h)),R){case 1:Ln(i,5);break;case 4:Ln(i,10);break;case 3:Ln(i,6);break;default:Ln(i,2)}}}function Xc(i,c){let h=i.Qa+Math.floor(Math.random()*i.Za);return i.isActive()||(h*=2),h*c}function Ln(i,c){if(i.j.info("Error code "+c),c==2){var h=f(i.bb,i),p=i.Ua;const R=!p;p=new cn(p||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Hs(p,"https"),Br(p),R?up(p.toString(),h):hp(p.toString(),h)}else Ze(2);i.I=0,i.l&&i.l.pa(c),Yc(i),Wc(i)}t.bb=function(i){i?(this.j.info("Successfully pinged google.com"),Ze(2)):(this.j.info("Failed to ping google.com"),Ze(1))};function Yc(i){if(i.I=0,i.ja=[],i.l){const c=Pc(i.h);(c.length!=0||i.i.length!=0)&&(I(i.ja,c),I(i.ja,i.i),i.h.i.length=0,C(i.i),i.i.length=0),i.l.oa()}}function Qc(i,c,h){var p=h instanceof cn?xt(h):new cn(h);if(p.g!="")c&&(p.g=c+"."+p.g),$s(p,p.u);else{var R=a.location;p=R.protocol,c=c?c+"."+R.hostname:R.hostname,R=+R.port;const O=new cn(null);p&&Hs(O,p),c&&(O.g=c),R&&$s(O,R),h&&(O.h=h),p=O}return h=i.G,c=i.wa,h&&c&&Ce(p,h,c),Ce(p,"VER",i.ka),Xs(i,p),p}function Zc(i,c,h){if(c&&!i.L)throw Error("Can't create secondary domain capable XhrIo object.");return c=i.Aa&&!i.ma?new Ne(new yo({ab:h})):new Ne(i.ma),c.Fa(i.L),c}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function el(){}t=el.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function yt(i,c){B.call(this),this.g=new $c(c),this.l=i,this.h=c&&c.messageUrlParams||null,i=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(i?i["X-Client-Protocol"]="webchannel":i={"X-Client-Protocol":"webchannel"}),this.g.o=i,i=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(i?i["X-WebChannel-Content-Type"]=c.messageContentType:i={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.sa&&(i?i["X-WebChannel-Client-Profile"]=c.sa:i={"X-WebChannel-Client-Profile":c.sa}),this.g.U=i,(i=c&&c.Qb)&&!w(i)&&(this.g.u=i),this.A=c&&c.supportsCrossDomainXhr||!1,this.v=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!w(c)&&(this.g.G=c,i=this.h,i!==null&&c in i&&(i=this.h,c in i&&delete i[c])),this.j=new os(this)}g(yt,B),yt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},yt.prototype.close=function(){wo(this.g)},yt.prototype.o=function(i){var c=this.g;if(typeof i=="string"){var h={};h.__data__=i,i=h}else this.v&&(h={},h.__data__=fe(i),i=h);c.i.push(new np(c.Ya++,i)),c.I==3&&qr(c)},yt.prototype.N=function(){this.g.l=null,delete this.j,wo(this.g),delete this.g,yt.Z.N.call(this)};function tl(i){ns.call(this),i.__headers__&&(this.headers=i.__headers__,this.statusCode=i.__status__,delete i.__headers__,delete i.__status__);var c=i.__sm__;if(c){e:{for(const h in c){i=h;break e}i=void 0}(this.i=i)&&(i=this.i,c=c!==null&&i in c?c[i]:void 0),this.data=c}else this.data=i}g(tl,ns);function nl(){He.call(this),this.status=1}g(nl,He);function os(i){this.g=i}g(os,el),os.prototype.ra=function(){j(this.g,"a")},os.prototype.qa=function(i){j(this.g,new tl(i))},os.prototype.pa=function(i){j(this.g,new nl)},os.prototype.oa=function(){j(this.g,"b")},yt.prototype.send=yt.prototype.o,yt.prototype.open=yt.prototype.m,yt.prototype.close=yt.prototype.close,ao.NO_ERROR=0,ao.TIMEOUT=8,ao.HTTP_ERROR=6,Qd.COMPLETE="complete",mt.EventType=St,St.OPEN="a",St.CLOSE="b",St.ERROR="c",St.MESSAGE="d",B.prototype.listen=B.prototype.J,Ne.prototype.listenOnce=Ne.prototype.K,Ne.prototype.getLastError=Ne.prototype.Ha,Ne.prototype.getLastErrorCode=Ne.prototype.ya,Ne.prototype.getStatus=Ne.prototype.ca,Ne.prototype.getResponseJson=Ne.prototype.La,Ne.prototype.getResponseText=Ne.prototype.la,Ne.prototype.send=Ne.prototype.ea,Ne.prototype.setWithCredentials=Ne.prototype.Fa}).apply(typeof Zr<"u"?Zr:typeof self<"u"?self:typeof window<"u"?window:{});const zu="@firebase/firestore",Ku="4.9.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ft.UNAUTHENTICATED=new ft(null),ft.GOOGLE_CREDENTIALS=new ft("google-credentials-uid"),ft.FIRST_PARTY=new ft("first-party-uid"),ft.MOCK_USER=new ft("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let oo="12.3.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ni=new ec("@firebase/firestore");function Rt(t,...e){if(Ni.logLevel<=be.DEBUG){const n=e.map($d);Ni.debug(`Firestore (${oo}): ${t}`,...n)}}function Hd(t,...e){if(Ni.logLevel<=be.ERROR){const n=e.map($d);Ni.error(`Firestore (${oo}): ${t}`,...n)}}function $d(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return(function(n){return JSON.stringify(n)})(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xi(t,e,n){let s="Unexpected state";typeof e=="string"?s=e:n=e,Wd(t,s,n)}function Wd(t,e,n){let s=`FIRESTORE (${oo}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{s+=" CONTEXT: "+JSON.stringify(n)}catch{s+=" CONTEXT: "+n}throw Hd(s),new Error(s)}function gr(t,e,n,s){let r="Unexpected state";typeof n=="string"?r=n:s=n,t||Wd(e,r,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ge={CANCELLED:"cancelled",INVALID_ARGUMENT:"invalid-argument",FAILED_PRECONDITION:"failed-precondition"};class me extends on{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr{constructor(){this.promise=new Promise(((e,n)=>{this.resolve=e,this.reject=n}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KS{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class GS{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable((()=>n(ft.UNAUTHENTICATED)))}shutdown(){}}class JS{constructor(e){this.t=e,this.currentUser=ft.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){gr(this.o===void 0,42304);let s=this.i;const r=u=>this.i!==s?(s=this.i,n(u)):Promise.resolve();let o=new mr;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new mr,e.enqueueRetryable((()=>r(this.currentUser)))};const a=()=>{const u=o;e.enqueueRetryable((async()=>{await u.promise,await r(this.currentUser)}))},l=u=>{Rt("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit((u=>l(u))),setTimeout((()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(Rt("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new mr)}}),0),a()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then((s=>this.i!==e?(Rt("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(gr(typeof s.accessToken=="string",31837,{l:s}),new KS(s.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return gr(e===null||typeof e=="string",2055,{h:e}),new ft(e)}}class XS{constructor(e,n,s){this.P=e,this.T=n,this.I=s,this.type="FirstParty",this.user=ft.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class YS{constructor(e,n,s){this.P=e,this.T=n,this.I=s}getToken(){return Promise.resolve(new XS(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable((()=>n(ft.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Gu{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class QS{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,It(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){gr(this.o===void 0,3512);const s=o=>{o.error!=null&&Rt("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.m;return this.m=o.token,Rt("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?n(o.token):Promise.resolve()};this.o=o=>{e.enqueueRetryable((()=>s(o)))};const r=o=>{Rt("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((o=>r(o))),setTimeout((()=>{if(!this.appCheck){const o=this.V.getImmediate({optional:!0});o?r(o):Rt("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Gu(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((n=>n?(gr(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new Gu(n.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZS(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e0{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const r=ZS(40);for(let o=0;o<r.length;++o)s.length<20&&r[o]<n&&(s+=e.charAt(r[o]%62))}return s}}function Pn(t,e){return t<e?-1:t>e?1:0}function t0(t,e){const n=Math.min(t.length,e.length);for(let s=0;s<n;s++){const r=t.charAt(s),o=e.charAt(s);if(r!==o)return Xo(r)===Xo(o)?Pn(r,o):Xo(r)?1:-1}return Pn(t.length,e.length)}const n0=55296,s0=57343;function Xo(t){const e=t.charCodeAt(0);return e>=n0&&e<=s0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ju="__name__";class Ft{constructor(e,n,s){n===void 0?n=0:n>e.length&&xi(637,{offset:n,range:e.length}),s===void 0?s=e.length-n:s>e.length-n&&xi(1746,{length:s,range:e.length-n}),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return Ft.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Ft?e.forEach((s=>{n.push(s)})):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let r=0;r<s;r++){const o=Ft.compareSegments(e.get(r),n.get(r));if(o!==0)return o}return Pn(e.length,n.length)}static compareSegments(e,n){const s=Ft.isNumericId(e),r=Ft.isNumericId(n);return s&&!r?-1:!s&&r?1:s&&r?Ft.extractNumericId(e).compare(Ft.extractNumericId(n)):t0(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return hc.fromString(e.substring(4,e.length-2))}}class Tt extends Ft{construct(e,n,s){return new Tt(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new me(ge.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter((r=>r.length>0)))}return new Tt(n)}static emptyPath(){return new Tt([])}}const r0=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class $n extends Ft{construct(e,n,s){return new $n(e,n,s)}static isValidIdentifier(e){return r0.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),$n.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Ju}static keyField(){return new $n([Ju])}static fromServerFormat(e){const n=[];let s="",r=0;const o=()=>{if(s.length===0)throw new me(ge.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let a=!1;for(;r<e.length;){const l=e[r];if(l==="\\"){if(r+1===e.length)throw new me(ge.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[r+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new me(ge.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=u,r+=2}else l==="`"?(a=!a,r++):l!=="."||a?(s+=l,r++):(o(),r++)}if(o(),a)throw new me(ge.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new $n(n)}static emptyPath(){return new $n([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn{constructor(e){this.path=e}static fromPath(e){return new qn(Tt.fromString(e))}static fromName(e){return new qn(Tt.fromString(e).popFirst(5))}static empty(){return new qn(Tt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Tt.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Tt.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new qn(new Tt(e.slice()))}}function i0(t,e,n,s){if(e===!0&&s===!0)throw new me(ge.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function o0(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Le(t,e){const n={typeString:t};return e&&(n.value=e),n}function jr(t,e){if(!o0(t))throw new me(ge.INVALID_ARGUMENT,"JSON must be an object");let n;for(const s in e)if(e[s]){const r=e[s].typeString,o="value"in e[s]?{value:e[s].value}:void 0;if(!(s in t)){n=`JSON missing required field: '${s}'`;break}const a=t[s];if(r&&typeof a!==r){n=`JSON field '${s}' must be a ${r}.`;break}if(o!==void 0&&a!==o.value){n=`Expected '${s}' field to equal '${o.value}'`;break}}if(n)throw new me(ge.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xu=-62135596800,Yu=1e6;class Vt{static now(){return Vt.fromMillis(Date.now())}static fromDate(e){return Vt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor((e-1e3*n)*Yu);return new Vt(n,s)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new me(ge.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new me(ge.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<Xu)throw new me(ge.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new me(ge.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Yu}_compareTo(e){return this.seconds===e.seconds?Pn(this.nanoseconds,e.nanoseconds):Pn(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Vt._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(jr(e,Vt._jsonSchema))return new Vt(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Xu;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Vt._jsonSchemaVersion="firestore/timestamp/1.0",Vt._jsonSchema={type:Le("string",Vt._jsonSchemaVersion),seconds:Le("number"),nanoseconds:Le("number")};function a0(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c0 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn{constructor(e){this.binaryString=e}static fromBase64String(e){const n=(function(r){try{return atob(r)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new c0("Invalid base64 string: "+o):o}})(e);return new Zn(n)}static fromUint8Array(e){const n=(function(r){let o="";for(let a=0;a<r.length;++a)o+=String.fromCharCode(r[a]);return o})(e);return new Zn(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(n){return btoa(n)})(this.binaryString)}toUint8Array(){return(function(n){const s=new Uint8Array(n.length);for(let r=0;r<n.length;r++)s[r]=n.charCodeAt(r);return s})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Pn(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Zn.EMPTY_BYTE_STRING=new Zn("");const Qu="(default)";class Di{constructor(e,n){this.projectId=e,this.database=n||Qu}static empty(){return new Di("","")}get isDefaultDatabase(){return this.database===Qu}isEqual(e){return e instanceof Di&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l0{constructor(e,n=null,s=[],r=[],o=null,a="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=o,this.limitType=a,this.startAt=l,this.endAt=u,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function u0(t){return new l0(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Zu,ue;(ue=Zu||(Zu={}))[ue.OK=0]="OK",ue[ue.CANCELLED=1]="CANCELLED",ue[ue.UNKNOWN=2]="UNKNOWN",ue[ue.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ue[ue.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ue[ue.NOT_FOUND=5]="NOT_FOUND",ue[ue.ALREADY_EXISTS=6]="ALREADY_EXISTS",ue[ue.PERMISSION_DENIED=7]="PERMISSION_DENIED",ue[ue.UNAUTHENTICATED=16]="UNAUTHENTICATED",ue[ue.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ue[ue.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ue[ue.ABORTED=10]="ABORTED",ue[ue.OUT_OF_RANGE=11]="OUT_OF_RANGE",ue[ue.UNIMPLEMENTED=12]="UNIMPLEMENTED",ue[ue.INTERNAL=13]="INTERNAL",ue[ue.UNAVAILABLE=14]="UNAVAILABLE",ue[ue.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new hc([4294967295,4294967295],0);/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h0=41943040;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f0=1048576;function Yo(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d0{constructor(e,n,s=1e3,r=1.5,o=6e4){this.Mi=e,this.timerId=n,this.d_=s,this.A_=r,this.R_=o,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const n=Math.floor(this.V_+this.y_()),s=Math.max(0,Date.now()-this.f_),r=Math.max(0,n-s);r>0&&Rt("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.V_} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,r,(()=>(this.f_=Date.now(),e()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fc{constructor(e,n,s,r,o){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=o,this.deferred=new mr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((a=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,n,s,r,o){const a=Date.now()+s,l=new fc(e,n,a,r,o);return l.start(s),l}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new me(ge.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}var eh,th;(th=eh||(eh={})).Ma="default",th.Cache="cache";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p0(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nh=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g0="firestore.googleapis.com",sh=!0;class rh{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new me(ge.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=g0,this.ssl=sh}else this.host=e.host,this.ssl=e.ssl??sh;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=h0;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<f0)throw new me(ge.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}i0("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=p0(e.experimentalLongPollingOptions??{}),(function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new me(ge.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new me(ge.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new me(ge.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(s,r){return s.timeoutSeconds===r.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class m0{constructor(e,n,s,r){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new rh({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new me(ge.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new me(ge.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new rh(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(s){if(!s)return new GS;switch(s.type){case"firstParty":return new YS(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new me(ge.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(n){const s=nh.get(n);s&&(Rt("ComponentProvider","Removing Datastore"),nh.delete(n),s.terminate())})(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dc{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new dc(this.firestore,e,this._query)}}class Bt{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new pc(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Bt(this.firestore,e,this._key)}toJSON(){return{type:Bt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,s){if(jr(n,Bt._jsonSchema))return new Bt(e,s||null,new qn(Tt.fromString(n.referencePath)))}}Bt._jsonSchemaVersion="firestore/documentReference/1.0",Bt._jsonSchema={type:Le("string",Bt._jsonSchemaVersion),referencePath:Le("string")};class pc extends dc{constructor(e,n,s){super(e,n,u0(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Bt(this.firestore,null,new qn(e))}withConverter(e){return new pc(this.firestore,e,this._path)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ih="AsyncQueue";class oh{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new d0(this,"async_queue_retry"),this._c=()=>{const s=Yo();s&&Rt(ih,"Visibility state changed to "+s.visibilityState),this.M_.w_()},this.ac=e;const n=Yo();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=Yo();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const n=new mr;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise))).then((()=>n.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Xu.push(e),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!a0(e))throw e;Rt(ih,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const n=this.ac.then((()=>(this.rc=!0,e().catch((s=>{throw this.nc=s,this.rc=!1,Hd("INTERNAL UNHANDLED ERROR: ",ah(s)),s})).then((s=>(this.rc=!1,s))))));return this.ac=n,n}enqueueAfterDelay(e,n,s){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const r=fc.createAndSchedule(this,e,n,s,(o=>this.hc(o)));return this.tc.push(r),r}uc(){this.nc&&xi(47125,{Pc:ah(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((n,s)=>n.targetTimeMs-s.targetTimeMs));for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()}))}dc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function ah(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class y0 extends m0{constructor(e,n,s,r){super(e,n,s,r),this.type="firestore",this._queue=new oh,this._persistenceKey=r?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new oh(e),this._firestoreClient=void 0,await e}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Yt(Zn.fromBase64String(e))}catch(n){throw new me(ge.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Yt(Zn.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Yt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(jr(e,Yt._jsonSchema))return Yt.fromBase64String(e.bytes)}}Yt._jsonSchemaVersion="firestore/bytes/1.0",Yt._jsonSchema={type:Le("string",Yt._jsonSchemaVersion),bytes:Le("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qd{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new me(ge.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new $n(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new me(ge.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new me(ge.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Pn(this._lat,e._lat)||Pn(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Gn._jsonSchemaVersion}}static fromJSON(e){if(jr(e,Gn._jsonSchema))return new Gn(e.latitude,e.longitude)}}Gn._jsonSchemaVersion="firestore/geoPoint/1.0",Gn._jsonSchema={type:Le("string",Gn._jsonSchemaVersion),latitude:Le("number"),longitude:Le("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn{constructor(e){this._values=(e||[]).map((n=>n))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(s,r){if(s.length!==r.length)return!1;for(let o=0;o<s.length;++o)if(s[o]!==r[o])return!1;return!0})(this._values,e._values)}toJSON(){return{type:Jn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(jr(e,Jn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((n=>typeof n=="number")))return new Jn(e.vectorValues);throw new me(ge.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Jn._jsonSchemaVersion="firestore/vectorValue/1.0",Jn._jsonSchema={type:Le("string",Jn._jsonSchemaVersion),vectorValues:Le("object")};const _0=new RegExp("[~\\*/\\[\\]]");function w0(t,e,n){if(e.search(_0)>=0)throw ch(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t);try{return new qd(...e.split("."))._internalPath}catch{throw ch(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t)}}function ch(t,e,n,s,r){let o=`Function ${e}() called with invalid data`;o+=". ";let a="";return new me(ge.INVALID_ARGUMENT,o+t+a)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zd{constructor(e,n,s,r,o){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=r,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new Bt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new E0(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Kd("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class E0 extends zd{data(){return super.data()}}function Kd(t,e){return typeof e=="string"?w0(t,e):e instanceof qd?e._internalPath:e._delegate._internalPath}class ei{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Ss extends zd{constructor(e,n,s,r,o,a){super(e,n,s,r,a),this._firestore=e,this._firestoreImpl=e,this.metadata=o}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new di(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(Kd("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new me(ge.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=Ss._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}Ss._jsonSchemaVersion="firestore/documentSnapshot/1.0",Ss._jsonSchema={type:Le("string",Ss._jsonSchemaVersion),bundleSource:Le("string","DocumentSnapshot"),bundleName:Le("string"),bundle:Le("string")};class di extends Ss{data(e={}){return super.data(e)}}class yr{constructor(e,n,s,r){this._firestore=e,this._userDataWriter=n,this._snapshot=r,this.metadata=new ei(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach((n=>e.push(n))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach((s=>{e.call(n,new di(this._firestore,this._userDataWriter,s.key,s,new ei(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new me(ge.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=(function(r,o){if(r._snapshot.oldDocs.isEmpty()){let a=0;return r._snapshot.docChanges.map((l=>{const u=new di(r._firestore,r._userDataWriter,l.doc.key,l.doc,new ei(r._snapshot.mutatedKeys.has(l.doc.key),r._snapshot.fromCache),r.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:a++}}))}{let a=r._snapshot.oldDocs;return r._snapshot.docChanges.filter((l=>o||l.type!==3)).map((l=>{const u=new di(r._firestore,r._userDataWriter,l.doc.key,l.doc,new ei(r._snapshot.mutatedKeys.has(l.doc.key),r._snapshot.fromCache),r.query.converter);let f=-1,d=-1;return l.type!==0&&(f=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),d=a.indexOf(l.doc.key)),{type:v0(l.type),doc:u,oldIndex:f,newIndex:d}}))}})(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new me(ge.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=yr._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=e0.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],s=[],r=[];return this.docs.forEach((o=>{o._document!==null&&(n.push(o._document),s.push(this._userDataWriter.convertObjectMap(o._document.data.value.mapValue.fields,"previous")),r.push(o.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function v0(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return xi(61501,{type:t})}}yr._jsonSchemaVersion="firestore/querySnapshot/1.0",yr._jsonSchema={type:Le("string",yr._jsonSchemaVersion),bundleSource:Le("string","QuerySnapshot"),bundleName:Le("string"),bundle:Le("string")};(function(e,n=!0){(function(r){oo=r})(xs),Ps(new Yn("firestore",((s,{instanceIdentifier:r,options:o})=>{const a=s.getProvider("app").getImmediate(),l=new y0(new JS(s.getProvider("auth-internal")),new QS(a,s.getProvider("app-check-internal")),(function(f,d){if(!Object.prototype.hasOwnProperty.apply(f.options,["projectId"]))throw new me(ge.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Di(f.options.projectId,d)})(a,r),a);return o={useFetchStreams:n,...o},l._setSettings(o),l}),"PUBLIC").setMultipleInstances(!0)),In(zu,Ku,e),In(zu,Ku,"esm2020")})();const b0={__name:"SettingsPage",setup(t){const{instance:e}=eo(),n=ot(""),s=ot(""),r=ot(""),o=ot(""),a=ot(""),l=async()=>{const{data:u}=await e.post("api/employee/create",{userName:o.value,firstName:n.value,lastName:s.value,title:r.value,quote:a.value});var f=document.querySelectorAll("input");f.forEach(d=>d.value="")};return(u,f)=>(Be(),nt("form",{class:"mx-auto mt-10 flex max-w-md flex-col gap-4 rounded-md bg-white p-8 shadow-lg",onSubmit:gf(l,["prevent"])},[Bn(Se("input",{type:"text",placeholder:"userName","onUpdate:modelValue":f[0]||(f[0]=d=>o.value=d),class:"rounded-md px-4 py-2 text-xl ring-1 ring-slate-300"},null,512),[[Hn,o.value]]),Bn(Se("input",{type:"text",placeholder:"firstName","onUpdate:modelValue":f[1]||(f[1]=d=>n.value=d),class:"rounded-md px-4 py-2 text-xl ring-1 ring-slate-300"},null,512),[[Hn,n.value]]),Bn(Se("input",{type:"text",placeholder:"lastName","onUpdate:modelValue":f[2]||(f[2]=d=>s.value=d),class:"rounded-md px-4 py-2 text-xl ring-1 ring-slate-300"},null,512),[[Hn,s.value]]),Bn(Se("input",{type:"text",placeholder:"title","onUpdate:modelValue":f[3]||(f[3]=d=>r.value=d),class:"rounded-md px-4 py-2 text-xl ring-1 ring-slate-300"},null,512),[[Hn,r.value]]),Bn(Se("input",{type:"text",placeholder:"quote","onUpdate:modelValue":f[4]||(f[4]=d=>a.value=d),class:"rounded-md px-4 py-2 text-xl ring-1 ring-slate-300"},null,512),[[Hn,a.value]]),f[5]||(f[5]=Se("button",{type:"submit",class:"bg-green-500 px-4 py-2"},"Submit",-1))],32))}},{isAuthenticated:S0}=uc(),T0=[{path:"/company-directory-api",name:"Home",component:Uw},{path:"/company-directory-api/other",name:"Other",component:()=>Hm(()=>import("./OtherPage-BS_Put0a.js"),[])},{path:"/company-directory-api/employees/:id",name:"CardDetails",component:$w},{path:"/company-directory-api/login",name:"LoginPage",component:zS},{path:"/company-directory-api/Settings",name:"SettingsPage",component:b0,meta:{requiresAuth:!0}}],gc=Wy({history:oy(),routes:T0});gc.beforeEach((t,e,n)=>{t.meta.requiresAuth&&!S0.value?n({name:"LoginPage",query:{redirect:t.fullPath}}):n()});const I0={class:"bg-slate-900 h-20 items-center text-white flex justify-center space-x-4"},A0={key:0},R0={key:1},C0={__name:"NavMenu",setup(t){const{isAuthenticated:e,logout:n,user:s}=uc();return(r,o)=>{const a=Ha("RouterLink");return Be(),nt("nav",I0,[xe(a,{to:{name:"Home"}},{default:ds(()=>[...o[1]||(o[1]=[us("Home",-1)])]),_:1}),xe(a,{to:{name:"Other"}},{default:ds(()=>[...o[2]||(o[2]=[us("Other",-1)])]),_:1}),xe(a,{to:{name:"SettingsPage"}},{default:ds(()=>[...o[3]||(o[3]=[us("Settings",-1)])]),_:1}),Ve(e)?(Be(),nt("div",A0,[us(" Welcome "+wt(Ve(s).email)+" ",1),Se("button",{onClick:o[0]||(o[0]=(...l)=>Ve(n)&&Ve(n)(...l)),class:"rounded=md bg-red-500 px-4 py-2 mx-2 text-red-100 hover:bg-red-700"},"LOGOUT")])):(Be(),nt("div",R0,[xe(a,{to:{name:"LoginPage"}},{default:ds(()=>[...o[4]||(o[4]=[us("Login",-1)])]),_:1})]))])}}},P0={__name:"App",setup(t){return(e,n)=>{const s=Ha("RouterView");return Be(),nt(_t,null,[xe(C0),xe(s)],64)}}};Um(P0).use(gc).mount("#app");export{Se as a,nt as c,Be as o};
