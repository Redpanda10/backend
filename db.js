const mongoose=require('mongoose')

const mongourl='mongodb://localhost:27017/newdb'

mongoose.connect(mongourl)

const db=mongoose.connection

db.on('error',(err)=>console.error(err))

db.on('connected',()=>{
    console.log('Connected to MongoDB by event listner')
})

db.on('disconnected',()=>{
    console.log('Disconnected from MongoDB by event listener')
})

module.exports=db 