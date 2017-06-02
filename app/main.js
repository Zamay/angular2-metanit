"use strict";
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var app_module_1 = require("./app.module");
var platform = platform_browser_dynamic_1.platformBrowserDynamic();
platform.bootstrapModule(app_module_1.AppModule);
//Этот код инициализирует платформу, которая запускат приложение,
// и затем использует эту платформу для загрузки модуля AppModule.
// platformBrowserDynamic использует bootstrapModule для загрузки нужного модуля.
// То есть фактически здесь platformBrowserDynamic
// запускает импортированный во второй строке модуль AppModule. 
//# sourceMappingURL=main.js.map