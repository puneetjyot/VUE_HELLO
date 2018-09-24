
var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vuee!'
  },
  methods:{
    titleUpperCase(){
      this.message=this.message.toUpperCase();
    },
    titleLowerCase(){
      this.message=this.message.toLowerCase();

    }
  }
})
