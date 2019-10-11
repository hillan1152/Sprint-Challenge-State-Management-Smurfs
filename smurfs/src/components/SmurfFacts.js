import React from 'react';
import { connect } from 'react-redux';


const SmurfFacts = (props) => {
    return(
        <div>
            
        </div>
    )
}

const mapStateToProps = state => {
    console.log(state)
    return {
        smurfs: state.smurfs
    }
}

export default connect(mapStateToProps)(SmurfFacts);