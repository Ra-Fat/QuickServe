import { sequelize } from "../db/sequelize.js";
import { TableModel } from "./table.model.js";
import { UserModel } from "./user.model.js";
import { OrderItemModel } from "./order_item.model.js";
import { MenuItemModel } from "./menu_item.model.js";
import { CategoryModel } from "./category.model.js";
import { OrderModel } from "./order.model.js";
import { BillModel } from "./bill.model.js";


TableModel.hasMany(OrderModel , {foreignKey: "tableId"});
OrderModel.belongsTo(TableModel, { foreignKey: "tableId" });

OrderModel.hasMany(OrderItemModel, { foreignKey: "orderId" });
OrderItemModel.belongsTo(OrderModel, { foreignKey: "orderId" });

CategoryModel.hasMany(MenuItemModel, { foreignKey: "categoryId" });
MenuItemModel.belongsTo(CategoryModel, { foreignKey: "categoryId" });

MenuItemModel.hasMany(OrderItemModel, { foreignKey: "menuItemId" });
OrderItemModel.belongsTo(MenuItemModel, { foreignKey: "menuItemId" });

OrderModel.hasOne(BillModel, { foreignKey: "orderId" });
BillModel.belongsTo(OrderModel, { foreignKey: "orderId" });


export {
  sequelize,
  UserModel,
  TableModel,
  OrderModel,
  OrderItemModel,
  MenuItemModel,
  CategoryModel,
  BillModel,
};
