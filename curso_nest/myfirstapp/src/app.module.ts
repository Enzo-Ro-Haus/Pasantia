import { Module } from '@nestjs/common';
import { TaskModule } from './tasks/task.module'
import { ProjectsModule } from './projects/projects.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { HelloModule } from './hello/hello.module';

@Module({
  imports: [TaskModule, ProjectsModule, AuthModule, UsersModule, HelloModule],
  
})
export class AppModule {}

/** COMANDOS
 * npm run start:dev <- Inicia el proyecto
 * nest generate --help <- Muestra los comandos donde figura qué podemos generar
 * nest g resource nombre <- Crea un recurso basico
 * nest g mo nombre <- Genera un modulo
 * nest g co carpeta <- Genera un controlador en la carpeta especificada.
 * nest g co carpeta --no-spec <- Lo mismo q arriba pero sin el archivo de test
 * nest g s carpeta --no-spec <- Lo mismo q arriba pero genera un servicio sin el archivo de test
 * nest g pi carpeta/pipes/validateuser <- Dentro de carpeta crea otra y un pipes
 * nest g gu carpeta/guards/auth  <- Dentro de carpeta crea otra y un guard
 */