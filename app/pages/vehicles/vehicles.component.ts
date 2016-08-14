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
    selector: 'vehicles',
    templateUrl: 'pages/vehicles/vehicles.html',
    directives: [AppMenuComponent]
})
export class VehiclesComponent extends BasePage {

    public title:String = 'Vehicles';

    constructor(_changeDetectionRef: ChangeDetectorRef, _page: Page) {
        super(_changeDetectionRef, _page);
    }
}
