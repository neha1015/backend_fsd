const fs= require('node:fs');
const data=fs.readFileSync("./data.txt","utf-8");
console.log(data);
// console.log(data.toString());

// fs.writeFileSync("./data1.txt","CE ABES promise");         //write something on file
// fs.appendFileSync("./data1.txt","AKTU");                  //overwrite
// fs.renameSync("./data1.txt","./data2.txt");            //chg the file name
// fs.unlinkSync("./data2.txt");                    //delete file

if(data.match("H")){
    console.log("H is present");
    const changedata=data.replace("H","ABES");
    fs.writeFileSync("./data.txt",changedata);
}