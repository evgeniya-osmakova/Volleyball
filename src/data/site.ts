export const clubName = 'Der Saarower Volleyball Sportverein e.V.';
export const instagramUrl = 'https://www.instagram.com/saarower_vsv/';

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

export interface FooterCardItem {
  label: string;
  href?: string;
}

export interface FooterCard {
  title: string;
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
    title: 'Kontakt',
    items: [
      {
        label: '03361 7699800',
        href: 'tel:+4933617699800'
      },
      {
        label: 'fam.ahlert@t-online.de',
        href: 'mailto:fam.ahlert@t-online.de'
      }
    ]
  },
  {
    title: 'Adresse Halle',
    items: [{ label: 'Pieskower Straße 31, 15526 Bad Saarow' }]
  },
  {
    title: 'Social Media',
    items: [{ label: 'Instagram @saarower_vsv', href: instagramUrl }]
  },
  {
    title: 'Impressum',
    items: [{ label: 'Saarower Chaussee 21, 15517 Fürstenwalde', href: '/impressum' }]
  },
  {
    title: 'Datenschutz',
    items: [{ label: 'Zur Datenschutzerklärung', href: '/datenschutz' }]
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

export const privacySections: LegalSection[] = [
  {
    title: 'Einleitung',
    paragraphs: [
      'Diese Datenschutzerklärung klärt Sie über die Art, den Umfang und Zweck der Verarbeitung von personenbezogenen Daten innerhalb dieses Onlineangebotes und der mit ihm verbundenen Webseiten, Funktionen und Inhalte auf.'
    ]
  },
  {
    title: '1. Rechte der Nutzer',
    paragraphs: [
      'Nutzer haben das Recht, auf Antrag unentgeltlich Auskunft über die personenbezogenen Daten zu erhalten, die von dem Verantwortlichen über sie gespeichert wurden.',
      'Zusätzlich haben Nutzer das Recht auf Berichtigung unrichtiger Daten, Einschränkung der Verarbeitung und Löschung ihrer personenbezogenen Daten, auf Datenportabilität sowie im Fall einer unrechtmäßigen Datenverarbeitung auf Beschwerde bei der zuständigen Aufsichtsbehörde.'
    ]
  },
  {
    title: '2. Widerspruchsrecht',
    paragraphs: [
      'Nutzer können der künftigen Verarbeitung ihrer personenbezogenen Daten entsprechend den gesetzlichen Vorgaben jederzeit widersprechen.',
      'Der Widerspruch kann insbesondere gegen die Verarbeitung für Zwecke der Direktwerbung erfolgen.'
    ]
  },
  {
    title: '3. Änderungen der Datenschutzerklärung',
    paragraphs: [
      'Der Verantwortliche behält sich vor, die Datenschutzerklärung zu ändern, um sie an geänderte Rechtslagen oder bei Änderungen des Dienstes sowie der Datenverarbeitung anzupassen.',
      'Nutzer werden gebeten, sich regelmäßig über den Inhalt der Datenschutzerklärung zu informieren.'
    ]
  },
  {
    title: '4. Grundsätzliche Angaben zur Datenverarbeitung und Rechtsgrundlagen',
    paragraphs: [
      'Zu den verarbeiteten personenbezogenen Daten können Bestandsdaten, Vertragsdaten, Nutzungsdaten, Meta- und Kommunikationsdaten sowie Inhaltsdaten gehören.',
      'Die Verarbeitung erfolgt nur bei Vorliegen einer gesetzlichen Erlaubnis, einer Einwilligung oder auf Grundlage berechtigter Interessen nach Art. 6 Abs. 1 lit. f DSGVO.',
      'Rechtsgrundlagen können Art. 6 Abs. 1 lit. a, b, c und f DSGVO sein.'
    ]
  },
  {
    title: '5. Sicherheitsmaßnahmen',
    paragraphs: [
      'Der Verantwortliche trifft organisatorische, vertragliche und technische Sicherheitsmaßnahmen entsprechend dem Stand der Technik.',
      'Dazu gehört insbesondere die verschlüsselte Übertragung von Daten zwischen Browser und Server.'
    ]
  },
  {
    title: '6. Löschung von Daten',
    paragraphs: [
      'Gespeicherte Daten werden gelöscht, sobald sie für ihre Zweckbestimmung nicht mehr erforderlich sind und keine gesetzlichen Aufbewahrungspflichten entgegenstehen.',
      'Sofern Daten aus handels- oder steuerrechtlichen Gründen aufbewahrt werden müssen, wird deren Verarbeitung eingeschränkt.'
    ]
  },
  {
    title: '7. Weitergabe von Daten an Dritte und Drittanbieter',
    paragraphs: [
      'Eine Weitergabe an Dritte erfolgt nur auf Grundlage gesetzlicher Erlaubnisse und im Rahmen der gesetzlichen Vorgaben.',
      'Sofern Inhalte, Werkzeuge oder sonstige Mittel von Drittanbietern eingesetzt werden, kann ein Datentransfer in Drittstaaten stattfinden.'
    ]
  },
  {
    title: '8. Cookies und Reichweitenmessung',
    paragraphs: [
      'Cookies sind Informationen, die von diesem Webserver oder Webservern Dritter an die Webbrowser der Nutzer übertragen und dort für einen späteren Abruf gespeichert werden.',
      'Soweit nicht anders angegeben, verwendet der Verantwortliche nur Session-Cookies.'
    ]
  },
  {
    title: '9. Hosting',
    paragraphs: [
      'Dieses Onlineangebot wurde durch die webme GmbH, Strassburger Strasse 55, 10405 Berlin, Deutschland gehostet.',
      'Die Rechtsgrundlage der Verarbeitung ist Art. 6 Abs. 1 lit. f DSGVO auf Grundlage berechtigter Interessen an Sicherheit und Effizienz.'
    ]
  },
  {
    title: '10. Erhebung von Zugriffsdaten',
    paragraphs: [
      'Der Verantwortliche erhebt Daten über jeden Zugriff auf den Server, auf dem sich dieser Dienst befindet, sogenannte Serverlogfiles.',
      'Logfile-Informationen werden aus Sicherheitsgründen für die Dauer von maximal sieben Tagen gespeichert und danach gelöscht.'
    ]
  },
  {
    title: '11. Kontaktformular und Anfragen',
    paragraphs: [
      'Bei der Kontaktaufnahme mit dem Verantwortlichen per Kontaktformular oder E-Mail werden die Angaben des Nutzers gemäß Art. 6 Abs. 1 lit. b DSGVO zur Bearbeitung der Kontaktanfrage und deren Abwicklung verarbeitet.'
    ]
  },
  {
    title: '12. Einbindung von Diensten und Inhalten Dritter',
    paragraphs: [
      'Der Verantwortliche setzt innerhalb dieses Onlineangebotes Inhalts- oder Serviceangebote von Drittanbietern ein, um deren Inhalte und Services wie Videos oder Schriftarten einzubinden.',
      'Dies setzt immer voraus, dass die Drittanbieter dieser Inhalte die IP-Adresse der Nutzer wahrnehmen können, da die Inhalte sonst nicht an den Browser gesendet werden können.'
    ]
  }
];
