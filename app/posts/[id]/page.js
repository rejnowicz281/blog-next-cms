import { getPost, getPostComments } from "@actions/posts";

async function PostPage({ params: { id } }) {
    const post = await getPost(id);
    const comments = await getPostComments(id);

    return (
        <div>
            <h1>Post {id}</h1>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <p>{post.status}</p>
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
