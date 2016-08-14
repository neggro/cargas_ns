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
    selector: 'profile',
    templateUrl: 'pages/profile/profile.html',
    directives: [AppMenuComponent]
})
export class ProfileComponent extends BasePage {

    public title:String = 'Profile';

    constructor(_changeDetectionRef: ChangeDetectorRef, _page: Page) {
        super(_changeDetectionRef, _page);
    }
}
