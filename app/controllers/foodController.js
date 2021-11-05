import FoodModel from "../models/food.js";

export const getAllFood = async function (req, res) {
  try {
    const allFoods = await FoodModel.find();
    return res.jsonResult(200, allFoods);
  } catch (err) {
    console.log(err);
    return res.jsonResult(500, { message: "Controller error" });
  }
};
