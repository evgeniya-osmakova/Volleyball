export const clubName = 'Der Saarower Volleyball Sportverein e.V.';
export const instagramUrl = 'https://www.instagram.com/saarower_vsv/';
export const facebookUrl = 'https://www.facebook.com/saarower.vsv/';
export type SocialIcon = 'instagram' | 'facebook';
export type FooterCardId = 'contact' | 'hall' | 'social' | 'impressum' | 'privacy';
export type TeamSlug = 'bambinis' | 'nachwuchs' | 'damen' | 'mix';

export interface TeamCard {
  slug: TeamSlug;
  name: string;
  description: string;
  schedule: string[];
  contactName: string;
  accent: 'gold' | 'lilac' | 'magenta' | 'green';
}

export interface Sponsor {
  name: string;
  href: string;
  logoSrc: string;
  logoAlt: string;
}

export interface FooterCardItem {
  label: string;
  href?: string;
  icon?: SocialIcon;
}

export interface FooterCard {
  id: FooterCardId;
  title?: string;
  href?: string;
  items: FooterCardItem[];
}

export interface NavChildItem {
  label: string;
  href: string;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavChildItem[];
}

export const navigation: NavItem[] = [
  {
    label: 'Teams',
    href: '/#teams',
    children: [
      { label: 'Bambinis', href: '/teams/bambinis' },
      { label: 'Nachwuchs', href: '/teams/nachwuchs' },
      { label: 'Damen', href: '/teams/damen' },
      { label: 'Mix', href: '/teams/mix' }
    ]
  },
  {
    label: 'Verein',
    href: '/ueber-uns',
    children: [
      { label: 'Über uns', href: '/ueber-uns' },
      { label: 'Vereinsgeschichte', href: '/vereinsgeschichte' },
      { label: 'Vorstand', href: '/vorstand' },
      { label: 'Satzung', href: '/satzung' },
      { label: 'Beitragsordnung', href: '/beitragsordnung' }
    ]
  },
  {
    label: 'News',
    href: '/spielberichte',
    children: [
      { label: 'Spielberichte', href: '/spielberichte' },
      { label: 'Turniere', href: '/turniere' },
      { label: 'Veranstaltungen', href: '/veranstaltungen' }
    ]
  },
  { label: 'Sponsoren', href: '/sponsoren' },
  { label: 'Kontakt', href: '/#kontakt' }
];

export const teamCards: TeamCard[] = [
  {
    slug: 'bambinis',
    name: 'Bambinis',
    description: 'Ballgefühl, Körperkoordination und Grundlagen des Volleyballs',
    schedule: ['Fr. 15:30 - 16:15 Uhr'],
    contactName: 'Hanna Borchert und Nina Hesse',
    accent: 'gold'
  },
  {
    slug: 'nachwuchs',
    name: 'Nachwuchs',
    description: 'Nachwuchs weibl. U12 bis U16 Volleyball',
    schedule: ['Fr. 16:00 - 18:00 Uhr'],
    contactName: 'René Gesch, Bettina Sichting, Anne Krengel und Torsten Ahlert',
    accent: 'lilac'
  },
  {
    slug: 'damen',
    name: 'Damen',
    description: '1. Damenmannschaft',
    schedule: ['Di. 19:00 - 21:00 Uhr', 'Fr. 18:00 - 20:00 Uhr'],
    contactName: 'Anne Krengel',
    accent: 'magenta'
  },
  {
    slug: 'mix',
    name: 'Mix',
    description: 'Mixed',
    schedule: ['Mi. 19:00 - 21:00 Uhr'],
    contactName: 'Torsten Ahlert und Bettina Sichting',
    accent: 'green'
  }
];

