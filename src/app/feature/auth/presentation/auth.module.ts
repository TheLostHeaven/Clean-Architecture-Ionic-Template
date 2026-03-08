import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { IonicModule } from '@ionic/angular';

import { LoginPage } from "./page/login/login.page";
import { RegisterPage } from "./page/register/register.page";
import { ReactiveFormsModule } from '@angular/forms';
import { ImageModule } from 'primeng/image';

import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
// import { AuthInteractor } from '@auth/core/interactor/auth.interactor';

@NgModule({
  declarations: [
    RegisterPage,
    LoginPage

  ],
  exports: [
    LoginPage
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    InputTextModule,
    FormsModule,
    ButtonModule,
    CheckboxModule,
    ImageModule,
    IonicModule
  ],
  providers: [
    // AuthInteractor
  ]
})
export class AuthModule { }
