import React from "react"
import './App.css'
import Img from "./Img";
const App = () => {
    const arr=[
        "http://docs.google.com/uc?export=open&id=19-Q9JSH3ZvC40lOlUttxf4wtPVm9ctIU",
        "http://docs.google.com/uc?export=open&id=1QB2q13sop1x86CbOf5c5NBY0geWhk2hZ",
        "http://docs.google.com/uc?export=open&id=1ARbwqW_uOLb4eCeWsyCJVZSYUIreXsrD",

    ]
    return (
        <div className='App'>
            {arr.map((item,index) => <Img key={index} src={item}/>)}
        </div>
    )
}
export default App;



