export const company = {
  name: "Winder",
  fullName: "Winder Limmen Transport & Kraanverhuur",
  tagline: "Sinds 1894 een vertrouwd familiebedrijf in transport en kranen",
  description:
    "Winder Limmen is een transport- en kraanverhuurbedrijf gevestigd in Noord-Holland op 3 locaties: Alkmaar, Hoorn en Den Helder, met een indrukwekkende vloot vrachtwagens, autolaadkranen, kranen en torenkranen, ondersteund door een toegewijd team. Als familiebedrijf met een rijke historie die teruggaat tot 1894, beschikken we over uitgebreide specialistische kennis op het gebied van transport-, hijs- logistiek en montageactiviteiten.",
  founded: 1894,
  employees: "75-80",
  trucks: "50+",
  cranes: "15+",
  certifications: ["VCA-Petrochemie", "F-Pal", "TLN", "VVT"],
};

export const locations = [
  {
    city: "Alkmaar",
    type: "Vestiging",
    address: "Koraalstraat 7",
    postalCode: "1812 RK",
    phone: "072-5052344",
    email: "info@winder.nl",
    description: "Vestiging Alkmaar met kantoor en werkplaats.",
  },
  {
    city: "Den Helder",
    type: "Vestiging",
    address: "Mastenmakersweg 3",
    postalCode: "1786 PB",
    phone: "0223-635831",
    email: "denhelder@winder.nl",
    description: "Vestiging voor transport en op- en overslag.",
  },
  {
    city: "Hoorn",
    type: "Vestiging",
    address: "Kernweg 30",
    postalCode: "1627 LH",
    phone: "0229-212826",
    email: "hoorn@winder.nl",
    description: "Vestiging Hoorn met propaangas depot.",
  },
];

export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  icon: string;
  features?: string[];
}

