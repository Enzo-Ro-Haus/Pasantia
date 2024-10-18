import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user-dto';

@Injectable()
export class UsersService {
    private users : any[]= [
    ]

    getAllUsers(){
        return this.users;
    }


    getUser(id : number){
        const userFound = this.users.find(user => user.id === id); 
        if(!userFound){
            return new NotFoundException(`El user con id ${id} no fue encontrado`);
        }
        return userFound;
    }

    createUser(user : CreateUserDTO){
        this.users.push({
            ...user,
            id: this.users.length + 1,
        });
        return user;
    }

    deleteUser(){
        return this.users;
    }

    updateUser(){
        return this.users;
    }

    updateUserStatus(){
        return this.users;
    }


}
