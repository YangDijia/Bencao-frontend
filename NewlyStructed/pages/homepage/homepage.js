Page({
  
  data: {},
  
  goToMedicine() {
    wx.navigateTo({
      url: '/pages/medicine/medicine',
    });
  },
  goToFood() {
    wx.navigateTo({
      url: '/pages/Food/Food',
    });
  },
  goToStore() {
    wx.navigateTo({
      url: '/pages/Store/Store',
    });
  },
  goToAIAssistant() {
    wx.navigateTo({
      url: '/pages/AIAssistant/AIAssistant',
    });
  },
  goToBookshelf() {
    wx.navigateTo({
      url: '/pages/Bookshelf/Bookshelf',
    });
  },
  goToElse() {
    wx.navigateTo({
      url: '/pages/Else/Else',
    });
  },
});
