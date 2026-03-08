import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FooterComponent } from '@shared/components/footer/footer.component';
import { PageNotFoundComponent } from '@shared/components/page-not-found/page-not-found.component';
import { HeaderComponent } from '@shared/components/header/header.component';
import { IonicModule } from '@ionic/angular';
import { LayoutComponent } from './layout.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { ButtonModule } from 'primeng/button';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeuix/themes/aura';


@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent
],
  imports: [
    BrowserModule,
    ButtonModule,
    IonicModule.forRoot(),
    LayoutRoutingModule
  ],
  providers: [
    providePrimeNG({
      theme: {
        preset: Aura
      }
    })
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [LayoutComponent],
})
export class LayoutModule {}