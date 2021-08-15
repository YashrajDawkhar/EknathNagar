const mongoose =require("mongoose")
const validator =require("validator")



const artiSchema = new mongoose.Schema({

    Name:{
        type:String,
        required:true,
    },
    Date:{
        type:String,
        required:true
    }
})


//IT will create a new collection

const artiName = new mongoose.model('artiName',artiSchema)

module.exports = artiName;