import React from "react";
import RewardBranch from "../components/RewardBranch";
import styles from "../style/Season.scss";
import { connect } from 'react-redux';
import { selectBranch } from "../actions/index";
import { bindActionCreators } from "redux";

const Season = props => {
  const RewardBranches = props.seasonObject.branches.map(branch => {
    return (
      <RewardBranch
        onClick={() => this.props.selectBranch(branch)}
        key={branch.id}
        branch={branch}
      />
    );
  });

  return (
    <div className={styles.season}>
      <ul className={styles.container}>
        {RewardBranches}
      </ul>
    </div>
  );
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
