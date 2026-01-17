import { Model, DataTypes } from "sequelize";
import { sequelize } from "../db/sequelize.js";
import { MenuItem } from "../types/menu_item.js";


export class MenuItemModel extends Model<MenuItem>{}

MenuItemModel.init(
    {
        id: {
            type : DataTypes.STRING,
            primaryKey:true,
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        description: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        price: {
          type: DataTypes.FLOAT,
          allowNull: false,
        },
        imageUrl: {
          type: DataTypes.STRING,
          allowNull: false,
          field: 'image_url',
        },
        categoryId: {
          type: DataTypes.STRING,
          allowNull: false,
          field: 'category_id',
        },
        isAvailable: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            field: 'is_available',
        },
    },
    {
        sequelize,
        modelName: 'MenuItem',
        tableName: 'menu_items',
        timestamps: true,
        createdAt: 'created_at',   
        updatedAt: 'updated_at',
    }
);