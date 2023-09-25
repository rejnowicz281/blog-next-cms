import { deleteComment } from "@actions/posts";
import Main from "./Main";

export default function DeleteCommentButton(props) {
    return <Main {...props} deleteComment={deleteComment} />;
}
