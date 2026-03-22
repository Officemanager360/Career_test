// Fake database

const DB = {
  user: null,
  stats: {
    score: 92,
    applications: 12,
    interviews: 4
  },
  personality: {
    openness: 78,
    conscientiousness: 82,
    extraversion: 65,
    agreeableness: 88,
    neuroticism: 40
  },
  skills: [
    { name: "Communication", level: "Avancé" },
    { name: "Organisation", level: "Expert" },
    { name: "Excel", level: "Intermédiaire" }
  ],
  jobs: [
    { company: "Orange CI", role: "Office Manager" },
    { company: "MTN", role: "Assistant Admin" }
  ],
  coaching: [
    "Améliore ton storytelling en entretien",
    "Travaille ton pitch de présentation",
    "Cible mieux tes offres"
  ]
};
