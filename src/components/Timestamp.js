import React from "react";

function TimeStamp(props) {
    return(
        <div>
            <div className="timestamp">{props.time}</div>
        </div>
    )
}

export default TimeStamp