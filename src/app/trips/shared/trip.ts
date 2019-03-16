export interface Trip {
  name: string;
  id: string;
  //attractions: Attraction[];
  // date: Date;
  // plan: Plan;
  // placesToVisit: PlacesToVisit;
  // accommodation: Accommodation[];
  // generalInfo: GeneralInfo;
  // transport: Transport;
  // packingList: PackingList;
  // costs: Cost[];
  // weather: Weather;
}

export interface Plan {
  date: Date;
  description: string;
}

export interface PlacesToVisit {
  beaches: Beach[];
  restaurants: Restaurant[];
}



export interface Beach {
  name: string;
  description?: string;
  photoURL?: string;
}

export interface Restaurant {
  name: string;
  description?: string;
  addressLink?: string;
  city?: string;
}

export interface Accommodation {
  name: string;
  dateFrom: Date;
  dateTo: Date;
  price: number;
  checkinTime?: Date;
  checkoutTime?: Date;
  address: string;
  contactNumber: number;
  paymentMethod: string;
  additionalInfo?: string;
}

export interface Transport {
  flights: Flight[];
  carRentals: CarRental[];
}

export interface Flight {
  dateFrom: Date;
  dateTo: Date;
  timeFrom: string;
  timeTo: string;
  cityFrom: string;
  cityTo: string;
  flightLength: number;
  flightNumber: string;
}

export interface CarRental {
  name: string;
  price: number;
  car?: string;
  url?: string;
}

export interface GeneralInfo {
  internet: Internet[];
  emergencyNumbers: EmergencyNumber[];
  usefulLinks: UsefulLink[];
}

export interface Internet {
  name: string;
  gb: number;
  buyLocation: string;
  additionalInfo: string;
}

export interface UsefulLink {
  name: string;
  url: string;
}

export interface EmergencyNumber {
  name: string;
  number: number;
}

export interface PackingList {
  name: string;
}

export interface Cost {
  transportCosts: TransportCosts;
  accommodation?: number;
  attractions?: number;
  food?: number;
  other?: number;
}

export interface TransportCosts {
  flightTickets?: number;
  carRental?: number;
  fuel?: number;
}

export interface Weather {
  city: string;
  date: Date;
  celsiusDegrees: number;
}

