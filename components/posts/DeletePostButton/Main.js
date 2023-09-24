"use client";

export default function Main({ className, postId, deletePost }) {
    return (
        <button className={className} onClick={async () => await deletePost(postId)}>
            Delete
        </button>
    );
}
