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
    selector: 'refuels',
    templateUrl: 'pages/refuels/refuels.html',
    directives: [AppMenuComponent],
    pipes: [TranslatePipe]
})
export class RefuelsComponent extends BasePage {

    public title:String = 'REFUELS';

    constructor(_changeDetectionRef: ChangeDetectorRef, _page: Page) {
        super(_changeDetectionRef, _page);
    }
}
