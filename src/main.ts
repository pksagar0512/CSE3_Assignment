import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config'; // Ensure this path matches your structure
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));