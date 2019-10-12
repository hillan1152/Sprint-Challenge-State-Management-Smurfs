import React from 'react';

const Fact = (props) => {
    return (
        <div>
            <p>{props.fact.name}</p>
            <p>{props.fact.age}</p>
            <p>{props.fact.height}</p>
        </div>
    )
}

export default Fact;