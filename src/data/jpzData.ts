import { TowingService, FleetVehicle, SowetoLandmark, ClientReview } from '../types';

export const JPZ_INFO = {
  name: 'JPZ Towing Services',
  legalName: 'JPZ Towing Services (Pty) Ltd',
  slogan: 'Fast Response 24/7 Roadside & Accident Recovery in Soweto',
  location: 'Soweto, Gauteng, South Africa',
  headquarters: 'Pimville / Soweto Central, Johannesburg South',
  primaryPhone: '081 079 8244',
  primaryPhoneRaw: '+27810798244',
  secondaryPhone: '064 316 7880',
  secondaryPhoneRaw: '+27643167880',
  alternativePhone: '074 508 3529',
  alternativePhoneRaw: '+27745083529',
  email: 'jpztowingservices@gmail.com',
  whatsappUrl: 'https://wa.me/27810798244?text=Hi%20JPZ%20Towing%2C%20I%20need%20urgent%20towing%20assistance%20in%20Soweto!',
  logo: '/assets/aistudio/IMG-20261029-WA0239_5c595ed4.jpg',
  responseStats: {
    avgResponseMinutes: '15 - 25 Mins',
    availableHours: '24 Hours / 7 Days / 365 Days',
    satisfactionRate: '99.4%',
    recoveriesCompleted: '3,800+',
    sowetoCoverage: '100% All Suburbs & Highways'
  }
};

