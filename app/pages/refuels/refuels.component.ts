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
    selector: 'refuels',
    templateUrl: 'pages/refuels/refuels.html',
    directives: [AppMenuComponent]
})
export class RefuelsComponent extends BasePage {

    public title:String = 'Refuels';

    constructor(_changeDetectionRef: ChangeDetectorRef, _page: Page) {
        super(_changeDetectionRef, _page);
    }
}
