(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{13:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var r=n(3),s=n.n(r),o=n(4),c=n(5),a=n(7),i=n(6),l=n(1),h=n.n(l),u=n(0),d=h.a.memo((function(t){var e=t.goods;return Object(u.jsx)("ul",{children:e.map((function(t){return Object(u.jsx)("li",{children:t},t)}))})})),b=(n(13),["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"]),j=function(t){Object(a.a)(n,t);var e=Object(i.a)(n);function n(){var t;Object(o.a)(this,n);for(var r=arguments.length,s=new Array(r),c=0;c<r;c++)s[c]=arguments[c];return(t=e.call.apply(e,[this].concat(s))).state={goods:b,started:!1,reversed:!1,sortBy:"",minLength:1},t.start=function(e){e.target.hidden=!0,t.setState((function(t){return{started:!t.started}}))},t.reverse=function(){t.setState((function(t){return{reversed:!t.reversed}}))},t.sortAlphabetically=function(){t.setState({sortBy:"alphabet"})},t.reset=function(){t.setState({reversed:!1,sortBy:"",minLength:1})},t.sortByLength=function(){t.setState({sortBy:"length"})},t.handleChange=function(e){var n=e.target.value;t.setState({minLength:+n})},t}return Object(c.a)(n,[{key:"render",value:function(){var t=this.state,e=t.goods,n=t.started,r=t.reversed,s=t.sortBy,o=t.minLength,c=e.filter((function(t){return t.length>=o}));return c.sort((function(t,e){switch(s){case"alphabet":return t.localeCompare(e);case"length":return t.length-e.length;default:return 0}})),r&&c.reverse(),Object(u.jsxs)("div",{className:"app",children:[Object(u.jsx)("h1",{children:"Goods"}),n&&Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(d,{goods:c}),Object(u.jsx)("button",{type:"button",onClick:this.reverse,children:"Reverse"}),Object(u.jsx)("button",{type:"button",onClick:this.sortAlphabetically,children:"Sort alphabetically"}),Object(u.jsx)("button",{type:"button",onClick:this.reset,children:"Reset"}),Object(u.jsx)("button",{type:"button",onClick:this.sortByLength,children:"Sort by length"}),Object(u.jsx)("form",{children:Object(u.jsx)("select",{value:o,onChange:this.handleChange,children:e.map((function(t,e){return Object(u.jsx)("option",{value:e+1,children:e+1},t)}))})})]}),Object(u.jsx)("button",{type:"button",onClick:this.start,children:"Start"})]})}}]),n}(h.a.Component);s.a.render(Object(u.jsx)(j,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.73bc1312.chunk.js.map