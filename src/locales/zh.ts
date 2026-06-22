const zh = {
  nav: {
    solutions: "解决方案",
    features: "产品功能",
    howItWorks: "工作流程",
    pricing: "定价方案",
    contact: "联系我们",
    cta: "开始体验",
  },
  hero: {
    badge: "AI 驱动的智能商业平台",
    h1Line1: "连接智能",
    h1Line2: "驱动未来",
    sub: "FUCONNECT 以前沿 AI 技术为核心，为企业提供智能洞察、自动化运营与数据驱动的增长引擎，重新定义商业连接的方式。",
    explore: "立即探索",
    learnMore: "了解更多",
    console: {
      title: "FUCONNECT Intelligence Console",
      ai: "AI 处理中",
      rps: "请求/秒",
      nodes: "全球节点",
      datacenters: "数据中心",
      security: "安全等级",
      uptime: "正常运行",
      analyzing: "AI Agent 实时分析中...",
    },
  },
  solutions: {
    label: "解决方案",
    h2Line1: "为现代商业构建",
    h2Line2: "智能基础设施",
    sub: "六大核心模块，覆盖企业数字化转型的全链路需求",
    cards: [
      {
        title: "智能决策引擎",
        description: "基于深度学习的决策支持系统，实时分析海量数据，为企业提供精准的战略建议与风险预测。",
      },
      {
        title: "对话式 AI",
        description: "自然语言理解能力，支持多语言交互，打造智能客服、销售助手等企业级对话体验。",
      },
      {
        title: "数据洞察",
        description: "自动化的数据清洗、可视化分析与趋势预测，将原始数据转化为可执行的商业洞察。",
      },
      {
        title: "流程自动化",
        description: "AI 驱动的业务流程自动化，从文档处理到审批流，大幅释放团队生产力。",
      },
      {
        title: "知识图谱",
        description: "构建企业知识图谱，实现跨部门信息关联，让知识资产成为竞争优势的核心。",
      },
      {
        title: "API 集成",
        description: "灵活的 RESTful API 与 SDK，无缝集成现有系统，快速构建 AI 驱动的应用生态。",
      },
    ],
  },
  features: {
    label: "产品特性",
    h2Line1: "性能与安全",
    h2Line2: "缺一不可",
    sub: "我们坚信，最好的技术是无感的——它在那里，却从未打扰你",
    cards: [
      {
        title: "毫秒级响应",
        label: "平均延迟",
        description: "基于分布式架构与边缘计算，确保全球用户的极致体验",
      },
      {
        title: "企业级安全",
        label: "Type II 认证",
        description: "端到端加密、零信任架构，数据主权完全可控",
      },
      {
        title: "无限扩展",
        label: "自动扩容",
        description: "云原生架构，弹性伸缩，从容应对业务峰值",
      },
      {
        title: "实时同步",
        label: "数据同步",
        description: "跨系统数据实时同步，消除信息孤岛",
      },
      {
        title: "全链路透明",
        label: "可追溯",
        description: "每一个 AI 决策都有据可查，可解释、可审计",
      },
      {
        title: "个性化定制",
        label: "场景适配",
        description: "模块化设计，按需组合，打造专属 AI 解决方案",
      },
    ],
  },
  howItWorks: {
    label: "工作流程",
    h2Line1: "四步开启",
    h2Line2: "智能之旅",
    sub: "从数据到洞察，从洞察到行动，全程自动化，无需繁琐配置",
    steps: [
      {
        title: "数据接入",
        description:
          "通过 API、SDK 或连接器，将企业数据无缝接入 FUCONNECT 平台。支持结构化数据、非结构化文档、实时流数据。",
      },
      {
        title: "智能建模",
        description:
          "AI 自动识别数据模式，构建知识图谱，训练专属模型。无需人工特征工程，系统自动完成数据预处理与模型优化。",
      },
      {
        title: "部署上线",
        description:
          "一键部署到云端或私有化环境。支持 A/B 测试、灰度发布，确保业务平稳过渡。弹性扩容，自动应对流量峰值。",
      },
      {
        title: "持续优化",
        description:
          "系统自动监控模型性能，持续学习与迭代。通过反馈闭环，AI 不断自我进化，决策精度随时间提升。",
      },
    ],
  },
  pricing: {
    label: "定价方案",
    h2Line1: "透明定价",
    h2Line2: "按需选择",
    sub: "从免费开始，随业务增长灵活扩展",
    monthly: "月付",
    yearly: "年付",
    save: "省10%",
    popular: "最受欢迎",
    plans: [
      {
        name: "Starter",
        description: "适合初创团队与小型项目",
        price: { monthly: "0", yearly: "0" },
        unit: "永久免费",
        features: [
          "5,000 API 调用/月",
          "3 个数据连接器",
          "基础分析仪表盘",
          "社区支持",
          "标准 SLA",
        ],
        cta: "免费开始使用",
        popular: false,
      },
      {
        name: "Pro",
        description: "适合成长型企业",
        price: { monthly: "2,999", yearly: "2,699" },
        unit: "元/月",
        features: [
          "100,000 API 调用/月",
          "15 个数据连接器",
          "高级分析 + AI 预测",
          "自定义知识图谱",
          "优先技术支持",
          "99.9% SLA",
        ],
        cta: "立即升级",
        popular: true,
      },
      {
        name: "Enterprise",
        description: "适合大型组织与特殊需求",
        price: { monthly: "定制", yearly: "定制" },
        unit: "",
        features: [
          "无限 API 调用",
          "无限数据连接器",
          "私有云/私有化部署",
          "专属 AI 模型训练",
          "7×24 专属支持",
          "99.99% SLA",
          "SOC 2 审计报告",
        ],
        cta: "联系销售",
        popular: false,
      },
    ],
  },
  testimonials: {
    label: "客户评价",
    h2Line1: "他们正在使用",
    h2Line2: "FUCONNECT",
    items: [
      {
        quote:
          "FUCONNECT 彻底改变了我们的数据分析方式。以前需要数周的市场洞察，现在几小时就能生成。",
        author: "张明远",
        role: "CTO",
        company: "智联科技",
      },
      {
        quote:
          "对话式 AI 让我们的客户满意度提升了 40%。它真正理解用户的意图，而不是机械匹配关键词。",
        author: "李晓华",
        role: "产品总监",
        company: "云途物流",
      },
      {
        quote:
          "部署到私有化环境的过程非常顺利，安全团队完全满意。这是少数几个真正懂企业级需求的 AI 平台。",
        author: "王思远",
        role: "信息安全总监",
        company: "金盾保险",
      },
    ],
  },
  cta: {
    badge: "开启智能商业新时代",
    h2Line1: "准备好让 AI 驱动",
    h2Line2: "您的业务增长了吗？",
    sub: "加入 500+ 企业的行列，体验 FUCONNECT 带来的智能商业变革。免费试用，无需信用卡。",
    start: "免费开始",
    demo: "预约演示",
  },
  contact: {
    label: "联系我们",
    h2Line1: "让我们开始",
    h2Line2: "对话",
    sub: "无论是产品咨询、技术支持还是合作洽谈，我们都期待与您交流",
    addressLabel: "公司地址",
    emailLabel: "电子邮箱",
    form: {
      name: "姓名",
      namePlaceholder: "您的姓名",
      email: "电子邮箱",
      emailPlaceholder: "your@email.com",
      company: "公司名称",
      companyPlaceholder: "您的公司名称",
      message: "留言内容",
      messagePlaceholder: "请描述您的需求或问题...",
      submit: "发送消息",
      submitted: "已发送",
    },
  },
  footer: {
    tagline: "AI 驱动的智能商业平台，连接未来，驱动增长。",
    categories: {
      product: "产品",
      resources: "资源",
      company: "公司",
      legal: "法律",
    },
    links: {
      product: [
        { label: "解决方案", href: "#solutions" },
        { label: "产品功能", href: "#features" },
        { label: "API 文档", href: "#" },
        { label: "定价", href: "#pricing" },
      ],
      resources: [
        { label: "博客", href: "#" },
        { label: "案例研究", href: "#" },
        { label: "开发者中心", href: "#" },
        { label: "状态页", href: "#" },
      ],
      company: [
        { label: "关于我们", href: "#" },
        { label: "加入我们", href: "#" },
        { label: "新闻动态", href: "#" },
        { label: "联系我们", href: "#contact" },
      ],
      legal: [
        { label: "隐私政策", href: "#" },
        { label: "服务条款", href: "#" },
        { label: "Cookie 设置", href: "#" },
      ],
    },
  },
};

