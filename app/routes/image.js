import express from "express";
import * as imageController from "../controllers/imageController.js";

var router = express.Router();

router.get("/thubnail/:name", imageController.thunbNail);

export default router;
