import {
    Component
} from '@angular/core';

import {
    MenuItems
} from '../shared/menu-items';

import {
    Router
} from '@angular/router';

@Component({
    selector: 'app-menu',
    template: `
        <StackLayout class="sideTitleStackLayout">
            <Label text="Navigation Menu"></Label>
        </StackLayout>

        <StackLayout class="sideMenuStackLayout">
            <Label *ngFor="let item of menuItems" text="{{item.text}}" class="sideLabel"
                (tap)="navigateTo(item.page)"></Label>
        </StackLayout>
    `
})
export class AppMenuComponent {

    public menuItems: Object[];

    public navigateTo(path) {
        this._router.navigate(['/' + path]);
    }

    constructor(private _router: Router) {
        this.menuItems = MenuItems;
    }
}
