import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AltaActorComponent } from './componentes/alta-actor/alta-actor.component';
import { TablaPaisesComponent } from './componentes/tabla-paises/tabla-paises.component';

const routes: Routes = [
  {path:"",component:AltaActorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
