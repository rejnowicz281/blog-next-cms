"use client";

export default function SetStatusButton({ postId, setPostStatus, status }) {
    return <button onClick={() => setPostStatus(postId, status)}>Set as {status}</button>;
}
