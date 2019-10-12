import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'; 
import thunk from 'redux-thunk';

import SmurfFacts from './components/SmurfFacts'
import rootReducer from './reducer/reducer';


const store = createStore(rootReducer, applyMiddleware(thunk))

ReactDOM.render(
    <Provider store={store}>
        <SmurfFacts/>
    </Provider>,
document.getElementById("root"));
