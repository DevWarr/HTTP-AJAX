import React from "react";
import "./FriendList.scss";

const Friend = (props) =>{
    return (
        <div className="friend-card">
            <h3>
            <span className="hover" onClick={props.update}>UPDATE</span>
                {props.friend.name}
            <span className="hover" onClick={props.delete}>DELETE</span>
            </h3>
            <ul>
                <li>AGE:   {props.friend.age}</li>
                <li>EMAIL: {props.friend.email}</li>
            </ul>
        </div>
    );
}

export default Friend;