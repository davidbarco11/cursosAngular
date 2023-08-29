
export interface Category{
  id?:string,  //ID opcional por ahora con el signo:  ?
  name:string,
}

export interface Product{
  id?:string,  //ID opcional por ahora con el signo:  ?
  images:string[],
  title:string,
  price: number,
  description:string,
  category:Category,
  taxes?:number
}

//interfaz especifica para poder crear un producto
//cuando extendemor de la interfaz product, utilizamos los mismo atributos que tiene y podemos omitir el id y la category. eso se hace con Omit<>
export interface CreateProductDTO extends Omit<Product, 'id' | 'category'>{
  categoryId:number
}

//interfaz especifica para poder editar un producto, y extendemos de CreateProductDTO y con la propiedad de: Partial le estoy diciendo el programa que todos los atributos seran opcionales.

export interface UpdateProductDTO extends Partial<CreateProductDTO>{

}
