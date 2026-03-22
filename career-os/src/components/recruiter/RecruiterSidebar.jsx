import { useAppStore } from '../../store/useAppStore'

const recNavItems = [
  { id: 'r-dashboard', icon: '🏠', label: 'Tableau de bord' },
  { id: 'r-candidats', icon: '👥', label: 'Candidats' },
  { id: 'r-offres', icon: '📋', label: 'Mes offres' },
  { id: 'r-entreprise', icon: '🏢', label: 'Mon entreprise' },
  { id: 'r-settings', icon: '⚙️', label: 'Paramètres' },
]

export default function RecruiterSidebar() {
  const { activeRecPage, setActiveRecPage, setView } = useAppStore()

  return (
    <aside className="rec-sidebar">
      <div className="rec-sidebar-header">
        <div className="rec-badge">🏢 Espace Recruteur</div>
        <div className="sidebar-logo" style={{ color: 'white', fontSize: '1.1rem' }}>
          <div className="logo-dot" />Career OS
        </div>
        <div className="sidebar-user" style={{ marginTop: 14 }}>
          <div className="avatar">OCI</div>
          <div>
            <div className="sidebar-user-name">Orange Côte d'Ivoire</div>
            <div className="sidebar-user-sub">Recruteur Premium</div>
          </div>
        </div>
      </div>

      <nav className="sidebar-nav">
        {recNavItems.map((item) => (
          <button
            key={item.id}
            className={`nav-item ${activeRecPage === item.id ? 'active' : ''}`}
            onClick={() => setActiveRecPage(item.id)}
          >
            <span className="nav-icon">{item.icon}</span>
            {item.label}
          </button>
        ))}
      </nav>

      <div className="sidebar-bottom">
        <div className="sub-status">
          <div className="sub-status-label">Plan recruteur</div>
          <div style={{ color: 'var(--gold)', fontWeight: 700, fontSize: '0.82rem', margin: '3px 0' }}>✦ Premium — 25 000 FCFA/mois</div>
          <div style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.35)' }}>12 crédits contacts restants</div>
        </div>
        <button className="nav-item" style={{ marginTop: 8, width: '100%' }} onClick={() => setView('landing')}>
          <span className="nav-icon">🚪</span>Se déconnecter
        </button>
      </div>
    </aside>
  )
}
