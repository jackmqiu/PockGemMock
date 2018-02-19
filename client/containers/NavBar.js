import React, {Component} from 'react';
import styles from '../style/NavBar.scss';
import { browserHistory, Router, Link, withRouter } from 'react-router-3';
import { connect } from 'react-redux';
import { selectTab } from "../actions/index";
import { bindActionCreators } from "redux";

class NavBar extends Component {
  constructor(props) {
    super(props);
    browserHistory.push({
      pathname: `/${this.props.tabs[2].tab_link}`,
    });
  }


  clickHandler(tab) {
    this.props.selectTab(tab);
    browserHistory.push({
      pathname: `/${tab.tab_link}`,
    });
  }

  renderTabs(tab) {
    if (!this.props.activeTab) {
      return (
        <div>loading...</div>
      )
    }
    if (this.props.activeTab.tab_name === tab.tab_name) {
      return (
        <li
          onClick={() => {this.clickHandler(tab)}}
          key={tab.tab_name}
          className={styles.active}
        >
            {tab.tab_name}
        </li>
      );
    } else {
      return (
        <li
          onClick={() => {this.clickHandler(tab)}}
          key={tab.tab_name}
          className={styles.inactive}
        >
            {tab.tab_name}
        </li>
      );
    }

  }

  render() {
    return (
      <header className={styles.header}>
        <nav className={styles.nav_bar}>
          <ul>
            {this.props.tabs.map((tab) => this.renderTabs(tab))}
          </ul>
        </nav>
      </header>
    )
  }
}

function mapStateToProps(state) {
  return {
    tabs: state.tabs,
    activeTab: state.activeTab,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectTab: selectTab }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
