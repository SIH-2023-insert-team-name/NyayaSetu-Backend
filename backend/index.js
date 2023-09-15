import express from 'express';
import cors from 'cors';
import Connection from './database/db.js';
import Route from './routes/route.js'
import bodyParser from 'body-parser';

const app=express();
const port=process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}))
app.use('/',Route)


Connection();

app.listen(port,()=>console.log(`server is running on port ${port} `));