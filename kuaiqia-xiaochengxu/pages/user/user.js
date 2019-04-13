// pages/user/user.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    try {
      wx.getStorage({
        key: "token",
        success(res) {
          console.log(res.data);
        },
        fail(err){
          //console.log(err);
          if(err.errMsg){
            //console.log('您暂未登录');
            wx.showToast({
              title: '您暂未登录,跳往登录',
              icon: 'none',
              duration: 2000,
              success(){
                wx.redirectTo({url:'/pages/login/login'});
              }
            })
          }
        }
      })
    }catch(e){
      console.log(e);
    }
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