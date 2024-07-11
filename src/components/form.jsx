import React, { useState, useEffect } from 'react';
import axios from '../api';

const Postform = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSumbit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/api/posts', { title, content });
            setTitle('');
            setContent('');
            alert('Post created');
        } catch (err) {
            console.log(err);
            alert('Failed to create');
        }
    };

    return (
        <div>
            <h2>Create New Post</h2>
            <form onSubmit={handleSumbit}>
                <input type='text' value={title} onChange={(e) => setTitle(e.target.value)} placeholder='Title' required>
                    <textarea value={content} onChange={(e) => setContent(e.target.value)} placeholder='Content' required>
                    </textarea>
                </input>
                <button type='submit'>Create Post</button>
            </form>
        </div>
    );
};

export default Postform;