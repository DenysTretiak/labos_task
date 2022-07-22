import { createReducer, on } from '@ngrx/store';
import { setOrdersList } from './orders.actions';

export const initialState: ReadonlyArray<any> = [];

export const ordersReducer = createReducer(
  initialState,
  on(setOrdersList, (state, { orders }) => orders),
)
