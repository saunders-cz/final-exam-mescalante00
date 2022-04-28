import { Model, DataTypes } from "sequelize";
import { dbConnection } from "./connection.js";
import { users, categories } from "../data/users.js";

const { STRING, FLOAT, INTEGER } = DataTypes;

class User extends Model {}

User.init(
  {
    id: { type: INTEGER, autoincrement: true, primaryKey: true },
    description: { type: STRING, allowNull: false },
    image: { type: STRING, allowNull: true },
    price: { type: FLOAT, allowNull: false },
  },
  {
    sequelize: dbConnection,
    name: {
      singular: "user",
      plural: "users",
    },
  }
);

class Category extends Model {}

Category.init(
  {
    id: { type: INTEGER, autoIncrement: true, primaryKey: true },
    title: { type: STRING, allowNull: false },
  },
  {
    sequelize: dbConnection,
    name: {
      singular: "category",
      plural: "categories",
    },
  }
);

User.belongsTo(Category);
Category.hasMany(User);

await dbConnection.sync({ force: true });

await Category.bulkCreate(categories);
await User.bulkCreate(
  users.map((b) => {
    const { id, ...user } = b;
    return user;
  })
);

export { User, Category };
