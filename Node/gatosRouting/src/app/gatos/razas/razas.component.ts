import { Component, OnInit } from '@angular/core';
import { Gato } from '../gato';
import { ActivatedRoute } from '@angular/router';
import { GatoService } from '../gato.service';

@Component({
  selector: 'app-razas',
  templateUrl: './razas.component.html',
  styleUrls: ['./razas.component.css']
})
export class RazasComponent implements OnInit {

  gatos: Gato[];
  razaElegida: string;
  constructor(private gatoService: GatoService,
    private route: ActivatedRoute) { }
  ngOnInit() {
    this.razaElegida = this.route.snapshot.paramMap.get('raza');
    if (this.razaElegida) {
      this.getGatosPorRazaJSON(this.razaElegida);
    } else {
      this.getGatosJSON();
    }
  }
  getGatosPorRazaJSON(raza): void {
    this.gatoService.getGatosPorRazaJSON(raza)
      .subscribe(gatos => this.gatos = gatos);
  }
  getGatosJSON(): void {
    this.gatoService.getGatosJSON()
      .subscribe(gatos => this.gatos = gatos);
  }

}
