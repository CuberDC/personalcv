/* Change this file to get your personal Portfolio */
// 修改此文件以获取您的个人作品集

// To change portfolio colors globally go to the  _globalColor.scss file
// 要全局更改作品集颜色，请转到 _globalColor.scss 文件

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen
const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

const illustration = {
  animated: true // Set to false to use static SVG
};

/* ===== 1. Top Hero / Greeting ===== */
export const greeting = {
  username: "Ding Chao", // 用户名
  title: "Product Manager & Digital Transformation Expert", // 产品经理和AI实施专家
  subTitle: emoji(
    "Delivering RMB 1M+ digital-transformation products and end-to-end Generative AI solutions. 🚀"
  ),
  resumeLink: "/resume.pdf", // 简历链接 - 放简历 PDF 到 public/
  portfolio_repository: "https://github.com/yourname/ai-portfolio", // 作品集仓库
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links | 社交媒体链接
const socialMediaLinks = {
  github: "https://github.com/saadpasta",
  linkedin: "https://www.linkedin.com/in/saadpasta/",
  gmail: "saadpasta70@gmail.com",
  gitlab: "https://gitlab.com/saadpasta",
  facebook: "https://www.facebook.com/saad.pasta7",
  medium: "https://medium.com/@saadpasta",
  stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  display: true // Set true to display this section, defaults to false
};

/* ===== 2. About / Summary ===== */
export const about = {
  title: "About Me",
  description: `Dynamic product manager specialising in digital transformation.
I lead cross-functional teams to ship ERP-integrated AI chatbots and BI dashboards,
cutting support response time 72% and saving USD 120K per year.
Skilled in Power BI, Prompt Engineering, and Lean Innovation, with a track
record of delivering RMB 1M and RMB 2.78M projects on time and on budget.`,
};

/* ===== 3. Core Capabilities (original Skills) ===== */
export const skills = {
  title: "Core Capabilities",
  subTitle: "PRODUCT MANAGER & AI IMPLEMENTER",
  skills: [
    emoji("⚡ Market sizing & road-mapping, stakeholder alignment & ROI modelling"),
    emoji("⚡ Prompt engineering & RAG pipelines (LangChain + Pinecone)"),
    emoji("⚡ Enterprise architecture & data lake design")
  ],
  softwareSkills: [
    { skillName: "Axure", fontAwesomeClassname: "fas fa-pencil-ruler" },
    { skillName: "Jira", fontAwesomeClassname: "fab fa-jira" },
    { skillName: "Power BI", fontAwesomeClassname: "fas fa-chart-bar" },
    { skillName: "OpenAI", fontAwesomeClassname: "fas fa-robot" },
    { skillName: "Python", fontAwesomeClassname: "fab fa-python" },
    { skillName: "LangChain", fontAwesomeClassname: "fas fa-link" },
    { skillName: "AWS", fontAwesomeClassname: "fab fa-aws" },
    { skillName: "Docker", fontAwesomeClassname: "fab fa-docker" },
    { skillName: "ChatGPT", fontAwesomeClassname: "fas fa-comments" },
    { skillName: "Notion", fontAwesomeClassname: "fas fa-sticky-note" },
    { skillName: "Slack", fontAwesomeClassname: "fab fa-slack" }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section | 教育背景
const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Universiti Sains Malaysia",
      logo: require("./assets/images/harvardLogo.png"), // 替换为USM logo
      subHeader: "MSc Digital Transformation",
      duration: "2023 – 2025",
      desc: "Focus: data science, lean innovation, business intelligence",
      descBullets: [
        "Research: cybersecurity risk modelling for AI systems",
        "Best-Use-of-AI Award 2024"
      ]
    },
    {
      schoolName: "Suzhou University",
      logo: require("./assets/images/stanfordLogo.png"), // 替换为苏大logo
      subHeader: "BSc Software Engineering",
      duration: "2018 – 2020",
      desc: "Emphasis on software development and digital solution design",
      descBullets: [
        "Graduated with honors in software engineering"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience | 技术栈经验
const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Product Strategy", //Insert stack or technology you have experience in
      progressPercentage: "95%" //Insert relative proficiency in percentage
    },
    {
      Stack: "AI Implementation",
      progressPercentage: "90%"
    },
    {
      Stack: "Digital Transformation",
      progressPercentage: "85%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section | 工作经验
const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Product Manager",
      company: "Yunyou Technology Company",
      companylogo: require("./assets/images/facebookLogo.png"), // 替换为实际公司logo
      date: "2022 – Present",
      desc: "Leading cross-functional teams to deliver ERP-integrated AI solutions",
      descBullets: [
        "Delivered RMB 1M+ digital transformation projects",
        "Cut support response time by 72% through AI chatbot implementation",
        "Saved USD 120K per year through process optimization"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects */
const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

/* ===== 4. Case Studies / Projects ===== */
const bigProjects = {
  title: "projects.title",
  subtitle: "projects.subtitle",
  projects: [
    {
      projectName: "projects.projects.0.projectName",
      projectDesc: "projects.projects.0.projectDesc",
      footerLink: [
        {
          name: "View Details",
          url: "#psychology-project"
        }
      ]
    },
    {
      projectName: "projects.projects.1.projectName",
      projectDesc: "projects.projects.1.projectDesc",
      footerLink: [
        {
          name: "View Details",
          url: "#injection-project"
        }
      ]
    },
    {
      projectName: "projects.projects.2.projectName",
      projectDesc: "projects.projects.2.projectDesc",
      footerLink: [
        {
          name: "View Details",
          url: "#emotion-project"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

/* ===== 5. Company Projects ===== */
const companyProjects = {
  title: "companyProjects.title",
  subtitle: "companyProjects.subtitle",
  projects: [
    {
      projectName: "companyProjects.projects.0.projectName",
      displayName: "companyProjects.projects.0.displayName",
      projectDesc: "companyProjects.projects.0.projectDesc",
      duration: "companyProjects.projects.0.duration",
      footerLink: [
        {
          name: "View Details",
          url: "#machine-data-center"
        },
        {
          name: "Technologies",
          url: "#machine-tech"
        }
      ]
    },
    {
      projectName: "companyProjects.projects.1.projectName",
      displayName: "companyProjects.projects.1.displayName",
      projectDesc: "companyProjects.projects.1.projectDesc",
      duration: "companyProjects.projects.1.duration",
      footerLink: [
        {
          name: "View Details",
          url: "#hse-platform"
        },
        {
          name: "Technologies",
          url: "#hse-tech"
        }
      ]
    },
    {
      projectName: "companyProjects.projects.2.projectName",
      displayName: "companyProjects.projects.2.displayName",
      projectDesc: "companyProjects.projects.2.projectDesc",
      duration: "companyProjects.projects.2.duration",
      footerLink: [
        {
          name: "View Details",
          url: "#warehouse-system"
        },
        {
          name: "Technologies",
          url: "#warehouse-tech"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
const achievementSection = {
  title: "achievements.title",
  subtitle: "achievements.subtitle",

  achievementsCards: [
    {
      title: "Delivered RMB 1M Digital Transformation Project",
      subtitle: "On time and on budget, exceeding client KPIs by 12%.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "1M Project Achievement",
      footerLink: [
        {
          name: "Project Details",
          url: "#todo-1m-project"
        }
      ]
    },
    {
      title: "Led RMB 2.78M Safety Compliance Initiative",
      subtitle: "Reduced safety incidents 28% across 6 facilities.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "2.78M Project Achievement",
      footerLink: [
        {
          name: "Case Study",
          url: "#todo-2.78m-project"
        }
      ]
    },
    {
      title: "USM Best-Use-of-AI Award 2024",
      subtitle: "Recognised for ERP-integrated GPT-4 customer chatbot.",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "USM AI Award",
      footerLink: [
        {
          name: "Award Certificate",
          url: "#todo-usm-award"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section
const blogSection = {
  title: "blogs.title",
  subtitle: "blogs.subtitle",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "AI Implementation Best Practices",
      description: "Sharing insights on successful AI project delivery and common pitfalls to avoid."
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Digital Transformation Strategy",
      description: "How to lead successful digital transformation initiatives in enterprise environments."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections
const talkSection = {
  title: "talks.title",
  subtitle: "talks.subtitle",

  talks: [
    {
      title: "AI in Digital Transformation",
      subtitle: "Conference on Enterprise AI Implementation",
      slides_url: "https://bit.ly/ai-transformation-slides",
      event_url: "https://www.facebook.com/events/ai-transformation-2024/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section | 简历部分
const resumeSection = {
  title: "resume.title",
  subtitle: "resume.subtitle",
  display: true // Set false to hide this section, defaults to true
};

// Contact Info | 联系信息
const contactInfo = {
  title: "contact.title",
  subtitle: "contact.subtitle",
  number: "+60-0178299352", // 替换为实际电话
  email_address: "dingchaobazinga@gmail.com" // 替换为实际邮箱
};

// Twitter Section | Twitter部分
const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  socialMediaLinks,
  splashScreen,
  skills as skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  companyProjects,
  achievementSection,
  blogSection,
  talkSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
