import express from "express";
import mainRouter from "../routes/book.js";
import jsonResult from "../middleware/jsonResult.js";

export default async (app) => {
  app.use(express.json());
  app.use(jsonResult);
  app.use("/test", mainRouter);

  return app;
};
