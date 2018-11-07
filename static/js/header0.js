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
  $('.modal-footer>div>a').click(function () {
    $('.login').css('display', "block").siblings().css('display', 'none')
  })
  //函数定义
  function mySetInterval() {
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
        $('.time>em').css('display', 'none')
        $('.time>a').css('display', 'block')
      }
    }
  }
  //组件封装（使用vue）
  var LoginSuccess = Vue.component({
    template: "",
    data: function () {
      return {}
    }
  })
  //注册成功
  $('[data-success=success]').click(function () {
    alert('即将进入注册功能');
  })
  //手机登录界面
  $('[data-log=login]').click(function () {
    // alert('进入登录功能');
    $('.login-next').css('display', "block").siblings().css('display', 'none')
  })
  //登录
  //绑定监听事件
  function vali(selector, reg, e) {
    var $txt = $(selector);
    if (reg.test($txt.val())) {
      //console.log('登录信息有效');
      $txt.val('');
    } else {
      e.preventDefault();
    }
  }
  $('[data-login=login]').click(function (e) {
    //发送post请求验证信息
    var uname = $('#uname').val()
    var upwd = $('#upwd').val()
    vali(
      "#uname",
      /(^(\+86|0086)?1[3-8]\d{9}$)|(^[^.@]+@[^.@]+\.(com|cn|net)(\.cn)?$)|(^[\u4e00-\u9fa5]+$)/,
      e
    );
    vali("#upwd",/^.{6,}$/,e);
    var url = "http://127.0.0.1:3000/user/signin";
    $.ajax({url: url,data: {uname,upwd},type: "POST",
      success: function (res) {
        console.log(res)
      }
    })
  })

})