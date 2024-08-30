import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient } from '@angular/common/http';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),  // Isso deve garantir que o HttpClient seja fornecido corretamente
    provideAnimations()
  ],
}).catch(err => console.error(err));
