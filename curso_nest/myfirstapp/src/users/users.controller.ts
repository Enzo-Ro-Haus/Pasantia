import { Controller, Delete, Get, Patch, Post, Put, Body, UsePipes, ValidationPipe, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDTO } from './dto/create-user-dto';

@Controller('/users')
export class UsersController {
    constructor(private usersService : UsersService){}

    @Get()
    getAllUsers(){
        return this.usersService.getAllUsers();
    }

    @Get('/:id')
    getUser(@Param('id') id : string){
        return this.usersService.getUser(parseInt(id));
    }

    @Post()
    createUser(@Body() user : CreateUserDTO){
        return this.usersService.createUser(user);
    }

    @Put()
    updateUser(){
        return this.usersService.updateUser();
    }

    @Delete()
    deleteUser(){
        return this.usersService.deleteUser();
    }

    @Patch()
    updateUserStatus(){
        return this.usersService.updateUserStatus();
    }
}
