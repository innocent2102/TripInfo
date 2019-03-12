// Section 1
import { State, Action, StateContext, Selector } from '@ngxs/store';
import { AddTrip, RemoveTrip } from '../actions/trips.actions';
import { Trip } from '../../trips/shared/trip';

// Section 2
export class TripStateModel {
  trips: Trip[];
}
// Section 3
@State<TripStateModel>({
  name: 'trips',
  defaults: {
    trips: []
  }
})

export class TripState {

  @Selector()
  static getTrips(state: TripStateModel) {
    return state.trips;
  }

  @Action(AddTrip)
  add({getState, patchState}: StateContext<TripStateModel>, {payload}: AddTrip) {
    const state = getState();
    patchState({
      trips: [...state.trips, payload]
    });
  }

  @Action(RemoveTrip)
  remove({getState, patchState}: StateContext<TripStateModel>, {payload}: RemoveTrip) {
    patchState({
      trips: getState().trips.filter(a => a.name !== payload)
    });
  }

}
