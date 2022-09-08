const express = require("express")
const app = express();
require("dotenv").config()
const cors = require("cors")
const { Server } = require("socket.io");
const http = require('http');
const server = http.createServer(app);
const io = new Server(server);
const mongoose = require("mongoose")
const Routes=require("./Routes/Router")
mongoose.connect("mongodb+srv://hassankaa:thekaa122333@livmo.stzmyz4.mongodb.net/?retryWrites=true&w=majority ").then(()=>{
    console.log("connected to database")
    app.listen(process.env.PORT,()=>{
        console.log(`listening on port ${process.env.PORT}  !!`)
    })
}).catch((err)=>{console.log(err)})



app.use(cors());
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));
app.use((req,res,next)=>{
    console.log(req.path , req.method  )
    next()
})

app.use("/",Routes)

io.on('connection', (socket) => {
    console.log('a user connected');
  });