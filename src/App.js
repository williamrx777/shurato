import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      codigo: 40,
      url: ''
      
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    fetch(`https://45858a35-015d-4fd9-b0ac-94c8c115d82e-00-2t7im9d0i248n.kirk.replit.dev/animes/animes-detalhe/${this.state.codigo}/`)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          url: data.url
         
        });
      })
      .catch((error) => console.error('Error fetching data:', error));
  };

  handleInputChange = (event) => {
    this.setState({ codigo: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.fetchData();
  };

  handlePreviousEpisode = () => {
    if (this.state.codigo > 40) {
      this.setState((prevState) => ({
        codigo: prevState.codigo - 1,
      }), this.fetchData);
    }
  };

  
  handleNextEpisode = () => {
    this.setState((prevState) => ({
      codigo: prevState.codigo + 1,
    }), this.fetchData);
  };
  
  render() {
    return (
      <div className="container ">
        <h1 style={{ color: 'white' }} className="h1 ">
          Shurato
        </h1>
        <form className='busca' onSubmit={this.handleSubmit}>
          <input
            type="number"
            name="codigo"
            placeholder="Pesquise número do episódio"
            value={this.state.codigo}
            onChange={this.handleInputChange}
          />
          <br />
          <input className="btn btn-outline-primary" type="submit" value="submit" />
        </form>

        {this.state.codigo > 40 && (
        <button
          className="btn btn-success"
          onClick={this.handlePreviousEpisode}
        >
          Voltar
        </button>
      )}


<div className="episodio">
  <iframe
    frameBorder="0"
    src={this.state.url}
    allowFullScreen
    title="Nome do Episódio"
  ></iframe>
</div>


        {this.state.codigo < 77 && (
        <button
          className="btn btn-primary"
          onClick={this.handleNextEpisode}
        >
          Próximo
        </button>
      )}
      </div>
    );
  }
}

export default App;
