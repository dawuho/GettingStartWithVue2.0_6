new Vue({
  el:'#app',
  data:{
    title:'Hello World!'
  },
  computed:{
    theTitle:function(){
      return this.title.toUpperCase();
    }
  }
});
