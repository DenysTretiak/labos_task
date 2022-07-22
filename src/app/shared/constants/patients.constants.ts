import { DisplayColumnInterface } from "app/shared/models/displayed-columns.interface";

export const PATIENTS_DISPLAYED_COLUMNS: DisplayColumnInterface[] = [
  {
    value: 'defaultId',
    title: 'Default id'
  },
  {
    value: 'firstName',
    title: 'First name'
  },
  {
    value: 'code',
    title: 'Code'
  },
  {
    value: 'age',
    title: 'Age'
  },
  {
    value: 'addToFavourite',
    title: 'addToFavourite'
  },
]

export const PATIENT_URLS = 'https://api.mocki.io/v2/51597ef3';
