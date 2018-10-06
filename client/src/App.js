import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Title from "./components/Title"
import Search from "./components/Search";
import SavedArticles from "./components/SavedArticles";
import NavBar from "./components/Navbar";

class App extends Component {

  render(){
    return(
  <div>
    <NavBar />
    <Title />
    <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Search} />
        <Route exact path="/saved" component={SavedArticles} />
      </Switch>
    </div>
    </Router>
  </div>
    );
  }
}

export default App;
