import { ServiceDivision, CompanyPillar } from '../types';

export const COMPANY_INFO = {
  name: 'TASEP PTY LTD',
  legalName: 'TASEP (Pty) Ltd',
  registration: 'Reg. No. 2021/849204/07',
  slogan: 'TASEP ! A Spirit For Innovation',
  tagline: 'BUILDING TODAY FOR A BETTER TOMORROW',
  primaryPhone: '+27 81 079 8244',
  localPhone: '081 079 8244',
  internationalPhone: '+27 81 079 8244',
  mainAlertNumber: '+27 81 079 8244',
  whatsappUrl: 'https://wa.me/27810798244?text=Hello%20TASEP%20PTY%20LTD,%20I%20would%20like%20to%20inquire%20about%20your%20services.',
  email: 'info@tasep.co.za',
  headquarters: 'Gauteng & Nationwide Operations, South Africa',
  address: 'Commercial Hub, Sandton / Johannesburg, Gauteng, South Africa',
  businessHours: 'Monday – Friday: 08:00 – 17:00 | Saturday: 08:30 – 13:00',
  emergencyLine: '24/7 Rapid Response & Alert Desk for Mining, Property & Industrial Facilities',
  logoUrl: '/assets/aistudio/IMG-20261028-WA0077_846089b4.jpg',
  flyerUrl: '/assets/aistudio/file_00000000b9c4820897699db2924a0c10_650e2f19.png',
  executivePortraitUrl: '/assets/extracted/executive_portrait.jpg',
  executiveFullUrl: '/assets/extracted/executive.jpg',
};

export const PILLARS: CompanyPillar[] = [
  {
    id: 'innovation',
    title: 'INNOVATION',
    subtitle: 'DRIVES US',
    iconName: 'Lightbulb',
    description: 'Pioneering progressive methodologies, modern heavy equipment, and modern structured workflows that redefine industry standards.',
    details: 'From integrating cutting-edge extraction technologies in mining to smart structural civil engineering, innovation is not just our motto—it is our operating heartbeat.'
  },
  {
    id: 'quality',
    title: 'QUALITY',
    subtitle: 'IN OUR WORK',
    iconName: 'ShieldCheck',
    description: 'Uncompromising attention to architectural, engineering, and environmental excellence on every scale.',
    details: 'We enforce stringent South African and international standards (SABS, ISO, SHEQ), ensuring every structure, earthwork, and corporate environment stands the test of time.'
  },
  {
    id: 'clients',
    title: 'CLIENTS',
    subtitle: 'OUR PRIORITY',
    iconName: 'Users',
    description: 'Building long-term, transparent, and collaborative partnerships tailored to deliver measurable economic value.',
    details: 'Our leadership maintains hands-on executive oversight. We align directly with client milestones, ensuring on-schedule completion and budget integrity.'
  },
  {
    id: 'sustainability',
    title: 'SUSTAINABLE',
    subtitle: 'GROWTH',
    iconName: 'TrendingUp',
    description: 'Championing eco-responsible practices, local community upliftment, and resilient financial viability.',
    details: 'Responsible resource extraction, green commercial building methodologies, eco-certified cleaning agents, and empowering local talent for generational impact.'
  }
];

