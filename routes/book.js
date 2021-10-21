import express from "express";
import * as mainController from "../controllers/main.js";
import * as allbookController from "../controllers/allbook.js";

var router = express.Router();

router.get("/book", mainController.getBook);
router.get("/allbook", allbookController.getallbook);

export default router;
