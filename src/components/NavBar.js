import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import {Link} from 'react-router-dom';
import { AuthConsumer } from '../Authentication/AuthContext';
import { Button } from 'mdbreact'

class NavbarFeatures extends React.Component {

    render() {
        return (
            <nav className="navbar navbar-dark bg-primary fixed-top">
                <Link className="navbar-brand" to="/">
                    Q&App
                </Link>

                <AuthConsumer>
                    {({ isAuth, signOut }) => (
                        isAuth ? (<Button onClick={signOut}>sign-out</Button>) : 'sign-in'
                    )}
                </AuthConsumer>
            </nav>
        );
    }
}

export default NavbarFeatures;