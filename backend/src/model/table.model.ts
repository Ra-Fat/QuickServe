import { Model, DataTypes } from "sequelize";
import { sequelize } from "../db/sequelize.js";
import { Table } from "../types/table.js";

export class TableModel extends Model<Table>{}

TableModel.init(
    {
        id: {
            type : DataTypes.STRING,
            primaryKey:true,
        },
        tableNumber:{
            type : DataTypes.STRING,
            allowNull:false
        },
        qrCodeUrl:{
            type : DataTypes.STRING,
            allowNull:false
        },
        isActive:{
            type : DataTypes.BOOLEAN,
            defaultValue: true
        }
    },
    {
        sequelize,
        modelName: 'Table',
        tableName: 'tables',
        timestamps: true,
        createdAt: 'created_at',   
        updatedAt: 'updated_at',
    }
);
