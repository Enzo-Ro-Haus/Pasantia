import { Controller, Get, HttpCode, Req, Res, Param, ParseIntPipe, ParseBoolPipe, Query, UseGuards } from '@nestjs/common';
import { HelloService } from './hello.service';
import { ValidateuserPipe } from './pipe/validateuser/validateuser.pipe';
import { AuthGuard } from './guards/auth/auth.guard';
//import { Response, Request } from 'express';

@Controller()
export class HelloController {
    constructor(private helloService : HelloService) {}

    @Get('/')
    index(){
        return this.helloService.saludo();
    }

    // ESTE ES UN EJEMPLO de codigo EXPRESS que podemos encontrar 
    // @Get('/')
    // index(@Req() request: Request, @Res() response : Response) {
    //     console.log(request.url);
    //     response.status(200).json({
    //         message : 'Bienvenido desde reques'
    //     });
    // }


    //Para personalizar los codigos de estado
    @Get('notfound')
    @HttpCode(404)
    notFoundPage(){
        return '404 not found'
    }

    @Get('error')
    @HttpCode(500)
    errorPage(){
        return 'Error route';
    }

    //No tiene por que ser un error necesariamente
    @Get('new')
    @HttpCode(200)
    somethingNew(){
        return "Something new"
    }

    //PIPES procesa y tranforma la informacion
    @Get('ticket/:num') //Tenemos que convertirlo porque viene como string con ParseIntPipe
    getNumber(@Param('num' , ParseIntPipe) num : number){ 
        console.log(typeof num);
        return num + 10;
    }

    @Get('active/:status')
    isUserActive(@Param('status', ParseBoolPipe) status : boolean){
        console.log(typeof status)
        return status ? "Es true" : "Es false";
    }

    //Ejemplo de query http http://localhost:3000/greet?name="Enzo"&age=29
    @Get('greet')//Utiliza un ValidateUsersPipe para transformar la edad
    @UseGuards(AuthGuard) //Este decorador le dice que al momento de la peticion pase por el guard
    greet(@Query(ValidateuserPipe) query : {name: string, age : number}){
        return `Hello! ${query.name}, you age are ${query.age} years old`;
    }


}
