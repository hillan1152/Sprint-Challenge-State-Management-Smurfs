import React, { useEffect } from 'react';
import { connect } from 'react-redux';

// Actions
import { fetchSmurfs } from '../actions';

// Components
import Facts from './Facts';

const SmurfCard = props => {
    useEffect(() => {
        props.fetchSmurfs();
    }, []);

    if(props.isFetching) {
        return <h2>Loading...</h2>
    }

    return (
        <div>
            {console.log(props)}
            {props.smurfs.map(fact => {
              return <Facts key={fact.id} fact={fact}/>
            })} 
        </div>
    )
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs,
        isLoading: state.isLoading,
        error: state.error
    }
}

export default connect(mapStateToProps, {fetchSmurfs})(SmurfCard)