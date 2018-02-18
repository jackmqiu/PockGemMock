import React from "react";
import RewardListItem from "../components/RewardListItem.js";
import styles from "../style/RewardList.scss";
import { connect } from 'react-redux';

const RewardList = props => {
  let i = 0;
  const rewardItems = props.rewards.map(reward => {
    i++;
    return (
      <RewardListItem
        onRewardSelect={props.onRewardSelect}
        key={i}
        reward={reward}
      />
    );
  });

  return (
    <div className={styles.season_container}>
      {rewardItems}
    </div>
  );
};

function mapStateToProps(state) {
  return {
    rewards: state.rewardList28,
  }
}

export default connect(mapStateToProps)(Season);
