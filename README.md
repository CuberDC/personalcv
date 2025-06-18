# Personal CV Portfolio 🚀

[![React](https://img.shields.io/badge/React-18.2.0-blue.svg)](https://reactjs.org/)
[![i18next](https://img.shields.io/badge/i18next-Bilingual-green.svg)](https://www.i18next.com/)
[![SCSS](https://img.shields.io/badge/SCSS-Responsive-ff69b4.svg)](https://sass-lang.com/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

> A modern, responsive, and bilingual personal portfolio website showcasing professional experience, skills, and projects.

## ✨ Features

- 🌐 **Bilingual Support** - Seamless switching between English and Chinese
- 🎨 **Modern Design** - Clean, professional UI with dark/light theme toggle
- 📱 **Fully Responsive** - Optimized for all devices and screen sizes
- ⚡ **Fast Performance** - Built with React and optimized for speed
- 🎯 **Professional Sections** - Comprehensive showcase of skills and experience
- 🔧 **Easy Customization** - Simple configuration through portfolio.js

## 🏗️ Project Structure

```
personalcv/
├── public/                 # Static assets
├── src/
│   ├── components/         # Reusable UI components
│   ├── containers/         # Page sections
│   ├── assets/            # Images, fonts, animations
│   ├── i18n.js            # Internationalization config
│   ├── portfolio.js       # Main configuration file
│   └── App.js             # Main application component
├── package.json
└── README.md
```

## 🚀 Quick Start

### Prerequisites

- Node.js (v14.0.0 or higher)
- npm (v6.0.0 or higher)
- Git

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/CuberDC/personalcv.git
cd personalcv
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm start
```

4. **Open your browser**
```
http://localhost:3000
```

## 🎯 Sections Overview

### 🏠 **Landing Page**
- Professional greeting with animated elements
- Quick introduction and call-to-action
- Resume download functionality

### 💼 **Skills & Expertise**
- Technical skills with proficiency indicators
- Software and tools experience
- Programming languages and frameworks

### 🎓 **Education**
- Academic background
- Certifications and achievements
- Relevant coursework

### 💼 **Work Experience**
- Professional career timeline
- Company logos and descriptions
- Key responsibilities and achievements

### 🚀 **Company Projects**
- **Machine Data Center** (2023) - Led informatization assessment and built intelligent management platform
- **HSE Platform** (2022-2023) - Developed 3D safety monitoring dashboard
- **WMS System** (2021) - Integrated warehouse management solutions

### 🌟 **Personal Projects**
- Open source contributions
- Side projects and experiments
- GitHub integration

### 📞 **Contact**
- Professional contact information
- Social media links
- Contact form integration

## 🌍 Internationalization

This portfolio supports both English and Chinese languages:

- **English** - Default language for international audience
- **中文** - Complete Chinese translation for local market
- **Dynamic Switching** - Real-time language toggle without page reload

### Language Configuration

All text content is managed through `src/i18n.js`:

```javascript
// English content
en: {
  greeting: {
    title: "Hi, I'm [Your Name]",
    subTitle: "Professional Software Developer"
  }
}

// Chinese content  
zh: {
  greeting: {
    title: "你好，我是[你的名字]",
    subTitle: "专业软件开发工程师"
  }
}
```

## 🎨 Customization

### Personal Information

Edit `src/portfolio.js` to customize your portfolio:

```javascript
const greeting = {
  title: "Your Name",
  subTitle: "Your Professional Title",
  resumeLink: "path/to/your/resume.pdf"
};

const socialMediaLinks = {
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourprofile",
  email: "your.email@example.com"
};
```

### Theme Colors

Customize the color scheme in `src/_globalColor.scss`:

```scss
$primaryColor: #your-primary-color;
$secondaryColor: #your-secondary-color;
$accentColor: #your-accent-color;
```

### Adding New Sections

1. Create component in `src/components/`
2. Add container in `src/containers/`
3. Update `src/portfolio.js` with new data
4. Add translations to `src/i18n.js`

## 🚀 Deployment

### GitHub Pages

1. **Install gh-pages**
```bash
npm install --save-dev gh-pages
```

2. **Add deploy scripts to package.json**
```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  },
  "homepage": "https://yourusername.github.io/personalcv"
}
```

3. **Deploy**
```bash
npm run deploy
```

### Other Platforms

- **Netlify**: Connect GitHub repo and deploy automatically
- **Vercel**: Import project and deploy with zero configuration
- **Heroku**: Use buildpack for React applications

## 🛠️ Technologies Used

- **Frontend Framework**: React 18.2.0
- **Styling**: SCSS, CSS3
- **Internationalization**: react-i18next
- **Animations**: react-reveal, Lottie
- **Icons**: Font Awesome, Custom SVGs
- **Build Tool**: Create React App
- **Version Control**: Git

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit issues and pull requests.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Original template inspiration from [developerFolio](https://github.com/saadpasta/developerFolio)
- Icons from [Font Awesome](https://fontawesome.com/)
- Animations from [LottieFiles](https://lottiefiles.com/)
- Chinese font optimization techniques

## 📞 Contact

- **Email**: 463043329@qq.com
- **GitHub**: [@CuberDC](https://github.com/CuberDC)
- **Project Link**: [https://github.com/CuberDC/personalcv](https://github.com/CuberDC/personalcv)

---

⭐ **Star this repo if you find it helpful!** 