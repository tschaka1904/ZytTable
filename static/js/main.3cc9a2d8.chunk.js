(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{21:function(e,t,a){e.exports=a(49)},28:function(e,t,a){},29:function(e,t,a){},49:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),i=a(18),r=a.n(i),s=(a(27),a(28),a(29),a(8)),c=a.n(s),o=a(19),m=a(2),u=a(3),d=a(5),p=a(4),E=a(6),h=a(20),v=a.n(h),f="Basel",N={BASEL:{DREIROSENBRUECKE:{name:"Dreirosenbr\xfccke",exclude:f,id:8588768},RIEHENRING:{name:"Riehenring",exclude:f,id:8589352},SBB:{name:"Basel SBB",exclude:f,id:8500010},BARFUESSERPLATZ:{name:"Barf\xfcsserplatz",exclude:f,id:8500897}}}.BASEL.RIEHENRING,b=function(e){function t(){return Object(m.a)(this,t),Object(d.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"row h-100"},l.a.createElement("div",{className:" col-2 text-center"},l.a.createElement("h1",null,l.a.createElement("u",null,"Linie"))),l.a.createElement("div",{className:" col-7 text-left"},l.a.createElement("h1",{className:""},l.a.createElement("u",null,"Fahrtziel"))),l.a.createElement("div",{className:" col-3 text-center"},l.a.createElement("h1",null,l.a.createElement("u",null,"Abfahrt"))))}}]),t}(n.Component);b.defaultPropTypes={};var O=b,_=function(e){function t(){return Object(m.a)(this,t),Object(d.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"row h-100"},l.a.createElement("div",{className:"col-2 text-center"}),l.a.createElement("div",{className:"col-8 text-center"},l.a.createElement("h1",{style:{color:"#c7c3c3"},className:"pl-1"}," ",N.name," ",l.a.createElement("span",{className:"badge badge-danger"},"Live"))),l.a.createElement("div",{className:"col-2 text-center"},l.a.createElement("span",{className:"float-right"},"Last update: ",this.props.lastUpdate)))}}]),t}(n.Component);_.defaultPropTypes={lastUpdate:""};var R=a(7),y=a.n(R),I={CANCELED:"annulliert",ARRIVED:"jetzt",ARRIVES_SHORTLY:"<1"};function j(e,t,a){var n=y()(e),l=0;if("X"===t)return I.CANCELED;t&&"0"!==t.split("+")[1]&&(l=t.split("+")[1],n=n.add(y.a.duration(l,"m")));var i=y.a.duration(n.diff(a));return i.asMilliseconds()<-w.FIFTEEN_SECONDS?null:i.asMilliseconds()<w.FIFTEEN_SECONDS?I.ARRIVED:i.asMilliseconds()<w.ONE_MINUTE?I.ARRIVES_SHORTLY:Math.floor(i.asMinutes())}var w={TEN_SECONDS:1e4,FIFTEEN_SECONDS:15e3,ONE_MINUTE:6e4},S=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(d.a)(this,Object(p.a)(t).call(this,e))).state={show:!0},a.interval=null,a}return Object(E.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.props.item.planned_arrival_time===I.ARRIVED&&(this.interval=setInterval(function(){e.blink()},1e3))}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"blink",value:function(){this.setState({show:!this.state.show})}},{key:"render",value:function(){return l.a.createElement("div",{className:"row h-100 ".concat(this.state.show?"":"invisible")},l.a.createElement("div",{className:"col-2 text-center"},l.a.createElement("h1",null,this.props.item.line)),l.a.createElement("div",{className:"col-7 text-left"},l.a.createElement("h1",null,this.props.item.destination.includes(N.exclude)?this.props.item.destination.split(",")[1]:this.props.item.destination)),l.a.createElement("div",{className:"col-3 row"},l.a.createElement("div",{className:"".concat(this.props.item.planned_arrival_time===I.ARRIVED||this.props.item.planned_arrival_time===I.CANCELED?"col-12 text-center":"col-6 text-right")},l.a.createElement("h1",null,this.props.item.planned_arrival_time)),this.props.item.planned_arrival_time!==I.ARRIVED&&this.props.item.planned_arrival_time!==I.CANCELED?l.a.createElement("div",{className:"col-6 text-left"},l.a.createElement("h1",null,"min")):null))}}]),t}(n.Component);S.defaultPropTypes={item:null};var T=S,k=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(d.a)(this,Object(p.a)(t).call(this,e))).state={timeTableItems:[],lastUpdate:null},a}return Object(E.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.setup(),setInterval(Object(o.a)(c.a.mark(function t(){return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e.setup();case 1:case"end":return t.stop()}},t)})),w.TEN_SECONDS)}},{key:"setup",value:function(){var e=this;v.a.get("//timetable.search.ch/api/stationboard.json?stop="+N.id+"&show_delays=1").then(function(e){return e}).then(function(t){var a=t.data.connections.slice(0,20),n=[],l=y()();a.forEach(function(e){var t=function(e,t){return{vehicleType:e.type,planned_arrival_time:j(e.time,e.dep_delay,t),time:e.time,destination:e.terminal.name,line:e.line,delay:e.dep_delay}}(e,l);t.planned_arrival_time&&n.push(t)}),n.length&&e.setState({timeTableItems:n,lastUpdate:y()().format("HH:mm:ss a")})})}},{key:"render",value:function(){return this.state.timeTableItems.length?l.a.createElement("div",{className:"h-100"},l.a.createElement(_,{lastUpdate:this.state.lastUpdate}),l.a.createElement(O,null),l.a.createElement("div",{className:"container-fluid"},this.state.timeTableItems.splice(0,10).map(function(e){return l.a.createElement(T,{key:e.vehicleType+"-"+e.line+Math.random(),item:e})}))):null}}]),t}(n.Component);var x=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(k,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[21,1,2]]]);
//# sourceMappingURL=main.3cc9a2d8.chunk.js.map