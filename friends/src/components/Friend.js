import React from "react";

const Friend = (props) =>{
    return (
        <div classname="friend-card">
            <h3>{props.friend.name}</h3>
            <ul>
                <li>{props.friend.age}</li>
                <li>{props.friend.email}</li>
            </ul>
        </div>
    );
}

export default Friend;