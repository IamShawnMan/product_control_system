import z from "zod";
import mongoose from "mongoose";

export const productSchema = z.object({
  name: z.string().trim().min(5),
  price: z.number().min(0),
  description: z.string().trim(),
  stock: z.number().min(0),
  category: z.string().refine((val) => {
    return mongoose.Types.ObjectId.isValid(val);
  }),
});
