// pages/medicine/medicine.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    herbs: [
      { image: '/images/1.jpg' },
      { image: '/images/2.png' },
      { image: '/images/3.jpeg' },
      { image: '/images/4.jpg' },
      { image: '/images/5.png' },
      { image: '/images/6.jpg' },
      { image: '/images/7.jpg' },
      { image: '/images/8.jpg' },
      { image: '/images/9.jpg' },
      { image: '/images/10.jpg' },
    ]
  },
  navigateToDetail(event) {
    const index = event.currentTarget.dataset.index;
    wx.navigateTo({
      url: `/pages/herbs/herbs?index=${index}`
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})