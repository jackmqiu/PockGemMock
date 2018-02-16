import React from "react";
import RewardCategory from "./RewardCategory";

const Season = props => {
  const RewardCategories = props.SeasonObject.branches.map(branch => {
    return (
      <RewardCategory
        onBranchSelect={props.onBranchSelect}
        key={branch.id}
        branch={branch}
      />
    );
  });

  return (
    <ul className="season">
      {RewardCategories}
    </ul>
  );
};

export default Season;
