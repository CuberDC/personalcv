# 🌏 中英文切换功能实现说明

## ✅ 已完成的功能

### 1. 国际化基础架构
- ✅ 安装了 `react-i18next` 和 `i18next` 库
- ✅ 创建了完整的 `src/i18n.js` 配置文件
- ✅ 在 `App.js` 中集成了i18n配置

### 2. 语言切换组件
- ✅ 创建了 `src/components/languageToggle/LanguageToggle.js` 组件
- ✅ 添加了美观的样式文件 `LanguageToggle.scss`
- ✅ 支持深色/浅色模式
- ✅ 响应式设计，支持移动端

### 3. 个人简历信息替换

#### 英文版本：
- **姓名**: Donovan
- **职位**: Product Manager specializing in digital transformation
- **技能**: 
  - 领导数字化转型项目，专注于企业架构和商业智能
  - 促进开发团队与客户的协作，确保软件成功交付
  - 利用ChatGPT和Power BI等AI工具进行战略洞察
  - 设计和实施符合业务目标和用户需求的软件解决方案

#### 中文版本：
- **姓名**: Donovan
- **职位**: 专注于数字化转型和软件开发的产品经理
- **技能**: 
  - 领导数字化转型项目，专注于企业架构和商业智能
  - 促进开发团队与客户的协作，确保软件成功交付
  - 利用ChatGPT和Power BI等AI工具进行战略洞察
  - 设计和实施符合业务目标和用户需求的软件解决方案

### 4. 更新的组件

#### ✅ Greeting 组件 (`src/containers/greeting/Greeting.js`)
- 支持标题和副标题的中英文切换
- 按钮文本翻译

#### ✅ Skills 组件 (`src/containers/skills/Skills.js`)
- 技能标题和副标题翻译
- 技能描述列表的中英文切换
- 添加了安全的数组处理

#### ✅ Header 组件 (`src/components/header/Header.js`)
- 导航菜单项的完整翻译
- 支持所有导航链接的中英文切换

#### ✅ Contact 组件 (`src/containers/contact/Contact.js`)
- 详细的联系信息展示
- 包括电话、邮箱、地址、国籍、语言能力
- 美观的联系信息卡片设计

#### ✅ Education 组件 (`src/containers/education/Education.js`)
- 教育经历标题翻译
- 支持学校信息的中英文切换

#### ✅ WorkExperience 组件 (`src/containers/workExperience/WorkExperience.js`)
- 工作经历标题翻译
- 支持工作经验的中英文切换

### 5. 样式优化
- ✅ 修复了Contact.scss中的颜色变量问题
- ✅ 添加了美观的联系信息样式
- ✅ 支持深色模式

## 🚀 如何启动项目

1. **安装依赖**:
   ```bash
   npm install
   ```

2. **启动开发服务器**:
   ```bash
   npm start
   ```

3. **访问网站**:
   打开浏览器访问 `http://localhost:3000`

## 🎯 如何使用语言切换功能

1. **查找语言切换按钮**: 在网页右上角找到 **EN | 中文** 按钮
2. **点击切换**: 点击按钮即可在中英文之间切换
3. **即时生效**: 所有支持翻译的内容会立即切换语言

## 📱 支持的功能

- ✅ **实时语言切换**: 无需刷新页面
- ✅ **全站翻译**: 主要组件都支持中英文
- ✅ **响应式设计**: 手机端完美显示
- ✅ **深色模式兼容**: 语言切换按钮支持深色主题
- ✅ **个性化内容**: 完全基于真实简历信息

## 🛠️ 技术细节

### 已修复的编译问题:
1. ✅ Contact.scss中的未定义变量 `$headerColor` → 改为 `$titleColor`
2. ✅ Contact.js中未使用的导入 `contactInfo`
3. ✅ Skills组件中翻译数组的安全处理
4. ✅ 所有组件的翻译hook正确实现

### 文件结构:
```
src/
├── i18n.js                           # 国际化配置和翻译文件
├── components/
│   └── languageToggle/
│       ├── LanguageToggle.js          # 语言切换组件
│       └── LanguageToggle.scss        # 语言切换样式
├── containers/
│   ├── greeting/Greeting.js           # 已翻译
│   ├── skills/Skills.js               # 已翻译
│   ├── education/Education.js         # 已翻译
│   ├── workExperience/WorkExperience.js # 已翻译
│   └── contact/Contact.js             # 已翻译
└── components/
    └── header/Header.js               # 已翻译
```

## 🎊 完成状态

**前端中英文切换功能已完全实现并可以使用！**

所有编译错误已修复，网站应该可以正常启动并运行。语言切换功能完全可用，用户可以通过右上角的按钮在中英文之间自由切换。 

# 个人简历作品集 🚀

