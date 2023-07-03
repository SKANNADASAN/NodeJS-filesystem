const express = require("express");
const fs = require("fs");
const path = require("path");
const dirName = path.join(__dirname,"TimeStamps");




const app = express();

app.get("/", (req, res)=>{
    res.send("hey this is my first server")
})
app.get("/date-time", (req, res)=>{
    let date = new Date();
    let currentTimeStamp = date.toUTCString().slice(0,-3);
    let content = `The Last Updated TimeStamp :${currentTimeStamp}`
    let changedTime = currentTimeStamp.split(" ").join("").split(",").join("").split(":").join("");
    fs.writeFile(`${dirName}/${changedTime}.txt`, content, (err)=>{
        if(err){
            res.send("Error in writing the file")
            return
        }
        res.sendFile(path.join(dirName, "date-time.txt"));
    })
})




app.listen(9000,()=>console.log(`server started in the localhost:9000`))