import React from "react";
import { connect } from "react-redux";
import BusinessList from "./Components/businessList/BusinessList";
import CreateEditBusiness from "./Components/CreateEditBusiness/CreateEditBusiness";

import "./App.css";

function App(props) {
  return (
    <div className="App">
      {props.type == "list" ? <BusinessList /> : <CreateEditBusiness />}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    type: state.type,
  };
};

export default connect(mapStateToProps)(App);
