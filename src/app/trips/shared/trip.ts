export interface Attraction {
  name: string;
  city?: string;
  photoURL?: string;
  description?: string;
  addressLink?: string;
  price?: number;
  openingHours?: string;
  additionalInfo?: string;
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

export interface Plan {
  date: Date;
  description: string;
}

export interface Departure {
  dateFrom: string;
  timeFrom: string;
  city: string;
  flightLength: string;
  flightNumber?: string;
}

export interface Arrival {
  dateFrom: string;
  timeFrom: string;
  city: string;
  flightTime?: string;
  flightNumber?: string;
}

export interface CarRental {
  name: string;
  car?: string;
  price?: number;
  url?: string;
}

export interface GeneralInformation {
  internet: Internet[];

}

export interface Internet {
  name: string;
  gb: number;
  buyLocation: string;
  additionalInfo: string;
}

export interface UsefulLinks {
  name: string;
  url: string;
}

export interface EmergencyNumbers {
  name: string;
  number: number;
}

export interface PackingList {
  name: string;
}

export interface Costs {
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

export interface Trip {
  name: string;
  id: string;
}
