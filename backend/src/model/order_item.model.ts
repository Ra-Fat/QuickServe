import { Model, DataTypes } from "sequelize";
import { sequelize } from "../db/sequelize.js";
import { OrderItem } from "../types/order_item.js";

export class OrderItemModel extends Model<OrderItem>{}

OrderItemModel.init(
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
        menuItemId:{
            type : DataTypes.STRING,
            field: 'menu_item_id',
            allowNull: false,
        },
        quantity:{
            type : DataTypes.INTEGER,
            allowNull: false,
        },
        price:{
            type : DataTypes.DOUBLE,
            allowNull: false,
        },
    },
    {
        sequelize,
        modelName: 'OrderItem',
        tableName: 'order_item',
        timestamps: true,
        createdAt: 'created_at',   
        updatedAt: 'updated_at',
    }
);
