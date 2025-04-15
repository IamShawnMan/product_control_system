import { Category } from "../models/index.js";

export const categoryController = {
  create: async (req, res, next) => {
    try {
      const category = new Category(req.body);
      await category.save();

      res.status(201).send({
        status: "ok",
        data: category,
      });
    } catch (err) {
      next(err);
    }
  },
  update: (req, res, next) => {
    try {
      //
    } catch (err) {
      next(err);
    }
  },
  findAll: async (req, res, next) => {
    try {
      const categories = await Category.find();

      res.status(201).json({
        status: "ok",
        data: categories,
      });
    } catch (err) {
      next(err);
    }
  },
  findOne: (req, res, next) => {
    try {
      //
    } catch (err) {
      next(err);
    }
  },
  delete: (req, res, next) => {
    try {
      //
    } catch (err) {
      next(err);
    }
  },
};
