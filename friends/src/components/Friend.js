import React from "react";
import "./FriendList.scss";

const Friend = (props) =>{
    return (
        <div className="friend-card">
            <h3>{props.friend.name}</h3>
            <ul>
                <li>AGE:   {props.friend.age}</li>
                <li>EMAIL: {props.friend.email}</li>
            </ul>
        </div>
    );
}

export default Friend;