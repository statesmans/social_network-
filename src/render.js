
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import App from './App';
import state from "./redux/state"
import reportWebVitals from './reportWebVitals';



export let renderEntireTree = (state) => {
    
    
        ReactDOM.render(
            <BrowserRouter>
                <App state={state}/>
            </BrowserRouter>
        , document.getElementById('root'));
     

}
 
reportWebVitals();
