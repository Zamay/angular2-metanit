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
            .subscribe((data: Response) => this.users=data.json());
    }
}

// определение файла user.json представляло объект User,
// а файл users.json определял массив объектов User.
// Причем, ключи в json-файле соответствовали названиям свойств класса User.
// То есть было прямое соответствие.