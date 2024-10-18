import { Injectable, HttpCode, NotFoundException } from '@nestjs/common';
import { TaskModule } from './task.module';
import { NotFoundError } from 'rxjs';
import { CreateTaskDTO } from './dto/create-task-dto';
import { UpdateTaskDTO } from './dto/update-task-dto copy';
//Generalmente es codigo que va a ser llamado de otros lados, reutilizado
//y que llama a la bd

@Injectable()//Inyectar codigo en otras partes de la app
export class TasksService {
    private tasks = [];

    getAllTasks() : CreateTaskDTO[]{ 
        return this.tasks;
    }

    getTask(id : number){ 
        const taskFound = this.tasks.find(task => task.id === id); //Buca en el array por id y lo almacen
        if(!taskFound){
            return new NotFoundException(`La tarea con id ${id} no fue encontrada`); //Este es un tipo de manejo de excepciones
        }
        return taskFound;
    }

    createTasks(task : CreateTaskDTO) : CreateTaskDTO{
        this.tasks.push( //Agregar al array el objeto
            {
                ...task,  //ingresan todos los atributos de tarea
                "id" : this.tasks.length + 1, // agregas una id que es el largo del array
            }   
        ); //Almacena las tareas en un array de tareas
        console.log(task);
        return task;
    }

    deleteTasks(){
        return "Eliminando tarea";
    }
    
    updateTasks(task : UpdateTaskDTO){
        return "Actualizando tarea"
    }

    updateTasksStatus(){
        return "Actualizando status de tarea"
    }
}