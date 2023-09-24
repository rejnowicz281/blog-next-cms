"use client";

import { experimental_useFormStatus as useFormStatus } from "react-dom";

export default function SubmitButton({ className, submitContent, submittingContent }) {
    const { pending } = useFormStatus();

    return (
        <button type="submit" disabled={pending} className={className}>
            {pending ? submittingContent : submitContent}
        </button>
    );
}
