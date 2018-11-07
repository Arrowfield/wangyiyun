$(function () {
  //跟每一个A标签绑定页面跳转事件
  $('[data-exit=exit]').click(function () {
    alert('退出');
    var $a = $(this);
    $(this).parent('div.my-hidden').css("dispaly", 'none');
  })
  //注册按钮事件的绑定
  $('[data-reg=register]').click(function () {
    $('.login').css('display', 'none');
    $('.register').css('display', 'block');
  })
  //为下一步按钮绑定事件
  $('[data-check=check]').click(function () {
    $('.check').css('display', 'block').siblings().css('display', 'none')
  })
  //单击X号恢复初始状态
  $('[data-change=change]').click(function () {
    $('.login').css('display', "block").siblings().css('display', 'none')
  })
  //返回登录界面
  $('.modal-footer>div>a').click(function(){
    $('.login').css('display', "block").siblings().css('display', 'none')
  })
  //函数定义
  function mySetInterval(){
    //启动定时器
    //60s的倒计时
    var time = 60
    var timer = null
    timer = setInterval(fn, 1000)
    function fn() {
      $('.time>em').html(time + 's');
      time--;
      if (time == 0) {
        clearInterval(timer);
        $('.time>em').css('display','none')
        $('.time>a').css('display','block')
      }
    }
  }
  //组件封装（使用vue）
  var LoginSuccess = Vue.component({
    template:"",
    data:function(){
      return{}
    }
  }) 
})