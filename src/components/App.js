import 'bootstrap/dist/css/bootstrap.min.css'
import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

const links = [
  { href: '#home', text: 'Jobs' },
  { href: '#card', text: 'Talent' },
  { href: '#about', text: 'Why Us' },
  { href: '#cata', text: 'Blog' },
  { href: '#test', text: 'Contact' },    
  { href: '/login', text: 'LOGIN' },
];

const createNavItem = ({ href, text, className }) => (
  <NavItem>
    <NavLink href={href} className={className}>{text}</NavLink>
  </NavItem>
);

export default class Example extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Dɪvɛləpɜrz </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              {links.map(createNavItem)}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
