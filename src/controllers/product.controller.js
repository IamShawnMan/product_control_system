import { collections } from "../common/constants/db.js";
import { Product } from "../models/index.js";

export const productController = {
  create: async (req, res, next) => {
    try {
      const product = new Product(req.body);

      await product.save();

      res.status(201).send(product);
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
      const { page = 1, limit = 10, lang = "uz", mode = "dark" } = req.query;
      const [fValue, sValues] = userList;
      // const page = req.query.page || 1
      // const limit = req.query.limit || 10

      const products = await Product.find()
        .populate("category", "name")
        .limit(limit * 1)
        .skip((page - 1) * limit)
        .sort({ createdAt: -1 });
      // const products = await Product.find();

      res.status(200).send(products);
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
