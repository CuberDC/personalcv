import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// 英文翻译
const en = {
  translation: {
    // Greeting Section
    greeting: {
      username: "Ding Chao",
      title: "Software Product Assistant & Digital Transformation Expert",
      subTitle: "Dynamic, results-driven professional specializing in product management, with extensive experience bridging development teams and clients to ensure successful software delivery.",
      displayGreeting: true
    },
    
    // About Section
    about: {
      title: "About Me",
      description: "Dynamic, results-driven professional specializing in product management, with extensive experience bridging development teams and clients to ensure successful software delivery. Skilled in Axure, Power BI, and AI tools such as ChatGPT to align solutions with business goals. Strong leadership, client-communication, and project-coordination abilities focused on user-centric design and operational efficiency."
    },
    
    // Skills Section
    skills: {
      title: "Core Skills",
      subTitle: "PROFESSIONAL COMPETENCIES",
      skillsDescription: [
        "⚡ Digital Transformation: Enterprise architecture, lean methodology, data analytics, business intelligence",
        "⚡ Technical Tools: Axure, Power BI, Python, Excel, Word",
        "⚡ Soft Skills: Leadership, teamwork, strategic planning, user-focused design"
      ]
    },
    
    // Education Section
    education: {
      title: "Education",
      schools: [
        {
          schoolName: "Universiti Sains Malaysia",
          subHeader: "Master's in Digital Transformation",
          duration: "2023 – 2025",
          desc: "Full-time program covering data science, lean innovation, business intelligence, enterprise architecture, cybersecurity analysis, and decision-support research.",
          descBullets: [
            "Focus on data science and lean innovation",
            "Enterprise architecture and cybersecurity analysis",
            "Business intelligence and decision-support research"
          ]
        },
        {
          schoolName: "Suzhou University",
          subHeader: "Bachelor's in Software Engineering",
          duration: "2018 – 2020",
          desc: "Emphasized software development, system analysis, and digital-solution design.",
          descBullets: [
            "Software development and system analysis",
            "Digital solution design and implementation"
          ]
        }
      ]
    },
    
    // Work Experience Section
    workExperience: {
      title: "Work Experience",
      experience: [
        {
          role: "Product Manager",
          company: "Suzhou Yunyou Technology Co.",
          companylogo: require("./assets/images/facebookLogo.png"),
          date: "2021 – 2023",
          desc: "Led teams in designing and delivering scalable digital-transformation solutions",
          descBullets: [
            "Gathered client requirements and aligned software objectives with business needs",
            "Built software modules and prototypes to enhance operations and customer experience",
            "Delivered a 1 million RMB digital-transformation project on time and within budget",
            "Directed a 2.78 million RMB initiative that streamlined workflows and improved safety compliance",
            "Facilitated communication among development teams and stakeholders throughout project lifecycles"
          ]
        },
        {
          role: "Product Assistant",
          company: "Suzhou Bizcom Information Technology Co.",
          companylogo: require("./assets/images/airbnbLogo.png"),
          date: "2020 – 2021",
          desc: "Acted as liaison between internal teams and clients, ensuring seamless communication",
          descBullets: [
            "Helped design and deploy digital tools for online-education platforms",
            "Analyzed client feedback to refine features, increasing user engagement and satisfaction",
            "Supported expansion of the online-education market in lower-tier cities",
            "Assisted cross-functional teams to ensure timely delivery and alignment with client expectations"
          ]
        }
      ]
    },
    
    // Projects Section
    projects: {
      title: "Personal Projects（AI-driven）",
      subtitle: "INNOVATIVE SOLUTIONS I'VE BUILT",
      features: {
        title: "Key Features"
      },
      techStack: {
        title: "Technology Stack"
      },
      projects: [
        {
          projectName: "Electronic Psychological Scale System",
          projectDesc: "Flask + MySQL based hospital system for online psychological scale distribution, score collection and patient file management.",
          features: [
            "Patient information management",
            "Question bank & result visualization",
            "Multi-role permissions",
            "System logs & backup"
          ]
        },
        {
          projectName: "Facial Injection Record System",
          projectDesc: "FastAPI + React system for recording medical beauty patient facial injection areas and history.",
          features: [
            "Patient management",
            "Photo upload/preview",
            "Operation logs",
            "JWT authentication",
            "Multi-level users",
            "Automatic backup"
          ]
        },
        {
          projectName: "Real-time Facial Emotion Recognition System",
          projectDesc: "Flask + PyTorch/YOLO + React system for real-time face detection and emotion analysis with video recording and manual annotation.",
          features: [
            "Real-time recognition",
            "Video management",
            "Data annotation",
            "Statistical analysis",
            "Docker & manual deployment"
          ]
        }
      ]
    },
    
    // Company Projects Section
    companyProjects: {
      title: "Company Projects",
      subtitle: "PROFESSIONAL ENTERPRISE SOLUTIONS",
      features: {
        title: "Key Features"
      },
      techStack: {
        title: "Technology Stack"
      },
      projects: [
        {
          projectName: "Machine Section Data Center",
          displayName: "Machine Data Center",
          projectDesc: "Led informatization assessment of machining workshop and formulated comprehensive data integration plan.\n\nBuilt intelligent management platform integrating 50+ systems for centralized monitoring and analysis.\n\nDirected cross-departmental teams with customized tools to optimize operations.",
          duration: "May 2023 – Oct 2023",
          features: [
            "Led informatization assessment of machining workshop",
            "Built intelligent management platform integrating 50+ systems",
            "Implemented data center monitoring and analysis",
            "Led cross-departmental teams with customized permissions",
            "Supported troubleshooting and operational optimization"
          ],
          techStack: ["Power BI", "Python", "SQL Server", "Azure", "REST API"]
        },
        {
          projectName: "HSE Production Platform",
          displayName: "HSE Platform",
          projectDesc: "Built 3D safety monitoring dashboard for real-time production line safety status.\n\nImplemented comprehensive risk management including hazard control and environmental modules.\n\nWon RMB 2.78 million project bid and delivered core features successfully.",
          duration: "Nov 2022 – Apr 2023",
          features: [
            "Built 3D safety monitoring dashboard for real-time status",
            "Implemented risk classification control and hazard closed-loop",
            "Developed environmental protection and occupational health modules",
            "Won RMB 2.78 million project bid",
            "Responsible for core feature design and delivery"
          ],
          techStack: ["3D Modeling", "C#", ".NET Framework", "SQL Server", "Unity"]
        },
        {
          projectName: "Warehouse Management System Improvement",
          displayName: "WMS",
          projectDesc: "Integrated warehouse equipment and systems to streamline data flow and improve efficiency.\n\nDeveloped real-time monitoring solutions for inventory and order management.\n\nCreated analytics tools to support rapid management decision-making.",
          duration: "Oct 2021 – Nov 2021",
          features: [
            "Integrated warehouse equipment and systems",
            "Streamlined data flow for improved collaborative efficiency",
            "Developed real-time inventory and order monitoring",
            "Created reporting and analysis functions",
            "Assisted management in quick decision-making"
          ],
          techStack: ["Java", "Spring Boot", "MySQL", "Redis", "Kafka"]
        }
      ]
    },
    
    // Achievements Section
    achievements: {
      title: "Achievements And Certifications",
      subtitle: "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done!",
      achievementsCards: [
        {
          title: "Delivered RMB 1M Digital Transformation Project",
          subtitle: "On time and on budget, exceeding client KPIs by 12%."
        },
        {
          title: "Led RMB 2.78M Safety Compliance Initiative",
          subtitle: "Reduced safety incidents 28% across 6 facilities."
        },
        {
          title: "USM Best-Use-of-AI Award 2024",
          subtitle: "Recognised for ERP-integrated GPT-4 customer chatbot."
        }
      ]
    },
    
    // Proficiency Section
    proficiency: {
      title: "Proficiency",
      experience: [
        {
          Stack: "Product Strategy",
          progressPercentage: "95%"
        },
        {
          Stack: "AI Implementation",
          progressPercentage: "90%"
        },
        {
          Stack: "Digital Transformation",
          progressPercentage: "85%"
        }
      ]
    },
    
    // Contact Section
    contact: {
      title: "Contact Me",
      subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
      number: "+60-0178299352",
      email: "dingchaobazinga@gmail.com",
      location: "Penang, Malaysia",
      citizenship: "Chinese Citizen",
      languages: "English – Fluent, Mandarin – Native",
      emailText: "Send me an email"
    },
    
    // Footer
    footer: {
      text: "Made with ❤️ by"
    },
    
    // Navigation
    nav: {
      home: "Home",
      skills: "Core Capabilities",
      education: "Education",
      experience: "Experience",
      projects: "Featured Projects",
      achievements: "Achievements",
      blogs: "Blogs",
      talks: "Talks",
      contact: "Contact",
      resume: "Download my resume"
    }
  }
};

