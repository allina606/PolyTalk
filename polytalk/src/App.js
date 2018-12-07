import React, { Component } from "react";
import "./App.css";
import "./components/Card/Card.js";
import { GOOGLE_KEY } from "./keys.js";

function ZipSearchField(props) {
  return (
    <div>
      <label
        style={{ fontWeight: "bold", fontSize: 20 }}
        className="badge badge-pill m-2 badge-primary"
      >
        ZipCode:
      </label>
      <input
        onChange={props.changeHandler}
        type="text"
        placeholder="10304"
        className="text-center"
      />
    </div>
  );
}

function data(props) {
  return (
    <div>
      <p>Candidate : {props.officialName}</p>
    </div>
  );
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: {}
    };
  }

  zipCodeChanged(event) {
    if (event.target.value.length !== 5) {
      this.setState({ data: [] });
      return (
        <div>
          <p>No Result</p>
        </div>
      );
    }
    const url =
      "https://www.googleapis.com/civicinfo/v2/representatives?address=" +
      event.target.value +
      "&key=" +
      GOOGLE_KEY;

    fetch(url, {
      mode: "cors", // no-cors, cors, *same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json; charset=utf-8"
        // "Content-Type": "application/x-www-form-urlencoded",
      },
      redirect: "follow", // manual, *follow, error
      referrer: "no-referrer" // no-referrer, *client
    })
      .then(response => {
        if (response.status === 200) return response.json();
        else console.log("There was an error");
      })
      .then(response => {
        this.setState({ data: response });
      });
  }

  render() {
    var data = [];
    console.log(this.state.data);
    for (var key in this.state.data.data) {
      data.push(this.state.data.data[key]);
    }
    var dataRender = [];
    for (var i = 0; i < data.length; i++) {
      dataRender.push(<data key={i} officialName={data[i].name} />);
    }
    return (
      <div className="App">
        <h1>Enter Zipcode Below</h1>
        <ZipSearchField changeHandler={e => this.zipCodeChanged(e)} />
        <div>{dataRender}</div>
      </div>
    );
  }
}

export default App;
