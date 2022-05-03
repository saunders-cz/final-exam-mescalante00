import { Model, DataTypes } from "sequelize";
import { dbConnection } from "./connection.js";
import { meals, categories, users } from "../data/data.js";

const { STRING, FLOAT, INTEGER } = DataTypes;

class Meal extends Model {}

Meal.init(
  {
    id: { type: INTEGER, autoIncrement: true, primaryKey: true },
    title: { type: STRING, allowNull: false },
    imgsrc: { type: STRING, allowNull: true },
    description: { type: STRING, allowNull: false },
    price: { type: FLOAT, allowNull: false },
  },
  {
    sequelize: dbConnection,
    name: {
      singular: "meal",
      plural: "meals",
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

class User extends Model {}

User.init(
  {
    id: { type: INTEGER, autoIncrement: true, primaryKey: true },
    name: { type: STRING, allowNull: false },
    address: { type: STRING, allowNull: false },
    email: { type: STRING, allowNull: false },
  },
  {
    sequelize: dbConnection,
    name: {
      singular: "user",
      plural: "users",
    },
  }
);

Category.hasMany(Meal);
Meal.belongsTo(Category);

await dbConnection.sync({ force: true });

// seed the data
await Category.bulkCreate(categories);
await Meal.bulkCreate(
  meals.map((m) => {
    const { id, ...meal } = m;
    return meal;
  })
);
await User.bulkCreate(users);

export { Meal, Category, User };
