# Jason's Professional Portfolio Website

A FAANG-level, production-ready personal portfolio website featuring a stunning 3D interactive hero section, built with **HTML5**, **CSS3**, **JavaScript**, and **Bootstrap 5**.

## 🚀 Features

### Core Features
- **3D Interactive Hero Section** - Animated 3D cube and floating objects using Three.js with mouse tracking
- **Responsive Design** - Mobile-first approach, works flawlessly on all devices
- **Modern UI/UX** - Clean, professional design with smooth animations and transitions
- **Light & Dark Mode Support** - Automatically adapts to system preferences
- **Accessibility First** - WCAG 2.1 compliant with keyboard navigation and screen reader support
- **Performance Optimized** - Fast load times, optimized animations, lazy loading support

### Sections

#### 1. **Navigation Bar**
- Sticky navigation with smooth scroll
- Active link highlighting
- Mobile-responsive hamburger menu
- Glassmorphism effect on scroll

#### 2. **Hero Section**
- Full-screen landing area
- Animated 3D canvas with:
  - Rotating primary cube with metallic materials
  - Three floating icosahedrons with orbital motion
  - Particle system background
  - Mouse tracking interaction
- Call-to-action buttons
- Social media links
- Animated scroll indicator

#### 3. **About Section**
- Animated SVG profile
- Professional biography
- Statistics grid (Projects, Clients, Years of Experience)
- Floating animation effects

#### 4. **Projects Section**
- 6 featured project cards
- Project descriptions and technology tags
- Hover overlay with project links
- Fully responsive grid layout
- Icons for different project types

#### 5. **Skills Section**
- Three skill categories:
  - **Frontend**: HTML/CSS, JavaScript, React, Vue.js, TypeScript
  - **Backend**: Node.js, Express, Python, REST API, GraphQL
  - **Tools & Databases**: MongoDB, PostgreSQL, Docker, Git, AWS
- Animated progress bars
- Technologies grid with hover effects
- Color-coded skill levels

#### 6. **Contact Section**
- Professional contact form with validation
- Multiple contact methods:
  - Email
  - Phone
  - Location
- Success/error notifications
- Styled form inputs with focus states

#### 7. **Footer**
- Company info section
- Quick links navigation
- Social media links
- Copyright information

## 📁 Project Structure

```
jason_portfolio/
├── index.html          # Main HTML file
├── styles.css          # Complete styling with animations
├── script.js           # JavaScript functionality and 3D setup
└── README.md          # This file
```

## 🛠️ Technologies Used

### Frontend Stack
- **HTML5** - Semantic markup
- **CSS3** - Grid, Flexbox, Custom Properties
- **JavaScript (ES6+)** - Modern JavaScript with classes and async/await
- **Bootstrap 5** - Responsive grid system and components
- **Three.js** - 3D graphics library

### CDN Dependencies
- Bootstrap CSS & JS
- Font Awesome Icons
- Google Fonts (Poppins, Roboto)
- Three.js Library

## 🎨 Design Features

### Color Scheme
```css
--primary: #6366f1    (Indigo)
--secondary: #ec4899  (Pink)
--accent: #f59e0b     (Amber)
--dark: #0f172a       (Dark Blue)
--light: #f1f5f9      (Light Gray)
```

### Typography
- **Headlines**: Poppins (Bold, 700 weight)
- **Body Text**: Roboto (Regular, 400 weight)
- Responsive font sizes using `clamp()`

### Animations
- Fade-in effects on scroll
- Parallax scrolling in hero section
- 3D cube and particle animations
- Smooth transitions on all interactive elements
- Hover state animations
- Progress bar fills on scroll

## 📱 Responsive Breakpoints

```css
Desktop:  > 992px
Tablet:   768px - 992px
Mobile:   < 768px
Small:    < 576px
```

## ⚡ Performance Optimizations

- Minified CSS and optimized selectors
- Efficient Three.js rendering with vsync
- RequestAnimationFrame for smooth animations
- Lazy loading support for images
- CSS will-change for GPU acceleration
- Minimal DOM manipulation
- Event delegation where possible

## 🔧 Installation & Setup

### Local Development

1. **Clone or download the project**
   ```bash
   cd jason_portfolio
   ```

2. **Open in browser**
   - Simply open `index.html` in your web browser
   - Or use a local server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js with http-server
   npx http-server
   ```

3. **Access the site**
   - Navigate to `http://localhost:8000`

