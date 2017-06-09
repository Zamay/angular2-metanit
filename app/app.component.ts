import { Component, OnInit} from '@angular/core';
import { Response} from '@angular/http';
import { HttpService} from './http.service';
import {User} from './user';

@Component({
    selector: 'my-app',
    template: `<div>{{error}}</div>`,
    providers: [HttpService]
})
export class AppComponent implements OnInit {

    users: User[]=[];
    error:any;
    constructor(private httpService: HttpService){}
    ngOnInit(){

        this.httpService.getUsers()
            .subscribe(
                data=>this.users=data,
                error => {this.error = error; console.log(error);}
            );
    }
}

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