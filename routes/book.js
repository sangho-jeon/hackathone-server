import express from "express";
import * as mainController from "../controllers/main.js";
var router = express.Router();

router.get("/book", mainController.getBook);

export default router;
