$(function(){
  //跟每一个A标签绑定页面跳转事件
  $('[data-exit=exit]').click(function(){
    alert('退出');
    var $a = $(this);
    $(this).parent('div.my-hidden').css("dispaly",'none'); 
  })
  //注册按钮事件的绑定、
  $('[data-reg=register]').click(function(){
    $('.login').css('display','none');
  })
})