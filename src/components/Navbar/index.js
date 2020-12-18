import React from 'react'
import {Nav, NavLink, NavMenu} from './NavbarElements'
import "react-toggle/style.css" 
import 'antd/dist/antd.css';
import {Button} from 'antd';

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavLink to="/">
                    <h1>Team Tracker</h1>
                </NavLink>
                <NavMenu>
                    <NavLink to="/schedule" >
                        Schedule
                    </NavLink>
                    <NavLink to="/stats" >
                        Stats
                    </NavLink>
                    <NavLink to="/playerList" >
                        Player List
                    </NavLink>
                    <Button type="primary" disabled>
                        Log In/Out
                    </Button>
                </NavMenu>
            </Nav>
        </>
    )
}


export default Navbar;
