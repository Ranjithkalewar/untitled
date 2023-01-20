import React from "react"
class Test extends React.Component {
    render() {
        /*const Test = (props) => {*/
        return (
            <div>
                <center>
                    <h2>
                        Hello my name is {this.props.name} and my age is {this.props.age}. I have completed my {this.props.study} from
                        Jawaharlal Nehru Engineering college. My email address is {this.props.email} and my phone number is
                        +47 {this.props.phone}.
                    </h2>
                </center>
            </div>
        )
    }
}
export default Test;