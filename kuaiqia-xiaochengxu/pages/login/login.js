// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    type:'login',
    user:"",
    upwd:"",
    code:"",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  handleClick(e){
    this.setData({
      user:"",
      upwd:"",
      type:e.currentTarget.dataset.type
    });
  },
  handleBack(){
    wx.switchTab({url:"/pages/home/home"});
  },
  getUser(e){
    this.setData({user:e.detail.value});
  },
  getUpwd(e){
    this.setData({upwd:e.detail.value});
  },
  getCode(e){
    this.setData({code:e.detail.value});
  },
  handleLogin(){
    console.log(this.data);
    wx.showLoading({title: '登录中'});
    setTimeout(function () {
      wx.hideLoading()
    }, 2000);
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
  onPullDownRefresh: function () {

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

  }
})