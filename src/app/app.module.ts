import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TablaPaisesComponent } from './componentes/tabla-paises/tabla-paises.component';
import { AltaActorComponent } from './componentes/alta-actor/alta-actor.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BorrarComponent } from './componentes/borrar/borrar.component';
import { ModificarComponent } from './componentes/modificar/modificar.component';
import { MostrarComponent } from './componentes/mostrar/mostrar.component';
import { ActorListadoComponent } from './componentes/actor-listado/actor-listado.component';
import { ListaactorComponent } from './componentes/listaactor/listaactor.component';

@NgModule({
  declarations: [
    AppComponent,
    TablaPaisesComponent,
    AltaActorComponent,
    BorrarComponent,
    ModificarComponent,
    MostrarComponent,
    ActorListadoComponent,
    ListaactorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
