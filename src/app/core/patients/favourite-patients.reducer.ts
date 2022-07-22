import { createReducer, on } from '@ngrx/store';
import { addPatientToFavourite, removePatientFromFavourite } from './patients.actions';

const initialState = [];
export const favouritePatientsReducer = createReducer(
  initialState,
  on(addPatientToFavourite, (state, {defaultId}) => {
    if(state.includes(defaultId)) return state;

    return [...state, defaultId]
  }),
  on(removePatientFromFavourite, (state, {defaultId}) => state.filter((id) => id !== defaultId)),
)
