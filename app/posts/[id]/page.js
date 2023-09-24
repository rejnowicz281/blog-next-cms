import { deletePost, getPost, getPostComments, setPostStatus } from "@actions/posts";
import DeletePostButton from "@components/posts/DeletePostButton";
import SetStatusButton from "@components/posts/SetStatusButton";
import Link from "next/link";

async function PostPage({ params: { id } }) {
    const post = await getPost(id);
    const comments = await getPostComments(id);

    return (
        <div>
            <h1>Post {id}</h1>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <p>{post.status}</p>
            <SetStatusButton
                postId={id}
                setPostStatus={setPostStatus}
                status={post.status === "Draft" ? "Public" : "Draft"}
            />
            <div>
                <Link href={`/posts/${id}/edit`}>Edit</Link>
            </div>
            <DeletePostButton deletePost={deletePost} postId={id} />
            <p>{post.createdAt.toString()}</p>
            <hr />
            <h3>Comments</h3>
            {comments.map((comment) => (
                <div key={comment.id}>
                    <p>{comment.author}</p>
                    <p>{comment.body}</p>
                    <p>{comment.createdAt.toString()}</p>
                </div>
            ))}
        </div>
    );
}

export default PostPage;
