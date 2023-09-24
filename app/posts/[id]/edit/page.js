import { createPost, getPost } from "@actions/posts";
import PostForm from "@components/posts/PostForm";

export default async function EditPostPage({ params: { id } }) {
    const post = await getPost(id);

    return (
        <div>
            <h1>Edit Post {id}</h1>
            <PostForm
                action={createPost}
                submitContent="Update Post"
                submittingContent="Updating Post..."
                post={post}
            />
        </div>
    );
}
