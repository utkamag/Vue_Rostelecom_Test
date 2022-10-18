import mongoose from "mongoose";

const Post = new mongoose.Schema({
    directory_A: {type: String},
    name: {type: String},
    size: {type: String},
    date: {type: String},
    time: {type: String}
})

export default mongoose.model('Post', Post)