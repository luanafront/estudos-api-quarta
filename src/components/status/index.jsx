import React from "react";
import "./index.css"

const Status = ({condition}) => {
    return (
        <div className={condition ? "alive": "death" }>

        </div>
    )
}


export default Status