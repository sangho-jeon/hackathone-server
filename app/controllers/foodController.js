import FoodModel from "../models/food.js";

export const getAllFood = async function (req, res) {
  try {
    const allFoods = await FoodModel.find(
      {},
      {
        name: true,
        subname: true,
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
        $math: { $in: query },
      },
      {
        $project: { ingredients: 1 },
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
        ingredients: true,
        nutrition: true,
      }
    );
    return res.jsonResult(200, foodData);
  } catch (err) {
    return res.jsonResult(500, { message: "Controller error" });
  }
};
