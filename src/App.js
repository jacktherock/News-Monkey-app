import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

// class based component
export default class App extends Component {

  // a = "Abhijeet"
  pageSize = 6;
  render() {
    return (
      <div>
        {/* This is {this.a} */}
        <Router>
          <Navbar />
          {/* <News category="general" heading="Top Headlines" country="in" pageSize={this.pageSize} /> */}

          <Switch>
            <Route exact path="/"><News key="general" category="general" country="in" pageSize={this.pageSize} /></Route>
            <Route exact path="/business"><News key="business" category="business" country="in" pageSize={this.pageSize} /></Route>
            <Route exact path="/entertainment"><News key="entertainment" category="entertainment" country="in" pageSize={this.pageSize} /></Route>
            <Route exact path="/health"><News key="health" category="health" country="in" pageSize={this.pageSize} /></Route>
            <Route exact path="/science"><News key="science" category="science" country="in" pageSize={this.pageSize} /></Route>
            <Route exact path="/sports"><News key="sports" category="sports" country="in" pageSize={this.pageSize} /></Route>
            <Route exact path="/technology"><News key="technology" category="technology" country="in" pageSize={this.pageSize} /></Route>
          </Switch>
        </Router>
      </div>
    )
  }
}
