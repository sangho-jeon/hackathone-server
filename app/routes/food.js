import express from "express";
import * as uploadController from "../controllers/upload.js";
import * as foodController from "../controllers/foodController.js";

var router = express.Router();

router.post("/foodinfo", uploadController.upload);
router.post("/inginfo", uploadController.uploadIngredients);

router.get("/allfood", foodController.getAllFood);
router.get("/getrecipy/:name", foodController.getRecipy);
router.get("/getnutrit/:name", foodController.getNutrition);
router.get("/getingred/:name", foodController.getIngred);
// router.get("/totalnut", foodController.getSumFoos);

export default router;
