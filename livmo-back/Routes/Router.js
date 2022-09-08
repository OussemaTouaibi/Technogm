const express = require("express")
const Host  = require("../models/HostModel")
const router = express.Router()
const multer = require("multer")
const Dish = require("../models/DishFormModel")
const Lodging = require("../models/LodgingFormModel")
const Transport = require("../models/TransportFormModel")

// const storage= multer.diskStorage({
//     destination:function(req,file,callback){
//         callback(null,"../uploads");
//     },
//     filename:function(req,file,callback){
//         callback(null,file.originalname)
//     }
// })
// const upload = multer({ storage:storage , limits:{fileSize:1024*1024*3} })
// router.get("/",(req,res)=>{
// res.json("Welcome")
// })
const upload = multer({ dest: "../uploads/" })

router.get("/hosts",async (req,res)=>{
    const allHosts=await Host.find({}).sort({createdAt:-1})
    res.json(allHosts)
})

router.post("/hosts",upload.single('licence'),async (req,res)=>{
    const {name,id,rne}=req.body ;
    console.log(req.file);
    const licence = req.file;
    try{
       const newHost=await Host.create({name:name,id:id,licence:licence,rne:rne})
        res.status(200).json(newHost)
    } 
    catch(err){
        res.status(400).json({error:err,body:req.body})
    
}})

router.post("/dish",async(req,res)=>{
    try{
        const newDish= await Dish.create(req.body)
         res.status(200).json(newDish)
     } 
     catch(err){
         res.status(400).json({error:err,body:req.body})
    
}})
router.post("/lodging",async(req,res)=>{
    try{
        const newLodging= await Lodging.create(req.body)
         res.status(200).json(newLodging)
     } 
     catch(err){
         res.status(400).json({error:err,body:req.body})
    
}})
// router.post("/transport",async(req,res)=>{
//     try{
//         const newTransport= await Transport.create(req.body)
//          res.status(200).json(newTransport)
//      } 
//      catch(err){
//         console.log(err)
//          res.status(400).json({error:err,message:"transfer this error message pleaaaaase "})
    
// }})
router.post('/transport', upload.array('images'), async(req,res)=>{
    const newTransportData={
        regularity: req.body.regularity,
        governorate: req.body.governorate,
        rules: req.body.rules,
        seats: req.body.seats,
        price: req.body.price,
        images:req.body.images,
    }
    try{
        const newTransport= await Transport.create(newTransportData)
         res.status(200).json(newTransport)
     } 
     catch(err){
        console.log(err)
        console.log(req)
         res.status(400).json({error:err,message:"transfer this error message pleaaaaase "})
    
}})
module.exports=router