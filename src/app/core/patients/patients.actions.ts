import { createAction, props } from '@ngrx/store';
import { Patient } from 'app/shared/models/patient.model';


export const addPatientToFavourite = createAction(
  '[Patients List] Add patient to favourite',
  props<{defaultId: string}>()
)

export const removePatientFromFavourite = createAction(
  '[Patients List] Remove patient from favourite',
  props<{defaultId: string}>()
)

export const setPatientsList = createAction(
  '[Patients List] Get patient list success',
  props<{patients: ReadonlyArray<Patient>}>()
)
