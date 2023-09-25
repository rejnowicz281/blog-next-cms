import { deletePost } from "@actions/posts";
import Main from "./Main";

export default function DeletePostButton(props) {
    return <Main {...props} deletePost={deletePost} />;
}
