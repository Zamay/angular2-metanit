/////////////////////////// ViewChild //////////////////////////////////////
// import { Component, ViewChild } from '@angular/core';
// import { ChildComponent} from './child.component';
//
// @Component({
//     selector: 'my-app',
//     template: `<child-comp></child-comp>
//                 <button (click)="increment()">+</button>
//                 <button (click)="decrement()">-</button>`
// })
// export class AppComponent {
//     //декоратор @ViewChild
//     @ViewChild(ChildComponent)
//     private counterComponent: ChildComponent;
//
//     increment() { this.counterComponent.increment(); }
//     decrement() { this.counterComponent.decrement(); }
// }
///////////////////////////////////////////////////////////////////
// import { Component } from '@angular/core';
//
// @Component({
//     selector: 'my-app',
//     template: `<child-comp #counter></child-comp>
//                 <button (click)="counter.increment()">+</button>
//                 <button (click)="counter.decrement()">-</button>`
// })
// export class AppComponent { } 
//# sourceMappingURL=app.component.js.map