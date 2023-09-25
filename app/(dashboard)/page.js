import { getPosts } from "@actions/posts";
import DeletePostButton from "@components/posts/DeletePostButton";
import authOptions from "@utils/authOptions";
import { getServerSession } from "next-auth";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function Home() {
    const session = await getServerSession(authOptions);
    const posts = await getPosts();

    return (
        <div>
            <div>Welcome, {session.user.name}</div>
            <h1>Posts</h1>
            {posts.map((post) => (
                <div key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                    <p>{post.createdAt.toString()}</p>
                    <p>{post.status}</p>
                    <div>
                        <Link key={post.id} href={`posts/${post.id}`}>
                            View Post
                        </Link>
                    </div>
                    <div>
                        <Link href={`/posts/${post.id}/edit`}>Edit Post</Link>
                    </div>
                    <DeletePostButton postId={post.id} />
                    <hr />
                </div>
            ))}
        </div>
    );
}
