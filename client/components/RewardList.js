import React from "react";
import RewardListItem from "./RewardListItem.js";
import styles from "../style/RewardList.scss";

const RewardList = props => {
  let i = 0;
  const rewardItems = props.Rewards.rewardList28.map(reward => {
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

export default RewardList;
