import React from 'react';


const Facts = props => {
    console.log('FACTS', props)
    return(
        <div>
            <p>{props.name}</p>
        </div>
    )
}

export default Facts;