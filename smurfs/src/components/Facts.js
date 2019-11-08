import React from 'react';


const Facts = props => {
    console.log('FACTS', props.fact)
    return(
        <div>
            <h2>Name: {props.fact.name}</h2>
            <p>Age: {props.fact.age}</p>
            <p>Height: {props.fact.height}</p>
        </div>
    )
}

export default Facts;