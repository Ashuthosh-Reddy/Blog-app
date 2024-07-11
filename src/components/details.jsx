
import React, { useState, useEffect } from 'react';
import axios from '../api';

const PostDetail = ({ match }) => {
    const [post, setPost] = useState(null);
    const postId = match.params.id;

    useEffect(() => {
        fetchPost();
    }, []);

    const fetchPost = async () => {
        try {
            const response = await axios.get(`/api/posts/${postId}`);
            setPost(response.data);
        } catch (error) {
            console.error('Error fetching post:', error);
        }
    };

    return (
        <div>
            {post ? (
                <div>
                    <h2>{post.title}</h2>
                    <p>{post.content}</p>
                </div>
            ) : (
                <p>Loading post...</p>
            )}
        </div>
    );
};

export default PostDetail;