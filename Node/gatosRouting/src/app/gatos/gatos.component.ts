import { Component, OnInit } from '@angular/core';
import { GatoService } from './gato.service';
import { Gato } from './gato';


@Component({
  selector: 'app-gatos',
  templateUrl: './gatos.component.html',
  styleUrls: ['./gatos.component.css']
})
export class GatosComponent implements OnInit {

  gatos: Gato[];
  constructor(private gatoService: GatoService) { }
  ngOnInit() {
    this.getGatosJSON();
  }
  getGatosJSON(): void {
    this.gatoService.getGatosJSON()
      .subscribe(gatos => this.gatos = gatos);
  }


}
