import React from "react";
import { connect } from "react-redux";
import BusinessList from "./Components/businessList/BusinessList.js";
import CreateEditBusiness from "./Components/CreateEditBusiness/CreateEditBusiness.js";

import "./App.css";

function App(props) {

  return (
    <div className="App">
      <BusinessList /> 
      {props.type == "CREATE" ? <CreateEditBusiness />: props.type == "EDIT" && <CreateEditBusiness />}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    type: state.type,
  };
};

export default connect(mapStateToProps)(App);
