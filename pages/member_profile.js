"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _dec,_class,_class2,_temp2,_createClass=function(){function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}}(),_get=function e(t,n,r){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,n);if(void 0===o){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,n,r)}if("value"in o)return o.value;var a=o.get;return void 0!==a?a.call(r):void 0},_index=require("../npm/@tarojs/taro-weapp/index.js"),_index2=_interopRequireDefault(_index),_index3=require("../npm/@tarojs/redux/index.js"),_api=require("../lib-app/api.js");function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var Login=(_dec=(0,_index3.connect)(function(e){return e}))((_temp2=_class2=function(e){function a(){var e,t,n;_classCallCheck(this,a);for(var r=arguments.length,o=Array(r),i=0;i<r;i++)o[i]=arguments[i];return(t=n=_possibleConstructorReturn(this,(e=a.__proto__||Object.getPrototypeOf(a)).call.apply(e,[this].concat(o)))).$usedState=["anonymousState__temp","anonymousState__temp2","config","memberUser","store"],n.config={navigationBarTitleText:"我的资料"},n.state={},n.$$refs=[],_possibleConstructorReturn(n,t)}return _inherits(a,_index2.default.Component),_createClass(a,[{key:"_constructor",value:function(e){_get(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"_constructor",this).call(this,e)}},{key:"componentWillMount",value:function(){_api.Api.launch(this.$router.params)}},{key:"_createData",value:function(){this.__state=arguments[0]||this.state||{},this.__props=arguments[1]||this.props||{};var e=this.config,t=this.__props.store.memberUser,n=(t&&"phone"in t?t.phone:"")+" "+(t&&"phone"in t&&t.phone?"[修改]":"[绑定]"),r=(t&&"email"in t?t.email:"")+" "+(t&&"email"in t&&t.email?"[修改]":"[绑定]");return Object.assign(this.__state,{anonymousState__temp:n,anonymousState__temp2:r,config:e,memberUser:t}),this.__state}}]),a}(),_class2.properties={store:{type:null,value:null}},_class2.$$events=[],_class=_temp2))||_class;exports.default=Login,Component(require("../npm/@tarojs/taro-weapp/index.js").default.createComponent(Login,!0));