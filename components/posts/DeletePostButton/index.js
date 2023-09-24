import { deletePost } from "@actions/posts";
import Main from "./Main";

export default function DeletePostButton({ postId, className }) {
    return <Main className={className} postId={postId} deletePost={deletePost} />;
}
