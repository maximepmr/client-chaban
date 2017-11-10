import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ListItem from './list-item';
import { Route, Link } from 'react-router-dom';

class PrevButton extends Component {

    render() {

        var valeur = this.props.id - 1;

        // après la soustraction si la valeur est de 0 alors on n'affiche pas le bouton précédent
        if (valeur === 0) {
            var visible = 0;
        }
        return (
            <div>
                {!visible ? (
                    <div></div>
                ) : (
                    <Link onClick={this.props.handleClick} to={`/${valeur}`}>
                        PREC
                    </Link>
                )}

            </div>
        );
    }

}

export default PrevButton;
