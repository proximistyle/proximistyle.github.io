import React, { Component } from 'react';
import './Navigation.css';
import { Navbar, NavItem, Nav, Grid } from 'react-bootstrap';

export default class Navigation extends Component {
    render() {
        return (
        <Navbar fixedTop>
          <Grid>
            <Navbar.Header>
              {/*<Navbar.Brand>
                <a href="/">HANDLE</a>
              </Navbar.Brand>*/}
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav pullRight>
                <NavItem eventKey={1} href="#">How It Works</NavItem>
                <NavItem eventKey={2} href="#">Our Vision</NavItem>
                <NavItem eventKey={3} href="#">Contact</NavItem>
              </Nav>
            </Navbar.Collapse>
          </Grid>
        </Navbar>
        );
    }
}
