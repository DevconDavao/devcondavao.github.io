webpackJsonp([4],{"2gFQ":function(e,t,a){"use strict";var i=a("yyt/");t.a={mixins:[i.a]}},"4TrC":function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"divider"}},[e.$props.bgImage?a("div",{staticClass:"background-img",style:e.dividerStyle},[a("img",{staticClass:"responsive-img",class:{parallax:e.$props.parallax},attrs:{src:e.$props.bgImage}})]):e._e(),e.$props.bgVideo?a("div",{staticClass:"background-video",style:e.dividerStyle},[a("video",{attrs:{autoplay:"",muted:"",loop:""},domProps:{muted:!0}},[a("source",{attrs:{src:e.$props.bgVideo,type:"video/mp4"}}),e._v("\n      Your browser does not support HTML5 video tag.\n    ")])]):e._e(),a("div",{staticClass:"content"},[a("div",{staticClass:"container"},[e._t("default")],2)])])};i._withStripped=!0;var o={render:i,staticRenderFns:[]};t.a=o},"5ZxY":function(e,t,a){"use strict";t.a={props:{parallax:{type:Boolean,default:!1},bgImage:{type:String,default:""},bgVideo:{type:String,default:""},bgColor:{type:String,default:"#E8CA04"}},mounted:function(){this.$props.parallax&&window.addEventListener("scroll",function(e){var t=window.pageYOffset,a=document.querySelector(".parallax");a&&(a.style.top=-.1*t+"px")})},data:function(){return{dividerStyle:{"--color":this.$props.bgColor}}}}},"757t":function(e,t,a){(e.exports=a("FZ+f")(!1)).push([e.i,".content[data-v-92faaad6]{background-color:#eee;padding:20px 0}.content .big-text[data-v-92faaad6]{font-size:20px;font-size:1.25rem;font-weight:700}",""])},"9/fg":function(e,t,a){"use strict";var i=a("5ZxY"),o=a("4TrC"),n=!1;var r=function(e){n||a("jeTc")},d=a("VU/8")(i.a,o.a,!1,r,"data-v-c00e91e4",null);d.options.__file="components/Divider.vue",t.a=d.exports},OURY:function(e,t,a){(e.exports=a("FZ+f")(!1)).push([e.i,"#divider[data-v-c00e91e4]{max-height:550px;min-height:300px;position:relative;overflow:hidden;color:#fff;margin:50px 0}#divider .background-img[data-v-c00e91e4],#divider .background-video[data-v-c00e91e4]{--color:#e8ca04}#divider .background-video[data-v-c00e91e4]{position:relative;max-height:550px;min-height:300px}#divider .background-video[data-v-c00e91e4]:after{top:0;left:0;bottom:0;right:0;position:absolute;z-index:99;content:\" \";width:100%;height:100%;opacity:.9;background:var(--color)}@media only screen and (max-width:600px){#divider .background-video[data-v-c00e91e4]:after{opacity:1}}#divider .background-video video[data-v-c00e91e4]{width:100%;top:-20vw;position:absolute}@media only screen and (min-width:601px) and (max-width:992px){#divider .background-video video[data-v-c00e91e4]{top:-10vw}}@media only screen and (max-width:600px){#divider .background-video video[data-v-c00e91e4]{display:none}}#divider .background-img img[data-v-c00e91e4]{position:absolute;width:100%}@media only screen and (max-width:600px){#divider .background-img img[data-v-c00e91e4]{display:none}}#divider .background-img[data-v-c00e91e4]:after{top:0;left:0;bottom:0;right:0;position:absolute;z-index:99;content:\" \";width:100%;height:100%;opacity:.9;background:var(--color)}#divider .container[data-v-c00e91e4]{font-size:19.2px;font-size:1.2rem;font-weight:600;width:50vw}@media only screen and (max-width:992px){#divider .container[data-v-c00e91e4]{width:85vw}}@media only screen and (max-width:600px){#divider .container[data-v-c00e91e4]{width:90vw}}#divider .container[data-v-c00e91e4]:before{-webkit-transform:rotate(60deg);transform:rotate(60deg);right:-48vw}@media only screen and (max-width:600px){#divider .container[data-v-c00e91e4]:before{-webkit-transform:rotate(0deg) translateY(-80%);transform:rotate(0deg) translateY(-80%);right:0}}#divider .container[data-v-c00e91e4]:after{-webkit-transform:rotate(-60deg);transform:rotate(-60deg);left:-48vw}@media only screen and (max-width:600px){#divider .container[data-v-c00e91e4]:after{-webkit-transform:rotate(0deg) translateY(80%);transform:rotate(0deg) translateY(80%);left:0}}#divider .container[data-v-c00e91e4]:after,#divider .container[data-v-c00e91e4]:before{content:\"\";position:absolute;top:0;z-index:1;width:100%;height:100%;background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Cpath fill-rule='evenodd' d='M11 0l5 20H6l5-20zm42 31a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM0 72h40v4H0v-4zm0-8h31v4H0v-4zm20-16h20v4H20v-4zM0 56h40v4H0v-4zm63-25a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm10 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM53 41a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm10 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm10 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-30 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-28-8a5 5 0 0 0-10 0h10zm10 0a5 5 0 0 1-10 0h10zM56 5a5 5 0 0 0-10 0h10zm10 0a5 5 0 0 1-10 0h10zm-3 46a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm10 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM21 0l5 20H16l5-20zm43 64v-4h-4v4h-4v4h4v4h4v-4h4v-4h-4zM36 13h4v4h-4v-4zm4 4h4v4h-4v-4zm-4 4h4v4h-4v-4zm8-8h4v4h-4v-4z' fill='%23EEE' fill-opacity='.5'/%3E%3C/svg%3E\")}#divider .content[data-v-c00e91e4]{top:0;left:0;bottom:0;right:0;position:absolute;z-index:99;height:100%;width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-line-pack:center;align-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;text-align:center}",""])},bwXJ:function(e,t,a){var i=a("757t");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);a("rjj0")("8aa797c2",i,!1,{sourceMap:!1})},gZeP:function(e,t,a){"use strict";var i=function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"page",attrs:{id:"freetickets"}},[this._m(0),this._m(1),t("divider",{staticClass:"thin",attrs:{"bg-image":this.dividerBg,parallax:!0,"bg-color":"#EA641D"}},[t("strong",[this._v("\n      The biggest developer conference in the Philippines goes to Davao!"),t("br"),t("br"),this._v("\n      Join us at the 2nd dev summit to engage with the developers around the Philippines for a whole-day exploration of modern technologies.\n    ")])])],1)};i._withStripped=!0;var o={render:i,staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"container"},[t("h1",[this._v("Free Tickets")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content"},[a("div",{staticClass:"container thin"},[a("p",[a("strong",[e._v("DevCon Davao is giving away "),a("span",{staticClass:"big-text"},[e._v("TWO (2) FREE TICKETS")]),e._v(" for the upcoming DevCon Summit 2018: Davao Edition!")]),a("br"),a("br"),e._v("\n\n        Just "),a("strong",[a("em",[e._v("execute")])]),e._v(" the following raffle mechanics anytime from "),a("strong",[e._v("12 midnight of October 15")]),e._v(" to "),a("strong",[e._v("11:59 PM of October 26, 2018")]),e._v("."),a("br"),a("br"),e._v("\n\n        The two winners will be announced on "),a("strong",[e._v("October 27, 2018")]),e._v("."),a("br"),e._v("\n        They will receive a message from DevCon Davao and will be posted on the page as well."),a("br"),a("br"),e._v("\n\n        Mechanics:\n        "),a("ol",[a("li",[e._v("\n            Like the "),a("a",{attrs:{href:"https://www.facebook.com/DevConDavao",target:"_blank",rel:"noopener"}},[e._v("DevCon Davao page")]),e._v(" and the "),a("a",{attrs:{href:"https://www.facebook.com/events/2090359570997540/",target:"_blank",rel:"noopener"}},[e._v("DevCon Summit 2018: Davao Edition event")]),e._v(", and the "),a("strong",[e._v("FREE")]),e._v(" tickets post on our Facebook Page.\n          ")]),a("li",[e._v("\n            Share the DevCon Summit Event publicly on your profile using the following contents and hashtags:"),a("br"),a("br"),e._v("\n            Can't wait for the DevCon Summit 2018: Davao Edition!"),a("br"),a("h4",[e._v("#DevConPH #DevConDavao #DevConSummitDVO #DevConSummit2018 #DevConSummitDavao #DavaoTechCommunities #DevConSummitFREETickets")]),a("br"),e._v("\n            (*Note: you need to tag the event)\n          ")]),a("li",[e._v("\n            Tag 3 people in your post.\n          ")])]),a("br"),e._v("\n\n        The tickets are transferable but non-convertible to cash or any kind.\n      ")])])])}]};t.a=o},iKsT:function(e,t,a){e.exports=a.p+"img/optimized-G0020491.e78bb25.jpg"},jeTc:function(e,t,a){var i=a("OURY");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);a("rjj0")("37598f0c",i,!1,{sourceMap:!1})},nnBb:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a("2gFQ"),o=a("gZeP"),n=!1;var r=function(e){n||a("bwXJ")},d=a("VU/8")(i.a,o.a,!1,r,"data-v-92faaad6",null);d.options.__file="pages/freetickets/index.vue",t.default=d.exports},"yyt/":function(e,t,a){"use strict";var i={components:{Divider:a("9/fg").a},data:function(){return{dividerBg:a("iKsT")}}};t.a=i}});