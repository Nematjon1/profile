(this.webpackJsonpprofile=this.webpackJsonpprofile||[]).push([[5],{45:function(t,e,r){},50:function(t,e,r){"use strict";function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function o(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var r=[],n=!0,o=!1,c=void 0;try{for(var i,s=t[Symbol.iterator]();!(n=(i=s.next()).done)&&(r.push(i.value),!e||r.length!==e);n=!0);}catch(a){o=!0,c=a}finally{try{n||null==s.return||s.return()}finally{if(o)throw c}}return r}}(t,e)||function(t,e){if(t){if("string"===typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function s(t,e){return(s=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function a(t){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function u(t){return(u="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function l(t,e){return!e||"object"!==u(e)&&"function"!==typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function f(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=a(t);if(e){var o=a(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return l(this,r)}}r.r(e);var b=r(0),h=r(1),y=function(t){var e=t.onClick,r=t.value;return Object(h.jsx)("button",{className:"square",onClick:e,children:r})},p=function(t){var e=t.onClick,r=t.squares,n=function(t){return Object(h.jsx)(y,{onClick:function(){return e(t)},value:r[t]})};return Object(h.jsxs)("div",{children:[Object(h.jsxs)("div",{className:"board-row",children:[n(0),n(1),n(2)]}),Object(h.jsxs)("div",{className:"board-row",children:[n(3),n(4),n(5)]}),Object(h.jsxs)("div",{className:"board-row",children:[n(6),n(7),n(8)]})]})},m=(r(45),function(t){!function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&s(t,e)}(a,t);var e,r,n,o=f(a);function a(){var t;c(this,a);for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];return(t=o.call.apply(o,[this].concat(r))).state={history:[{squares:Array(9).fill(null)}],stepNumber:0,xIsNext:!0},t.jumpTo=function(e){t.setState({stepNumber:e,xIsNext:e%2===0})},t}return e=a,(r=[{key:"handleClick",value:function(t){var e=this.state.history.slice(0,this.state.stepNumber+1),r=e[e.length-1].squares.slice();d(r)||r[t]||(r[t]=this.state.xIsNext?"X":"O",this.setState({history:e.concat([{squares:r}]),stepNumber:e.length,xIsNext:!this.state.xIsNext}))}},{key:"render",value:function(){var t,e=this,r=this.state.history,n=r[this.state.stepNumber],o=d(n.squares),c=r.map((function(t,r){var n=r?"Go to move #"+r:"Go to game start";return Object(h.jsx)("li",{className:"history-list",children:Object(h.jsx)("button",{className:"history-btn",onClick:function(){return e.jumpTo(r)},children:n})},r)}));return o?(t="Winner: "+o,console.log(o)):t="Next player: "+(this.state.xIsNext?"X":"O"),Object(h.jsxs)("div",{className:"tic-tac-toe-game",children:[Object(h.jsx)("h2",{className:"game-title",children:"Tic Tac Toe"}),Object(h.jsxs)("div",{className:"game",children:[Object(h.jsx)("div",{className:"game-board",children:Object(h.jsx)(p,{squares:n.squares,onClick:function(t){return e.handleClick(t)}})}),Object(h.jsxs)("div",{className:"game-info",children:[Object(h.jsx)("div",{className:"status",children:t}),Object(h.jsx)("ol",{className:"history-info",children:c})]})]})]})}}])&&i(e.prototype,r),n&&i(e,n),a}(b.Component)),d=function(t){for(var e=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],r=0;r<e.length;r++){var n=o(e[r],3),c=n[0],i=n[1],s=n[2];if(t[c]&&t[c]===t[i]&&t[c]===t[s])return t[c]}return null};e.default=m}}]);
//# sourceMappingURL=5.01c0dc26.chunk.js.map