export const TOWING_SERVICES: TowingService[] = [
  {
    id: 'accident-recovery',
    title: '24/7 Emergency Accident Recovery',
    shortTitle: 'Accident Recovery',
    tagline: 'Rapid scene arrival, safe recovery, and insurance compliant transport.',
    image: '/assets/aistudio/IMG-20261029-WA0252_bf87545a.jpg',
    iconName: 'ShieldAlert',
    summary: 'Immediate dispatch to vehicle collisions, rollovers, and roadside impacts across Soweto with full scene clearance.',
    description: 'When an accident occurs, every minute counts. JPZ Towing provides rapid response accident clearing in Soweto and greater Johannesburg. We coordinate with local traffic authorities, safely winch compromised vehicles, and transport your car directly to your approved panel beater, home, or secure yard.',
    capabilities: [
      'High-speed dispatch across Soweto within 15–20 minutes',
      'Hydraulic boom and wheel-lift damage-free extraction',
      'Insurance-approved towing paperwork & scene documentation',
      'Safe transport for non-drivable and severely damaged vehicles',
      'Nighttime strobe & beacon high-visibility emergency clearance'
    ],
    specs: [
      { label: 'Availability', value: '24/7 / 365' },
      { label: 'Avg Arrival', value: '15 - 20 mins' },
      { label: 'Vehicle Types', value: 'Sedans, Hatchbacks, SUVs, Bakkies' },
      { label: 'Scene Safety', value: 'Strobe beacons, traffic cones, flares' }
    ],
    etaEstimate: '15-20 min in Soweto',
    baseRateEstimate: 'From R650 (Accident / Distance Based)'
  },
  {
    id: 'breakdown-towing',
    title: 'Mechanical Breakdown Towing',
    shortTitle: 'Breakdown Towing',
    tagline: 'Stranded on the road? We get you and your car to safety fast.',
    image: '/assets/aistudio/IMG-20261029-WA0243_aaa4daf1.jpg',
    iconName: 'Truck',
    summary: 'Engine overheated, gearbox failure, clutch burnt or broken axle? Fast hook-and-tow anywhere in Gauteng.',
    description: 'Whether your engine cut out on Chris Hani Road, your radiator burst on the Golden Highway, or your clutch gave up in Pimville, our specialized Nissan Hardbody recovery truck locks on safely and transports your car smoothly to your preferred workshop or home.',
    capabilities: [
      'Custom wheel-lift avoids touching bodywork or low bumpers',
      'Immediate tow to your trusted local mechanic or dealership',
      'Affordable transparent rates with zero hidden hook fees',
      'Secure passenger cabin ride-along if needed'
    ],
    specs: [
      { label: 'Hook System', value: 'Underlift / Wheel-lift & Chains' },
      { label: 'Payload', value: 'Up to 3,500 kg' },
      { label: 'Township Access', value: 'Fits tight streets & residential alleys' },
      { label: 'Payment', value: 'Cash, Card, Instant EFT, SnapScan' }
    ],
    etaEstimate: '15-25 min',
    baseRateEstimate: 'From R550 local Soweto'
  },
  {
    id: 'flatbed-rollback',
    title: 'Flatbed Rollback Transport',
    shortTitle: 'Flatbed Rollback',
    tagline: 'Zero-wheel contact rollback for luxury, lowered, or AWD vehicles.',
    image: '/assets/aistudio/IMG-20261029-WA0246_3e27129d.jpg',
    iconName: 'Layers',
    summary: 'Full hydraulic slide-back bed for all-wheel-drive, performance cars, and electric vehicles requiring zero ground friction.',
    description: 'Our heavy-duty rollback flatbed is equipped with a smooth low-angle deck and hydraulic winch. Your car rests entirely on the steel bed with wheels securely strapped, preventing drivetrain stress on 4MATIC, Quattro, xDrive, and modified lowered suspensions.',
    capabilities: [
      'Total ground clearance protection for low-profile spoilers',
      'Mandatory for all 4x4 / AWD automatic vehicles with stuck transmissions',
      'Dealership drops, showroom transfers, and high-value transport',
      'Heavy 6-ton hydraulic deck payload'
    ],
    specs: [
      { label: 'Deck Type', value: 'Full Hydraulic Tilt & Slide Bed' },
      { label: 'Capacity', value: 'Up to 6,000 kg' },
      { label: 'Drivetrain Safety', value: '100% Off-Road Ground Contact' },
      { label: 'Tie-Down', value: '4-Point Wheel Harness Straps' }
    ],
    etaEstimate: '20-30 min',
    baseRateEstimate: 'From R850 local / per km'
  },
  {
    id: 'winch-ditch-recovery',
    title: 'Winch & Embankment Off-Road Recovery',
    shortTitle: 'Winch Recovery',
    tagline: 'Heavy cable winching for vehicles trapped in ditches, mud, or rocks.',
    image: '/assets/aistudio/IMG-20261029-WA0252_bf87545a.jpg',
    iconName: 'Anchor',
    summary: 'Stuck on a stormwater curb, rocky embankment, or deep mud after heavy Gauteng downpours? We winch you out.',
    description: 'Soweto roads and rain gutters can easily trap low sedans and bakkies. With our high-tensile steel winches, snatch blocks, and recovery tree-savers, JPZ can pull vehicles out of precarious angles without tearing suspension arms or damaging bumpers.',
    capabilities: [
      'High-strength 5-ton rated hydraulic winch pull',
      'Snatch block angle redirects for tight embankment extractions',
      'Gentle recovery without chassis twisting or axle bend',
      'Operates day and night in all wet weather conditions'
    ],
    specs: [
      { label: 'Winch Pull', value: '4,500 - 6,000 kg Line Pull' },
      { label: 'Cable Type', value: 'Aircraft Grade Steel Cable' },
      { label: 'Terrain', value: 'Pavement drops, ditches, trenches, mud' }
    ],
    etaEstimate: '15-25 min',
    baseRateEstimate: 'From R600 + recovery complex rate'
  },
  {
    id: 'tyre-puncture',
    title: 'Emergency Roadside Tyre Change',
    shortTitle: 'Tyre Change',
    tagline: 'Fast roadside assistance for flat tyres, rim swaps, and wheel nuts.',
    image: '/assets/aistudio/IMG-20261029-WA0251_3724e32f.jpg',
    iconName: 'Disc',
    summary: 'Pothole blowout or stubborn lock nuts in an unsafe spot? Our technician changes your tyre right where you stopped.',
    description: 'Stopping on the side of the highway or in an isolated area with a flat tyre is dangerous. Call JPZ Towing and we will be on scene in minutes with high-torque impact wrenches and hydraulic trolley jacks to swap to your spare tyre safely.',
    capabilities: [
      'Rapid arrival with hazard strobe protection while you remain safe',
      'Stubborn or overtightened wheel nut removal with breaker bars',
      'Spare wheel inflation and pressure verification',
      'Tow option available immediately if no spare is present'
    ],
    specs: [
      { label: 'Jack Equipment', value: '3-Ton Heavy Duty Trolley Jacks' },
      { label: 'Tools', value: 'Cordless Impact Guns & Breaker Bars' },
      { label: 'Safety', value: 'High-vis cones & flashing tow lights' }
    ],
    etaEstimate: '15-20 min',
    baseRateEstimate: 'From R350 callout'
  },
  {
    id: 'jumpstart-battery',
    title: '12V/24V Battery Jump Start Service',
    shortTitle: 'Jump Start',
    tagline: 'Dead battery at home, mall, or on the road? Instant power boost.',
    image: '/assets/aistudio/IMG-20261029-WA0263_744a00c7.jpg',
    iconName: 'Zap',
    summary: 'Commercial grade booster packs and jumper leads to fire up flat batteries on petrol and diesel engines immediately.',
    description: 'Cold morning start issues, left headlights on at Maponya Mall or Pimville Square? JPZ Towing arrives swiftly with surge-protected commercial lithium and AGM booster packs to revive your car without frying sensitive engine control modules (ECUs).',
    capabilities: [
      'Surge-protected booster packs safe for modern electronic ECUs',
      'Alternator charge test and battery health check on site',
      'Covers cars, bakkies, diesel engines, and small trucks',
      'Tow backup ready if the battery is permanently failed'
    ],
    specs: [
      { label: 'Voltage', value: '12V & 24V Vehicles' },
      { label: 'Booster Capacity', value: '3,000 Peak Amps' },
      { label: 'Safety', value: 'Reverse polarity & surge protection' }
    ],
    etaEstimate: '15-20 min',
    baseRateEstimate: 'From R350 callout'
  },
  {
    id: 'long-distance-relocation',
    title: 'Long Distance & Inter-Provincial Relocation',
    shortTitle: 'Long Distance Towing',
    tagline: 'Reliable vehicle transport across Gauteng, KZN, Free State, and beyond.',
    image: '/assets/aistudio/IMG-20261029-WA0240_6d5fda0d.jpg',
    iconName: 'Compass',
    summary: 'Moving vehicles between Johannesburg, Pretoria, Durban, Bloemfontein, Polokwane, and nationwide with insured transport.',
    description: 'Need a newly purchased car collected, a project vehicle relocated, or a non-running family vehicle transported to another province? JPZ provides competitive flat-rate and per-kilometer inter-provincial towing with real-time GPS tracking and transit insurance.',
    capabilities: [
      'Door-to-door vehicle delivery anywhere across South Africa',
      'Dual-axle car hauler trailer or rollback long-haul transport',
      'All vehicle classes: hatchbacks, vintage classics, track cars, bakkies',
      'Comprehensive in-transit insurance protection'
    ],
    specs: [
      { label: 'Trailer', value: 'Dual-Axle Low Load Angle Car Hauler' },
      { label: 'Coverage', value: 'National Inter-Provincial' },
      { label: 'Tracking', value: 'Live Driver Check-Ins' }
    ],
    etaEstimate: 'Same-day or Scheduled',
    baseRateEstimate: 'Custom quote based on km'
  },
  {
    id: 'machinery-transport',
    title: 'Machinery & Light Equipment Hauling',
    shortTitle: 'Machinery Hauling',
    tagline: 'Transport for construction equipment, generators, compressors, and toolkits.',
    image: '/assets/aistudio/IMG-20261029-WA0250_81a139e2.jpg',
    iconName: 'Cpu',
    summary: 'Heavy rollback deck and trailer for light plant equipment, forklifts, scissor lifts, and industrial generators.',
    description: 'We don’t just tow cars; JPZ Towing supports local contractors and businesses across Soweto and JHB South with reliable transport for commercial equipment, backup generators, bobcats, compressors, and tool trailers.',
    capabilities: [
      'Heavy-duty tie-downs with grade-70 binder chains',
      'Low ramp angle for wheeled machinery loading',
      'Job site to job site transfers on flexible schedules',
      'Punctual professional handling for corporate clients'
    ],
    specs: [
      { label: 'Max Load', value: 'Up to 5,500 kg' },
      { label: 'Equipment', value: 'Generators, bobcats, rollers, forklifts' }
    ],
    etaEstimate: 'Scheduled / Rapid',
    baseRateEstimate: 'Custom rate based on load'
  }
];

