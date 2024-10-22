npm init 
npm i express
npm i nodemon
nodemon server.js
fs.appendFile('filename','to append',()=>{})

const bodyParser=require('body-parser')
app.use(bodyParser.json())
///////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////real example/////////////////////
const express = require('express')
const app = express()
const db=require('./db')

const bodyParser=require('body-parser')
app.use(bodyParser.json())


const person=require('./models/person')

app.get('/', function (req, res) {
  res.send('Hello World')
})


// post route to save the person in the database
app.post('/person',async(req,res)=>{

  try{
 //assuming the request body contains the person data
  const data=req.body


  //create a new person document using the mongoose model
  const newPerson=new person(data)


  // save new person in the database
  const response=await newPerson.save()
  console.log('data saved')
  res.status(200).json(response)

  }
  catch(error){
    console.log(error)
    res.status(500).json({error:'inteernal server error'})
  }
  
})

app.get('/person/:workType',(req,res)=>{

})

app.get('/person',async(req,res)=>{
  try{
    const data=await person.find()
    console.log('data fetched')
    res.status(200).json(data)
  }
  catch(error){
    console.log(error)
    res.status(500).json({error:'inteernal server error'})
  }
})



app.listen(3000)
