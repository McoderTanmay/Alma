const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const app = express();
require('dotenv').config();
const cors = require('cors');
const mongoose = require('mongoose');

const USER_ROUTER = require('./routers/userRouters');
const forumRouters = require('./routers/forumRouters');
const POST_ROUTER = require('./routers/postRouter');
const CHAT_ROUTER = require('./routers/chatRouters');

const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: '*',
        methods: ['GET', 'POST'],
    },
});

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
const uri = process.env.MONGODBURI;

//routes
app.use("/api/user", USER_ROUTER);

app.use("/api/discussionforum",forumRouters);

app.use("/api/post", POST_ROUTER);
app.use("/api/chat", CHAT_ROUTER);


async function connect(){
    try {
        await mongoose.connect(`${uri}/aludent`);
        console.log("Connected to database");
    } catch (error) {
        console.log(error);
    }
}

connect();
//web sockets
io.on('connection', (socket) => {
    console.log(`User connected: ${socket.id}`);

    socket.on('join', ({ userId }) => {
        socket.join(userId);
        console.log(`User ${userId} joined their private room`);
    });
    socket.on('privateMessage', ({ senderId, recipientId, message }) => {
        console.log(`Message from ${senderId} to ${recipientId}: ${message}`);

        io.to(recipientId).emit('privateMessage', { senderId, message });
    });

    socket.on('disconnect', () => {
        console.log('User disconnected:', socket.id);
    });
});

server.listen(5000,()=>{
    console.log('App is running on port 5000');
});