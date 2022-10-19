import PostServiceC from "../Service/PostServiceC.js";

class PostController_C {
    async create(req, res) {
        try {
            const post = await PostServiceC.create(req.body)
            res.json(post)
        }catch (e) {
            res.status(500).json(e)
        }
    }

    async getAll(req, res) {
        try{
            const posts = await PostServiceC.getAll()
            return res.json(posts)

        } catch (e) {
            res.status(500).json(e)
        }
    }

    async getOne(req, res) {
        try {
            const post = await PostServiceC.getOne(req.params.id)
            return res.json(post)
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async update(req, res) {
        try {
                const updatePost = await PostServiceC.update(req.body)
                return res.json(updatePost)

        } catch (e) {
            res.status(500).json(e.message)
        }
    }

    async delete(req, res) {
        try {
            const deletePost = await PostServiceC.delete(req.params.id)
            return res.json(deletePost)

        } catch (e) {
            res.status(500).json(e)
        }
    }
}

export default new PostController_C()