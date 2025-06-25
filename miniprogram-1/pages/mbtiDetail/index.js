const mbtiMap = {
  INFP: { name: '调停者', desc: '理想主义、富有同情心，喜欢帮助他人，追求内心和谐。', img: '/assets/mbti/infp.png' },
  INFJ: { name: '提倡者', desc: '富有洞察力和理想主义，关心他人，追求意义。', img: '/assets/mbti/infj.png' },
  ENFP: { name: '竞选者', desc: '充满热情和创造力，善于激励他人。', img: '/assets/mbti/enfp.png' },
  ENFJ: { name: '主人公', desc: '富有魅力，善于沟通，乐于助人。', img: '/assets/mbti/enfj.png' },
  INTJ: { name: '建筑师', desc: '独立思考，善于规划，追求效率。', img: '/assets/mbti/intj.png' },
  INTP: { name: '逻辑学家', desc: '理性、好奇，喜欢探索新知，追求真理。', img: '/assets/mbti/intp.png' },
  ENTJ: { name: '指挥官', desc: '天生领导者，善于制定战略，目标明确。', img: '/assets/mbti/entj.png' },
  ENTP: { name: '辩论家', desc: '思维敏捷，善于创新，喜欢挑战。', img: '/assets/mbti/entp.png' },
  ISFJ: { name: '守卫者', desc: '温和、细心，乐于助人，重视责任。', img: '/assets/mbti/isfj.png' },
  ISFP: { name: '探险家', desc: '温柔、实际，追求美和自由。', img: '/assets/mbti/isfp.png' },
  ESFJ: { name: '执政官', desc: '善于社交，乐于服务，重视和谐。', img: '/assets/mbti/esfj.png' },
  ESFP: { name: '表演者', desc: '热情、外向，喜欢娱乐和互动。', img: '/assets/mbti/esfp.png' },
  ISTJ: { name: '物流师', desc: '务实、可靠，重视秩序和规则。', img: '/assets/mbti/istj.png' },
  ISTP: { name: '鉴赏家', desc: '动手能力强，喜欢解决实际问题。', img: '/assets/mbti/istp.png' },
  ESTJ: { name: '总经理', desc: '组织能力强，注重效率和管理。', img: '/assets/mbti/estj.png' },
  ESTP: { name: '企业家', desc: '充满活力，善于应变，喜欢冒险。', img: '/assets/mbti/estp.png' }
};

Page({
  data: {
    mbtiList: []
  },

  onLoad() {
    const mbtiList = Object.entries(mbtiMap).map(([type, data]) => ({
      type,
      ...data
    }));
    
    this.setData({ mbtiList });
  },

  goToDetail(e) {
    const { type } = e.currentTarget.dataset;
    wx.navigateTo({
      url: `/pages/mbtiDetail/detail?type=${type}`
    });
  }
}); 