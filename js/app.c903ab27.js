(function(t){function e(e){for(var i,o,r=e[0],l=e[1],u=e[2],c=0,m=[];c<r.length;c++)o=r[c],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&m.push(s[o][0]),s[o]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);d&&d(e);while(m.length)m.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],i=!0,r=1;r<n.length;r++){var l=n[r];0!==s[l]&&(i=!1)}i&&(a.splice(e--,1),t=o(o.s=n[0]))}return t}var i={},s={app:0},a=[];function o(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=i,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(n,i,function(e){return t[e]}.bind(null,i));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/podcast-timecode-shifter/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var u=0;u<r.length;u++)e(r[u]);var d=l;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"045c":function(t,e,n){t.exports=n.p+"img/microphone.a250161b.png"},1993:function(t){t.exports=JSON.parse('{"links":[{"time":18,"text":"Duyuru: Podcast yaparak geçinilir mi?","url":"https://www.youtube.com"},{"time":104,"text":"Türkiye Günlükleri serisi","url":null},{"time":200,"text":"Berber muhabbeti","url":null},{"time":360,"text":"Dilin amacı ne?","url":null}],"ads":[{"time":30,"duration":12,"description":"Wix spot"},{"time":125,"duration":20,"description":"GoDaddy spot"}]}')},"2f76":function(t,e,n){t.exports=n.p+"img/githubMark.ef7a02b6.png"},"418b":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("img",{attrs:{alt:"Podcast Timecode Shifter Logo",src:n("045c")}}),i("Home",{attrs:{msg:"Podcast Timecode Shifter"}})],1)},a=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"container"}},[t._m(0),n("div",[n("h1",[t._v(t._s(t.msg))]),n("button",{staticClass:"p-2 mb-2",on:{click:t.loadSampleData}},[t._v("Load Sample Data")]),t.list.length?n("button",{staticClass:"p-2 ml-1 mb-2",on:{click:t.saveFile}},[t._v("Save to File")]):t._e(),n("button",{staticClass:"p-2 ml-1 mb-2",on:{click:function(e){return t.$refs.file.click()}}},[t._v("Load from File")]),n("input",{ref:"file",staticStyle:{display:"none"},attrs:{type:"file",multiple:"false",accept:"application/JSON"},on:{change:t.loadFromFile}})]),n("div",{attrs:{id:"columns"}},[n("div",{staticClass:"column pt-2"},[t.list.length?t._e():n("div",{staticClass:"mb-2"},[t._v("Your links list is empty. Start by adding a link.")]),n("List",{attrs:{"list-data":t.list},on:{addLink:t.onAddLink,remove:t.onRemove,changeAudioTime:t.onChangeAudioTime}})],1),n("div",{staticClass:"column pt-2"},[t.ads.length?t._e():n("div",{staticClass:"mb-2"},[t._v("Your ads list is empty. Start by adding an ad.")]),n("Ads",{attrs:{"ads-data":t.ads},on:{addAd:t.onAddAd,remove:t.onRemove,changeAudioTime:t.onChangeAudioTime}})],1),n("div",{staticClass:"column pt-2"},[n("Results",{attrs:{"data-list":t.list,"data-ads":t.ads},on:{changeAudioTime:t.onChangeAudioTime}})],1)]),n("div",{attrs:{id:"top-right"}},[n("Player",{attrs:{"selected-time":t.selectedAudioTime}})],1)])},r=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"top-left"}},[i("a",{staticClass:"flex-link ml-1",attrs:{href:"https://github.com/serdarcevher/podcast-timecode-shifter"}},[i("img",{attrs:{alt:"See the source code in GitHub",src:n("2f76"),width:"48",height:"48"}}),i("div",{staticClass:"ml-1"},[t._v("See the source code")])])])}],l=(n("4de4"),n("4160"),n("a15b"),n("a434"),n("d3b7"),n("3ca3"),n("159b"),n("ddb0"),n("2b3d"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h3",[t._v("Links")]),n("form",{ref:"dataForm",on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addLink(e)}}},[n("p",[n("label",[t._v("Time: ")]),n("input",{directives:[{name:"model",rawName:"v-model.number",value:t.minutes,expression:"minutes",modifiers:{number:!0}}],staticClass:"short-input",attrs:{type:"number",name:"minutes",placeholder:"00",min:"0"},domProps:{value:t.minutes},on:{input:function(e){e.target.composing||(t.minutes=t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}}),t._v(" : "),n("input",{directives:[{name:"model",rawName:"v-model.number",value:t.seconds,expression:"seconds",modifiers:{number:!0}}],staticClass:"short-input",attrs:{type:"number",name:"seconds",placeholder:"01",min:"0",max:"59"},domProps:{value:t.seconds},on:{input:function(e){e.target.composing||(t.seconds=t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}})]),n("p",[n("label",[t._v("Text:")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.text,expression:"text",modifiers:{trim:!0}}],staticClass:"long-input mb-2",attrs:{type:"text",autocomplete:"off",name:"text",placeholder:"Optional if URL exists"},domProps:{value:t.text},on:{input:function(e){e.target.composing||(t.text=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})]),n("p",[n("label",[t._v("URL:")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.url,expression:"url",modifiers:{trim:!0}}],staticClass:"long-input",attrs:{type:"text",autocomplete:"off",name:"link",placeholder:"Optional if text exists"},domProps:{value:t.url},on:{input:function(e){e.target.composing||(t.url=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})]),n("button",{staticClass:"btn mt-1 p-2",attrs:{type:"button"},on:{click:t.addLink}},[t._v("Add Link")])]),n("ul",{staticClass:"text-align-left no-list-style centered",attrs:{id:"elements-list"}},t._l(t.list,(function(t){return n("ListElement",{key:t.time,attrs:{"data-element":t}})})),1)])}),u=[],d=(n("45fc"),{methods:{timetoMinsAndSecs:function(t){var e=Math.floor(t/60),n=t-60*e;return{minutes:e,seconds:n}},findIndexInList:function(t,e){var n=0;return e.forEach((function(e){e.time<t&&n++})),n}}}),c=d,m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[t.isResultItem?t._e():n("button",{staticClass:"remove",attrs:{type:"button"},on:{click:t.remove}},[t._v("x")]),n("div",{staticClass:"time-holder mr-1",on:{click:t.changeAudioTime}},[n("span",[t._v("(")]),t.minutes<10?n("span",[t._v("0")]):t._e(),n("span",{domProps:{textContent:t._s(t.minutes)}}),n("span",[t._v(":")]),t.seconds<10?n("span",[t._v("0")]):t._e(),n("span",{domProps:{textContent:t._s(t.seconds)}}),n("span",[t._v(")")])]),t.dataElement.text?n("span",{staticClass:"mr-1",domProps:{textContent:t._s(t.dataElement.text)}}):t._e(),t.dataElement.url?n("span",[n("a",{attrs:{href:t.dataElement.url,target:"_blank"},domProps:{textContent:t._s(t.dataElement.url)}})]):t._e()])},p=[],f={name:"ListElement",mixins:[c],props:["data-element","is-result-item"],computed:{point:function(){return this.timetoMinsAndSecs(this.dataElement.time)},minutes:function(){return this.point.minutes},seconds:function(){return this.point.seconds}},data:function(){return{}},methods:{remove:function(){var t=confirm("Are you sure you want to remove this item?");t&&this.$parent.$emit("remove",{container:"list",time:this.dataElement.time})},changeAudioTime:function(){this.$parent.$emit("changeAudioTime",this.dataElement.time)}}},h=f,v=n("2877"),b=Object(v["a"])(h,m,p,!1,null,null,null),g=b.exports,x={name:"List",components:{ListElement:g},mixins:[c],data:function(){return{list:[],minutes:null,seconds:null,text:"",url:""}},props:["list-data"],mounted:function(){this.list=this.listData},watch:{listData:function(){this.list=this.listData}},methods:{addLink:function(){if(this.minutes||(this.minutes=0),this.seconds||(this.seconds=0),this.seconds>59||this.seconds<0)alert("Invalid seconds value");else if(this.minutes<0)alert("Invalid minutes value");else{var t={time:60*this.minutes+this.seconds,text:this.text,url:this.url};if(t.text.length||t.url.length)if(this.list.some((function(e){return e.time==t.time})))alert("A link for this point already exists");else{var e=this.findIndexInList(t.time,this.list);this.resetForm(),this.$emit("addLink",{formData:t,index:e})}else alert("Both text and link fields cannot be empty")}},resetForm:function(){this.minutes=null,this.seconds=null,this.text="",this.url=""}}},_=x,y=Object(v["a"])(_,l,u,!1,null,null,null),A=y.exports,k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h3",[t._v("Ads")]),n("form",{ref:"addDataForm",staticClass:"px-2",on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addAd(e)}}},[n("p",{staticClass:"text-align-left"},[n("label",[t._v("Starting at: ")]),n("input",{directives:[{name:"model",rawName:"v-model.number",value:t.minutes,expression:"minutes",modifiers:{number:!0}}],staticClass:"short-input",attrs:{type:"number",name:"minutes",placeholder:"00",min:"0"},domProps:{value:t.minutes},on:{input:function(e){e.target.composing||(t.minutes=t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}}),t._v(" : "),n("input",{directives:[{name:"model",rawName:"v-model.number",value:t.seconds,expression:"seconds",modifiers:{number:!0}}],staticClass:"short-input",attrs:{type:"number",name:"seconds",placeholder:"01",min:"0",max:"59"},domProps:{value:t.seconds},on:{input:function(e){e.target.composing||(t.seconds=t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}})]),n("p",{staticClass:"text-align-left"},[n("label",[t._v("Duration:")]),n("input",{directives:[{name:"model",rawName:"v-model.number",value:t.duration,expression:"duration",modifiers:{number:!0}}],staticClass:"short-input",attrs:{type:"text",autocomplete:"off",name:"link",placeholder:"01"},domProps:{value:t.duration},on:{input:function(e){e.target.composing||(t.duration=t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}}),t._v(" seconds ")]),n("p",{staticClass:"text-align-left"},[n("label",[t._v("Description:")]),n("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.description,expression:"description",modifiers:{trim:!0}}],staticClass:"long-input mb-2",attrs:{type:"text",autocomplete:"off",name:"text",placeholder:"Optional"},domProps:{value:t.description},on:{input:function(e){e.target.composing||(t.description=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})]),n("button",{staticClass:"btn mt-1 p-2 mb-2",attrs:{type:"button"},on:{click:t.addAd}},[t._v("Add Ad")]),n("ul",{staticClass:"text-align-left no-list-style centered",attrs:{id:"ads-list"}},t._l(t.ads,(function(t){return n("Ad",{key:t.time,attrs:{"data-ad":t}})})),1)])])},C=[],w=(n("a4d3"),n("e01a"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[t.isResultItem?t._e():n("button",{staticClass:"remove",attrs:{type:"button"},on:{click:t.remove}},[t._v("x")]),n("div",{staticClass:"time-holder ad mr-1",on:{click:t.changeAudioTime}},[n("span",[t._v("(")]),t.minutes<10?n("span",[t._v("0")]):t._e(),n("span",{domProps:{textContent:t._s(t.minutes)}}),n("span",[t._v(":")]),t.seconds<10?n("span",[t._v("0")]):t._e(),n("span",{domProps:{textContent:t._s(t.seconds)}}),n("span",[t._v(")")])]),n("div",{staticClass:"ad-bubble text-align-center pt-2 mb-2",domProps:{textContent:t._s(t.adText)}})])}),L=[],E={name:"Ad",mixins:[c],props:["data-ad","is-result-item"],data:function(){return{}},computed:{point:function(){return this.timetoMinsAndSecs(this.dataAd.time)},minutes:function(){return this.point.minutes},seconds:function(){return this.point.seconds},adText:function(){var t=this.dataAd.duration+"s";return this.dataAd.description&&(t+=" ("+this.dataAd.description+")"),t}},methods:{remove:function(){var t=confirm("Are you sure you want to remove this item?");t&&this.$parent.$emit("remove",{container:"ads",time:this.dataAd.time})},changeAudioTime:function(){this.$parent.$emit("changeAudioTime",this.dataAd.time)}}},T=E,$=Object(v["a"])(T,w,L,!1,null,null,null),O=$.exports,P={components:{Ad:O},mixins:[c],name:"Ads",props:["ads-data"],data:function(){return{ads:[],minutes:null,seconds:null,duration:null,description:""}},mounted:function(){this.ads=this.adsData},watch:{adsData:function(){this.ads=this.adsData}},methods:{addAd:function(){if(this.minutes||(this.minutes=0),this.seconds||(this.seconds=0),this.duration||(this.duration=1),this.seconds>59||this.seconds<0)alert("Invalid seconds value");else if(this.minutes<0)alert("Invalid minutes value");else if(this.duration<1)alert("Invalid duration value");else{var t=60*this.minutes+this.seconds;if(this.ads.some((function(e){return e.time==t})))alert("An ad for this point already exists");else{var e={time:t,duration:this.duration,description:this.description},n=this.findIndexInList(t,this.ads);this.resetForm(),this.$emit("addAd",{formData:e,index:n})}}},resetForm:function(){this.minutes=null,this.seconds=null,this.duration=null,this.description=""}}},S=P,j=(n("ef62"),Object(v["a"])(S,k,C,!1,null,"4439bf31",null)),D=j.exports,R=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h3",[t._v("Result "),t.ads.length?n("button",{on:{click:function(e){t.isAdsVisible=!t.isAdsVisible}}},[t._v("Toggle Ads")]):t._e()]),n("ul",{staticClass:"no-list-style text-align-left"},t._l(t.shiftedList,(function(e,i){return n("ResultsItem",{key:"r_"+i,attrs:{element:e,"is-ads-visible":t.isAdsVisible,index:i},on:{changeAudioTime:t.onChangeAudioItem}})})),1)])},I=[],F=(n("99af"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[t.element.duration?n("div",[n("Ad",{directives:[{name:"show",rawName:"v-show",value:t.isAdsVisible,expression:"isAdsVisible"}],key:"r_a_"+t.index,attrs:{"data-ad":t.element,"is-result-item":!0}})],1):n("div",[n("ListElement",{key:"r_l_"+t.index,attrs:{"data-element":t.element,"is-result-item":!0}})],1)])}),U=[],N={props:["element","is-ads-visible","index"],components:{Ad:O,ListElement:g},data:function(){return{}}},M=N,J=Object(v["a"])(M,F,U,!1,null,null,null),V=J.exports,B={name:"Results",components:{ResultsItem:V},props:["data-list","data-ads"],data:function(){return{list:[],ads:[],isAdsVisible:!0}},mounted:function(){this.list=this.dataList,this.ads=this.dataAds},watch:{dataAds:function(){this.ads=this.dataAds},dataList:function(){this.list=this.dataList}},computed:{combinedList:function(){var t=this.list.concat(this.ads).sort((function(t,e){return t.time-e.time}));return t},shiftedList:function(){var t=0,e=JSON.parse(JSON.stringify(this.combinedList));return e.forEach((function(e){e.duration&&(t+=e.duration),e.duration||(e.time=e.time+t)})),e.sort((function(t,e){return t.time-e.time}))}},methods:{onChangeAudioItem:function(t){this.$emit("changeAudioTime",t)}}},H=B,G=Object(v["a"])(H,R,I,!1,null,null,null),W=G.exports,Y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("input",{ref:"mp3",staticStyle:{display:"none"},attrs:{type:"file",multiple:"false",accept:".mp3,audio/*"},on:{change:t.loadPodcast}}),n("a",{staticClass:"mr-2",attrs:{href:"javascript:void(0);"},on:{click:function(e){return t.$refs.mp3.click()}}},[t._v("Load your audio to test links")]),n("div",[n("audio",{ref:"audio",attrs:{controls:"controls",src:t.source,type:"audio/mp3"}})])])},q=[],z={name:"Player",props:["selected-time"],data:function(){return{source:null}},methods:{loadPodcast:function(t){var e=this,n=t.target.files[0],i=new FileReader;i.onload=function(t){var n=t.target.result;e.source=n},i.readAsDataURL(n)}},watch:{selectedTime:function(){console.log("selected time: "+this.selectedTime);var t=this.$refs["audio"];t.duration>0&&(t.currentTime=this.selectedTime,t.paused&&t.play())}}},K=z,Q=Object(v["a"])(K,Y,q,!1,null,null,null),X=Q.exports,Z=n("1993"),tt={components:{List:A,Ads:D,Results:W,Player:X},name:"Home",props:{msg:String},data:function(){return{list:[],ads:[],selectedAudioTime:0}},methods:{onAddLink:function(t){this.list.splice(t.index,0,t.formData)},onAddAd:function(t){this.ads.splice(t.index,0,t.formData)},onRemove:function(t){this[t.container]=this[t.container].filter((function(e){return e.time!==t.time}))},onChangeAudioTime:function(t){this.selectedAudioTime=t},ensureListsAreEmpty:function(){var t=this;return new Promise((function(e,n){if(t.list.length>0||t.ads.length>0){var i=confirm("Your current lists will be wiped. Continue?");i?(t.list=[],t.ads=[],e("User confirmed wiping existing data.")):n("User rejected to wipe existing data.")}else e("Lists are empty.")}))},loadSampleData:function(){var t=this;t.ensureListsAreEmpty().then((function(e){console.log(e),Z.links.forEach((function(e){t.list.push(e)})),Z.ads.forEach((function(e){t.ads.push(e)})),t.$forceUpdate()}))},saveFile:function(){var t={list:this.list,ads:this.ads},e="myPodcast.json",n=JSON.stringify(t),i=new Blob([n],{type:"text/plain"}),s=document.createEvent("MouseEvents"),a=document.createElement("a");a.download=e,a.href=window.URL.createObjectURL(i),a.dataset.downloadurl=["text/json",a.download,a.href].join(":"),s.initEvent("click",!0,!1,window,0,0,0,0,0,!1,!1,!1,!1,0,null),a.dispatchEvent(s)},loadFromFile:function(t){var e=this,n=new FileReader,i=t.target.files[0],s=new Blob([i],{type:"application/json"});n.addEventListener("load",(function(t){try{var n=JSON.parse(t.target.result);if(!n.list[0].text)return void alert("Wrong file format.");e.list=n.list,e.ads=n.ads}catch(i){alert("We could not load the list. Are you sure that the file was exported from here?")}})),n.readAsText(s)}}},et=tt,nt=Object(v["a"])(et,o,r,!1,null,null,null),it=nt.exports,st={name:"App",components:{Home:it}},at=st,ot=(n("034f"),Object(v["a"])(at,s,a,!1,null,null,null)),rt=ot.exports;i["a"].config.productionTip=!1,new i["a"]({render:function(t){return t(rt)}}).$mount("#app")},"85ec":function(t,e,n){},ef62:function(t,e,n){"use strict";n("418b")}});
//# sourceMappingURL=app.c903ab27.js.map