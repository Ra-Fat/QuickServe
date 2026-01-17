import { Model, DataTypes } from "sequelize";
import { sequelize } from "../db/sequelize.js";
import { Category } from "../types/category.js";

export class CategoryModel extends Model<Category>{}

CategoryModel.init(
    {
        id: {
            type : DataTypes.STRING,
            primaryKey:true,
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
    },
    {
        sequelize,
        modelName: 'Category',
        tableName: 'category',
        timestamps: true,
        createdAt: 'created_at',   
        updatedAt: 'updated_at',
    }
)
