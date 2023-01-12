import React from "react";
export const Img = (props) => {
    return (
        <div style={{display:"inline"}}>
            <img src={props.src} height="150" width="150" alt=""/>
        </div>
    )
}
export default Img;
