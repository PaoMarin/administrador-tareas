import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule}  from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ProyectosCrudComponent } from './proyectos-crud/proyectos-crud.component';
import { PersonasCrudComponent } from './personas-crud/personas-crud.component';
import { EstadosCrudComponent } from './estados-crud/estados-crud.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ProyectosService } from './proyectos.service';
import { PersonasService } from './personas.service';
import { EstadosService } from './estados.service';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    ProyectosCrudComponent,
    WelcomeComponent,
    PersonasCrudComponent,
    EstadosCrudComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [ProyectosService, PersonasService, EstadosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
