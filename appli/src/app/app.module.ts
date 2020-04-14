import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { HomeBannerComponent } from './home/home-banner/home-banner.component';
import { PresencesComponent } from './presences/presences.component';
import { PlansComponent } from './plans/plans.component';
import { ContactComponent } from './contact/contact.component';
import { LogementsComponent } from './logements/logements.component';
import { FormComponent } from './contact/form/form.component';
import { MairieComponent } from './plans/mairie/mairie.component';
import { MasComponent } from './plans/mas/mas.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    HomeBannerComponent,
    PresencesComponent,
    PlansComponent,
    ContactComponent,
    LogementsComponent,
    FormComponent,
    MairieComponent,
    MasComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
