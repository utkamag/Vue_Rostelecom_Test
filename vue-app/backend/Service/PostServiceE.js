import PostE from "../Post/PostE.js";

class PostServiceE {
    async create(post) {
        const createdPost = await PostE.create(post)
        return createdPost;
    }

    async getAll(post) {
        const posts = await PostE.find()
        return posts;
    }

    async getOne(id) {
        if (!id) {
            throw new Error("Не указан id")
        }
        const post = await PostE.findById(id)
        return post;
    }

    async update(post) {

        if (!post._id) {
            throw new Error("В теле запроса не указан id")
        }

        const updatePost = await PostE.findByIdAndUpdate(post._id, post, {new: true})
        return updatePost;
    }

    async delete(id) {

        if (!id) {
            throw new Error("В запросе не указан id")
        }
        const deletePost = await PostE.findByIdAndDelete(id)
        return deletePost;

    }
}

export default new PostServiceE()