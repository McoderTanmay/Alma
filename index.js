const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors');
const mongoose = require('mongoose');

const USER_ROUTER = require('./routers/userRouters');
const forumRouters = require('./routers/forumRouters');
const POST_ROUTER = require('./routers/postRouter');


app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

const uri = process.env.MONGODBURI;

//routes
app.use("/api/user", USER_ROUTER);
app.use("/api/post", POST_ROUTER);
app.use("/api/forum", forumRouters);

async function connect(){
    try {
        await mongoose.connect(uri);
        console.log("Connected to database");
    } catch (error) {
        console.log(error);
    }
}

app.use("/api/discussionforum",forumRouters)

connect();
app.listen(5000,()=>{
    console.log('App is running on port 5000');
});