import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { GatoComponent } from './gato/gato.component';
import { ListaGatosComponent } from './lista-gatos/lista-gatos.component';

@NgModule({
  declarations: [
    AppComponent,
    GatoComponent,
    ListaGatosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
