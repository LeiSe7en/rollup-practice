(function (Vue) {
	'use strict';

	function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

	var Vue__default = /*#__PURE__*/_interopDefaultLegacy(Vue);

	var Hello = {
		sayHello: function () {
			console.log('hello rollup');
		}
	};

	Vue__default['default'].component('hello-component', {
		template: '<div>{{message}}</div>',
		data () {
			return {
				message: 'Hello world'
			}
		}
	});
	var app = new Vue__default['default']({
	  el: '#app',
	  template: '<hello-component/>',
	  data () {
	  	return {
	  		message: 'Hello'
	  	}
	  }
	});
	Hello.sayHello();

}(Vue));
