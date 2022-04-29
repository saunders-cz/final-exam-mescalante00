import { Meal, Category, User } from "./models.js";

export const resolvers = {
  Query: {
    meal: async (parent, args) => {
      return await Meal.findByPk(args.id, {
        include: Category,
      });
    },
    meals: async (parent, args) => {
      return await Meal.findAll({
        include: Category,
        order: [["title", "ASC"]],
      });
    },

    categories: async () => {
      return await Category.findAll({ include: Meal });
    },
    users: async () => {
      return await User.findByPk(args.id);
    },
  },
  Mutation: {
    addUser: async (parent, { id, input }) => {
      await User.update(input, {
        where: { id },
      });
      return { ok: true };
    },

    addMeal: async (parent, args) => {
      const { input } = args;
      await Meal.create(input);
      return { ok: true };
    },

    updateMeal: async (parent, { id, input }) => {
      await Meal.update(input, {
        where: { id },
      });
      return { ok: true };
    },
  },
};
