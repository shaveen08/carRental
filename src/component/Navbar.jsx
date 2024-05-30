import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles/styles.css';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [dropdown, setDropDown] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);
    const toggleDropDown = () => setDropDown(!dropdown);

    // const navList = ['Home', 'Services', 'About us'];

    return (
        <div>
            <nav className="navbar">
                <div className="menu" onClick={toggleMenu}>
                    <span id="menuIcon">
                        {menuOpen ? (
                            <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M6.29 6.71L12 12.41l5.71-5.7a.996.996 0 1 1 1.41 1.41l-6.12 6.11c-.39.39-1.02.39-1.41 0L4.88 8.12a.996.996 0 0 1 1.41-1.41zm11.41 10.58L12 13.59l-5.7 5.7a.996.996 0 1 1-1.41-1.41l6.12-6.11c.39-.39 1.02-.39 1.41 0l6.12 6.1c.39.39 1.02.39 1.41 0a.996.996 0 0 1 0 1.41z"/></svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" height="22" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>
                        )}
                    </span>
                </div>
                <div className="brand-name">
                    <Link to="/"><h1>Brand Name</h1></Link>
                </div>
                <div>
                    <ul className={`ul-list ${menuOpen ? 'open' : ''}`}>
                        <li><Link to="/">Home</Link></li>
                        <li className='dropdown'>
                            <Link to="">Services</Link>
                            <ul className='dropdown-list content'>
                            <li><Link to="">Long term car rental</Link></li>
                            <li><Link to="">additional cover</Link></li>
                            <li><Link to="">car hire services</Link></li>
                            <li><Link to="">one-way car hire</Link></li>
                            <li><Link to="">help & faqs</Link></li>
                            </ul>
                        </li>
                        <li><Link to="/about">About us</Link></li>
                    </ul>
                </div>
                <div className="button">
                    <Button text="Sign in" />
                    <Button text="Sign up" />
                </div>
            </nav>
        </div>
    );
};

const Button = ({ text }) => <button type='button'>{text}</button>;

export default Navbar;
