import { Component, OnInit } from '@angular/core';
import { Gatito } from "../gatito";
import { GatitoService } from "../gatito.service";

@Component({
  selector: 'app-lista-gatos',
  templateUrl: './lista-gatos.component.html',
  styleUrls: ['./lista-gatos.component.sass']
})
export class ListaGatosComponent implements OnInit {

  gatos: Gatito[];

  constructor(private gatoService: GatitoService) { }

  ngOnInit() {
    // this.gatos = this.gatoService.getGatos();
    this.getGatos()
  }
  getGatos(): void { // Se suscribe al método observable del servicio
    this.gatoService.getGatos()
      .subscribe(data => this.gatos = data);
  }

}
