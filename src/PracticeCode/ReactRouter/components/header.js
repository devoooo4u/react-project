import React from 'react';
import {Link} from 'react-router-dom';

const Header = () =>{
    return(
        <div>
            <ul className="router-header">
                <li><Link to="/">Home</Link>&nbsp;&nbsp;|&nbsp;&nbsp;</li>
                <li><Link to="/about">About</Link>&nbsp;&nbsp;|&nbsp;&nbsp;</li>
                <li><Link to="/inbox">Inbox</Link>&nbsp;&nbsp;|&nbsp;&nbsp;</li>
            </ul>
        </div>
    );
};

export default Header;