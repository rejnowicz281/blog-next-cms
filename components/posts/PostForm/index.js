"use client";

import InputErrors from "@components/shared/InputErrors";
import SubmitButton from "@components/shared/SubmitButton";
import { useState } from "react";

export default function PostForm({ action, submitContent, submittingContent, post }) {
    const [errors, setErrors] = useState({});

    async function handleAction(data) {
        const res = await action(data);

        if (!res?.success) setErrors(res.errors);
    }

    return (
        <form action={handleAction}>
            {post && <input type="hidden" name="id" value={post.id} />}
            <div>
                <label>Title</label>
                <input type="text" name="title" id="title" defaultValue={post?.title} />
                {errors?.title && <InputErrors errors={errors.title} />}
            </div>
            <div>
                <label>Body</label>
                <textarea name="body" id="body" defaultValue={post?.body}></textarea>
                {errors?.body && <InputErrors errors={errors.body} />}
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
