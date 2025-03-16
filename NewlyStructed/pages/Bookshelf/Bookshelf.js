// pages/Bookshelf/Bookshelf.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    books: [
      { id: 1, title: '书籍1', description: '书籍1的简介', image: '/images/6.jpg' },
      { id: 2, title: '书籍2', description: '书籍2的简介', image: '/images/6.jpg' },
      { id: 3, title: '书籍3', description: '书籍3的简介', image: '/images/6.jpg' },
      // 可以继续添加更多书籍数据
    ]
  },

  // 搜索输入变化时的处理函数
  onSearchInput(e) {
    const query = e.detail.value;
    // 这里你可以加入对查询内容的处理
    console.log('搜索内容:', query);
  },

  // 点击书籍项跳转到书籍详情页
  goToBookDetail(e) {
    const bookId = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: `/pages/Books-detail/Books-detail?id=${bookId}`
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