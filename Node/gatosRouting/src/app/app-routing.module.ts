import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RazasComponent } from './gatos/razas/razas.component';
import { GatosComponent } from './gatos/gatos.component';
import { GatoDetalleComponent } from './gatos/gato-detalle/gato-detalle.component';
import { PaginaNoEncontradaComponent } from './gatos/pagina-no-encontrada/pagina-no-encontrada.component';


const routes: Routes = [
  { path: 'razas', component: RazasComponent },
  { path: 'razas/:raza', component: RazasComponent },
  { path: 'gatos', component: GatosComponent },
  { path: 'detalle/:id', component: GatoDetalleComponent },
  { path: '', redirectTo: '/gatos', pathMatch: 'full' },
  { path: '**', component: PaginaNoEncontradaComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
