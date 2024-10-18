import { Injectable } from '@nestjs/common';

@Injectable()
export class HelloService {

    saludo() : string{
        console.log("Este es un saludo por consola");
        return "Bienvenido";
    }
}
