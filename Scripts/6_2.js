Vue.filter('uppercase',function(value){
  return value.toUpperCase();
});

new Vue({
  el:'#app',
  data:{
    title:'Hello World!',
    message:'something'
  },
  computed:{
    theTitle:function(){
      return this.title.toUpperCase();
    }
  },
  filters:{

  }
});
