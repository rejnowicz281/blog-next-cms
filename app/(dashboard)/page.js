import { getPosts } from "@actions/posts";
import DeletePostButton from "@components/posts/DeletePostButton";
import Link from "next/link";
import css from "./page.module.css";

export const dynamic = "force-dynamic";

export default async function Home() {
    const posts = await getPosts();

    return (
        <div class={css.container}>
            <h1>Posts</h1>
            {posts.map((post) => (
                <div className={css.post} key={post.id}>
                    <h2>{post.title}</h2>
                    <p className={css.status}>{post.status}</p>
                    <p>{post.body}</p>
                    <p className={css.date}>{post.createdAt.toString()}</p>
                    <div className={css["link-wrapper"]}>
                        <Link key={post.id} href={`posts/${post.id}`}>
                            View Post
                        </Link>
                    </div>
                    <div className={css["link-wrapper"]}>
                        <Link href={`/posts/${post.id}/edit`}>Edit Post</Link>
                    </div>
                    <DeletePostButton className={css.delete} postId={post.id} />
                </div>
            ))}
        </div>
    );
}
