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

    <div>

            {!item ? (
                console.log('jizehdizejd')
            ) : (
              <Card title={item.date} >
                  start :{item.start} <br />
                  end :{item.end} <br />
                  reason :{item.reason} <br />
              </Card>
          )}
    </div>
    );
  }

}

export default ListItemSingle;
