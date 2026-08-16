import express from "express";
import dotenv from "dotenv";
dotenv.config()

const port = process.env.PORT

const app = express()

app.get("/",(req,res)=>{
    res.json("Auth service is running")
})

app.listen(port,()=>{
    console.log(`Auth service started on port ${port}`)
}   )