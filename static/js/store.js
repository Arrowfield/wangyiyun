$(function () {
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
  //功能：引入轮播组件【使用iframe引入插件】
  // /:代表根目录 ../:上级目录 ./:当前目录
  /*$('<link rel="stylesheet" href="/sub/carousel/css/style.css"></link>').appendTo('head')
  $.ajax({
    url:"/sub/carousel/index.html",
    type:"GET",
    success:function(data){
      $('<script src="/sub/carousel/js/banner.js"></script>').appendTo('head');
      $(data).replaceAll('#my-carousel');
    }
  })*/
  //结束
  //功能：楼层监听
  var offon = true;
  $(window).scroll(function () {
    var $W = $(this);
    if (offon) {
      var top = $W.scrollTop(); //鼠标滚动距离
      if (top > 600) {
        $('aside').show();
      } else {
        $('aside').hide();
      }
    }
  })
})