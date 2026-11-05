// All site copy, in French. Built from HK Consulting's own description and their current site
// (hkconsult-kitchenldry.com): no invented figures, clients or projects. `*word*` = italic serif accent.

export const contact = {
  email: 'hk.kitchenpro@gmail.com',
  phone: '23 312 815',
  phoneIntl: '+21623312815',
  phoneDisplay: '+216 23 312 815',
  whatsapp: 'https://wa.me/21623312815',
  address: 'Rue du Lac de Constance, Bloc A, 2ème étage, Lac 1',
  maps: 'https://www.google.com/maps/search/?api=1&query=Rue+du+Lac+de+Constance+Lac+1+Tunis',
  linkedin: 'https://www.linkedin.com/in/houda-ketari-4ba9835a/',
};

/** Public address of the site (canonical URLs, sitemap, social cards). Same domain as their current site. */
export const SITE = 'https://www.hkconsult-kitchenldry.com';
/** Google Analytics 4 property already used on their current site, kept so their history continues. */
export const ANALYTICS_ID = 'G-KZHQS4GXM8';

/** Title and description of each page: used in the built HTML and when the router swaps pages. */
export const seo = {
  home: {
    path: '/',
    title: 'HK Consulting — Bureau d’études cuisines professionnelles & buanderies en Tunisie',
    description:
      'HK Consulting, bureau d’études et de conseil en cuisines et buanderies professionnelles : plans d’aménagement aux normes européennes, cahiers des charges, choix des équipements. Tunisie et international.',
  },
  about: {
    path: '/a-propos/',
    title: 'À propos — Houda Ketari et le bureau HK Consulting',
    description:
      'Basé à Tunis et intervenant à l’international, HK Consulting accompagne hôtels, restaurants, cliniques, écoles, laboratoires et collectivités dans la conception de cuisines et buanderies professionnelles.',
  },
  services: {
    path: '/services/',
    title: 'Services — Plans d’aménagement, plans électriques et fluides, appels d’offres | HK Consulting',
    description:
      'Analyse des besoins, plans d’implantation, plans électriques et fluides, marche en avant, dossiers de consultation et suivi technique pour cuisines et buanderies professionnelles.',
  },
  contact: {
    path: '/contact/',
    title: 'Contact & rendez-vous — HK Consulting, Les Berges du Lac, Tunis',
    description:
      'Parlons de votre projet de cuisine ou de buanderie professionnelle : +216 23 312 815 · hk.kitchenpro@gmail.com · Rue du Lac de Constance, Lac 1, Tunis.',
  },
} as const;

export const founder = {
  name: 'Houda Ketari',
  photo: '/images/houda-ketari.webp',
  quote: 'Expérimentée et toujours motivée, je souhaite partager et faire profiter cette expertise à mes clients.',
  press: 'La stratégie et l’expertise au cœur de l’aménagement des cuisines professionnelles',
};

export const presentation = [
  'HK Consulting est un bureau d’études et de conseil spécialisé dans les cuisines professionnelles et les buanderies professionnelles. Basé en Tunisie et intervenant à l’international, notre bureau accompagne des projets dans différents secteurs d’activité, avec une approche fondée sur l’écoute, la rigueur technique et la compréhension des besoins réels de chaque client.',
  'Fort de plusieurs années d’expérience, HK Consulting développe des solutions adaptées aux exigences de chaque projet, en accordant une attention particulière à la fonctionnalité des espaces, à l’optimisation des implantations et à la qualité globale des études techniques réalisées.',
];

export const audience = ['Investisseurs', 'Hôtels', 'Restaurants', 'Laboratoires de pâtisserie', 'Collectivités', 'Écoles', 'Établissements spécialisés'];

export const expertise = [
  'Analyse des besoins d’exploitation et des exigences du projet',
  'Plans d’aménagement et d’implantation du matériel',
  'Plans électriques',
  'Plans fluides',
  'Organisation des flux et marche en avant',
  'Dossiers de consultation et d’appel d’offres',
  'Conseil dans le choix des équipements professionnels',
  'Suivi technique et accompagnement des projets',
];

export const references = [
  { name: 'Gourmandise', img: 'ref-gourmandise' },
  { name: 'A.S.D.A', img: 'ref-asda' },
  { name: 'Friends Pasta Bar', img: 'ref-friends' },
  { name: 'Tunespoir', img: 'ref-tunespoir' },
  { name: 'NK Architect International', img: 'ref-nk-architect' },
];

