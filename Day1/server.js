import express from'express'
import colors from'colors'
import dotenv from 'dotenv'
import morgan from 'morgan'
import connectDB from './Config/db.js';
import authRoutes from './Routes/authRoutes.js'

dotenv.config();

connectDB();

const app=express();

app.use(express.json())
app.use(morgan('dev'))

app.use("/api/v1/auth",authRoutes)

app.get('/',(req,res)=>{
    res.send({
        message:"Welcome to E-Commerce"
    })
})

const PORT=process.env.PORT||8080;

app.listen(PORT,()=>{
    console.log(`Server running on ${PORT}`.bgCyan.white);
})