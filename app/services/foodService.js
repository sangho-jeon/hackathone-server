import FoodModel from "../models/food.js";

export default class foodService {
  static async allfood() {
    try {
      const allFoods = await FoodModel.find({}, { name: true, subname: true });
      return { success: true, allFoods };
    } catch (err) {
      console.log(err);
      return { success: false, body: { statusCode: 500, err } };
    }
  }

  static async getRecipy(name) {
    try {
      const { recipe } = await FoodModel.findOne({ name: name });
      return { success: true, recipe };
    } catch (err) {
      console.log(err);
      return { success: false, body: { statusCode: 500, err } };
    }
  }

  static async getFoodData(name) {
    try {
      const foodData = await FoodModel.findOne(
        { name: name },
        {
          ingredients: true,
          sauce: true,
          nutrition: true,
        }
      );
      return { success: true, foodData };
    } catch (err) {
      return { success: false, body: { statusCode: 500, err } };
    }
  }

  static async getAllNut(query) {
    try {
      const nutrition = await FoodModel.find(
        { name: { $in: query } },
        {
          nutrition: true,
          name: true,
        }
      );
      return { success: true, nutrition };
    } catch (err) {
      return { success: false, body: { statusCode: 500, err } };
    }
  }

  static async getSumFoos(query) {
    try {
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
      return { success: true, nutrition };
    } catch (err) {
      return { success: false, body: { statusCode: 500, err } };
    }
  }
}