export const FLEET_VEHICLES: FleetVehicle[] = [
  {
    id: 'nissan-wheel-lift',
    name: 'Nissan Hardbody Heavy Boom & Wheel-Lift ("116 JPZ GP")',
    callsign: 'JPZ Rapid Unit 1',
    plate: '116 JPZ GP',
    type: 'Urban Rapid Response Tow Truck',
    description: 'The iconic custom sky-blue Nissan Hardbody tow truck with hydraulic rear boom and underlift wheel-lift. Perfectly engineered for navigating busy Soweto township streets, narrow residential driveways, and high-density traffic with lighting speed.',
    primaryImage: '/assets/aistudio/IMG-20261029-WA0263_744a00c7.jpg',
    galleryImages: [
      '/assets/aistudio/IMG-20261029-WA0243_aaa4daf1.jpg',
      '/assets/aistudio/IMG-20261029-WA0256_5a173c1a.jpg',
      '/assets/aistudio/IMG-20261029-WA0253_92ca70fc.jpg',
      '/assets/aistudio/IMG-20261029-WA0251_3724e32f.jpg',
      '/assets/aistudio/IMG-20261029-WA0238_1__2299615e.jpg'
    ],
    videoSrc: '/assets/aistudio/VID-20261029-WA0247_217c01d6.mp4',
    specs: {
      capacity: '3,500 kg Tow Capacity',
      winchRating: '4,500 kg Hydraulic Winch',
      specialty: 'Urban Street Rapid Clearance & Pavement Extractions',
      crew: '2-Man Professional Recovery Team'
    }
  },
  {
    id: 'hilux-trailer-rig',
    name: 'Toyota Hilux Raider 4x4 & Dual-Axle Car Hauler',
    callsign: 'JPZ Long Haul Rig 2',
    plate: '011 JPZ GP',
    type: 'Heavy 4x4 Tow Rig & Dual-Axle Trailer',
    description: 'Custom red Toyota Hilux Raider 4x4 rig equipped with an integrated rear towing boom, heavy winch, and hitched to a specialized low-clearance dual-axle car transporter trailer for luxury and lowered vehicles.',
    primaryImage: '/assets/aistudio/IMG-20261029-WA0240_6d5fda0d.jpg',
    galleryImages: [
      '/assets/aistudio/IMG-20261029-WA0242_476ad6ce.jpg',
      '/assets/aistudio/IMG-20261029-WA0249_0b17735a.jpg',
      '/assets/aistudio/IMG-20261029-WA0257_8d8fed0b.jpg',
      '/assets/aistudio/IMG-20261029-WA0238_2299615e.jpg'
    ],
    specs: {
      capacity: '4,000 kg Combined Payload',
      winchRating: '5,000 kg Recovery Winch',
      specialty: 'Long Distance, Low Sports Cars & Highway Cruising',
      crew: 'Master Long-Haul Driver'
    }
  },
  {
    id: 'heavy-rollback',
    name: 'Isuzu / Nissan All-In-1 Emergency Hydraulic Rollback',
    callsign: 'JPZ Heavy Rollback 3',
    plate: 'DN 21 GY GP',
    type: 'Full Hydraulic Slide-Deck Rollback',
    description: 'Commercial grade flatbed rollback capable of sliding its entire heavy deck down to asphalt level for damage-free winching of badly smashed accident cars, automatic AWD vehicles, and high-end SUVs.',
    primaryImage: '/assets/aistudio/IMG-20261029-WA0246_3e27129d.jpg',
    galleryImages: [
      '/assets/aistudio/IMG-20261029-WA0250_81a139e2.jpg',
      '/assets/aistudio/IMG-20261029-WA0258_03baf0cc.jpg',
      '/assets/aistudio/IMG-20261029-WA0255_2b9a1bd6.jpg',
      '/assets/aistudio/IMG-20261029-WA0254_5cf22770.jpg'
    ],
    videoSrc: '/assets/aistudio/VID-20261029-WA0264_67ecff06.mp4',
    specs: {
      capacity: '6,000 kg Flatbed Payload',
      winchRating: '6,500 kg Hydraulic Bed Winch',
      specialty: 'Accident Roll-overs, AWD Automatics & Dealership Transports',
      crew: '2-Man Certified Rigging Specialists'
    }
  }
];

