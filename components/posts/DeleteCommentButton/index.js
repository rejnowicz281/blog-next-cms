"use client";

export default function DeleteCommentButton({ className, deleteComment, postId, commentId }) {
    return (
        <button className={className} onClick={async () => await deleteComment(postId, commentId)}>
            Delete
        </button>
    );
}
