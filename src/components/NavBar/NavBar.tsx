import React from 'react';
import { Button, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import styles from './NavBar.module.css';
import { NavLinkProps, NavLinkItem } from './types';

class NavBar extends React.Component<NavLinkProps> {
  constructor(props: NavLinkProps) {
    super(props);
    this.createNavLinks = this.createNavLinks.bind(this);
  }

  createNavLinks(navProps: NavLinkItem[]): JSX.Element[] {
    return navProps.map(({ text, href }, index: number) => (
      <Nav.Link key={index} bsPrefix={styles.NavLink} href={href}>
        {' '}
        {text}{' '}
      </Nav.Link>
    ));
  }

  render(): JSX.Element {
    return (
      <Navbar className={styles.Navbar} variant="dark">
        <Navbar.Brand href="#home">
          <img
            alt=""
            src="./nasa.png"
            width="65"
            height="55"
            className="d-inline-block align-center"
          />{' '}
          Sentry
        </Navbar.Brand>
        <Nav className="mr-auto">{this.createNavLinks(this.props.items)}</Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
      </Navbar>
    );
  }
}

export default NavBar;
