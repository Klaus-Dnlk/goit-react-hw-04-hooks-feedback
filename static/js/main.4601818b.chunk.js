(this["webpackJsonpgoit-react-hw-04-hooks-feedback"]=this["webpackJsonpgoit-react-hw-04-hooks-feedback"]||[]).push([[0],[,,function(e,t,a){e.exports={statList:"statistics_statList__PjpCK"}},,,function(e,t,a){e.exports={buttonsBox:"feedbackOptions_buttonsBox__3MgyC",button:"feedbackOptions_button__2hrC1"}},,function(e,t,a){e.exports={title:"section_title__2OpFy"}},function(e,t,a){e.exports={section:"App_section__iQB3t"}},,,,,function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(1),s=a.n(n),c=a(6),o=a.n(c),r=(a(13),a(3)),i=a(7),l=a.n(i),b=a(0);var u=function(e){var t=e.title,a=e.children;return Object(b.jsxs)("section",{children:[Object(b.jsx)("h1",{className:l.a.title,children:t}),a]})},d=a(5),j=a.n(d);var p=function(e){var t=e.options,a=e.onLeaveFeedback;return Object(b.jsx)("div",{className:j.a.buttonsBox,children:t.map((function(e){return Object(b.jsx)("button",{type:"button",className:j.a.button,name:e,onClick:a,children:e})}))})},O=a(2),h=a.n(O);function x(e){var t=e.good,a=e.neutral,n=e.bad,s=e.total,c=e.percentage;return Object(b.jsxs)("div",{className:h.a.statList,children:[Object(b.jsxs)("span",{className:h.a.label,children:["Good: ",t]}),Object(b.jsxs)("span",{className:h.a.label,children:["Neutral: ",a]}),Object(b.jsxs)("span",{className:h.a.label,children:["Bad: ",n]}),Object(b.jsxs)("span",{className:h.a.label,children:["Total: ",s]}),Object(b.jsxs)("span",{className:h.a.label,children:["Percentage: ",c,"%"]})]})}x.defaultProps={good:0,neutral:0,bad:0,total:0,percentage:0};var f=x;var m=function(e){var t=e.message;return Object(b.jsx)("p",{className:h.a.label,children:t})},g=a(8),v=a.n(g);function k(){var e=Object(n.useState)(0),t=Object(r.a)(e,2),a=t[0],s=t[1],c=Object(n.useState)(0),o=Object(r.a)(c,2),i=o[0],l=o[1],d=Object(n.useState)(0),j=Object(r.a)(d,2),O=j[0],h=j[1],x=function(){return a+i+O};return Object(b.jsxs)("div",{className:v.a.section,children:[Object(b.jsx)(u,{title:"Please leave feedback",children:Object(b.jsx)(p,{options:["good","neutral","bad"],onLeaveFeedback:function(e){switch(e.target.name){case"good":s((function(e){return e+1}));break;case"neutral":l((function(e){return e+1}));break;case"bad":h((function(e){return e+1}));break;default:return}}})}),Object(b.jsx)(u,{title:"Statistics",children:0!==x()?Object(b.jsx)(f,{good:a,neutral:i,bad:O,total:x(),percentage:Math.round(100*a/x())}):Object(b.jsx)(m,{message:"No feedback given"})})]})}o.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(k,{})}),document.getElementById("root"))}],[[15,1,2]]]);
//# sourceMappingURL=main.4601818b.chunk.js.map