import { create } from 'zustand'

export const useAppStore = create((set) => ({
  // Navigation
  currentView: 'landing', // 'landing' | 'auth' | 'app' | 'recruiter'
  setView: (view) => set({ currentView: view }),

  // Auth
  user: null,
  userType: null, // 'candidat' | 'recruiter'
  login: (userData, type) => set({ user: userData, userType: type }),
  logout: () => set({ user: null, userType: null, currentView: 'landing' }),

  // App navigation (candidat)
  activePage: 'dashboard',
  setActivePage: (page) => set({ activePage: page }),

  // Recruiter navigation
  activeRecPage: 'r-dashboard',
  setActiveRecPage: (page) => set({ activeRecPage: page }),

  // Gamification
  currentXP: 2340,
  addXP: (amount) => set((state) => ({ currentXP: state.currentXP + amount })),

  // Toast
  toast: null,
  showToast: (icon, title, message) => {
    set({ toast: { icon, title, message } })
    setTimeout(() => set({ toast: null }), 3500)
  },
}))
