import { useAppStore } from '../store/useAppStore'
import Sidebar from '../components/layout/Sidebar'
import Dashboard from '../components/dashboard/Dashboard'
import Offres from '../components/dashboard/Offres'

// Pages placeholder
function PlaceholderPage({ title, icon }) {
  return (
    <div className="page-content fade-in" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '60vh' }}>
      <div style={{ fontSize: '3rem', marginBottom: 16 }}>{icon}</div>
      <h2 style={{ color: 'var(--navy)', marginBottom: 8 }}>{title}</h2>
      <p style={{ color: 'var(--text-muted)' }}>Cette section est en cours de développement.</p>
    </div>
  )
}

const pages = {
  dashboard: <Dashboard />,
  offres: <Offres />,
  bilan: <PlaceholderPage title="Bilan de compétences" icon="🧠" />,
  cv: <PlaceholderPage title="Mon CV IA" icon="📄" />,
  entreprises: <PlaceholderPage title="Entreprises" icon="🏢" />,
  entretien: <PlaceholderPage title="Simulateur d'entretien" icon="💬" />,
  salaires: <PlaceholderPage title="Grille salariale" icon="💰" />,
  coaching: <PlaceholderPage title="Coaching hebdomadaire" icon="🎯" />,
  parametres: <PlaceholderPage title="Paramètres" icon="⚙️" />,
}

export default function AppPage() {
  const { activePage } = useAppStore()

  return (
    <div id="view-app">
      <Sidebar />
      <main className="main-content" style={{ marginLeft: 'var(--sidebar-w)', flex: 1, minHeight: '100vh', background: 'var(--bg)' }}>
        {pages[activePage] || <Dashboard />}
      </main>
    </div>
  )
}
