//先
$(function(){
  //功能：实现页面切换过渡效果（头部导航 滚动页面自动定位）
  //console.log(123)
})
var $key = 0;
var canscroll = true;
//后
$(document).ready(function(){
  changeSize();
  $(window).on('resize', function(event) {
		event.preventDefault();
		changeSize();
	});
  $(document).mousewheel(function(event,delta){
    if(canscroll){
      canscroll = false;
      $key -= delta;
      if($key < 0){
        $key = 0;
        canscroll = false;
      }else if($key > 5){
        $key = 6;
        canscroll = true;
        return;
      }
      //console.log($key);
      $('body,html').stop().animate({'scrollTop':$('.main-box>div').eq($key).offset().top},700,function(){
        canscroll = true;
      })
    }
  })
})
//定义函数动态改变页面大小
function changeSize(){
  var window_height = $(window).height();
  $('.main-box>div').css('height',window_height);
  //console.log(window_height);
  $('body,html').stop().animate({'scrollTop':$('.main-box>div').eq($key).offset().top},700,function(){
    canscroll = true;
  })
}