import { useAppStore } from '../../store/useAppStore'

const badges = [
  { icon: '🎯', name: 'Premier Bilan', desc: 'Bilan complété', earned: true },
  { icon: '📄', name: 'CV Parfait', desc: 'Score CV 90+', earned: true },
  { icon: '💬', name: 'Simulateur', desc: '5 entretiens', earned: false },
  { icon: '🏆', name: 'Top Candidat', desc: 'Score 95+', earned: false },
]

export default function Dashboard() {
  const { addXP, showToast } = useAppStore()

  const handleTask = (xp, label) => {
    addXP(xp)
    showToast('⚡', `+${xp} XP gagnés !`, label)
  }

  return (
    <div className="page-content fade-in">
      <div style={{ marginBottom: 28 }}>
        <h1 style={{ fontSize: '1.6rem', color: 'var(--navy)' }}>Bonjour, Amara 👋</h1>
        <p style={{ color: 'var(--text-muted)', marginTop: 4 }}>Voici votre tableau de bord Career OS. Continuez à progresser !</p>
      </div>

      {/* Score Card */}
      <div className="profile-score-card" style={{ marginBottom: 24 }}>
        <div className="score-circle-wrap">
          <div className="score-circle" style={{ '--pct': 78 }}>
            <div className="score-circle-num">78</div>
          </div>
          <div>
            <div style={{ fontWeight: 700, fontSize: '1rem', marginBottom: 4 }}>Score de profil : Compétitif</div>
            <div style={{ fontSize: '0.82rem', opacity: 0.7 }}>+8 points cette semaine · Objectif : 85</div>
          </div>
        </div>
        <div className="score-tasks">
          {[
            { label: 'Compléter le bilan de compétences', done: true, color: 'var(--gold)' },
            { label: 'Ajouter une victoire professionnelle (STAR)', done: true, color: 'var(--gold)' },
            { label: 'Faire 1 simulation d\'entretien', done: false, color: 'rgba(255,255,255,0.2)' },
            { label: 'Activer votre profil recruteur', done: false, color: 'rgba(255,255,255,0.2)' },
          ].map((t, i) => (
            <div key={i} className="score-task">
              <div className="score-task-dot" style={{ background: t.color }} />
              <span style={{ opacity: t.done ? 1 : 0.6, textDecoration: t.done ? 'line-through' : 'none', fontSize: '0.8rem' }}>
                {t.label}
              </span>
              {t.done && <span style={{ color: 'var(--gold)', marginLeft: 'auto', fontSize: '0.75rem' }}>✓</span>}
            </div>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="stats-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 16, marginBottom: 24 }}>
        {[
          { n: '78', l: 'Score de profil', sub: '+8 cette semaine' },
          { n: '94%', l: 'Meilleur match', sub: 'Office Manager · Orange CI' },
          { n: '3', l: 'Offres sauvegardées', sub: '1 nouvelle aujourd\'hui' },
          { n: '7', l: 'Chemin de Vie', sub: 'Analyste & Stratège' },
        ].map((s, i) => (
          <div key={i} className="stat-card">
            <div className="stat-number">{s.n}</div>
            <div className="stat-label">{s.l}</div>
            <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', marginTop: 4 }}>{s.sub}</div>
          </div>
        ))}
      </div>

      {/* Dashboard Grid */}
      <div className="dashboard-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
        {/* Actions rapides */}
        <div className="card">
          <h3 style={{ fontSize: '1rem', color: 'var(--navy)', marginBottom: 16 }}>⚡ Actions rapides</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
              { icon: '🧠', label: 'Continuer le bilan de compétences', xp: 50, color: 'var(--info-bg)' },
              { icon: '💬', label: 'Simuler un entretien pour Office Manager', xp: 30, color: 'var(--success-bg)' },
              { icon: '📄', label: 'Générer mon CV pour l\'offre Orange CI', xp: 20, color: 'var(--gold-pale)' },
            ].map((a, i) => (
              <button
                key={i}
                style={{
                  display: 'flex', alignItems: 'center', gap: 12,
                  padding: '12px 14px', borderRadius: 8, border: '1px solid var(--border)',
                  background: a.color, cursor: 'pointer', textAlign: 'left', width: '100%',
                  fontFamily: "'DM Sans', sans-serif",
                }}
                onClick={() => handleTask(a.xp, a.label)}
              >
                <span style={{ fontSize: '1.2rem' }}>{a.icon}</span>
                <span style={{ flex: 1, fontSize: '0.85rem', fontWeight: 500 }}>{a.label}</span>
                <span style={{ fontSize: '0.72rem', color: 'var(--gold)', fontWeight: 700 }}>+{a.xp} XP</span>
              </button>
            ))}
          </div>
        </div>

        {/* Badges */}
        <div className="card">
          <h3 style={{ fontSize: '1rem', color: 'var(--navy)', marginBottom: 16 }}>🏅 Vos badges</h3>
          <div className="badge-grid">
            {badges.map((b, i) => (
              <div key={i} className={`badge-item ${b.earned ? 'earned' : 'locked'}`}>
                {b.earned && <div className="badge-earned-mark">✓</div>}
                <div className="badge-icon">{b.icon}</div>
                <div className="badge-name">{b.name}</div>
                <div className="badge-desc">{b.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Coaching */}
        <div className="card" style={{ gridColumn: '1 / -1' }}>
          <h3 style={{ fontSize: '1rem', color: 'var(--navy)', marginBottom: 12 }}>🎯 Coaching de la semaine</h3>
          <div style={{ background: 'var(--gold-pale)', borderLeft: '3px solid var(--gold)', padding: '14px 16px', borderRadius: 8 }}>
            <div style={{ fontWeight: 700, color: 'var(--warning)', fontSize: '0.82rem', marginBottom: 6 }}>
              ✦ Cette semaine — Négociation salariale
            </div>
            <p style={{ fontSize: '0.88rem', color: 'var(--text)', lineHeight: 1.6 }}>
              "La règle d'or : ne jamais donner votre chiffre en premier. Répondez à 'Quelles sont vos prétentions ?' par 'Je suis curieux(se) de connaître votre budget pour ce poste.' Cette question simple vous donne le contrôle de la négociation."
            </p>
            <button
              className="btn btn-primary btn-sm"
              style={{ marginTop: 12 }}
              onClick={() => handleTask(25, 'Module coaching lu')}
            >
              Lire la suite complète → (+25 XP)
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
