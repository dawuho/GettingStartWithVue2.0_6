Vue.filter('uppercase',function(value){
  return value.toUpperCase();
});

new Vue({
  el:'#app',
  data:{
    title:'Hello World!',
    theLowerCaseTitle:'TEST LOWER CASE',
    message:'something'
  },
  computed:{
    theTitle:function(){
      return this.title.toUpperCase();
    }
  },
  filters:{
      lowercase:function(value){
        return value.toLowerCase();
      }
  }
});
