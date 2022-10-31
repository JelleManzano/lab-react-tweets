import React from "react";

function ProfileImage(props) {
    return (
        <div>
            <img src={props.image} className="profile" alt="profile-img" />
        </div>
    )
}

export default ProfileImage