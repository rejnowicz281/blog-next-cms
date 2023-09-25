import authOptions from "@utils/authOptions";
import { getServerSession } from "next-auth";
import Link from "next/link";
import css from "./index.module.css";

export default async function DashboardNavbar() {
    const session = await getServerSession(authOptions);

    return (
        <nav className={css.nav}>
            <div className={css.links}>
                <Link href="/">Home</Link>
                <Link href="/posts/new">New Post</Link>
                <Link href="/logout">Log Out</Link>
                <Link href="/login">Login Page</Link>
            </div>
            <div class={css.welcome}>Welcome, {session.user.name}</div>
        </nav>
    );
}
