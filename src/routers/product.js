import express from "express";
import {
  getAll,
  getDetail,
  create,
  // updatePatch,
  update,
  remove,
} from "../controllers/product.js";

const router = express.Router();

router.get("/products", getAll);
router.get("/products/:id", getDetail);
router.post("/products", create);
// router.patch("/products/:id", updatePatch);
router.put("/products/:id", update);
router.delete("/products/:id", remove);

export default router;