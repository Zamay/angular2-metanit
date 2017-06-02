import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';

const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);

//Этот код инициализирует платформу, которая запускат приложение,
// и затем использует эту платформу для загрузки модуля AppModule.

// platformBrowserDynamic использует bootstrapModule для загрузки нужного модуля.
// То есть фактически здесь platformBrowserDynamic
// запускает импортированный во второй строке модуль AppModule.