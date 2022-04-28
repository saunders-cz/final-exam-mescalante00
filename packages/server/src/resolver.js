import { users } from "../data/users.js";
import { User, Category } from "./model.js";

export const resolvers = {
  Query: {
    users: async (parent, args) => {
      return await User.findAll({
        include: Category,
        order: ["title", "ASC"],
      });
    },
    user: async (parent, args) => {
      return await User.findByPk(args.id, { include: Category });
    },
    categories: async (parent, args) => {
      return await Category.findAll({ include: User });
    },
  },
};
