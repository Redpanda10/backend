const mongoose=require('mongoose')

const vehicleschema=new mongoose.Schema({
    driver_name:{
        type:String,
        required:true,
    },
    vehicle_name:{
        type:String,
        required:true,
    },
    color:{
        type:String,
        required:true,
        enum:['black','white','yellow'],
    },
    car_no:{
        type:Number,
        required:true,
        unique:true,
    }
})

const vehicle=mongoose.model('Car',vehicleschema)

module.exports=vehicle