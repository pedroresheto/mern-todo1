import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'

import postRoute from './routes/post.js'

const app = express()
const PORT = 3002
dotenv.config()

//midlewares
app.use(express.json())
app.use(cors())

//routes
app.use('/api/item', postRoute)

async function start() {
    try {
        await mongoose.connect(
            `mongodb+srv://${process.env.DB_user}:${process.env.DB_pass}@cluster0.bmgohcr.mongodb.net/todo-list?retryWrites=true&w=majority`
        )
        console.log('connect to db');
        app.listen(PORT, ()=> console.log(`server has been started on port: ${PORT}`))
    } catch (error) {
        console.log(error);
    }
}
start()