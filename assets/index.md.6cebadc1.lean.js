import{d as at,a2 as ut,l as q,h as X,w as ot,o as W,c as A,F as G,L as Q,n as tt,H as K,z as J,t as ct,E as lt,_ as dt,p as ft,G as ht}from"./chunks/framework.765c3dab.js";const mt={style:{display:"flex","align-items":"center"}},$t={name:"scroll-number"},yt=at({...$t,props:{number:{type:[Number,String],required:!0},h:{type:Number,default:24},color:{type:[String],default:"#606cee"},customStyle:{type:Object,default:()=>({})}},setup(y){const p=y,S=ut(),g=q(()=>({...S})),Y=[0,1,2,3,4,5,6,7,8,9,".","-",":"," "],H=["."," ","-",":"],_=X([]);ot(()=>p.number,m=>{_.value=m.toString().split("")},{immediate:!0,deep:!0});const D=q(()=>({...p.customStyle,height:`${p.h}px`,fontSize:`${p.h}px`})),w=m=>({transform:`translate(0,-${(m.trim().length===0?9999:Y.findIndex(f=>m==f))*p.h}px)`});return(m,k)=>(W(),A("div",mt,[(W(!0),A(G,null,Q(_.value,(f,z)=>(W(),A("div",{key:z,class:tt(["number",{sign:H.includes(f)}]),style:K(D.value)},[J("div",lt({class:"scroll-container",style:{...w(f)}},g.value),[(W(),A(G,null,Q(Y,(v,b)=>J("div",{key:b,class:"scroll-single",style:K({color:y.color})},ct(v),5)),64))],16)],6))),128))]))}});var pt=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function gt(y){return y&&y.__esModule&&Object.prototype.hasOwnProperty.call(y,"default")?y.default:y}var et={exports:{}};(function(y,p){(function(S,g){y.exports=g()})(pt,function(){var S=1e3,g=6e4,Y=36e5,H="millisecond",_="second",D="minute",w="hour",m="day",k="week",f="month",z="quarter",v="year",b="date",P="Invalid Date",nt=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,rt=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,st={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(r){var n=["th","st","nd","rd"],t=r%100;return"["+r+(n[(t-20)%10]||n[t]||n[0])+"]"}},U=function(r,n,t){var s=String(r);return!s||s.length>=n?r:""+Array(n+1-s.length).join(t)+r},it={s:U,z:function(r){var n=-r.utcOffset(),t=Math.abs(n),s=Math.floor(t/60),e=t%60;return(n<=0?"+":"-")+U(s,2,"0")+":"+U(e,2,"0")},m:function r(n,t){if(n.date()<t.date())return-r(t,n);var s=12*(t.year()-n.year())+(t.month()-n.month()),e=n.clone().add(s,f),a=t-e<0,i=n.clone().add(s+(a?-1:1),f);return+(-(s+(t-e)/(a?e-i:i-e))||0)},a:function(r){return r<0?Math.ceil(r)||0:Math.floor(r)},p:function(r){return{M:f,y:v,w:k,d:m,D:b,h:w,m:D,s:_,ms:H,Q:z}[r]||String(r||"").toLowerCase().replace(/s$/,"")},u:function(r){return r===void 0}},C="en",T={};T[C]=st;var V=function(r){return r instanceof I},F=function r(n,t,s){var e;if(!n)return C;if(typeof n=="string"){var a=n.toLowerCase();T[a]&&(e=a),t&&(T[a]=t,e=a);var i=n.split("-");if(!e&&i.length>1)return r(i[0])}else{var o=n.name;T[o]=n,e=o}return!s&&e&&(C=e),e||!s&&C},d=function(r,n){if(V(r))return r.clone();var t=typeof n=="object"?n:{};return t.date=r,t.args=arguments,new I(t)},u=it;u.l=F,u.i=V,u.w=function(r,n){return d(r,{locale:n.$L,utc:n.$u,x:n.$x,$offset:n.$offset})};var I=function(){function r(t){this.$L=F(t.locale,null,!0),this.parse(t)}var n=r.prototype;return n.parse=function(t){this.$d=function(s){var e=s.date,a=s.utc;if(e===null)return new Date(NaN);if(u.u(e))return new Date;if(e instanceof Date)return new Date(e);if(typeof e=="string"&&!/Z$/i.test(e)){var i=e.match(nt);if(i){var o=i[2]-1||0,l=(i[7]||"0").substring(0,3);return a?new Date(Date.UTC(i[1],o,i[3]||1,i[4]||0,i[5]||0,i[6]||0,l)):new Date(i[1],o,i[3]||1,i[4]||0,i[5]||0,i[6]||0,l)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},n.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},n.$utils=function(){return u},n.isValid=function(){return this.$d.toString()!==P},n.isSame=function(t,s){var e=d(t);return this.startOf(s)<=e&&e<=this.endOf(s)},n.isAfter=function(t,s){return d(t)<this.startOf(s)},n.isBefore=function(t,s){return this.endOf(s)<d(t)},n.$g=function(t,s,e){return u.u(t)?this[s]:this.set(e,t)},n.unix=function(){return Math.floor(this.valueOf()/1e3)},n.valueOf=function(){return this.$d.getTime()},n.startOf=function(t,s){var e=this,a=!!u.u(s)||s,i=u.p(t),o=function(j,$){var x=u.w(e.$u?Date.UTC(e.$y,$,j):new Date(e.$y,$,j),e);return a?x:x.endOf(m)},l=function(j,$){return u.w(e.toDate()[j].apply(e.toDate("s"),(a?[0,0,0,0]:[23,59,59,999]).slice($)),e)},c=this.$W,h=this.$M,O=this.$D,M="set"+(this.$u?"UTC":"");switch(i){case v:return a?o(1,0):o(31,11);case f:return a?o(1,h):o(0,h+1);case k:var L=this.$locale().weekStart||0,N=(c<L?c+7:c)-L;return o(a?O-N:O+(6-N),h);case m:case b:return l(M+"Hours",0);case w:return l(M+"Minutes",1);case D:return l(M+"Seconds",2);case _:return l(M+"Milliseconds",3);default:return this.clone()}},n.endOf=function(t){return this.startOf(t,!1)},n.$set=function(t,s){var e,a=u.p(t),i="set"+(this.$u?"UTC":""),o=(e={},e[m]=i+"Date",e[b]=i+"Date",e[f]=i+"Month",e[v]=i+"FullYear",e[w]=i+"Hours",e[D]=i+"Minutes",e[_]=i+"Seconds",e[H]=i+"Milliseconds",e)[a],l=a===m?this.$D+(s-this.$W):s;if(a===f||a===v){var c=this.clone().set(b,1);c.$d[o](l),c.init(),this.$d=c.set(b,Math.min(this.$D,c.daysInMonth())).$d}else o&&this.$d[o](l);return this.init(),this},n.set=function(t,s){return this.clone().$set(t,s)},n.get=function(t){return this[u.p(t)]()},n.add=function(t,s){var e,a=this;t=Number(t);var i=u.p(s),o=function(h){var O=d(a);return u.w(O.date(O.date()+Math.round(h*t)),a)};if(i===f)return this.set(f,this.$M+t);if(i===v)return this.set(v,this.$y+t);if(i===m)return o(1);if(i===k)return o(7);var l=(e={},e[D]=g,e[w]=Y,e[_]=S,e)[i]||1,c=this.$d.getTime()+t*l;return u.w(c,this)},n.subtract=function(t,s){return this.add(-1*t,s)},n.format=function(t){var s=this,e=this.$locale();if(!this.isValid())return e.invalidDate||P;var a=t||"YYYY-MM-DDTHH:mm:ssZ",i=u.z(this),o=this.$H,l=this.$m,c=this.$M,h=e.weekdays,O=e.months,M=function($,x,E,B){return $&&($[x]||$(s,a))||E[x].slice(0,B)},L=function($){return u.s(o%12||12,$,"0")},N=e.meridiem||function($,x,E){var B=$<12?"AM":"PM";return E?B.toLowerCase():B},j={YY:String(this.$y).slice(-2),YYYY:u.s(this.$y,4,"0"),M:c+1,MM:u.s(c+1,2,"0"),MMM:M(e.monthsShort,c,O,3),MMMM:M(O,c),D:this.$D,DD:u.s(this.$D,2,"0"),d:String(this.$W),dd:M(e.weekdaysMin,this.$W,h,2),ddd:M(e.weekdaysShort,this.$W,h,3),dddd:h[this.$W],H:String(o),HH:u.s(o,2,"0"),h:L(1),hh:L(2),a:N(o,l,!0),A:N(o,l,!1),m:String(l),mm:u.s(l,2,"0"),s:String(this.$s),ss:u.s(this.$s,2,"0"),SSS:u.s(this.$ms,3,"0"),Z:i};return a.replace(rt,function($,x){return x||j[$]||i.replace(":","")})},n.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},n.diff=function(t,s,e){var a,i=u.p(s),o=d(t),l=(o.utcOffset()-this.utcOffset())*g,c=this-o,h=u.m(this,o);return h=(a={},a[v]=h/12,a[f]=h,a[z]=h/3,a[k]=(c-l)/6048e5,a[m]=(c-l)/864e5,a[w]=c/Y,a[D]=c/g,a[_]=c/S,a)[i]||c,e?h:u.a(h)},n.daysInMonth=function(){return this.endOf(f).$D},n.$locale=function(){return T[this.$L]},n.locale=function(t,s){if(!t)return this.$L;var e=this.clone(),a=F(t,s,!0);return a&&(e.$L=a),e},n.clone=function(){return u.w(this.$d,this)},n.toDate=function(){return new Date(this.valueOf())},n.toJSON=function(){return this.isValid()?this.toISOString():null},n.toISOString=function(){return this.$d.toISOString()},n.toString=function(){return this.$d.toUTCString()},r}(),Z=I.prototype;return d.prototype=Z,[["$ms",H],["$s",_],["$m",D],["$H",w],["$W",m],["$M",f],["$y",v],["$D",b]].forEach(function(r){Z[r[1]]=function(n){return this.$g(n,r[0],r[1])}}),d.extend=function(r,n){return r.$i||(r(n,I,d),r.$i=!0),d},d.locale=F,d.isDayjs=V,d.unix=function(r){return d(1e3*r)},d.en=T[C],d.Ls=T,d.p={},d})})(et);var vt=et.exports;const R=gt(vt),_t={"clock-bg":"_clock-bg_1njv0_2"},bt=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"index.md","filePath":"index.md","lastUpdated":1686625834000}'),Mt={name:"index.md"},St=Object.assign(Mt,{setup(y){let p=null;const S=X(R().format("YYYY-MM-DD HH:mm:ss")),g=()=>{p&&clearTimeout(p),p=setTimeout(()=>{S.value=R().format("YYYY-MM-DD HH:mm:ss"),g()},1e3)};return ft(()=>{g()}),(Y,H)=>(W(),A("div",null,[J("div",{class:tt(Y.$style["clock-bg"])},[ht(yt,{number:S.value,h:36,"custom-style":{fontWeight:700}},null,8,["number"])],2)]))}}),Dt={$style:_t},Ot=dt(St,[["__cssModules",Dt]]);export{bt as __pageData,Ot as default};
