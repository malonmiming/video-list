import React from "react";
import './App.css';
import { Route } from 'react-router-dom';
import guideIndex from "./pages";

const App = (props) => {

  return (
    <div className="App">
      <Route path="/about" component={guideIndex} />
      <Route path="/about" component={guideIndex} />
      <Route path="/about" component={guideIndex} />
    </div>
  );
}

export default App;
