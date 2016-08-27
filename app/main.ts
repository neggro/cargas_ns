// this import should be first in order to load some required settings (like globals and reflect-metadata)
import {
    nativeScriptBootstrap
} from 'nativescript-angular/application';

// app component
import {
    AppComponent
} from './app.component';

// angular
import {
    provide
} from '@angular/core';

import {
    HTTP_PROVIDERS
} from '@angular/http';

// translate
import {
    TranslateLoader,
    TranslateService
} from 'ng2-translate/ng2-translate';

import {
    TNSTranslateLoader
} from 'nativescript-ng2-translate/nativescript-ng2-translate';

// sidedrawer
import {
    SIDEDRAWER_PROVIDERS,
    SIDEDRAWER_DIRECTIVES
} from 'nativescript-telerik-ui/sidedrawer/angular';

// routes
import {
    APP_ROUTER_PROVIDERS
} from './app.routes';

// status bar util
import {
    setStatusBarColors
} from './utils/status-bar-util';

// status bar will transparent
setStatusBarColors();

nativeScriptBootstrap(AppComponent, [
    SIDEDRAWER_PROVIDERS,
    SIDEDRAWER_DIRECTIVES,
    APP_ROUTER_PROVIDERS,
    HTTP_PROVIDERS,
    provide(TranslateLoader, {
        useFactory: () => {
            // pass in the path to your locale files
            return new TNSTranslateLoader('i18n');
        }
    }),
    TranslateService
]);
