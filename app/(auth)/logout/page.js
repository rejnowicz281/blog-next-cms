"use client";

import { signOut } from "next-auth/react";
import css from "./page.module.css";

export default function SignOutPage() {
    return (
        <div className={css.container}>
            <h1>Are you sure you want to logout?</h1>
            <button className={css.button} onClick={signOut}>
                Log Out
            </button>
        </div>
    );
}
