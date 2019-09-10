import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "./components/navbar";
import List from "./components/list";
import Table from "./components/table";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route path="/list" component={List} />
          <Route path="/table" component={Table} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
