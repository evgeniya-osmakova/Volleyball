export const clubName = 'Der Saarower Volleyball Sportverein e.V.';
export const instagramUrl = 'https://www.instagram.com/saarower_vsv/';
export const facebookUrl = 'https://www.facebook.com/saarower.vsv/';
export type SocialIcon = 'instagram' | 'facebook';
export type FooterCardId = 'contact' | 'hall' | 'social' | 'impressum' | 'privacy';

export interface NavItem {
  label: string;
  href: string;
}

export interface TeamCard {
  slug: string;
  name: string;
  description: string;
  schedule: string[];
  contactName: string;
  accent: 'gold' | 'lilac' | 'magenta' | 'green';
}

export interface FeatureCard {
  id: string;
  label: string;
  title: string;
  text: string;
  image: string;
  imageAlt: string;
  accent: 'violet' | 'plum' | 'sunset' | 'blue';
  actionLabel?: string;
  actionHref?: string;
  external?: boolean;
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

export interface LegalSection {
  title: string;
  paragraphs: string[];
}

export const navigation: NavItem[] = [
  { label: 'Teams', href: '/#teams' },
  { label: 'Verein', href: '/#verein' },
  { label: 'News', href: '/#news' },
  { label: 'Sponsoren', href: '/#sponsoren' },
  { label: 'Kontakt', href: '/#kontakt' }
];

export const teamCards: TeamCard[] = [
  {
    slug: 'bambinis',
    name: 'Bambinis',
    description: 'Spiel und Spaß für Kids',
    schedule: ['Fr. 15:30 - 16:15 Uhr'],
    contactName: 'Name folgt',
    accent: 'gold'
  },
  {
    slug: 'nachwuchs',
    name: 'Nachwuchs',
    description: 'Nachwuchs weibl. U12 bis U16 Volleyball',
    schedule: ['Fr. 16:00 - 18:00 Uhr'],
    contactName: 'Name folgt',
    accent: 'lilac'
  },
  {
    slug: 'damen',
    name: 'Damen',
    description: '1. Damenmannschaft',
    schedule: ['Di. 19:00 - 21:00 Uhr', 'Fr. 18:00 - 20:00 Uhr'],
    contactName: 'Name folgt',
    accent: 'magenta'
  },
  {
    slug: 'mix',
    name: 'Mix',
    description: 'Mixed',
    schedule: ['Mi. 19:00 - 21:00 Uhr'],
    contactName: 'Name folgt',
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

export const featureCards: FeatureCard[] = [
  {
    id: 'news',
    label: 'News',
    title: 'Folge uns auch auf INSTAGRAMM =>',
    text: 'Aktuelle Einblicke, Spieltage und Vereinsmomente finden sich auf unserem Instagram-Kanal.',
    image: '/images/home/hero-team-2.jpg',
    imageAlt: 'Spielerinnen des Saarower VSV nach einem Heimspieltag',
    accent: 'violet',
    actionLabel: 'Instagram öffnen',
    actionHref: instagramUrl,
    external: true
  },
  {
    id: 'sponsoren',
    label: 'Sponsoren',
    title: 'Der VSV bedankt sich bei der Sparkasse Oder-Spree für ihre Unterstützung',
    text: 'Unterstützung aus der Region trägt unseren Vereinsalltag, Spielbetrieb und Nachwuchs.',
    image: '/images/teams/damen/meisterpokal.jpg',
    imageAlt: 'Mannschaft des Saarower VSV mit Meisterpokal',
    accent: 'plum'
  },
  {
    id: 'verein-teaser',
    label: 'Verein',
    title: 'Auf diesen Seiten stellt sich der Saarower Volleyball Sportverein e.V. kurz vor.',
    text: 'Seit 1998 gehört Volleyball in Bad Saarow zum festen Vereinsleben.',
    image: '/images/teams/damen/team-2024.jpg',
    imageAlt: 'Teamfoto der Damenmannschaft des Saarower VSV',
    accent: 'sunset'
  },
  {
    id: 'kontakt-teaser',
    label: 'Kontakt',
    title: 'So findet Ihr uns',
    text: 'Pieskower Straße 31, 15526 Bad Saarow',
    image: '/images/teams/damen/potsdam-1.jpg',
    imageAlt: 'Nachwuchsteam des Saarower VSV bei einem Turnier',
    accent: 'blue',
    actionLabel: 'Zum Kontakt',
    actionHref: '/#kontakt'
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
        label: 'fam.ahlert@t-online.de',
        href: 'mailto:fam.ahlert@t-online.de'
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

export const impressumSections: LegalSection[] = [
  {
    title: 'Angaben gemäß § 5 TMG',
    paragraphs: ['Saarower Volleyball Sportverein e.V.', 'Saarower Chaussee 21', '15517 Fürstenwalde']
  },
  {
    title: 'Vertreten durch',
    paragraphs: ['Torsten Ahlert']
  },
  {
    title: 'Kontakt',
    paragraphs: ['Telefon: +49 3361 7699800', 'E-Mail: fam.ahlert@t-online.de']
  },
  {
    title: 'Steuernummer',
    paragraphs: ['061/143/01661']
  },
  {
    title: 'Streitbeilegung',
    paragraphs: [
      'Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.'
    ]
  }
];
