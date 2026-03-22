import { useState } from 'react'
import { candidates } from '../../data'
import { useAppStore } from '../../store/useAppStore'

export default function RecruiterCandidats() {
  const { showToast } = useAppStore()
  const [selected, setSelected] = useState(null)

  return (
    <div className="page-content fade-in">
      <div style={{ marginBottom: 20 }}>
        <h1 style={{ fontSize: '1.5rem', color: 'var(--navy)' }}>👥 Candidats matchés</h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', marginTop: 4 }}>
          147 profils Career OS correspondent à vos critères
        </p>
      </div>

      <input className="form-input" placeholder="🔍 Rechercher par nom, compétence, ville..." style={{ marginBottom: 16 }} />

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
        {candidates.map((c) => (
          <div key={c.id} className="candidate-card" onClick={() => setSelected(c)}>
            <div style={{ display: 'flex', gap: 14, marginBottom: 14 }}>
              <div className="candidate-avatar-lg" style={{ background: c.gradient }}>{c.initials}</div>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div>
                    <div style={{ fontWeight: 700, color: 'var(--navy)' }}>{c.name}</div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>{c.title}</div>
                  </div>
                  <div style={{ textAlign: 'center', background: 'var(--gold-pale)', padding: '6px 10px', borderRadius: 8 }}>
                    <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.2rem', fontWeight: 700, color: 'var(--navy)' }}>{c.score}%</div>
                    <div style={{ fontSize: '0.62rem', color: 'var(--text-muted)' }}>Match</div>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: 5, marginTop: 6, flexWrap: 'wrap' }}>
                  {c.tags.map((t, i) => <span key={i} className="badge badge-green" style={{ fontSize: '0.65rem' }}>{t}</span>)}
                </div>
              </div>
            </div>

            {/* Skills preview */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginBottom: 14 }}>
              {c.skills.slice(0, 2).map((s, i) => (
                <div key={i}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.78rem', marginBottom: 3 }}>
                    <span>{s.name}</span>
                    <span style={{ fontWeight: 700, color: 'var(--navy)' }}>{s.level}</span>
                  </div>
                  <div className="progress-bar"><div className="progress-fill" style={{ width: `${s.pct}%` }} /></div>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', gap: 8 }}>
              <button className="btn btn-primary btn-sm" style={{ flex: 1 }}
                onClick={(e) => { e.stopPropagation(); showToast('✉️', 'Message envoyé !', c.name) }}>
                ✉️ Contacter
              </button>
              <button className="btn btn-ghost btn-sm"
                onClick={(e) => { e.stopPropagation(); showToast('🔖', 'Profil sauvegardé !', c.name) }}>
                🔖
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal profil */}
      {selected && (
        <div className="profile-modal-overlay" onClick={() => setSelected(null)}>
          <div className="profile-modal" onClick={(e) => e.stopPropagation()}>
            <div style={{ padding: 28 }}>
              <div style={{ display: 'flex', gap: 16, marginBottom: 20 }}>
                <div className="candidate-avatar-lg" style={{ background: selected.gradient, width: 64, height: 64, fontSize: '1.2rem' }}>
                  {selected.initials}
                </div>
                <div style={{ flex: 1 }}>
                  <h2 style={{ fontSize: '1.2rem', color: 'var(--navy)' }}>{selected.name}</h2>
                  <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>{selected.title} · {selected.location}</div>
                  <div style={{ display: 'flex', gap: 6, marginTop: 8 }}>
                    {selected.tags.map((t, i) => <span key={i} className="badge badge-green">{t}</span>)}
                  </div>
                </div>
                <div style={{ textAlign: 'center', background: 'var(--gold-pale)', padding: '12px 18px', borderRadius: 10 }}>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '2rem', fontWeight: 700, color: 'var(--navy)' }}>{selected.score}%</div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Score Career OS</div>
                </div>
              </div>

              <div style={{ marginBottom: 20 }}>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '0.95rem', color: 'var(--navy)', marginBottom: 12 }}>
                  Compétences validées par l'IA
                </div>
                {selected.skills.map((s, i) => (
                  <div key={i} style={{ marginBottom: 10 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.82rem', marginBottom: 4 }}>
                      <span style={{ fontWeight: 500 }}>{s.name}</span>
                      <span style={{ fontWeight: 700, color: 'var(--navy)' }}>{s.level}</span>
                    </div>
                    <div className="progress-bar"><div className="progress-fill" style={{ width: `${s.pct}%` }} /></div>
                  </div>
                ))}
              </div>

              <div style={{ marginBottom: 20 }}>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '0.95rem', color: 'var(--navy)', marginBottom: 10 }}>Soft skills</div>
                <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                  {selected.softSkills.map((s, i) => <span key={i} className="badge badge-gold">{s}</span>)}
                </div>
              </div>

              <div style={{ marginBottom: 24 }}>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '0.95rem', color: 'var(--navy)', marginBottom: 10 }}>Victoires professionnelles</div>
                {selected.achievements.map((a, i) => (
                  <div key={i} style={{ display: 'flex', gap: 8, fontSize: '0.83rem', marginBottom: 8 }}>
                    <span style={{ color: 'var(--gold)' }}>✦</span><span>{a}</span>
                  </div>
                ))}
              </div>

              <div style={{ display: 'flex', gap: 10, paddingTop: 16, borderTop: '1px solid var(--border)' }}>
                <button className="btn btn-primary" onClick={() => { showToast('✉️', 'Message envoyé !', selected.name); setSelected(null) }}>
                  ✉️ Contacter ce candidat
                </button>
                <button className="btn btn-ghost" onClick={() => showToast('🔖', 'Profil sauvegardé !', selected.name)}>
                  🔖 Sauvegarder
                </button>
                <button className="btn btn-ghost" style={{ marginLeft: 'auto' }} onClick={() => setSelected(null)}>Fermer</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
