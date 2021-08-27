import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';

// class based component
export default class App extends Component {

  // a = "Abhijeet"

  render() {
    return (
      <div>
        {/* This is {this.a} */}

        <Navbar />
        <News category="general" heading="Top Headlines" country="in" pageSize={6}/>

      </div>
    )
  }
}
