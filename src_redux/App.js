import React,{ Component } from 'react';
import './App.css';
import StrAddButton from "./StrAddButton";

class App extends Component {
  render () {
    console.log(this.props.store);
    console.log(this.props.store.getState());
    console.log(this.props.store.getState().data);
    console.log(this.props.store.getState().data.str);

    return (
      <div>
        <h1>Start React 200!</h1>
        <span>{this.props.store.getState().data.str}</span>
        <br/>
        <StrAddButton store = {this.props.store} />
      </div>
    )
  }
}

export default App;
