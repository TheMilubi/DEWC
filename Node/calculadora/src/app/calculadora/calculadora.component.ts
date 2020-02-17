import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.scss']
})
export class CalculadoraComponent implements OnInit {

  titulo: string
  num1: number
  num2: number
  resultado: number
  historial: string[]
  constructor() { }

  ngOnInit() {
    this.titulo = 'Calculadora'
    this.historial = []
  }
  sumar(){
    this.historial.push(`${this.num1} + ${this.num2} = ${this.num1 + this.num2}`)
    return this.num1 + this.num2
  }
  restar(){
    this.historial.push(`${this.num1} - ${this.num2} = ${this.num1 - this.num2}`)
    return this.num1 - this.num2
  }
  multiplicar(){
    this.historial.push(`${this.num1} * ${this.num2} = ${this.num1 * this.num2}`)
    return this.num1 * this.num2
  }
  dividir(){
    this.historial.push(`${this.num1} / ${this.num2} = ${this.num1 / this.num2}`)
    return this.num1 / this.num2
  }
  binario(){
    this.historial.push(`${this.num1} / ${this.num2} = ${this.num1 / this.num2}`)
    return this.num1 / this.num2
    
  }
  limpiar(){

  }

}