export const sponsors: Sponsor[] = [
  {
    name: 'EWE',
    href: 'http://www.ewe.de',
    logoSrc: '/images/sponsors/ewe.png',
    logoAlt: 'Logo von EWE'
  },
  {
    name: 'Bauer Fruchtsaft',
    href: 'http://www.bauer-fruchtsaft.de',
    logoSrc: '/images/sponsors/bauer.png',
    logoAlt: 'Logo von Bauer Fruchtsaft'
  },
  {
    name: 'Apotheke am Klinikum | am Kurpark',
    href: 'http://www.meineapotheke.de/apotheken/apotheke-am-klinikum-bad-saarow-15526/',
    logoSrc: '/images/sponsors/apotheke.png',
    logoAlt: 'Logo von Apotheke am Klinikum | am Kurpark'
  },
  {
    name: 'Sparkasse Oder-Spree',
    href: 'http://www.s-os.de',
    logoSrc: '/images/sponsors/sparkasse.png',
    logoAlt: 'Logo von Sparkasse Oder-Spree'
  },
  {
    name: 'Anke Reincke Pflege mit Herz',
    href: 'http://www.pflegemit-herz.de',
    logoSrc: '/images/sponsors/anke_reincke_pflege_mit_herz.png',
    logoAlt: 'Logo von Anke Reincke Pflege mit Herz'
  },
  {
    name: 'dm-drogerie markt',
    href: 'http://www.dm.de',
    logoSrc: '/images/sponsors/dm.png',
    logoAlt: 'Logo von dm-drogerie markt'
  },
  {
    name: 'SWB Beeskow',
    href: 'http://www.swb-beeskow.de',
    logoSrc: '/images/sponsors/swb.png',
    logoAlt: 'Logo von SWB Beeskow'
  },
  {
    name: 'FREiLICH am See',
    href: 'http://www.freilich.de',
    logoSrc: '/images/sponsors/freilich.png',
    logoAlt: 'Logo von FREiLICH am See'
  },
  {
    name: 'ARTPROJEKT',
    href: 'http://www.artprojekt.de',
    logoSrc: '/images/sponsors/artprojekt.png',
    logoAlt: 'Logo von ARTPROJEKT'
  }
];

export const footerCards: FooterCard[] = [
  {
    id: 'contact',
    title: 'Kontakt',
    items: [
      {
        label: '+49 3361 7699800',
        href: 'tel:+4933617699800'
      },
      {
        label: 'saarowervsv@gmail.com',
        href: 'mailto:saarowervsv@gmail.com'
      }
    ]
  },
  {
    id: 'hall',
    title: 'Adresse Halle',
    items: [{ label: 'Pieskower Straße 31, 15526 Bad Saarow' }]
  },
  {
    id: 'social',
    title: undefined,
    items: [
      { label: 'Instagram', href: instagramUrl, icon: 'instagram' },
      { label: 'Facebook', href: facebookUrl, icon: 'facebook' }
    ]
  },
  {
    id: 'impressum',
    title: 'Impressum',
    href: '/impressum',
    items: []
  },
  {
    id: 'privacy',
    title: 'Datenschutz',
    href: '/datenschutz',
    items: []
  }
];


export interface Spielbericht {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  imageAlt: string;
  teamSlugs: TeamSlug[];
  content: string[];
}

