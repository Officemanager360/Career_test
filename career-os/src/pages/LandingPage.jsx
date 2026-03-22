import { useState } from 'react'
import { useAppStore } from '../../store/useAppStore'
import { features, testimonials, faqs } from '../../data'

function HeroCards() {
  return (
    <div className="hero-visual">
      <div className="hero-card-stack">
        <div className="hcard hcard-1">
          <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', marginBottom: 6 }}>Score de profil</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{
              width: 44, height: 44, borderRadius: '50%',
              background: 'conic-gradient(var(--gold) 78%, var(--border) 0)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative'
            }}>
              <div style={{ position: 'absolute', width: 32, height: 32, background: 'white', borderRadius: '50%' }} />
              <span style={{ position: 'relative', fontSize: '0.65rem', fontWeight: 700, color: 'var(--navy)' }}>78</span>
            </div>
            <div>
              <div style={{ fontWeight: 700, fontSize: '0.88rem', color: 'var(--navy)' }}>Profil Compétitif</div>
              <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>+12 pts cette semaine</div>
            </div>
          </div>
        </div>
        <div className="hcard hcard-2">
          <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', marginBottom: 8 }}>Nouveau match</div>
          <div style={{ fontWeight: 700, fontSize: '0.85rem', color: 'var(--text)' }}>Office Manager</div>
          <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Orange CI</div>
          <div style={{ marginTop: 8, background: 'var(--success-bg)', color: 'var(--success)', fontSize: '0.75rem', fontWeight: 700, padding: '3px 8px', borderRadius: 99, display: 'inline-block' }}>
            ⚡ 94% match
          </div>
        </div>
        <div className="hcard hcard-3">
          <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', marginBottom: 6 }}>Salaire estimé</div>
          <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.1rem', fontWeight: 700, color: 'var(--navy)' }}>
            520 000 FCFA
          </div>
          <div style={{ fontSize: '0.72rem', color: 'var(--success)', marginTop: 3 }}>↑ +8% vs offres similaires</div>
        </div>
      </div>
    </div>
  )
}

function FaqItem({ faq }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="faq-item">
      <button className={`faq-q ${open ? 'open' : ''}`} onClick={() => setOpen(!open)}>
        {faq.q}
        <span className="faq-chevron">▼</span>
      </button>
      <div className={`faq-a ${open ? 'open' : ''}`} style={{ padding: open ? '0 0 20px' : 0 }}>
        {faq.a}
      </div>
    </div>
  )
}

