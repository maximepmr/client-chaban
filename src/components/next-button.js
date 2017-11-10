import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ListItem from './list-item';
import { Route, Link } from 'react-router-dom';

class NextButton extends Component {

    constructor(props) {
        super(props);

        this.state = {
            valMax: -1,
        }
    }


componentDidMount() {

    fetch('http://localhost:1337/')
        .then((res) => res.json())
        // use parsed response
        .then((json) => {
            this.setState({
                valMax: json.length,
            });
        });
}


    render() {
        var visible = true;

        if (this.props.id  == this.state.valMax) {
            var visible = false;
        }

        return (
            <div>
                {!visible ? (
                    <div></div>
                ) : (
                    <Link onClick={this.props.handleClick} to={`/${+this.props.id + 1}`}>
                        NEXT
                    </Link>
                )}
            </div>
        );
    }

}

export default NextButton;