export const spielberichte: Spielbericht[] = [
  {
    slug: 'Auswärtsspieltag',
    title: 'Auswärtsspieltag, Sieg!',
    excerpt:
      'Letzter Spieltag und Saisonende. Am vergangenen Sonntag haben wir nochmal vollen Spaß mit auf das Spielfeld gebracht.',
    image: '/images/news/Auswartsspieltag.png',
    imageAlt: 'Auswärtsspieltag, Sieg!',
    teamSlugs: ['damen'],
    content: [
      '🏐💪🏼 Auswärtsspieltag, Sieg!',
      'Letzter Spieltag und Saisonende. Am vergangenen Sonntag haben wir nochmal vollen Spaß mit auf das Spielfeld gebracht.',
      'Im spannenden Fünf-Satz Spiel gegen die Mädels vom SV Potsdam IV zogen wir zwar den kürzeren, konnten aber mit einem 3:0 die Gastgeberinnen aus Zossen ärgern. Damit verabschieden wir uns aus der Saison 2025/2026 mit Platz 4 in der Tabelle und sind verdammt stolz, eine weitere Saison gerockt zu und vor allem in der Rückrunde nochmal starke Spiele geliefert zu haben. ',
      'Wir sagen Danke an alle Unterstützer und Fans!'
    ]
  },
  {
    slug: 'auswartsspieltag-sieg',
    title: 'Auswärtsspieltag, Sieg!',
    excerpt:
      'Wir holen 4 Punkte mit nach Bad Saarow und gewinnen zwei packende Fünf-Satz-Spiele gegen USV Potsdam IV und KSC Asahi Spremberg.',
    image: '/images/news/auswartsspieltag-sieg.png',
    imageAlt: 'Damenmannschaft des Saarower VSV nach dem Auswärtsspieltag',
    teamSlugs: ['damen'],
    content: [
      '🏐💪🏼 Auswärtsspieltag, Sieg!',
      'Wir belohnen uns heute mit starkem Durchhaltevermögen und Willensstärke und bringen 4 Punkte mit nach Bad Saarow.',
      'In zwei packenden Fünf-Satz-Spielen sichern wir uns jeweils den ersten Satz, geben die weiteren zwei Sätze ab und drehen dann Satz 4 und 5 und holen uns die Siege gegen den USV Potsdam IV und den KSC Asahi Spremberg.',
      'Das Saisonende nähert sich und der letzte Spieltag für uns steht am 22.03.2026 im Kalender. Bis dahin!'
    ],
  },
  {
    slug: 'mila-Supercup',
    title: 'JUNIORAS U11 – Mila-Supercup',
    excerpt:
      'Kurz um – unsere Mädchen haben super gespielt und keinen Satz abgegeben. Der Saarower VSV ist sehr stolz auf euch!',
    image: '/images/news/mila-Supercup.png',
    imageAlt: 'JUNIORAS U11 – Mila-Supercup',
    teamSlugs: ['nachwuchs'],
    content: [
      'Volleyball Spielbetrieb – JUNIORAS U11 – Mila-Supercup (A-Kategorie) in Brandenburg a.d.Havel 2026_03_01',
      'Endlich wieder ein U11-Turnier! Unsere Jüngsten freuen sich auf Turniere in ihrer Altersgruppe der 9-Jährigen (bzw. in diesem Jahr 10 Jahre alt werdenden Mädchen und Jungen).',
      'Die Reise führte uns in die Stadt Brandenburg, wo sich Mädchen und Jungen an 5 Netzen in A, B und C Kategorie mit landesweiter Einladung vergleichen konnten. Mit zahlreichen Teams waren die Volleyball Landesstützpunkte Potsdam und Zepernick vertreten.',
      'Kurz um – unsere Mädchen haben super gespielt und keinen Satz abgegeben. Der Saarower VSV ist sehr stolz auf euch!',
      'Direkt nach dem Turnier sind wir noch rechtzeitig zur Siegerehrung eines U14 Jugendturnieres in Potsdam gefahren – hier konnten die 3 Jahre älteren Jungs und Mädchen bestaunt werden, die gerade ein Turnier mit bundesweiter Beteiligung und einer Gastmannschaft auf Warschau absolvierten. (Mit dabei auf Platz 3 jemand aus Fürstenwalde :o)',
    ]
  },
  {
    slug: 'Bambinis-Fasching',
    title: 'Bambinis Fasching',
    excerpt:
      'Gestern haben unsere Bambinis Fasching gefeiert. 🎊',
    image: '/images/news/Bambinis-Fasching.png',
    imageAlt: 'Bambinis Fasching',
    teamSlugs: ['bambinis'],
    content: [
      'Gestern haben unsere Bambinis Fasching gefeiert. 🎊\n',
      'Wir haben ein Training zusammen mit den Eltern geplant und die Kids haben sich, in Form von Staffelspielen, austoben können.🎉 Die Eltern dürfen heut einen Muskelkater genießen.😉\n' +
      'Vielen lieben Dank an alle Eltern, die mit gemacht haben oder tatkräftig zugeschaut haben.😃\n',
      'Unsere Bambinis starteten im Juni 2025, eine hohe Nachfrage bestätigte dann, dass wir den richtigen Schritt gegangen sind.\n' +
      '\n' +
      'Es fehlt uns jedoch an ehrenamtlichen Trainern, wie überall.\n' +
      'So könnten wir unsere Warteliste etwas minimieren.😁\n',
      '❗️Wer also einmal wöchentlich mithelfen möchte, kann sich gern bei uns melden. 😃❗️',
    ]
  },
];

export function getTeamBySlug(teamSlug: TeamSlug) {
  return teamCards.find((team) => team.slug === teamSlug);
}

export function getSpielberichteByTeam(teamSlug: TeamSlug) {
  return spielberichte.filter((post) => post.teamSlugs.includes(teamSlug));
}

export interface TournamentMatch {
  date: string;
  time: string;
  team1: string;
  team2: string;
  location: string;
}

export const turniereMatches: TournamentMatch[] = [
  {
    date: '22.03.2026',
    time: '11:00',
    team1: 'Saarower VSV',
    team2: 'SC Potsdam IV',
    location: 'TH Dabendorf'
  },
  {
    date: '22.03.2026',
    time: '11:00',
    team1: 'MSV Zossen 07',
    team2: 'Saarower VSV',
    location: 'TH Dabendorf'
  }
];

export const bvvBrandenburgligaFrauenUrl =
  'https://www.bvv-online.de/cms/home/halle/brandenburgliga/brandenburgliga_frauen.xhtml';
