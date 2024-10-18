// Puede ser una clase o una interface
// Sirve para aclarar cómo son los datos que voy a recibir del front  y hacer validaciones

import { IsString, MinLength } from 'class-validator';

export class CreateTaskDTO{
    @IsString()
    @MinLength(1)
    title : string;
    @IsString()
    @MinLength(1)
    description : string;
}