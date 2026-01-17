export interface MenuItem{
    id: string,
    categoryId : string,
    name:string,
    price:number,
    imageUrl:string,
    isAvailable:boolean,
    description?:string,
    createdAt?: Date;
    updatedAt?: Date;
}