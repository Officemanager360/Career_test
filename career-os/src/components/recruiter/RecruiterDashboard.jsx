import { useAppStore } from '../../store/useAppStore'
import { candidates } from '../../data'

export default function RecruiterDashboard() {
  const { showToast, setActiveRecPage } = useAppStore()

  return (
    <div className="page-content fade-in">
      <div style={{ marginBottom: 24 }}>
        <h1 style={{ fontSize: '1.5rem', color: 'var(--navy)' }}>Tableau de bord recruteur</h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', marginTop: 4 }}>
          Orange Côte d'Ivoire · Plan Premium
        </p>
      </div>

      {/* Stats */}
      <div className="stats-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 16, marginBottom: 24 }}>
        {[
          { n: '147', l: 'Candidats matchés', sub: '+23 cette semaine' },
          { n: '2', l: 'Offres actives', sub: '1 expire dans 5 jours' },
          { n: '12', l: 'Crédits contacts', sub: '3 utilisés ce mois' },
          { n: '94%', l: 'Meilleur match', sub: 'Amara Koné' },
        ].map((s, i) => (
          <div key={i} className="stat-card">
            <div className="stat-number">{s.n}</div>
            <div className="stat-label">{s.l}</div>
            <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', marginTop: 4 }}>{s.sub}</div>
          </div>
        ))}
      </div>

      {/* Top candidats */}
      <div className="card" style={{ marginBottom: 20 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
          <h3 style={{ fontSize: '1rem', color: 'var(--navy)' }}>⭐ Top candidats pour vos offres</h3>
          <button className="btn btn-outline btn-sm" onClick={() => setActiveRecPage('r-candidats')}>
            Voir tous →
          </button>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {candidates.map((c) => (
            <div key={c.id} className="candidate-card" onClick={() => setActiveRecPage('r-candidats')}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                <div className="candidate-avatar-lg" style={{ background: c.gradient }}>{c.initials}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 700, color: 'var(--navy)', fontSize: '0.95rem' }}>{c.name}</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{c.title}</div>
                  <div style={{ display: 'flex', gap: 6, marginTop: 6, flexWrap: 'wrap' }}>
                    {c.tags.map((tag, i) => (
                      <span key={i} className="badge badge-green" style={{ fontSize: '0.68rem' }}>{tag}</span>
                    ))}
                  </div>
                </div>
                <div style={{ textAlign: 'center', background: 'var(--gold-pale)', padding: '10px 16px', borderRadius: 8 }}>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.4rem', fontWeight: 700, color: 'var(--navy)' }}>
                    {c.score}%
                  </div>
                  <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)' }}>Match</div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  <button className="btn btn-primary btn-sm"
                    onClick={(e) => { e.stopPropagation(); showToast('✉️', 'Message envoyé !', `${c.name} sera notifié(e) via Career OS`) }}>
                    ✉️ Contacter
                  </button>
                  <button className="btn btn-ghost btn-sm"
                    onClick={(e) => { e.stopPropagation(); showToast('🔖', 'Profil sauvegardé !', c.name) }}>
                    🔖 Sauvegarder
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Publier offre */}
      <div className="card" style={{ background: 'var(--navy)', color: 'white' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <h3 style={{ color: 'white', fontSize: '1rem', marginBottom: 6 }}>📋 Publier une nouvelle offre</h3>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem' }}>
              Atteignez les 2 400+ candidats Career OS en quelques clics.
            </p>
          </div>
          <button className="btn btn-gold" onClick={() => setActiveRecPage('r-offres')}>
            Créer une offre →
          </button>
        </div>
      </div>
    </div>
  )
}
