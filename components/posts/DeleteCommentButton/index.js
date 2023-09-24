import { deleteComment } from "@actions/posts";
import Main from "./Main";

export default function DeleteCommentButton({ className, postId, commentId }) {
    return <Main className={className} deleteComment={deleteComment} postId={postId} commentId={commentId} />;
}
