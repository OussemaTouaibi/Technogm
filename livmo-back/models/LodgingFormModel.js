
const mongoose = require("mongoose")

const Schema = mongoose.Schema
const LodgingFormSchema = new Schema({
   
    name: {
        type:String, 
        required: true,
    },
    category: {
        type:String, 
        required: true,
    },
    website: {
        type:String, 
        required: true,
    },
    address: {
        type:String, 
        required: true,
    },
    type: {
        type:String, 
        required: true,
    },
    description: {
        type:String, 
        required: true,
    },
   
    price: {
        type:Number, 
        required: true,
    },
    rating: {
        type:Number, 
        required: true,
    },
   

})
const LodgingFormModel= mongoose.model("LodgingFormModel",LodgingFormSchema)
module.exports=LodgingFormModel 