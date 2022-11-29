import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Index() {
    const [mobileMenu, setMobileMenu] = useState(false)
    return (
        <div className="headerContainer">
            <div className='logoContainer'>
                <img src={require('../../assets/mainlogo.png')} className='logo' />
            </div>

            <div className='menuContainer'>
                <div className='menuToggle' onClick={() => setMobileMenu(!mobileMenu)}>
                    <div className='menuToggleLine'></div>
                    <div className='menuToggleLine'></div>
                    <div className='menuToggleLine'></div>
                </div>
                <ul className={`menu ${mobileMenu == false ? "menuHide" : "menuShow"}`}>
                    <li className='menuItem'>Why Dosa?</li>
                    {/* <li className='menuItem'>Services</li> */}
                    <Link to={`/menus/`}>
                        <li className='menuItem'>Menu</li>
                    </Link>
                    <li className='menuItem'>Contact</li>
                </ul>
            </div>
        </div>
    )

}
