import React from "react";
import FriendUpdateable from "../FriendUpdateable/FriendUpdateable";
import "./FriendList.scss";

const FriendList = props => {

    return (
        <div className="main-container">
            <h1>The Friend Database</h1>

            <div className="friend-container">
                {props.friendsArray.map(friendObj => {
                    return  <FriendUpdateable
                                friend=   {friendObj} 
                                key=      {friendObj.id} 
                                delete=   {props.delete}
                                submit=   {props.submit}
                            />
                })}
            </div> {/* friend-container */}

        </div>  /* main-container */
    );
}


export default FriendList;