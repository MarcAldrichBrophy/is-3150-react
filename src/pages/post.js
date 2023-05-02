import React from 'react';
import './styles/outlyingcss/style.css';
import {useNavigate} from 'react-router-dom';

function PostPage() {
    const navigate = useNavigate();

    return (
      <div className="outlyDiv">
        <div id="container">
            <h1>Item Posted</h1>
            <button id="backButton" onClick={() => navigate(-1)} >Go Back</button>
        </div>
      </div>
    );
}
export default PostPage;