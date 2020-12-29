import React, { Component } from 'react'
import './styles/App.scss';
import Header from './components/Header';
import getRoutes from './routes';


export default class App extends Component {

  goToCategoryPage(){
    this.props.history.push('/category')
  }

  render(){
    return(
    <div className="App">
        <Header></Header>
        <div>  
          {getRoutes()}
        </div>
    </div>
    )}
}

