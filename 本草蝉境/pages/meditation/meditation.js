// pages/meditation/meditation.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    voiceVolume: 0,  // 人声音量
    ambientVolume: 50,  // 环境声音量
    isPaused: false,  // 暂停状态
    voiceAudio: null,  // 人声音频实例
    ambientAudio: null,  // 环境声音频实例
  },
  onLoad() {
    // 初始化音频实例
    this.setData({
      voiceAudio: wx.createInnerAudioContext(),
      ambientAudio: wx.createInnerAudioContext(),
    });

    // 设置音频源
    this.data.voiceAudio.src = '/music/冥想语音指导.m4a';
    this.data.ambientAudio.src = '/music/Eternal Blossoms.mp3';

    // 设置初始音量 
    this.data.voiceAudio.volume = this.data.voiceVolume / 100;
    this.data.ambientAudio.volume = this.data.ambientVolume / 100;

    // 播放音频
    this.data.voiceAudio.play();
    this.data.ambientAudio.play();
  },
  onVoiceVolumeChange(event) {
    const volume = event.detail.value;
    this.setData({
      voiceVolume: volume
    });
    this.data.voiceAudio.volume = volume / 100;  // 更新人声音量
  },
  onAmbientVolumeChange(event) {
    const volume = event.detail.value;
    this.setData({
      ambientVolume: volume
    });
    this.data.ambientAudio.volume = volume / 100;  // 更新环境声音量
  },
  
  onPause() {
    this.setData({
      isPaused: !this.data.isPaused
    });
    if (this.data.isPaused) {
      this.data.voiceAudio.pause();
      this.data.ambientAudio.pause();
      wx.showToast({
        title: '已暂停',
        icon: 'none',
        duration: 2000
      });
    } else {
      this.data.voiceAudio.play();
      this.data.ambientAudio.play();
      wx.showToast({
        title: '已继续',
        icon: 'none',
        duration: 2000
      });
    }
  },
  onUnload() {
    // 页面卸载时释放音频资源
    this.data.voiceAudio.destroy();
    this.data.ambientAudio.destroy();
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