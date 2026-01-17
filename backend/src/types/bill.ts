export interface Bill{
    id:string,
    orderId:string,
    totalAmount:number,
    paymentMethod: 'Cash' | 'QR',
    paymentStatus: 'pending' | 'success' | 'failed',
    createdAt?: Date;
    updatedAt?: Date;
}