export interface Attraction {
  name: string;
  city?: string;
  photoURL?: string;
  description?: string;
  addressLink?: string;
  price?: string;
  openFromTime?: Date;
  openToTime?: Date;
  additionalInfo?: string;
}
