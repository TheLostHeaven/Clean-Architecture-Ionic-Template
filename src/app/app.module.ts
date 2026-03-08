import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { IonicModule } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ButtonModule } from 'primeng/button';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeuix/themes/aura';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    ButtonModule,
    IonicModule.forRoot(),
    AppRoutingModule
  ],
  providers: [
    providePrimeNG({
      theme: {
        preset: Aura
      }
    })
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
})
export class AppModule {}