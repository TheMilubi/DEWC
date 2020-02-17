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

  constructor(private gatoService: GatitoService) { 
    this.gatos = gatoService.gatos
  }

  ngOnInit() {
    this.getGatos()  
  }
  getGatos(): void { // Se suscribe al método observable del servicio
    this.gatoService.getGatosJSONSERVER()
      .subscribe(data => this.gatos = data);
  }
  edad(fNac:string, fDef?:string){
    let r:number, s: string
    if(fDef){
      r = new Date(fDef).getTime() - new Date(fNac).getTime()
      r = Math.floor(r / 1000 / 3600 / 24 / 365)
      s = `Murió con ${r} años`
    }
    else{
      r = new Date().getTime() - new Date(fNac).getTime()
      r = Math.floor(r / 1000 / 3600 / 24 / 365)
      s = `Tiene ${r} años`
    }
    return s
  }
}
