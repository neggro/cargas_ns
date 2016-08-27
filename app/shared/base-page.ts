import {
    RadSideDrawerComponent,
    SideDrawerType
} from 'nativescript-telerik-ui/sidedrawer/angular';

import {
    OnInit,
    ChangeDetectorRef,
    ViewChild
} from '@angular/core';

import {
    Page
} from 'ui/page';

import {
    Utils
} from '../utils/Utils';

export class BasePage implements OnInit {

    @ViewChild(RadSideDrawerComponent) private drawerComponent: RadSideDrawerComponent;

    private drawer: SideDrawerType;

    public openDrawer() {
        this.drawer.showDrawer();
    }

    constructor(
        private _changeDetectionRef: ChangeDetectorRef,
        private _page: Page
    ) {}

    ngAfterViewInit() {
        this.drawer = this.drawerComponent.sideDrawer;
        this._changeDetectionRef.detectChanges();
    }

    ngOnInit() {
        this._page.className = 'dynamic-background ' + Utils.getBackgroundClass();

        if (Utils.isAndroidOldSDK()) {
            this._page.className = this._page.className + ' old-sdk';
        }
    }
}
