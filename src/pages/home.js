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

        alert('A name was submitted: ' + this.state.value);
        fetch('http://localhost:1337/?to='+ this.state.value )
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
                  Name:
                  <input type="text" value={this.state.value} onChange={this.handleChange} />
              </label>
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
