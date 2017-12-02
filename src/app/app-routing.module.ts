import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProyectosCrudComponent } from './proyectos-crud/proyectos-crud.component';
import { WelcomeComponent } from './welcome/welcome.component';
/*import { PhoneDetailComponent } from './phone-detail/phone-detail.component';*/

const routes: Routes = [
  { path: 'proyectos', component: ProyectosCrudComponent },
 /* { path: 'phones/:name', component: PhoneDetailComponent },*/
  { path: 'welcome', component: WelcomeComponent },
  { path: '', component: WelcomeComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
