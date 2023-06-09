import{d as it,h as R,w as at,l as ut,o as W,c as A,F as q,L as Q,n as X,H as E,z as P,t as ot,_ as ct,p as lt,G as ft}from"./chunks/framework.4afe7240.js";const dt={style:{display:"flex","align-items":"center"}},ht={name:"scroll-number"},mt=it({...ht,props:{number:{type:[Number,String],default:0},h:{type:Number,default:24},color:{type:[String],default:"#606cee"},customStyle:{type:Object,default:()=>({})}},setup(p){const g=p,_=[0,1,2,3,4,5,6,7,8,9,".","-",":"," "],v=["."," ","-",":"],x=R([]);at(()=>g.number,y=>{x.value=y.toString().split("")},{immediate:!0,deep:!0});const T=ut(()=>({...g.customStyle,height:`${g.h}px`,fontSize:`${g.h}px`})),S=y=>({transform:`translate(0,-${(y.trim().length===0?9999:_.findIndex(m=>y==m))*g.h}px)`});return(y,D)=>(W(),A("div",dt,[(W(!0),A(q,null,Q(x.value,(m,H)=>(W(),A("div",{key:H,class:X(["number",{sign:v.includes(m)}]),style:E(T.value)},[P("div",{class:"scroll-container",style:E({...S(m)})},[(W(),A(q,null,Q(_,($,z)=>P("div",{key:z,class:"scroll-single",style:E({color:p.color})},ot($),5)),64))],4)],6))),128))]))}});var $t=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function yt(p){return p&&p.__esModule&&Object.prototype.hasOwnProperty.call(p,"default")?p.default:p}var tt={exports:{}};(function(p,g){(function(_,v){p.exports=v()})($t,function(){var _=1e3,v=6e4,x=36e5,T="millisecond",S="second",y="minute",D="hour",m="day",H="week",$="month",z="quarter",w="year",k="date",Z="Invalid Date",et=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,nt=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,rt={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(r){var n=["th","st","nd","rd"],t=r%100;return"["+r+(n[(t-20)%10]||n[t]||n[0])+"]"}},J=function(r,n,t){var s=String(r);return!s||s.length>=n?r:""+Array(n+1-s.length).join(t)+r},st={s:J,z:function(r){var n=-r.utcOffset(),t=Math.abs(n),s=Math.floor(t/60),e=t%60;return(n<=0?"+":"-")+J(s,2,"0")+":"+J(e,2,"0")},m:function r(n,t){if(n.date()<t.date())return-r(t,n);var s=12*(t.year()-n.year())+(t.month()-n.month()),e=n.clone().add(s,$),a=t-e<0,i=n.clone().add(s+(a?-1:1),$);return+(-(s+(t-e)/(a?e-i:i-e))||0)},a:function(r){return r<0?Math.ceil(r)||0:Math.floor(r)},p:function(r){return{M:$,y:w,w:H,d:m,D:k,h:D,m:y,s:S,ms:T,Q:z}[r]||String(r||"").toLowerCase().replace(/s$/,"")},u:function(r){return r===void 0}},C="en",Y={};Y[C]=rt;var U=function(r){return r instanceof I},F=function r(n,t,s){var e;if(!n)return C;if(typeof n=="string"){var a=n.toLowerCase();Y[a]&&(e=a),t&&(Y[a]=t,e=a);var i=n.split("-");if(!e&&i.length>1)return r(i[0])}else{var o=n.name;Y[o]=n,e=o}return!s&&e&&(C=e),e||!s&&C},f=function(r,n){if(U(r))return r.clone();var t=typeof n=="object"?n:{};return t.date=r,t.args=arguments,new I(t)},u=st;u.l=F,u.i=U,u.w=function(r,n){return f(r,{locale:n.$L,utc:n.$u,x:n.$x,$offset:n.$offset})};var I=function(){function r(t){this.$L=F(t.locale,null,!0),this.parse(t)}var n=r.prototype;return n.parse=function(t){this.$d=function(s){var e=s.date,a=s.utc;if(e===null)return new Date(NaN);if(u.u(e))return new Date;if(e instanceof Date)return new Date(e);if(typeof e=="string"&&!/Z$/i.test(e)){var i=e.match(et);if(i){var o=i[2]-1||0,l=(i[7]||"0").substring(0,3);return a?new Date(Date.UTC(i[1],o,i[3]||1,i[4]||0,i[5]||0,i[6]||0,l)):new Date(i[1],o,i[3]||1,i[4]||0,i[5]||0,i[6]||0,l)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},n.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},n.$utils=function(){return u},n.isValid=function(){return this.$d.toString()!==Z},n.isSame=function(t,s){var e=f(t);return this.startOf(s)<=e&&e<=this.endOf(s)},n.isAfter=function(t,s){return f(t)<this.startOf(s)},n.isBefore=function(t,s){return this.endOf(s)<f(t)},n.$g=function(t,s,e){return u.u(t)?this[s]:this.set(e,t)},n.unix=function(){return Math.floor(this.valueOf()/1e3)},n.valueOf=function(){return this.$d.getTime()},n.startOf=function(t,s){var e=this,a=!!u.u(s)||s,i=u.p(t),o=function(j,h){var O=u.w(e.$u?Date.UTC(e.$y,h,j):new Date(e.$y,h,j),e);return a?O:O.endOf(m)},l=function(j,h){return u.w(e.toDate()[j].apply(e.toDate("s"),(a?[0,0,0,0]:[23,59,59,999]).slice(h)),e)},c=this.$W,d=this.$M,b=this.$D,M="set"+(this.$u?"UTC":"");switch(i){case w:return a?o(1,0):o(31,11);case $:return a?o(1,d):o(0,d+1);case H:var L=this.$locale().weekStart||0,N=(c<L?c+7:c)-L;return o(a?b-N:b+(6-N),d);case m:case k:return l(M+"Hours",0);case D:return l(M+"Minutes",1);case y:return l(M+"Seconds",2);case S:return l(M+"Milliseconds",3);default:return this.clone()}},n.endOf=function(t){return this.startOf(t,!1)},n.$set=function(t,s){var e,a=u.p(t),i="set"+(this.$u?"UTC":""),o=(e={},e[m]=i+"Date",e[k]=i+"Date",e[$]=i+"Month",e[w]=i+"FullYear",e[D]=i+"Hours",e[y]=i+"Minutes",e[S]=i+"Seconds",e[T]=i+"Milliseconds",e)[a],l=a===m?this.$D+(s-this.$W):s;if(a===$||a===w){var c=this.clone().set(k,1);c.$d[o](l),c.init(),this.$d=c.set(k,Math.min(this.$D,c.daysInMonth())).$d}else o&&this.$d[o](l);return this.init(),this},n.set=function(t,s){return this.clone().$set(t,s)},n.get=function(t){return this[u.p(t)]()},n.add=function(t,s){var e,a=this;t=Number(t);var i=u.p(s),o=function(d){var b=f(a);return u.w(b.date(b.date()+Math.round(d*t)),a)};if(i===$)return this.set($,this.$M+t);if(i===w)return this.set(w,this.$y+t);if(i===m)return o(1);if(i===H)return o(7);var l=(e={},e[y]=v,e[D]=x,e[S]=_,e)[i]||1,c=this.$d.getTime()+t*l;return u.w(c,this)},n.subtract=function(t,s){return this.add(-1*t,s)},n.format=function(t){var s=this,e=this.$locale();if(!this.isValid())return e.invalidDate||Z;var a=t||"YYYY-MM-DDTHH:mm:ssZ",i=u.z(this),o=this.$H,l=this.$m,c=this.$M,d=e.weekdays,b=e.months,M=function(h,O,V,B){return h&&(h[O]||h(s,a))||V[O].slice(0,B)},L=function(h){return u.s(o%12||12,h,"0")},N=e.meridiem||function(h,O,V){var B=h<12?"AM":"PM";return V?B.toLowerCase():B},j={YY:String(this.$y).slice(-2),YYYY:u.s(this.$y,4,"0"),M:c+1,MM:u.s(c+1,2,"0"),MMM:M(e.monthsShort,c,b,3),MMMM:M(b,c),D:this.$D,DD:u.s(this.$D,2,"0"),d:String(this.$W),dd:M(e.weekdaysMin,this.$W,d,2),ddd:M(e.weekdaysShort,this.$W,d,3),dddd:d[this.$W],H:String(o),HH:u.s(o,2,"0"),h:L(1),hh:L(2),a:N(o,l,!0),A:N(o,l,!1),m:String(l),mm:u.s(l,2,"0"),s:String(this.$s),ss:u.s(this.$s,2,"0"),SSS:u.s(this.$ms,3,"0"),Z:i};return a.replace(nt,function(h,O){return O||j[h]||i.replace(":","")})},n.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},n.diff=function(t,s,e){var a,i=u.p(s),o=f(t),l=(o.utcOffset()-this.utcOffset())*v,c=this-o,d=u.m(this,o);return d=(a={},a[w]=d/12,a[$]=d,a[z]=d/3,a[H]=(c-l)/6048e5,a[m]=(c-l)/864e5,a[D]=c/x,a[y]=c/v,a[S]=c/_,a)[i]||c,e?d:u.a(d)},n.daysInMonth=function(){return this.endOf($).$D},n.$locale=function(){return Y[this.$L]},n.locale=function(t,s){if(!t)return this.$L;var e=this.clone(),a=F(t,s,!0);return a&&(e.$L=a),e},n.clone=function(){return u.w(this.$d,this)},n.toDate=function(){return new Date(this.valueOf())},n.toJSON=function(){return this.isValid()?this.toISOString():null},n.toISOString=function(){return this.$d.toISOString()},n.toString=function(){return this.$d.toUTCString()},r}(),G=I.prototype;return f.prototype=G,[["$ms",T],["$s",S],["$m",y],["$H",D],["$W",m],["$M",$],["$y",w],["$D",k]].forEach(function(r){G[r[1]]=function(n){return this.$g(n,r[0],r[1])}}),f.extend=function(r,n){return r.$i||(r(n,I,f),r.$i=!0),f},f.locale=F,f.isDayjs=U,f.unix=function(r){return f(1e3*r)},f.en=Y[C],f.Ls=Y,f.p={},f})})(tt);var pt=tt.exports;const K=yt(pt),gt={"clock-bg":"_clock-bg_1njv0_2"},Dt=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"index.md","filePath":"index.md"}'),vt={name:"index.md"},_t=Object.assign(vt,{setup(p){let g=null;const _=R(K().format("YYYY-MM-DD HH:mm:ss")),v=()=>{g&&clearTimeout(g),g=setTimeout(()=>{_.value=K().format("YYYY-MM-DD HH:mm:ss"),v()},1e3)};return lt(()=>{v()}),(x,T)=>(W(),A("div",null,[P("div",{class:X(x.$style["clock-bg"])},[ft(mt,{number:_.value,h:36,"custom-style":{fontWeight:700}},null,8,["number"])],2)]))}}),Mt={$style:gt},wt=ct(_t,[["__cssModules",Mt]]);export{Dt as __pageData,wt as default};
