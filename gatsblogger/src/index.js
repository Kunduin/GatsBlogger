import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import logo from './logo.svg';
import registerServiceWorker from "./registerServiceWorker";

const start = (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Welcome to React</h1>
    </header>
    <p className="App-intro">
      To get started, edit <code>src/App.js</code> and save to reload.
    </p>
  </div>
);

class m extends React.Component{
    constructor(props){
        super(props);
        this.state={showWarning:true}
    }
}

function Starter(props){
    return start;
}

ReactDOM.render(<App />, document.getElementById("root"));
ReactDOM.render(<Starter />, document.getElementById("root"));

registerServiceWorker();
