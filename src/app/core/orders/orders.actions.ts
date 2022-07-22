import { createAction, props } from '@ngrx/store';
import { Order } from 'app/shared/models/order.model';

export const addOrderToFavourite = createAction(
  '[Orders list] Add order to favourite',
  props<{identifier: string}>()
)

export const removeOrderFromFavourite = createAction(
  '[Orders list] Remove order from favourite',
  props<{identifier: string}>()
)

export const setOrdersList = createAction(
  '[Orders List] Get orders list success',
  props<{orders: ReadonlyArray<Order>}>()
)
