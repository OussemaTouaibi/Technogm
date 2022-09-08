
const mongoose = require("mongoose")

const Schema = mongoose.Schema
const TransportFormSchema = new Schema({
   
    regularity: {
        type:String, 
        required: true,
    },
    governorate: {
        type:String, 
        required: true,
    },
    rules: {
        type:String, 
        required: true,
    },
   
    seats: {
        type:Number, 
        required: true,
    },
    price: {
        type:Number, 
        required: true,
    },
    images:{
        type:Array,
        required : false ,
    }
    
   

})
const TransportFormModel= mongoose.model("TransportFormModel",TransportFormSchema)
module.exports=TransportFormModel 