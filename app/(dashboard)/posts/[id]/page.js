import { getPost, getPostComments } from "@actions/posts";
import DeleteCommentButton from "@components/posts/DeleteCommentButton";
import DeletePostButton from "@components/posts/DeletePostButton";
import SetStatusButton from "@components/posts/SetStatusButton";
import Link from "next/link";
import { redirect } from "next/navigation";
import css from "./page.module.css";

async function PostPage({ params: { id } }) {
    const post = await getPost(id);
    if (post === null) redirect("/");

    const comments = await getPostComments(id);

    return (
        <div className={css.container}>
            <h1>Post {id}</h1>
            <h2>{post.title}</h2>
            <p className={css.status}>{post.status}</p>
            <p>{post.body}</p>
            <p className={css.date}>{post.createdAt.toString()}</p>
            <div className={css["link-wrapper"]}>
                <Link href={`/posts/${id}/edit`}>Edit</Link>
            </div>
            <SetStatusButton
                className={css["status-button"]}
                postId={id}
                status={post.status === "Draft" ? "Public" : "Draft"}
            />
            <DeletePostButton className={css.delete} postId={id} />
            <h3>Comments</h3>
            {comments.map((comment) => (
                <div key={comment.id}>
                    <p className={css.author}>{comment.author}</p>
                    <p>{comment.body}</p>
                    <p className={css.date}>{comment.createdAt.toString()}</p>
                    <DeleteCommentButton className={css.delete} postId={id} commentId={comment.id} />
                </div>
            ))}
        </div>
    );
}

export default PostPage;
