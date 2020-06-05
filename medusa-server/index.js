const express  = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const socket = require('socket.io')
const cors = require('cors')
const keys = require('./config')
const message = require('./model/message')
const user = require('./model/user')
const room = require('./model/room')

const app = new express()
app.use(bodyParser.json())
app.use(cors())

var server = app.listen(5000,()=>{
  console.log("Howdy, I am running at PORT 5000")
})

// Connecting Mongo DB

mongoose.connect(keys.mongoURI)
mongoose.connection.on('error',()=>{
  console.log("Error in database connection")
})
mongoose.connection.once('open',function(){
  console.log("DB connection established")
})

// Setting up Socket.io

let io =  socket(server);

io.on("connection", function(socket){
  console.log("Socket Connection Established with ID :"+ socket.id)
  socket.emit("connection","ddddd")
  socket.on("chat", async function(chat){
    chat.created = new Date()
    let response = await new message(chat).save()
    socket.broadcast.emit("chat",chat)
  })
})


app.get('/chat', async (req,res) => {
    const result = await message.find({roomId: req.query.roomId})
    console.log(req.query.roomId, 5454545, result)
    res.send(result);
})

app.post('/user', async (req, res) => {
    const result = await new user(req.body).save()
    res.send(result);
    
})

app.post('/room', async (req, res) => {
    await new room(req.body).save()
    res.send('');
    
})

app.get('/room', async (req, res) => {
    const result = await room.find()
    res.send(result);
})

app.get('/user', async (req,res) => {
    const result = await user.find({userName: req.query.userName})
    res.send(result);
})
