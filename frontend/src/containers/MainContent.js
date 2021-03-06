import React from "react";
import { NewPropForm } from "../components/NewPropForm";
import { connect } from "react-redux";
import { Redirect, Switch, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Home from "./Home";

const MainContent = props => {
  if (!props.isLoggedIn) return <Redirect to="/login" />;
  return (
    <div className="container column is-centered">
      <Navbar />
      <Switch>
        <Route path={"/property/new"} component={NewPropForm} />
        <Route path={"/property/search"}>search property</Route>
        <Route component={Home} />
      </Switch>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    isLoggedIn: state.login.isLoggedIn
  };
}

export default connect(mapStateToProps)(MainContent);
