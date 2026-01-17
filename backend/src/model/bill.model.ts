import { Model, DataTypes } from "sequelize";
import { sequelize } from "../db/sequelize.js";
import { Bill } from "../types/bill.js";

export class BillModel extends Model<Bill>{}

BillModel.init(
    {
        id: {
            type : DataTypes.STRING,
            primaryKey:true,
        },
        orderId:{
            type : DataTypes.STRING,
            field: 'order_id',
            allowNull: false,
        },
        totalAmount:{
            type : DataTypes.DOUBLE,
            field: 'total_amount',
        },
        paymentMethod:{
            type : DataTypes.STRING,
            field: 'payment_method',
            defaultValue: 'Cash',
        },
        paymentStatus:{
            type : DataTypes.STRING,
            field: 'payment_status',
            defaultValue: 'pending',
        },
    },
    {
        sequelize,
        modelName: 'Bill',
        tableName: 'bill',
        timestamps: true,
        createdAt: 'created_at',   
        updatedAt: 'updated_at',
    }
)
