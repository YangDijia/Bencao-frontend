// detail.js
Page({
  data: {
    herbDetail: null // 存储药材详情数据
  },

  onLoad(options) {
    const id = options.id; // 接收传递的id
    console.log(id);
    this.loadHerbDetail(id);
  },

  loadHerbDetail(id) {
    wx.showLoading({ title: '加载中...' }); // 显示加载提示
  
    wx.request({
      url: `http://10.122.241.21:3000/api/herbs/${id}`, // 替换为实际API地址
      method: 'GET',
      success: (res) => {
        if (res.statusCode === 200) {
          this.setData({ herbDetail: res.data });
        } else {
          wx.showToast({ title: '数据加载失败', icon: 'error' });
        }
      },
      fail: (err) => {
        wx.showToast({ title: '网络错误', icon: 'none' });
      },
      complete: () => {
        wx.hideLoading(); // 隐藏加载提示
      }
    });
  }
});

// detail.js
