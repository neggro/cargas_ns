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
    TranslatePipe
} from 'ng2-translate/ng2-translate';

@Component({
    selector: 'profile',
    templateUrl: 'pages/profile/profile.html',
    directives: [AppMenuComponent],
    pipes: [TranslatePipe]
})
export class ProfileComponent extends BasePage {

    public title:String = 'PROFILE';

    constructor(_changeDetectionRef: ChangeDetectorRef, _page: Page) {
        super(_changeDetectionRef, _page);
    }
}
