import express from "express";
import * as mainController from "../controllers/main.js";
import * as userController from "../controllers/userController.js";

var router = express.Router();

router.get("/book", mainController.getBook);
router.get("/postdata", userController.postData);

export default router;
