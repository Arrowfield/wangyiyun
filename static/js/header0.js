$(function () {
  //当用户重新刷新页面时，即该页面的就自动销毁
  var baseUrl = sessionStorage.getItem('url');
  var timer = null;
  var time = 60;
  (function(){
    //检测用户自否登录（在SESSION没有销毁的情况下）//销毁条件：（1）用户退出浏览器（2）24分钟
    //var url = "http://127.0.0.1:3000/user/islogin";
    var url = baseUrl + "user/islogin";
    $.ajax({url:url,type:"GET",success:function(result){
      //使用session判断用户是否登录
      if(result.code == 1){
        sessionStorage.setItem("uid",result.msg[0].uid);
        loginSuccess();
      }else{
        console.log('用户未登录');
      }
    }})
    //巨坑：不能使用localhost这个域名访问；否则cookie就不会记录session
  })()
  //登录事件
  $('.goto-login').click(function(){
    $('#demo').show().css('background','rgba(0,0,0,.5)');
    mychange('.login')
  })
  $('[data-change=change]').click(()=>{
    if(timer){time=60;clearInterval(timer)}
    $('#demo').hide();
    mychange('.login')
  })
  //退出登录事件
  $('[data-exit=exit]').click(function () {
    //var url = "http://127.0.0.1:3000/user/signout"
    var url = baseUrl + "user/signout"
    $.ajax({url:url,type:"GET",success:(result)=>{
      //console.log(result);
      if(result.code == 1){
        logout();
        window.location.reload();
      }
    }})
  })
  //注册按钮事件的绑定
  $('[data-reg=register]').click(function () {
    mychange('.register')
  })
  //为下一步按钮绑定事件
  $('[data-check=check]').click(function () {
    mychange('.check');
    //启动定时器
    mySetInterval();   
  })
  //为模态框绑定拖动事件
  $('modal-header')
  //返回登录界面
  $('.modal-footer>div>a').click(function () {
    mychange('.login')
  })
  //函数定义
  function mychange(selector){
    $(selector).show().siblings().hide();
  }
  //函数定义
  function mySetInterval() {
    timer = setInterval(fn, 1000)
  }
  function fn() {
    $('.time>em').html(time + 's');
    time--;
    if (time == 0) {
      console.log(timer);
      clearInterval(timer);
      $('.time>em').css('display', 'none')
      $('.time>a').css('display', 'block')
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
    mychange('.login-next')
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
    vali("#uname",/(^(\+86|0086)?1[3-8]\d{9}$)|(^[^.@]+@[^.@]+\.(com|cn|net)(\.cn)?$)|(^[\u4e00-\u9fa5]+$)/, e);
    vali("#upwd",/^.{6,}$/,e);
    //var url = "http://127.0.0.1:3000/user/signin";
    var url = baseUrl + "user/signin"
    $.ajax({url: url,data: {uname,upwd},type: "POST",
      success: function (res) {
        console.log(res)
        if(res.code ==1 ){
          //登陆成功重新刷新页面
          window.location.reload();
        }else{
          alert('请检查用户名或密码')
        }
      }
    })
  })
  //函数封装（用户登录成功后显示的效果）
  function loginSuccess(){
    //隐藏模态框
    $('#demo').css("display","none");
    $('.modal-backdrop.show').css('display','none');
    //隐藏登录界面
    $('.my-login').css("display","none");
    $('.my-hidden.my-after-login').css('display','none');
    //显示登录成功界面
    $('.my-exit').css('display','block');
    $('.my-before-login').removeAttr("style");
    //显示用户粉丝界面
    $('.my-right>div:first-child').hide();
    $('.my-right-hidden').removeAttr('style');
  }
  //函数封装（用户退出登录后显示的效果）
  function logout(){
     //显示模态框
     $('#demo').removeAttr("style");
     //关闭遮罩
     $('.modal-backdrop.show').css('display','none');
     //显示登录界面
     $('.my-login').removeAttr('style');
     $('.my-hidden.my-after-login').removeAttr('style');
     //关闭登录成功界面
     $('.my-exit').css('display','none');
     $('.my-before-login').css("display","none");
     //
     $('.my-right>div:first-child').show();
     $('.my-right-hidden').hide();
  }
  //事件绑定
  $.each($('.inputs>input'),function(index,val){
    val.setAttribute('readonly',true);
  })
  $('.inputs>input').keyup(function(){
    var $input = $(this);
    $input.css('border-bottom','2px red solid');
    if($input.index() > 3){return;}
    $input.next().removeAttr('readonly');
    $input.next().focus();
  })
  $('.inputs>input')[0].removeAttribute('readonly');
  //时间2018/11/10开始做新的功能
})