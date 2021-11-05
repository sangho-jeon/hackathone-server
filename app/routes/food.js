import express from "express";
import * as uploadController from "../controllers/upload.js";
import * as foodController from "../controllers/foodController.js";

var router = express.Router();

router.post("/foodinfo", uploadController.upload);
router.post("/inginfo", uploadController.uploadIngredients);

router.get("/allfood", foodController.getAllFood);

export default router;
