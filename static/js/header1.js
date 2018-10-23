//功能：指示箭头的切换
$('[class=my-icon]').mouseenter(function(){
  var $div = $(this);
  $div.children("span").css("transform","rotate(180deg)");
}).mouseleave(function(){
  var $div = $(this);
  $div.children("span").css("transform","rotate(0deg)");
})
//功能：为输入框绑定键盘按下事件
var offen = 0;
$('[data-search=find]').keydown(function(e){
  if(e.keyCode === 13){
    //当前窗口打开 不可返回
    //将数据保存到sessionStorage中进行会话级的数据存储(行不通)
    //将数据保存到localStorage中进行跨会话的数据存储(行通)
    offen = 1;//offen是进攻的意思
    var put = $(this).val();
    if(!put){
      put = "氧气耳机"
    }
    //localStorage.setItem("msg",put);
    location.replace(`http://127.0.0.1:3000/pro.html?msg=${put}`); 
    //location.href = "http://127.0.0.1:3000/pro.html";//同时可以执行javascript;
  }
})
//功能：跳转订单界面
//功能：购物车跳转界面
$('[data-cart=cart]').click(function(){
  //location.assign('http://127.0.0.1:3000/cart.html');//当前窗口与打开 可后退
  window.open("http://127.0.0.1:3000/cart.html","_blank");//新窗口打开 可打开多个
})
/*首页-->商城---新窗口 不能返回*/
/*输入框查询-->商品列表-->当前窗口 可以返回*/
/*单击数码影音-->当前页--> 可以返回*/
