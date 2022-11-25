import React, { useEffect, useState } from 'react'

const Posts = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3004/posts')
        .then(res => res.json())
        .then(data => setPosts(data))
    }, [])
  return posts.map(post => (
        <div key={post.id}>
            <h2>{post.title}</h2>
            <img width={300} height={300} src={post.image}></img>
            <h6>{post.author}</h6>
            <p>{post.content}</p>
        </div>
    ))
}

export default Posts