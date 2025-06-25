Page({
  data: {
    selected: ''
  },
  selectEmotion(e) {
    const type = e.currentTarget.dataset.type;
    this.setData({ selected: type });
  },
  confirmSelect() {
    if (!this.data.selected) {
      wx.showToast({ title: '请选择心情', icon: 'none' });
      return;
    }
    // 保存今日心情到本地
    const now = new Date();
    const key = `emotion_${now.getFullYear()}_${now.getMonth()+1}_${now.getDate()}`;
    wx.setStorageSync(key, this.data.selected);
    wx.navigateBack();
    // 返回主页后强制刷新主页数据
    const pages = getCurrentPages();
    if (pages.length > 1) {
      const prevPage = pages[pages.length - 2];
      if (prevPage && prevPage.onShow) prevPage.onShow();
    }
  }
});

// 假设你将图片保存为 /assets/treehole_avatar.png
const TREEHOLE_AVATAR = '/assets/treehole_avatar.png'; 