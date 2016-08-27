import {
    Component
} from '@angular/core';

import {
    MENU_ITEMS
} from '../shared/menu-items';

import {
    RouterExtensions
} from 'nativescript-angular/router/router-extensions';

import * as SocialShare from 'nativescript-social-share';

import {
    TranslatePipe
} from 'ng2-translate/ng2-translate';

@Component({
    selector: 'app-menu',
    template: `
        <!-- StackLayout class="sideTitleStackLayout">
            <Label text="Navigation Menu"></Label>
        </StackLayout -->

        <StackLayout class="sideMenuStackLayout">
            <Label *ngFor="let item of menuItems" text="{{item.text | translate}}" class="side-label {{item.cssClass}}"
                (tap)="navigateTo(item.page)"></Label>
        </StackLayout>
    `,
    pipes: [TranslatePipe]
})
export class AppMenuComponent {

    public menuItems: Object[];

    public navigateTo(path) {

        if (path === 'share') {

            SocialShare.shareText('https://play.google.com/store/apps/details?id=com.nicomontesdeoca.cargas');

        } else if (path === 'contact-us') {

            alert('Contact Us');

        } else {

            this._router.navigate(['/' + path], {
                clearHistory: true
            });
        }
    }

    constructor(private _router: RouterExtensions) {
        this.menuItems = MENU_ITEMS;
    }
}
