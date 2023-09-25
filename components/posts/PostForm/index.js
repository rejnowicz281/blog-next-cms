"use client";

import InputErrors from "@components/shared/InputErrors";
import SubmitButton from "@components/shared/SubmitButton";
import { useState } from "react";
import css from "./index.module.css";

export default function PostForm({ action, submitContent, submittingContent, post }) {
    const [errors, setErrors] = useState({});

    async function handleAction(data) {
        const res = await action(data);

        if (!res?.success) setErrors(res.errors);
    }

    return (
        <form action={handleAction}>
            {post && <input type="hidden" name="id" value={post.id} />}
            <div className={css.field}>
                <label for="title">Title</label>
                <input type="text" name="title" id="title" defaultValue={post?.title} />
                {errors?.title && <InputErrors errors={errors.title} className={css.error} />}
            </div>
            <div className={css.field}>
                <label for="body">Body</label>
                <textarea name="body" id="body" defaultValue={post?.body}></textarea>
                {errors?.body && <InputErrors errors={errors.body} className={css.error} />}
            </div>
            <div className={css.field}>
                <label for="status">Status</label>
                <select name="status" id="status" defaultValue={post?.status === "Public" ? "Public" : "Draft"}>
                    <option value="Draft">Draft</option>
                    <option value="Public">Public</option>
                </select>
                {errors?.status && <InputErrors errors={errors.status} className={css.error} />}
            </div>
            <SubmitButton className={css.submit} submitContent={submitContent} submittingContent={submittingContent} />
        </form>
    );
}
