import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import * as AuthService from "../../utils/AuthService";

import {
  Navbar,
  NavbarNav,
  NavItem,
  NavLink,
  NavbarBrand,
  Collapse,
  NavbarToggler
} from "mdbreact";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "mdbreact";
import { Fa, Button } from "mdbreact";

class HeaderView extends Component {
  static propTypes = {
    auth: PropTypes.shape({
      error: PropTypes.object,
      isAuthenticated: PropTypes.bool.isRequired,
      profile: PropTypes.object
    }).isRequired,
    history: PropTypes.shape({
      push: PropTypes.func.isRequired
    }).isRequired,
    loginRequest: PropTypes.func.isRequired,
    logoutSuccess: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      collapse: false
    };
    this.onClick = this.onToggleCollapse.bind(this);
  }

  onToggleCollapse() {
    this.setState({
      collapse: !this.state.collapse
    });
  }

  handleLoginClick = () => {
    AuthService.login();
    this.props.loginRequest();
  };

  handleLogoutClick = () => {
    this.props.logoutSuccess();
    AuthService.logout(); // careful, this is a static method
    this.props.history.push({ pathname: "/" });
  };

  render() {
    const { auth } = this.props;
    return (
      <div style={{ height: 120 }}>
        <Navbar light expand="md" scrolling fixed="top">
          <div className="navbar-header">
            <NavbarBrand to="/">Farm Market</NavbarBrand>
          </div>

          <NavbarToggler onClick={this.onToggleCollapse} />
          <Collapse isOpen={this.state.collapse} navbar>
            <NavbarNav left>
              <NavItem>
                <NavLink to="/dashboard">Dashboard</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/stock">Stock</NavLink>
              </NavItem>
            </NavbarNav>

            {auth.isAuthenticated ? (
              <NavbarNav right>
                <NavItem>
                  <Fa icon="bell" />
                </NavItem>
                <NavItem>
                  <Dropdown>
                    <DropdownToggle nav>
                      <img
                        src={auth.profile.picture}
                        height="30px"
                        className="rounded-circle z-depth-1-half"
                      />
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem href="#" onClick={this.handleLogoutClick}>
                        Logout
                      </DropdownItem>
                      <DropdownItem href="#!">Something else here</DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </NavItem>
              </NavbarNav>
            ) : (
              <NavbarNav right>
                <Button onClick={this.handleLoginClick}>Login</Button>
              </NavbarNav>
            )}
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default HeaderView;
