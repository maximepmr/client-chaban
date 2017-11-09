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

        var incorrect = 0;
        var dateFormat = require('dateformat');

        // variable contenant les paramètres
        var params = '';

        // on test les valeurs pour incrémenter param qui contient les  paramètre de la recherche
        if (target.from.value) {
            var from = new Date(target.from.value);
            params = '?from=' + dateFormat(from, "dd-mm-yy");
        } else {
            params = '?from=';
        }

        if (target.to.value) {
            var to = new Date(target.to.value);
            params += '&to=' + dateFormat(to, "dd-mm-yy");
        } else {
            params += '&to=';
        }

        // on vérifie que From est bien inférieur à to sinon on prévient l'utilisateur de l'erreur
        if ((target.to.value)&&(target.from.value)){
            var dateFrom = new Date(target.from.value);
            var dateTo = new Date(target.to.value);

            if (dateTo < dateFrom) {
                incorrect = 1;
            }
        }
        // si la recherche est bonne alors on exécute la recherche directement sur l'api sinon on transmet une alerte à l'utilisateur
        if (!incorrect) {
            fetch('http://localhost:1337/' + params)
                .then((res) => res.json())
                // use parsed response
                .then((json) => {
                    this.setState({
                        data: json,
                    });
                }).catch(function() {
                alert("OUPS le serveur ne répond pas, nous allons réesayer dans quelques secondes");
            })
        } else {

            alert('Erreur, To est inférieur à From');
        }
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
