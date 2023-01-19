import React,{useState} from "react";
import Test from "./Test";
const App = () => {
    const [data,useData] = useState({
        name:"Ranjith",
        age:26,
        study:"Engineering",
        email:"ranjithkumarkalewar@yahoo.com",
        phone:96803087,
    })
    const name=data.name,age=data.age,study=data.study,email=data.email,phone=data.phone;
    return (
        <div>
            <center>
                <h2>
                    <Test name={name} age={age} study={study} email={email} phone={phone}/>
                </h2>
            </center>
        </div>
    )
}
export default App