import { Trip } from '../../trips/shared/trip';

export class AddTrip {
  static readonly type = '[TRIP] Add';

  constructor(public payload: Trip) {}
}

export class RemoveTrip {
  static readonly type = '[TRIP] Remove';

  constructor(public payload: string) {}
}
