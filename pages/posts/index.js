import Link from "next/link";

const Posts = ({ posts }) => {
    return (
        <>
            {posts.map(post => (
                <div key={post.id}>
                    <Link href={`/posts/${post.id}`} >
                        <h1>{post.title}</h1>
                    </Link>
                    <p>{post.body}</p>
                    <hr />
                </div>

            ))}
            <div>Posts</div>
        </>
    )
}

export async function getStaticProps() {

    const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
    // const res = await fetch('http://localhost:3000/api/posts');
    const posts = await res.json();

    return {
        props: {
            posts
        }
    }
}


export default Posts