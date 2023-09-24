"use client";

export default function DeletePostButton({ postId, deletePost }) {
    return <button onClick={async () => await deletePost(postId)}>Delete</button>;
}
