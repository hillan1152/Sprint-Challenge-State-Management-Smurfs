import React, { useState, useEffect } from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';



const SmurfForm = ({ values, errors, touched, status }) => {
    let [input, setInput] = useState([]);
    useEffect(
        () => {
            status && setInput(input => [...input, status])
        },
        [status]
    );
    
    return(
        <div className="smurf-form">
            <Form> 
                <Field 
                    type= "text"
                    name= "name" 
                    placeholder= "Name"    
                />
                <Field 
                    type= "number"
                    name= "age" 
                    placeholder= "Age"    
                />
                <Field 
                    type= "text"
                    name= "height" 
                    placeholder= "Height"   
                />
                <button className="submit" type="submit">Submit</button>
            </Form>
            {input.map(input => (
                <ul key={input.id}>
                    <li>Name: {input.name}</li>
                    <li>Age: {input.age}</li>
                    <li>Height: {input.height}</li>
                </ul>
            ))}
        </div>
    );
};

const FormikForm = withFormik({
    mapPropsToValues({ name, age, height }) {
        return {
            name: name || "",
            age: age || "",
            height: height || ""
        };
    },
    handleSubmit(values, { setInput }){
        axios
            .post('http://localhost:3333/smurfs', values)
            .then(res => {
                setInput(res.data);
                console.log(res);
            })
            .catch(err => console.log('ERROR', err.res))
    }
})(SmurfForm);

export default FormikForm;

