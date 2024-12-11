const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const app = express();
require('dotenv').config();
const cors = require('cors');
const mongoose = require('mongoose');
const {google} = require('googleapis');


const USER_ROUTER = require('./routers/userRouters');
const FORUM_ROUTER = require('./routers/forumRouters');
const POST_ROUTER = require('./routers/postRouter');

// const CALENDAR_ROUTER = require('./routers/calendarRouter')

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

app.use("/api/discussionforum",FORUM_ROUTER);

app.use("/api/post", POST_ROUTER);
app.use("/api/chat", CHAT_ROUTER);

// app.use("/api/event",CALENDAR_ROUTER);

async function connect(){
    try {
        await mongoose.connect(`${uri}/aludent`);
        console.log("Connected to database");
    } catch (error) {
        console.log(error);
    }
}


//Code for google calender starts
// const oauth2Client = new google.auth.OAuth2(process.env.CLIENT_ID,process.env.SECRET_ID,process.env.REDIRECT);

// app.get("/",(req,res)=>{
//     const url = oauth2Client.generateAuthUrl({
//         access_type:'offline',
//         scope:'https://www.googleapis.com/auth/calendar.readonly'
//     });
//     res.redirect(url);
// })

// app.get('/redirect',(req,res)=>{
//     const code = res.query.code;
//     oauth2Client.getToken(code,(err,tokens)=>{
//         if(err){
//             console.error("Couldn't get token",err);
//             res.send("Error");
//             return;
//         }
//         oauth2Client.setCredentials(tokens);
//         res.send('Succesfully logged in');
//     })
// })

// app.get('/calendars',(req,res)=>{
//     const calender = google.calendar({version:'v3',auth:oauth2Client});
//     calender.calendarList.list({},(err,response)=>{
//         if(err){
//             console.error('error fetching calendars',err);
//             res.end('Error!');
//             return;
//         }
//         const calendars = response.data.items;
//         res.json(calendars);
//     });
// })
// app.get('/events',(req,res)=>{
//     const calendarId = req.query.calender??'primary';
//     const calendar = google.calendar({version:'v3',auth:oauth2Client});
//     calendar.events.list({
//         calendarId,
//         timeMin:(new Date()).toISOString(),
//         maxResults:15,
//         singleEvents:true,
//         orderBy:'startTime',
//     },(err,response)=>{
//         if(err){
//             console.error("Can't fetch events");
//             res.send("Error");
//             return;
//         }
//         const  events = response.data.items;
//         res.json(events);
//     })
// })
//Code for Google calendar code ends

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