import {
    Component
} from '@angular/core';

import {
    MenuItems
} from '../shared/menu-items';

import {
    RouterExtensions
} from 'nativescript-angular/router/router-extensions';

@Component({
    selector: 'app-menu',
    template: `
        <!-- StackLayout class="sideTitleStackLayout">
            <Label text="Navigation Menu"></Label>
        </StackLayout -->

        <StackLayout class="sideMenuStackLayout">
            <Label *ngFor="let item of menuItems" text="{{item.text}}" class="side-label {{item.cssClass}}"
                (tap)="navigateTo(item.page)"></Label>
        </StackLayout>
    `
})
export class AppMenuComponent {

    public menuItems: Object[];

    public navigateTo(path) {

        if (path === 'share') {

            alert('Share this app');

        } else if (path === 'contact-us') {

            alert('Contact Us');

        } else {

            this._router.navigate(['/' + path], {
                clearHistory: true
            });
        }
    }

    constructor(private _router: RouterExtensions) {
        this.menuItems = MenuItems;
    }
}
