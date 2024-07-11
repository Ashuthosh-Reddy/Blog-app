import React, { useState, useEffect } from 'react';
import axios from '../api';

const Postlist = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = async () => {
        try {
            const res = await axios.get('/api/posts');
            setPosts(res.data);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div>
            <h2>Blog Posts</h2>
            {posts.map(post => (
                <div key={post._id}>
                    <h3>{post.title}</h3>
                    <p>{post.content}</p>
                </div>
            ))}
        </div>
    );
};

export default Postlist;