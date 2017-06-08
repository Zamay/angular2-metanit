import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule}   from '@angular/forms';
import { AppComponent }   from './app.component';
// import { ChildComponent }   from './child.component';
import { BoldDirective} from './bold.directive';
import {WhileDirective} from "./while.directive";

@NgModule({
    imports:      [ BrowserModule, FormsModule, ReactiveFormsModule  ],
    declarations: [ AppComponent, BoldDirective, WhileDirective],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }

// ReactiveFormsModule

//AppModule, будет входной точкой в приложение
// NgModule представляет функцию-декоратора, которая принимает объект,
// свойства которого описывают метаданные модуля. Наиболее важные свойства:
//
//  declarations: классы представлений (view classes), которые принадлежат модулю. Angular имеет три типа классов представлений: компоненты (components), директивы (directives), каналы (pipes)
//
// exports: набор классов представлений, которые должны использоваться в шаблонах компонентов из других модулей
//
// imports: другие модули, классы которых необходимы для шаблонов компонентов из текущего модуля
//
// providers: классы, создающие сервисы, используемые модулем
//
// bootstrap: корневой компонент, который вызывается по умолчанию при загрузке приложения