export const services: Service[] = [
  {
    slug: "mobiele-torenkranen",
    title: "Mobiele Torenkranen",
    shortDescription:
      "Zelfoprichtende mobiele torenkranen van 38 tot 60 meter giekhoogte.",
    description:
      "Winder beschikt over een modern wagenpark zelfoprichtende mobiele torenkranen. Deze kranen zijn snel inzetbaar en ideaal voor de bouw, renovatie en industrie. Onze ervaren machinisten zorgen voor een veilige en efficiënte inzet.",
    icon: "crane",
    features: [
      "Snel op- en afbouwen",
      "Giekhoogte van 38 tot 60 meter",
      "Maximaal hefvermogen tot 8 ton",
      "Inclusief ervaren machinist",
      "Geschikt voor bouw, renovatie en industrie",
    ],
  },
  {
    slug: "telescoopkraan",
    title: "Telescoopkranen",
    shortDescription:
      "Telescoopkranen met een hefvermogen van 40 tot 300 ton.",
    description:
      "Voor zware hijswerkzaamheden beschikt Winder over telescoopkranen met een hefvermogen van 40 tot 300 ton. Onze kranen worden bediend door ervaren en gecertificeerde machinisten.",
    icon: "crane",
    features: [
      "Hefvermogen van 40 tot 300 ton",
      "Gecertificeerde machinisten",
      "Geschikt voor industriële projecten",
      "Snelle mobilisatie",
    ],
  },
  {
    slug: "autolaadkraan",
    title: "Autolaadkranen",
    shortDescription:
      "Vrachtwagens uitgerust met autolaadkranen voor flexibel hijswerk.",
    description:
      "Onze vrachtwagens zijn uitgerust met krachtige autolaadkranen. Ideaal voor het laden en lossen van zware materialen op locatie. Flexibel en snel inzetbaar.",
    icon: "truck",
    features: [
      "Flexibel inzetbaar",
      "Laden en lossen op locatie",
      "Diverse capaciteiten beschikbaar",
      "Combinatie transport en hijswerk",
    ],
  },
  {
    slug: "transport",
    title: "Transport",
    shortDescription:
      "Betrouwbaar wegtransport door heel Nederland en Europa.",
    description:
      "Winder verzorgt betrouwbaar wegtransport door heel Nederland en Europa. Met ons moderne wagenpark van meer dan 50 trekkers kunnen wij vrijwel elke transportopdracht aan. Van stukgoed tot complete ladingen.",
    icon: "truck",
    features: [
      "Nationaal en internationaal transport",
      "Modern wagenpark",
      "GPS tracking",
      "Diverse opleggers beschikbaar",
    ],
  },
  {
    slug: "chalet-transport",
    title: "Chalet Transport",
    shortDescription:
      "Gespecialiseerd transport van chalets, stacaravans en portacabins.",
    description:
      "Winder is gespecialiseerd in het transport van chalets, stacaravans, portacabins en andere omvangrijke objecten. Met speciaal materieel en ervaren chauffeurs zorgen wij voor een veilig transport van uw kostbare bezit.",
    icon: "home",
    features: [
      "Chalets en stacaravans",
      "Portacabins en units",
      "Speciaal materieel",
      "Door heel Nederland en Europa",
    ],
  },
  {
    slug: "adr-transport",
    title: "ADR Transport",
    shortDescription:
      "Gecertificeerd transport van gevaarlijke stoffen conform ADR regelgeving.",
    description:
      "Voor het transport van gevaarlijke stoffen beschikt Winder over ADR-gecertificeerde chauffeurs en materieel. Wij voldoen aan alle wettelijke eisen en beschikken over de benodigde vergunningen.",
    icon: "shield",
    features: [
      "ADR-gecertificeerde chauffeurs",
      "Alle gevarenklassen",
      "Conform wet- en regelgeving",
      "VCA-Petrochemie gecertificeerd",
    ],
  },
  {
    slug: "pakketdienst",
    title: "Pakketdienst",
    shortDescription:
      "Snelle pakketbezorging in Noord-Holland en omstreken.",
    description:
      "Winder biedt een betrouwbare pakketdienst voor Noord-Holland en omstreken. Snel, flexibel en persoonlijk. Ideaal voor bedrijven die dagelijks pakketten verzenden.",
    icon: "package",
    features: [
      "Dagelijkse bezorging",
      "Noord-Holland en omstreken",
      "Track & trace",
      "Persoonlijke service",
    ],
  },
  {
    slug: "werkvoorbereiding",
    title: "Werkvoorbereiding",
    shortDescription:
      "Professionele werkvoorbereiding voor hijsprojecten en transport.",
    description:
      "Onze afdeling werkvoorbereiding zorgt voor een gedegen voorbereiding van uw hijsproject of transport. Van terreinonderzoek tot het opstellen van hijsplannen en vergunningsaanvragen.",
    icon: "clipboard",
    features: [
      "Terreinonderzoek",
      "Hijsplannen opstellen",
      "Vergunningsaanvragen",
      "3D hijssimulaties",
    ],
  },
  {
    slug: "op-en-overslag",
    title: "Op- en Overslag",
    shortDescription:
      "Op- en overslag faciliteiten op onze locaties in Noord-Holland.",
    description:
      "Winder beschikt over ruime op- en overslag faciliteiten op onze locaties in Alkmaar, Hoorn en Den Helder. Geschikt voor opslag van goederen, materialen en machines.",
    icon: "warehouse",
    features: [
      "Binnen- en buitenopslag",
      "Beveiligd terrein",
      "Alkmaar, Hoorn en Den Helder",
      "Flexibele opslagperiodes",
    ],
  },
  {
    slug: "propaangas-depot",
    title: "Propaangas Depot",
    shortDescription: "Propaangas depot in Hoorn voor particulier en zakelijk.",
    description:
      "Op onze locatie in Hoorn exploiteren wij een propaangas depot. Hier kunt u terecht voor het vullen en wisselen van gasflessen voor zowel particulier als zakelijk gebruik.",
    icon: "flame",
    features: [
      "Gasflessen vullen en wisselen",
      "Particulier en zakelijk",
      "Locatie Hoorn",
      "Diverse formaten beschikbaar",
    ],
  },
  {
    slug: "exceptioneel-transport",
    title: "Exceptioneel Transport",
    shortDescription:
      "Transport van buitenmaatse ladingen met de juiste vergunningen.",
    description:
      "Winder verzorgt exceptioneel transport: het vervoer van ladingen die de standaard afmetingen of gewichten overschrijden. Wij regelen alle benodigde vergunningen en begeleiding.",
    icon: "truck",
    features: [
      "Buitenmaatse ladingen",
      "Vergunningen en ontheffingen",
      "Begeleiding en route-advies",
      "Ervaren chauffeurs",
    ],
  },
  {
    slug: "groupage",
    title: "Groupage & Distributie",
    shortDescription:
      "Groupage en distributie voor efficiënt deelladingvervoer.",
    description:
      "Met onze groupage dienst combineren wij deelladingen voor efficiënt transport. Ideaal voor bedrijven die regelmatig kleinere zendingen hebben. Distributie door heel Nederland.",
    icon: "boxes",
    features: [
      "Deelladingen combineren",
      "Kostenefficiënt",
      "Regelmatige ritten",
      "Landelijke distributie",
    ],
  },
];

