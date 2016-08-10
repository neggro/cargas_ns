import {
    RouterConfig
} from '@angular/router';

import {
    nsProvideRouter
} from 'nativescript-angular/router';

import {
    OverviewComponent
} from './pages/overview/overview.component';

import {
    VehiclesComponent
} from './pages/vehicles/vehicles.component'

export const routes: RouterConfig = [{
    path: '',
    component: OverviewComponent
}, {
    path: 'vehicles',
    component: VehiclesComponent
}];

export const APP_ROUTER_PROVIDERS = [
    nsProvideRouter(routes, {})
];
