import mongoose from "mongoose";

const SecondPost = new mongoose.Schema({
    directory_B: {type: String},
    name: {type: String},
    size: {type: String},
    date: {type: String},
    time: {type: String}
})

export default mongoose.model('SecondPost', SecondPost)