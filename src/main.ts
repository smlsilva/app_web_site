import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { ComponentMain } from './app/angular.component';

bootstrapApplication(ComponentMain, appConfig)
  .catch((err) => console.error(err));
