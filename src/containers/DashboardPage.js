// Container for DashboardPage
// this will handle all the interaction with the app state
import React, { Component } from "react";
import { connect } from "react-redux";

import DashboardPage from "../components/pages/DashboardPage";

// importing action creators
import {
  loadDailySales,
  loadHourlySales,
  loadRecommends,
  loadBestsellers
} from "../actions";

class DashboardPageContainer extends Component {
  componentDidMount() {
    // fetching data
    this.props.loadDailySales();
    this.props.loadHourlySales();
    this.props.loadRecommends();
    this.props.loadBestsellers();
  }
  render() {
    return <DashboardPage {...this.props} />;
  }
}

//mapping state, actions
const mapStateToProps = ({
  data: { dailySales, hourlySales, recommends, bestsellers }
}) => {
  return { dailySales, hourlySales, recommends, bestsellers };
};

const mapActionsToProps = {
  loadDailySales,
  loadHourlySales,
  loadRecommends,
  loadBestsellers
};

// connecting to redux
export default connect(mapStateToProps, mapActionsToProps)(
  DashboardPageContainer
);