export const craneSpecs = {
  mobieleTorenkranen: [
    {
      name: "Liebherr 38K.1",
      giekHoogte: "38 meter",
      maxHefvermogen: "4.800 kg",
      maxGieklengte: "35 meter",
      hefvermogenBijMaxGiek: "1.100 kg",
      description:
        "Compacte mobiele torenkraan, ideaal voor kleinere bouwprojecten en renovatiewerkzaamheden in stedelijk gebied.",
    },
    {
      name: "Liebherr MK 88-4.1 (44m)",
      giekHoogte: "44 meter",
      maxHefvermogen: "8.000 kg",
      maxGieklengte: "45 meter",
      hefvermogenBijMaxGiek: "1.600 kg",
      description:
        "Veelzijdige mobiele torenkraan met uitstekende prestaties. Geschikt voor middelgrote bouw- en industrieprojecten.",
    },
    {
      name: "Liebherr MK 88-4.1 (48m)",
      giekHoogte: "48 meter",
      maxHefvermogen: "8.000 kg",
      maxGieklengte: "45 meter",
      hefvermogenBijMaxGiek: "1.600 kg",
      description:
        "De 48 meter variant van de MK 88 biedt extra hoogte voor grotere projecten, met hetzelfde krachtige hefvermogen.",
    },
    {
      name: "Liebherr MK 140 (60m)",
      giekHoogte: "60 meter",
      maxHefvermogen: "8.000 kg",
      maxGieklengte: "65 meter",
      hefvermogenBijMaxGiek: "1.750 kg",
      description:
        "Onze grootste mobiele torenkraan met een indrukwekkende giekhoogte van 60 meter. Voor de meest veeleisende projecten.",
    },
  ],
  telescoopkranen: [
    {
      name: "Liebherr LTM 1040-2.1",
      hefvermogen: "40 ton",
      maxGiekhoogte: "40 meter",
      description: "Compacte telescoopkraan voor hijswerkzaamheden tot 40 ton.",
    },
    {
      name: "Liebherr LTM 1055-3.2",
      hefvermogen: "55 ton",
      maxGiekhoogte: "40 meter",
      description:
        "Veelzijdige 55 tons kraan, geschikt voor diverse hijsprojecten.",
    },
    {
      name: "Liebherr LTM 1090-4.2",
      hefvermogen: "90 ton",
      maxGiekhoogte: "60 meter",
      description:
        "Krachtige 90 tons telescoopkraan voor zwaardere hijswerkzaamheden.",
    },
    {
      name: "Liebherr LTM 1120-4.1",
      hefvermogen: "120 ton",
      maxGiekhoogte: "66 meter",
      description:
        "120 tons telescoopkraan voor grote industriële hijsprojecten.",
    },
    {
      name: "Liebherr LTM 1300-6.3",
      hefvermogen: "300 ton",
      maxGiekhoogte: "100 meter",
      description:
        "Onze grootste telescoopkraan met een hefvermogen van 300 ton. Voor de allergrootste projecten.",
    },
  ],
  autolaadkranen: [
    {
      name: "Autolaadkraan klein",
      bereik: "Tot 12 meter",
      hefvermogen: "Tot 5 ton",
      description: "Compacte autolaadkraan voor lichtere hijswerkzaamheden.",
    },
    {
      name: "Autolaadkraan middel",
      bereik: "Tot 18 meter",
      hefvermogen: "Tot 10 ton",
      description: "Middenzware autolaadkraan voor veelzijdig inzetbaar werk.",
    },
    {
      name: "Autolaadkraan groot",
      bereik: "Tot 28 meter",
      hefvermogen: "Tot 20 ton",
      description: "Zware autolaadkraan voor de grotere hijsklussen.",
    },
  ],
};

export const vacatures = [
  {
    title: "Kraanmachinist",
    location: "Hoorn / Regio Noord-Holland",
    type: "Fulltime",
    description:
      "Wij zoeken een ervaren kraanmachinist voor het bedienen van onze mobiele torenkranen en telescoopkranen. Je werkt op diverse locaties in Noord-Holland en daarbuiten.",
    requirements: [
      "Rijbewijs C/CE",
      "TCVT certificaat torenkraan en/of telescoopkraan",
      "Minimaal 2 jaar ervaring",
      "VCA-Petrochemie certificaat (of bereid dit te behalen)",
      "Flexibel en zelfstandig",
    ],
  },
  {
    title: "Vrachtwagenchauffeur CE",
    location: "Hoorn",
    type: "Fulltime",
    description:
      "Voor ons transport team zoeken wij een ervaren vrachtwagenchauffeur met rijbewijs CE. Je rijdt nationaal en internationaal transport met diverse opleggers.",
    requirements: [
      "Rijbewijs CE",
      "Code 95",
      "Digitale tachograafkaart",
      "ADR certificaat is een pre",
      "Betrouwbaar en representatief",
    ],
  },
  {
    title: "Medewerker Werkplaats",
    location: "Hoorn",
    type: "Fulltime",
    description:
      "Wij zoeken een technisch onderlegde medewerker voor onze werkplaats in Hoorn. Je bent verantwoordelijk voor het onderhoud en de reparatie van ons wagenpark.",
    requirements: [
      "Technische opleiding (MBO niveau 3/4)",
      "Ervaring met vrachtwagens en/of kranen",
      "Zelfstandig kunnen werken",
      "In bezit van rijbewijs B (C is een pre)",
    ],
  },
  {
    title: "Planner Transport",
    location: "Hoorn",
    type: "Fulltime",
    description:
      "Als planner transport ben je verantwoordelijk voor de dagelijkse planning van ons wagenpark. Je bent het eerste aanspreekpunt voor klanten en chauffeurs.",
    requirements: [
      "MBO+ werk- en denkniveau",
      "Ervaring in transport planning",
      "Kennis van de transportbranche",
      "Goede communicatieve vaardigheden",
      "Stressbestendig en oplossingsgericht",
    ],
  },
];

