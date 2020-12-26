import logo from './logo.svg';
import React, { Component } from 'react'
import './App.scss';

export default class App extends Component {

  goToCategoryPage(){
    this.props.history.push('/category')
  }


  render(){
    return(
    <div className="App">
      <header className="App-header">
        <button className="btn btn-primary" onClick={this.goToCategoryPage.bind(this)}>Navigate</button>
      </header>
    </div>
    )}
}

