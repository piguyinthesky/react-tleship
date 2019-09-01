(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,function(e,t,a){e.exports=a(18)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(8),i=a.n(o),s=a(1),l=a(2),c=a(3),u=a(5),m=a(4),h=a(6),p=(a(14),function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"status",value:function(){return"X"===this.props.value?"square hit":"O"===this.props.value?"square miss":null===this.props.value?"square empty":"square"}},{key:"render",value:function(){return r.a.createElement("button",{className:this.status(),onClick:this.props.onClick},this.props.value)}}]),t}(r.a.Component)),d=(a(15),function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"renderSquare",value:function(e){var t=this;return r.a.createElement(p,{key:"square-".concat(e),value:this.props.squares[e],onClick:function(){return t.props.onClick(e)}})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"board-row",key:"header-row"},[r.a.createElement(p,{key:"empty",value:" "})].concat(Object(s.a)(Array(window.CONSTS.NUM_COLS).keys()).map(function(e){return r.a.createElement(p,{key:"col-header-".concat(e),value:String.fromCharCode("A".charCodeAt(0)+e)})}))),this.createSquares())}},{key:"createSquares",value:function(){var e=this,t=window.CONSTS,a=t.NUM_ROWS,n=t.NUM_COLS;return Object(s.a)(Array(a).keys()).map(function(t){return r.a.createElement("div",{className:"board-row",key:"row-".concat(t)},[r.a.createElement(p,{key:"row-header-".concat(t),value:t+1})].concat(Object(s.a)(Array(n).keys()).map(function(a){return e.renderSquare(t*n+a)})))})}}]),t}(r.a.Component));function v(e,t){return e.every(function(e,a){return null===e?"O"===t[a]||null===t[a]:"X"===t[a]})}a(16);var f=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).restart(),a.message=null,a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"restart",value:function(){var e=window.CONSTS,t=e.NUM_ROWS,a=e.NUM_COLS,n=e.SHIP_LENGTH,r=e.NUM_SHIPS;this.state={history:[{displayGrid:Array(t*a).fill(null),move:null}],stepNumber:0};for(var o=r,i=Array(t*a).fill(null),l={};o>0;)Math.random()<.5?function(){var e=Math.floor(Math.random()*(t-n+1)),r=Math.floor(Math.random()*a);if(Object(s.a)(Array(n).keys()).map(function(t){return null===i[(e+t)*a+r]}).every(function(e){return null===e})){for(var c=0;c<n;c+=1)i[(e+c)*a+r]=o;l[o]=n,o-=1}}():function(){var e=Math.floor(Math.random()*t),r=Math.floor(Math.random()*(a-n+1));if(Object(s.a)(Array(n).keys()).map(function(t){return i[e*a+r+t]}).every(function(e){return null===e})){for(var c=0;c<n;c+=1)i[e*a+r+c]=o;l[o]=n,o-=1}}();this.ships=l,this.squares=i}},{key:"handleClick",value:function(e){var t=this.state.history.slice(0,this.state.stepNumber+1),a=t[t.length-1].displayGrid.slice();v(this.squares,a)||a[e]||(this.squares[e]?(a[e]="X",this.message=r.a.createElement("div",null,"Nice hit!")):(a[e]="O",this.message=r.a.createElement("div",null,"You missed. Fire again!")),this.setState({history:t.concat([{displayGrid:a,move:e}]),stepNumber:t.length}))}},{key:"jumpTo",value:function(e){this.setState({stepNumber:e})}},{key:"render",value:function(){var e=this,t=this.state.history,a=t[this.state.stepNumber].displayGrid,n=v(this.squares,a),o=t.map(function(t,a){var n=a?"Go to move #".concat(a,": ").concat(function(e,t){var a=t||window.CONSTS?window.CONSTS.NUM_COLS:7,n=Math.floor(e/a),r=e%a;return"".concat(String.fromCharCode("A".charCodeAt(0)+r)).concat(n+1)}(t.move)):"Go to game start";return r.a.createElement("li",{key:a},r.a.createElement("button",{onClick:function(){return e.jumpTo(a)}},n))}),i=n?"You won in ".concat(this.state.stepNumber," moves! Click 'Go to game start' to play again."):"Click a square to make your move!";return r.a.createElement("div",{className:"game"},r.a.createElement("div",{className:"game-board"},r.a.createElement(d,{squares:a,onClick:function(t){return e.handleClick(t)}})),r.a.createElement("div",{className:"game-info"},this.message,r.a.createElement("div",{className:"tooltip"},"Hover over me for help!",r.a.createElement("span",{class:"tooltiptext"},"There are ",window.CONSTS.NUM_SHIPS," ships on the board, each of which span ",window.CONSTS.SHIP_LENGTH," tiles horizontally or vertically. If you click on all three sections of a ship, you sink it! Sink all ",window.CONSTS.NUM_SHIPS," ships to win.")),r.a.createElement("div",null,i),r.a.createElement("ol",null,r.a.createElement("li",null,r.a.createElement("button",{onClick:function(){e.restart()}},"Restart")),o)),r.a.createElement("div",{className:"help"},r.a.createElement("div",{id:"help-hit"},r.a.createElement(p,{key:"help-hit",value:"X"}),r.a.createElement("h3",null,"Hit")),r.a.createElement("div",{id:"help-miss"},r.a.createElement(p,{key:"help-miss",value:"O"}),r.a.createElement("h3",null,"Miss"))))}}]),t}(r.a.Component);a(17);window.CONSTS={NUM_ROWS:7,NUM_COLS:7,SHIP_LENGTH:3,NUM_SHIPS:3,EMPTY:" "},i.a.render(r.a.createElement(f,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.0038d3b9.chunk.js.map