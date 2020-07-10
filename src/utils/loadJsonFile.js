const fs = require("fs");

function loadJsonFile(pathToFile) {
  const jsonFile = fs.readFileSync(pathToFile, "utf8");
  return JSON.parse(jsonFile);
}
module.exports = {
  loadJsonFile,
};
