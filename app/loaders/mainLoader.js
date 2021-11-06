import express from "express";
import mainRouter from "../routes/food.js";
import jsonResult from "../middleware/jsonResult.js";
import imageRouter from "../routes/image.js";

export default async (app) => {
  app.use(express.json());
  app.use(jsonResult);
  app.use("/static", express.static("public"));
  app.use("/food", mainRouter);
  app.use("/image", imageRouter);

  return app;
};
