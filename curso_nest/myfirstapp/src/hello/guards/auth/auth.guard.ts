import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext, //Es toda la informacion de la peticion
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest() as Request;
    console.log(request.url); //Muestra en consola la url de la request

    if(!request.headers["authorization"]) return false

    return request.url !== '/greet'; //Es distinto a greet 
  }
}

/** GUARDS (se usan en el controller)
 *  Un guard (o guardia) es un mecanismo utilizado para determinar si una solicitud 
 *  entrante debe ser procesada por un controlador o no. Los guards se utilizan comúnmente
 *  para manejar autenticación, autorización y otras verificaciones previas al acceso a un
 *  recurso protegido. Tambien funciona en la distribución de roles entre las partes.
 *  */ 