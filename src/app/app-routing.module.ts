import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import { PresencesComponent } from './presences/presences.component';
import { QuestionsComponent } from './questions/questions.component';
import { PlansComponent } from './plans/plans.component';
import { LogementsComponent } from './logements/logements.component';
import { ContactComponent } from './contact/contact.component';
import { MairieComponent } from './plans/mairie/mairie.component';
import { MasComponent } from './plans/mas/mas.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'presences', component: PresencesComponent },
  { path: 'questions', component: QuestionsComponent },
  { path: 'plans', component: PlansComponent },
  { path: 'mairie', component: MairieComponent},
  { path: 'mas', component: MasComponent},
  { path: 'logements', component: LogementsComponent },
  { path: 'contact', component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
