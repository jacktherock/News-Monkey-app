import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import LoadingBar from 'react-top-loading-bar';
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

  state = {
    progress: 0
  }

  setProgress = (progress) => {
    this.setState({progress: progress})
  }

  render() {
    return (
      <div>
        {/* This is {this.a} */}
        <Router>

          <Navbar />
          {/* <News category="general" heading="Top Headlines" country="in" pageSize={this.pageSize} /> */}

          {/* Top loader */}
          <LoadingBar
            height= {3}
            color='#f11946'
            progress={this.state.progress}
          />

          {/* Categories */}
          <Switch>
            <Route exact path="/"><News setProgress={this.setProgress} key="general" category="general" country="in" pageSize={this.pageSize} /></Route>
            <Route exact path="/business"><News setProgress={this.setProgress} key="business" category="business" country="in" pageSize={this.pageSize} /></Route>
            <Route exact path="/entertainment"><News setProgress={this.setProgress} key="entertainment" category="entertainment" country="in" pageSize={this.pageSize} /></Route>
            <Route exact path="/health"><News setProgress={this.setProgress} key="health" category="health" country="in" pageSize={this.pageSize} /></Route>
            <Route exact path="/science"><News setProgress={this.setProgress} key="science" category="science" country="in" pageSize={this.pageSize} /></Route>
            <Route exact path="/sports"><News setProgress={this.setProgress} key="sports" category="sports" country="in" pageSize={this.pageSize} /></Route>
            <Route exact path="/technology"><News setProgress={this.setProgress} key="technology" category="technology" country="in" pageSize={this.pageSize} /></Route>
          </Switch>
        </Router>
      </div>
    )
  }
}
