import FoodModel from "../models/food.js";
import FoodService from "../services/foodService.js";

export const getAllFood = async function (req, res) {
  try {
    const { success, allFoods } = await FoodService.allfood();
    if (success) {
      return res.jsonResult(200, allFoods);
    } else {
      return res.jsonResult(500, { message: "Controller error" });
    }
  } catch (err) {
    console.log(err);
    return res.jsonResult(500, { message: "Controller error" });
  }
};

export const getSumFoos = async function (req, res) {
  try {
    console.log(req.query.name);
    const query = req.query.name.split(",");

    // const ingredients = await FoodModel.find(
    //   {
    //     name: { $in: query },
    //   },
    //   {
    //     ingredients: true,
    //   }
    // );

    const ingredients = await FoodModel.aggregate([
      {
        $project: {
          ingredients: 1,
        },
      },
      {
        $match: {
          name: { $in: query },
        },
      },
    ]);

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
    console.log(params);
    const { success, recipe } = await FoodService.getRecipy(params.name);
    console.log(recipe);
    if (success) {
      return res.jsonResult(200, recipe);
    } else {
      return res.jsonResult(500, { message: "Controller error" });
    }
  } catch (err) {
    return res.jsonResult(500, { message: "Controller error" });
  }
};

export const getFoodData = async function (req, res) {
  try {
    const params = req.params;
    console.log(params.name);
    const { success, foodData } = await FoodService.getFoodData(params.name);
    if (success) {
      return res.jsonResult(200, foodData);
    } else {
      return res.jsonResult(500, { message: "Controller error" });
    }
  } catch (err) {
    return res.jsonResult(500, { message: "Controller error" });
  }
};

export const getAllNut = async function (req, res) {
  try {
    const query = req.query.name.split(",");
    const { success, nutrition } = await FoodService.getAllNut(query);
    if (success) {
      return res.jsonResult(200, nutrition);
    } else {
      return res.jsonResult(500, { message: "Controller error" });
    }
  } catch (err) {
    console.log(err);
    return res.jsonResult(500, { message: "Controller error" });
  }
};
