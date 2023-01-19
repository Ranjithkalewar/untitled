import React from "react"

const Test = (props) => {
        return(
            <div>
                <center>
                    <h2>
                        hello my name is {props.name} and my age is {props.age}. I have completed my {props.study} form jawaharlal Engineering college. My email address is {props.email} and my phone number is {props.phone}.
                    </h2>
                </center>
            </div>
        )
}
export default Test;