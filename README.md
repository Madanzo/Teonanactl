# 🌿 Teonanácatl

**Sacred Path Store** — E-commerce platform for ceremonial wellness products rooted in Mexican ancestral traditions.

![React](https://img.shields.io/badge/React-18.3-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?logo=vite&logoColor=white)
![Firebase](https://img.shields.io/badge/Firebase-Hosting-FFCA28?logo=firebase&logoColor=black)

**Live Site:** [teonanactl-e8527.web.app](https://teonanactl-e8527.web.app)

---

## ✨ About

Teonanácatl is a modern e-commerce platform for ceremonial wellness products:

- 🍄 **Microdosis Teonanácatl** — Traditional mushroom formulations with Lion's Mane
- 💧 **Sagrado CBD/THC Oils** — Rick Simpson recipe, ceremonial-grade
- 🙏 **Quiénes Somos** — Founded by psychologists Loredana Tavano & Arturo Martinez

The name "Teonanácatl" comes from Nahuatl, meaning "sacred flesh."

---

## � Quick Start

### Prerequisites
- **Node.js** 18+ ([install with nvm](https://github.com/nvm-sh/nvm))
- **npm** 9+
- **Firebase CLI** (for deployment): `npm install -g firebase-tools`

### Installation

```bash
# Clone the repository
git clone https://github.com/Madanzo/Teonanactl.git
cd Teonanactl

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

### Deploy to Firebase

```bash
npm run build
firebase deploy --only hosting
```

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **React 18** | UI framework |
| **TypeScript** | Type safety |
| **Vite** | Build tool |
| **Tailwind CSS** | Styling |
| **Shadcn/ui** | Component library |
| **React Router 6** | Routing |
| **Firebase Hosting** | Deployment |

---

## 📁 Project Structure

```
Teonanactl/
├── checkpoints/         # Periodic project snapshots
├── src/
│   ├── assets/          # Images
│   ├── components/      # React components
│   ├── contexts/        # Cart context
│   ├── data/            # Product catalog
│   ├── pages/           # Route pages
│   └── types/           # TypeScript types
├── ARCHITECTURE.md      # System design docs
├── CHANGELOG.md         # Version history
├── DECISIONS.md         # Technical decisions
├── TODO.md              # Task backlog
└── firebase.json        # Firebase config
```

---

## 📜 Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Development server |
| `npm run build` | Production build |
| `npm run preview` | Preview build locally |
| `npm run lint` | Run ESLint |

---

## 📚 Documentation

| Document | Purpose |
|----------|---------|
| [ARCHITECTURE.md](./ARCHITECTURE.md) | System design, data flow, component relationships |
| [CHANGELOG.md](./CHANGELOG.md) | Version history with dates |
| [DECISIONS.md](./DECISIONS.md) | Why technical choices were made |
| [TODO.md](./TODO.md) | Task backlog and future features |
| [checkpoints/](./checkpoints/) | Periodic project state snapshots |

---

## 🔐 Environment Setup

1. Copy `.env.example` to `.env`
2. Fill in Firebase credentials (from Firebase Console)
3. Add Mercado Pago keys when payment integration is ready

---

## � Founders

- **Loredana Tavano** — Psicóloga
- **Arturo Martinez** — Psicólogo

---

## � License

Private and proprietary.

---

*"Conexión Sagrada con la Naturaleza"*
