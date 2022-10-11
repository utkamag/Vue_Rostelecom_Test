import mongoose from "mongoose";

const Post = new mongoose.Schema({
    directory: {type: String, required: true}
})

export default mongoose.model('Post', Post)