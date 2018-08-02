import React from 'react';
import './person.css'

const person = (props)=>{
    return (
        <div className="person">
            <p onClick={props.click}>I'am {props.name} and I am {props.age}
                {props.children} </p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    )
};

export default person;

