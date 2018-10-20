import React from 'react';

// functional component
const User = (props) => {
    return (  
    <div>
        <h2>Name: {props.children}</h2>
        <h3>Age: {props.age}</h3>
    </div>
    
)}

export default User;
