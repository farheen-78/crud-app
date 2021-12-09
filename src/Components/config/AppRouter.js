import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "../Home";
//import Home from "../Components/Home";
import EditUser from "../EditUser";
import About from "../About";
import NavBar from "../NavBar";
import AddUser from "../AddUser";
import detailRecord from "../DetailRecord";

const AppRouter = () => {
  return (
    <Router>
      <NavBar />
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/adduser" component={AddUser} />
      <Route exact path="/edit/:id" component={EditUser} />
      <Route exact path="/detailrecord/:id" component={detailRecord} />
    </Router>
  );
};

export default AppRouter;
