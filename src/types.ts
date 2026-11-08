export type PageId = 'home' | 'services' | 'about' | 'contact';

export type ServiceCategory = 
  | 'accident-recovery'
  | 'breakdown-towing'
  | 'flatbed-rollback'
  | 'tyre-puncture'
  | 'jumpstart-battery'
  | 'winch-ditch-recovery'
  | 'long-distance-relocation'
  | 'machinery-transport';

export interface TowingService {
  id: ServiceCategory;
  title: string;
  shortTitle: string;
  tagline: string;
  image: string;
  iconName: string;
  summary: string;
  description: string;
  capabilities: string[];
  specs: { label: string; value: string }[];
  etaEstimate: string;
  baseRateEstimate: string;
}

export interface FleetVehicle {
  id: string;
  name: string;
  callsign: string;
  plate: string;
  type: string;
  description: string;
  primaryImage: string;
  galleryImages: string[];
  videoSrc?: string;
  specs: {
    capacity: string;
    winchRating: string;
    specialty: string;
    crew: string;
  };
}

export interface EmergencyRequest {
  id: string;
  name: string;
  phone: string;
  location: string;
  gpsCoords?: { lat: number; lng: number; accuracy?: number };
  landmark?: string;
  vehicleMakeModel: string;
  serviceType: ServiceCategory;
  vehicleCondition: 'rolling' | 'wheels-locked' | 'accident-damage' | 'ditch-mud' | 'keys-locked';
  destination?: string;
  notes?: string;
  createdAt: string;
  status: 'dispatching' | 'en-route' | 'arrived' | 'completed';
}

export interface StandardBookingInquiry {
  id: string;
  fullName: string;
  phone: string;
  email?: string;
  pickupLocation: string;
  dropoffLocation: string;
  serviceType: ServiceCategory;
  vehicleDetails: string;
  preferredDate?: string;
  preferredTime?: string;
  urgency: 'immediate' | 'today' | 'scheduled';
  specialInstructions?: string;
  createdAt: string;
}

export interface SowetoLandmark {
  name: string;
  area: string;
  avgEtaMins: number;
  popularRoad: string;
}

export interface ClientReview {
  id: string;
  author: string;
  suburb: string;
  service: string;
  rating: number;
  comment: string;
  date: string;
  verified: boolean;
  screenshotAsset?: string;
}
