"use client";

import { signOut } from "next-auth/react";

export default function SignOutPage() {
    return (
        <div>
            <h1>Are you sure you want to logout?</h1>
            <button onClick={signOut}>Log Out</button>
        </div>
    );
}
