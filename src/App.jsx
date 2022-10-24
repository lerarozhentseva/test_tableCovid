import React from 'react';
import RenderedPosts from "./components/RenderedPosts.jsx";

function App() {
    return (
        <div className="container mt-5">
            <h3 className="text-primary">Table with posts from JsonPlaceHolder</h3>
            <RenderedPosts/>
        </div>
    );
};

export default App;