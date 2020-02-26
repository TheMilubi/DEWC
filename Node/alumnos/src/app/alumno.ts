export class Alumno{
    id:number;
    nombre:string;
    apellidos:string;
    nota:number;
    constructor (id,nombre,apellidos,nota){
        this.id = id;
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.nota = nota;
    }
 }