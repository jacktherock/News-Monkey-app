import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import LoadingBar from 'react-top-loading-bar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

// class based component
const App = () => {

  // a = "Abhijeet"
  const pageSize = 6;
  const apiKey = process.env.REACT_APP_NEWS_API

  const [progress, setProgress] = useState(0)

  return (
    <div>
      {/* This is {a} */}

      <Router>
        <Navbar />
        {/* <News category="general" heading="Top Headlines" country="in" pageSize={pageSize} /> */}

        {/* Top loader */}
        <LoadingBar
          height={3}
          color='#f11946'
          progress={progress}
        />

        {/* Categories */}
        <Switch>
          <Route exact path="/"><News setProgress={setProgress} apiKey={apiKey} key="general" category="general" country="in" pageSize={pageSize} /></Route>
          <Route exact path="/business"><News setProgress={setProgress} apiKey={apiKey} key="business" category="business" country="in" pageSize={pageSize} /></Route>
          <Route exact path="/entertainment"><News setProgress={setProgress} apiKey={apiKey} key="entertainment" category="entertainment" country="in" pageSize={pageSize} /></Route>
          <Route exact path="/health"><News setProgress={setProgress} apiKey={apiKey} key="health" category="health" country="in" pageSize={pageSize} /></Route>
          <Route exact path="/science"><News setProgress={setProgress} apiKey={apiKey} key="science" category="science" country="in" pageSize={pageSize} /></Route>
          <Route exact path="/sports"><News setProgress={setProgress} apiKey={apiKey} key="sports" category="sports" country="in" pageSize={pageSize} /></Route>
          <Route exact path="/technology"><News setProgress={setProgress} apiKey={apiKey} key="technology" category="technology" country="in" pageSize={pageSize} /></Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App