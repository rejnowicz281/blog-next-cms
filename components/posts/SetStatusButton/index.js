import { setPostStatus } from "@actions/posts";
import Main from "./Main";

export default function SetStatusButton({ className, postId, status }) {
    return <Main className={className} postId={postId} setPostStatus={setPostStatus} status={status} />;
}