export const GALLERY_PHOTOS = [
  {
    src: '/assets/aistudio/IMG-20261029-WA0263_744a00c7.jpg',
    caption: 'Sunset patrol in Soweto with JPZ blue Nissan tow truck',
    category: 'Fleet'
  },
  {
    src: '/assets/aistudio/IMG-20261029-WA0243_aaa4daf1.jpg',
    caption: 'Safe wheel-lift towing of red VW Polo through Soweto',
    category: 'Breakdown'
  },
  {
    src: '/assets/aistudio/IMG-20261029-WA0252_bf87545a.jpg',
    caption: 'Complex embankment extraction of white VW Polo stuck on rocks',
    category: 'Accident'
  },
  {
    src: '/assets/aistudio/IMG-20261029-WA0240_6d5fda0d.jpg',
    caption: 'Red Hilux 4x4 rig hauling red Audi hatchback on dual-axle trailer',
    category: 'Long Distance'
  },
  {
    src: '/assets/aistudio/IMG-20261029-WA0246_3e27129d.jpg',
    caption: 'Rollback deck delivering Mercedes-Benz sedan directly to dealership',
    category: 'Rollback'
  },
  {
    src: '/assets/aistudio/IMG-20261029-WA0236_ad1a8d6a.jpg',
    caption: 'Accident recovery rigging in Soweto roadside area',
    category: 'Accident'
  },
  {
    src: '/assets/aistudio/IMG-20261029-WA0248_7870f639.jpg',
    caption: 'Nighttime emergency recovery with high-visibility hazard beacons',
    category: 'Accident'
  },
  {
    src: '/assets/aistudio/IMG-20261029-WA0250_81a139e2.jpg',
    caption: 'Commercial rollback truck parked and ready for immediate callout',
    category: 'Fleet'
  },
  {
    src: '/assets/aistudio/IMG-20261029-WA0261_a7b777fc.jpg',
    caption: 'Heavy towing operation on major Gauteng arterial route',
    category: 'Breakdown'
  },
  {
    src: '/assets/aistudio/IMG-20261029-WA0256_5a173c1a.jpg',
    caption: 'Rear boom and hydraulic rigging setup on JPZ Rapid Unit',
    category: 'Fleet'
  },
  {
    src: '/assets/aistudio/IMG-20261029-WA0262_4dc68734.jpg',
    caption: 'Off-road ditch recovery pull with heavy steel cable',
    category: 'Accident'
  },
  {
    src: '/assets/aistudio/IMG-20261029-WA0242_476ad6ce.jpg',
    caption: 'Dual-axle transporter setup at local commercial centre',
    category: 'Long Distance'
  }
];

