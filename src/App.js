import React, { Component } from 'react';

import Tarjetas from './components/tarjetas';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: false,
      data: [],
      searchId: document.getElementById('button-search')
    }

    this.handleClick = (e) => {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => {

          this.setState({
            data: data,
            visible: true
          })
        });
    }

    this.buscar = (e) => {
      return e.userId === parseInt(document.getElementById('searchId').value)

    }


    this.handleSearch = (e) => {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => {

          this.setState({
            data: data.filter(this.buscar),
            visible: true
          })
          console.log(data.filter(this.buscar))

        })
    }
  }

  render() {
    return (
      <>

        <div className="row">
          <div className="col-3"></div>
          <div className="col-6 mt-5">
            <div className="input-group mb-3">
              <input id="searchId" type="number" className="form-control" placeholder="Enter user id..." aria-label="Enter user id..." aria-describedby="button-addon2"></input>
              <div className="input-group-append">
                <button onClick={this.handleSearch} className="btn btn-outline-secondary" type="button" id="button-search">Search by userId</button>
              </div>
            </div>

          </div>
        </div>
        <div className="row pl-5 m-5">
          <div className="col-3">
            <p> Click to get all</p>
            <button onClick={this.handleClick} className="btn btn-dark "> Post</button>
          </div>

          <div className={
            this.state.visible ? 'col-9' : 'col-9 d-none'
          }>
            <Tarjetas data={this.state.data} />
          </div>
        </div>

      </>
    );
  }
}

export default App;
