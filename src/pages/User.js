import Profile from "../features/UserProfile";
import React from "react";
import { Link } from "react-router-dom";

function User(){
    return (
        <div>
            <h1>UserProfile</h1>
            <Profile />
            <p>UserProfileUserProfileUserProfileUserProfile</p>
            <Link to='/'>戻る</Link>
        </div>
    );
};

export default User;