export const SOWETO_LANDMARKS: SowetoLandmark[] = [
  { name: 'Pimville Square', area: 'Pimville, Soweto', avgEtaMins: 12, popularRoad: 'Modjadji St / Chris Hani Rd' },
  { name: 'Chris Hani Baragwanath Academic Hospital', area: 'Diepkloof / Baragwanath', avgEtaMins: 14, popularRoad: 'Old Potchefstroom Rd' },
  { name: 'Maponya Mall', area: 'Klipspruit, Soweto', avgEtaMins: 15, popularRoad: 'Chris Hani Rd' },
  { name: 'Southgate Mall', area: 'Mondeor / JHB South', avgEtaMins: 16, popularRoad: 'Rifle Range Rd / M1 South' },
  { name: 'Diepkloof Square', area: 'Diepkloof Ext', avgEtaMins: 14, popularRoad: 'Immink Dr' },
  { name: 'Dobsonville Mall', area: 'Dobsonville', avgEtaMins: 18, popularRoad: 'Elias Motsoaledi Rd' },
  { name: 'Meadowlands Ndaba Drive', area: 'Meadowlands', avgEtaMins: 15, popularRoad: 'Ndaba Dr' },
  { name: 'Protea Glen Mall', area: 'Protea Glen', avgEtaMins: 20, popularRoad: 'N12 West / Protea Blvd' },
  { name: 'Jabulani Mall & Soweto Theatre', area: 'Jabulani', avgEtaMins: 15, popularRoad: 'Bolani Rd' },
  { name: 'Golden Highway & Devland', area: 'Devland / Eldorado Park', avgEtaMins: 12, popularRoad: 'Golden Hwy (R553)' },
  { name: 'Orlando Stadium & Towers', area: 'Orlando East', avgEtaMins: 13, popularRoad: 'Mooki St' },
  { name: 'Klipspruit Valley Road', area: 'Klipspruit West', avgEtaMins: 14, popularRoad: 'Klipspruit Valley Rd' }
];

