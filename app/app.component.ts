import { Component} from '@angular/core';

@Component({
    selector: 'my-app',
    template: `<div [ngSwitch]="count">
                  <template [ngSwitchCase]="1">{{count * 10}}</template>
                  <template [ngSwitchCase]="2">{{count * 100}}</template>
                  <template ngSwitchDefault>{{count * 1000}}</template>
                </div>`
})
export class AppComponent {

    count: number = 2;
}