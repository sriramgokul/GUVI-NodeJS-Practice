console.log("Working");

const [, , configPath] = process.argv;

// File System Access
const fs = require("fs");

// Operating System 
const os = require("os");


function Calculation(num1,num2,operation){
    switch(operation){
        case "Add":
            return console.log(num1 + num2);
            case "Sub":
                return console.log(num1 - num2);
                case "mul":
                    return console.log(num1 * num2)
                    default:
                        console.log("Please enter the correct input")
    }

}
Calculation(45,83,"Adda");


console.log("Arguments", process.argv)


// Reading the File
fs.readFile("sample.txt","utf-8",(err,data)=>{
    if(err){
        console.log("Error has Ocurred in Between:",err);
    }else{
        console.log(data);
    }
})

// creating a new File and writing a new data

const content = "I am Writing this file using node js.";

fs.writeFile("./node.txt",content,(err,data)=>{
    if(err){
        console.log("An error has Occurred:",err)
    }else{
        console.log("Data has been successfully written")
    }
})

// read the config path

fs.readFile(configPath,"utf-8",(err,data)=>{
    if(err){
        console.log("An error has Occurred:",err);
    }else{
        console.log(data);
        const config = JSON.parse(data);
        console.log(config.port);
    }
})


// Updating the data in existing file.
const appendContent = `\n This is a new File`; // n is used for new line

fs.appendFile("./node.txt",appendContent,(err,data)=>{
    if(err){
        console.log("Error has Occurred",err)
    }else{
        console.log("File has been successfully appended")
    }
})

// Deleting the file

// fs.unlink("./sample.txt",(err)=>{ // unlink is used to delete files.
//     if(err){
//         console.log("Error has occurred",err)
//     }else{
//         console.log("File has been successfully Deleted")
//     }
// })

// Operating System

// OS Info
console.log("Total Memory",os.totalmem());
console.log("Free Memory Space",os.freemem());
console.log("Version",os.version());
console.log("CPU Status",os.cpus());

// Date

let time = Date.now();
console.log("Timeeee",time)

let date = new Date();
console.log("Date <---------------", date.getDate());
console.log("Month <----------------", date.getMonth());
console.log("Year <-------------", date.getFullYear());
console.log("Today <------------",date.toUTCString());