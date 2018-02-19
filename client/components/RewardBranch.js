import React from "react";
import styles from "../style/RewardBranch.scss";

const RewardCategory = ({ branch, onBranchSelect }) => {
  const imageUrl = branch.imageUrl;

  return (
    <div>
      <div className={styles.reward__branch_slot}>
        <figure>
          <img className={styles.branch_image} src={branch.imageUrl} />
        </figure>
        <div className={styles.reward__branch_heading}>{branch.title}</div>
      </div>
    </div>
  );
};

export default RewardCategory;
