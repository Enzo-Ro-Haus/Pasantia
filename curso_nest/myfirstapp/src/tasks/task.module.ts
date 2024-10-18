import { Module } from '@nestjs/common'
import { TaskController } from './task.controller'
import { TasksService } from './tasks.service';

@Module({
    controllers: [TaskController], // Se agregan los controles
    providers: [TasksService],  // Se agregan los servicios ojo que es providers
})
export class TaskModule {

} 