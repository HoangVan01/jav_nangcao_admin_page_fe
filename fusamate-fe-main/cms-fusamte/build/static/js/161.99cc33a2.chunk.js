(this["webpackJsonpcms-fusamate"]=this["webpackJsonpcms-fusamate"]||[]).push([[161],{1880:function(e,t,a){"use strict";a.r(t);var c=a(0),r=a(468),n=a(477),s=a(470),i=a(466),j=a(472),l=a(473),d=a(1018),b=a(15),m=a(512),o=a(513),O=a.n(o),u=a(5),h=function(){var e=Object(c.useState)(new Date),t=Object(b.a)(e,2),a=t[0],r=t[1];return Object(u.jsxs)(c.Fragment,{children:[Object(u.jsx)(m.a,{for:"default-picker",children:"Default"}),Object(u.jsx)(O.a,{className:"form-control",value:a,onChange:function(e){return r(e)},id:"default-picker"})]})},x=function(){var e=Object(c.useState)(new Date),t=Object(b.a)(e,2),a=t[0],r=t[1];return Object(u.jsxs)(c.Fragment,{children:[Object(u.jsx)(m.a,{id:"timepicker",children:"Basic 24hrs"}),Object(u.jsx)(O.a,{className:"form-control",value:a,id:"timepicker",options:{enableTime:!0,noCalendar:!0,dateFormat:"H:i",time_24hr:!0},onChange:function(e){return r(e)}})]})},g=function(){var e=Object(c.useState)(new Date),t=Object(b.a)(e,2),a=t[0],r=t[1];return Object(u.jsxs)(c.Fragment,{children:[Object(u.jsx)(m.a,{for:"date-time-picker",children:"Date & Time"}),Object(u.jsx)(O.a,{value:a,"data-enable-time":!0,id:"date-time-picker",className:"form-control",onChange:function(e){return r(e)}})]})},p=function(){var e=Object(c.useState)(new Date),t=Object(b.a)(e,2),a=t[0],r=t[1];return Object(u.jsxs)(c.Fragment,{children:[Object(u.jsx)(m.a,{for:"multi-dates-picker",children:"Multiple Dates"}),Object(u.jsx)(O.a,{value:a,id:"multi-dates-picker",className:"form-control",options:{mode:"multiple"},onChange:function(e){return r(e)}})]})},f=function(){var e=Object(c.useState)(new Date),t=Object(b.a)(e,2),a=t[0],r=t[1];return Object(u.jsxs)(c.Fragment,{children:[Object(u.jsx)(m.a,{for:"range-picker",children:"Range"}),Object(u.jsx)(O.a,{value:a,id:"range-picker",className:"form-control",onChange:function(e){return r(e)},options:{mode:"range",defaultDate:["2020-02-01","2020-02-15"]}})]})},v=function(){var e=Object(c.useState)(new Date),t=Object(b.a)(e,2),a=t[0],r=t[1];return Object(u.jsxs)(c.Fragment,{children:[Object(u.jsx)(m.a,{for:"hf-picker",children:"Human Friendly"}),Object(u.jsx)(O.a,{value:a,id:"hf-picker",className:"form-control",onChange:function(e){return r(e)},options:{altInput:!0,altFormat:"F j, Y",dateFormat:"Y-m-d"}})]})},N=function(){var e=Object(c.useState)(new Date),t=Object(b.a)(e,2),a=t[0],r=t[1];return Object(u.jsxs)(c.Fragment,{children:[Object(u.jsx)(m.a,{for:"disabled-picker",children:"Disabled Range"}),Object(u.jsx)(O.a,{value:a,id:"disabled-picker",className:"form-control",onChange:function(e){return r(e)},options:{dateFormat:"Y-m-d",disable:[{from:"2020-02-01",to:"2020-02-10"},{from:"2020-02-20",to:"2020-02-25"}]}})]})},k=function(){var e=Object(c.useState)(new Date),t=Object(b.a)(e,2),a=t[0],r=t[1];return Object(u.jsxs)(c.Fragment,{children:[Object(u.jsx)(m.a,{for:"inline-picker",children:"Inline"}),Object(u.jsx)(O.a,{className:"form-control",value:a,options:{inline:!0},onChange:function(e){return r(e)}})]})},C=a(460);a(481),t.default=function(){return Object(u.jsxs)(c.Fragment,{children:[Object(u.jsx)(C.a,{breadCrumbTitle:"Date & Time Picker",breadCrumbParent:"Form Elements",breadCrumbActive:"Date & Time Picker"}),Object(u.jsxs)(r.a,{children:[Object(u.jsx)(n.a,{children:Object(u.jsx)(s.a,{tag:"h4",children:"Flatpickr"})}),Object(u.jsx)(i.a,{children:Object(u.jsxs)(j.a,{children:[Object(u.jsx)(l.a,{tag:d.a,md:"6",sm:"12",children:Object(u.jsx)(h,{})}),Object(u.jsx)(l.a,{tag:d.a,md:"6",sm:"12",children:Object(u.jsx)(x,{})}),Object(u.jsx)(l.a,{tag:d.a,md:"6",sm:"12",children:Object(u.jsx)(g,{})}),Object(u.jsx)(l.a,{tag:d.a,md:"6",sm:"12",children:Object(u.jsx)(p,{})}),Object(u.jsx)(l.a,{tag:d.a,md:"6",sm:"12",children:Object(u.jsx)(f,{})}),Object(u.jsx)(l.a,{tag:d.a,md:"6",sm:"12",children:Object(u.jsx)(v,{})}),Object(u.jsx)(l.a,{tag:d.a,md:"6",sm:"12",children:Object(u.jsx)(N,{})}),Object(u.jsx)(l.a,{tag:d.a,md:"6",sm:"12",children:Object(u.jsx)(k,{})})]})})]})]})}},460:function(e,t,a){"use strict";var c=a(457),r=a(1107),n=a(1073),s=a(1122),i=a(1119),j=a(1070),l=a(482),d=a(483),b=a(488),m=a(1307),o=a(1031),O=a(1040),u=a(5);t.a=function(e){var t=e.breadCrumbTitle,a=e.breadCrumbParent,h=e.breadCrumbParent2,x=e.breadCrumbParent3,g=e.breadCrumbActive;return Object(u.jsxs)("div",{className:"content-header row",children:[Object(u.jsx)("div",{className:"content-header-left col-md-9 col-12 mb-2",children:Object(u.jsx)("div",{className:"row breadcrumbs-top",children:Object(u.jsxs)("div",{className:"col-12",children:[t?Object(u.jsx)("h2",{className:"content-header-title float-left mb-0",children:t}):"",Object(u.jsx)("div",{className:"breadcrumb-wrapper vs-breadcrumbs d-sm-block d-none col-12",children:Object(u.jsxs)(l.a,{children:[Object(u.jsx)(d.a,{tag:"li",children:Object(u.jsx)(c.b,{to:"/",children:"Trang ch\u1ee7"})}),Object(u.jsx)(d.a,{tag:"li",className:"text-primary",children:a}),h?Object(u.jsx)(d.a,{tag:"li",className:"text-primary",children:h}):"",x?Object(u.jsx)(d.a,{tag:"li",className:"text-primary",children:x}):"",Object(u.jsx)(d.a,{tag:"li",active:!0,children:g})]})})]})})}),Object(u.jsx)("div",{className:"content-header-right text-md-right col-md-3 col-12 d-md-block d-none",children:Object(u.jsx)("div",{className:"form-group breadcrum-right dropdown",children:Object(u.jsxs)(b.a,{children:[Object(u.jsx)(m.a,{color:"primary",size:"sm",className:"btn-icon btn-round dropdown-toggle",children:Object(u.jsx)(r.a,{size:14})}),Object(u.jsxs)(o.a,{tag:"ul",right:!0,children:[Object(u.jsxs)(O.a,{tag:c.b,to:"/apps/chat",children:[Object(u.jsx)(n.a,{className:"mr-1",size:14}),Object(u.jsx)("span",{className:"align-middle",children:"Todo"})]}),Object(u.jsxs)(O.a,{tag:c.b,to:"/apps/chat",children:[Object(u.jsx)(s.a,{className:"mr-1",size:14}),Object(u.jsx)("span",{className:"align-middle",children:"Chat"})]}),Object(u.jsxs)(O.a,{tag:c.b,to:"/apps/email",children:[Object(u.jsx)(i.a,{className:"mr-1",size:14}),Object(u.jsx)("span",{className:"align-middle",children:"Email"})]}),Object(u.jsxs)(O.a,{tag:c.b,to:"/apps/calendar",children:[Object(u.jsx)(j.a,{className:"mr-1",size:14}),Object(u.jsx)("span",{className:"align-middle",children:"Calendar"})]})]})]})})})]})}},481:function(e,t,a){}}]);
//# sourceMappingURL=161.99cc33a2.chunk.js.map