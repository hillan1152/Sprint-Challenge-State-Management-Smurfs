import React, { Component } from "react";
import { connect } from 'react-redux'
import "./App.css";

// Components
import SmurfCard from './SmurfCard';
import FormikForm from './Form';

function App() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <FormikForm/>
        <SmurfCard/>
      </div>
    );
}

const mapStateToProps = state => {
  
}

export default connect(mapStateToProps, {})(App);
