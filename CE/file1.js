const fs= require('node:fs');
// const data=fs.readFileSync("./data.txt","utf-8");
// console.log(data.toString());

fs.writeFileSync("./data1.txt","CE ABES promise");
fs.appendFileSync("./data1.txt","AKTU");
fs.renameSync("./data1.txt","./data2.txt");