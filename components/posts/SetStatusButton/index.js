import { setPostStatus } from "@actions/posts";
import Main from "./Main";

export default function SetStatusButton(props) {
    return <Main {...props} setPostStatus={setPostStatus} />;
}
