//How to use external modules/Dependencies into node project
const _=require("lodash");

const items=[1,[2,[4,342,3,[3,3]]]];
//flattenDeep -> recursively flatten a nested array
const newItems=_.flattenDeep(items);

console.log(newItems);