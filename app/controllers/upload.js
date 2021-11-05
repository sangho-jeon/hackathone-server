import express from "express";
import FoodModel from "../models/food.js";
import IngModel from "../models/ingredients.js";

export const upload = async function (req, res) {
  try {
    const newFood = new FoodModel(req.body);
    console.log(req.body);
    await newFood.save();
    return res.jsonResult(201, { message: "success" });
  } catch (err) {
    console.log(err);
    return res.jsonResult(500, { message: "Import Controller Error" });
  }
};

export const uploadIngredients = async function (req, res) {
  try {
    const newIng = new IngModel(req.body);
    console.log(req.body);
    await newIng.save();
    return res.jsonResult(201, { message: "success" });
  } catch (err) {
    console.log(err);
    return res.jsonResult(500, { message: "Import Controller Error" });
  }
};
