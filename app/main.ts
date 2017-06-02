import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';

const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);

//Этот код инициализирует платформу, которая запускат приложение, и затем использует эту платформу для загрузки модуля AppModule.