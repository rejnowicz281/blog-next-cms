"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

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
        <div>
            <form onSubmit={handleSignIn}>
                {error && <div>Invalid Password</div>}
                <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Enter the password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Sign In</button>
            </form>
        </div>
    );
}
