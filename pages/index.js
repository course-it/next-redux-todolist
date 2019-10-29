import React from "react";
import { connect } from "react-redux";
import Tasks from "../components/Tasks";
import AddTask from "../components/AddTask";

class Index extends React.Component {
  static getInitialProps({ reduxStore, req }) {
    return {};
  }
  render() {
    return (
      <div>
        <AddTask />
        <Tasks />
      </div>
    );
  }
}

export default connect()(Index);
