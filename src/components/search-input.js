import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ListItem from './list-item';

class SearchInput extends Component {

    render() {
        return (
            <div>
                    <label>
                        <div className="big">FROM : </div>
                        <input name={this.props.name} className="to" type="date" value={this.props.value} onChange={this.props.onChange} />
                    </label>
            </div>
        );
    }

}

export default SearchInput;
