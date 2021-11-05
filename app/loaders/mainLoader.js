import express from "express";
import mainRouter from "../routes/food.js";
import jsonResult from "../middleware/jsonResult.js";

export default async (app) => {
  app.use(express.json());
  app.use(jsonResult);
  app.use("/static", express.static("public"));
  app.use("/food", mainRouter);

  return app;
};
