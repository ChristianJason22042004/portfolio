<div align="center">

<img src="https://readme-typing-svg.herokuapp.com?size=28&duration=3000&color=0A66C2&center=true&vCenter=true&width=800&lines=Jason+Christian+%E2%80%94+AI%2FML+Portfolio;RAG+%7C+Agentic+AI+%7C+LLMs+%7C+Vector+Databases;Built+with+Bootstrap+5+%7C+Vanilla+JS;Clean+Code+%7C+Responsive+%7C+Fast" />

# 🧠 AI/ML Developer Portfolio

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)]()
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)]()
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)]()
[![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)]()
[![License](https://img.shields.io/badge/License-MIT-22C55E?style=for-the-badge)]()

> Personal portfolio website for **Jason Ranison Christian** — AI/ML Developer specializing in Generative AI, RAG Systems, Agentic AI, and Vector Databases.

**[🌐 Live Demo](#)** &nbsp;·&nbsp; **[📬 Contact](mailto:christianjason2204@gmail.com)** &nbsp;·&nbsp; **[💼 LinkedIn](https://www.linkedin.com/in/jasonranisonchristian/)**

</div>

---

## 📸 Sections

| Section | Description |
|---|---|
| **Hero** | Animated gradient background · typing role effect · social links |
| **About** | Profile photo · bio · specialization summary |
| **Projects** | 6 featured AI/ML project cards with tech tags |
| **Certifications** | 9 certification cards from IBM, Johns Hopkins, Microsoft, Rice, UC San Diego |
| **Skills** | Progress bar skill categories — LLMs, RAG, Agentic AI, ML Frameworks |
| **Contact** | FormSubmit-powered contact form · email · phone · location |
| **Footer** | Quick links · social icons · copyright |

---

## ✨ Features

- 🎨 **Animated gradient hero** — floating orbs with CSS keyframe animations
- ⌨️ **Typewriter effect** — cycles through AI/ML/RAG/Agentic roles via vanilla JS
- 📱 **Fully responsive** — Bootstrap 5 grid, mobile-first
- 📬 **Working contact form** — powered by [FormSubmit](https://formsubmit.co), no backend needed
- 🧭 **Smooth scroll navigation** — fixed navbar with section anchors
- 🏷️ **Project tech tags** — per-card technology labels
- 📊 **Animated skill bars** — progress-fill bars per skill category
- 🔢 **Profile view counter** — via shields.io / komarev badge

---

## 🗂️ Project Structure

```
📦 portfolio/
 ┣ 📄 index.html        # Main HTML — all sections
 ┣ 📄 styles.css        # Custom CSS — gradients, cards, animations
 ┣ 📄 script.js         # Navbar scroll, typewriter, scroll animations
 ┣ 📁 images/
 ┃ ┗ 🖼️ profile.jpeg   # Profile photo
 ┗ 📄 README.md
```

---

## 🚀 Getting Started

No build tools, no npm, no configuration. Just open and go.

```bash
# Clone the repo
git clone https://github.com/ChristianJason22042004/portfolio.git
cd portfolio
```

Then open `index.html` in your browser — or use VS Code Live Server:

```
Right-click index.html → Open with Live Server
```

---

## 🛠️ Built With

| Technology | Purpose |
|---|---|
| **HTML5** | Semantic structure, SEO meta tags, Open Graph |
| **CSS3** | Custom animations, gradient orbs, card hover effects |
| **Bootstrap 5.3** | Responsive grid, navbar, form components |
| **Font Awesome 6** | All icons — nav, skills, contact, footer |
| **Google Fonts** | Poppins + Roboto typography |
| **Vanilla JS** | Typewriter effect, scroll animations |
| **FormSubmit** | Contact form backend — zero server code |

---

## ✏️ Customization

### 1. Update personal info
Edit `index.html` — replace name, bio, email, phone, and location in the About and Contact sections.

### 2. Swap profile photo
Replace `images/profile.jpeg` with your own photo. Keep the filename or update the `src` in the About section:
```html
<img src="images/your-photo.jpg" alt="Your Name" class="img-fluid rounded-circle profile-img">
```

### 3. Add / edit projects
Each project is a Bootstrap card in the `#projects` section. Copy any `.project-card` block and update the title, description, and tags:
```html
<div class="project-card">
    <div class="project-placeholder"><i class="fas fa-robot"></i></div>
    <h3 class="project-title">Your Project</h3>
    <p class="project-description">Your description here.</p>
    <div class="project-tags">
        <span class="tag">LangChain</span>
        <span class="tag">RAG</span>
    </div>
</div>
```

### 4. Update typewriter roles
In `index.html` (inline script at the bottom), edit the `roles` array:
```javascript
const roles = [
    "AI/ML Developer",
    "RAG Specialist",
    "Agentic AI Engineer",
    "LLM Innovator"
];
```

### 5. Connect the contact form
Replace the FormSubmit action email in the `<form>` tag:
```html
<form action="https://formsubmit.co/your@email.com" method="POST">
```
FormSubmit sends submissions directly to that email — no backend or API key needed.

### 6. Update social links
Find the `hero-social` div and footer social links — replace `href` values with your own profiles:
```html
<a href="https://www.linkedin.com/in/YOUR-PROFILE/" target="_blank">
<a href="https://github.com/YOUR-USERNAME" target="_blank">
```

---

## 🚢 Deployment

### GitHub Pages (free, instant)
1. Push the repo to GitHub
2. Go to **Settings → Pages**
3. Set source to `main` branch → `/ (root)`
4. Your site will be live at `https://ChristianJason22042004.github.io/portfolio/`

### Netlify (drag & drop)
1. Go to [netlify.com](https://netlify.com) → **Add new site → Deploy manually**
2. Drag the entire `portfolio/` folder into the browser
3. Live in seconds with a `*.netlify.app` URL

---

## 📄 License

MIT — free to use, fork, and adapt with attribution.

---

## 👨‍💻 Author

<div align="center">

<img src="https://readme-typing-svg.herokuapp.com?size=22&duration=3000&color=0A66C2&center=true&vCenter=true&width=700&lines=Jason+Ranison+Christian;AI+Engineer+%7C+Generative+AI+%7C+LLMs+%7C+RAG;Agentic+AI+Developer;Building+Intelligent+Systems" />

<img src="https://komarev.com/ghpvc/?username=ChristianJason22042004&label=Profile%20Views&color=0A66C2&style=for-the-badge" />

<br><br>

<a href="https://www.linkedin.com/in/jasonranisonchristian/">
  <img src="https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white"/>
</a>
&nbsp;
<a href="mailto:christianjason2204@gmail.com">
  <img src="https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white"/>
</a>
&nbsp;
<a href="https://github.com/ChristianJason22042004">
  <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white"/>
</a>
&nbsp;
<a href="https://www.instagram.com/jasonchristian_22042004/">
  <img src="https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white"/>
</a>

<br><br>

*Quiet consistency builds real capability.*
*Focused on learning, building, and contributing to the future of AI.*

</div>

---

<div align="center">
  <img src="https://img.shields.io/badge/Built%20with-Bootstrap%205-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white" />
  &nbsp;
  <img src="https://img.shields.io/badge/Powered%20by-Vanilla%20JS-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
</div>
