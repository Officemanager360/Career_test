import { useAppStore } from '../../store/useAppStore'

const navItems = [
  { id: 'dashboard', icon: '🏠', label: 'Tableau de bord' },
  { id: 'bilan', icon: '🧠', label: 'Bilan de compétences' },
  { id: 'cv', icon: '📄', label: 'Mon CV IA' },
  { id: 'offres', icon: '💼', label: 'Offres d\'emploi' },
  { id: 'entreprises', icon: '🏢', label: 'Entreprises' },
  { id: 'entretien', icon: '💬', label: 'Simulateur entretien' },
  { id: 'salaires', icon: '💰', label: 'Grille salariale' },
  { id: 'coaching', icon: '🎯', label: 'Coaching hebdo' },
  { id: 'parametres', icon: '⚙️', label: 'Paramètres' },
]

const XP_LEVELS = [
  { name: 'Explorateur', min: 0, max: 500 },
  { name: 'Candidat Actif', min: 500, max: 1500 },
  { name: 'Professionnel', min: 1500, max: 3000 },
  { name: 'Expert Carrière', min: 3000, max: 5000 },
  { name: 'Maître Career OS', min: 5000, max: 10000 },
]

function getLevel(xp) {
  return XP_LEVELS.find((l) => xp >= l.min && xp < l.max) || XP_LEVELS[XP_LEVELS.length - 1]
}

export default function Sidebar() {
  const { activePage, setActivePage, currentXP, setView } = useAppStore()
  const level = getLevel(currentXP)
  const pct = ((currentXP - level.min) / (level.max - level.min)) * 100

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <div className="sidebar-logo">
          <div className="logo-dot" />
          Career OS
        </div>
        <div className="sidebar-user">
          <div className="avatar">AK</div>
          <div>
            <div className="sidebar-user-name">Amara Koné</div>
            <div className="sidebar-user-sub">Office Manager</div>
          </div>
        </div>
      </div>

      {/* XP Bar */}
      <div className="xp-bar-wrap">
        <div className="xp-label">
          <span className="xp-level">⚡ {level.name}</span>
          <span className="xp-points">{currentXP} XP</span>
        </div>
        <div className="xp-bar">
          <div className="xp-fill" style={{ width: `${pct}%` }} />
        </div>
        <div className="xp-next">{level.max - currentXP} XP pour le prochain niveau</div>
      </div>

      <nav className="sidebar-nav">
        <div className="nav-section-label">Menu principal</div>
        {navItems.slice(0, 5).map((item) => (
          <button
            key={item.id}
            className={`nav-item ${activePage === item.id ? 'active' : ''}`}
            onClick={() => setActivePage(item.id)}
          >
            <span className="nav-icon">{item.icon}</span>
            {item.label}
          </button>
        ))}

        <div className="nav-section-label" style={{ marginTop: 8 }}>Outils</div>
        {navItems.slice(5, 8).map((item) => (
          <button
            key={item.id}
            className={`nav-item ${activePage === item.id ? 'active' : ''}`}
            onClick={() => setActivePage(item.id)}
          >
            <span className="nav-icon">{item.icon}</span>
            {item.label}
          </button>
        ))}

        <div className="nav-section-label" style={{ marginTop: 8 }}>Compte</div>
        <button
          className={`nav-item ${activePage === 'parametres' ? 'active' : ''}`}
          onClick={() => setActivePage('parametres')}
        >
          <span className="nav-icon">⚙️</span>
          Paramètres
        </button>
      </nav>

      <div className="sidebar-bottom">
        <div className="sub-status">
          <div className="sub-status-label">Abonnement</div>
          <div style={{ color: 'var(--gold)', fontWeight: 700, fontSize: '0.82rem', margin: '3px 0' }}>
            ✦ Career OS Pro
          </div>
          <div style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.35)' }}>Renouvellement le 15 avr.</div>
        </div>
        <button
          className="nav-item"
          style={{ marginTop: 8, width: '100%' }}
          onClick={() => setView('landing')}
        >
          <span className="nav-icon">🚪</span>
          Se déconnecter
        </button>
      </div>
    </aside>
  )
}
