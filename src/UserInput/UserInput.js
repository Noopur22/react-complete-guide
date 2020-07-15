import React from 'react'
import './UserInput.css'
const userInput=(props)=>{
    return(
        <div className="UserInput">
            <p>Enter name</p>
            <input type="text" onChange={props.changed} value="Noopur"/>
        </div>
    )
}

export default userInput;