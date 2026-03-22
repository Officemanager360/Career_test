# Career OS — React + Vite

## 🚀 Démarrage en 3 commandes

```bash
# 1. Aller dans le dossier
cd career-os

# 2. Installer les dépendances
npm install

# 3. Lancer le serveur de développement
npm run dev
```

Ouvrir http://localhost:5173 dans ton navigateur.

---

## 📁 Structure du projet

```
career-os/
├── index.html                    # Point d'entrée HTML (10 lignes)
├── vite.config.js                # Config Vite
├── package.json                  # Dépendances
└── src/
    ├── main.jsx                  # Montage React
    ├── App.jsx                   # Router principal (landing/auth/app/recruiter)
    ├── store/
    │   └── useAppStore.js        # État global (Zustand)
    ├── data/
    │   └── index.js              # Toutes les données statiques
    ├── styles/
    │   ├── globals.css           # Variables, reset, utilitaires, boutons
    │   └── pages.css             # Styles landing, auth, app, recruteur
    ├── pages/
    │   ├── LandingPage.jsx       # Page d'accueil complète
    │   ├── AuthPage.jsx          # Connexion / Inscription
    │   ├── AppPage.jsx           # Shell candidat + routing
    │   └── RecruiterPage.jsx     # Shell recruteur + routing
    └── components/
        ├── ui/
        │   └── Toast.jsx         # Notifications toast
        ├── layout/
        │   └── Sidebar.jsx       # Sidebar candidat avec XP
        ├── dashboard/
        │   ├── Dashboard.jsx     # Tableau de bord candidat
        │   └── Offres.jsx        # Liste des offres d'emploi
        └── recruiter/
            ├── RecruiterSidebar.jsx    # Sidebar recruteur
            ├── RecruiterDashboard.jsx  # Dashboard recruteur
            └── RecruiterCandidats.jsx  # Liste + modal candidats
```

---

## ➕ Ajouter une nouvelle page candidat

1. Créer `src/components/dashboard/MaPage.jsx`
2. L'ajouter dans `src/pages/AppPage.jsx` :

```jsx
import MaPage from '../components/dashboard/MaPage'

const pages = {
  // ...existant
  mapage: <MaPage />,
}
```

3. Ajouter le lien dans `src/components/layout/Sidebar.jsx` dans `navItems`.

---

## 🔧 Technologies

| Outil | Rôle |
|---|---|
| **React 18** | UI composants |
| **Vite** | Build ultra-rapide |
| **Zustand** | État global simple |
| **React Router** | Navigation |
| **Lucide React** | Icônes (optionnel) |

---

## 📦 Build production

```bash
npm run build
```

Les fichiers de production seront dans `dist/`.
