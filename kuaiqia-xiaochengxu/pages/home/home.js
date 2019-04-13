// pages/home/home.js

import urlList from '../../utils/http';
Page({
  /**
   * 页面的初始数据
   */
  data: {
    homeInfo: [],
    spinShow: true,
    switch: false,
    toast: {show: false,message:""},
    imageUrls:[
      "../../assets/banan01.png",
      "../../assets/banan02.png"
    ],
    autoplay:true,
    interval:false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onSwitchChange({detail}){
    const value = detail.value;
    this.setData({
      switch:value,
      spinShow:!value
    })
  },
  onLoad: function (options) {
    //打印
    console.log(JSON.parse(JSON.stringify(this.data.imageUrls)));
    wx.request({
      url: urlList.homeInfo,
      method: "GET",
      success: ({data}) => {
        //this.setData({homeInfo: data})
      }
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {
    wx.stopPullDownRefresh()
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  //自定义方法
  showToast() {
    this.setData({
      toast: {
        show: true,
        message:"这里是提示信息"
      }
    });
    setTimeout(() => {
      this.setData({
        toast: {
					show: false
        }
      })
    }, 1500)
  }
});
/*
* 微信小程序的第三方UI框架：
* （1）iview（类似vue中的mintui）、weui的使用（有点类似vue中的mui）、
* （2）数据请求
* （3）小程序的窗口大小是除开tabbar的375*555px
* (4)由于微信小程序不支持dom操作，所以weui.js并不适用于小程序。不过WeUI也为小程序开发了另外的版本，详情请看：https://github.com/Tencent/weui-wxss/
* */
