import React from "react";
import RewardBranch from "./RewardBranch";
import styles from "../style/Season.scss";

const Season = props => {
  const RewardBranches = props.SeasonObject.branches.map(branch => {
    return (
      <RewardBranch
        onBranchSelect={props.onBranchSelect}
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

export default Season;
