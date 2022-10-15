import express from 'express';
import mongoose from "mongoose";
import Router from "./Router/Router.js";
import cors from "cors"

const PORT = 8081;
const DB_URL = `mongodb+srv://utkamag:Hesoyam1973@cluster0.ymhhgli.mongodb.net/?retryWrites=true&w=majority`

const app = express()

app.use(express.json())
app.use("/api", Router)
app.use(cors({
    origin: "*"
}))


async function startApp () {
    try {
        await mongoose.connect(DB_URL)
        app.listen(PORT, () => console.log("Sever worked on port" + PORT))
    } catch (e) {
        console.log(e)
    }
}

startApp()



