import React, { Component } from 'react';
import ListSingle from './../components/list-single';
import BackButton from './../components/back-button';
import PrevButton from './../components/prev-button';
import NextButton from './../components/next-button';
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
        this.setState ({res: false})

        fetch('http://localhost:1337/' + this.props.match.params.id)
            .then((res) => {
            if (res.ok){
                this.setState ({res: true})
                return res.json()
            }
            this.setState ({erreur: res.status})
            alert(res.status);
            throw new Error(res.status);
        })
            // use parsed response
            .then((json) => {
                this.setState({
                    data: [json],
                });
            }).catch(function(err) {
            console.log(err);
        })

    }

  render() {
      const { data } = this.state;

      if (this.state.erreur === 404) {
          return (
              <div>
                  404
              </div>
          );
      } else if (this.state.res === false){
          return (
              <div>
                  <ProgressBar />
                  Le serveur ne réponds pas, veuillez patienter
              </div>
          );
      } else {
          return (
              <div>

                  <BackButton />
                  <PrevButton id={this.props.match.params.id} handleClick={this.componentDidMount}/>
                  <NextButton />
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

}

export default SinglePage;
