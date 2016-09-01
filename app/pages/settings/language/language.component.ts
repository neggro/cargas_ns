import {
    Component,
    OnInit,
    ChangeDetectorRef
} from '@angular/core';

import {
    Page
} from 'ui/page';

import {
    Utils
} from '../../../utils/Utils';

import {
    RouterExtensions
} from 'nativescript-angular/router/router-extensions';

import {
    TranslateService,
    TranslatePipe
} from 'ng2-translate/ng2-translate';

import applicationSettings = require('application-settings');

interface languageObject {
    text: string,
    locale: string
};

@Component({
    selector: 'settings',
    templateUrl: 'pages/settings/language/language.html',
    pipes: [TranslatePipe]
})
export class LanguageComponent implements OnInit {

    public title:String = 'LANGUAGE';

    // public backIcon = String.fromCharCode(0xE5C4);

    public availableLaguages:languageObject[];

    public goBack() {
        this._router.navigate(['/settings'], {
            clearHistory: true
        });
    }

    public changeLanguage(args) {
        let newLanguage = this.availableLaguages[args.index].locale;
        this._translate.use(newLanguage);
        applicationSettings.setString('language', newLanguage);

        this.loadLanguageListView();
    }

    private loadLanguageListView() {
        this.availableLaguages = [
            {
                text: 'ENGLISH',
                locale: 'en'
            },
            {
                text: 'SPANISH',
                locale: 'es'
            }
        ];
    }

    constructor(
        private _page: Page,
        private _changeDetectionRef: ChangeDetectorRef,
        private _router: RouterExtensions,
        private _translate: TranslateService
    ) {
        this.loadLanguageListView();
    }

    ngAfterViewInit() {
        this._changeDetectionRef.detectChanges();
    }

    ngOnInit() {
        this._page.className = 'dynamic-background ' + Utils.getBackgroundClass();

        if (Utils.isAndroidOldSDK()) {
            this._page.className = this._page.className + ' old-sdk';
        }

        if (!Utils.hasPermanentMenuKey()) {
            this._page.className = this._page.className + ' virtual-buttons-container';
        }
    }
}
