import { stockData } from "../data.js";

function repeatedColorVerify() {
  for (let i = 0; i < stockData.length; i++) {
    for (let j = i + 1; j < stockData.length; j++) {
      if (
        stockData[i].color1 === stockData[j].color1 &&
        stockData[i].color2 === stockData[j].color2
      ) {
        console.log(
          "\x1b[31m",
          `Repeated Color ${stockData[i].color1} ${stockData[i].color2} with ${stockData[j].color1} ${stockData[j].color2}.`
        );
        console.log("\x1b[31m", `In positions ${i} and ${j}`);
      }
    }
  }
}
repeatedColorVerify();
