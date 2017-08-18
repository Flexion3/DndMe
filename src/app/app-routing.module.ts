import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {ClassesComponent} from './classes/classes.component';
import {RacesComponent} from './races/races.component';
import {WizardComponent} from './wizard/wizard.component';

const routes: Routes = [
  { path: '', redirectTo: 'wizard', pathMatch: 'full'},
  { path: 'classes', component: ClassesComponent},
  { path: 'races', component: RacesComponent},
  { path: 'wizard', component: WizardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class RoutingModule {}

