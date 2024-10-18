import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';

// Esto registra las peticiones que van llegando
@Injectable() 
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: () => void) { //El modifica los any para que sean tipo req y res de express
    console.log('middlewareUser',req.originalUrl); //  Esta es la url que utilizan los controls
    next();
  }
}
