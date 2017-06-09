"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var http_service_1 = require("./http.service");
var AppComponent = (function () {
    function AppComponent(httpService) {
        this.httpService = httpService;
        this.users = [];
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.httpService.getUsers()
            .subscribe(function (data) { return _this.users = data; }, function (error) { _this.error = error; console.log(error); });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "<div>{{error}}</div>",
        providers: [http_service_1.HttpService]
    }),
    __metadata("design:paramtypes", [http_service_1.HttpService])
], AppComponent);
exports.AppComponent = AppComponent;
// import { Component, OnInit} from '@angular/core';
// import { HttpService} from './http.service';
// import {User} from './user';
//
// @Component({
//     selector: 'my-app',
//     template: `<ul>
//                     <li *ngFor="let user of users">
//                     <p>Имя пользователя: {{user.name}}</p>
//                     <p>Возраст пользователя: {{user.age}}</p>
//                     </li>
//                 </ul>`,
//     providers: [HttpService]
// })
// export class AppComponent implements OnInit {
//
//     users: User[]=[];
//
//     constructor(private httpService: HttpService){}
//     ngOnInit(){
//
//         this.httpService.getUsers().subscribe((data)=>this.users=data);
//     }
// } 
//# sourceMappingURL=app.component.js.map