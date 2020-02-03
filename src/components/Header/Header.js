import React from 'react';

// react-bootstrap
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

// components
import Logo from './Logo';
import Alert from './Alert';
import User from './User';

// assets
import appLogo from '../../assets/img/logo.svg';
import bell from '../../assets/img/bell.svg';
import amazon from '../../assets/img/amazon.svg';

const Header = () => (
  <header className="header">
    <Navbar expand="lg">
      <Navbar.Brand>
        <Logo image={appLogo} />
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto justify-content-center">
          <Nav.Item>
            <Nav.Link href="/home" className="item">
              Home
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/products" className="item">
              Products
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/campaigns" className="item">
              Campaigns
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/orders" className="item">
              Orders
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/performance" className="item">
              Performance
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <Nav className="mr-auto justify-content-center">
          <Nav.Item>
            <Alert image={bell} amount={0} />
          </Nav.Item>
          <Nav.Item>
            <User image={amazon} />
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </header>
);

export default Header;
