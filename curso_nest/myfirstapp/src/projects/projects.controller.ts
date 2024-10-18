import { Body, Controller, Delete, Get, Patch, Post, Put } from '@nestjs/common';
import { ProjectsService } from './projects.service';

@Controller('/projects')
export class ProjectsController {
    constructor(private projectsService : ProjectsService){}

    @Get()
    getProjects(){
        return this.projectsService.getProjects();
    }

    @Post()
    createProjects(@Body() project : any){
        console.log(project);
        return this.projectsService.createProjects();
    }
    
    @Put()
    updateProjects(){
        return this.projectsService.updateProjects();
    }

    @Delete()
    deleteProjects(){
        return this.projectsService.deleteProjects();
    }

    @Patch()
    updateProjectsStatus(){
        return this.projectsService.updateProjectsStatus();
    }
}
