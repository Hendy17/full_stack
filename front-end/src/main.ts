import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient } from '@angular/common/http'; // Use provideHttpClient para fornecer o HttpClient
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(), // Usando provideHttpClient para fornecer HttpClient corretamente
    provideAnimations(),
  ],
}).catch(err => console.error(err));
