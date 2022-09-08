
const mongoose = require("mongoose")

const Schema = mongoose.Schema
const DishFormSchema = new Schema({
    recipe: {
        type:String, 
        required: true,
    },
    resto: {
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
    slogan: {
        type:String, 
        required: false,
    },
    description: {
        type:String, 
        required: true,
    },
    rules: {
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
    time: {
        type:Date, 
        required: true,
    },
    offDays: {
        type:Array, 
        required: true,
    },

})
const DishFormModel= mongoose.model("DishFormModel",DishFormSchema)
module.exports=DishFormModel 