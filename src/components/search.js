import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ListItem from './list-item';
import SearchInput from './search-input';

class Search extends Component {

    render() {
        return (
            <div>
                <form onSubmit={this.props.handleSubmit}>
                    <SearchInput name="from" value={this.props.from} onChange={this.props.handleChange} />
                    <SearchInput name="to" value={this.props.to} onChange={this.props.handleChange} />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }

}

export default Search;
