import React from 'react';
import { Link } from 'react-router-dom';

const SP = ({post}) => { 
    const {id,body,title}=post
    return (
        <div>
            <h5>Post Number :{id}</h5>
            <h4>Post title :{title}</h4>
            <p><Link to={`/postDetails/${id}`}>Show Details</Link></p>
        </div>
    );
};

export default SP;