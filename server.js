const express = require('express')
const app = express()
const port=3000

const db=require('./db')

const vehicle=require('./models/vehicle')

const bodyparser = require('body-parser')
app.use(bodyparser.json())

app.get('/', (req, res) => {
    res.send('Hello World!')
})


//among the crud


// create
app.post('/car',async(req,res)=>{

    try{
        //bodyparse saves the body into the req.body
    const data=req.body
        //added car is saved in the fixed format using model
    const newCar= new vehicle(data)
        //now the response is saved into db
    const response=await newCar.save()

    console.log('data saved successfully')
    res.status(201).json(response)

    }catch(err){
        console.log(err)
        res.status(500).json({error:'internal error'})
    }

    })

app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})