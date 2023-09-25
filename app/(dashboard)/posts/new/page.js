import { createPost } from "@actions/posts";
import PostForm from "@components/posts/PostForm";
import css from "./page.module.css";

export default function NewPostPage() {
    return (
        <div className={css.container}>
            <h1>New Post</h1>
            <PostForm action={createPost} submitContent="Create Post" submittingContent="Creating Post..." />
        </div>
    );
}
