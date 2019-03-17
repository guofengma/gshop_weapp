"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _class,_temp2,_createClass=function(){function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}}(),_get=function e(t,n,o){null===t&&(t=Function.prototype);var r=Object.getOwnPropertyDescriptor(t,n);if(void 0===r){var a=Object.getPrototypeOf(t);return null===a?void 0:e(a,n,o)}if("value"in r)return r.value;var i=r.get;return void 0!==i?i.call(o):void 0},_index=require("../npm/@tarojs/taro-weapp/index.js"),_index2=_interopRequireDefault(_index),_api=require("../lib-app/api.js"),_dialog=require("../lib/dialog.js"),_storage=require("../lib/storage.js"),_binder=require("../lib/binder.js"),_util=require("../lib-app/util.js");function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var Index=(_temp2=_class=function(e){function i(){var e,t,n;_classCallCheck(this,i);for(var o=arguments.length,r=Array(o),a=0;a<o;a++)r[a]=arguments[a];return(t=n=_possibleConstructorReturn(this,(e=i.__proto__||Object.getPrototypeOf(i)).call.apply(e,[this].concat(r)))).$usedState=["anonymousState__temp","anonymousState__temp2","anonymousState__temp3","config","store","records","feeShipping","feeTotal","cartIds","consigneeName","consigneePhone","remark","confirmShow"],n.config={navigationBarTitleText:"提交订单"},n.state={store:null,records:[],feeShipping:"-",feeTotal:"-",cartIds:[],consigneeName:"",consigneePhone:"",remark:"",confirmShow:!1},n.$$refs=[],_possibleConstructorReturn(n,t)}return _inherits(i,_index.Component),_createClass(i,[{key:"_constructor",value:function(e){_get(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"_constructor",this).call(this,e)}},{key:"componentWillMount",value:function(){var e=this;_api.Api.launch(this.$router.params,function(){e.doInit()})}},{key:"doInit",value:function(){var t=this,e=_storage.Storage.getObject("cartSubmitData");if(!e||e.length<=0)return _index2.default.navigateBack(),void _dialog.Dialog.tipError("数据为空");_api.Api.process("store/current",{},function(e){t.setState({store:e.data})}),_api.Api.process("cart/checkout_list",{data:JSON.stringify(e)},function(e){t.setState({records:e.data.records,feeShipping:e.data.feeShipping,feeTotal:e.data.feeTotal,cartIds:e.data.cartIds})})}},{key:"doSubmit",value:function(){var e={};e.cartIds=JSON.stringify(this.state.cartIds),e.consigneeName=this.state.consigneeName,e.consigneePhone=this.state.consigneePhone,e.remark=this.state.remark,_api.Api.process("cart/checkout_submit",e,function(e){_api.Api.configUpdate(),_util.Util.orderPay(e.data.orderId,function(){_index2.default.navigateTo({url:"/pages/member_order_detail?id="+e.data.orderId})},function(){_index2.default.navigateTo({url:"/pages/member_order_detail?id="+e.data.orderId})})})}},{key:"_createData",value:function(){var t=this;this.__state=arguments[0]||this.state||{},this.__props=arguments[1]||this.props||{};var e=this.config,n=_binder.Binder.nextId();this.anonymousFunc0=function(e){return t.setState({consigneeName:e})};var o=_binder.Binder.nextId();this.anonymousFunc1=function(e){return t.setState({consigneePhone:e})};var r=_binder.Binder.nextId();return this.anonymousFunc2=function(e){return t.setState({remark:e})},this.anonymousFunc3=function(){return t.setState({confirmShow:!0})},this.anonymousFunc4=function(){return t.setState({confirmShow:!1})},this.anonymousFunc5=function(){return t.setState({confirmShow:!1})},Object.assign(this.__state,{anonymousState__temp:n,anonymousState__temp2:o,anonymousState__temp3:r,config:e}),this.__state}},{key:"anonymousFunc0",value:function(e){}},{key:"anonymousFunc1",value:function(e){}},{key:"anonymousFunc2",value:function(e){}},{key:"anonymousFunc3",value:function(e){}},{key:"anonymousFunc4",value:function(e){}},{key:"anonymousFunc5",value:function(e){}}]),i}(),_class.properties={},_class.$$events=["anonymousFunc0","anonymousFunc1","anonymousFunc2","anonymousFunc3","anonymousFunc4","anonymousFunc5","doSubmit"],_temp2);exports.default=Index,Component(require("../npm/@tarojs/taro-weapp/index.js").default.createComponent(Index,!0));