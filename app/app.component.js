"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.condition = true;
    }
    AppComponent.prototype.toggle = function () {
        this.condition = !this.condition;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "<p *ngIf=\"condition;else unset\">\n\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u041F\u0440\u0438\u0432\u0435\u0442 \u043C\u0438\u0440\n\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0</p>\n\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0<ng-template #unset>\u00A0 \n\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0<p>\u041F\u043E\u043A\u0430 \u043C\u0438\u0440</p>\u00A0 \n\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0</ng-template>\u00A0\u00A0\n\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0<button (click)=\"toggle()\">Toggle</button>"
    })
], AppComponent);
exports.AppComponent = AppComponent;
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
//# sourceMappingURL=app.component.js.map