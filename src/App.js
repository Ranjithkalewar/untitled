import React from "react";
import Test from "./Test";
class App extends React.Component {
    state ={
        name:"Ranjith",
        age:26,
        study:"Engineering",
        email:"ranjithkumarkalewar@yahoo.com",
        phone:96803087,
    }
    render (){
/*const App = () => {
    const [data,useData] = useState({
        name:"Ranjith",
        age:26,
        study:"Engineering",
        email:"ranjithkumarkalewar@yahoo.com",
        phone:96803087,
    })
    const name=data.name,age=data.age,study=data.study,email=data.email,phone=data.phone;*/
    return (
        <div>
            <center>
                <h2>
                    <Test name={this.state.name} age={this.state.age} study={this.state.study} email={this.state.email} phone={this.state.phone}/>
                </h2>
            </center>
        </div>
    )
    }
}
export default App
