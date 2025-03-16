Page({
  data: {
      herbs: [
          { id: 1, image: '/images/1.jpg', name: 'A' },
          { id: 2, image: '/images/2.png', name: '薄荷' },
          { id: 3, image: '/images/3.jpeg', name: '人参' },
          { id: 4, image: '/images/4.jpg', name: '枸杞' },
          { id: 5, image: '/images/5.png', name: '黄芪' },
          { id: 6, image: '/images/6.jpg', name: '丹参' },
          { id: 7, image: '/images/7.jpg', name: '枇杷' },
          { id: 8, image: '/images/8.jpg', name: '当归' },
          { id: 9, image: '/images/9.jpg', name: '天麻' },
          { id: 10, image: '/images/10.jpg', name: 'Bc' },
      ],
      originalHerbs: [], // 新增属性
      letters: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'], // 字母索引
      searchQuery: '',
  },

  navigateToDetail(event) {
      const herbId = event.currentTarget.dataset.id;
      wx.navigateTo({
          url: `/pages/herbs/herbs?id=${herbId}`
      });
  },

  onSearchInput(event) {
      const query = event.detail.value;
      this.setData({
          searchQuery: query
      });
      console.log("Search Query:", query); // 调试输出
      if (query) {
          this.filterHerbs(query);
      } else {
          // 如果搜索框为空，恢复原始药材列表
          this.setData({
              herbs: this.data.originalHerbs
          });
      }
  },

  filterHerbs(query) {
      const filteredHerbs = this.data.originalHerbs.filter(herb => 
          herb.name.toLowerCase().includes(query.toLowerCase())
      );
      this.setData({
          herbs: filteredHerbs
      });
  },

  onIndexClick(event) {
      const letter = event.currentTarget.dataset.letter;
      const herbs = this.data.originalHerbs.filter(herb => 
          herb.name.charAt(0).toUpperCase() === letter
      );
      this.setData({
          herbs: herbs
      });
  },

  onLoad(options) {
      this.setData({
          originalHerbs: this.data.herbs // 保存原始药材列表
      });
  },
});