import express from "express";
import * as ingredientController from "../controllers/ingredientController.js";

var router = express.Router();

router.get("/getingred/:name", ingredientController.getIngredient);

export default router;
