"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import css from "./page.module.css";

export default function LoginPage() {
    const router = useRouter();
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);

    async function handleSignIn(e) {
        e.preventDefault();
        const res = await signIn("credentials", { redirect: false, password });

        if (res.error) setError(true);
        else {
            router.push("/");
        }
    }

    return (
        <div className={css.container}>
            <form onSubmit={handleSignIn}>
                {error && <div className={css.error}>Invalid Password</div>}
                <input
                    className={css.input}
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button className={css.submit} type="submit">
                    Login
                </button>
            </form>
        </div>
    );
}
