import { useAppStore } from '../store/useAppStore'
import RecruiterSidebar from '../components/recruiter/RecruiterSidebar'
import RecruiterDashboard from '../components/recruiter/RecruiterDashboard'
import RecruiterCandidats from '../components/recruiter/RecruiterCandidats'

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
  'r-dashboard': <RecruiterDashboard />,
  'r-candidats': <RecruiterCandidats />,
  'r-offres': <PlaceholderPage title="Mes offres" icon="📋" />,
  'r-entreprise': <PlaceholderPage title="Mon entreprise" icon="🏢" />,
  'r-settings': <PlaceholderPage title="Paramètres" icon="⚙️" />,
}

export default function RecruiterPage() {
  const { activeRecPage } = useAppStore()

  return (
    <div id="view-recruiter">
      <RecruiterSidebar />
      <main className="rec-main" style={{ flex: 1, minHeight: '100vh', background: 'var(--bg)' }}>
        {pages[activeRecPage] || <RecruiterDashboard />}
      </main>
    </div>
  )
}
