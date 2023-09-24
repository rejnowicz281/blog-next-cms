import Comment from "@models/comment";
import Post from "@models/post";
import { connectToDB } from "@utils/database";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

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

export async function setPostStatus(postId, status) {
    "use server";

    await connectToDB();

    await Post.findByIdAndUpdate(postId, { status });

    revalidatePath(`posts/${postId}`);

    const data = {
        action: "setPostStatus",
        success: true,
        status,
    };
    console.log(data);
    return data;
}

export async function createPost(formData) {
    "use server";

    await connectToDB();

    const title = formData.get("title");
    const body = formData.get("body");
    const status = formData.get("status");

    const post = new Post({
        title,
        body,
        status,
    });

    await post.save();

    const data = {
        action: "createPost",
        success: true,
    };
    console.log(data);
    redirect(`/posts/${post.id}`);
}

export async function updatePost(formData) {
    "use server";

    await connectToDB();

    const id = formData.get("id");
    const title = formData.get("title");
    const body = formData.get("body");
    const status = formData.get("status");

    await Post.findByIdAndUpdate(id, {
        title,
        body,
        status,
    });

    const data = {
        action: "updatePost",
        success: true,
        postId: id,
    };
    console.log(data);
    redirect(`/posts/${id}`);
}

export async function deletePost(id) {
    "use server";

    await connectToDB();

    await Post.findByIdAndDelete(id);

    const data = {
        action: "deletePost",
        success: true,
        postId: id,
    };
    console.log(data);
    redirect("/");
}

export async function deleteComment(postId, commentId) {
    "use server";

    await connectToDB();

    await Comment.findByIdAndDelete(commentId);

    const data = {
        action: "deleteComment",
        success: true,
        commentId,
    };
    console.log(data);
    revalidatePath(`posts/${postId}`);
}
