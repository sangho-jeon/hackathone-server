import FoodModel from "../models/food.js";

export const getAllFood = async function (req, res) {
  try {
    const allFoods = await FoodModel.find(
      {},
      {
        name: true,
        substring: true,
      }
    );
    return res.jsonResult(200, allFoods);
  } catch (err) {
    console.log(err);
    return res.jsonResult(500, { message: "Controller error" });
  }
};

export const getSumFoos = async function (req, res) {
  try {
    const query = req.query.name.split(",");

    const ingredients = await FoodModel.find(
      {
        name: { $in: query },
      },
      {
        ingredients: true,
      }
    );
    var mapFunc = function () {
      emit(this.name, ingredients);
    };

    console.log(ingredients);
    return res.jsonResult(200, { ingredients });
  } catch (err) {
    console.log(err);
    return res.jsonResult(500, { message: "Controller error" });
  }
};

export const getRecipe = async function (req, res) {
  try {
    const params = req.params;
    const { recipe } = await FoodModel.findOne({ name: params.name });
    console.log(recipe);
    return res.jsonResult(200, recipe);
  } catch (err) {
    return res.jsonResult(500, { message: "Controller error" });
  }
};

export const getFoodData = async function (req, res) {
  try {
    const params = req.params;
    const foodData = await FoodModel.findOne(
      { name: params.name },
      {
        name: true,
        ingredient: true,
        nutrition: true,
      }
    );
    return res.jsonResult(200, foodData);
  } catch (err) {
    return res.jsonResult(500, { message: "Controller error" });
  }
};

export const getIngred = async function (req, res) {
  try {
    const params = req.params;
    const { ingredients, sauce } = await FoodModel.findOne({
      name: params.name,
    });

    return res.jsonResult(200, { ingredients, sauce });
  } catch (err) {
    return res.jsonResult(500, { message: "Controller error" });
  }
};
