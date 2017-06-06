import { Component} from '@angular/core';

@Component({
    selector: 'my-app',
    template: `<p *ngIf="condition;else unset">
                  Привет мир
                </p>
                <ng-template #unset>  
                  <p>Пока мир</p>  
                </ng-template>  
                <button (click)="toggle()">Toggle</button>`
})
export class AppComponent {

    condition: boolean=true;

    toggle(){
        this.condition=!this.condition;
    }
}

//
// template: ` <div *ngIf="condition; then thenBlock else elseBlock"></div>  
//             <ng-template #thenBlock>Then template</ng-template> 
//             <ng-template #elseBlock>Else template</ng-template>   
//             <button (click)="toggle()">Toggle</button>`

/////////////////////////////////////////////////////////////////////////////////////

// import { Component} from '@angular/core';
//
// @Component({
//     selector: 'my-app',
//     template: `<p *ngIf="condition">
//                   Привет мир
//                 </p>
//                 <p *ngIf="!condition">
//                   Пока мир
//                 </p>
//                 <button (click)="toggle()">Toggle</button>`
// })
// export class AppComponent {
//
//     condition: boolean=true;
//
//     toggle(){
//         this.condition=!this.condition;
//     }
// }