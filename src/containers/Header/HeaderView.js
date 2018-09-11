import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import * as AuthService from '../../utils/AuthService';

class HeaderView extends Component {
    static propTypes = {
        history: PropTypes.shape({
            push: PropTypes.func.isRequired
        }).isRequired,
        auth: PropTypes.shape({
            isAuthenticated: PropTypes.bool.isRequired,
            profile: PropTypes.object,
            error: PropTypes.object
        }).isRequired,
        loginRequest: PropTypes.func.isRequired,
        logoutSuccess: PropTypes.func.isRequired
    };

    handleLoginClick = () => {
        AuthService.login();
        this.props.loginRequest();
    };

    handleLogoutClick = () => {
        this.props.logoutSuccess();
        AuthService.logout(); // careful, this is a static method
        this.props.history.push({ pathname: '/' });
    };


    render() {
        const { auth } = this.props;
        return (
        <nav className="navbar navbar-dark bg-primary fixed-top">
            <Link className="navbar-brand" to="/">
                Farm Market
            </Link>

            {auth.isAuthenticated ? (
                <div>
                    <img src={auth.profile.picture} height="40px" alt="profile" />
                    <span>Welcome, {auth.profile.nickname}</span>
                    <button onClick={this.handleLogoutClick}>Logout</button>
                </div>
            ) : (
                <button onClick={this.handleLoginClick}>Login</button>
            )}

        </nav>
        );
    }
}

export default HeaderView;