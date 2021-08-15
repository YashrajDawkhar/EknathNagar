const mongoose = require("mongoose");

// const DB ='mongodb+srv://eknathNagar:eknath@8900@cluster0.ilmdf.mongodb.net/EknathNagar?retryWrites=true&w=majority'
const DB ="mongodb://localhost:27017/EknathNagar"
mongoose.connect(DB,{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify:false

}).then(()=>{
    console.log("Connection is sucessfull")
}).catch((e)=>{
    console.log("No Connection " +e)
}) 



// "mongodb://localhost:27017/students-api"