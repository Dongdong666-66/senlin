Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    version: '1.0',
    openid: ''
  },
  onLoad() {
    const userInfo = wx.getStorageSync('userInfo') || {};
    const openid = wx.getStorageSync('openid') || '';
    this.setData({
      userInfo,
      hasUserInfo: !!userInfo.nickName,
      openid
    });
  },
  onShow() {
    const userInfo = wx.getStorageSync('userInfo') || {};
    const openid = wx.getStorageSync('openid') || '';
    this.setData({
      userInfo,
      hasUserInfo: !!userInfo.nickName,
      openid
    });
  },
  onLogin() {
    wx.getUserProfile({
      desc: '用于显示微信头像和昵称',
      success: (res) => {
        wx.setStorageSync('userInfo', res.userInfo);
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        });
        wx.showToast({ title: '登录成功', icon: 'success' });
      },
      fail: () => {
        wx.showToast({ title: '授权失败', icon: 'none' });
      }
    });
  },
  onFeedback() {
    wx.showModal({
      title: '意见反馈',
      editable: true,
      placeholderText: '请输入您的宝贵意见',
      success: (res) => {
        if (res.confirm && res.content) {
          wx.showToast({ title: '感谢您的反馈！', icon: 'success' });
        }
      }
    });
  },
  onCheckUpdate() {
    wx.showToast({ title: '已是最新版本', icon: 'none' });
  },
  onSwitchAccount() {
    wx.removeStorageSync('openid');
    wx.removeStorageSync('userInfo');
    this.setData({
      userInfo: {},
      hasUserInfo: false,
      openid: ''
    });
    wx.showToast({ title: '请重新登录微信账号', icon: 'none' });
  },
  onLogout() {
    wx.removeStorageSync('openid');
    wx.removeStorageSync('userInfo');
    this.setData({
      userInfo: {},
      hasUserInfo: false,
      openid: ''
    });
    wx.showToast({ title: '已退出登录', icon: 'none' });
  }
}); 