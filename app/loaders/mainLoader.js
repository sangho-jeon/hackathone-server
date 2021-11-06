import express from "express";
import mainRouter from "../routes/food.js";
import jsonResult from "../middleware/jsonResult.js";
import imageRouter from "../routes/image.js";
import IngredientRouter from "../routes/ingredients.js";

export default async (app) => {
  app.use(express.json());
  app.use(jsonResult);
  app.use("/static", express.static("public", { extentions: [".jpg"] }));
  app.use("/food", mainRouter);
  app.use("/image", imageRouter);
  app.use("/ingredient", IngredientRouter);
  return app;
};
