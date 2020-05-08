(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{49:function(e,t,a){e.exports=a(77)},77:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(37),l=a.n(o),c=(a(54),a(11)),i=a(16),m=a(22),u=a(25),d=a(9),s=a(38);function b(){var e=Object(s.a)(["\n  border-color: rgba(0,212,255,1);\n  border-width: 7px;\n  border-radius: 30px;\n\n  background-color: rgba(1,101,156,1);\n  color: white;\n\n  font-size: 1rem;\n  padding: 0.5rem 1rem;\n\n  transition: color .7s linear, background-color .7s linear;\n\n  &:hover {\n    background-color: transparent ;\n    border-color: rgba(1,101,156,1);\n    color: yellow;\n    transition: color .7s linear, background-color .7s linear;\n  }\n"]);return b=function(){return e},e}var p=a(39).a.button(b()),g=a(46),y=a(44),h=a(17),E=a(47),f=a(12),v=a(43),C=a.n(v),k=function(){var e=Object(n.useState)({city:"",state:"",country:""}),t=Object(u.a)(e,2),a=t[0],o=t[1],l=function(e){e.persist(),o((function(t){return Object(m.a)(Object(m.a)({},t),{},Object(i.a)({},e.target.name,e.target.value))}))},c=Object(n.useState)({main:{temp:"",humidity:"",feels_like:""},name:""}),s=Object(u.a)(c,2),b=s[0],v=s[1],k={backgroundColor:"transparent",color:"white",border:"0",textAlign:"left"};return r.a.createElement("div",null,r.a.createElement(y.a,null,r.a.createElement("h1",{style:{textAlign:"center",fontSize:"3rem",padding:"3rem"}}," Weather App "),r.a.createElement(g.a,{style:{background:"linear-gradient(90deg, rgba(7,62,156,1) 52%, rgba(0,212,255,1) 100%)",backgroundSize:"Cover",height:"100vh",alignItems:"center",color:"white",textAlign:"center",justifyContent:"center",borderColor:"red",borderWidth:"2rem",borderRadius:"20rem"}},r.a.createElement(h.a,{xs:6,md:4},r.a.createElement(E.a,{src:"./eee.jpeg",style:{borderRadius:"20rem"},fluid:!0})),r.a.createElement("div",null,r.a.createElement("div",{className:"col-sm-10 col-md-8 mx-auto mt-5"},r.a.createElement(d.a,{onSubmit:function(e){var t="https://api.openweathermap.org/data/2.5/",n="1a1715229f610f4b01ce2654fbf4a6f7";e.preventDefault(),C.a.get("".concat(t,"weather?q=").concat(a.city,",").concat(a.country,"&units=metric&APPID=").concat(n)).then((function(e){return v(e.data)})).catch((function(e){console.log(e)}),[])}},r.a.createElement(d.a.Group,{controlId:"city"},r.a.createElement(d.a.Label,null,"City"),r.a.createElement(d.a.Control,{required:!0,placeholder:"City",name:"city",value:a.city,onChange:l})),r.a.createElement(d.a.Group,{controlId:"country"},r.a.createElement(d.a.Label,null,"State"),r.a.createElement(d.a.Control,{placeholder:"State",name:"state",value:a.state,onChange:l})),r.a.createElement(d.a.Group,{controlId:"Country"},r.a.createElement(d.a.Label,null,"Country"),r.a.createElement(d.a.Control,{required:!0,placeholder:"Country",name:"country",value:a.country,onChange:l})),r.a.createElement(p,{variant:"primary",type:"submit"},"Get Weather")))),r.a.createElement(f.a,null,r.a.createElement(f.a.Item,{style:k},"Location: ",b.name," "),r.a.createElement(f.a.Item,{style:k},"Temperature: ",b.main.temp," \xb0C"),r.a.createElement(f.a.Item,{style:k},"Humidity: ",b.main.humidity),r.a.createElement(f.a.Item,{style:k},"Feels like:",b.main.feels_like," \xb0C")))))},j=Object(c.e)((function(e){return r.a.createElement(n.Fragment,null,r.a.createElement(c.a,{exact:!0,path:"/",component:k}))})),I=a(21),w=r.a.createElement(I.a,null,r.a.createElement(j,null));l.a.render(w,document.getElementById("root"))}},[[49,1,2]]]);
//# sourceMappingURL=main.a22ff61e.chunk.js.map