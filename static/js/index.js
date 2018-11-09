//功能：引入头部底部文件
$(function () {
  $('<link rel="stylesheet" href="./css/header0.css">').appendTo("head");
  $.ajax({
    url: "/sub/header0.html",
    type: "GET",
    success: function (res) {
      $(res).replaceAll("header");
      $('<script src="./js/header0.js"></script>').appendTo("body");
    }
  });
  $('<link rel="stylesheet" href="./css/footer0.css">').appendTo("head");
  $.ajax({
    url: "/sub/footer0.html",
    type: "GET",
    success: function (res) {
      $(res).replaceAll("footer");
      $('<script src="./js/footer0.js"></script>').appendTo("body");
    }
  });
  //功能：实现图片淡入淡出的效果
  var img_bg = [
    "my-bg1",
    "my-bg2",
    "my-bg3",
    "my-bg4",
  ]
  var _index = 0;
  var index = 0;
  var $myBg = $('[data-change=my-bg]');
  var $lis = $('.my-intro').children();
  var $imgs = $myBg.children("div.my-car").children().children("img:not(.my-img)");
  setInterval(fn,5000);
  function fn(){
    index ++;
    //背景的配置
    $myBg.attr('class',img_bg[index]);
    //图片的配置
    $imgs.eq(index-1).css("opacity",0);
    $imgs.eq(index).css('opacity',1);
    //指示器的配置
    $lis.eq(index).addClass('active1').siblings().removeClass('active1');
    if(index == 3) index = -1;
  }
  $myBg.hover(function () {
    $bg = $(this);
    $bg.children('a').css({"width":44.1});
  },function(){
    $bg = $(this);
    $bg.children('a').css({"width":0});
  })
  //功能：轮播的切换
  var item = 0;
  var width = $('.my-inner').width();
  var length = $('.my-inner').children().length;
  var $prev = $('[data-left=0]');
  var $next = $('[data-right=1]');
  $prev.click(function () {
    $prev = $(this);
    if (!$prev.is('.disabled')) {
      item--;
      $('.my-inner').css("margin-left", -width / 2 * item);
      $next.removeClass('disabled');
      if (item === 0) {
        $prev.addClass('disabled');
      }
    }
  })
  $next.click(function () {
    $next = $(this);
    if (!$next.is(".disabled")) {
      item++;
      $('.my-inner').css("margin-left", -width / 2 * item);
      $prev.removeClass('disabled');
      if (item === length - 1) {
        $next.addClass('disabled');
      }
    }
  })
  //功能：鼠标点击事件
  $('[data-download=app]').click(function(){
    alert("即将下载app...");
  })
  //功能：播放音乐的功能
  $('[data-play=play]').click(function(){
    //alert("进行歌曲播放");
    $i = $(this);
    if($i.hasClass('icon-bofang')){
      $i.removeClass('icon-bofang').addClass('icon-plus-pause');
    }else{
      $i.removeClass('icon-plus-pause').addClass('icon-bofang');
    }
  })
  //功能：实现拖动的功能
  var $parent = $('.my-progress');
  var $child = $('.my-progress>div')
  var leftPar = $parent.offset().left;//相对页面的偏移量
  var topPar = $parent.offset().top;
  var isMove = false;
  var offset,offsetY;
  //鼠标属性有offsetX/pagex/clientX 
  $child.mousedown(function(e){
    //设置鼠标在中间才触发事件
    isMove = true;
    offsetX = e.offsetX;
    offsetY = e.offsetY;
    //console.log(offsetX,offsetY);
  })
  .mouseup(function(){
    isMove = false;
  })
  $(document).mousemove(function(e){
    if(isMove){
      //var top = e.clientY - offsetY-topPar;
      var left = e.clientX - offsetX-leftPar;
      if(left < 0){left = 0}
      if(left > 480 ){left = 480}
      $child.css({"left":left});
    }
  })
  //功能：绑定点击锁就固定
  $('.btn-hide').click(function(){
    var $i = $(this).children().children("i");

    $('aside.aside-bottom').toggleClass("my-opacity");
    if($i.hasClass('icon-deblock')){
      $i.removeClass('icon-deblock').addClass('icon-lock');
    }else{
      $i.removeClass('icon-lock').addClass('icon-deblock');
    }
  })
})