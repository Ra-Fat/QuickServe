export interface User{
    id: string,
    email: string,
    role : 'Customer' | 'Cashier' | 'Chef'| 'Admin',
    password: string,
    createdAt?: Date;
    updatedAt?: Date;
}