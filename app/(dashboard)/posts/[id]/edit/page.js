import { getPost, updatePost } from "@actions/posts";
import PostForm from "@components/posts/PostForm";
import css from "./page.module.css";

export default async function EditPostPage({ params: { id } }) {
    const post = await getPost(id);

    return (
        <div className={css.container}>
            <h1>Edit Post {id}</h1>
            <PostForm
                action={updatePost}
                submitContent="Update Post"
                submittingContent="Updating Post..."
                post={post}
            />
        </div>
    );
}
