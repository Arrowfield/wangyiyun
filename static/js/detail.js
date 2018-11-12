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
    //获取商品的ID
    var url = decodeURIComponent(location.href);
    var pid = url.split("?")[1].split('=')[1];//返回字符串 形如：uname=dingdinupwd=123456
    //pid = pid.split('=')[1];//返回uid的值
    var proDetail = {};
    var baseUrl = sessionStorage.getItem("url");
    var url = baseUrl + "pro/detail?pid="+pid;
    $.ajax({url:url,type:"GET",success:function(result){
      proDetail = result.msg[0]
      console.log(proDetail)
    }})
    console.log(proDetail)
    var MyMagn = {
      template:"#mymagn",
      data:function(){
        return {
          proDetail
        }
      },
      created() {
        console.log(proDetail)
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