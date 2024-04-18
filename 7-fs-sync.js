const { readFileSync, writeFileSync } = require("fs");

const first = readFileSync("./content/text1.txt", "utf8");
const second = readFileSync("./content/text2.txt", "utf8");

writeFileSync("./content/randomFile.txt", `result : ${first} ${second}`,
    //if you want to write in a file by appending otherwise it will override it
    { flag: 'a' });