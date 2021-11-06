import fs from "fs";
import path from "path";

export const thunbNail = async function (req, res) {
  var fileName = "public/" + req.params.name + ".jpg";
  console.log(fileName);
  const __dirname = path.resolve();
  return res
    .status(300)
    .end(fs.readFileSync(path.resolve(__dirname, fileName)));
};
