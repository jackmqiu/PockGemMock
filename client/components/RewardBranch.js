import React from "react";
import styles from "../style/RewardBranch.scss";

const RewardCategory = ({ branch, onBranchSelect }) => {
  const imageUrl = branch.imageUrl;

  return (
    <li onClick={() => onBranchSelect(video)} className="reward-branch">
      <div className="video-list media">
        <div className="media-left">
          <img className="branch-image" src={branch.imageUrl} />
        </div>
        <div className="media-body">
          <div className={styles.reward__branch_heading}>{branch.title}</div>
        </div>
      </div>
    </li>
  );
};

export default RewardCategory;
