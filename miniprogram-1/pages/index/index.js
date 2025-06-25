// index.js
const defaultAvatarUrl = 'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0'

Page({
  data: {
    motto: 'Hello World',
    userInfo: {
      avatarUrl: defaultAvatarUrl,
      nickName: '',
    },
    hasUserInfo: false,
    canIUseGetUserProfile: wx.canIUse('getUserProfile'),
    canIUseNicknameComp: wx.canIUse('input.type.nickname'),
    weekDays: [], // {date, week}
    weekRange: '',
    todayIndex: 0,
    userMbti: '',
    emotions: [],
  },
  onLoad() {
    const weekMap = ['日','一','二','三','四','五','六'];
    const now = new Date();
    const today = now.getDay();
    const days = [];
    // 获取本周周日日期
    const sunday = new Date(now);
    sunday.setDate(now.getDate() - today);
    for(let i=0;i<7;i++){
      const d = new Date(sunday);
      d.setDate(sunday.getDate()+i);
      days.push({
        date: d.getDate(),
        week: weekMap[i],
        month: d.getMonth() + 1
      });
    }
    // 本周范围 6.22-6.28
    const weekRange = `${days[0].month}.${days[0].date}-${days[6].month}.${days[6].date}`;
    // 今日索引
    const openid = wx.getStorageSync('openid') || 'default';
    const mbti = wx.getStorageSync('user_mbti_' + openid) || '';
    // 查询本周每天的心情
    const emotions = days.map(d => {
      const key = `emotion_${now.getFullYear()}_${now.getMonth()+1}_${d.date}`;
      return wx.getStorageSync(key) || '';
    });
    this.setData({
      weekDays: days,
      weekRange,
      todayIndex: today,
      userMbti: mbti,
      emotions
    });
  },
  onShow() {
    const openid = wx.getStorageSync('openid') || 'default';
    const mbti = wx.getStorageSync('user_mbti_' + openid) || '';
    // 刷新本周心情
    const weekMap = ['日','一','二','三','四','五','六'];
    const now = new Date();
    const today = now.getDay();
    const days = [];
    const sunday = new Date(now);
    sunday.setDate(now.getDate() - today);
    for(let i=0;i<7;i++){
      const d = new Date(sunday);
      d.setDate(sunday.getDate()+i);
      days.push({
        date: d.getDate(),
        week: weekMap[i],
        month: d.getMonth() + 1
      });
    }
    const emotions = days.map(d => {
      const key = `emotion_${now.getFullYear()}_${now.getMonth()+1}_${d.date}`;
      return wx.getStorageSync(key) || '';
    });
    this.setData({ userMbti: mbti, emotions });
  },
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onChooseAvatar(e) {
    const { avatarUrl } = e.detail
    const { nickName } = this.data.userInfo
    this.setData({
      "userInfo.avatarUrl": avatarUrl,
      hasUserInfo: nickName && avatarUrl && avatarUrl !== defaultAvatarUrl,
    })
  },
  onInputChange(e) {
    const nickName = e.detail.value
    const { avatarUrl } = this.data.userInfo
    this.setData({
      "userInfo.nickName": nickName,
      hasUserInfo: nickName && avatarUrl && avatarUrl !== defaultAvatarUrl,
    })
  },
  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },
  selectEmotion(e) {
    const type = e.currentTarget.dataset.type;
    // 这里可处理用户选择的情绪
    wx.showToast({ title: '选择：' + type, icon: 'none' });
  },
  goToEmotionSelect(e) {
    const index = e.currentTarget.dataset.index;
    wx.navigateTo({
      url: '/pages/emotionSelect/emotionSelect?index=' + index
    });
  },
  goToTest() {
    wx.navigateTo({
      url: '/pages/mbtiTest/mbtiTest',
    });
  },
  goToDetail() {
    wx.navigateTo({
      url: '/pages/mbtiDetail/index',
    });
  },
})
