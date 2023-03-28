import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";

import  Connection  from "./database/db.js";
import DefaultData from "./default.js";
import Router from './routes/route.js';
import UserListData from "./defaultuser.js";

const app = express();
dotenv.config();

app.use(cors())
app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended: true}))
app.use('/', Router);

const PORT = process.env.PORT || 8000;

const USERNAME = process.env.USER_NAME;
const PASSWORD = process.env.PASSWORD;
const URL = process.env.MONGODB_URL || `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.jugocrp.mongodb.net/?retryWrites=true&w=majority`

Connection(URL);

app.listen(PORT,()=>{
    console.log(`server is on http://localhost:${PORT}`);
})

DefaultData();
UserListData();