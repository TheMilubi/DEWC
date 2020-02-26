import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GatoService } from '../gato.service';
import { Gato } from '../gato';
import { Location } from '@angular/common';

@Component({
  selector: 'app-gato-detalle',
  templateUrl: './gato-detalle.component.html',
  styleUrls: ['./gato-detalle.component.css']
})
export class GatoDetalleComponent implements OnInit {

  gato: Gato;
  constructor(
    private route: ActivatedRoute,
    private gatoService: GatoService,
    private location: Location
  ) { }
  ngOnInit() {
    this.getGato();
  }
  getGato(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.gatoService.getGatoJSON(id)
      .subscribe(gato => this.gato = gato);
  }
  goBack(): void {
    this.location.back();
  }
  edad(fNacimiento): number {
    const f = new Date(fNacimiento);
    const timeDiff = Math.abs(Date.now() - f.getTime());
    return Math.floor((timeDiff / (1000 * 3600 * 24)) / 365);
  }


}
