import { NgModule }      from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { Router } from '@angular/router';

import { AppComponent }  from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HeroesModule } from './heroes/heroes.module';
import { CrisisCenterModule } from './crisis-center/crisis-center.module';

import { ComposeMessageComponent } from './compose-message.component';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { PageNotFoundComponent } from './not-found.component';

import { AdminModule } from './admin/admin.module';

import { DialogService } from './dialog.service';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HeroesModule,
    CrisisCenterModule,
    AdminModule,
    LoginRoutingModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    ComposeMessageComponent,
    LoginComponent
  ],
  providers: [
    DialogService
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule {
  // diagnostic only: insepct router configuration
  constructor(router: Router){
    console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  }
}
