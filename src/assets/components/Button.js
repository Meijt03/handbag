import React from "react";

function Button({type,click,text}){
    return (

    <button className="click-button"
            type={type}
            onClick={click}
            >
            {text}

    </button>
)
}

export default Button;