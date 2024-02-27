const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors')
const { mongoose } = require('mongoose')
const cookieParser = require('cookie-parser');


const app = express();


// database connection
mongoose.connect(process.env.MONGO_URL)
.then(() => console.log('Database connected'))
.catch(() => console.log('Database not connected', err))

const corsOptions ={
    origin:'http://localhost:5000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200,
 }
 
app.use(cors(corsOptions));


//middleware
app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({extended: false}))


app.use("/", require('./routes/AuthRoutes'))


const server = app.listen(0, () => {
    const port = server.address().port;
    console.log(`Server is running on port ${port}`);
});
