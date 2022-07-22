import { Component, ChangeDetectionStrategy } from '@angular/core';

import { HttpService } from '../../../shared/services/http.service';
import { Order } from '../../../shared/models/order.model';
import { map, switchMap, tap } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';
import { DisplayColumnInterface } from 'app/shared/models/displayed-columns.interface';
import { ORDERS_DISPLAYED_COLUMNS } from "app/shared/constants/orders.constants";
import { Store } from '@ngrx/store';
import { selectFavouriteOrders, selectOrders } from 'app/core/orders/orders.selectors';
import { addOrderToFavourite, setOrdersList } from 'app/core/orders/orders.actions';
import { of } from "rxjs";

@Component({
  selector: "st-orders",
  templateUrl: "./orders.component.html",
  styleUrls: ["./orders.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrdersComponent {
  orders$: Observable<ReadonlyArray<Order>>;
  displayedColumns: DisplayColumnInterface[] = ORDERS_DISPLAYED_COLUMNS;
  favouriteOrdersSelector = selectFavouriteOrders;

  constructor(private httpService: HttpService, private store: Store) {}

  setOrders() {
    this.orders$ = this.store.select(selectOrders).pipe(switchMap((orders) => {
      if (orders.length) {
        return of(orders)
      } else {
        return this.httpService.getOrders()
          .pipe(
            map(res => res.order),
            tap(orders => this.store.dispatch(setOrdersList({orders})))
          )
      }
    }))
  }

  addToFavourite({ identifier }: Order) {
    this.store.dispatch(addOrderToFavourite({identifier}))
  }
}
