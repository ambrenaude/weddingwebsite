import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { HomeBannerComponent } from './home/home-banner/home-banner.component';
import { PresencesComponent } from './presences/presences.component';
import { QuestionsComponent } from './questions/questions.component';
import { PlansComponent } from './plans/plans.component';
import { ContactComponent } from './contact/contact.component';
import { LogementsComponent } from './logements/logements.component';
import { FormComponent } from './contact/form/form.component';
import { MairieComponent } from './plans/mairie/mairie.component';
import { MasComponent } from './plans/mas/mas.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    HomeBannerComponent,
    PresencesComponent,
    QuestionsComponent,
    PlansComponent,
    ContactComponent,
    LogementsComponent,
    FormComponent,
    MairieComponent,
    MasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
