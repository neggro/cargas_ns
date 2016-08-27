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
    selector: 'overview',
    templateUrl: 'pages/overview/overview.html',
    directives: [AppMenuComponent],
    pipes: [TranslatePipe]
})
export class OverviewComponent extends BasePage {

    public title:String = 'OVERVIEW';

    constructor(_changeDetectionRef: ChangeDetectorRef, _page: Page) {
        super(_changeDetectionRef, _page);
    }
}
