(this["webpackJsonpvaccine-helper"]=this["webpackJsonpvaccine-helper"]||[]).push([[0],{29:function(e,t,n){},31:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){},53:function(e,t,n){},54:function(e,t,n){},6:function(e){e.exports=JSON.parse('{"input_placeholder":"enter pincode","search_button_text":"Search","ERROR_MSG":"oops, Something is not right!","RESULTS_FOUND":"result(s) found","INPUT_LABEL":"Please enter 6 digits pin code","DISTRICT_SEARCH_LABEL":"Please select state & district","SEARCH_BY_DISTRICT":"search by district","SEARCH_BY_PIN":"search by pincode","FOOTER_PRIMARY_TEXT":"All data sourced from","FOOTER_PRIMARY_TEXT_ANCHOR":"CoWin","FOOTER_SECONDARY_TEXT":"Please check official website for booking"}')},66:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),i=n(10),s=n.n(i),r=(n(29),n(4)),o=n.n(r),l=n(5),d=n(2),u=(n(31),n(11)),j=n.n(u),b="//cdn-api.co-vin.in/api/v2/appointment/sessions/public";console.log(b);j.a.create({baseURL:b});var h=j.a,_=n(6),v=n(12),m=(n(50),function(e){e.preventDefault(),e.stopPropagation()}),O=function(){var e=Object(l.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.get(t);case 3:return e.abrupt("return",e.sent);case 6:return e.prev=6,e.t0=e.catch(0),console.error(e.t0,t),e.abrupt("return",null);case 10:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}(),f=function(e,t,n){return new Promise(function(){var a=Object(l.a)(o.a.mark((function a(c,i){var s,r,l,d,u,j,b,h,_;return o.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(n){a.next=4;break}i(null),a.next=20;break;case 4:return a.next=6,O(e);case 6:if(!(s=a.sent)){a.next=19;break}return r=s.data,l=(r=void 0===r?{}:r).ip,d=void 0===l?"":l,console.log("ip",d),u=t.replace(/{ip}/g,d||""),a.next=15,O(u);case 15:(j=a.sent)?(b=j.data,h=(b=void 0===b?{}:b).postal,_=void 0===h?"":h,console.log("postal",_),c(_)):i(null),a.next=20;break;case 19:i(null);case 20:case"end":return a.stop()}}),a)})));return function(e,t){return a.apply(this,arguments)}}())},p=/iPhone|iPad|iPod|Android/i.test(navigator.userAgent),x=(n(51),n(0)),g=function(){return Object(x.jsxs)("div",{className:"center card is-loading",children:[Object(x.jsxs)("div",{className:"center__title",children:[Object(x.jsx)("h6",{className:"center__title-secondary"}),Object(x.jsx)("h5",{className:"center__title-primary"})]}),Object(x.jsxs)("div",{className:"center__tiles",children:[Object(x.jsx)("span",{className:"tile"}),Object(x.jsx)("span",{className:"tile"})]})]})},N=function(e){for(var t=e.count,n=void 0===t?0:t,a=[],c=1;c<=n;)a.push(Object(x.jsx)(g,{},c)),c++;return a},S=function(e){var t=e.count,n=void 0===t?0:t;return Object(x.jsx)(N,{count:n})},R=(n(53),function(e,t){return!t&&e.length>13?e.substr(0,11)+"..":e}),C=function(e){return function(e){return Object(x.jsxs)("a",{className:"link__new-tab",href:"https://www.cowin.gov.in/home",children:[e,"\xa0",Object(x.jsx)("img",{className:"link__new-tab-icon",src:"/tab.png",alt:"opens in new tab"})]})}(e)},T=function(e,t){if(t){var n=e.substr(0,3),c=e.substr(3);return Object(x.jsxs)(a.Fragment,{children:[Object(x.jsx)("span",{className:"mark content",children:n}),Object(x.jsx)("span",{className:"content",children:c})]})}return Object(x.jsx)("span",{className:"content",children:e})},w=function(e){var t=e.data,n=e.transparent,a=e.bold,c=e.button,i=e.marked,s=void 0===i||i;return t?Object(x.jsx)("span",{className:"tile ".concat(n?"transparent":""," ").concat(a?"bold":""),children:c?C(t):T(R(t,n),s)}):null},y=(n(54),n(7)),E=n.n(y),A=function(e){var t=e.show,n=e.handleClose,a=e.modalData,c=e.handleRedirect,i=a||{},s=i.name,r=i.state_name,o=i.district_name,l=void 0===o?"":o,d=i.from,u=void 0===d?"":d,j=i._to,b=void 0===j?"":j,h=i.sessions,_=void 0===h?[]:h;E.a.defaultStyles.overlay.zIndex="99",E.a.defaultStyles.overlay.backgroundColor="rgba(65, 63, 63, 0.75)";var v={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",overflow:"hidden",marginRight:"-50%",borderRadius:"12px",transform:"translate(-50%, -50%)",minWidth:p?"80vw":"42vw",maxWidth:p?"85vw":"60vw",minHeight:p?"50vh":"70vh"}};return Object(x.jsx)("div",{style:{zIndex:1e3},children:Object(x.jsx)(E.a,{onAfterOpen:function(){document.body.style.overflow="hidden"},isOpen:t,onRequestClose:n,contentLabel:"Example Modal",style:v,children:Object(x.jsxs)("div",{className:"modal__box",children:[Object(x.jsxs)("div",{className:"modal__header col",children:[Object(x.jsx)("p",{children:"".concat(l,", ").concat(r)}),Object(x.jsx)("button",{className:"transparent danger",onClick:n,children:"x"})]}),Object(x.jsx)("h3",{className:"no-margin-top text-center",children:s}),Object(x.jsx)("div",{className:"modal__body col flex-row-nowrap auto-overflow ".concat(_.length>1?"content-start":"content-center"),children:_.map((function(e,t){return Object(x.jsxs)("div",{className:"body__card",children:[Object(x.jsxs)("div",{className:"body__card-header width-100 border-bottom",children:[Object(x.jsx)("h4",{className:"text-center no-margin-bottom",children:e.date}),Object(x.jsx)("h6",{className:"text-center no-margin-top",children:"".concat(e.vaccine," | ").concat(u.substr(0,2),"AM - 0").concat(b>12?b-12:b,"PM")})]}),Object(x.jsx)("div",{className:"body__card-body col width-100",children:Object(x.jsxs)("div",{className:"body__card-body-ul col content-start align-start width-100",children:[Object(x.jsx)("div",{className:"col content-center flex-row-nowrap width-90",children:Object(x.jsx)("h5",{className:"no-margin-top",children:"capacity available:"})}),Object(x.jsxs)("div",{className:"col content-between flex-row-nowrap width-90",children:[Object(x.jsx)("span",{children:"first dose"}),Object(x.jsxs)("span",{children:[e.available_capacity_dose1," slots"]})]}),Object(x.jsxs)("div",{className:"col content-between flex-row-nowrap width-90",children:[Object(x.jsx)("span",{children:"second dose"}),Object(x.jsxs)("span",{children:[e.available_capacity_dose2," slots"]})]})]})}),Object(x.jsx)("div",{className:"body__card-bottom col width-100 grow-1",children:Object(x.jsx)("button",{onClick:function(t){return c(t,e.available_capacity)},className:"width-90 center__button ".concat(e.available_capacity?"":"un-available"),disabled:!e.available_capacity,children:e.available_capacity?"Book Now":"No Slots"})}),Object(x.jsx)("div",{className:"card__age-limit",children:Object(x.jsx)("div",{children:"".concat(e.min_age_limit,"+")})})]},"".concat(s," __").concat(t))}))})]})})})},P=function(e,t){m(e);var n=t?"https://www.cowin.gov.in/home":"";n&&window.open(n,"_blank")},D=function(e){var t=e.centers,n=e.centerData,a=e.underFortyFive,c=e.setFilter,i=e.available,s=e.setAvailability,r=e.CONSTANTS;return Object(x.jsxs)("div",{className:"results-container",children:[Object(x.jsx)("h2",{className:"result-count",children:Object(x.jsx)("strong",{children:"".concat(n.length," ").concat(r.RESULTS_FOUND)})}),t.length>0&&Object(x.jsxs)("span",{className:"result-count filters",children:[Object(x.jsxs)("div",{className:"search__filters",children:[Object(x.jsx)("h3",{children:"18+"}),Object(x.jsx)("input",{type:"checkbox",id:"switch_age",checked:a,onChange:c}),Object(x.jsx)("label",{htmlFor:"switch_age",tabIndex:"0",children:"18+"})]}),Object(x.jsxs)("div",{className:"search__filters",children:[Object(x.jsx)("h3",{children:"\xa0available"}),Object(x.jsx)("input",{type:"checkbox",id:"switch_available",checked:i,onChange:s}),Object(x.jsx)("label",{htmlFor:"switch_available",tabIndex:"0",children:"available"})]})]})]})},I=function(e){var t=e.index,n=e.district_name,a=e.state_name,c=e.name,i=e._min_age_limit,s=e._vaccine,r=e._available_capacity,o=e.from,l=e._to,d=e.sessions,u=e.fee_type,j=e.handleClose,b=e.updateModalData,h=r[45]||r[18];return Object(x.jsxs)("div",{className:"center",children:[Object(x.jsxs)("div",{className:"center__title",children:[Object(x.jsx)(w,{transparent:!0,data:"".concat(i.includes(18)?"18":"45","+").concat(s.join(" | ").toUpperCase())}),Object(x.jsxs)("h5",{className:"no-margin center__title-primary",children:[Object(x.jsx)("strong",{children:c}),Object(x.jsx)("hr",{})]}),Object(x.jsx)("h6",{className:"no-margin center__title-secondary",children:"".concat(n,", ").concat(a)})]}),Object(x.jsxs)("div",{className:"center__buttons",children:[Object(x.jsx)("button",{className:"center__button transparent",onClick:function(e){m(e),b({district_name:n,state_name:a,name:c,_min_age_limit:i,_vaccine:s,_available_capacity:r,from:o,_to:l,sessions:d,fee_type:u}),j(e)},children:"MORE DETAILS"}),Object(x.jsx)("button",{onClick:function(e){return P(e,h)},className:"center__button ".concat(h?"":"un-available"),disabled:!h,children:h?"Book Now":"No Slots"})]}),Object(x.jsx)("div",{className:"card__fee-type",children:Object(x.jsx)("div",{children:"".concat(u)})}),Object(x.jsx)("img",{className:"card__image",src:"/injection.svg",alt:"vaccine"})]},t)},k=function(e){var t=e.CONSTANTS,n=e.centerData,a=e.errors,c=e.sorting,i=e.handleClose,s=e.updateModalData;return a?Object(x.jsx)("div",{className:"center",children:t.ERROR_MSG||""}):c?Object(x.jsx)(S,{count:6}):n.map((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=e.district_name,a=void 0===n?"":n,c=e.name,r=void 0===c?"":c,o=e.state_name,l=void 0===o?"":o,d=e.fee_type,u=void 0===d?"":d,j=e.from,b=void 0===j?"":j,h=e.to,_=void 0===h?"":h,v=e.sessions,m=void 0===v?[]:v,O={18:0,45:0},f=[],p=_.substr(0,2),g=[];return m.forEach((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.available_capacity,n=void 0===t?"":t,a=e.min_age_limit,c=void 0===a?"":a,i=e.vaccine,s=void 0===i?"":i;c&&f.push(c),O[c]=O[c]+=n,!g.includes(s)&&g.push(s)})),Object(x.jsx)(I,{index:t,district_name:a,state_name:l,name:r,_min_age_limit:f,_vaccine:g,_available_capacity:O,from:b,_to:p,fee_type:u,sessions:m,handleClose:i,updateModalData:s})}))},F=function(e){var t=e.response,n=void 0===t?{}:t,c=e.errors,i=void 0===c?null:c,s=e.data,r=void 0===s?{}:s,o=e.loader,l=void 0!==o&&o,u=(n||{}).centers,j=void 0===u?[]:u,b=Object(a.useState)(!1),h=Object(d.a)(b,2),_=h[0],O=h[1],f=Object(a.useState)(!1),g=Object(d.a)(f,2),N=g[0],R=g[1],C=Object(a.useState)(!1),T=Object(d.a)(C,2),w=T[0],y=T[1],E=Object(a.useState)(!1),I=Object(d.a)(E,2),F=I[0],L=I[1],U=Object(a.useState)(null),B=Object(d.a)(U,2),M=B[0],H=B[1],Y=Object(a.useRef)(null),W=function(e){document.body.style.overflow="auto",m(e),L(!F)};Object(a.useEffect)((function(){if(Y&&Y.current&&l&&!i){var e={block:"start",inline:"nearest"};Y.current.scrollIntoView(p?e:Object(v.a)(Object(v.a)({},e),{},{behavior:"smooth"}))}}),[Y,l,i]);var X=function(e,t,n,a,c){if(!e&&!t)return n&&setTimeout((function(){return a(!1)}),800),c;var i=c.filter((function(){var n=!1,a=0,c=!1;return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).sessions.forEach((function(){var i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};a+=i.available_capacity,c=c||18===i.min_age_limit,n=e&&t?c&&a>0:e?n||c:a>0})),n}));return n&&setTimeout((function(){return a(!1)}),i.length?800:10),i}(_,N,w,y,j);return Object(x.jsxs)(a.Fragment,{children:[Object(x.jsx)("div",{className:"centers ".concat(l?"loader-section":""),id:"resultCenters",ref:Y,children:l?Object(x.jsx)(S,{count:6}):Object(x.jsxs)(a.Fragment,{children:[null!==i&&Object(x.jsx)(D,{centers:j,centerData:X,underFortyFive:_,setFilter:function(){!w&&y(!0),O(!_)},available:N,setAvailability:function(){!w&&y(!0),R(!N)},CONSTANTS:r}),Object(x.jsx)(k,{errors:i,sorting:w,CONSTANTS:r,centerData:X,handleClose:W,updateModalData:function(e){return H(e)}})]})}),Object(x.jsx)(A,{show:F,modalData:M,handleClose:W,handleRedirect:P})]})},L=(n(66),function(e){var t=e.data,n=void 0===t?{}:t,c=e.searchHandler,i=e.pinCode,s=void 0===i?"":i,r=e.state,o=void 0===r?"":r,l=e.district,d=void 0===l?"":l,u=e.onPinChange,j=e.allStates,b=void 0===j?[]:j,h=e.allDistricts,_=void 0===h?[]:h,v=e.manageEvents,m=e.searchByPin,O=e.onStateChange,f=e.onDistrictChange,p=e.onFormChange,g=null,N=null,S=null;return Object(x.jsxs)("div",{className:"search-component",children:[Object(x.jsx)("div",{className:"search__image-parent",children:Object(x.jsx)("img",{className:"search__image",src:"/vaccine___.jpg",alt:"vaccine"})}),Object(x.jsxs)("form",{className:"search__form",children:[Object(x.jsx)("h3",{className:"flex-item",children:m?n.INPUT_LABEL:n.DISTRICT_SEARCH_LABEL}),m?Object(x.jsx)("input",{id:"mainInput",ref:function(e){return g=e},type:"text",inputMode:"numeric",pattern:"[0-9]*",value:s,onChange:u,className:"search__input flex-item",placeholder:n.input_placeholder||""}):Object(x.jsxs)(a.Fragment,{children:[Object(x.jsxs)("select",{ref:function(e){return N=e},className:"search__input flex-item",value:o,onChange:O,children:[Object(x.jsx)("option",{value:0,children:"select state"},0),b.map((function(e){var t=e.state_name,n=void 0===t?"":t,a=e.state_id,c=void 0===a?"":a;return Object(x.jsx)("option",{value:c,children:n},"state"+c)}))]}),Object(x.jsxs)("select",{ref:function(e){return S=e},className:"search__input flex-item",value:d,onChange:f,children:[Object(x.jsx)("option",{value:0,children:"select district"},0),_.map((function(e){var t=e.district_name,n=void 0===t?"":t,a=e.district_id,c=void 0===a?"":a;return Object(x.jsx)("option",{value:c,children:n},"district"+c)}))]})]}),Object(x.jsx)("button",{type:"submit",className:"search__button flex-item",onClick:function(e){v(e),m?6===s.length?(g&&g.blur(),c&&c(s)):g&&g.focus():d&&d>0?c&&c(d):(!o>0&&N.focus(),o>0&&!d>0&&S.focus())},children:n.search_button_text||"check"}),Object(x.jsx)("hr",{}),Object(x.jsx)("button",{className:"toggle__button flex-item",onClick:p,children:m?n.SEARCH_BY_DISTRICT:n.SEARCH_BY_PIN})]})]})}),U=(n(67),function(e){var t=e.constants,n=void 0===t?{}:t;return Object(x.jsxs)("footer",{className:"footer",children:[Object(x.jsxs)("h3",{className:"footer__primary no-margin footer__text",children:[n.FOOTER_PRIMARY_TEXT,"\xa0",Object(x.jsx)("a",{href:"https://www.cowin.gov.in/home",children:n.FOOTER_PRIMARY_TEXT_ANCHOR})]}),Object(x.jsx)("h6",{className:"footer__secondary no-margin footer__text",children:n.FOOTER_SECONDARY_TEXT})]})});var B=function(){var e=Object(a.useRef)(!1),t=Object(a.useState)(""),n=Object(d.a)(t,2),c=n[0],i=n[1],s=Object(a.useState)([]),r=Object(d.a)(s,2),u=r[0],j=r[1],b=Object(a.useState)(""),v=Object(d.a)(b,2),O=v[0],p=v[1],g=Object(a.useState)(""),N=Object(d.a)(g,2),S=N[0],R=N[1],C=Object(a.useState)([]),T=Object(d.a)(C,2),w=T[0],y=T[1],E=Object(a.useState)(null),A=Object(d.a)(E,2),P=A[0],D=A[1],I=Object(a.useState)(!0),k=Object(d.a)(I,2),B=k[0],M=k[1],H=Object(a.useState)(null),Y=Object(d.a)(H,2),W=Y[0],X=Y[1],J=Object(a.useState)(!1),K=Object(d.a)(J,2),z=K[0],G=K[1],V=!0,Z=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_BASE_URL:"//cdn-api.co-vin.in/api/v2/appointment/sessions/public",REACT_APP_DISTRICTS_URL:"//cdn-api.co-vin.in/api/v2/admin/location/districts",REACT_APP_IP_URL:"//api.ipify.org?format=json",REACT_APP_STATES_URL:"//cdn-api.co-vin.in/api/v2/admin/location/states",REACT_APP_ZIP_URL:"//ipapi.co/{ip}/json"})||!1,q=Z.REACT_APP_BASE_URL,$=void 0===q?"":q,Q=Z.REACT_APP_IP_URL,ee=void 0===Q?"":Q,te=Z.REACT_APP_ZIP_URL,ne=void 0===te?"":te,ae=Z.REACT_APP_STATES_URL,ce=void 0===ae?"":ae,ie=Z.REACT_APP_DISTRICTS_URL,se=void 0===ie?"":ie;return Object(a.useEffect)((function(){var t=function(){var e=Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(O){e.next=3;break}return e.next=3,f(ee,ne,V).then((function(e){return e&&O!==e&&p(e)})).catch((function(){}));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e.current||(t(),e.current=!0)}),[ee,ne,V,O]),Object(a.useEffect)((function(){var e=ce;h.get(e).then((function(e){var t=e.data,n=void 0===t?{}:t;n.states&&j(n.states)})).catch((function(e){return console.error(e)}))}),[ce,V]),Object(x.jsxs)("div",{className:"App",children:[Object(x.jsx)(L,{state:c,data:_,pinCode:O,district:S,allStates:u,searchByPin:B,allDistricts:w,onPinChange:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};m(e);var t=e.target||{},n=t.value,a=void 0===n?"":n;return!(!/^\d*$/.test(a)||a.length>6)&&(a!==O&&p(a),!0)},onFormChange:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};m(e),M(!B)},manageEvents:m,searchHandler:function(e){G(!0);var t="".concat($,"/").concat(B?"calendarByPin?pincode":"calendarByDistrict?district_id","=").concat(e,"&date=").concat(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Date,t=e.getFullYear(),n=(1+e.getMonth()).toString().padStart(2,"0");return e.getDate().toString().padStart(2,"0")+"-"+n+"-"+t}());h.get(t).then((function(e){var t=e.data;D(void 0===t?{}:t),G(!1),X(!1)})).catch((function(){return X(!0)}))},onStateChange:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};m(e);var t=e.target||{},n=t.value,a=void 0===n?"":n;if(c!==a&&i(a),a>0){var s="".concat(se,"/").concat(a);h.get(s).then((function(e){var t=e.data,n=void 0===t?{}:t;n.districts&&y(n.districts)})).catch((function(e){return console.error(e)}))}},onDistrictChange:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};m(e);var t=e.target||{},n=t.value,a=void 0===n?"":n;S!==a&&R(a)}}),Object(x.jsx)(F,{loader:z,errors:W,data:_,response:P}),Object(x.jsx)(U,{constants:_})]})},M=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,69)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),i(e),s(e)}))};s.a.render(Object(x.jsx)(c.a.StrictMode,{children:Object(x.jsx)(B,{})}),document.getElementById("root")),M()}},[[68,1,2]]]);
//# sourceMappingURL=main.92f03dc3.chunk.js.map