import { HttpException, HttpStatus, Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';

// Autenticar o para decir si el usuario puede entrar o no
@Injectable()
export class AuthMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: () => void) {
    const { authorization } = req.headers;
    if(!authorization){ // Le pide un authorization en el header de la url
      throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED) 
    }
    if(authorization !== 'xyz123'){
      throw new HttpException('Forbidden', HttpStatus.FORBIDDEN)
    }
    next();
  }
}
