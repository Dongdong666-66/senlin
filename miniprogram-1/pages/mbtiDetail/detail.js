const mbtiMap = {
  INFP: {
    name: '调停者',
    desc: '理想主义、富有同情心，喜欢帮助他人，追求内心和谐。内心世界丰富，重视个人价值观，善于倾听和共情。',
    feature: '内向、敏感、创造力强、追求意义、容易共情。',
    jobs: ['作家', '心理咨询师', '教师', '社会工作者', '艺术家'],
    img: '/assets/mbti/infp.png'
  },
  INFJ: {
    name: '提倡者',
    desc: '富有洞察力和理想主义，关心他人，追求意义。善于共情，有远见，喜欢深度交流。',
    feature: '理想主义、洞察力强、同理心、追求意义、喜欢帮助他人。',
    jobs: ['心理咨询师', '作家', '教育者', '社会工作者', '艺术家'],
    img: '/assets/mbti/infj.png'
  },
  ENFP: {
    name: '竞选者',
    desc: '充满热情和创造力，善于激励他人。外向乐观，喜欢探索新事物。',
    feature: '外向、乐观、创造力强、善于沟通、喜欢新鲜事物。',
    jobs: ['公关', '市场策划', '作家', '心理咨询师', '教育者'],
    img: '/assets/mbti/enfp.png'
  },
  ENFJ: {
    name: '主人公',
    desc: '富有魅力，善于沟通，乐于助人。领导力强，关心集体，善于激励。',
    feature: '外向、领导力、善于沟通、关心他人、组织能力强。',
    jobs: ['教师', '心理咨询师', '管理者', '公关', '社会活动家'],
    img: '/assets/mbti/enfj.png'
  },
  INTJ: {
    name: '建筑师',
    desc: '独立思考，善于规划，追求效率。逻辑性强，目标明确，喜欢创新。',
    feature: '理性、独立、目标导向、善于分析、喜欢创新。',
    jobs: ['科学家', '工程师', '战略顾问', '项目经理', '作家'],
    img: '/assets/mbti/intj.png'
  },
  INTP: {
    name: '逻辑学家',
    desc: '理性、好奇，喜欢探索新知，追求真理。善于分析，喜欢独立思考。',
    feature: '逻辑思维、好奇心、独立、创新、喜欢理论。',
    jobs: ['研究员', '程序员', '工程师', '作家', '大学教授'],
    img: '/assets/mbti/intp.png'
  },
  ENTJ: {
    name: '指挥官',
    desc: '天生领导者，善于制定战略，目标明确。果断理性，喜欢掌控全局。',
    feature: '领导力、果断、理性、组织能力强、目标导向。',
    jobs: ['企业高管', '项目经理', '律师', '管理顾问', '创业者'],
    img: '/assets/mbti/entj.png'
  },
  ENTP: {
    name: '辩论家',
    desc: '思维敏捷，善于创新，喜欢挑战。喜欢辩论，适应力强。',
    feature: '创新、善于表达、适应力强、喜欢挑战、逻辑思维。',
    jobs: ['创业者', '市场策划', '律师', '记者', '产品经理'],
    img: '/assets/mbti/entp.png'
  },
  ISFJ: {
    name: '守卫者',
    desc: '温和、细心，乐于助人，重视责任。注重细节，喜欢稳定。',
    feature: '责任心强、细致、温和、乐于助人、稳定。',
    jobs: ['护士', '教师', '行政人员', '社会工作者', '会计'],
    img: '/assets/mbti/isfj.png'
  },
  ISFP: {
    name: '探险家',
    desc: '温柔、实际，追求美和自由。喜欢艺术和自然，重视个人体验。',
    feature: '温柔、实际、审美、自由、适应力强。',
    jobs: ['设计师', '艺术家', '摄影师', '音乐家', '园艺师'],
    img: '/assets/mbti/isfp.png'
  },
  ESFJ: {
    name: '执政官',
    desc: '善于社交，乐于服务，重视和谐。喜欢帮助他人，组织能力强。',
    feature: '社交能力强、乐于助人、组织力、责任心、和谐。',
    jobs: ['教师', '护士', '行政人员', '客户经理', '活动策划'],
    img: '/assets/mbti/esfj.png'
  },
  ESFP: {
    name: '表演者',
    desc: '热情、外向，喜欢娱乐和互动。善于表达，喜欢生活。',
    feature: '外向、热情、表达力强、喜欢互动、乐观。',
    jobs: ['演员', '主持人', '销售', '公关', '旅游顾问'],
    img: '/assets/mbti/esfp.png'
  },
  ISTJ: {
    name: '物流师',
    desc: '务实、可靠，重视秩序和规则。注重细节，喜欢计划。',
    feature: '务实、可靠、细致、守纪律、计划性强。',
    jobs: ['会计', '工程师', '行政人员', '法务', '项目经理'],
    img: '/assets/mbti/istj.png'
  },
  ISTP: {
    name: '鉴赏家',
    desc: '动手能力强，喜欢解决实际问题。适应力强，喜欢探索。',
    feature: '动手能力、适应力、独立、喜欢探索、实际。',
    jobs: ['工程师', '机械师', '飞行员', '运动员', '摄影师'],
    img: '/assets/mbti/istp.png'
  },
  ESTJ: {
    name: '总经理',
    desc: '组织能力强，注重效率和管理。喜欢制定规则，执行力强。',
    feature: '组织力、执行力、责任心、务实、领导力。',
    jobs: ['管理者', '项目经理', '公务员', '法务', '企业高管'],
    img: '/assets/mbti/estj.png'
  },
  ESTP: {
    name: '企业家',
    desc: '充满活力，善于应变，喜欢冒险。喜欢挑战和新鲜事物。',
    feature: '活力、应变力、冒险、外向、喜欢挑战。',
    jobs: ['销售', '创业者', '运动员', '市场经理', '救援人员'],
    img: '/assets/mbti/estp.png'
  },
}
const mbtiList = Object.keys(mbtiMap).map(type => ({ type, ...mbtiMap[type] }))
function chunkArray(arr, size) {
  const res = []
  for (let i = 0; i < arr.length; i += size) {
    res.push(arr.slice(i, i + size))
  }
  return res
}
Page({
  data: {
    mbti: {},
    type: ''
  },
  onLoad(query) {
    const type = query.type || 'INFP'; // 默认值
    const mbtiData = mbtiMap[type] || {};
    this.setData({
      type: type,
      mbti: mbtiData
    });

    if (mbtiData.name) {
      wx.setNavigationBarTitle({
        title: `${mbtiData.name} (${type})`
      });
    }
  }
}) 