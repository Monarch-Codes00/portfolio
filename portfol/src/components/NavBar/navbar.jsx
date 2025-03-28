import React, { useState } from 'react';
import './navbar.css';
import logo from '../../assets/logbg.png';
import contactImg from '../../assets/contact.png';
import { Link } from 'react-scroll';

import menu from '../../assets/menu.png';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    return (
        <nav className="navbar">
            <img src={logo} alt="Logo" className='logo'/>
            <div className="desktopMenu">
                <Link  to='intro' className="desktopMenuListItem">Home</Link>
                <Link  to='skills'  className="desktopMenuListItem">About</Link>
                <Link  to='works'  className="desktopMenuListItem">Portfolio</Link>
                <Link  to='clients'  className="desktopMenuListItem">Clients</Link>
            </div>
            <button className="desktopMenuBtn" onClick={() => {
                document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
            }}>
                Get Acquainted</button>
            
            <img src={menu} alt="Menu" className='mobMenu' onClick={()=>setShowMenu(!showMenu)}/>
            <div className="navMenu" style={{display: showMenu? 'flex':'none'}}>
                <Link  to='intro'  onClick={()=>setShowMenu(false)}>Home</Link>
                <Link  to='skills'  onClick={()=>setShowMenu(false)}>About</Link>
                <Link  to='works' onClick={()=>setShowMenu(false)}>Portfolio</Link>
                <Link  to='clients' onClick={()=>setShowMenu(false)}>Clients</Link>
                <Link  to='contact' onClick={()=>setShowMenu(false)}>Contact</Link>
            </div>
        </nav>
    )
}

export default Navbar;