export const SERVICE_DIVISIONS: ServiceDivision[] = [
  {
    id: 'mining-projects',
    title: 'Mining Projects',
    shortTitle: 'Mining',
    tagline: 'Heavy Earthmoving, Open-Cast Operations & Site Logistics',
    image: '/assets/extracted/mining.jpg',
    iconName: 'Pickaxe',
    accentColor: 'from-blue-600 to-cyan-500',
    summary: 'Specialized industrial mining contracting, high-tonnage earthworks, overburden removal, and mineral site infrastructure.',
    description: 'TASEP PTY LTD operates with high-tier earthmoving fleets and certified operators. We execute turnkey open-cast mining contracts, overburden stripping, pit preparation, haul-road construction, and tailings management with uncompromising safety protocols.',
    capabilities: [
      'Open-cast excavation & high-volume overburden stripping',
      'Heavy haulage & articulated dump truck fleet management',
      'Site preparation, bench formation & mine haul-road engineering',
      'Stockpile management, crushing & screening logistics',
      'Mine rehabilitation, environmental land grading & water control',
      'Comprehensive SHEQ (Safety, Health, Environment & Quality) compliance'
    ],
    specs: [
      { label: 'Fleet Capability', value: 'High-Tonnage CAT & Komatsu Excavators' },
      { label: 'Safety Record', value: 'Zero Harm Target Protocol' },
      { label: 'Operational Scope', value: 'Nationwide & Southern African Region' },
      { label: 'Turnaround', value: '24/7 Double-Shift Project Deployment' }
    ]
  },
  {
    id: 'property-development',
    title: 'Property Development',
    shortTitle: 'Property Dev',
    tagline: 'Commercial High-Rises, Civil Engineering & Modern Living',
    image: '/assets/extracted/property.jpg',
    iconName: 'Building2',
    accentColor: 'from-emerald-600 to-teal-500',
    summary: 'Turnkey architectural planning, structural concrete works, multi-storey commercial towers, and mixed-use infrastructure.',
    description: 'We bring architectural blueprints into reality through robust civil engineering, project management, and structural construction. From modern corporate headquarters and multi-family residential complexes to industrial warehouses, we deliver durable, energy-efficient spaces.',
    capabilities: [
      'Commercial multi-storey office towers & corporate hubs',
      'Residential housing schemes & high-density luxury apartments',
      'Structural reinforced concrete, formwork & steel erection',
      'Turnkey project management from architectural drafts to occupancy',
      'Civil infrastructure: bulk earthworks, storm drainage & paving',
      'Green building practices & SANS 10400 regulatory compliance'
    ],
    specs: [
      { label: 'Project Spectrum', value: 'R10M to R500M+ Turnkey Developments' },
      { label: 'Engineering Team', value: 'Pr.Eng & SACPCMP Accredited' },
      { label: 'Build Quality', value: 'NHBRC & CIDB Compliant Standards' },
      { label: 'Energy Standard', value: 'Eco-Smart & Solar-Ready Infrastructure' }
    ]
  },
  {
    id: 'financing',
    title: 'Financing',
    shortTitle: 'Financing',
    tagline: 'Strategic Capital, Project Syndication & Venture Structuring',
    image: '/assets/extracted/financing.jpg',
    iconName: 'Coins',
    accentColor: 'from-blue-700 to-indigo-600',
    summary: 'Tailored commercial funding solutions, development debt structuring, joint ventures, and capital advisory for high-impact ventures.',
    description: 'Capital execution is the foundation of industrial growth. TASEP Financing provides bespoke project funding frameworks, bridging finance, equity participation, and syndication to empower developers, mining operators, and commercial enterprises to scale without liquidity bottlenecks.',
    capabilities: [
      'Structured project finance for mining & property ventures',
      'Mezzanine debt, asset-backed lending & bridging capital',
      'Strategic Joint Venture (JV) equity partnerships',
      'Financial feasibility modelling & risk underwriting',
      'Working capital facilities for industrial equipment procurement',
      'Public-Private Partnership (PPP) capital facilitation'
    ],
    specs: [
      { label: 'Funding Models', value: 'Debt, Mezzanine, Equity & Joint Ventures' },
      { label: 'Advisory Level', value: 'Institutional & C-Suite Strategic Guidance' },
      { label: 'Due Diligence', value: 'Rapid Assessment & Risk-Optimized Terms' },
      { label: 'Target Sectors', value: 'Mining, Infrastructure, Real Estate & Tech' }
    ]
  },
  {
    id: 'cleaning-solutions',
    title: 'Specialized Corporate Cleaning Solutions',
    shortTitle: 'Corporate Cleaning',
    tagline: 'Commercial Hygiene, Deep Sanitation & Facility Care',
    image: '/assets/extracted/cleaning.jpg',
    iconName: 'Sparkles',
    accentColor: 'from-teal-600 to-emerald-500',
    summary: 'Professional corporate office sanitation, high-traffic commercial building maintenance, and post-construction deep decontamination.',
    description: 'Elevating corporate wellness and executive presentation through specialized cleaning methodologies. Equipped with industrial-grade floor scrubbers, hospital-grade disinfection systems, and certified personnel, we guarantee pristine, hygienic environments for South Africa’s leading institutions.',
    capabilities: [
      'Daily executive corporate office & boardroom maintenance',
      'Post-construction deep site clean & handover decontamination',
      'Industrial warehouse, manufacturing & factory scrubbing',
      'High-level window cleaning & facade glass maintenance',
      'Carpeting deep-extraction, stone polishing & marble restoration',
      'Eco-certified non-toxic disinfectants & bio-safe chemical standards'
    ],
    specs: [
      { label: 'Response Unit', value: '24/7 Rapid Emergency Response' },
      { label: 'Equipment Grade', value: 'Kärcher & Nilfisk Industrial Fleet' },
      { label: 'Certifications', value: 'BEE Level 1 Contributor & OHS Compliant' },
      { label: 'Personnel', value: 'Vetted, Uniformed & Safety Certified' }
    ]
  }
];

export const FAQS = [
  {
    q: 'What sectors does TASEP PTY LTD primarily operate in?',
    a: 'TASEP PTY LTD operates across four core integrated divisions: Mining Projects (earthworks & extraction support), Property Development (commercial & residential construction), Financing (strategic project funding & venture structuring), and Specialized Corporate Cleaning Solutions.'
  },
  {
    q: 'How can I request a project proposal or quotation?',
    a: 'You can submit an inquiry through our integrated contact forms on Page 4, call our main alert desk directly at +27 81 079 8244, or click our instant WhatsApp link to connect with our corporate liaison immediately.'
  },
  {
    q: 'Does TASEP undertake joint ventures or turnkey partnerships?',
    a: 'Yes. Our Financing and Property Development divisions frequently structure Joint Ventures (JVs) and turnkey EPC partnerships with both private developers and public infrastructure stakeholders.'
  },
  {
    q: 'What are TASEP’s safety and compliance standards?',
    a: 'Safety is non-negotiable. We maintain a strict Zero Harm Target Protocol across all mining and construction sites, adhering to Mine Health and Safety Act (MHSA), Occupational Health and Safety Act (OHSA), and SABS/ISO guidelines.'
  },
  {
    q: 'Where are TASEP’s operational hubs located?',
    a: 'Our primary executive office is based in Gauteng, with active project footprints, heavy machinery deployments, and cleaning facilities stationed across South Africa.'
  }
];
