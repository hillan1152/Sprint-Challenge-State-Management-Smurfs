import React, { useState, useEffect } from 'react';
import { withFormik, Form, Field } from 'formik';
import axios from 'axios';
import { connect } from 'react-redux';


const SmurfForm = (props, { values, errors, touched, status }) => {
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
            .then(res => setInput(res.smurfs))
            .catch(err => console.log('ERROR', err.res))
    }
})(SmurfForm);

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs
    }
}
export default connect(mapStateToProps, {})(FormikForm);





// import React, { useState, useEffect } from 'react';
// import axios from 'axios'


// import { postSmurfs } from '../actions';

// const Form = ({status}) => {
//     const [input, setInput] = useState('');

//     useEffect(
//         () => {
//             status && setInput(input => [...input, status])
//         },
//         [status]
//     );

//     const handleChanges = e => {
//         setInput(e.target.name)
//     }

//     const handleSubmit = value => {
//         axios
//             .post('http://localhost:3333/smurfs', value)
//             .then(res => {
//                 setInput(res.data);
//                 console.log(res);
//             })
//             .catch(err => console.log('ERROR', err.res))
//     }

//     return(
//         <div>
//             <form onSubmit={handleSubmit}>
//                 <input
//                     type="text"
//                     name="name"
//                     onChange={handleChanges}
//                     placeholder="Name"
//                 />
//                 <input
//                     type="number"
//                     name="age"
//                     onChange={handleChanges}
//                     placeholder="Age"
//                 />
//                 <input
//                     type="text"
//                     name="height"
//                     onChange={handleChanges}
//                     placeholder="Height"
//                 />
//             <button>Submit</button>
//             </form>
//             {input.map(input => (
//                 <ul key={input.id}>
//                     <li>Name: {input.name}</li>
//                     <li>Age: {input.age}</li>
//                     <li>Height: {input.height}</li>
//                 </ul>
//             ))}
//         </div>
//     )
// }



// export default Form;