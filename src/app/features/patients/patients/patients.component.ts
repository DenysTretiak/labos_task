import { Component, ChangeDetectionStrategy } from "@angular/core";

import { HttpService } from '../../../shared/services/http.service';
import { Observable } from 'rxjs/internal/Observable';
import { Patient } from '../../../shared/models/patient.model';
import { map, switchMap, tap } from 'rxjs/operators';
import { DisplayColumnInterface } from '../../../shared/models/displayed-columns.interface';
import { PATIENTS_DISPLAYED_COLUMNS } from "app/shared/constants/patients.constants";
import { Store } from '@ngrx/store';
import { addPatientToFavourite, setPatientsList } from '../../../core/patients/patients.actions';
import { selectFavouritePatients, selectPatients } from '../../../core/patients/patients.selectors';
import { selectOrders } from '../../../core/orders/orders.selectors';
import { setOrdersList } from '../../../core/orders/orders.actions';
import { of } from 'rxjs/internal/observable/of';

@Component({
  selector: "st-patients",
  templateUrl: "./patients.component.html",
  styleUrls: ["./patients.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PatientsComponent {
  patients$: Observable<ReadonlyArray<Patient>>;
  displayedColumns: DisplayColumnInterface[] = PATIENTS_DISPLAYED_COLUMNS;
  favouritePatientsSelector = selectFavouritePatients;

  constructor(private httpService: HttpService, private store: Store) {}

  setPatients() {
    this.patients$ = this.store.select(selectPatients).pipe(switchMap((patients) => {
      if (patients.length) {
        return of(patients)
      } else {
        return this.httpService.getPatients()
          .pipe(
            map(res => {
              return res.patient.map(patient => {
                patient.age = this.calculateAge(patient.birthDate.formattedDate);
                return patient;
              })
            }),
            tap(patients => this.store.dispatch(setPatientsList({patients})))
          )
      }
    }))
  }

  addToFavourite({ defaultId }: Patient) {
    this.store.dispatch(addPatientToFavourite({defaultId}))
  }

  calculateAge(birthday: string): number {
    const ageDifMs = Date.now() - new Date(birthday).getTime();
    const ageDate = new Date(ageDifMs);
    const age = Math.abs(ageDate.getUTCFullYear() - 1970);
    return isNaN(age) ? null : age;
  }
}