// 中文翻译
const zh = {
  translation: {
    // Greeting Section
    greeting: {
      username: "丁超",
      title: "软件产品助理和数字化转型专家",
      subTitle: "专业的产品管理专家，在连接开发团队和客户以确保软件成功交付方面拥有丰富经验。",
      displayGreeting: true
    },
    
    // About Section
    about: {
      title: "关于我",
      description: "专业的产品管理专家，在连接开发团队和客户以确保软件成功交付方面拥有丰富经验。精通Axure、Power BI和ChatGPT等AI工具，能够将解决方案与业务目标保持一致。具备强大的领导力、客户沟通和项目协调能力，专注于以用户为中心的设计和运营效率。"
    },
    
    // Skills Section
    skills: {
      title: "核心技能",
      subTitle: "专业能力",
      skillsDescription: [
        "⚡ 数字化转型：企业架构、精益方法论、数据分析、商业智能",
        "⚡ 技术工具：Axure、Power BI、Python、Excel、Word",
        "⚡ 软技能：领导力、团队合作、战略规划、以用户为中心的设计"
      ]
    },
    
    // Education Section
    education: {
      title: "教育经历",
      schools: [
        {
          schoolName: "马来西亚理科大学",
          subHeader: "数字化转型硕士",
          duration: "2023年 – 2025年",
          desc: "全日制课程，涵盖数据科学、精益创新、商业智能、企业架构、网络安全分析和决策支持研究。",
          descBullets: [
            "专注于数据科学和精益创新",
            "企业架构和网络安全分析",
            "商业智能和决策支持研究"
          ]
        },
        {
          schoolName: "苏州大学",
          subHeader: "软件工程学士",
          duration: "2018年 – 2020年",
          desc: "重点学习软件开发、系统分析和数字解决方案设计。",
          descBullets: [
            "软件开发和系统分析",
            "数字解决方案设计与实施"
          ]
        }
      ]
    },
    
    // Work Experience Section
    workExperience: {
      title: "工作经历",
      experience: [
        {
          role: "产品经理",
          company: "苏州运优科技有限公司",
          companylogo: require("./assets/images/facebookLogo.png"),
          date: "2021年 – 2023年",
          desc: "领导团队设计和交付可扩展的数字化转型解决方案",
          descBullets: [
            "收集客户需求并将软件目标与业务需求保持一致",
            "构建软件模块和原型以增强运营和客户体验",
            "按时按预算交付100万人民币数字化转型项目",
            "指导278万人民币项目，简化工作流程并改善安全合规性",
            "在整个项目生命周期中促进开发团队和利益相关者之间的沟通"
          ]
        },
        {
          role: "产品助理",
          company: "苏州百智通信息技术有限公司",
          companylogo: require("./assets/images/airbnbLogo.png"),
          date: "2020年 – 2021年",
          desc: "担任内部团队和客户之间的联络员，确保无缝沟通",
          descBullets: [
            "帮助设计和部署在线教育平台的数字工具",
            "分析客户反馈以完善功能，提高用户参与度和满意度",
            "通过创新产品策略支持低线城市在线教育市场的扩张",
            "协助跨职能团队确保及时交付并符合客户期望"
          ]
        }
      ]
    },
    
    // Projects Section
    projects: {
      title: "个人项目（AI驱动）",
      subtitle: "我构建的创新解决方案",
      features: {
        title: "核心功能"
      },
      techStack: {
        title: "技术栈"
      },
      projects: [
        {
          projectName: "电子心理量表系统",
          projectDesc: "基于Flask + MySQL的医院心理量表在线发放、评分收集和患者档案管理系统。",
          features: [
            "患者信息管理",
            "题库与结果可视化",
            "多角色权限管理",
            "系统日志与数据备份"
          ]
        },
        {
          projectName: "面部注射记录系统",
          projectDesc: "基于FastAPI + React的医美患者面部注射区域和历史记录管理系统。",
          features: [
            "患者信息管理",
            "照片上传与预览",
            "操作日志记录",
            "JWT身份验证",
            "多级用户权限",
            "自动数据备份"
          ]
        },
        {
          projectName: "实时人脸情绪识别系统",
          projectDesc: "基于Flask + PyTorch/YOLO + React的实时人脸检测和情绪分析系统，支持视频录制和手动标注。",
          features: [
            "实时情绪识别",
            "视频管理系统",
            "数据标注工具",
            "统计分析功能",
            "Docker容器化部署"
          ]
        }
      ]
    },
    
    // Company Projects Section
    companyProjects: {
      title: "公司项目",
      subtitle: "专业企业级解决方案",
      features: {
        title: "核心功能"
      },
      techStack: {
        title: "技术栈"
      },
      projects: [
        {
          projectName: "机器段数据中心",
          displayName: "机器数据中心",
          projectDesc: "主导机加车间信息化评估，制定系统与设备数据整合方案。\n\n搭建智能管理平台，整合五十多个系统实现集中监控与数据分析。\n\n牵头跨部门团队，定制工具支撑故障排查与运营优化。",
          duration: "2023年5月 – 2023年10月",
          features: [
            "主导机加车间信息化评估",
            "搭建智能管理平台，整合五十多个系统",
            "实现生产现场数据中台监控与数据分析",
            "牵头跨部门团队，定制权限与工具",
            "支撑故障排查与运营优化"
          ],
          techStack: ["Power BI", "Python", "SQL Server", "Azure", "REST API"]
        },
        {
          projectName: "HSE生产平台",
          displayName: "HSE平台",
          projectDesc: "构建3D安全监控大屏，实时掌握产线安全状态。\n\n落地综合风险管控体系，包含隐患闭环与环保模块。\n\n项目中标278万元，成功交付核心功能。",
          duration: "2022年11月 – 2023年4月",
          features: [
            "构建3D安全监控大屏，实时掌握产线安全状态",
            "落地风险分级管控、隐患闭环管理",
            "开发环保及职业健康模块",
            "项目中标278万RMB",
            "负责核心功能设计与交付"
          ],
          techStack: ["3D Modeling", "C#", ".NET Framework", "SQL Server", "Unity"]
        },
        {
          projectName: "仓库管理系统优化",
          displayName: "WMS",
          projectDesc: "整合仓储设备与系统，打通数据链路提升协同效率。\n\n开发库存与订单实时监控解决方案。\n\n创建分析工具支持管理层快速决策。",
          duration: "2021年10月 – 2021年11月",
          features: [
            "整合仓储设备与系统",
            "打通数据链路，提升协同效率",
            "开发库存与订单实时监控功能",
            "创建报表分析功能",
            "助管理层快捷决策"
          ],
          techStack: ["Java", "Spring Boot", "MySQL", "Redis", "Kafka"]
        }
      ]
    },
    
    // Achievements Section
    achievements: {
      title: "成就与认证",
      subtitle: "我获得的成就、认证、奖状和一些很酷的东西！",
      achievementsCards: [
        {
          title: "交付百万人民币数字化转型项目",
          subtitle: "按时按预算交付，客户KPI超出12%。"
        },
        {
          title: "领导278万人民币安全合规项目",
          subtitle: "在6个设施中将安全事故减少28%。"
        },
        {
          title: "USM 2024年最佳AI应用奖",
          subtitle: "因ERP集成的GPT-4客户聊天机器人而获得认可。"
        }
      ]
    },
    
    // Proficiency Section
    proficiency: {
      title: "技能熟练度",
      experience: [
        {
          Stack: "产品策略",
          progressPercentage: "95%"
        },
        {
          Stack: "AI实施",
          progressPercentage: "90%"
        },
        {
          Stack: "数字化转型",
          progressPercentage: "85%"
        }
      ]
    },
    
    // Contact Section
    contact: {
      title: "联系我",
      subtitle: "讨论项目或只是想打个招呼？我的收件箱对所有人开放。",
      number: "+60-0178299352",
      email: "dingchaobazinga@gmail.com",
      location: "Penang, Malaysia",
      citizenship: "Chinese Citizen",
      languages: "英语 – 流利，中文 – 母语",
      emailText: "发送邮件给我"
    },
    
    // Footer
    footer: {
      text: "用 ❤️ 制作 by"
    },
    
    // Navigation
    nav: {
      home: "首页",
      skills: "核心能力",
      education: "教育",
      experience: "经历",
      projects: "精选项目",
      achievements: "成就",
      blogs: "博客",
      talks: "演讲",
      contact: "联系",
      resume: "下载我的简历"
    }
  }
};

// 检测用户浏览器语言
const detectLanguage = () => {
  const browserLang = navigator.language || navigator.userLanguage;
  // 如果浏览器语言是中文相关，返回中文，否则返回英文
  if (browserLang.startsWith('zh')) {
    return 'zh';
  }
  return 'en';
};

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en,
      zh
    },
    lng: detectLanguage(), // 根据浏览器语言设置默认语言
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n; 