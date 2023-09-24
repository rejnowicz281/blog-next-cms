import Comment from "@models/comment";
import Post from "@models/post";
import { connectToDB } from "@utils/database";

export async function getPosts() {
    await connectToDB();

    const posts = await Post.find().sort({ createdAt: -1 });

    return posts;
}

export async function getPost(id) {
    await connectToDB();

    const post = await Post.findById(id);

    return post;
}

export async function getPostComments(postId) {
    await connectToDB();

    const comments = await Comment.find({ post: postId }).sort({
        createdAt: -1,
    });

    return comments;
}
