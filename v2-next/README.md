# 🎨 The Zen Editor Portfolio

> **Code is art, art is code.**

A next-generation portfolio website with a code editor aesthetic. Built for developers who see beauty in syntax highlighting and zen in monospace fonts.

## ✨ Design Philosophy

**The Zen Editor** combines the familiar comfort of your favorite IDE with stunning typography and micro-interactions. Every element feels like you're browsing through beautifully formatted code.

### Key Features

- 🎯 **IDE-Inspired Layout** - Sidebar file explorer + main editor area
- 🌈 **Syntax Highlighting** - GitHub Dark Dimmed color palette
- 💫 **Devasa Typography** - Code that's bold, massive, and artistic
- 🖱️ **Floating Previews** - Mouse-tracking project previews (Coming soon)
- ⚡ **Smooth Animations** - Framer Motion powered transitions
- 🎨 **Monospace Beauty** - Fira Code with ligatures

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Fonts:** 
  - Fira Code (Code elements)
  - Inter (UI elements)

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Deploy to GitHub Pages
npm run deploy
```

Open [http://localhost:3000](http://localhost:3000) to see the magic.

---

## 🌐 Deployment

This project is configured for **GitHub Pages** deployment.

**Live Site:** [https://ummugulsun.me](https://ummugulsun.me)

For detailed deployment instructions, see [DEPLOYMENT.md](./DEPLOYMENT.md).

## 📁 Project Structure

```
v2-next/
├── app/
│   ├── globals.css      # Zen Editor Design System
│   ├── layout.tsx       # Root layout with fonts
│   └── page.tsx         # Hero page with code editor
├── components/          # Reusable components (Coming soon)
├── public/             # Static assets
└── README.md           # You are here
```

## 🎨 Design System

### Color Palette
- **Background:** `#0d1117` (GitHub Dark)
- **Syntax Pink:** `#ff7b72`
- **Syntax Blue:** `#79c0ff`
- **Syntax Green:** `#a5d6ff`
- **Syntax Purple:** `#d2a8ff`

### Typography Scale
- Devasa code: `text-3xl` (1.875rem) on mobile
- Colossal code: `text-7xl` (4.5rem) on desktop

## 🔮 Roadmap

- [x] Basic IDE layout
- [x] Syntax-highlighted hero section
- [x] Animated sidebar navigation
- [x] Mouse-tracking floating project previews
- [x] Projects page (`projects.tsx`)
- [x] About page (`README.md`)
- [x] Contact page (`contact.json`)
- [ ] Dark/Light theme toggle
- [ ] Command palette (CMD+K)
- [ ] Blog section
- [ ] Mobile responsive optimizations

## 📝 License

MIT © Ümmügülsün Türkmen

---

**Built with 💜 by [Ümmügülsün Türkmen](https://ummugulsun.me)**