export default zh;

export type Locale = {
  nav: {
    solutions: string;
    features: string;
    howItWorks: string;
    pricing: string;
    contact: string;
    cta: string;
  };
  hero: {
    badge: string;
    h1Line1: string;
    h1Line2: string;
    sub: string;
    explore: string;
    learnMore: string;
    console: {
      title: string;
      ai: string;
      rps: string;
      nodes: string;
      datacenters: string;
      security: string;
      uptime: string;
      analyzing: string;
    };
  };
  solutions: {
    label: string;
    h2Line1: string;
    h2Line2: string;
    sub: string;
    cards: { title: string; description: string }[];
  };
  features: {
    label: string;
    h2Line1: string;
    h2Line2: string;
    sub: string;
    cards: { title: string; label: string; description: string }[];
  };
  howItWorks: {
    label: string;
    h2Line1: string;
    h2Line2: string;
    sub: string;
    steps: { title: string; description: string }[];
  };
  pricing: {
    label: string;
    h2Line1: string;
    h2Line2: string;
    sub: string;
    monthly: string;
    yearly: string;
    save: string;
    popular: string;
    plans: {
      name: string;
      description: string;
      price: { monthly: string; yearly: string };
      unit: string;
      features: string[];
      cta: string;
      popular: boolean;
    }[];
  };
  testimonials: {
    label: string;
    h2Line1: string;
    h2Line2: string;
    items: { quote: string; author: string; role: string; company: string }[];
  };
  cta: {
    badge: string;
    h2Line1: string;
    h2Line2: string;
    sub: string;
    start: string;
    demo: string;
  };
  contact: {
    label: string;
    h2Line1: string;
    h2Line2: string;
    sub: string;
    addressLabel: string;
    emailLabel: string;
    form: {
      name: string;
      namePlaceholder: string;
      email: string;
      emailPlaceholder: string;
      company: string;
      companyPlaceholder: string;
      message: string;
      messagePlaceholder: string;
      submit: string;
      submitted: string;
    };
  };
  footer: {
    tagline: string;
    categories: { product: string; resources: string; company: string; legal: string };
    links: {
      product: { label: string; href: string }[];
      resources: { label: string; href: string }[];
      company: { label: string; href: string }[];
      legal: { label: string; href: string }[];
    };
  };
};
