import { State, Action, StateContext, Selector } from '@ngxs/store';
import { AddTrip, RemoveTrip } from '../actions/trips.actions';
import { Trip } from '../../trips/shared/trip';

export class TripStateModel {
  trips: Trip[];
}

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
