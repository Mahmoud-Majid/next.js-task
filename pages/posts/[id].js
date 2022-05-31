import React from 'react'

const Post1 = ({ post }) => {
    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </div>
    )
}

export async function getStaticPaths() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
    const posts = await res.json();

    const paths = posts.map(post => ({
        params: { id: post.id.toString() }
    }))

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps(context) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`);
    const post = await res.json();

    return {
        props: {
            post
        }
    }
}

export default Post1