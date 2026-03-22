// ================================================================
// DATA — Offres d'emploi
// ================================================================
export const offres = [
  {
    id: 0,
    logo: 'OCI',
    titre: 'Office Manager',
    entreprise: 'Orange Côte d\'Ivoire',
    lieu: 'Plateau, Abidjan',
    contrat: 'CDI',
    match: 94,
    salaire: '450 000 – 600 000 FCFA',
    publie: 'Publié aujourd\'hui',
    description: 'Coordination administrative de la direction générale, gestion des agendas C-suite, organisation d\'événements corporate et supervision des prestataires...',
    skills: ['Gestion d\'agenda', 'Odoo ERP', 'Bilingue FR/EN'],
    cat: 'admin',
    featured: true,
  },
  {
    id: 1,
    logo: 'TCI',
    titre: 'Executive Assistant — Direction Régionale',
    entreprise: 'TotalEnergies CI',
    lieu: 'Cocody, Abidjan',
    contrat: 'CDI',
    match: 91,
    salaire: '500 000 – 700 000 FCFA',
    publie: 'Publié hier',
    description: 'Support au Directeur Régional Afrique de l\'Ouest. Gestion des déplacements internationaux, rédaction de comptes-rendus en anglais, coordination des équipes projets.',
    skills: ['Communication EN', 'Coordination'],
    cat: 'admin',
    featured: true,
  },
  {
    id: 2,
    logo: 'MTN',
    titre: 'Assistante de Direction',
    entreprise: 'MTN Côte d\'Ivoire',
    lieu: 'Marcory, Abidjan',
    contrat: 'CDI',
    match: 85,
    salaire: '380 000 – 480 000 FCFA',
    publie: 'Il y a 2 jours',
    description: 'Gestion administrative quotidienne, organisation des réunions et comités, suivi des tableaux de bord de la direction commerciale.',
    skills: ['Admin', 'Suite Office'],
    cat: 'admin',
    featured: false,
  },
  {
    id: 3,
    logo: 'ECB',
    titre: 'Coordinatrice RH & Administrative',
    entreprise: 'Ecobank CI',
    lieu: 'Plateau, Abidjan',
    contrat: 'CDI',
    match: 83,
    salaire: '350 000 – 450 000 FCFA',
    publie: 'Il y a 3 jours',
    description: 'Interface entre la DRH et les managers opérationnels. Suivi des contrats, gestion des entrées/sorties, administration Odoo RH.',
    skills: ['Odoo RH', 'Gestion contrats'],
    cat: 'rh',
    featured: false,
  },
]

// ================================================================
// DATA — Candidats (vue recruteur)
// ================================================================
export const candidates = [
  {
    id: 'c1',
    initials: 'AK',
    name: 'Amara Koné',
    title: 'Office Manager · 5 ans exp.',
    location: 'Abidjan, Plateau',
    score: 94,
    tags: ['Disponible', 'Open to work'],
    skills: [
      { name: 'Gestion administrative', level: 'Expert', pct: 95 },
      { name: 'Odoo ERP', level: 'Confirmé', pct: 80 },
      { name: 'Communication bilingue', level: 'Expert', pct: 92 },
    ],
    softSkills: ['Leadership', 'Organisation', 'Rigueur', 'Communication'],
    achievements: [
      'Réduction de 40% du temps de traitement des contrats chez Orange CI',
      'Mise en place d\'un système d\'archivage numérique pour 3 000+ documents',
    ],
    gradient: 'linear-gradient(135deg,#1E3A5F,#2B5080)',
  },
  {
    id: 'c2',
    initials: 'FD',
    name: 'Fatoumata Diallo',
    title: 'Executive Assistant · 7 ans exp.',
    location: 'Abidjan, Cocody',
    score: 91,
    tags: ['En poste', 'Ouvert aux opportunités'],
    skills: [
      { name: 'Support direction', level: 'Expert', pct: 98 },
      { name: 'Gestion agenda C-suite', level: 'Expert', pct: 95 },
      { name: 'Anglais professionnel', level: 'Confirmé', pct: 85 },
    ],
    softSkills: ['Discrétion', 'Anticipation', 'Polyvalence'],
    achievements: [
      'Gestion agenda du PDG d\'une multinationale pendant 4 ans',
      'Organisation de 12 séminaires internationaux avec 200+ participants',
    ],
    gradient: 'linear-gradient(135deg,#2E7D52,#4CAF50)',
  },
]

