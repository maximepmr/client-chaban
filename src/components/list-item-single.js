import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-materialize';

import { Link } from 'react-router-dom';

class ListItemSingle extends Component {

  static propTypes = {
    item: PropTypes.shape({
      date: PropTypes.string.isRequired,
    }).isRequired,
  }

  render() {
    const { item } = this.props;

    return (
      <Card title={item.date} >
        start :{item.start} <br />
        end :{item.end} <br />
        reason :{item.reason} <br />
      </Card>
    );
  }

}

export default ListItemSingle;
