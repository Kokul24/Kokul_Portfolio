# Kokul's Portfolio Website

A modern, responsive portfolio website built with React, featuring smooth animations and transitions using Framer Motion.

## 🌐 Live Demo

**[View Live Portfolio](https://kokul-portfolio.vercel.app)**

## 🚀 Features

- **Modern Design**: Clean and professional design with a green & dark theme
- **Smooth Animations**: Page transitions and micro-interactions using Framer Motion
- **Fully Responsive**: Works seamlessly on desktop, tablet, and mobile devices
- **Multiple Pages**:
  - Home - Landing page with hero section
  - About - Personal information and highlights
  - Skills - Technical skills showcase with progress bars
  - Projects - Showcase of 3 completed projects
  - Upcoming Projects - 2 projects in development
  - Education - Academic journey timeline
  - Contact - Contact form and social links

## 🛠️ Technologies Used

- React 18
- React Router DOM (for navigation)
- Framer Motion (for animations)
- React Icons
- CSS3 (with custom properties)
- HTML5

## 📦 Installation

1. Clone the repository or navigate to the project folder:
```bash
cd "c:\Users\KOKUL M\OneDrive\Attachments\Desktop\Kokul_Portfolio"
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```



## 🎨 Customization

### Update Personal Information

1. **Home Page** (`src/pages/Home/Home.js`):
   - Update name and description
   - Add your social media links

2. **About Page** (`src/pages/About/About.js`):
   - Modify the about text and stats

3. **Skills Page** (`src/pages/Skills/Skills.js`):
   - Update your skills and proficiency levels

4. **Projects Pages** (`src/pages/Projects/Projects.js` & `src/pages/UpcomingProjects/UpcomingProjects.js`):
   - Add your project details, links, and technologies

5. **Education Page** (`src/pages/Education/Education.js`):
   - Update your educational background

6. **Contact Page** (`src/pages/Contact/Contact.js`):
   - Add your email, phone, and social links

### Color Theme

To change the color theme, update the CSS variables in `src/index.css`:

```css
:root {
  --primary-green: #00ff88;
  --dark-bg: #0a0a0a;
  --card-bg: #1a2332;
  --text-white: #ffffff;
  --text-gray: #a0aec0;
  --glow-green: rgba(0, 255, 136, 0.3);
}
```

## 📱 Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Runs the test suite
- `npm eject` - Ejects from Create React App (one-way operation)

## 🌐 Deployment

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.



## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Kokul M**
- Third-year Computer Science Engineering Student
- Ready for Placements 2025

---

Made with ❤️ using React and Framer Motion
