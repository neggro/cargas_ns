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

@Component({
    selector: 'settings',
    templateUrl: 'pages/settings/settings.html',
    directives: [AppMenuComponent]
})
export class SettingsComponent extends BasePage {

    public title:String = 'Settings';

    constructor(_changeDetectionRef: ChangeDetectorRef, _page: Page) {
        super(_changeDetectionRef, _page);
    }
}
