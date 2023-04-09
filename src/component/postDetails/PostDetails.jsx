import React from 'react';
import { useLoaderData, useNavigate, useNavigation } from 'react-router-dom';

const PostDetails = () => { 
    const details=useLoaderData() 
    const navigation=useNavigate()
    const back=()=>{ 
      navigation(-1);
    }
    return (
        <div>
            <h1>This is post details</h1> 
            <h4>post ID:{details.id}</h4> 
            <h1>{details.body}</h1> 
            <button onClick={back}>Back</button>
        </div>
    );
};

export default PostDetails;