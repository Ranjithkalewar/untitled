import React from "react"

const Test = (props) => {
        return (
            <div>
                <center>
                    <h2>
                      My name is {props.name} and im {props.age} years old
                    </h2>
                </center>
            </div>
        )
}
export default Test;