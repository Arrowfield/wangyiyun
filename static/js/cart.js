$(function () {
  //将数据库中用户的购物车信息导出
  var baseUrl = sessionStorage.getItem('url');
  
  (function(){
    //使用用户的ID查询用户购物车的相关信息
    var uid = sessionStorage.getItem('uid');
    if(uid){
      var url = baseUrl+'user/cartnews';
      $.ajax({url:url,type:"GET",data:{uid:uid},success:function(result){
      console.log(result.msg)
      new Vue({
        el:"#my-container",
        data:{
          list:result.msg,
          checkAll:false
        },
        methods:{
          add(i){
            this.list[i].count ++;
          },
          sub(i){
            if(this.list[i].count > 1){
              this.list[i].count --;
            }
          },
          allChecked(){
            if(!this.checkAll){
              this.checkAll = true;
              this.list.forEach((val)=>{
                val.is_checked = 1;
              })
            }else{
              this.list.forEach((val)=>{
                val.is_checked = 0;
              })
            }
          },
          handleChange(){
            var bool = true;
            this.list.forEach((val,i,arr)=>{
              bool = val.is_checked && bool;
            })
            this.checkAll = bool;
          },
          isChange(i){
            if(this.list[i].count<1){this.list[i].count = 1}
          }
        },
        computed:{
          total(){
            var sum = 0;
            this.list.forEach((val,i,arr)=>{
              if(val.is_checked){
                sum += val.count * val.price;           
              }
            })
            return sum;
          },
          count(){
            var count = 0;
            this.list.forEach((val,i,arr)=>{
              if(val.is_checked){
                count += val.count; 
              }
            })
            return count;
          }
        }
      })
      }})
    }else{
      $('#my-list').hide();
      $('#mask01').show();
      //可以后退，当前窗口打开
      setTimeout(()=>{
        window.open('./index.html','_self');
      },3000)
    }
  })()
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
})
/*var myDiv = {
  template:"#demo01",
  data:function(){
    return {}
  }
}*///局部组件   
//注意问题：函数的自调一定要放在开头