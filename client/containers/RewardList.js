import React, {Component} from "react";
import RewardListItem from "../components/RewardListItem.js";
import styles from "../style/RewardList.scss";
import { connect } from 'react-redux';

class RewardList extends Component {
  constructor(props) {
    super(props);
  }
  renderRewards(reward) {
    return (
      <RewardListItem
        onRewardSelect={this.props.onRewardSelect}
        reward={reward}
      />
    );
  }

  render() {
    return (
      <div className={styles.season_container}>
        {this.props.rewards[this.props.activeBranch.key].map(
          (reward) => this.renderRewards(reward)
        )}
      </div>
    );
  }
};

function mapStateToProps(state) {
  return {
    activeBranch: state.activeBranch,
    rewards: state.rewards,
  }
}

export default connect(mapStateToProps)(RewardList);
