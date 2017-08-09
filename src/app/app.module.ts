import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.root';
import {RoutingModule} from './app-routing.module';
import {ClassesComponent} from './classes/classes.component';
import {RacesComponent} from './races/races.component';
import {ClassesService} from './service/ClassesService';
import {RacesService} from './service/RacesService';
import { NavbarComponent } from './navbar/navbar.component';
import { ClassDetailsComponent } from './classes/class-details/class-details.component';
import { WizardComponent } from './wizard/wizard.component';
import {AlertModule} from 'ngx-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    ClassesComponent,
    RacesComponent,
    NavbarComponent,
    ClassDetailsComponent,
    WizardComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    AlertModule.forRoot()
  ],
  providers: [
    ClassesService,
    RacesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
