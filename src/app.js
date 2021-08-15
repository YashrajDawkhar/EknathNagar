const express = require("express");

const db = require("./db/connection")
const PORT = process.env.PORT || 7000

const artiName =require("./routers/artiName")

const app =express();




app.use(artiName);



app.listen(PORT,()=>{
    console.log(`Connection is setup at ${PORT}`);
})