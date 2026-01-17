import { Model, DataTypes } from "sequelize";
import { Order } from "../types/order.js";
import { sequelize } from "../db/sequelize.js";

export class OrderModel extends Model<Order>{}

OrderModel.init(
    {
        id: {
            type : DataTypes.STRING,
            primaryKey:true,
        },
        tableId:{
            type : DataTypes.STRING,
            allowNull:false,
            field: 'table_id',
        },
        status:{
            type : DataTypes.STRING,
            allowNull: false,
            defaultValue: 'pending',
        }
    },
    {
        sequelize,
        modelName: 'Order',
        tableName: 'orders',
        timestamps: true,
        createdAt: 'created_at',   
        updatedAt: 'updated_at',
    }
);
