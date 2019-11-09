import React, { useState } from 'react';
import { connect } from 'react-redux';

// Actions
import { postSmurfs } from '../actions';

const Form = props => {
    const [input, setInput] = useState({
        name: '',
        age: '',
        height: ''
    });

    const handleChanges = e => {
        setInput({...input, [e.target.name]: e.target.value})
    }

    const handleSubmit = e => {
        e.preventDefault();
        props.postSmurfs(input)
    }

    return(
        <div className="daForm">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    onChange={handleChanges}
                    value={props.name}
                    placeholder="Name"
                />
                <input
                    type="number"
                    name="age"
                    onChange={handleChanges}
                    value={props.age}
                    placeholder="Age"
                />
                <input
                    type="text"
                    name="height"
                    onChange={handleChanges}
                    value={props.height}
                    placeholder="Height"
                />
            <button>Submit New Smurf</button>
            </form>
            {/* {input.map(input => (
                <ul key={input.id}>
                    <li>Name: {input.name}</li>
                    <li>Age: {input.age}</li>
                    <li>Height: {input.height}</li>
                </ul>
            ))} */}
        </div>
    );
};



const mapStateToProps = state => {
    console.log('MSTP FORM', state)
    return{
        state: state
    }
}

export default connect(mapStateToProps, { postSmurfs })(Form);