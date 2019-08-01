$(function () {
  //功能：引入头部底部文件
  $('<link rel="stylesheet" href="./css/header1.css">').appendTo("head");
  $.ajax({
    url: "/sub/header1.html",
    type: "GET",
    success: function (res) {
      $(res).replaceAll("header");
      $('<script src="./js/header1.js"></script>').appendTo("body");
      var url = decodeURIComponent(location.href); //解析字符串
      var msg = url.split('?')[1];
      if (msg) {
        msg = msg.split('=')[1];
        $('[data-search=find]').val(msg);
      }
    }
  });
  $('<link rel="stylesheet" href="./css/footer0.css">').appendTo("head");
  $.ajax({
    url: "/sub/footer0.html",
    type: "GET",
    success: function (res) {
      $(res).replaceAll("footer");
    }
  });
  //功能：更多<-->收起切换
  var $btn = $('.my-more');
  $btn.click(function () {
    $btn = $(this);
    var $ul = $('.my-hidden:hidden');
    if ($ul.length == 0) {
      $(this).html('更多 ∨')
      $btn.prev('ul').children('li.my-hidden').css('display', 'none');
    } else {
      $ul.css('display', "block");
      $(this).html('收起 ∧');
    }
  })
  //功能：为input绑定失去焦点事件
  $('.my-choice input').change(function () {
    $put = $(this);
    if (!$put.value) {
      $put.next('button')
        .css('background', '#D33A31') //灰色
        .prop({
          'disabled': true
        });
    } else {
      $put.next('button')
        .css('background', '#e0dfdf') //红色
        .prop('disabled', false);
    }
  })
  //功能：实现TOP的监听
  $(window).scroll(function () {
    var top = $(window).scrollTop();
    if (top > 60) {
      $('[data-hide=hide]').show();
    } else {
      $('[data-hide=hide]').hide();
    }
  })
  //功能：输入范围进行查询
  $('[data-search=random]').click(function () {
    var $btn = $(this);
    console.log($btn.prop('disabled'));
    if ($btn.prop('disabled')) {
      alert('进入范围查询功能');
    }
  })
  //功能：直接单击数字进行查找
  $("[data-number=number]").on("click", "a", function (e) {
    e.preventDefault();
    var $a = $(this);
    var number = $a.html().split('~');
    var min = parseInt(number[0]);
    var max = parseInt(number[1]);
    //发送ajax请求即可
    $.ajax({
      url: `http://127.0.0.1:3000/pro/prolist?min=${min}&max=${max}`,
      type: "GET",
      success: (res) => {
        console.log(res);
      }
    })
  })
  //功能：模糊查找
  var url = decodeURIComponent(location.href); //解析字符串
  var msg = url.split('?')[1];
  //模糊查找的流程
  if (msg) {
    msg = msg.split('=')[1];
    $('div.my-first').hide();
    $('div.my-second').hide();
    $('em.msg').html(msg);
    var baseUrl = sessionStorage.getItem('url');
    $.ajax({
      url: `${baseUrl}pro/prolist?keywords=${msg}`,
      type: "GET",
      success: (res) => {
        addPro(res,msg);
      }
    })
    //定义函数：如果length大于16 就为分页查询中的每一个数据进行事件绑定
    function isShow(col, msg) {
      var title = msg;
      $ul = $('nav.my-nav>ul');
      $ul.on('click', "li:not(.next,.prev)", function () {
        $li = $(this);
        $li.addClass('active').siblings().removeClass('active');
        var pSize = 16;
        var pno = $li.index();
        $.ajax({
          url: `http://127.0.0.1:3000/pro/prolist?pSize=${pSize}&pno=${pno}&title=${title}`,
          type: "GET",
          success: function (res) {
            addPro(res,title);
          }
        })
      })
    }
    //定义：上架商品的个数
    function addPro(res,msg) {
      var data = res.msg
      var html = '';
      if (res.code === 1) {
        if (data.length <= 16) {
          $("nav.my-nav").hide();
          for (var i = 0; i < data.length; i++) {
            var item = data[i];
            html +=
              `<li>
                <a href="#">
                  <img src=${item.m} alt="HTML5">
                </a>
                <p>
                  <a href="">${item.t}</a>
                  <span>￥${item.p.toFixed(2)}</span>
                </p>
               </li>`;
          }
        } else {
          for (var i = 0; i < 16; i++) {
            var item = data[i];
            html +=
              `<li>
                <a href="#">
                  <img src=${item.m} alt="HTML5">
                </a>
                <p>
                  <a href="">${item.t}</a>
                  <span>￥${item.p.toFixed(2)}</span>
                </p>
               </li>`;
          }
          var col = Math.ceil(data.length / 16);
          isShow(col, msg);
        }
      } else {
        $("nav.my-nav").hide();
        console.log('未找到该商品');
      }
      $('.my-remen>.my-ul').html(html);
    }
  }
  //功能：分页查询
  /*在没有指定页数的情况下：控制每页显示16个 数据库的商品总共有17个*/
})