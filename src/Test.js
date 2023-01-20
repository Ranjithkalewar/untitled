import React from "react"

const Test = (props) => {
        return(
            <div>
                <center>
                    <h2>
                        Hello my name is {props.name} and my age is {props.age}. I have completed my {props.study} from Jawaharlal Nehru Engineering college. My email address is {props.email} and my phone number is +47 {props.phone}.
                    </h2>
                </center>
            </div>
        )
}
export default Test;