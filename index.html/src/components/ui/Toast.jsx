import { useEffect, useState } from 'react'
import { useAppStore } from '../../store/useAppStore'

export default function Toast() {
  const toast = useAppStore((s) => s.toast)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (toast) {
      setVisible(true)
    } else {
      setVisible(false)
    }
  }, [toast])

  if (!toast && !visible) return null

  return (
    <div className={`badge-toast ${visible && toast ? 'show' : ''}`}>
      <span className="badge-toast-icon">{toast?.icon}</span>
      <div>
        <div style={{ fontWeight: 700, fontSize: '0.9rem' }}>{toast?.title}</div>
        <div style={{ fontSize: '0.8rem', opacity: 0.7 }}>{toast?.message}</div>
      </div>
    </div>
  )
}
