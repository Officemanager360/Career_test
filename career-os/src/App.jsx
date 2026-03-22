import { useAppStore } from './store/useAppStore'
import LandingPage from './pages/LandingPage'
import AuthPage from './pages/AuthPage'
import AppPage from './pages/AppPage'
import RecruiterPage from './pages/RecruiterPage'
import Toast from './components/ui/Toast'
import './styles/pages.css'

export default function App() {
  const { currentView } = useAppStore()

  return (
    <>
      {currentView === 'landing' && <LandingPage />}
      {currentView === 'auth' && <AuthPage />}
      {currentView === 'app' && <AppPage />}
      {currentView === 'recruiter' && <RecruiterPage />}
      <Toast />
    </>
  )
}
