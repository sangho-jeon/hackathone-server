import express from "express";
import * as uploadController from "../controllers/upload.js";
import * as foodController from "../controllers/foodController.js";

var router = express.Router();

router.post("/foodinfo", uploadController.upload);
router.post("/inginfo", uploadController.uploadIngredients);

router.get("/getallfood", foodController.getAllFood);
router.get("/getrecipe/:name", foodController.getRecipe);
router.get("/getfooddata/:name", foodController.getFoodData);
router.get("/getsumfoos", foodController.getSumFoos);
router.get("/getfoodnut", foodController.getAllNut);

export default router;
