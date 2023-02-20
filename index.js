const express = require('express');
const app = express();
const dotenv = require('dotenv')
const helmet = require('helmet')
const morgan = require('morgan')
const db = require('./config/db')
const userRoute = require('./routes/users')
const authRoute = require('./routes/auth')
const postRoute = require('./routes/posts')
const PORT = 3000

dotenv.config()

db(()=>{
  try {
      console.log("DataBase Successfully Connected");        
  } catch (error) {
      console.log("Database Not Connected : ", error);        
  }
});

// middlewares
app.use(express.json())
app.use(helmet())
app.use(morgan("common"))


app.use('/api/users',userRoute)
app.use('/api/auth',authRoute)
app.use('/api/posts',postRoute)




app.listen(PORT,()=>{
  console.log("Backend server running at port 3000")
});