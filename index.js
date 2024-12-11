import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import AdminJS from 'adminjs';
import AdminJSExpress from '@adminjs/express';
import * as AdminJSMongoose from '@adminjs/mongoose'; // Corrected import
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { google } from 'googleapis';

import USER_ROUTER from './routers/userRouters.js';
import FORUM_ROUTER from './routers/forumRouters.js';
import POST_ROUTER from './routers/postRouter.js';
import CHAT_ROUTER from './routers/chatRouters.js';
import FEED_ROUTER from './routers/feedRouter.js'
// import CALENDAR_ROUTER from './routers/calendarRouter.js';

import alumniModel from './model/alumniModel.js';
import studentModel from './model/studentModel.js';
import forumModel from './model/forumModel.js';
import postModel from './model/postModel.js';
import threadModel from './model/threadModel.js';
import chatModel from './model/chatModel.js';
import userModel from './model/userModel.js';
import messagesModel from './model/messagesModel.js'


dotenv.config();

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
  },
});

// Middleware
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

// MongoDB Connection
const uri = process.env.MONGODBURI;

const connect = async () => {
  try {
    await mongoose.connect(`${uri}/aludent`);
    console.log('Connected to database');
  } catch (error) {
    console.error('Error connecting to database:', error);
  }
};

// AdminJS Configuration
AdminJS.registerAdapter(AdminJSMongoose); // Use .default for named import
const adminJs = new AdminJS({
  resources: [
    { resource: alumniModel, options: { parent: { name: 'User Management' } } },
        { resource: studentModel, options: { parent: { name: 'Student Management' } } },
        { resource: forumModel, options: { parent: { name: 'Discussion Forum' } } }, // Add Forum
        { resource: postModel, options: { parent: { name: 'Posts Management' } } },
        { resource: threadModel, options: { parent: { name: 'Thread Management' } } },
        { resource: chatModel, options: { parent: { name: 'Chat Management' } } },
        { resource: messagesModel, options: { parent: { name: 'Messasge Management' } } },
        { resource: userModel, options: { parent: { name: 'User Management' } } },
        { resource: alumniModel, options: { parent: { name: 'Alumni Management' } } },
  ],
  rootPath: '/admin',
});

const adminRouter = AdminJSExpress.buildRouter(adminJs);
app.use(adminJs.options.rootPath, adminRouter);

// Routes
app.use('/api/user', USER_ROUTER);
app.use('/api/discussionforum', FORUM_ROUTER);
app.use('/api/post', POST_ROUTER);
app.use('/api/chat', CHAT_ROUTER);
app.use('/api/feed', FEED_ROUTER);
// app.use('/api/event', CALENDAR_ROUTER);

// Web Sockets
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

// Start the server
server.listen(5000, () => {
  console.log('App is running on port 5000');
});

// Connect to the database
connect();
