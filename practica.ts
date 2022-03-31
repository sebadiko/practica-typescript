export class Practica{

    //condicionales
    mostrarDatos(mostrarMje: boolean): string{
        if(mostrarMje == true){
            return "Hola mundo";
        }
        else{
            return "No hay mensaje";
        }
    }

    devolverNumero(num: number): any{
        switch(num){
            case 1:
                return 1;
                break;
            case 2:
                return 2;
                break;
            case 3:
                return 3;
                break;
            default:
                return "error";
        }
    }

    diasDeSemana(): string{
        let diassemana:Array<string>= ["lunes", "martes", "miercoles", "jueves"];
        let aux = diassemana[1];
        return aux;
    }
}