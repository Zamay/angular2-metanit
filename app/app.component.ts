import { Component} from '@angular/core';

@Component({
    selector: 'my-app',
    template: `    <div>
                    <p *ngFor="let item of items; let i = index">{{i+1}}.{{item}}</p>
                    <p *ngFor="let item of items">{{item}}</p>
                   </div>`
})
export class AppComponent {

    items =["Apple iPhone 7", "Huawei Mate 9", "Samsung Galaxy S7", "Motorola Moto Z"];
}

// <p *ngFor="let item of items">{{item}}</p>
// или так
// <ul>
//     <template ngFor let-item [ngForOf]="items">
//     <li>{{item}}</li>
// </template>
// </ul>