import express from "express";
import productRouter from "./product";

import routerAuth from "./auth";
import routerCategory from "./category";
const router = express.Router();

router.use("/products", productRouter);
router.use("/categories", routerCategory);
router.use("/auth", routerAuth);

export default router;