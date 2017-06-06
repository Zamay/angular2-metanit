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
var BoldDirective = (function () {
    function BoldDirective(element, renderer) {
        this.element = element;
        this.renderer = renderer;
        this.renderer.setElementStyle(this.element.nativeElement, "cursor", "pointer");
    }
    BoldDirective.prototype.onMouseEnter = function () {
        this.setFontWeight("bold");
    };
    BoldDirective.prototype.onMouseLeave = function () {
        this.setFontWeight("normal");
    };
    BoldDirective.prototype.setFontWeight = function (val) {
        this.renderer.setElementStyle(this.element.nativeElement, "font-weight", val);
    };
    return BoldDirective;
}());
__decorate([
    core_1.HostListener("mouseenter"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BoldDirective.prototype, "onMouseEnter", null);
__decorate([
    core_1.HostListener("mouseleave"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BoldDirective.prototype, "onMouseLeave", null);
BoldDirective = __decorate([
    core_1.Directive({
        selector: '[bold]'
    }),
    __metadata("design:paramtypes", [core_1.ElementRef, core_1.Renderer])
], BoldDirective);
exports.BoldDirective = BoldDirective;
//# sourceMappingURL=bold.directive.js.map