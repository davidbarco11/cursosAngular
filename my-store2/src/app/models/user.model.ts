
//modelo para usuario
export interface User{
  id:string,
  email:string,
  password:string,
  name:string,
}

//interfaz especifica para poder crear un usuario
//cuando extendemor de la interfaz User, utilizamos los mismo atributos que tiene y podemos omitir el id. eso se hace con Omit<>
export interface CreateUserDTO extends Omit<User, 'id'>{

}
