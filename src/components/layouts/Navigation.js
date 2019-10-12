import React from 'react';
import { NavLink } from "react-router-dom";
import { Nav, NavList, NavItem, StyledNavLink } from './NavigationStyles';


const Navigation = () => {
    return (
        <Nav>
            <NavList>
                <NavItem><StyledNavLink to='/'> Home </StyledNavLink></NavItem>
                <NavItem><StyledNavLink to='/about'> About </StyledNavLink></NavItem>
                <NavItem><StyledNavLink to='/portfolio'> Portfolio </StyledNavLink></NavItem>
                <NavItem><StyledNavLink to='/skills'> Skills </StyledNavLink></NavItem>
                <NavItem><StyledNavLink to='/contact'> Contact </StyledNavLink></NavItem>
            </NavList>
        </Nav>
    )
}

export default Navigation;