import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import Dashboard from "./components/Dashboard";
import UserManagement from "./components/UserManagement";
import TerminationPage from "./components/TerminationPage";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={LoginPage} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/user-management" component={UserManagement} />
        <Route path="/termination" component={TerminationPage} />
      </Switch>
    </Router>
  );
};

export default App;
