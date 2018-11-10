import React, { Component } from 'react';
import './App.css';
import { GOOGLE_KEY } from './keys.js';

function ZipSearchField(props){
  return(
    <div> 
    <label>ZipCode:</label>
    <input onChange={props.changeHandler} type="text"  placeholder="10304" className="text-center"/>
    </div>
  )}


class App extends Component {
  constructor() {
    super();
    this.state = {
      officials : []
    }
  }


  zipCodeChanged(event) {
    if(event.target.value.length !== 5){
      this.setState({officials: []});
      return(
        <div>
        <p>No Result</p>
        </div>
      )
    }
    const url = "https://www.googleapis.com/civicinfo/v2/representatives?address="+ event.target.value +"&key=" + GOOGLE_KEY

    fetch(url,{
      mode: "cors", // no-cors, cors, *same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
          "Content-Type": "application/json; charset=utf-8",
          // "Content-Type": "application/x-www-form-urlencoded",
      },
      redirect: "follow", // manual, *follow, error
      referrer: "no-referrer" // no-referrer, *client
    })
    .then( (response) => {
      if(response.status === 200)
        return(response.json())
      else
        console.log("There was an error")
    })
    .then( (body) => {
      console.log(body)
      this.setState({officials: body})
      console.log(this.officials)


    })
    
  }

  render() {
    return (
      <div className = "App"> 
      <h1>PoliTalk: Search Representatives</h1> 
      <ZipSearchField changeHandler={(e) => this.zipCodeChanged(e)}/>
      </div>
      
    ); 
  };
}


export default App;