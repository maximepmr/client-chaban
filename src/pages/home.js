import React, { Component } from 'react';
import List from './../components/list';
import { ProgressBar } from 'react-materialize';
import { Link} from 'react-router-dom'
class HomePage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data: null,
    }

      super(props);
      this.state = {value: ''};

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  }
    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        const target = event.target;

        var dateFormat = require('dateformat');
        var param = '';

        if (target.from.value) {
            var from = new Date(target.from.value);
            param = '?from=' + dateFormat(from, "dd-mm-yy");
        } else {
            var param = '?from=';
        }

        if (target.to.value) {
            var to = new Date(target.to.value);
            param += '&to=' + dateFormat(to, "dd-mm-yy");
        } else {
            param += '&to=';
        }


        fetch('http://localhost:1337/' + param)
            .then((res) => res.json())
            // use parsed response
            .then((json) => {
                this.setState({
                    data: json,
                });
            }).catch(function() {
            alert("OUPS le serveur ne répond pas, nous allons réesayer dans quelques secondes");
        })
        event.preventDefault();
    }

    componentDidMount() {

        fetch('http://localhost:1337/')
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
        <h2> HomePage </h2>
          <form onSubmit={this.handleSubmit}>
              <label>
                  <div class="big">FROM : </div>
                  <input name="from" class="to" type="date" value={this.state.from} onChange={this.handleChange} />
              </label>
              <label>
                  <div class="big">TO : </div>
                  <input name="to" class="to" type="date" value={this.state.to} onChange={this.handleChange} />
              </label>
              <br />
              <input type="submit" value="Submit" />
          </form>

        {!data ? (
          <ProgressBar />
        ) : (
          <div>
             <List data={data} />
          </div>
        )}
      </div>
    );
  }

}

export default HomePage;
