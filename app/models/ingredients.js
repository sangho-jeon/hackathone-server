import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ingredientsSchema = new Schema(
  {
    name: { type: String, required: true, unique: true },
    감자: {
      보관방법: { type: String },
      유통기한: { type: Number },
    },
    계란: {
      보관방법: { type: String },
      유통기한: { type: Number },
    },
    양파: {
      보관방법: { type: String },
      유통기한: { type: Number },
    },
    대패삽겹살: {
      보관방법: { type: String },
      유통기한: { type: Number },
    },
    통마늘: {
      보관방법: { type: String },
      유통기한: { type: Number },
    },
    두부: {
      보관방법: { type: String },
      유통기한: { type: Number },
    },
    스팸: {
      보관방법: { type: String },
      유통기한: { type: Number },
    },
    깻잎: {
      보관방법: { type: String },
      유통기한: { type: Number },
    },
    돼지고기: {
      보관방법: { type: String },
      유통기한: { type: Number },
    },
    캔옥수수: {
      보관방법: { type: String },
      유통기한: { type: Number },
    },
    돈까스: {
      보관방법: { type: String },
      유통기한: { type: Number },
    },
    아보카도: {
      보관방법: { type: String },
      유통기한: { type: Number },
    },
    고구마: {
      보관방법: { type: String },
      유통기한: { type: Number },
    },
    대파: {
      보관방법: { type: String },
      유통기한: { type: Number },
    },
    매추리알: {
      보관방법: { type: String },
      유통기한: { type: Number },
    },
    소시지: {
      보관방법: { type: String },
      유통기한: { type: Number },
    },
    사과: {
      보관방법: { type: String },
      유통기한: { type: Number },
    },
    콩나물: {
      보관방법: { type: String },
      유통기한: { type: Number },
    },
    밥: {
      보관방법: { type: String },
      유통기한: { type: Number },
    },
    당근: {
      보관방법: { type: String },
      유통기한: { type: Number },
    },
    플레인요거트: {
      보관방법: { type: String },
      유통기한: { type: Number },
    },
    견과류: {
      보관방법: { type: String },
      유통기한: { type: Number },
    },
  },
  { collection: "INGREDIENT" }
);

const Ingredients = mongoose.model("ingredients", ingredientsSchema);

export default Ingredients;
