import { useState } from 'react'
import { useAppStore } from '../../store/useAppStore'

export default function AuthPage() {
  const { setView, login } = useAppStore()
  const [mode, setMode] = useState('candidat') // 'candidat' | 'recruiter'
  const [tab, setTab] = useState('login') // 'login' | 'register'

  const handleLogin = (type) => {
    if (type === 'recruiter') {
      login({ name: 'Orange CI', email: 'rh@orange.ci' }, 'recruiter')
      setView('recruiter')
    } else {
      login({ name: 'Amara Koné', email: 'amara@email.com' }, 'candidat')
      setView('app')
    }
  }

  return (
    <div id="view-auth">
      <div className="auth-card">
        <div className="auth-logo">
          <div className="logo" style={{ justifyContent: 'center', fontSize: '1.4rem' }}>
            <div className="logo-dot" />
            Career OS
          </div>
          <p style={{ marginTop: 8, fontSize: '0.85rem', color: 'var(--text-muted)' }}>
            {mode === 'recruiter'
              ? 'Accédez aux profils enrichis des candidats Career OS'
              : 'Votre système d\'exploitation de carrière'}
          </p>
        </div>

        {/* Mode Switch */}
        <div style={{ display: 'flex', gap: 8, marginBottom: 24 }}>
          <button
            className="btn btn-sm"
            style={{
              flex: 1,
              background: mode === 'candidat' ? 'var(--navy)' : 'white',
              color: mode === 'candidat' ? 'white' : 'var(--text-muted)',
              border: `1.5px solid ${mode === 'candidat' ? 'var(--navy)' : 'var(--border)'}`,
            }}
            onClick={() => setMode('candidat')}
          >
            👤 Candidat
          </button>
          <button
            className="btn btn-sm"
            style={{
              flex: 1,
              background: mode === 'recruiter' ? 'var(--gold)' : 'white',
              color: mode === 'recruiter' ? 'var(--navy-dark)' : 'var(--text-muted)',
              border: `1.5px solid ${mode === 'recruiter' ? 'var(--gold)' : 'var(--border)'}`,
            }}
            onClick={() => setMode('recruiter')}
          >
            🏢 Recruteur
          </button>
        </div>

        {mode === 'candidat' && (
          <>
            {/* Tabs */}
            <div className="auth-tabs" style={{ marginBottom: 24 }}>
              <div className={`auth-tab ${tab === 'login' ? 'active' : ''}`} onClick={() => setTab('login')}>Connexion</div>
              <div className={`auth-tab ${tab === 'register' ? 'active' : ''}`} onClick={() => setTab('register')}>Inscription</div>
            </div>

            {tab === 'login' ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <div className="form-group">
                  <label className="form-label">Email</label>
                  <input className="form-input" type="email" placeholder="amara@email.com" defaultValue="amara@email.com" />
                </div>
                <div className="form-group">
                  <label className="form-label">Mot de passe</label>
                  <input className="form-input" type="password" placeholder="••••••••" defaultValue="password" />
                </div>
                <button className="btn btn-primary btn-full btn-lg" onClick={() => handleLogin('candidat')}>
                  Se connecter →
                </button>
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Prénom</label>
                    <input className="form-input" type="text" placeholder="Amara" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Nom</label>
                    <input className="form-input" type="text" placeholder="Koné" />
                  </div>
                </div>
                <div className="form-group">
                  <label className="form-label">Email</label>
                  <input className="form-input" type="email" placeholder="amara@email.com" />
                </div>
                <div className="form-group">
                  <label className="form-label">Date de naissance</label>
                  <input className="form-input" type="date" />
                </div>
                <div className="form-group">
                  <label className="form-label">Mot de passe</label>
                  <input className="form-input" type="password" placeholder="••••••••" />
                </div>
                <button className="btn btn-gold btn-full btn-lg" onClick={() => handleLogin('candidat')}>
                  Créer mon profil Career OS →
                </button>
              </div>
            )}
          </>
        )}

        {mode === 'recruiter' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div className="form-group">
              <label className="form-label">Email professionnel</label>
              <input className="form-input" type="email" placeholder="rh@entreprise.com" defaultValue="rh@orange.ci" />
            </div>
            <div className="form-group">
              <label className="form-label">Mot de passe</label>
              <input className="form-input" type="password" placeholder="••••••••" defaultValue="password" />
            </div>
            <button className="btn btn-gold btn-full btn-lg" onClick={() => handleLogin('recruiter')}>
              Accéder à l'espace recruteur →
            </button>
          </div>
        )}

        <div style={{ textAlign: 'center', marginTop: 20 }}>
          <button
            style={{ background: 'none', border: 'none', color: 'var(--text-muted)', fontSize: '0.82rem', cursor: 'pointer' }}
            onClick={() => setView('landing')}
          >
            ← Retour à l'accueil
          </button>
        </div>
      </div>
    </div>
  )
}
