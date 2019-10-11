import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Fact from './Fact';

import { fetchFacts } from '../actions';

const SmurfFacts = (props) => {
    useEffect(() => {
        props.fetchFacts();
    }, []);

    if(props.isFetching) {
        return <h2>Loading...</h2>
    }

    return(
        <div>
            {props.error && <p>{props.error}</p>}
            {console.log('made it here div', props)}
            {props.smurfs.map(fact => {
               return <Fact key={fact.id} fact={fact}/>
            })}
        </div>
    )
}

const mapStateToProps = state => {
    console.log(state)
    return {
        smurfs: state.smurfs,
        isFetching: state.isFetching,
        error: state.error
    }
}

export default connect(mapStateToProps, {fetchFacts})(SmurfFacts);