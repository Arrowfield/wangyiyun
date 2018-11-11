$(function () {
  //将数据库中用户的购物车信息导出
  var baseUrl = sessionStorage.getItem('url');
  (function(){
    //使用用户的ID查询用户购物车的相关信息
    var uid = sessionStorage.getItem('uid');
    //var url = 'http://127.0.0.1:3000/user/cartnews'
    var url = baseUrl+'user/cartnews'
    $.ajax({url:url,type:"GET",data:{uid:uid},success:function(result){
      console.log(result.msg)
      var vm = new Vue({
        el:"#my-list",
        data:{
          list:result.msg
        }
      })
    }})
  })()
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
})
//注意问题：函数的自调一定要放在开头