/* global java */
import {
    Component,
    OnInit
} from '@angular/core';

import {
    NS_ROUTER_DIRECTIVES
} from 'nativescript-angular/router';

import {
    TranslateService
} from 'ng2-translate/ng2-translate';

import applicationSettings = require('application-settings');

declare let java:any;

@Component({
    selector: 'main',
    template: '<page-router-outlet></page-router-outlet>',
    directives: [
        NS_ROUTER_DIRECTIVES
    ]
})
export class AppComponent implements OnInit {

    private _availableLanguages:Object = {
        'en': true,
        'es': true
    };

    constructor(private _translate: TranslateService) {}

    ngOnInit() {
        // get the language from settings
        let settingsLanguage = applicationSettings.getString('language');

        // if there is no language in settings use the device's default
        let currentDeviceLanguage = settingsLanguage || java.util.Locale.getDefault().getLanguage();

        // ensure that the current language is one of the available languages
        let currentLanguage = this._availableLanguages[currentDeviceLanguage] ? currentDeviceLanguage : 'en';

        // if the current language is diferent to the one stored in settings (or no lang in settings)
        if (settingsLanguage !== currentLanguage) {
            applicationSettings.setString('language', currentLanguage);
        }

        // translate the app
        this._translate.use(currentLanguage);
    }
}
