import React, { useEffect, useState } from 'react'

const Posts = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3004/posts')
        .then(res => res.json())
        .then(data => setPosts(data))
    }, [])
  return posts.map(post => (
        <div key={post.id} 
        // @ts-ignore
        style={styles.container}>
            <img style={styles.image} alt={post.title} src={post.image}></img>
            <div 
            // @ts-ignore
            style={styles.textsContainer}>
                <h2>{post.title}</h2>
                {/* <h6>{post.author}</h6> */}
                <p>{post.content}</p>
            </div>
        </div>
    ))
}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'row',
        padding: 10,
    },
    textsContainer: {
        fisplay: 'flex',
        flexDirection: 'column',
        margin: 10,
        gap: 10
    },
    image: {
        width: 100,
        height: 150
    }
}

export default Posts