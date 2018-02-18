import React from "react";
import styles from "../style/RewardListItem.scss";

const RewardListItem = ({ reward, onRewardSelect }) => {
  const defaultImgUrl = "https://www.deckshop.pro/img/card/InfernoD.png";
  return (
    <div onClick={() => onRewardSelect(reward)}>
      <div className={styles.reward_slot}>
        <figure>
          <img className={styles.reward_image} src={reward.imageUrl || defaultImgUrl} />
        </figure>
        <div className={styles.reward_heading}>{reward.title}</div>
      </div>
    </div>
  );
};

export default RewardListItem;
