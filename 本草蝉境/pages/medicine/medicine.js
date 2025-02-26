// pages/medicine/medicine.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    herbs: [
      { id:1,image: '/images/1.jpg' },
      { id:2,image: '/images/2.png' },
      { id:3,image: '/images/3.jpeg' },
      { id:4,image: '/images/4.jpg' },
      { id:5,image: '/images/5.png' },
      { id:6,image: '/images/6.jpg' },
      { id:7,image: '/images/7.jpg' },
      { id:8,image: '/images/8.jpg' },
      { id:9,image: '/images/9.jpg' },
      { id:10,image: '/images/10.jpg' },
    ]
  },
  navigateToDetail(event) {
    const herb = event.currentTarget.dataset.herb;
    wx.navigateTo({
      url: `/pages/herbs/herbs?id=${herb.id}`
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