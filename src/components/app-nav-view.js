import React from 'react';
import './../css/app-nav.css';
import {Navbar, Nav, NavItem} from 'react-bootstrap'

export default function AppNav() {
  return (
    <div className='navigation'>
  <Navbar inverse collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="/">Home</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav pullRight>
        <NavItem eventKey={1} href="/test1">Link Test1View</NavItem>
        <NavItem eventKey={2} href="/test2">Link Test2View</NavItem>
        <NavItem eventKey={3} href="/test3">Link Test3View</NavItem>
        <NavItem eventKey={4} href="/test4">Link Test4View</NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
    </div>
  )
}