Page({
  data: {
    questions: [
      {q:'在社交活动或与人长时间相处后，你通常感觉：', a:'精力充沛，还想继续聊下去。', b:'有点累，需要独处或安静休息来恢复。', c:'不确定，取决于活动性质和对象。'},
      {q:'当你思考问题或需要做决定时，你倾向于：', a:'先说出来，通过与人讨论来理清思路。', b:'先自己静下来想清楚，再和别人交流。', c:'两者都有可能，看情况。'},
      {q:'你更喜欢如何度过周末晚上？', a:'参加聚会、和朋友聚餐、看演出等热闹的活动。', b:'在家看书、看电影、做点自己喜欢的事，或者和一两个密友安静相处。', c:'都可能，看心情和邀约。'},
      {q:'认识新朋友时，你通常是：', a:'主动打招呼、开启话题的一方。', b:'等待对方先开口，或者观察一会儿再参与。', c:'有时主动有时被动。'},
      {q:'在团队中，你更常扮演的角色是：', a:'积极参与讨论，表达想法，带动气氛。', b:'倾听、观察，在深思熟虑后提出建议。', c:'角色不固定。'},
      {q:'你更相信或依赖：', a:'具体的经验、实际看到/听到/触摸到的事实和数据。', b:'灵感、可能性、事物的含义、模式和背后的联系。', c:'两者都很重要。'},
      {q:'描述事物时，你更倾向于：', a:'使用具体、细节性的语言，描述实际发生或看到的情况。', b:'使用比喻、象征或概述性的语言，描述其意义或可能性。', c:'看描述的对象和目的。'},
      {q:'学习新技能时，你更喜欢：', a:'有清晰的步骤说明，动手实践，边做边学。', b:'先理解背后的原理和整体框架，再尝试操作。', c:'都需要。'},
      {q:'当看一部电影或读一本书时，什么更能吸引你？', a:'生动的画面、逼真的细节、流畅的情节发展。', b:'深刻的主题、巧妙的象征、角色复杂的内心世界或未来的可能性。', c:'都吸引，取决于作品类型。'},
      {q:'规划旅行时，你更关注：', a:'具体的行程安排、酒店预订、交通方式、景点开放时间等细节。', b:'旅行的整体体验、文化氛围、可能遇到的奇遇或学习机会。', c:'都需要考虑，但侧重点可能不同。'},
      {q:'做重要决定时，你最主要的依据是：', a:'逻辑分析、客观事实、利弊权衡、公平性原则。', b:'个人价值观、对他人感受的影响、和谐关系、同理心。', c:'两者都会考虑，但最终偏向某一边。'},
      {q:'当需要批评他人或指出问题时，你更在意：', a:'批评是否准确、公正、有道理，能帮助对方改进。', b:'批评的方式是否会伤害对方感情，如何让对方更容易接受。', c:'都重要，但有时不得不取舍。'},
      {q:'在争论中，说服对方时，你更常使用：', a:'逻辑推理、数据证据、分析漏洞。', b:'情感诉求、价值观共鸣、强调共同利益。', c:'看争论的主题和对象。'},
      {q:'你认为一个"好"的决定应该是：', a:'理性上站得住脚，经得起推敲，结果有效。', b:'符合内心信念，顾及到相关人的感受，大家能接受。', c:'理想状态是两者兼顾。'},
      {q:'面对一个哭泣的朋友，你本能的第一反应更可能是：', a:'分析问题出在哪里，思考如何解决它。', b:'感同身受，提供情感安慰和支持。', c:'两者都会做，但顺序或侧重不同。'},
      {q:'你更喜欢生活是：', a:'有计划、有组织、有条理、结果可预测。', b:'灵活、开放、留有选择余地、适应新变化。', c:'不同方面偏好不同。'},
      {q:'处理工作任务或作业时，你倾向于：', a:'尽早开始，制定计划，按部就班完成，不喜欢最后一刻赶工。', b:'在截止日期临近时效率更高，享受灵活调整的过程，保持开放性。', c:'视任务重要性和兴趣而定。'},
      {q:'面对一个突如其来的周末邀约（比如朋友临时叫你去玩），你更可能：', a:'有点犹豫或被打乱计划的感觉，可能需要调整原有安排。', b:'感到兴奋和乐于接受，觉得这是个意外的惊喜。', c:'看具体是什么邀约以及当时的心情。'},
      {q:'你的工作/学习空间通常是：', a:'比较整洁有序，东西有固定的位置。', b:'看起来有点乱（但你通常知道东西在哪），有随性摆放的感觉。', c:'介于两者之间，某些区域有序，某些区域较乱。'},
      {q:'你认为"计划"最重要的作用是：', a:'提供方向、减少不确定性、确保任务按时完成。', b:'作为初始的指引，但实际情况变化时需要随时调整，甚至放弃。', c:'两者都有道理。'}
    ],
    current: 0,
    answers: [],
    showResult: false,
    mbtiType: '',
    showDetail: false,
    mbtiDetail: {},
    mbtiMap: {
      'INFP': { name: '调停者', desc: '理想主义、富有同情心，喜欢帮助他人，追求内心和谐。', feature: '善于倾听，富有想象力，重视个人价值观。', img: '/assets/mbti/INFP.png' },
      'INFJ': { name: '提倡者', desc: '富有洞察力和理想主义，关心他人，追求意义。', feature: '有远见，善于共情，喜欢深度交流。', img: '/assets/mbti/INFJ.png' },
      'ENFP': { name: '竞选者', desc: '充满热情和创造力，善于激励他人。', feature: '外向，乐观，喜欢探索新事物。', img: '/assets/mbti/ENFP.png' },
      'ENFJ': { name: '主人公', desc: '富有魅力，善于沟通，乐于助人。', feature: '领导力强，关心集体，善于激励。', img: '/assets/mbti/ENFJ.png' },
      'INTJ': { name: '建筑师', desc: '独立思考，善于规划，追求效率。', feature: '逻辑性强，目标明确，喜欢创新。', img: '/assets/mbti/INTJ.png' },
      'INTP': { name: '逻辑学家', desc: '理性分析，喜欢探索理论和原理。', feature: '好奇心强，善于思考，追求真理。', img: '/assets/mbti/INTP.png' },
      'ENTJ': { name: '指挥官', desc: '果断自信，善于组织和管理。', feature: '目标导向，领导能力强，喜欢挑战。', img: '/assets/mbti/ENTJ.png' },
      'ENTP': { name: '辩论家', desc: '机智幽默，善于创新和辩论。', feature: '思维敏捷，喜欢挑战权威。', img: '/assets/mbti/ENTP.png' },
      'ISFJ': { name: '守护者', desc: '温和细心，乐于助人，重视传统。', feature: '责任心强，注重细节，忠诚可靠。', img: '/assets/mbti/ISFJ.png' },
      'ISFP': { name: '探险家', desc: '安静友善，喜欢自由和美好事物。', feature: '感性，适应力强，追求和谐。', img: '/assets/mbti/ISFP.png' },
      'ESFJ': { name: '执政官', desc: '热心助人，重视秩序和团队。', feature: '善于协调，乐于服务，注重人际关系。', img: '/assets/mbti/ESFJ.png' },
      'ESFP': { name: '表演者', desc: '活泼开朗，喜欢娱乐和社交。', feature: '乐观，享受当下，感染力强。', img: '/assets/mbti/ESFP.png' },
      'ISTJ': { name: '物流师', desc: '务实可靠，注重规则和细节。', feature: '有条理，责任心强，执行力高。', img: '/assets/mbti/ISTJ.png' },
      'ISTP': { name: '鉴赏家', desc: '冷静理性，善于动手和解决问题。', feature: '独立，适应力强，喜欢尝试。', img: '/assets/mbti/ISTP.png' },
      'ESTJ': { name: '总经理', desc: '果断实际，擅长管理和组织。', feature: '讲原则，执行力强，注重效率。', img: '/assets/mbti/ESTJ.png' },
      'ESTP': { name: '企业家', desc: '充满活力，喜欢冒险和挑战。', feature: '行动力强，善于应变，喜欢刺激。', img: '/assets/mbti/ESTP.png' }
    }
  },
  chooseOption(e) {
    this.setData({
      answers: [...this.data.answers.slice(0, this.data.current), e.currentTarget.dataset.opt, ...this.data.answers.slice(this.data.current+1)]
    });
  },
  nextQuestion() {
    if (!this.data.answers[this.data.current]) {
      wx.showToast({ title: '请选择答案', icon: 'none' });
      return;
    }
    if (this.data.current < this.data.questions.length - 1) {
      this.setData({ current: this.data.current + 1 });
    } else {
      this.calcMBTI();
    }
  },
  calcMBTI() {
    // 4维度，每5题一组
    const dim = [0,0,0,0]; // 0:A, 1:B
    for(let i=0;i<4;i++){
      let a=0,b=0;
      for(let j=0;j<5;j++){
        const ans = this.data.answers[i*5+j];
        if(ans==='A') a++;
        if(ans==='B') b++;
      }
      dim[i] = a > b ? 'A' : 'B';
    }
    // E/I S/N T/F J/P
    const map = [ ['E','I'], ['S','N'], ['T','F'], ['J','P'] ];
    let mbti = '';
    for(let i=0;i<4;i++) mbti += map[i][dim[i]==='A'?0:1];
    this.setData({
      showResult: true,
      mbtiType: mbti
    });
    wx.setStorageSync('user_mbti_' + (wx.getStorageSync('openid') || 'default'), mbti); // 账号隔离
  },
  onResultAction(e) {
    const action = e.currentTarget.dataset.action;
    if(action === 'home') {
      wx.switchTab({ url: '/pages/index/index' });
    } else if(action === 'detail') {
      const mbti = this.data.mbtiType;
      this.setData({
        showDetail: true,
        mbtiDetail: this.data.mbtiMap[mbti] || {}
      });
    }
  },
  closeDetail() {
    this.setData({ showDetail: false });
  }
}); 