export default function LandingPage() {
  const { setView } = useAppStore()

  return (
    <div id="view-landing">
      {/* NAV */}
      <nav className="landing-nav">
        <div className="logo">
          <div className="logo-dot" />
          Career OS
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <button className="btn btn-ghost btn-sm" onClick={() => setView('auth')}>Connexion</button>
          <button className="btn btn-primary btn-sm" onClick={() => setView('auth')}>Commencer gratuitement</button>
          <button className="btn btn-gold btn-sm" onClick={() => setView('auth')}>Recruteurs →</button>
        </div>
      </nav>

      {/* HERO */}
      <div className="landing-hero">
        <div className="hero-content">
          <div className="hero-tag">
            <span>🇨🇮</span> Conçu pour le marché ivoirien
          </div>
          <h1 className="hero-title">
            Votre carrière,<br />
            <em>enfin pilotée</em><br />
            par l'IA
          </h1>
          <p className="hero-subtitle">
            Career OS analyse vos compétences, construit votre profil professionnel et vous connecte aux meilleures entreprises d'Abidjan — en moins de 10 minutes.
          </p>
          <div className="hero-cta">
            <button className="btn btn-primary btn-lg" onClick={() => setView('auth')}>
              Créer mon profil gratuitement →
            </button>
            <button className="btn btn-outline btn-lg" onClick={() => { setView('app') }}>
              Voir la démo
            </button>
          </div>
          <div className="hero-proof">
            <div className="proof-avatars">
              {['AK','MB','FD','KT','NS'].map((i) => (
                <div key={i} className="proof-avatar">{i}</div>
              ))}
            </div>
            <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
              <strong style={{ color: 'var(--text)' }}>+2 400</strong> professionnels ivoiriens
            </div>
          </div>
        </div>
        <HeroCards />
      </div>

      {/* FEATURES */}
      <div className="features-section">
        <div className="section-header">
          <div className="section-label">Fonctionnalités</div>
          <h2 className="section-title">Tout ce dont vous avez besoin pour réussir</h2>
          <p className="section-sub">Un système complet qui couvre chaque étape de votre parcours professionnel.</p>
        </div>
        <div className="features-grid">
          {features.map((f, i) => (
            <div key={i} className="feature-card">
              <div className="feature-icon">{f.icon}</div>
              <div className="feature-title">{f.title}</div>
              <p className="feature-desc">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* PRICING */}
      <div className="pricing-section">
        <div className="section-header">
          <div className="section-label">Tarifs</div>
          <h2 className="section-title">Simple. Transparent. Juste.</h2>
          <p className="section-sub">Commencez gratuitement. Passez Premium quand vous êtes prêt.</p>
        </div>
        <div className="pricing-grid">
          {[
            { name: 'Gratuit', price: '0', period: '/mois', feats: ['Profil de base', 'Bilan partiel (3 compétences)', 'Vue des offres limitée'], cta: 'Commencer', outline: true },
            { name: 'Pro', price: '9 900', period: 'FCFA/mois', feats: ['Profil complet + Portrait', 'CV IA illimité', 'Matching entreprises', 'Simulateur entretien', 'Grille salariale', 'Coaching hebdo'], cta: 'Choisir Pro', featured: true },
            { name: 'Élite', price: '24 900', period: 'FCFA/mois', feats: ['Tout Pro +', 'Accompagnement humain', 'Revue CV par expert', 'Accès réseau exclusif'], cta: 'Choisir Élite', outline: true },
          ].map((plan, i) => (
            <div key={i} className={`price-card ${plan.featured ? 'featured' : ''}`}>
              {plan.featured && <div className="price-featured-badge">⭐ Le plus populaire</div>}
              <div className="price-plan">{plan.name}</div>
              <div className="price-amount">
                {plan.price === '0' ? 'Gratuit' : plan.price}
                {plan.price !== '0' && <span style={{ fontSize: '0.9rem', fontWeight: 400 }}> {plan.period}</span>}
              </div>
              <div className="price-features">
                {plan.feats.map((f, j) => <div key={j} className="price-feat">{f}</div>)}
              </div>
              <button
                className={`btn ${plan.featured ? 'btn-gold' : 'btn-outline'} btn-full`}
                style={!plan.featured ? { borderColor: 'rgba(255,255,255,0.3)', color: 'white' } : {}}
                onClick={() => setView('auth')}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* TESTIMONIALS */}
      <div className="testimonials-section">
        <div className="section-header">
          <div className="section-label">Témoignages</div>
          <h2 className="section-title">Ils ont transformé leur carrière</h2>
        </div>
        <div className="testi-track-wrap">
          <div className="testi-track">
            {[...testimonials, ...testimonials].map((t, i) => (
              <div key={i} className="testi-card">
                <div className="testi-stars">{'★'.repeat(t.stars)}{'☆'.repeat(5 - t.stars)}</div>
                <p className="testi-text">"{t.text}"</p>
                <div className="testi-author">
                  <div className="testi-avatar" style={{ background: t.gradient || undefined }}>{t.initials}</div>
                  <div>
                    <div className="testi-name">{t.name}</div>
                    <div className="testi-role">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="faq-section">
        <div className="section-header">
          <div className="section-label">Vos questions</div>
          <h2 className="section-title">Questions fréquentes</h2>
          <p className="section-sub">Tout ce que vous devez savoir avant de commencer.</p>
        </div>
        <div className="faq-list">
          {faqs.map((faq, i) => <FaqItem key={i} faq={faq} />)}
        </div>
      </div>

      {/* FOOTER */}
      <footer style={{ background: 'var(--navy-dark)', padding: '32px 48px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div className="sidebar-logo" style={{ color: 'white' }}>
          <div className="logo-dot" />Career OS
        </div>
        <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.35)' }}>© 2026 Career OS — Abidjan, Côte d'Ivoire</div>
        <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.35)' }}>Propulsé par IA · Paiement via Djamo</div>
      </footer>

      {/* WhatsApp FAB */}
      <a
        href="https://wa.me/2250700000000"
        className="whatsapp-fab"
        target="_blank"
        rel="noreferrer"
        style={{
          position: 'fixed', bottom: 28, right: 28, width: 56, height: 56,
          background: '#25D366', borderRadius: '50%', display: 'flex',
          alignItems: 'center', justifyContent: 'center', fontSize: '1.6rem',
          boxShadow: '0 4px 20px rgba(37,211,102,0.4)', zIndex: 90,
          textDecoration: 'none',
        }}
      >
        💬
      </a>
    </div>
  )
}