export const events = [
  {
    img: 'evt-sirha',
    tag: 'Sirha Lyon · 2025',
    title: 'Rencontre avec un chef doublement étoilé',
    text: 'Jean-François Piège, figure emblématique de la cuisine contemporaine, connu pour sa rigueur, sa précision et sa quête permanente de l’excellence. Une source d’inspiration pour mieux appréhender les défis de la restauration et de l’équipement professionnel.',
  },
  {
    img: 'evt-texcare',
    tag: 'Texcare Francfort · 2024',
    title: 'Salon de la buanderie Texcare',
    text: 'Des échanges riches avec partenaires et collaborateurs, et un accès privilégié aux innovations : de meilleurs plans d’aménagement et des process optimisés pour économiser l’eau et l’énergie.',
  },
  {
    img: 'evt-francfort',
    tag: 'Messe Frankfurt',
    title: 'Francfort, laundry equipment',
    text: 'La découverte des innovations et l’échange avec les experts du métier, pour suivre les avancées du marché et les nouvelles solutions du secteur.',
  },
  {
    img: 'evt-danube',
    tag: 'Lamotte-Beuvron',
    title: 'L’usine Danube Laundry',
    text: 'Équipements, procédés de fabrication, matériaux et exigences de maintenance : une immersion qui renforce notre capacité à concevoir des buanderies performantes et durables.',
  },
  {
    img: 'presse-valeurs-ajoutees',
    tag: 'Presse · Valeurs Ajoutées',
    title: 'La stratégie et l’expertise au cœur de l’aménagement',
    text: 'Houda Ketari en couverture : une référence de l’aménagement des cuisines professionnelles et des buanderies, alliant savoir-faire technique et stratégie de développement.',
  },
  {
    img: 'presse-femmes-impact',
    tag: 'Presse · Femmes d’impact',
    title: 'Parmi les femmes d’impact',
    text: 'Houda Ketari figure dans le numéro « Femmes d’impact » du magazine Valeurs Ajoutées.',
  },
];

export const sectors = ['Hôtellerie', 'Restaurants', 'Cliniques', 'Écoles', 'Pâtisseries', 'Boulangeries', 'Collectivités', 'Investisseurs'];

/** The six zones of the plan, in the order the flow crosses them. */
export const zones = [
  { code: 'Z-01', name: 'Réception', text: 'Les marchandises entrent, sont contrôlées et pesées. Rien ne remonte plus jamais ce chemin.' },
  { code: 'Z-02', name: 'Stockage', text: 'Chambres froides et réserves sèches, placées pour que chaque produit avance vers la préparation.' },
  { code: 'Z-03', name: 'Préparation', text: 'Postes de travail séparés : le cru et le prêt à cuire ne se croisent pas.' },
  { code: 'Z-04', name: 'Cuisson', text: 'La ligne chaude, son extraction, ses circulations. L’espace est optimisé au centimètre.' },
  { code: 'Z-05', name: 'Service', text: 'Le passe distribue vers la salle. Le propre sort, il ne revient pas.' },
  { code: 'Z-06', name: 'Plonge', text: 'Le sale suit son propre circuit, isolé, jusqu’à la sortie. La boucle est bouclée sans retour en arrière.' },
];

export const missions = [
  {
    n: '01',
    short: 'Besoins',
    title: 'Définition des besoins en équipement',
    text: 'Chaque projet commence par vos usages : volumes, menu, effectifs, contraintes du lieu. Nous définissons l’équipement juste nécessaire, en respectant vos limites budgétaires.',
    points: ['Analyse du projet et des usages', 'Liste d’équipement dimensionnée', 'Respect de l’enveloppe budgétaire'],
    zone: 1,
  },
  {
    n: '02',
    short: 'Plans',
    title: 'Réalisation des plans d’aménagement',
    text: 'Des plans qui optimisent chaque mètre carré et respectent la marche en avant : du produit brut au plat servi, aucun flux ne revient sur ses pas.',
    points: ['Plans aux normes européennes', 'Plans électriques & fluides', 'Respect de la marche en avant'],
    zone: -1,
  },
  {
    n: '03',
    short: 'Prestataire',
    title: 'Sélection du prestataire en équipement',
    text: 'Le cabinet élabore le cahier des charges et mène la consultation. Les offres sont comparées sur une base commune pour choisir le bon prestataire.',
    points: ['Dossiers de consultation & d’appel d’offres', 'Conseil dans le choix des équipements', 'Analyse comparative des offres'],
    zone: 3,
  },
  {
    n: '04',
    short: 'Réception',
    title: 'Suivi de la réception du matériel',
    text: 'Jusqu’à la livraison, nous suivons la réception du matériel et vérifions la conformité des produits avec ce qui a été commandé.',
    points: ['Suivi technique du projet', 'Contrôle de conformité des produits', 'Réception du matériel'],
    zone: 0,
  },
];

