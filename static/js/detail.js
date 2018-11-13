$(function(){
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
    //获取商品的ID
    var url = decodeURIComponent(location.href);
    var pid = url.split("?")[1].split('=')[1];//返回字符串 形如：uname=dingdinupwd=123456
    //pid = pid.split('=')[1];//返回uid的值
    var baseUrl = sessionStorage.getItem("url");
    var url = baseUrl + "pro/detail?pid="+pid;
    $.ajax({url:url,type:"GET",success:function(result){
      //数据请求回来之后
      var proDetail = result.msg[0]
      console.log(proDetail)
      //进行事件处理
      var MyMagn = {
        template:"#mymagn",
        data:function(){
          return {
            proDetail
          }
        }
      }
      var MyTop = {
        template:"#mytop",
        data:function(){
          return{
            isHide:false
          }
        },
        //当存在数据时，对window绑定鼠标滚动监听事件(附带解决抖动问题)
        methods:{
          handleScroll(){
            console.log(window.pageYOffset)
            if(window.pageYOffset > 120){
              this.isHide = true;
            }else{
              this.isHide = false;
            }
          },
          buy(){
            alert('1')
          },
          addCart(){
            alert('2')
          }
        },
        created(){//获取得到数据时的生命周期
          window.addEventListener('scroll',this.handleScroll)
        },
        destroyed(){//离开页面时，执行的操作
          window.removeEventListener('scroll',this.handleScroll)
        }
      }
      Vue.component("all",{//全局组件
        template:"#all",
        data:function(){
          return {
          }
        },
        components:{
          MyMagn,
          MyTop
        }
      })
      var vm = new Vue({
        el:"#app",
        data:{}//
      })
    }})
})