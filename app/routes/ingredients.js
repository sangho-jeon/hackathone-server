import express from "express";
import * as ingredientController from "../controllers/ingredientController.js";

var router = express.Router();

router.get("/ingredient/:name", ingredientController.getIngredient);

export default router;
