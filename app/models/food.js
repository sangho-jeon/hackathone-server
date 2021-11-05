import mongoose from "mongoose";

const Schema = mongoose.Schema;

const foodSchema = new Schema(
  {
    name: { type: String, required: true, unique: true },
    recipy: { type: String, required: true },
    ingredients: {
      감자: { type: Number },
      계란: { type: Number },
      양파: { type: Number },
      대패삽겹살: { type: Number },
      통마늘: { type: Number },
      두부: { type: Number },
      스팸: { type: Number },
      깻잎: { type: Number },
      돼지고기: { type: Number },
      캔옥수수: { type: Number },
      돈까스: { type: Number },
      아보카도: { type: Number },
      고구마: { type: Number },
      대파: { type: Number },
      햄: { type: Number },
      매추리알: { type: Number },
      소시지: { type: Number },
      사과: { type: Number },
      콩나물: { type: Number },
      밥: { type: Number },
      당근: { type: Number },
      플레인요거트: { type: Number },
      견과류: { type: Number },
    },
    sauce: {
      견과류: { type: Boolean },
      소금: { type: Boolean },
      간장: { type: Boolean },
      고추장: { type: Boolean },
      고춧가루: { type: Boolean },
      식용유: { type: Boolean },
      마요네즈: { type: Boolean },
      후추: { type: Boolean },
      꿀: { type: Boolean },
      맛술: { type: Boolean },
      다진_마늘: { type: Boolean },
      설탕: { type: Boolean },
      굴소스: { type: Boolean },
      새우젓: { type: Boolean },
      올리브오일: { type: Boolean },
      올리고당: { type: Boolean },
      통깨: { type: Boolean },
      파마산치즈: { type: Boolean },
      물: { type: Boolean },
      버터: { type: Boolean },
      된장: { type: Boolean },
      쌈장: { type: Boolean },
      부침가루: { type: Boolean },
    },
    nutrition: {
      protein: { type: Number },
      carb: { type: Number },
      fat: { type: Number },
      salt: { type: Number },
    },
  },
  {
    collection: "FOOD",
  }
);

const Food = mongoose.model("food", foodSchema);

export default Food;
