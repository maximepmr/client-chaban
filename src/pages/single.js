import React, { Component } from 'react';
import ListSingle from './../components/list-single';
import { ProgressBar } from 'react-materialize';

import { Card } from 'react-materialize';

import { Route, Link } from 'react-router-dom';


class SinglePage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            data: null,
        }
    }

    componentDidMount() {

        fetch('http://localhost:1337/' + this.props.match.params.id)
            .then((res) => res.json())
            // use parsed response
            .then((json) => {
                this.setState({
                    data: json,
                });
            }).catch(function() {
            alert("OUPS le serveur ne répond pas, nous allons réesayer dans quelques secondes");
        })

    }



  render() {
      const { data } = this.state;

      return (
          <div>

            <h2>{this.props.match.params.id}</h2>



              {!data ? (
                  <ProgressBar />
              ) : (
                  <div>
                    <ListSingle data={data} />
                  </div>
              )}
          </div>
      );
  }

}

export default SinglePage;
