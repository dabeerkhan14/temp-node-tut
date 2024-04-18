const path=require("path");

console.log(path.sep);

const filePath=path.join("/content","sub-folder","text.txt");
console.log(filePath);

//returns the base path , text.txt in this case
const base=path.basename(filePath);
console.log(base);

//returns the absolute path
const absolute=path.resolve(__dirname,"content","sub-folder","text.txt");
console.log(absolute);