import React, {Component} from "react";
import RewardBranch from "../components/RewardBranch";
import styles from "../style/Season.scss";
import { browserHistory, Router, Link, withRouter } from 'react-router-3';
import { connect } from 'react-redux';
import { selectBranch } from "../actions/index";
import { bindActionCreators } from "redux";

class Season extends Component {
  constructor(props) {
    super(props);
  };

  clickHandler(branch) {
    this.props.selectBranch(branch);
    browserHistory.push({
      pathname: `/${branch.title}/rewards/1`,
    });
  }

  renderBranch(branch) {
    return (
      <li onClick={() => this.clickHandler(branch)} key={branch.id}>
        <RewardBranch
          onBranchSelect = {this.clickHandler}
          branch={branch}
        />
      </li>
    );
  };
  render() {
    return (
      <div className={styles.season}>
        <div className={styles.season_title}>{this.props.seasonObject.title}</div>
        <ul className={styles.container}>
          {this.props.seasonObject.branches.map((branch) => this.renderBranch(branch))}
        </ul>
      </div>
    );
  }
};

function mapStateToProps(state) {
  return {
    seasonObject: state.seasonObject,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectBranch: selectBranch }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Season);
