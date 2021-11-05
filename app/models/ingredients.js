import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ingredientsSchema = new Schema(
  {
    name: { type: String },
    ingredients: {
      onion: {
        gram: { type: Number },
        validate: { type: Number },
      },
      potato: {
        gram: { type: Number },
        validate: { type: Number },
      },
    },
  },
  { collection: "INGREDIENT" }
);

const Ingredients = mongoose.model("ingredients", ingredientsSchema);

export default Ingredients;
