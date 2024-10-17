const mongoose=require('mongoose')

// define mongodb connection url
const mongoURL='mongodb://localhost:27017/hotels'

//connection setup
mongoose.connect(mongoURL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

//object setup
const db=mongoose.connection;



db.on('connected',()=>
    console.log('Mongoose connected  ')
)

db.on('error',(err)=>console.log('Mongoose error '+err))

db.on('disconnected',()=>console.log('Mongoose disconnected'))

//export database connection
module.exports=db;
