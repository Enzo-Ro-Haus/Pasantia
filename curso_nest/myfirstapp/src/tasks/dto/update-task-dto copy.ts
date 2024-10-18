// Puede ser una clase o una interface
// Sirve para aclarar cómo son los datos que voy a recibir del front

export interface UpdateTaskDTO{
    title? : string; // Opcional por que puede que no lo modifique
    description? : string;
}