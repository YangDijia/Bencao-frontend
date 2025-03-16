// pages/Store/Store.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    products: [
      { id: 1, name: '药材1', price: '¥100', image: '/images/5.png' },
      { id: 2, name: '药材2', price: '¥150', image: '/images/5.png' },
      { id: 3, name: '药材3', price: '¥200', image: '/images/5.png' },
      { id: 4, name: '药材4', price: '¥120', image: '/images/5.png' },
      { id: 5, name: '药材5', price: '¥90', image: '/images/5.png' },
      { id: 6, name: '药材6', price: '¥130', image: '/images/5.png' },
      { id: 7, name: '药材7', price: '¥180', image: '/images/5.png' },
      { id: 8, name: '药材8', price: '¥110', image: '/images/5.png' },
      { id: 9, name: '药材9', price: '¥140', image: '/images/5.png' },
      { id: 10, name: '药材10', price: '¥160', image: '/images/5.png' }
    ]
  },

  // 点击图标的事件处理
  onIconClick: function () {
    wx.showToast({
      title: '图标点击',
      icon: 'none'
    });
  },

  // 跳转到商品详情页面并传递商品id
  navigateToDetail: function (e) {
    const id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: `/pages/Goods-detail/Goods-detail?id=${id}`
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