// ================================================================
// DATA — Témoignages
// ================================================================
export const testimonials = [
  {
    stars: 5,
    text: 'Le bilan de compétences m\'a révélé des forces que je ne savais pas mettre en valeur. En 3 semaines j\'ai décroché un entretien chez Orange CI que je n\'aurais même pas osé cibler avant.',
    initials: 'AK',
    name: 'Amara Koné',
    role: 'Office Manager · Abidjan',
    gradient: '',
  },
  {
    stars: 5,
    text: 'La grille salariale m\'a sauvé la mise. J\'allais accepter une offre 30% sous le marché. Grâce au script de négociation, j\'ai obtenu 100 000 FCFA de plus.',
    initials: 'MB',
    name: 'Mamadou Bamba',
    role: 'Responsable Commercial · Bouaké',
    gradient: 'linear-gradient(135deg,#B45309,#D97706)',
  },
  {
    stars: 5,
    text: 'Le simulateur d\'entretien est bluffant. J\'ai fait 5 simulations avant mon entretien chez TotalEnergies — j\'ai été embauchée dès le premier tour.',
    initials: 'FD',
    name: 'Fatoumata Diallo',
    role: 'Executive Assistant · Abidjan',
    gradient: 'linear-gradient(135deg,#2E7D52,#4CAF50)',
  },
  {
    stars: 5,
    text: 'Mon portrait de personnalité m\'a littéralement réconcilié avec ma trajectoire professionnelle. Career OS m\'a donné le langage pour valoriser mes forces.',
    initials: 'KT',
    name: 'Kouamé Touré',
    role: 'Coordinateur Admin · San Pedro',
    gradient: 'linear-gradient(135deg,#1565C0,#42A5F5)',
  },
  {
    stars: 5,
    text: 'J\'ai posé 12 candidatures en 2 semaines avec des CV générés par Career OS. 4 réponses positives. Mon taux de succès avant était de 0%.',
    initials: 'NS',
    name: 'Nadia Sanogo',
    role: 'Assistante RH · Abidjan',
    gradient: 'linear-gradient(135deg,#6A1B9A,#AB47BC)',
  },
  {
    stars: 4,
    text: 'Le coaching hebdomadaire est ce qui fait toute la différence. Chaque message tombe pile au bon moment.',
    initials: 'RY',
    name: 'Roland Yao',
    role: 'Chef de Projet · Yamoussoukro',
    gradient: 'linear-gradient(135deg,#BF360C,#FF7043)',
  },
]

// ================================================================
// DATA — FAQ
// ================================================================
export const faqs = [
  {
    q: 'Career OS est-il vraiment adapté au marché ivoirien ?',
    a: 'Career OS a été conçu exclusivement pour le marché ivoirien. Les données salariales, les entreprises présentes dans la base, les codes culturels du coaching et les exemples de CV sont tous adaptés à la réalité d\'Abidjan et des grandes villes de Côte d\'Ivoire.',
  },
  {
    q: 'Comment fonctionne l\'analyse de personnalité ?',
    a: 'Career OS combine deux approches complémentaires : le modèle Big Five (les 5 grandes dimensions de la personnalité validées scientifiquement) et la Numérologie professionnelle. Ensemble, ils génèrent un portrait complet de vos forces, de votre style de travail et de vos environnements idéaux.',
  },
  {
    q: 'L\'IA valide vraiment mes compétences ou elle me croit sur parole ?',
    a: 'Non — Career OS ne vous croit pas sur parole. Le bilan de compétences fonctionne comme un dialogue rigoureux : l\'IA vous pose des questions de plus en plus précises sur vos expériences réelles, demande des exemples chiffrés et teste votre niveau par des mises en situation.',
  },
  {
    q: 'Comment se passe le paiement ? Est-ce sécurisé ?',
    a: 'Le paiement s\'effectue via Djamo Business. Vous pouvez payer par carte bancaire, Mobile Money (MTN CI, Orange Money) ou Wave. Le paiement est sécurisé et l\'accès est activé immédiatement après confirmation.',
  },
  {
    q: 'Y a-t-il un essai gratuit ?',
    a: 'Oui ! Vous pouvez accéder à une démo complète sans inscription ni paiement en cliquant sur "Voir la démo". La création de compte est gratuite, l\'abonnement débute à 9 900 FCFA/mois.',
  },
]

// ================================================================
// DATA — Features landing
// ================================================================
export const features = [
  { icon: '🧠', title: 'Bilan de compétences IA', desc: 'Dialogue rigoureux qui valide vos compétences réelles — pas auto-déclarées. Niveau certifié visible par les recruteurs.' },
  { icon: '🎭', title: 'Portrait de personnalité', desc: 'Big Five + Numérologie professionnelle. Vos forces, votre style de travail, vos environnements idéaux.' },
  { icon: '📄', title: 'CV généré & adapté', desc: 'Un CV professionnel généré depuis votre profil, adapté à chaque offre en 30 secondes.' },
  { icon: '💬', title: 'Simulateur d\'entretien', desc: 'Un DRH virtuel qui vous entraîne avec vos vraies questions sectorielles.' },
  { icon: '💰', title: 'Grille salariale locale', desc: 'Données salariales réelles du marché ivoirien. Négociez avec des chiffres concrets.' },
  { icon: '🏢', title: 'Matching entreprises', desc: 'Score d\'affinité culturelle avec chaque entreprise. Postulez là où vous avez des chances.' },
]
