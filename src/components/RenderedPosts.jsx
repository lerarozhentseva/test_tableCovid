import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Post from './Post.jsx';
import {getPosts} from '../redux/actions.js';

export default function RenderedPosts() {
    const dispatch = useDispatch();
    const posts = useSelector(state => state.posts.renderedPosts);

    if (!posts.length) {
        return (
            <button type="button" className="btn btn-success" onClick={() => dispatch(getPosts())}
            >Download Posts</button>
        )
    }
    return posts.map(post => <Post post={post} key={post.id}/>)
};
