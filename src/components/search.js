import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ListItem from './list-item';

class Search extends Component {

    static propTypes = {
    }

    render() {
        return (
            <div>
                <form onSubmit={this.props.handleSubmit}>
                    <label>
                        <div className="big">FROM : </div>
                        <input name="from" className="to" type="date" value={this.props.from} onChange={this.props.handleChange} />
                    </label>
                    <label>
                        <div className="big">TO : </div>
                        <input name="to" className="to" type="date" value={this.props.to} onChange={this.props.handleChange} />
                    </label>
                    <br />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }

}

export default Search;
