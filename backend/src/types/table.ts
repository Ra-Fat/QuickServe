export interface Table{
    id:string,
    tableNumber : string,
    qrCodeUrl: string,
    isActive:boolean,
    createdAt?: Date;
    updatedAt?: Date;
}