import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { LoggerMiddleware } from './logger/logger.middleware'; //No olvidar las importaciones
import { AuthMiddleware } from './auth/auth.middleware';


@Module({
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule implements NestModule {
  //Esto est{a configurado a nivel de modulo de usuario
  configure(consumer: MiddlewareConsumer) { //Esto te permite usar el middleware
       //consumer.apply(LoggerMiddleware).forRoutes('users'); //<- Tiene la misma ruta del controlador que debo usar 
       // Puede aplicarse a multiples rutas o para solo una accion ejemplo get
       consumer
       .apply(LoggerMiddleware)
       .forRoutes(
        {path: '/users', method: RequestMethod.GET },
        {path: '/users', method: RequestMethod.POST},
       ).apply(AuthMiddleware).forRoutes('/users') 
  }//Termina pasando por todos los middlewares
}
