import SubmitButton from "@components/shared/SubmitButton";

export default function PostForm({ action, submitContent, submittingContent, post }) {
    return (
        <form action={action}>
            {post && <input type="hidden" name="id" value={post.id} />}
            <div>
                <label>Title</label>
                <input type="text" name="title" id="title" defaultValue={post?.title} />
            </div>
            <div>
                <label>Body</label>
                <textarea name="body" id="body" defaultValue={post?.body}></textarea>
            </div>
            <div>
                <label>Status</label>
                <select name="status" id="status" defaultValue={post?.status === "Public" ? "Public" : "Draft"}>
                    <option value="Draft">Draft</option>
                    <option value="Public">Public</option>
                </select>
            </div>
            <SubmitButton submitContent={submitContent} submittingContent={submittingContent} />
        </form>
    );
}
