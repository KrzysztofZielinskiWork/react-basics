import React from 'react';
import './../css/app-nav.css';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import {Link} from 'react-router-dom';

export default function AppNav() {
  return (
    <div className='navigation'>
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/react-basics/">HOME</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <LinkContainer to="/react-basics/users"><NavItem>Users</NavItem></ LinkContainer>
            <LinkContainer to="/react-basics/link2"><NavItem>Link2 </NavItem></ LinkContainer>
            <LinkContainer to="/react-basics/link3"><NavItem>Link3</NavItem></ LinkContainer>
            <LinkContainer to="/react-basics/link4"><NavItem>Link4</NavItem></ LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}