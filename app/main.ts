// this import should be first in order to load some required settings (like globals and reflect-metadata)
import {
    nativeScriptBootstrap
} from 'nativescript-angular/application';

import {
    AppComponent
} from './app.component';

import {
    SIDEDRAWER_PROVIDERS,
    SIDEDRAWER_DIRECTIVES
} from 'nativescript-telerik-ui/sidedrawer/angular';

import {
    APP_ROUTER_PROVIDERS
} from './app.routes';

import {
    setStatusBarColors
} from './utils/status-bar-util';

// status bar will transparent
setStatusBarColors();

nativeScriptBootstrap(AppComponent, [
    SIDEDRAWER_PROVIDERS,
    SIDEDRAWER_DIRECTIVES,
    APP_ROUTER_PROVIDERS
]);
