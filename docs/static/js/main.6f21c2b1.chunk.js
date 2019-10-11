(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{137:function(e,t,a){e.exports=a(249)},143:function(e,t,a){},144:function(e,t,a){},249:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(126),i=a.n(c),o=(a(142),a(143),a(144),a(86)),l=a.n(o),s=a(127),m=a(24),u=a(25),p=a(27),h=a(26),d=a(28),y=function(e){function t(){return Object(m.a)(this,t),Object(p.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Weather Finder"),r.a.createElement("p",null,"API from openweathermap.org"))}}]),t}(r.a.Component),f=function(e){function t(){return Object(m.a)(this,t),Object(p.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("form",{onSubmit:this.props.getWeather},r.a.createElement("input",{type:"text",name:"city",placeholder:"City"}),r.a.createElement("input",{type:"text",name:"country",placeholder:"Country (ex. BR)"}),r.a.createElement("button",null,"Know Weather"))}}]),t}(r.a.Component),E=function(e){function t(){return Object(m.a)(this,t),Object(p.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"info-weather"},r.a.createElement("div",{className:"table"},r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"City"),r.a.createElement("th",null,"Country"),r.a.createElement("th",null,"Temperature"),r.a.createElement("th",null,"Humidity"),r.a.createElement("th",null,"Condition"))),r.a.createElement("tbody",null,r.a.createElement("tr",null,this.props.city&&r.a.createElement("td",null,this.props.city),this.props.country&&r.a.createElement("td",null,this.props.country),this.props.temperature&&r.a.createElement("td",null,this.props.temperature," \u2103"),this.props.humidity&&r.a.createElement("td",null,this.props.humidity),this.props.description&&r.a.createElement("td",null,this.props.description))))),r.a.createElement("div",{className:"error-message"},this.props.error&&r.a.createElement("p",null,this.props.error)))}}]),t}(r.a.Component),b=a(258),v=a(259),x=a(261),j=a(260),O=a(256),w=function(e){function t(){return Object(m.a)(this,t),Object(p.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container-chart"},r.a.createElement(b.a,null,r.a.createElement(v.a,{text:this.props.city,x:225,y:10,textAnchor:"middle"}),r.a.createElement("g",{transform:"scale(1.0)"},r.a.createElement(x.a,{standalone:!1,label:"Sample",domain:{x:[0,40]}}),r.a.createElement(x.a,{dependentAxis:!0,standalone:!1,domain:{y:[this.props.t_min,this.props.t_max]},label:"Temperature",style:{tickLabels:{angle:90}}}),r.a.createElement(j.a,{standalone:!1,data:this.props.forecast,labels:function(e){return e.datum.y},labelComponent:r.a.createElement(v.a,{dy:8}),size:1,scale:{x:"linear",y:"linear"},style:{border:{stroke:"none"},labels:{fontSize:6}}}))),r.a.createElement(b.a,null,r.a.createElement(v.a,{text:this.props.city,x:225,y:10,textAnchor:"middle"}),r.a.createElement(x.a,{standalone:!1,label:"Sample",domain:{x:[0,40]}}),r.a.createElement(O.a,{data:this.props.forecast}),r.a.createElement(x.a,{dependentAxis:!0,standalone:!1,domain:{y:[this.props.t_min,this.props.t_max]},label:"Temperature",style:{tickLabels:{angle:90}}})))}}]),t}(r.a.Component),g="01c331b462cd6dfb2abd515dffd14055",k=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(p.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={temperature:void 0,city:void 0,country:void 0,humidity:void 0,description:void 0,forecast:void 0,t_min:0,t_max:40,error:void 0},a.getWeather=function(){var e=Object(s.a)(l.a.mark(function e(t){var n,r,c,i,o,s,m,u,p,h;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t.preventDefault(),n=t.target.elements.city.value,r=t.target.elements.country.value,e.next=6,fetch("https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?q=".concat(n,",").concat(r,"&APPID=").concat(g,"&units=metric"));case 6:return c=e.sent,e.next=9,fetch("https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/forecast?q=".concat(n,",").concat(r,"&APPID=").concat(g));case 9:return i=e.sent,e.next=12,c.json();case 12:return o=e.sent,e.next=15,i.json();case 15:if(s=e.sent,m=[],n&&r){for(h=0;h<s.list.length;h++)m.push({x:h+1,y:parseFloat((s.list[h].main.temp-273).toFixed(2))});u=m.reduce(function(e,t){return Math.min(e,t.y)},m[0].y),p=m.reduce(function(e,t){return Math.max(e,t.y)},m[0].y),a.setState({temperature:o.main.temp,city:o.name,country:o.sys.country,humidity:o.main.humidity,description:o.weather[0].description,forecast:m,t_min:u,t_max:p,error:""})}else a.setState({temperature:void 0,city:void 0,country:void 0,humidity:void 0,description:void 0,forecast:void 0,t_min:0,t_max:40,error:"Please enter the value."});e.next=23;break;case 20:e.prev=20,e.t0=e.catch(0),console.log("error: ",e.t0);case 23:case"end":return e.stop()}},e,null,[[0,20]])}));return function(t){return e.apply(this,arguments)}}(),a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"column"},r.a.createElement("div",{className:"panel-header"},r.a.createElement(y,null)),r.a.createElement("div",{className:"form-control"},r.a.createElement(f,{getWeather:this.getWeather})),r.a.createElement("div",{className:"panel-body"},r.a.createElement("div",{className:"info"},r.a.createElement(E,{temperature:this.state.temperature,city:this.state.city,country:this.state.country,humidity:this.state.humidity,description:this.state.description,error:this.state.error}))),r.a.createElement(w,{t_min:this.state.t_min,t_max:this.state.t_max,forecast:this.state.forecast,city:this.state.city}),r.a.createElement("div",{className:"footer"},r.a.createElement("div",{className:"copyright"},r.a.createElement("span",null,"\xa9 Copyright Patricia Dourado 2019."))))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[137,1,2]]]);
//# sourceMappingURL=main.6f21c2b1.chunk.js.map