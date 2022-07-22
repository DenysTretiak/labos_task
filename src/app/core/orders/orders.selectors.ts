import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Order } from 'app/shared/models/order.model';

export const selectOrders = createFeatureSelector<ReadonlyArray<Order>>('orders')
export const favouriteOrders = createFeatureSelector<ReadonlyArray<string>>('favouriteOrders')
export const selectFavouriteOrders = createSelector(
  selectOrders,
  favouriteOrders,
  (orders, favouriteOrders) => {
    return favouriteOrders.map(identifier => orders.find(order => order.identifier === identifier))
  }
)
