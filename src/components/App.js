import React from 'react';
import Navbar from './Navbar';
import UnderDev from './UnderDev';

import '../styles/app.css';

const App = () => (
    <div className="container">
        <div className="overlay"><UnderDev></UnderDev></div>
        <div className="navbar"></div>
        <div className="content-body">
            <h1>Hi !</h1>
        </div>
    </div>
)

export default App;