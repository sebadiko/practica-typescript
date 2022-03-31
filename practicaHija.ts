import { Practica } from "./practica";

export class PracticaHija extends Practica{
    diasDeSemana(): string {
        let diassemana:Array<string>= ["lunes", "martes", "miercoles", "jueves"];
        let aux = diassemana[3];
        return aux;
    }
}