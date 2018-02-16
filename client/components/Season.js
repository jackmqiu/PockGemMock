import React from "react";
import RewardBranch from "./RewardBranch";

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
    <ul className="season">
      {RewardBranches}
    </ul>
  );
};

export default Season;
