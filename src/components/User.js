import React from "react";

function User(props) {
    return(
        <div>
            <div className="user">
                <span className="name">{props.userData.name}</span>
                <span className="handle">{props.userData.handle}</span>
            </div>
        </div>
    )
}

export default User