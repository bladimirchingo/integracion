import { InicioComponent } from './inicio/inicio.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VistaComponent } from './vista/vista.component';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path:"",
    redirectTo:"inicio",
    pathMatch:"full"
  },
    {
    path:"inicio",
    component:InicioComponent
  },
  {
    path:"vista",
    component:VistaComponent
  },
  
  ];
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
