import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      officials: [],
    };
  }

  componentDidMount() {
    fetch("https://www.googleapis.com/civicinfo/v2/representatives?address=10304&key=YOURAPIKEYHERE")
    .then(results => {
      return results.json();
    }).then (data => {
        let officials = data.results.map((ofName) => {
          return (
            <div key={ofName.results}>
              <p>{ofName.officials.name}</p>
            </div>
          )
        })
    this.setState({officials: officials});
    console.log("state", this.state.officials); 
    })
  }

  render() {
    return (
      <div className="App">
        <h1>PoliTalk: Search Representatives</h1> 

        <form ref="representatives">
          <input type = "text" ref="zip_code" placeholder="zip code"></input>
         {/* <button onclick = {this.getRep.bind(this)}>Search</button>  */}
        </form>

        {this.state.officials}
      </div>
    );
  }
}

export default App;
