import express from "express";
import Loader from "./loaders/index.js";

async function startServer() {
  try {
    const app = express();

    await Loader(app);

    app.listen(process.env.PORT || 3000, "0.0.0.0", (err) => {
      if (err) {
        return console.log(err);
      }
      console.log(`Server is ready !`);
    });
  } catch (err) {
    console.log(err);
  }
}

startServer();
