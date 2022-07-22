import { createReducer, on } from '@ngrx/store';
import { addOrderToFavourite, removeOrderFromFavourite } from './orders.actions';

const initialState = [];
export const favouriteOrdersReducer = createReducer(
  initialState,
  on(addOrderToFavourite, (state, {identifier}) => {
    if(state.includes(identifier)) return state;

    return [...state, identifier]
  }),
  on(removeOrderFromFavourite, (state, {identifier}) => state.filter((id) => id !== identifier)),
)
