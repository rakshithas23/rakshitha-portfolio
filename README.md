# Rakshitha Srinivasa — Portfolio

> Built with React 18 + Bootstrap 5 + Framer Motion

## 🚀 Quick Start

```bash
npm install
npm start
```

Open **http://localhost:3000**

---

## 📁 Project Structure

```
src/
├── data/
│   └── portfolio.json       ← ✏️  Edit ALL your content here
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Skills.jsx
│   ├── Experience.jsx
│   ├── Projects.jsx
│   ├── Contact.jsx
│   └── Footer.jsx
├── styles/
│   └── App.css              ← All custom CSS (Bootstrap is base)
├── App.jsx
└── index.js
```

---

## 🖼️ Adding Your Photo

Place your photo at:
```
public/rakshitha.jpeg
```
It will automatically appear in the Hero and About sections.

---

## ✏️ Updating Content

Everything lives in **`src/data/portfolio.json`**:

| Key | What it controls |
|-----|-----------------|
| `personal` | Name, bio, email, photo path |
| `stats` | The 4 numbers in the hero |
| `education` | Degree cards |
| `experience` | Work history bullets |
| `skills` | Flip card categories |
| `academicProjects` | Academic tab |
| `workProjects` | Professional tab |
| `certifications` | Awards & publications |

---

## 🎨 Changing Colors

Edit CSS variables at the top of `src/styles/App.css`:

```css
:root {
  --primary:   #6366f1;   /* Main indigo */
  --secondary: #06b6d4;   /* Cyan accent */
  --accent:    #f59e0b;   /* Amber */
  --success:   #10b981;   /* Green */
}
```

---

## 📦 Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| react + react-dom | 18.x | Core |
| bootstrap | 5.3.x | Layout & UI components |
| bootstrap-icons | 1.11.x | Icon library |
| framer-motion | 10.x | Animations |
