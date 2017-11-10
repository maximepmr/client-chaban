import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ListItem from './list-item';
import { Route, Link } from 'react-router-dom';

class BackButton extends Component {

    render() {
        return (
            <div>
                <Link to={`/`}>
                    Go to HomePage
                </Link>
            </div>
        );
    }

}

export default BackButton;
