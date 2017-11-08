import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ListItemSingle from './list-item-single';

class ListSingle extends Component {

  static propTypes = {
    data: PropTypes.array.isRequired,
  }

  render() {
    return (
      <div>

        {this.props.data.map((item) => {
          return <ListItemSingle
            key={item.id}
            item={item}
          />
        })}
      </div>
    );
  }

}

export default ListSingle;
