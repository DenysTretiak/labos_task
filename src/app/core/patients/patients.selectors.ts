import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Patient } from '../../shared/models/patient.model';


export const selectPatients = createFeatureSelector<ReadonlyArray<Patient>>('patients')
export const favouritePatients = createFeatureSelector<ReadonlyArray<string>>('favouritePatients')
export const selectFavouritePatients = createSelector(
  selectPatients,
  favouritePatients,
  (patients, favouritePatients) => {
    return favouritePatients.map(defaultId => patients.find(patients => patients.defaultId === defaultId))
  }
)
