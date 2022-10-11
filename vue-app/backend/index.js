import express from 'express';
import mongoose from "mongoose";
import Post from "./Post/Post.js";

const PORT = 5000;
const DB_URL = `mongodb+srv://utkamag:Hesoyam1973@cluster0.ymhhgli.mongodb.net/?retryWrites=true&w=majority`

const app = express()

app.use(express.json())

app.post('/', (req, res) => {
    const {directory} = req.body
    const post = Post.create({directory})
    res.json(post)
})

app.get('/', (req, res) => {
    res.send("Сервер работает!")
    console.log(req.body)
})



async function startApp () {
    try {
        await mongoose.connect(DB_URL)
        app.listen(PORT, () => console.log("Sever worked on port" + PORT))
    } catch (e) {
        console.log(e)
    }
}

startApp()



