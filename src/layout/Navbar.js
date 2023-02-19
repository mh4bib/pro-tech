import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <p>this is navbar</p>
            <ul className=''>
                <li className='inline ml-3'><Link to={'/'}>Home</Link></li>
                <li className='inline ml-3'><Link to={'/about'}>About</Link></li>
            </ul>
        </div>
    );
};

export default Navbar;