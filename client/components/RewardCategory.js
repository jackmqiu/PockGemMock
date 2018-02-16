import React from "react";

const RewardCategory = ({ branch, onBranchSelect }) => {
  const imageUrl = branch.imageUrl;

  return (
    <li onClick={() => onCategorySelect(video)} className="reward-category">
      <div className="video-list media">
        <div className="media-left">
          <img className="branch-image" src={branch.imageUrl} />
        </div>
        <div className="media-body">
          <div className="media-heading">{branch.title}</div>
        </div>
      </div>
    </li>
  );
};

export default RewardCategory;
