import Link from "next/link";

export default function DashboardLayout({ children }) {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/posts/new">New Post</Link>
                    </li>
                    <li>
                        <Link href="/logout">Log Out</Link>
                    </li>
                    <li>
                        <Link href="/login">Login</Link>
                    </li>
                </ul>
            </nav>
            {children}
        </>
    );
}
