const fs= require('node:fs');
const data=fs.readFileSync("./data.txt","utf-8");
console.log(data.toString());
