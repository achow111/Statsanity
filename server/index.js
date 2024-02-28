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


//middleware
app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({extended: false}))

const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));

app.use("/", require('./routes/AuthRoutes'))

const port = 8000;
app.listen(port, () => console.log(`server is running on port ${port}`))