### No Build Process Required
This portfolio is built with vanilla technologies - no Node.js, bundlers, or complex tooling needed!

## 🎯 Customization Guide

### Update Personal Information

**In `index.html`:**
```html
<!-- Update navbar brand -->
<a class="navbar-brand fw-bold" href="#hero">
    <span class="gradient-text">Your Name</span>
</a>

<!-- Update hero section -->
<h1 class="hero-title">Hi, I'm <span class="gradient-text">Your Name</span></h1>
<p class="hero-subtitle">Your Title | Key Skills</p>

<!-- Update project cards -->
<h3 class="project-title">Your Project Name</h3>
<p class="project-description">Project description</p>

<!-- Update contact info -->
<a href="mailto:your.email@example.com">your.email@example.com</a>
```

### Change Color Scheme

**In `styles.css`:**
```css
:root {
    --primary: #your-color;
    --secondary: #your-color;
    --accent: #your-color;
    /* ... */
}
```

### Modify 3D Scene

**In `script.js`:**
```javascript
// Change cube color
const material = new THREE.MeshStandardMaterial({
    color: 0xYOURCOLOR, // Hex color code
    metalness: 0.4,
    roughness: 0.2
});

// Add or remove floating objects
// Modify speeds and positions in createObjects()
```

### Update Skills & Projects

**In `index.html`:**
- Add/remove project cards in the projects section
- Update skill categories and progress bars
- Modify technology tags

## 🔗 External Links to Update

Before deploying, update these links in `index.html`:

```html
<!-- Social Media Links -->
<a href="https://linkedin.com/in/yourprofile" target="_blank">
<a href="https://github.com/yourprofile" target="_blank">
<a href="https://twitter.com/yourhandle" target="_blank">

<!-- Contact Information -->
<a href="mailto:your.email@example.com">your.email@example.com</a>
<a href="tel:+1234567890">+1 (234) 567-890</a>
```

## 📊 SEO Optimization

The portfolio includes:
- Meta tags for social sharing
- Semantic HTML5 structure
- Schema.org markup ready
- Fast load times for better ranking
- Mobile-first responsive design
- Accessibility features

## ♿ Accessibility Features

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Focus visible states
- High contrast text
- Skip to main content link
- Alt text ready for images
- Form labels and error handling

## 🚀 Deployment Options

### GitHub Pages
1. Push to a GitHub repository
2. Enable GitHub Pages in settings
3. Access at `https://yourusername.github.io/jason_portfolio`

### Netlify
1. Connect your repository to Netlify
2. Set build command: (leave empty)
3. Set publish directory: `.` or root
4. Deploy instantly

### Vercel
1. Import project from Git
2. No build configuration needed
3. Automatic deployments on push

### Traditional Hosting
- Upload files via FTP to any hosting provider
- No special server configuration needed
- Works on any web server

## 📈 Google Analytics Integration

To add analytics, include before closing `</body>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

## 🐛 Browser Compatibility

- Chrome/Edge: ✅ Full support
- Firefox: ✅ Full support
- Safari: ✅ Full support
- IE11: ❌ Not supported (Use Bootstrap 4 instead)

## 📝 License

This portfolio template is free to use for personal or commercial projects.

## 🤝 Support

For questions or issues:
1. Check the code comments
2. Review the customization guide
3. Verify all CDN links are accessible
4. Check browser console for errors

## 🎓 Learning Resources

This portfolio demonstrates:
- Modern CSS Grid and Flexbox layouts
- ES6+ JavaScript patterns and classes
- Three.js 3D graphics concepts
- Responsive design principles
- Web accessibility best practices
- Performance optimization techniques

## 📦 Future Enhancements

Potential additions:
- [ ] Blog section with Markdown support
- [ ] Project filtering and searching
- [ ] Testimonials section
- [ ] Resume/CV download
- [ ] Email form backend integration
- [ ] Animations library (AOS)
- [ ] PWA support
- [ ] CMS integration

## 🎉 Credits

Built with:
- Three.js for 3D graphics
- Bootstrap 5 for responsive grid
- Font Awesome for icons
- Google Fonts for typography

---

**Created with ❤️ for professionals who want to stand out**

Made to impress FAANG companies and clients alike. Your portfolio should be as impressive as your code!
