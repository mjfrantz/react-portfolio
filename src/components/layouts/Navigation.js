import React from 'react';
import { NavLink } from "react-router-dom";
import { Nav, NavList, NavItem, StyledNavLink } from './NavigationStyles';
import { FaHome, FaUser, FaFolder, FaCog, FaEnvelope } from 'react-icons/fa';


const Navigation = () => {
    return (
        <Nav>
            <NavList>
                <NavItem><StyledNavLink to='/'>< FaHome /></StyledNavLink></NavItem>
                <NavItem><StyledNavLink to='/about'><FaUser/></StyledNavLink></NavItem>
                <NavItem><StyledNavLink to='/portfolio'><FaFolder/></StyledNavLink></NavItem>
                <NavItem><StyledNavLink to='/skills'><FaCog /></StyledNavLink></NavItem>
                <NavItem><StyledNavLink to='/contact'><FaEnvelope/></StyledNavLink></NavItem>
            </NavList>
        </Nav>
    )
}

export default Navigation;