import { getPost, getPostComments } from "@actions/posts";
import DeleteCommentButton from "@components/posts/DeleteCommentButton";
import DeletePostButton from "@components/posts/DeletePostButton";
import SetStatusButton from "@components/posts/SetStatusButton";
import Link from "next/link";
import { redirect } from "next/navigation";

async function PostPage({ params: { id } }) {
    const post = await getPost(id);
    if (post === null) redirect("/");

    const comments = await getPostComments(id);

    return (
        <div>
            <h1>Post {id}</h1>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <p>{post.status}</p>
            <SetStatusButton postId={id} status={post.status === "Draft" ? "Public" : "Draft"} />
            <div>
                <Link href={`/posts/${id}/edit`}>Edit</Link>
            </div>
            <DeletePostButton postId={id} />
            <p>{post.createdAt.toString()}</p>
            <hr />
            <h3>Comments</h3>
            {comments.map((comment) => (
                <div key={comment.id}>
                    <p>{comment.author}</p>
                    <p>{comment.body}</p>
                    <p>{comment.createdAt.toString()}</p>
                    <DeleteCommentButton postId={id} commentId={comment.id} />
                </div>
            ))}
        </div>
    );
}

export default PostPage;
