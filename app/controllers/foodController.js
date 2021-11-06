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

    const total = await FoodModel.find(
      { name: { $in: query } },
      {
        ingredients: true,
      }
    );

    var result = new Object();
    total.map((number, index, source) => {
      var temp = new Object();
      temp = number.ingredients;
      for (var prop in temp) {
        if (temp[prop] == null || temp[prop] == undefined) {
          delete temp[prop];
        }
      }
      if (index == 0) {
        var index = new Object();
        index = Object.keys(temp);
        for (var id in index) {
          result[index[id]] = temp[index[id]];
        }
      } else {
        var key = new Object();
        key = Object.keys(temp);
        for (var id in key) {
          if (result.hasOwnProperty(key[id])) {
            var sum = result[key[id]] + temp[key[id]];
            result[key[id]] = sum;
          } else {
            var ori = temp[key[id]];
            var o = key[id];
            result[key[id]] = ori;
            console.log(result[key[id]], typeof o);
          }
        }
      }
    });
    console.log(result);
    return res.jsonResult(200, { result });
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
