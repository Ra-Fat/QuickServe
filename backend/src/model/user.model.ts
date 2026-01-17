import { Model, DataTypes } from "sequelize";
import { sequelize } from "../db/sequelize.js";
import { User } from "../types/user.js";

export class UserModel extends Model<User>{}

UserModel.init(
    {
        id: {
            type : DataTypes.STRING,
            primaryKey:true,
        },
        email: {
            type : DataTypes.STRING,
            unique: true,
        },
        password:{
            type : DataTypes.STRING,
            allowNull: false
        },
        role:{
            type : DataTypes.STRING,
            defaultValue: 'Customer',
        }
    },
    {
        sequelize,
        modelName: 'User',
        tableName: 'users',
        timestamps: true,
        createdAt: 'created_at',   
        updatedAt: 'updated_at',
    }
);