export const principles = [
  { k: 'Hygiène & sécurité', v: 'Les normes d’hygiène et de sécurité sont intégrées dès le cahier des charges, pas ajoutées à la fin.' },
  { k: 'Budget maîtrisé', v: 'L’équipement est défini en fonction du projet et dans le respect de vos limites budgétaires.' },
  { k: 'Espace optimisé', v: 'Chaque plan cherche la circulation la plus courte et l’implantation la plus juste.' },
  { k: 'Marche en avant', v: 'Du brut au fini, du propre au sale : les flux avancent et ne se croisent jamais.' },
  { k: 'Conformité', v: 'Le suivi continue jusqu’à la réception du matériel et la vérification des produits livrés.' },
];

export const process = [
  { t: 'Premier échange', d: 'Vous présentez votre projet, votre lieu et vos contraintes.' },
  { t: 'Besoins & budget', d: 'Définition de l’équipement nécessaire dans l’enveloppe prévue.' },
  { t: 'Plans d’aménagement', d: 'Implantation optimisée, marche en avant respectée.' },
  { t: 'Cahier des charges', d: 'Rédaction et consultation des prestataires en équipement.' },
  { t: 'Choix du prestataire', d: 'Comparaison des offres et sélection.' },
  { t: 'Réception', d: 'Suivi de la livraison et contrôle de conformité du matériel.' },
];

export const fields = [
  {
    id: 'cuisine',
    img: 'cuisine',
    title: 'Cuisines professionnelles',
    text: 'Hôtels, restaurants, cliniques, écoles, laboratoires de pâtisserie et boulangerie, collectivités : de la réception des marchandises jusqu’au service.',
    tags: ['Réception', 'Stockage', 'Préparation', 'Cuisson', 'Service', 'Plonge'],
  },
  {
    id: 'buanderie',
    img: 'buanderie',
    title: 'Buanderies professionnelles',
    text: 'Le linge suit lui aussi la marche en avant : du sale au propre, collecte, lavage, séchage, repassage et distribution, sans jamais se croiser.',
    tags: ['Collecte', 'Tri', 'Lavage', 'Séchage', 'Repassage', 'Distribution'],
  },
];

/** Line-art icon per sector, used by the "Pour qui" list. Keys match `sectorIcons` in pages/parts.ts. */
export const sectorDetails: { name: string; icon: string; note: string; text: string }[] = [
  { name: 'Hôtellerie', icon: 'combi', note: 'Cuisines & buanderie', text: 'Offrir la meilleure réponse aux besoins du projet.' },
  { name: 'Restaurants', icon: 'range', note: 'Restauration commerciale', text: 'Une cuisine qui répond aux besoins spécifiques de chaque restaurant.' },
  { name: 'Cliniques', icon: 'tray', note: 'Établissements de santé', text: 'Un dossier de consultation fondé sur l’expertise technique.' },
  { name: 'Écoles', icon: 'pot', note: 'Établissements éducatifs', text: 'La maîtrise des normes en vigueur et de l’aménagement de l’espace.' },
  { name: 'Laboratoires', icon: 'mixer', note: 'Pâtisserie & boulangerie', text: 'Une expertise partagée, du laboratoire au fournil.' },
  { name: 'Collectivités', icon: 'cup', note: 'Restauration collective', text: 'Chaque projet étudié selon ses besoins d’exploitation et ses contraintes techniques.' },
];

