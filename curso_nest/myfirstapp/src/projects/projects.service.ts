import { Injectable } from '@nestjs/common';

//Nest no compila a menos que no haya errores

export interface Project {// Se debe exportar así lo usa tambien en los controllers que lo desconocen
    name : string;
    duration : number;
}


@Injectable()
export class ProjectsService {

    //Podes cusar el tipado de ts para forzar los tipos de retorno
    getProjects() : Project{
        return {
            name : "Proyecto Z",
            duration : 4
        };
    }

    createProjects(){
        return "Creando proyecto ";
    }

    updateProjects(){
        return "Actualizando proyectos ";
    }

    deleteProjects(){
        return "Eliminando proyectos ";
    }
    
    updateProjectsStatus(){
        return "Actualizando el status proyectos ";
    }
}
