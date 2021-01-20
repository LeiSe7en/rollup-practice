import Hello from './foo'
import Vue from 'vue'
Vue.component('hello-component', {
	template: '<div>{{message}}</div>',
	data () {
		return {
			message: 'Hello world'
		}
	}
})
var app = new Vue({
  el: '#app',
  template: '<hello-component/>',
  data () {
  	return {
  		message: 'Hello'
  	}
  }
})
Hello.sayHello()