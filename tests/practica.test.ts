import { Practica } from "../practica";
import { PracticaHija } from "../practicaHija";
import { Suma } from "../suma";

//Cindicionales
test('Al enviar true devuelve "Hola mundo"', () => {
    const aux = new Practica();
    expect (aux.mostrarDatos(true)).toBe("Hola mundo");
});

test('Al enviar 2, devuelve 2"', () => {
    const aux = new Practica();
    expect (aux.devolverNumero(2)).toBe(2);
});


//Array
test('Devuelve la posicion 1', () => {
    const aux = new Practica();
    expect (aux.diasDeSemana()).toBe("martes");
});

//Herencia y overriden
test('Devuelve la posicion 3', () => {
    const aux = new PracticaHija();
    expect (aux.diasDeSemana()).toBe("jueves");
});

//Interfaz
test('Devuelve el resultado de la suma 3 + 7', () => {
    const aux = new Suma();
    expect (aux.operacion(3, 7)).toBe(10);
});

//Overloaded
test('Suma 4 y 9 y devuelve el resultado', () => {
    const aux = new Practica();
    expect (aux.add(4, 9)).toBe(13);
});

test('Devuelve dos strings', () => {
    const aux = new Practica();
    expect (aux.add("Hola ", "Mundo")).toBe("Hola Mundo");
});