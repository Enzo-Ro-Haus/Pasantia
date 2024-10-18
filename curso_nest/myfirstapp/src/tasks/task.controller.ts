import { Body, Controller, Get, Param, Post, Put, Query, UsePipes, ValidationPipe } from '@nestjs/common'
import { TasksService } from './tasks.service';
import { CreateTaskDTO } from './dto/create-task-dto';
import { UpdateTaskDTO } from './dto/update-task-dto copy';

@Controller('/tasks')
export class TaskController {
    constructor( private taskService : TasksService){}

    @Get() 
    getAllTasks(@Query() query : any){ //El cliente envia querys
        console.log(query);
        return this.taskService.getAllTasks(); //Retorna el resultado del metodo del servicio
    }

    @Get("/:id")  // /tasks/1 Agrega un valor de forma dinamica a la url
    getTask(@Param('id') id : string ){ //Toma el id como parametro
        return this.taskService.getTask(parseInt(id)); //Lo parsea y envía
    }

    @Post()
    //@UsePipes(new ValidationPipe()) //Realiza las validaciones, sino respeta el formato retona err400
    createTasks(@Body() task : CreateTaskDTO){
        return this.taskService.createTasks(task);
    }

    @Put()
    updateTask(@Body() task : UpdateTaskDTO){
        return this.taskService.updateTasks(task);
    }
    //Podemos seguir creando pero hay que cambiar nombre de la función y la url
    //@Get("/") 
    //index(){  //Este es un ejemplo por que no vamos a estar creando páginas
    //    return "Home page"
    //}
    
}