export const history = {
  intro:
    "Winder is een echt familiebedrijf. Al sinds 1894 zijn wij actief in transport en later ook in kraanverhuur. Wat begon als een klein transportbedrijf in Hoorn is uitgegroeid tot een veelzijdig bedrijf met circa 75-80 medewerkers en drie vestigingen in Noord-Holland.",
  milestones: [
    {
      year: "1894",
      title: "Oprichting",
      description:
        "Het bedrijf wordt opgericht in Hoorn als paard-en-wagen transportbedrijf.",
    },
    {
      year: "1920s",
      title: "Motorisering",
      description:
        "De eerste gemotoriseerde vrachtwagens worden aangeschaft. Het bedrijf groeit mee met de tijd.",
    },
    {
      year: "1950s",
      title: "Naoorlogse groei",
      description:
        "Na de Tweede Wereldoorlog groeit het bedrijf fors mee met de wederopbouw van Nederland.",
    },
    {
      year: "1970s",
      title: "Start kraanverhuur",
      description:
        "Winder breidt uit naar kraanverhuur en wordt een compleet transport- en hijsbedrijf.",
    },
    {
      year: "1990s",
      title: "Modernisering",
      description:
        "Investering in modern materieel en uitbreiding naar meerdere vestigingen.",
    },
    {
      year: "2000s",
      title: "Certificeringen",
      description:
        "Behalen van VCA-Petrochemie, F-Pal en andere branche-certificeringen.",
    },
    {
      year: "Vandaag",
      title: "Anno nu",
      description:
        "Met drie vestigingen in Alkmaar, Hoorn en Den Helder en een modern wagenpark is Winder een toonaangevend bedrijf in Noord-Holland.",
    },
  ],
};

export const about = {
  intro:
    "Winder Limmen is een transport- en kraanverhuurbedrijf gevestigd in Noord-Holland op 3 locaties: Alkmaar, Hoorn en Den Helder. Als familiebedrijf met een rijke historie die teruggaat tot 1894, beschikken we over uitgebreide specialistische kennis op het gebied van transport-, hijs- logistiek en montageactiviteiten. Met onze vestigingen staan we sterk in Noord-Holland en dient dit als springplank voor operaties die zich uitstrekken over heel Nederland, België, Duitsland en Frankrijk.",
  values: [
    {
      title: "Betrouwbaarheid",
      description:
        "Al meer dan 125 jaar bouwen wij aan langdurige relaties met onze klanten. Een afspraak is een afspraak.",
    },
    {
      title: "Vakmanschap",
      description:
        "Onze medewerkers zijn vakkundige professionals met jarenlange ervaring in transport en hijswerk.",
    },
    {
      title: "Veiligheid",
      description:
        "Veiligheid staat bij ons op nummer één. Wij zijn VCA-Petrochemie gecertificeerd en investeren continu in veiligheidstrainingen.",
    },
    {
      title: "Flexibiliteit",
      description:
        "Met ons brede dienstenpakket en wagenpark kunnen wij snel en flexibel inspelen op uw wensen.",
    },
  ],
  certifications: [
    {
      name: "VCA-Petrochemie",
      description:
        "Veiligheid, Gezondheid en Milieu Checklist Aannemers voor de petrochemische industrie.",
    },
    {
      name: "F-Pal",
      description:
        "Leverancierskwalificatie-systeem voor de olie- en gasindustrie.",
    },
    {
      name: "TLN",
      description: "Lid van Transport en Logistiek Nederland.",
    },
    {
      name: "VVT",
      description:
        "Vereniging van Verticaal Transportbedrijven.",
    },
  ],
};
