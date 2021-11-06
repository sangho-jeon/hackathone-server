import mainLoader from "./mainLoader.js";
import mongodbLoader from "./mongodbloader.js";

export default async (app) => {
  await mainLoader(app);
  console.log("Express Initialized");

  await mongodbLoader();
};
