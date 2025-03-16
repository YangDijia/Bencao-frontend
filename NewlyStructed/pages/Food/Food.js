// pages/Food/Food.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 预定义的组件数据，包括 id 和其他信息
    items: [
      { id: 1, image: "/images/2.png", name: '名称1' },
      { id: 2, image: "/images/2.png", name: '名称2' },
      { id: 3, image: "/images/2.png", name: '名称3' },
      { id: 4, image: "/images/2.png", name: '名称4' },
      { id: 5, image: "/images/2.png", name: '名称5' }
    ]
  },

  // 跳转到 detail 页面，并传递 id
  navigateToDetail: function (e) {
    const id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: `/pages/HerbalCuisine-detail/HerbalCuisine-detail?id=${id}`,
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