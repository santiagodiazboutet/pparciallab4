import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActorListadoComponent } from './componentes/actor-listado/actor-listado.component';
import { AltaActorComponent } from './componentes/alta-actor/alta-actor.component';
import { TablaPaisesComponent } from './componentes/tabla-paises/tabla-paises.component';

const routes: Routes = [
  {path:"altaActor",component:AltaActorComponent},
  {path: "actor/listado", component:ActorListadoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
