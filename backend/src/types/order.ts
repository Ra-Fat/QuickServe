export interface Order{
    id: string,
    tableId:string,
    status: 'pending' | 'cooking' | 'ready' | 'completed' | 'cancelled',
    createdAt?: Date;
    updatedAt?: Date;
}