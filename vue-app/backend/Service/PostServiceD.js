import PostD from "../Post/PostD.js";

class PostServiceD {
    async create(post) {
            const createdPost = await PostD.create(post)
            return createdPost;
    }

    async getAll(post) {
            const posts = await PostD.find()
            return posts;
    }

    async getOne(id) {
            if (!id) {
                throw new Error("Не указан id")
            }
            const post = await PostD.findById(id)
            return post;
    }

    async update(post) {

            if (!post._id) {
                throw new Error("В теле запроса не указан id")
            }

            const updatePost = await PostD.findByIdAndUpdate(post._id, post, {new: true})
            return updatePost;
    }

    async delete(id) {

            if (!id) {
                throw new Error("В запросе не указан id")
            }
            const deletePost = await PostD.findByIdAndDelete(id)
            return deletePost;

    }
}

export default new PostServiceD()