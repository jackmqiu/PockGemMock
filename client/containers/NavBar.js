import React, {Component} from 'react';
import styles from '../style/NavBar.scss';
import { browserHistory, Router, Link, withRouter } from 'react-router-3';
import { connect } from 'react-redux';
import { selectTab } from "../actions/index";
import { bindActionCreators } from "redux";

class NavBar extends Component {
  constructor(props) {
    super(props);

  }

  clickHandler(link) {
    //this.props.fetchFactoryDetails(id);
    browserHistory.push({
      pathname: `/${link}`,
    });
  }

  renderTabs(tab) {

    return (
      <li onClick={() => {this.clickHandler(tab.tab_link)}} key={tab.tab_name}>
        {tab.tab_name}
      </li>
    );
  }

  render() {
    return (
      <div className={styles.nav_bar}>
        <ul>
          {this.props.tabs.map((tab) => this.renderTabs(tab))}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    tabs: state.tabs,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectTab: selectTab }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