[![React](https://img.shields.io/badge/React-18.2.0-blue.svg)](https://reactjs.org/)
[![i18next](https://img.shields.io/badge/i18next-双语支持-green.svg)](https://www.i18next.com/)
[![SCSS](https://img.shields.io/badge/SCSS-响应式-ff69b4.svg)](https://sass-lang.com/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

> 现代化、响应式的双语个人作品集网站，全面展示专业经验、技能和项目。

[English](README.md) | 中文

## ✨ 特色功能

- 🌐 **双语支持** - 中英文无缝切换
- 🎨 **现代设计** - 简洁专业的UI，支持明暗主题切换
- 📱 **完全响应式** - 适配所有设备和屏幕尺寸
- ⚡ **高性能** - 基于React构建，性能优化
- 🎯 **专业展示** - 全面展示技能和经验
- 🔧 **易于定制** - 通过portfolio.js简单配置

## 🏗️ 项目结构

```
personalcv/
├── public/                 # 静态资源
├── src/
│   ├── components/         # 可复用UI组件
│   ├── containers/         # 页面区块
│   ├── assets/            # 图片、字体、动画
│   ├── i18n.js            # 国际化配置
│   ├── portfolio.js       # 主要配置文件
│   └── App.js             # 主应用组件
├── package.json
└── README.md
```

## 🚀 快速开始

### 环境要求

- Node.js (v14.0.0 或更高版本)
- npm (v6.0.0 或更高版本)
- Git

### 安装步骤

1. **克隆仓库**
```bash
git clone https://github.com/CuberDC/personalcv.git
cd personalcv
```

2. **安装依赖**
```bash
npm install
```

3. **启动开发服务器**
```bash
npm start
```

4. **打开浏览器**
```
http://localhost:3000
```

## 🎯 功能模块

### 🏠 **首页**
- 专业问候语和动画元素
- 快速介绍和行动引导
- 简历下载功能

### 💼 **技能专长**
- 技术技能熟练度指示器
- 软件和工具经验
- 编程语言和框架

### 🎓 **教育背景**
- 学术背景
- 证书和成就
- 相关课程

### 💼 **工作经验**
- 职业发展时间线
- 公司logo和描述
- 主要职责和成就

### 🚀 **公司项目**
- **机器数据中心** (2023年) - 主导信息化评估，构建智能管理平台
- **HSE平台** (2022-2023年) - 开发3D安全监控大屏
- **WMS系统** (2021年) - 整合仓库管理解决方案

### 🌟 **个人项目**
- 开源贡献
- 个人项目和实验
- GitHub集成

### 📞 **联系方式**
- 专业联系信息
- 社交媒体链接
- 联系表单

## 🌍 国际化

本作品集支持中英双语：

- **English** - 面向国际受众的默认语言
- **中文** - 完整的中文翻译，面向本地市场
- **动态切换** - 实时语言切换，无需页面重载

### 语言配置

所有文本内容通过 `src/i18n.js` 管理：

```javascript
// 英文内容
en: {
  greeting: {
    title: "Hi, I'm [Your Name]",
    subTitle: "Professional Software Developer"
  }
}

// 中文内容  
zh: {
  greeting: {
    title: "你好，我是[你的名字]",
    subTitle: "专业软件开发工程师"
  }
}
```

## 🎨 自定义配置

### 个人信息

编辑 `src/portfolio.js` 来自定义你的作品集：

```javascript
const greeting = {
  title: "你的姓名",
  subTitle: "你的职业头衔",
  resumeLink: "path/to/your/resume.pdf"
};

const socialMediaLinks = {
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourprofile",
  email: "your.email@example.com"
};
```

### 主题颜色

在 `src/_globalColor.scss` 中自定义配色方案：

```scss
$primaryColor: #your-primary-color;
$secondaryColor: #your-secondary-color;
$accentColor: #your-accent-color;
```

### 添加新模块

1. 在 `src/components/` 中创建组件
2. 在 `src/containers/` 中添加容器
3. 更新 `src/portfolio.js` 添加新数据
4. 在 `src/i18n.js` 中添加翻译

## 🚀 部署

### GitHub Pages

1. **安装 gh-pages**
```bash
npm install --save-dev gh-pages
```

2. **在 package.json 中添加部署脚本**
```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  },
  "homepage": "https://yourusername.github.io/personalcv"
}
```

3. **部署**
```bash
npm run deploy
```

### 其他平台

- **Netlify**: 连接GitHub仓库并自动部署
- **Vercel**: 导入项目零配置部署
- **Heroku**: 使用React应用构建包

## 🛠️ 技术栈

- **前端框架**: React 18.2.0
- **样式**: SCSS, CSS3
- **国际化**: react-i18next
- **动画**: react-reveal, Lottie
- **图标**: Font Awesome, 自定义SVG
- **构建工具**: Create React App
- **版本控制**: Git

## 📱 浏览器支持

- Chrome (最新版)
- Firefox (最新版)
- Safari (最新版)
- Edge (最新版)
- 移动端浏览器 (iOS Safari, Chrome Mobile)

## 🤝 贡献

欢迎贡献！请随时提交问题和拉取请求。

1. Fork 项目
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打开拉取请求

## 📄 许可证

本项目基于 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 🙏 致谢

- 原始模板灵感来自 [developerFolio](https://github.com/saadpasta/developerFolio)
- 图标来自 [Font Awesome](https://fontawesome.com/)
- 动画来自 [LottieFiles](https://lottiefiles.com/)
- 中文字体优化技术

## 📞 联系方式

- **邮箱**: 463043329@qq.com
- **GitHub**: [@CuberDC](https://github.com/CuberDC)
- **项目链接**: [https://github.com/CuberDC/personalcv](https://github.com/CuberDC/personalcv)

---

⭐ **如果这个项目对你有帮助，请给个星标！** 