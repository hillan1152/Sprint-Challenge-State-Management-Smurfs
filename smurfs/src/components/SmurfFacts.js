import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Fact from './Fact';
import  { Form } from './Form'

import { fetchFacts, useFacts } from '../actions';

const SmurfFacts = (props) => {
    useEffect(() => {
        props.fetchFacts();
        props.useFacts();
    }, []);

    if(props.isFetching) {
        return <h2>Loading...</h2>
    }

    return(
        <div>
            <Form/>
            {props.error && <p>{props.error}</p>}
            {props.smurfs.map(fact => {
               return <Fact key={fact.id} fact={fact}/>
            })}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs,
        isFetching: state.isFetching,
        error: state.error
    }
}

export default connect(mapStateToProps, {fetchFacts, useFacts, Form})(SmurfFacts);