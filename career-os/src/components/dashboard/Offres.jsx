import { useState } from 'react'
import { offres } from '../../data'
import { useAppStore } from '../../store/useAppStore'

const cats = [
  { id: 'all', label: 'Toutes les offres' },
  { id: 'admin', label: '📋 Administration' },
  { id: 'rh', label: '👥 RH' },
  { id: 'finance', label: '💰 Finance' },
  { id: 'commercial', label: '📈 Commercial' },
]

export default function Offres() {
  const [activeCat, setActiveCat] = useState('all')
  const [search, setSearch] = useState('')
  const { showToast } = useAppStore()

  const filtered = offres.filter((o) => {
    const matchCat = activeCat === 'all' || o.cat === activeCat
    const matchSearch = o.titre.toLowerCase().includes(search.toLowerCase()) ||
      o.entreprise.toLowerCase().includes(search.toLowerCase())
    return matchCat && matchSearch
  })

  return (
    <div className="page-content fade-in">
      <div style={{ marginBottom: 20 }}>
        <h1 style={{ fontSize: '1.5rem', color: 'var(--navy)' }}>💼 Offres pour vous</h1>
        <p style={{ color: 'var(--text-muted)', marginTop: 4, fontSize: '0.88rem' }}>
          {offres.length} offres matchées à votre profil · Triées par score d'affinité
        </p>
      </div>

      <input
        className="form-input"
        placeholder="🔍 Rechercher un poste, une entreprise..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ marginBottom: 16 }}
      />

      <div className="offre-filters">
        {cats.map((c) => (
          <button
            key={c.id}
            className={`filter-btn ${activeCat === c.id ? 'active' : ''}`}
            onClick={() => setActiveCat(c.id)}
          >
            {c.label}
          </button>
        ))}
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {filtered.map((o) => (
          <div key={o.id} className={`offre-card ${o.featured ? 'featured' : ''}`}>
            <div className="offre-logo">{o.logo}</div>
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 6 }}>
                <div>
                  <div style={{ fontWeight: 700, color: 'var(--text)', fontSize: '0.95rem' }}>{o.titre}</div>
                  <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                    {o.entreprise} · {o.lieu} · {o.contrat}
                  </div>
                </div>
                <div style={{ textAlign: 'right', flexShrink: 0 }}>
                  <div className="offre-match" style={o.match < 90 ? { color: 'var(--navy)', background: 'var(--info-bg)' } : {}}>
                    ⚡ {o.match}% match
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: 3 }}>{o.publie}</div>
                </div>
              </div>
              <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: 10 }}>
                {o.description}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
                <span className="badge badge-gold">{o.salaire}</span>
                {o.skills.map((s, i) => <span key={i} className="skill-pill">{s}</span>)}
                <div style={{ marginLeft: 'auto', display: 'flex', gap: 8 }}>
                  <button
                    className="btn btn-ghost btn-sm"
                    onClick={() => showToast('🔖', 'Offre sauvegardée !', o.titre)}
                  >
                    🔖 Sauvegarder
                  </button>
                  <button
                    className="btn btn-primary btn-sm"
                    onClick={() => showToast('🚀', 'Candidature envoyée !', `Votre CV a été transmis à ${o.entreprise}`)}
                  >
                    Postuler en 30s →
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
        {filtered.length === 0 && (
          <div style={{ textAlign: 'center', padding: '48px 0', color: 'var(--text-muted)' }}>
            Aucune offre ne correspond à votre recherche.
          </div>
        )}
      </div>
    </div>
  )
}
