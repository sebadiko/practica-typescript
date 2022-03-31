import { Interfaz } from "./interfaz";

export class Suma implements Interfaz{
    operacion(x: number, y: number): number {
        return x+y;
    }
}