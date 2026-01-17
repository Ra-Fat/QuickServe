export interface OrderItem{
    id:string,
    orderId:string,
    menuItemId: string,
    quantity: number,
    price: number,
    createdAt?: Date;
    updatedAt?: Date;
}