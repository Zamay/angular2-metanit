import { Component, OnInit} from '@angular/core';
import { Response} from '@angular/http';
import { HttpService} from './http.service';
import {User} from './user';

@Component({
    selector: 'my-app',
    template: `<ul>
                    <li *ngFor="let user of users">
                    <p>Имя пользователя: {{user?.name}}</p>
                    <p>Возраст пользователя: {{user?.age}}</p>
                    </li>
                </ul>`,
    providers: [HttpService]
})
export class AppComponent implements OnInit {

    users: User[]=[];

    constructor(private httpService: HttpService){}
    ngOnInit(){

        this.httpService.getData()
            .subscribe((resp: Response) => {
                // this.users = resp.json().data;
                /////////////////////////////////////////////////////
                let usersList = resp.json().data;
                for(let index in usersList){
                    console.log(usersList[index]);
                    let user = usersList[index];
                    this.users.push({name: user.userName, age: user.userAge});
                }
            });
    }
}