import React from "react";
import styles from "../style/RewardBranch.scss";

const RewardCategory = ({ branch, onBranchSelect }) => {
  const imageUrl = branch.imageUrl;

  return (
    <li onClick={() => onBranchSelect(branch)}>
      <div className={styles.reward__branch_slot}>
        <figure>
          <img className={styles.branch_image} src={branch.imageUrl} />
        </figure>
        <div className={styles.reward__branch_heading}>{branch.title}</div>
      </div>
    </li>
  );
};

export default RewardCategory;
