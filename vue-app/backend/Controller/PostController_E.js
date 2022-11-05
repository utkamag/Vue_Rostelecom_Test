import PostServiceE from "../Service/PostServiceE.js";

class PostController_E {
    async create(req, res) {
        try {
            const post = await PostServiceE.create(req.body)
            res.json(post)
        }catch (e) {
            res.status(500).json(e)
        }
    }

    async getAll(req, res) {
        try{
            const posts = await PostServiceE.getAll()
            return res.json(posts)

        } catch (e) {
            res.status(500).json(e)
        }
    }

    async getOne(req, res) {
        try {
            const post = await PostServiceE.getOne(req.params.id)
            return res.json(post)
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async update(req, res) {
        try {
            const updatePost = await PostServiceE.update(req.body)
            return res.json(updatePost)

        } catch (e) {
            res.status(500).json(e.message)
        }
    }

    async delete(req, res) {
        try {
            const deletePost = await PostServiceE.delete(req.params.id)
            return res.json(deletePost)

        } catch (e) {
            res.status(500).json(e)
        }
    }
}

export default new PostController_E()