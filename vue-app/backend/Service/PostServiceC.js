import Post from "../Post/Post.js";

class PostServiceC {
    async create(post) {
            const createdPost = await Post.create(post)
            return createdPost;
    }

    async getAll(post) {
            const posts = await Post.find()
            return posts;
    }

    async getOne(id) {
            if (!id) {
                throw new Error("Не указан id")
            }
            const post = await Post.findById(id)
            return post;
    }

    async update(post) {

            if (!post._id) {
                throw new Error("В теле запроса не указан id")
            }

            const updatePost = await Post.findByIdAndUpdate(post._id, post, {new: true})
            return updatePost;
    }

    async delete(id) {

            if (!id) {
                throw new Error("В запросе не указан id")
            }
            const deletePost = await Post.findByIdAndDelete(id)
            return deletePost;

    }
}

export default new PostServiceC()