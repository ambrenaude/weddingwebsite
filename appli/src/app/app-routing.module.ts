import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import { PresencesComponent } from './presences/presences.component';
import { PlansComponent } from './plans/plans.component';
import { LogementsComponent } from './logements/logements.component';
import { MairieComponent } from './plans/mairie/mairie.component';
import { MasComponent } from './plans/mas/mas.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'presences', component: PresencesComponent },
  { path: 'plans', component: PlansComponent },
  { path: 'mairie', component: MairieComponent},
  { path: 'mas', component: MasComponent},
  { path: 'logements', component: LogementsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
