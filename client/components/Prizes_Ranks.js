import React from "react";
import styles from "../style/RewardListItem.scss";

const Prizes_Ranks = ({ reward, onRewardSelect }) => {
  const defaultImgUrl = "https://www.deckshop.pro/img/card/InfernoD.png";
  return (
    <div onClick={() => onRewardSelect(reward)}>
      <figure>
        <img className={styles.reward_image} src={defaultImgUrl} />
      </figure>
    </div>
  );
};

export default Prizes_Ranks;
