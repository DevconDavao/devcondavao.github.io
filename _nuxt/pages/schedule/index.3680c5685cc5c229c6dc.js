webpackJsonp([3],{"4S+g":function(e,t,i){"use strict";var a=i("yyt/");t.a={mixins:[a.a]}},"4TrC":function(e,t,i){"use strict";var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"divider"}},[e.$props.bgImage?i("div",{staticClass:"background-img",style:e.dividerStyle},[i("img",{staticClass:"responsive-img",class:{parallax:e.$props.parallax},attrs:{src:e.$props.bgImage}})]):e._e(),e.$props.bgVideo?i("div",{staticClass:"background-video",style:e.dividerStyle},[i("video",{attrs:{autoplay:"",muted:"",loop:""},domProps:{muted:!0}},[i("source",{attrs:{src:e.$props.bgVideo,type:"video/mp4"}}),e._v("\n      Your browser does not support HTML5 video tag.\n    ")])]):e._e(),i("div",{staticClass:"content"},[i("div",{staticClass:"container"},[e._t("default")],2)])])};a._withStripped=!0;var n={render:a,staticRenderFns:[]};t.a=n},"5ZxY":function(e,t,i){"use strict";t.a={props:{parallax:{type:Boolean,default:!1},bgImage:{type:String,default:""},bgVideo:{type:String,default:""},bgColor:{type:String,default:"#E8CA04"}},mounted:function(){this.$props.parallax&&window.addEventListener("scroll",function(e){var t=window.pageYOffset,i=document.querySelector(".parallax");i&&(i.style.top=-.1*t+"px")})},data:function(){return{dividerStyle:{"--color":this.$props.bgColor}}}}},"9/fg":function(e,t,i){"use strict";var a=i("5ZxY"),n=i("4TrC"),r=!1;var o=function(e){r||i("jeTc")},d=i("VU/8")(a.a,n.a,!1,o,"data-v-c00e91e4",null);d.options.__file="components/Divider.vue",t.a=d.exports},BNFg:function(e,t,i){(e.exports=i("FZ+f")(!1)).push([e.i,".content[data-v-aefc91da]{background-color:#eee;padding:20px 0}",""])},HckJ:function(e,t,i){var a=i("BNFg");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);i("rjj0")("33697eb9",a,!1,{sourceMap:!1})},HoZy:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=i("4S+g"),n=i("VdF1"),r=!1;var o=function(e){r||i("HckJ")},d=i("VU/8")(a.a,n.a,!1,o,"data-v-aefc91da",null);d.options.__file="pages/schedule/index.vue",t.default=d.exports},OURY:function(e,t,i){(e.exports=i("FZ+f")(!1)).push([e.i,"#divider[data-v-c00e91e4]{max-height:550px;min-height:300px;position:relative;overflow:hidden;color:#fff;margin:50px 0}#divider .background-img[data-v-c00e91e4],#divider .background-video[data-v-c00e91e4]{--color:#e8ca04}#divider .background-video[data-v-c00e91e4]{position:relative;max-height:550px;min-height:300px}#divider .background-video[data-v-c00e91e4]:after{top:0;left:0;bottom:0;right:0;position:absolute;z-index:99;content:\" \";width:100%;height:100%;opacity:.9;background:var(--color)}@media only screen and (max-width:600px){#divider .background-video[data-v-c00e91e4]:after{opacity:1}}#divider .background-video video[data-v-c00e91e4]{width:100%;top:-20vw;position:absolute}@media only screen and (min-width:601px) and (max-width:992px){#divider .background-video video[data-v-c00e91e4]{top:-10vw}}@media only screen and (max-width:600px){#divider .background-video video[data-v-c00e91e4]{display:none}}#divider .background-img img[data-v-c00e91e4]{position:absolute;width:100%}#divider .background-img[data-v-c00e91e4]:after{top:0;left:0;bottom:0;right:0;position:absolute;z-index:99;content:\" \";width:100%;height:100%;opacity:.9;background:var(--color)}@media only screen and (max-width:600px){#divider .background-img[data-v-c00e91e4]:after{display:none}}#divider .container[data-v-c00e91e4]{font-size:19.2px;font-size:1.2rem;font-weight:300;width:50vw}@media only screen and (max-width:992px){#divider .container[data-v-c00e91e4]{width:85vw}}@media only screen and (max-width:600px){#divider .container[data-v-c00e91e4]{width:90vw}}#divider .container[data-v-c00e91e4]:before{-webkit-transform:rotate(60deg);transform:rotate(60deg);right:-48vw}@media only screen and (max-width:600px){#divider .container[data-v-c00e91e4]:before{-webkit-transform:rotate(0deg) translateY(-80%);transform:rotate(0deg) translateY(-80%);right:0}}#divider .container[data-v-c00e91e4]:after{-webkit-transform:rotate(-60deg);transform:rotate(-60deg);left:-48vw}@media only screen and (max-width:600px){#divider .container[data-v-c00e91e4]:after{-webkit-transform:rotate(0deg) translateY(80%);transform:rotate(0deg) translateY(80%);left:0}}#divider .container[data-v-c00e91e4]:after,#divider .container[data-v-c00e91e4]:before{content:\"\";position:absolute;top:0;z-index:1;width:100%;height:100%;background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Cpath fill-rule='evenodd' d='M11 0l5 20H6l5-20zm42 31a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM0 72h40v4H0v-4zm0-8h31v4H0v-4zm20-16h20v4H20v-4zM0 56h40v4H0v-4zm63-25a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm10 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM53 41a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm10 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm10 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-30 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-28-8a5 5 0 0 0-10 0h10zm10 0a5 5 0 0 1-10 0h10zM56 5a5 5 0 0 0-10 0h10zm10 0a5 5 0 0 1-10 0h10zm-3 46a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm10 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM21 0l5 20H16l5-20zm43 64v-4h-4v4h-4v4h4v4h4v-4h4v-4h-4zM36 13h4v4h-4v-4zm4 4h4v4h-4v-4zm-4 4h4v4h-4v-4zm8-8h4v4h-4v-4z' fill='%23EEE' fill-opacity='.2'/%3E%3C/svg%3E\")}#divider .content[data-v-c00e91e4]{top:0;left:0;bottom:0;right:0;position:absolute;z-index:99;height:100%;width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-line-pack:center;align-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;text-align:center}",""])},VdF1:function(e,t,i){"use strict";var a=function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"page",attrs:{id:"schedule"}},[this._m(0),this._m(1),t("br"),t("br"),this._m(2),t("divider",{staticClass:"thin",attrs:{"bg-image":this.dividerBg,parallax:!0,"bg-color":"#71B406"}},[t("strong",[this._v("\n      The biggest developer conference in the Philippines goes to Davao!"),t("br"),t("br"),this._v("\n      Join us at the 2nd dev summit to engage with the developers around the Philippines for a whole-day exploration of modern technologies.\n    ")])])],1)};a._withStripped=!0;var n={render:a,staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"container"},[t("h1",[this._v("\n      schedule"),t("br"),t("small",{staticClass:"thin"},[this._v("Sunday, November 25th")])])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"content"},[i("div",{staticClass:"container thin"},[i("p",[e._v("DevCon Summit: Davao Edition is an annual gathering where developers from around the Philippines hear about the latest technology and development trends and get a glimpse into the future of the industry.")]),i("br"),i("p",[e._v("The event will focus on:")]),i("ul",{staticClass:"unstyled-list"},[i("li",[e._v("DevOps - (Development and Operations)")]),i("li",[e._v("IoT - Internet of Things")]),i("li",[e._v("Machine Learning")]),i("li",[e._v("Cyber Security")]),i("li",[e._v("Cloud Computing")]),i("li",[e._v("Data Analytics")]),i("li",[e._v("UI/UX")]),i("li",[e._v("Mobile and Web Development")])]),i("br"),i("p",{staticClass:"thin"},[e._v("Watch this space for the detailed schedule.")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"container"},[t("p",[t("a",{staticClass:"button",attrs:{href:"https://goo.gl/12jQSW",target:"_blank",rel:"noopener"}},[this._v("REGISTER FOR SPEAKERSHIP")])])])}]};t.a=n},iKsT:function(e,t,i){e.exports=i.p+"img/optimized-G0020491.e78bb25.jpg"},jeTc:function(e,t,i){var a=i("OURY");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);i("rjj0")("37598f0c",a,!1,{sourceMap:!1})},"yyt/":function(e,t,i){"use strict";var a={components:{Divider:i("9/fg").a},data:function(){return{dividerBg:i("iKsT")}}};t.a=a}});