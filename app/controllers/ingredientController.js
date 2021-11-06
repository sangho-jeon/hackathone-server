import IngModel from "../models/ingredients.js";

export const getIngredient = async function (req, res) {
  try {
    const param = '"' + req.params.name.toString() + '"';
    console.log(param);
    // const data = await IngredientModel.find()
    //   .where("name")
    //   .equals("default")
    //   .select(param);
    const data = await IngModel.find({ name: "default" });
    console.log(data);
    return res.jsonResult(200, data);
  } catch (err) {
    console.log(err);
    return req.jsonResult(500, { message: "Controller error" });
  }
};
