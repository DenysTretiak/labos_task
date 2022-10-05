import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ORDERS_DISPLAYED_COLUMNS } from '../../../shared/constants/orders.constants';
import { PATIENTS_DISPLAYED_COLUMNS } from '../../../shared/constants/patients.constants';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { selectFavouriteOrders } from 'app/core/orders/orders.selectors';
import { removeOrderFromFavourite } from 'app/core/orders/orders.actions';
import { selectFavouritePatients } from '../../../core/patients/patients.selectors';
import { removePatientFromFavourite } from '../../../core/patients/patients.actions';
import { MemoizedSelector } from '@ngrx/store/src/selector';

@Component({
  selector: 'st-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FavouriteComponent {
  patients = this.store.select(selectFavouritePatients);
  orders = this.store.select(selectFavouriteOrders);
  ordersDisplayedColumns = ORDERS_DISPLAYED_COLUMNS;
  patientsDisplayedColumns = PATIENTS_DISPLAYED_COLUMNS;
  favoriteOrdersSelector = selectFavouriteOrders;
  favouritePatientsSelector = selectFavouritePatients;

  constructor(private store: Store) { }

  removeFromFavourite(element: any, type: string) {
    if (type === 'orders') {
      this.store.dispatch(removeOrderFromFavourite({identifier: element.identifier}))
    } else {
      this.store.dispatch(removePatientFromFavourite({defaultId: element.defaultId}));
    }
  }

  filterPatients(event: Event) {
    this.filterElements('patients', selectFavouritePatients, 'firstName', event)
  }

  filterOrders(event: Event) {
    this.filterElements('orders', selectFavouriteOrders, 'orderName', event);
  }

  filterElements(elementsTitle: string, selector: MemoizedSelector<any, any>, filterField: string, event: Event) {
    const filterValue = (event.target as HTMLInputElement).value.trim().toLowerCase();
    this[elementsTitle].pipe(map((elements: any[]) => {
      return elements.filter((order) => order[filterField].toLowerCase().includes(filterValue.trim().toLowerCase()))
    })).subscribe();
  }
}
