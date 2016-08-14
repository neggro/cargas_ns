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
    selector: 'stats',
    templateUrl: 'pages/stats/stats.html',
    directives: [AppMenuComponent]
})
export class StatsComponent extends BasePage {

    public title:String = 'Stats';

    constructor(_changeDetectionRef: ChangeDetectorRef, _page: Page) {
        super(_changeDetectionRef, _page);
    }
}
