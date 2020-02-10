export class Gato {
    nombre: string
    edad: number
    raza: string
    constructor(nombre: string, raza: string, edad?: number) {
        this.nombre = nombre;
        this.raza = raza;
        this.edad = edad || -1;
    }

}