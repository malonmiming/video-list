import React from "react";
import './App.css';
import { Route } from 'react-router-dom';
import guideIndex from "./pages/home";
import searchIndex from "./pages/search";
import homeIndex from "./pages/home";
import tableIndex from "./pages/table";

const App = (props) => {

  return (
    <div className="App">
      <Route path="/home" component={homeIndex} />
    </div>
  );
}

export default App;
