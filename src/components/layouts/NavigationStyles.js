import styled from 'styled-components';
import { NavLink } from "react-router-dom";

export const Nav = styled.div`
    background: #1B242E;
    `
export const NavList = styled.ul`
list-style:none;
padding:1rem;
margin: 3px;
display: flex;
font-size: 25px;
`
export const NavItem = styled.li`
margin: 0px;
padding: 5px;
`

export const StyledNavLink = styled(NavLink)`
    color: white;
    text-decoration:none;
    `