import { createReducer, on } from '@ngrx/store';
import { setPatientsList } from './patients.actions';

export const initialState: ReadonlyArray<any> = [];

export const patientsReducer = createReducer(
  initialState,
  on(setPatientsList, (state, { patients }) => patients),
)
