import { bootstrapApplication } from '@angular/platform-browser';
import { ComponentMain } from './app/angular.component';
import { config } from './app/app.config.server';

const bootstrap = () => bootstrapApplication(ComponentMain, config);

export default bootstrap;
