webpackJsonp([0],{"/TYz":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("Fl6Q"),n=i("rGQh"),s=!1;var r=function(t){s||i("AAbZ")},o=i("VU/8")(a.a,n.a,!1,r,"data-v-2a183b29",null);o.options.__file="pages/index.vue",e.default=o.exports},"4TrC":function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"divider"}},[t.$props.bgImage?i("div",{staticClass:"background-img",style:t.dividerStyle},[i("img",{staticClass:"responsive-img",class:{parallax:t.$props.parallax},attrs:{src:t.$props.bgImage}})]):t._e(),t.$props.bgVideo?i("div",{staticClass:"background-video",style:t.dividerStyle},[i("video",{attrs:{autoplay:"",muted:"",loop:""},domProps:{muted:!0}},[i("source",{attrs:{src:t.$props.bgVideo,type:"video/mp4"}}),t._v("\n      Your browser does not support HTML5 video tag.\n    ")])]):t._e(),i("div",{staticClass:"content"},[i("div",{staticClass:"container"},[t._t("default")],2)])])};a._withStripped=!0;var n={render:a,staticRenderFns:[]};e.a=n},"5NIo":function(t,e,i){t.exports=i.p+"img/optimized-5.ce7df0e.jpg"},"5ZxY":function(t,e,i){"use strict";e.a={props:{parallax:{type:Boolean,default:!1},bgImage:{type:String,default:""},bgVideo:{type:String,default:""},bgColor:{type:String,default:"#E8CA04"}},mounted:function(){this.$props.parallax&&window.addEventListener("scroll",function(t){var e=window.pageYOffset,i=document.querySelector(".parallax");i&&(i.style.top=-.1*e+"px")})},data:function(){return{dividerStyle:{"--color":this.$props.bgColor}}}}},"8XrK":function(t,e,i){"use strict";var a=i("hvQH"),n=i("HE0P"),s=!1;var r=function(t){s||i("H0VI")},o=i("VU/8")(a.a,n.a,!1,r,"data-v-74ca56c7",null);o.options.__file="components/Gallery.vue",e.a=o.exports},"9/fg":function(t,e,i){"use strict";var a=i("5ZxY"),n=i("4TrC"),s=!1;var r=function(t){s||i("jeTc")},o=i("VU/8")(a.a,n.a,!1,r,"data-v-c00e91e4",null);o.options.__file="components/Divider.vue",e.a=o.exports},AAbZ:function(t,e,i){var a=i("k/T6");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);i("rjj0")("09a7433e",a,!1,{sourceMap:!1})},AKhM:function(t,e,i){t.exports=i.p+"img/optimized-1.5f18e3f.jpg"},DMWa:function(t,e,i){t.exports=i.p+"img/optimized-4.409dc9e.jpg"},Fl6Q:function(t,e,i){"use strict";var a=i("OsNu"),n=i("9/fg"),s=i("8XrK"),r=i("teBo");e.a={components:{Gallery:s.a,Divider:n.a,Countdown:a.a,Sponsors:r.a},data:function(){return{dividerVideo:i("Fsxa")}}}},Fsxa:function(t,e,i){t.exports=i.p+"videos/devcon-summit-2017.742c7e8.mp4"},H0VI:function(t,e,i){var a=i("mOVP");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);i("rjj0")("6b3bf7d3",a,!1,{sourceMap:!1})},HE0P:function(t,e,i){"use strict";var a=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"gallery"}},[e("div",{staticClass:"container"},this._l(this.images,function(t,i){return e("div",{key:i,staticClass:"images"},[e("img",{staticClass:"responsive-img ph-picture",attrs:{src:t,alt:""}})])}))])};a._withStripped=!0;var n={render:a,staticRenderFns:[]};e.a=n},JAhy:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"sponsors"}},[i("h1",[t._v("Co Presenter")]),i("br"),i("div",{staticClass:"co-presenters tier container container--flex"},t._l(t.coPresenters,function(e,a){return i("div",{key:a,staticClass:"sponsor-logo",class:{active:t.currentSlide.coPresenters===a},on:{click:function(i){t.nextSlide(e.type)}}},[i("img",{staticClass:"responsive-img",attrs:{src:t.getLogoSrc(e.logo,e.type),alt:e.name}})])})),i("br"),i("br"),i("h1",[t._v("Our Sponsors")]),i("br"),i("div",{staticClass:"sponsors tier container container--flex"},t._l(t.filteredSponsors,function(e,a){return i("div",{key:a,staticClass:"sponsor-logo",class:{active:t.currentSlide.sponsors===a},on:{click:function(i){t.nextSlide(e.type)}}},[i("img",{staticClass:"responsive-img",attrs:{src:t.getLogoSrc(e.logo,e.type),alt:e.name}})])})),i("h1",[t._v("Community Partners")]),i("br"),i("div",{staticClass:"community-partners tier container container--flex"},t._l(t.communityPartners,function(e,a){return i("div",{key:a,staticClass:"sponsor-logo",class:{active:t.currentSlide.communityPartners===a},on:{click:function(i){t.nextSlide(e.type)}}},[i("img",{staticClass:"responsive-img",attrs:{src:t.getLogoSrc(e.logo,e.type),alt:e.name}})])}))])};a._withStripped=!0;var n={render:a,staticRenderFns:[]};e.a=n},MsGA:function(t,e,i){(t.exports=i("FZ+f")(!1)).push([t.i,"#sponsors[data-v-46f76474]{text-align:center}#sponsors .tier[data-v-46f76474]{-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}@media only screen and (max-width:600px){#sponsors .tier[data-v-46f76474]{position:relative;height:200px;width:80%}}#sponsors .sponsor-logo[data-v-46f76474]{margin:10px 20px}@media only screen and (max-width:600px){#sponsors .sponsor-logo[data-v-46f76474]{-webkit-transition:opacity .6s cubic-bezier(.23,1,.32,1);transition:opacity .6s cubic-bezier(.23,1,.32,1);width:100%;height:100%;position:absolute;margin:0;opacity:0}#sponsors .sponsor-logo.active[data-v-46f76474]{opacity:1}}#sponsors .sponsor-logo img[data-v-46f76474]{max-height:150px;max-width:280px}@media only screen and (max-width:600px){#sponsors .sponsor-logo img[data-v-46f76474]{max-height:200px;max-width:100%}}",""])},Nyky:function(t,e,i){t.exports=i.p+"img/devcon-summit-davao-black.0d402cd.svg"},OTM2:function(t,e,i){"use strict";var a=i("Dd8w"),n=i.n(a),s=i("NYxO");e.a={mounted:function(){this.startSliderInterval()},destroyed:function(){clearInterval(this.intervalID)},data:function(){return{currentSlide:{coPresenters:0,sponsors:0,communityPartners:0},intervalID:null}},methods:{startSliderInterval:function(){var t=this;null!==this.intervalID&&clearInterval(this.intervalID),this.intervalID=setInterval(function(){t.nextSlide("all")},3e3)},getLogoSrc:function(t,e){var i="img/sponsors";switch(e){case this.SPONSOR_TYPE.BRONZE:return i+"/bronze/"+t;case this.SPONSOR_TYPE.SILVER:return i+"/silver/"+t;case this.SPONSOR_TYPE.GOLD:return i+"/gold/"+t;case this.SPONSOR_TYPE.CO_PRESENTER:return i+"/co-presenters/"+t;case this.SPONSOR_TYPE.PARTNER:return i+"/contributing-partners/"+t;case this.SPONSOR_TYPE.EXHIBITOR:return i+"/exhibitors/"+t;case this.SPONSOR_TYPE.COMMUNITY_PARTNER:return i+"/community-partners/"+t}},iCommunityPartner:function(){this.currentSlide.communityPartners===this.communityPartners.length-1?this.currentSlide.communityPartners=0:this.currentSlide.communityPartners++},iCoPresenter:function(){this.currentSlide.coPresenters===this.coPresenters.length-1?this.currentSlide.coPresenters=0:this.currentSlide.coPresenters++},iSponsors:function(){this.currentSlide.sponsors===this.filteredSponsors.length-1?this.currentSlide.sponsors=0:this.currentSlide.sponsors++},nextSlide:function(t){switch(t){case this.SPONSOR_TYPE.CO_PRESENTER:this.iCoPresenter();break;case this.SPONSOR_TYPE.COMMUNITY_PARTNER:this.iCommunityPartner();break;case this.SPONSOR_TYPE.PARTNER:case this.SPONSOR_TYPE.GOLD:case this.SPONSOR_TYPE.SILVER:case this.SPONSOR_TYPE.BRONZE:case this.SPONSOR_TYPE.EXHIBITOR:this.iSponsors();break;default:this.iCoPresenter(),this.iCommunityPartner(),this.iSponsors()}this.startSliderInterval()}},computed:n()({},Object(s.mapGetters)({sponsors:"sponsors/all",coPresenters:"sponsors/coPresenters",communityPartners:"sponsors/communityPartners",SPONSOR_TYPE:"sponsors/SPONSOR_TYPE"}),{filteredSponsors:function(){var t=this;return this.sponsors.filter(function(e){return e.type!==t.SPONSOR_TYPE.CO_PRESENTER&&e.type!==t.SPONSOR_TYPE.COMMUNITY_PARTNER}).sort(function(t,e){return e.type-t.type})}})}},OURY:function(t,e,i){(t.exports=i("FZ+f")(!1)).push([t.i,"#divider[data-v-c00e91e4]{max-height:550px;min-height:300px;position:relative;overflow:hidden;color:#fff;margin:50px 0}#divider .background-img[data-v-c00e91e4],#divider .background-video[data-v-c00e91e4]{--color:#e8ca04}#divider .background-video[data-v-c00e91e4]{position:relative;max-height:550px;min-height:300px}#divider .background-video[data-v-c00e91e4]:after{top:0;left:0;bottom:0;right:0;position:absolute;z-index:99;content:\" \";width:100%;height:100%;opacity:.9;background:var(--color)}@media only screen and (max-width:600px){#divider .background-video[data-v-c00e91e4]:after{opacity:1}}#divider .background-video video[data-v-c00e91e4]{width:100%;top:-20vw;position:absolute}@media only screen and (min-width:601px) and (max-width:992px){#divider .background-video video[data-v-c00e91e4]{top:-10vw}}@media only screen and (max-width:600px){#divider .background-video video[data-v-c00e91e4]{display:none}}#divider .background-img img[data-v-c00e91e4]{position:absolute;width:100%}@media only screen and (max-width:600px){#divider .background-img img[data-v-c00e91e4]{display:none}}#divider .background-img[data-v-c00e91e4]:after{top:0;left:0;bottom:0;right:0;position:absolute;z-index:99;content:\" \";width:100%;height:100%;opacity:.9;background:var(--color)}#divider .container[data-v-c00e91e4]{font-size:19.2px;font-size:1.2rem;font-weight:600;width:50vw}@media only screen and (max-width:992px){#divider .container[data-v-c00e91e4]{width:85vw}}@media only screen and (max-width:600px){#divider .container[data-v-c00e91e4]{width:90vw}}#divider .container[data-v-c00e91e4]:before{-webkit-transform:rotate(60deg);transform:rotate(60deg);right:-48vw}@media only screen and (max-width:600px){#divider .container[data-v-c00e91e4]:before{-webkit-transform:rotate(0deg) translateY(-80%);transform:rotate(0deg) translateY(-80%);right:0}}#divider .container[data-v-c00e91e4]:after{-webkit-transform:rotate(-60deg);transform:rotate(-60deg);left:-48vw}@media only screen and (max-width:600px){#divider .container[data-v-c00e91e4]:after{-webkit-transform:rotate(0deg) translateY(80%);transform:rotate(0deg) translateY(80%);left:0}}#divider .container[data-v-c00e91e4]:after,#divider .container[data-v-c00e91e4]:before{content:\"\";position:absolute;top:0;z-index:1;width:100%;height:100%;background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Cpath fill-rule='evenodd' d='M11 0l5 20H6l5-20zm42 31a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM0 72h40v4H0v-4zm0-8h31v4H0v-4zm20-16h20v4H20v-4zM0 56h40v4H0v-4zm63-25a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm10 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM53 41a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm10 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm10 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-30 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-28-8a5 5 0 0 0-10 0h10zm10 0a5 5 0 0 1-10 0h10zM56 5a5 5 0 0 0-10 0h10zm10 0a5 5 0 0 1-10 0h10zm-3 46a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm10 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM21 0l5 20H16l5-20zm43 64v-4h-4v4h-4v4h4v4h4v-4h4v-4h-4zM36 13h4v4h-4v-4zm4 4h4v4h-4v-4zm-4 4h4v4h-4v-4zm8-8h4v4h-4v-4z' fill='%23EEE' fill-opacity='.5'/%3E%3C/svg%3E\")}#divider .content[data-v-c00e91e4]{top:0;left:0;bottom:0;right:0;position:absolute;z-index:99;height:100%;width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-line-pack:center;align-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;text-align:center}",""])},OsNu:function(t,e,i){"use strict";var a=i("aPNB"),n=i("oZy4"),s=!1;var r=function(t){s||i("tWZ5")},o=i("VU/8")(a.a,n.a,!1,r,"data-v-a2e6aa34",null);o.options.__file="components/Countdown.vue",e.a=o.exports},PYsL:function(t,e,i){t.exports=i.p+"img/optimized-3.5339d18.jpg"},YLZj:function(t,e,i){t.exports=i.p+"img/optimized-2.9985afb.jpg"},ZMHd:function(t,e,i){var a=i("MsGA");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);i("rjj0")("0bec3da1",a,!1,{sourceMap:!1})},aPNB:function(t,e,i){"use strict";var a=new Date("Nov 25, 2018 08:00:00");e.a={methods:{initTimer:function(){this.interval=setInterval(this.updateTimer,1e3)},stopTimer:function(){clearInterval(this.interval)},updateTimer:function(){var t=(new Date).getTime();this.diff=a.getTime()-t},redirect:function(){this.$router.push("schedule")}},computed:{daysRemaining:function(){var t=Math.floor(this.diff/864e5);return t<10?"0"+t:t},hrsRemaining:function(){var t=Math.floor(this.diff%864e5/36e5);return t<10?"0"+t:t},minsRemaining:function(){var t=Math.floor(this.diff%36e5/6e4);return t<10?"0"+t:t},secRemaining:function(){var t=Math.floor(this.diff%6e4/1e3);return t<10?"0"+t:t}},mounted:function(){this.initTimer()},destroyed:function(){this.stopTimer()},data:function(){return{interval:null,diff:0}}}},hvQH:function(t,e,i){"use strict";e.a={data:function(){return{images:[i("AKhM"),i("YLZj"),i("PYsL"),i("DMWa"),i("5NIo"),i("mefw")]}}}},jeTc:function(t,e,i){var a=i("OURY");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);i("rjj0")("37598f0c",a,!1,{sourceMap:!1})},"k/T6":function(t,e,i){(t.exports=i("FZ+f")(!1)).push([t.i,'.cta-links[data-v-2a183b29]{margin-bottom:60px}.cta-links a[data-v-2a183b29]{color:#212121;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;position:relative;width:80%;direction:rtl}@media only screen and (max-width:992px){.cta-links a[data-v-2a183b29]{width:90vw}}.cta-links a:hover .link-content strong[data-v-2a183b29]{color:#d4e157}.link-content[data-v-2a183b29]{font-size:19.2px;font-size:1.2rem;position:relative}.link-content[data-v-2a183b29]:after{top:auto;left:auto;bottom:-5px;right:2px;position:absolute;z-index:1;background:#000;content:" ";width:100vw;height:3px}@media only screen and (max-width:600px){.link-content[data-v-2a183b29]{font-size:1rem}}@media only screen and (max-width:320px){.link-content[data-v-2a183b29]{font-size:.9rem}}.icon[data-v-2a183b29]{font-size:96px;font-size:6rem}.container[data-v-2a183b29]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.logo[data-v-2a183b29]{width:80vw;max-width:650px;margin:50px auto 0}',""])},mOVP:function(t,e,i){(t.exports=i("FZ+f")(!1)).push([t.i,"#gallery .container[data-v-74ca56c7]{display:grid;grid-template:1fr/1fr 1fr 1fr;grid-template-rows:1fr;grid-column-gap:10px;grid-row-gap:5px;-webkit-box-align:center;-ms-flex-align:center;align-items:center}@media only screen and (max-width:992px){#gallery .container[data-v-74ca56c7]{grid-template:1fr 1fr/1fr 1fr}}",""])},mefw:function(t,e,i){t.exports=i.p+"img/optimized-6.aca9dc5.jpg"},oZy4:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"center",attrs:{id:"countdown"},on:{click:function(e){t.redirect()}}},[i("div",{attrs:{id:"countdown-timer"}},[i("h4",{staticClass:"days white-text"},[i("span",{staticClass:"val"},[t._v(t._s(this.daysRemaining))]),t._v(" day"),this.daysRemaining>1?i("span",[t._v("s")]):t._e()]),i("h4",{staticClass:"hours white-text"},[i("span",{staticClass:"val"},[t._v(t._s(this.hrsRemaining))]),t._v(" hour"),this.hrsRemaining>1?i("span",[t._v("s")]):t._e()]),i("h4",{staticClass:"minutes white-text"},[i("span",{staticClass:"val"},[t._v(t._s(this.minsRemaining))]),t._v(" minute"),this.minsRemaining>1?i("span",[t._v("s")]):t._e()]),i("h4",{staticClass:"seconds white-text"},[i("span",{staticClass:"val"},[t._v(t._s(this.secRemaining))]),t._v(" second"),this.secRemaining>1?i("span",[t._v("s")]):t._e()])])])};a._withStripped=!0;var n={render:a,staticRenderFns:[]};e.a=n},qZlZ:function(t,e,i){(t.exports=i("FZ+f")(!1)).push([t.i,'#countdown[data-v-a2e6aa34]{cursor:pointer;margin:0 auto 10px}@media only screen and (min-width:601px){#countdown[data-v-a2e6aa34]{width:450px}}p[data-v-a2e6aa34]{font-size:32px;font-size:2rem}#countdown-timer .hours[data-v-a2e6aa34]:after,#countdown-timer .minutes[data-v-a2e6aa34]:after{top:0;left:auto;bottom:auto;right:-17px;position:absolute;z-index:1;content:":";height:100%;font-size:32px;font-size:2rem}@media only screen and (max-width:600px){#countdown-timer .hours[data-v-a2e6aa34]:after,#countdown-timer .minutes[data-v-a2e6aa34]:after{font-size:2rem;right:-12px}}#countdown-timer h4[data-v-a2e6aa34]{display:inline-block;margin:0 10px;position:relative;font-weight:100}#countdown-timer h4>span[data-v-a2e6aa34]:first-child{display:block;font-size:35.2px;font-size:2.2rem;height:40px;height:2.5rem}@media only screen and (max-width:600px){#countdown-timer h4>span[data-v-a2e6aa34]:first-child{font-size:2.2rem}}@media only screen and (max-width:600px){#countdown-timer h4[data-v-a2e6aa34]{margin:0 5px}}',""])},rGQh:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"page",attrs:{id:"home"}},[i("div",{staticClass:"container"},[t._m(0),i("br"),i("countdown"),t._m(1),i("br"),i("nuxt-link",{staticClass:"button",attrs:{to:"/registration"}},[t._v("REGISTER")])],1),i("divider",{staticClass:"thin",attrs:{"bg-video":t.dividerVideo}},[i("strong",[t._v("\n      The biggest developer conference in the Philippines goes to Davao!"),i("br"),i("br"),t._v("\n      Join us at the 2nd dev summit to engage with the developers around the Philippines for a whole-day exploration of modern technologies.\n    ")])]),i("div",{staticClass:"container cta-links"},[i("nuxt-link",{attrs:{to:"/schedule"}},[i("i",{staticClass:"icon material-icons"},[t._v("today")]),i("div",{staticClass:"link-content"},[i("p",[i("strong",[t._v("schedule")]),i("br"),i("span",{staticClass:"thin"},[t._v("Find out who you'll learn from")])])])]),i("br"),i("br"),i("br"),i("nuxt-link",{attrs:{to:"/venue"}},[i("i",{staticClass:"icon material-icons"},[t._v("place")]),i("div",{staticClass:"link-content"},[i("p",[i("strong",[t._v("location")]),i("br"),i("span",{staticClass:"thin"},[t._v("Mapúa Malayan Colleges Mindanao • Davao City")])])])]),i("br"),i("br"),i("br"),t._m(2)],1),i("br"),i("gallery"),i("br"),i("sponsors")],1)},n=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"logo"},[e("img",{staticClass:"responsive-img",attrs:{src:i("Nyky"),alt:"Devcon Davao"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"center"},[e("strong",[this._v("November")]),this._v(" 25"),e("br"),e("span",{staticClass:"thin"},[this._v("Mapúa Malayan Colleges Mindanao • Davao City")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("a",{attrs:{href:"https://goo.gl/forms/17QPuMEdZsdQZgU53",target:"_blank",rel:"noopener"}},[e("i",{staticClass:"icon material-icons"},[this._v("people")]),e("div",{staticClass:"link-content"},[e("p",[e("strong",[this._v("sponsorship")]),e("br"),e("span",{staticClass:"thin"},[this._v("Show your support to the community")])])])])}];a._withStripped=!0;var s={render:a,staticRenderFns:n};e.a=s},tWZ5:function(t,e,i){var a=i("qZlZ");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);i("rjj0")("91f40bf4",a,!1,{sourceMap:!1})},teBo:function(t,e,i){"use strict";var a=i("OTM2"),n=i("JAhy"),s=!1;var r=function(t){s||i("ZMHd")},o=i("VU/8")(a.a,n.a,!1,r,"data-v-46f76474",null);o.options.__file="components/Sponsors.vue",e.a=o.exports}});