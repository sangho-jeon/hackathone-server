import IngModel from "../models/ingredients.js";

export const getIngredient = async function (req, res) {
  try {
    const param = req.params.name;
    console.log(param);
    const data = await IngModel.find()
      .where("name")
      .equals("ingredient")
      .select(param);
    console.log(data);
    return res.jsonResult(200, data);
  } catch (err) {
    console.log(err);
    return req.jsonResult(500, { message: "Controller error" });
  }
};
