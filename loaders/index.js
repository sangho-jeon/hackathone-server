import mainLoader from "./mainLoader";
import mongodbLoader from "./mongodbloader";

export default async (app) => {
  await expressLoader(app);
  console.log("Express Initialized");

  // ... more loaders can be here
  await mongodbLoader();
  console.log("mongodb connected");
};
