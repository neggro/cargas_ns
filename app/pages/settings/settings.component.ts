import {
    Component,
    ChangeDetectorRef
} from '@angular/core';

import {
    AppMenuComponent
} from '../../shared/app-menu.component';

import {
    BasePage
} from '../../shared/base-page';

import {
    Page
} from 'ui/page';

import {
    RouterExtensions
} from 'nativescript-angular/router/router-extensions';

import {
    TranslateService,
    TranslatePipe
} from 'ng2-translate/ng2-translate';

import applicationSettings = require('application-settings');

@Component({
    selector: 'settings',
    templateUrl: 'pages/settings/settings.html',
    directives: [AppMenuComponent],
    pipes: [TranslatePipe]
})
export class SettingsComponent extends BasePage {

    public title:String = 'SETTINGS';

    public settingItems:String[] = [
        'FUELS',
        'UNITS',
        'LANGUAGE',
        'cuatro',
        'cinco',
        'seis',
        'siete',
        'ocho',
        'nueve',
        'diez',
        'once',
        'doce',
        'trece',
        'catorce',
        'quince',
        'dieciseis',
        'decisiete',
        'diesiocho',
        'diecinueve',
        'veinte'
    ];

    public goToSetting(args) {

        switch (args.index) {
            case 0:
                console.log('Fuels was tapped!');
                break;

            case 1:
                console.log('Units was tapped!');
                break;

            case 2:
                this._router.navigate(['/language']);
                break;

            default:
                console.log("------------------------ ItemTapped: ", args.index);
                break;
        }
    }

    constructor(
        _changeDetectionRef: ChangeDetectorRef,
        _page: Page,
        private _router: RouterExtensions,
        private _translate: TranslateService
    ) {
        super(_changeDetectionRef, _page);
    }
}
