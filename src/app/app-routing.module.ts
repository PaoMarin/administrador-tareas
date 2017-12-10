import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProyectosCrudComponent } from './proyectos-crud/proyectos-crud.component';
import { PersonasCrudComponent } from './personas-crud/personas-crud.component';
import { EstadosCrudComponent } from './estados-crud/estados-crud.component';
import { WelcomeComponent } from './welcome/welcome.component';


const routes: Routes = [
  { path: 'proyectos', component: ProyectosCrudComponent },
  { path: 'personas', component:  PersonasCrudComponent },
  { path: 'estados', component: EstadosCrudComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: '', component: WelcomeComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
