import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { HashRouter } from 'react-router-dom';
import './index.css'

const appJsx = (
    <HashRouter>
        <App />
    </HashRouter>
)

ReactDOM.render(appJsx, document.getElementById('root'));
