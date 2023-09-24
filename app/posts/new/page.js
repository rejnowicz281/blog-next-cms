import { updatePost } from "@actions/posts";
import PostForm from "@components/posts/PostForm";

export default function NewPostPage() {
    return (
        <div>
            <h1>New Post</h1>
            <PostForm action={updatePost} submitContent="Create Post" submittingContent="Creating Post..." />
        </div>
    );
}
