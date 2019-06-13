import React from "react";
import "./Friend.scss";

const Friend = (props) =>{
    return (
        <div className="friend-card">
            <h3>
            <span className="hover" onClick={props.update}>UPDATE</span>
                {props.friend.name}
            <span className="hover" onClick={() => props.delete(props.friend.id)}>DELETE</span>
            </h3>
            <ul>
                <li>AGE:   {props.friend.age}</li>
                <li>EMAIL: {props.friend.email}</li>
            </ul>
        </div>
    );
}

export default Friend;