export const CLIENT_REVIEWS: ClientReview[] = [
  {
    id: 'rev-samke',
    author: 'Samke & Friend',
    suburb: 'Pimville Square, Soweto',
    service: 'Emergency Breakdown Towing',
    rating: 5,
    comment: 'Bro answered immediately when I was stuck near Pimville Square. Didn\'t even have an exact address, just told him Pimville Square and he pulled up in 15 minutes with the blue Nissan truck. Top tier service in Soweto!',
    date: 'Verified WhatsApp Callout',
    verified: true,
    screenshotAsset: '/assets/aistudio/Screenshot_20261029_190727_WhatsApp_3e43eca6.jpg'
  },
  {
    id: 'rev-thabo',
    author: 'Thabo M.',
    suburb: 'Diepkloof Ext 3',
    service: 'Accident Recovery & Panel Shop Delivery',
    rating: 5,
    comment: 'Had a bad collision late at night near Bara hospital. JPZ Towing was on the scene before the insurance company even answered their phones. Handled the police scene, took photos, and transported my car safely. Highly recommend.',
    date: '2 weeks ago',
    verified: true
  },
  {
    id: 'rev-nomvula',
    author: 'Nomvula K.',
    suburb: 'Maponya Mall / Klipspruit',
    service: '12V Battery Jump Start',
    rating: 5,
    comment: 'Came out of Maponya Mall at 9 PM and my battery was completely dead. Called JPZ Towing, driver arrived in 18 minutes with a professional power booster. Fired right up! Very respectful and affordable.',
    date: '1 month ago',
    verified: true
  },
  {
    id: 'rev-sipho',
    author: 'Sipho Z.',
    suburb: 'Protea Glen',
    service: 'Flatbed Rollback for Audi Quattro',
    rating: 5,
    comment: 'My Audi Quattro had a broken propshaft and couldn\'t be towed on its wheels. JPZ rolled out their full flatbed truck and winched it onto the deck with zero scrapes. Best towing crew in Soweto!',
    date: '3 weeks ago',
    verified: true
  }
];

export const FAQS = [
  {
    q: 'How fast can JPZ Towing reach me in Soweto?',
    a: 'Our average arrival time across Soweto (Pimville, Diepkloof, Orlando, Meadowlands, Dobsonville, Maponya area, and Bara) is between 15 and 25 minutes. We keep units actively mobile and staged near key arterial routes like Chris Hani Road and the Golden Highway.'
  },
  {
    q: 'Can you tow insurance-covered accident vehicles?',
    a: 'Yes. We provide complete accident scene documentation, police incident recording, and direct delivery to your insurance-approved panel beater or assessment yard. We issue official invoicing and proof of tow.'
  },
  {
    q: 'What if I don\'t know my exact street address?',
    a: 'No problem at all! You can either use our Emergency ASAP form button on this website which automatically detects your GPS coordinates, or simply name the closest Soweto landmark (e.g. Pimville Square, Bara Hospital, Maponya Mall, or Orlando Towers). You can also share your live WhatsApp location directly to 081 079 8244.'
  },
  {
    q: 'What payment methods do you accept on scene?',
    a: 'We accept Cash, Card swipe (mobile speedpoint), Instant EFT, and SnapScan / Zapper. For approved corporate and insurance clients, account invoicing is available.'
  },
  {
    q: 'Do you tow outside of Soweto?',
    a: 'Yes! While Soweto and Johannesburg South are our primary local hubs, we frequently tow across Johannesburg, Roodepoort, Pretoria, the Vaal, and offer inter-provincial long-distance transport to Durban, Limpopo, Free State, and Cape Town.'
  }
];
