"use client";

export default function Main({ className, postId, setPostStatus, status }) {
    return (
        <button className={className} onClick={() => setPostStatus(postId, status)}>
            Set as {status}
        </button>
    );
}
