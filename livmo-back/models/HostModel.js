
const mongoose = require("mongoose")

const Schema = mongoose.Schema

const HostSchema = new Schema({
    name:{
        type:String
    },
    id:{
        type:Number
    },
    licence:{
        type:Buffer
    },
    rne:{
        type:Number
    }

},{timestamps:true});

const HostModel=mongoose.model("Host",HostSchema)
module.exports = HostModel