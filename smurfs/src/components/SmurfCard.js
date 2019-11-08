import React, { useEffect } from 'react';
import { connect } from 'react-redux';

// Actions
import { fetchSmurfs } from '../actions';

// Components
import Facts from './Facts';

const SmurfCard = props => {
    console.log(props.name)
    useEffect(() => {
        props.fetchSmurfs();
    }, []);
    return (
        <div>
            <Facts />
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

export default connect(mapStateToProps, { fetchSmurfs })(SmurfCard)