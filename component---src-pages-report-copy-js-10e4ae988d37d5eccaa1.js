(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{uaZg:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a.n(n),l=a("va/L"),s=a("r9M9"),c=a("Wbzz"),i=a("Bl7J"),o=a("+/SI"),u=a("UOMH"),m=a("Pnty"),d=a("vrFN");function E(e,t){for(var a=[],n=0;n<e.length;n+=2){var r;r=e[n]>=e[n+1]?n:n+1,a.push(e[n],e[r])}for(var l=[],s="tasks"===t?0:1;s<a.length-1;s+=2){var c=a[s+1]-a[s];l.push(c)}return l=0===l.length?0:l.reduce((function(e,t){return e+t}))}t.default=function(){return r.a.createElement(s.b.Consumer,null,(function(e){return r.a.createElement(i.a,null,r.a.createElement("h2",null,"Report"),r.a.createElement(d.a,{title:"Report"}),r.a.createElement("div",{class:"report-page-layout"},r.a.createElement(u.a,{distractionDuration:E(e.timedEvents,"distractions"),taskDuration:E(e.timedEvents,"tasks")}),r.a.createElement("h4",{style:{color:"blue"}},"Distracted ",(t=e.timedEvents,a=E(t,"distractions"),n=a+E(t,"tasks"),Math.floor(a/n*100)),"% of total task time"),r.a.createElement(m.a,null),r.a.createElement(o.a,{timerName:"Distracted Time",paused:!0,distraction:!0}),r.a.createElement(o.a,{timerName:"Total Time",paused:!0}),r.a.createElement("br",null),r.a.createElement("div",{className:"report-buttons"},r.a.createElement(l.Button,{className:"w50",text:"Resume Task",large:!0,onClick:function(){e.toggleTimer(),Object(c.navigate)("/timer/")}}),r.a.createElement(l.Button,{className:"w50",text:"New Task",large:!0,onClick:function(){e.resetTimer(),Object(c.navigate)("/")}}))));var t,a,n}))}}}]);
//# sourceMappingURL=component---src-pages-report-copy-js-10e4ae988d37d5eccaa1.js.map