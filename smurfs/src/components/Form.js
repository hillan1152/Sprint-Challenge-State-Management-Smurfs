import React, { useState, useEffect } from 'react';
import { useFacts } from '../actions';


export const Form = () => {
    let [input, setInput] = useState({
        name: '',
        age: '',
        height: '',
    });
    
    

    const handleSubmit = e => {
        e.preventDefault();
        
    }

    const handleChange = e => {
        setInput({ ...input, [e.target.name]: e.target.value, id: Date.now()  });
      };


    return(
        
        <form onSubmit={e => handleSubmit(e)}> 
            <input 
                type= "text"
                name= "name" 
                placeholder= "Name" 
                onChange= {e => handleChange(e)}  
            />
            <input 
                type= "number"
                name= "age" 
                placeholder= "Age" 
                onChange= {e => handleChange(e)}  
            />
            <input 
                type= "text"
                name= "height" 
                placeholder= "Height" 
                onChange= {e => handleChange(e)}  
            />
            <button>Submit</button>
        </form>
    )
}

