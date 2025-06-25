Page({
  data: {
    messages: [
      { role: 'bot', content: '你好，我是情绪树洞，有什么想说的都可以跟我说哟~' }
    ],
    inputValue: '',
    loading: false
  },
  onInput(e) {
    this.setData({ inputValue: e.detail.value });
  },
  onSend() {
    const val = this.data.inputValue.trim();
    if (!val || this.data.loading) return;
    const messages = this.data.messages.concat([{ role: 'user', content: val }]);
    this.setData({ messages, inputValue: '', loading: true });
    const that = this;
    wx.request({
      url: 'https://api.moonshot.cn/v1/chat/completions',
      method: 'POST',
      header: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer sk-Rle1jjN4X3Ow7u523GQeCK4vAEzSxVnBpOm7ycbWlp21pfPC'
      },
      timeout: 15000,
      data: {
        model: 'moonshot-v1-8k',
        messages: [
          { role: 'system', content: '你是一个温暖、善解人意的情绪树洞AI，请用简洁、温柔的语气回复用户的烦恼或心情。' },
          ...messages.map(m => ({ role: m.role === 'user' ? 'user' : 'assistant', content: m.content }))
        ],
        temperature: 0.7
      },
      success(res) {
        let reply = '';
        if (res.data && res.data.choices && res.data.choices[0] && res.data.choices[0].message && res.data.choices[0].message.content) {
          reply = res.data.choices[0].message.content.trim();
        } else {
          reply = '抱歉，树洞暂时没有回复，请稍后再试。';
        }
        that.setData({
          messages: that.data.messages.concat([{ role: 'bot', content: reply }]),
          loading: false
        });
        that.scrollToBottom && that.scrollToBottom();
      },
      fail() {
        that.setData({
          messages: that.data.messages.concat([{ role: 'bot', content: '连接失败，请稍后重试。' }]),
          loading: false
        });
        that.scrollToBottom && that.scrollToBottom();
      }
    });
  },
  scrollToBottom() {
    // 可选：如果你有scroll-view加ref，可以在这里实现自动滚动到底部
  }
}); 