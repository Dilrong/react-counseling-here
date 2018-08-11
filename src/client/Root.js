import React from 'react';
import { BrowserRouter as Rotuer } from 'react-router-dom';
import App from '../App';

export default function Root(){
    return(
        <Rotuer>
            <App/>
        </Rotuer>
    );
}