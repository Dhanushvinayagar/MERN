const express = require('express')
const bodyparser = require('body-parser')
const cors = require('cors')
const { createServer } = require("http")
const { Server } = require("socket.io")

const app = express()

const usersDB = new Map()

const connectionDB = new Map()

app.use(express.json())
app.use(cors({
    origin:'*'
}))
app.use(bodyparser.urlencoded({extended: true}))


const httpServer = createServer();
const io = new Server(httpServer, {
    cors: {
        origin:"*",
        methods: ["GET", "POST"]
      }
});

io.on("connection", (socket) => {

    socket.on('login', ({ socket_id, user, password }) => {
        console.log(`Login attempt - User: ${user}, Password: ${password}, Socket id: ${socket_id}`);

        if (usersDB.has(user)) {
            socket.emit('loginSuccess',{ message: "Login successful" });
        }else {
            usersDB.set(user,password)
            socket.emit('loginSuccess', { message: 'New Login created' });
        }
        if(socket_id){
            connectionDB.set(socket_id,socket.id)
            socket.to(socket_id).emit('mobileLoginSuccess',{"success":true})
        }
    });

    socket.on('qrscan',(socket_id)=>{
        console.log(socket_id);
        connectionDB.set(socket_id,null)
        socket.emit('qrconnect',{"msg":"id stored"})
    })

    socket.on('disconnect', () => {
        console.log(`Client disconnected: ${socket.id}`);
    });
});

httpServer.listen(8080,()=>{
    console.log("port running");
});



