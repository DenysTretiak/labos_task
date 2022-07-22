import { DisplayColumnInterface } from "app/shared/models/displayed-columns.interface";
export const ORDERS_DISPLAYED_COLUMNS: DisplayColumnInterface[] = [
  {
    value: 'orderName',
    title: 'Order name'
  },
  {
    value: 'orderNum',
    title: 'Order number'
  },
  {
    value: 'identifier',
    title: 'identifier'
  },
  {
    value: 'hasComments',
    title: 'Has comments'
  },
  {
    value: 'addToFavourite',
    title: 'addToFavourite'
  },
]

export const ORDERS_URL = 'https://api.mocki.io/v2/79fb05cb';

