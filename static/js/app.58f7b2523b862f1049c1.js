webpackJsonp([0],[,,function(e,t,i){"use strict";t.a=[{company:"Eddily",logo:"https://i.imgur.com/C5vNC2d.png",position:"Software Developer",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget tincidunt elit, nec gravida risus. Sed rhoncus nisl vitae tincidunt facilisis. In congue vitae ex vitae feugiat. Sed sodales ante quis mauris  venenatis, eget elementum purus malesuada. Suspendisse et pellentesque sem. Nam nec eros commodo, cursus mi a, malesuada felis.",location:"San Francisco, CA",dates:{start:"June 24th, 2017",end:"August 30th, 2017"},paid:!0},{company:"Google",logo:"https://maxcdn.icons8.com/Share/icon/Logos//google_logo1600.png",position:"Software Developer",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget tincidunt elit, nec gravida risus. Sed rhoncus nisl vitae tincidunt facilisis. In congue vitae ex vitae feugiat. Sed sodales ante quis mauris venenatis, eget elementum purus malesuada. Suspendisse et pellentesque sem. Nam nec eros commodo, cursus mi a, malesuada felis.",location:"Mountain View, CA",dates:{start:"June 24th, 2017",end:"August 30th, 2017"},paid:!0},{company:"Facebook",logo:"https://en.facebookbrand.com/wp-content/uploads/2016/05/FB-flogo-Blue-broadcast-2.png",position:"Software Developer",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget tincidunt elit, nec gravida risus. Sed rhoncus nisl vitae tincidunt facilisis. In congue vitae ex vitae feugiat. Sed sodales ante quis mauris venenatis, eget elementum purus malesuada. Suspendisse et pellentesque sem. Nam nec eros commodo, cursus mi a, malesuada felis.",location:"Menlo Park, CA",dates:{start:"June 24th, 2017",end:"August 30th, 2017"},paid:!0},{company:"Apple",logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Apple-Apple.svg/748px-Apple-Apple.svg.png",position:"Software Developer",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget tincidunt elit, nec gravida risus. Sed rhoncus nisl vitae tincidunt facilisis. In congue vitae ex vitae feugiat. Sed sodales ante quis mauris venenatis, eget elementum purus malesuada. Suspendisse et pellentesque sem. Nam nec eros commodo, cursus mi a, malesuada felis.",location:"Cupertino, CA",dates:{start:"June 24th, 2017",end:"August 30th, 2017"},paid:!0},{company:"Microsoft",logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/512px-Microsoft_logo_%282012%29.svg.png",position:"Software Developer",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget tincidunt elit, nec gravida risus. Sed rhoncus nisl vitae tincidunt facilisis. In congue vitae ex vitae feugiat. Sed sodales ante quis mauris venenatis, eget elementum purus malesuada. Suspendisse et pellentesque sem. Nam nec eros commodo, cursus mi a, malesuada felis.",location:"Redmond, WA",dates:{start:"June 24th, 2017",end:"August 30th, 2017"},paid:!0},{company:"Unisys",logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Unisys_logo.svg/800px-Unisys_logo.svg.png",position:"Software Developer",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget tincidunt elit, nec gravida risus. Sed rhoncus nisl vitae tincidunt facilisis. In congue vitae ex vitae feugiat. Sed sodales ante quis mauris venenatis, eget elementum purus malesuada. Suspendisse et pellentesque sem. Nam nec eros commodo, cursus mi a, malesuada felis.",location:"Blue Bell, PA",dates:{start:"June 24th, 2017",end:"August 30th, 2017"},paid:!0}]},,function(e,t,i){"use strict";var s=i(1),n=i(23),a=i(18),o=i.n(a),r=i(19),u=i.n(r);s.a.use(n.a),t.a=new n.a({mode:"history",routes:[{path:"/",name:"Index",component:o.a},{path:"/:id",name:"ViewJob",component:u.a}]})},function(e,t,i){i(16);var s=i(0)(i(7),i(22),null,null);e.exports=s.exports},,function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"app"}},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=i(2);t.default={name:"index",data:function(){return{currentQuery:""}},computed:{filteredListings:function(){var e=this;return null===this.currentQuery?s.a:s.a.filter(function(t){return t.company.toLowerCase().includes(e.currentQuery.toLowerCase())||t.position.toLowerCase().includes(e.currentQuery.toLowerCase())||t.description.toLowerCase().includes(e.currentQuery.toLowerCase())||t.location.toLowerCase().includes(e.currentQuery.toLowerCase())})}}}},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=i(2);t.default={name:"view-job",data:function(){return{listing:s.a[this.$route.params.id]}}}},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=i(1),n=i(6),a=i.n(n),o=i(5),r=i.n(o),u=i(4);s.a.config.productionTip=!1,s.a.use(a.a),new s.a({el:"#app",router:u.a,template:"<App/>",components:{App:r.a}})},,,,function(e,t){},function(e,t){},function(e,t){},,function(e,t,i){i(15);var s=i(0)(i(8),i(21),"data-v-488df7a0",null);e.exports=s.exports},function(e,t,i){i(14);var s=i(0)(i(9),i(20),"data-v-14eeddb4",null);e.exports=s.exports},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-container",{staticClass:"mt-4"},[i("v-row",[i("v-col",{attrs:{md4:""}},[i("v-card",{staticClass:"mr-2"},[i("v-card-row",{attrs:{img:e.listing.logo,height:"auto"}}),e._v(" "),i("v-card-title",{staticClass:"green white--text"},[e._v(e._s(e.listing.company))])],1)],1),e._v(" "),i("v-col",{attrs:{md8:""}},[i("v-card",{staticClass:"ml-2"},[i("v-card-title",{staticClass:"green white--text"},[e._v(e._s(e.listing.position))]),e._v(" "),i("v-card-text",{staticClass:"grey--text pb-0"},[e._v("\n          "+e._s(e.listing.dates.start)+" to "+e._s(e.listing.dates.end)+"\n        ")]),e._v(" "),i("v-card-text",[e._v("\n          "+e._s(e.listing.description)+"\n        ")]),e._v(" "),i("v-card-row",[i("v-chip",{staticClass:"green white--text"},[e._v(e._s(e.listing.location))]),e._v(" "),e.listing.paid?i("v-chip",{staticClass:"green white--text"},[e._v("Paid")]):e._e()],1)],1)],1)],1)],1)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-container",[i("v-text-field",{attrs:{name:"input-1-3",label:"Search jobs...","single-line":""},model:{value:e.currentQuery,callback:function(t){e.currentQuery=t},expression:"currentQuery"}}),e._v(" "),i("v-card",[e.filteredListings.length>0?i("div",[i("v-list",{attrs:{"three-line":""}},e._l(e.filteredListings,function(t,s){return i("v-list-item",{key:s},[i("v-list-tile",{attrs:{avatar:"",ripple:"",router:"",to:"/"+s}},[i("v-list-tile-avatar",[i("img",{attrs:{src:t.logo}})]),e._v(" "),i("v-list-tile-content",[i("v-list-tile-title",[e._v(e._s(t.company))]),e._v(" "),i("v-list-tile-sub-title",{staticClass:"grey--text text--darken-4"},[e._v(e._s(t.position)+" at "+e._s(t.location))]),e._v(" "),i("v-list-tile-sub-title",[e._v(e._s(t.description))])],1)],1)],1)}))],1):i("v-card-text",{staticClass:"text-xs-center"},[i("i",[e._v("No listings found D:")])])],1)],1)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"app"}},[i("v-toolbar",{staticClass:"green"},[i("v-container",[i("router-link",{attrs:{to:"/"}},[i("v-toolbar-title",[e._v("\n          Eddily Internship\n        ")])],1),e._v(" "),i("v-spacer")],1)],1),e._v(" "),i("div",{staticClass:"pt-3"},[i("router-view")],1)],1)},staticRenderFns:[]}}],[10]);
//# sourceMappingURL=app.58f7b2523b862f1049c1.js.map