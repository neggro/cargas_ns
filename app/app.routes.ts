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
    ProfileComponent
} from './pages/profile/profile.component';

import {
    RefuelsComponent
} from './pages/refuels/refuels.component';

import {
    SettingsComponent
} from './pages/settings/settings.component';

import {
    LanguageComponent
} from './pages/settings/language/language.component';

import {
    StatsComponent
} from './pages/stats/stats.component';

import {
    VehiclesComponent
} from './pages/vehicles/vehicles.component'

export const routes: RouterConfig = [{
    path: '',
    component: OverviewComponent
}, {
    path: 'profile',
    component: ProfileComponent
}, {
    path: 'refuels',
    component: RefuelsComponent
}, {
    path: 'settings',
    component: SettingsComponent
}, {
    path: 'language',
    component: LanguageComponent
}, {
    path: 'stats',
    component: StatsComponent
}, {
    path: 'vehicles',
    component: VehiclesComponent
}];

export const APP_ROUTER_PROVIDERS = [
    nsProvideRouter(routes, {})
];
