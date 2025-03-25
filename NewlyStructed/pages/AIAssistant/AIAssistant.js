// pages/chat/chat.js
Page({
  data: { messages: [], inputText: '', isLoading: false },

  async callDeepSeekAPI(prompt) {
    try {
      const res = await wx.request({
        url: 'https://api.deepseek.com/v1/chat/completions',
        method: 'POST',
        header: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer sk-6658abd800cf4b6285e8c38335c3f04f',
          'Accept': 'application/json'
        },
        data: {
          model: "deepseek-chat",
          messages: [{ role: "user", content: prompt }],
          temperature: 0.7
        },
        timeout: 10000
      });

      console.log('[请求参数]', {
        url: 'https://api.deepseek.com/v1/chat/completions',
        data: { model: "deepseek-chat", messages: [ 
          { role: "system", content: "你是一个 AI 助手" },
          { role: "user", content: "如何学习编程？" }] }
      });
      console.log('[原始响应]', res);
  
      // --- 状态码处理优化 ---
      if (res.statusCode !== 200) {
        const errorMsg = res.data?.error?.message 
          || `未知错误（状态码：${res.statusCode}）`;
        throw new Error(`API 错误：${errorMsg}`);
      }
  
      return res.data.choices[0].message.content;
    } catch (err) {
      // --- 错误对象增强 ---
      console.error('[完整错误]', {
        message: err.message,
        stack: err.stack,
        request: err.errMsg // 微信特有错误信息
      });
      return "服务异常，请检查控制台日志";
    }
  },

  async sendMessage() {
    if (!this.data.inputText.trim()) return;
    
    this.setData({ isLoading: true });
    
    const newMessages = [...this.data.messages, 
      { id: Date.now(), role: 'user', content: this.data.inputText }
    ];
    this.setData({ messages: newMessages, inputText: '' });

    try {
      const answer = await this.callDeepSeekAPI(this.data.inputText);
      this.setData({
        messages: [...newMessages, 
          { id: Date.now(), role: 'assistant', content: answer }
        ]
      });
    } catch (err) {
      wx.showToast({ title: '服务异常', icon: 'none' });
    } finally {
      this.setData({ isLoading: false });
    }
  },

  onInput(e) {
    this.setData({ inputText: e.detail.value });
  }
});