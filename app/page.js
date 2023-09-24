import { getPosts } from "@actions/posts";
import Link from "next/link";

export default async function Home() {
    const posts = await getPosts();

    return (
        <div>
            <h1>Posts</h1>
            {posts.map((post) => (
                <div>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                    <p>{post.status}</p>
                    <p>{post.createdAt.toString()}</p>
                    <Link key={post.id} href={`posts/${post.id}`}>
                        View Post
                    </Link>
                    <div>
                        <Link href={`/posts/${post.id}/edit`}>Edit Post</Link>
                    </div>
                    <hr />
                </div>
            ))}
        </div>
    );
}
