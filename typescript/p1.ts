var n: number = 3
var s: string = 'adios'
var arrayNumerico: number[] = [1, 2, 3]
var arrayNum: Array<number> = [1, 2, 3]
var arrayString: string[] = ['a', 'b', 'c']

enum Color { Red, Green, Yellow, Purple, Brown, Black }

function alertUser(): boolean {
    console.log('Alert booleano')
    return true
}

class Animal {
    readonly nombre: string
    private edad: number
    public colorPiel: Color

    constructor(nombre: string, edad: number, colorPiel: Color) {
        this.nombre = nombre
        this.edad = edad
        this.colorPiel = colorPiel
    }

    saludo(saludo: string): void {

    }
}

class Perro extends Animal {
    saludo(): string {
        return `Guau! Guau! ${this.nombre}`
    }
}

interface Mensaje {
    titulo: string
    mensaje: string
    errorNumero?: number
}

function EscribeMensaje(mensaje: Mensaje){
    console.log(mensaje.titulo)
}

let mensaje: Mensaje = {titulo: 'Prueba', mensaje: 'Esto es una prueba'}

EscribeMensaje(mensaje)

class Coleccion<T> {
    private elementos: Array<T>
    constructor(){
        this.elementos = []
    }
    Add(elemento: T){
        this.elementos.push(elemento)
    }
}