import {
  ActionReducerMap,
  MetaReducer,
  createFeatureSelector
} from '@ngrx/store';
import { routerReducer, RouterReducerState } from '@ngrx/router-store';

import { environment } from '../../environments/environment';

import { initStateFromLocalStorage } from './meta-reducers/init-state-from-local-storage.reducer';
import { debug } from './meta-reducers/debug.reducer';
import { AuthState } from './auth/auth.models';
import { authReducer } from './auth/auth.reducer';
import { RouterStateUrl } from './router/router.state';
import { settingsReducer } from './settings/settings.reducer';
import { SettingsState } from './settings/settings.model';
import { Order } from 'app/shared/models/order.model';
import { ordersReducer } from './orders/oderds.reducer';
import { favouriteOrdersReducer } from './orders/favourite-orders.reducer';
import { patientsReducer } from './patients/patients.reducer';
import { Patient } from 'app/shared/models/patient.model';
import { favouritePatientsReducer } from './patients/favourite-patients.reducer';

export const reducers: ActionReducerMap<AppState> = {
  auth: authReducer,
  settings: settingsReducer,
  router: routerReducer,
  orders: ordersReducer,
  favouriteOrders: favouriteOrdersReducer,
  patients: patientsReducer,
  favouritePatients: favouritePatientsReducer
};

export const metaReducers: MetaReducer<AppState>[] = [
  initStateFromLocalStorage
];

if (!environment.production) {
  if (!environment.test) {
    metaReducers.unshift(debug);
  }
}

export const selectAuthState = createFeatureSelector<AppState, AuthState>(
  'auth'
);

export const selectSettingsState = createFeatureSelector<
  AppState,
  SettingsState
>('settings');

export const selectRouterState = createFeatureSelector<
  AppState,
  RouterReducerState<RouterStateUrl>
>('router');

export interface AppState {
  auth: AuthState;
  settings: SettingsState;
  router: RouterReducerState<RouterStateUrl>;
  orders: ReadonlyArray<Order>;
  favouriteOrders: ReadonlyArray<string>;
  patients: ReadonlyArray<Patient>;
  favouritePatients: ReadonlyArray<string>;
}
