import SecondPostPost from "../Post/Post.js";

class PostController {
    async create(req, res) {
        try {
            const {directory, directory_A, directory_B, name, size, date, time} = req.body
            const post = await SecondPost.create({directory, directory_A, directory_B, name, size, date, time})
            res.json(post)
        }catch (e) {
            res.status(500).json(e)
        }
    }

    async getAll(req, res) {
        try{
            const posts = await SecondPost.find()
            return res.json(posts)

        } catch (e) {
            res.status(500).json(e)
        }
    }

    async getOne(req, res) {
        try {
            const {id} = req.params
            if(!id){
                res.status(400).json({message: "Id не указан"})
            }
            const post = await SecondPost.findById(id)
            return res.json(post)
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async update(req, res) {
        try {
            const post = req.body
            if (!post._id) {
                res.status(400).json({message: "Id не указан"})
            }
            const updatePost = await SecondPost.findByIdAndUpdate(post._id, post, {new: true})
            return res.json(updatePost)

        } catch (e) {
            res.status(500).json(e)
        }
    }

    async delete(req, res) {
        try {
            const {id} = req.params
            if (!id) {
                res.status(400).json({message: "Id не указан"})
            }
            const deletePost = await SecondPost.findByIdAndDelete(id)
            return res.json(deletePost)

        } catch (e) {
            res.status(500).json(e)
        }
    }
}

export default new PostController()