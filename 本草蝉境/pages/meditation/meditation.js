// pages/meditation/meditation.js
Page({
  data: {
    isPaused: false,
    isModalVisible: false,
    // 主页面的音频列表
    mainAudioList: [
      {
        id: 1,
        name: "人声",
        src: '/music/冥想语音指导.m4a',
        volume: 50,
        audioContext: null
      },
      {
        id: 2,
        name: "环境音",
        src: '/music/Eternal Blossoms.mp3',
        volume: 50,
        audioContext: null
      }
    ],
    // 更多设置页面的音频列表
    moreAudioList: [
      {
        id: 3,
        name: "小溪",
        src: '/music/小溪.mp3',
        volume: 50,
        audioContext: null
      },
      {
        id: 4,
        name: "捣药",
        src: '/music/捣药.mp3',
        volume: 50,
        audioContext: null
      },
      {
        id: 5,
        name: "木鱼、钵",
        src: '/music/木鱼、钵.mp3',
        volume: 50,
        audioContext: null
      },
      {
        id: 6,
        name: "雨",
        src: '/music/雨.mp3',
        volume: 50,
        audioContext: null
      }
    ]
  },
  showModal() {
    this.setData({
      isModalVisible: true
    });
  },

  // 隐藏模态框
  hideModal() {
    this.setData({
      isModalVisible: false
    });
  },
  onLoad() {
    // 初始化所有音频
    this.initAllAudio();
  },

  initAllAudio() {
    // 初始化主页面音频
    const mainAudioList = this.initAudioList(this.data.mainAudioList);
    // 初始化更多设置页面音频
    const moreAudioList = this.initAudioList(this.data.moreAudioList);

    this.setData({ 
      mainAudioList,
      moreAudioList
    });
  },

  initAudioList(audioList) {
    return audioList.map(audio => {
      const audioContext = wx.createInnerAudioContext();
      audioContext.src = audio.src;
      audioContext.loop = true;
      audioContext.volume = audio.volume / 100;
      audioContext.play();
      
      return {
        ...audio,
        audioContext
      };
    });
  },

  // 统一的音量控制函数
  onVolumeChange(event) {
    const volume = event.detail.value;
    const id = event.currentTarget.dataset.id;
    
    // 更新主页面音频列表
    const mainAudioList = this.data.mainAudioList.map(audio => {
      if (audio.id === id) {
        audio.audioContext.volume = volume / 100;
        return { ...audio, volume };
      }
      return audio;
    });

    // 更新更多设置页面音频列表
    const moreAudioList = this.data.moreAudioList.map(audio => {
      if (audio.id === id) {
        audio.audioContext.volume = volume / 100;
        return { ...audio, volume };
      }
      return audio;
    });

    this.setData({ 
      mainAudioList,
      moreAudioList
    });
  },

  onPause() {
    this.setData({
      isPaused: !this.data.isPaused
    });

    // 暂停/播放所有音频
    const handleAudio = (audioList) => {
      audioList.forEach(audio => {
        if (this.data.isPaused) {
          audio.audioContext.pause();
        } else {
          audio.audioContext.play();
        }
      });
    };

    handleAudio(this.data.mainAudioList);
    handleAudio(this.data.moreAudioList);

    wx.showToast({
      title: this.data.isPaused ? '已暂停' : '已继续',
      icon: 'none',
      duration: 2000
    });
  },

  onUnload() {
    // 释放所有音频资源
    [...this.data.mainAudioList, ...this.data.moreAudioList].forEach(audio => {
      if (audio.audioContext) {
        audio.audioContext.destroy();
      }
    });
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