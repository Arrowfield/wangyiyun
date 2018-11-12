$(function(){
    //功能：引入头部文件以及CSS样式
    $('<link rel="stylesheet" href="./css/header1.css">').appendTo('head');
    $('<link rel="stylesheet" href="./css/footer0.css">').appendTo('head');
    $.ajax({
      url: "/sub/header1.html",
      type: "GET",
      success: function (result) {
        $(result).replaceAll('header');
        $('<script src="./js/header1.js"></script>').appendTo('body');
      }
    })
    $.ajax({
      url: "/sub/footer0.html",
      type: "GET",
      success: function (result) {
        $(result).replaceAll('footer');
      }
    })
    var MyMagn = {
      template:"#mymagn",
      data:function(){
        return {}
      }
    }
    Vue.component("all",{//全局组件
      template:"#all",
      data:function(){
        return {

        }
      },
      components:{
        MyMagn:MyMagn
      }
    })
    var vm = new Vue({
      el:"#app",
      data:{}//
    })
})