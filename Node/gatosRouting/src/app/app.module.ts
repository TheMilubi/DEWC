import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GatosComponent } from './gatos/gatos.component';
import { HttpClientModule } from "@angular/common/http";
import { RazasComponent } from './gatos/razas/razas.component';
import { GatoDetalleComponent } from './gatos/gato-detalle/gato-detalle.component';
import { PaginaNoEncontradaComponent } from './gatos/pagina-no-encontrada/pagina-no-encontrada.component';


@NgModule({
  declarations: [
    AppComponent,
    GatosComponent,
    RazasComponent,
    GatoDetalleComponent,
    PaginaNoEncontradaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
