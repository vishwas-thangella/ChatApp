const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const ConnectToDB = require('./config/Database');
const UserRouter = require('./routes/UserRoute');
const MessageRoute = require('./routes/MessageRoute');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

dotenv.config({path:'.env'});

ConnectToDB();

app.use('/api/users',UserRouter);
app.use('/api/message',MessageRoute);

const server = app.listen(process.env.PORT,()=>{
    console.log(colors.red(`server started at port : ${process.env.PORT}`));
});