export const copy = {
  nav: { home: 'Accueil', about: 'À propos', services: 'Services', contact: 'Contact', menu: 'Menu', close: 'Fermer' },
  meta: {
    home: 'Bureau d’études cuisines professionnelles & buanderies',
    about: 'À propos',
    services: 'Services',
    contact: 'Contact',
  },
  common: {
    next: 'Suivant',
    discover: 'Découvrir',
    write: 'Écrire',
    call: 'Appeler',
    rights: 'Tous droits réservés',
    tagline: 'Bureau d’études — cuisines professionnelles & buanderies',
    scroll: 'Défiler',
  },
  home: {
    eyebrow: 'Bureau d’études · Tunisie & international',
    title: ['Des cuisines', 'professionnelles', '*pensées au millimètre.*'],
    lead: 'Bureau d’études et de conseil en cuisines et buanderies professionnelles. Une offre personnalisée, qui optimise l’espace et les budgets, avec des plans aux normes européennes.',
    flowEyebrow: 'Le principe',
    flowTitle: 'La marche *en avant.*',
    flowLead: 'Du produit brut au plat servi, du propre au sale : chaque flux avance et ne revient jamais sur ses pas. C’est la règle d’hygiène qui guide chacun de nos plans.',
    missionEyebrow: 'Notre mission',
    missionTitle: 'Quatre étapes, *un seul interlocuteur.*',
    fieldsEyebrow: 'Deux métiers',
    fieldsTitle: 'Cuisine & *buanderie.*',
    founderEyebrow: 'Derrière HK Consulting',
    founderLink: 'Découvrir le bureau',
    refEyebrow: 'Références',
    refTitle: 'Des projets menés *avec exigence.*',
    refLead: 'Notre offre satisfait les besoins spécifiques de chaque client, de manière innovante et efficace.',
    ctaTitle: ['Un projet de cuisine', '*ou de buanderie ?*'],
    ctaLabel: 'Parlons-en',
  },
  about: {
    eyebrow: 'À propos',
    title: ['Un bureau d’études.', '*Une obsession : le flux.*'],
    lead: 'Un bureau d’études et de conseil spécialisé dans les cuisines et les buanderies professionnelles. Basé en Tunisie, intervenant à l’international.',
    manifesto:
      'Une approche fondée sur l’écoute, la rigueur technique et la compréhension des besoins réels de chaque client. Un bon plan ne se voit pas : il se ressent dans chaque geste, chaque circulation, chaque service.',
    audienceLabel: 'Nous intervenons auprès de',
    quote: 'Je serais ravie de vous faire profiter de mon expérience et de mon expertise dans ce domaine.',
    quoteBy: 'Houda Ketari',
    eventsEyebrow: 'Évènements & presse',
    eventsTitle: 'Sur le terrain, *au contact du métier.*',
    principlesEyebrow: 'Ce qui nous guide',
    principlesTitle: 'Cinq *principes.*',
    specEyebrow: 'Le cahier des charges',
    specTitle: 'Tout commence *par l’écrit.*',
    specLead: 'Le cahier des charges est la colonne vertébrale du projet. Il fixe les besoins, les normes et les critères avant toute consultation.',
    spec: [
      'Objet : équipement & aménagement',
      'Établissement : …',
      'Besoins en équipement : définis',
      'Budget : respecté',
      'Plans : marche en avant',
      'Normes : hygiène & sécurité',
      'Consultation : prestataires',
      'Réception : conformité vérifiée',
    ],
  },
  services: {
    eyebrow: 'Services',
    title: ['Du besoin', '*à la réception.*'],
    lead: 'Étude et conseil, plans d’implantation, dossiers de consultation et suivi technique : une mission complète pour votre cuisine ou votre buanderie professionnelle.',
    expEyebrow: 'Expertise',
    expTitle: 'L’expertise technique *au cœur de chaque projet.*',
    expLead: 'Chaque étude est développée selon les contraintes réelles d’exploitation, afin de garantir des espaces cohérents et adaptés aux exigences du terrain.',
    planCaption: 'Extrait — plan d’implantation',
    forEyebrow: 'Pour qui',
    forTitle: 'Des solutions adaptées *à chaque secteur.*',
    processEyebrow: 'Déroulé',
    processTitle: 'Le projet, *étape par étape.*',
  },
  contactPage: {
    eyebrow: 'Contact',
    title: ['Parlons de', 'votre *projet.*'],
    lead: 'Pour tout renseignement ou pour obtenir un rendez-vous, écrivez-nous ou appelez directement. Chaque projet commence par un échange.',
    formTitle: 'Décrivez votre projet',
    labels: {
      name: 'Nom & prénom',
      company: 'Établissement',
      phone: 'Téléphone',
      email: 'E-mail',
      type: 'Type d’établissement',
      project: 'Votre projet',
      message: 'Message',
    },
    projectTypes: ['Cuisine', 'Buanderie', 'Les deux'],
    placeholder: 'Surface, nombre de couverts, calendrier…',
    send: 'Envoyer',
    sending: 'Envoi…',
    sent: 'Message envoyé avec succès ! Nous vous recontacterons rapidement.',
    error: 'L’envoi a échoué. Réessayez, ou écrivez-nous directement à hk.kitchenpro@gmail.com.',
    invalid: 'Merci de compléter les champs requis.',
    required: 'Requis',
    copied: 'Adresse copiée',
    copy: 'Copier',
  },
};

/** `*text*` → `<em>text</em>` after escaping. */
export function rich(s: string) {
  return s.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]!).replace(/\*(.+?)\*/g, '<em>$1</em>');
}
