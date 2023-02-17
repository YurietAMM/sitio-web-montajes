import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NuestrosServiciosComponent } from './Pages/nuestros-servicios/nuestros-servicios.component';
import { QuienesSomosComponent } from './Pages/quienes-somos/quienes-somos.component';

const routes: Routes = [
  {
    path: '',
    component: NuestrosServiciosComponent
  },
  {
    path: 'quienes-somos',
    component: QuienesSomosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
