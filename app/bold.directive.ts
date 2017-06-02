import {Directive, ElementRef, Renderer} from '@angular/core';

@Directive({
    selector: '[bold]'
})
export class BoldDirective{

    constructor(private elementRef: ElementRef, private renderer: Renderer){

        this.renderer.setElementStyle(this.elementRef.nativeElement, "font-weight", "bold");
    }
}

// Renderer представляет сервис, который также при вызове директивы автоматически передается в ее конструктор,
// и мы можем использовать данный сервис для стилизации элемента.

// import {Directive, ElementRef} from '@angular/core';
//
// @Directive({
//     selector: '[bold]'
// })
// export class BoldDirective{
//
//     constructor(private elementRef: ElementRef){
//
//         this.elementRef.nativeElement.style.fontWeight = "bold";
//     }
// }
//
//Директива - это обычный класс на TS, к которому применяется декоратор Directive,
//
// класс "ElementRef". Он представляет ссылку на элемент, к которому будет применяться директива.